#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = ["tomli"]
# ///
"""Sync requirements.txt from pyproject.toml dependencies.

This script extracts the main dependencies from pyproject.toml and writes
them to requirements.txt for ComfyUI compatibility.

Usage:
    uv run scripts/sync-requirements.py
"""
from pathlib import Path

try:
    import tomllib  # Python 3.11+
except ImportError:
    import tomli as tomllib  # type: ignore


def main():
    root = Path(__file__).parent.parent
    pyproject_path = root / "pyproject.toml"
    requirements_path = root / "requirements.txt"

    # Read pyproject.toml
    with open(pyproject_path, "rb") as f:
        data = tomllib.load(f)

    # Extract dependencies
    deps = data.get("project", {}).get("dependencies", [])

    if not deps:
        print("No dependencies found in pyproject.toml")
        return

    # Write requirements.txt
    with open(requirements_path, "w") as f:
        for dep in deps:
            f.write(f"{dep}\n")

    print(f"✓ Updated requirements.txt with {len(deps)} dependencies")
    for dep in deps:
        print(f"  - {dep}")


if __name__ == "__main__":
    main()
