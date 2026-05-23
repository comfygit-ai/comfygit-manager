"""Static checks for the manager backend's comfygit-core import boundary."""

from __future__ import annotations

import ast
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[2]
SERVER_ROOT = REPO_ROOT / "server"

PUBLIC_CORE_MODULES = {
    "comfygit_core",
    "comfygit_core.assets",
    "comfygit_core.git",
    "comfygit_core.models",
    "comfygit_core.runtime",
    "comfygit_core.workflow",
}

TEMPORARY_INTERNAL_CORE_IMPORTS = {
    # Orchestrator bootstrap still creates its own helper venv with UVCommand.
    "comfygit_core.integrations.uv_command",
}


def _server_python_files() -> list[Path]:
    ignored_parts = {".orchestrator_venv", "__pycache__"}
    return [
        path
        for path in sorted(SERVER_ROOT.rglob("*.py"))
        if ignored_parts.isdisjoint(path.parts)
    ]


def _core_import_modules(path: Path) -> list[tuple[int, str]]:
    tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
    imports: list[tuple[int, str]] = []

    for node in ast.walk(tree):
        if isinstance(node, ast.ImportFrom) and node.module:
            if node.module.startswith("comfygit_core"):
                imports.append((node.lineno, node.module))
        elif isinstance(node, ast.Import):
            for alias in node.names:
                if alias.name.startswith("comfygit_core"):
                    imports.append((node.lineno, alias.name))

    return imports


def test_manager_backend_uses_core_public_facades() -> None:
    violations: list[str] = []

    for path in _server_python_files():
        for lineno, module_name in _core_import_modules(path):
            if module_name in PUBLIC_CORE_MODULES:
                continue
            if module_name in TEMPORARY_INTERNAL_CORE_IMPORTS:
                continue
            rel = path.relative_to(REPO_ROOT)
            violations.append(f"{rel}:{lineno}: {module_name}")

    assert not violations, (
        "Manager backend should import ComfyGit Core through public facades. "
        "Unexpected internal imports:\n" + "\n".join(violations)
    )


def test_non_deploy_panel_api_uses_workspace_config_facades() -> None:
    """Non-deploy panel APIs should not reach into Workspace config internals."""
    api_root = SERVER_ROOT / "api" / "v2"
    violations: list[str] = []

    for path in sorted(api_root.rglob("*.py")):
        if path.name == "deploy.py":
            continue

        for lineno, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
            if "workspace_config_manager" in line:
                rel = path.relative_to(REPO_ROOT)
                violations.append(f"{rel}:{lineno}: {line.strip()}")

    assert not violations, (
        "Non-deploy Manager API modules should use Workspace config facades. "
        "Unexpected config repository reach-throughs:\n" + "\n".join(violations)
    )


def test_panel_api_uses_workspace_model_index_facades() -> None:
    """Panel APIs should not reach into model repositories or download managers."""
    api_root = SERVER_ROOT / "api" / "v2"
    forbidden = (
        "workspace.model_repository",
        "workflow_manager.model_repository",
        "workspace.model_downloader",
    )
    violations: list[str] = []

    for path in sorted(api_root.rglob("*.py")):
        for lineno, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
            if any(token in line for token in forbidden):
                rel = path.relative_to(REPO_ROOT)
                violations.append(f"{rel}:{lineno}: {line.strip()}")

    assert not violations, (
        "Manager API modules should use Workspace model-index facades. "
        "Unexpected model repository reach-throughs:\n" + "\n".join(violations)
    )
