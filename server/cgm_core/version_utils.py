"""Version utility helpers shared across backend modules."""


def get_latest_version(versions_dict: dict) -> str | None:
    """Return the latest version key from a mapping, or None when unavailable."""
    if not versions_dict or not hasattr(versions_dict, "keys"):
        return None

    try:
        versions = list(versions_dict.keys())
    except (TypeError, ValueError):
        return None

    if not versions:
        return None

    try:
        from packaging.version import InvalidVersion, Version

        return str(max(versions, key=lambda version: Version(str(version))))
    except (InvalidVersion, ValueError, TypeError):
        try:
            sorted_versions = sorted(versions, reverse=True)
        except TypeError:
            sorted_versions = sorted((str(version) for version in versions), reverse=True)
        return str(sorted_versions[0]) if sorted_versions else None
