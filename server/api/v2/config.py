"""Configuration management API."""
import json
from aiohttp import web
from pathlib import Path

from comfygit_core.models.exceptions import ComfyDockError
from comfygit_core.core.workspace import Workspace, WorkspacePaths
from cgm_core.context import get_environment_from_request

routes = web.RouteTableDef()


def _get_workspace_from_request(request: web.Request) -> Workspace | None:
    """
    Get workspace from request context or workspace_path query param.

    Priority:
    1. Running environment (via get_environment_from_request)
    2. workspace_path query parameter (for setup without running env)
    """
    # First try: get from running environment
    env = get_environment_from_request(request)
    if env:
        return env.workspace

    # Fallback: get workspace_path from query param
    workspace_path = request.query.get('workspace_path')
    if workspace_path:
        paths = WorkspacePaths(Path(workspace_path))
        return Workspace(paths)

    return None


def _get_orchestrator_config_path(workspace_path: Path) -> Path:
    """Get path to orchestrator_config.json."""
    return workspace_path / ".metadata" / "orchestrator_config.json"


def _load_orchestrator_config(workspace_path: Path) -> dict:
    """Load orchestrator config, returning empty dict if not found."""
    config_path = _get_orchestrator_config_path(workspace_path)
    if not config_path.exists():
        return {}
    try:
        with open(config_path) as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError):
        return {}


def _save_orchestrator_config(workspace_path: Path, config: dict) -> None:
    """Save orchestrator config, preserving existing values."""
    config_path = _get_orchestrator_config_path(workspace_path)
    config_path.parent.mkdir(parents=True, exist_ok=True)
    with open(config_path, 'w') as f:
        json.dump(config, f, indent=2)


@routes.get("/v2/comfygit/config")
async def get_config(request: web.Request) -> web.Response:
    """
    Get workspace configuration settings.

    Query params:
        workspace_path: Optional path to workspace (fallback when no environment running)

    Returns:
        {
            "workspace_path": str,
            "models_path": str | None,
            "civitai_api_key": str | None,
            "huggingface_token": str | None,
            "auto_sync_models": bool,
            "confirm_destructive": bool,
            "comfyui_extra_args": list[str]
        }
    """
    workspace = _get_workspace_from_request(request)
    if not workspace:
        return web.json_response({
            "error": "No environment detected"
        }, status=500)

    config_manager = workspace.workspace_config_manager

    # Get models directory (may not be set)
    models_path = None
    try:
        models_dir = config_manager.get_models_directory()
        models_path = str(models_dir)
    except ComfyDockError:
        # Models directory not configured yet
        pass

    # Get API credentials
    civitai_token = config_manager.get_civitai_token()

    # Get orchestrator config for extra_args
    orch_config = _load_orchestrator_config(workspace.path)
    extra_args = orch_config.get("comfyui", {}).get("extra_args", [])

    # Build response matching frontend ConfigSettings interface
    config = {
        "workspace_path": str(workspace.path),
        "models_path": models_path,
        "civitai_api_key": civitai_token,
        "huggingface_token": None,  # Not yet supported
        "auto_sync_models": True,   # Not yet supported - default to True
        "confirm_destructive": True, # Not yet supported - default to True
        "comfyui_extra_args": extra_args
    }

    return web.json_response(config)


@routes.post("/v2/comfygit/config")
async def update_config(request: web.Request) -> web.Response:
    """
    Update workspace configuration settings.

    Query params:
        workspace_path: Optional path to workspace (fallback when no environment running)

    Request body (all fields optional):
        {
            "models_path": str,
            "civitai_api_key": str | None,
            "huggingface_token": str | None,  # Not yet supported
            "auto_sync_models": bool,         # Not yet supported
            "confirm_destructive": bool,      # Not yet supported
            "comfyui_extra_args": list[str]
        }

    Returns:
        {
            "status": "updated"
        }
    """
    workspace = _get_workspace_from_request(request)
    if not workspace:
        return web.json_response({
            "error": "No environment detected"
        }, status=500)

    # Parse request body
    try:
        data = await request.json()
    except Exception:
        return web.json_response({
            "error": "Invalid JSON"
        }, status=400)

    config_manager = workspace.workspace_config_manager

    # Update models directory if provided
    if "models_path" in data:
        models_path = data["models_path"]
        if models_path:
            try:
                workspace.set_models_directory(Path(models_path))
            except ComfyDockError as e:
                return web.json_response({
                    "error": str(e)
                }, status=400)

    # Update CivitAI token if provided
    if "civitai_api_key" in data:
        token = data["civitai_api_key"]
        config_manager.set_civitai_token(token)

    # Update ComfyUI extra args if provided
    if "comfyui_extra_args" in data:
        extra_args = data["comfyui_extra_args"]
        if not isinstance(extra_args, list):
            return web.json_response({
                "error": "comfyui_extra_args must be a list of strings"
            }, status=400)

        # Validate all items are strings
        if not all(isinstance(arg, str) for arg in extra_args):
            return web.json_response({
                "error": "comfyui_extra_args must contain only strings"
            }, status=400)

        # Load existing orchestrator config, update, and save
        orch_config = _load_orchestrator_config(workspace.path)
        if "comfyui" not in orch_config:
            orch_config["comfyui"] = {}
        orch_config["comfyui"]["extra_args"] = extra_args
        _save_orchestrator_config(workspace.path, orch_config)

    # Ignore unsupported fields for now:
    # - huggingface_token
    # - auto_sync_models
    # - confirm_destructive

    return web.json_response({
        "status": "updated"
    })
