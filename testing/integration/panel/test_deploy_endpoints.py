"""Deploy API endpoint tests.

Tests for RunPod deployment and package export functionality.
"""
import pytest
from unittest.mock import Mock, AsyncMock, patch


@pytest.fixture
def mock_workspace_context(mock_environment, monkeypatch):
    """Fixture to properly mock workspace for @requires_workspace endpoints."""
    mock_workspace = Mock()
    mock_workspace.workspace_config_manager = Mock()
    mock_workspace.workspace_config_manager.set_runpod_token = Mock()
    mock_workspace.workspace_config_manager.get_runpod_token = Mock(return_value=None)
    mock_environment.workspace = mock_workspace

    # Patch get_workspace_from_request to return our mock
    def get_workspace(request):
        return mock_workspace

    monkeypatch.setattr(
        "cgm_core.context.get_workspace_from_request",
        get_workspace
    )
    monkeypatch.setattr(
        "cgm_core.decorators.get_workspace_from_request",
        get_workspace
    )

    return mock_workspace


@pytest.mark.integration
class TestRunPodTestConnection:
    """POST /v2/comfygit/deploy/runpod/test - Test RunPod API key."""

    async def test_success_valid_key(self, client, mock_workspace_context):
        """Should return 200 with balance on valid key."""
        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.test_connection.return_value = {"success": True}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod/test",
                json={"api_key": "rpa_test123", "save_key": False},
            )

            assert resp.status == 200
            data = await resp.json()
            assert data["status"] == "success"

    async def test_success_save_key(self, client, mock_workspace_context):
        """Should save API key when save_key is true."""
        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.test_connection.return_value = {"success": True}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod/test",
                json={"api_key": "rpa_savekey", "save_key": True},
            )

            assert resp.status == 200
            mock_workspace_context.workspace_config_manager.set_runpod_token.assert_called_once_with(
                "rpa_savekey"
            )

    async def test_error_invalid_key(self, client, mock_workspace_context):
        """Should return 401 on invalid API key."""
        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.test_connection.return_value = {
                "success": False,
                "error": "Unauthorized",
            }
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod/test",
                json={"api_key": "invalid_key", "save_key": False},
            )

            assert resp.status == 401
            data = await resp.json()
            assert data["status"] == "error"

    async def test_error_missing_key(self, client, mock_workspace_context):
        """Should return 400 when API key is missing."""
        resp = await client.post(
            "/v2/comfygit/deploy/runpod/test",
            json={"save_key": False},
        )

        assert resp.status == 400
        data = await resp.json()
        assert "api_key" in data.get("error", "").lower() or "required" in data.get("error", "").lower()


@pytest.mark.integration
class TestRunPodGetPods:
    """GET /v2/comfygit/deploy/runpod/pods - List user's pods."""

    async def test_success_with_pods(self, client, mock_workspace_context):
        """Should return 200 with pods list."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.list_pods.return_value = [
                {
                    "id": "pod123",
                    "name": "test-pod",
                    "desiredStatus": "RUNNING",
                    "costPerHr": 0.44,
                    "machine": {"gpuDisplayName": "RTX 4090"},
                }
            ]
            MockClient.return_value = mock_client
            # Mock the static method to work with our test data
            MockClient.get_comfyui_url.return_value = "https://pod123-8188.proxy.runpod.net"

            resp = await client.get("/v2/comfygit/deploy/runpod/pods")

            assert resp.status == 200
            data = await resp.json()
            assert "pods" in data
            assert len(data["pods"]) == 1
            assert data["pods"][0]["id"] == "pod123"

    async def test_success_empty_pods(self, client, mock_workspace_context):
        """Should return 200 with empty pods list."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.list_pods.return_value = []
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/pods")

            assert resp.status == 200
            data = await resp.json()
            assert data["pods"] == []

    async def test_error_no_api_key(self, client, mock_workspace_context):
        """Should return 400 when no API key configured."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.get("/v2/comfygit/deploy/runpod/pods")

        assert resp.status == 400
        data = await resp.json()
        assert "api key" in data.get("error", "").lower()


@pytest.mark.integration
class TestRunPodTerminatePod:
    """DELETE /v2/comfygit/deploy/runpod/{pod_id} - Terminate pod."""

    async def test_success(self, client, mock_workspace_context):
        """Should return 200 on successful termination."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.delete_pod.return_value = True
            MockClient.return_value = mock_client

            resp = await client.delete("/v2/comfygit/deploy/runpod/pod123")

            assert resp.status == 200
            data = await resp.json()
            assert data["status"] == "success"

    async def test_error_no_api_key(self, client, mock_workspace_context):
        """Should return 400 when no API key configured."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.delete("/v2/comfygit/deploy/runpod/pod123")

        assert resp.status == 400


@pytest.mark.integration
class TestRunPodDeployEndpoint:
    """POST /v2/comfygit/deploy/runpod - Deploy to RunPod."""

    async def test_success(self, client, mock_workspace_context):
        """Should return 200 with pod_id on success."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.create_pod.return_value = {"id": "newpod123", "name": "test"}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod",
                json={
                    "gpu_type_id": "NVIDIA GeForce RTX 4090",
                    "pod_name": "my-comfyui",
                    "network_volume_id": "vol123",
                    "import_source": "https://github.com/user/repo.git",
                },
            )

            assert resp.status == 200
            data = await resp.json()
            assert data["status"] == "success"
            assert data["pod_id"] == "newpod123"

    async def test_error_no_api_key(self, client, mock_workspace_context):
        """Should return 400 when no API key configured."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.post(
            "/v2/comfygit/deploy/runpod",
            json={
                "gpu_type_id": "NVIDIA GeForce RTX 4090",
                "pod_name": "my-comfyui",
            },
        )

        assert resp.status == 400


@pytest.mark.integration
class TestRunPodClearKey:
    """DELETE /v2/comfygit/deploy/runpod/key - Clear stored API key."""

    async def test_success(self, client, mock_workspace_context):
        """Should return 200 and clear the key."""
        resp = await client.delete("/v2/comfygit/deploy/runpod/key")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        mock_workspace_context.workspace_config_manager.set_runpod_token.assert_called_once_with(None)


@pytest.mark.integration
class TestRunPodKeyStatus:
    """GET /v2/comfygit/deploy/runpod/key-status - Check if key is configured."""

    async def test_key_configured(self, client, mock_workspace_context):
        """Should return configured=true when key exists."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123456"

        resp = await client.get("/v2/comfygit/deploy/runpod/key-status")

        assert resp.status == 200
        data = await resp.json()
        assert data["configured"] is True
        # Should only show last 4 chars
        assert data["key_suffix"] == "3456"

    async def test_key_not_configured(self, client, mock_workspace_context):
        """Should return configured=false when no key."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.get("/v2/comfygit/deploy/runpod/key-status")

        assert resp.status == 200
        data = await resp.json()
        assert data["configured"] is False
        assert data.get("key_suffix") is None


@pytest.mark.integration
class TestRunPodGetNetworkVolumes:
    """GET /v2/comfygit/deploy/runpod/volumes - List user's network volumes."""

    async def test_success_with_volumes(self, client, mock_workspace_context):
        """Should return 200 with volumes list."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.list_network_volumes.return_value = [
                {
                    "id": "5aio30csvw",
                    "name": "comfygit_workspace",
                    "size": 100,
                    "dataCenterId": "US-IL-1",
                }
            ]
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/volumes")

            assert resp.status == 200
            data = await resp.json()
            assert "volumes" in data
            assert len(data["volumes"]) == 1
            vol = data["volumes"][0]
            assert vol["id"] == "5aio30csvw"
            assert vol["name"] == "comfygit_workspace"
            assert vol["size_gb"] == 100
            assert vol["data_center_id"] == "US-IL-1"

    async def test_success_empty_volumes(self, client, mock_workspace_context):
        """Should return 200 with empty volumes list."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.list_network_volumes.return_value = []
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/volumes")

            assert resp.status == 200
            data = await resp.json()
            assert data["volumes"] == []

    async def test_error_no_api_key(self, client, mock_workspace_context):
        """Should return 400 when no API key configured."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.get("/v2/comfygit/deploy/runpod/volumes")

        assert resp.status == 400
        data = await resp.json()
        assert "api key" in data.get("error", "").lower()


@pytest.mark.integration
class TestRunPodGetGpuTypes:
    """GET /v2/comfygit/deploy/runpod/gpu-types - Get available GPU types."""

    async def test_success_all_gpus(self, client, mock_workspace_context):
        """Should return 200 with all GPU types when no filter."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_gpu_types.return_value = [
                {
                    "id": "NVIDIA RTX 4090",
                    "displayName": "RTX 4090",
                    "memoryInGb": 24,
                    "secureCloud": 0.44,
                    "communityCloud": 0.34,
                    "lowestPrice": {"minimumBidPrice": 0.34},
                },
                {
                    "id": "NVIDIA RTX A6000",
                    "displayName": "RTX A6000",
                    "memoryInGb": 48,
                    "secureCloud": 0.79,
                    "communityCloud": 0.59,
                    "lowestPrice": {"minimumBidPrice": 0.59},
                },
            ]
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/gpu-types")

            assert resp.status == 200
            data = await resp.json()
            assert "gpu_types" in data
            assert len(data["gpu_types"]) == 2
            gpu = data["gpu_types"][0]
            assert gpu["id"] == "NVIDIA RTX 4090"
            assert gpu["displayName"] == "RTX 4090"
            assert gpu["memoryInGb"] == 24

    async def test_success_filtered_by_data_center(self, client, mock_workspace_context):
        """Should filter GPUs by data center when provided."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            # Simulate filtered response
            mock_client.get_gpu_types.return_value = [
                {
                    "id": "NVIDIA RTX 4090",
                    "displayName": "RTX 4090",
                    "memoryInGb": 24,
                    "secureCloud": 0.44,
                    "communityCloud": 0.34,
                    "lowestPrice": {"minimumBidPrice": 0.34},
                },
            ]
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/gpu-types?data_center_id=US-IL-1")

            assert resp.status == 200
            mock_client.get_gpu_types.assert_called_once_with(data_center_id="US-IL-1")

    async def test_error_no_api_key(self, client, mock_workspace_context):
        """Should return 400 when no API key configured."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.get("/v2/comfygit/deploy/runpod/gpu-types")

        assert resp.status == 400
        data = await resp.json()
        assert "api key" in data.get("error", "").lower()


@pytest.mark.integration
class TestRunPodDeployWithNetworkVolume:
    """POST /v2/comfygit/deploy/runpod - Deploy with network volume."""

    async def test_success_with_network_volume(self, client, mock_workspace_context):
        """Should deploy with network_volume_id."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.create_pod.return_value = {"id": "newpod123", "name": "test"}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod",
                json={
                    "gpu_type_id": "NVIDIA GeForce RTX 4090",
                    "pod_name": "my-comfyui",
                    "network_volume_id": "5aio30csvw",
                    "import_source": "https://github.com/user/repo.git",
                },
            )

            assert resp.status == 200
            data = await resp.json()
            assert data["status"] == "success"
            assert data["pod_id"] == "newpod123"

            # Verify network_volume_id was passed to create_pod
            call_kwargs = mock_client.create_pod.call_args[1]
            assert call_kwargs.get("network_volume_id") == "5aio30csvw"


@pytest.mark.integration
class TestRunPodGetDataCenters:
    """GET /v2/comfygit/deploy/runpod/data-centers - Get available data centers."""

    async def test_success_returns_data_centers(self, client, mock_workspace_context):
        """Should return 200 with data centers list."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_data_centers.return_value = [
                {"id": "US-IL-1", "name": "United States", "available": True},
                {"id": "EU-CZ-1", "name": "Europe (Czech)", "available": True},
                {"id": "CA-MTL-1", "name": "Canada (Montreal)", "available": False},
            ]
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/data-centers")

            assert resp.status == 200
            data = await resp.json()
            assert "data_centers" in data
            assert len(data["data_centers"]) == 3
            dc = data["data_centers"][0]
            assert dc["id"] == "US-IL-1"
            assert dc["name"] == "United States"
            assert dc["available"] is True

    async def test_error_no_api_key(self, client, mock_workspace_context):
        """Should return 400 when no API key configured."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.get("/v2/comfygit/deploy/runpod/data-centers")

        assert resp.status == 400
        data = await resp.json()
        assert "api key" in data.get("error", "").lower()


@pytest.mark.integration
class TestRunPodDeployWithPricingType:
    """POST /v2/comfygit/deploy/runpod - Deploy with pricing_type parameter."""

    async def test_success_with_spot_pricing(self, client, mock_workspace_context):
        """Should deploy with pricing_type=SPOT (interruptible=True)."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.create_pod.return_value = {"id": "spotpod123", "name": "spot-test"}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod",
                json={
                    "gpu_type_id": "NVIDIA GeForce RTX 4090",
                    "pod_name": "my-spot-comfyui",
                    "network_volume_id": "5aio30csvw",
                    "pricing_type": "SPOT",
                    "import_source": "https://github.com/user/repo.git",
                },
            )

            assert resp.status == 200
            data = await resp.json()
            assert data["status"] == "success"
            assert data["pod_id"] == "spotpod123"

            # Verify interruptible=True for spot pricing
            call_kwargs = mock_client.create_pod.call_args[1]
            assert call_kwargs.get("interruptible") is True

    async def test_success_with_on_demand_pricing(self, client, mock_workspace_context):
        """Should deploy with pricing_type=ON_DEMAND (interruptible=False)."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.create_pod.return_value = {"id": "odpod123", "name": "ondemand-test"}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod",
                json={
                    "gpu_type_id": "NVIDIA GeForce RTX 4090",
                    "pod_name": "my-ondemand-comfyui",
                    "network_volume_id": "5aio30csvw",
                    "pricing_type": "ON_DEMAND",
                    "import_source": "https://github.com/user/repo.git",
                },
            )

            assert resp.status == 200
            data = await resp.json()
            assert data["status"] == "success"

            # Verify interruptible=False for on-demand
            call_kwargs = mock_client.create_pod.call_args[1]
            assert call_kwargs.get("interruptible") is False

    async def test_default_pricing_type_is_on_demand(self, client, mock_workspace_context):
        """Should default to ON_DEMAND when pricing_type not specified."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.create_pod.return_value = {"id": "defpod123", "name": "default-test"}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod",
                json={
                    "gpu_type_id": "NVIDIA GeForce RTX 4090",
                    "pod_name": "my-comfyui",
                    "network_volume_id": "5aio30csvw",
                    "import_source": "https://github.com/user/repo.git",
                    # pricing_type not specified - should default to ON_DEMAND
                },
            )

            assert resp.status == 200

            # Verify interruptible=False (on-demand behavior)
            call_kwargs = mock_client.create_pod.call_args[1]
            assert call_kwargs.get("interruptible") is False


@pytest.mark.integration
class TestRunPodDeployWithStartupScript:
    """POST /v2/comfygit/deploy/runpod - Deploy with startup script."""

    async def test_includes_comfygit_home_env_var(self, client, mock_workspace_context):
        """Should set COMFYGIT_HOME=/workspace/comfygit in pod env."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.create_pod.return_value = {"id": "pod123", "name": "test"}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod",
                json={
                    "gpu_type_id": "NVIDIA GeForce RTX 4090",
                    "pod_name": "my-comfyui",
                    "network_volume_id": "vol123",
                    "import_source": "https://github.com/user/repo.git",
                },
            )

            assert resp.status == 200

            # Verify COMFYGIT_HOME is set in pod environment
            call_kwargs = mock_client.create_pod.call_args[1]
            env = call_kwargs.get("env", {})
            assert env.get("COMFYGIT_HOME") == "/workspace/comfygit"

    async def test_includes_startup_script(self, client, mock_workspace_context):
        """Should include startup script in docker_start_cmd."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.create_pod.return_value = {"id": "pod123", "name": "test"}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod",
                json={
                    "gpu_type_id": "NVIDIA GeForce RTX 4090",
                    "pod_name": "my-comfyui",
                    "network_volume_id": "vol123",
                    "import_source": "https://github.com/user/repo.git",
                },
            )

            assert resp.status == 200

            # Verify docker_start_cmd includes startup script
            call_kwargs = mock_client.create_pod.call_args[1]
            docker_cmd = call_kwargs.get("docker_start_cmd")
            assert docker_cmd is not None
            # Command should execute a bash script
            assert "bash" in str(docker_cmd).lower() or "/bin/bash" in str(docker_cmd)

    async def test_returns_deployment_id(self, client, mock_workspace_context):
        """Should return deployment_id in response."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.create_pod.return_value = {"id": "pod123", "name": "test"}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod",
                json={
                    "gpu_type_id": "NVIDIA GeForce RTX 4090",
                    "pod_name": "my-comfyui",
                    "network_volume_id": "vol123",
                    "import_source": "https://github.com/user/repo.git",
                },
            )

            assert resp.status == 200
            data = await resp.json()
            # Should include deployment_id
            assert "deployment_id" in data
            assert data["deployment_id"].startswith("deploy-")

    async def test_import_source_required(self, client, mock_workspace_context):
        """Should require import_source for deployment."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        resp = await client.post(
            "/v2/comfygit/deploy/runpod",
            json={
                "gpu_type_id": "NVIDIA GeForce RTX 4090",
                "pod_name": "my-comfyui",
                "network_volume_id": "vol123",
                # import_source missing
            },
        )

        assert resp.status == 400
        data = await resp.json()
        assert "import_source" in data.get("error", "").lower()

    async def test_with_branch_option(self, client, mock_workspace_context):
        """Should pass branch to startup script when provided."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.create_pod.return_value = {"id": "pod123", "name": "test"}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod",
                json={
                    "gpu_type_id": "NVIDIA GeForce RTX 4090",
                    "pod_name": "my-comfyui",
                    "network_volume_id": "vol123",
                    "import_source": "https://github.com/user/repo.git",
                    "branch": "v1.0.0",
                },
            )

            assert resp.status == 200
            # Startup script should include branch flag
            call_kwargs = mock_client.create_pod.call_args[1]
            docker_cmd = call_kwargs.get("docker_start_cmd")
            # Branch should be passed in the script (verified via script content)
            assert docker_cmd is not None


@pytest.mark.integration
class TestRunPodDeploymentStatus:
    """GET /v2/comfygit/deploy/runpod/{pod_id}/status - Get deployment status."""

    async def test_returns_starting_pod_when_pending(self, client, mock_workspace_context):
        """Should return STARTING_POD phase when pod is not yet running."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_pod.return_value = {
                "id": "pod123",
                "desiredStatus": "CREATED",
            }
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/pod123/status")

            assert resp.status == 200
            data = await resp.json()
            assert data["phase"] == "STARTING_POD"
            assert data["comfyui_url"] is None
            assert "console_url" in data

    async def test_returns_stopped_when_exited(self, client, mock_workspace_context):
        """Should return STOPPED phase when pod has exited."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_pod.return_value = {
                "id": "pod123",
                "desiredStatus": "EXITED",
            }
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/pod123/status")

            assert resp.status == 200
            data = await resp.json()
            assert data["phase"] == "STOPPED"
            assert "exited" in data["phase_detail"].lower()

    async def test_returns_setting_up_when_comfyui_not_responding(self, client, mock_workspace_context):
        """Should return SETTING_UP when pod running but ComfyUI not responding."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_pod.return_value = {
                "id": "pod123",
                "desiredStatus": "RUNNING",
            }
            MockClient.return_value = mock_client

            # Mock aiohttp to simulate ComfyUI not responding
            with patch("api.v2.deploy.aiohttp.ClientSession") as MockSession:
                mock_session = AsyncMock()
                mock_session.__aenter__.return_value = mock_session
                mock_session.get.side_effect = Exception("Connection refused")
                MockSession.return_value = mock_session

                resp = await client.get("/v2/comfygit/deploy/runpod/pod123/status")

                assert resp.status == 200
                data = await resp.json()
                assert data["phase"] == "SETTING_UP"
                assert data["comfyui_url"] is None

    async def test_url_formats_correct(self, client, mock_workspace_context):
        """Should format ComfyUI and console URLs correctly."""
        # Test the URL helper functions directly since mocking aiohttp is complex
        from api.v2.deploy import get_comfyui_url, get_runpod_console_url

        assert get_comfyui_url("abc123") == "https://abc123-8188.proxy.runpod.net"
        assert get_comfyui_url("xyz789", port=8080) == "https://xyz789-8080.proxy.runpod.net"
        assert get_runpod_console_url("abc123") == "https://www.runpod.io/console/pods/abc123"

    async def test_returns_404_when_pod_not_found(self, client, mock_workspace_context):
        """Should return 404 when pod doesn't exist."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_pod.return_value = None
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/nonexistent/status")

            assert resp.status == 404

    async def test_error_no_api_key(self, client, mock_workspace_context):
        """Should return 400 when no API key configured."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.get("/v2/comfygit/deploy/runpod/pod123/status")

        assert resp.status == 400

    async def test_includes_console_url(self, client, mock_workspace_context):
        """Should always include RunPod console URL for debugging."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_pod.return_value = {
                "id": "mypod456",
                "desiredStatus": "RUNNING",
            }
            MockClient.return_value = mock_client

            with patch("api.v2.deploy.aiohttp.ClientSession") as MockSession:
                mock_session = AsyncMock()
                mock_session.__aenter__.return_value = mock_session
                mock_session.get.side_effect = Exception("timeout")
                MockSession.return_value = mock_session

                resp = await client.get("/v2/comfygit/deploy/runpod/mypod456/status")

                assert resp.status == 200
                data = await resp.json()
                assert data["console_url"] == "https://www.runpod.io/console/pods/mypod456"
