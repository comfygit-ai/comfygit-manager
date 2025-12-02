"""Deploy API endpoints for RunPod cloud deployment."""
import aiohttp
from aiohttp import web

from cgm_core.decorators import requires_workspace
from deploy.runpod_client import RunPodClient
from deploy.startup_script import generate_startup_script, generate_deployment_id

routes = web.RouteTableDef()


def get_comfyui_url(pod_id: str, port: int = 8188) -> str:
    """Get the ComfyUI proxy URL for a pod."""
    return f"https://{pod_id}-{port}.proxy.runpod.net"


def get_runpod_console_url(pod_id: str) -> str:
    """Get the RunPod console URL for debugging."""
    return f"https://www.runpod.io/console/pods/{pod_id}"


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
            "credit_balance": result.get("credit_balance"),
        })
    else:
        return web.json_response(
            {
                "status": "error",
                "message": result.get("error", "Connection failed"),
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


@routes.post("/v2/comfygit/deploy/runpod/{pod_id}/stop")
@requires_workspace
async def stop_runpod_pod(request: web.Request, workspace) -> web.Response:
    """Stop a running RunPod pod (preserves storage, saves money).

    Path params:
        pod_id: Pod identifier to stop

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
        result = await client.stop_pod(pod_id)
        return web.json_response({
            "status": "success",
            "message": "Pod stopped",
            "pod_status": result.get("desiredStatus"),
        })
    except Exception as e:
        return web.json_response(
            {"status": "error", "error": str(e)},
            status=500,
        )


@routes.post("/v2/comfygit/deploy/runpod/{pod_id}/start")
@requires_workspace
async def start_runpod_pod(request: web.Request, workspace) -> web.Response:
    """Start a stopped RunPod pod.

    Path params:
        pod_id: Pod identifier to start

    Returns:
        status: "success" or "error"
        cost_per_hour: Cost per hour when running
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
        result = await client.start_pod(pod_id)
        return web.json_response({
            "status": "success",
            "message": "Pod starting",
            "pod_status": result.get("desiredStatus"),
            "cost_per_hour": result.get("costPerHr"),
        })
    except Exception as e:
        return web.json_response(
            {"status": "error", "error": str(e)},
            status=500,
        )


@routes.get("/v2/comfygit/deploy/runpod/{pod_id}/status")
@requires_workspace
async def get_deployment_status(request: web.Request, workspace) -> web.Response:
    """Get deployment status for a pod.

    Checks pod status via RunPod API and probes ComfyUI endpoint to determine readiness.
    Does not require SSH or exec access - uses HTTP probe only.

    Path params:
        pod_id: Pod identifier

    Returns:
        phase: STARTING_POD | SETTING_UP | READY | STOPPED | ERROR
        phase_detail: Human-readable status description
        comfyui_url: URL when ready, null otherwise
        console_url: RunPod console URL for debugging
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
        pod = await client.get_pod(pod_id)
    except Exception as e:
        return web.json_response(
            {"status": "error", "error": f"Failed to get pod: {e}"},
            status=500,
        )

    if not pod:
        return web.json_response(
            {"status": "error", "error": "Pod not found"},
            status=404,
        )

    console_url = get_runpod_console_url(pod_id)
    desired_status = pod.get("desiredStatus", "UNKNOWN")

    # Pod not running yet
    if desired_status in ("CREATED", "PENDING"):
        return web.json_response({
            "phase": "STARTING_POD",
            "phase_detail": "Waiting for pod to start...",
            "comfyui_url": None,
            "console_url": console_url,
        })

    # Pod stopped or terminated
    if desired_status in ("EXITED", "TERMINATED", "STOPPED"):
        return web.json_response({
            "phase": "STOPPED",
            "phase_detail": f"Pod is {desired_status.lower()}",
            "comfyui_url": None,
            "console_url": console_url,
        })

    # Pod is running - probe ComfyUI to check if it's ready
    if desired_status == "RUNNING":
        comfyui_url = get_comfyui_url(pod_id)

        try:
            timeout = aiohttp.ClientTimeout(total=5)
            async with aiohttp.ClientSession(timeout=timeout) as session:
                async with session.get(comfyui_url) as resp:
                    if resp.status == 200:
                        return web.json_response({
                            "phase": "READY",
                            "phase_detail": "ComfyUI is running",
                            "comfyui_url": comfyui_url,
                            "console_url": console_url,
                        })
        except Exception:
            pass  # ComfyUI not responding yet

        return web.json_response({
            "phase": "SETTING_UP",
            "phase_detail": "Pod running, waiting for ComfyUI...",
            "comfyui_url": None,
            "console_url": console_url,
        })

    # Unknown status
    return web.json_response({
        "phase": "ERROR",
        "phase_detail": f"Unknown pod status: {desired_status}",
        "comfyui_url": None,
        "console_url": console_url,
    })


@routes.post("/v2/comfygit/deploy/runpod")
@requires_workspace
async def deploy_to_runpod(request: web.Request, workspace) -> web.Response:
    """Deploy environment to RunPod.

    Request body:
        gpu_type_id: GPU type (e.g., "NVIDIA GeForce RTX 4090")
        pod_name: Name for the pod (optional, defaults to "comfygit-deploy")
        network_volume_id: Network volume to attach (for persistent storage)
        cloud_type: "SECURE" or "COMMUNITY" (optional, default "SECURE")
        pricing_type: "ON_DEMAND" or "SPOT" (optional, default "ON_DEMAND")
        spot_bid: Bid price for spot instances (required for SPOT pricing_type)
        import_source: Git URL or tarball path for cg import (required)
        branch: Git branch/tag for import (optional)

    Returns:
        status: "success" or "error"
        pod_id: Created pod ID on success
        deployment_id: Unique deployment identifier
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
    pricing_type = data.get("pricing_type", "ON_DEMAND")
    spot_bid = data.get("spot_bid")  # Required for SPOT pricing
    import_source = data.get("import_source")
    branch = data.get("branch")

    # Validate import_source is provided
    if not import_source:
        return web.json_response(
            {"status": "error", "error": "import_source is required for deployment"},
            status=400,
        )

    is_spot = pricing_type == "SPOT"

    # Validate spot_bid for spot instances
    if is_spot and not spot_bid:
        return web.json_response(
            {"status": "error", "error": "spot_bid is required for SPOT pricing"},
            status=400,
        )

    # Generate unique deployment ID
    env_name = pod_name.replace("comfygit-", "") if pod_name else "deploy"
    deployment_id = generate_deployment_id(env_name)

    # Generate startup script for pod
    startup_script = generate_startup_script(
        deployment_id=deployment_id,
        import_source=import_source,
        branch=branch,
    )

    client = RunPodClient(api_key)

    try:
        if is_spot:
            # Use GraphQL mutation for spot pods
            pod = await client.create_spot_pod(
                name=pod_name,
                image_name="runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04",
                gpu_type_id=gpu_type_id,
                bid_per_gpu=float(spot_bid),
                cloud_type=cloud_type,
                network_volume_id=network_volume_id,
                container_disk_in_gb=30,
                ports="8188/http,22/tcp",
                env=[{"key": "COMFYGIT_HOME", "value": "/workspace/comfygit"}],
                docker_start_cmd=startup_script,
            )
        else:
            # Use REST API for on-demand pods
            pod = await client.create_pod(
                name=pod_name,
                image_name="runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04",
                gpu_type_id=gpu_type_id,
                cloud_type=cloud_type,
                network_volume_id=network_volume_id,
                container_disk_in_gb=30,
                ports=["8188/http", "22/tcp"],
                env={"COMFYGIT_HOME": "/workspace/comfygit"},
                docker_start_cmd=["/bin/bash", "-c", startup_script],
            )

        return web.json_response({
            "status": "success",
            "pod_id": pod.get("id"),
            "deployment_id": deployment_id,
            "message": "Pod created. Environment setup in progress...",
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
        has_key: True if key is set
        key_preview: Last 4 characters of key (for display)
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()

    if api_key:
        return web.json_response({
            "has_key": True,
            "key_preview": api_key[-4:] if len(api_key) >= 4 else api_key,
        })
    else:
        return web.json_response({
            "has_key": False,
            "key_preview": None,
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


@routes.get("/v2/comfygit/deploy/runpod/data-centers")
@requires_workspace
async def get_runpod_data_centers(request: web.Request, workspace) -> web.Response:
    """Get available RunPod data centers.

    Returns:
        data_centers: List of data center objects with id, name, available
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()
    if not api_key:
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = RunPodClient(api_key)
    data_centers = await client.get_data_centers()

    return web.json_response({"data_centers": data_centers})


@routes.get("/v2/comfygit/deploy/runpod/gpu-types")
@requires_workspace
async def get_runpod_gpu_types(request: web.Request, workspace) -> web.Response:
    """Get available GPU types with live pricing from GraphQL API.

    Query params:
        data_center_id: Optional filter by data center (filters GPUs to those available in region)

    Returns:
        gpu_types: List of GPU type objects with pricing
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()
    if not api_key:
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    # Get optional data center filter
    data_center_id = request.query.get("data_center_id")

    client = RunPodClient(api_key)

    try:
        raw_gpu_types = await client.get_gpu_types_with_pricing()
    except Exception as e:
        return web.json_response(
            {"status": "error", "error": f"Failed to fetch GPU types: {e}"},
            status=500,
        )

    # Transform to frontend-expected format
    gpu_types = []
    for gpu in raw_gpu_types:
        # Skip GPUs with no pricing available
        secure_price = gpu.get("securePrice")
        community_price = gpu.get("communityPrice")
        if not secure_price and not community_price:
            continue

        # Filter by data center if specified
        node_group_dcs = gpu.get("nodeGroupDatacenters") or []
        dc_ids = [dc.get("id") for dc in node_group_dcs]

        # If data center filter provided, skip GPUs not available in that region
        if data_center_id and dc_ids and data_center_id not in dc_ids:
            continue

        # Extract lowest price info (contains stock status)
        lowest_price = gpu.get("lowestPrice") or {}

        gpu_types.append({
            "id": gpu.get("id"),
            "displayName": gpu.get("displayName"),
            "memoryInGb": gpu.get("memoryInGb"),
            "securePrice": secure_price or 0,
            "communityPrice": community_price or 0,
            "secureSpotPrice": gpu.get("secureSpotPrice") or 0,
            "communitySpotPrice": gpu.get("communitySpotPrice") or 0,
            "stockStatus": lowest_price.get("stockStatus"),  # HIGH, MEDIUM, LOW, or None
            "available": gpu.get("secureCloud") or gpu.get("communityCloud") or False,
            "dataCenterIds": dc_ids,  # List of data centers where GPU is available
        })

    # Sort by price (community, ascending)
    gpu_types.sort(key=lambda g: g.get("communityPrice") or g.get("securePrice") or 999)

    return web.json_response({"gpu_types": gpu_types})
