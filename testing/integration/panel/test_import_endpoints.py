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
from dataclasses import dataclass


# Local test dataclasses matching core library structure (avoids importing core)
@dataclass
class NodeAnalysis:
    name: str
    source: str
    install_spec: str | None
    is_dev_node: bool

@dataclass
class ModelAnalysis:
    filename: str
    hash: str | None
    sources: list[str]
    relative_path: str
    locally_available: bool
    needs_download: bool
    workflows: list[str]

@dataclass
class WorkflowAnalysis:
    name: str
    models_required: int
    models_optional: int

@dataclass
class ImportAnalysis:
    comfyui_version: str | None
    comfyui_version_type: str | None
    models: list[ModelAnalysis]
    total_models: int
    models_locally_available: int
    models_needing_download: int
    models_without_sources: int
    nodes: list[NodeAnalysis]
    total_nodes: int
    registry_nodes: int
    dev_nodes: int
    git_nodes: int
    workflows: list[WorkflowAnalysis]
    total_workflows: int
    needs_model_downloads: bool
    needs_node_installs: bool


@pytest.fixture
def mock_import_analysis():
    """Create ImportAnalysis matching core library structure."""
    return ImportAnalysis(
        comfyui_version="v0.3.8",
        comfyui_version_type="release",
        models=[
            ModelAnalysis(
                filename="sd_xl_base_1.0.safetensors",
                hash="abc123",
                sources=["https://example.com/model.safetensors"],
                relative_path="checkpoints/sd_xl_base_1.0.safetensors",
                locally_available=False,
                needs_download=True,
                workflows=["portrait-workflow"]
            )
        ],
        total_models=1,
        models_locally_available=0,
        models_needing_download=1,
        models_without_sources=0,
        nodes=[
            NodeAnalysis(
                name="comfyui-impact-pack",
                source="registry",
                install_spec="comfyui-impact-pack",
                is_dev_node=False
            )
        ],
        total_nodes=1,
        registry_nodes=1,
        dev_nodes=0,
        git_nodes=0,
        workflows=[
            WorkflowAnalysis(name="portrait-workflow", models_required=1, models_optional=0),
            WorkflowAnalysis(name="landscape-workflow", models_required=0, models_optional=1)
        ],
        total_workflows=2,
        needs_model_downloads=True,
        needs_node_installs=True
    )


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
        assert data["total_nodes"] == 1
        assert data["total_workflows"] == 2
        assert data["total_models"] == 1
        assert data["needs_model_downloads"] is True
        assert data["nodes"][0]["name"] == "comfyui-impact-pack"

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


    async def test_dot_in_name_returns_success(self, client, monkeypatch):
        """Should allow dots in environment names."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_workspace.list_environments = Mock(return_value=[])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.get("/v2/workspace/environments/validate?name=my.env-1")

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is True
        assert data["name"] == "my.env-1"

    async def test_name_must_end_with_alphanumeric(self, client, monkeypatch):
        """Should reject names ending with non-alphanumeric chars."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_workspace.list_environments = Mock(return_value=[])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.get("/v2/workspace/environments/validate?name=invalid-")

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is False
        assert "start and end" in data["error"].lower()

    async def test_reserved_name_returns_error(self, client, monkeypatch):
        """Should reject reserved environment names."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_workspace.list_environments = Mock(return_value=[])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.get("/v2/workspace/environments/validate?name=models")

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is False
        assert "reserved" in data["error"].lower()

@pytest.mark.integration
class TestImportEndpoint:
    """POST /v2/workspace/import - Start tarball import (polling-based)."""

    async def test_success_starts_import(self, client, monkeypatch):
        """Should return status=started when import begins."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_workspace.list_environments = Mock(return_value=[])
        # import_environment runs in background thread, won't be called during test

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
        data = await resp.json()
        assert data["status"] == "started"
        assert "imported-env" in data["message"]

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

    async def test_error_environment_already_exists(self, client, monkeypatch):
        """Should return 400 when environment name already exists."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        existing_env = Mock()
        existing_env.name = "existing-env"
        mock_workspace.list_environments = Mock(return_value=[existing_env])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        from aiohttp import FormData
        form = FormData()
        form.add_field('file', b'fake tarball', filename='test.tar.gz')
        form.add_field('name', 'existing-env')

        resp = await client.post("/v2/workspace/import", data=form)

        assert resp.status == 400
        data = await resp.json()
        assert "already exists" in data["message"]


@pytest.mark.integration
class TestImportStatusEndpoint:
    """GET /v2/workspace/import/status - Poll import progress."""

    async def test_returns_status_with_progress_fields(self, client, monkeypatch):
        """Should return status with phase and progress fields for rich progress tracking."""
        # Reset import state first
        import api.v2.import_ops as import_ops
        with import_ops._import_task_lock:
            import_ops._import_task_state["state"] = "idle"
            import_ops._import_task_state["phase"] = None
            import_ops._import_task_state["progress"] = 0
            import_ops._import_task_state["message"] = ""
            import_ops._import_task_state["environment_name"] = None
            import_ops._import_task_state["error"] = None

        resp = await client.get("/v2/workspace/import/status")

        assert resp.status == 200
        data = await resp.json()
        # Should have all expected fields including new progress fields
        assert "state" in data
        assert "phase" in data  # NEW: Phase identifier
        assert "progress" in data  # NEW: 0-100 percentage
        assert "message" in data
        assert "environment_name" in data
        assert "error" in data
        # State should be one of valid values
        assert data["state"] in ["idle", "importing", "complete", "error"]
        # Progress should be a number between 0 and 100
        assert isinstance(data["progress"], (int, float))
        assert 0 <= data["progress"] <= 100


@pytest.mark.integration
class TestServerImportProgressCallbacks:
    """Test that import progress callbacks update state correctly."""

    def test_on_phase_updates_state(self):
        """ServerImportProgress.on_phase should update phase and progress."""
        import api.v2.import_ops as import_ops

        # Reset state
        with import_ops._import_task_lock:
            import_ops._import_task_state["state"] = "importing"
            import_ops._import_task_state["phase"] = None
            import_ops._import_task_state["progress"] = 0
            import_ops._import_task_state["message"] = ""

        # Create progress handler and call on_phase
        progress = import_ops.ServerImportProgress()
        progress.on_phase("extract_builtins", "Extracting builtin nodes...")

        # Verify state was updated
        with import_ops._import_task_lock:
            assert import_ops._import_task_state["phase"] == "extract_builtins"
            assert import_ops._import_task_state["progress"] == 20  # From PHASE_PROGRESS mapping
            assert import_ops._import_task_state["message"] == "Extracting builtin nodes..."

    def test_on_node_installed_updates_message(self):
        """ServerImportProgress.on_node_installed should update message."""
        import api.v2.import_ops as import_ops

        progress = import_ops.ServerImportProgress()
        progress.on_node_installed("comfyui-impact-pack")

        with import_ops._import_task_lock:
            assert "comfyui-impact-pack" in import_ops._import_task_state["message"]

    def test_on_download_batch_start_updates_phase(self):
        """ServerImportProgress.on_download_batch_start should update to download phase."""
        import api.v2.import_ops as import_ops

        progress = import_ops.ServerImportProgress()
        progress.on_download_batch_start(5)

        with import_ops._import_task_lock:
            assert import_ops._import_task_state["phase"] == "download_models"
            assert import_ops._import_task_state["progress"] == 90
            assert "5" in import_ops._import_task_state["message"]

    def test_on_download_file_start_updates_message(self):
        """ServerImportProgress.on_download_file_start should show file progress."""
        import api.v2.import_ops as import_ops

        progress = import_ops.ServerImportProgress()
        progress.on_download_file_start("model.safetensors", 2, 5)

        with import_ops._import_task_lock:
            assert "model.safetensors" in import_ops._import_task_state["message"]
            assert "2" in import_ops._import_task_state["message"]
            assert "5" in import_ops._import_task_state["message"]

    def test_phase_progress_mapping_exists(self):
        """ServerImportProgress should have PHASE_PROGRESS mapping."""
        import api.v2.import_ops as import_ops

        progress = import_ops.ServerImportProgress()
        assert hasattr(progress, 'PHASE_PROGRESS')
        # Verify key phases are mapped
        assert "clone_comfyui" in progress.PHASE_PROGRESS or "restore_comfyui" in progress.PHASE_PROGRESS
        assert "extract_builtins" in progress.PHASE_PROGRESS
        assert "configure_pytorch" in progress.PHASE_PROGRESS
        assert "download_models" in progress.PHASE_PROGRESS
        assert "complete" in progress.PHASE_PROGRESS


@pytest.mark.integration
class TestGitImportEndpoint:
    """POST /v2/workspace/import/git - Start git repository import (polling-based)."""

    @pytest.fixture(autouse=True)
    def reset_import_state(self):
        """Reset import state before each test to avoid state bleed."""
        import api.v2.import_ops as import_ops
        with import_ops._import_task_lock:
            import_ops._import_task_state["state"] = "idle"
            import_ops._import_task_state["phase"] = None
            import_ops._import_task_state["progress"] = 0
            import_ops._import_task_state["message"] = ""
            import_ops._import_task_state["environment_name"] = None
            import_ops._import_task_state["error"] = None

    async def test_success_starts_import(self, client, monkeypatch):
        """Should return status=started when import begins."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_workspace.list_environments = Mock(return_value=[])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/git", json={
            "git_url": "https://github.com/user/repo.git",
            "name": "imported-env",
            "model_strategy": "required",
            "torch_backend": "auto"
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "started"
        assert "imported-env" in data["message"]

    async def test_error_missing_git_url(self, client, monkeypatch):
        """Should return 400 when git_url not provided."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/git", json={
            "name": "my-env",
            "model_strategy": "all"
        })

        assert resp.status == 400
        data = await resp.json()
        assert "git_url" in data.get("message", data.get("error", "")).lower() or "required" in data.get("message", data.get("error", "")).lower()

    async def test_error_missing_name(self, client, monkeypatch):
        """Should return 400 when name not provided."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/git", json={
            "git_url": "https://github.com/user/repo.git"
        })

        assert resp.status == 400
        data = await resp.json()
        assert "name" in data.get("message", data.get("error", "")).lower() or "required" in data.get("message", data.get("error", "")).lower()

    async def test_error_not_in_workspace(self, client, monkeypatch):
        """Should return 500 when not in managed workspace."""
        def mock_detect():
            return (False, None, None)
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/git", json={
            "git_url": "https://github.com/user/repo.git",
            "name": "my-env"
        })

        assert resp.status == 500

    async def test_error_environment_already_exists(self, client, monkeypatch):
        """Should return 400 when environment name already exists."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        existing_env = Mock()
        existing_env.name = "existing-env"
        mock_workspace.list_environments = Mock(return_value=[existing_env])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/git", json={
            "git_url": "https://github.com/user/repo.git",
            "name": "existing-env",
            "model_strategy": "all",
            "torch_backend": "auto"
        })

        assert resp.status == 400
        data = await resp.json()
        assert "already exists" in data["message"]

    async def test_error_invalid_name_format(self, client, monkeypatch):
        """Should return 400 when environment name has invalid characters."""
        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_workspace.list_environments = Mock(return_value=[])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.post("/v2/workspace/import/git", json={
            "git_url": "https://github.com/user/repo.git",
            "name": "invalid/name",
            "model_strategy": "all"
        })

        assert resp.status == 400
        data = await resp.json()
        assert "invalid" in data["message"].lower() or "character" in data["message"].lower()

    async def test_rejects_import_in_progress(self, client, monkeypatch):
        """Should return 409 when another import is already in progress."""
        import api.v2.import_ops as import_ops

        mock_workspace = Mock()
        mock_workspace.path = Path("/tmp/test-workspace")
        mock_workspace.list_environments = Mock(return_value=[])

        def mock_detect():
            return (True, mock_workspace, Mock())
        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Simulate import already in progress
        with import_ops._import_task_lock:
            original_state = import_ops._import_task_state["state"]
            import_ops._import_task_state["state"] = "importing"

        try:
            resp = await client.post("/v2/workspace/import/git", json={
                "git_url": "https://github.com/user/repo.git",
                "name": "my-env",
                "model_strategy": "all"
            })

            assert resp.status == 409
            data = await resp.json()
            assert "in progress" in data["message"].lower()
        finally:
            # Restore state
            with import_ops._import_task_lock:
                import_ops._import_task_state["state"] = original_state
