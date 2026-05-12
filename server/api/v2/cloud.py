"""Cloud auth proxy endpoints for the local manager panel."""

from __future__ import annotations

import tempfile
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

import aiohttp
from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_utils.async_helpers import run_sync

from .operations import build_export_validation

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


def _bearer_token(request: web.Request) -> str:
    authorization = request.headers.get("Authorization", "")
    token = authorization.removeprefix("Bearer").strip()
    if not token:
        raise web.HTTPUnauthorized(
            text='{"error":"Missing Authorization header"}',
            content_type="application/json",
        )
    return token


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


async def _read_json_or_error(resp: aiohttp.ClientResponse) -> dict[str, Any]:
    try:
        return await resp.json()
    except Exception:
        text = await resp.text()
        raise web.HTTPBadGateway(
            text=web.json_response(
                {"error": "Unexpected cloud response", "details": text}
            ).text,
            content_type="application/json",
        )


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
    token = _bearer_token(request)
    return await _forward_json_request(
        "GET",
        _cloud_endpoint(cloud_url, "/api/auth/me"),
        bearer_token=token,
    )


@routes.get("/v2/comfygit/cloud/environments")
async def cloud_list_environments(request: web.Request) -> web.Response:
    cloud_url = _normalize_cloud_url(request.query.get("cloud_url"))
    token = _bearer_token(request)
    return await _forward_json_request(
        "GET",
        _cloud_endpoint(cloud_url, "/api/environments"),
        bearer_token=token,
    )


@routes.get("/v2/comfygit/cloud/environments/{env_id}/revisions")
async def cloud_list_environment_revisions(request: web.Request) -> web.Response:
    cloud_url = _normalize_cloud_url(request.query.get("cloud_url"))
    token = _bearer_token(request)
    env_id = request.match_info["env_id"]
    return await _forward_json_request(
        "GET",
        _cloud_endpoint(cloud_url, f"/api/environments/{env_id}/revisions"),
        bearer_token=token,
    )


@routes.post("/v2/comfygit/cloud/publish")
@requires_environment
async def cloud_publish_current_environment(request: web.Request, env) -> web.Response:
    body = await request.json()
    cloud_url = _normalize_cloud_url(body.get("cloud_url"))
    token = _bearer_token(request)
    linked_environment_id = str(body.get("cloud_environment_id") or "").strip() or None

    validation = await build_export_validation(env)
    if not validation["can_export"]:
        return web.json_response(
            {
                "error": "Publish blocked by local validation issues.",
                "validation": validation,
            },
            status=409,
        )

    source_message = str(body.get("source_message") or "").strip() or None
    source_repo_url = str(body.get("source_repo_url") or "").strip() or None

    history = await run_sync(env.get_commit_history, 1)
    source_commit_sha = history[0]["hash"] if history else None
    source_branch = await run_sync(env.get_current_branch)

    timeout = aiohttp.ClientTimeout(total=180)
    headers = {
        "Accept": "application/json",
        "Authorization": f"Bearer {token}",
    }

    with tempfile.TemporaryDirectory(prefix="comfygit-publish-") as tmpdir:
        bundle_path = Path(tmpdir) / f"{env.name}.tar.gz"
        await run_sync(env.export_environment, bundle_path)
        bundle_bytes = bundle_path.read_bytes()

        async with aiohttp.ClientSession(timeout=timeout) as session:
            try:
                async with session.get(
                    _cloud_endpoint(cloud_url, "/api/environments"),
                    headers=headers,
                ) as resp:
                    if resp.status >= 400:
                        text = await resp.text()
                        return web.Response(status=resp.status, text=text, content_type="application/json")
                    environments_payload = await _read_json_or_error(resp)

                cloud_environments = environments_payload.get("environments", [])
                matching_environment = None
                if linked_environment_id:
                    matching_environment = next(
                        (
                            item for item in cloud_environments
                            if isinstance(item, dict) and str(item.get("id") or "").strip() == linked_environment_id
                        ),
                        None,
                    )
                if matching_environment is None:
                    matching_environment = next(
                        (
                            item for item in cloud_environments
                            if isinstance(item, dict) and str(item.get("name") or "").strip() == env.name
                        ),
                        None,
                    )

                if matching_environment:
                    form = aiohttp.FormData()
                    form.add_field("bundle", bundle_bytes, filename=bundle_path.name, content_type="application/gzip")
                    form.add_field("name", env.name)
                    form.add_field("create_revision", "true")
                    if source_message:
                        form.add_field("source_message", source_message)
                    if source_commit_sha:
                        form.add_field("source_commit_sha", source_commit_sha)
                    if source_branch:
                        form.add_field("source_branch", source_branch)
                    if source_repo_url:
                        form.add_field("source_repo_url", source_repo_url)

                    async with session.post(
                        _cloud_endpoint(cloud_url, f"/api/environments/{matching_environment['id']}/import-bundle"),
                        headers=headers,
                        data=form,
                    ) as resp:
                        text = await resp.text()
                        if resp.status >= 400:
                            return web.Response(status=resp.status, text=text, content_type="application/json")
                        payload = await resp.json()

                    return web.json_response(
                        {
                            "status": "success",
                            "created_environment": False,
                            "environment": payload.get("environment"),
                            "environment_revision": payload.get("environment_revision"),
                        }
                    )

                form = aiohttp.FormData()
                form.add_field("bundle", bundle_bytes, filename=bundle_path.name, content_type="application/gzip")
                form.add_field("name", env.name)
                async with session.post(
                    _cloud_endpoint(cloud_url, "/api/environments/import"),
                    headers=headers,
                    data=form,
                ) as resp:
                    text = await resp.text()
                    if resp.status >= 400:
                        return web.Response(status=resp.status, text=text, content_type="application/json")
                    payload = await resp.json()

                created_environment = payload.get("environment") or {}
                environment_id = created_environment.get("id")
                if not environment_id:
                    return web.json_response({"error": "Cloud publish did not return an environment id."}, status=502)

                revision_payload = {
                    "source_kind": "manual",
                    "source_message": source_message or "Published from local ComfyGit",
                    "source_commit_sha": source_commit_sha,
                    "source_branch": source_branch,
                    "source_repo_url": source_repo_url,
                }
                async with session.post(
                    _cloud_endpoint(cloud_url, f"/api/environments/{environment_id}/revisions"),
                    headers={**headers, "Content-Type": "application/json"},
                    json=revision_payload,
                ) as resp:
                    text = await resp.text()
                    if resp.status >= 400:
                        return web.Response(status=resp.status, text=text, content_type="application/json")
                    revision = await resp.json()

                return web.json_response(
                    {
                        "status": "success",
                        "created_environment": True,
                        "environment": created_environment,
                        "environment_revision": revision,
                    }
                )
            except aiohttp.ClientError as exc:
                return web.json_response({"error": f"Failed to reach cloud service: {exc}"}, status=502)
