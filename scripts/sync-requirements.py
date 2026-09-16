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
import argparse
from pathlib import Path

try:
    import tomllib  # Python 3.11+
except ImportError:
    import tomli as tomllib  # type: ignore


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Fail if requirements.txt is stale")
    args = parser.parse_args()
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

    expected = "".join(f"{dep}\n" for dep in deps)
    if args.check:
        if not requirements_path.exists() or requirements_path.read_text() != expected:
            parser.exit(1, "requirements.txt is stale; run uv run scripts/sync-requirements.py\n")
        print("requirements.txt matches pyproject.toml")
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
