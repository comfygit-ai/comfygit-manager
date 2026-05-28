#!/usr/bin/env python3
"""Add temporary uv sources for unreleased ComfyGit package versions in CI."""

from __future__ import annotations

from pathlib import Path
from urllib.error import HTTPError
from urllib.request import urlopen


ROOT = Path(__file__).resolve().parent.parent
PYPROJECT = ROOT / "pyproject.toml"
SOURCE_HEADER = "[tool.uv.sources]"
CORE_PACKAGE = "comfygit-core"
STUDIO_PACKAGE = "comfygit-studio"
CORE_REPO = "https://github.com/comfygit-ai/comfygit.git"


def _pinned_version(package: str) -> str:
    for line in PYPROJECT.read_text().splitlines():
        dependency = line.strip().strip('",')
        if dependency.startswith(f"{package}=="):
            return dependency.split("==", 1)[1]
    raise RuntimeError(f"{package} pin not found in {PYPROJECT}")


def _is_published(package: str, version: str) -> bool:
    url = f"https://pypi.org/pypi/{package}/{version}/json"
    try:
        with urlopen(url, timeout=10):
            return True
    except HTTPError as exc:
        if exc.code == 404:
            return False
        raise


def main() -> int:
    versions = {
        CORE_PACKAGE: _pinned_version(CORE_PACKAGE),
        STUDIO_PACKAGE: _pinned_version(STUDIO_PACKAGE),
    }
    unpublished = {
        package: version
        for package, version in versions.items()
        if not _is_published(package, version)
    }
    if not unpublished:
        print("All ComfyGit pins are published; using package index.")
        return 0

    content = PYPROJECT.read_text()
    if SOURCE_HEADER in content:
        print("ComfyGit source overrides already present.")
        return 0

    source_lines = []
    if CORE_PACKAGE in unpublished:
        source_lines.append(
            f'{CORE_PACKAGE} = {{ git = "{CORE_REPO}", branch = "dev", subdirectory = "packages/core" }}'
        )
    if STUDIO_PACKAGE in unpublished:
        source_lines.append(
            f'{STUDIO_PACKAGE} = {{ git = "{CORE_REPO}", branch = "dev", subdirectory = "packages/studio-runtime" }}'
        )

    PYPROJECT.write_text(
        content.rstrip()
        + "\n\n"
        + SOURCE_HEADER
        + "\n"
        + "\n".join(source_lines)
        + "\n"
    )
    pins = ", ".join(f"{package} {version}" for package, version in unpublished.items())
    print(f"{pins} unpublished; using {CORE_REPO}@dev.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
