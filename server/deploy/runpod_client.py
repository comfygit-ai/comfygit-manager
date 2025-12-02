"""RunPod REST and GraphQL API client for pod and resource management.

REST API v1: https://rest.runpod.io/v1
GraphQL API: https://api.runpod.io/graphql
"""
import aiohttp
from typing import Any
from dataclasses import dataclass

# RunPod data centers from OpenAPI spec (static list - no REST endpoint available)
DATA_CENTERS = [
    # United States
    {"id": "US-GA-1", "name": "United States (Georgia)", "available": True},
    {"id": "US-GA-2", "name": "United States (Georgia 2)", "available": True},
    {"id": "US-IL-1", "name": "United States (Illinois)", "available": True},
    {"id": "US-KS-2", "name": "United States (Kansas)", "available": True},
    {"id": "US-KS-3", "name": "United States (Kansas 2)", "available": True},
    {"id": "US-TX-1", "name": "United States (Texas)", "available": True},
    {"id": "US-TX-3", "name": "United States (Texas 2)", "available": True},
    {"id": "US-TX-4", "name": "United States (Texas 3)", "available": True},
    {"id": "US-WA-1", "name": "United States (Washington)", "available": True},
    {"id": "US-CA-2", "name": "United States (California)", "available": True},
    {"id": "US-NC-1", "name": "United States (North Carolina)", "available": True},
    {"id": "US-DE-1", "name": "United States (Delaware)", "available": True},
    # Canada
    {"id": "CA-MTL-1", "name": "Canada (Montreal)", "available": True},
    {"id": "CA-MTL-2", "name": "Canada (Montreal 2)", "available": True},
    {"id": "CA-MTL-3", "name": "Canada (Montreal 3)", "available": True},
    # Europe
    {"id": "EU-CZ-1", "name": "Europe (Czech Republic)", "available": True},
    {"id": "EU-FR-1", "name": "Europe (France)", "available": True},
    {"id": "EU-NL-1", "name": "Europe (Netherlands)", "available": True},
    {"id": "EU-RO-1", "name": "Europe (Romania)", "available": True},
    {"id": "EU-SE-1", "name": "Europe (Sweden)", "available": True},
    {"id": "EUR-IS-1", "name": "Europe (Iceland)", "available": True},
    {"id": "EUR-IS-2", "name": "Europe (Iceland 2)", "available": True},
    {"id": "EUR-IS-3", "name": "Europe (Iceland 3)", "available": True},
    {"id": "EUR-NO-1", "name": "Europe (Norway)", "available": True},
    # Asia-Pacific
    {"id": "AP-JP-1", "name": "Asia-Pacific (Japan)", "available": True},
    # Oceania
    {"id": "OC-AU-1", "name": "Oceania (Australia)", "available": True},
]

# Common GPU types available on RunPod
GPU_TYPES = [
    "NVIDIA GeForce RTX 4090",
    "NVIDIA GeForce RTX 3090",
    "NVIDIA GeForce RTX 3090 Ti",
    "NVIDIA GeForce RTX 3080 Ti",
    "NVIDIA GeForce RTX 3080",
    "NVIDIA GeForce RTX 3070",
    "NVIDIA GeForce RTX 4080",
    "NVIDIA GeForce RTX 4080 SUPER",
    "NVIDIA GeForce RTX 4070 Ti",
    "NVIDIA GeForce RTX 5090",
    "NVIDIA GeForce RTX 5080",
    "NVIDIA A40",
    "NVIDIA A100 80GB PCIe",
    "NVIDIA A100-SXM4-80GB",
    "NVIDIA A30",
    "NVIDIA H100 80GB HBM3",
    "NVIDIA H100 PCIe",
    "NVIDIA H100 NVL",
    "NVIDIA H200",
    "NVIDIA B200",
    "NVIDIA L40S",
    "NVIDIA L40",
    "NVIDIA L4",
    "NVIDIA RTX A6000",
    "NVIDIA RTX A5000",
    "NVIDIA RTX A4500",
    "NVIDIA RTX A4000",
    "NVIDIA RTX A2000",
    "NVIDIA RTX 6000 Ada Generation",
    "NVIDIA RTX 5000 Ada Generation",
    "NVIDIA RTX 4000 Ada Generation",
    "NVIDIA RTX 4000 SFF Ada Generation",
    "NVIDIA RTX 2000 Ada Generation",
    "Tesla V100-PCIE-16GB",
    "Tesla V100-FHHL-16GB",
    "Tesla V100-SXM2-16GB",
    "Tesla V100-SXM2-32GB",
    "AMD Instinct MI300X OAM",
]


@dataclass
class RunPodAPIError(Exception):
    """Error from RunPod API."""
    message: str
    status_code: int

    def __str__(self) -> str:
        return f"RunPod API Error ({self.status_code}): {self.message}"


class RunPodClient:
    """Async client for RunPod REST API.

    Usage:
        client = RunPodClient(api_key="rpa_xxx")

        # Test connection
        result = await client.test_connection()

        # List pods
        pods = await client.list_pods()

        # Create a pod
        pod = await client.create_pod(
            name="my-comfyui",
            image_name="runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04",
            gpu_type_id="NVIDIA GeForce RTX 4090",
            volume_in_gb=50,
            ports=["8188/http", "22/tcp"],
        )

        # Get ComfyUI URL
        url = RunPodClient.get_comfyui_url(pod)
    """

    base_url = "https://rest.runpod.io/v1"
    graphql_url = "https://api.runpod.io/graphql"

    def __init__(self, api_key: str):
        """Initialize client with API key.

        Args:
            api_key: RunPod API key (starts with rpa_ or rps_)
        """
        if not api_key:
            raise ValueError("API key required")
        self.api_key = api_key

    def _headers(self) -> dict[str, str]:
        """Get request headers with authorization."""
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    async def _request(
        self,
        method: str,
        path: str,
        data: dict | None = None,
        params: dict | None = None,
    ) -> aiohttp.ClientResponse:
        """Make HTTP request to RunPod API.

        Args:
            method: HTTP method (GET, POST, DELETE, etc.)
            path: API path (e.g., "/pods")
            data: JSON body for POST/PATCH requests
            params: Query parameters

        Returns:
            aiohttp response object
        """
        url = f"{self.base_url}{path}"

        async with aiohttp.ClientSession() as session:
            async with session.request(
                method,
                url,
                json=data,
                params=params,
                headers=self._headers(),
            ) as response:
                # Handle errors
                if response.status >= 400:
                    try:
                        error_body = await response.json()
                        message = error_body.get("message", error_body.get("error", str(error_body)))
                    except Exception:
                        message = await response.text() or f"HTTP {response.status}"
                    raise RunPodAPIError(message, response.status)

                return response

    async def _get(self, path: str, params: dict | None = None) -> Any:
        """Make GET request and return JSON response."""
        async with aiohttp.ClientSession() as session:
            async with session.get(
                f"{self.base_url}{path}",
                params=params,
                headers=self._headers(),
            ) as response:
                if response.status >= 400:
                    await self._handle_error(response)
                return await response.json()

    async def _post(self, path: str, data: dict | None = None) -> Any:
        """Make POST request and return JSON response."""
        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}{path}",
                json=data,
                headers=self._headers(),
            ) as response:
                if response.status >= 400:
                    await self._handle_error(response)
                if response.status == 204:
                    return None
                try:
                    return await response.json()
                except Exception:
                    return None

    async def _delete(self, path: str) -> None:
        """Make DELETE request."""
        async with aiohttp.ClientSession() as session:
            async with session.delete(
                f"{self.base_url}{path}",
                headers=self._headers(),
            ) as response:
                if response.status >= 400:
                    await self._handle_error(response)

    async def _patch(self, path: str, data: dict | None = None) -> Any:
        """Make PATCH request and return JSON response."""
        async with aiohttp.ClientSession() as session:
            async with session.patch(
                f"{self.base_url}{path}",
                json=data,
                headers=self._headers(),
            ) as response:
                if response.status >= 400:
                    await self._handle_error(response)
                return await response.json()

    async def _handle_error(self, response: aiohttp.ClientResponse) -> None:
        """Handle error response."""
        try:
            error_body = await response.json()
            message = error_body.get("message", error_body.get("error", str(error_body)))
        except Exception:
            message = await response.text() or f"HTTP {response.status}"
        raise RunPodAPIError(message, response.status)

    # =========================================================================
    # GraphQL API
    # =========================================================================

    async def _graphql_query(self, query: str, variables: dict | None = None) -> dict:
        """Execute a GraphQL query against RunPod API.

        Note: RunPod GraphQL uses API key as URL parameter, not Bearer token.

        Args:
            query: GraphQL query string
            variables: Optional query variables

        Returns:
            Full GraphQL response dict (may contain "data" and/or "errors")
        """
        url = f"{self.graphql_url}?api_key={self.api_key}"
        payload: dict[str, Any] = {"query": query}
        if variables:
            payload["variables"] = variables

        async with aiohttp.ClientSession() as session:
            async with session.post(
                url,
                json=payload,
                headers={"Content-Type": "application/json"},
            ) as response:
                return await response.json()

    def _handle_graphql_errors(self, result: dict) -> None:
        """Raise exception if GraphQL response contains errors."""
        if "errors" in result:
            error_msg = result["errors"][0].get("message", "GraphQL error")
            raise RunPodAPIError(error_msg, 400)

    async def get_user_info(self) -> dict[str, Any]:
        """Get user account info including credit balance.

        Returns:
            Dict with id, clientBalance, currentSpendPerHr, spendLimit
        """
        query = """
        query {
            myself {
                id
                clientBalance
                currentSpendPerHr
                spendLimit
            }
        }
        """
        result = await self._graphql_query(query)
        self._handle_graphql_errors(result)
        return result["data"]["myself"]

    async def get_gpu_types_with_pricing(self) -> list[dict]:
        """Get GPU types with real pricing, availability, and data center info.

        Returns:
            List of GPU types with pricing fields:
            - id, displayName, memoryInGb
            - secureCloud, communityCloud (availability flags)
            - securePrice, communityPrice (on-demand $/hr)
            - secureSpotPrice, communitySpotPrice (spot $/hr)
            - lowestPrice: {minimumBidPrice, uninterruptablePrice, stockStatus}
            - nodeGroupDatacenters: [{id, name}] (data centers where GPU is available)
        """
        query = """
        query {
            gpuTypes {
                id
                displayName
                memoryInGb
                secureCloud
                communityCloud
                securePrice
                communityPrice
                secureSpotPrice
                communitySpotPrice
                lowestPrice(input: { gpuCount: 1 }) {
                    minimumBidPrice
                    uninterruptablePrice
                    stockStatus
                }
                nodeGroupDatacenters {
                    id
                    name
                }
            }
        }
        """
        result = await self._graphql_query(query)
        self._handle_graphql_errors(result)
        return result["data"]["gpuTypes"]

    async def get_data_centers_from_api(self) -> list[dict]:
        """Get data centers dynamically from GraphQL API.

        Returns:
            List of data center objects with id, name, location, storageSupport, listed
        """
        query = """
        query {
            myself {
                datacenters {
                    id
                    name
                    location
                    storageSupport
                    listed
                    region
                }
            }
        }
        """
        result = await self._graphql_query(query)
        self._handle_graphql_errors(result)
        return result["data"]["myself"]["datacenters"]

    async def create_spot_pod(
        self,
        name: str,
        image_name: str,
        gpu_type_id: str,
        bid_per_gpu: float,
        gpu_count: int = 1,
        volume_in_gb: int = 20,
        container_disk_in_gb: int = 50,
        cloud_type: str = "SECURE",
        ports: str = "8188/http,22/tcp",
        env: list[dict] | None = None,
        network_volume_id: str | None = None,
        volume_mount_path: str = "/workspace",
        min_vcpu_count: int = 2,
        min_memory_in_gb: int = 15,
        docker_start_cmd: str | None = None,
    ) -> dict:
        """Create a spot/interruptible pod using GraphQL API.

        Spot pods are cheaper but can be interrupted if capacity is needed.

        Args:
            name: Pod name
            image_name: Docker image
            gpu_type_id: GPU type (e.g., "NVIDIA GeForce RTX 4090")
            bid_per_gpu: Bid price per GPU per hour
            gpu_count: Number of GPUs (default 1)
            volume_in_gb: Pod volume size in GB (default 20)
            container_disk_in_gb: Container disk size in GB (default 50)
            cloud_type: SECURE or COMMUNITY (default SECURE)
            ports: Comma-separated ports (default "8188/http,22/tcp")
            env: Environment variables as list of {key, value} dicts
            network_volume_id: Attach existing network volume
            volume_mount_path: Mount path for volume (default "/workspace")
            min_vcpu_count: Minimum vCPUs (default 2)
            min_memory_in_gb: Minimum RAM in GB (default 15)
            docker_start_cmd: Container start command (shell script)

        Returns:
            Created pod object with id, name, desiredStatus, costPerHr, machineId
        """
        # Build mutation with inline values
        env_str = "[]"
        if env:
            env_items = ", ".join(f'{{key: "{e["key"]}", value: "{e["value"]}"}}' for e in env)
            env_str = f"[{env_items}]"

        network_volume_part = ""
        if network_volume_id:
            network_volume_part = f'networkVolumeId: "{network_volume_id}",'

        # Escape and format docker start command for GraphQL
        docker_cmd_part = ""
        if docker_start_cmd:
            # Escape quotes and newlines for GraphQL string
            escaped_cmd = docker_start_cmd.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
            docker_cmd_part = f'dockerArgs: "{escaped_cmd}",'

        query = f"""
        mutation {{
            podRentInterruptable(input: {{
                name: "{name}"
                imageName: "{image_name}"
                gpuTypeId: "{gpu_type_id}"
                bidPerGpu: {bid_per_gpu}
                gpuCount: {gpu_count}
                volumeInGb: {volume_in_gb}
                containerDiskInGb: {container_disk_in_gb}
                cloudType: {cloud_type}
                ports: "{ports}"
                volumeMountPath: "{volume_mount_path}"
                minVcpuCount: {min_vcpu_count}
                minMemoryInGb: {min_memory_in_gb}
                env: {env_str}
                {network_volume_part}
                {docker_cmd_part}
            }}) {{
                id
                name
                desiredStatus
                costPerHr
                machineId
            }}
        }}
        """

        result = await self._graphql_query(query)
        self._handle_graphql_errors(result)
        return result["data"]["podRentInterruptable"]

    # =========================================================================
    # Connection Test
    # =========================================================================

    async def test_connection(self) -> dict[str, Any]:
        """Test API key validity and return account info with credit balance.

        Returns:
            {"success": True, "credit_balance": float} on success
            {"success": False, "error": "message"} on failure
        """
        try:
            user_info = await self.get_user_info()
            return {
                "success": True,
                "credit_balance": user_info.get("clientBalance", 0),
            }
        except RunPodAPIError as e:
            return {"success": False, "error": e.message}
        except Exception as e:
            return {"success": False, "error": str(e)}

    # =========================================================================
    # Pod Operations
    # =========================================================================

    async def list_pods(
        self,
        desired_status: str | None = None,
        gpu_type_id: str | None = None,
        include_machine: bool = False,
    ) -> list[dict]:
        """List all pods.

        Args:
            desired_status: Filter by status (RUNNING, EXITED, TERMINATED)
            gpu_type_id: Filter by GPU type
            include_machine: Include machine details

        Returns:
            List of pod objects
        """
        params = {}
        if desired_status:
            params["desiredStatus"] = desired_status
        if gpu_type_id:
            params["gpuTypeId"] = gpu_type_id
        if include_machine:
            params["includeMachine"] = "true"

        return await self._get("/pods", params=params or None)

    async def get_pod(
        self,
        pod_id: str,
        include_machine: bool = False,
    ) -> dict:
        """Get pod by ID.

        Args:
            pod_id: Pod identifier
            include_machine: Include machine details

        Returns:
            Pod object
        """
        params = {}
        if include_machine:
            params["includeMachine"] = "true"

        return await self._get(f"/pods/{pod_id}", params=params or None)

    async def create_pod(
        self,
        name: str,
        image_name: str,
        gpu_type_id: str,
        gpu_count: int = 1,
        volume_in_gb: int = 20,
        container_disk_in_gb: int = 50,
        cloud_type: str = "SECURE",
        ports: list[str] | None = None,
        env: dict[str, str] | None = None,
        docker_start_cmd: list[str] | None = None,
        network_volume_id: str | None = None,
        data_center_ids: list[str] | None = None,
        interruptible: bool = False,
    ) -> dict:
        """Create a new pod.

        Args:
            name: Pod name
            image_name: Docker image (e.g., "runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04")
            gpu_type_id: GPU type (e.g., "NVIDIA GeForce RTX 4090")
            gpu_count: Number of GPUs (default 1)
            volume_in_gb: Pod volume size in GB (default 20)
            container_disk_in_gb: Container disk size in GB (default 50)
            cloud_type: SECURE or COMMUNITY (default SECURE)
            ports: List of ports to expose (e.g., ["8188/http", "22/tcp"])
            env: Environment variables
            docker_start_cmd: Override container start command
            network_volume_id: Attach existing network volume
            data_center_ids: Preferred data centers
            interruptible: If True, creates a spot/interruptible pod (~50% cheaper but can be stopped)

        Returns:
            Created pod object
        """
        data = {
            "name": name,
            "imageName": image_name,
            "gpuTypeIds": [gpu_type_id],
            "gpuCount": gpu_count,
            "volumeInGb": volume_in_gb,
            "containerDiskInGb": container_disk_in_gb,
            "cloudType": cloud_type,
            "interruptible": interruptible,
        }

        if ports:
            data["ports"] = ports
        if env:
            data["env"] = env
        if docker_start_cmd:
            data["dockerStartCmd"] = docker_start_cmd
        if network_volume_id:
            data["networkVolumeId"] = network_volume_id
        if data_center_ids:
            data["dataCenterIds"] = data_center_ids

        return await self._post("/pods", data=data)

    async def update_pod(
        self,
        pod_id: str,
        name: str | None = None,
        image_name: str | None = None,
        volume_in_gb: int | None = None,
        container_disk_in_gb: int | None = None,
        ports: list[str] | None = None,
        env: dict[str, str] | None = None,
    ) -> dict:
        """Update a pod (triggers reset).

        Args:
            pod_id: Pod identifier
            name: New pod name
            image_name: New Docker image
            volume_in_gb: New volume size
            container_disk_in_gb: New container disk size
            ports: New ports configuration
            env: New environment variables

        Returns:
            Updated pod object
        """
        data = {}
        if name is not None:
            data["name"] = name
        if image_name is not None:
            data["imageName"] = image_name
        if volume_in_gb is not None:
            data["volumeInGb"] = volume_in_gb
        if container_disk_in_gb is not None:
            data["containerDiskInGb"] = container_disk_in_gb
        if ports is not None:
            data["ports"] = ports
        if env is not None:
            data["env"] = env

        return await self._patch(f"/pods/{pod_id}", data=data)

    async def delete_pod(self, pod_id: str) -> bool:
        """Delete a pod.

        Args:
            pod_id: Pod identifier

        Returns:
            True on success
        """
        await self._delete(f"/pods/{pod_id}")
        return True

    async def start_pod(self, pod_id: str) -> dict:
        """Start a stopped pod using GraphQL podResume mutation.

        Args:
            pod_id: Pod identifier

        Returns:
            Pod object with updated status
        """
        query = f"""
        mutation {{
            podResume(input: {{ podId: "{pod_id}" }}) {{
                id
                desiredStatus
                costPerHr
            }}
        }}
        """
        result = await self._graphql_query(query)
        self._handle_graphql_errors(result)
        return result["data"]["podResume"]

    async def stop_pod(self, pod_id: str) -> dict:
        """Stop a running pod using GraphQL podStop mutation.

        Stops the pod without terminating it. Pod can be resumed later.

        Args:
            pod_id: Pod identifier

        Returns:
            Pod object with updated status
        """
        query = f"""
        mutation {{
            podStop(input: {{ podId: "{pod_id}" }}) {{
                id
                desiredStatus
            }}
        }}
        """
        result = await self._graphql_query(query)
        self._handle_graphql_errors(result)
        return result["data"]["podStop"]

    async def restart_pod(self, pod_id: str) -> bool:
        """Restart a pod.

        Args:
            pod_id: Pod identifier

        Returns:
            True on success
        """
        await self._post(f"/pods/{pod_id}/restart")
        return True

    # =========================================================================
    # Template Operations
    # =========================================================================

    async def list_templates(
        self,
        include_public: bool = False,
        include_runpod: bool = False,
    ) -> list[dict]:
        """List templates.

        Args:
            include_public: Include community templates
            include_runpod: Include official RunPod templates

        Returns:
            List of template objects
        """
        params = {}
        if include_public:
            params["includePublicTemplates"] = "true"
        if include_runpod:
            params["includeRunpodTemplates"] = "true"

        return await self._get("/templates", params=params or None)

    async def get_template(self, template_id: str) -> dict:
        """Get template by ID.

        Args:
            template_id: Template identifier

        Returns:
            Template object
        """
        return await self._get(f"/templates/{template_id}")

    async def create_template(
        self,
        name: str,
        image_name: str,
        docker_start_cmd: list[str] | None = None,
        docker_entrypoint: list[str] | None = None,
        ports: list[str] | None = None,
        env: dict[str, str] | None = None,
        volume_in_gb: int = 20,
        container_disk_in_gb: int = 50,
        is_serverless: bool = False,
    ) -> dict:
        """Create a new template.

        Args:
            name: Template name (must be unique)
            image_name: Docker image
            docker_start_cmd: Container start command
            docker_entrypoint: Container entrypoint
            ports: Exposed ports
            env: Environment variables
            volume_in_gb: Volume size
            container_disk_in_gb: Container disk size
            is_serverless: Whether template is for serverless workers

        Returns:
            Created template object
        """
        data = {
            "name": name,
            "imageName": image_name,
            "volumeInGb": volume_in_gb,
            "containerDiskInGb": container_disk_in_gb,
            "isServerless": is_serverless,
        }

        if docker_start_cmd:
            data["dockerStartCmd"] = docker_start_cmd
        if docker_entrypoint:
            data["dockerEntrypoint"] = docker_entrypoint
        if ports:
            data["ports"] = ports
        if env:
            data["env"] = env

        return await self._post("/templates", data=data)

    async def delete_template(self, template_id: str) -> bool:
        """Delete a template.

        Args:
            template_id: Template identifier

        Returns:
            True on success
        """
        await self._delete(f"/templates/{template_id}")
        return True

    # =========================================================================
    # Network Volume Operations
    # =========================================================================

    async def list_network_volumes(self) -> list[dict]:
        """List network volumes.

        Returns:
            List of network volume objects
        """
        return await self._get("/networkvolumes")

    async def get_network_volume(self, volume_id: str) -> dict:
        """Get network volume by ID.

        Args:
            volume_id: Volume identifier

        Returns:
            Network volume object
        """
        return await self._get(f"/networkvolumes/{volume_id}")

    async def create_network_volume(
        self,
        name: str,
        size_gb: int,
        data_center_id: str,
    ) -> dict:
        """Create a network volume.

        Args:
            name: Volume name
            size_gb: Size in GB (max 4000)
            data_center_id: Data center (e.g., "US-TX-3", "EU-RO-1")

        Returns:
            Created network volume object
        """
        data = {
            "name": name,
            "size": size_gb,
            "dataCenterId": data_center_id,
        }

        return await self._post("/networkvolumes", data=data)

    async def delete_network_volume(self, volume_id: str) -> bool:
        """Delete a network volume.

        Args:
            volume_id: Volume identifier

        Returns:
            True on success
        """
        await self._delete(f"/networkvolumes/{volume_id}")
        return True

    # =========================================================================
    # Data Centers
    # =========================================================================

    async def get_data_centers(self) -> list[dict]:
        """Get available data centers from GraphQL API with static fallback.

        Fetches data centers dynamically from RunPod API. Falls back to
        static DATA_CENTERS list if API call fails.

        Returns:
            List of data center objects with id, name, available, location, region
        """
        try:
            raw_dcs = await self.get_data_centers_from_api()
            return [
                {
                    "id": dc.get("id"),
                    "name": dc.get("name") or dc.get("location", dc.get("id")),
                    "location": dc.get("location"),
                    "region": dc.get("region"),
                    "available": dc.get("listed", True) and dc.get("storageSupport", True),
                }
                for dc in raw_dcs
                if dc.get("listed", True)  # Only show listed data centers
            ]
        except Exception:
            # Fallback to static list if API fails
            return DATA_CENTERS.copy()

    # =========================================================================
    # GPU Types (derived from static list - no REST endpoint available)
    # =========================================================================

    async def get_gpu_types(self, data_center_id: str | None = None) -> list[dict]:  # noqa: ARG002
        """Get available GPU types.

        Note: The RunPod REST API doesn't have a GPU types endpoint.
        This returns the static GPU_TYPES list. The data_center_id filter
        is accepted for API compatibility but doesn't filter results
        since availability data isn't available via REST API.

        Args:
            data_center_id: Optional data center filter (accepted but not implemented)

        Returns:
            List of GPU type objects with id and display info
        """
        # Return GPU types with basic info
        # Real pricing/availability would require GraphQL API
        # data_center_id is accepted for API compatibility but not used
        return [
            {
                "id": gpu_id,
                "displayName": gpu_id.replace("NVIDIA ", "").replace("GeForce ", ""),
                "memoryInGb": self._estimate_gpu_memory(gpu_id),
                "secureCloud": None,  # Pricing not available via REST API
                "communityCloud": None,
                "lowestPrice": None,
            }
            for gpu_id in GPU_TYPES
        ]

    @staticmethod
    def _estimate_gpu_memory(gpu_id: str) -> int:
        """Estimate GPU memory based on model name."""
        memory_map = {
            "RTX 4090": 24, "RTX 5090": 32, "RTX 5080": 16,
            "RTX 4080": 16, "RTX 3090": 24, "RTX 3080": 10,
            "RTX 3070": 8, "RTX 4070": 12,
            "A100 80GB": 80, "A100-SXM4-80GB": 80,
            "H100 80GB": 80, "H100 PCIe": 80, "H100 NVL": 94, "H200": 141, "B200": 192,
            "A40": 48, "A30": 24, "L40S": 48, "L40": 48, "L4": 24,
            "RTX A6000": 48, "RTX A5000": 24, "RTX A4500": 20, "RTX A4000": 16,
            "RTX 6000 Ada": 48, "RTX 5000 Ada": 32, "RTX 4000 Ada": 20,
            "V100": 16, "V100-SXM2-32GB": 32,
            "MI300X": 192,
        }
        for key, mem in memory_map.items():
            if key in gpu_id:
                return mem
        return 24  # Default

    # =========================================================================
    # Static Helper Methods
    # =========================================================================

    @staticmethod
    def get_comfyui_url(pod: dict, port: int = 8188) -> str | None:
        """Get ComfyUI proxy URL for a running pod.

        Args:
            pod: Pod object from API
            port: ComfyUI port (default 8188)

        Returns:
            Proxy URL or None if pod not running
        """
        if pod.get("desiredStatus") != "RUNNING":
            return None

        pod_id = pod.get("id")
        if not pod_id:
            return None

        return f"https://{pod_id}-{port}.proxy.runpod.net"

    @staticmethod
    def get_ssh_command(pod: dict) -> str | None:
        """Get SSH command for connecting to a pod.

        Args:
            pod: Pod object from API

        Returns:
            SSH command string or None if not available
        """
        public_ip = pod.get("publicIp")
        port_mappings = pod.get("portMappings", {})

        if not public_ip or not port_mappings:
            return None

        ssh_port = port_mappings.get("22")
        if not ssh_port:
            return None

        return f"ssh root@{public_ip} -p {ssh_port}"

    @staticmethod
    def calculate_cost(pod: dict) -> dict:
        """Calculate running cost for a pod.

        Args:
            pod: Pod object from API

        Returns:
            Dict with cost_per_hour, uptime_hours, total_cost
        """
        cost_per_hr = pod.get("costPerHr", 0)
        # Note: uptime must be calculated from lastStartedAt if needed
        # The API doesn't directly provide uptime_seconds

        return {
            "cost_per_hour": cost_per_hr,
            "adjusted_cost_per_hour": pod.get("adjustedCostPerHr", cost_per_hr),
        }
