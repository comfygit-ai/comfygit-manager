"""Orchestrator proxy API routes.

These routes proxy requests to the orchestrator's control server,
allowing the frontend to communicate with the orchestrator through
ComfyUI's same-origin API (works with cloud proxies).
"""
import asyncio
import os

import aiohttp
from aiohttp import web, ClientTimeout

from comfygit_core.runtime import read_switch_status

import orchestrator
from cgm_core.runtime_context import build_runtime_context, ensure_capability

routes = web.RouteTableDef()
RESTART_EXIT_CODE = 42


async def _get_orchestrator_url() -> str | None:
    """Get orchestrator control server URL."""
    is_managed, workspace, _ = orchestrator.detect_environment_type()
    if not is_managed or not workspace:
        return None

    port_file = workspace.path / ".metadata" / ".control_port"
    if not port_file.exists():
        return None

    try:
        port = int(port_file.read_text().strip())
        return f"http://127.0.0.1:{port}"
    except (ValueError, IOError):
        return None


async def _proxy_request(method: str, path: str, timeout: float = 5.0) -> web.Response:
    """Proxy a request to the orchestrator control server."""
    base_url = await _get_orchestrator_url()
    if not base_url:
        return web.json_response({
            "error": "orchestrator_unavailable",
            "message": "Orchestrator control server not available"
        }, status=503)

    try:
        async with aiohttp.ClientSession(timeout=ClientTimeout(total=timeout)) as session:
            url = f"{base_url}{path}"
            async with session.request(method, url) as resp:
                data = await resp.json()
                return web.json_response(data, status=resp.status)
    except aiohttp.ClientError as e:
        return web.json_response({
            "error": "orchestrator_unreachable",
            "message": str(e)
        }, status=503)


def _restart_local_manager() -> web.Response:
    """Restart through the local cg-run loop when no orchestrator is reachable."""
    is_managed, workspace, current_env = orchestrator.detect_environment_type()
    runtime_context = build_runtime_context(
        "managed" if is_managed else "unmanaged",
        workspace_path=str(workspace.path) if workspace else None,
        current_environment=current_env.name if current_env else None,
    )
    denial = ensure_capability(runtime_context, "can_restart_current")
    if denial:
        return denial

    async def delayed_exit():
        await asyncio.sleep(0.3)
        os._exit(RESTART_EXIT_CODE)

    asyncio.create_task(delayed_exit())
    return web.json_response({
        "status": "restarting",
        "fallback": "local_manager"
    })


@routes.get("/v2/comfygit/orchestrator/health")
async def orchestrator_health(request: web.Request) -> web.Response:
    """Proxy health check to orchestrator."""
    return await _proxy_request("GET", "/health")


@routes.get("/v2/comfygit/orchestrator/status")
async def orchestrator_status(request: web.Request) -> web.Response:
    """Get orchestrator status with file-based fallback.

    Tries orchestrator control server first, falls back to reading
    the shared switch status file if orchestrator is unreachable.
    """
    response = await _proxy_request("GET", "/status", timeout=2.0)

    if response.status != 503:
        return response

    # Fallback: read from file
    is_managed, workspace, _ = orchestrator.detect_environment_type()
    if not is_managed or not workspace:
        return web.json_response({
            "state": "unknown",
            "message": "Not in managed environment"
        })

    data = read_switch_status(workspace.path / ".metadata")
    if data:
        return web.json_response(data)

    return web.json_response({
        "state": "idle",
        "message": "No switch in progress"
    })


@routes.post("/v2/comfygit/orchestrator/restart")
async def orchestrator_restart(request: web.Request) -> web.Response:
    """Request orchestrator to restart current environment."""
    response = await _proxy_request("POST", "/restart", timeout=10.0)
    if response.status != 503:
        return response
    return _restart_local_manager()


@routes.post("/v2/comfygit/orchestrator/kill")
async def orchestrator_kill(request: web.Request) -> web.Response:
    """Request orchestrator to shutdown completely."""
    return await _proxy_request("POST", "/kill", timeout=10.0)
