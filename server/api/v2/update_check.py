"""Update check endpoint for comfygit-manager.

Source of truth: GitHub Releases (api.github.com) for comfygit-ai/comfygit-manager.
"""

from __future__ import annotations

import asyncio
import json
import re
import ssl
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from typing import Any

from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


_CACHE_TTL = timedelta(hours=24)
_cache_lock = asyncio.Lock()


@dataclass(frozen=True)
class _CachedLatestRelease:
    latest_version: str
    release_url: str | None
    changelog_summary: str | None
    checked_at: datetime


_cached_latest: _CachedLatestRelease | None = None


def _isoformat_z(dt: datetime) -> str:
    return dt.astimezone(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def _normalize_tag(tag: str | None) -> str | None:
    if not tag:
        return None
    t = tag.strip()
    if not t:
        return None
    if t[0] in ("v", "V"):
        t = t[1:]
    return t.strip() or None


_BOLD_MD_RE = re.compile(r"(\*\*|__)(.+?)\1")
_CODE_MD_RE = re.compile(r"`([^`]+)`")
_LINK_MD_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")


def _summarize_changelog(body: str | None, max_chars: int = 400, max_lines: int = 12) -> str | None:
    """Make a short, readable summary from a GitHub release body."""
    if not body:
        return None

    text = body.replace("\r\n", "\n").strip()
    if not text:
        return None

    # Light markdown cleanup (not perfect, but avoids ugly banners).
    text = _LINK_MD_RE.sub(r"\1", text)
    text = _BOLD_MD_RE.sub(r"\2", text)
    text = _CODE_MD_RE.sub(r"\1", text)

    # Keep first non-empty lines.
    lines: list[str] = []
    for line in (ln.strip() for ln in text.split("\n")):
        if not line:
            continue
        lines.append(line)
        if len(lines) >= max_lines:
            break

    if not lines:
        return None

    summary = "\n".join(lines)
    if len(summary) > max_chars:
        summary = summary[: max_chars - 1].rstrip() + "…"
    return summary


def _fetch_latest_release_from_github() -> dict[str, Any]:
    """Fetch latest release from GitHub API. Synchronous (run via run_sync)."""
    url = "https://api.github.com/repos/comfygit-ai/comfygit-manager/releases/latest"

    # Keep SSL verification enabled. GitHub is a stable endpoint.
    ctx = ssl.create_default_context()
    req = urllib.request.Request(url, headers={"User-Agent": "ComfyGit"})
    with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
        data = json.loads(resp.read().decode("utf-8"))

    tag_name = data.get("tag_name")
    html_url = data.get("html_url")
    body = data.get("body")

    latest_version = _normalize_tag(tag_name)
    if not latest_version:
        raise RuntimeError("GitHub latest release missing tag_name")

    return {
        "latest_version": latest_version,
        "release_url": html_url,
        "changelog_summary": _summarize_changelog(body),
    }


def _read_local_pyproject_version() -> str | None:
    """Read version from this custom node's pyproject.toml (repo root)."""
    try:
        from pathlib import Path

        pyproject = Path(__file__).parent.parent.parent.parent / "pyproject.toml"
        if not pyproject.exists():
            return None
        # Prefer tomllib when available (py3.11+), otherwise fall back to regex.
        try:
            import tomllib  # type: ignore

            with open(pyproject, "rb") as f:
                data = tomllib.load(f)
            return data.get("project", {}).get("version")
        except Exception:
            text = pyproject.read_text(encoding="utf-8", errors="ignore")
            m = re.search(r'^\s*version\s*=\s*"([^"]+)"\s*$', text, flags=re.MULTILINE)
            return m.group(1) if m else None
    except Exception:
        return None


def _compare_versions(current_version: str | None, latest_version: str | None) -> bool:
    """Return True if latest > current, with safe fallbacks."""
    if not current_version or not latest_version:
        return False
    if "dev" in current_version.lower():
        return False

    try:
        from packaging.version import InvalidVersion, Version

        try:
            return Version(latest_version) > Version(current_version)
        except InvalidVersion:
            return latest_version != current_version
    except Exception:
        # If packaging isn't available for some reason, fall back to strict inequality.
        return latest_version != current_version


async def _get_cached_latest_release() -> _CachedLatestRelease | None:
    global _cached_latest

    async with _cache_lock:
        now = datetime.now(timezone.utc)

        if _cached_latest and (now - _cached_latest.checked_at) < _CACHE_TTL:
            return _cached_latest

        try:
            latest = await run_sync(_fetch_latest_release_from_github)
            _cached_latest = _CachedLatestRelease(
                latest_version=latest["latest_version"],
                release_url=latest.get("release_url"),
                changelog_summary=latest.get("changelog_summary"),
                checked_at=now,
            )
            return _cached_latest
        except Exception:
            # Fail silently. Frontend should never be blocked by update checks.
            return None


@routes.get("/v2/comfygit/update-check")
@requires_environment
async def update_check(request: web.Request, env) -> web.Response:
    """Return current manager version and latest GitHub release info (cached)."""
    current_version: str | None = None
    try:
        status = await run_sync(env.get_manager_status)
        current_version = getattr(status, "current_version", None)
    except Exception:
        current_version = None

    if not current_version or current_version in ("unknown", ""):
        current_version = await run_sync(_read_local_pyproject_version)

    cached = await _get_cached_latest_release()

    latest_version = cached.latest_version if cached else None
    release_url = cached.release_url if cached else None
    changelog_summary = cached.changelog_summary if cached else None
    checked_at = _isoformat_z(cached.checked_at) if cached else None

    update_available = _compare_versions(current_version, latest_version)

    return web.json_response(
        {
            "current_version": current_version,
            "latest_version": latest_version,
            "update_available": update_available,
            "release_url": release_url,
            "changelog_summary": changelog_summary,
            "checked_at": checked_at,
        }
    )
