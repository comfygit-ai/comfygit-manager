"""Git remotes management API."""
from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_utils.async_helpers import run_sync
from comfygit_core.utils.git import git_config_get

routes = web.RouteTableDef()


def _consolidate_remotes(remote_list: list[tuple[str, str, str]]) -> list[dict]:
    """
    Consolidate git remote -v output into RemoteInfo structures.

    Args:
        remote_list: List of (name, url, type) tuples where type is 'fetch' or 'push'

    Returns:
        List of dicts with name, fetch_url, push_url
    """
    remotes = {}
    for name, url, remote_type in remote_list:
        if name not in remotes:
            remotes[name] = {"name": name, "fetch_url": "", "push_url": ""}

        if remote_type == "fetch":
            remotes[name]["fetch_url"] = url
        elif remote_type == "push":
            remotes[name]["push_url"] = url

    # If push_url is empty, default to fetch_url
    for remote in remotes.values():
        if not remote["push_url"]:
            remote["push_url"] = remote["fetch_url"]

    return list(remotes.values())


def _get_tracking_remote(env, branch: str | None) -> str | None:
    """Get the remote that the given branch tracks."""
    if not branch:
        return None

    try:
        remote = git_config_get(env.git_manager.repo_path, f"branch.{branch}.remote")
        return remote if remote else None
    except Exception:
        return None


@routes.get("/v2/comfygit/remotes")
@requires_environment
async def list_remotes(request: web.Request, env) -> web.Response:
    """List all git remotes with consolidated fetch/push URLs."""
    # Get raw remote list
    remote_list = await run_sync(env.git_manager.list_remotes)

    # Consolidate fetch/push entries
    remotes = _consolidate_remotes(remote_list)

    # Get current branch and tracking info
    current_branch = await run_sync(env.get_current_branch)
    tracking_remote = _get_tracking_remote(env, current_branch)

    # Mark default remote
    for remote in remotes:
        remote["is_default"] = remote["name"] == tracking_remote

    # Build tracking info
    tracking_info = None
    if tracking_remote and current_branch:
        tracking_info = {
            "remote": tracking_remote,
            "branch": current_branch
        }

    return web.json_response({
        "remotes": remotes,
        "current_branch_tracking": tracking_info
    })


@routes.post("/v2/comfygit/remotes")
@requires_environment
async def add_remote(request: web.Request, env) -> web.Response:
    """Add a new git remote."""
    json_data = await request.json()
    name = json_data.get("name")
    url = json_data.get("url")

    if not name:
        return web.json_response({"error": "name is required"}, status=400)
    if not url:
        return web.json_response({"error": "url is required"}, status=400)

    try:
        await run_sync(env.git_manager.add_remote, name, url)
    except OSError as e:
        # Remote already exists
        return web.json_response({"error": str(e)}, status=409)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response({
        "status": "success",
        "remote_name": name
    })


@routes.delete("/v2/comfygit/remotes/{name}")
@requires_environment
async def remove_remote(request: web.Request, env) -> web.Response:
    """Remove a git remote."""
    name = request.match_info["name"]

    try:
        await run_sync(env.git_manager.remove_remote, name)
    except ValueError as e:
        # Remote not found
        return web.json_response({"error": str(e)}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response({
        "status": "success",
        "remote_name": name
    })


@routes.patch("/v2/comfygit/remotes/{name}")
@requires_environment
async def update_remote_url(request: web.Request, env) -> web.Response:
    """Update remote URL(s)."""
    name = request.match_info["name"]
    json_data = await request.json()
    url = json_data.get("url")
    push_url = json_data.get("push_url")

    if not url:
        return web.json_response({"error": "url is required"}, status=400)

    try:
        # Update fetch URL
        await run_sync(env.git_manager.set_remote_url, name, url, False)

        # Update push URL if different
        if push_url and push_url != url:
            await run_sync(env.git_manager.set_remote_url, name, push_url, True)
    except ValueError as e:
        # Remote not found
        return web.json_response({"error": str(e)}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response({
        "status": "success",
        "remote_name": name
    })


@routes.post("/v2/comfygit/remotes/{name}/fetch")
@requires_environment
async def fetch_remote(request: web.Request, env) -> web.Response:
    """Fetch from a remote."""
    name = request.match_info["name"]

    try:
        await run_sync(env.git_manager.fetch, name)
    except ValueError as e:
        # Remote not found
        return web.json_response({"error": str(e)}, status=404)
    except OSError as e:
        # Fetch failed (network, auth, etc)
        return web.json_response({"error": str(e)}, status=500)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response({
        "status": "success",
        "remote_name": name
    })


@routes.get("/v2/comfygit/remotes/{name}/status")
@requires_environment
async def get_remote_sync_status(request: web.Request, env) -> web.Response:
    """Get ahead/behind status for a remote."""
    name = request.match_info["name"]
    branch = request.query.get("branch")

    # Use current branch if not specified
    if not branch:
        branch = await run_sync(env.get_current_branch)

    try:
        sync_status = await run_sync(env.git_manager.get_sync_status, name, branch)
    except ValueError as e:
        # Remote not found
        return web.json_response({"error": str(e)}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response({
        "remote": name,
        "branch": branch,
        "ahead": sync_status["ahead"],
        "behind": sync_status["behind"]
    })
