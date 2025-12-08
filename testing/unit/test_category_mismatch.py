"""Unit tests for category mismatch detection feature.

These tests verify that models in the wrong directory (e.g., LoRA in checkpoints/)
are detected and reported as 'category_mismatch' status - a blocking issue.
"""
import sys
from pathlib import Path
from unittest.mock import Mock

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))

from cgm_core.serializers import serialize_workflow_details, serialize_environment_status  # noqa: E402


class TestDetermineModelStatus:
    """Tests for model status determination including category mismatch."""

    def test_category_mismatch_returns_category_mismatch_status(self):
        """When has_category_mismatch is True, status should be 'category_mismatch'.

        This is a BLOCKING issue - the model exists but in the wrong directory
        for the loader node that needs it.
        """
        # Setup: Create a workflow with a resolved model that has category mismatch
        mock_wf = Mock()
        mock_wf.has_issues = True
        mock_wf.sync_state = "synced"
        mock_wf.uninstalled_nodes = []
        mock_wf.resolution = Mock()
        mock_wf.dependencies = Mock()

        # Create model reference
        mock_ref = Mock()
        mock_ref.widget_value = "my_lora.safetensors"
        mock_ref.node_type = "LoraLoader"
        mock_ref.node_id = "5"
        mock_wf.dependencies.found_models = [mock_ref]

        # Create resolved model with category mismatch
        mock_resolved_model = Mock()
        mock_resolved_model.hash = "abc123"
        mock_resolved_model.category = "checkpoints"  # Wrong! Should be loras
        mock_resolved_model.file_size = 1000000
        mock_resolved_model.filename = "my_lora.safetensors"

        mock_resolved = Mock()
        mock_resolved.reference = mock_ref
        mock_resolved.resolved_model = mock_resolved_model
        mock_resolved.model_source = None
        mock_resolved.is_optional = False
        mock_resolved.needs_path_sync = False
        # NEW: Category mismatch flag
        mock_resolved.has_category_mismatch = True
        mock_resolved.expected_categories = ["loras"]
        mock_resolved.actual_category = "checkpoints"

        mock_wf.resolution.models_resolved = [mock_resolved]
        mock_wf.resolution.nodes_resolved = []

        # Execute
        result = serialize_workflow_details(mock_wf, "test.json")

        # Verify
        assert len(result["models"]) == 1
        model = result["models"][0]
        assert model["status"] == "category_mismatch", (
            f"Expected status 'category_mismatch' but got '{model['status']}'. "
            "Category mismatch should be a blocking status."
        )

    def test_category_mismatch_takes_precedence_over_path_mismatch(self):
        """Category mismatch should take precedence over path_mismatch.

        Category mismatch is blocking (model in wrong type directory),
        while path_mismatch is cosmetic (right type, wrong subdirectory).
        """
        mock_wf = Mock()
        mock_wf.has_issues = True
        mock_wf.sync_state = "synced"
        mock_wf.uninstalled_nodes = []
        mock_wf.resolution = Mock()
        mock_wf.dependencies = Mock()

        mock_ref = Mock()
        mock_ref.widget_value = "my_lora.safetensors"
        mock_ref.node_type = "LoraLoader"
        mock_ref.node_id = "5"
        mock_wf.dependencies.found_models = [mock_ref]

        mock_resolved_model = Mock()
        mock_resolved_model.hash = "abc123"
        mock_resolved_model.category = "checkpoints"
        mock_resolved_model.file_size = 1000000
        mock_resolved_model.filename = "my_lora.safetensors"

        mock_resolved = Mock()
        mock_resolved.reference = mock_ref
        mock_resolved.resolved_model = mock_resolved_model
        mock_resolved.model_source = None
        mock_resolved.is_optional = False
        # Both flags set - category_mismatch should win
        mock_resolved.needs_path_sync = True
        mock_resolved.has_category_mismatch = True
        mock_resolved.expected_categories = ["loras"]
        mock_resolved.actual_category = "checkpoints"

        mock_wf.resolution.models_resolved = [mock_resolved]
        mock_wf.resolution.nodes_resolved = []

        result = serialize_workflow_details(mock_wf, "test.json")

        model = result["models"][0]
        assert model["status"] == "category_mismatch", (
            "Category mismatch should take precedence over path_mismatch"
        )

    def test_available_status_when_no_issues(self):
        """Model should be 'available' when resolved with no issues."""
        mock_wf = Mock()
        mock_wf.has_issues = False
        mock_wf.sync_state = "synced"
        mock_wf.uninstalled_nodes = []
        mock_wf.resolution = Mock()
        mock_wf.dependencies = Mock()

        mock_ref = Mock()
        mock_ref.widget_value = "my_lora.safetensors"
        mock_ref.node_type = "LoraLoader"
        mock_ref.node_id = "5"
        mock_wf.dependencies.found_models = [mock_ref]

        mock_resolved_model = Mock()
        mock_resolved_model.hash = "abc123"
        mock_resolved_model.category = "loras"
        mock_resolved_model.file_size = 1000000
        mock_resolved_model.filename = "my_lora.safetensors"

        mock_resolved = Mock()
        mock_resolved.reference = mock_ref
        mock_resolved.resolved_model = mock_resolved_model
        mock_resolved.model_source = None
        mock_resolved.is_optional = False
        mock_resolved.needs_path_sync = False
        mock_resolved.has_category_mismatch = False
        mock_resolved.expected_categories = ["loras"]
        mock_resolved.actual_category = "loras"

        mock_wf.resolution.models_resolved = [mock_resolved]
        mock_wf.resolution.nodes_resolved = []

        result = serialize_workflow_details(mock_wf, "test.json")

        model = result["models"][0]
        assert model["status"] == "available"

    def test_category_mismatch_fields_included_in_serialization(self):
        """Category mismatch details should be included for actionable UI."""
        mock_wf = Mock()
        mock_wf.has_issues = True
        mock_wf.sync_state = "synced"
        mock_wf.uninstalled_nodes = []
        mock_wf.resolution = Mock()
        mock_wf.dependencies = Mock()

        mock_ref = Mock()
        mock_ref.widget_value = "my_lora.safetensors"
        mock_ref.node_type = "LoraLoader"
        mock_ref.node_id = "5"
        mock_wf.dependencies.found_models = [mock_ref]

        mock_resolved_model = Mock()
        mock_resolved_model.hash = "abc123"
        mock_resolved_model.category = "checkpoints"
        mock_resolved_model.file_size = 1000000
        mock_resolved_model.filename = "my_lora.safetensors"

        mock_resolved = Mock()
        mock_resolved.reference = mock_ref
        mock_resolved.resolved_model = mock_resolved_model
        mock_resolved.model_source = None
        mock_resolved.is_optional = False
        mock_resolved.needs_path_sync = False
        mock_resolved.has_category_mismatch = True
        mock_resolved.expected_categories = ["loras"]
        mock_resolved.actual_category = "checkpoints"

        mock_wf.resolution.models_resolved = [mock_resolved]
        mock_wf.resolution.nodes_resolved = []

        result = serialize_workflow_details(mock_wf, "test.json")

        model = result["models"][0]
        # These fields should be present for the UI to show expected vs actual
        assert "has_category_mismatch" in model, "Missing has_category_mismatch field"
        assert "expected_categories" in model, "Missing expected_categories field"
        assert "actual_category" in model, "Missing actual_category field"

        assert model["has_category_mismatch"] is True
        assert model["expected_categories"] == ["loras"]
        assert model["actual_category"] == "checkpoints"


class TestSerializeEnvironmentStatus:
    """Tests for environment status serialization with category mismatch."""

    def test_analyzed_workflow_includes_category_mismatch_fields(self):
        """Analyzed workflow should include category mismatch counts."""
        # Setup mock status
        mock_status = Mock()
        mock_status.git = Mock()
        mock_status.git.current_branch = "main"
        mock_status.git.has_changes = False
        mock_status.git.has_other_changes = False
        mock_status.git.nodes_added = []
        mock_status.git.nodes_removed = []
        mock_status.git.workflow_changes = {}

        mock_status.workflow = Mock()
        mock_status.workflow.sync_status = Mock()
        mock_status.workflow.sync_status.new = set()
        mock_status.workflow.sync_status.modified = set()
        mock_status.workflow.sync_status.deleted = set()
        mock_status.workflow.sync_status.synced = {"test.json"}
        mock_status.workflow.sync_status.total_count = 1

        mock_status.comparison = Mock()
        mock_status.comparison.is_synced = True
        mock_status.comparison.missing_nodes = set()
        mock_status.comparison.extra_nodes = set()
        mock_status.comparison.disabled_nodes = set()
        mock_status.comparison.version_mismatches = {}
        mock_status.comparison.packages_in_sync = True

        mock_status.is_synced = True
        mock_status.missing_models = []

        # Create workflow with category mismatch
        mock_wf = Mock()
        mock_wf.name = "test.json"
        mock_wf.sync_state = "synced"
        mock_wf.has_issues = True
        mock_wf.has_path_sync_issues = False
        mock_wf.uninstalled_nodes = []
        mock_wf.models_needing_path_sync_count = 0
        mock_wf.download_intents_count = 0
        mock_wf.issue_summary = "1 model in wrong directory"
        mock_wf.node_count = 5
        mock_wf.model_count = 2
        # NEW: Category mismatch fields
        mock_wf.has_category_mismatch_issues = True
        mock_wf.models_with_category_mismatch_count = 1

        mock_wf.resolution = Mock()
        mock_wf.resolution.nodes_unresolved = []
        mock_wf.resolution.models_unresolved = []
        mock_wf.resolution.models_ambiguous = []
        mock_wf.resolution.nodes_ambiguous = []

        mock_status.workflow.analyzed_workflows = [mock_wf]

        # Execute
        result = serialize_environment_status(mock_status, "test-env")

        # Verify
        assert len(result["workflows"]["analyzed"]) == 1
        analyzed = result["workflows"]["analyzed"][0]

        # These fields should be present
        assert "has_category_mismatch_issues" in analyzed, "Missing has_category_mismatch_issues"
        assert "models_with_category_mismatch_count" in analyzed, "Missing models_with_category_mismatch_count"

        assert analyzed["has_category_mismatch_issues"] is True
        assert analyzed["models_with_category_mismatch_count"] == 1
        assert analyzed["status"] == "broken", "Workflow with category mismatch should be broken"
