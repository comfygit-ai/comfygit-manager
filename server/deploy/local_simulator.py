"""Local Docker-based simulator for RunPod pod operations.

Uses Docker SDK to create/manage containers that mimic RunPod pods.
Supports both GPU (NVIDIA runtime) and CPU-only modes.
"""

import json
import logging
import os
import secrets
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import docker
from docker.errors import APIError


class LocalSimulatorError(Exception):
    """Error from local simulator."""
    def __init__(self, message: str, status_code: int = 500):
        self.message = message
        self.status_code = status_code
        super().__init__(message)


class LocalSimulatorClient:
    """Local Docker-based simulator for RunPod pod operations.

    Uses Docker SDK to create/manage containers that mimic RunPod pods.
    Uses the exact same RunPod base image for maximum fidelity.
    """

    # Use the exact RunPod image - same as production
    RUNPOD_IMAGE = "runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"
    CONTAINER_LABEL = "comfygit.deploy.simulator"
    VOLUME_PREFIX = "comfygit-simulator-"

    # Simulated pricing (for display only)
    SIMULATED_PRICING = {
        "Local RTX 4090": {"cost": 0.00, "memory": 24, "vcpu": 16, "ram": 64},
        "Local RTX 3090": {"cost": 0.00, "memory": 24, "vcpu": 16, "ram": 64},
        "Local CPU": {"cost": 0.00, "memory": 0, "vcpu": 8, "ram": 32},
    }

    # Port mappings storage file (persists random ports across stop/start)
    PORT_MAPPINGS_FILE = Path.home() / ".comfygit" / "simulator_ports.json"

    def __init__(self, docker_client=None, gpu_mode: str = "gpu"):
        """Initialize simulator.

        Args:
            docker_client: Optional Docker client (for testing)
            gpu_mode: "gpu" to use NVIDIA runtime, "cpu" for CPU-only
        """
        self.docker = docker_client or docker.from_env()
        self.gpu_mode = gpu_mode.lower()

    def _generate_pod_id(self) -> str:
        """Generate a RunPod-like pod ID (12 chars)."""
        return secrets.token_hex(6)[:12]

    def _generate_machine_id(self) -> str:
        """Generate a machine ID."""
        return secrets.token_hex(6)

    def _get_container_labels(self, pod_id: str, name: str, extra: dict | None = None) -> dict:
        """Get labels for container identification."""
        labels = {
            self.CONTAINER_LABEL: "true",
            "comfygit.deploy.pod_id": pod_id,
            "comfygit.deploy.name": name,
            "comfygit.deploy.created_at": datetime.now(timezone.utc).isoformat(),
        }
        if extra:
            labels.update(extra)
        return labels

    def _load_port_mappings(self) -> dict[str, int]:
        """Load saved port mappings from disk."""
        if not self.PORT_MAPPINGS_FILE.exists():
            return {}
        try:
            return json.loads(self.PORT_MAPPINGS_FILE.read_text())
        except (json.JSONDecodeError, OSError):
            return {}

    def _save_port_mapping(self, pod_id: str, port: int) -> None:
        """Save a port mapping to disk."""
        mappings = self._load_port_mappings()
        mappings[pod_id] = port
        self.PORT_MAPPINGS_FILE.parent.mkdir(parents=True, exist_ok=True)
        self.PORT_MAPPINGS_FILE.write_text(json.dumps(mappings))

    def _remove_port_mapping(self, pod_id: str) -> None:
        """Remove a port mapping from disk."""
        mappings = self._load_port_mappings()
        if pod_id in mappings:
            del mappings[pod_id]
            self.PORT_MAPPINGS_FILE.write_text(json.dumps(mappings))

    def _find_free_port(self, start: int = 20000, end: int = 30000) -> int:
        """Find a free port in the given range."""
        import socket
        for port in range(start, end):
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                try:
                    s.bind(("", port))
                    return port
                except OSError:
                    continue
        raise LocalSimulatorError("No free ports available", 500)

    def _container_to_pod(self, container) -> dict:
        """Transform Docker container to RunPod pod response format."""
        labels = container.labels
        pod_id = labels.get("comfygit.deploy.pod_id", container.short_id)
        name = labels.get("comfygit.deploy.name", container.name)

        # Map Docker status to RunPod status
        status_map = {
            "running": "RUNNING",
            "exited": "EXITED",
            "created": "CREATED",
            "restarting": "RUNNING",
            "paused": "EXITED",
            "dead": "TERMINATED",
        }
        desired_status = status_map.get(container.status, "UNKNOWN")

        # Get port mappings - use stored port if available (persists across stop/start)
        port_mappings = {}
        public_ip = ""
        stored_ports = self._load_port_mappings()

        if stored_ports.get(pod_id):
            # Use stored port (consistent across restarts)
            port_mappings["8188"] = stored_ports[pod_id]
            public_ip = "localhost"
        elif desired_status == "RUNNING":
            # Fallback to reading from container (first start)
            ports = container.ports or {}
            for container_port, host_bindings in ports.items():
                if host_bindings:
                    port_num = container_port.split("/")[0]
                    port_mappings[port_num] = int(host_bindings[0]["HostPort"])
            public_ip = "localhost"

        # Build machine info (mimics RunPod quirk - sometimes empty)
        gpu_type = labels.get("comfygit.deploy.gpu_type", "Local RTX 4090")
        machine_info = {}
        if desired_status == "RUNNING":
            machine_info = {
                "dataCenterId": "LOCAL-SIM",
                "gpuTypeId": gpu_type,
                "gpuDisplayName": gpu_type.replace("Local ", ""),
                "secureCloud": True,
                "diskThroughputMBps": 5000,
                "maxDownloadSpeedMbps": 10000,
                "maxUploadSpeedMbps": 10000,
            }

        # Get network volume info
        network_volume = None
        volume_id = labels.get("comfygit.deploy.network_volume_id")
        if volume_id:
            network_volume = {
                "id": volume_id,
                "name": labels.get("comfygit.deploy.network_volume_name", "simulator-volume"),
                "dataCenterId": "LOCAL-SIM",
                "size": int(labels.get("comfygit.deploy.volume_size", "100")),
            }

        pricing = self.SIMULATED_PRICING.get(gpu_type, {"cost": 0, "memory": 24, "vcpu": 8, "ram": 32})

        return {
            "id": pod_id,
            "name": name,
            "desiredStatus": desired_status,
            "costPerHr": pricing["cost"],
            "containerDiskInGb": int(labels.get("comfygit.deploy.container_disk", "30")),
            "volumeInGb": int(labels.get("comfygit.deploy.volume_gb", "20")),
            "gpuCount": int(labels.get("comfygit.deploy.gpu_count", "1")),
            "memoryInGb": pricing["ram"],
            "vcpuCount": pricing["vcpu"],
            "imageName": container.image.tags[0] if container.image.tags else "unknown",
            "dockerStartCmd": labels.get("comfygit.deploy.docker_cmd", "").split("|||") if labels.get("comfygit.deploy.docker_cmd") else [],
            "env": {},  # Can't easily extract from running container
            "ports": labels.get("comfygit.deploy.ports", "8188/http,22/tcp").split(","),
            "publicIp": public_ip,
            "portMappings": port_mappings,
            "machine": machine_info,
            "networkVolume": network_volume,
            "networkVolumeId": volume_id,
            "machineId": labels.get("comfygit.deploy.machine_id", "local"),
            "volumeMountPath": "/workspace",
            "createdAt": labels.get("comfygit.deploy.created_at", ""),
            "lastStartedAt": labels.get("comfygit.deploy.created_at", ""),
            "lastStatusChange": f"Simulator: {container.status}",
            "consumerUserId": "local-simulator",
            "templateId": "",
        }

    def _get_simulator_containers(self) -> list:
        """Get all containers with simulator label."""
        return self.docker.containers.list(
            all=True,
            filters={"label": self.CONTAINER_LABEL}
        )

    async def test_connection(self) -> dict[str, Any]:
        """Test Docker daemon connectivity."""
        try:
            self.docker.ping()

            # Check for GPU if in GPU mode
            if self.gpu_mode == "gpu":
                try:
                    self.docker.containers.run(
                        "nvidia/cuda:11.8.0-base-ubuntu22.04",
                        "nvidia-smi",
                        remove=True,
                        runtime="nvidia",
                    )
                except Exception as e:
                    return {
                        "success": True,
                        "warning": f"GPU not available: {e}. Consider setting SIMULATOR_GPU_MODE=cpu",
                        "credit_balance": 999.99,
                    }

            return {
                "success": True,
                "credit_balance": 999.99,
            }
        except Exception as e:
            return {"success": False, "error": f"Docker not available: {e}"}

    async def list_pods(self) -> list[dict]:
        """List simulator containers as pod-like objects."""
        containers = self._get_simulator_containers()
        return [self._container_to_pod(c) for c in containers]

    async def get_pod(self, pod_id: str) -> dict:
        """Get container by ID, return as pod object."""
        containers = self.docker.containers.list(
            all=True,
            filters={
                "label": [
                    self.CONTAINER_LABEL,
                    f"comfygit.deploy.pod_id={pod_id}"
                ]
            }
        )

        if not containers:
            raise LocalSimulatorError(f"Pod not found: {pod_id}", 404)

        return self._container_to_pod(containers[0])

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
        """Create a new container mimicking RunPod pod creation."""
        pod_id = self._generate_pod_id()
        machine_id = self._generate_machine_id()

        # Use the exact RunPod image
        actual_image = self.RUNPOD_IMAGE

        # Pull image if not present
        try:
            self.docker.images.get(actual_image)
        except docker.errors.ImageNotFound:
            print(f"Pulling RunPod base image: {actual_image} (this may take a while, ~15GB)")
            self.docker.images.pull(actual_image)

        # Determine GPU type for simulation
        simulated_gpu = "Local CPU" if self.gpu_mode == "cpu" else "Local RTX 4090"

        # Port mappings - use explicit port so it persists across stop/start
        host_port = self._find_free_port()
        port_bindings = {"8188/tcp": host_port}
        self._save_port_mapping(pod_id, host_port)

        # Volume mount - use named Docker volume for persistence
        volumes = {}
        if network_volume_id:
            volume_name = f"{self.VOLUME_PREFIX}{network_volume_id}"
            try:
                self.docker.volumes.get(volume_name)
            except docker.errors.NotFound:
                self.docker.volumes.create(volume_name)
            volumes[volume_name] = {"bind": "/workspace", "mode": "rw"}
        else:
            volume_name = f"{self.VOLUME_PREFIX}{pod_id}"
            self.docker.volumes.create(volume_name)
            volumes[volume_name] = {"bind": "/workspace", "mode": "rw"}

        # Mount local models folder for easy testing
        # Set COMFYGIT_SIMULATOR_MODELS to override, defaults to ~/comfyui/ComfyUI/models
        models_path = os.environ.get("COMFYGIT_SIMULATOR_MODELS", "")
        if not models_path:
            models_path = os.path.expanduser("~/comfyui/ComfyUI/models")
        if os.path.isdir(models_path):
            volumes[models_path] = {"bind": "/workspace/comfygit/models", "mode": "ro"}
            logging.getLogger(__name__).info(f"Models mount: {models_path} -> /workspace/comfygit/models")

        # Dev mode: add bind mounts from environment variable
        # Format: "host_path=container_path:host_path2=container_path2"
        # Example: COMFYGIT_DEV_CUSTOM_NODES="/home/user/dev=/workspace/dev_nodes"
        dev_mounts = os.environ.get("COMFYGIT_DEV_CUSTOM_NODES", "")
        if dev_mounts:
            logger = logging.getLogger(__name__)
            for mount_spec in dev_mounts.split(":"):
                if "=" in mount_spec:
                    src, dst = mount_spec.split("=", 1)
                    src = os.path.expanduser(src.strip())
                    dst = dst.strip()
                    if os.path.exists(src):
                        volumes[src] = {"bind": dst, "mode": "rw"}
                        logger.info(f"Dev mount: {src} -> {dst}")
                    else:
                        logger.warning(f"Dev mount source does not exist: {src}")

        # Environment variables
        container_env = {
            "RUNPOD_POD_ID": pod_id,
            "RUNPOD_API_KEY": "simulated",
            "RUNPOD_GPU_COUNT": str(gpu_count),
            "NVIDIA_VISIBLE_DEVICES": "all" if self.gpu_mode == "gpu" else "",
            "COMFYGIT_DEPLOY": "1",
            "PYTHONUNBUFFERED": "1",
        }
        if env:
            container_env.update(env)

        # Labels for tracking
        labels = self._get_container_labels(pod_id, name, {
            "comfygit.deploy.gpu_type": simulated_gpu,
            "comfygit.deploy.gpu_count": str(gpu_count),
            "comfygit.deploy.volume_gb": str(volume_in_gb),
            "comfygit.deploy.container_disk": str(container_disk_in_gb),
            "comfygit.deploy.cloud_type": cloud_type,
            "comfygit.deploy.ports": ",".join(ports) if ports else "8188/http",
            "comfygit.deploy.machine_id": machine_id,
            "comfygit.deploy.network_volume_id": network_volume_id or "",
            "comfygit.deploy.docker_cmd": "|||".join(docker_start_cmd) if docker_start_cmd else "",
        })

        # Build container config
        container_config = {
            "image": actual_image,
            "name": f"comfygit-sim-{pod_id}",
            "labels": labels,
            "environment": container_env,
            "ports": port_bindings,
            "volumes": volumes,
            "detach": True,
        }

        # Add GPU runtime if in GPU mode
        if self.gpu_mode == "gpu":
            container_config["runtime"] = "nvidia"
            container_config["device_requests"] = [
                docker.types.DeviceRequest(count=-1, capabilities=[["gpu"]])
            ]

        # Add command if specified
        if docker_start_cmd:
            container_config["command"] = docker_start_cmd

        # Create and start container
        try:
            container = self.docker.containers.run(**container_config)
        except docker.errors.ImageNotFound:
            raise LocalSimulatorError(
                f"Image not found: {actual_image}. Run: docker pull {actual_image}",
                400
            )
        except APIError as e:
            raise LocalSimulatorError(f"Failed to create container: {e}", 500)

        return self._container_to_pod(container)

    async def delete_pod(self, pod_id: str) -> bool:
        """Stop and remove container."""
        containers = self.docker.containers.list(
            all=True,
            filters={"label": f"comfygit.deploy.pod_id={pod_id}"}
        )

        if not containers:
            raise LocalSimulatorError(f"Pod not found: {pod_id}", 404)

        container = containers[0]

        # Get volume name before removing container
        volume_name = None
        for mount in container.attrs.get("Mounts", []):
            if mount.get("Destination") == "/workspace":
                volume_name = mount.get("Name")
                break

        # Stop and remove container
        container.remove(force=True)

        # Remove ephemeral volume (but not network volumes)
        if volume_name and volume_name.startswith(f"{self.VOLUME_PREFIX}{pod_id}"):
            try:
                volume = self.docker.volumes.get(volume_name)
                volume.remove()
            except Exception:
                pass

        # Clean up stored port mapping
        self._remove_port_mapping(pod_id)

        return True

    async def start_pod(self, pod_id: str) -> dict:
        """Start stopped container (port persists due to explicit binding at creation)."""
        containers = self.docker.containers.list(
            all=True,
            filters={"label": f"comfygit.deploy.pod_id={pod_id}"}
        )

        if not containers:
            raise LocalSimulatorError(f"Pod not found: {pod_id}", 404)

        container = containers[0]
        container.start()
        container.reload()

        pod = self._container_to_pod(container)
        return {
            "id": pod["id"],
            "desiredStatus": pod["desiredStatus"],
            "costPerHr": pod["costPerHr"],
        }

    async def stop_pod(self, pod_id: str) -> dict:
        """Stop running container."""
        containers = self.docker.containers.list(
            all=True,
            filters={"label": f"comfygit.deploy.pod_id={pod_id}"}
        )

        if not containers:
            raise LocalSimulatorError(f"Pod not found: {pod_id}", 404)

        container = containers[0]
        container.stop()
        container.reload()

        return {
            "id": pod_id,
            "desiredStatus": "EXITED",
        }

    async def restart_pod(self, pod_id: str) -> bool:
        """Restart container."""
        containers = self.docker.containers.list(
            all=True,
            filters={"label": f"comfygit.deploy.pod_id={pod_id}"}
        )

        if not containers:
            raise LocalSimulatorError(f"Pod not found: {pod_id}", 404)

        container = containers[0]
        container.restart()
        return True

    async def list_network_volumes(self) -> list[dict]:
        """List simulated network volumes (Docker volumes with our prefix).

        Always includes a default 'workspace' volume for easy testing.
        """
        volumes = self.docker.volumes.list(
            filters={"name": self.VOLUME_PREFIX}
        )

        result = [
            {
                "id": vol.name.replace(self.VOLUME_PREFIX, ""),
                "name": vol.name,
                "dataCenterId": "LOCAL-SIM",
                "dataCenter": "LOCAL-SIM",
                "dataCenterName": "Local Simulator",
                "size": 100,
            }
            for vol in volumes
        ]

        # Always include a default volume for testing (creates on first use)
        default_vol_id = "workspace"
        if not any(v["id"] == default_vol_id for v in result):
            result.insert(0, {
                "id": default_vol_id,
                "name": f"{self.VOLUME_PREFIX}{default_vol_id}",
                "dataCenterId": "LOCAL-SIM",
                "dataCenter": "LOCAL-SIM",
                "dataCenterName": "Local Simulator",
                "size": 100,
            })

        return result

    async def get_gpu_types_with_pricing(self, data_center_id: str | None = None) -> list[dict]:
        """Get simulated GPU types."""
        gpu_types = []

        if self.gpu_mode == "gpu":
            gpu_types.append({
                "id": "Local RTX 4090",
                "displayName": "RTX 4090 (Local)",
                "memoryInGb": 24,
                "secureCloud": True,
                "communityCloud": False,
                "securePrice": 0.00,
                "communityPrice": 0.00,
                "secureSpotPrice": 0.00,
                "communitySpotPrice": None,
                "lowestPrice": {
                    "minimumBidPrice": 0.00,
                    "uninterruptablePrice": 0.00,
                    "stockStatus": "High",
                },
            })

        gpu_types.append({
            "id": "Local CPU",
            "displayName": "CPU Only (Local)",
            "memoryInGb": 0,
            "secureCloud": True,
            "communityCloud": False,
            "securePrice": 0.00,
            "communityPrice": 0.00,
            "secureSpotPrice": None,
            "communitySpotPrice": None,
            "lowestPrice": {
                "minimumBidPrice": 0.00,
                "uninterruptablePrice": 0.00,
                "stockStatus": "High",
            },
        })

        return gpu_types

    async def get_data_centers(self) -> list[dict]:
        """Get simulated data centers."""
        return [
            {
                "id": "LOCAL-SIM",
                "name": "Local Simulator",
                "location": "localhost",
                "available": True,
            }
        ]

    async def get_user_info(self) -> dict[str, Any]:
        """Get simulated user info."""
        return {
            "id": "local-simulator",
            "clientBalance": 999.99,
            "currentSpendPerHr": 0.00,
            "spendLimit": 9999,
        }

    @staticmethod
    def get_comfyui_url(pod: dict, port: int = 8188) -> str | None:
        """Get localhost URL for container's mapped port."""
        if pod.get("desiredStatus") != "RUNNING":
            return None

        port_mappings = pod.get("portMappings", {})
        mapped_port = port_mappings.get(str(port))

        if mapped_port:
            return f"http://localhost:{mapped_port}"

        return None

    @staticmethod
    def get_ssh_command(pod: dict) -> str | None:
        """Get docker exec command instead of SSH."""
        if pod.get("desiredStatus") != "RUNNING":
            return None

        pod_id = pod.get("id")
        if not pod_id:
            return None

        return f"docker exec -it comfygit-sim-{pod_id} /bin/bash"
