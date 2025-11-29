"""Import operations API - Preview and execute environment imports."""
import json
import re
import shutil
import tempfile
from pathlib import Path
from typing import Any

from aiohttp import web

from cgm_utils.async_helpers import run_sync
import orchestrator

routes = web.RouteTableDef()

# Valid environment name pattern: alphanumeric, hyphens, underscores
ENV_NAME_PATTERN = re.compile(r'^[a-zA-Z0-9][a-zA-Z0-9_-]*$')


def _serialize_import_analysis(analysis: Any) -> dict:
    """Serialize ImportAnalysis object to dict.

    The core library's ImportAnalysis has:
    - environment_name: str
    - comfyui_version: str | None
    - python_version: str
    - nodes: list[dict]
    - workflows: list[str]
    - models: list[dict]
    - dependencies: dict[str, list[str]]
    """
    # Handle both object attributes and dict-like access
    def get_attr(obj: Any, name: str, default: Any = None) -> Any:
        if hasattr(obj, name):
            return getattr(obj, name)
        if isinstance(obj, dict):
            return obj.get(name, default)
        return default

    nodes = get_attr(analysis, 'nodes', [])
    models = get_attr(analysis, 'models', [])
    workflows = get_attr(analysis, 'workflows', [])

    return {
        "environment_name": get_attr(analysis, 'environment_name', ''),
        "comfyui_version": get_attr(analysis, 'comfyui_version'),
        "python_version": get_attr(analysis, 'python_version', ''),
        "total_nodes": len(nodes) if nodes else 0,
        "nodes": nodes if nodes else [],
        "total_workflows": len(workflows) if workflows else 0,
        "workflows": [{"name": w} if isinstance(w, str) else w for w in (workflows or [])],
        "total_models": len(models) if models else 0,
        "models": models if models else [],
        "dependencies": get_attr(analysis, 'dependencies', {}),
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
        return web.json_response(_serialize_import_analysis(analysis))

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
        return web.json_response(_serialize_import_analysis(analysis))
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
async def import_environment(request: web.Request) -> web.StreamResponse:
    """Import environment from tarball with SSE progress.

    Request: multipart/form-data with fields:
        - file: The tarball file
        - name: New environment name (required)
        - model_strategy: "all" | "required" | "skip" (default: "all")
        - torch_backend: PyTorch backend (default: "auto")

    Response: Server-Sent Events stream with progress updates
    """
    is_managed, workspace, _ = orchestrator.detect_environment_type()
    if not workspace:
        return web.json_response({"error": "Not in workspace"}, status=500)

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
        return web.json_response({"error": "name is required"}, status=400)

    if not temp_file:
        return web.json_response({"error": "file is required"}, status=400)

    # Setup SSE response
    response = web.StreamResponse(
        status=200,
        headers={
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        }
    )
    await response.prepare(request)

    async def send_event(event: str, data: dict):
        """Send an SSE event."""
        msg = f"event: {event}\ndata: {json.dumps(data)}\n\n"
        await response.write(msg.encode())

    # Create callbacks that emit SSE events
    class SSEImportCallbacks:
        def on_phase(self, phase: str, description: str):
            import asyncio
            asyncio.create_task(send_event("phase", {"phase": phase, "description": description}))

        def on_node_installed(self, node_name: str):
            import asyncio
            asyncio.create_task(send_event("node_installed", {"node_name": node_name}))

        def on_download_batch_start(self, count: int):
            import asyncio
            asyncio.create_task(send_event("download_batch_start", {"count": count}))

        def on_download_file_start(self, name: str, index: int, total: int):
            import asyncio
            asyncio.create_task(send_event("download_file_start", {"name": name, "index": index, "total": total}))

        def on_download_file_progress(self, downloaded: int, total: int | None):
            import asyncio
            asyncio.create_task(send_event("download_file_progress", {"downloaded": downloaded, "total": total}))

        def on_download_file_complete(self, name: str, success: bool):
            import asyncio
            asyncio.create_task(send_event("download_file_complete", {"name": name, "success": success}))

        def on_dependency_group_start(self, group_name: str, is_optional: bool):
            import asyncio
            asyncio.create_task(send_event("dependency_group_start", {"group_name": group_name, "is_optional": is_optional}))

        def on_dependency_group_complete(self, group_name: str, success: bool):
            import asyncio
            asyncio.create_task(send_event("dependency_group_complete", {"group_name": group_name, "success": success}))

    callbacks = SSEImportCallbacks()

    try:
        env = await run_sync(
            workspace.import_environment,
            temp_file,
            name,
            model_strategy,
            callbacks,
            torch_backend
        )
        await send_event("complete", {"environment_name": env.name, "path": str(env.path)})
    except Exception as e:
        await send_event("error", {"error": str(e), "recoverable": False})
    finally:
        if temp_file:
            shutil.rmtree(temp_file.parent, ignore_errors=True)

    await response.write_eof()
    return response


@routes.post("/v2/workspace/import/git")
async def import_from_git(request: web.Request) -> web.StreamResponse:
    """Import environment from git repository with SSE progress.

    Request JSON:
        {
            "git_url": "https://github.com/user/repo.git",
            "name": "my-new-env",
            "branch": "main",  // optional
            "model_strategy": "required",  // optional, default "all"
            "torch_backend": "auto"  // optional
        }

    Response: Server-Sent Events stream with progress updates
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

    name = data.get("name", "").strip()
    if not name:
        return web.json_response({"error": "name is required"}, status=400)

    branch = data.get("branch")
    model_strategy = data.get("model_strategy", "all")
    torch_backend = data.get("torch_backend", "auto")

    # Setup SSE response
    response = web.StreamResponse(
        status=200,
        headers={
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        }
    )
    await response.prepare(request)

    async def send_event(event: str, data_dict: dict):
        """Send an SSE event."""
        msg = f"event: {event}\ndata: {json.dumps(data_dict)}\n\n"
        await response.write(msg.encode())

    # Create callbacks that emit SSE events
    class SSEImportCallbacks:
        def on_phase(self, phase: str, description: str):
            import asyncio
            asyncio.create_task(send_event("phase", {"phase": phase, "description": description}))

        def on_node_installed(self, node_name: str):
            import asyncio
            asyncio.create_task(send_event("node_installed", {"node_name": node_name}))

        def on_download_batch_start(self, count: int):
            import asyncio
            asyncio.create_task(send_event("download_batch_start", {"count": count}))

        def on_download_file_start(self, name: str, index: int, total: int):
            import asyncio
            asyncio.create_task(send_event("download_file_start", {"name": name, "index": index, "total": total}))

        def on_download_file_progress(self, downloaded: int, total: int | None):
            import asyncio
            asyncio.create_task(send_event("download_file_progress", {"downloaded": downloaded, "total": total}))

        def on_download_file_complete(self, name: str, success: bool):
            import asyncio
            asyncio.create_task(send_event("download_file_complete", {"name": name, "success": success}))

        def on_dependency_group_start(self, group_name: str, is_optional: bool):
            import asyncio
            asyncio.create_task(send_event("dependency_group_start", {"group_name": group_name, "is_optional": is_optional}))

        def on_dependency_group_complete(self, group_name: str, success: bool):
            import asyncio
            asyncio.create_task(send_event("dependency_group_complete", {"group_name": group_name, "success": success}))

    callbacks = SSEImportCallbacks()

    try:
        env = await run_sync(
            workspace.import_from_git,
            git_url,
            name,
            model_strategy,
            branch,
            callbacks,
            torch_backend
        )
        await send_event("complete", {"environment_name": env.name, "path": str(env.path)})
    except Exception as e:
        await send_event("error", {"error": str(e), "recoverable": False})

    await response.write_eof()
    return response
