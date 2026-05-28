"""Embedded Studio API."""

from __future__ import annotations

from aiohttp import web

from cgm_core.context import get_environment_from_request
from comfygit_studio.embedded import (
    get_embedded_studio_status,
    open_embedded_studio,
)

routes = web.RouteTableDef()

STUDIO_ROUTE_API_PREFIX = "/v2/comfygit/studio/runtime"
STUDIO_ROUTE_UI_PREFIX = "/v2/comfygit/studio/ui"
STUDIO_PUBLIC_API_BASE_PATH = "/api/v2/comfygit/studio/runtime"
STUDIO_PUBLIC_UI_PATH = "/api/v2/comfygit/studio/ui"


@routes.get("/v2/comfygit/studio/status")
async def studio_status(request: web.Request) -> web.Response:
    """Return embedded Studio status for the current environment."""

    env = get_environment_from_request(request)
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    scheme, public_host = _request_public_location(request)
    result = get_embedded_studio_status(
        request.app,
        env,
        public_scheme=scheme,
        public_host=public_host,
        public_ui_path=STUDIO_PUBLIC_UI_PATH,
    )
    return web.json_response(result.to_dict())


@routes.post("/v2/comfygit/studio/open")
async def open_studio(request: web.Request) -> web.Response:
    """Start or reuse embedded Studio routes for the current environment."""

    env = get_environment_from_request(request)
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    body = await _json_body(request)
    scheme, public_host = _request_public_location(request)
    raw_comfy_url = body.get("comfy_url")
    raw_bind_host = body.get("bind_host")
    comfy_url = raw_comfy_url if isinstance(raw_comfy_url, str) else _local_comfy_url(request)
    bind_host = raw_bind_host if isinstance(raw_bind_host, str) else None
    requested_port = body.get("port")
    if requested_port is not None:
        try:
            requested_port = int(requested_port)
        except (TypeError, ValueError):
            return web.json_response({"error": "port must be an integer"}, status=400)

    if requested_port is not None or bind_host:
        return web.json_response(
            {"error": "Embedded Studio uses the current ComfyUI server and does not bind a new port."},
            status=400,
        )

    result = await open_embedded_studio(
        request.app,
        env,
        public_scheme=scheme,
        public_host=public_host,
        public_ui_path=STUDIO_PUBLIC_UI_PATH,
        comfy_url=comfy_url,
    )

    return web.json_response(result.to_dict())


async def _json_body(request: web.Request) -> dict:
    if not request.can_read_body:
        return {}
    try:
        body = await request.json()
    except Exception:
        return {}
    return body if isinstance(body, dict) else {}


def _request_public_location(request: web.Request) -> tuple[str, str]:
    scheme = request.headers.get("X-Forwarded-Proto", request.scheme)
    host_header = request.headers.get("X-Forwarded-Host", request.host)
    return scheme, host_header


def _local_comfy_url(request: web.Request) -> str:
    port = _split_host_port(request.host)[1] or 8188
    return f"http://127.0.0.1:{port}"


def _split_host_port(host_header: str) -> tuple[str, int | None]:
    if host_header.startswith("["):
        end = host_header.find("]")
        if end != -1:
            host = host_header[1:end]
            rest = host_header[end + 1:]
            if rest.startswith(":") and rest[1:].isdigit():
                return host, int(rest[1:])
            return host, None

    host, sep, port_text = host_header.partition(":")
    if sep and port_text.isdigit():
        return host, int(port_text)
    return host_header, None
