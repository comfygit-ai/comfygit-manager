"""Unit tests for Instance type conversion and deployment tracking."""
import pytest
import time
from unittest.mock import Mock


class TestDeploymentTracking:
    """Test deployment tracking functions."""

    def test_track_deployment_creates_entry(self):
        """Should add deployment to tracking dict."""
        from api.v2.deploy import track_deployment, _active_deployments, complete_deployment

        # Clean slate
        _active_deployments.clear()

        track_deployment(
            instance_id="test123",
            provider="runpod",
            name="test-pod",
            gpu_type="RTX 4090",
            cost_per_hour=0.44,
        )

        assert "test123" in _active_deployments
        dep = _active_deployments["test123"]
        assert dep.instance_id == "test123"
        assert dep.provider == "runpod"
        assert dep.name == "test-pod"
        assert dep.phase == "STARTING"
        assert dep.progress == 0

        # Cleanup
        complete_deployment("test123")

    def test_update_deployment_status(self):
        """Should update existing deployment status."""
        from api.v2.deploy import track_deployment, update_deployment_status, _active_deployments, complete_deployment

        _active_deployments.clear()

        track_deployment("pod1", "runpod", "test", "RTX 4090", 0.44)
        update_deployment_status("pod1", "SETTING_UP", "Installing ComfyGit...", 50)

        dep = _active_deployments["pod1"]
        assert dep.phase == "SETTING_UP"
        assert dep.message == "Installing ComfyGit..."
        assert dep.progress == 50

        complete_deployment("pod1")

    def test_complete_deployment_removes_entry(self):
        """Should remove deployment from tracking."""
        from api.v2.deploy import track_deployment, complete_deployment, _active_deployments

        _active_deployments.clear()

        track_deployment("pod2", "runpod", "test", "RTX 4090", 0.44)
        assert "pod2" in _active_deployments

        complete_deployment("pod2")
        assert "pod2" not in _active_deployments

    def test_active_deployment_to_instance_dict(self):
        """Should convert ActiveDeployment to Instance dict format."""
        from api.v2.deploy import ActiveDeployment

        dep = ActiveDeployment(
            instance_id="pod123",
            provider="runpod",
            name="my-pod",
            gpu_type="RTX 4090",
            cost_per_hour=0.44,
            phase="SETTING_UP",
            message="Installing dependencies...",
            progress=75,
        )

        instance = dep.to_instance_dict()

        assert instance["id"] == "pod123"
        assert instance["provider"] == "runpod"
        assert instance["name"] == "my-pod"
        assert instance["status"] == "deploying"
        assert instance["deployment_phase"] == "SETTING_UP"
        assert instance["deployment_message"] == "Installing dependencies..."
        assert instance["deployment_progress"] == 75
        assert instance["gpu_type"] == "RTX 4090"
        assert instance["cost_per_hour"] == 0.44
        assert instance["console_url"] == "https://www.runpod.io/console/pods/pod123"


class TestRunPodToInstanceConversion:
    """Test _convert_runpod_pod_to_instance function."""

    @pytest.fixture
    def mock_client(self):
        """Create a mock deploy client."""
        client = Mock()
        client.get_comfyui_url.return_value = "https://pod123-8188.proxy.runpod.net"
        return client

    def test_converts_running_pod(self, mock_client):
        """Should convert a running RunPod pod to Instance format."""
        from api.v2.deploy import _convert_runpod_pod_to_instance

        pod = {
            "id": "pod123",
            "name": "my-comfyui",
            "desiredStatus": "RUNNING",
            "costPerHr": 0.44,
            "uptimeSeconds": 3600,
            "gpuCount": 1,
            "machine": {"gpuDisplayName": "RTX 4090"},
        }

        instance = _convert_runpod_pod_to_instance(pod, mock_client)

        assert instance["id"] == "pod123"
        assert instance["provider"] == "runpod"
        assert instance["name"] == "my-comfyui"
        assert instance["status"] == "running"
        assert instance["gpu_type"] == "RTX 4090"
        assert instance["cost_per_hour"] == 0.44
        assert instance["uptime_seconds"] == 3600
        assert instance["total_cost"] == pytest.approx(0.44, rel=0.01)  # 1 hour at $0.44/hr
        assert instance["console_url"] == "https://www.runpod.io/console/pods/pod123"
        assert "comfyui_url" in instance

    def test_converts_stopped_pod(self, mock_client):
        """Should convert a stopped pod with no comfyui_url."""
        from api.v2.deploy import _convert_runpod_pod_to_instance

        mock_client.get_comfyui_url.return_value = None
        pod = {
            "id": "pod456",
            "name": "stopped-pod",
            "desiredStatus": "STOPPED",
            "costPerHr": 0.79,
            "uptimeSeconds": 0,
            "gpuCount": 1,
            "machine": {"gpuDisplayName": "A6000"},
        }

        instance = _convert_runpod_pod_to_instance(pod, mock_client)

        assert instance["id"] == "pod456"
        assert instance["status"] == "stopped"
        assert instance["comfyui_url"] is None
        assert instance["uptime_seconds"] == 0
        assert instance["total_cost"] == 0.0

    @pytest.mark.parametrize("runpod_status,expected_status", [
        ("RUNNING", "running"),
        ("EXITED", "stopped"),
        ("STOPPED", "stopped"),
        ("CREATED", "deploying"),
        ("TERMINATED", "terminated"),
        ("UNKNOWN", "error"),
    ])
    def test_status_mapping(self, mock_client, runpod_status, expected_status):
        """Should correctly map RunPod status to Instance status."""
        from api.v2.deploy import _convert_runpod_pod_to_instance

        pod = {
            "id": "pod1",
            "name": "test",
            "desiredStatus": runpod_status,
            "costPerHr": 0,
            "uptimeSeconds": 0,
            "gpuCount": 1,
            "machine": {"gpuDisplayName": "RTX 4090"},
        }

        instance = _convert_runpod_pod_to_instance(pod, mock_client)
        assert instance["status"] == expected_status

    def test_uses_pod_id_as_name_fallback(self, mock_client):
        """Should use pod id as name if name not provided."""
        from api.v2.deploy import _convert_runpod_pod_to_instance

        pod = {
            "id": "pod789",
            # No name field
            "desiredStatus": "RUNNING",
            "costPerHr": 0,
            "uptimeSeconds": 0,
            "gpuCount": 1,
            "machine": {"gpuDisplayName": "RTX 4090"},
        }

        instance = _convert_runpod_pod_to_instance(pod, mock_client)
        assert instance["name"] == "pod789"

    def test_includes_created_at(self, mock_client):
        """Should include created_at timestamp if available."""
        from api.v2.deploy import _convert_runpod_pod_to_instance

        pod = {
            "id": "pod123",
            "name": "test",
            "desiredStatus": "RUNNING",
            "costPerHr": 0,
            "uptimeSeconds": 0,
            "gpuCount": 1,
            "machine": {"gpuDisplayName": "RTX 4090"},
            "created_at": "2025-01-01T00:00:00Z",
        }

        instance = _convert_runpod_pod_to_instance(pod, mock_client)
        assert instance["created_at"] == "2025-01-01T00:00:00Z"

    def test_defaults_created_at_to_empty_string(self, mock_client):
        """Should default created_at to empty string if not provided."""
        from api.v2.deploy import _convert_runpod_pod_to_instance

        pod = {
            "id": "pod123",
            "name": "test",
            "desiredStatus": "RUNNING",
            "costPerHr": 0,
            "uptimeSeconds": 0,
            "gpuCount": 1,
            "machine": {"gpuDisplayName": "RTX 4090"},
        }

        instance = _convert_runpod_pod_to_instance(pod, mock_client)
        assert instance["created_at"] == ""
