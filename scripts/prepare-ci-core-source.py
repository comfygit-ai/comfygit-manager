#!/usr/bin/env python3
"""Add a temporary uv source for unreleased comfygit-core versions in CI."""

from __future__ import annotations

from pathlib import Path
from urllib.error import HTTPError
from urllib.request import urlopen


ROOT = Path(__file__).resolve().parent.parent
PYPROJECT = ROOT / "pyproject.toml"
SOURCE_HEADER = "[tool.uv.sources]"
CORE_PACKAGE = "comfygit-core"
CORE_REPO = "https://github.com/comfygit-ai/comfygit.git"


def _core_version() -> str:
    for line in PYPROJECT.read_text().splitlines():
        dependency = line.strip().strip('",')
        if dependency.startswith(f"{CORE_PACKAGE}=="):
            return dependency.split("==", 1)[1]
    raise RuntimeError(f"{CORE_PACKAGE} pin not found in {PYPROJECT}")


def _is_published(version: str) -> bool:
    url = f"https://pypi.org/pypi/{CORE_PACKAGE}/{version}/json"
    try:
        with urlopen(url, timeout=10):
            return True
    except HTTPError as exc:
        if exc.code == 404:
            return False
        raise


def main() -> int:
    version = _core_version()
    if _is_published(version):
        print(f"{CORE_PACKAGE} {version} is published; using package index.")
        return 0

    content = PYPROJECT.read_text()
    if SOURCE_HEADER in content:
        print(f"{CORE_PACKAGE} source override already present.")
        return 0

    PYPROJECT.write_text(
        content.rstrip()
        + "\n\n"
        + SOURCE_HEADER
        + "\n"
        + f'{CORE_PACKAGE} = {{ git = "{CORE_REPO}", branch = "dev", subdirectory = "packages/core" }}\n'
    )
    print(f"{CORE_PACKAGE} {version} is unpublished; using {CORE_REPO}@dev.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
