"""Import operations API - Preview and execute environment imports."""
import shutil
import tempfile
import threading
import traceback
from dataclasses import asdict
from datetime import datetime, timezone
from pathlib import Path

from aiohttp import web

from cgm_core.current_environment_import import (
    import_current_environment,
    scan_current_environment,
)
from cgm_utils.async_helpers import run_sync
from cgm_utils.environment_name_validation import validate_environment_name as validate_environment_name_format
from comfygit_core import Workspace
from comfygit_core.models import CDWorkspaceNotFoundError
import orchestrator

routes = web.RouteTableDef()


# Import task state (similar to create environment pattern)
_import_task_lock = threading.Lock()
_import_task_state = {
    "state": "idle",  # idle, importing, complete, error
    "phase": None,  # Current phase ID
    "progress": 0,  # 0-100 percentage
    "message": "",
    "environment_name": None,
    "error": None,
    "logs": []
    }


def _reset_import_task(message: str, environment_name: str | None = None) -> None:
    _import_task_state["state"] = "importing"
    _import_task_state["phase"] = None
    _import_task_state["progress"] = 0
    _import_task_state["message"] = message
    _import_task_state["environment_name"] = environment_name
    _import_task_state["error"] = None
    _import_task_state["logs"] = []
    _append_import_log_locked(message)


def _append_import_log_locked(message: str, level: str = "info") -> None:
    logs = _import_task_state.setdefault("logs", [])
    logs.append({
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "level": level,
        "message": message,
    })
    del logs[:-300]


class ServerImportProgress:
    """Implements ImportCallbacks protocol for API state updates."""

    # Phase to progress mapping
    PHASE_PROGRESS = {
        "restore_comfyui": 10,
        "clone_comfyui": 10,
        "extract_builtins": 20,
        "probe_pytorch": 30,
        "configure_pytorch": 30,
        "init_git": 35,
        "copy_workflows": 40,
        "detect_overlays": 50,
        "add_requirements": 55,
        "create_venv": 35,
        "install_pytorch": 50,
        "install_dependencies": 60,
        "sync_environment": 70,
        "sync_nodes": 70,
        "resolve_models": 85,
        "download_models": 90,
        "finalize": 95,
        "complete": 100,
    }

    def on_phase(self, phase: str, description: str) -> None:
        with _import_task_lock:
            _import_task_state["phase"] = phase
            _import_task_state["progress"] = self.PHASE_PROGRESS.get(phase, 50)
            _import_task_state["message"] = description
            _append_import_log_locked(description)

    def on_dependency_group_start(self, group_name: str, is_optional: bool) -> None:
        with _import_task_lock:
            _import_task_state["message"] = f"Installing {group_name}..."
            _append_import_log_locked(f"Installing dependency group: {group_name}")

    def on_dependency_group_complete(self, group_name: str, success: bool, error: str | None = None) -> None:
        with _import_task_lock:
            if success:
                _append_import_log_locked(f"Installed dependency group: {group_name}")
            else:
                _import_task_state["error"] = error
                _append_import_log_locked(f"Dependency group failed: {group_name} - {error}", "error")

    def on_workflow_copied(self, workflow_name: str) -> None:
        with _import_task_lock:
            _import_task_state["message"] = f"Copying workflow: {workflow_name}"
            _append_import_log_locked(f"Copied workflow: {workflow_name}")

    def on_node_installed(self, node_name: str) -> None:
        with _import_task_lock:
            _import_task_state["message"] = f"Installing node: {node_name}"
            _append_import_log_locked(f"Installed node: {node_name}")

    def on_workflow_resolved(self, workflow_name: str, downloads: int) -> None:
        with _import_task_lock:
            _import_task_state["message"] = f"Resolved {workflow_name} ({downloads} models)"
            _append_import_log_locked(f"Resolved workflow: {workflow_name} ({downloads} model downloads)")

    def on_error(self, error: str) -> None:
        # Non-fatal errors - just log
        with _import_task_lock:
            _append_import_log_locked(error, "warning")
        print(f"[ComfyGit] Import warning: {error}")

    def on_download_failures(self, failures: list[tuple[str, str]]) -> None:
        # Track but don't fail
        with _import_task_lock:
            _append_import_log_locked(f"Model download failures: {len(failures)}", "warning")
        print(f"[ComfyGit] Model download failures: {len(failures)}")

    def on_download_batch_start(self, count: int) -> None:
        with _import_task_lock:
            _import_task_state["phase"] = "download_models"
            _import_task_state["progress"] = 90
            _import_task_state["message"] = f"Downloading {count} model(s)..."
            _append_import_log_locked(f"Downloading {count} model(s)")

    def on_download_file_start(self, name: str, idx: int, total: int) -> None:
        with _import_task_lock:
            _import_task_state["message"] = f"Downloading {name} ({idx}/{total})"
            _append_import_log_locked(f"Downloading model {idx}/{total}: {name}")

    def on_download_file_progress(self, downloaded: int, total: int | None) -> None:
        # Could add more granular progress here if needed
        pass

    def on_download_file_complete(self, name: str, success: bool, error: str | None) -> None:
        with _import_task_lock:
            if success:
                _append_import_log_locked(f"Downloaded model: {name}")
            else:
                _append_import_log_locked(f"Model download failed: {name} - {error}", "error")
                print(f"[ComfyGit] Model download failed: {name} - {error}")

    def on_download_batch_complete(self, success: int, total: int) -> None:
        with _import_task_lock:
            _import_task_state["message"] = f"Downloaded {success}/{total} models"
            _append_import_log_locked(f"Downloaded {success}/{total} models")


def _validate_env_name(name: str) -> tuple[bool, str | None]:
    """Validate environment name format.

    Returns (is_valid, error_message).
    """
    return validate_environment_name_format(name)


def _run_import_environment(workspace, tarball_path: Path, name: str, model_strategy: str, torch_backend: str):
    """Background thread function to import environment from tarball."""
    global _import_task_state

    try:
        with _import_task_lock:
            _import_task_state["state"] = "importing"
            _import_task_state["phase"] = None
            _import_task_state["progress"] = 0
            _import_task_state["message"] = f"Importing environment '{name}'..."
            _import_task_state["environment_name"] = None
            _import_task_state["error"] = None
            _import_task_state["logs"] = []
            _append_import_log_locked(f"Importing environment '{name}' from tarball")

        # Create progress callbacks
        progress = ServerImportProgress()

        # Call the core library to import the environment
        env = workspace.import_environment(
            tarball_path=tarball_path,
            name=name,
            model_strategy=model_strategy,
            callbacks=progress,
            torch_backend=torch_backend
        )

        with _import_task_lock:
            _import_task_state["state"] = "complete"
            _import_task_state["phase"] = "complete"
            _import_task_state["progress"] = 100
            _import_task_state["message"] = f"Environment '{name}' imported successfully"
            _import_task_state["environment_name"] = env.name
            _import_task_state["error"] = None
            _append_import_log_locked(f"Environment '{name}' imported successfully")

    except Exception as e:
        with _import_task_lock:
            _import_task_state["state"] = "error"
            _import_task_state["message"] = "Failed to import environment"
            _import_task_state["error"] = str(e)
            _append_import_log_locked(f"Failed to import environment: {e}", "error")
        print(f"[ComfyGit] Environment import failed: {e}")
    finally:
        # Clean up temp file
        shutil.rmtree(tarball_path.parent, ignore_errors=True)


def _run_import_from_git(
    workspace,
    git_url: str,
    name: str,
    model_strategy: str,
    torch_backend: str,
    branch: str | None,
):
    """Background thread function to import environment from git repository."""
    global _import_task_state

    try:
        with _import_task_lock:
            _import_task_state["state"] = "importing"
            _import_task_state["phase"] = None
            _import_task_state["progress"] = 0
            ref_suffix = f" ({branch})" if branch else ""
            _import_task_state["message"] = f"Importing environment '{name}' from git{ref_suffix}..."
            _import_task_state["environment_name"] = None
            _import_task_state["error"] = None
            _import_task_state["logs"] = []
            _append_import_log_locked(f"Importing environment '{name}' from git{ref_suffix}")

        # Create progress callbacks
        progress = ServerImportProgress()

        # Call the core library to import from git
        env = workspace.import_from_git(
            git_url=git_url,
            name=name,
            model_strategy=model_strategy,
            branch=branch,
            callbacks=progress,
            torch_backend=torch_backend
        )

        with _import_task_lock:
            _import_task_state["state"] = "complete"
            _import_task_state["phase"] = "complete"
            _import_task_state["progress"] = 100
            _import_task_state["message"] = f"Environment '{name}' imported successfully"
            _import_task_state["environment_name"] = env.name
            _import_task_state["error"] = None
            _append_import_log_locked(f"Environment '{name}' imported successfully")

    except Exception as e:
        with _import_task_lock:
            _import_task_state["state"] = "error"
            _import_task_state["message"] = "Failed to import environment"
            _import_task_state["error"] = str(e)
            _append_import_log_locked(f"Failed to import git environment: {e}", "error")
        print(f"[ComfyGit] Git environment import failed: {e}")


def _run_import_current_environment(
    workspace,
    name: str,
    source_path: str | None,
    torch_backend: str,
):
    """Background thread function to import the currently running ComfyUI install."""
    global _import_task_state

    try:
        with _import_task_lock:
            _reset_import_task(f"Importing current ComfyUI as '{name}'...", name)

        progress = ServerImportProgress()
        result = import_current_environment(
            workspace,
            name=name,
            source_path=source_path,
            torch_backend=torch_backend,
            callbacks=progress,
        )

        with _import_task_lock:
            _import_task_state["state"] = "complete"
            _import_task_state["phase"] = "complete"
            _import_task_state["progress"] = 100
            _import_task_state["message"] = (
                f"Environment '{name}' imported successfully "
                f"({result.workflows_copied} workflows, {result.custom_nodes_copied} custom nodes)"
            )
            _import_task_state["environment_name"] = result.environment_name
            _import_task_state["error"] = None
            for warning in result.warnings:
                _append_import_log_locked(warning, "warning")
            _append_import_log_locked(f"Environment '{name}' imported successfully")

    except Exception as e:
        with _import_task_lock:
            _import_task_state["state"] = "error"
            _import_task_state["message"] = "Failed to import current environment"
            _import_task_state["error"] = str(e)
            _append_import_log_locked(f"Failed to import current environment: {e}", "error")
        print(f"[ComfyGit] Current environment import failed: {e}")
        traceback.print_exc()


def _get_workspace_for_import(workspace_path: str | None):
    if workspace_path:
        try:
            return Workspace.open(Path(workspace_path).expanduser())
        except CDWorkspaceNotFoundError:
            raise FileNotFoundError(f"Workspace not found at {workspace_path}") from None

    _, workspace, _ = orchestrator.detect_environment_type()
    if not workspace:
        raise FileNotFoundError("Not in workspace")
    return workspace


@routes.post("/v2/workspace/import/git/refs")
async def get_git_import_refs(request: web.Request) -> web.Response:
    """Discover remote refs for a git environment import.

    Request JSON:
        {"git_url": "https://github.com/user/repo.git"}

    Response:
        {
            "default_branch": "main",
            "head_commit": "...",
            "branches": [{"name": "main", "commit": "...", "is_default": true}],
            "tags": [{"name": "v1.0.0", "commit": "..."}]
        }
    """
    is_managed, workspace, _ = orchestrator.detect_environment_type()
    if not workspace:
        return web.json_response({"error": "Not in workspace"}, status=500)

    try:
        data = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    git_url = data.get("git_url")
    if not git_url:
        return web.json_response({"error": "git_url is required"}, status=400)

    try:
        refs = await run_sync(workspace.list_remote_refs, git_url)
        return web.json_response(refs.to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=400)


@routes.post("/v2/workspace/import/current/preview")
async def preview_current_import(request: web.Request) -> web.Response:
    """Preview best-effort import of the currently running unmanaged ComfyUI install."""
    try:
        data = await request.json()
    except Exception:
        data = {}

    source_path = data.get("source_path") if isinstance(data, dict) else None
    workspace_path = data.get("workspace_path") if isinstance(data, dict) else None
    node_registry_lookup = None

    try:
        workspace = _get_workspace_for_import(workspace_path)
        node_registry_lookup = getattr(workspace, "node_mapping_repository", None)
    except Exception:
        # Preview still works without registry metadata; unresolved provenance is
        # surfaced as warnings and rechecked during the actual import.
        node_registry_lookup = None

    try:
        preview = await run_sync(
            scan_current_environment,
            source_path,
            node_registry_lookup,
        )
        return web.json_response(preview.to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=400)


@routes.post("/v2/workspace/import/preview")
async def preview_import(request: web.Request) -> web.Response:
    """Preview import from uploaded tarball.

    Request: multipart/form-data with 'file' field containing .tar.gz

    Response: ImportAnalysis JSON
    """
    is_managed, workspace, _ = orchestrator.detect_environment_type()
    if not workspace:
        return web.json_response({"error": "Not in workspace"}, status=500)

    # Handle multipart upload
    try:
        reader = await request.multipart()
    except Exception:
        return web.json_response({"error": "Expected multipart form data"}, status=400)

    field = await reader.next()
    if not field or field.name != 'file':
        return web.json_response({"error": "Expected 'file' field"}, status=400)

    # Save to temp file
    temp_dir = Path(tempfile.mkdtemp())
    filename = field.filename or "upload.tar.gz"
    temp_file = temp_dir / filename

    try:
        with open(temp_file, 'wb') as f:
            while chunk := await field.read_chunk():
                f.write(chunk)

        # Call workspace.preview_import
        analysis = await run_sync(workspace.preview_import, temp_file)
        return web.json_response(asdict(analysis))

    except Exception as e:
        print(f"[ComfyGit] Import preview failed: {e}")
        traceback.print_exc()
        return web.json_response({"error": str(e)}, status=400)
    finally:
        shutil.rmtree(temp_dir, ignore_errors=True)


@routes.post("/v2/workspace/import/preview/git")
async def preview_git_import(request: web.Request) -> web.Response:
    """Preview import from git repository.

    Request JSON:
        {
            "git_url": "https://github.com/user/repo.git",
            "branch": "main"  // optional
        }

    Response: ImportAnalysis JSON
    """
    is_managed, workspace, _ = orchestrator.detect_environment_type()
    if not workspace:
        return web.json_response({"error": "Not in workspace"}, status=500)

    try:
        data = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    git_url = data.get("git_url")
    if not git_url:
        return web.json_response({"error": "git_url is required"}, status=400)

    branch = data.get("branch") or data.get("ref")

    try:
        analysis = await run_sync(workspace.preview_git_import, git_url, branch)
        return web.json_response(asdict(analysis))
    except Exception as e:
        return web.json_response({"error": str(e)}, status=400)


@routes.get("/v2/workspace/environments/validate")
async def validate_environment_name(request: web.Request) -> web.Response:
    """Validate environment name availability and format.

    Query params:
        name: The environment name to validate

    Response:
        {"valid": true, "name": "my-env"}
        or
        {"valid": false, "error": "Environment 'my-env' already exists"}
    """
    is_managed, workspace, _ = orchestrator.detect_environment_type()
    if not workspace:
        return web.json_response({"error": "Not in workspace"}, status=500)

    name = request.query.get("name", "").strip()
    if not name:
        return web.json_response({"error": "name parameter is required"}, status=400)

    # Validate format
    is_valid, error = _validate_env_name(name)
    if not is_valid:
        return web.json_response({"valid": False, "error": error})

    # Check if name already exists
    try:
        existing_envs = await run_sync(workspace.list_environments)
        if any(env.name == name for env in existing_envs):
            return web.json_response({
                "valid": False,
                "error": f"Environment '{name}' already exists"
            })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response({"valid": True, "name": name})


@routes.post("/v2/workspace/import")
async def import_environment(request: web.Request) -> web.Response:
    """Import environment from tarball (starts background task).

    Request: multipart/form-data with fields:
        - file: The tarball file
        - name: New environment name (required)
        - model_strategy: "all" | "required" | "skip" (default: "all")
        - torch_backend: PyTorch backend (default: "auto")

    Response:
        {"status": "started", "message": "Importing environment..."}
    """
    global _import_task_state

    is_managed, workspace, _ = orchestrator.detect_environment_type()
    if not workspace:
        return web.json_response({"error": "Not in workspace"}, status=500)

    # Check if import already in progress
    with _import_task_lock:
        if _import_task_state["state"] == "importing":
            return web.json_response({
                "status": "error",
                "message": "Another import is already in progress"
            }, status=409)

    # Parse multipart
    try:
        reader = await request.multipart()
    except Exception:
        return web.json_response({"error": "Expected multipart form data"}, status=400)

    temp_file = None
    name = None
    model_strategy = "all"
    torch_backend = "auto"

    async for field in reader:
        if field.name == 'file':
            temp_dir = Path(tempfile.mkdtemp())
            filename = field.filename or "upload.tar.gz"
            temp_file = temp_dir / filename
            with open(temp_file, 'wb') as f:
                while chunk := await field.read_chunk():
                    f.write(chunk)
        elif field.name == 'name':
            name = (await field.read()).decode().strip()
        elif field.name == 'model_strategy':
            model_strategy = (await field.read()).decode()
        elif field.name == 'torch_backend':
            torch_backend = (await field.read()).decode()

    if not name:
        if temp_file:
            shutil.rmtree(temp_file.parent, ignore_errors=True)
        return web.json_response({"status": "error", "message": "name is required"}, status=400)

    if not temp_file:
        return web.json_response({"status": "error", "message": "file is required"}, status=400)

    # Validate name
    is_valid, error = _validate_env_name(name)
    if not is_valid:
        shutil.rmtree(temp_file.parent, ignore_errors=True)
        return web.json_response({"status": "error", "message": error}, status=400)

    # Check if environment already exists
    try:
        existing_envs = await run_sync(workspace.list_environments)
        if any(env.name == name for env in existing_envs):
            shutil.rmtree(temp_file.parent, ignore_errors=True)
            return web.json_response({
                "status": "error",
                "message": f"Environment '{name}' already exists"
            }, status=400)
    except Exception as e:
        shutil.rmtree(temp_file.parent, ignore_errors=True)
        return web.json_response({"status": "error", "message": str(e)}, status=500)

    # Start import in background thread
    thread = threading.Thread(
        target=_run_import_environment,
        args=(workspace, temp_file, name, model_strategy, torch_backend),
        daemon=True
    )
    thread.start()

    return web.json_response({
        "status": "started",
        "message": f"Importing environment '{name}'..."
    })


@routes.post("/v2/workspace/import/current")
async def import_current(request: web.Request) -> web.Response:
    """Import the currently running unmanaged ComfyUI install as a managed environment."""
    global _import_task_state

    with _import_task_lock:
        if _import_task_state["state"] == "importing":
            return web.json_response({
                "status": "error",
                "message": "Another import is already in progress"
            }, status=409)

    try:
        data = await request.json()
    except Exception:
        return web.json_response({"status": "error", "message": "Invalid JSON"}, status=400)

    name = (data.get("name") or "").strip()
    source_path = data.get("source_path")
    workspace_path = data.get("workspace_path")
    torch_backend = data.get("torch_backend", "auto")

    if not name:
        return web.json_response({"status": "error", "message": "name is required"}, status=400)

    is_valid, error = _validate_env_name(name)
    if not is_valid:
        return web.json_response({"status": "error", "message": error}, status=400)

    try:
        workspace = _get_workspace_for_import(workspace_path)
    except FileNotFoundError as e:
        return web.json_response({"status": "error", "message": str(e)}, status=404)

    try:
        existing_envs = await run_sync(workspace.list_environments)
        if any(env.name == name for env in existing_envs):
            return web.json_response({
                "status": "error",
                "message": f"Environment '{name}' already exists"
            }, status=400)
    except Exception as e:
        return web.json_response({"status": "error", "message": str(e)}, status=500)

    thread = threading.Thread(
        target=_run_import_current_environment,
        args=(workspace, name, source_path, torch_backend),
        daemon=True,
    )
    thread.start()

    return web.json_response({
        "status": "started",
        "message": f"Importing current ComfyUI as '{name}'..."
    })


@routes.get("/v2/workspace/import/status")
async def get_import_status(request: web.Request) -> web.Response:
    """Get current import task status.

    Response:
        {"state": "idle", "phase": null, "progress": 0, "message": "", ...}
        or
        {"state": "importing", "phase": "extract_builtins", "progress": 20, ...}
        or
        {"state": "complete", "phase": "complete", "progress": 100, ...}
        or
        {"state": "error", "message": "Failed", "error": "details"}
    """
    with _import_task_lock:
        return web.json_response({
            "state": _import_task_state["state"],
            "phase": _import_task_state["phase"],
            "progress": _import_task_state["progress"],
            "message": _import_task_state["message"],
            "environment_name": _import_task_state["environment_name"],
            "error": _import_task_state["error"],
            "logs": list(_import_task_state.get("logs", []))
        })


@routes.post("/v2/workspace/import/git")
async def import_from_git(request: web.Request) -> web.Response:
    """Import environment from git repository (starts background task).

    Request JSON:
        {
            "git_url": "https://github.com/user/repo.git",
            "name": "my-env",
            "model_strategy": "all" | "required" | "skip",
            "torch_backend": "auto",
            "branch": "main"  // optional branch, tag, or commit
        }

    Response:
        {"status": "started", "message": "Importing environment..."}
    """
    global _import_task_state

    is_managed, workspace, _ = orchestrator.detect_environment_type()
    if not workspace:
        return web.json_response({"error": "Not in workspace"}, status=500)

    # Check if import already in progress
    with _import_task_lock:
        if _import_task_state["state"] == "importing":
            return web.json_response({
                "status": "error",
                "message": "Another import is already in progress"
            }, status=409)

    # Parse JSON body
    try:
        data = await request.json()
    except Exception:
        return web.json_response({"status": "error", "message": "Invalid JSON"}, status=400)

    git_url = data.get("git_url")
    name = data.get("name")
    model_strategy = data.get("model_strategy", "all")
    torch_backend = data.get("torch_backend", "auto")
    branch = data.get("branch") or data.get("ref")

    if not git_url:
        return web.json_response({"status": "error", "message": "git_url is required"}, status=400)

    if not name:
        return web.json_response({"status": "error", "message": "name is required"}, status=400)

    # Validate name
    is_valid, error = _validate_env_name(name)
    if not is_valid:
        return web.json_response({"status": "error", "message": error}, status=400)

    # Check if environment already exists
    try:
        existing_envs = await run_sync(workspace.list_environments)
        if any(env.name == name for env in existing_envs):
            return web.json_response({
                "status": "error",
                "message": f"Environment '{name}' already exists"
            }, status=400)
    except Exception as e:
        return web.json_response({"status": "error", "message": str(e)}, status=500)

    # Start import in background thread
    thread = threading.Thread(
        target=_run_import_from_git,
        args=(workspace, git_url, name, model_strategy, torch_backend, branch),
        daemon=True
    )
    thread.start()

    return web.json_response({
        "status": "started",
        "message": f"Importing environment '{name}'..."
    })
