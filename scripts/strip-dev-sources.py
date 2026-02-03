#!/usr/bin/env python3
"""Strip and restore [tool.uv.sources] from pyproject.toml for clean commits.

Prevents local editable source overrides from being committed while allowing
developers to use them locally. Called by pre-commit and post-commit hooks.

Usage:
    python3 scripts/strip-dev-sources.py strip    # Backup & strip sources section
    python3 scripts/strip-dev-sources.py restore   # Restore from backup
"""
import sys
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PYPROJECT = ROOT / "pyproject.toml"
BACKUP = ROOT / ".git" / "pyproject-sources.bak"
SECTION_HEADER = "[tool.uv.sources]"


def has_dev_sources(content: str) -> bool:
    for line in content.splitlines():
        if line.strip() == SECTION_HEADER:
            return True
    return False


def strip_sources(content: str) -> str:
    """Remove [tool.uv.sources] section from TOML content, preserving everything else."""
    lines = content.split("\n")
    result = []
    skipping = False

    for line in lines:
        stripped = line.strip()

        if stripped == SECTION_HEADER:
            skipping = True
            # Remove trailing blank line(s) before section header
            while result and result[-1].strip() == "":
                result.pop()
            continue

        if skipping:
            # Next section header ends the skip
            if stripped.startswith("["):
                skipping = False
                result.append("")  # blank separator before next section
                result.append(line)
            continue

        result.append(line)

    text = "\n".join(result)
    # Ensure file ends with exactly one newline
    text = text.rstrip("\n") + "\n"
    return text


def cmd_strip() -> int:
    if not PYPROJECT.exists():
        return 0

    content = PYPROJECT.read_text()

    if not has_dev_sources(content):
        return 0

    # Backup original
    shutil.copy2(PYPROJECT, BACKUP)

    # Strip and write
    stripped = strip_sources(content)
    PYPROJECT.write_text(stripped)

    print("Stripped [tool.uv.sources] from pyproject.toml")
    return 0


def cmd_restore() -> int:
    if not BACKUP.exists():
        return 0

    shutil.copy2(BACKUP, PYPROJECT)
    BACKUP.unlink()

    print("Restored [tool.uv.sources] to pyproject.toml")
    return 0


if __name__ == "__main__":
    if len(sys.argv) != 2 or sys.argv[1] not in ("strip", "restore"):
        print(f"Usage: {sys.argv[0]} strip|restore", file=sys.stderr)
        sys.exit(1)

    sys.exit(cmd_strip() if sys.argv[1] == "strip" else cmd_restore())
