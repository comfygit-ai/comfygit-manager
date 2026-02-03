"""Git remotes management API."""
from aiohttp import web

from cgm_core.decorators import requires_environment, logged_operation
from cgm_utils.async_helpers import run_sync
from comfygit_core.utils.git import (
    git_config_get,
    git_fetch_with_auth,
    git_push_with_auth,
    git_pull_with_auth,
)

routes = web.RouteTableDef()


def _get_auth_token(request: web.Request) -> str | None:
    """Extract git auth token from request header.

    The token is passed from the frontend in the X-Git-Auth-Token header.
    It's stored only in the user's browser localStorage and never persisted on server.
    """
    return request.headers.get("X-Git-Auth-Token")


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
@logged_operation("add remote")
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
@logged_operation("remove remote")
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
@logged_operation("update remote")
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
@logged_operation("fetch remote")
async def fetch_remote(request: web.Request, env) -> web.Response:
    """Fetch from a remote.

    Supports optional X-Git-Auth-Token header for authenticated fetch
    to private repositories on cloud instances.
    """
    name = request.match_info["name"]
    auth_token = _get_auth_token(request)

    try:
        if auth_token:
            # Use authenticated fetch
            await run_sync(
                git_fetch_with_auth,
                env.git_manager.repo_path,
                name,
                auth_token
            )
        else:
            # Standard fetch (relies on machine credentials)
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


@routes.get("/v2/comfygit/remotes/{name}/pull-preview")
@requires_environment
async def get_pull_preview(request: web.Request, env) -> web.Response:
    """Get preview of what would be pulled from remote."""
    name = request.match_info["name"]
    branch = request.query.get("branch")

    # Use current branch if not specified
    if not branch:
        branch = await run_sync(env.get_current_branch)

    try:
        # Get sync status (ahead/behind counts)
        sync_status = await run_sync(env.git_manager.get_sync_status, name, branch)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    # Check for uncommitted changes
    status = await run_sync(env.status)
    has_uncommitted = status.git.has_changes

    # Build response
    can_pull = not has_uncommitted
    block_reason = "uncommitted_changes" if has_uncommitted else None

    # Fetch incoming commits
    commits_behind = sync_status["behind"]
    if commits_behind > 0:
        try:
            incoming = await run_sync(
                env.git_manager.get_version_history,
                commits_behind,
                f"HEAD..{name}/{branch}",
            )
        except Exception:
            incoming = []
    else:
        incoming = []

    # Simplified changes structure (detailed diff not available without git plumbing)
    changes = {
        "workflows": {"added": [], "modified": [], "deleted": []},
        "nodes": {"to_install": [], "to_remove": []},
        "models": {"referenced": [], "count": 0}
    }

    return web.json_response({
        "remote": name,
        "branch": branch,
        "commits_behind": commits_behind,
        "commits": incoming,
        "changes": changes,
        "has_uncommitted_changes": has_uncommitted,
        "can_pull": can_pull,
        "block_reason": block_reason
    })


@routes.post("/v2/comfygit/remotes/{name}/pull")
@logged_operation("pull from remote")
async def pull_from_remote(request: web.Request, env) -> web.Response:
    """Pull changes from remote and sync environment.

    Supports optional X-Git-Auth-Token header for authenticated pull
    to private repositories on cloud instances.
    """
    name = request.match_info["name"]
    auth_token = _get_auth_token(request)
    json_data = await request.json()
    branch = json_data.get("branch")
    model_strategy = json_data.get("model_strategy", "skip")
    force = json_data.get("force", False)

    # Use current branch if not specified
    if not branch:
        branch = await run_sync(env.get_current_branch)

    # Check for uncommitted changes (unless force)
    if not force:
        status = await run_sync(env.status)
        if status.git.has_changes:
            return web.json_response({
                "error": "Uncommitted changes exist. Commit or use force=true to discard."
            }, status=400)

    # If force, discard changes first
    if force:
        status = await run_sync(env.status)
        if status.git.has_changes:
            await run_sync(env.checkout, "HEAD", strategy=None, force=True)

    try:
        # Use authenticated pull if token provided
        if auth_token:
            # Do authenticated fetch + merge manually
            await run_sync(
                git_pull_with_auth,
                env.git_manager.repo_path,
                name,
                auth_token,
                branch
            )
            # Then run repair/sync
            result = await run_sync(
                env.repair_after_pull,
                model_strategy
            )
        else:
            # Standard pull_and_repair (relies on machine credentials)
            result = await run_sync(
                env.pull_and_repair,
                name,
                branch,
                model_strategy
            )

        # Extract sync result info
        sync_result = result.get("sync_result")
        sync_info = {
            "nodes_installed": getattr(sync_result, "nodes_installed", []),
            "nodes_removed": getattr(sync_result, "nodes_removed", []),
            "models_queued": getattr(sync_result, "models_queued", 0),
            "errors": getattr(sync_result, "errors", [])
        }

        return web.json_response({
            "status": "success",
            "pull_output": result.get("pull_output", ""),
            "sync_result": sync_info
        })

    except ValueError as e:
        error_msg = str(e).lower()
        if "not found" in error_msg:
            return web.json_response({"error": str(e)}, status=404)
        if "conflict" in error_msg:
            return web.json_response({"error": str(e)}, status=409)
        return web.json_response({"error": str(e)}, status=500)
    except OSError as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/v2/comfygit/remotes/{name}/push-preview")
@requires_environment
async def get_push_preview(request: web.Request, env) -> web.Response:
    """Get preview of what would be pushed to remote."""
    name = request.match_info["name"]
    branch = request.query.get("branch")

    # Use current branch if not specified
    if not branch:
        branch = await run_sync(env.get_current_branch)

    try:
        # Get sync status (ahead/behind counts + remote_branch_exists flag)
        sync_status = await run_sync(env.git_manager.get_sync_status, name, branch)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    # Check for uncommitted changes
    status = await run_sync(env.status)
    has_uncommitted = status.git.has_changes

    # First push = remote branch doesn't exist yet
    is_first_push = not sync_status.get("remote_branch_exists", True)

    # Determine if force is needed (remote has new commits)
    remote_has_new = sync_status["behind"] > 0
    needs_force = remote_has_new

    # Build response
    can_push = not has_uncommitted
    block_reason = "uncommitted_changes" if has_uncommitted else None

    # Fetch outgoing commits
    commits_ahead = sync_status["ahead"]
    if commits_ahead > 0:
        try:
            if is_first_push:
                outgoing = await run_sync(
                    env.git_manager.get_version_history, commits_ahead
                )
            else:
                outgoing = await run_sync(
                    env.git_manager.get_version_history,
                    commits_ahead,
                    f"{name}/{branch}..HEAD",
                )
        except Exception:
            outgoing = []
    else:
        outgoing = []

    return web.json_response({
        "remote": name,
        "branch": branch,
        "commits_ahead": commits_ahead,
        "commits": outgoing,
        "has_uncommitted_changes": has_uncommitted,
        "remote_has_new_commits": remote_has_new,
        "can_push": can_push,
        "needs_force": needs_force,
        "block_reason": block_reason,
        "is_first_push": is_first_push
    })


@routes.post("/v2/comfygit/remotes/{name}/push")
@logged_operation("push to remote")
async def push_to_remote(request: web.Request, env) -> web.Response:
    """Push commits to remote.

    Supports optional X-Git-Auth-Token header for authenticated push
    to private repositories on cloud instances.
    """
    name = request.match_info["name"]
    auth_token = _get_auth_token(request)
    json_data = await request.json()
    branch = json_data.get("branch")
    force = json_data.get("force", False)

    # Use current branch if not specified
    if not branch:
        branch = await run_sync(env.get_current_branch)

    # Check for uncommitted changes
    status = await run_sync(env.status)
    if status.git.has_changes:
        return web.json_response({
            "error": "Uncommitted changes exist. Commit your changes first."
        }, status=400)

    # Get commits ahead count before pushing
    sync_status = await run_sync(env.git_manager.get_sync_status, name, branch)
    commits_ahead = sync_status["ahead"]

    try:
        if auth_token:
            # Use authenticated push
            output = await run_sync(
                git_push_with_auth,
                env.git_manager.repo_path,
                name,
                auth_token,
                branch,
                force
            )
        else:
            # Standard push (relies on machine credentials)
            output = await run_sync(env.push_commits, name, branch, force)

        return web.json_response({
            "status": "success",
            "push_output": output,
            "commits_pushed": commits_ahead
        })

    except ValueError as e:
        return web.json_response({"error": str(e)}, status=404)
    except OSError as e:
        # Push rejected - likely remote has new commits
        return web.json_response({"error": str(e)}, status=409)
