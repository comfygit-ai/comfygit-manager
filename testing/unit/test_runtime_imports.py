"""Tests for live custom-node runtime import reporting."""

from __future__ import annotations

import sys
from types import SimpleNamespace

from cgm_core.runtime_imports import collect_runtime_import_report


def _node(name: str, registry_id: str | None = None, criticality: str = "required"):
    return SimpleNamespace(
        name=name,
        registry_id=registry_id or name,
        criticality=criticality,
    )


def _status_for_usage(package_id: str, workflow_name: str = "workflow.json"):
    resolved_node = SimpleNamespace(package_id=package_id)
    workflow = SimpleNamespace(
        name=workflow_name,
        resolution=SimpleNamespace(nodes_resolved=[resolved_node]),
    )
    return SimpleNamespace(
        workflow=SimpleNamespace(analyzed_workflows=[workflow]),
        comparison=SimpleNamespace(missing_nodes=set()),
    )


def test_collect_runtime_import_report_detects_missing_loaded_module(tmp_path, monkeypatch):
    custom_nodes_path = tmp_path / "custom_nodes"
    custom_nodes_path.mkdir()
    (custom_nodes_path / "ComfyUI-FL-VoxCPM").mkdir()

    monkeypatch.setitem(
        sys.modules,
        "nodes",
        SimpleNamespace(LOADED_MODULE_DIRS={"ComfyGitManager": str(custom_nodes_path / "ComfyGitManager")}),
    )

    env = SimpleNamespace(custom_nodes_path=custom_nodes_path)
    report = collect_runtime_import_report(
        env,
        nodes=[_node("ComfyUI-FL-VoxCPM")],
        status=_status_for_usage("ComfyUI-FL-VoxCPM", "VoxCPM V2 TTS"),
    )

    assert report.available is True
    assert report.failed_count == 1
    failure = report.failures[0]
    assert failure.name == "ComfyUI-FL-VoxCPM"
    assert failure.used_in_workflows == ["VoxCPM V2 TTS"]
    assert failure.to_runtime_import_dict()["status"] == "failed"


def test_collect_runtime_import_report_ignores_loaded_module(tmp_path, monkeypatch):
    custom_nodes_path = tmp_path / "custom_nodes"
    node_path = custom_nodes_path / "LoadedNode"
    node_path.mkdir(parents=True)

    monkeypatch.setitem(
        sys.modules,
        "nodes",
        SimpleNamespace(LOADED_MODULE_DIRS={"LoadedNode": str(node_path)}),
    )

    env = SimpleNamespace(custom_nodes_path=custom_nodes_path)
    report = collect_runtime_import_report(
        env,
        nodes=[_node("LoadedNode")],
        status=SimpleNamespace(
            workflow=SimpleNamespace(analyzed_workflows=[]),
            comparison=SimpleNamespace(missing_nodes=set()),
        ),
    )

    assert report.available is True
    assert report.failures == []


def test_collect_runtime_import_report_does_not_guess_when_registry_unavailable(tmp_path, monkeypatch):
    monkeypatch.delitem(sys.modules, "nodes", raising=False)

    custom_nodes_path = tmp_path / "custom_nodes"
    (custom_nodes_path / "InstalledNode").mkdir(parents=True)

    env = SimpleNamespace(custom_nodes_path=custom_nodes_path)
    report = collect_runtime_import_report(
        env,
        nodes=[_node("InstalledNode")],
        status=None,
    )

    assert report.available is False
    assert report.failures == []
