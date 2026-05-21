"""Integration tests for debug and diagnostics endpoints."""
from unittest.mock import Mock

import pytest


@pytest.mark.integration
class TestMetadataRefreshEndpoint:
    """POST /v2/comfygit/debug/metadata/refresh."""

    async def test_success_refreshes_environment_metadata(self, client, mock_environment):
        mock_environment.refresh_metadata = Mock(return_value={
            "builtins_refreshed": True,
            "folder_paths_refreshed": True,
            "model_loaders_refreshed": True,
            "builtins_count": 217,
            "folder_mappings_count": 44,
            "model_loaders_count": 29,
        })

        resp = await client.post("/v2/comfygit/debug/metadata/refresh")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["builtins_count"] == 217
        assert data["folder_mappings_count"] == 44
        assert data["model_loaders_count"] == 29
        mock_environment.refresh_metadata.assert_called_once_with()

    async def test_invalid_environment_returns_400(self, client, mock_environment):
        mock_environment.refresh_metadata = Mock(side_effect=ValueError("ComfyUI not found"))

        resp = await client.post("/v2/comfygit/debug/metadata/refresh")

        assert resp.status == 400
        data = await resp.json()
        assert data["status"] == "error"
        assert "ComfyUI not found" in data["error"]
