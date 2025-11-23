"""Environment operations API (export, sync)."""
from datetime import datetime
from pathlib import Path

from aiohttp import web

from core.decorators import requires_environment
from utils.async_helpers import run_sync

routes = web.RouteTableDef()


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

    tarball_path = await run_sync(env.export_environment, path, callbacks=callbacks)

    return web.json_response({
        "status": "success",
        "path": str(tarball_path),
        "models_without_sources": len(models_without_sources),
    })


@routes.post("/v2/comfygit/sync")
@requires_environment
async def sync_environment(request: web.Request, env) -> web.Response:
    """Manually trigger environment sync to match git repository state."""
    json_data = await request.json()
    model_strategy = json_data.get("model_strategy", "skip")
    remove_extra_nodes = json_data.get("remove_extra_nodes", True)

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
