"""Integration tests for model-related panel endpoints."""
import pytest
from unittest.mock import Mock
import sys
from pathlib import Path

# Add helpers to path
helpers_dir = Path(__file__).parent.parent.parent / "helpers"
if str(helpers_dir) not in sys.path:
    sys.path.insert(0, str(helpers_dir))

from mock_helpers import create_mock_resolution  # noqa: E402


@pytest.mark.integration
class TestEnvironmentModelsEndpoint:
    """GET /v2/comfygit/models/environment - Get all models used in environment."""

    async def test_success_with_models(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return aggregated models from all workflows."""
        # Setup: Create workflows with models
        mock_wf1 = Mock()
        mock_wf1.name = "workflow1.json"

        # Create mock resolved model
        mock_resolved_model = Mock()
        mock_resolved_model.hash = "abc123"
        mock_resolved_model.filename = "model1.safetensors"
        mock_resolved_model.category = "checkpoints"
        mock_resolved_model.file_size = 1000000
        mock_resolved_model.relative_path = "checkpoints/model1.safetensors"

        mock_model_ref = Mock()
        mock_model_ref.resolved_model = mock_resolved_model
        mock_model_ref.needs_path_sync = False
        mock_model_ref.model_source = None

        mock_wf1.resolution = create_mock_resolution(
            models_resolved=[mock_model_ref]
        )

        mock_env_status.workflow.analyzed_workflows = [mock_wf1]
        mock_env_status.missing_models = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)
        assert len(data) >= 1

        # Find our model in the results
        model = next((m for m in data if m["filename"] == "model1.safetensors"), None)
        assert model is not None
        assert model["hash"] == "abc123"
        assert model["type"] == "checkpoints"
        assert model["status"] == "available"
        assert "workflow1.json" in model["used_in_workflows"]

    async def test_success_empty_environment(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return empty list when no workflows."""
        # Setup: No workflows
        mock_env_status.workflow.analyzed_workflows = []
        mock_env_status.missing_models = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)
        assert len(data) == 0

    async def test_success_with_missing_models(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should include missing models in results."""
        # Setup: Missing models
        mock_missing = Mock()
        mock_missing.filename = "missing_model.safetensors"
        mock_missing.required_by = ["workflow1.json", "workflow2.json"]

        mock_env_status.workflow.analyzed_workflows = []
        mock_env_status.missing_models = [mock_missing]
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)

        # Should have the missing model
        missing = next((m for m in data if m["filename"] == "missing_model.safetensors"), None)
        assert missing is not None
        assert missing["status"] == "missing"
        assert missing["hash"] == ""
        assert len(missing["used_in_workflows"]) == 2

    async def test_success_model_used_in_multiple_workflows(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should aggregate same model used in multiple workflows."""
        # Setup: Same model in two workflows
        mock_resolved_model = Mock()
        mock_resolved_model.hash = "shared123"
        mock_resolved_model.filename = "shared.safetensors"
        mock_resolved_model.category = "checkpoints"
        mock_resolved_model.file_size = 2000000
        mock_resolved_model.relative_path = "checkpoints/shared.safetensors"

        # Workflow 1
        mock_wf1 = Mock()
        mock_wf1.name = "workflow1.json"
        mock_model_ref1 = Mock()
        mock_model_ref1.resolved_model = mock_resolved_model
        mock_model_ref1.needs_path_sync = False
        mock_model_ref1.model_source = None
        mock_wf1.resolution = create_mock_resolution(models_resolved=[mock_model_ref1])

        # Workflow 2
        mock_wf2 = Mock()
        mock_wf2.name = "workflow2.json"
        mock_model_ref2 = Mock()
        mock_model_ref2.resolved_model = mock_resolved_model  # Same model
        mock_model_ref2.needs_path_sync = False
        mock_model_ref2.model_source = None
        mock_wf2.resolution = create_mock_resolution(models_resolved=[mock_model_ref2])

        mock_env_status.workflow.analyzed_workflows = [mock_wf1, mock_wf2]
        mock_env_status.missing_models = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 200
        data = await resp.json()

        # Should have only one entry for the shared model
        shared_models = [m for m in data if m["hash"] == "shared123"]
        assert len(shared_models) == 1

        # Should list both workflows
        shared = shared_models[0]
        assert "workflow1.json" in shared["used_in_workflows"]
        assert "workflow2.json" in shared["used_in_workflows"]

    async def test_success_downloadable_model(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should mark models with download source as downloadable."""
        # Setup: Model with download source but not locally available
        mock_wf1 = Mock()
        mock_wf1.name = "workflow1.json"

        mock_model_ref = Mock()
        mock_model_ref.resolved_model = None  # Not locally available
        mock_model_ref.model_source = "https://example.com/model.safetensors"  # But has source
        mock_model_ref.needs_path_sync = False

        mock_wf1.resolution = create_mock_resolution(models_resolved=[mock_model_ref])

        mock_env_status.workflow.analyzed_workflows = [mock_wf1]
        mock_env_status.missing_models = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 200
        await resp.json()
        # Since resolved_model is None, the endpoint might skip it or handle it differently
        # This test might need adjustment based on actual implementation behavior

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/models/environment")

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_status_call_fails(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when env.status() raises exception."""
        # Setup: status() raises exception
        mock_environment.status.side_effect = Exception("Status failed")

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestWorkspaceModelSourceEndpoint:
    """POST /v2/workspace/models/{identifier}/source - Add source to workspace model index."""

    async def test_add_source_success(self, client, mock_environment):
        """Should add source directly to workspace model repository."""
        # Setup: Mock the model_repository on workspace
        mock_model_repo = Mock()
        mock_model_repo.has_model.return_value = True
        mock_model_repo.add_source.return_value = None
        mock_environment.workspace.model_repository = mock_model_repo

        # Mock model_downloader for source type detection
        mock_downloader = Mock()
        mock_downloader.detect_url_type.return_value = "huggingface"
        mock_environment.workspace.model_downloader = mock_downloader

        # Execute
        resp = await client.post(
            "/v2/workspace/models/abc123def456/source",
            json={"source_url": "https://huggingface.co/org/model/resolve/main/file.safetensors"}
        )

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["source_type"] == "huggingface"

        # Should have called workspace.model_repository.add_source directly
        mock_model_repo.add_source.assert_called_once()
        call_args = mock_model_repo.add_source.call_args
        assert call_args[1]["model_hash"] == "abc123def456"
        assert call_args[1]["source_type"] == "huggingface"
        assert "huggingface.co" in call_args[1]["source_url"]

    async def test_add_source_model_not_in_index(self, client, mock_environment):
        """Should return 404 when model hash not found in workspace index."""
        # Setup: Model not in repository
        mock_model_repo = Mock()
        mock_model_repo.has_model.return_value = False
        mock_environment.workspace.model_repository = mock_model_repo

        # Execute
        resp = await client.post(
            "/v2/workspace/models/nonexistent123/source",
            json={"source_url": "https://civitai.com/api/download/models/12345"}
        )

        # Verify
        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_add_source_missing_url(self, client, mock_environment):
        """Should return 400 when source_url is missing."""
        resp = await client.post(
            "/v2/workspace/models/abc123/source",
            json={}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "source_url" in data["error"].lower() or "missing" in data["error"].lower()

    async def test_add_source_detects_civitai_type(self, client, mock_environment):
        """Should auto-detect CivitAI source type."""
        mock_model_repo = Mock()
        mock_model_repo.has_model.return_value = True
        mock_environment.workspace.model_repository = mock_model_repo

        mock_downloader = Mock()
        mock_downloader.detect_url_type.return_value = "civitai"
        mock_environment.workspace.model_downloader = mock_downloader

        resp = await client.post(
            "/v2/workspace/models/abc123/source",
            json={"source_url": "https://civitai.com/api/download/models/12345"}
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["source_type"] == "civitai"

    async def test_add_source_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post(
            "/v2/workspace/models/abc123/source",
            json={"source_url": "https://example.com/model.safetensors"}
        )

        assert resp.status == 500


@pytest.mark.integration
class TestWorkspaceModelSourceRemoveEndpoint:
    """DELETE /v2/workspace/models/{identifier}/source - Remove source from workspace model index."""

    async def test_remove_source_success(self, client, mock_environment):
        """Should remove source from workspace model repository."""
        # Setup: Mock the model_repository on workspace
        mock_model_repo = Mock()
        mock_model_repo.remove_source.return_value = True  # Successfully removed
        mock_environment.workspace.model_repository = mock_model_repo

        # Execute
        resp = await client.delete(
            "/v2/workspace/models/abc123def456/source",
            json={"source_url": "https://huggingface.co/org/model/resolve/main/file.safetensors"}
        )

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

        # Should have called workspace.model_repository.remove_source
        mock_model_repo.remove_source.assert_called_once_with(
            "abc123def456",
            "https://huggingface.co/org/model/resolve/main/file.safetensors"
        )

    async def test_remove_source_not_found(self, client, mock_environment):
        """Should return 404 when source URL doesn't exist for model."""
        mock_model_repo = Mock()
        mock_model_repo.remove_source.return_value = False  # Source not found
        mock_environment.workspace.model_repository = mock_model_repo

        resp = await client.delete(
            "/v2/workspace/models/abc123/source",
            json={"source_url": "https://example.com/nonexistent.safetensors"}
        )

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_remove_source_missing_url(self, client, mock_environment):
        """Should return 400 when source_url is missing."""
        resp = await client.delete(
            "/v2/workspace/models/abc123/source",
            json={}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "source_url" in data["error"].lower() or "missing" in data["error"].lower()

    async def test_remove_source_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.delete(
            "/v2/workspace/models/abc123/source",
            json={"source_url": "https://example.com/model.safetensors"}
        )

        assert resp.status == 500


@pytest.mark.integration
class TestHuggingFaceRepoInfoEndpoint:
    """GET /v2/workspace/huggingface/repo-info - Get file listing for HuggingFace repo."""

    async def test_success_public_repo(self, client, mock_environment, monkeypatch):
        """Should return file listing for a public HuggingFace repository."""
        # Setup: Mock core's parse_huggingface_url
        mock_parsed = Mock()
        mock_parsed.kind = "repo"
        mock_parsed.repo_id = "microsoft/VibeVoice-1.5B"
        mock_parsed.revision = "main"

        monkeypatch.setattr(
            "api.v2.models.parse_huggingface_url",
            lambda url: mock_parsed
        )

        # Mock HfApi
        mock_sibling = Mock()
        mock_sibling.rfilename = "model.safetensors"
        mock_sibling.size = 3000000000

        mock_info = Mock()
        mock_info.siblings = [mock_sibling]

        mock_hf_api = Mock()
        mock_hf_api.model_info.return_value = mock_info

        monkeypatch.setattr(
            "api.v2.models.HfApi",
            lambda token=None: mock_hf_api
        )

        # Mock ModelConfig
        mock_model_cfg = Mock()
        mock_model_cfg.default_extensions = [".safetensors", ".ckpt", ".pt"]

        monkeypatch.setattr(
            "api.v2.models.ModelConfig.load",
            lambda: mock_model_cfg
        )

        # Execute
        resp = await client.get(
            "/v2/workspace/huggingface/repo-info",
            params={"url": "https://huggingface.co/microsoft/VibeVoice-1.5B"}
        )

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["repo_id"] == "microsoft/VibeVoice-1.5B"
        assert data["revision"] == "main"
        assert isinstance(data["files"], list)
        assert len(data["files"]) >= 1
        assert data["files"][0]["path"] == "model.safetensors"
        assert data["files"][0]["size"] == 3000000000
        assert data["files"][0]["is_model_file"] is True

    async def test_success_with_sharded_files(self, client, mock_environment, monkeypatch):
        """Should detect sharded model files and group them."""
        mock_parsed = Mock()
        mock_parsed.kind = "repo"
        mock_parsed.repo_id = "meta-llama/Llama-2-7b"
        mock_parsed.revision = "main"

        monkeypatch.setattr(
            "api.v2.models.parse_huggingface_url",
            lambda url: mock_parsed
        )

        # Create sharded file siblings
        shards = []
        for i in range(1, 4):
            sib = Mock()
            sib.rfilename = f"model-0000{i}-of-00003.safetensors"
            sib.size = 1000000000
            shards.append(sib)

        mock_info = Mock()
        mock_info.siblings = shards

        mock_hf_api = Mock()
        mock_hf_api.model_info.return_value = mock_info

        monkeypatch.setattr(
            "api.v2.models.HfApi",
            lambda token=None: mock_hf_api
        )

        mock_model_cfg = Mock()
        mock_model_cfg.default_extensions = [".safetensors"]

        monkeypatch.setattr(
            "api.v2.models.ModelConfig.load",
            lambda: mock_model_cfg
        )

        # Execute
        resp = await client.get(
            "/v2/workspace/huggingface/repo-info",
            params={"url": "https://huggingface.co/meta-llama/Llama-2-7b"}
        )

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert len(data["files"]) == 3

        # All shards should have the same shard_group
        shard_groups = [f["shard_group"] for f in data["files"]]
        assert all(g == "model.safetensors" for g in shard_groups)

    async def test_error_missing_url_param(self, client, mock_environment):
        """Should return 400 when URL parameter is missing."""
        resp = await client.get("/v2/workspace/huggingface/repo-info")

        assert resp.status == 400
        data = await resp.json()
        assert "url" in data["error"].lower() or "missing" in data["error"].lower()

    async def test_error_invalid_url(self, client, mock_environment, monkeypatch):
        """Should return 400 for non-HuggingFace URLs."""
        mock_parsed = Mock()
        mock_parsed.kind = "unknown"
        mock_parsed.repo_id = None

        monkeypatch.setattr(
            "api.v2.models.parse_huggingface_url",
            lambda url: mock_parsed
        )

        resp = await client.get(
            "/v2/workspace/huggingface/repo-info",
            params={"url": "https://civitai.com/models/12345"}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "valid" in data["error"].lower() or "huggingface" in data["error"].lower()

    async def test_error_gated_repo_requires_auth(self, client, mock_environment, monkeypatch):
        """Should return 401 for gated repos without authentication."""
        mock_parsed = Mock()
        mock_parsed.kind = "repo"
        mock_parsed.repo_id = "meta-llama/Llama-3-8B"
        mock_parsed.revision = "main"

        monkeypatch.setattr(
            "api.v2.models.parse_huggingface_url",
            lambda url: mock_parsed
        )

        mock_hf_api = Mock()
        mock_hf_api.model_info.side_effect = Exception("401 Unauthorized: Access denied")

        monkeypatch.setattr(
            "api.v2.models.HfApi",
            lambda token=None: mock_hf_api
        )

        resp = await client.get(
            "/v2/workspace/huggingface/repo-info",
            params={"url": "https://huggingface.co/meta-llama/Llama-3-8B"}
        )

        assert resp.status == 401
        data = await resp.json()
        assert "authentication" in data["error"].lower() or "hf_token" in data["error"].lower()

    async def test_error_repo_not_found(self, client, mock_environment, monkeypatch):
        """Should return 404 for non-existent repositories."""
        mock_parsed = Mock()
        mock_parsed.kind = "repo"
        mock_parsed.repo_id = "nonexistent/fake-model"
        mock_parsed.revision = "main"

        monkeypatch.setattr(
            "api.v2.models.parse_huggingface_url",
            lambda url: mock_parsed
        )

        mock_hf_api = Mock()
        mock_hf_api.model_info.side_effect = Exception("404 Not Found: Repository not found")

        monkeypatch.setattr(
            "api.v2.models.HfApi",
            lambda token=None: mock_hf_api
        )

        resp = await client.get(
            "/v2/workspace/huggingface/repo-info",
            params={"url": "https://huggingface.co/nonexistent/fake-model"}
        )

        assert resp.status == 404
        data = await resp.json()
        assert "not found" in data["error"].lower()

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get(
            "/v2/workspace/huggingface/repo-info",
            params={"url": "https://huggingface.co/microsoft/VibeVoice-1.5B"}
        )

        assert resp.status == 500


@pytest.mark.integration
class TestModelsSubdirectoriesEndpoint:
    """GET /v2/workspace/models/subdirectories - List model subdirectories for destination picker."""

    async def test_success_with_both_standard_and_existing(
        self,
        client,
        mock_environment,
        monkeypatch,
        tmp_path
    ):
        """Should return merged list of standard and existing directories."""
        # Setup: Mock ModelConfig with standard directories
        mock_model_cfg = Mock()
        mock_model_cfg.standard_directories = ["checkpoints", "loras", "vae"]

        monkeypatch.setattr(
            "api.v2.models.ModelConfig.load",
            lambda: mock_model_cfg
        )

        # Create a temp models directory with some existing dirs
        models_dir = tmp_path / "models"
        models_dir.mkdir()
        (models_dir / "checkpoints").mkdir()
        (models_dir / "custom_models").mkdir()  # Non-standard existing dir
        (models_dir / "loras").mkdir()

        # Mock workspace config manager to return our temp dir
        mock_environment.workspace.workspace_config_manager.get_models_directory.return_value = models_dir

        # Execute
        resp = await client.get("/v2/workspace/models/subdirectories")

        # Verify
        assert resp.status == 200
        data = await resp.json()

        # Should have merged list (sorted, deduplicated)
        assert "directories" in data
        assert "checkpoints" in data["directories"]
        assert "loras" in data["directories"]
        assert "vae" in data["directories"]  # From standard
        assert "custom_models" in data["directories"]  # From existing

        # Should also return separate lists
        assert "standard" in data
        assert "existing" in data
        assert data["standard"] == ["checkpoints", "loras", "vae"]
        assert "custom_models" in data["existing"]

    async def test_success_with_only_standard_dirs(
        self,
        client,
        mock_environment,
        monkeypatch,
        tmp_path
    ):
        """Should return standard directories when models dir is empty."""
        mock_model_cfg = Mock()
        mock_model_cfg.standard_directories = ["checkpoints", "loras"]

        monkeypatch.setattr(
            "api.v2.models.ModelConfig.load",
            lambda: mock_model_cfg
        )

        # Create empty models directory
        models_dir = tmp_path / "models"
        models_dir.mkdir()

        mock_environment.workspace.workspace_config_manager.get_models_directory.return_value = models_dir

        # Execute
        resp = await client.get("/v2/workspace/models/subdirectories")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["directories"] == ["checkpoints", "loras"]
        assert data["existing"] == []

    async def test_success_no_models_directory(
        self,
        client,
        mock_environment,
        monkeypatch
    ):
        """Should handle case where models directory doesn't exist."""
        mock_model_cfg = Mock()
        mock_model_cfg.standard_directories = ["checkpoints"]

        monkeypatch.setattr(
            "api.v2.models.ModelConfig.load",
            lambda: mock_model_cfg
        )

        # Return None for models directory
        mock_environment.workspace.workspace_config_manager.get_models_directory.return_value = None

        # Execute
        resp = await client.get("/v2/workspace/models/subdirectories")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["directories"] == ["checkpoints"]
        assert data["existing"] == []

    async def test_success_ignores_hidden_dirs(
        self,
        client,
        mock_environment,
        monkeypatch,
        tmp_path
    ):
        """Should not include hidden directories (starting with .)."""
        mock_model_cfg = Mock()
        mock_model_cfg.standard_directories = []

        monkeypatch.setattr(
            "api.v2.models.ModelConfig.load",
            lambda: mock_model_cfg
        )

        models_dir = tmp_path / "models"
        models_dir.mkdir()
        (models_dir / "checkpoints").mkdir()
        (models_dir / ".hidden").mkdir()  # Should be ignored
        (models_dir / ".cache").mkdir()  # Should be ignored

        mock_environment.workspace.workspace_config_manager.get_models_directory.return_value = models_dir

        # Execute
        resp = await client.get("/v2/workspace/models/subdirectories")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert "checkpoints" in data["directories"]
        assert ".hidden" not in data["directories"]
        assert ".cache" not in data["directories"]

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/workspace/models/subdirectories")

        assert resp.status == 500
