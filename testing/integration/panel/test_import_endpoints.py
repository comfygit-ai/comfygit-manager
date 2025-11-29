"""Tests for import API endpoints.

Covers:
- POST /v2/workspace/import/preview - Preview tarball import
- POST /v2/workspace/import/preview/git - Preview git import
- GET /v2/workspace/environments/validate - Validate environment name
- POST /v2/workspace/import - Execute tarball import with SSE
- POST /v2/workspace/import/git - Execute git import with SSE
"""
import pytest
from unittest.mock import Mock
from pathlib import Path


@pytest.fixture
def mock_import_analysis():
    """Mock ImportAnalysis return value (matches core library structure)."""
    # This matches the structure from workspace.preview_import()
    analysis = Mock()
    analysis.environment_name = "test-env"
    analysis.comfyui_version = "v0.3.8"
    analysis.python_version = "3.12"
    analysis.nodes = [
        {"name": "comfyui-impact-pack", "package_id": "comfyui-impact-pack"}
    ]
    analysis.workflows = ["portrait-workflow.json", "landscape-workflow.json"]
    analysis.models = [
        {"filename": "sd_xl_base_1.0.safetensors", "relative_path": "checkpoints/sd_xl_base_1.0.safetensors"}
    ]
    analysis.dependencies = {}
    return analysis


@pytest.mark.integration
class TestImportPreviewEndpoint:
    """POST /v2/workspace/import/preview - Preview tarball import."""

    async def test_success_returns_analysis(self, client, mock_import_analysis, monkeypatch):
        """Should return 200 with ImportAnalysis when valid tarball uploaded."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")

        # Mock workspace detection
        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Mock the preview_import method
        mock_workspace.preview_import = Mock(return_value=mock_import_analysis)

        # Create multipart form data with a fake file
        from aiohttp import FormData
        form = FormData()
        form.add_field('file', b'fake tarball content',
                       filename='test.tar.gz',
                       content_type='application/gzip')

        resp = await client.post("/v2/workspace/import/preview", data=form)

        assert resp.status == 200
        data = await resp.json()
        assert data["comfyui_version"] == "v0.3.8"
        assert data["environment_name"] == "test-env"
        assert data["total_nodes"] == 1
        assert data["total_workflows"] == 2
        assert data["total_models"] == 1

    async def test_error_not_in_workspace(self, client, monkeypatch):
        """Should return 500 when not in managed workspace."""
        def mock_detect():
            return (False, None, None)
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        from aiohttp import FormData
        form = FormData()
        form.add_field('file', b'fake tarball', filename='test.tar.gz')

        resp = await client.post("/v2/workspace/import/preview", data=form)

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_missing_file(self, client, monkeypatch):
        """Should return 400 when no file provided."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Send empty form data (POST without file)
        resp = await client.post("/v2/workspace/import/preview", data={})

        assert resp.status == 400


@pytest.mark.integration
class TestImportPreviewGitEndpoint:
    """POST /v2/workspace/import/preview/git - Preview git import."""

    async def test_success_returns_analysis(self, client, mock_import_analysis, monkeypatch):
        """Should return 200 with ImportAnalysis for git URL."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        mock_workspace.preview_git_import = Mock(return_value=mock_import_analysis)

        resp = await client.post("/v2/workspace/import/preview/git", json={
            "git_url": "https://github.com/user/repo.git",
            "branch": "main"
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["comfyui_version"] == "v0.3.8"
        assert data["total_nodes"] == 1

    async def test_error_missing_git_url(self, client, monkeypatch):
        """Should return 400 when git_url not provided."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/preview/git", json={
            "branch": "main"  # Missing git_url
        })

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_error_invalid_git_url(self, client, monkeypatch):
        """Should return 400 when git URL is invalid/unreachable."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_workspace.preview_git_import = Mock(side_effect=Exception("Could not clone repository"))

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/preview/git", json={
            "git_url": "https://invalid-url.example.com/repo.git"
        })

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestValidateEnvironmentNameEndpoint:
    """GET /v2/workspace/environments/validate - Validate environment name."""

    async def test_valid_name_returns_success(self, client, monkeypatch):
        """Should return valid=true for available name."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_workspace.list_environments = Mock(return_value=[])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.get("/v2/workspace/environments/validate?name=my-new-env")

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is True
        assert data["name"] == "my-new-env"

    async def test_existing_name_returns_error(self, client, monkeypatch):
        """Should return valid=false when name already exists."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        existing_env = Mock()
        existing_env.name = "existing-env"
        mock_workspace.list_environments = Mock(return_value=[existing_env])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.get("/v2/workspace/environments/validate?name=existing-env")

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is False
        assert "already exists" in data["error"]

    async def test_invalid_characters_returns_error(self, client, monkeypatch):
        """Should return valid=false for names with invalid characters."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_workspace.list_environments = Mock(return_value=[])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.get("/v2/workspace/environments/validate?name=invalid/name")

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is False
        assert "invalid" in data["error"].lower()

    async def test_missing_name_returns_error(self, client, monkeypatch):
        """Should return 400 when name not provided."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.get("/v2/workspace/environments/validate")

        assert resp.status == 400


@pytest.mark.integration
class TestImportEndpoint:
    """POST /v2/workspace/import - Execute tarball import with SSE."""

    async def test_success_starts_import_and_streams_events(self, client, monkeypatch):
        """Should return SSE stream with progress events."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_env = Mock()
        mock_env.name = "imported-env"
        mock_env.path = Path("/tmp/test-workspace/environments/imported-env")
        mock_workspace.import_environment = Mock(return_value=mock_env)

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        from aiohttp import FormData
        form = FormData()
        form.add_field('file', b'fake tarball content',
                       filename='test.tar.gz',
                       content_type='application/gzip')
        form.add_field('name', 'imported-env')
        form.add_field('model_strategy', 'required')
        form.add_field('torch_backend', 'auto')

        resp = await client.post("/v2/workspace/import", data=form)

        assert resp.status == 200
        assert resp.content_type == "text/event-stream"

    async def test_error_missing_name(self, client, monkeypatch):
        """Should return 400 when name not provided."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        from aiohttp import FormData
        form = FormData()
        form.add_field('file', b'fake tarball', filename='test.tar.gz')
        # Missing 'name' field

        resp = await client.post("/v2/workspace/import", data=form)

        assert resp.status == 400

    async def test_error_not_in_workspace(self, client, monkeypatch):
        """Should return 500 when not in managed workspace."""
        def mock_detect():
            return (False, None, None)
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        from aiohttp import FormData
        form = FormData()
        form.add_field('file', b'fake tarball', filename='test.tar.gz')
        form.add_field('name', 'my-env')

        resp = await client.post("/v2/workspace/import", data=form)

        assert resp.status == 500


@pytest.mark.integration
class TestImportGitEndpoint:
    """POST /v2/workspace/import/git - Execute git import with SSE."""

    async def test_success_starts_import_and_streams_events(self, client, monkeypatch):
        """Should return SSE stream with progress events."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_env = Mock()
        mock_env.name = "git-imported-env"
        mock_env.path = Path("/tmp/test-workspace/environments/git-imported-env")
        mock_workspace.import_from_git = Mock(return_value=mock_env)

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/git", json={
            "git_url": "https://github.com/user/repo.git",
            "name": "git-imported-env",
            "branch": "main",
            "model_strategy": "required",
            "torch_backend": "auto"
        })

        assert resp.status == 200
        assert resp.content_type == "text/event-stream"

    async def test_error_missing_git_url(self, client, monkeypatch):
        """Should return 400 when git_url not provided."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/git", json={
            "name": "my-env"  # Missing git_url
        })

        assert resp.status == 400

    async def test_error_missing_name(self, client, monkeypatch):
        """Should return 400 when name not provided."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/git", json={
            "git_url": "https://github.com/user/repo.git"
            # Missing name
        })

        assert resp.status == 400
