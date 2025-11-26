"""Model management API.

Provides two scopes:
- Environment scope (/v2/comfygit/models/environment): Models used in current env's workflows
- Workspace scope (/v2/workspace/models): All models in the shared workspace index
"""
from pathlib import Path

from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


def _determine_model_status(resolved_model):
    """Determine model status from ResolvedModel."""
    if resolved_model.resolved_model is not None:
        if resolved_model.needs_path_sync:
            return "path_mismatch"
        return "available"
    elif resolved_model.model_source is not None:
        return "downloadable"
    else:
        return "missing"


@routes.get("/v2/comfygit/models/environment")
@requires_environment
async def get_environment_models(request: web.Request, env) -> web.Response:
    """Get models used in current environment with workflow usage tracking."""
    try:
        status = await run_sync(env.status)

        # Aggregate models across all workflows, tracking which workflows use each
        models_map = {}  # hash/key -> model info with usage tracking

        # Process models from analyzed workflows
        for wf in status.workflow.analyzed_workflows:
            for resolved_model in wf.resolution.models_resolved:
                model_ref = resolved_model.resolved_model
                if not model_ref:
                    continue

                # Use CRC32 hash as canonical identifier
                model_hash = model_ref.hash

                if model_hash not in models_map:
                    # Determine category and status
                    category = model_ref.category if hasattr(model_ref, 'category') else "unknown"
                    model_status = _determine_model_status(resolved_model)

                    models_map[model_hash] = {
                        "filename": model_ref.filename,
                        "hash": model_hash,
                        "type": category,
                        "size": model_ref.file_size,
                        "status": model_status,
                        "used_in_workflows": []
                    }

                # Track workflow usage
                if wf.name not in models_map[model_hash]["used_in_workflows"]:
                    models_map[model_hash]["used_in_workflows"].append(wf.name)

        # Process missing models from env status
        for missing_model in status.missing_models:
            # Use filename-based key for missing models (no hash available)
            key = f"missing_{missing_model.filename}"

            if key not in models_map:
                models_map[key] = {
                    "filename": missing_model.filename,
                    "hash": "",
                    "type": "unknown",
                    "size": 0,
                    "status": "missing",
                    "used_in_workflows": missing_model.required_by.copy()
                }

        # Convert to list sorted by filename
        models = sorted(models_map.values(), key=lambda m: m["filename"])

        return web.json_response(models)
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)


# =============================================================================
# Workspace-scoped endpoints (shared model index)
# =============================================================================


@routes.get("/v2/workspace/models")
@requires_environment
async def get_workspace_models(request: web.Request, env) -> web.Response:
    """List all models in the workspace model index."""
    try:
        models = await run_sync(env.workspace.list_models)

        result = []
        for model in models:
            result.append({
                "filename": model.filename,
                "hash": model.hash,
                "sha256": model.sha256_hash,
                "type": model.category,
                "size": model.file_size,
                "relative_path": model.relative_path,
                "status": "available",  # All indexed models are available
            })

        return web.json_response(result)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/workspace/models/{identifier}/source")
@requires_environment
async def update_model_source(request: web.Request, env) -> web.Response:
    """Add or update download source URL for a model."""
    identifier = request.match_info["identifier"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    source_url = body.get("source_url")
    if not source_url:
        return web.json_response({"error": "Missing 'source_url' field"}, status=400)

    try:
        result = await run_sync(env.add_model_source, identifier, source_url)

        if not result.success:
            # Distinguish between not found and other errors
            if "not found" in (result.error or "").lower():
                return web.json_response({"error": result.error}, status=404)
            return web.json_response({"error": result.error}, status=400)

        return web.json_response({
            "status": "success",
            "model_hash": result.model_hash,
            "source_type": result.source_type,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.delete("/v2/workspace/models/{identifier}")
@requires_environment
async def delete_workspace_model(request: web.Request, env) -> web.Response:
    """Delete a model from the workspace."""
    identifier = request.match_info["identifier"]

    try:
        # Get model details to find file path
        details = await run_sync(env.workspace.get_model_details, identifier)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=400)
    except KeyError as e:
        return web.json_response({"error": f"Model not found: {identifier}"}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    try:
        # Get model file path and delete
        models_dir = env.workspace.workspace_config_manager.get_models_directory()
        model_path = models_dir / details.model.relative_path

        if model_path.exists():
            model_path.unlink()

        # Sync model directory to update index
        await run_sync(env.workspace.sync_model_directory)

        return web.json_response({
            "status": "success",
            "deleted": details.model.filename,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/workspace/models/scan")
@requires_environment
async def scan_workspace_models(request: web.Request, env) -> web.Response:
    """Scan the models directory for new/changed models."""
    try:
        changes = await run_sync(env.workspace.sync_model_directory)
        return web.json_response({
            "status": "success",
            "changes": changes,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)
