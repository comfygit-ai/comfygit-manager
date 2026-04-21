"""Cloud auth proxy endpoints for the local manager panel."""

from __future__ import annotations

from typing import Any
from urllib.parse import urlparse

import aiohttp
from aiohttp import web

routes = web.RouteTableDef()


def _normalize_cloud_url(raw: str | None) -> str:
    value = str(raw or "").strip().rstrip("/")
    if not value:
        raise web.HTTPBadRequest(text='{"error":"cloud_url is required"}', content_type="application/json")

    parsed = urlparse(value)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise web.HTTPBadRequest(text='{"error":"cloud_url must be a valid http(s) URL"}', content_type="application/json")

    return value


def _cloud_endpoint(base_url: str, path: str) -> str:
    return f"{base_url}{path}"


async def _forward_json_request(
    method: str,
    url: str,
    *,
    payload: dict[str, Any] | None = None,
    bearer_token: str | None = None,
) -> web.Response:
    headers: dict[str, str] = {"Accept": "application/json"}
    if payload is not None:
        headers["Content-Type"] = "application/json"
    if bearer_token:
        headers["Authorization"] = f"Bearer {bearer_token}"

    timeout = aiohttp.ClientTimeout(total=20)
    async with aiohttp.ClientSession(timeout=timeout) as session:
        try:
            async with session.request(method, url, headers=headers, json=payload) as resp:
                text = await resp.text()
                content_type = resp.headers.get("Content-Type", "application/json")
                return web.Response(status=resp.status, text=text, content_type=content_type.split(";")[0])
        except aiohttp.ClientError as exc:
            return web.json_response({"error": f"Failed to reach cloud service: {exc}"}, status=502)


@routes.get("/v2/comfygit/cloud/auth/config")
async def cloud_auth_config(request: web.Request) -> web.Response:
    cloud_url = _normalize_cloud_url(request.query.get("cloud_url"))
    return await _forward_json_request("GET", _cloud_endpoint(cloud_url, "/api/auth/config"))


@routes.post("/v2/comfygit/cloud/auth/login")
async def cloud_login(request: web.Request) -> web.Response:
    body = await request.json()
    cloud_url = _normalize_cloud_url(body.get("cloud_url"))
    payload = {
        "email": body.get("email", ""),
        "password": body.get("password", ""),
    }
    return await _forward_json_request("POST", _cloud_endpoint(cloud_url, "/api/auth/login"), payload=payload)


@routes.post("/v2/comfygit/cloud/auth/signup")
async def cloud_signup(request: web.Request) -> web.Response:
    body = await request.json()
    cloud_url = _normalize_cloud_url(body.get("cloud_url"))
    payload = {
        "email": body.get("email", ""),
        "password": body.get("password", ""),
    }
    return await _forward_json_request("POST", _cloud_endpoint(cloud_url, "/api/auth/signup"), payload=payload)


@routes.post("/v2/comfygit/cloud/auth/logout")
async def cloud_logout(request: web.Request) -> web.Response:
    body = await request.json()
    cloud_url = _normalize_cloud_url(body.get("cloud_url"))
    payload = {
        "refresh_token": body.get("refresh_token"),
    }
    return await _forward_json_request("POST", _cloud_endpoint(cloud_url, "/api/auth/logout"), payload=payload)


@routes.get("/v2/comfygit/cloud/auth/me")
async def cloud_me(request: web.Request) -> web.Response:
    cloud_url = _normalize_cloud_url(request.query.get("cloud_url"))
    authorization = request.headers.get("Authorization", "")
    token = authorization.removeprefix("Bearer").strip()
    if not token:
        return web.json_response({"error": "Missing Authorization header"}, status=401)
    return await _forward_json_request(
        "GET",
        _cloud_endpoint(cloud_url, "/api/auth/me"),
        bearer_token=token,
    )
