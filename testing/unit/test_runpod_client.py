"""Unit tests for RunPod REST API client.

Tests client behavior with mocked HTTP responses.
"""
import pytest
from unittest.mock import AsyncMock, patch, MagicMock
from pathlib import Path
import sys

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))


@pytest.mark.unit
class TestRunPodClientInit:
    """Test client initialization."""

    def test_init_with_api_key(self):
        """Should initialize with API key."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="rpa_test_key")
        assert client.api_key == "rpa_test_key"

    def test_init_sets_base_url(self):
        """Should set correct base URL."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")
        assert client.base_url == "https://rest.runpod.io/v1"

    def test_init_requires_api_key(self):
        """Should raise error if no API key provided."""
        from server.deploy.runpod_client import RunPodClient

        with pytest.raises(ValueError, match="API key required"):
            RunPodClient(api_key="")


@pytest.mark.unit
class TestRunPodClientTestConnection:
    """Test API key validation."""

    @pytest.mark.asyncio
    async def test_test_connection_success(self):
        """Should return success with credit balance when API key is valid."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="rpa_valid_key")

        # test_connection now uses get_user_info (GraphQL) which returns user data
        mock_user_info = {
            "id": "user_123",
            "clientBalance": 25.50,
            "currentSpendPerHr": 0.0,
            "spendLimit": 100.0,
        }
        with patch.object(client, 'get_user_info', AsyncMock(return_value=mock_user_info)):
            result = await client.test_connection()

        assert result["success"] is True
        assert result["credit_balance"] == 25.50

    @pytest.mark.asyncio
    async def test_test_connection_invalid_key(self):
        """Should return error when API key is invalid."""
        from server.deploy.runpod_client import RunPodClient, RunPodAPIError

        client = RunPodClient(api_key="invalid_key")

        # test_connection now uses get_user_info which raises RunPodAPIError on failure
        with patch.object(client, 'get_user_info', AsyncMock(side_effect=RunPodAPIError("Unauthorized", 401))):
            result = await client.test_connection()

        assert result["success"] is False
        assert "error" in result


@pytest.mark.unit
class TestRunPodClientGetUserInfo:
    """Test get_user_info GraphQL error handling.

    Bug: When RunPod returns {"data": null} (invalid key), get_user_info raises
    KeyError/TypeError with unhelpful message "'data'" instead of proper error.

    Fix: Check for null data before accessing fields, raise proper RunPodAPIError.
    """

    @pytest.mark.asyncio
    async def test_get_user_info_returns_null_data(self):
        """Should raise proper error when GraphQL returns null data.

        This happens when API key is invalid/truncated - RunPod returns
        {"data": null} instead of an errors array.
        """
        from server.deploy.runpod_client import RunPodClient, RunPodAPIError

        client = RunPodClient(api_key="truncated_4char_key")

        # Mock GraphQL returning null data (what happens with bad key)
        mock_response = {"data": None}

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)):
            with pytest.raises(RunPodAPIError) as exc_info:
                await client.get_user_info()

            # Should have meaningful error message, not "'data'" or "'myself'"
            assert "invalid" in exc_info.value.message.lower() or "unauthorized" in exc_info.value.message.lower()

    @pytest.mark.asyncio
    async def test_get_user_info_returns_null_myself(self):
        """Should raise proper error when GraphQL returns null myself field."""
        from server.deploy.runpod_client import RunPodClient, RunPodAPIError

        client = RunPodClient(api_key="bad_key")

        # Mock GraphQL returning data but null myself
        mock_response = {"data": {"myself": None}}

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)):
            with pytest.raises(RunPodAPIError) as exc_info:
                await client.get_user_info()

            assert "invalid" in exc_info.value.message.lower() or "unauthorized" in exc_info.value.message.lower()

    @pytest.mark.asyncio
    async def test_test_connection_null_data_returns_clean_error(self):
        """test_connection should return clean error message when data is null.

        The frontend displays this error, so it should be human-readable.
        """
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="bad_key")

        # Mock GraphQL returning null data
        mock_response = {"data": None}

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)):
            result = await client.test_connection()

        assert result["success"] is False
        # Should NOT be "'data'" - should be readable
        assert result["error"] != "'data'"
        assert result["error"] != "'myself'"
        # Should mention invalid key or unauthorized
        assert "invalid" in result["error"].lower() or "unauthorized" in result["error"].lower()


@pytest.mark.unit
class TestRunPodClientListPods:
    """Test listing pods."""

    @pytest.mark.asyncio
    async def test_list_pods_returns_list(self):
        """Should return list of pods."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        mock_pods = [
            {
                "id": "abc123",
                "name": "test-pod",
                "desiredStatus": "RUNNING",
                "costPerHr": 0.44,
                "gpu": {"id": "NVIDIA GeForce RTX 4090", "count": 1},
            }
        ]

        with patch.object(client, '_get', AsyncMock(return_value=mock_pods)):
            pods = await client.list_pods()

        assert len(pods) == 1
        assert pods[0]["id"] == "abc123"
        assert pods[0]["name"] == "test-pod"

    @pytest.mark.asyncio
    async def test_list_pods_empty(self):
        """Should return empty list when no pods."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        with patch.object(client, '_get', AsyncMock(return_value=[])):
            pods = await client.list_pods()

        assert pods == []


@pytest.mark.unit
class TestRunPodClientGetPod:
    """Test getting single pod."""

    @pytest.mark.asyncio
    async def test_get_pod_success(self):
        """Should return pod details."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        mock_pod = {
            "id": "abc123",
            "name": "test-pod",
            "desiredStatus": "RUNNING",
            "costPerHr": 0.44,
            "publicIp": "100.65.0.119",
            "portMappings": {"22": 10341, "8188": 10342},
            "gpu": {"id": "NVIDIA GeForce RTX 4090", "count": 1},
        }

        with patch.object(client, '_get', AsyncMock(return_value=mock_pod)):
            pod = await client.get_pod("abc123")

        assert pod["id"] == "abc123"
        assert pod["publicIp"] == "100.65.0.119"

    @pytest.mark.asyncio
    async def test_get_pod_not_found(self):
        """Should raise error when pod not found."""
        from server.deploy.runpod_client import RunPodClient, RunPodAPIError

        client = RunPodClient(api_key="test")

        with patch.object(client, '_get', AsyncMock(side_effect=RunPodAPIError("Pod not found", 404))):
            with pytest.raises(RunPodAPIError) as exc_info:
                await client.get_pod("nonexistent")

        assert exc_info.value.status_code == 404


@pytest.mark.unit
class TestRunPodClientCreatePod:
    """Test pod creation."""

    @pytest.mark.asyncio
    async def test_create_pod_success(self):
        """Should create pod with config."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        mock_response = {
            "id": "new_pod_123",
            "name": "my-comfyui",
            "desiredStatus": "RUNNING",
        }

        with patch.object(client, '_post', AsyncMock(return_value=mock_response)):
            pod = await client.create_pod(
                name="my-comfyui",
                image_name="runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04",
                gpu_type_id="NVIDIA GeForce RTX 4090",
                volume_in_gb=50,
            )

        assert pod["id"] == "new_pod_123"
        assert pod["name"] == "my-comfyui"

    @pytest.mark.asyncio
    async def test_create_pod_with_cloud_type(self):
        """Should accept cloud type parameter."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        mock_response = {"id": "pod_123", "name": "test"}

        with patch.object(client, '_post', AsyncMock(return_value=mock_response)) as mock_post:
            await client.create_pod(
                name="test",
                image_name="runpod/pytorch:latest",
                gpu_type_id="NVIDIA GeForce RTX 4090",
                cloud_type="COMMUNITY",
            )

        # Verify cloud_type was passed in request body
        call_args = mock_post.call_args
        assert call_args[1]["data"]["cloudType"] == "COMMUNITY"

    @pytest.mark.asyncio
    async def test_create_pod_with_ports(self):
        """Should configure exposed ports."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        mock_response = {"id": "pod_123", "name": "test"}

        with patch.object(client, '_post', AsyncMock(return_value=mock_response)) as mock_post:
            await client.create_pod(
                name="test",
                image_name="test",
                gpu_type_id="NVIDIA GeForce RTX 4090",
                ports=["8188/http", "22/tcp"],
            )

        call_args = mock_post.call_args
        assert "8188/http" in call_args[1]["data"]["ports"]
        assert "22/tcp" in call_args[1]["data"]["ports"]


@pytest.mark.unit
class TestRunPodClientDeletePod:
    """Test pod deletion."""

    @pytest.mark.asyncio
    async def test_delete_pod_success(self):
        """Should delete pod and return success."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        with patch.object(client, '_delete', AsyncMock(return_value=None)):
            result = await client.delete_pod("abc123")

        assert result is True

    @pytest.mark.asyncio
    async def test_delete_pod_not_found(self):
        """Should raise error when pod not found."""
        from server.deploy.runpod_client import RunPodClient, RunPodAPIError

        client = RunPodClient(api_key="test")

        with patch.object(client, '_delete', AsyncMock(side_effect=RunPodAPIError("Not found", 404))):
            with pytest.raises(RunPodAPIError):
                await client.delete_pod("nonexistent")


@pytest.mark.unit
class TestRunPodClientPodActions:
    """Test pod lifecycle actions (start, stop, restart)."""

    @pytest.mark.asyncio
    async def test_start_pod(self):
        """Should start a stopped pod."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        with patch.object(client, '_post', AsyncMock(return_value=None)):
            result = await client.start_pod("abc123")

        assert result is True

    @pytest.mark.asyncio
    async def test_stop_pod(self):
        """Should stop a running pod."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        with patch.object(client, '_post', AsyncMock(return_value=None)):
            result = await client.stop_pod("abc123")

        assert result is True

    @pytest.mark.asyncio
    async def test_restart_pod(self):
        """Should restart a pod."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        with patch.object(client, '_post', AsyncMock(return_value=None)):
            result = await client.restart_pod("abc123")

        assert result is True


@pytest.mark.unit
class TestRunPodClientPodURLs:
    """Test getting pod connection URLs."""

    def test_get_comfyui_url(self):
        """Should construct ComfyUI proxy URL from pod."""
        from server.deploy.runpod_client import RunPodClient

        pod = {
            "id": "abc123xyz",
            "desiredStatus": "RUNNING",
        }

        url = RunPodClient.get_comfyui_url(pod)
        assert url == "https://abc123xyz-8188.proxy.runpod.net"

    def test_get_comfyui_url_not_running(self):
        """Should return None if pod not running."""
        from server.deploy.runpod_client import RunPodClient

        pod = {
            "id": "abc123xyz",
            "desiredStatus": "EXITED",
        }

        url = RunPodClient.get_comfyui_url(pod)
        assert url is None

    def test_get_ssh_command(self):
        """Should construct SSH command from pod."""
        from server.deploy.runpod_client import RunPodClient

        pod = {
            "id": "abc123xyz",
            "publicIp": "100.65.0.119",
            "portMappings": {"22": 10341},
        }

        ssh_cmd = RunPodClient.get_ssh_command(pod)
        assert ssh_cmd == "ssh root@100.65.0.119 -p 10341"

    def test_get_ssh_command_no_mapping(self):
        """Should return None if no SSH port mapping."""
        from server.deploy.runpod_client import RunPodClient

        pod = {
            "id": "abc123xyz",
            "publicIp": "100.65.0.119",
            "portMappings": {},
        }

        ssh_cmd = RunPodClient.get_ssh_command(pod)
        assert ssh_cmd is None


@pytest.mark.unit
class TestRunPodClientTemplates:
    """Test template operations."""

    @pytest.mark.asyncio
    async def test_list_templates(self):
        """Should list user templates."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        mock_templates = [
            {"id": "tpl_123", "name": "My ComfyUI Template", "imageName": "custom/comfyui:latest"}
        ]

        with patch.object(client, '_get', AsyncMock(return_value=mock_templates)):
            templates = await client.list_templates()

        assert len(templates) == 1
        assert templates[0]["id"] == "tpl_123"

    @pytest.mark.asyncio
    async def test_create_template(self):
        """Should create a new template."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        mock_response = {
            "id": "tpl_new",
            "name": "ComfyGit Deploy",
            "imageName": "runpod/pytorch:latest",
        }

        with patch.object(client, '_post', AsyncMock(return_value=mock_response)):
            template = await client.create_template(
                name="ComfyGit Deploy",
                image_name="runpod/pytorch:latest",
                docker_start_cmd=["bash", "/setup.sh"],
            )

        assert template["id"] == "tpl_new"


@pytest.mark.unit
class TestRunPodClientNetworkVolumes:
    """Test network volume operations."""

    @pytest.mark.asyncio
    async def test_list_network_volumes(self):
        """Should list network volumes."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        mock_volumes = [
            {"id": "vol_123", "name": "models-cache", "size": 100, "dataCenterId": "US-TX-3"}
        ]

        with patch.object(client, '_get', AsyncMock(return_value=mock_volumes)):
            volumes = await client.list_network_volumes()

        assert len(volumes) == 1
        assert volumes[0]["id"] == "vol_123"

    @pytest.mark.asyncio
    async def test_create_network_volume(self):
        """Should create a network volume."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")

        mock_response = {
            "id": "vol_new",
            "name": "comfygit-models",
            "size": 50,
            "dataCenterId": "US-TX-3",
        }

        with patch.object(client, '_post', AsyncMock(return_value=mock_response)):
            volume = await client.create_network_volume(
                name="comfygit-models",
                size_gb=50,
                data_center_id="US-TX-3",
            )

        assert volume["id"] == "vol_new"


@pytest.mark.unit
class TestRunPodClientErrorHandling:
    """Test error handling."""

    @pytest.mark.asyncio
    async def test_rate_limit_error(self):
        """Should handle rate limiting."""
        from server.deploy.runpod_client import RunPodClient, RunPodAPIError

        client = RunPodClient(api_key="test")

        with patch.object(client, '_get', AsyncMock(side_effect=RunPodAPIError("Rate limited", 429))):
            with pytest.raises(RunPodAPIError) as exc_info:
                await client.list_pods()

        assert exc_info.value.status_code == 429

    @pytest.mark.asyncio
    async def test_server_error(self):
        """Should handle server errors."""
        from server.deploy.runpod_client import RunPodClient, RunPodAPIError

        client = RunPodClient(api_key="test")

        with patch.object(client, '_get', AsyncMock(side_effect=RunPodAPIError("Server error", 500))):
            with pytest.raises(RunPodAPIError) as exc_info:
                await client.list_pods()

        assert exc_info.value.status_code == 500


@pytest.mark.unit
class TestRunPodGPUTypes:
    """Test GPU type enumeration."""

    def test_common_gpu_types_defined(self):
        """Should have common GPU types available."""
        from server.deploy.runpod_client import GPU_TYPES

        assert "NVIDIA GeForce RTX 4090" in GPU_TYPES
        assert "NVIDIA GeForce RTX 3090" in GPU_TYPES
        assert "NVIDIA A100 80GB PCIe" in GPU_TYPES
        assert "NVIDIA H100 80GB HBM3" in GPU_TYPES

    @pytest.mark.asyncio
    async def test_get_gpu_types_returns_list(self):
        """Should return list of GPU types with display info."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")
        gpu_types = await client.get_gpu_types()

        assert len(gpu_types) > 0
        # Check first GPU has expected fields
        gpu = gpu_types[0]
        assert "id" in gpu
        assert "displayName" in gpu
        assert "memoryInGb" in gpu

    @pytest.mark.asyncio
    async def test_get_gpu_types_accepts_data_center_filter(self):
        """Should accept data_center_id parameter (for API compatibility)."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")
        # Should not raise - filter accepted but not implemented
        gpu_types = await client.get_gpu_types(data_center_id="US-IL-1")
        assert len(gpu_types) > 0

    def test_estimate_gpu_memory(self):
        """Should estimate GPU memory based on model name."""
        from server.deploy.runpod_client import RunPodClient

        assert RunPodClient._estimate_gpu_memory("NVIDIA GeForce RTX 4090") == 24
        assert RunPodClient._estimate_gpu_memory("NVIDIA A100 80GB PCIe") == 80
        assert RunPodClient._estimate_gpu_memory("NVIDIA H100 80GB HBM3") == 80
        assert RunPodClient._estimate_gpu_memory("Unknown GPU") == 24  # Default
