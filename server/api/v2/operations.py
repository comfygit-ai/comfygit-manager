"""Environment operations API (export, sync)."""
from datetime import datetime
from pathlib import Path

from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


@routes.post("/v2/comfygit/export/validate")
@requires_environment
async def validate_export(request: web.Request, env) -> web.Response:
    """Validate environment export readiness and return warnings."""
    blocking_issues = []
    warnings = {
        "models_without_sources": [],
    }

    # Check for uncommitted workflow changes
    status = await run_sync(env.workflow_manager.get_workflow_status)
    if status.sync_status.has_changes:
        uncommitted = (
            list(status.sync_status.new) +
            list(status.sync_status.modified) +
            list(status.sync_status.deleted)
        )
        blocking_issues.append({
            "type": "uncommitted_workflows",
            "message": "Cannot export with uncommitted workflow changes",
            "details": uncommitted
        })

    # Check for uncommitted git changes
    has_git_changes = await run_sync(env.git_manager.has_uncommitted_changes)
    if has_git_changes:
        blocking_issues.append({
            "type": "uncommitted_git_changes",
            "message": "Cannot export with uncommitted git changes",
            "details": []
        })

    # Check for unresolved workflow issues
    if not status.is_commit_safe:
        blocking_issues.append({
            "type": "unresolved_issues",
            "message": "Cannot export - workflows have unresolved issues",
            "details": []
        })

    # If no blocking issues, check for warnings
    if not blocking_issues:
        # Check for models without sources
        pyproject = env.pyproject
        models_by_hash = {
            m.hash: m
            for m in pyproject.models.get_all()
            if not m.sources
        }

        if models_by_hash:
            models_without_sources = []
            all_workflows = pyproject.workflows.get_all_with_resolutions()
            for workflow_name in all_workflows.keys():
                workflow_models = pyproject.workflows.get_workflow_models(workflow_name)
                for wf_model in workflow_models:
                    if wf_model.hash and wf_model.hash in models_by_hash:
                        existing = next(
                            (m for m in models_without_sources if m["hash"] == wf_model.hash),
                            None
                        )
                        if existing:
                            existing["workflows"].append(workflow_name)
                        else:
                            model_data = models_by_hash[wf_model.hash]
                            models_without_sources.append({
                                "filename": model_data.filename,
                                "hash": wf_model.hash,
                                "workflows": [workflow_name]
                            })

            warnings["models_without_sources"] = models_without_sources

    return web.json_response({
        "can_export": len(blocking_issues) == 0,
        "blocking_issues": blocking_issues,
        "warnings": warnings
    })


@routes.post("/v2/comfygit/export")
@requires_environment
async def export_environment(request: web.Request, env) -> web.Response:
    """Export environment to tarball."""
    json_data = await request.json()
    output_path = json_data.get("output_path")

    # Determine output path
    if output_path:
        path = Path(output_path)
    else:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        path = Path.cwd().parent / f"{env.name}_export_{timestamp}.tar.gz"

    # Track models without sources
    models_without_sources = []

    class ExportCallbacks:
        def on_models_without_sources(self, models):
            models_without_sources.extend(models)

    callbacks = ExportCallbacks()

    try:
        tarball_path = await run_sync(env.export_environment, path, callbacks=callbacks)

        return web.json_response({
            "status": "success",
            "path": str(tarball_path),
            "models_without_sources": len(models_without_sources),
        })
    except Exception as e:
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)


@routes.get("/v2/comfygit/download")
async def download_file(request: web.Request) -> web.Response:
    """Download a file from the server (used for export downloads)."""
    file_path = request.query.get("path")

    if not file_path:
        return web.json_response({"error": "path parameter required"}, status=400)

    path = Path(file_path)

    if not path.exists():
        return web.json_response({"error": "File not found"}, status=404)

    if not path.is_file():
        return web.json_response({"error": "Path is not a file"}, status=400)

    # Security: only allow downloading .tar.gz files from expected locations
    if not path.suffix == ".gz" or not str(path).endswith(".tar.gz"):
        return web.json_response({"error": "Only .tar.gz files can be downloaded"}, status=403)

    # Stream the file
    return web.FileResponse(
        path,
        headers={
            "Content-Disposition": f'attachment; filename="{path.name}"'
        }
    )


@routes.post("/v2/comfygit/sync")
@requires_environment
async def sync_environment(request: web.Request, env) -> web.Response:
    """Manually trigger environment sync to match git repository state."""
    json_data = await request.json()
    model_strategy = json_data.get("model_strategy", "skip")
    remove_extra_nodes = json_data.get("remove_extra_nodes", True)

    try:
        # Run sync operation
        result = await run_sync(
            env.sync,
            model_strategy=model_strategy,
            remove_extra_nodes=remove_extra_nodes
        )

        return web.json_response({
            "status": "success" if result.success else "error",
            "nodes_installed": result.nodes_installed,
            "nodes_removed": result.nodes_removed,
            "errors": result.errors,
            "message": "Sync completed" if result.success else "Sync completed with errors"
        })
    except Exception as e:
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)
