"""Deploy API endpoints for RunPod cloud deployment."""
from aiohttp import web

from cgm_core.decorators import requires_workspace
from deploy.runpod_client import RunPodClient

routes = web.RouteTableDef()


@routes.post("/v2/comfygit/deploy/runpod/test")
@requires_workspace
async def test_runpod_connection(request: web.Request, workspace) -> web.Response:
    """Test RunPod API key and optionally save it.

    Request body:
        api_key: RunPod API key to test
        save_key: If true, save key to workspace config on success

    Returns:
        status: "success" or "error"
        message: Human-readable message
    """
    data = await request.json()
    api_key = data.get("api_key")
    save_key = data.get("save_key", False)

    if not api_key:
        return web.json_response(
            {"status": "error", "error": "API key required"},
            status=400,
        )

    client = RunPodClient(api_key)
    result = await client.test_connection()

    if result.get("success"):
        if save_key:
            workspace.workspace_config_manager.set_runpod_token(api_key)
        return web.json_response({
            "status": "success",
            "message": "Connected to RunPod",
        })
    else:
        return web.json_response(
            {
                "status": "error",
                "error": result.get("error", "Connection failed"),
            },
            status=401,
        )


@routes.get("/v2/comfygit/deploy/runpod/pods")
@requires_workspace
async def get_runpod_pods(request: web.Request, workspace) -> web.Response:
    """List user's RunPod pods.

    Returns:
        pods: List of pod objects with id, name, status, cost info
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()
    if not api_key:
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = RunPodClient(api_key)
    pods = await client.list_pods()

    # Transform pods to include ComfyUI URLs
    result_pods = []
    for pod in pods:
        result_pod = {
            "id": pod.get("id"),
            "name": pod.get("name"),
            "gpu_type": pod.get("machine", {}).get("gpuDisplayName", "Unknown"),
            "status": pod.get("desiredStatus"),
            "cost_per_hour": pod.get("costPerHr", 0),
            "comfyui_url": RunPodClient.get_comfyui_url(pod),
        }
        result_pods.append(result_pod)

    return web.json_response({"pods": result_pods})


@routes.delete("/v2/comfygit/deploy/runpod/{pod_id}")
@requires_workspace
async def terminate_runpod_pod(request: web.Request, workspace) -> web.Response:
    """Terminate a RunPod pod.

    Path params:
        pod_id: Pod identifier to terminate

    Returns:
        status: "success" or "error"
    """
    pod_id = request.match_info["pod_id"]

    api_key = workspace.workspace_config_manager.get_runpod_token()
    if not api_key:
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = RunPodClient(api_key)
    try:
        await client.delete_pod(pod_id)
        return web.json_response({
            "status": "success",
            "message": "Pod terminated",
        })
    except Exception as e:
        return web.json_response(
            {"status": "error", "error": str(e)},
            status=500,
        )


@routes.post("/v2/comfygit/deploy/runpod")
@requires_workspace
async def deploy_to_runpod(request: web.Request, workspace) -> web.Response:
    """Deploy environment to RunPod.

    Request body:
        gpu_type_id: GPU type (e.g., "NVIDIA GeForce RTX 4090")
        pod_name: Name for the pod
        network_volume_id: Network volume to attach (for persistent storage)
        cloud_type: "SECURE" or "COMMUNITY" (optional, default "SECURE")

    Returns:
        status: "success" or "error"
        pod_id: Created pod ID on success
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()
    if not api_key:
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    data = await request.json()
    gpu_type_id = data.get("gpu_type_id")
    pod_name = data.get("pod_name", "comfygit-deploy")
    network_volume_id = data.get("network_volume_id")
    cloud_type = data.get("cloud_type", "SECURE")

    client = RunPodClient(api_key)

    try:
        # Create pod with ComfyUI setup
        pod = await client.create_pod(
            name=pod_name,
            image_name="runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04",
            gpu_type_id=gpu_type_id,
            cloud_type=cloud_type,
            network_volume_id=network_volume_id,
            ports=["8188/http", "22/tcp"],
        )

        return web.json_response({
            "status": "success",
            "pod_id": pod.get("id"),
            "message": "Pod created. Starting ComfyUI setup...",
        })
    except Exception as e:
        return web.json_response(
            {"status": "error", "error": str(e)},
            status=500,
        )


@routes.delete("/v2/comfygit/deploy/runpod/key")
@requires_workspace
async def clear_runpod_key(request: web.Request, workspace) -> web.Response:
    """Clear stored RunPod API key.

    Returns:
        status: "success"
    """
    workspace.workspace_config_manager.set_runpod_token(None)
    return web.json_response({
        "status": "success",
        "message": "RunPod API key cleared",
    })


@routes.get("/v2/comfygit/deploy/runpod/key-status")
@requires_workspace
async def get_runpod_key_status(request: web.Request, workspace) -> web.Response:
    """Check if RunPod API key is configured.

    Returns:
        configured: True if key is set
        key_suffix: Last 4 characters of key (for display)
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()

    if api_key:
        return web.json_response({
            "configured": True,
            "key_suffix": api_key[-4:] if len(api_key) >= 4 else api_key,
        })
    else:
        return web.json_response({
            "configured": False,
            "key_suffix": None,
        })


@routes.get("/v2/comfygit/deploy/runpod/volumes")
@requires_workspace
async def get_runpod_volumes(request: web.Request, workspace) -> web.Response:
    """List user's network volumes.

    Returns:
        volumes: List of volume objects with id, name, size_gb, data_center_id
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()
    if not api_key:
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = RunPodClient(api_key)
    volumes = await client.list_network_volumes()

    # Transform to consistent API format
    result_volumes = [
        {
            "id": vol.get("id"),
            "name": vol.get("name"),
            "size_gb": vol.get("size"),
            "data_center_id": vol.get("dataCenterId"),
        }
        for vol in volumes
    ]

    return web.json_response({"volumes": result_volumes})


@routes.get("/v2/comfygit/deploy/runpod/gpu-types")
@requires_workspace
async def get_runpod_gpu_types(request: web.Request, workspace) -> web.Response:
    """Get available GPU types.

    Query params:
        data_center_id: Optional filter by data center

    Returns:
        gpu_types: List of GPU type objects
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()
    if not api_key:
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    data_center_id = request.query.get("data_center_id")

    client = RunPodClient(api_key)
    gpu_types = await client.get_gpu_types(data_center_id=data_center_id)

    return web.json_response({"gpu_types": gpu_types})
