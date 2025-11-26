"""Model management API.

Provides two scopes:
- Environment scope (/v2/comfygit/models/environment): Models used in current env's workflows
- Workspace scope (/v2/workspace/models): All models in the shared workspace index
"""
import platform
import subprocess
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
                    relative_path = model_ref.relative_path if hasattr(model_ref, 'relative_path') else None

                    models_map[model_hash] = {
                        "filename": model_ref.filename,
                        "hash": model_hash,
                        "type": category,
                        "size": model_ref.file_size,
                        "status": model_status,
                        "relative_path": relative_path,
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
async def add_model_source(request: web.Request, env) -> web.Response:
    """Add a download source URL to a model in the workspace index.

    This endpoint adds sources directly to the workspace model repository (SQLite),
    not the environment's pyproject.toml. Use this for managing sources of models
    in the shared workspace index.
    """
    identifier = request.match_info["identifier"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    source_url = body.get("source_url")
    if not source_url:
        return web.json_response({"error": "Missing 'source_url' field"}, status=400)

    try:
        model_repo = env.workspace.model_repository

        # Check if model exists in the workspace index
        if not model_repo.has_model(identifier):
            return web.json_response(
                {"error": f"Model not found in workspace index: {identifier}"},
                status=404
            )

        # Auto-detect source type
        source_type = env.workspace.model_downloader.detect_url_type(source_url)

        # Add source to the repository
        await run_sync(
            model_repo.add_source,
            model_hash=identifier,
            source_type=source_type,
            source_url=source_url
        )

        return web.json_response({
            "status": "success",
            "model_hash": identifier,
            "source_type": source_type,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.delete("/v2/workspace/models/{identifier}/source")
@requires_environment
async def remove_model_source(request: web.Request, env) -> web.Response:
    """Remove a download source URL from a model in the workspace index."""
    identifier = request.match_info["identifier"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    source_url = body.get("source_url")
    if not source_url:
        return web.json_response({"error": "Missing 'source_url' field"}, status=400)

    try:
        model_repo = env.workspace.model_repository

        # Remove source from the repository
        removed = await run_sync(model_repo.remove_source, identifier, source_url)

        if not removed:
            return web.json_response(
                {"error": f"Source URL not found for model: {identifier}"},
                status=404
            )

        return web.json_response({
            "status": "success",
            "model_hash": identifier,
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


@routes.get("/v2/workspace/models/directory")
@requires_environment
async def get_models_directory(request: web.Request, env) -> web.Response:
    """Get the current models directory path."""
    try:
        models_dir = env.workspace.workspace_config_manager.get_models_directory()
        return web.json_response({
            "path": str(models_dir) if models_dir else None,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/workspace/models/directory")
@requires_environment
async def set_models_directory(request: web.Request, env) -> web.Response:
    """Set a new models directory and scan for models."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    new_path = body.get("path")
    if not new_path:
        return web.json_response({"error": "Missing 'path' field"}, status=400)

    path = Path(new_path)
    if not path.exists():
        return web.json_response({"error": f"Path does not exist: {new_path}"}, status=400)
    if not path.is_dir():
        return web.json_response({"error": f"Path is not a directory: {new_path}"}, status=400)

    try:
        # Set the new models directory
        await run_sync(env.workspace.set_models_directory, path)

        # Scan the new directory
        models_indexed = await run_sync(env.workspace.sync_model_directory)

        return web.json_response({
            "status": "success",
            "path": str(path),
            "models_indexed": models_indexed,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/v2/workspace/models/details/{identifier}")
@requires_environment
async def get_workspace_model_details(request: web.Request, env) -> web.Response:
    """Get full details for a single model from the workspace index."""
    identifier = request.match_info["identifier"]

    try:
        details = await run_sync(env.workspace.get_model_details, identifier)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=400)
    except KeyError:
        return web.json_response({"error": f"Model not found: {identifier}"}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    model = details.model

    # Format last_seen timestamp
    from datetime import datetime
    last_seen_str = None
    if model.last_seen:
        try:
            last_seen_str = datetime.fromtimestamp(model.last_seen).strftime("%Y-%m-%d %H:%M:%S")
        except Exception:
            pass

    # Get models directory for building full paths
    models_dir = env.workspace.workspace_config_manager.get_models_directory()

    # Build primary model full path as fallback
    primary_path = str(models_dir / model.relative_path) if models_dir and model.relative_path else model.relative_path

    # Format locations with modified times
    locations = []
    for loc in details.all_locations:
        # Try various possible keys for the path
        path = (
            loc.get("path") or
            loc.get("full_path") or
            loc.get("relative_path") or
            ""
        )
        # If path is relative, make it absolute using models_dir
        if path and not path.startswith("/") and models_dir:
            path = str(models_dir / path)
        # If still no path, use the primary model path
        if not path:
            path = primary_path

        loc_info = {"path": path}
        if "mtime" in loc:
            try:
                loc_info["modified"] = datetime.fromtimestamp(loc["mtime"]).strftime("%Y-%m-%d %H:%M:%S")
            except Exception:
                pass
        locations.append(loc_info)

    # If no locations found at all, add the primary model location
    if not locations and primary_path:
        loc_info = {"path": primary_path}
        if model.mtime:
            try:
                loc_info["modified"] = datetime.fromtimestamp(model.mtime).strftime("%Y-%m-%d %H:%M:%S")
            except Exception:
                pass
        locations.append(loc_info)

    # Format sources
    sources = []
    for src in details.sources:
        sources.append({
            "type": src.get("type", "unknown"),
            "url": src.get("url", ""),
        })

    return web.json_response({
        "filename": model.filename,
        "hash": model.hash,
        "blake3": model.blake3_hash,
        "sha256": model.sha256_hash,
        "size": model.file_size,
        "category": model.category,
        "relative_path": model.relative_path,
        "last_seen": last_seen_str,
        "locations": locations,
        "sources": sources,
    })


def _is_wsl() -> bool:
    """Detect if running under Windows Subsystem for Linux."""
    try:
        with open("/proc/version", "r") as f:
            return "microsoft" in f.read().lower()
    except Exception:
        return False


def _wsl_path_to_windows(linux_path: str) -> str:
    """Convert a WSL Linux path to Windows path format."""
    try:
        result = subprocess.run(
            ["wslpath", "-w", linux_path],
            capture_output=True,
            text=True,
            timeout=5
        )
        if result.returncode == 0:
            return result.stdout.strip()
    except Exception:
        pass
    return linux_path


@routes.post("/v2/workspace/open-location")
@requires_environment
async def open_file_location(request: web.Request, env) -> web.Response:
    """Open a file's containing folder in the system file browser."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    file_path = body.get("path")
    if not file_path:
        return web.json_response({"error": "Missing 'path' field"}, status=400)

    path = Path(file_path)
    if not path.exists():
        return web.json_response({"error": f"Path does not exist: {file_path}"}, status=404)

    try:
        system = platform.system()

        if system == "Windows":
            # Windows: explorer /select,<path> to highlight the file
            subprocess.Popen(["explorer", "/select,", str(path)])
        elif system == "Darwin":
            # macOS: open -R reveals in Finder
            subprocess.Popen(["open", "-R", str(path)])
        elif _is_wsl():
            # WSL: Convert path to Windows format and use explorer.exe
            win_path = _wsl_path_to_windows(str(path))
            subprocess.Popen(["explorer.exe", "/select,", win_path])
        else:
            # Linux: open the containing directory
            parent = path.parent if path.is_file() else path
            subprocess.Popen(["xdg-open", str(parent)])

        return web.json_response({"status": "success"})
    except Exception as e:
        return web.json_response({"error": f"Failed to open location: {e}"}, status=500)
