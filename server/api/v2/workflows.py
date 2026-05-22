"""Workflow operations API."""
import asyncio
import json
import logging
from pathlib import Path

import xxhash
from aiohttp import web

from comfygit_core.assets import DownloadRequest
from comfygit_core.models import (
    BatchDownloadCallbacks,
    ManifestModel,
    ManifestWorkflowModel,
    ModelResolutionContext,
    NamedWorkflowContract,
    NodeResolutionContext,
    ResolvedModel,
    ResolvedNodePackage,
    Workflow,
    WorkflowContractInput,
    WorkflowContractOutput,
    WorkflowExecutionContract,
    WorkflowNodeWidgetRef,
)
from comfygit_core.workflow import AutoModelStrategy, AutoNodeStrategy, WorkflowDependencyParser

from cgm_core.decorators import requires_environment, logged_operation
from cgm_core.dependency_preview import dependency_review_response
from cgm_core.serializers import (
    serialize_workflow_contract_summary,
    serialize_workflow_details,
    serialize_workflow_execution_contract,
)
from cgm_core.version_utils import get_latest_version
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()
logger = logging.getLogger(__name__)


# =============================================================================
# Workflow Is-Saved Detection (hash-based comparison)
# =============================================================================

# Cache for disk workflow hashes (invalidated by file watcher)
_workflow_hash_cache: dict[str, str] = {}  # filename -> hash
_cache_valid: bool = False


def invalidate_workflow_hash_cache():
    """Called by file watcher when workflows change."""
    global _cache_valid
    _cache_valid = False


def _normalize_workflow(wf: dict) -> dict:
    """Strip volatile fields that don't affect workflow identity."""
    wf = wf.copy()
    if 'extra' in wf and isinstance(wf['extra'], dict):
        wf['extra'] = {k: v for k, v in wf['extra'].items() if k != 'ds'}
    return wf


def _get_workflow_hash(wf: dict) -> str:
    """Compute xxhash of normalized workflow JSON."""
    normalized = _normalize_workflow(wf)
    json_str = json.dumps(normalized, sort_keys=True, separators=(',', ':'))
    return xxhash.xxh64(json_str.encode()).hexdigest()


def _get_disk_workflow_hashes(workflows_path: Path) -> dict[str, str]:
    """Get hashes of all saved workflows, using cache if valid."""
    global _workflow_hash_cache, _cache_valid

    if _cache_valid:
        return _workflow_hash_cache

    _workflow_hash_cache = {}
    if workflows_path.exists():
        for wf_file in workflows_path.glob("**/*.json"):
            try:
                with open(wf_file) as f:
                    data = json.load(f)
                _workflow_hash_cache[wf_file.name] = _get_workflow_hash(data)
            except (json.JSONDecodeError, IOError):
                pass  # Skip invalid files

    _cache_valid = True
    return _workflow_hash_cache


def _safe_int_metadata(value) -> int | None:
    """Return JSON-safe integer metadata from registry fields."""
    if isinstance(value, bool) or not isinstance(value, int):
        return None
    return value


def _safe_str_metadata(value) -> str | None:
    """Return JSON-safe string metadata from registry fields."""
    return value if isinstance(value, str) else None


def _registry_installable_versions(package_data) -> list[str]:
    """Return registry versions with downloadable artifacts from mapping data."""
    versions = getattr(package_data, "versions", None)
    if not isinstance(versions, dict):
        return []

    installable = []
    for version_id, version_data in versions.items():
        if getattr(version_data, "deprecated", False):
            continue
        if not getattr(version_data, "download_url", None):
            continue
        installable.append(str(version_id))

    def sort_key(version: str):
        parts = []
        for part in version.replace("-", ".").split("."):
            if part.isdigit():
                parts.append((0, int(part)))
            else:
                parts.append((1, part))
        return parts

    return sorted(installable, key=sort_key, reverse=True)


@routes.post("/v2/comfygit/workflow/is-saved")
@requires_environment
async def check_workflow_saved(request: web.Request, env) -> web.Response:
    """Check if workflow JSON matches a saved workflow on disk."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    workflow_data = body.get("workflow")
    if not workflow_data or not isinstance(workflow_data, dict):
        return web.json_response({"error": "Missing workflow"}, status=400)

    incoming_hash = _get_workflow_hash(workflow_data)
    workflows_path = env.comfyui_path / "user" / "default" / "workflows"
    disk_hashes = _get_disk_workflow_hashes(workflows_path)

    for filename, disk_hash in disk_hashes.items():
        if disk_hash == incoming_hash:
            return web.json_response({"is_saved": True, "filename": filename})

    return web.json_response({"is_saved": False, "filename": None})


# =============================================================================
# Serialization Helpers for Interactive Resolution Wizard
# =============================================================================

def _serialize_resolved_node(
    node: ResolvedNodePackage,
    workflow_name: str,
    uninstalled_set: set = None,
    saved_choice: dict | None = None,
) -> dict:
    """Convert ResolvedNodePackage to frontend ResolvedNode format."""
    uninstalled_set = uninstalled_set or set()

    latest_version = get_latest_version(getattr(node.package_data, "versions", None))

    serialized = {
        "reference": {
            "node_type": node.node_type,
            "workflow": workflow_name
        },
        "package": {
            "package_id": node.package_id or "",
            "title": node.package_data.display_name if node.package_data else (node.package_id or node.node_type),
            "repository": node.package_data.repository if node.package_data else None,
            "latest_version": latest_version
        },
        "match_confidence": node.match_confidence,
        "match_type": node.match_type,
        "is_installed": node.package_id not in uninstalled_set,
        "is_optional": bool(getattr(node, "is_optional", False)),
    }
    if saved_choice:
        serialized["saved_choice"] = saved_choice
    return serialized


def _serialize_version_gated_node(node, workflow_name: str, node_guidance: dict[str, str] | None = None) -> dict:
    """Convert version-gated WorkflowNode to frontend format."""
    node_guidance = node_guidance or {}
    node_type = getattr(node, "type", None)
    return {
        "reference": {
            "node_type": node_type,
            "workflow": workflow_name,
            "node_id": getattr(node, "id", "")
        },
        "reason": "requires_newer_comfyui",
        "guidance": node_guidance.get(node_type),
    }


def _serialize_uninstallable_node(
    node: ResolvedNodePackage,
    workflow_name: str,
    node_guidance: dict[str, str] | None = None,
    saved_choice: dict | None = None,
) -> dict:
    """Convert uninstallable ResolvedNodePackage to frontend format."""
    node_guidance = node_guidance or {}
    latest_version = get_latest_version(getattr(node.package_data, "versions", None))
    serialized = {
        "reference": {
            "node_type": node.node_type,
            "workflow": workflow_name
        },
        "package": {
            "package_id": node.package_id,
            "title": node.package_data.display_name if node.package_data else node.package_id,
            "repository": node.package_data.repository if node.package_data else None,
            "latest_version": latest_version,
        },
        "match_confidence": node.match_confidence,
        "match_type": node.match_type,
        "is_installed": False,
        "reason": "no_installable_package_version",
        "guidance": node_guidance.get(node.node_type),
    }
    if saved_choice:
        serialized["saved_choice"] = saved_choice
    return serialized


def _serialize_unresolved_node(node, workflow_name: str, saved_choice: dict | None = None) -> dict:
    """Convert WorkflowNode to frontend UnresolvedNode format."""
    serialized = {
        "reference": {
            "node_type": node.type,
            "workflow": workflow_name,
            "node_id": node.id
        },
        "reason": "not_found_in_registry"
    }
    if saved_choice:
        serialized["saved_choice"] = saved_choice
    return serialized


def _serialize_ambiguous_node(
    options: list[ResolvedNodePackage],
    workflow_name: str,
    uninstalled_set: set = None,
    saved_choice: dict | None = None,
) -> dict:
    """Convert ambiguous node options to frontend AmbiguousNode format."""
    if not options:
        return None
    uninstalled_set = uninstalled_set or set()

    serialized = {
        "reference": {
            "node_type": options[0].node_type,
            "workflow": workflow_name
        },
        "options": [
            {
                "package": {
                    "package_id": opt.package_id,
                    "title": opt.package_data.display_name if opt.package_data else opt.package_id,
                    "repository": opt.package_data.repository if opt.package_data else None,
                    "latest_version": get_latest_version(getattr(opt.package_data, "versions", None))
                },
                "match_confidence": opt.match_confidence,
                "match_type": opt.match_type,
                "is_installed": opt.package_id not in uninstalled_set
            }
            for opt in options
        ]
    }
    if saved_choice:
        serialized["saved_choice"] = saved_choice
    return serialized


def _serialize_resolved_model(model: ResolvedModel) -> dict:
    """Convert ResolvedModel to frontend format."""
    # Build full file path for "open file location" functionality
    file_path = None
    if model.resolved_model:
        base_dir = getattr(model.resolved_model, 'base_directory', None)
        rel_path = getattr(model.resolved_model, 'relative_path', None)
        if base_dir and rel_path and isinstance(base_dir, str) and isinstance(rel_path, str):
            file_path = str(Path(base_dir) / rel_path)

    return {
        "reference": {
            "workflow": model.workflow,
            "node_id": model.reference.node_id,
            "node_type": model.reference.node_type,
            "widget_name": getattr(model.reference, 'widget_name', None),
            "widget_value": model.reference.widget_value
        },
        "model": {
            "filename": model.resolved_model.filename if model.resolved_model else None,
            "hash": model.resolved_model.hash if model.resolved_model else None,
            "size": model.resolved_model.file_size if model.resolved_model else 0,
            "category": model.resolved_model.category if model.resolved_model else "unknown",
            "relative_path": model.resolved_model.relative_path if model.resolved_model else None
        } if model.resolved_model else None,
        "match_confidence": model.match_confidence,
        "match_type": model.match_type,
        "needs_path_sync": model.needs_path_sync,
        "has_download_source": bool(model.model_source),
        "download_source": model.model_source,  # Include actual URL for download intents
        "target_path": str(model.target_path) if model.target_path else None,
        "is_optional": model.is_optional,
        # Category mismatch (blocking issue)
        "has_category_mismatch": getattr(model, 'has_category_mismatch', False) is True,
        "expected_categories": _safe_list(getattr(model, 'expected_categories', None)),
        "actual_category": _safe_str(getattr(model, 'actual_category', None)),
        "file_path": file_path,
    }


def _safe_list(value) -> list:
    """Safely convert value to list, handling None and non-iterables."""
    if value is None:
        return []
    try:
        return list(value)
    except (TypeError, ValueError):
        return []


def _safe_str(value) -> str | None:
    """Safely convert value to string, handling Mock objects."""
    if value is None:
        return None
    # Check if it looks like a real string (not a Mock)
    if isinstance(value, str):
        return value
    return None


def _safe_int(value) -> int:
    """Safely convert value to int, handling Mock objects."""
    if isinstance(value, int):
        return value
    try:
        return int(value)
    except (TypeError, ValueError):
        return 0


def _safe_number(value):
    """Safely convert value to int/float when numeric, otherwise return None."""
    if isinstance(value, bool):
        return None
    if isinstance(value, int | float):
        return value
    try:
        text = str(value).strip()
        if text == "":
            return None
        if "." in text:
            return float(text)
        return int(text)
    except (TypeError, ValueError):
        return None


def _safe_sequence(value) -> list:
    """Safely convert sequence-like values to a list."""
    if value is None:
        return []
    if isinstance(value, (list, tuple, set)):
        return list(value)
    return []


def _safe_dict(value) -> dict:
    """Safely convert value to a dict."""
    if isinstance(value, dict):
        return value
    return {}


def _workflow_manifest_models(env, workflow_name: str) -> list:
    """Return manifest models for a workflow, tolerating unavailable manifest data."""
    return list(env.get_workflow_manifest_models(workflow_name))


async def _invalidate_workflow_resolution_cache(env, workflow_name: str) -> None:
    """Invalidate cached workflow analysis after manifest-only workflow edits."""
    try:
        await run_sync(env.workflow_cache.invalidate, env.name, workflow_name)
    except Exception as exc:
        logger.debug("Unable to invalidate workflow cache for %s: %s", workflow_name, exc)


def _serialize_workflow_manifest_model(model) -> dict:
    """Serialize a workflow manifest model for mutation endpoint responses."""
    return {
        "filename": getattr(model, "filename", None),
        "hash": getattr(model, "hash", None),
        "category": getattr(model, "category", None),
        "criticality": getattr(model, "criticality", None),
        "status": getattr(model, "status", None),
        "relative_path": getattr(model, "relative_path", None),
        "declared_by": getattr(model, "declared_by", None),
    }


def _widget_value_at(widgets_values, index: int):
    """Return a widget value from ComfyUI list-style or dict-style widget data."""
    if isinstance(widgets_values, (list, tuple)):
        return widgets_values[index] if index < len(widgets_values) else None
    if isinstance(widgets_values, dict):
        if index in widgets_values:
            return widgets_values[index]
        return widgets_values.get(str(index))
    return None


def _iter_widget_values(widgets_values):
    """Yield stable widget index/value pairs for fallback contract context."""
    if isinstance(widgets_values, (list, tuple)):
        yield from enumerate(widgets_values)
        return
    if isinstance(widgets_values, dict):
        for key, value in widgets_values.items():
            try:
                yield int(key), value
            except (TypeError, ValueError):
                yield key, value


def _get_workflow_contract_context(env, workflow_name: str) -> dict | None:
    """Build lightweight contract-authoring context from the current workflow file."""
    try:
        workflow_path = env.workflow_manager.get_workflow_path(workflow_name)
    except FileNotFoundError:
        return None

    try:
        with open(workflow_path, encoding="utf-8") as f:
            workflow_data = json.load(f)
        workflow = Workflow.from_json(workflow_data)
    except Exception as e:
        logger.debug("Failed to load workflow contract context for '%s': %s", workflow_name, e)
        return None

    nodes = []
    for node in workflow.nodes.values():
        widget_candidates = []
        widget_idx = 0
        for input_def in node.inputs:
            if not input_def.widget:
                continue
            widget_candidates.append({
                "widget_idx": widget_idx,
                "name": input_def.name,
                "type": input_def.type,
                "value": _widget_value_at(node.widgets_values, widget_idx),
            })
            widget_idx += 1

        if not widget_candidates:
            for idx, value in _iter_widget_values(node.widgets_values):
                inferred_type = "number" if isinstance(value, int | float) else "string"
                widget_candidates.append({
                    "widget_idx": idx,
                    "name": f"widget_{idx}",
                    "type": inferred_type,
                    "value": value,
                })

        output_candidates = []
        for output_def in node.outputs:
            output_candidates.append({
                "slot_index": output_def.slot_index,
                "name": output_def.name,
                "type": output_def.type,
            })

        if not output_candidates and node.type in {"SaveImage", "PreviewImage"}:
            output_candidates.append({
                "slot_index": None,
                "name": "image",
                "type": "image",
            })

        nodes.append({
            "node_id": node.id,
            "node_type": node.type,
            "widget_inputs": widget_candidates,
            "outputs": output_candidates,
        })

    return {
        "workflow_name": workflow_name,
        "nodes": nodes,
    }


def _parse_execution_contract_payload(data: dict) -> WorkflowExecutionContract:
    """Parse manager JSON payload into a core workflow execution contract."""
    contracts_data = _safe_dict(data.get("contracts"))
    parsed_contracts: dict[str, NamedWorkflowContract] = {}

    for contract_name, contract_data in contracts_data.items():
        contract_dict = _safe_dict(contract_data)

        inputs = []
        for item in _safe_sequence(contract_dict.get("inputs")):
            item_dict = _safe_dict(item)
            inputs.append(WorkflowContractInput(
                name=item_dict["name"],
                type=item_dict["type"],
                node_id=item_dict["node_id"],
                required=bool(item_dict["required"]),
                display_name=_safe_str(item_dict.get("display_name")),
                widget_idx=item_dict.get("widget_idx"),
                field_key=_safe_str(item_dict.get("field_key")),
                api_node_id=item_dict.get("api_node_id"),
                api_field_key=_safe_str(item_dict.get("api_field_key")),
                default=item_dict.get("default"),
                min=_safe_number(item_dict.get("min")),
                max=_safe_number(item_dict.get("max")),
                enum_values=[str(value) for value in _safe_sequence(item_dict.get("enum_values"))],
                description=_safe_str(item_dict.get("description")),
            ))

        outputs = []
        for item in _safe_sequence(contract_dict.get("outputs")):
            item_dict = _safe_dict(item)
            outputs.append(WorkflowContractOutput(
                name=item_dict["name"],
                type=item_dict["type"],
                node_id=item_dict["node_id"],
                display_name=_safe_str(item_dict.get("display_name")),
                selector=_safe_str(item_dict.get("selector")),
                description=_safe_str(item_dict.get("description")),
            ))

        parsed_contracts[contract_name] = NamedWorkflowContract(
            display_name=_safe_str(contract_dict.get("display_name")),
            description=_safe_str(contract_dict.get("description")),
            inputs=inputs,
            outputs=outputs,
        )

    return WorkflowExecutionContract(
        version=_safe_int(data.get("version")) or 1,
        default_contract=_safe_str(data.get("default_contract")) or "default",
        contracts=parsed_contracts,
        api_prompt_file=_safe_str(data.get("api_prompt_file")),
        api_prompt_source=_safe_str(data.get("api_prompt_source")),
        api_prompt_generated_by=_safe_str(data.get("api_prompt_generated_by")),
        api_prompt_generated_at=_safe_str(data.get("api_prompt_generated_at")),
        comfyui_version=_safe_str(data.get("comfyui_version")),
        manager_version=_safe_str(data.get("manager_version")),
    )


def _get_package_aliases(workflow_manager) -> dict[str, str]:
    """Return package alias metadata when available."""
    resolver = getattr(workflow_manager, "global_node_resolver", None)
    repository = getattr(resolver, "repository", None)
    global_mappings = getattr(repository, "global_mappings", None)
    aliases = getattr(global_mappings, "package_aliases", None)
    return _safe_dict(aliases)


def _reconstruct_optional_node_buckets(env, dependencies, workflow_name: str) -> dict[str, list]:
    """Place saved optional node mappings back into their original resolution buckets."""
    custom_map = dict(env.get_workflow_custom_node_map(workflow_name))
    optional_node_types = {
        node_type for node_type, mapping in custom_map.items()
        if mapping is False
    }
    if not optional_node_types:
        return {"unresolved": [], "ambiguous": [], "uninstallable": [], "resolved": []}

    installed = env.list_manifest_nodes()
    resolver = env.workflow_manager.global_node_resolver
    node_context = NodeResolutionContext(
        installed_packages=installed,
        custom_mappings={
            node_type: mapping for node_type, mapping in custom_map.items()
            if mapping is not False
        },
        workflow_name=workflow_name,
        auto_select_ambiguous=True,
    )

    unique_nodes = {}
    for node in getattr(dependencies, "non_builtin_nodes", []) or []:
        if node.type not in optional_node_types:
            continue
        existing = unique_nodes.get(node.type)
        if existing is None or (node.properties.get("cnr_id") and not existing.properties.get("cnr_id")):
            unique_nodes[node.type] = node

    buckets = {"unresolved": [], "ambiguous": [], "uninstallable": [], "resolved": []}
    for node in unique_nodes.values():
        resolved_packages = resolver.resolve_single_node_with_context(node, node_context)
        if resolved_packages is None:
            buckets["unresolved"].append(node)
            continue

        if len(resolved_packages) == 1:
            candidate = resolved_packages[0]
            if candidate.is_manager_only_uninstallable:
                buckets["uninstallable"].append(candidate)
            else:
                buckets["resolved"].append(candidate)
            continue

        installable_candidates = [
            pkg for pkg in resolved_packages if not pkg.is_manager_only_uninstallable
        ]
        if len(installable_candidates) == 1:
            buckets["resolved"].append(installable_candidates[0])
        elif len(installable_candidates) > 1:
            buckets["ambiguous"].append(installable_candidates)
        else:
            selected = min(resolved_packages, key=lambda x: x.rank or 999)
            buckets["uninstallable"].append(selected)

    return buckets


def _collect_uninstallable_nodes_to_install(
    result,
    installed: dict,
    skipped_packages: set[str],
    node_choices: dict[str, dict],
) -> list[str]:
    """Collect uninstallable node package ids selected for install by user."""
    nodes_to_install: list[str] = []
    uninstallable_nodes = getattr(result, "nodes_uninstallable", []) or []

    for node in uninstallable_nodes:
        package_id = getattr(node, "package_id", None)
        if not package_id or package_id in installed or package_id in skipped_packages:
            continue

        node_type = getattr(node, "node_type", None)
        node_choice = node_choices.get(node_type, {})
        action = node_choice.get("action")

        if action == "install":
            # Explicit install choices carry package/version/source intent and are
            # collected separately. Avoid adding the package again without its
            # selected version.
            if node_choice.get("package_id"):
                continue
            nodes_to_install.append(package_id)
            continue

        if action in ("optional", "skip") or not node_choice:
            continue

        logger.warning(
            "Ignoring invalid uninstallable action '%s' for node_type '%s'; valid actions are 'install', 'optional', or 'skip'",
            action,
            node_type,
        )

    return nodes_to_install


def _explicit_registry_install_package_ids(node_choices: dict[str, dict]) -> set[str]:
    """Return package ids covered by explicit non-Git install choices."""
    package_ids: set[str] = set()

    for choice in node_choices.values():
        if not isinstance(choice, dict):
            continue
        if choice.get("action") != "install" or choice.get("install_source") == "git":
            continue
        package_id = choice.get("package_id")
        if package_id:
            package_ids.add(package_id)

    return package_ids


def _collect_explicit_nodes_to_install(
    installed: dict,
    skipped_packages: set[str],
    node_choices: dict[str, dict],
) -> list[str]:
    """Collect explicit registry/manual install choices that are not installed yet."""
    nodes_to_install: list[str] = []

    for choice in node_choices.values():
        if not isinstance(choice, dict):
            continue

        action = choice.get("action")
        if action != "install":
            continue
        if choice.get("install_source") == "git":
            continue

        package_id = choice.get("package_id")
        if not package_id or package_id in installed or package_id in skipped_packages:
            continue

        version = choice.get("version")
        if isinstance(version, str) and version and version != "latest":
            nodes_to_install.append(f"{package_id}@{version}")
        else:
            nodes_to_install.append(package_id)

    return nodes_to_install


async def _apply_explicit_node_mapping_choices(
    env,
    workflow_name: str,
    node_choices: dict[str, dict],
) -> dict[str, list]:
    """Persist explicit per-workflow node mapping choices before resolution."""
    custom_map = await run_sync(env.get_workflow_custom_node_map, workflow_name)
    before = dict(custom_map)

    changes = {
        "nodes_marked_optional": [],
        "nodes_optional_cleared": [],
        "nodes_mapped": [],
    }

    for node_type, choice in node_choices.items():
        if not isinstance(choice, dict):
            continue

        action = choice.get("action")
        if action in ("install", "map-installed"):
            package_id = choice.get("package_id")
            if not package_id or before.get(node_type) == package_id:
                continue
            await run_sync(
                env.pyproject.workflows.set_custom_node_mapping,
                workflow_name,
                node_type,
                package_id,
            )
            changes["nodes_mapped"].append({
                "node_type": node_type,
                "package_id": package_id,
            })
            continue

        if action == "optional":
            if before.get(node_type) is False:
                continue
            await run_sync(
                env.pyproject.workflows.set_custom_node_mapping,
                workflow_name,
                node_type,
                None,
            )
            changes["nodes_marked_optional"].append(node_type)
            continue

        if action == "skip" and node_type in before:
            removed = await run_sync(
                env.pyproject.workflows.remove_custom_node_mapping,
                workflow_name,
                node_type,
            )
            if removed:
                changes["nodes_optional_cleared"].append(node_type)

    return changes


def _serialize_unresolved_model(
    ref: WorkflowNodeWidgetRef,
    workflow_name: str,
    saved_choice: dict | None = None,
) -> dict:
    """Convert WorkflowNodeWidgetRef to frontend UnresolvedModel format."""
    serialized = {
        "reference": {
            "workflow": workflow_name,
            "node_id": ref.node_id,
            "node_type": ref.node_type,
            "widget_name": getattr(ref, 'widget_name', None),
            "widget_value": ref.widget_value
        },
        "reason": "not_found_in_index"
    }
    if saved_choice:
        serialized["saved_choice"] = saved_choice
    return serialized


def _serialize_saved_optional_model(manifest_model, ref: WorkflowNodeWidgetRef, workflow_name: str) -> dict:
    """Serialize a durable optional model decision as an editable model choice."""
    return {
        "reference": {
            "workflow": workflow_name,
            "node_id": ref.node_id,
            "node_type": ref.node_type,
            "widget_name": getattr(ref, 'widget_name', None),
            "widget_value": ref.widget_value,
        },
        "filename": manifest_model.filename,
        "reason": "saved_optional",
        "saved_choice": {"action": "optional"},
    }


def _model_ref_key(ref: WorkflowNodeWidgetRef) -> tuple[str, int | None, str]:
    return (
        str(getattr(ref, "node_id", "")),
        getattr(ref, "widget_index", None),
        str(getattr(ref, "widget_value", "")),
    )


def _reconstruct_saved_optional_models(env, workflow_name: str, result) -> list[dict]:
    """Return optional manifest model choices that should stay editable."""
    existing_refs = set()
    for model in list(getattr(result, "models_resolved", []) or []):
        existing_refs.add(_model_ref_key(model.reference))
    for ref in list(getattr(result, "models_unresolved", []) or []):
        existing_refs.add(_model_ref_key(ref))
    for options in list(getattr(result, "models_ambiguous", []) or []):
        for model in options:
            existing_refs.add(_model_ref_key(model.reference))

    saved_models = []
    for manifest_model in _workflow_manifest_models(env, workflow_name):
        if manifest_model.criticality != "optional":
            continue
        if manifest_model.sources:
            continue
        for ref in manifest_model.nodes:
            ref_key = _model_ref_key(ref)
            if ref_key in existing_refs:
                continue
            saved_models.append(_serialize_saved_optional_model(manifest_model, ref, workflow_name))
            existing_refs.add(ref_key)

    return saved_models


def _saved_optional_model_choice_map(env, workflow_name: str) -> dict[tuple[str, int | None, str], dict]:
    saved = {}
    for manifest_model in _workflow_manifest_models(env, workflow_name):
        if manifest_model.criticality != "optional":
            continue
        if manifest_model.sources:
            continue
        for ref in manifest_model.nodes:
            saved[_model_ref_key(ref)] = {"action": "optional"}
    return saved


def _serialize_ambiguous_model(options: list[ResolvedModel], saved_choice: dict | None = None) -> dict:
    """Convert ambiguous model options to frontend AmbiguousModel format."""
    if not options:
        return None
    ref = options[0].reference
    serialized = {
        "reference": {
            "workflow": options[0].workflow,
            "node_id": ref.node_id,
            "node_type": ref.node_type,
            "widget_name": getattr(ref, 'widget_name', None),
            "widget_value": ref.widget_value
        },
        "options": [
            {
                "model": {
                    "filename": opt.resolved_model.filename,
                    "hash": opt.resolved_model.hash,
                    "size": opt.resolved_model.file_size,
                    "category": opt.resolved_model.category,
                    "relative_path": opt.resolved_model.relative_path
                },
                "match_confidence": opt.match_confidence,
                "match_type": opt.match_type,
                "has_download_source": bool(opt.model_source)
            }
            for opt in options if opt.resolved_model
        ]
    }
    if saved_choice:
        serialized["saved_choice"] = saved_choice
    return serialized


# =============================================================================
# Panel Strategy Classes for Interactive Resolution
# =============================================================================

class PanelNodeStrategy:
    """Apply user's node choices from the panel wizard."""

    def __init__(self, choices: dict[str, dict]):
        """
        Args:
            choices: Dict mapping node_type to choice dict:
                {
                    "action": "install" | "optional" | "skip" | "manual" | "map-installed",
                    "package_id": str (for install/manual/map-installed),
                    "manual_url": str (for manual)
                }
        """
        self.choices = choices

    def resolve_unknown_node(
        self,
        node_type: str,
        possible: list[ResolvedNodePackage],
        context: NodeResolutionContext
    ) -> ResolvedNodePackage | None:
        choice = self.choices.get(node_type)

        if not choice or choice.get("action") == "skip":
            return None

        action = choice.get("action")

        if action == "optional":
            return ResolvedNodePackage(
                node_type=node_type,
                match_type="optional",
                package_id=None
            )

        if action in ("install", "manual", "map-installed"):
            package_id = choice.get("package_id") or choice.get("manual_url")
            if not package_id:
                return None

            # Find matching package from possible list if available
            for pkg in possible:
                if pkg.package_id == package_id:
                    return ResolvedNodePackage(
                        node_type=node_type,
                        package_id=package_id,
                        package_data=pkg.package_data,
                        match_type="user_confirmed",
                        match_confidence=1.0
                    )

            # User selected a package not in the suggestions (manual entry)
            return ResolvedNodePackage(
                node_type=node_type,
                package_id=package_id,
                package_data=None,
                match_type="manual",
                match_confidence=1.0
            )

        return None

    def confirm_node_install(self, package: ResolvedNodePackage) -> bool:
        return True


class PanelModelStrategy:
    """Apply user's model choices from the panel wizard."""

    def __init__(self, choices: dict[str, dict]):
        """
        Args:
            choices: Dict mapping filename to choice dict:
                {
                    "action": "download" | "select" | "optional" | "skip",
                    "url": str (for download),
                    "target_path": str (for download),
                    "selected_model": dict (for select)
                }
        """
        self.choices = choices

    def resolve_model(
        self,
        reference: WorkflowNodeWidgetRef,
        candidates: list[ResolvedModel],
        context: ModelResolutionContext
    ) -> ResolvedModel | None:
        # Use widget_value as the key (the filename reference in workflow)
        choice = self.choices.get(reference.widget_value)

        if not choice or choice.get("action") == "skip":
            return None

        action = choice.get("action")

        if action == "optional":
            return ResolvedModel(
                workflow=context.workflow_name,
                reference=reference,
                resolved_model=None,
                is_optional=True,
                match_type="optional_unresolved",
                match_confidence=1.0
            )

        if action == "select":
            selected = choice.get("selected_model")
            if not selected:
                return None

            # Find matching candidate
            for candidate in candidates:
                if (candidate.resolved_model and
                    candidate.resolved_model.filename == selected.get("filename")):
                    return ResolvedModel(
                        workflow=context.workflow_name,
                        reference=reference,
                        resolved_model=candidate.resolved_model,
                        is_optional=False,
                        match_type="user_confirmed",
                        match_confidence=1.0
                    )

            return None

        if action == "download":
            url = choice.get("url")
            target_path = choice.get("target_path")

            if not url:
                return None

            return ResolvedModel(
                workflow=context.workflow_name,
                reference=reference,
                resolved_model=None,
                model_source=url,
                is_optional=False,
                match_type="download_intent",
                target_path=Path(target_path) if target_path else None
            )

        return None


def _apply_explicit_model_choices_to_manifest(env, workflow_name: str, model_choices: dict[str, dict]) -> dict:
    """Apply explicit model choices that may not appear in fresh issue analysis."""
    changes = {
        "models_marked_optional": [],
        "model_download_intents_changed": [],
    }
    if not model_choices:
        return changes

    current_models = _workflow_manifest_models(env, workflow_name)

    updated_models = False
    for model in current_models:
        choice = model_choices.get(model.filename)
        if not choice:
            continue

        action = choice.get("action")
        if action == "optional":
            changed = (
                model.status != "unresolved"
                or model.criticality != "optional"
                or bool(model.sources)
                or model.relative_path is not None
                or model.hash is not None
            )
            model.status = "unresolved"
            model.criticality = "optional"
            model.sources = []
            model.relative_path = None
            model.hash = None
            if changed:
                changes["models_marked_optional"].append(model.filename)
                updated_models = True
            continue

        if action in ("skip", "cancel_download"):
            changed = (
                model.criticality == "optional"
                or bool(model.sources)
                or model.relative_path is not None
            )
            model.status = "unresolved"
            model.criticality = "required"
            model.sources = []
            model.relative_path = None
            model.hash = None
            if changed:
                changes["model_download_intents_changed"].append(model.filename)
                updated_models = True
            continue

        if action == "download":
            url = choice.get("url")
            if not url:
                continue
            target_path = choice.get("target_path")
            changed = (
                model.status != "unresolved"
                or model.criticality != "required"
                or model.sources != [url]
                or model.relative_path != target_path
                or model.hash is not None
            )
            model.status = "unresolved"
            model.criticality = "required"
            model.sources = [url]
            model.relative_path = target_path
            model.hash = None
            if changed:
                changes["model_download_intents_changed"].append(model.filename)
                updated_models = True
            continue

        if action == "select":
            selected = choice.get("selected_model") or {}
            selected_hash = selected.get("hash")
            if not selected_hash:
                continue
            changed = (
                model.status != "resolved"
                or model.criticality != "required"
                or model.hash != selected_hash
                or model.filename != selected.get("filename", model.filename)
            )
            model.status = "resolved"
            model.criticality = "required"
            model.hash = selected_hash
            model.filename = selected.get("filename", model.filename)
            model.category = selected.get("category", model.category)
            model.sources = []
            model.relative_path = None
            if changed:
                changes["model_download_intents_changed"].append(model.filename)
                updated_models = True

    if updated_models:
        try:
            env.pyproject.workflows.set_workflow_models(workflow_name, current_models)
        except Exception:
            logger.exception("Failed to write workflow model choices for '%s'", workflow_name)

    changes["models_marked_optional"] = list(dict.fromkeys(changes["models_marked_optional"]))
    changes["model_download_intents_changed"] = list(dict.fromkeys(changes["model_download_intents_changed"]))
    return changes


@routes.get("/v2/comfygit/workflows")
@requires_environment
async def get_workflows(request: web.Request, env) -> web.Response:
    """List all workflows with analysis.

    Query params:
        refresh: If "true", forces refresh of cached environment before listing.
                 This also syncs the model index to detect filesystem changes.
    """
    # Check if refresh is requested
    if request.query.get("refresh", "").lower() == "true":
        from comfygit_server import refresh_environment
        refresh_environment()
        # Re-get the environment after refresh
        from cgm_core.context import get_environment_from_request
        env = get_environment_from_request(request)
        if not env:
            return web.json_response({"error": "Failed to refresh environment"}, status=500)

        # Sync model index to detect filesystem changes (like deleted/added models)
        # This mirrors the CLI behavior where get_environment() auto-syncs
        if env.workspace:
            try:
                await run_sync(env.workspace.sync_model_directory)
            except Exception as e:
                # Don't fail the whole request if model sync fails
                # (e.g., if models directory is not configured)
                print(f"[ComfyGit] Warning: Model sync failed: {e}")

    status = await run_sync(env.status)

    workflows = []
    for wf in status.workflow.analyzed_workflows:
        contract = env.get_workflow_execution_contract(wf.name)
        contract_summary = serialize_workflow_contract_summary(contract)
        version_gated_count = len(_safe_sequence(getattr(wf.resolution, "nodes_version_gated", None)))
        uninstallable_count = len(_safe_sequence(getattr(wf.resolution, "nodes_uninstallable", None)))
        unresolved_nodes_count = len(_safe_sequence(getattr(wf.resolution, "nodes_unresolved", None)))
        issue_summary = _safe_str(getattr(wf, "issue_summary", None))

        workflow_data = {
            "name": wf.name,
            "status": "broken" if wf.has_issues else wf.sync_state,
            "missing_nodes": wf.uninstalled_count + unresolved_nodes_count,
            "version_gated_count": version_gated_count,
            "uninstallable_count": uninstallable_count,
            "missing_models": len(wf.resolution.models_unresolved) + len(wf.resolution.models_ambiguous),
            "pending_downloads": wf.download_intents_count,
            "sync_state": wf.sync_state,
            "has_path_sync_issues": wf.has_path_sync_issues,
            "models_needing_path_sync": wf.models_needing_path_sync_count,
            # Category mismatch (blocking issue)
            "has_category_mismatch_issues": getattr(wf, 'has_category_mismatch_issues', False) is True,
            "models_with_category_mismatch": _safe_int(getattr(wf, 'models_with_category_mismatch_count', 0)),
            "contract_summary": contract_summary,
        }
        if issue_summary:
            workflow_data["issue_summary"] = issue_summary

        workflows.append(workflow_data)

    return web.json_response(workflows)


@routes.get("/v2/comfygit/workflow/{name}/details")
@requires_environment
async def get_workflow_details(request: web.Request, env) -> web.Response:
    """Get detailed information about a specific workflow."""
    name = request.match_info["name"]

    status = await run_sync(env.status)

    # Find workflow in analyzed workflows
    workflow = next((w for w in status.workflow.analyzed_workflows if w.name == name), None)
    if not workflow:
        return web.json_response({"error": "Workflow not found"}, status=404)

    # Get criticality map from pyproject (filename -> criticality)
    criticality_map = {}
    manifest_models = _workflow_manifest_models(env, name)
    for model in manifest_models:
        criticality_map[model.filename] = model.criticality or "required"
        if getattr(model, "relative_path", None):
            criticality_map[model.relative_path] = model.criticality or "required"

    # Get set of available model filenames from the model index
    available_models = set()
    all_models = []
    try:
        all_models = env.workspace.list_models()
        for model in all_models:
            available_models.add(model.filename)
            if getattr(model, "relative_path", None):
                available_models.add(model.relative_path)
    except Exception:
        pass  # Fallback if model index unavailable

    contract = env.get_workflow_execution_contract(name)
    payload = serialize_workflow_details(
        workflow,
        name,
        criticality_map,
        available_models,
        manifest_models=manifest_models,
        indexed_models=all_models,
    )
    payload["contract_summary"] = serialize_workflow_contract_summary(contract)
    payload["execution_contract"] = serialize_workflow_execution_contract(contract)
    payload["contract_context"] = _get_workflow_contract_context(env, name)

    return web.json_response(payload)


@routes.get("/v2/comfygit/workflow/{name}/contract")
@requires_environment
async def get_workflow_contract(request: web.Request, env) -> web.Response:
    """Get the saved execution contract and authoring context for a workflow."""
    name = request.match_info["name"]

    contract = env.get_workflow_execution_contract(name)
    return web.json_response({
        "workflow": name,
        "contract_summary": serialize_workflow_contract_summary(contract),
        "execution_contract": serialize_workflow_execution_contract(contract),
        "contract_context": _get_workflow_contract_context(env, name),
    })


@routes.put("/v2/comfygit/workflow/{name}/contract")
@logged_operation("save workflow contract")
async def put_workflow_contract(request: web.Request, env) -> web.Response:
    """Create or replace the saved execution contract for a workflow."""
    name = request.match_info["name"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    api_prompt = body.get("api_prompt")
    if not isinstance(api_prompt, dict) or not api_prompt:
        return web.json_response({
            "error": (
                "Contract save requires a captured ComfyUI API prompt. "
                "Refresh ComfyUI and try saving the contract again."
            )
        }, status=400)

    try:
        contract = _parse_execution_contract_payload(body)
    except KeyError as e:
        return web.json_response({"error": f"Missing required field: {e.args[0]}"}, status=400)
    except Exception as e:
        return web.json_response({"error": f"Invalid execution contract payload: {e}"}, status=400)

    await run_sync(env.set_workflow_execution_contract, name, contract, api_prompt)

    return web.json_response({
        "status": "success",
        "workflow": name,
        "contract_summary": serialize_workflow_contract_summary(contract),
        "execution_contract": serialize_workflow_execution_contract(contract),
    })


@routes.delete("/v2/comfygit/workflow/{name}/contract")
@logged_operation("delete workflow contract")
async def delete_workflow_contract(request: web.Request, env) -> web.Response:
    """Delete the saved execution contract for a workflow."""
    name = request.match_info["name"]

    removed = await run_sync(env.remove_workflow_execution_contract, name)
    if not removed:
        return web.json_response({"error": "Workflow contract not found"}, status=404)

    return web.json_response({"status": "success", "workflow": name})


@routes.post("/v2/comfygit/workflow/{name}/model-importance")
@logged_operation("set model importance")
async def set_model_importance(request: web.Request, env) -> web.Response:
    """Update model importance/criticality for a workflow."""
    name = request.match_info["name"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    model = body.get("model")
    importance = body.get("importance")

    # Validate required fields
    if not model:
        return web.json_response({"error": "Missing 'model' field"}, status=400)
    if not importance:
        return web.json_response({"error": "Missing 'importance' field"}, status=400)

    # Validate importance value
    valid_values = ("required", "flexible", "optional")
    if importance not in valid_values:
        return web.json_response(
            {"error": f"Invalid importance value. Must be one of: {', '.join(valid_values)}"},
            status=400
        )

    # Call core library
    success = await run_sync(
        env.workflow_manager.update_model_criticality,
        name,
        model,
        importance
    )

    if not success:
        return web.json_response(
            {"error": f"Model '{model}' not found in workflow '{name}'"},
            status=404
        )

    return web.json_response({"status": "success"})


@routes.post("/v2/comfygit/workflow/{name}/models")
@logged_operation("add workflow model")
async def add_workflow_model(request: web.Request, env) -> web.Response:
    """Declare an indexed local model as a manual workflow dependency."""
    name = request.match_info["name"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    model_hash = body.get("hash") or body.get("model_hash")
    relative_path = body.get("relative_path") or body.get("path")
    criticality = body.get("criticality") or body.get("importance") or "required"

    if not model_hash and not relative_path:
        return web.json_response({"error": "Provide 'hash' or 'relative_path'"}, status=400)

    if criticality not in ("required", "flexible", "optional"):
        return web.json_response(
            {"error": "Invalid importance value. Must be one of: required, flexible, optional"},
            status=400
        )

    try:
        model = await run_sync(
            env.workflow_manager.add_existing_model_to_workflow,
            workflow_name=name,
            model_hash=model_hash,
            relative_path=relative_path,
            criticality=criticality,
        )
    except ValueError as exc:
        return web.json_response({"error": str(exc)}, status=400)

    await _invalidate_workflow_resolution_cache(env, name)

    return web.json_response({
        "status": "success",
        "workflow": name,
        "model": _serialize_workflow_manifest_model(model),
    })


@routes.delete("/v2/comfygit/workflow/{name}/models")
@logged_operation("remove workflow model")
async def remove_workflow_model(request: web.Request, env) -> web.Response:
    """Remove a manually declared workflow model dependency."""
    name = request.match_info["name"]

    try:
        body = await request.json()
    except Exception:
        body = {}

    model_hash = body.get("hash") or body.get("model_hash") or request.query.get("hash")
    relative_path = (
        body.get("relative_path")
        or body.get("path")
        or request.query.get("relative_path")
        or request.query.get("path")
    )

    if not model_hash and not relative_path:
        return web.json_response({"error": "Provide 'hash' or 'relative_path'"}, status=400)

    try:
        removed = await run_sync(
            env.workflow_manager.remove_manual_model_from_workflow,
            workflow_name=name,
            model_hash=model_hash,
            relative_path=relative_path,
        )
    except ValueError as exc:
        return web.json_response({"error": str(exc)}, status=400)

    if not removed:
        return web.json_response({"error": "Manual model not found"}, status=404)

    await _invalidate_workflow_resolution_cache(env, name)

    return web.json_response({"status": "success", "workflow": name})


@routes.post("/v2/comfygit/workflow/{name}/resolve")
@logged_operation("resolve workflow")
async def resolve_workflow(request: web.Request, env) -> web.Response:
    """Analyze workflow and create resolution plan."""
    name = request.match_info["name"]

    result = await run_sync(
        env.resolve_workflow,
        name,
        node_strategy=AutoNodeStrategy(),
        model_strategy=AutoModelStrategy(),
        fix=True
    )

    # Build resolution plan
    nodes_auto = []
    nodes_manual = []

    for node in result.nodes_resolved:
        nodes_auto.append({
            "name": node.package_id,
            "version": None,
            "source": node.package_data.repository if node.package_data else "unknown",
            "description": node.package_data.description if node.package_data else None
        })

    for node_type in result.nodes_unresolved:
        nodes_manual.append({
            "name": node_type,
            "reason": "No matching package found in registry"
        })

    models_auto = []
    models_manual = []

    for model in result.models_resolved:
        if model.model_source:
            models_auto.append({
                "filename": model.reference.widget_value,
                "url": model.model_source,
                "size": 0,
                "type": model.resolved_model.category if model.resolved_model else "unknown"
            })

    for model in result.models_unresolved:
        models_manual.append({
            "filename": model.reference.widget_value,
            "reason": "No matching model found in index"
        })

    for model in result.models_ambiguous:
        models_manual.append({
            "filename": model.reference.widget_value,
            "reason": "Multiple matching models found - manual selection needed"
        })

    # Estimate time and size
    estimated_time = len(nodes_auto) * 30 + len(models_auto) * 60
    estimated_size = len(models_auto) * 100

    return web.json_response({
        "workflow": name,
        "nodes": {
            "auto_installable": nodes_auto,
            "manual": nodes_manual
        },
        "models": {
            "auto_downloadable": models_auto,
            "manual": models_manual
        },
        "estimated_time": estimated_time,
        "estimated_size": estimated_size
    })


@routes.post("/v2/comfygit/workflow/{name}/install")
@logged_operation("install workflow deps")
async def install_workflow(request: web.Request, env) -> web.Response:
    """Install missing dependencies for a workflow.

    Optionally accepts a JSON body with 'packages' array to install specific packages.
    If not provided, installs all uninstalled packages for the workflow.
    """
    name = request.match_info["name"]

    try:
        # Check if specific packages were requested
        packages_to_install = None
        try:
            body = await request.json()
            packages_to_install = body.get("packages")
        except Exception:
            pass  # No body or invalid JSON - use default behavior

        if packages_to_install is not None:
            # Install only the requested packages
            uninstalled = packages_to_install
        else:
            # Get uninstalled nodes for workflow
            uninstalled = await run_sync(env.get_uninstalled_nodes, workflow_name=name)

        if not uninstalled:
            return web.json_response({
                "status": "success",
                "message": "All dependencies already installed",
                "nodes_installed": [],
                "failed": []
            })

        # Install each node, continuing on failure
        installed = []
        failed = []
        dependency_review_required = []
        for node_id in uninstalled:
            try:
                await run_sync(env.add_node, node_id)
                installed.append(node_id)
            except Exception as e:
                review_result = dependency_review_response(node_id, e)
                if review_result:
                    dependency_review_required.append({
                        "node_id": node_id,
                        "error": str(e),
                        "dependency_review": review_result.get("dependency_review"),
                    })
                    continue
                failed.append({"node_id": node_id, "error": str(e)})

        # Determine overall status
        if len(failed) == 0 and len(dependency_review_required) == 0:
            status = "success"
            message = f"Installed {len(installed)} node packages"
        elif len(installed) == 0 and len(dependency_review_required) == 0:
            status = "error"
            message = f"All {len(failed)} packages failed to install"
        else:
            status = "partial"
            blocked = len(failed) + len(dependency_review_required)
            message = f"Installed {len(installed)} packages, {blocked} need attention"

        return web.json_response({
            "status": status,
            "message": message,
            "nodes_installed": installed,
            "failed": failed,
            "dependency_review_required": dependency_review_required,
        })
    except Exception as e:
        return web.json_response({
            "status": "error",
            "message": str(e),
            "nodes_installed": [],
            "failed": []
        }, status=500)


# =============================================================================
# Interactive Resolution Wizard Endpoints
# =============================================================================

@routes.post("/v2/comfygit/workflow/{name}/analyze")
@logged_operation("analyze workflow")
async def analyze_workflow(request: web.Request, env) -> web.Response:
    """Analyze workflow for interactive resolution wizard.

    Uses workflow_manager.analyze_and_resolve_workflow directly to avoid
    triggering any pending downloads - we just want the analysis data.
    """
    name = request.match_info["name"]

    # Call analyze_and_resolve_workflow directly (NOT env.resolve_workflow)
    # This gives us analysis + resolution WITHOUT executing downloads
    dependencies, result = await run_sync(
        env.workflow_manager.analyze_and_resolve_workflow,
        name
    )

    # Get uninstalled nodes from environment status
    # This is more reliable than get_uninstalled_nodes() which may not find the workflow
    status = await run_sync(env.status)
    workflow_status = next(
        (wf for wf in status.workflow.analyzed_workflows if wf.name == name or wf.name == f"{name}.json"),
        None
    )
    uninstalled_set = set(workflow_status.uninstalled_nodes) if workflow_status else set()

    # Count node types that need their packages installed
    # (may be more than package count if one package provides multiple node types)
    nodes_needing_installation = sum(
        1 for n in result.nodes_resolved if n.package_id in uninstalled_set
    )

    # Count unique packages to install (for display purposes)
    packages_needing_installation = len(uninstalled_set)

    version_gated_nodes = _safe_sequence(getattr(result, "nodes_version_gated", None))
    uninstallable_nodes = _safe_sequence(getattr(result, "nodes_uninstallable", None))
    node_guidance = _safe_dict(getattr(result, "node_guidance", None))
    package_aliases = _get_package_aliases(env.workflow_manager)
    optional_buckets = _reconstruct_optional_node_buckets(env, dependencies, name)
    saved_optional_choice = {"action": "optional"}
    custom_node_map = dict(env.get_workflow_custom_node_map(name))
    resolved_nodes = [
        node for node in result.nodes_resolved
        if getattr(node, "is_optional", False) is not True
    ] + optional_buckets["resolved"]
    unresolved_nodes = list(result.nodes_unresolved) + optional_buckets["unresolved"]
    ambiguous_nodes = list(result.nodes_ambiguous) + optional_buckets["ambiguous"]
    uninstallable_nodes = uninstallable_nodes + optional_buckets["uninstallable"]

    # needs_user_input: user must make choices for unresolved/ambiguous items
    needs_user_input = bool(
        result.nodes_unresolved or result.nodes_ambiguous or
        result.models_unresolved or result.models_ambiguous
    )

    # Count download intents (both from pyproject and from node properties)
    download_intents_count = sum(
        1 for m in result.models_resolved
        if m.match_type in ("download_intent", "property_download_intent")
    )

    has_blocked_nodes = bool(version_gated_nodes)
    has_uninstallable = bool(uninstallable_nodes)

    # is_fully_resolved: workflow is ready to run (no user input needed AND all nodes installed AND no pending downloads)
    is_fully_resolved = (
        not needs_user_input
        and nodes_needing_installation == 0
        and download_intents_count == 0
        and not has_blocked_nodes
        and not has_uninstallable
    )

    saved_optional_model_choices = _saved_optional_model_choice_map(env, name)
    saved_optional_models = _reconstruct_saved_optional_models(env, name, result)

    # Transform to frontend format
    response = {
        "workflow": name,
        "nodes": {
            "resolved": [
                _serialize_resolved_node(
                    n,
                    name,
                    uninstalled_set,
                    {
                        "action": "map-installed",
                        "package_id": custom_node_map.get(n.node_type),
                    } if isinstance(custom_node_map.get(n.node_type), str) else None,
                )
                for n in resolved_nodes
            ],
            "unresolved": [
                _serialize_unresolved_node(
                    n,
                    name,
                    saved_optional_choice if n in optional_buckets["unresolved"] else None,
                )
                for n in unresolved_nodes
            ],
            "version_gated": [_serialize_version_gated_node(n, name, node_guidance) for n in version_gated_nodes],
            "uninstallable": [
                _serialize_uninstallable_node(
                    n,
                    name,
                    node_guidance,
                    saved_optional_choice if n in optional_buckets["uninstallable"] else None,
                )
                for n in uninstallable_nodes
            ],
            "ambiguous": [
                amb for amb in [
                    _serialize_ambiguous_node(
                        opts,
                        name,
                        uninstalled_set,
                        saved_optional_choice if opts in optional_buckets["ambiguous"] else None,
                    )
                    for opts in ambiguous_nodes
                ]
                if amb is not None
            ]
        },
        "models": {
            "resolved": [_serialize_resolved_model(m) for m in result.models_resolved],
            "unresolved": [
                _serialize_unresolved_model(
                    m,
                    name,
                    saved_optional_model_choices.get(_model_ref_key(m)),
                )
                for m in result.models_unresolved
            ],
            "saved_optional": saved_optional_models,
            "ambiguous": [
                amb for amb in [
                    _serialize_ambiguous_model(
                        opts,
                        saved_optional_model_choices.get(_model_ref_key(opts[0].reference)) if opts else None,
                    )
                    for opts in result.models_ambiguous
                ]
                if amb is not None
            ]
        },
        "package_aliases": package_aliases,
        "node_guidance": node_guidance,
        "stats": {
            "total_nodes": (
                len(resolved_nodes)
                + len(unresolved_nodes)
                + len(ambiguous_nodes)
                + len(version_gated_nodes)
                + len(uninstallable_nodes)
            ),
            "total_models": (
                len(result.models_resolved)
                + len(result.models_unresolved)
                + len(result.models_ambiguous)
                + len(saved_optional_models)
            ),
            "download_intents": download_intents_count,
            "nodes_needing_installation": nodes_needing_installation,  # Node types count
            "packages_needing_installation": packages_needing_installation,  # Unique packages count
            "has_blocked_nodes": has_blocked_nodes,
            "has_uninstallable": has_uninstallable,
            "needs_user_input": needs_user_input,
            "is_fully_resolved": is_fully_resolved,
            "models_with_category_mismatch": sum(1 for m in result.models_resolved if getattr(m, 'has_category_mismatch', False))
        }
    }

    return web.json_response(response)


@routes.post("/v2/comfygit/workflow/analyze-json")
@requires_environment
async def analyze_workflow_json(request: web.Request, env) -> web.Response:
    """Analyze workflow JSON directly without requiring file on disk.

    Used for analyzing workflows loaded in browser before save.
    Request body: { "workflow": <workflow_json_object>, "name": "optional_name" }
    """
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON body"}, status=400)

    workflow_data = body.get("workflow")
    workflow_name = body.get("name", "unsaved")

    if not workflow_data:
        return web.json_response({"error": "Missing workflow data"}, status=400)

    # Validate workflow_data is a dict (not a string or other type)
    if not isinstance(workflow_data, dict):
        return web.json_response(
            {"error": "Invalid workflow format: expected object"},
            status=400
        )

    try:
        # Parse workflow JSON into Workflow object
        workflow_obj = Workflow.from_json(workflow_data)

        # Analyze using the Workflow object directly (no temp file needed)
        parser = WorkflowDependencyParser(
            workflow=workflow_obj,
            workflow_name=workflow_name,
            cec_path=env.cec_path,
            builtin_versions_repository=getattr(env.workflow_manager, "builtin_versions_repository", None),
        )
        dependencies = parser.analyze_dependencies()

        # Use the same resolution logic as analyze_workflow
        result = await run_sync(
            env.workflow_manager.resolve_workflow,
            dependencies
        )
    except Exception as e:
        return web.json_response(
            {"error": f"Invalid workflow format: {e}"},
            status=400
        )

    # Determine uninstalled nodes (same logic as analyze_workflow lines 641-648)
    # For unsaved workflows, check against environment's installed packages
    installed_packages = set(env.list_manifest_nodes().keys())
    uninstalled_set = {
        n.package_id for n in result.nodes_resolved
        if n.package_id and n.package_id not in installed_packages
    }

    # Same stats calculation as analyze_workflow (lines 652-676)
    nodes_needing_installation = sum(
        1 for n in result.nodes_resolved if n.package_id in uninstalled_set
    )
    packages_needing_installation = len(uninstalled_set)
    version_gated_nodes = _safe_sequence(getattr(result, "nodes_version_gated", None))
    uninstallable_nodes = _safe_sequence(getattr(result, "nodes_uninstallable", None))
    node_guidance = _safe_dict(getattr(result, "node_guidance", None))
    package_aliases = _get_package_aliases(env.workflow_manager)
    needs_user_input = bool(
        result.nodes_unresolved or result.nodes_ambiguous or
        result.models_unresolved or result.models_ambiguous
    )
    download_intents_count = sum(
        1 for m in result.models_resolved
        if m.match_type in ("download_intent", "property_download_intent")
    )
    has_blocked_nodes = bool(version_gated_nodes)
    has_uninstallable = bool(uninstallable_nodes)
    is_fully_resolved = (
        not needs_user_input
        and nodes_needing_installation == 0
        and download_intents_count == 0
        and not has_blocked_nodes
        and not has_uninstallable
    )

    # Transform to frontend format (same structure as analyze_workflow)
    resolved_nodes = [
        _serialize_resolved_node(n, workflow_name, uninstalled_set)
        for n in result.nodes_resolved
    ]
    unresolved_nodes = [
        _serialize_unresolved_node(n, workflow_name)
        for n in result.nodes_unresolved
    ]
    version_gated_serialized = [
        _serialize_version_gated_node(n, workflow_name, node_guidance)
        for n in version_gated_nodes
    ]
    uninstallable_serialized = [
        _serialize_uninstallable_node(n, workflow_name, node_guidance)
        for n in uninstallable_nodes
    ]
    ambiguous_nodes = [
        amb for amb in [
            _serialize_ambiguous_node(opts, workflow_name, uninstalled_set)
            for opts in result.nodes_ambiguous
        ]
        if amb is not None
    ]
    resolved_models = [
        _serialize_resolved_model(m) for m in result.models_resolved
    ]
    unresolved_models = [
        _serialize_unresolved_model(m, workflow_name)
        for m in result.models_unresolved
    ]
    ambiguous_models = [
        amb for amb in [
            _serialize_ambiguous_model(opts)
            for opts in result.models_ambiguous
        ]
        if amb is not None
    ]

    total_nodes = (
        len(result.nodes_resolved)
        + len(result.nodes_unresolved)
        + len(result.nodes_ambiguous)
        + len(version_gated_nodes)
        + len(uninstallable_nodes)
    )
    total_models = (
        len(result.models_resolved)
        + len(result.models_unresolved)
        + len(result.models_ambiguous)
    )
    category_mismatch_count = sum(
        1 for m in result.models_resolved
        if getattr(m, 'has_category_mismatch', False)
    )

    response = {
        "workflow": workflow_name,
        "nodes": {
            "resolved": resolved_nodes,
            "unresolved": unresolved_nodes,
            "version_gated": version_gated_serialized,
            "uninstallable": uninstallable_serialized,
            "ambiguous": ambiguous_nodes,
        },
        "models": {
            "resolved": resolved_models,
            "unresolved": unresolved_models,
            "ambiguous": ambiguous_models,
        },
        "package_aliases": package_aliases,
        "node_guidance": node_guidance,
        "stats": {
            "total_nodes": total_nodes,
            "total_models": total_models,
            "download_intents": download_intents_count,
            "nodes_needing_installation": nodes_needing_installation,
            "packages_needing_installation": packages_needing_installation,
            "has_blocked_nodes": has_blocked_nodes,
            "has_uninstallable": has_uninstallable,
            "needs_user_input": needs_user_input,
            "is_fully_resolved": is_fully_resolved,
            "models_with_category_mismatch": category_mismatch_count,
        },
    }

    return web.json_response(response)


@routes.post("/v2/comfygit/workflow/search-nodes")
@requires_environment
async def search_nodes(request: web.Request, env) -> web.Response:
    """Search node registry for packages matching query."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON body"}, status=400)

    query = body.get("query", "")
    limit = body.get("limit", 10)

    if not query:
        return web.json_response({"results": [], "total": 0})

    # Get installed packages for marking
    installed = env.list_manifest_nodes()

    # Search using core library
    matches = await run_sync(
        env.workflow_manager.global_node_resolver.search_packages,
        query,
        installed,
        True,  # include_registry
        limit
    )

    # Normalize scores to 0.0-1.0 range for frontend display
    # Find max score for normalization (minimum 1.0 to avoid division issues)
    max_score = max((m.score for m in matches), default=1.0)
    max_score = max(max_score, 1.0)  # Ensure at least 1.0

    results = []
    for match in matches:
        package_data = match.package_data
        registry_versions = _registry_installable_versions(package_data)
        repository = _safe_str_metadata(getattr(package_data, "repository", None)) if package_data else None
        # Normalize: highest score becomes 1.0, others scale proportionally
        normalized_confidence = match.score / max_score
        results.append({
            "package_id": match.package_id,
            "display_name": _safe_str_metadata(getattr(package_data, "display_name", None)) if package_data else None,
            "match_confidence": normalized_confidence,
            "match_type": match.confidence,  # "high", "medium", "low"
            "description": _safe_str_metadata(getattr(package_data, "description", None)) if package_data else None,
            "repository": repository,
            "downloads": _safe_int_metadata(getattr(package_data, "downloads", None)) if package_data else None,
            "github_stars": _safe_int_metadata(getattr(package_data, "github_stars", None)) if package_data else None,
            "registry_versions": registry_versions,
            "registry_version": registry_versions[0] if registry_versions else None,
            "can_install_registry": bool(registry_versions),
            "can_install_git": bool(repository),
            "is_installed": match.package_id in installed
        })

    return web.json_response({
        "results": results,
        "total": len(results)
    })


@routes.post("/v2/comfygit/workflow/search-models")
@requires_environment
async def search_models(request: web.Request, env) -> web.Response:
    """Search workspace models matching query."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON body"}, status=400)

    query = body.get("query", "")
    limit = body.get("limit", 10)

    if not query:
        return web.json_response({"results": [], "total": 0})

    # Search using core library
    matches = await run_sync(
        env.workflow_manager.search_models,
        query,
        None,  # node_type filter
        limit
    )

    # Get global models for download source info
    global_models = {}
    try:
        for m in env.list_manifest_models().values():
            global_models[m.hash] = m
    except Exception:
        pass

    results = []
    for match in matches:
        model = match.model
        global_model = global_models.get(model.hash)
        has_source = bool(global_model and global_model.sources) if global_model else False

        results.append({
            "filename": model.filename,
            "hash": model.hash,
            "size": model.file_size,
            "category": model.category,
            "relative_path": model.relative_path,
            "has_download_source": has_source,
            "match_confidence": match.score
        })

    return web.json_response({
        "results": results,
        "total": len(results)
    })


@routes.post("/v2/comfygit/workflow/{name}/apply-resolution")
@logged_operation("apply resolution")
async def apply_resolution(request: web.Request, env) -> web.Response:
    """Apply user's resolution choices from the wizard.

    IMPORTANT: Does NOT execute downloads inline. Returns models_to_download
    for the frontend to queue in the async download manager.
    """
    name = request.match_info["name"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON body"}, status=400)

    node_choices = body.get("node_choices", {})
    model_choices = body.get("model_choices", {})
    skipped_packages = set(body.get("skipped_packages", []))

    # Create strategies from user choices
    node_strategy = PanelNodeStrategy(node_choices)
    model_strategy = PanelModelStrategy(model_choices)

    mapping_changes = await _apply_explicit_node_mapping_choices(
        env=env,
        workflow_name=name,
        node_choices=node_choices,
    )
    await run_sync(env.workflow_cache.invalidate, env.name, name)

    # Get current resolution state (does NOT execute downloads)
    _, result = await run_sync(
        env.workflow_manager.analyze_and_resolve_workflow,
        name
    )
    model_paths_to_sync = sum(
        1 for model in result.models_resolved
        if getattr(model, "needs_path_sync", False)
    )
    model_paths_synced = 0

    # Apply strategies to fix unresolved issues (writes to pyproject.toml)
    if result.has_issues:
        result = await run_sync(
            env.workflow_manager.fix_resolution,
            result,
            node_strategy,
            model_strategy
        )
        model_paths_synced = model_paths_to_sync
    elif model_paths_to_sync > 0:
        model_paths_synced = await run_sync(
            env.workflow_manager.update_workflow_model_paths,
            result
        )

    nodes_marked_optional = mapping_changes["nodes_marked_optional"]

    # Collect what needs to be installed (excluding user-skipped packages)
    nodes_to_install = []
    installed = env.list_manifest_nodes()
    explicit_registry_package_ids = _explicit_registry_install_package_ids(node_choices)
    for node in result.nodes_resolved:
        if node.package_id and node.match_type != "optional":
            if (
                node.package_id not in installed
                and node.package_id not in skipped_packages
                and node.package_id not in explicit_registry_package_ids
            ):
                nodes_to_install.append(node.package_id)

    nodes_to_install.extend(
        _collect_uninstallable_nodes_to_install(
            result=result,
            installed=installed,
            skipped_packages=skipped_packages,
            node_choices=node_choices,
        )
    )
    nodes_to_install.extend(
        _collect_explicit_nodes_to_install(
            installed=installed,
            skipped_packages=skipped_packages,
            node_choices=node_choices,
        )
    )
    nodes_to_install = list(dict.fromkeys(nodes_to_install))

    model_manifest_changes = _apply_explicit_model_choices_to_manifest(env, name, model_choices)

    # Write property_download_intent models to pyproject (they're in models_resolved, not processed by fix_resolution)
    try:
        existing_models = list(env.get_workflow_manifest_models(name))
        existing_filenames = {m.filename for m in existing_models if m.sources}

        for model in result.models_resolved:
            if model.match_type == "property_download_intent" and model.model_source:
                filename = model.reference.widget_value

                # Skip if already in pyproject with sources (avoid duplicates)
                if filename in existing_filenames:
                    continue

                # Check if user cancelled this download
                choice = model_choices.get(filename)
                if choice and choice.get("action") in ("skip", "cancel_download", "optional"):
                    continue

                # Use expected_categories from core library's node analysis
                category = model.expected_categories[0] if model.expected_categories else "models"

                # Use user's URL if they provided one, otherwise use model_source
                url = model.model_source
                target_path = str(model.target_path) if model.target_path else None
                if choice and choice.get("action") == "download" and choice.get("url"):
                    url = choice["url"]
                    if choice.get("target_path"):
                        target_path = choice["target_path"]

                manifest_model = ManifestWorkflowModel(
                    filename=filename,
                    category=category,
                    criticality="required",
                    status="unresolved",
                    nodes=[model.reference],
                    sources=[url],
                    relative_path=target_path
                )
                env.pyproject.workflows.add_workflow_model(name, manifest_model)
    except Exception:
        pass  # Continue even if write fails - downloads will still work

    # Get models directory for checking if files already exist
    models_dir = env.workspace.workspace_config_manager.get_models_directory()

    # Collect models that need downloading (download_intent/property_download_intent with model_source)
    # Skip models where user chose to cancel/optional, or file already exists
    models_to_download = []
    for model in result.models_resolved:
        if model.model_source and model.match_type in ("download_intent", "property_download_intent"):
            filename = model.reference.widget_value
            choice = model_choices.get(filename)

            # Check if user cancelled this download
            if choice and choice.get("action") in ("skip", "cancel_download", "optional"):
                continue  # User cancelled this download

            # Use user's URL if they provided a new one, otherwise use existing
            url = model.model_source
            target_path = str(model.target_path) if model.target_path else None
            if choice and choice.get("action") == "download" and choice.get("url"):
                url = choice["url"]
                if choice.get("target_path"):
                    target_path = choice["target_path"]

            # Skip if file already exists at target path
            if target_path and models_dir and (models_dir / target_path).exists():
                continue  # File already downloaded

            models_to_download.append({
                "filename": filename,
                "url": url,
                "size": 0,  # Unknown until download starts
                "target_path": target_path
            })

    # Also check pyproject.toml for any unresolved models with sources
    # (in case they weren't picked up from resolution result)
    try:
        for manifest_model in env.get_workflow_manifest_models(name):
            if manifest_model.status == "unresolved" and manifest_model.sources:
                sources = manifest_model.sources
                filename = manifest_model.filename
                rel_path = manifest_model.relative_path

                # Check if user cancelled this download
                choice = model_choices.get(filename)
                if choice and choice.get("action") in ("skip", "cancel_download", "optional"):
                    continue  # User cancelled this download

                # Skip if file already exists
                if rel_path and models_dir and (models_dir / rel_path).exists():
                    continue  # File already downloaded

                # Avoid duplicates in list
                if sources and not any(m["filename"] == filename for m in models_to_download):
                    models_to_download.append({
                        "filename": filename,
                        "url": sources[0],
                        "size": 0,
                        "target_path": rel_path
                    })
    except Exception:
        pass  # Fallback if pyproject read fails

    # Estimate time (rough: 30s per node, 120s per model)
    estimated_time = len(nodes_to_install) * 30 + len(models_to_download) * 120

    return web.json_response({
        "status": "success",
        "nodes_to_install": nodes_to_install,
        "nodes_marked_optional": nodes_marked_optional,
        "nodes_optional_cleared": mapping_changes["nodes_optional_cleared"],
        "nodes_mapped": mapping_changes["nodes_mapped"],
        "models_marked_optional": model_manifest_changes["models_marked_optional"],
        "model_download_intents_changed": model_manifest_changes["model_download_intents_changed"],
        "model_paths_synced": model_paths_synced,
        "models_to_download": models_to_download,
        "estimated_time_seconds": estimated_time
    })


@routes.post("/v2/comfygit/workflow/{name}/apply-resolution-stream")
@logged_operation("apply resolution stream")
async def apply_resolution_stream(request: web.Request, env) -> web.StreamResponse:
    """Apply user's resolution choices and stream progress via SSE.

    Streams events for download progress, allowing frontend to show real-time updates.
    Event types: batch_start, file_start, file_progress, file_complete, batch_complete, done, error
    """
    name = request.match_info["name"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON body"}, status=400)

    node_choices = body.get("node_choices", {})
    model_choices = body.get("model_choices", {})
    skipped_packages = set(body.get("skipped_packages", []))

    # Set up SSE response
    response = web.StreamResponse(
        status=200,
        headers={
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no"  # Disable nginx buffering
        }
    )
    await response.prepare(request)

    # Queue for passing events from sync callbacks to async response
    event_queue: asyncio.Queue = asyncio.Queue()

    async def send_event(event_type: str, data: dict):
        """Send an SSE event."""
        event_data = json.dumps({"type": event_type, **data})
        await response.write(f"event: {event_type}\ndata: {event_data}\n\n".encode())

    def queue_event(event_type: str, data: dict):
        """Queue an event from sync context."""
        asyncio.get_event_loop().call_soon_threadsafe(
            event_queue.put_nowait, (event_type, data)
        )

    # Create callbacks that queue events
    callbacks = BatchDownloadCallbacks(
        on_batch_start=lambda total: queue_event("batch_start", {"total": total}),
        on_file_start=lambda filename, idx, total: queue_event("file_start", {
            "filename": filename,
            "index": idx,
            "total": total
        }),
        on_file_progress=lambda downloaded, total: queue_event("file_progress", {
            "downloaded": downloaded,
            "total": total
        }),
        on_file_complete=lambda filename, success, error: queue_event("file_complete", {
            "filename": filename,
            "success": success,
            "error": error
        }),
        on_batch_complete=lambda success_count, total: queue_event("batch_complete", {
            "success_count": success_count,
            "total": total
        })
    )

    # Create strategies from user choices
    node_strategy = PanelNodeStrategy(node_choices)
    model_strategy = PanelModelStrategy(model_choices)

    async def run_resolution():
        """Run resolution in thread pool and signal completion."""
        try:
            mapping_changes = await _apply_explicit_node_mapping_choices(
                env=env,
                workflow_name=name,
                node_choices=node_choices,
            )
            await run_sync(env.workflow_cache.invalidate, env.name, name)

            result = await run_sync(
                env.resolve_workflow,
                name,
                node_strategy=node_strategy,
                model_strategy=model_strategy,
                fix=True,
                download_callbacks=callbacks
            )
            model_paths_synced = sum(
                1 for model in result.models_resolved
                if getattr(model, "needs_path_sync", False)
            )

            nodes_marked_optional = mapping_changes["nodes_marked_optional"]
            model_manifest_changes = _apply_explicit_model_choices_to_manifest(env, name, model_choices)

            # Collect nodes to install
            nodes_to_install = []
            installed = env.list_manifest_nodes()
            explicit_registry_package_ids = _explicit_registry_install_package_ids(node_choices)
            for node in result.nodes_resolved:
                if node.package_id and node.match_type != "optional":
                    if (
                        node.package_id not in installed
                        and node.package_id not in skipped_packages
                        and node.package_id not in explicit_registry_package_ids
                    ):
                        nodes_to_install.append(node.package_id)

            nodes_to_install.extend(
                _collect_uninstallable_nodes_to_install(
                    result=result,
                    installed=installed,
                    skipped_packages=skipped_packages,
                    node_choices=node_choices,
                )
            )
            nodes_to_install.extend(
                _collect_explicit_nodes_to_install(
                    installed=installed,
                    skipped_packages=skipped_packages,
                    node_choices=node_choices,
                )
            )
            nodes_to_install = list(dict.fromkeys(nodes_to_install))

            # Get download results
            download_results = []
            if result.download_results:
                for dr in result.download_results:
                    download_results.append({
                        "filename": dr.filename,
                        "success": dr.success,
                        "error": dr.error,
                        "reused": getattr(dr, 'reused', False)
                    })

            queue_event("done", {
                "status": "success",
                "nodes_to_install": nodes_to_install,
                "nodes_marked_optional": nodes_marked_optional,
                "nodes_optional_cleared": mapping_changes["nodes_optional_cleared"],
                "nodes_mapped": mapping_changes["nodes_mapped"],
                "models_marked_optional": model_manifest_changes["models_marked_optional"],
                "model_download_intents_changed": model_manifest_changes["model_download_intents_changed"],
                "model_paths_synced": model_paths_synced,
                "download_results": download_results
            })
        except Exception as e:
            queue_event("error", {"message": str(e)})

    # Start resolution in background
    resolution_task = asyncio.create_task(run_resolution())

    # Stream events until done
    try:
        done = False
        while not done:
            try:
                # Wait for event with timeout to allow checking task status
                event_type, data = await asyncio.wait_for(event_queue.get(), timeout=0.5)
                await send_event(event_type, data)
                if event_type in ("done", "error"):
                    done = True
            except asyncio.TimeoutError:
                # Check if resolution task failed unexpectedly
                if resolution_task.done():
                    exc = resolution_task.exception()
                    if exc:
                        await send_event("error", {"message": str(exc)})
                    done = True
    finally:
        if not resolution_task.done():
            resolution_task.cancel()
            try:
                await resolution_task
            except asyncio.CancelledError:
                pass

    return response


# =============================================================================
# Pending Downloads Endpoint (for async download queue)
# =============================================================================

@routes.get("/v2/comfygit/models/pending-downloads")
@requires_environment
async def get_pending_downloads(request: web.Request, env) -> web.Response:
    """Get all pending download intents across all workflows.

    Returns models that have download URLs but haven't been downloaded yet.
    Reads directly from pyproject.toml for reliability.
    Used by the frontend to populate the download queue on app startup.
    """
    pending_downloads = []

    try:
        # Read from manifest snapshot, which is more reliable than resolution flow.
        for workflow_name, workflow_data in env.list_manifest_workflows().items():
            for model in workflow_data.models:
                # Check for unresolved models with sources (download URLs)
                if model.status == "unresolved" and model.sources:
                    sources = model.sources
                    if sources:
                        target_path = model.relative_path
                        if target_path:
                            models_dir = env.workspace.workspace_config_manager.get_models_directory()
                            normalized_target = str(target_path).replace("\\", "/").lstrip("/")
                            if models_dir and (models_dir / normalized_target).exists():
                                continue

                        pending_downloads.append({
                            "workflow": workflow_name,
                            "filename": model.filename or "unknown",
                            "url": sources[0],  # Use first source URL
                            "target_path": target_path,
                            "size": 0  # Unknown until download starts
                        })

        return web.json_response({
            "pending_downloads": pending_downloads,
            "count": len(pending_downloads)
        })

    except Exception as e:
        return web.json_response({
            "error": str(e),
            "pending_downloads": [],
            "count": 0
        }, status=500)


# =============================================================================
# Model Download Endpoint (for async download queue)
# =============================================================================

# Track active downloads to prevent duplicates and allow reconnection
_active_downloads: dict[str, dict] = {}  # url -> {task, queues, result, cancelled, env, workflow, filename}


class DownloadCancelled(Exception):
    """Raised when download is cancelled by user."""
    pass


@routes.delete("/v2/comfygit/models/download")
@logged_operation("cancel download")
async def cancel_download(request: web.Request, env) -> web.Response:
    """Cancel an active download."""
    url = request.query.get("url")
    if not url:
        return web.json_response({"error": "Missing url parameter"}, status=400)

    if url not in _active_downloads:
        return web.json_response({"error": "No active download for this URL"}, status=404)

    # Set cancellation flag - progress callback will raise exception
    _active_downloads[url]["cancelled"] = True
    return web.json_response({"status": "cancelled"})


@routes.get("/v2/comfygit/models/download-stream")
@logged_operation("download model")
async def download_model_stream(request: web.Request, env) -> web.StreamResponse:
    """Download a model with progress via SSE, then update pyproject.toml.

    Uses core library's ModelDownloader for proper indexing and state management.
    Supports reconnection: if download is already in progress, client joins existing download.

    Query params:
        url: Download URL
        target_path: Where to save the file (relative to models dir)
        filename: Display name for the file
        workflow: Workflow name (for updating pyproject.toml)
    """
    url = request.query.get("url")
    target_path = (request.query.get("target_path") or "").replace("\\", "/").lstrip("/")
    filename = request.query.get("filename", "model.safetensors")
    workflow_name = request.query.get("workflow")

    if not url or not target_path:
        return web.json_response(
            {"error": "Missing url or target_path parameter"},
            status=400
        )

    # Set up SSE response
    response = web.StreamResponse(
        status=200,
        headers={
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no"
        }
    )
    await response.prepare(request)

    # Track if client is still connected
    client_connected = True

    async def send_event(event_type: str, data: dict) -> bool:
        """Send an SSE event. Returns False if client disconnected."""
        nonlocal client_connected
        if not client_connected:
            return False
        try:
            event_data = json.dumps({"type": event_type, **data})
            await response.write(f"data: {event_data}\n\n".encode())
            return True
        except (ConnectionResetError, BrokenPipeError):
            client_connected = False
            return False
        except Exception:
            client_connected = False
            return False

    # Check if this URL is already being downloaded
    if url in _active_downloads:
        # Join existing download
        active = _active_downloads[url]
        my_queue: asyncio.Queue = asyncio.Queue()
        active["queues"].append(my_queue)

        try:
            # Stream progress until download completes or client disconnects
            while not active["task"].done() and client_connected:
                try:
                    event_type, data = await asyncio.wait_for(my_queue.get(), timeout=0.5)
                    await send_event(event_type, data)
                except asyncio.TimeoutError:
                    continue

            # If download completed while we were watching, send final result
            if client_connected and active.get("result"):
                result = active["result"]
                if result.success and result.model:
                    await send_event("complete", {
                        "downloaded": result.model.file_size,
                        "total": result.model.file_size,
                        "hash": result.model.hash,
                        "path": result.model.relative_path
                    })
                else:
                    await send_event("error", {"message": result.error or "Download failed"})
        except Exception:
            client_connected = False
        finally:
            if my_queue in active.get("queues", []):
                active["queues"].remove(my_queue)

        return response

    # Start new download
    loop = asyncio.get_running_loop()
    active = {"queues": [], "result": None, "cancelled": False, "env": env, "workflow": workflow_name, "filename": filename}
    _active_downloads[url] = active

    def broadcast_progress(downloaded: int, total: int | None):
        """Broadcast progress to all connected clients. Raises if cancelled."""
        if active["cancelled"]:
            raise DownloadCancelled("Download cancelled by user")
        for q in active["queues"]:
            loop.call_soon_threadsafe(q.put_nowait, ("progress", {"downloaded": downloaded, "total": total or 0}))

    async def run_download():
        """Run download in thread pool."""
        downloader = env.workflow_manager.downloader
        models_dir = downloader.models_dir
        full_target = models_dir / target_path

        request_obj = DownloadRequest(
            url=url,
            target_path=full_target,
            workflow_name=workflow_name
        )

        return await run_sync(downloader.download, request_obj, broadcast_progress)

    # Add our queue to subscribers
    my_queue: asyncio.Queue = asyncio.Queue()
    active["queues"].append(my_queue)

    try:
        # Start download
        download_task = asyncio.create_task(run_download())
        active["task"] = download_task

        # Stream progress until download completes or client disconnects
        while not download_task.done() and client_connected:
            try:
                event_type, data = await asyncio.wait_for(my_queue.get(), timeout=0.5)
                await send_event(event_type, data)
            except asyncio.TimeoutError:
                continue

        # Get result (may raise if cancelled)
        result = await download_task
        active["result"] = result

        # Send final result to THIS client directly (we've exited the queue reading loop)
        # Also broadcast to other subscribers who may have joined
        if result.success and result.model:
            complete_data = {
                "downloaded": result.model.file_size,
                "total": result.model.file_size,
                "hash": result.model.hash,
                "path": result.model.relative_path
            }
            # Send directly to this client
            await send_event("complete", complete_data)
            # Broadcast to other subscribers (not us - we already sent)
            for q in active["queues"]:
                if q is not my_queue:
                    loop.call_soon_threadsafe(q.put_nowait, ("complete", complete_data))
            # Finalize if any client is watching
            if active["queues"] and workflow_name:
                await _finalize_download(env, workflow_name, filename, result.model.hash)
        else:
            error_msg = result.error or "Download failed"
            # Send directly to this client
            await send_event("error", {"message": error_msg})
            # Broadcast to other subscribers
            for q in active["queues"]:
                if q is not my_queue:
                    loop.call_soon_threadsafe(q.put_nowait, ("error", {"message": error_msg}))

    except DownloadCancelled:
        # Download was cancelled - notify all subscribers
        for q in active.get("queues", []):
            loop.call_soon_threadsafe(q.put_nowait, ("error", {"message": "Download cancelled"}))
    except asyncio.CancelledError:
        client_connected = False
    except Exception as e:
        # Check if it's a wrapped DownloadCancelled
        if "cancelled" in str(e).lower():
            for q in active.get("queues", []):
                loop.call_soon_threadsafe(q.put_nowait, ("error", {"message": "Download cancelled"}))
        client_connected = False
    finally:
        # Clean up tracking
        if my_queue in active.get("queues", []):
            active["queues"].remove(my_queue)
        # Remove from active downloads when complete or cancelled
        if url in _active_downloads:
            task = active.get("task")
            if (not active.get("queues") and task and task.done()) or active.get("cancelled"):
                del _active_downloads[url]

    return response


async def _finalize_download(env, workflow_name: str, filename: str, model_hash: str):
    """Update pyproject.toml after successful download.

    Finds the workflow model by filename and updates it to resolved status.
    """
    models = list(env.get_workflow_manifest_models(workflow_name))

    for model in models:
        if model.filename == filename and model.status == "unresolved" and model.sources:
            # Get model from repository
            resolved_model = env.workflow_manager.model_repository.get_model(model_hash)
            if not resolved_model:
                return  # Model not indexed yet - skip update

            # Create global table entry with download source preserved
            manifest_model = ManifestModel(
                hash=model_hash,
                filename=resolved_model.filename,
                relative_path=resolved_model.relative_path,
                category=model.category,
                size=resolved_model.file_size,
                sources=model.sources  # Preserve download URL
            )
            env.pyproject.models.add_model(manifest_model)

            # Update workflow model to resolved
            model.hash = model_hash
            model.status = "resolved"
            model.sources = []
            model.relative_path = None

            # Save changes
            env.pyproject.workflows.set_workflow_models(workflow_name, models)
            return
