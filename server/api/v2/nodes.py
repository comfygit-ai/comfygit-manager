"""Node management API."""
from collections import defaultdict
from aiohttp import web
from comfygit_core.models.dependency_resolution import DependencyResolutionAcceptance
from comfygit_core.models.exceptions import CDDependencyPreviewStaleError

from cgm_core.dependency_preview import (
    build_install_identifier,
    serialize_dependency_preview,
)
from cgm_core.decorators import requires_environment, logged_operation
from cgm_core.runtime_imports import (
    build_loaded_runtime_import_payload,
    collect_runtime_import_report,
)
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()

NODE_CRITICALITIES = ("required", "optional")


def _safe_sequence(value):
    """Safely convert sequence-like values to list."""
    if isinstance(value, (list, tuple, set)):
        return list(value)
    return []


def _safe_mapping(value):
    """Safely convert mapping-like values to dict."""
    if isinstance(value, dict):
        return value
    return {}


def _safe_str(value):
    """Safely return string values."""
    if isinstance(value, str):
        return value
    return None


def _normalize_node_criticality(value):
    """Return durable node criticality, defaulting omitted values to required."""
    return value if value in NODE_CRITICALITIES else "required"


def _find_tracked_node(tracked_nodes, node_identifier):
    """Find a tracked node by manifest key or display name."""
    node_identifier_lower = node_identifier.lower()
    for identifier, node in tracked_nodes.items():
        node_name = _safe_str(getattr(node, "name", None))
        if (
            identifier == node_identifier
            or identifier.lower() == node_identifier_lower
            or (node_name and node_name.lower() == node_identifier_lower)
        ):
            return identifier, node
    return None, None


def _build_workflow_usage_map(analyzed_workflows):
    """Build a map of package_id -> list of workflow names that use it."""
    usage_map = defaultdict(list)
    for wf in analyzed_workflows:
        for resolved_node in _safe_sequence(getattr(wf.resolution, "nodes_resolved", None)):
            if resolved_node.package_id:
                if wf.name not in usage_map[resolved_node.package_id]:
                    usage_map[resolved_node.package_id].append(wf.name)
    return usage_map


def _build_blocked_node_map(analyzed_workflows):
    """Build a map of blocked node_type -> issue metadata."""
    blocked_map = {}

    for wf in analyzed_workflows:
        resolution = getattr(wf, "resolution", None)
        if resolution is None:
            continue

        node_guidance = _safe_mapping(getattr(resolution, "node_guidance", None))

        for node in _safe_sequence(getattr(resolution, "nodes_version_gated", None)):
            node_type = _safe_str(getattr(node, "type", None))
            if not node_type:
                continue

            if node_type not in blocked_map:
                blocked_map[node_type] = {
                    "issue_type": "version_gated",
                    "registry_id": None,
                    "issue_guidance": node_guidance.get(node_type),
                    "used_in_workflows": set(),
                }
            blocked_map[node_type]["used_in_workflows"].add(wf.name)
            if not blocked_map[node_type]["issue_guidance"]:
                blocked_map[node_type]["issue_guidance"] = node_guidance.get(node_type)

        for pkg in _safe_sequence(getattr(resolution, "nodes_uninstallable", None)):
            node_type = _safe_str(getattr(pkg, "node_type", None)) or _safe_str(getattr(pkg, "package_id", None))
            if not node_type:
                continue

            package_id = _safe_str(getattr(pkg, "package_id", None))
            package_data = getattr(pkg, "package_data", None)
            repository = _safe_str(getattr(package_data, "repository", None)) if package_data is not None else None
            guidance_key = _safe_str(getattr(pkg, "node_type", None)) or node_type

            if node_type not in blocked_map:
                blocked_map[node_type] = {
                    "issue_type": "uninstallable",
                    "registry_id": package_id,
                    "repository": repository,
                    "issue_guidance": node_guidance.get(guidance_key),
                    "used_in_workflows": set(),
                }
            blocked_map[node_type]["used_in_workflows"].add(wf.name)
            if not blocked_map[node_type]["registry_id"] and package_id:
                blocked_map[node_type]["registry_id"] = package_id
            if not blocked_map[node_type].get("repository") and repository:
                blocked_map[node_type]["repository"] = repository
            if not blocked_map[node_type]["issue_guidance"]:
                blocked_map[node_type]["issue_guidance"] = node_guidance.get(guidance_key)

    return blocked_map


def _serialize_node(
    node,
    tracked: bool,
    installed: bool,
    used_in_workflows: list,
    issue_type: str | None = None,
    issue_guidance: str | None = None,
    criticality: str | None = None,
    runtime_import: dict | None = None,
):
    """Serialize a node to API response format."""
    return {
        "name": node.name,
        "installed": installed,
        "tracked": tracked,
        "registry_id": node.registry_id,
        "repository": node.repository,
        "version": node.version,
        "source": node.source,
        "used_in_workflows": used_in_workflows,
        "issue_type": issue_type,
        "issue_guidance": issue_guidance,
        "criticality": _normalize_node_criticality(
            criticality or getattr(node, "criticality", None)
        ) if tracked else None,
        "runtime_import": runtime_import,
    }


@routes.get("/v2/comfygit/nodes")
@requires_environment
async def get_nodes(request: web.Request, env) -> web.Response:
    """
    Get all nodes: tracked/installed, tracked/missing, and untracked.

    Returns a unified list with flags to indicate node state:
    - installed: True if node exists on filesystem
    - tracked: True if node is in pyproject.toml manifest
    - source: 'registry', 'git', 'development', 'unknown', or 'untracked'
    """
    try:
        # Get installed nodes (from list_nodes) and environment status
        installed_nodes = await run_sync(env.list_nodes)
        tracked_nodes = env.pyproject.nodes.get_existing()
        status = await run_sync(env.status)

        # Build workflow usage map
        usage_map = _build_workflow_usage_map(status.workflow.analyzed_workflows)
        blocked_node_map = _build_blocked_node_map(status.workflow.analyzed_workflows)
        runtime_import_report = await run_sync(
            collect_runtime_import_report,
            env,
            nodes=installed_nodes,
            status=status,
        )
        runtime_import_failures = runtime_import_report.failures_by_name()
        missing_node_names = set(_safe_sequence(status.comparison.missing_nodes))

        result_nodes = []
        seen_names = set()

        # 1. Add installed + tracked nodes
        for node in installed_nodes:
            identifier = node.registry_id or node.name
            tracked_node = tracked_nodes.get(identifier) or tracked_nodes.get(node.name)
            seen_names.add(node.name)
            runtime_failure = (
                runtime_import_failures.get(node.name)
                or runtime_import_failures.get(identifier)
            )
            runtime_import = None
            if runtime_failure is not None:
                runtime_import = runtime_failure.to_runtime_import_dict()
            elif (
                runtime_import_report.available
                and node.name not in missing_node_names
                and identifier not in missing_node_names
                and (env.custom_nodes_path / node.name).exists()
            ):
                runtime_import = build_loaded_runtime_import_payload(
                    node,
                    env.custom_nodes_path / node.name,
                )
            result_nodes.append(_serialize_node(
                node,
                tracked=True,
                installed=True,
                used_in_workflows=usage_map.get(identifier, []) or usage_map.get(node.name, []),
                criticality=getattr(tracked_node, "criticality", None) if tracked_node else None,
                runtime_import=runtime_import,
            ))

        # 2. Add missing nodes (tracked in manifest but not installed)
        for missing_name in status.comparison.missing_nodes:
            if missing_name not in seen_names:
                seen_names.add(missing_name)
                missing_node = tracked_nodes.get(missing_name)
                # Create a minimal node representation for missing nodes
                result_nodes.append({
                    "name": getattr(missing_node, "name", missing_name) if missing_node else missing_name,
                    "installed": False,
                    "tracked": True,
                    "registry_id": getattr(missing_node, "registry_id", missing_name) if missing_node else missing_name,
                    "repository": getattr(missing_node, "repository", None) if missing_node else None,
                    "version": getattr(missing_node, "version", None) if missing_node else None,
                    "source": getattr(missing_node, "source", "unknown") if missing_node else "unknown",
                    "used_in_workflows": usage_map.get(missing_name, []),
                    "issue_type": None,
                    "issue_guidance": None,
                    "criticality": _normalize_node_criticality(
                        getattr(missing_node, "criticality", None)
                    ),
                    "runtime_import": None,
                })

        # 2.5. Add blocked nodes from workflow resolution (version-gated/uninstallable)
        for node_name, issue_data in blocked_node_map.items():
            if node_name not in seen_names:
                seen_names.add(node_name)
                result_nodes.append({
                    "name": node_name,
                    "installed": False,
                    "tracked": False,
                    "registry_id": issue_data.get("registry_id"),
                    "repository": issue_data.get("repository"),
                    "version": None,
                    "source": "unknown",
                    "used_in_workflows": sorted(issue_data.get("used_in_workflows", [])),
                    "issue_type": issue_data.get("issue_type"),
                    "issue_guidance": issue_data.get("issue_guidance"),
                    "criticality": None,
                    "runtime_import": None,
                })

        # 3. Add untracked nodes (on filesystem but not in manifest)
        for extra_name in status.comparison.extra_nodes:
            if extra_name not in seen_names:
                seen_names.add(extra_name)
                result_nodes.append({
                    "name": extra_name,
                    "installed": True,  # On filesystem
                    "tracked": False,   # NOT in manifest
                    "registry_id": None,
                    "repository": None,
                    "version": None,
                    "source": "untracked",
                    "used_in_workflows": usage_map.get(extra_name, []),
                    "issue_type": None,
                    "issue_guidance": None,
                    "criticality": None,
                    "runtime_import": None,
                })

        # Calculate counts
        installed_count = sum(1 for n in result_nodes if n["installed"] and n["tracked"])
        missing_count = sum(1 for n in result_nodes if not n["installed"] and n["tracked"] and not n.get("issue_type"))
        untracked_count = sum(1 for n in result_nodes if not n["tracked"])
        blocked_count = sum(1 for n in result_nodes if n.get("issue_type") in ("version_gated", "uninstallable"))
        runtime_import_failed_count = sum(
            1
            for n in result_nodes
            if (n.get("runtime_import") or {}).get("status") == "failed"
        )

        return web.json_response({
            "nodes": result_nodes,
            "total_count": len(result_nodes),
            "installed_count": installed_count,
            "missing_count": missing_count,
            "untracked_count": untracked_count,
            "blocked_count": blocked_count,
            "runtime_import_failed_count": runtime_import_failed_count,
        })
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)


@routes.post("/v2/comfygit/nodes/{name}/criticality")
@logged_operation("update node criticality")
async def update_node_criticality(request: web.Request, env) -> web.Response:
    """Update user-declared package-level custom-node criticality."""
    node_name = request.match_info['name']

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    criticality = body.get("criticality")
    if criticality not in NODE_CRITICALITIES:
        return web.json_response({
            "error": "Invalid criticality. Must be 'required' or 'optional'."
        }, status=400)

    tracked_nodes = env.pyproject.nodes.get_existing()
    identifier, _node = _find_tracked_node(tracked_nodes, node_name)
    if not identifier:
        return web.json_response({
            "error": f"Node '{node_name}' is not tracked in the environment manifest"
        }, status=404)

    try:
        if hasattr(env, "update_node_criticality"):
            success = await run_sync(env.update_node_criticality, identifier, criticality)
        elif hasattr(env.pyproject.nodes, "set_criticality"):
            success = await run_sync(env.pyproject.nodes.set_criticality, identifier, criticality)
        else:
            return web.json_response({
                "error": "Installed comfygit-core does not support node criticality updates"
            }, status=501)

        if not success:
            return web.json_response({
                "error": f"Node '{node_name}' is not tracked in the environment manifest"
            }, status=404)

        return web.json_response({
            "status": "success",
            "node": identifier,
            "criticality": criticality,
        })
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=400)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/comfygit/nodes/{name}/track-dev")
@logged_operation("track node as dev")
async def track_node_as_dev(request: web.Request, env) -> web.Response:
    """
    Track an untracked node as a development node.

    This adds the node to pyproject.toml with source='development' and version='dev'.
    The node must already exist on the filesystem but not be tracked in the manifest.
    """
    node_name = request.match_info['name']

    try:
        # Verify node is actually untracked
        status = await run_sync(env.status)
        extra_nodes = set(status.comparison.extra_nodes)

        if node_name not in extra_nodes:
            # Check if it's already tracked
            installed_nodes = await run_sync(env.list_nodes)
            tracked_names = {n.name for n in installed_nodes}

            if node_name in tracked_names:
                return web.json_response({
                    "error": f"Node '{node_name}' is already tracked"
                }, status=400)
            else:
                return web.json_response({
                    "error": f"Node '{node_name}' not found in untracked nodes"
                }, status=400)

        # Add the node as development
        result = await run_sync(env.add_node, node_name, is_development=True)

        return web.json_response({
            "status": "success",
            "message": f"Node '{node_name}' is now tracked as development",
            "node": {
                "name": result.name,
                "source": result.source,
                "version": result.version,
                "registry_id": result.registry_id
            }
        })
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)


@routes.post("/v2/comfygit/nodes/{name}/install")
@logged_operation("install node")
async def install_node(request: web.Request, env) -> web.Response:
    """Install a missing (tracked but not installed) node."""
    node_name = request.match_info['name']

    try:
        result = await run_sync(env.add_node, node_name)

        return web.json_response({
            "status": "success",
            "message": f"Node '{node_name}' installed successfully",
            "node": {
                "name": result.name,
                "source": result.source,
                "version": result.version
            }
        })
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)


@routes.post("/v2/comfygit/nodes/dependency-preview")
@requires_environment
async def preview_node_dependency_changes(request: web.Request, env) -> web.Response:
    """Preview dependency changes for installing a node package without applying."""
    try:
        params = await request.json()
        identifier = build_install_identifier(params)
        preview = await run_sync(env.preview_add_node_dependency_changes, identifier)

        return web.json_response({
            "status": "success" if preview.success else "error",
            "identifier": identifier,
            "preview": serialize_dependency_preview(preview),
        })
    except Exception as e:
        return web.json_response({
            "status": "error",
            "error": str(e),
        }, status=500)


@routes.post("/v2/comfygit/nodes/dependency-apply")
@requires_environment
async def apply_node_dependency_changes(request: web.Request, env) -> web.Response:
    """Apply a reviewed dependency change if the accepted preview is still current."""
    try:
        params = await request.json()
        identifier = build_install_identifier(params)
        accepted_preview = _safe_mapping(params.get("accepted_preview"))
        acceptance = DependencyResolutionAcceptance(
            identifier=identifier,
            baseline_fingerprint=str(accepted_preview.get("baseline_fingerprint") or ""),
            diff_fingerprint=str(accepted_preview.get("diff_fingerprint") or ""),
            proposed_fingerprint=str(accepted_preview.get("proposed_fingerprint") or ""),
        )

        result = await run_sync(
            env.apply_reviewed_node_dependency_changes,
            identifier,
            acceptance,
        )

        return web.json_response({
            "status": "success",
            "identifier": result.identifier,
            "node_name": result.node_name,
            "installed": result.installed,
            "needs_restart": result.needs_restart,
            "message": result.message,
        })
    except CDDependencyPreviewStaleError as e:
        return web.json_response({
            "status": "stale_preview",
            "error": str(e),
        }, status=409)
    except Exception as e:
        return web.json_response({
            "status": "error",
            "error": str(e),
        }, status=500)


@routes.post("/v2/comfygit/nodes/{name}/update")
@logged_operation("update node")
async def update_node(request: web.Request, env) -> web.Response:
    """Update an installed node to latest version."""
    node_name = request.match_info['name']

    try:
        result = await run_sync(env.update_node, node_name)

        return web.json_response({
            "status": "success",
            "message": result.message,
            "changed": result.changed,
            "old_version": result.old_version,
            "new_version": result.new_version
        })
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)


@routes.delete("/v2/comfygit/nodes/{name}")
@logged_operation("remove node")
async def uninstall_node(request: web.Request, env) -> web.Response:
    """Uninstall/remove a node."""
    node_name = request.match_info['name']

    try:
        result = await run_sync(env.remove_node, node_name)

        return web.json_response({
            "status": "success",
            "message": f"Node '{node_name}' removed",
            "filesystem_action": result.filesystem_action
        })
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)
