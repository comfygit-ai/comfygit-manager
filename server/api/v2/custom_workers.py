"""Custom Workers API endpoints for self-hosted GPU workers.

These endpoints manage registration and communication with custom
GPU workers running the cg-deploy worker server.
"""
import asyncio
from pathlib import Path

import aiohttp
from aiohttp import web

from cgm_core.decorators import requires_workspace

routes = web.RouteTableDef()


def _get_workers_store(workspace):
    """Get the custom workers store for the workspace."""
    from deploy.custom_workers_store import CustomWorkersStore
    return CustomWorkersStore(Path(workspace.path))


async def _check_worker_health(worker: dict, timeout: float = 5.0) -> dict:
    """Check health of a single worker and return updated status."""
    url = f"http://{worker['host']}:{worker['port']}/api/v1/health"
    headers = {"Authorization": f"Bearer {worker.get('api_key', '')}"}

    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers=headers, timeout=timeout) as resp:
                if resp.status == 200:
                    data = await resp.json()
                    return {
                        **worker,
                        "status": "online",
                        "gpu_info": data.get("gpu_name"),
                        "mode": data.get("default_mode"),
                        "instance_count": data.get("instance_count", 0),
                        "running_count": data.get("running_count", 0),
                    }
                return {**worker, "status": "offline"}
    except Exception:
        return {**worker, "status": "offline"}


async def _check_all_workers(workers: list[dict]) -> list[dict]:
    """Check health of all workers in parallel."""
    if not workers:
        return []
    tasks = [_check_worker_health(w) for w in workers]
    return await asyncio.gather(*tasks)


@routes.get("/v2/comfygit/deploy/custom/workers")
@requires_workspace
async def list_workers(request: web.Request, workspace) -> web.Response:
    """List registered custom workers with status checks.

    Returns worker info plus current online/offline status from health check.
    """
    store = _get_workers_store(workspace)
    workers = store.get_all_workers()

    # Check health in parallel
    workers_with_status = await _check_all_workers(workers)

    return web.json_response({"workers": workers_with_status})


@routes.post("/v2/comfygit/deploy/custom/workers")
@requires_workspace
async def add_worker(request: web.Request, workspace) -> web.Response:
    """Register a new custom worker.

    Validates connection before saving.
    """
    data = await request.json()

    name = data.get("name")
    host = data.get("host")
    port = data.get("port", 9090)
    api_key = data.get("api_key")

    if not all([name, host, api_key]):
        return web.json_response(
            {"status": "error", "message": "Missing required fields: name, host, api_key"},
            status=400
        )

    # Test connection first
    test_result = await _test_worker_connection(host, port, api_key)
    if test_result["status"] != "success":
        return web.json_response(test_result, status=400)

    # Save worker
    store = _get_workers_store(workspace)
    store.add_worker(name, host, port, api_key)

    return web.json_response({"status": "success"})


@routes.delete("/v2/comfygit/deploy/custom/workers/{name}")
@requires_workspace
async def remove_worker(request: web.Request, workspace) -> web.Response:
    """Remove a registered worker."""
    name = request.match_info["name"]
    store = _get_workers_store(workspace)

    if store.remove_worker(name):
        return web.json_response({"status": "success"})
    else:
        return web.json_response(
            {"status": "error", "message": f"Worker '{name}' not found"},
            status=404
        )


async def _test_worker_connection(host: str, port: int, api_key: str) -> dict:
    """Test connection to a worker."""
    url = f"http://{host}:{port}/api/v1/health"
    headers = {"Authorization": f"Bearer {api_key}"}

    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers=headers, timeout=10.0) as resp:
                if resp.status == 200:
                    data = await resp.json()
                    return {
                        "status": "success",
                        "message": "Connection successful",
                        "gpu_info": data.get("gpu_name"),
                        "mode": data.get("default_mode"),
                    }
                elif resp.status == 401:
                    return {"status": "error", "message": "Invalid API key"}
                else:
                    return {"status": "error", "message": f"Worker returned status {resp.status}"}
    except asyncio.TimeoutError:
        return {"status": "error", "message": "Connection timed out"}
    except aiohttp.ClientError as e:
        return {"status": "error", "message": f"Connection failed: {str(e)}"}
    except Exception as e:
        return {"status": "error", "message": f"Unexpected error: {str(e)}"}


@routes.post("/v2/comfygit/deploy/custom/test")
@requires_workspace
async def test_connection(request: web.Request, workspace) -> web.Response:
    """Test connection to a worker (before registration)."""
    data = await request.json()

    host = data.get("host")
    port = data.get("port", 9090)
    api_key = data.get("api_key")

    if not all([host, api_key]):
        return web.json_response(
            {"status": "error", "message": "Missing required fields: host, api_key"},
            status=400
        )

    result = await _test_worker_connection(host, port, api_key)
    return web.json_response(result)


@routes.post("/v2/comfygit/deploy/custom/scan")
@requires_workspace
async def scan_workers(request: web.Request, workspace) -> web.Response:
    """Scan local network for workers via mDNS.

    Note: mDNS scanning requires zeroconf library and may not work
    in all environments. This is a best-effort discovery feature.
    """
    discovered = []

    try:
        from zeroconf import Zeroconf, ServiceBrowser

        class WorkerListener:
            def __init__(self):
                self.workers = []

            def add_service(self, zc, service_type, name):
                info = zc.get_service_info(service_type, name)
                if info:
                    addresses = [str(addr) for addr in info.parsed_addresses()]
                    if addresses:
                        self.workers.append({
                            "name": name.replace(f".{service_type}", ""),
                            "host": addresses[0],
                            "port": info.port,
                            "gpu_info": info.properties.get(b"gpu", b"").decode(),
                            "mode": info.properties.get(b"mode", b"").decode(),
                        })

            def remove_service(self, zc, service_type, name):
                pass

            def update_service(self, zc, service_type, name):
                pass

        zc = Zeroconf()
        listener = WorkerListener()
        browser = ServiceBrowser(zc, "_cg-deploy._tcp.local.", listener)

        # Wait for discovery
        await asyncio.sleep(3.0)

        browser.cancel()
        zc.close()

        discovered = listener.workers

    except ImportError:
        # zeroconf not installed - return empty list silently
        pass
    except Exception:
        # mDNS scanning failed - return empty list
        pass

    return web.json_response({"discovered": discovered})


# =============================================================================
# Worker Instance Management (proxied to worker)
# =============================================================================

async def _proxy_to_worker(worker: dict, method: str, path: str, data: dict | None = None) -> dict:
    """Proxy a request to a worker."""
    url = f"http://{worker['host']}:{worker['port']}{path}"
    headers = {"Authorization": f"Bearer {worker.get('api_key', '')}"}

    try:
        async with aiohttp.ClientSession() as session:
            if method == "GET":
                async with session.get(url, headers=headers, timeout=30.0) as resp:
                    return await resp.json()
            elif method == "POST":
                async with session.post(url, headers=headers, json=data, timeout=60.0) as resp:
                    return await resp.json()
            elif method == "DELETE":
                async with session.delete(url, headers=headers, timeout=30.0) as resp:
                    return await resp.json()
    except Exception as e:
        return {"status": "error", "message": str(e)}


@routes.get("/v2/comfygit/deploy/custom/{worker}/info")
@requires_workspace
async def get_worker_info(request: web.Request, workspace) -> web.Response:
    """Get detailed system info from a worker."""
    worker_name = request.match_info["worker"]
    store = _get_workers_store(workspace)
    worker = store.get_worker(worker_name)

    if not worker:
        return web.json_response(
            {"status": "error", "message": f"Worker '{worker_name}' not found"},
            status=404
        )

    result = await _proxy_to_worker(worker, "GET", "/api/v1/system")
    return web.json_response(result)


@routes.get("/v2/comfygit/deploy/custom/{worker}/instances")
@requires_workspace
async def get_worker_instances(request: web.Request, workspace) -> web.Response:
    """Get instances running on a worker."""
    worker_name = request.match_info["worker"]
    store = _get_workers_store(workspace)
    worker = store.get_worker(worker_name)

    if not worker:
        return web.json_response(
            {"status": "error", "message": f"Worker '{worker_name}' not found"},
            status=404
        )

    result = await _proxy_to_worker(worker, "GET", "/api/v1/instances")
    return web.json_response(result)


@routes.post("/v2/comfygit/deploy/custom/{worker}/instances")
@requires_workspace
async def deploy_to_worker(request: web.Request, workspace) -> web.Response:
    """Deploy a new instance to a worker."""
    worker_name = request.match_info["worker"]
    store = _get_workers_store(workspace)
    worker = store.get_worker(worker_name)

    if not worker:
        return web.json_response(
            {"status": "error", "message": f"Worker '{worker_name}' not found"},
            status=404
        )

    data = await request.json()
    result = await _proxy_to_worker(worker, "POST", "/api/v1/instances", data)
    return web.json_response(result)


@routes.post("/v2/comfygit/deploy/custom/{worker}/instances/{instance_id}/start")
@requires_workspace
async def start_worker_instance(request: web.Request, workspace) -> web.Response:
    """Start a stopped instance on a worker."""
    worker_name = request.match_info["worker"]
    instance_id = request.match_info["instance_id"]
    store = _get_workers_store(workspace)
    worker = store.get_worker(worker_name)

    if not worker:
        return web.json_response(
            {"status": "error", "message": f"Worker '{worker_name}' not found"},
            status=404
        )

    result = await _proxy_to_worker(worker, "POST", f"/api/v1/instances/{instance_id}/start")
    return web.json_response(result)


@routes.post("/v2/comfygit/deploy/custom/{worker}/instances/{instance_id}/stop")
@requires_workspace
async def stop_worker_instance(request: web.Request, workspace) -> web.Response:
    """Stop a running instance on a worker."""
    worker_name = request.match_info["worker"]
    instance_id = request.match_info["instance_id"]
    store = _get_workers_store(workspace)
    worker = store.get_worker(worker_name)

    if not worker:
        return web.json_response(
            {"status": "error", "message": f"Worker '{worker_name}' not found"},
            status=404
        )

    result = await _proxy_to_worker(worker, "POST", f"/api/v1/instances/{instance_id}/stop")
    return web.json_response(result)


@routes.delete("/v2/comfygit/deploy/custom/{worker}/instances/{instance_id}")
@requires_workspace
async def terminate_worker_instance(request: web.Request, workspace) -> web.Response:
    """Terminate an instance on a worker."""
    worker_name = request.match_info["worker"]
    instance_id = request.match_info["instance_id"]
    store = _get_workers_store(workspace)
    worker = store.get_worker(worker_name)

    if not worker:
        return web.json_response(
            {"status": "error", "message": f"Worker '{worker_name}' not found"},
            status=404
        )

    result = await _proxy_to_worker(worker, "DELETE", f"/api/v1/instances/{instance_id}")
    return web.json_response(result)
