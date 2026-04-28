"""Unit tests for manager readiness warning collection."""

from dataclasses import dataclass
from types import SimpleNamespace

from cgm_core.readiness import _collect_node_provenance_warnings


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


class FakeNodesManager:
    def __init__(self, nodes):
        self._nodes = nodes

    def get_existing(self):
        return {node.name: node for node in self._nodes}


def make_env(nodes):
    return SimpleNamespace(
        pyproject=SimpleNamespace(
            nodes=FakeNodesManager(nodes),
        )
    )


def test_optional_dev_nodes_are_excluded_from_provenance_warnings():
    env = make_env([
        FakeNode(
            name="local-dev-node",
            source="development",
            criticality="optional",
            repository=None,
            pinned_commit=None,
        )
    ])

    assert _collect_node_provenance_warnings(env) == []


def test_required_dev_nodes_without_portable_source_are_reported():
    env = make_env([
        FakeNode(
            name="local-dev-node",
            source="development",
            criticality="required",
            repository=None,
            pinned_commit=None,
        )
    ])

    warnings = _collect_node_provenance_warnings(env)

    assert len(warnings) == 1
    assert warnings[0]["name"] == "local-dev-node"
    assert warnings[0]["criticality"] == "required"
    assert warnings[0]["source"] == "development"

