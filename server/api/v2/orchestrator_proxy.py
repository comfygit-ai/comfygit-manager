"""Orchestrator proxy API routes.

These routes proxy requests to the orchestrator's control server,
allowing the frontend to communicate with the orchestrator through
ComfyUI's same-origin API (works with cloud proxies like RunPod).
"""
import json
import aiohttp
from aiohttp import web, ClientTimeout

import orchestrator

routes = web.RouteTableDef()


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


@routes.get("/v2/comfygit/orchestrator/health")
async def orchestrator_health(request: web.Request) -> web.Response:
    """Proxy health check to orchestrator."""
    return await _proxy_request("GET", "/health")


@routes.get("/v2/comfygit/orchestrator/status")
async def orchestrator_status(request: web.Request) -> web.Response:
    """Get orchestrator status with file-based fallback.

    Tries orchestrator control server first, falls back to reading
    .switch_status.json if orchestrator is unreachable.
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

    status_file = workspace.path / ".metadata" / ".switch_status.json"
    if status_file.exists():
        try:
            data = json.loads(status_file.read_text())
            return web.json_response(data)
        except Exception:
            pass

    return web.json_response({
        "state": "idle",
        "message": "No switch in progress"
    })


@routes.post("/v2/comfygit/orchestrator/restart")
async def orchestrator_restart(request: web.Request) -> web.Response:
    """Request orchestrator to restart current environment."""
    return await _proxy_request("POST", "/restart", timeout=10.0)


@routes.post("/v2/comfygit/orchestrator/kill")
async def orchestrator_kill(request: web.Request) -> web.Response:
    """Request orchestrator to shutdown completely."""
    return await _proxy_request("POST", "/kill", timeout=10.0)
