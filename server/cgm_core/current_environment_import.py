"""Best-effort import of the currently running unmanaged ComfyUI install."""

from __future__ import annotations

import platform
import re
import shutil
import subprocess
import sys
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any, Protocol, cast

try:
    import tomllib
except ModuleNotFoundError:  # pragma: no cover - Python 3.10 compatibility
    import tomli as tomllib  # type: ignore[no-redef]


IGNORED_CUSTOM_NODE_DIRS = {
    "__pycache__",
    "comfygit-manager",
}

WORKFLOW_SOURCE_DIRS = (
    Path("user") / "default" / "workflows",
    Path("workflows"),
)

MODEL_FILE_EXTENSIONS = (
    ".safetensors",
    ".sft",
    ".ckpt",
    ".pt",
    ".pth",
    ".gguf",
    ".bin",
    ".onnx",
)

MODEL_WIDGET_CATEGORY_HINTS = {
    "ckpt": "checkpoints",
    "checkpoint": "checkpoints",
    "unet": "diffusion_models",
    "diffusion_model": "diffusion_models",
    "clip": "text_encoders",
    "text_encoder": "text_encoders",
    "vae": "vae",
    "lora": "loras",
    "control_net": "controlnet",
    "controlnet": "controlnet",
}

MODEL_NODE_WIDGET_FALLBACKS = {
    "CheckpointLoaderSimple": [(0, "checkpoints")],
    "CheckpointLoader": [(0, "checkpoints")],
    "UNETLoader": [(0, "diffusion_models")],
    "DualCLIPLoader": [(0, "text_encoders"), (1, "text_encoders")],
    "TripleCLIPLoader": [(0, "text_encoders"), (1, "text_encoders"), (2, "text_encoders")],
    "CLIPLoader": [(0, "text_encoders")],
    "VAELoader": [(0, "vae")],
    "LoraLoader": [(0, "loras")],
    "LoraLoaderModelOnly": [(0, "loras")],
    "ControlNetLoader": [(0, "controlnet")],
}


class CurrentEnvironmentImportCallbacks(Protocol):
    """Subset of existing import callbacks used by current-environment import."""

    def on_phase(self, phase: str, description: str) -> None: ...
    def on_workflow_copied(self, workflow_name: str) -> None: ...
    def on_node_installed(self, node_name: str) -> None: ...
    def on_error(self, error: str) -> None: ...


class NodeRegistryLookup(Protocol):
    """Registry package lookup surface used by current-environment scanning."""

    def get_package(self, package_id: str) -> Any | None: ...
    def resolve_github_url(self, github_url: str) -> Any | None: ...
    def canonicalize_package_id(self, package_id: str | None) -> str | None: ...


@dataclass(frozen=True)
class CustomNodePyprojectMetadata:
    project_name: str | None = None
    version: str | None = None
    repository: str | None = None
    display_name: str | None = None
    publisher_id: str | None = None


@dataclass(frozen=True)
class CurrentWorkflowScan:
    name: str
    path: str
    models_required: int = 0
    models_optional: int = 0

    def to_dict(self) -> dict:
        return asdict(self)


@dataclass(frozen=True)
class CurrentModelReferenceScan:
    filename: str
    workflow: str
    category: str | None = None
    node_type: str | None = None
    widget_index: int | None = None
    source_url: str | None = None

    def to_dict(self) -> dict:
        return asdict(self)


@dataclass(frozen=True)
class CurrentCustomNodeScan:
    name: str
    path: str
    source_type: str
    registry_id: str | None = None
    version: str | None = None
    install_spec: str | None = None
    repository: str | None = None
    branch: str | None = None
    pinned_commit: str | None = None
    warning: str | None = None
    provenance_detail: str | None = None

    def to_dict(self) -> dict:
        return asdict(self)


@dataclass(frozen=True)
class CurrentEnvironmentPreview:
    source_path: str
    python_version: str
    comfyui_version: str | None
    comfyui_commit: str | None
    workflows: list[CurrentWorkflowScan] = field(default_factory=list)
    model_references: list[CurrentModelReferenceScan] = field(default_factory=list)
    models_scanned: bool = True
    custom_nodes: list[CurrentCustomNodeScan] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)

    @property
    def total_workflows(self) -> int:
        return len(self.workflows)

    @property
    def total_custom_nodes(self) -> int:
        return len(self.custom_nodes)

    @property
    def total_model_references(self) -> int:
        return len(self.model_references)

    def to_dict(self) -> dict:
        data = asdict(self)
        data["total_workflows"] = self.total_workflows
        data["total_model_references"] = self.total_model_references
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


def scan_current_environment(
    source_path: str | Path | None = None,
    node_registry_lookup: NodeRegistryLookup | None = None,
) -> CurrentEnvironmentPreview:
    """Scan the unmanaged ComfyUI install without mutating it."""
    comfyui_path = detect_current_comfyui_path(source_path)
    warnings: list[str] = []

    workflows, model_references, models_scanned = _scan_workflows(comfyui_path, warnings)
    custom_nodes = _scan_custom_nodes(comfyui_path, warnings, node_registry_lookup)
    version, commit = _detect_comfyui_version(comfyui_path)

    if not workflows:
        warnings.append("No saved workflow JSON files were found.")
    if not custom_nodes:
        warnings.append("No custom-node directories were found.")

    return CurrentEnvironmentPreview(
        source_path=str(comfyui_path),
        python_version=f"{sys.version_info.major}.{sys.version_info.minor}",
        comfyui_version=version,
        comfyui_commit=commit,
        workflows=workflows,
        model_references=model_references,
        models_scanned=models_scanned,
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
    node_registry_lookup = _get_node_registry_lookup(workspace)
    preview = scan_current_environment(source_path, node_registry_lookup=node_registry_lookup)
    warnings = list(preview.warnings)

    _phase(callbacks, "clone_comfyui", f"Creating managed environment '{name}'...")
    env = workspace.create_environment(
        name=name,
        python_version=preview.python_version,
        comfyui_version=preview.comfyui_version,
        torch_backend=torch_backend,
    )
    _link_running_manager_dev_node(Path(preview.source_path), env, warnings, callbacks)

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

    _copy_workflows_to_manifest(env, warnings, callbacks)

    _phase(callbacks, "sync_nodes", "Copying custom nodes...")
    target_custom_nodes = env.comfyui_path / "custom_nodes"
    target_custom_nodes.mkdir(parents=True, exist_ok=True)

    for node in preview.custom_nodes:
        src = Path(node.path)
        dst = target_custom_nodes / src.name
        try:
            if node.install_spec:
                try:
                    env.add_node(
                        node.install_spec,
                        no_test=True,
                        force=True,
                    )
                    custom_nodes_copied += 1
                    if callbacks:
                        callbacks.on_node_installed(src.name)
                    continue
                except Exception as exc:
                    message = (
                        f"Could not install custom node '{src.name}' from "
                        f"{node.source_type} provenance ({node.install_spec}): {exc}. "
                        "Falling back to a copied development node."
                    )
                    warnings.append(message)
                    _warn(callbacks, message)

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


def _scan_workflows(
    comfyui_path: Path,
    warnings: list[str],
) -> tuple[list[CurrentWorkflowScan], list[CurrentModelReferenceScan], bool]:
    seen: set[str] = set()
    workflows: list[CurrentWorkflowScan] = []
    model_references: list[CurrentModelReferenceScan] = []
    models_scanned = True

    for relative_dir in WORKFLOW_SOURCE_DIRS:
        workflow_dir = comfyui_path / relative_dir
        if not workflow_dir.is_dir():
            continue
        for path in sorted(workflow_dir.glob("*.json")):
            if path.name in seen:
                continue
            seen.add(path.name)
            refs, scanned = _scan_workflow_model_references(path)
            if not scanned:
                models_scanned = False
                warnings.append(f"Could not scan model references for workflow '{path.stem}'.")
            model_references.extend(refs)
            workflows.append(
                CurrentWorkflowScan(
                    name=path.stem,
                    path=str(path),
                    models_required=len(refs),
                    models_optional=0,
                )
            )

    return workflows, model_references, models_scanned


def _scan_workflow_model_references(path: Path) -> tuple[list[CurrentModelReferenceScan], bool]:
    """Return model references from a saved workflow without resolving availability."""
    try:
        import importlib

        workflow_module = importlib.import_module("comfygit_core.workflow")
        parser_cls = getattr(workflow_module, "WorkflowDependencyParser")
        dependencies = parser_cls(
            path,
            workflow_name=path.stem,
            version_agnostic=True,
        ).analyze_dependencies()
    except Exception:
        return _scan_workflow_model_references_from_json(path)

    refs: list[CurrentModelReferenceScan] = []
    seen: set[tuple[str, str | None, str | None, int | None]] = set()
    for ref in dependencies.found_models:
        filename = _string_value(getattr(ref, "widget_value", None))
        if not filename:
            continue
        category = _string_value(getattr(ref, "property_directory", None))
        node_type = _string_value(getattr(ref, "node_type", None))
        widget_index = getattr(ref, "widget_index", None)
        widget_index = widget_index if isinstance(widget_index, int) else None
        source_url = _string_value(getattr(ref, "property_url", None))
        key = (filename, category, node_type, widget_index)
        if key in seen:
            continue
        seen.add(key)
        refs.append(
            CurrentModelReferenceScan(
                filename=filename,
                workflow=path.stem,
                category=category,
                node_type=node_type,
                widget_index=widget_index,
                source_url=source_url,
            )
        )

    return refs, True


def _scan_workflow_model_references_from_json(path: Path) -> tuple[list[CurrentModelReferenceScan], bool]:
    """Fallback scanner for older core installs or partial workflow metadata."""
    import json

    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, UnicodeDecodeError, json.JSONDecodeError):
        return [], False

    refs: list[CurrentModelReferenceScan] = []
    ref_index: dict[tuple[str, str | None, str | None], int] = {}

    def add_ref(filename: str, category: str | None, node_type: str | None, source_url: str | None = None) -> None:
        key = (filename, category, node_type)
        if key in ref_index:
            existing_index = ref_index[key]
            existing = refs[existing_index]
            if source_url and not existing.source_url:
                refs[existing_index] = CurrentModelReferenceScan(
                    filename=existing.filename,
                    workflow=existing.workflow,
                    category=existing.category,
                    node_type=existing.node_type,
                    widget_index=existing.widget_index,
                    source_url=source_url,
                )
            return
        ref_index[key] = len(refs)
        refs.append(
            CurrentModelReferenceScan(
                filename=filename,
                workflow=path.stem,
                category=category,
                node_type=node_type,
                source_url=source_url,
            )
        )

    def walk(value: Any, *, key: str | None = None, node_type: str | None = None) -> None:
        if isinstance(value, dict):
            current_node_type = _string_value(value.get("type")) or _string_value(value.get("class_type")) or node_type
            widgets_values = value.get("widgets_values") or value.get("widget_values")
            if current_node_type and isinstance(widgets_values, list):
                for widget_index, category in MODEL_NODE_WIDGET_FALLBACKS.get(current_node_type, []):
                    if widget_index >= len(widgets_values):
                        continue
                    widget_value = widgets_values[widget_index]
                    if isinstance(widget_value, str) and _looks_like_model_value(widget_value):
                        add_ref(widget_value, category, current_node_type)

            property_models = value.get("models")
            if key == "properties" and isinstance(property_models, list):
                for model_entry in property_models:
                    if not isinstance(model_entry, dict):
                        continue
                    name = _string_value(model_entry.get("name"))
                    if name and _looks_like_model_value(name):
                        add_ref(
                            name,
                            _string_value(model_entry.get("directory")) or _category_for_model_key(name),
                            current_node_type,
                            _string_value(model_entry.get("url")),
                        )
            for child_key, child_value in value.items():
                walk(child_value, key=str(child_key), node_type=current_node_type)
            return

        if isinstance(value, list):
            for item in value:
                walk(item, key=key, node_type=node_type)
            return

        if isinstance(value, str) and key:
            category = _category_for_model_key(key)
            if category and _looks_like_model_value(value):
                add_ref(value, category, node_type)

    walk(data)
    return refs, True


def _category_for_model_key(key: str) -> str | None:
    normalized = key.lower().replace("-", "_")
    for hint, category in MODEL_WIDGET_CATEGORY_HINTS.items():
        if hint in normalized:
            return category
    return None


def _looks_like_model_value(value: str) -> bool:
    stripped = value.strip()
    if not stripped or stripped.startswith(("http://", "https://")):
        return False
    return (
        stripped.lower().endswith(MODEL_FILE_EXTENSIONS)
        or "/" in stripped
        or "\\" in stripped
    )


def _scan_custom_nodes(
    comfyui_path: Path,
    warnings: list[str],
    node_registry_lookup: NodeRegistryLookup | None = None,
) -> list[CurrentCustomNodeScan]:
    custom_nodes_dir = comfyui_path / "custom_nodes"
    if not custom_nodes_dir.is_dir():
        return []

    nodes: list[CurrentCustomNodeScan] = []
    for path in sorted(custom_nodes_dir.iterdir(), key=lambda item: item.name.lower()):
        if not _is_importable_custom_node(path):
            continue

        metadata = _read_node_pyproject_metadata(path)
        is_git_checkout = _is_git_checkout(path)
        repository = _git_output(path, "remote", "get-url", "origin") if is_git_checkout else None
        commit = _git_output(path, "rev-parse", "HEAD") if is_git_checkout else None
        branch = _git_output(path, "branch", "--show-current") if is_git_checkout else None
        registry_id = None
        version = metadata.version if metadata else None
        install_spec = None
        provenance_detail = None
        source_type = "git" if repository else "local"
        warning = None

        if repository:
            install_spec = _git_install_spec(repository, commit)
            provenance_detail = "independent Git checkout"
        else:
            registry_match = _resolve_registry_provenance(
                path,
                metadata,
                node_registry_lookup,
            )
            if registry_match:
                registry_id, matched_version, package_repository = registry_match
                source_type = "registry"
                version = matched_version
                repository = package_repository
                install_spec = f"{registry_id}@{matched_version}"
                provenance_detail = "pyproject metadata matched registry package version"
            elif metadata and metadata.repository:
                source_type = "git"
                repository = metadata.repository
                install_spec = metadata.repository
                provenance_detail = "repository URL from node pyproject metadata"
                if metadata.version:
                    warning = (
                        "Found repository metadata but no matching registry package version; "
                        "the imported environment will use the Git source and may not pin the exact local revision."
                    )
                    warnings.append(
                        f"Custom node '{path.name}' declares version {metadata.version} but no matching "
                        "registry version was found; importing from its Git repository."
                    )

        if source_type == "local":
            warning = "No Git remote detected; copied as a local development node."
            warnings.append(f"Custom node '{path.name}' has no Git remote and will need manual provenance review.")

        nodes.append(
            CurrentCustomNodeScan(
                name=path.name,
                path=str(path),
                source_type=source_type,
                registry_id=registry_id,
                version=version,
                install_spec=install_spec,
                repository=repository,
                branch=branch,
                pinned_commit=commit,
                warning=warning,
                provenance_detail=provenance_detail,
            )
        )

    return nodes


def _is_importable_custom_node(path: Path) -> bool:
    if path.name in IGNORED_CUSTOM_NODE_DIRS:
        return False
    if path.name.startswith(".") or path.name.endswith(".disabled"):
        return False
    return path.is_dir()


def _get_node_registry_lookup(workspace) -> NodeRegistryLookup | None:
    return getattr(workspace, "node_mapping_repository", None)


def _copy_workflows_to_manifest(
    env,
    warnings: list[str],
    callbacks: CurrentEnvironmentImportCallbacks | None,
) -> None:
    try:
        copy_method = getattr(env, "copy_workflows_to_manifest", None)
        if callable(copy_method):
            results = cast(dict[str, Path | str | None], copy_method())
        else:
            results = _copy_workflows_to_cec_directly(env)
    except Exception as exc:
        message = f"Copied workflows into ComfyUI but could not track them in the managed manifest: {exc}"
        warnings.append(message)
        _warn(callbacks, message)
        return

    failed = [name for name, result in results.items() if result is None]
    for name in failed:
        message = f"Could not track workflow '{name}' in the managed manifest."
        warnings.append(message)
        _warn(callbacks, message)


def _copy_workflows_to_cec_directly(env) -> dict[str, Path | None]:
    comfyui_path = getattr(env, "comfyui_path")
    cec_path = getattr(env, "cec_path")
    source_dir = comfyui_path / "user" / "default" / "workflows"
    dest_dir = cec_path / "workflows"
    dest_dir.mkdir(parents=True, exist_ok=True)

    results: dict[str, Path | None] = {}
    for source in source_dir.glob("*.json"):
        dest = dest_dir / source.name
        try:
            shutil.copy2(source, dest)
            results[source.stem] = dest
        except Exception:
            results[source.stem] = None
    return results


def _read_node_pyproject_metadata(path: Path) -> CustomNodePyprojectMetadata | None:
    pyproject_path = path / "pyproject.toml"
    if not pyproject_path.is_file():
        return None

    try:
        with pyproject_path.open("rb") as handle:
            data = tomllib.load(handle)
    except (OSError, tomllib.TOMLDecodeError):
        return None

    project = data.get("project") if isinstance(data, dict) else None
    project = project if isinstance(project, dict) else {}
    urls = project.get("urls")
    urls = urls if isinstance(urls, dict) else {}
    tool = data.get("tool") if isinstance(data, dict) else None
    tool = tool if isinstance(tool, dict) else {}
    comfy = tool.get("comfy")
    comfy = comfy if isinstance(comfy, dict) else {}

    return CustomNodePyprojectMetadata(
        project_name=_string_value(project.get("name")),
        version=_string_value(project.get("version")),
        repository=_url_value(urls, "Repository", "repository", "Source", "Homepage", "homepage"),
        display_name=_string_value(comfy.get("DisplayName")),
        publisher_id=_string_value(comfy.get("PublisherId")),
    )


def _resolve_registry_provenance(
    path: Path,
    metadata: CustomNodePyprojectMetadata | None,
    node_registry_lookup: NodeRegistryLookup | None,
) -> tuple[str, str, str | None] | None:
    if not metadata or not metadata.version or not node_registry_lookup:
        return None

    packages = _candidate_registry_packages(path, metadata, node_registry_lookup)
    for package in packages:
        version = _matching_registry_version(package, metadata.version)
        if version:
            package_id = _string_value(getattr(package, "id", None))
            if package_id:
                return package_id, version, _string_value(getattr(package, "repository", None))
    return None


def _candidate_registry_packages(
    path: Path,
    metadata: CustomNodePyprojectMetadata,
    node_registry_lookup: NodeRegistryLookup,
) -> list[Any]:
    packages: list[Any] = []
    seen: set[str] = set()

    def add_package(package: Any | None) -> None:
        package_id = _string_value(getattr(package, "id", None))
        if not package or not package_id or package_id in seen:
            return
        packages.append(package)
        seen.add(package_id)

    for candidate in _node_package_id_candidates(path, metadata):
        add_package(node_registry_lookup.get_package(candidate))

    if metadata.repository:
        add_package(node_registry_lookup.resolve_github_url(metadata.repository))

    return packages


def _node_package_id_candidates(path: Path, metadata: CustomNodePyprojectMetadata) -> list[str]:
    raw_values = [
        metadata.project_name,
        metadata.display_name,
        path.name,
    ]
    candidates: list[str] = []
    seen: set[str] = set()

    for value in raw_values:
        normalized = _string_value(value)
        if not normalized:
            continue
        variants = {
            normalized,
            normalized.lower(),
            normalized.replace("_", "-"),
            normalized.lower().replace("_", "-"),
            normalized.replace(" ", "-"),
            normalized.lower().replace(" ", "-"),
        }
        for variant in variants:
            variant = variant.strip("-_ ")
            if variant and variant not in seen:
                candidates.append(variant)
                seen.add(variant)

    return candidates


def _matching_registry_version(package: Any, local_version: str) -> str | None:
    versions = getattr(package, "versions", None)
    if not isinstance(versions, dict):
        return None

    for version_key, version_info in versions.items():
        registry_version = _string_value(getattr(version_info, "version", None)) or str(version_key)
        if not _versions_match(registry_version, local_version) and not _versions_match(str(version_key), local_version):
            continue
        if getattr(version_info, "deprecated", False):
            continue
        if not _string_value(getattr(version_info, "download_url", None)):
            continue
        return registry_version
    return None


def _versions_match(registry_version: str, local_version: str) -> bool:
    return registry_version == local_version or registry_version.lstrip("v") == local_version.lstrip("v")


def _git_install_spec(repository: str, commit: str | None) -> str:
    return f"{repository}@{commit}" if commit else repository


def _string_value(value: Any) -> str | None:
    if isinstance(value, str):
        value = value.strip()
        return value or None
    return None


def _url_value(values: dict[str, Any], *keys: str) -> str | None:
    lower_lookup = {key.lower(): value for key, value in values.items() if isinstance(key, str)}
    for key in keys:
        value = lower_lookup.get(key.lower())
        parsed = _string_value(value)
        if parsed:
            return parsed
    return None


def _link_running_manager_dev_node(
    source_comfyui_path: Path,
    env,
    warnings: list[str],
    callbacks: CurrentEnvironmentImportCallbacks | None,
) -> None:
    manager_path = source_comfyui_path / "custom_nodes" / "comfygit-manager"
    if not manager_path.is_symlink():
        return

    try:
        source_path = manager_path.resolve(strict=True)
    except OSError as exc:
        message = f"Could not resolve development comfygit-manager symlink: {exc}"
        warnings.append(message)
        _warn(callbacks, message)
        return

    try:
        env.link_development_node(
            "comfygit-manager",
            source_path,
            name="comfygit-manager",
            replace_existing=True,
            force=True,
        )
    except Exception as exc:
        message = f"Could not register development comfygit-manager in the imported environment: {exc}"
        warnings.append(message)
        _warn(callbacks, message)


def _detect_comfyui_version(comfyui_path: Path) -> tuple[str | None, str | None]:
    version = (
        _read_comfyui_version_py(comfyui_path)
        or _read_project_version(comfyui_path)
        or _git_output(comfyui_path, "describe", "--tags", "--exact-match", "HEAD")
    )
    commit = _git_output(comfyui_path, "rev-parse", "HEAD")
    return version, commit


def _read_comfyui_version_py(comfyui_path: Path) -> str | None:
    version_path = comfyui_path / "comfyui_version.py"
    if not version_path.is_file():
        return None
    try:
        content = version_path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return None
    match = re.search(r"^__version__\s*=\s*['\"]([^'\"]+)['\"]", content, flags=re.MULTILINE)
    return _string_value(match.group(1)) if match else None


def _read_project_version(path: Path) -> str | None:
    pyproject_path = path / "pyproject.toml"
    if not pyproject_path.is_file():
        return None
    try:
        with pyproject_path.open("rb") as handle:
            data = tomllib.load(handle)
    except (OSError, tomllib.TOMLDecodeError):
        return None

    project = data.get("project") if isinstance(data, dict) else None
    if not isinstance(project, dict):
        return None
    return _string_value(project.get("version"))


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
