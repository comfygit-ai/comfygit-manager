"""Helpers for surfacing active dependency overlays in Manager APIs."""

from __future__ import annotations

import logging
from collections.abc import Iterable
from typing import Any

logger = logging.getLogger(__name__)


def serialize_overlay_info(overlay: Any) -> dict[str, Any]:
    """Serialize a core OverlayInfo object for Manager API responses."""
    return {
        "name": str(getattr(overlay, "name", "")),
        "description": getattr(overlay, "description", None),
        "is_local": bool(getattr(overlay, "is_local", False)),
        "is_active": bool(getattr(overlay, "is_active", False)),
        "requires": list(getattr(overlay, "requires", []) or []),
        "is_stock": bool(getattr(overlay, "is_stock", False)),
    }


def serialize_active_overlays(env: Any) -> list[dict[str, Any]]:
    """Return active environment overlays without leaking core overlay objects."""
    list_overlays = getattr(env, "list_overlays", None)
    if not callable(list_overlays):
        return []

    try:
        overlays = list_overlays(active_only=True)
    except Exception as exc:
        logger.debug("Unable to read active overlays: %s", exc)
        return []

    if isinstance(overlays, (str, bytes)) or not isinstance(overlays, Iterable):
        return []

    return [
        serialized
        for overlay in overlays
        if (serialized := serialize_overlay_info(overlay)).get("name")
    ]


def active_overlay_names(env: Any) -> list[str]:
    """Return active overlay names for logs and compact payload fields."""
    return [overlay["name"] for overlay in serialize_active_overlays(env)]


def active_overlay_summary(env: Any) -> str:
    """Return a short human-readable active overlay summary for logs."""
    names = active_overlay_names(env)
    return ", ".join(names) if names else "none"
