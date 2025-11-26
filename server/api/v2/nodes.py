"""Node management API."""
from collections import defaultdict
from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


def _build_workflow_usage_map(analyzed_workflows):
    """Build a map of package_id -> list of workflow names that use it."""
    usage_map = defaultdict(list)
    for wf in analyzed_workflows:
        for resolved_node in wf.resolution.nodes_resolved:
            if resolved_node.package_id:
                if wf.name not in usage_map[resolved_node.package_id]:
                    usage_map[resolved_node.package_id].append(wf.name)
    return usage_map


def _serialize_node(node, tracked: bool, installed: bool, used_in_workflows: list):
    """Serialize a node to API response format."""
    return {
        "name": node.name,
        "installed": installed,
        "tracked": tracked,
        "registry_id": node.registry_id,
        "repository": node.repository,
        "version": node.version,
        "source": node.source,
        "used_in_workflows": used_in_workflows
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
        status = await run_sync(env.status)

        # Build workflow usage map
        usage_map = _build_workflow_usage_map(status.workflow.analyzed_workflows)

        result_nodes = []
        seen_names = set()

        # 1. Add installed + tracked nodes
        for node in installed_nodes:
            identifier = node.registry_id or node.name
            seen_names.add(node.name)
            result_nodes.append(_serialize_node(
                node,
                tracked=True,
                installed=True,
                used_in_workflows=usage_map.get(identifier, [])
            ))

        # 2. Add missing nodes (tracked in manifest but not installed)
        for missing_name in status.comparison.missing_nodes:
            if missing_name not in seen_names:
                seen_names.add(missing_name)
                # Create a minimal node representation for missing nodes
                result_nodes.append({
                    "name": missing_name,
                    "installed": False,
                    "tracked": True,
                    "registry_id": missing_name,
                    "repository": None,
                    "version": None,
                    "source": "unknown",
                    "used_in_workflows": usage_map.get(missing_name, [])
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
                    "used_in_workflows": usage_map.get(extra_name, [])
                })

        # Calculate counts
        installed_count = sum(1 for n in result_nodes if n["installed"] and n["tracked"])
        missing_count = sum(1 for n in result_nodes if not n["installed"] and n["tracked"])
        untracked_count = sum(1 for n in result_nodes if not n["tracked"])

        return web.json_response({
            "nodes": result_nodes,
            "total_count": len(result_nodes),
            "installed_count": installed_count,
            "missing_count": missing_count,
            "untracked_count": untracked_count
        })
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)


@routes.post("/v2/comfygit/nodes/{name}/track-dev")
@requires_environment
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
@requires_environment
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


@routes.post("/v2/comfygit/nodes/{name}/update")
@requires_environment
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
@requires_environment
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
