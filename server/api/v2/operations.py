"""Environment operations API (export, sync)."""
from datetime import datetime
from pathlib import Path

from aiohttp import web

from cgm_core.decorators import requires_environment, logged_operation
from cgm_core.readiness import build_environment_readiness
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


async def build_export_validation(env) -> dict:
    """Validate whether an environment can be exported."""
    return await build_environment_readiness(env, include_blocking=True)


async def execute_environment_export(env, output_path: str | None = None) -> dict:
    """Export an environment and return the result payload."""
    if output_path:
        path = Path(output_path)
    else:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        path = Path.cwd().parent / f"{env.name}_export_{timestamp}.tar.gz"

    models_without_sources = []

    class ExportCallbacks:
        def on_models_without_sources(self, models):
            models_without_sources.extend(models)

    callbacks = ExportCallbacks()
    tarball_path = await run_sync(env.export_environment, path, callbacks=callbacks)

    return {
        "status": "success",
        "path": str(tarball_path),
        "models_without_sources": len(models_without_sources),
    }


@routes.post("/v2/comfygit/export/validate")
@requires_environment
async def validate_export(request: web.Request, env) -> web.Response:
    """Validate environment export readiness and return warnings."""
    return web.json_response(await build_export_validation(env))


@routes.post("/v2/comfygit/export")
@logged_operation("export environment")
async def export_environment(request: web.Request, env) -> web.Response:
    """Export environment to tarball."""
    json_data = await request.json()
    output_path = json_data.get("output_path")

    try:
        return web.json_response(await execute_environment_export(env, output_path))
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
@logged_operation("sync environment")
async def sync_environment(request: web.Request, env) -> web.Response:
    """Manually trigger environment sync to match git repository state."""
    json_data = await request.json()
    model_strategy = json_data.get("model_strategy", "skip")
    remove_extra_nodes = json_data.get("remove_extra_nodes", True)
    preserve_workflows = json_data.get("preserve_workflows", True)

    try:
        # Run sync operation
        result = await run_sync(
            env.sync,
            model_strategy=model_strategy,
            remove_extra_nodes=remove_extra_nodes,
            preserve_workflows=preserve_workflows,
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
