"""Unit tests for manager readiness warning collection."""

from dataclasses import dataclass
from pathlib import Path

from comfygit_core.models.manifest import (
    EnvironmentManifestSnapshot,
    ManifestProjectSnapshot,
    ManifestUVSnapshot,
)
from comfygit_core.models.readiness import NodeProvenanceWarning, ReadinessContext
from comfygit_core.models.shared import NodeInfo
from comfygit_core.services.environment_readiness import collect_node_provenance_warnings


@dataclass
class FakeNode:
    name: str
    source: str
    criticality: str = "required"
    version: str | None = "dev"
    repository: str | None = None
    registry_id: str | None = None
    pinned_commit: str | None = None
    branch: str | None = None


def make_context(nodes):
    manifest_nodes = {
        node.name: NodeInfo(
            name=node.name,
            source=node.source,
            criticality=node.criticality,
            version=node.version,
            repository=node.repository,
            registry_id=node.registry_id,
            pinned_commit=node.pinned_commit,
            branch=node.branch,
        )
        for node in nodes
    }
    manifest = EnvironmentManifestSnapshot(
        project=ManifestProjectSnapshot(),
        schema_version=1,
        comfyui_version=None,
        python_version=None,
        manifest_state="local",
        sync_extras=(),
        dependency_groups={},
        uv=ManifestUVSnapshot(),
        nodes=manifest_nodes,
        workflows={},
        models={},
    )
    return ReadinessContext(manifest=manifest, manifest_dir=Path("."))


def test_optional_dev_nodes_are_excluded_from_provenance_warnings():
    context = make_context([
        FakeNode(
            name="local-dev-node",
            source="development",
            criticality="optional",
            repository=None,
            pinned_commit=None,
        )
    ])

    assert collect_node_provenance_warnings(context) == []


def test_required_dev_nodes_without_portable_source_are_reported():
    context = make_context([
        FakeNode(
            name="local-dev-node",
            source="development",
            criticality="required",
            repository=None,
            pinned_commit=None,
        )
    ])

    warnings = collect_node_provenance_warnings(context)

    assert warnings == [
        NodeProvenanceWarning(
            name="local-dev-node",
            source="development",
            criticality="required",
            reason="Development node is missing portable git repository and pinned commit metadata.",
            version="dev",
        )
    ]
