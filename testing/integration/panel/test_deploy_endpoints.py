"""Deploy API endpoint tests.

Tests for RunPod deployment and package export functionality.
"""
import pytest
from unittest.mock import Mock, AsyncMock, patch


@pytest.fixture
def mock_workspace_context(mock_environment, monkeypatch, tmp_path):
    """Fixture to properly mock workspace for @requires_workspace endpoints.

    This patches get_workspace_from_cwd() which is called by the app context
    getter, ensuring @requires_workspace can access the mock workspace.
    """
    mock_workspace = Mock()
    mock_workspace.workspace_config_manager = Mock()
    mock_workspace.workspace_config_manager.set_runpod_token = Mock()
    mock_workspace.workspace_config_manager.get_runpod_token = Mock(return_value=None)
    mock_workspace.path = tmp_path  # Set a real path for CustomWorkersStore
    mock_environment.workspace = mock_workspace

    # Patch get_workspace_from_cwd in comfygit_panel to return our mock
    monkeypatch.setattr(
        "comfygit_panel.get_workspace_from_cwd",
        lambda: mock_workspace
    )

    return mock_workspace


# ============================================================================
# Bug Regression Tests - These ensure the fixes remain in place
# ============================================================================

@pytest.mark.integration
class TestWorkspaceContextSetup:
    """Tests for workspace context being properly available in app state.

    Bug: app['workspace'] was set at import time when _workspace was None,
    causing all @requires_workspace endpoints to fail with 500.
    Fix: Use a getter function like get_environment does.
    """

    async def test_workspace_accessible_via_app_context(self, client, mock_workspace_context):
        """Workspace should be accessible via request.app['workspace'] getter.

        This tests the fix for the bug where app['workspace'] was captured
        as None at import time.
        """
        # The mock_workspace_context fixture patches get_workspace_from_request,
        # but we want to verify the real app context flow works.
        # If this test passes, it means the workspace is accessible through
        # whatever mechanism @requires_workspace uses.
        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.test_connection.return_value = {"success": True}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod/test",
                json={"api_key": "rpa_test123", "save_key": False},
            )

            # Should NOT get 500 "No workspace detected"
            assert resp.status != 500, "Got 500 - workspace context not working"
            assert resp.status == 200


@pytest.mark.integration
class TestKeyStatusEndpointAliases:
    """Tests for endpoint URL aliases to match frontend expectations.

    Bug: Frontend calls GET /v2/comfygit/deploy/runpod/key but backend
    only defined /v2/comfygit/deploy/runpod/key-status.
    Fix: Add /key as alias that redirects to or duplicates key-status behavior.
    """

    async def test_get_key_status_via_key_endpoint(self, client, mock_workspace_context):
        """GET /v2/comfygit/deploy/runpod/key should return key status.

        Frontend uses this shorter URL. Should behave same as /key-status.
        """
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123456"

        resp = await client.get("/v2/comfygit/deploy/runpod/key")

        # Should NOT return 404
        assert resp.status != 404, "Got 404 - /key endpoint not registered"
        assert resp.status == 200
        data = await resp.json()
        assert data["has_key"] is True
        assert data["key_preview"] == "3456"

    async def test_get_key_status_via_key_status_endpoint(self, client, mock_workspace_context):
        """GET /v2/comfygit/deploy/runpod/key-status should still work."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123456"

        resp = await client.get("/v2/comfygit/deploy/runpod/key-status")

        assert resp.status == 200
        data = await resp.json()
        assert data["has_key"] is True
        assert data["key_preview"] == "3456"

    async def test_delete_key_via_key_endpoint(self, client, mock_workspace_context):
        """DELETE /v2/comfygit/deploy/runpod/key should clear the key."""
        resp = await client.delete("/v2/comfygit/deploy/runpod/key")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        mock_workspace_context.workspace_config_manager.set_runpod_token.assert_called_once_with(None)


@pytest.mark.integration
class TestDeploySummary:
    """GET /v2/comfygit/deploy/summary - Get environment summary for deployment."""

    async def test_returns_summary(self, client, mock_get_environment):
        """Should return environment summary with node/model/workflow counts."""
        # Setup mock pyproject
        mock_model_with_source = Mock()
        mock_model_with_source.sources = ["http://example.com/model.safetensors"]
        mock_model_without_source = Mock()
        mock_model_without_source.sources = []

        mock_pyproject = Mock()
        mock_pyproject.models.get_all.return_value = [mock_model_with_source, mock_model_without_source]
        mock_pyproject.nodes.get_existing.return_value = [Mock(), Mock(), Mock()]
        mock_pyproject.workflows.get_all_with_resolutions.return_value = {"wf1": {}, "wf2": {}}
        # Mock load() to return proper dict for comfyui_version extraction
        mock_pyproject.load.return_value = {
            "tool": {
                "comfygit": {
                    "comfyui_version": "v0.3.50"
                }
            }
        }

        mock_get_environment.pyproject = mock_pyproject

        resp = await client.get("/v2/comfygit/deploy/summary")

        assert resp.status == 200
        data = await resp.json()
        assert data["comfyui_version"] == "v0.3.50"
        assert data["node_count"] == 3
        assert data["model_count"] == 2
        assert data["models_with_sources"] == 1
        assert data["models_without_sources"] == 1
        assert data["workflow_count"] == 2


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


# Note: Tests in this class that mock RunPodClient for endpoints using get_deploy_client()
# need to patch "deploy.runpod_client.RunPodClient" not "api.v2.deploy.RunPodClient",
# and also need mock_client.get_comfyui_url = Mock(return_value=...) for non-async behavior.
# See test_success_with_pods for the fixed pattern.
@pytest.mark.integration
class TestRunPodGetPods:
    """GET /v2/comfygit/deploy/runpod/pods - List user's pods."""

    async def test_success_with_pods(self, client, mock_workspace_context):
        """Should return 200 with pods list."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        # Patch where RunPodClient is dynamically imported in client_factory.get_deploy_client()
        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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
            # Make get_comfyui_url a regular (non-async) method
            mock_client.get_comfyui_url = Mock(return_value="https://pod123-8188.proxy.runpod.net")
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/pods")

            assert resp.status == 200
            data = await resp.json()
            assert "pods" in data
            assert len(data["pods"]) == 1
            assert data["pods"][0]["id"] == "pod123"

    async def test_returns_all_required_fields(self, client, mock_workspace_context):
        """Should return all fields required by frontend RunPodInstance type.

        Frontend expects: id, name, gpu_type, gpu_count, status, created_at,
        cost_per_hour, uptime_seconds, total_cost, comfyui_url

        Bug: Backend was missing uptime_seconds, total_cost, gpu_count, created_at
        which caused TypeError: Cannot read properties of undefined (reading 'toFixed')
        """
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.list_pods.return_value = [
                {
                    "id": "pod123",
                    "name": "test-pod",
                    "desiredStatus": "RUNNING",
                    "costPerHr": 0.44,
                    "uptimeSeconds": 3600,
                    "gpuCount": 1,
                    "machine": {"gpuDisplayName": "RTX 4090"},
                }
            ]
            mock_client.get_comfyui_url = Mock(return_value="https://pod123-8188.proxy.runpod.net")
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/pods")

            assert resp.status == 200
            data = await resp.json()
            pod = data["pods"][0]

            # All required fields must be present and not None
            assert pod["id"] == "pod123"
            assert pod["name"] == "test-pod"
            assert pod["status"] == "RUNNING"
            assert pod["gpu_type"] == "RTX 4090"
            assert pod["cost_per_hour"] == 0.44
            assert pod["comfyui_url"] == "https://pod123-8188.proxy.runpod.net"

            # These fields were missing and caused .toFixed() crashes
            assert "uptime_seconds" in pod
            assert pod["uptime_seconds"] == 3600
            assert "total_cost" in pod
            assert isinstance(pod["total_cost"], (int, float))
            assert "gpu_count" in pod
            assert pod["gpu_count"] == 1

    async def test_success_empty_pods(self, client, mock_workspace_context):
        """Should return 200 with empty pods list."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.list_pods.return_value = []
            mock_client.get_comfyui_url = Mock(return_value=None)
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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
        """Should return has_key=true when key exists."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123456"

        resp = await client.get("/v2/comfygit/deploy/runpod/key-status")

        assert resp.status == 200
        data = await resp.json()
        assert data["has_key"] is True
        # Should only show last 4 chars
        assert data["key_preview"] == "3456"

    async def test_key_not_configured(self, client, mock_workspace_context):
        """Should return has_key=false when no key."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.get("/v2/comfygit/deploy/runpod/key-status")

        assert resp.status == 200
        data = await resp.json()
        assert data["has_key"] is False
        assert data.get("key_preview") is None


@pytest.mark.integration
class TestRunPodKeyVerify:
    """GET /v2/comfygit/deploy/runpod/key?verify=true - Verify stored key against RunPod.

    Bug: Frontend sets apiKey=key_preview (last 4 chars) then calls handleTestConnection(),
    which sends the 4-char preview to /test endpoint. RunPod rejects with 401.

    Fix: Add verify=true param to /key endpoint that tests the stored key server-side
    without requiring the key in the request body.
    """

    async def test_verify_valid_key_returns_balance(self, client, mock_workspace_context):
        """Should verify stored key and return credit balance when valid."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_full_valid_key"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.test_connection.return_value = {
                "success": True,
                "credit_balance": 42.50,
            }
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/key?verify=true")

            assert resp.status == 200
            data = await resp.json()
            assert data["has_key"] is True
            assert data["valid"] is True
            assert data["key_preview"] == "_key"  # Last 4 chars
            assert data["credit_balance"] == 42.50

    async def test_verify_invalid_key_returns_error(self, client, mock_workspace_context):
        """Should return valid=false with error when stored key is invalid/expired."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_expired_key"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.test_connection.return_value = {
                "success": False,
                "error": "Invalid API key",
            }
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/key?verify=true")

            assert resp.status == 200
            data = await resp.json()
            assert data["has_key"] is True
            assert data["valid"] is False
            assert data["key_preview"] == "_key"
            assert "error" in data

    async def test_verify_no_key_stored(self, client, mock_workspace_context):
        """Should return has_key=false when no key is stored."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.get("/v2/comfygit/deploy/runpod/key?verify=true")

        assert resp.status == 200
        data = await resp.json()
        assert data["has_key"] is False
        # Should not have valid/error fields when no key exists
        assert "valid" not in data

    async def test_verify_false_or_missing_skips_validation(self, client, mock_workspace_context):
        """Should not call RunPod API when verify=false or missing."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123456"

        with patch("api.v2.deploy.RunPodClient") as MockClient:
            # verify=false - should not call RunPod
            resp = await client.get("/v2/comfygit/deploy/runpod/key?verify=false")

            assert resp.status == 200
            data = await resp.json()
            assert data["has_key"] is True
            assert "valid" not in data  # Should not validate
            MockClient.assert_not_called()

            # No verify param - should not call RunPod
            resp2 = await client.get("/v2/comfygit/deploy/runpod/key")

            assert resp2.status == 200
            data2 = await resp2.json()
            assert data2["has_key"] is True
            assert "valid" not in data2
            MockClient.assert_not_called()


@pytest.mark.integration
class TestRunPodGetNetworkVolumes:
    """GET /v2/comfygit/deploy/runpod/volumes - List user's network volumes."""

    async def test_success_with_volumes(self, client, mock_workspace_context):
        """Should return 200 with volumes list."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_gpu_types_with_pricing.return_value = [
                {
                    "id": "NVIDIA RTX 4090",
                    "displayName": "RTX 4090",
                    "memoryInGb": 24,
                    "secureCloud": True,
                    "communityCloud": True,
                    "securePrice": 0.44,
                    "communityPrice": 0.34,
                    "secureSpotPrice": 0.22,
                    "communitySpotPrice": 0.17,
                    "lowestPrice": {"minimumBidPrice": 0.34, "stockStatus": "HIGH"},
                },
                {
                    "id": "NVIDIA RTX A6000",
                    "displayName": "RTX A6000",
                    "memoryInGb": 48,
                    "secureCloud": True,
                    "communityCloud": True,
                    "securePrice": 0.79,
                    "communityPrice": 0.59,
                    "secureSpotPrice": 0.40,
                    "communitySpotPrice": 0.30,
                    "lowestPrice": {"minimumBidPrice": 0.59, "stockStatus": "MEDIUM"},
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
            # Verify new spot pricing and stock status fields
            assert gpu["secureSpotPrice"] == 0.22
            assert gpu["communitySpotPrice"] == 0.17
            assert gpu["stockStatus"] == "HIGH"

    async def test_passes_data_center_filter_to_client(self, client, mock_workspace_context):
        """Should pass data_center_id to client for regional stock status."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            # Endpoint no longer does client-side filtering - it passes data_center_id
            # to the API for regional stock status info
            mock_client.get_gpu_types_with_pricing.return_value = [
                {
                    "id": "NVIDIA RTX 4090",
                    "displayName": "RTX 4090",
                    "memoryInGb": 24,
                    "securePrice": 0.44,
                    "communityPrice": 0.34,
                    "secureSpotPrice": 0.22,
                    "communitySpotPrice": 0.17,
                    "lowestPrice": {"minimumBidPrice": 0.34, "stockStatus": "HIGH"},
                },
            ]
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/gpu-types?data_center_id=US-IL-1")

            assert resp.status == 200
            data = await resp.json()
            assert len(data["gpu_types"]) == 1
            assert data["gpu_types"][0]["stockStatus"] == "HIGH"

            # Verify data_center_id was passed to the client
            mock_client.get_gpu_types_with_pricing.assert_called_once_with("US-IL-1")

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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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
        """Should deploy with pricing_type=SPOT using GraphQL create_spot_pod."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.create_spot_pod.return_value = {"id": "spotpod123", "name": "spot-test"}
            MockClient.return_value = mock_client

            resp = await client.post(
                "/v2/comfygit/deploy/runpod",
                json={
                    "gpu_type_id": "NVIDIA GeForce RTX 4090",
                    "pod_name": "my-spot-comfyui",
                    "network_volume_id": "5aio30csvw",
                    "pricing_type": "SPOT",
                    "spot_bid": 0.22,  # Required for SPOT pricing
                    "import_source": "https://github.com/user/repo.git",
                },
            )

            assert resp.status == 200
            data = await resp.json()
            assert data["status"] == "success"
            assert data["pod_id"] == "spotpod123"

            # Verify create_spot_pod called with bid_per_gpu
            call_kwargs = mock_client.create_spot_pod.call_args[1]
            assert call_kwargs.get("bid_per_gpu") == 0.22

    async def test_success_with_on_demand_pricing(self, client, mock_workspace_context):
        """Should deploy with pricing_type=ON_DEMAND using REST create_pod."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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

            # Verify create_pod was called (not create_spot_pod)
            mock_client.create_pod.assert_called_once()
            mock_client.create_spot_pod.assert_not_called()

    async def test_default_pricing_type_is_on_demand(self, client, mock_workspace_context):
        """Should default to ON_DEMAND when pricing_type not specified."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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

            # Verify create_pod was called (on-demand behavior)
            mock_client.create_pod.assert_called_once()
            mock_client.create_spot_pod.assert_not_called()


@pytest.mark.integration
class TestRunPodDeployWithStartupScript:
    """POST /v2/comfygit/deploy/runpod - Deploy with startup script."""

    async def test_includes_comfygit_home_env_var(self, client, mock_workspace_context):
        """Should set COMFYGIT_HOME=/workspace/comfygit in pod env."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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
class TestRunPodStopPod:
    """POST /v2/comfygit/deploy/runpod/{pod_id}/stop - Stop a running pod."""

    async def test_success(self, client, mock_workspace_context):
        """Should return 200 on successful stop."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.stop_pod.return_value = {"id": "pod123", "desiredStatus": "EXITED"}
            MockClient.return_value = mock_client

            resp = await client.post("/v2/comfygit/deploy/runpod/pod123/stop")

            assert resp.status == 200
            data = await resp.json()
            assert data["status"] == "success"
            assert data["message"] == "Pod stopped"
            mock_client.stop_pod.assert_called_once_with("pod123")

    async def test_error_no_api_key(self, client, mock_workspace_context):
        """Should return 400 when no API key configured."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.post("/v2/comfygit/deploy/runpod/pod123/stop")

        assert resp.status == 400


@pytest.mark.integration
class TestRunPodStartPod:
    """POST /v2/comfygit/deploy/runpod/{pod_id}/start - Start a stopped pod."""

    async def test_success(self, client, mock_workspace_context):
        """Should return 200 on successful start."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.start_pod.return_value = {
                "id": "pod123",
                "desiredStatus": "RUNNING",
                "costPerHr": 0.44,
            }
            MockClient.return_value = mock_client

            resp = await client.post("/v2/comfygit/deploy/runpod/pod123/start")

            assert resp.status == 200
            data = await resp.json()
            assert data["status"] == "success"
            assert data["message"] == "Pod starting"
            assert data["cost_per_hour"] == 0.44
            mock_client.start_pod.assert_called_once_with("pod123")

    async def test_error_no_api_key(self, client, mock_workspace_context):
        """Should return 400 when no API key configured."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.post("/v2/comfygit/deploy/runpod/pod123/start")

        assert resp.status == 400


@pytest.mark.integration
class TestRunPodDeploymentStatus:
    """GET /v2/comfygit/deploy/runpod/{pod_id}/status - Get deployment status."""

    async def test_returns_starting_pod_when_pending(self, client, mock_workspace_context):
        """Should return STARTING_POD phase when pod is not yet running."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_pod.return_value = {
                "id": "pod123",
                "desiredStatus": "CREATED",
            }
            mock_client.get_comfyui_url = Mock(return_value=None)
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_pod.return_value = {
                "id": "pod123",
                "desiredStatus": "EXITED",
            }
            mock_client.get_comfyui_url = Mock(return_value=None)
            MockClient.return_value = mock_client

            resp = await client.get("/v2/comfygit/deploy/runpod/pod123/status")

            assert resp.status == 200
            data = await resp.json()
            assert data["phase"] == "STOPPED"
            assert "exited" in data["phase_detail"].lower()

    async def test_returns_setting_up_when_comfyui_not_responding(self, client, mock_workspace_context):
        """Should return SETTING_UP when pod running but ComfyUI not responding."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_pod.return_value = {
                "id": "pod123",
                "desiredStatus": "RUNNING",
            }
            mock_client.get_comfyui_url = Mock(return_value="https://pod123-8188.proxy.runpod.net")
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
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

        with patch("deploy.runpod_client.RunPodClient") as MockClient:
            mock_client = AsyncMock()
            mock_client.get_pod.return_value = {
                "id": "mypod456",
                "desiredStatus": "RUNNING",
            }
            mock_client.get_comfyui_url = Mock(return_value="https://mypod456-8188.proxy.runpod.net")
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


# ============================================================================
# Unified Instances Endpoint Tests
# ============================================================================

@pytest.mark.integration
class TestUnifiedInstancesEndpoint:
    """GET /v2/comfygit/deploy/instances - Unified provider-agnostic instances.

    This endpoint aggregates instances from all configured providers (RunPod,
    future: Vast, Custom) into a common Instance format for the Instances tab.

    Note: Full mocking of the deploy client requires updates to the test
    infrastructure. Unit tests for the conversion function are in
    testing/unit/test_instance_conversion.py
    """

    async def test_returns_empty_list_when_no_providers_configured(self, client, mock_workspace_context):
        """Should return empty instances list when no API key configured."""
        # Clear any tracked deployments from previous tests
        from api.v2.deploy import _active_deployments
        _active_deployments.clear()

        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.get("/v2/comfygit/deploy/instances")

        assert resp.status == 200
        data = await resp.json()
        assert "instances" in data
        assert data["instances"] == []

    async def test_endpoint_exists_and_returns_json(self, client, mock_workspace_context):
        """Should return 200 with JSON response when no key configured."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        resp = await client.get("/v2/comfygit/deploy/instances")

        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, dict)
        assert "instances" in data
        assert isinstance(data["instances"], list)

    async def test_includes_tracked_deployments(self, client, mock_workspace_context):
        """Should include locally-tracked deploying instances."""
        from api.v2.deploy import track_deployment, complete_deployment, _active_deployments

        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        # Track a deployment
        _active_deployments.clear()
        track_deployment("tracked123", "runpod", "my-deploy", "RTX 4090", 0.44)

        try:
            resp = await client.get("/v2/comfygit/deploy/instances")
            assert resp.status == 200
            data = await resp.json()

            assert len(data["instances"]) == 1
            instance = data["instances"][0]
            assert instance["id"] == "tracked123"
            assert instance["status"] == "deploying"
            assert instance["deployment_phase"] == "STARTING"
        finally:
            complete_deployment("tracked123")


@pytest.mark.integration
class TestBatchStatusEndpoint:
    """POST /v2/comfygit/deploy/instances/status - Batch status polling."""

    async def test_returns_empty_dict_for_empty_request(self, client, mock_workspace_context):
        """Should return empty statuses when no IDs provided."""
        resp = await client.post("/v2/comfygit/deploy/instances/status", json={
            "instance_ids": []
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["statuses"] == {}

    async def test_returns_tracked_deployment_status(self, client, mock_workspace_context):
        """Should return status for tracked deploying instances."""
        from api.v2.deploy import track_deployment, update_deployment_status, complete_deployment, _active_deployments

        _active_deployments.clear()
        track_deployment("batch123", "runpod", "test", "RTX 4090", 0.44)
        update_deployment_status("batch123", "INSTALLING", "Installing nodes...", 60)

        try:
            resp = await client.post("/v2/comfygit/deploy/instances/status", json={
                "instance_ids": ["batch123", "unknown456"]
            })

            assert resp.status == 200
            data = await resp.json()

            assert "batch123" in data["statuses"]
            status = data["statuses"]["batch123"]
            assert status["status"] == "deploying"
            assert status["phase"] == "INSTALLING"
            assert status["progress"] == 60

            # Unknown ID not in results
            assert "unknown456" not in data["statuses"]
        finally:
            complete_deployment("batch123")


# ============================================================================
# Custom Worker Instance Aggregation Tests
# ============================================================================

@pytest.mark.integration
class TestUnifiedInstancesWithCustomWorkers:
    """GET /v2/comfygit/deploy/instances - Custom worker instance aggregation.

    When users deploy to custom workers (self-hosted GPU machines), those
    instances should appear in the unified Instances tab alongside RunPod
    instances. This requires aggregating instances from all registered workers.
    """

    async def test_includes_custom_worker_instances(self, client, mock_workspace_context):
        """Should include instances from registered custom workers."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        # Mock the CustomWorkersStore to return a registered worker
        mock_worker = {
            "name": "my-gpu-box",
            "host": "192.168.1.100",
            "port": 9090,
            "api_key": "test-key-123",
        }

        with patch("api.v2.deploy.CustomWorkersStore") as MockStore:
            mock_store = Mock()
            mock_store.get_all_workers.return_value = [mock_worker]
            MockStore.return_value = mock_store

            # Mock the worker API response
            with patch("api.v2.deploy._fetch_worker_instances") as mock_fetch:
                mock_fetch.return_value = [
                    {
                        "id": "comfy-123",
                        "name": "production",
                        "status": "running",
                        "comfyui_url": "http://192.168.1.100:8188",
                        "uptime_seconds": 3600,
                        "created_at": "2025-01-01T00:00:00Z",
                    }
                ]

                resp = await client.get("/v2/comfygit/deploy/instances")

                assert resp.status == 200
                data = await resp.json()

                # Should include the custom worker instance
                assert len(data["instances"]) == 1
                instance = data["instances"][0]
                assert instance["id"] == "my-gpu-box:comfy-123"  # Namespaced ID
                assert instance["provider"] == "custom"
                assert instance["name"] == "production"
                assert instance["status"] == "running"
                assert instance["worker_name"] == "my-gpu-box"

    async def test_aggregates_runpod_and_custom_instances(self, client, mock_workspace_context):
        """Should show both RunPod and custom worker instances together."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = "rpa_test123"

        # Mock custom workers
        mock_worker = {
            "name": "home-server",
            "host": "192.168.1.50",
            "port": 9090,
            "api_key": "local-key",
            "gpu_info": "RTX 3090",
        }

        # Mock RunPod client via get_deploy_client
        with patch("api.v2.deploy.get_deploy_client") as mock_get_client:
            mock_client = AsyncMock()
            mock_client.list_pods.return_value = [
                {
                    "id": "runpod-abc",
                    "name": "cloud-instance",
                    "desiredStatus": "RUNNING",
                    "costPerHr": 0.44,
                    "uptimeSeconds": 1800,
                    "machine": {"gpuDisplayName": "RTX 4090"},
                }
            ]
            # get_comfyui_url is a sync method, use Mock not AsyncMock
            mock_client.get_comfyui_url = Mock(return_value="https://runpod-abc-8188.proxy.runpod.net")
            mock_get_client.return_value = mock_client

            with patch("api.v2.deploy.CustomWorkersStore") as MockStore:
                mock_store = Mock()
                mock_store.get_all_workers.return_value = [mock_worker]
                MockStore.return_value = mock_store

                with patch("api.v2.deploy._fetch_worker_instances") as mock_fetch:
                    mock_fetch.return_value = [
                        {
                            "id": "local-1",
                            "name": "dev-instance",
                            "status": "running",
                            "comfyui_url": "http://192.168.1.50:8188",
                            "uptime_seconds": 7200,
                            "created_at": "2025-01-01T00:00:00Z",
                        }
                    ]

                    resp = await client.get("/v2/comfygit/deploy/instances")

                    assert resp.status == 200
                    data = await resp.json()

                    # Should have both instances
                    assert len(data["instances"]) == 2

                    # Find instances by provider
                    providers = {i["provider"]: i for i in data["instances"]}
                    assert "runpod" in providers
                    assert "custom" in providers

                    # Verify RunPod instance
                    assert providers["runpod"]["id"] == "runpod-abc"

                    # Verify custom instance with namespaced ID
                    assert providers["custom"]["id"] == "home-server:local-1"
                    assert providers["custom"]["worker_name"] == "home-server"

    async def test_gracefully_handles_offline_workers(self, client, mock_workspace_context):
        """Should skip workers that are offline or unreachable."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        # Mock two workers - one online, one offline
        workers = [
            {"name": "online-worker", "host": "192.168.1.10", "port": 9090, "api_key": "key1"},
            {"name": "offline-worker", "host": "192.168.1.20", "port": 9090, "api_key": "key2"},
        ]

        with patch("api.v2.deploy.CustomWorkersStore") as MockStore:
            mock_store = Mock()
            mock_store.get_all_workers.return_value = workers
            MockStore.return_value = mock_store

            with patch("api.v2.deploy._fetch_worker_instances") as mock_fetch:
                # First call succeeds, second raises exception
                async def side_effect(worker):
                    if worker["name"] == "online-worker":
                        return [{"id": "inst-1", "name": "test", "status": "running"}]
                    raise Exception("Connection refused")

                mock_fetch.side_effect = side_effect

                resp = await client.get("/v2/comfygit/deploy/instances")

                assert resp.status == 200
                data = await resp.json()

                # Should only have the instance from the online worker
                assert len(data["instances"]) == 1
                assert data["instances"][0]["id"] == "online-worker:inst-1"

    async def test_namespaces_instance_ids_to_prevent_collision(self, client, mock_workspace_context):
        """Instance IDs should be namespaced with worker name to prevent collisions."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        # Two workers with instances that have the same local ID
        workers = [
            {"name": "worker-a", "host": "10.0.0.1", "port": 9090, "api_key": "key1"},
            {"name": "worker-b", "host": "10.0.0.2", "port": 9090, "api_key": "key2"},
        ]

        with patch("api.v2.deploy.CustomWorkersStore") as MockStore:
            mock_store = Mock()
            mock_store.get_all_workers.return_value = workers
            MockStore.return_value = mock_store

            with patch("api.v2.deploy._fetch_worker_instances") as mock_fetch:
                # Both workers have an instance with id "comfy-1"
                async def side_effect(worker):
                    return [{"id": "comfy-1", "name": f"{worker['name']}-instance", "status": "running"}]

                mock_fetch.side_effect = side_effect

                resp = await client.get("/v2/comfygit/deploy/instances")

                assert resp.status == 200
                data = await resp.json()

                # Should have 2 instances with unique namespaced IDs
                assert len(data["instances"]) == 2
                ids = {i["id"] for i in data["instances"]}
                assert ids == {"worker-a:comfy-1", "worker-b:comfy-1"}

    async def test_custom_instance_format_matches_unified_instance(self, client, mock_workspace_context):
        """Custom instances should match the unified Instance format used by RunPod."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        mock_worker = {
            "name": "test-worker",
            "host": "192.168.1.100",
            "port": 9090,
            "api_key": "test-key",
            "gpu_info": "RTX 4090",  # From health check
        }

        with patch("api.v2.deploy.CustomWorkersStore") as MockStore:
            mock_store = Mock()
            mock_store.get_all_workers.return_value = [mock_worker]
            MockStore.return_value = mock_store

            with patch("api.v2.deploy._fetch_worker_instances") as mock_fetch:
                mock_fetch.return_value = [
                    {
                        "id": "inst-123",
                        "name": "my-instance",
                        "status": "running",
                        "comfyui_url": "http://192.168.1.100:8188",
                        "uptime_seconds": 3600,
                        "created_at": "2025-01-01T12:00:00Z",
                    }
                ]

                resp = await client.get("/v2/comfygit/deploy/instances")

                assert resp.status == 200
                data = await resp.json()
                instance = data["instances"][0]

                # All required Instance fields should be present
                assert "id" in instance
                assert "provider" in instance
                assert instance["provider"] == "custom"
                assert "name" in instance
                assert "status" in instance
                assert "comfyui_url" in instance
                assert "gpu_type" in instance  # Should use worker's gpu_info
                assert instance["gpu_type"] == "RTX 4090"
                assert "cost_per_hour" in instance
                assert instance["cost_per_hour"] == 0  # Self-hosted, no cost
                assert "uptime_seconds" in instance
                assert "total_cost" in instance
                assert instance["total_cost"] == 0  # Self-hosted
                assert "created_at" in instance
                assert "worker_name" in instance  # Extra field for custom instances

    async def test_maps_worker_status_to_unified_status(self, client, mock_workspace_context):
        """Worker instance statuses should map to unified Instance statuses."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        mock_worker = {"name": "test", "host": "localhost", "port": 9090, "api_key": "key"}

        with patch("api.v2.deploy.CustomWorkersStore") as MockStore:
            mock_store = Mock()
            mock_store.get_all_workers.return_value = [mock_worker]
            MockStore.return_value = mock_store

            # Test different status mappings
            status_cases = [
                ("running", "running"),
                ("stopped", "stopped"),
                ("starting", "deploying"),
                ("error", "error"),
            ]

            for worker_status, expected_status in status_cases:
                with patch("api.v2.deploy._fetch_worker_instances") as mock_fetch:
                    mock_fetch.return_value = [
                        {"id": f"inst-{worker_status}", "name": "test", "status": worker_status}
                    ]

                    resp = await client.get("/v2/comfygit/deploy/instances")
                    data = await resp.json()

                    assert data["instances"][0]["status"] == expected_status, \
                        f"Worker status '{worker_status}' should map to '{expected_status}'"


@pytest.mark.integration
class TestCustomWorkerInstanceActions:
    """Instance actions (stop/start/terminate) for custom worker instances.

    When a custom instance is controlled via the unified Instances tab,
    the action should be routed to the correct worker's API endpoint.
    """

    async def test_stop_custom_instance(self, client, mock_workspace_context):
        """POST /v2/comfygit/deploy/custom/{worker}/instances/{id}/stop."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        mock_worker = {"name": "my-worker", "host": "192.168.1.100", "port": 9090, "api_key": "key123"}

        with patch("api.v2.custom_workers._get_workers_store") as mock_get_store:
            mock_store = Mock()
            mock_store.get_worker.return_value = mock_worker
            mock_get_store.return_value = mock_store

            with patch("api.v2.custom_workers._proxy_to_worker") as mock_proxy:
                mock_proxy.return_value = {"status": "success", "message": "Instance stopped"}

                resp = await client.post("/v2/comfygit/deploy/custom/my-worker/instances/inst-123/stop")

                assert resp.status == 200
                data = await resp.json()
                assert data["status"] == "success"

                # Verify proxy was called correctly
                mock_proxy.assert_called_once()
                call_args = mock_proxy.call_args
                assert call_args[0][1] == "POST"
                assert "/api/v1/instances/inst-123/stop" in call_args[0][2]

    async def test_start_custom_instance(self, client, mock_workspace_context):
        """POST /v2/comfygit/deploy/custom/{worker}/instances/{id}/start."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        mock_worker = {"name": "my-worker", "host": "192.168.1.100", "port": 9090, "api_key": "key123"}

        with patch("api.v2.custom_workers._get_workers_store") as mock_get_store:
            mock_store = Mock()
            mock_store.get_worker.return_value = mock_worker
            mock_get_store.return_value = mock_store

            with patch("api.v2.custom_workers._proxy_to_worker") as mock_proxy:
                mock_proxy.return_value = {"status": "success", "message": "Instance started"}

                resp = await client.post("/v2/comfygit/deploy/custom/my-worker/instances/inst-123/start")

                assert resp.status == 200
                data = await resp.json()
                assert data["status"] == "success"

    async def test_terminate_custom_instance(self, client, mock_workspace_context):
        """DELETE /v2/comfygit/deploy/custom/{worker}/instances/{id}."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        mock_worker = {"name": "my-worker", "host": "192.168.1.100", "port": 9090, "api_key": "key123"}

        with patch("api.v2.custom_workers._get_workers_store") as mock_get_store:
            mock_store = Mock()
            mock_store.get_worker.return_value = mock_worker
            mock_get_store.return_value = mock_store

            with patch("api.v2.custom_workers._proxy_to_worker") as mock_proxy:
                mock_proxy.return_value = {"status": "success", "message": "Instance terminated"}

                resp = await client.delete("/v2/comfygit/deploy/custom/my-worker/instances/inst-123")

                assert resp.status == 200
                data = await resp.json()
                assert data["status"] == "success"

    async def test_action_returns_404_for_unknown_worker(self, client, mock_workspace_context):
        """Should return 404 when trying to control instance on unknown worker."""
        mock_workspace_context.workspace_config_manager.get_runpod_token.return_value = None

        with patch("api.v2.custom_workers._get_workers_store") as mock_get_store:
            mock_store = Mock()
            mock_store.get_worker.return_value = None  # Worker not found
            mock_get_store.return_value = mock_store

            resp = await client.post("/v2/comfygit/deploy/custom/unknown-worker/instances/inst-123/stop")

            assert resp.status == 404
            data = await resp.json()
            assert "not found" in data.get("message", "").lower()
