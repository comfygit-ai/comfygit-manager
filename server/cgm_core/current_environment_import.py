"""Best-effort import of the currently running unmanaged ComfyUI install."""

from __future__ import annotations

import platform
import shutil
import subprocess
import sys
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Protocol


IGNORED_CUSTOM_NODE_DIRS = {
    "__pycache__",
    "comfygit-manager",
}

WORKFLOW_SOURCE_DIRS = (
    Path("user") / "default" / "workflows",
    Path("workflows"),
)


class CurrentEnvironmentImportCallbacks(Protocol):
    """Subset of existing import callbacks used by current-environment import."""

    def on_phase(self, phase: str, description: str) -> None: ...
    def on_workflow_copied(self, workflow_name: str) -> None: ...
    def on_node_installed(self, node_name: str) -> None: ...
    def on_error(self, error: str) -> None: ...


@dataclass(frozen=True)
class CurrentWorkflowScan:
    name: str
    path: str

    def to_dict(self) -> dict:
        return asdict(self)


@dataclass(frozen=True)
class CurrentCustomNodeScan:
    name: str
    path: str
    source_type: str
    repository: str | None = None
    branch: str | None = None
    pinned_commit: str | None = None
    warning: str | None = None

    def to_dict(self) -> dict:
        return asdict(self)


@dataclass(frozen=True)
class CurrentEnvironmentPreview:
    source_path: str
    python_version: str
    comfyui_version: str | None
    comfyui_commit: str | None
    workflows: list[CurrentWorkflowScan] = field(default_factory=list)
    custom_nodes: list[CurrentCustomNodeScan] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)

    @property
    def total_workflows(self) -> int:
        return len(self.workflows)

    @property
    def total_custom_nodes(self) -> int:
        return len(self.custom_nodes)

    def to_dict(self) -> dict:
        data = asdict(self)
        data["total_workflows"] = self.total_workflows
        data["total_custom_nodes"] = self.total_custom_nodes
        return data


@dataclass(frozen=True)
class CurrentEnvironmentImportResult:
    environment_name: str
    workflows_copied: int
    custom_nodes_copied: int
    warnings: list[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return asdict(self)


def detect_current_comfyui_path(source_path: str | Path | None = None) -> Path:
    """Return the current ComfyUI root, validating the expected directory shape."""
    candidates: list[Path] = []
    if source_path:
        candidates.append(Path(source_path).expanduser())
    else:
        candidates.extend([Path.cwd(), Path(sys.argv[0]).expanduser().parent])

    for candidate in candidates:
        path = candidate.resolve()
        if _looks_like_comfyui_root(path):
            return path

    checked = ", ".join(str(candidate) for candidate in candidates)
    raise ValueError(
        f"Could not find the current ComfyUI root from {checked}. Expected "
        "main.py, custom_nodes/, or user/default/workflows/."
    )


def scan_current_environment(source_path: str | Path | None = None) -> CurrentEnvironmentPreview:
    """Scan the unmanaged ComfyUI install without mutating it."""
    comfyui_path = detect_current_comfyui_path(source_path)
    warnings: list[str] = []

    workflows = _scan_workflows(comfyui_path)
    custom_nodes = _scan_custom_nodes(comfyui_path, warnings)
    tag, commit = _detect_comfyui_git_version(comfyui_path)

    if not workflows:
        warnings.append("No saved workflow JSON files were found.")
    if not custom_nodes:
        warnings.append("No custom-node directories were found.")

    return CurrentEnvironmentPreview(
        source_path=str(comfyui_path),
        python_version=f"{sys.version_info.major}.{sys.version_info.minor}",
        comfyui_version=tag,
        comfyui_commit=commit,
        workflows=workflows,
        custom_nodes=custom_nodes,
        warnings=warnings,
    )


def import_current_environment(
    workspace,
    *,
    name: str,
    source_path: str | Path | None = None,
    torch_backend: str = "auto",
    callbacks: CurrentEnvironmentImportCallbacks | None = None,
) -> CurrentEnvironmentImportResult:
    """Create a managed environment from the currently running ComfyUI install."""
    preview = scan_current_environment(source_path)
    warnings = list(preview.warnings)

    _phase(callbacks, "clone_comfyui", f"Creating managed environment '{name}'...")
    env = workspace.create_environment(
        name=name,
        python_version=preview.python_version,
        comfyui_version=preview.comfyui_version,
        torch_backend=torch_backend,
    )

    workflows_copied = 0
    custom_nodes_copied = 0

    _phase(callbacks, "copy_workflows", "Copying saved workflows...")
    for workflow in preview.workflows:
        src = Path(workflow.path)
        dst = env.comfyui_path / "user" / "default" / "workflows" / src.name
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        workflows_copied += 1
        if callbacks:
            callbacks.on_workflow_copied(src.stem)

    _phase(callbacks, "sync_nodes", "Copying custom nodes...")
    target_custom_nodes = env.comfyui_path / "custom_nodes"
    target_custom_nodes.mkdir(parents=True, exist_ok=True)

    for node in preview.custom_nodes:
        src = Path(node.path)
        dst = target_custom_nodes / src.name
        try:
            if dst.exists() or dst.is_symlink():
                warnings.append(f"Skipped custom node '{src.name}' because it already exists in the managed environment.")
                continue

            shutil.copytree(src, dst, symlinks=True, ignore=_copy_ignore)
            custom_nodes_copied += 1
            if callbacks:
                callbacks.on_node_installed(src.name)

            try:
                env.link_development_node(
                    src.name,
                    dst,
                    name=src.name,
                    replace_existing=True,
                    force=True,
                )
            except Exception as exc:  # best-effort manifest seeding
                message = f"Copied custom node '{src.name}' but could not register it in the manifest: {exc}"
                warnings.append(message)
                _warn(callbacks, message)
        except Exception as exc:
            message = f"Skipped custom node '{src.name}': {exc}"
            warnings.append(message)
            _warn(callbacks, message)

    _phase(callbacks, "resolve_models", "Resolving copied workflows...")
    for workflow in preview.workflows:
        try:
            env.invalidate_workflow_resolution_cache(workflow.name)
            env.resolve_workflow(workflow.name, fix=False)
        except Exception as exc:  # keep import usable; status will surface issues
            message = f"Copied workflow '{workflow.name}' but could not resolve it automatically: {exc}"
            warnings.append(message)
            _warn(callbacks, message)

    _phase(callbacks, "finalize", "Finalizing imported environment...")
    return CurrentEnvironmentImportResult(
        environment_name=env.name,
        workflows_copied=workflows_copied,
        custom_nodes_copied=custom_nodes_copied,
        warnings=warnings,
    )


def _looks_like_comfyui_root(path: Path) -> bool:
    return (
        (path / "main.py").exists()
        or (path / "custom_nodes").is_dir()
        or (path / "user" / "default" / "workflows").is_dir()
    )


def _scan_workflows(comfyui_path: Path) -> list[CurrentWorkflowScan]:
    seen: set[str] = set()
    workflows: list[CurrentWorkflowScan] = []

    for relative_dir in WORKFLOW_SOURCE_DIRS:
        workflow_dir = comfyui_path / relative_dir
        if not workflow_dir.is_dir():
            continue
        for path in sorted(workflow_dir.glob("*.json")):
            if path.name in seen:
                continue
            seen.add(path.name)
            workflows.append(CurrentWorkflowScan(name=path.stem, path=str(path)))

    return workflows


def _scan_custom_nodes(comfyui_path: Path, warnings: list[str]) -> list[CurrentCustomNodeScan]:
    custom_nodes_dir = comfyui_path / "custom_nodes"
    if not custom_nodes_dir.is_dir():
        return []

    nodes: list[CurrentCustomNodeScan] = []
    for path in sorted(custom_nodes_dir.iterdir(), key=lambda item: item.name.lower()):
        if not _is_importable_custom_node(path):
            continue

        is_git_checkout = _is_git_checkout(path)
        repository = _git_output(path, "remote", "get-url", "origin") if is_git_checkout else None
        commit = _git_output(path, "rev-parse", "HEAD") if is_git_checkout else None
        branch = _git_output(path, "branch", "--show-current") if is_git_checkout else None
        source_type = "git" if repository else "local"
        warning = None
        if source_type == "local":
            warning = "No Git remote detected; copied as a local development node."
            warnings.append(f"Custom node '{path.name}' has no Git remote and will need manual provenance review.")

        nodes.append(
            CurrentCustomNodeScan(
                name=path.name,
                path=str(path),
                source_type=source_type,
                repository=repository,
                branch=branch,
                pinned_commit=commit,
                warning=warning,
            )
        )

    return nodes


def _is_importable_custom_node(path: Path) -> bool:
    if path.name in IGNORED_CUSTOM_NODE_DIRS:
        return False
    if path.name.startswith(".") or path.name.endswith(".disabled"):
        return False
    return path.is_dir()


def _detect_comfyui_git_version(comfyui_path: Path) -> tuple[str | None, str | None]:
    tag = _git_output(comfyui_path, "describe", "--tags", "--exact-match", "HEAD")
    commit = _git_output(comfyui_path, "rev-parse", "HEAD")
    return tag, commit


def _is_git_checkout(path: Path) -> bool:
    root = _git_output(path, "rev-parse", "--show-toplevel")
    if not root:
        return False
    try:
        return Path(root).resolve() == path.resolve()
    except OSError:
        return False


def _git_output(cwd: Path, *args: str) -> str | None:
    try:
        result = subprocess.run(
            ["git", *args],
            cwd=str(cwd),
            capture_output=True,
            text=True,
            timeout=5,
            check=False,
        )
    except (OSError, subprocess.SubprocessError):
        return None

    if result.returncode != 0:
        return None
    value = result.stdout.strip()
    return value or None


def _copy_ignore(directory: str, names: list[str]) -> set[str]:
    ignored = {"__pycache__", ".pytest_cache", ".ruff_cache", ".mypy_cache"}
    if platform.system() == "Windows":
        ignored.add(".venv")
    return {name for name in names if name in ignored or name.endswith(".pyc")}


def _phase(callbacks: CurrentEnvironmentImportCallbacks | None, phase: str, message: str) -> None:
    if callbacks:
        callbacks.on_phase(phase, message)


def _warn(callbacks: CurrentEnvironmentImportCallbacks | None, message: str) -> None:
    if callbacks:
        callbacks.on_error(message)
