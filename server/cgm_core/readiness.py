"""Shared environment readiness checks for local handoff operations."""

from __future__ import annotations

from collections.abc import Iterable
from typing import Any

from cgm_utils.async_helpers import run_sync


def _safe_list(value: Any) -> list[Any]:
    if value is None:
        return []
    if isinstance(value, dict):
        return list(value.values())
    if isinstance(value, list):
        return value
    if isinstance(value, (tuple, set)):
        return list(value)
    if isinstance(value, Iterable) and not isinstance(value, str):
        try:
            return list(value)
        except TypeError:
            return []
    return []


def _safe_scalar(value: Any) -> Any:
    if isinstance(value, str | int | float | bool) or value is None:
        return value
    return None


def _safe_str(value: Any) -> str | None:
    return value if isinstance(value, str) and value else None


def _node_criticality(node: Any) -> str:
    return "optional" if getattr(node, "criticality", None) == "optional" else "required"


def _node_is_required(node: Any) -> bool:
    return _node_criticality(node) == "required"


def _node_has_portable_provenance(node: Any) -> bool:
    """Return whether a tracked custom node can be reconstructed elsewhere."""
    source = (getattr(node, "source", None) or "unknown").lower()
    version = getattr(node, "version", None)
    repository = getattr(node, "repository", None)
    registry_id = getattr(node, "registry_id", None)
    pinned_commit = getattr(node, "pinned_commit", None)

    if source == "registry":
        return bool(registry_id and version and version != "dev")
    if source == "git":
        return bool(repository and version and version != "dev")
    if source == "development":
        return bool(repository and pinned_commit)

    return False


def _node_provenance_reason(node: Any) -> str:
    source = (getattr(node, "source", None) or "unknown").lower()
    if source == "registry":
        return "Registry node is missing a registry package id or pinned version."
    if source == "git":
        return "Git node is missing a repository URL or pinned commit/version."
    if source == "development":
        return "Development node is missing portable git repository and pinned commit metadata."
    return "Node source is unknown."


def _collect_model_source_warnings(env) -> list[dict]:
    pyproject = getattr(env, "pyproject", None)
    models_manager = getattr(pyproject, "models", None)
    workflows_manager = getattr(pyproject, "workflows", None)
    if not models_manager or not workflows_manager:
        return []

    models = _safe_list(models_manager.get_all())
    models_without_sources = [
        model
        for model in models
        if not _model_has_sources(env, model)
    ]
    if not models_without_sources:
        return []

    warnings_by_key: dict[str, dict] = {}
    models_by_hash = {
        getattr(model, "hash", None): model
        for model in models_without_sources
        if getattr(model, "hash", None)
    }
    models_by_filename = {
        getattr(model, "filename", None): model
        for model in models_without_sources
        if getattr(model, "filename", None)
    }

    get_workflows = getattr(workflows_manager, "get_all_with_resolutions", None)
    workflow_map = get_workflows() if callable(get_workflows) else {}
    workflow_names = list(workflow_map.keys()) if isinstance(workflow_map, dict) else []
    for workflow_name in workflow_names:
        get_workflow_models = getattr(workflows_manager, "get_workflow_models", None)
        workflow_models = _safe_list(
            get_workflow_models(workflow_name) if callable(get_workflow_models) else []
        )
        for workflow_model in workflow_models:
            model_hash = getattr(workflow_model, "hash", None)
            filename = getattr(workflow_model, "filename", None)
            model_data = models_by_hash.get(model_hash) or models_by_filename.get(filename)
            if model_data is None:
                continue

            key = _safe_str(getattr(model_data, "hash", None)) or _safe_str(
                getattr(model_data, "filename", None)
            )
            if not key:
                continue

            warning = warnings_by_key.setdefault(
                key,
                {
                    "filename": _safe_str(getattr(model_data, "filename", None))
                    or _safe_str(filename)
                    or "unknown",
                    "hash": _safe_str(getattr(model_data, "hash", None)),
                    "criticality": _safe_str(getattr(model_data, "criticality", None))
                    or "required",
                    "workflows": [],
                },
            )
            warning["workflows"].append(workflow_name)

    # Include unreferenced manifest models too; they still affect reproducibility
    # if the environment is shared as a whole.
    for model_data in models_without_sources:
        key = _safe_str(getattr(model_data, "hash", None)) or _safe_str(
            getattr(model_data, "filename", None)
        )
        if not key or key in warnings_by_key:
            continue
        warnings_by_key[key] = {
            "filename": _safe_str(getattr(model_data, "filename", None)) or "unknown",
            "hash": _safe_str(getattr(model_data, "hash", None)),
            "criticality": _safe_str(getattr(model_data, "criticality", None)) or "required",
            "workflows": [],
        }

    return list(warnings_by_key.values())


def _model_has_sources(env, model: Any) -> bool:
    if getattr(model, "sources", None):
        return True

    model_hash = _safe_str(getattr(model, "hash", None))
    if not model_hash:
        return False

    model_repository = getattr(getattr(env, "workspace", None), "model_repository", None)
    get_sources = getattr(model_repository, "get_sources", None)
    if not callable(get_sources):
        return False

    try:
        return bool(_safe_list(get_sources(model_hash)))
    except Exception:
        return False


def _collect_node_provenance_warnings(env) -> list[dict]:
    nodes_manager = getattr(getattr(env, "pyproject", None), "nodes", None)
    if not nodes_manager:
        return []

    nodes = _safe_list(nodes_manager.get_existing())
    warnings = []
    for node in nodes:
        if not _node_is_required(node):
            continue
        if _node_has_portable_provenance(node):
            continue
        warnings.append(
            {
                "name": _safe_str(getattr(node, "name", None))
                or _safe_str(getattr(node, "registry_id", None))
                or "unknown",
                "source": _safe_str(getattr(node, "source", None)) or "unknown",
                "criticality": _node_criticality(node),
                "registry_id": _safe_scalar(getattr(node, "registry_id", None)),
                "repository": _safe_scalar(getattr(node, "repository", None)),
                "version": _safe_scalar(getattr(node, "version", None)),
                "pinned_commit": _safe_scalar(getattr(node, "pinned_commit", None)),
                "reason": _node_provenance_reason(node),
            }
        )
    return warnings


async def build_environment_readiness(env, *, include_blocking: bool = True) -> dict:
    """Validate local environment handoff readiness.

    Export and git push are both local exits from the managed environment. This
    shared validator keeps their reproducibility warnings aligned while allowing
    each caller to decide which hard blocks it also wants to enforce.
    """
    blocking_issues = []
    warnings = {
        "models_without_sources": [],
        "nodes_without_provenance": [],
    }

    if include_blocking:
        status = await run_sync(env.workflow_manager.get_workflow_status)
        if status.sync_status.has_changes:
            uncommitted = (
                list(status.sync_status.new)
                + list(status.sync_status.modified)
                + list(status.sync_status.deleted)
            )
            blocking_issues.append(
                {
                    "type": "uncommitted_workflows",
                    "message": "Cannot export with uncommitted workflow changes",
                    "details": uncommitted,
                }
            )

        has_git_changes = await run_sync(env.git_manager.has_uncommitted_changes)
        if has_git_changes:
            blocking_issues.append(
                {
                    "type": "uncommitted_git_changes",
                    "message": "Cannot export with uncommitted git changes",
                    "details": [],
                }
            )

        if not status.is_commit_safe:
            blocking_issues.append(
                {
                    "type": "unresolved_issues",
                    "message": "Cannot export - workflows have unresolved issues",
                    "details": [],
                }
            )

    warnings["models_without_sources"] = _collect_model_source_warnings(env)
    warnings["nodes_without_provenance"] = _collect_node_provenance_warnings(env)

    return {
        "can_export": len(blocking_issues) == 0,
        "blocking_issues": blocking_issues,
        "warnings": warnings,
    }
