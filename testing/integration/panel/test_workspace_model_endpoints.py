"""Integration tests for workspace-level model endpoints.

These endpoints operate at workspace scope (shared across all environments):
- GET /v2/workspace/models - List all models in workspace index
- GET /v2/workspace/models/details/{identifier} - Get full model details
- POST /v2/workspace/models/{identifier}/source - Update model download source
- DELETE /v2/workspace/models/{identifier} - Delete a model from workspace
- POST /v2/workspace/models/scan - Trigger model directory scan
"""
import pytest
from unittest.mock import Mock
from pathlib import Path
import sys

# Add helpers to path
helpers_dir = Path(__file__).parent.parent.parent / "helpers"
if str(helpers_dir) not in sys.path:
    sys.path.insert(0, str(helpers_dir))


def create_mock_model(
    filename="model.safetensors",
    hash_val="abc12345",
    file_size=1000000,
    category="checkpoints",
    relative_path=None,
    sha256_hash=None,
    blake3_hash=None,
):
    """Create a mock ModelWithLocation object."""
    model = Mock()
    model.filename = filename
    model.hash = hash_val
    model.file_size = file_size
    model.category = category
    model.relative_path = relative_path or f"{category}/{filename}"
    model.sha256_hash = sha256_hash
    model.blake3_hash = blake3_hash
    model.mtime = 1700000000.0
    model.last_seen = 1700000000
    model.base_directory = "/workspace/models"
    model.metadata = {}
    return model


@pytest.mark.integration
class TestWorkspaceModelsListEndpoint:
    """GET /v2/workspace/models - List all models in workspace index."""

    async def test_success_with_models(self, client, mock_environment):
        """Should return all models from workspace index."""
        # Arrange
        mock_models = [
            create_mock_model(
                filename="checkpoint.safetensors",
                hash_val="ckpt1234",
                file_size=6_500_000_000,
                category="checkpoints"
            ),
            create_mock_model(
                filename="lora.safetensors",
                hash_val="lora5678",
                file_size=150_000_000,
                category="loras"
            ),
        ]
        mock_environment.workspace.list_models.return_value = mock_models

        # Act
        resp = await client.get("/v2/workspace/models")

        # Assert
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)
        assert len(data) == 2

        # Check first model
        ckpt = next(m for m in data if m["filename"] == "checkpoint.safetensors")
        assert ckpt["hash"] == "ckpt1234"
        assert ckpt["type"] == "checkpoints"
        assert ckpt["size"] == 6_500_000_000

    async def test_success_empty_index(self, client, mock_environment):
        """Should return empty list when no models in index."""
        mock_environment.workspace.list_models.return_value = []

        resp = await client.get("/v2/workspace/models")

        assert resp.status == 200
        data = await resp.json()
        assert data == []

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/workspace/models")

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_list_models_fails(self, client, mock_environment):
        """Should return 500 when list_models raises exception."""
        mock_environment.workspace.list_models.side_effect = Exception("Index corrupt")

        resp = await client.get("/v2/workspace/models")

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestWorkspaceModelSourceEndpoint:
    """POST /v2/workspace/models/{identifier}/source - Add source to workspace model index."""

    async def test_success_add_source(self, client, mock_environment):
        """Should add source directly to workspace model repository."""
        # Arrange: Mock workspace.model_repository and model_downloader
        mock_model_repo = Mock()
        mock_model_repo.has_model.return_value = True
        mock_model_repo.add_source.return_value = None
        mock_environment.workspace.model_repository = mock_model_repo

        mock_downloader = Mock()
        mock_downloader.detect_url_type.return_value = "civitai"
        mock_environment.workspace.model_downloader = mock_downloader

        # Act
        resp = await client.post(
            "/v2/workspace/models/abc12345/source",
            json={"source_url": "https://civitai.com/api/download/models/12345"}
        )

        # Assert
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["source_type"] == "civitai"

        # Verify workspace.model_repository.add_source was called
        mock_model_repo.add_source.assert_called_once()

    async def test_error_missing_source_url(self, client, mock_environment):
        """Should return 400 when source_url is missing."""
        resp = await client.post(
            "/v2/workspace/models/abc12345/source",
            json={}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_error_model_not_in_index(self, client, mock_environment):
        """Should return 404 when model hash not found in workspace index."""
        # Setup: Model not in repository
        mock_model_repo = Mock()
        mock_model_repo.has_model.return_value = False
        mock_environment.workspace.model_repository = mock_model_repo

        resp = await client.post(
            "/v2/workspace/models/nonexistent/source",
            json={"source_url": "https://example.com/model.safetensors"}
        )

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post(
            "/v2/workspace/models/abc12345/source",
            json={"source_url": "https://example.com/model.safetensors"}
        )

        assert resp.status == 500


@pytest.mark.integration
class TestWorkspaceModelDeleteEndpoint:
    """DELETE /v2/workspace/models/{identifier} - Delete a model from workspace."""

    async def test_success_delete_model(self, client, mock_environment, tmp_path):
        """Should delete model file and return success."""
        # Arrange - Create actual file to delete
        model_file = tmp_path / "checkpoints" / "model.safetensors"
        model_file.parent.mkdir(parents=True)
        model_file.write_bytes(b"fake model data")

        mock_model = create_mock_model(filename="model.safetensors", hash_val="abc12345")
        mock_model.relative_path = "checkpoints/model.safetensors"

        # Mock get_model_details to return model with path
        mock_details = Mock()
        mock_details.model = mock_model
        mock_details.all_locations = [{"path": str(model_file)}]
        mock_environment.workspace.get_model_details.return_value = mock_details
        mock_environment.workspace.workspace_config_manager.get_models_directory.return_value = tmp_path

        # Act
        resp = await client.delete("/v2/workspace/models/abc12345")

        # Assert
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

    async def test_error_model_not_found(self, client, mock_environment):
        """Should return 404 when model identifier not found."""
        mock_environment.workspace.get_model_details.side_effect = KeyError("Not found")

        resp = await client.delete("/v2/workspace/models/nonexistent")

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_ambiguous_identifier(self, client, mock_environment):
        """Should return 400 when identifier matches multiple models."""
        mock_environment.workspace.get_model_details.side_effect = ValueError("Multiple matches")

        resp = await client.delete("/v2/workspace/models/amb")

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.delete("/v2/workspace/models/abc12345")

        assert resp.status == 500


@pytest.mark.integration
class TestWorkspaceModelDetailsEndpoint:
    """GET /v2/workspace/models/details/{identifier} - Get full model details."""

    async def test_success_get_details(self, client, mock_environment):
        """Should return full model details."""
        # Arrange
        mock_model = create_mock_model(
            filename="model.safetensors",
            hash_val="abc12345",
            file_size=16_000_000_000,
            category="checkpoints",
            sha256_hash="sha256abc123",
            blake3_hash="blake3xyz789"
        )
        mock_model.last_seen = 1700000000

        mock_details = Mock()
        mock_details.model = mock_model
        mock_details.all_locations = [
            {"path": "/workspace/models/checkpoints/model.safetensors", "mtime": 1699000000}
        ]
        mock_details.sources = [
            {"type": "civitai", "url": "https://civitai.com/api/download/models/12345"}
        ]
        mock_environment.workspace.get_model_details.return_value = mock_details

        # Mock the models directory
        mock_environment.workspace.workspace_config_manager.get_models_directory.return_value = Path("/workspace/models")

        # Act
        resp = await client.get("/v2/workspace/models/details/abc12345")

        # Assert
        assert resp.status == 200
        data = await resp.json()
        assert data["filename"] == "model.safetensors"
        assert data["hash"] == "abc12345"
        assert data["sha256"] == "sha256abc123"
        assert data["blake3"] == "blake3xyz789"
        assert data["size"] == 16_000_000_000
        assert data["category"] == "checkpoints"
        assert len(data["locations"]) == 1
        assert len(data["sources"]) == 1
        assert data["sources"][0]["type"] == "civitai"

    async def test_error_not_found(self, client, mock_environment):
        """Should return 404 when model not found."""
        mock_environment.workspace.get_model_details.side_effect = KeyError("Not found")

        resp = await client.get("/v2/workspace/models/details/nonexistent")

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_ambiguous(self, client, mock_environment):
        """Should return 400 when identifier is ambiguous."""
        mock_environment.workspace.get_model_details.side_effect = ValueError("Multiple matches")

        resp = await client.get("/v2/workspace/models/details/amb")

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/workspace/models/details/abc12345")

        assert resp.status == 500


@pytest.mark.integration
class TestWorkspaceModelScanEndpoint:
    """POST /v2/workspace/models/scan - Trigger model directory scan."""

    async def test_success_scan(self, client, mock_environment):
        """Should trigger scan and return change count."""
        mock_environment.workspace.sync_model_directory.return_value = 5

        resp = await client.post("/v2/workspace/models/scan")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["changes"] == 5

    async def test_success_no_changes(self, client, mock_environment):
        """Should return 0 changes when nothing new found."""
        mock_environment.workspace.sync_model_directory.return_value = 0

        resp = await client.post("/v2/workspace/models/scan")

        assert resp.status == 200
        data = await resp.json()
        assert data["changes"] == 0

    async def test_error_scan_fails(self, client, mock_environment):
        """Should return 500 when scan fails."""
        mock_environment.workspace.sync_model_directory.side_effect = Exception("Scan failed")

        resp = await client.post("/v2/workspace/models/scan")

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/workspace/models/scan")

        assert resp.status == 500


@pytest.mark.integration
class TestWorkspaceModelsDirectoryEndpoint:
    """GET/POST /v2/workspace/models/directory - Get/set models directory."""

    async def test_get_directory_success(self, client, mock_environment):
        """Should return current models directory path."""
        mock_environment.workspace.workspace_config_manager.get_models_directory.return_value = Path("/workspace/models")

        resp = await client.get("/v2/workspace/models/directory")

        assert resp.status == 200
        data = await resp.json()
        assert data["path"] == "/workspace/models"

    async def test_get_directory_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/workspace/models/directory")
        assert resp.status == 500

    async def test_set_directory_success(self, client, mock_environment, tmp_path):
        """Should set new models directory and return scan results."""
        new_path = tmp_path / "new_models"
        new_path.mkdir()

        mock_environment.workspace.set_models_directory.return_value = None
        mock_environment.workspace.sync_model_directory.return_value = 10

        resp = await client.post(
            "/v2/workspace/models/directory",
            json={"path": str(new_path)}
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["path"] == str(new_path)
        assert data["models_indexed"] == 10

    async def test_set_directory_missing_path(self, client, mock_environment):
        """Should return 400 when path is missing."""
        resp = await client.post(
            "/v2/workspace/models/directory",
            json={}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_set_directory_invalid_path(self, client, mock_environment):
        """Should return 400 when path does not exist."""
        resp = await client.post(
            "/v2/workspace/models/directory",
            json={"path": "/nonexistent/path/to/models"}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_set_directory_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post(
            "/v2/workspace/models/directory",
            json={"path": "/some/path"}
        )
        assert resp.status == 500
