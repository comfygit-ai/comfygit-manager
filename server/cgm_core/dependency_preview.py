"""Helpers for dependency resolution preview responses."""

from __future__ import annotations

from typing import Any

from comfygit_core.models.exceptions import CDDependencyConflictError


REVIEWABLE_CONFLICT_KINDS = {"constraint_conflict", "resolution_conflict"}


def build_install_identifier(params: dict[str, Any]) -> str:
    """Build the same install identifier used by node installation."""
    package_id = params.get("id")
    version = params.get("selected_version") or params.get("version")
    repository = params.get("repository")
    install_source = params.get("install_source", "registry")

    if install_source == "git":
        if not repository:
            raise ValueError("install_source='git' requires a non-empty repository")
        return str(repository)

    if version and version != "latest":
        return f"{package_id}@{version}"

    return str(package_id)


def is_dependency_reviewable(exc: Exception) -> bool:
    """Return whether a failed install can usefully show a dependency diff."""
    if not isinstance(exc, CDDependencyConflictError):
        return False

    kind = getattr(getattr(exc, "context", None), "conflict_kind", None)
    return kind in REVIEWABLE_CONFLICT_KINDS


def serialize_dependency_preview(preview: Any) -> dict[str, Any]:
    """Serialize a core DependencyResolutionPreview for the Manager API."""
    changes = [
        {
            "name": change.name,
            "current": change.current,
            "proposed": change.proposed,
            "kind": change.kind,
        }
        for change in getattr(preview, "changes", ())
    ]

    return {
        "success": bool(getattr(preview, "success", False)),
        "node_name": getattr(preview, "node_name", ""),
        "requirements": list(getattr(preview, "requirements", ())),
        "changes": changes,
        "lockfile_changed": bool(getattr(preview, "lockfile_changed", False)),
        "error": getattr(preview, "error", None),
        "stderr": getattr(preview, "stderr", ""),
        "warnings": list(getattr(preview, "warnings", ())),
        "baseline_fingerprint": getattr(preview, "baseline_fingerprint", ""),
        "diff_fingerprint": getattr(preview, "diff_fingerprint", ""),
        "proposed_fingerprint": getattr(preview, "proposed_fingerprint", ""),
        "summary": {
            "added": sum(1 for change in changes if change["kind"] == "added"),
            "removed": sum(1 for change in changes if change["kind"] == "removed"),
            "upgraded": sum(1 for change in changes if change["kind"] == "upgraded"),
            "downgraded": sum(1 for change in changes if change["kind"] == "downgraded"),
            "changed": sum(1 for change in changes if change["kind"] == "changed"),
            "total": len(changes),
        },
    }


def dependency_review_response(identifier: str, exc: Exception) -> dict[str, Any] | None:
    """Return a dependency-review queue result when a failed install is reviewable."""
    if not is_dependency_reviewable(exc):
        return None

    context = getattr(exc, "context", None)
    return {
        "status_str": "dependency_review_required",
        "completed": True,
        "messages": [
            "Dependency review required before installing this node package."
        ],
        "dependency_review": {
            "identifier": identifier,
            "reason": str(exc),
            "conflict_kind": getattr(context, "conflict_kind", None),
            "conflict_descriptions": list(getattr(context, "conflict_descriptions", []) or []),
        },
    }
