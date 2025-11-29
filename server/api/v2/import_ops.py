"""Import operations API - Preview and execute environment imports."""
import re
import shutil
import tempfile
import threading
from dataclasses import asdict
from pathlib import Path

from aiohttp import web

from cgm_utils.async_helpers import run_sync
import orchestrator

routes = web.RouteTableDef()

# Valid environment name pattern: alphanumeric, hyphens, underscores
ENV_NAME_PATTERN = re.compile(r'^[a-zA-Z0-9][a-zA-Z0-9_-]*$')

# Import task state (similar to create environment pattern)
_import_task_lock = threading.Lock()
_import_task_state = {
    "state": "idle",  # idle, importing, complete, error
    "message": "",
    "environment_name": None,
    "error": None
}


def _validate_env_name(name: str) -> tuple[bool, str | None]:
    """Validate environment name format.

    Returns (is_valid, error_message).
    """
    if not name:
        return False, "Name is required"
    if len(name) > 64:
        return False, "Name must be 64 characters or less"
    if not ENV_NAME_PATTERN.match(name):
        return False, "Name contains invalid characters. Use only letters, numbers, hyphens, and underscores."
    return True, None


def _run_import_environment(workspace, tarball_path: Path, name: str, model_strategy: str, torch_backend: str):
    """Background thread function to import environment."""
    global _import_task_state

    try:
        with _import_task_lock:
            _import_task_state["state"] = "importing"
            _import_task_state["message"] = f"Importing environment '{name}'..."
            _import_task_state["environment_name"] = None
            _import_task_state["error"] = None

        # Call the core library to import the environment
        env = workspace.import_environment(
            tarball_path=tarball_path,
            name=name,
            model_strategy=model_strategy,
            callbacks=None,  # No callbacks for polling approach
            torch_backend=torch_backend
        )

        with _import_task_lock:
            _import_task_state["state"] = "complete"
            _import_task_state["message"] = f"Environment '{name}' imported successfully"
            _import_task_state["environment_name"] = env.name
            _import_task_state["error"] = None

    except Exception as e:
        with _import_task_lock:
            _import_task_state["state"] = "error"
            _import_task_state["message"] = "Failed to import environment"
            _import_task_state["error"] = str(e)
        print(f"[ComfyGit] Environment import failed: {e}")
    finally:
        # Clean up temp file
        shutil.rmtree(tarball_path.parent, ignore_errors=True)


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

    branch = data.get("branch")

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


@routes.get("/v2/workspace/import/status")
async def get_import_status(request: web.Request) -> web.Response:
    """Get current import task status.

    Response:
        {"state": "idle", "message": "No import in progress"}
        or
        {"state": "importing", "message": "Importing environment 'foo'..."}
        or
        {"state": "complete", "message": "Environment imported", "environment_name": "foo"}
        or
        {"state": "error", "message": "Failed", "error": "details"}
    """
    with _import_task_lock:
        return web.json_response({
            "state": _import_task_state["state"],
            "message": _import_task_state["message"],
            "environment_name": _import_task_state["environment_name"],
            "error": _import_task_state["error"]
        })
