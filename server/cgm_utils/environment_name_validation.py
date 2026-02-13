"""Shared environment name validation rules.

These rules mirror comfygit-core workspace validation.
"""

from __future__ import annotations

import re

ENV_NAME_PATTERN = re.compile(r"^[A-Za-z0-9]([A-Za-z0-9._-]*[A-Za-z0-9])?$")
MAX_ENV_NAME_LENGTH = 128
RESERVED_ENV_NAMES = {
    "workspace",
    "logs",
    "models",
    "input",
    "output",
    ".comfygit",
}


def validate_environment_name(name: str) -> tuple[bool, str | None]:
    """Validate environment name format and reserved names.

    Returns:
        (True, None) if valid, otherwise (False, error_message).
    """
    if not name:
        return False, "Name is required"

    if len(name) > MAX_ENV_NAME_LENGTH:
        return False, f"Name must be {MAX_ENV_NAME_LENGTH} characters or less"

    if name.lower() in RESERVED_ENV_NAMES:
        return False, (
            f"'{name}' is a reserved name. "
            "Choose another name."
        )

    if not ENV_NAME_PATTERN.match(name):
        return False, (
            "Name contains invalid characters. Use only letters, numbers, dots, "
            "hyphens, and underscores. Name must start and end with a letter or number."
        )

    return True, None
