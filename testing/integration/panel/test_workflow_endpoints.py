"""Integration tests for workflow-related panel endpoints."""
import pytest
from unittest.mock import Mock
import sys
from pathlib import Path

# Add helpers to path
helpers_dir = Path(__file__).parent.parent.parent / "helpers"
if str(helpers_dir) not in sys.path:
    sys.path.insert(0, str(helpers_dir))

from mock_helpers import create_mock_resolution, create_mock_resolved_node


@pytest.mark.integration
class TestWorkflowsListEndpoint:
    """GET /v2/comfygit/workflows - List all workflows."""

    async def test_success_with_workflows(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return list of workflows with analysis."""
        # Setup: Mock analyzed workflows
        mock_wf1 = Mock()
        mock_wf1.name = "workflow1.json"
        mock_wf1.has_issues = False
        mock_wf1.sync_state = "synced"
        mock_wf1.uninstalled_count = 0
        mock_wf1.resolution = Mock()
        mock_wf1.resolution.models_unresolved = []
        mock_wf1.resolution.models_ambiguous = []

        mock_wf2 = Mock()
        mock_wf2.name = "workflow2.json"
        mock_wf2.has_issues = True
        mock_wf2.sync_state = "modified"
        mock_wf2.uninstalled_count = 2
        mock_wf2.resolution = Mock()
        mock_wf2.resolution.models_unresolved = [Mock()]
        mock_wf2.resolution.models_ambiguous = []

        mock_env_status.workflow.analyzed_workflows = [mock_wf1, mock_wf2]
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/workflows")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)
        assert len(data) == 2
        assert data[0]["name"] == "workflow1.json"
        assert data[0]["status"] == "synced"
        assert data[1]["name"] == "workflow2.json"
        assert data[1]["status"] == "broken"

    async def test_success_empty_workflows(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return empty list when no workflows."""
        # Setup: No workflows
        mock_env_status.workflow.analyzed_workflows = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/workflows")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)
        assert len(data) == 0

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/workflows")
        assert resp.status == 500


@pytest.mark.integration
class TestWorkflowDetailsEndpoint:
    """GET /v2/comfygit/workflow/{name}/details - Get workflow details."""

    async def test_success_workflow_found(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return workflow details when workflow exists."""
        # Setup: Mock workflow with resolution
        mock_wf = Mock()
        mock_wf.name = "test.json"
        mock_wf.has_issues = False
        mock_wf.sync_state = "synced"
        mock_wf.uninstalled_nodes = []

        # Mock resolution with iterable fields
        mock_wf.resolution = create_mock_resolution(
            models_resolved=[],  # Empty list (iterable)
            models_unresolved=[],
            nodes_resolved=[]
        )

        # Mock dependencies (required for new node aggregation logic)
        mock_dependencies = Mock()
        mock_dependencies.found_models = []  # Empty list (no models)
        mock_wf.dependencies = mock_dependencies

        mock_env_status.workflow.analyzed_workflows = [mock_wf]
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/workflow/test.json/details")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["name"] == "test.json"
        assert data["status"] == "synced"
        assert "models" in data
        assert "nodes" in data
        assert isinstance(data["models"], list)
        assert isinstance(data["nodes"], list)

    async def test_workflow_not_found(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return 404 when workflow doesn't exist."""
        # Setup: Empty workflows
        mock_env_status.workflow.analyzed_workflows = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/workflow/nonexistent.json/details")

        # Verify
        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/workflow/test.json/details")
        assert resp.status == 500

    async def test_aggregates_multiple_nodes_loading_same_model(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should aggregate all nodes that load the same model into loaded_by array.

        When multiple nodes load the same model file (e.g., 3 CheckpointLoaderSimple nodes
        all using the same checkpoint), the workflow details should show all 3 nodes
        in the loaded_by array of that model entry.
        """
        # Setup: Create mock workflow with 3 nodes loading the same model
        mock_wf = Mock()
        mock_wf.name = "test.json"
        mock_wf.has_issues = False
        mock_wf.sync_state = "synced"
        mock_wf.uninstalled_nodes = []

        # Create mock model reference objects - one for each node
        mock_ref_node4 = Mock()
        mock_ref_node4.widget_value = "SD1.5/v1-5-pruned-emaonly.safetensors"
        mock_ref_node4.node_type = "CheckpointLoaderSimple"
        mock_ref_node4.node_id = "4"

        mock_ref_node14 = Mock()
        mock_ref_node14.widget_value = "SD1.5/v1-5-pruned-emaonly.safetensors"
        mock_ref_node14.node_type = "CheckpointLoaderSimple"
        mock_ref_node14.node_id = "14"

        mock_ref_node25 = Mock()
        mock_ref_node25.widget_value = "SD1.5/v1-5-pruned-emaonly.safetensors"
        mock_ref_node25.node_type = "CheckpointLoaderSimple"
        mock_ref_node25.node_id = "25"

        # Create mock resolved model (same model for all 3 nodes)
        mock_model = Mock()
        mock_model.filename = "v1-5-pruned-emaonly.safetensors"
        mock_model.hash = "48835672f5450d12"
        mock_model.file_size = 4265146304
        mock_model.category = "checkpoints"

        # Core library returns ONLY ONE ResolvedModel (deduplicated)
        # but we have 3 raw model references in dependencies
        mock_resolved_model = Mock()
        mock_resolved_model.reference = mock_ref_node4  # Points to FIRST node only
        mock_resolved_model.resolved_model = mock_model
        mock_resolved_model.model_source = None
        mock_resolved_model.is_optional = False
        mock_resolved_model.needs_path_sync = False

        # Mock dependencies - this has ALL 3 references (before deduplication)
        mock_dependencies = Mock()
        mock_dependencies.found_models = [
            mock_ref_node4,
            mock_ref_node14,
            mock_ref_node25
        ]

        # Mock resolution - this has deduplicated models (only 1 entry)
        mock_wf.resolution = create_mock_resolution(
            models_resolved=[mock_resolved_model],
            models_unresolved=[],
            nodes_resolved=[]
        )

        # Add dependencies to workflow
        mock_wf.dependencies = mock_dependencies

        mock_env_status.workflow.analyzed_workflows = [mock_wf]
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/workflow/test.json/details")

        # Verify
        assert resp.status == 200
        data = await resp.json()

        # Should have 1 model entry (deduplicated)
        assert len(data["models"]) == 1

        model = data["models"][0]
        assert model["filename"] == "SD1.5/v1-5-pruned-emaonly.safetensors"
        assert model["hash"] == "48835672f5450d12"
        assert model["status"] == "available"

        # CRITICAL: Should have all 3 nodes in loaded_by array
        assert "loaded_by" in model
        assert len(model["loaded_by"]) == 3, f"Expected 3 nodes in loaded_by, got {len(model['loaded_by'])}: {model['loaded_by']}"

        # Verify all 3 node IDs are present
        node_ids = {node["node_id"] for node in model["loaded_by"]}
        assert node_ids == {"4", "14", "25"}, f"Expected nodes 4, 14, 25, got {node_ids}"

        # Verify all nodes have the correct type
        for node in model["loaded_by"]:
            assert node["node_type"] == "CheckpointLoaderSimple"


@pytest.mark.integration
class TestWorkflowResolveEndpoint:
    """POST /v2/comfygit/workflow/{name}/resolve - Resolve workflow issues."""

    async def test_success_resolution(
        self,
        client,
        mock_environment
    ):
        """Should resolve workflow issues."""
        # Setup: Mock resolve_workflow to return resolution with iterable fields
        mock_result = create_mock_resolution(
            nodes_resolved=[create_mock_resolved_node("comfyui-example-node")],
            nodes_unresolved=["UnknownNode"],
            models_resolved=[],
            models_unresolved=[],
            models_ambiguous=[]
        )
        mock_environment.resolve_workflow.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/workflow/test.json/resolve", json={
            "auto_install": True
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert "workflow" in data
        assert data["workflow"] == "test.json"
        assert "nodes" in data
        assert "models" in data
        assert isinstance(data["nodes"]["auto_installable"], list)
        assert len(data["nodes"]["auto_installable"]) == 1
        assert data["nodes"]["auto_installable"][0]["name"] == "comfyui-example-node"

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/workflow/test.json/resolve", json={})
        assert resp.status == 500


@pytest.mark.integration
class TestWorkflowInstallEndpoint:
    """POST /v2/comfygit/workflow/{name}/install - Install workflow dependencies."""

    async def test_success_install(
        self,
        client,
        mock_environment
    ):
        """Should install workflow dependencies."""
        # Setup: Mock get_uninstalled_nodes to return list of nodes to install
        mock_environment.get_uninstalled_nodes.return_value = ["node1", "node2"]

        # Mock install_node to succeed
        mock_environment.install_node.return_value = None

        # Execute
        resp = await client.post("/v2/comfygit/workflow/test.json/install", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert "nodes_installed" in data
        assert len(data["nodes_installed"]) == 2
        assert "node1" in data["nodes_installed"]
        assert "node2" in data["nodes_installed"]

        # Verify install_node was called for each node
        assert mock_environment.install_node.call_count == 2

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/workflow/test.json/install", json={})
        assert resp.status == 500


# =============================================================================
# Interactive Resolution Wizard Endpoints (NEW)
# =============================================================================

@pytest.mark.integration
class TestWorkflowAnalyzeEndpoint:
    """POST /v2/comfygit/workflow/{name}/analyze - Analyze workflow for wizard."""

    async def test_success_with_all_categories(
        self,
        client,
        mock_environment
    ):
        """Should return categorized nodes and models for the resolution wizard."""
        # Setup mock resolution result with all categories
        mock_resolved_node = Mock()
        mock_resolved_node.node_type = "CheckpointLoaderSimple"
        mock_resolved_node.package_id = "comfyui-core"
        mock_resolved_node.package_data = Mock()
        mock_resolved_node.package_data.display_name = "ComfyUI Core"
        mock_resolved_node.match_confidence = 1.0
        mock_resolved_node.match_type = "exact"

        mock_unresolved_node = Mock()
        mock_unresolved_node.type = "UnknownCustomNode"
        mock_unresolved_node.id = "5"

        mock_ambiguous_node_opt1 = Mock()
        mock_ambiguous_node_opt1.node_type = "AmbiguousNode"
        mock_ambiguous_node_opt1.package_id = "pkg-option-1"
        mock_ambiguous_node_opt1.package_data = Mock()
        mock_ambiguous_node_opt1.package_data.display_name = "Package Option 1"
        mock_ambiguous_node_opt1.match_confidence = 0.9
        mock_ambiguous_node_opt1.match_type = "fuzzy"

        mock_ambiguous_node_opt2 = Mock()
        mock_ambiguous_node_opt2.node_type = "AmbiguousNode"
        mock_ambiguous_node_opt2.package_id = "pkg-option-2"
        mock_ambiguous_node_opt2.package_data = Mock()
        mock_ambiguous_node_opt2.package_data.display_name = "Package Option 2"
        mock_ambiguous_node_opt2.match_confidence = 0.8
        mock_ambiguous_node_opt2.match_type = "fuzzy"

        # Create mock model reference
        mock_model_ref = Mock()
        mock_model_ref.node_id = "4"
        mock_model_ref.node_type = "CheckpointLoaderSimple"
        mock_model_ref.widget_name = "ckpt_name"
        mock_model_ref.widget_value = "SD1.5/model.safetensors"

        mock_resolved_model_data = Mock()
        mock_resolved_model_data.filename = "model.safetensors"
        mock_resolved_model_data.hash = "abc123"
        mock_resolved_model_data.file_size = 4000000000
        mock_resolved_model_data.category = "checkpoints"
        mock_resolved_model_data.relative_path = "SD1.5/model.safetensors"

        mock_resolved_model = Mock()
        mock_resolved_model.workflow = "test.json"
        mock_resolved_model.reference = mock_model_ref
        mock_resolved_model.resolved_model = mock_resolved_model_data
        mock_resolved_model.model_source = None
        mock_resolved_model.match_confidence = 1.0
        mock_resolved_model.match_type = "exact"
        mock_resolved_model.needs_path_sync = False
        mock_resolved_model.is_optional = False

        mock_result = create_mock_resolution(
            nodes_resolved=[mock_resolved_node],
            nodes_unresolved=[mock_unresolved_node],
            nodes_ambiguous=[[mock_ambiguous_node_opt1, mock_ambiguous_node_opt2]],
            models_resolved=[mock_resolved_model],
            models_unresolved=[],
            models_ambiguous=[]
        )
        # analyze_and_resolve_workflow returns (dependencies, result) tuple
        mock_environment.workflow_manager.analyze_and_resolve_workflow.return_value = (Mock(), mock_result)

        # Execute
        resp = await client.post("/v2/comfygit/workflow/test.json/analyze")

        # Verify
        assert resp.status == 200
        data = await resp.json()

        # Check top-level structure
        assert data["workflow"] == "test.json"
        assert "nodes" in data
        assert "models" in data
        assert "stats" in data

        # Check nodes structure
        assert "resolved" in data["nodes"]
        assert "unresolved" in data["nodes"]
        assert "ambiguous" in data["nodes"]
        assert len(data["nodes"]["resolved"]) == 1
        assert len(data["nodes"]["unresolved"]) == 1
        assert len(data["nodes"]["ambiguous"]) == 1

        # Check resolved node format
        resolved_node = data["nodes"]["resolved"][0]
        assert resolved_node["reference"]["node_type"] == "CheckpointLoaderSimple"
        assert resolved_node["package"]["package_id"] == "comfyui-core"
        assert resolved_node["match_confidence"] == 1.0

        # Check unresolved node format
        unresolved_node = data["nodes"]["unresolved"][0]
        assert unresolved_node["reference"]["node_type"] == "UnknownCustomNode"
        assert "reason" in unresolved_node

        # Check ambiguous node format
        ambiguous_node = data["nodes"]["ambiguous"][0]
        assert ambiguous_node["reference"]["node_type"] == "AmbiguousNode"
        assert len(ambiguous_node["options"]) == 2

        # Check models structure
        assert "resolved" in data["models"]
        assert len(data["models"]["resolved"]) == 1

        # Check resolved model format
        resolved_model = data["models"]["resolved"][0]
        assert resolved_model["reference"]["widget_value"] == "SD1.5/model.safetensors"
        assert resolved_model["model"]["filename"] == "model.safetensors"

        # Check stats
        assert data["stats"]["total_nodes"] == 3  # 1 resolved + 1 unresolved + 1 ambiguous
        assert data["stats"]["total_models"] == 1
        assert data["stats"]["needs_user_input"] is True  # Has unresolved and ambiguous

    async def test_success_fully_resolved(self, client, mock_environment):
        """Should return needs_user_input=False when everything is resolved."""
        mock_resolved_node = Mock()
        mock_resolved_node.node_type = "TestNode"
        mock_resolved_node.package_id = "test-pkg"
        mock_resolved_node.package_data = None
        mock_resolved_node.match_confidence = 1.0
        mock_resolved_node.match_type = "exact"

        mock_result = create_mock_resolution(
            nodes_resolved=[mock_resolved_node],
            nodes_unresolved=[],
            nodes_ambiguous=[],
            models_resolved=[],
            models_unresolved=[],
            models_ambiguous=[]
        )
        # analyze_and_resolve_workflow returns (dependencies, result) tuple
        mock_environment.workflow_manager.analyze_and_resolve_workflow.return_value = (Mock(), mock_result)

        resp = await client.post("/v2/comfygit/workflow/test.json/analyze")

        assert resp.status == 200
        data = await resp.json()
        assert data["stats"]["needs_user_input"] is False

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/workflow/test.json/analyze")
        assert resp.status == 500


@pytest.mark.integration
class TestSearchNodesEndpoint:
    """POST /v2/comfygit/workflow/search-nodes - Search node registry."""

    async def test_success_with_results(self, client, mock_environment):
        """Should return matching packages from registry."""
        # Setup mock search results
        mock_match1 = Mock()
        mock_match1.package_id = "comfyui-impact-pack"
        mock_match1.score = 0.95
        mock_match1.confidence = "high"
        mock_match1.package_data = Mock()
        mock_match1.package_data.description = "Impact Pack for ComfyUI"
        mock_match1.package_data.repository = "https://github.com/ltdrdata/ComfyUI-Impact-Pack"

        mock_match2 = Mock()
        mock_match2.package_id = "comfyui-impact-subpack"
        mock_match2.score = 0.7
        mock_match2.confidence = "medium"
        mock_match2.package_data = Mock()
        mock_match2.package_data.description = "Impact Sub Pack"
        mock_match2.package_data.repository = "https://github.com/example/subpack"

        # Mock pyproject.nodes.get_existing
        mock_environment.pyproject = Mock()
        mock_environment.pyproject.nodes = Mock()
        mock_environment.pyproject.nodes.get_existing.return_value = {"comfyui-impact-pack": Mock()}

        # Mock the search function
        mock_environment.workflow_manager.global_node_resolver = Mock()
        mock_environment.workflow_manager.global_node_resolver.search_packages.return_value = [
            mock_match1, mock_match2
        ]

        # Execute
        resp = await client.post(
            "/v2/comfygit/workflow/search-nodes",
            json={"query": "impact", "limit": 10}
        )

        # Verify
        assert resp.status == 200
        data = await resp.json()

        assert "results" in data
        assert "total" in data
        assert len(data["results"]) == 2
        assert data["total"] == 2

        # Check first result
        result1 = data["results"][0]
        assert result1["package_id"] == "comfyui-impact-pack"
        assert result1["match_confidence"] == 0.95
        assert result1["match_type"] == "high"
        assert result1["is_installed"] is True

        # Check second result
        result2 = data["results"][1]
        assert result2["package_id"] == "comfyui-impact-subpack"
        assert result2["is_installed"] is False

    async def test_empty_query_returns_empty(self, client, mock_environment):
        """Should return empty results for empty query."""
        resp = await client.post(
            "/v2/comfygit/workflow/search-nodes",
            json={"query": "", "limit": 10}
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["results"] == []
        assert data["total"] == 0

    async def test_error_invalid_json(self, client, mock_environment):
        """Should return 400 for invalid JSON body."""
        resp = await client.post(
            "/v2/comfygit/workflow/search-nodes",
            data="not json",
            headers={"Content-Type": "application/json"}
        )
        assert resp.status == 400

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post(
            "/v2/comfygit/workflow/search-nodes",
            json={"query": "test"}
        )
        assert resp.status == 500


@pytest.mark.integration
class TestSearchModelsEndpoint:
    """POST /v2/comfygit/workflow/search-models - Search workspace models."""

    async def test_success_with_results(self, client, mock_environment):
        """Should return matching models from workspace."""
        # Setup mock model search results
        mock_model1 = Mock()
        mock_model1.filename = "v1-5-pruned-emaonly.safetensors"
        mock_model1.hash = "abc123def456"
        mock_model1.file_size = 4265146304
        mock_model1.category = "checkpoints"
        mock_model1.relative_path = "SD1.5/v1-5-pruned-emaonly.safetensors"

        mock_match1 = Mock()
        mock_match1.model = mock_model1
        mock_match1.score = 0.9

        mock_model2 = Mock()
        mock_model2.filename = "v1-5-pruned.safetensors"
        mock_model2.hash = "xyz789"
        mock_model2.file_size = 4000000000
        mock_model2.category = "checkpoints"
        mock_model2.relative_path = "SD1.5/v1-5-pruned.safetensors"

        mock_match2 = Mock()
        mock_match2.model = mock_model2
        mock_match2.score = 0.7

        # Mock search_models
        mock_environment.workflow_manager.search_models.return_value = [
            mock_match1, mock_match2
        ]

        # Mock global models for download source info
        mock_environment.pyproject = Mock()
        mock_environment.pyproject.models = Mock()
        mock_global_model = Mock()
        mock_global_model.sources = ["https://example.com/model.safetensors"]
        mock_environment.pyproject.models.get_all.return_value = [mock_global_model]

        # Execute
        resp = await client.post(
            "/v2/comfygit/workflow/search-models",
            json={"query": "v1-5", "limit": 10}
        )

        # Verify
        assert resp.status == 200
        data = await resp.json()

        assert "results" in data
        assert "total" in data
        assert len(data["results"]) == 2

        # Check first result
        result1 = data["results"][0]
        assert result1["filename"] == "v1-5-pruned-emaonly.safetensors"
        assert result1["hash"] == "abc123def456"
        assert result1["size"] == 4265146304
        assert result1["category"] == "checkpoints"
        assert result1["match_confidence"] == 0.9

    async def test_empty_query_returns_empty(self, client, mock_environment):
        """Should return empty results for empty query."""
        resp = await client.post(
            "/v2/comfygit/workflow/search-models",
            json={"query": "", "limit": 10}
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["results"] == []
        assert data["total"] == 0

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post(
            "/v2/comfygit/workflow/search-models",
            json={"query": "test"}
        )
        assert resp.status == 500


@pytest.mark.integration
class TestApplyResolutionEndpoint:
    """POST /v2/comfygit/workflow/{name}/apply-resolution - Apply wizard choices."""

    async def test_success_with_node_install(self, client, mock_environment):
        """Should apply user choices and return installation plan."""
        # Setup mock resolution result
        mock_resolved_node = Mock()
        mock_resolved_node.package_id = "comfyui-impact-pack"
        mock_resolved_node.match_type = "user_confirmed"

        mock_result = create_mock_resolution(
            nodes_resolved=[mock_resolved_node],
            nodes_unresolved=[],
            models_resolved=[],
            models_unresolved=[],
            models_ambiguous=[]
        )
        # Mock analyze_and_resolve_workflow returns tuple (deps, result)
        mock_environment.workflow_manager.analyze_and_resolve_workflow.return_value = (Mock(), mock_result)
        # Mock fix_resolution returns result
        mock_environment.workflow_manager.fix_resolution.return_value = mock_result

        # Mock pyproject to check installed packages
        mock_environment.pyproject = Mock()
        mock_environment.pyproject.nodes = Mock()
        mock_environment.pyproject.nodes.get_existing.return_value = {}  # Nothing installed
        mock_environment.pyproject.workflows = Mock()
        mock_environment.pyproject.workflows.get_all_with_resolutions.return_value = {}

        # Execute
        resp = await client.post(
            "/v2/comfygit/workflow/test.json/apply-resolution",
            json={
                "node_choices": {
                    "UnknownNode": {
                        "action": "install",
                        "package_id": "comfyui-impact-pack"
                    }
                },
                "model_choices": {}
            }
        )

        # Verify
        assert resp.status == 200
        data = await resp.json()

        assert data["status"] == "success"
        assert "nodes_to_install" in data
        assert "models_to_download" in data
        assert "estimated_time_seconds" in data

        # Should have one node to install
        assert "comfyui-impact-pack" in data["nodes_to_install"]

    async def test_success_with_model_download(self, client, mock_environment):
        """Should include models to download in response."""
        # Setup mock model with download intent
        mock_model_ref = Mock()
        mock_model_ref.widget_value = "custom_model.safetensors"

        mock_resolved_model = Mock()
        mock_resolved_model.reference = mock_model_ref
        mock_resolved_model.model_source = "https://example.com/model.safetensors"
        mock_resolved_model.match_type = "download_intent"
        mock_resolved_model.target_path = None
        mock_resolved_model.resolved_model = None

        mock_result = create_mock_resolution(
            nodes_resolved=[],
            nodes_unresolved=[],
            models_resolved=[mock_resolved_model],
            models_unresolved=[],
            models_ambiguous=[]
        )
        # Mock analyze_and_resolve_workflow returns tuple (deps, result)
        mock_environment.workflow_manager.analyze_and_resolve_workflow.return_value = (Mock(), mock_result)
        # Mock fix_resolution returns result
        mock_environment.workflow_manager.fix_resolution.return_value = mock_result

        mock_environment.pyproject = Mock()
        mock_environment.pyproject.nodes = Mock()
        mock_environment.pyproject.nodes.get_existing.return_value = {}
        mock_environment.pyproject.workflows = Mock()
        mock_environment.pyproject.workflows.get_all_with_resolutions.return_value = {}

        # Execute
        resp = await client.post(
            "/v2/comfygit/workflow/test.json/apply-resolution",
            json={
                "node_choices": {},
                "model_choices": {
                    "custom_model.safetensors": {
                        "action": "download",
                        "url": "https://example.com/model.safetensors"
                    }
                }
            }
        )

        # Verify
        assert resp.status == 200
        data = await resp.json()

        assert data["status"] == "success"
        assert len(data["models_to_download"]) == 1
        assert data["models_to_download"][0]["url"] == "https://example.com/model.safetensors"

    async def test_error_invalid_json(self, client, mock_environment):
        """Should return 400 for invalid JSON body."""
        resp = await client.post(
            "/v2/comfygit/workflow/test.json/apply-resolution",
            data="not json",
            headers={"Content-Type": "application/json"}
        )
        assert resp.status == 400

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post(
            "/v2/comfygit/workflow/test.json/apply-resolution",
            json={}
        )
        assert resp.status == 500

    async def test_mark_download_intent_as_optional_keeps_unresolved_status(
        self, client, mock_environment
    ):
        """
        Bug regression test: When marking an existing download intent as optional,
        the model's status MUST remain 'unresolved' (not 'resolved').

        A download intent model has no hash (never downloaded), so setting
        status='resolved' creates an invalid state that violates core invariants.
        """
        # Setup: Create a mock model that represents an existing download intent
        # This is what get_workflow_models() returns for a download intent
        mock_download_intent_model = Mock()
        mock_download_intent_model.filename = "pending_model.safetensors"
        mock_download_intent_model.status = "unresolved"  # Download intent
        mock_download_intent_model.sources = ["https://example.com/model.safetensors"]
        mock_download_intent_model.relative_path = "loras/pending_model.safetensors"
        mock_download_intent_model.criticality = "flexible"
        mock_download_intent_model.hash = None  # No hash - never downloaded

        # Mock pyproject.workflows.get_workflow_models to return our download intent
        mock_environment.pyproject = Mock()
        mock_environment.pyproject.nodes = Mock()
        mock_environment.pyproject.nodes.get_existing.return_value = {}
        mock_environment.pyproject.workflows = Mock()
        mock_environment.pyproject.workflows.get_workflow_models.return_value = [
            mock_download_intent_model
        ]
        mock_environment.pyproject.workflows.get_all_with_resolutions.return_value = {}

        # Track what gets written
        saved_models = []
        def capture_set_workflow_models(name, models):
            saved_models.extend(models)
        mock_environment.pyproject.workflows.set_workflow_models = capture_set_workflow_models

        # Mock workspace for models_dir check
        mock_environment.workspace = Mock()
        mock_environment.workspace.workspace_config_manager = Mock()
        mock_environment.workspace.workspace_config_manager.get_models_directory.return_value = None

        # Mock resolution result (empty - all resolution happens via Path 2)
        mock_result = create_mock_resolution(
            nodes_resolved=[],
            nodes_unresolved=[],
            models_resolved=[],
            models_unresolved=[],
            models_ambiguous=[]
        )
        mock_result.has_issues = False
        mock_environment.workflow_manager.analyze_and_resolve_workflow.return_value = (Mock(), mock_result)

        # Execute: Mark the download intent as optional
        resp = await client.post(
            "/v2/comfygit/workflow/test.json/apply-resolution",
            json={
                "node_choices": {},
                "model_choices": {
                    "pending_model.safetensors": {
                        "action": "optional"
                    }
                }
            }
        )

        # Verify response is successful
        assert resp.status == 200

        # CRITICAL: The model status MUST remain 'unresolved'
        # Setting it to 'resolved' without a hash is invalid
        assert len(saved_models) == 1, "Expected model to be saved"
        saved_model = saved_models[0]
        assert saved_model.status == "unresolved", (
            f"Bug: status should be 'unresolved' but was '{saved_model.status}'. "
            "A download intent marked as optional has no hash, so it cannot be 'resolved'."
        )
        assert saved_model.criticality == "optional", "criticality should be 'optional'"
        assert saved_model.sources == [], "sources should be cleared"
        assert saved_model.relative_path is None, "relative_path should be cleared"


@pytest.mark.integration
class TestApplyResolutionStreamEndpoint:
    """POST /v2/comfygit/workflow/{name}/apply-resolution-stream - Stream resolution progress via SSE."""

    async def test_success_streams_events(self, client, mock_environment):
        """Should stream SSE events for resolution progress."""
        # Setup mock resolution result with no downloads
        mock_result = create_mock_resolution(
            nodes_resolved=[],
            nodes_unresolved=[],
            models_resolved=[],
            models_unresolved=[],
            models_ambiguous=[]
        )
        mock_result.download_results = []

        mock_environment.resolve_workflow.return_value = mock_result
        mock_environment.pyproject = Mock()
        mock_environment.pyproject.nodes = Mock()
        mock_environment.pyproject.nodes.get_existing.return_value = {}

        # Execute
        resp = await client.post(
            "/v2/comfygit/workflow/test.json/apply-resolution-stream",
            json={
                "node_choices": {},
                "model_choices": {}
            }
        )

        # Verify SSE response
        assert resp.status == 200
        assert resp.headers.get("Content-Type") == "text/event-stream"

        # Read response body as SSE events
        body = await resp.text()

        # Should contain done event with success status
        assert "event: done" in body
        assert '"status": "success"' in body

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post(
            "/v2/comfygit/workflow/test.json/apply-resolution-stream",
            json={}
        )
        assert resp.status == 500
