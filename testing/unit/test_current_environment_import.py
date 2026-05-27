"""Tests for unmanaged current-environment import scanning and copying."""

from __future__ import annotations

import json
import subprocess
from pathlib import Path

from cgm_core.current_environment_import import (
    import_current_environment,
    scan_current_environment,
)


class FakeEnvironment:
    def __init__(self, path: Path, name: str = "imported") -> None:
        self.name = name
        self.comfyui_path = path / "ComfyUI"
        self.comfyui_path.mkdir(parents=True)
        self.linked_nodes: list[tuple[str, Path]] = []
        self.resolved_workflows: list[str] = []
        self.invalidated_workflows: list[str] = []

    def link_development_node(self, identifier: str, source_path: Path, **kwargs) -> None:
        self.linked_nodes.append((identifier, source_path))

    def invalidate_workflow_resolution_cache(self, workflow_name: str) -> None:
        self.invalidated_workflows.append(workflow_name)

    def resolve_workflow(self, name: str, fix: bool = True):
        self.resolved_workflows.append(name)
        return None


class FakeWorkspace:
    def __init__(self, path: Path) -> None:
        self.path = path
        self.created: dict | None = None
        self.environment = FakeEnvironment(path)

    def create_environment(self, **kwargs):
        self.created = kwargs
        return self.environment


def test_scan_current_environment_reports_workflows_and_nodes(temp_dir: Path) -> None:
    source = _make_comfyui_source(temp_dir / "source")
    _make_git_node(source / "custom_nodes" / "git-node")
    _make_local_node(source / "custom_nodes" / "local-node")

    preview = scan_current_environment(source)

    assert preview.source_path == str(source)
    assert preview.total_workflows == 1
    assert preview.workflows[0].name == "demo"

    nodes = {node.name: node for node in preview.custom_nodes}
    assert nodes["git-node"].source_type == "git"
    assert nodes["git-node"].repository == "https://github.com/example/git-node.git"
    assert nodes["git-node"].pinned_commit
    assert nodes["local-node"].source_type == "local"
    assert "manual provenance review" in " ".join(preview.warnings)


def test_scan_current_environment_does_not_inherit_parent_comfyui_git_remote(temp_dir: Path) -> None:
    source = _make_comfyui_source(temp_dir / "source")
    _make_local_node(source / "custom_nodes" / "nested-node")
    _git(source, "init")
    _git(source, "config", "user.email", "test@example.com")
    _git(source, "config", "user.name", "Test User")
    _git(source, "remote", "add", "origin", "https://github.com/comfyanonymous/ComfyUI.git")
    _git(source, "add", "main.py")
    _git(source, "commit", "-m", "comfyui")

    preview = scan_current_environment(source)

    nodes = {node.name: node for node in preview.custom_nodes}
    assert nodes["nested-node"].source_type == "local"
    assert nodes["nested-node"].repository is None


def test_import_current_environment_creates_managed_copy(temp_dir: Path) -> None:
    source = _make_comfyui_source(temp_dir / "source")
    _make_local_node(source / "custom_nodes" / "local-node")
    workspace = FakeWorkspace(temp_dir / "workspace")

    result = import_current_environment(
        workspace,
        name="managed-copy",
        source_path=source,
        torch_backend="cpu",
    )

    assert workspace.created == {
        "name": "managed-copy",
        "python_version": result_python_minor(),
        "comfyui_version": None,
        "torch_backend": "cpu",
    }
    assert result.environment_name == "imported"
    assert result.workflows_copied == 1
    assert result.custom_nodes_copied == 1

    copied_workflow = workspace.environment.comfyui_path / "user" / "default" / "workflows" / "demo.json"
    copied_node = workspace.environment.comfyui_path / "custom_nodes" / "local-node"
    assert copied_workflow.exists()
    assert copied_node.exists()
    assert workspace.environment.linked_nodes == [("local-node", copied_node)]
    assert workspace.environment.invalidated_workflows == ["demo"]
    assert workspace.environment.resolved_workflows == ["demo"]

    # The unmanaged source remains in place.
    assert (source / "user" / "default" / "workflows" / "demo.json").exists()
    assert (source / "custom_nodes" / "local-node").exists()


def _make_comfyui_source(path: Path) -> Path:
    (path / "user" / "default" / "workflows").mkdir(parents=True)
    (path / "custom_nodes").mkdir(parents=True)
    (path / "main.py").write_text("print('comfyui')\n")
    (path / "user" / "default" / "workflows" / "demo.json").write_text(json.dumps({"nodes": []}))
    return path


def _make_local_node(path: Path) -> None:
    path.mkdir(parents=True)
    (path / "__init__.py").write_text("")


def _make_git_node(path: Path) -> None:
    _make_local_node(path)
    _git(path, "init")
    _git(path, "config", "user.email", "test@example.com")
    _git(path, "config", "user.name", "Test User")
    _git(path, "remote", "add", "origin", "https://github.com/example/git-node.git")
    _git(path, "add", "__init__.py")
    _git(path, "commit", "-m", "init")


def _git(cwd: Path, *args: str) -> None:
    subprocess.run(["git", *args], cwd=cwd, check=True, capture_output=True, text=True)


def result_python_minor() -> str:
    import sys

    return f"{sys.version_info.major}.{sys.version_info.minor}"
