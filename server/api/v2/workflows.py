"""Workflow operations API."""
from aiohttp import web

from comfygit_core.strategies.auto import AutoNodeStrategy, AutoModelStrategy

from core.decorators import requires_environment
from core.serializers import serialize_workflow_details
from utils.async_helpers import run_sync

routes = web.RouteTableDef()


@routes.get("/v2/comfygit/workflows")
@requires_environment
async def get_workflows(request: web.Request, env) -> web.Response:
    """List all workflows with analysis."""
    status = await run_sync(env.status)

    workflows = []
    for wf in status.workflow.analyzed_workflows:
        workflows.append({
            "name": wf.name,
            "status": "broken" if wf.has_issues else wf.sync_state,
            "missing_nodes": wf.uninstalled_count,
            "missing_models": wf.models_needing_path_sync_count,
            "sync_state": wf.sync_state
        })

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

    return web.json_response(serialize_workflow_details(workflow, name))


@routes.post("/v2/comfygit/workflow/{name}/resolve")
@requires_environment
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
@requires_environment
async def install_workflow(request: web.Request, env) -> web.Response:
    """Install all missing dependencies for a workflow."""
    name = request.match_info["name"]

    # Get workflow status
    status = await run_sync(env.status)
    workflow = next((w for w in status.workflow.analyzed_workflows if w.name == name), None)
    if not workflow:
        return web.json_response({"error": "Workflow not found"}, status=404)

    if not workflow.uninstalled_nodes:
        return web.json_response({
            "status": "success",
            "message": "All dependencies already installed",
            "installed": []
        })

    # Install nodes
    node_ids = list(workflow.uninstalled_nodes)
    await run_sync(env.install_nodes, node_ids)

    return web.json_response({
        "status": "success",
        "message": f"Installed {len(node_ids)} node packages",
        "installed": node_ids
    })
