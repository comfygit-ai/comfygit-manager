"""Runtime custom-node import health helpers.

These helpers intentionally inspect only the live ComfyUI process state. They do
not parse ComfyUI logs and do not mutate environment manifests.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Iterable

IMPORT_FAILURE_GUIDANCE = (
    "Import failed during ComfyUI startup. Check the ComfyUI logs for the error message."
)


def _safe_sequence(value: Any) -> list:
    if isinstance(value, (list, tuple, set)):
        return list(value)
    return []


def _safe_str(value: Any) -> str | None:
    if isinstance(value, str):
        return value
    return None


def _normalize_node_criticality(value: Any) -> str:
    return value if value in ("required", "optional") else "required"


def _normalize_path_candidates(path: Path) -> set[str]:
    candidates = {str(path)}
    try:
        candidates.add(str(path.absolute()))
    except OSError:
        pass
    try:
        candidates.add(str(path.resolve(strict=False)))
    except OSError:
        pass
    return candidates


def _build_workflow_usage_map(status: Any | None) -> dict[str, list[str]]:
    usage_map: dict[str, list[str]] = {}
    if status is None:
        return usage_map

    workflow_status = getattr(status, "workflow", None)
    analyzed_workflows = _safe_sequence(getattr(workflow_status, "analyzed_workflows", None))
    for wf in analyzed_workflows:
        resolution = getattr(wf, "resolution", None)
        for resolved_node in _safe_sequence(getattr(resolution, "nodes_resolved", None)):
            package_id = _safe_str(getattr(resolved_node, "package_id", None))
            if not package_id:
                continue
            workflows = usage_map.setdefault(package_id, [])
            if wf.name not in workflows:
                workflows.append(wf.name)
    return usage_map


@dataclass(frozen=True)
class LoadedCustomNodeRegistry:
    """ComfyUI's in-process registry of successfully loaded custom nodes."""

    available: bool
    module_names: set[str] = field(default_factory=set)
    module_dirs: set[str] = field(default_factory=set)


@dataclass(frozen=True)
class RuntimeImportFailure:
    """A tracked installed custom node that did not load in the live runtime."""

    name: str
    registry_id: str | None = None
    module_name: str | None = None
    module_path: str | None = None
    criticality: str = "required"
    used_in_workflows: list[str] = field(default_factory=list)

    def to_dict(self) -> dict[str, Any]:
        return {
            "name": self.name,
            "registry_id": self.registry_id,
            "module_name": self.module_name,
            "module_path": self.module_path,
            "criticality": self.criticality,
            "used_in_workflows": list(self.used_in_workflows),
            "status": "failed",
            "message": "Import failed",
            "guidance": IMPORT_FAILURE_GUIDANCE,
        }

    def to_runtime_import_dict(self) -> dict[str, Any]:
        return {
            "status": "failed",
            "message": "Import failed",
            "guidance": IMPORT_FAILURE_GUIDANCE,
            "module_name": self.module_name,
            "module_path": self.module_path,
        }

    def to_readiness_warning(self) -> dict[str, Any]:
        return {
            "name": self.name,
            "registry_id": self.registry_id,
            "criticality": self.criticality,
            "used_in_workflows": list(self.used_in_workflows),
            "reason": IMPORT_FAILURE_GUIDANCE,
        }


@dataclass(frozen=True)
class RuntimeImportReport:
    """Live runtime custom-node import report."""

    available: bool
    failures: list[RuntimeImportFailure] = field(default_factory=list)

    @property
    def failed_count(self) -> int:
        return len(self.failures)

    def failures_by_name(self) -> dict[str, RuntimeImportFailure]:
        failures: dict[str, RuntimeImportFailure] = {}
        for failure in self.failures:
            failures[failure.name] = failure
            if failure.registry_id:
                failures[failure.registry_id] = failure
        return failures

    def to_summary_dict(self) -> dict[str, Any]:
        return {
            "available": self.available,
            "custom_node_import_failures": [
                failure.to_dict() for failure in self.failures
            ],
            "custom_node_import_failure_count": self.failed_count,
        }


def get_loaded_custom_node_registry() -> LoadedCustomNodeRegistry:
    """Read ComfyUI's successful custom-node import registry from this process."""
    try:
        import nodes as comfy_nodes  # type: ignore[import-not-found]
    except Exception:
        return LoadedCustomNodeRegistry(available=False)

    loaded_module_dirs = getattr(comfy_nodes, "LOADED_MODULE_DIRS", None)
    if not isinstance(loaded_module_dirs, dict):
        return LoadedCustomNodeRegistry(available=False)

    module_names: set[str] = set()
    module_dirs: set[str] = set()
    for raw_name, raw_path in loaded_module_dirs.items():
        name = str(raw_name)
        module_names.add(name)
        try:
            module_dirs.update(_normalize_path_candidates(Path(str(raw_path))))
        except TypeError:
            continue

    return LoadedCustomNodeRegistry(
        available=True,
        module_names=module_names,
        module_dirs=module_dirs,
    )


def _node_usage(node: Any, usage_map: dict[str, list[str]]) -> list[str]:
    keys = [
        _safe_str(getattr(node, "registry_id", None)),
        _safe_str(getattr(node, "name", None)),
    ]
    usage: list[str] = []
    for key in keys:
        if not key:
            continue
        for workflow_name in usage_map.get(key, []):
            if workflow_name not in usage:
                usage.append(workflow_name)
    return usage


def _node_is_loaded(node: Any, node_path: Path, registry: LoadedCustomNodeRegistry) -> bool:
    candidate_names = {
        value
        for value in (
            _safe_str(getattr(node, "name", None)),
            _safe_str(getattr(node, "registry_id", None)),
            node_path.name,
        )
        if value
    }
    if registry.module_names.intersection(candidate_names):
        return True

    return bool(registry.module_dirs.intersection(_normalize_path_candidates(node_path)))


def collect_runtime_import_report(
    env: Any,
    *,
    nodes: Iterable[Any] | None = None,
    status: Any | None = None,
) -> RuntimeImportReport:
    """Collect non-blocking import failures from the live ComfyUI process.

    If ComfyUI's loaded-module registry is unavailable, return an available=False
    empty report instead of guessing from filesystem state.
    """
    registry = get_loaded_custom_node_registry()
    if not registry.available:
        return RuntimeImportReport(available=False)

    custom_nodes_path = getattr(env, "custom_nodes_path", None)
    if custom_nodes_path is None:
        return RuntimeImportReport(available=True)

    custom_nodes_path = Path(custom_nodes_path)
    node_list = list(nodes) if nodes is not None else list(env.pyproject.nodes.get_existing().values())
    usage_map = _build_workflow_usage_map(status)

    comparison = getattr(status, "comparison", None)
    missing_nodes = set(_safe_sequence(getattr(comparison, "missing_nodes", None)))

    failures: list[RuntimeImportFailure] = []
    for node in node_list:
        node_name = _safe_str(getattr(node, "name", None))
        if not node_name:
            continue

        registry_id = _safe_str(getattr(node, "registry_id", None))
        if node_name in missing_nodes or (registry_id and registry_id in missing_nodes):
            continue

        node_path = custom_nodes_path / node_name
        if not node_path.exists() or node_path.name.endswith(".disabled"):
            continue

        if _node_is_loaded(node, node_path, registry):
            continue

        failures.append(
            RuntimeImportFailure(
                name=node_name,
                registry_id=registry_id,
                module_name=node_path.name,
                module_path=str(node_path),
                criticality=_normalize_node_criticality(getattr(node, "criticality", None)),
                used_in_workflows=_node_usage(node, usage_map),
            )
        )

    return RuntimeImportReport(available=True, failures=failures)


def build_loaded_runtime_import_payload(node: Any, module_path: Path | None = None) -> dict[str, Any]:
    """Return the positive node runtime-import payload for API consumers."""
    return {
        "status": "loaded",
        "message": "Loaded",
        "guidance": None,
        "module_name": _safe_str(getattr(node, "name", None)),
        "module_path": str(module_path) if module_path is not None else None,
    }
