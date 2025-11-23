"""
Unit tests for ComfyGit Panel model status determination logic.

Tests the core logic for determining model status (available, missing, downloadable, path_mismatch)
in workflow details and environment models endpoints.
"""

import pytest
from unittest.mock import Mock
from dataclasses import dataclass


# Mock data structures matching core library
@dataclass
class MockModelWithLocation:
    """Mock ModelWithLocation from core library."""
    filename: str
    hash: str
    file_size: int
    category: str


@dataclass
class MockWorkflowNodeWidgetRef:
    """Mock WorkflowNodeWidgetRef from core library."""
    widget_value: str  # Filename
    node_type: str


@dataclass
class MockResolvedModel:
    """Mock ResolvedModel from core library."""
    reference: MockWorkflowNodeWidgetRef
    resolved_model: MockModelWithLocation | None
    model_source: str | None
    is_optional: bool
    needs_path_sync: bool


@dataclass
class MockMissingModelInfo:
    """Mock MissingModelInfo from core library."""
    filename: str
    required_by: list  # List of workflow names


def determine_model_status(resolved_model: MockResolvedModel) -> str:
    """
    Determine model status from ResolvedModel.

    Status hierarchy (checked in order):
    1. path_mismatch - Model exists but workflow path doesn't match
    2. available - Model exists locally
    3. downloadable - Not local but has download source
    4. missing - Neither local nor downloadable
    """
    if resolved_model.resolved_model is not None:
        if resolved_model.needs_path_sync:
            return "path_mismatch"
        return "available"
    elif resolved_model.model_source is not None:
        return "downloadable"
    else:
        return "missing"


@pytest.mark.unit
class TestModelStatusDetermination:
    """Test model status determination logic."""

    def test_available_status(self):
        """Should return 'available' when resolved_model exists and path matches."""
        model = MockResolvedModel(
            reference=MockWorkflowNodeWidgetRef(
                widget_value="checkpoint.safetensors",
                node_type="CheckpointLoaderSimple"
            ),
            resolved_model=MockModelWithLocation(
                filename="checkpoint.safetensors",
                hash="abc123",
                file_size=6500000000,
                category="checkpoints"
            ),
            model_source=None,
            is_optional=False,
            needs_path_sync=False
        )

        status = determine_model_status(model)
        assert status == "available", "Model with resolved_model and no path sync should be 'available'"

    def test_missing_status(self):
        """Should return 'missing' when resolved_model is None and no source."""
        model = MockResolvedModel(
            reference=MockWorkflowNodeWidgetRef(
                widget_value="missing.safetensors",
                node_type="CheckpointLoaderSimple"
            ),
            resolved_model=None,
            model_source=None,
            is_optional=False,
            needs_path_sync=False
        )

        status = determine_model_status(model)
        assert status == "missing", "Model with no resolved_model and no source should be 'missing'"

    def test_downloadable_status(self):
        """Should return 'downloadable' when model_source exists but no resolved_model."""
        model = MockResolvedModel(
            reference=MockWorkflowNodeWidgetRef(
                widget_value="model.safetensors",
                node_type="CheckpointLoaderSimple"
            ),
            resolved_model=None,
            model_source="https://civitai.com/api/download/models/12345",
            is_optional=False,
            needs_path_sync=False
        )

        status = determine_model_status(model)
        assert status == "downloadable", "Model with source but no local should be 'downloadable'"

    def test_path_mismatch_status(self):
        """Should return 'path_mismatch' when needs_path_sync is True."""
        model = MockResolvedModel(
            reference=MockWorkflowNodeWidgetRef(
                widget_value="model.safetensors",
                node_type="LoraLoader"
            ),
            resolved_model=MockModelWithLocation(
                filename="model.safetensors",
                hash="def456",
                file_size=144000000,
                category="loras"
            ),
            model_source=None,
            is_optional=False,
            needs_path_sync=True
        )

        status = determine_model_status(model)
        assert status == "path_mismatch", "Model with needs_path_sync should be 'path_mismatch'"

    def test_path_mismatch_takes_precedence_over_available(self):
        """Path mismatch should take precedence even when model exists."""
        model = MockResolvedModel(
            reference=MockWorkflowNodeWidgetRef(
                widget_value="model.safetensors",
                node_type="CheckpointLoaderSimple"
            ),
            resolved_model=MockModelWithLocation(
                filename="model.safetensors",
                hash="ghi789",
                file_size=6500000000,
                category="checkpoints"
            ),
            model_source="https://example.com/model.safetensors",
            is_optional=True,
            needs_path_sync=True  # Path mismatch
        )

        status = determine_model_status(model)
        assert status == "path_mismatch", "path_mismatch should take precedence over available"


def transform_workflow_models(resolution):
    """
    Transform workflow resolution models into API response format.

    Processes both models_resolved and models_unresolved.
    """
    models = []

    # Process resolved models
    for model in resolution.models_resolved:
        status = determine_model_status(model)

        models.append({
            "filename": model.reference.widget_value,
            "hash": model.resolved_model.hash if model.resolved_model else "",
            "type": model.resolved_model.category if model.resolved_model else "unknown",
            "size": model.resolved_model.file_size if model.resolved_model else 0,
            "status": status,
            "importance": "required" if not model.is_optional else "optional",
            "node_type": model.reference.node_type
        })

    # Process unresolved models (always missing)
    for model_ref in resolution.models_unresolved:
        models.append({
            "filename": model_ref.widget_value,
            "hash": "",
            "type": "unknown",
            "size": 0,
            "status": "missing",
            "importance": "required",  # Unresolved are always required
            "node_type": model_ref.node_type
        })

    return models


@pytest.mark.unit
class TestWorkflowModelTransformation:
    """Test transformation of resolution result to API response."""

    def test_transforms_resolved_models(self):
        """Should transform resolved models with correct status."""
        @dataclass
        class MockResolution:
            models_resolved: list
            models_unresolved: list

        resolution = MockResolution(
            models_resolved=[
                MockResolvedModel(
                    reference=MockWorkflowNodeWidgetRef(
                        widget_value="checkpoint.safetensors",
                        node_type="CheckpointLoaderSimple"
                    ),
                    resolved_model=MockModelWithLocation(
                        filename="checkpoint.safetensors",
                        hash="abc123",
                        file_size=6500000000,
                        category="checkpoints"
                    ),
                    model_source=None,
                    is_optional=False,
                    needs_path_sync=False
                )
            ],
            models_unresolved=[]
        )

        models = transform_workflow_models(resolution)

        assert len(models) == 1
        assert models[0]["filename"] == "checkpoint.safetensors"
        assert models[0]["status"] == "available"
        assert models[0]["hash"] == "abc123"
        assert models[0]["importance"] == "required"

    def test_transforms_unresolved_models(self):
        """Should include unresolved models with missing status."""
        @dataclass
        class MockResolution:
            models_resolved: list
            models_unresolved: list

        resolution = MockResolution(
            models_resolved=[],
            models_unresolved=[
                MockWorkflowNodeWidgetRef(
                    widget_value="missing.safetensors",
                    node_type="CheckpointLoaderSimple"
                )
            ]
        )

        models = transform_workflow_models(resolution)

        assert len(models) == 1
        assert models[0]["filename"] == "missing.safetensors"
        assert models[0]["status"] == "missing"
        assert models[0]["hash"] == ""
        assert models[0]["type"] == "unknown"

    def test_includes_both_resolved_and_unresolved(self):
        """Should include both resolved and unresolved models."""
        @dataclass
        class MockResolution:
            models_resolved: list
            models_unresolved: list

        resolution = MockResolution(
            models_resolved=[
                MockResolvedModel(
                    reference=MockWorkflowNodeWidgetRef(
                        widget_value="available.safetensors",
                        node_type="LoraLoader"
                    ),
                    resolved_model=MockModelWithLocation(
                        filename="available.safetensors",
                        hash="def456",
                        file_size=144000000,
                        category="loras"
                    ),
                    model_source=None,
                    is_optional=True,
                    needs_path_sync=False
                )
            ],
            models_unresolved=[
                MockWorkflowNodeWidgetRef(
                    widget_value="missing.safetensors",
                    node_type="CheckpointLoaderSimple"
                )
            ]
        )

        models = transform_workflow_models(resolution)

        assert len(models) == 2
        available = next(m for m in models if m["filename"] == "available.safetensors")
        missing = next(m for m in models if m["filename"] == "missing.safetensors")

        assert available["status"] == "available"
        assert missing["status"] == "missing"


def aggregate_environment_models(env_status):
    """
    Aggregate models across workflows for environment endpoint.

    Combines models_resolved from all workflows and status.missing_models.
    """
    models_map = {}

    # Process models from analyzed workflows
    for wf in env_status.workflow.analyzed_workflows:
        for resolved_model in wf.resolution.models_resolved:
            model_ref = resolved_model.resolved_model
            if not model_ref:
                continue

            model_hash = model_ref.hash

            if model_hash not in models_map:
                status = determine_model_status(resolved_model)

                models_map[model_hash] = {
                    "filename": model_ref.filename,
                    "hash": model_hash,
                    "type": model_ref.category,
                    "size": model_ref.file_size,
                    "status": status,
                    "used_in_workflows": []
                }

            if wf.name not in models_map[model_hash]["used_in_workflows"]:
                models_map[model_hash]["used_in_workflows"].append(wf.name)

    # Process missing models
    for missing in env_status.missing_models:
        # Use filename as key for missing models (no hash)
        key = f"missing_{missing.filename}"

        if key not in models_map:
            models_map[key] = {
                "filename": missing.filename,
                "hash": "",
                "type": "unknown",
                "size": 0,
                "status": "missing",
                "used_in_workflows": missing.required_by.copy()
            }

    return sorted(models_map.values(), key=lambda m: m["filename"])


@pytest.mark.unit
class TestEnvironmentModelAggregation:
    """Test aggregation of models across workflows for environment endpoint."""

    def test_aggregates_available_models(self):
        """Should aggregate available models from workflows."""
        @dataclass
        class MockWorkflow:
            name: str
            resolution: object

        @dataclass
        class MockResolution:
            models_resolved: list

        @dataclass
        class MockDetailedWorkflowStatus:
            analyzed_workflows: list

        @dataclass
        class MockEnvStatus:
            workflow: object
            missing_models: list

        resolution = MockResolution(
            models_resolved=[
                MockResolvedModel(
                    reference=MockWorkflowNodeWidgetRef(
                        widget_value="model.safetensors",
                        node_type="CheckpointLoaderSimple"
                    ),
                    resolved_model=MockModelWithLocation(
                        filename="model.safetensors",
                        hash="abc123",
                        file_size=6500000000,
                        category="checkpoints"
                    ),
                    model_source=None,
                    is_optional=False,
                    needs_path_sync=False
                )
            ]
        )

        env_status = MockEnvStatus(
            workflow=MockDetailedWorkflowStatus(
                analyzed_workflows=[
                    MockWorkflow(name="workflow_a", resolution=resolution)
                ]
            ),
            missing_models=[]
        )

        models = aggregate_environment_models(env_status)

        assert len(models) == 1
        assert models[0]["filename"] == "model.safetensors"
        assert models[0]["status"] == "available"
        assert models[0]["used_in_workflows"] == ["workflow_a"]

    def test_includes_missing_models(self):
        """Should include missing models from env_status.missing_models."""
        @dataclass
        class MockWorkflow:
            name: str
            resolution: object

        @dataclass
        class MockResolution:
            models_resolved: list

        @dataclass
        class MockDetailedWorkflowStatus:
            analyzed_workflows: list

        @dataclass
        class MockEnvStatus:
            workflow: object
            missing_models: list

        env_status = MockEnvStatus(
            workflow=MockDetailedWorkflowStatus(
                analyzed_workflows=[
                    MockWorkflow(
                        name="workflow_a",
                        resolution=MockResolution(models_resolved=[])
                    )
                ]
            ),
            missing_models=[
                MockMissingModelInfo(
                    filename="missing.safetensors",
                    required_by=["workflow_a", "workflow_b"]
                )
            ]
        )

        models = aggregate_environment_models(env_status)

        assert len(models) == 1
        assert models[0]["filename"] == "missing.safetensors"
        assert models[0]["status"] == "missing"
        assert models[0]["hash"] == ""
        assert set(models[0]["used_in_workflows"]) == {"workflow_a", "workflow_b"}

    def test_deduplicates_models_across_workflows(self):
        """Should deduplicate same model used in multiple workflows."""
        @dataclass
        class MockWorkflow:
            name: str
            resolution: object

        @dataclass
        class MockResolution:
            models_resolved: list

        @dataclass
        class MockDetailedWorkflowStatus:
            analyzed_workflows: list

        @dataclass
        class MockEnvStatus:
            workflow: object
            missing_models: list

        same_model = MockModelWithLocation(
            filename="shared.safetensors",
            hash="def456",
            file_size=144000000,
            category="loras"
        )

        resolution_a = MockResolution(
            models_resolved=[
                MockResolvedModel(
                    reference=MockWorkflowNodeWidgetRef(
                        widget_value="shared.safetensors",
                        node_type="LoraLoader"
                    ),
                    resolved_model=same_model,
                    model_source=None,
                    is_optional=False,
                    needs_path_sync=False
                )
            ]
        )

        resolution_b = MockResolution(
            models_resolved=[
                MockResolvedModel(
                    reference=MockWorkflowNodeWidgetRef(
                        widget_value="shared.safetensors",
                        node_type="LoraLoader"
                    ),
                    resolved_model=same_model,
                    model_source=None,
                    is_optional=False,
                    needs_path_sync=False
                )
            ]
        )

        env_status = MockEnvStatus(
            workflow=MockDetailedWorkflowStatus(
                analyzed_workflows=[
                    MockWorkflow(name="workflow_a", resolution=resolution_a),
                    MockWorkflow(name="workflow_b", resolution=resolution_b)
                ]
            ),
            missing_models=[]
        )

        models = aggregate_environment_models(env_status)

        assert len(models) == 1, "Should deduplicate same model"
        assert models[0]["hash"] == "def456"
        assert set(models[0]["used_in_workflows"]) == {"workflow_a", "workflow_b"}

    def test_combines_available_and_missing_models(self):
        """Should include both available and missing models."""
        @dataclass
        class MockWorkflow:
            name: str
            resolution: object

        @dataclass
        class MockResolution:
            models_resolved: list

        @dataclass
        class MockDetailedWorkflowStatus:
            analyzed_workflows: list

        @dataclass
        class MockEnvStatus:
            workflow: object
            missing_models: list

        resolution = MockResolution(
            models_resolved=[
                MockResolvedModel(
                    reference=MockWorkflowNodeWidgetRef(
                        widget_value="available.safetensors",
                        node_type="CheckpointLoaderSimple"
                    ),
                    resolved_model=MockModelWithLocation(
                        filename="available.safetensors",
                        hash="abc123",
                        file_size=6500000000,
                        category="checkpoints"
                    ),
                    model_source=None,
                    is_optional=False,
                    needs_path_sync=False
                )
            ]
        )

        env_status = MockEnvStatus(
            workflow=MockDetailedWorkflowStatus(
                analyzed_workflows=[
                    MockWorkflow(name="workflow_a", resolution=resolution)
                ]
            ),
            missing_models=[
                MockMissingModelInfo(
                    filename="missing.safetensors",
                    required_by=["workflow_b"]
                )
            ]
        )

        models = aggregate_environment_models(env_status)

        assert len(models) == 2
        available = next(m for m in models if m["hash"] == "abc123")
        missing = next(m for m in models if m["hash"] == "")

        assert available["status"] == "available"
        assert available["filename"] == "available.safetensors"
        assert missing["status"] == "missing"
        assert missing["filename"] == "missing.safetensors"
