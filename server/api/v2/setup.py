"""First-time setup API."""
import logging
import os
import shutil
import threading
import uuid
from pathlib import Path

from aiohttp import web

from comfygit_core.factories.workspace_factory import WorkspaceFactory
from comfygit_core.models.exceptions import CDWorkspaceNotFoundError
import orchestrator

logger = logging.getLogger(__name__)

routes = web.RouteTableDef()

# Global state for initialization task
_init_task_lock = threading.Lock()
_init_task_state = {
    "state": "idle",
    "task_id": None,
    "progress": 0,
    "message": "No initialization in progress",
    "models_found": None,
    "error": None
}


def _update_init_state(state: str, progress: int, message: str, **kwargs):
    """Update initialization state."""
    global _init_task_state
    with _init_task_lock:
        _init_task_state["state"] = state
        _init_task_state["progress"] = progress
        _init_task_state["message"] = message
        for key, value in kwargs.items():
            _init_task_state[key] = value


@routes.get("/v2/setup/status")
async def get_setup_status(request: web.Request) -> web.Response:
    """Get current setup status."""
    # Get default path
    default_path = str(Path.home() / "comfygit")
    if comfygit_home := os.environ.get("COMFYGIT_HOME"):
        default_path = comfygit_home

    # Detect current environment type
    is_managed, workspace, current_env = orchestrator.detect_environment_type()

    # Auto-detect models directory from current ComfyUI
    cwd = Path.cwd()
    detected_models_dir = None
    potential_models = cwd / "models"
    if potential_models.exists() and potential_models.is_dir():
        detected_models_dir = str(potential_models)

    # Check if ComfyUI-Manager is installed in custom_nodes
    has_comfyui_manager = (cwd / "custom_nodes" / "ComfyUI-Manager").is_dir()

    # CLI detection
    cli_path = shutil.which('comfygit') or shutil.which('cg')
    cli_installed = cli_path is not None

    if is_managed and workspace and current_env:
        # Fully managed
        return web.json_response({
            "state": "managed",
            "workspace_path": str(workspace.path),
            "default_path": default_path,
            "environments": [e.name for e in workspace.list_environments()],
            "current_environment": current_env.name,
            "detected_models_dir": None,
            "has_comfyui_manager": has_comfyui_manager,
            "cli_installed": cli_installed,
            "cli_path": cli_path
        })

    # Try to find workspace at default location
    try:
        workspace = WorkspaceFactory.find()
        envs = workspace.list_environments()

        if not envs:
            return web.json_response({
                "state": "empty_workspace",
                "workspace_path": str(workspace.path),
                "default_path": default_path,
                "environments": [],
                "current_environment": None,
                "detected_models_dir": detected_models_dir,
                "has_comfyui_manager": has_comfyui_manager,
                "cli_installed": cli_installed,
                "cli_path": cli_path
            })
        else:
            return web.json_response({
                "state": "unmanaged",
                "workspace_path": str(workspace.path),
                "default_path": default_path,
                "environments": [e.name for e in envs],
                "current_environment": None,
                "detected_models_dir": detected_models_dir,
                "has_comfyui_manager": has_comfyui_manager,
                "cli_installed": cli_installed,
                "cli_path": cli_path
            })

    except CDWorkspaceNotFoundError:
        return web.json_response({
            "state": "no_workspace",
            "workspace_path": None,
            "default_path": default_path,
            "environments": [],
            "current_environment": None,
            "detected_models_dir": detected_models_dir,
            "has_comfyui_manager": has_comfyui_manager,
            "cli_installed": cli_installed,
            "cli_path": cli_path
        })


@routes.post("/v2/setup/validate_path")
async def validate_path(request: web.Request) -> web.Response:
    """Validate a path for workspace or models use."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    path_str = body.get("path")
    path_type = body.get("type")

    if not path_str:
        return web.json_response({"error": "Missing path"}, status=400)
    if not path_type:
        return web.json_response({"error": "Missing type"}, status=400)

    path = Path(path_str).expanduser().resolve()

    if path_type == "workspace":
        return _validate_workspace_path(path)
    elif path_type == "models":
        return _validate_models_path(path)
    else:
        return web.json_response({"error": f"Invalid type: {path_type}"}, status=400)


def _validate_workspace_path(path: Path) -> web.Response:
    """Validate a path for workspace creation."""
    # Check if workspace already exists
    try:
        WorkspaceFactory.find(path)
        return web.json_response({
            "valid": False,
            "error": "Workspace already exists at this location"
        })
    except CDWorkspaceNotFoundError:
        pass

    # Check if path exists and is not empty
    if path.exists():
        if not path.is_dir():
            return web.json_response({
                "valid": False,
                "error": "Path exists but is not a directory"
            })
        if any(path.iterdir()):
            return web.json_response({
                "valid": False,
                "error": "Directory exists and is not empty"
            })

    # Check if parent is writable
    parent = path.parent
    if not parent.exists():
        return web.json_response({
            "valid": False,
            "error": f"Parent directory does not exist: {parent}"
        })

    # Try to check write permission
    try:
        test_file = parent / f".comfygit_write_test_{uuid.uuid4().hex[:8]}"
        test_file.touch()
        test_file.unlink()
    except PermissionError:
        return web.json_response({
            "valid": False,
            "error": "Cannot write to this location"
        })

    return web.json_response({"valid": True})


def _validate_models_path(path: Path) -> web.Response:
    """Validate a path as models directory."""
    if not path.exists():
        return web.json_response({
            "valid": False,
            "error": "Path does not exist"
        })

    if not path.is_dir():
        return web.json_response({
            "valid": False,
            "error": "Path is not a directory"
        })

    # Check if this looks like ComfyUI root instead of models dir
    if (path / "main.py").exists() or (path / "comfy").exists():
        models_subdir = path / "models"
        if models_subdir.exists():
            return web.json_response({
                "valid": False,
                "error": "This appears to be a ComfyUI installation, not a models directory",
                "suggestion": str(models_subdir)
            })
        else:
            return web.json_response({
                "valid": False,
                "error": "This appears to be a ComfyUI installation without a models directory"
            })

    # Quick count of model files
    model_count = 0
    try:
        for item in path.rglob("*"):
            if item.is_file() and item.suffix.lower() in {'.safetensors', '.ckpt', '.pt', '.pth', '.bin', '.onnx'}:
                model_count += 1
    except PermissionError:
        pass

    return web.json_response({
        "valid": True,
        "model_count": model_count
    })


@routes.post("/v2/setup/initialize_workspace")
async def initialize_workspace(request: web.Request) -> web.Response:
    """Initialize a new workspace."""
    global _init_task_state

    # Check if already in progress
    with _init_task_lock:
        if _init_task_state["state"] not in ("idle", "complete", "error"):
            return web.json_response({
                "error": "Initialization already in progress"
            }, status=409)

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    workspace_path = body.get("workspace_path")
    models_directory = body.get("models_directory")

    # Expand and resolve path
    if workspace_path:
        workspace_path = Path(workspace_path).expanduser().resolve()
    else:
        workspace_path = Path.home() / "comfygit"

    if models_directory:
        models_directory = Path(models_directory).expanduser().resolve()

    # Generate task ID
    task_id = str(uuid.uuid4())

    # Reset state
    with _init_task_lock:
        _init_task_state = {
            "state": "creating_workspace",
            "task_id": task_id,
            "progress": 5,
            "message": "Starting workspace creation...",
            "models_found": None,
            "error": None
        }

    # Start background thread
    thread = threading.Thread(
        target=_run_initialize_workspace,
        args=(workspace_path, models_directory),
        daemon=True
    )
    thread.start()

    return web.json_response({
        "status": "started",
        "task_id": task_id
    })


def _install_self_as_system_node(workspace):
    """Copy comfygit-manager into workspace system_nodes.

    Since we ARE comfygit-manager running inside ComfyUI, we can copy
    ourselves directly rather than cloning from GitHub. This ensures
    the management panel is available in all environments.
    """
    # Find comfygit-manager root (go up from server/api/v2/setup.py)
    manager_root = Path(__file__).parent.parent.parent.parent

    # Validate this is actually comfygit-manager
    if not (manager_root / "__init__.py").exists():
        logger.warning("Could not locate comfygit-manager root, skipping self-install")
        return

    target_path = workspace.paths.system_nodes / "comfygit-manager"

    if target_path.exists():
        logger.debug("comfygit-manager already exists in system_nodes")
        return

    # Ensure parent directory exists
    workspace.paths.system_nodes.mkdir(parents=True, exist_ok=True)

    # Patterns to exclude from copy (development artifacts)
    EXCLUDE_PATTERNS = {
        '.venv', 'venv', '__pycache__', '.git', '.pytest_cache',
        '.ruff_cache', 'node_modules', '.env', '.coverage',
        '.mypy_cache', 'htmlcov', '.tox', 'dist', 'build',
        '.claude', 'testing', 'api-testing'
    }

    def ignore_patterns(directory, files):
        return [f for f in files if f in EXCLUDE_PATTERNS or f.endswith('.pyc')]

    try:
        shutil.copytree(
            manager_root,
            target_path,
            ignore=ignore_patterns,
            dirs_exist_ok=False
        )
        logger.info("Installed comfygit-manager to workspace system_nodes")
    except Exception as e:
        logger.warning(f"Failed to install comfygit-manager: {e}")


def _run_initialize_workspace(workspace_path: Path, models_dir: Path | None):
    """Background thread function to initialize workspace."""
    import time
    from comfygit_core.analyzers.model_scanner import ModelScanProgress

    try:
        # Phase 1: Create workspace
        _update_init_state("creating_workspace", 10, "Creating workspace structure...")
        workspace = WorkspaceFactory.create(workspace_path)
        _update_init_state("creating_workspace", 20, "Workspace structure created")

        # Install comfygit-manager into system_nodes
        _install_self_as_system_node(workspace)

        # Phase 2: Set models directory with progress (if provided)
        if models_dir:
            class ProgressCallback(ModelScanProgress):
                def on_scan_start(self, total_files: int):
                    logger.info(f"[Setup] Model scan starting: {total_files} files")
                    self.total = total_files
                    if total_files == 0:
                        _update_init_state("scanning_models", 95, "No model files found to index")
                    else:
                        _update_init_state("scanning_models", 30, f"Found {total_files} files to scan...")

                def on_file_processed(self, current: int, total: int, filename: str):
                    logger.debug(f"[Setup] Processing {current}/{total}: {filename}")
                    # Map to 30-95% progress range
                    pct = 30 + int((current / max(total, 1)) * 65)
                    _update_init_state("scanning_models", pct, f"Scanning models ({current}/{total})...")

                def on_scan_complete(self, result):
                    logger.info(f"[Setup] Model scan complete: {result.added_count} added")
                    _update_init_state(
                        "complete", 100,
                        f"Complete! {result.added_count} models indexed",
                        models_found=result.added_count
                    )

            _update_init_state("scanning_models", 25, "Scanning models directory...")
            # Pass progress to set_models_directory - the scan happens there
            workspace.set_models_directory(models_dir, progress=ProgressCallback())
        else:
            _update_init_state("complete", 100, "Workspace created successfully", models_found=0)

    except Exception as e:
        logger.error(f"[Setup] Workspace initialization failed: {e}")
        _update_init_state("error", 0, f"Failed: {e}", error=str(e))


@routes.get("/v2/setup/initialize_status")
async def get_initialize_status(request: web.Request) -> web.Response:
    """Get workspace initialization status."""
    with _init_task_lock:
        return web.json_response(_init_task_state.copy())


@routes.post("/v2/setup/reset")
async def reset_initialization(request: web.Request) -> web.Response:
    """Reset initialization state. Use if user got stuck during setup."""
    global _init_task_state

    with _init_task_lock:
        # Only reset if stuck in a non-terminal state
        if _init_task_state["state"] in ("creating_workspace", "setting_models_dir", "scanning_models"):
            _init_task_state = {
                "state": "idle",
                "task_id": None,
                "progress": 0,
                "message": "Initialization reset by user",
                "models_found": None,
                "error": None
            }
            return web.json_response({"status": "reset"})
        else:
            return web.json_response({
                "status": "no_action",
                "message": f"Cannot reset from state: {_init_task_state['state']}"
            })
