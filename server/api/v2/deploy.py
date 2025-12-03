"""Deploy API endpoints for RunPod cloud deployment."""
import time
from dataclasses import dataclass, field
from typing import Dict

import aiohttp
from aiohttp import web

from cgm_core.decorators import requires_workspace, requires_environment
from cgm_utils.async_helpers import run_sync
from deploy.runpod_client import RunPodClient
from deploy.client_factory import get_deploy_client, is_simulator_mode
from deploy.startup_script import generate_startup_script, generate_deployment_id

routes = web.RouteTableDef()


# =============================================================================
# Active Deployment Tracking
# =============================================================================
# In-memory tracking for deployments. Survives within process lifetime.
# Cleared when ComfyUI restarts, which is acceptable for MVP.

@dataclass
class ActiveDeployment:
    """Tracks an in-progress deployment."""
    instance_id: str
    provider: str
    name: str
    gpu_type: str
    cost_per_hour: float
    created_at: float = field(default_factory=time.time)
    phase: str = "STARTING"
    message: str = "Pod starting..."
    progress: int = 0

    def to_instance_dict(self) -> dict:
        """Convert to unified Instance format for API response."""
        return {
            "id": self.instance_id,
            "provider": self.provider,
            "name": self.name,
            "status": "deploying",
            "deployment_phase": self.phase,
            "deployment_message": self.message,
            "deployment_progress": self.progress,
            "gpu_type": self.gpu_type,
            "cost_per_hour": self.cost_per_hour,
            "uptime_seconds": int(time.time() - self.created_at),
            "total_cost": 0.0,
            "created_at": time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime(self.created_at)),
            "console_url": get_runpod_console_url(self.instance_id) if self.provider == "runpod" else None,
        }


# Global store for active deployments
_active_deployments: Dict[str, ActiveDeployment] = {}


def track_deployment(instance_id: str, provider: str, name: str, gpu_type: str, cost_per_hour: float) -> None:
    """Start tracking a new deployment."""
    _active_deployments[instance_id] = ActiveDeployment(
        instance_id=instance_id,
        provider=provider,
        name=name,
        gpu_type=gpu_type,
        cost_per_hour=cost_per_hour,
    )


def update_deployment_status(instance_id: str, phase: str, message: str, progress: int) -> None:
    """Update the status of a tracked deployment."""
    if instance_id in _active_deployments:
        dep = _active_deployments[instance_id]
        dep.phase = phase
        dep.message = message
        dep.progress = progress


def complete_deployment(instance_id: str) -> None:
    """Remove a deployment from tracking (it's now visible from provider API)."""
    _active_deployments.pop(instance_id, None)


def get_comfyui_url(pod_id: str, port: int = 8188) -> str:
    """Get the ComfyUI proxy URL for a pod."""
    return f"https://{pod_id}-{port}.proxy.runpod.net"


def get_runpod_console_url(pod_id: str) -> str:
    """Get the RunPod console URL for debugging."""
    return f"https://www.runpod.io/console/pods/{pod_id}"


def _get_deploy_summary(env):
    """Get environment summary for deployment (sync helper)."""
    pyproject = env.pyproject

    # Get all models and count those with/without sources
    all_models = list(pyproject.models.get_all())
    models_with_sources = sum(1 for m in all_models if m.sources)
    models_without_sources = len(all_models) - models_with_sources

    # Get node count
    nodes = list(pyproject.nodes.get_existing())

    # Get workflow count
    workflows = pyproject.workflows.get_all_with_resolutions()

    # Get ComfyUI version from tool.comfygit section
    comfyui_version = "unknown"
    try:
        config = pyproject.load()
        comfyui_version = config.get('tool', {}).get('comfygit', {}).get('comfyui_version', 'unknown')
    except Exception:
        pass

    return {
        "comfyui_version": comfyui_version,
        "node_count": len(nodes),
        "model_count": len(all_models),
        "models_with_sources": models_with_sources,
        "models_without_sources": models_without_sources,
        "workflow_count": len(workflows),
        "estimated_package_size_mb": 0.0,  # TODO: Calculate actual size
    }


@routes.get("/v2/comfygit/deploy/summary")
@requires_environment
async def get_deploy_summary(request: web.Request, env) -> web.Response:
    """Get environment summary for deployment planning.

    Returns info about what will be deployed: ComfyUI version, node count,
    model count (with/without sources), workflow count.
    """
    summary = await run_sync(_get_deploy_summary, env)
    return web.json_response(summary)


def _validate_deploy(env):
    """Validate environment for deployment (sync helper).

    Unlike export validation, deploy validation does NOT check for uncommitted
    changes because deployments pull from git remotes, not local files.
    """
    warnings = {
        "models_without_sources": [],
    }

    # Check for models without sources (warning only)
    pyproject = env.pyproject
    models_by_hash = {
        m.hash: m
        for m in pyproject.models.get_all()
        if not m.sources
    }

    if models_by_hash:
        models_without_sources = []
        all_workflows = pyproject.workflows.get_all_with_resolutions()
        for workflow_name in all_workflows.keys():
            workflow_models = pyproject.workflows.get_workflow_models(workflow_name)
            for wf_model in workflow_models:
                if wf_model.hash and wf_model.hash in models_by_hash:
                    existing = next(
                        (m for m in models_without_sources if m["hash"] == wf_model.hash),
                        None
                    )
                    if existing:
                        existing["workflows"].append(workflow_name)
                    else:
                        model_data = models_by_hash[wf_model.hash]
                        models_without_sources.append({
                            "filename": model_data.filename,
                            "hash": wf_model.hash,
                            "workflows": [workflow_name]
                        })

        warnings["models_without_sources"] = models_without_sources

    return {
        "can_export": True,  # Always allow deploy (pulls from remote)
        "blocking_issues": [],
        "warnings": warnings
    }


@routes.post("/v2/comfygit/deploy/validate")
@requires_environment
async def validate_deploy(request: web.Request, env) -> web.Response:
    """Validate environment for deployment.

    Unlike export validation, this does NOT check for uncommitted changes
    because deployments pull code from git remotes, not local files.

    Only checks for warnings (like models without sources) that the user
    should be aware of before deploying.

    Returns:
        can_deploy: Always true (no blocking issues for deploy)
        blocking_issues: Always empty
        warnings: Models without download sources, etc.
    """
    result = await run_sync(_validate_deploy, env)
    return web.json_response(result)


@routes.post("/v2/comfygit/deploy/runpod/test")
@requires_workspace
async def test_runpod_connection(request: web.Request, workspace) -> web.Response:
    """Test RunPod API key and optionally save it.

    In simulator mode, tests Docker connectivity instead.

    Request body:
        api_key: RunPod API key to test (ignored in simulator mode)
        save_key: If true, save key to workspace config on success

    Returns:
        status: "success" or "error"
        message: Human-readable message
    """
    # Simulator mode - test Docker instead
    if is_simulator_mode():
        from deploy.local_simulator import LocalSimulatorClient
        client = LocalSimulatorClient()
        result = await client.test_connection()
        if result.get("success"):
            return web.json_response({
                "status": "success",
                "message": "Connected to Local Simulator",
                "credit_balance": result.get("credit_balance"),
                "warning": result.get("warning"),
                "simulator": True,
            })
        else:
            return web.json_response(
                {"status": "error", "message": result.get("error", "Simulator error")},
                status=500,
            )

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


# Status mapping from RunPod status to unified Instance status
RUNPOD_STATUS_MAP = {
    'RUNNING': 'running',
    'EXITED': 'stopped',
    'STOPPED': 'stopped',
    'CREATED': 'deploying',
    'TERMINATED': 'terminated',
}


def _convert_runpod_pod_to_instance(pod: dict, client) -> dict:
    """Convert a RunPod pod to unified Instance format."""
    status = pod.get("desiredStatus", "UNKNOWN")
    uptime_seconds = pod.get("uptimeSeconds", 0)
    cost_per_hour = pod.get("costPerHr", 0)
    total_cost = (uptime_seconds / 3600) * cost_per_hour
    pod_id = pod.get("id")

    return {
        "id": pod_id,
        "provider": "runpod",
        "name": pod.get("name", pod_id),
        "status": RUNPOD_STATUS_MAP.get(status, "error"),
        "comfyui_url": client.get_comfyui_url(pod) if status == "RUNNING" else None,
        "console_url": get_runpod_console_url(pod_id),
        "gpu_type": pod.get("machine", {}).get("gpuDisplayName", "Unknown"),
        "cost_per_hour": cost_per_hour,
        "uptime_seconds": uptime_seconds,
        "total_cost": round(total_cost, 4),
        "created_at": pod.get("created_at", ""),
    }


@routes.get("/v2/comfygit/deploy/instances")
@requires_workspace
async def get_all_instances(request: web.Request, workspace) -> web.Response:
    """Get all instances from all configured providers.

    Returns a unified Instance format that's provider-agnostic.
    Includes both provider API instances and locally-tracked deploying instances.
    Currently supports RunPod; future: Vast, Custom.

    Returns:
        instances: List of Instance objects
    """
    instances = []
    seen_ids = set()

    # 1. Add tracked deployments first (they have the most accurate status)
    for dep in _active_deployments.values():
        instances.append(dep.to_instance_dict())
        seen_ids.add(dep.instance_id)

    # 2. RunPod instances (if key configured)
    api_key = workspace.workspace_config_manager.get_runpod_token()
    if api_key or is_simulator_mode():
        try:
            client = get_deploy_client(api_key)
            pods = await client.list_pods()
            for pod in pods:
                pod_id = pod.get("id")
                # Skip if already added from tracked deployments
                if pod_id in seen_ids:
                    # If pod is now RUNNING, remove from tracking
                    if pod.get("desiredStatus") == "RUNNING":
                        complete_deployment(pod_id)
                    continue
                instances.append(_convert_runpod_pod_to_instance(pod, client))
        except Exception:
            # Graceful degradation - if RunPod API fails, just return empty
            pass

    # Future: Vast instances
    # Future: Custom instances

    return web.json_response({"instances": instances})


@routes.post("/v2/comfygit/deploy/instances/status")
@requires_workspace
async def batch_instance_status(request: web.Request, workspace) -> web.Response:
    """Batch poll status for specific instances.

    More efficient than fetching all instances when you only need
    status updates for a few deploying instances.

    Request body:
        instance_ids: List of instance IDs to check

    Returns:
        statuses: Dict mapping instance_id to status info
    """
    data = await request.json()
    instance_ids = data.get("instance_ids", [])

    if not instance_ids:
        return web.json_response({"statuses": {}})

    statuses = {}

    # Check tracked deployments first
    for instance_id in instance_ids:
        if instance_id in _active_deployments:
            dep = _active_deployments[instance_id]
            statuses[instance_id] = {
                "status": "deploying",
                "phase": dep.phase,
                "message": dep.message,
                "progress": dep.progress,
            }

    # For any not in tracked deployments, check RunPod API
    remaining_ids = [id for id in instance_ids if id not in statuses]
    if remaining_ids:
        api_key = workspace.workspace_config_manager.get_runpod_token()
        if api_key or is_simulator_mode():
            try:
                client = get_deploy_client(api_key)
                pods = await client.list_pods()
                pods_by_id = {pod.get("id"): pod for pod in pods}

                for instance_id in remaining_ids:
                    pod = pods_by_id.get(instance_id)
                    if pod:
                        runpod_status = pod.get("desiredStatus", "UNKNOWN")
                        status = RUNPOD_STATUS_MAP.get(runpod_status, "error")
                        statuses[instance_id] = {
                            "status": status,
                            "comfyui_url": client.get_comfyui_url(pod) if status == "running" else None,
                        }
                        # If running, complete the tracked deployment
                        if status == "running":
                            complete_deployment(instance_id)
            except Exception:
                pass

    return web.json_response({"statuses": statuses})


@routes.get("/v2/comfygit/deploy/runpod/pods")
@requires_workspace
async def get_runpod_pods(request: web.Request, workspace) -> web.Response:
    """List user's RunPod pods.

    Returns:
        pods: List of pod objects with id, name, status, cost info
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()
    if not api_key and not is_simulator_mode():
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = get_deploy_client(api_key)
    pods = await client.list_pods()

    # Transform pods to include all fields expected by frontend RunPodInstance type
    result_pods = []
    for pod in pods:
        uptime_seconds = pod.get("uptimeSeconds", 0)
        cost_per_hour = pod.get("costPerHr", 0)
        # Calculate total cost from uptime and hourly rate
        total_cost = (uptime_seconds / 3600) * cost_per_hour

        result_pod = {
            "id": pod.get("id"),
            "name": pod.get("name"),
            "gpu_type": pod.get("machine", {}).get("gpuDisplayName", "Unknown"),
            "gpu_count": pod.get("gpuCount", 1),
            "status": pod.get("desiredStatus"),
            "cost_per_hour": cost_per_hour,
            "uptime_seconds": uptime_seconds,
            "total_cost": round(total_cost, 4),
            "comfyui_url": client.get_comfyui_url(pod),
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
    if not api_key and not is_simulator_mode():
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = get_deploy_client(api_key)
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
    if not api_key and not is_simulator_mode():
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = get_deploy_client(api_key)
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
    if not api_key and not is_simulator_mode():
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = get_deploy_client(api_key)
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
    if not api_key and not is_simulator_mode():
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = get_deploy_client(api_key)

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
        # Use client method for URL (handles both RunPod and simulator)
        comfyui_url = client.get_comfyui_url(pod)

        if comfyui_url:
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
    if not api_key and not is_simulator_mode():
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

    # Validate spot_bid for spot instances (not applicable in simulator mode)
    if is_spot and not spot_bid and not is_simulator_mode():
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

    client = get_deploy_client(api_key)

    try:
        # Spot pods only supported on real RunPod (not simulator)
        if is_spot and not is_simulator_mode():
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
            # Use create_pod for both on-demand and simulator
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

        pod_id = pod.get("id")

        # Track this deployment for the Instances tab
        track_deployment(
            instance_id=pod_id,
            provider="runpod",
            name=pod_name,
            gpu_type=gpu_type_id,  # Use the ID; real name comes from polling
            cost_per_hour=pod.get("costPerHr", 0),
        )

        return web.json_response({
            "status": "success",
            "pod_id": pod_id,
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
@routes.get("/v2/comfygit/deploy/runpod/key")  # Alias for frontend compatibility
@requires_workspace
async def get_runpod_key_status(request: web.Request, workspace) -> web.Response:
    """Check if RunPod API key is configured, optionally verifying it.

    In simulator mode, always returns success (no key needed).

    Query params:
        verify: If "true", test the stored key against RunPod API

    Returns:
        has_key: True if key is set
        key_preview: Last 4 characters of key (for display)
        valid: (only if verify=true) True if key is valid with RunPod
        credit_balance: (only if verify=true and valid) Account balance
        error: (only if verify=true and invalid) Error message
    """
    # Simulator mode - no key needed
    if is_simulator_mode():
        return web.json_response({
            "has_key": True,
            "key_preview": "SIMU",
            "valid": True,
            "simulator": True,
            "credit_balance": 999.99,
        })

    api_key = workspace.workspace_config_manager.get_runpod_token()

    if not api_key:
        return web.json_response({
            "has_key": False,
            "key_preview": None,
        })

    key_preview = api_key[-4:] if len(api_key) >= 4 else api_key

    # If verify=true, test the stored key against RunPod
    if request.query.get("verify") == "true":
        client = RunPodClient(api_key)
        result = await client.test_connection()

        if result.get("success"):
            return web.json_response({
                "has_key": True,
                "valid": True,
                "key_preview": key_preview,
                "credit_balance": result.get("credit_balance"),
            })
        else:
            return web.json_response({
                "has_key": True,
                "valid": False,
                "key_preview": key_preview,
                "error": result.get("error", "Connection failed"),
            })

    # Default: just check existence, don't validate
    return web.json_response({
        "has_key": True,
        "key_preview": key_preview,
    })


@routes.get("/v2/comfygit/deploy/runpod/volumes")
@requires_workspace
async def get_runpod_volumes(request: web.Request, workspace) -> web.Response:
    """List user's network volumes.

    Returns:
        volumes: List of volume objects with id, name, size_gb, data_center_id
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()
    if not api_key and not is_simulator_mode():
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = get_deploy_client(api_key)
    volumes = await client.list_network_volumes()

    # Transform to consistent API format
    result_volumes = [
        {
            "id": vol.get("id"),
            "name": vol.get("name"),
            "size_gb": vol.get("size"),
            "data_center_id": vol.get("dataCenterId") or vol.get("dataCenter"),  # Handle both field names
            "data_center_name": vol.get("dataCenterName", ""),
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
    if not api_key and not is_simulator_mode():
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    client = get_deploy_client(api_key)
    data_centers = await client.get_data_centers()

    return web.json_response({"data_centers": data_centers})


@routes.get("/v2/comfygit/deploy/runpod/gpu-types")
@requires_workspace
async def get_runpod_gpu_types(request: web.Request, workspace) -> web.Response:
    """Get available GPU types with live pricing from GraphQL API.

    Query params:
        data_center_id: Filter by data center (e.g., "US-IL-1") for region-specific
                       stock status. Required for accurate availability info.

    Returns:
        gpu_types: List of GPU type objects with pricing and stock status
    """
    api_key = workspace.workspace_config_manager.get_runpod_token()
    if not api_key and not is_simulator_mode():
        return web.json_response(
            {"status": "error", "error": "RunPod API key not configured"},
            status=400,
        )

    # Get data center filter - this is passed to lowestPrice for regional availability
    data_center_id = request.query.get("data_center_id")

    client = get_deploy_client(api_key)

    try:
        raw_gpu_types = await client.get_gpu_types_with_pricing(data_center_id)
    except Exception as e:
        return web.json_response(
            {"status": "error", "error": f"Failed to fetch GPU types: {e}"},
            status=500,
        )

    # Simulator returns pre-formatted GPU types
    if is_simulator_mode():
        gpu_types = [
            {
                "id": gpu.get("id"),
                "displayName": gpu.get("displayName"),
                "memoryInGb": gpu.get("memoryInGb"),
                "securePrice": gpu.get("securePrice") or 0,
                "communityPrice": gpu.get("communityPrice") or 0,
                "secureSpotPrice": gpu.get("secureSpotPrice") or 0,
                "communitySpotPrice": gpu.get("communitySpotPrice") or 0,
                "stockStatus": (gpu.get("lowestPrice") or {}).get("stockStatus"),
                "available": True,
            }
            for gpu in raw_gpu_types
        ]
        return web.json_response({"gpu_types": gpu_types})

    # Transform to frontend-expected format
    gpu_types = []
    for gpu in raw_gpu_types:
        # Skip GPUs with no pricing available
        secure_price = gpu.get("securePrice")
        community_price = gpu.get("communityPrice")
        if not secure_price and not community_price:
            continue

        # Extract lowest price info (contains stock status)
        lowest_price = gpu.get("lowestPrice") or {}
        stock_status = lowest_price.get("stockStatus")  # HIGH, MEDIUM, LOW, or None

        # Note: nodeGroupDatacenters is often empty and doesn't reliably indicate
        # regional availability. We show all GPUs and use stockStatus for availability.
        gpu_types.append({
            "id": gpu.get("id"),
            "displayName": gpu.get("displayName"),
            "memoryInGb": gpu.get("memoryInGb"),
            "securePrice": secure_price or 0,
            "communityPrice": community_price or 0,
            "secureSpotPrice": gpu.get("secureSpotPrice") or 0,
            "communitySpotPrice": gpu.get("communitySpotPrice") or 0,
            "stockStatus": stock_status,
            "available": bool(stock_status),  # Available if has stock (HIGH/MEDIUM/LOW)
        })

    # Sort by price (community, ascending)
    gpu_types.sort(key=lambda g: g.get("communityPrice") or g.get("securePrice") or 999)

    return web.json_response({"gpu_types": gpu_types})
