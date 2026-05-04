"""Model management API.

Provides two scopes:
- Environment scope (/v2/comfygit/models/environment): Models used in current env's workflows
- Workspace scope (/v2/workspace/models): All models in the shared workspace index
"""
import os
import platform
import re
import subprocess
from pathlib import Path
from urllib.parse import parse_qs, urlencode, unquote, urlparse

from aiohttp import web
from huggingface_hub import HfApi

from cgm_core.decorators import requires_environment, logged_operation
from cgm_utils.async_helpers import run_sync
from comfygit_core.caching.api_cache import APICacheManager
from comfygit_core.clients.civitai_client import CivitAIClient, CivitAIError
from comfygit_core.configs.model_config import ModelConfig
from comfygit_core.services.huggingface_url import parse_huggingface_url

routes = web.RouteTableDef()

MODEL_SOURCE_URL_RE = re.compile(r"https?://[^\s<>'\")\]]+")
MODEL_SOURCE_EXTENSIONS = (
    ".safetensors",
    ".ckpt",
    ".pt",
    ".pth",
    ".bin",
    ".gguf",
)


def _source_url_filename(url: str) -> str | None:
    try:
        filename = Path(unquote(urlparse(url).path)).name
    except Exception:
        return None
    if filename.lower().endswith(MODEL_SOURCE_EXTENSIONS):
        return filename
    return None


def _determine_model_status(resolved_model):
    """Determine model status from ResolvedModel."""
    if resolved_model.resolved_model is not None:
        if resolved_model.needs_path_sync:
            return "path_mismatch"
        return "available"
    elif resolved_model.model_source is not None:
        return "downloadable"
    else:
        return "missing"


def _strip_url_punctuation(url: str) -> str:
    return url.rstrip(".,;:!?)]}\"'")


def _classify_source_url(url: str) -> str:
    lower = url.lower()
    if "huggingface.co" in lower or "hf.co/" in lower:
        return "huggingface"
    if "civitai.com" in lower:
        return "civitai"
    return "custom"


def _normalize_source_download_url(url: str) -> str:
    """Convert known provider page URLs into direct download URLs when possible."""
    try:
        parsed = urlparse(url)
    except Exception:
        return url

    host = (parsed.hostname or "").lower()
    if host not in {"civitai.com", "www.civitai.com"}:
        return url

    path_parts = [part for part in parsed.path.split("/") if part]
    if len(path_parts) >= 3 and path_parts[:3] == ["api", "download", "models"]:
        return url

    if len(path_parts) >= 2 and path_parts[0] == "models":
        version_id = (parse_qs(parsed.query).get("modelVersionId") or [None])[0]
        if version_id and version_id.isdigit():
            return f"https://civitai.com/api/download/models/{version_id}"

    return url


def _candidate_context(text: str, start: int, end: int, radius: int = 180) -> str:
    context_start = max(0, start - radius)
    context_end = min(len(text), end + radius)
    context = text[context_start:context_end]
    return re.sub(r"\s+", " ", context).strip()


def _model_filename_terms(filename: str | None) -> tuple[str, str, str, str]:
    normalized = (filename or "").replace("\\", "/")
    basename = normalized.rsplit("/", 1)[-1]
    stem = Path(basename).stem if basename else ""
    return normalized.lower(), Path(normalized).stem.lower(), basename.lower(), stem.lower()


def _score_source_candidate(url: str, context: str, model_info: dict) -> tuple[int, list[str]]:
    score = 0
    reasons = []
    haystacks = [context.lower(), url.lower()]
    filename, stem, basename, basename_stem = _model_filename_terms(model_info.get("filename"))
    category = (model_info.get("category") or "").lower()
    hashes = [
        str(model_info.get("hash") or "").lower(),
        str(model_info.get("blake3") or "").lower(),
        str(model_info.get("sha256") or "").lower(),
    ]

    if filename and any(filename in haystack for haystack in haystacks):
        score += 60
        reasons.append("filename match")
    elif basename and any(basename in haystack for haystack in haystacks):
        score += 55
        reasons.append("filename match")
    elif stem and any(stem in haystack for haystack in haystacks):
        score += 35
        reasons.append("model name match")
    elif basename_stem and any(basename_stem in haystack for haystack in haystacks):
        score += 35
        reasons.append("model name match")

    for model_hash in hashes:
        if model_hash and len(model_hash) >= 8 and any(model_hash in haystack for haystack in haystacks):
            score += 50
            reasons.append("hash match")
            break

    if category and category != "unknown" and category in context.lower():
        score += 10
        reasons.append("category nearby")

    if url.lower().endswith(MODEL_SOURCE_EXTENSIONS):
        score += 15
        reasons.append("model file URL")

    if _classify_source_url(url) in {"huggingface", "civitai"}:
        score += 10
        reasons.append("known model host")

    if not reasons:
        reasons.append("workflow link")

    return score, reasons


def _url_looks_like_model_source(url: str, model_info: dict) -> bool:
    lower_url = url.lower()
    filename, stem, basename, basename_stem = _model_filename_terms(model_info.get("filename"))

    if _classify_source_url(url) in {"huggingface", "civitai"}:
        return True
    if lower_url.endswith(MODEL_SOURCE_EXTENSIONS):
        return True
    if filename and filename in lower_url:
        return True
    if basename and basename in lower_url:
        return True
    if stem and stem in lower_url:
        return True
    if basename_stem and basename_stem in lower_url:
        return True
    return False


def _workflow_names_for_source_scan(env, workflow_name: str | None = None) -> list[str]:
    if workflow_name:
        return [workflow_name]
    try:
        status = env.status()
        return [wf.name for wf in status.workflow.analyzed_workflows]
    except Exception:
        return []


def _scan_workflow_source_candidates(
    env,
    model_info: dict,
    *,
    workflow_name: str | None = None,
    require_identity_match: bool = True,
    limit: int = 25,
) -> list[dict]:
    workflow_names = _workflow_names_for_source_scan(env, workflow_name)

    candidates_by_key = {}
    for workflow_name in workflow_names:
        try:
            workflow_path = env.workflow_manager.get_workflow_path(workflow_name)
        except Exception:
            continue

        try:
            text = Path(workflow_path).read_text(encoding="utf-8")
        except Exception:
            continue

        for match in MODEL_SOURCE_URL_RE.finditer(text):
            url = _normalize_source_download_url(_strip_url_punctuation(match.group(0)))
            if not _url_looks_like_model_source(url, model_info):
                continue
            context = _candidate_context(text, match.start(), match.end())
            score, reasons = _score_source_candidate(url, context, model_info)
            has_identity_match = any(
                reason in {"filename match", "model name match", "hash match"}
                for reason in reasons
            )
            if require_identity_match and not has_identity_match:
                continue
            if require_identity_match and score < 20:
                continue

            key = (url, workflow_name)
            existing = candidates_by_key.get(key)
            candidate = {
                "source": "workflow",
                "source_type": _classify_source_url(url),
                "url": url,
                "workflow": workflow_name,
                "confidence": min(score, 100),
                "reasons": reasons,
                "context": context,
                "validation_status": "not_checked",
            }
            if not existing or candidate["confidence"] > existing["confidence"]:
                candidates_by_key[key] = candidate

    return sorted(
        candidates_by_key.values(),
        key=lambda item: (-item["confidence"], item["workflow"], item["url"]),
    )[:limit]


def _scan_workflow_download_candidates(env) -> list[dict]:
    try:
        status = env.status()
        workflow_names = [wf.name for wf in status.workflow.analyzed_workflows]
    except Exception:
        workflow_names = []

    model_repo = env.workspace.model_repository
    known_filenames = {
        model.filename.lower()
        for model in env.workspace.list_models()
        if getattr(model, "filename", None)
    }
    candidates_by_key = {}
    for workflow_name in workflow_names:
        try:
            workflow_path = env.workflow_manager.get_workflow_path(workflow_name)
        except Exception:
            continue

        try:
            text = Path(workflow_path).read_text(encoding="utf-8")
        except Exception:
            continue

        for match in MODEL_SOURCE_URL_RE.finditer(text):
            url = _normalize_source_download_url(_strip_url_punctuation(match.group(0)))
            if not _url_looks_like_model_source(url, {}):
                continue
            if model_repo.find_by_source_url(url):
                continue
            url_filename = _source_url_filename(url)
            if url_filename and url_filename.lower() in known_filenames:
                continue

            context = _candidate_context(text, match.start(), match.end())
            source_type = _classify_source_url(url)
            reasons = []
            score = 0

            if source_type in {"huggingface", "civitai"}:
                score += 55
                reasons.append("known model host")
            if url.lower().split("?", 1)[0].endswith(MODEL_SOURCE_EXTENSIONS):
                score += 25
                reasons.append("model file URL")
            if re.search(r"\b(model|checkpoint|lora|vae|controlnet|download)\b", context, re.IGNORECASE):
                score += 15
                reasons.append("workflow link")

            if score < 30:
                continue

            key = (url, workflow_name)
            existing = candidates_by_key.get(key)
            candidate = {
                "source": "workflow",
                "source_type": source_type,
                "url": url,
                "workflow": workflow_name,
                "confidence": min(score, 100),
                "reasons": reasons or ["workflow link"],
                "context": context,
                "validation_status": "not_checked",
            }
            if not existing or candidate["confidence"] > existing["confidence"]:
                candidates_by_key[key] = candidate

    return sorted(
        candidates_by_key.values(),
        key=lambda item: (-item["confidence"], item["workflow"], item["url"]),
    )[:50]


def _model_details_payload(env, details) -> dict:
    model = details.model

    from datetime import datetime
    last_seen_str = None
    if model.last_seen:
        try:
            last_seen_str = datetime.fromtimestamp(model.last_seen).strftime("%Y-%m-%d %H:%M:%S")
        except Exception:
            pass

    models_dir = env.workspace.workspace_config_manager.get_models_directory()
    primary_path = str(models_dir / model.relative_path) if models_dir and model.relative_path else model.relative_path

    locations = []
    for loc in details.all_locations:
        path = (
            loc.get("path") or
            loc.get("full_path") or
            loc.get("relative_path") or
            ""
        )
        if path and not path.startswith("/") and models_dir:
            path = str(models_dir / path)
        if not path:
            path = primary_path

        loc_info = {"path": path}
        if loc.get("base_directory"):
            loc_info["base_directory"] = loc.get("base_directory")
        if loc.get("relative_path"):
            loc_info["relative_path"] = loc.get("relative_path")
        if "mtime" in loc:
            try:
                loc_info["modified"] = datetime.fromtimestamp(loc["mtime"]).strftime("%Y-%m-%d %H:%M:%S")
            except Exception:
                pass
        locations.append(loc_info)

    if not locations and primary_path:
        loc_info = {"path": primary_path}
        if model.mtime:
            try:
                loc_info["modified"] = datetime.fromtimestamp(model.mtime).strftime("%Y-%m-%d %H:%M:%S")
            except Exception:
                pass
        locations.append(loc_info)

    sources = []
    for src in details.sources:
        sources.append({
            "type": src.get("type", "unknown"),
            "url": src.get("url", ""),
        })

    return {
        "filename": model.filename,
        "hash": model.hash,
        "blake3": model.blake3_hash,
        "sha256": model.sha256_hash,
        "size": model.file_size,
        "category": model.category,
        "relative_path": model.relative_path,
        "last_seen": last_seen_str,
        "locations": locations,
        "sources": sources,
    }


def _model_has_download_source(env, model_hash: str | None) -> bool:
    if not model_hash:
        return False
    try:
        return bool(env.workspace.model_repository.get_sources(model_hash))
    except Exception:
        return False


def _primary_model_path(env, details) -> Path:
    payload = _model_details_payload(env, details)
    for location in payload["locations"]:
        path = location.get("path")
        if path and Path(path).is_file():
            return Path(path)
    raise FileNotFoundError(f"Model file not found on disk: {details.model.filename}")


def _compute_missing_model_hashes(env, identifier: str) -> dict:
    details = env.workspace.get_model_details(identifier)
    model = details.model
    model_path = _primary_model_path(env, details)
    model_repo = env.workspace.model_repository

    if not model.blake3_hash:
        blake3_hash = model_repo.compute_blake3(model_path)
        model_repo.update_blake3(model.hash, blake3_hash)

    if not model.sha256_hash:
        sha256_hash = model_repo.compute_sha256(model_path)
        model_repo.update_sha256(model.hash, sha256_hash)

    refreshed = env.workspace.get_model_details(model.hash)
    return _model_details_payload(env, refreshed)


def _path_for_model_location(location: dict) -> Path:
    base_directory = location.get("base_directory")
    relative_path = location.get("relative_path")
    if not base_directory or not relative_path:
        raise ValueError("Model location is missing base directory or relative path")

    base_path = Path(base_directory).expanduser()
    target_path = base_path / str(relative_path).replace("\\", "/")
    base_resolved = base_path.resolve(strict=False)
    parent_resolved = target_path.parent.resolve(strict=False)

    try:
        parent_resolved.relative_to(base_resolved)
    except ValueError as exc:
        raise ValueError(f"Refusing to delete model outside indexed base directory: {target_path}") from exc

    return target_path


@routes.get("/v2/comfygit/models/environment")
@requires_environment
async def get_environment_models(request: web.Request, env) -> web.Response:
    """Get models used in current environment with workflow usage tracking."""
    try:
        status = await run_sync(env.status)

        # Aggregate models across all workflows, tracking which workflows use each
        models_map = {}  # hash/key -> model info with usage tracking

        # Process models from analyzed workflows
        for wf in status.workflow.analyzed_workflows:
            for resolved_model in wf.resolution.models_resolved:
                model_ref = resolved_model.resolved_model
                if not model_ref:
                    continue

                # Use CRC32 hash as canonical identifier
                model_hash = model_ref.hash

                if model_hash not in models_map:
                    # Determine category and status
                    category = model_ref.category if hasattr(model_ref, 'category') else "unknown"
                    model_status = _determine_model_status(resolved_model)
                    relative_path = model_ref.relative_path if hasattr(model_ref, 'relative_path') else None

                    models_map[model_hash] = {
                        "filename": model_ref.filename,
                        "hash": model_hash,
                        "type": category,
                        "size": model_ref.file_size,
                        "status": model_status,
                        "relative_path": relative_path,
                        "has_download_source": _model_has_download_source(env, model_hash),
                        "used_in_workflows": []
                    }

                # Track workflow usage
                if wf.name not in models_map[model_hash]["used_in_workflows"]:
                    models_map[model_hash]["used_in_workflows"].append(wf.name)

        # Process missing models from env status
        for missing_model in status.missing_models:
            # Use filename-based key for missing models (no hash available)
            key = f"missing_{missing_model.filename}"

            if key not in models_map:
                models_map[key] = {
                    "filename": missing_model.filename,
                    "hash": "",
                    "type": "unknown",
                    "size": 0,
                    "status": "missing",
                    "has_download_source": False,
                    "used_in_workflows": missing_model.required_by.copy()
                }

        # Convert to list sorted by filename
        models = sorted(models_map.values(), key=lambda m: m["filename"])

        return web.json_response(models)
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)


# =============================================================================
# Workspace-scoped endpoints (shared model index)
# =============================================================================


@routes.get("/v2/workspace/models")
@requires_environment
async def get_workspace_models(request: web.Request, env) -> web.Response:
    """List all models in the workspace model index."""
    try:
        models = await run_sync(env.workspace.list_models)

        result = []
        for model in models:
            result.append({
                "filename": model.filename,
                "hash": model.hash,
                "sha256": model.sha256_hash,
                "type": model.category,
                "size": model.file_size,
                "relative_path": model.relative_path,
                "has_download_source": _model_has_download_source(env, model.hash),
                "status": "available",  # All indexed models are available
            })

        return web.json_response(result)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/workspace/models/{identifier}/source")
@logged_operation("update model sources")
async def add_model_source(request: web.Request, env) -> web.Response:
    """Add a download source URL to a model in the workspace index.

    This endpoint adds sources directly to the workspace model repository (SQLite),
    not the environment's pyproject.toml. Use this for managing sources of models
    in the shared workspace index.
    """
    identifier = request.match_info["identifier"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    source_url = body.get("source_url")
    if not source_url:
        return web.json_response({"error": "Missing 'source_url' field"}, status=400)

    try:
        model_repo = env.workspace.model_repository

        # Check if model exists in the workspace index
        if not model_repo.has_model(identifier):
            return web.json_response(
                {"error": f"Model not found in workspace index: {identifier}"},
                status=404
            )

        # Auto-detect source type
        source_type = env.workspace.model_downloader.detect_url_type(source_url)

        # Add source to the repository
        await run_sync(
            model_repo.add_source,
            model_hash=identifier,
            source_type=source_type,
            source_url=source_url
        )

        return web.json_response({
            "status": "success",
            "model_hash": identifier,
            "source_type": source_type,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/comfygit/models/sources/apply")
@logged_operation("apply environment model sources")
async def apply_environment_model_sources(request: web.Request, env) -> web.Response:
    """Apply staged model source URLs to the current environment manifest."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    sources = body.get("sources")
    if not isinstance(sources, list):
        return web.json_response({"error": "Missing 'sources' list"}, status=400)

    applied = []
    errors = []
    for index, item in enumerate(sources):
        if not isinstance(item, dict):
            errors.append({
                "index": index,
                "error": "invalid_source",
                "message": "Source entry must be an object",
            })
            continue

        identifier = item.get("identifier") or item.get("hash")
        source_url = item.get("source_url") or item.get("url")
        if not identifier or not source_url:
            errors.append({
                "index": index,
                "identifier": identifier,
                "error": "missing_fields",
                "message": "Source entry requires identifier and source_url",
            })
            continue

        try:
            result = await run_sync(env.add_model_source, identifier, source_url)
        except Exception as exc:
            errors.append({
                "index": index,
                "identifier": identifier,
                "source_url": source_url,
                "error": "apply_failed",
                "message": str(exc),
            })
            continue

        if result.success:
            applied.append({
                "identifier": identifier,
                "model_hash": result.model_hash or identifier,
                "source_url": result.url or source_url,
                "source_type": result.source_type or "custom",
            })
            continue

        errors.append({
            "index": index,
            "identifier": identifier,
            "source_url": source_url,
            "error": result.error or "apply_failed",
            "message": result.error or "Failed to apply model source",
        })

    if errors and applied:
        status = "partial"
    elif errors:
        status = "error"
    else:
        status = "success"

    return web.json_response({
        "status": status,
        "applied": applied,
        "errors": errors,
    })


@routes.delete("/v2/workspace/models/{identifier}/source")
@logged_operation("remove model source")
async def remove_model_source(request: web.Request, env) -> web.Response:
    """Remove a download source URL from a model in the workspace index."""
    identifier = request.match_info["identifier"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    source_url = body.get("source_url")
    if not source_url:
        return web.json_response({"error": "Missing 'source_url' field"}, status=400)

    try:
        model_repo = env.workspace.model_repository

        # Remove source from the repository
        removed = await run_sync(model_repo.remove_source, identifier, source_url)

        if not removed:
            return web.json_response(
                {"error": f"Source URL not found for model: {identifier}"},
                status=404
            )

        return web.json_response({
            "status": "success",
            "model_hash": identifier,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.delete("/v2/workspace/models/{identifier}")
@requires_environment
async def delete_workspace_model(request: web.Request, env) -> web.Response:
    """Delete all indexed file locations for a model from the workspace."""
    identifier = request.match_info["identifier"]

    try:
        details = await run_sync(env.workspace.get_model_details, identifier)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=400)
    except KeyError:
        return web.json_response({"error": f"Model not found: {identifier}"}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    try:
        model_repo = env.workspace.model_repository
        deleted_paths = []
        missing_paths = []
        errors = []

        for location in details.all_locations:
            try:
                model_path = _path_for_model_location(location)
            except ValueError as exc:
                errors.append({
                    "path": location.get("path") or location.get("relative_path") or "",
                    "error": str(exc),
                })
                continue

            path_str = str(model_path)
            try:
                if model_path.exists() or model_path.is_symlink():
                    if not model_path.is_file() and not model_path.is_symlink():
                        errors.append({
                            "path": path_str,
                            "error": "Indexed model location is not a file",
                        })
                        continue
                    model_path.unlink()
                    deleted_paths.append(path_str)
                else:
                    missing_paths.append(path_str)

                location_id = location.get("id")
                if location_id is not None:
                    await run_sync(model_repo.remove_location_by_id, int(location_id))
                else:
                    await run_sync(
                        model_repo.remove_location_for_directory,
                        Path(location["base_directory"]),
                        location["relative_path"],
                    )
            except Exception as exc:
                errors.append({
                    "path": path_str,
                    "error": str(exc),
                })

        await run_sync(model_repo.clear_orphaned_models)
        await run_sync(model_repo.clear_orphaned_model_sources)

        remaining_locations = await run_sync(model_repo.get_locations, details.model.hash)
        status = "partial" if errors else "success"
        return web.json_response({
            "status": status,
            "deleted": details.model.filename,
            "model_hash": details.model.hash,
            "deleted_paths": deleted_paths,
            "missing_paths": missing_paths,
            "errors": errors,
            "remaining_locations": len(remaining_locations),
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/workspace/models/scan")
@requires_environment
async def scan_workspace_models(request: web.Request, env) -> web.Response:
    """Scan the models directory for new/changed models."""
    try:
        changes = await run_sync(env.workspace.sync_model_directory)
        return web.json_response({
            "status": "success",
            "changes": changes,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/v2/workspace/models/directory")
@requires_environment
async def get_models_directory(request: web.Request, env) -> web.Response:
    """Get the current models directory path."""
    try:
        models_dir = env.workspace.workspace_config_manager.get_models_directory()
        return web.json_response({
            "path": str(models_dir) if models_dir else None,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/workspace/models/directory")
@requires_environment
async def set_models_directory(request: web.Request, env) -> web.Response:
    """Set a new models directory and scan for models."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    new_path = body.get("path")
    if not new_path:
        return web.json_response({"error": "Missing 'path' field"}, status=400)

    path = Path(new_path)
    if not path.exists():
        return web.json_response({"error": f"Path does not exist: {new_path}"}, status=400)
    if not path.is_dir():
        return web.json_response({"error": f"Path is not a directory: {new_path}"}, status=400)

    try:
        # Set the new models directory
        await run_sync(env.workspace.set_models_directory, path)

        # Scan the new directory
        models_indexed = await run_sync(env.workspace.sync_model_directory)

        return web.json_response({
            "status": "success",
            "path": str(path),
            "models_indexed": models_indexed,
        })
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/v2/workspace/models/details/{identifier}")
@requires_environment
async def get_workspace_model_details(request: web.Request, env) -> web.Response:
    """Get full details for a single model from the workspace index."""
    identifier = request.match_info["identifier"]

    try:
        details = await run_sync(env.workspace.get_model_details, identifier)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=400)
    except KeyError:
        return web.json_response({"error": f"Model not found: {identifier}"}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response(_model_details_payload(env, details))


@routes.post("/v2/workspace/models/{identifier}/hashes")
@requires_environment
async def compute_workspace_model_hashes(request: web.Request, env) -> web.Response:
    """Compute and store missing full hashes for a local workspace model."""
    identifier = request.match_info["identifier"]

    try:
        payload = await run_sync(_compute_missing_model_hashes, env, identifier)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=400)
    except KeyError:
        return web.json_response({"error": f"Model not found: {identifier}"}, status=404)
    except FileNotFoundError as e:
        return web.json_response({"error": str(e)}, status=400)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response(payload)


@routes.get("/v2/workspace/models/{identifier}/source-candidates")
@requires_environment
async def get_model_source_candidates(request: web.Request, env) -> web.Response:
    """Find candidate source URLs for an existing local model.

    The first implementation scans saved workflow files for likely model links.
    Provider search can be added to this endpoint without changing the caller's
    outcome: candidates can be used for download or provenance repair.
    """
    identifier = request.match_info["identifier"]

    try:
        details = await run_sync(env.workspace.get_model_details, identifier)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=400)
    except KeyError:
        return web.json_response({"error": f"Model not found: {identifier}"}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    model = details.model
    model_info = {
        "filename": model.filename,
        "hash": model.hash,
        "blake3": model.blake3_hash,
        "sha256": model.sha256_hash,
        "category": model.category,
    }

    try:
        workflow_candidates = await run_sync(_scan_workflow_source_candidates, env, model_info)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response({
        "model": model_info,
        "candidates": workflow_candidates,
    })


@routes.get("/v2/comfygit/workflow/{workflow_name}/model-source-candidates")
@requires_environment
async def get_missing_workflow_model_source_candidates(request: web.Request, env) -> web.Response:
    """Find source URLs for a missing model reference in one workflow.

    Unlike existing-model provenance repair, this keeps weak workflow-scoped
    candidates because author-provided Civitai or Hugging Face links may not
    contain the loader filename.
    """
    workflow_name = request.match_info["workflow_name"]
    filename = (request.query.get("filename") or "").strip()
    if not filename:
        return web.json_response({"error": "filename is required"}, status=400)

    model_info = {
        "filename": filename,
        "hash": None,
        "blake3": None,
        "sha256": None,
        "category": (request.query.get("category") or "").strip() or "unknown",
        "node_type": (request.query.get("node_type") or "").strip() or None,
    }

    try:
        workflow_candidates = await run_sync(
            _scan_workflow_source_candidates,
            env,
            model_info,
            workflow_name=workflow_name,
            require_identity_match=False,
            limit=50,
        )
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response({
        "model": model_info,
        "candidates": workflow_candidates,
    })


@routes.get("/v2/workspace/models/workflow-source-candidates")
@requires_environment
async def get_workflow_model_source_candidates(request: web.Request, env) -> web.Response:
    """Find likely model source URLs in saved workflow files.

    This general scan is used by the model download modal before a model exists
    in the local index. Per-model provenance repair should use the identifier
    scoped source-candidates endpoint instead.
    """
    try:
        workflow_candidates = await run_sync(_scan_workflow_download_candidates, env)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response({
        "candidates": workflow_candidates,
    })


def _is_wsl() -> bool:
    """Detect if running under Windows Subsystem for Linux."""
    try:
        with open("/proc/version", "r") as f:
            return "microsoft" in f.read().lower()
    except Exception:
        return False


def _wsl_path_to_windows(linux_path: str) -> str:
    """Convert a WSL Linux path to Windows path format."""
    try:
        result = subprocess.run(
            ["wslpath", "-w", linux_path],
            capture_output=True,
            text=True,
            timeout=5
        )
        if result.returncode == 0:
            return result.stdout.strip()
    except Exception:
        pass
    return linux_path


@routes.post("/v2/workspace/open-location")
@requires_environment
async def open_file_location(request: web.Request, env) -> web.Response:
    """Open a file's containing folder in the system file browser."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    file_path = body.get("path")
    if not file_path:
        return web.json_response({"error": "Missing 'path' field"}, status=400)

    path = Path(file_path)
    if not path.exists():
        return web.json_response({"error": f"Path does not exist: {file_path}"}, status=404)

    try:
        system = platform.system()

        if system == "Windows":
            # Windows: explorer /select,<path> to highlight the file
            subprocess.Popen(["explorer", "/select,", str(path)])
        elif system == "Darwin":
            # macOS: open -R reveals in Finder
            subprocess.Popen(["open", "-R", str(path)])
        elif _is_wsl():
            # WSL: Convert path to Windows format and use explorer.exe
            win_path = _wsl_path_to_windows(str(path))
            subprocess.Popen(["explorer.exe", "/select,", win_path])
        else:
            # Linux: open the containing directory
            parent = path.parent if path.is_file() else path
            subprocess.Popen(["xdg-open", str(parent)])

        return web.json_response({"status": "success"})
    except Exception as e:
        return web.json_response({"error": f"Failed to open location: {e}"}, status=500)


@routes.post("/v2/workspace/open-file")
@requires_environment
async def open_file(request: web.Request, env) -> web.Response:
    """Open a file in the system's default application (e.g., text editor for logs).

    Cross-platform support:
    - Windows: Uses 'start' command
    - macOS: Uses 'open' command
    - Linux: Uses 'xdg-open'
    - WSL: Converts path and uses Windows editor
    """
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    file_path = body.get("path")
    if not file_path:
        return web.json_response({"error": "Missing 'path' field"}, status=400)

    path = Path(file_path)
    if not path.exists():
        return web.json_response({"error": f"Path does not exist: {file_path}"}, status=404)

    if not path.is_file():
        return web.json_response({"error": f"Path is not a file: {file_path}"}, status=400)

    try:
        system = platform.system()

        if system == "Windows":
            # Windows: 'start' opens file with default application
            subprocess.Popen(["cmd", "/c", "start", "", str(path)], shell=False)
        elif system == "Darwin":
            # macOS: 'open' opens file with default application
            subprocess.Popen(["open", str(path)])
        elif _is_wsl():
            # WSL: Convert path to Windows format and use notepad.exe or default
            win_path = _wsl_path_to_windows(str(path))
            # Try to open with default Windows app
            subprocess.Popen(["cmd.exe", "/c", "start", "", win_path], shell=False)
        else:
            # Linux: xdg-open opens file with default application
            subprocess.Popen(["xdg-open", str(path)])

        return web.json_response({"status": "success"})
    except Exception as e:
        return web.json_response({"error": f"Failed to open file: {e}"}, status=500)


# =============================================================================
# HuggingFace integration endpoints
# =============================================================================


HF_MODEL_EXTS_EXTRA = [".gguf"]


def _clean_civitai_url(url: str) -> str:
    """Remove credential query params before returning or persisting CivitAI URLs."""
    try:
        parsed = urlparse(url)
    except Exception:
        return url

    query = parse_qs(parsed.query, keep_blank_values=True)
    query.pop("token", None)
    clean_query = urlencode(query, doseq=True)
    return parsed._replace(query=clean_query).geturl()


def _parse_civitai_url(value: str) -> dict:
    """Extract CivitAI lookup intent from a public/API URL."""
    parsed = urlparse(value)
    host = (parsed.hostname or "").lower()
    if host not in {"civitai.com", "www.civitai.com"}:
        return {"kind": "unknown"}

    parts = [part for part in parsed.path.split("/") if part]
    query = parse_qs(parsed.query)

    if len(parts) >= 4 and parts[:3] == ["api", "download", "models"] and parts[3].isdigit():
        return {
            "kind": "model_version",
            "version_id": int(parts[3]),
            "download_url": _clean_civitai_url(value),
            "download_params": {
                key: vals[0]
                for key, vals in query.items()
                if vals and key.lower() != "token"
            },
        }

    if len(parts) >= 3 and parts[:2] == ["api", "v1"] and parts[2] == "models":
        if len(parts) >= 4 and parts[3].isdigit():
            return {"kind": "model", "model_id": int(parts[3])}

    if len(parts) >= 3 and parts[:2] == ["api", "v1"] and parts[2] == "model-versions":
        if len(parts) >= 4 and parts[3].isdigit():
            return {"kind": "model_version", "version_id": int(parts[3])}

    if len(parts) >= 2 and parts[0] == "models" and parts[1].isdigit():
        version_id = (query.get("modelVersionId") or [None])[0]
        if version_id and version_id.isdigit():
            return {"kind": "model_version", "version_id": int(version_id)}
        return {"kind": "model", "model_id": int(parts[1])}

    if len(parts) >= 2 and parts[0] in {"user", "users"} and parts[1]:
        return {"kind": "user", "username": unquote(parts[1])}

    return {"kind": "unknown"}


def _enum_value(value):
    return getattr(value, "value", value)


def _civitai_hashes_to_dict(hashes) -> dict | None:
    if not hashes:
        return None
    return {
        "auto_v1": hashes.auto_v1,
        "auto_v2": hashes.auto_v2,
        "sha256": hashes.sha256,
        "crc32": hashes.crc32,
        "blake3": hashes.blake3,
    }


def _civitai_file_to_dict(file) -> dict:
    return {
        "id": file.id,
        "name": file.name,
        "size_kb": file.size_kb,
        "type": file.type,
        "primary": file.primary,
        "download_url": _clean_civitai_url(file.download_url) if file.download_url else None,
        "pickle_scan_result": file.pickle_scan_result,
        "pickle_scan_message": file.pickle_scan_message,
        "virus_scan_result": file.virus_scan_result,
        "scanned_at": file.scanned_at,
        "hashes": _civitai_hashes_to_dict(file.hashes),
        "metadata": {
            "fp": _enum_value(file.fp),
            "size": _enum_value(file.size),
            "format": _enum_value(file.format),
        },
    }


def _civitai_image_to_dict(image) -> dict:
    return {
        "id": image.id,
        "url": image.url,
        "nsfw": image.nsfw,
        "width": image.width,
        "height": image.height,
        "hash": image.hash,
    }


def _civitai_version_to_dict(version) -> dict:
    return {
        "id": version.id,
        "model_id": version.model_id,
        "name": version.name,
        "description": version.description,
        "created_at": version.created_at,
        "updated_at": version.updated_at,
        "base_model": version.base_model,
        "download_url": _clean_civitai_url(version.download_url) if version.download_url else None,
        "trained_words": version.trained_words or [],
        "download_count": version.download_count,
        "thumbs_up_count": getattr(version, "thumbs_up_count", 0),
        "rating_count": version.rating_count,
        "rating": version.rating,
        "model": {
            "name": version.model.name,
            "type": version.model.type,
            "nsfw": version.model.nsfw,
            "poi": version.model.poi,
        } if version.model else None,
        "files": [_civitai_file_to_dict(file) for file in (version.files or [])],
        "images": [_civitai_image_to_dict(image) for image in (version.images or [])],
    }


def _civitai_model_to_dict(model, *, matched_version_id: int | None = None) -> dict:
    return {
        "id": model.id,
        "name": model.name,
        "description": model.description,
        "type": _enum_value(model.type),
        "nsfw": model.nsfw,
        "tags": model.tags or [],
        "mode": model.mode,
        "creator": {
            "username": model.creator.username,
            "image": model.creator.image,
        } if model.creator else None,
        "download_count": model.download_count,
        "thumbs_up_count": getattr(model, "thumbs_up_count", 0),
        "favorite_count": model.favorite_count,
        "comment_count": model.comment_count,
        "rating_count": model.rating_count,
        "rating": model.rating,
        "matched_version_id": matched_version_id,
        "versions": [
            _civitai_version_to_dict(version)
            for version in (model.model_versions or [])
        ],
    }


def _civitai_client(env) -> CivitAIClient:
    cache_manager = APICacheManager(cache_base_path=env.workspace.paths.cache)
    return CivitAIClient(
        cache_manager=cache_manager,
        workspace_config=env.workspace.workspace_config_manager,
    )


def _shard_group(path: str) -> str | None:
    """Detect sharded model files like model-00001-of-00003.safetensors"""
    m = re.match(r"^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$", path, flags=re.IGNORECASE)
    if not m:
        return None
    return f"{m.group(1)}{m.group(4)}"


@routes.get("/v2/workspace/civitai/search")
@requires_environment
async def workspace_civitai_search(request: web.Request, env) -> web.Response:
    """Search or resolve CivitAI models for the model download UI.

    The query may be plain text, a creator page, a model page, a model-version
    API URL, or an api/download URL. Responses intentionally return clean URLs;
    stored workspace credentials are used only by server-side requests.
    """
    query = (request.query.get("query") or request.query.get("q") or "").strip()
    username = (request.query.get("username") or "").strip()
    model_type = (request.query.get("type") or request.query.get("types") or "").strip()
    sort = (request.query.get("sort") or "Relevance").strip()
    period = (request.query.get("period") or "AllTime").strip()
    try:
        nsfw_level = int(request.query.get("nsfw_level", 8))
    except (ValueError, TypeError):
        return web.json_response({"error": "NSFW level must be a valid integer"}, status=400)
    nsfw_level = max(1, min(nsfw_level, 32))

    try:
        limit = min(max(int(request.query.get("limit", 9)), 1), 9)
    except (ValueError, TypeError):
        return web.json_response({"error": "Limit must be a valid integer"}, status=400)

    try:
        page = max(int(request.query.get("page", 1)), 1)
    except (ValueError, TypeError):
        return web.json_response({"error": "Page must be a valid integer"}, status=400)

    client = _civitai_client(env)

    try:
        parsed = _parse_civitai_url(query) if query else {"kind": "unknown"}
        api_sort = None if sort.lower() == "relevance" else sort

        if parsed["kind"] == "model_version":
            version = await run_sync(client.get_model_version, parsed["version_id"])
            if not version:
                return web.json_response({"error": "CivitAI model version not found"}, status=404)

            model = None
            if version.model_id:
                model = await run_sync(client.get_model, version.model_id)

            result = _civitai_model_to_dict(model, matched_version_id=version.id) if model else None
            return web.json_response({
                "query": query,
                "mode": "model_version",
                "version": _civitai_version_to_dict(version),
                "download_url": parsed.get("download_url") or _clean_civitai_url(version.download_url or ""),
                "download_params": parsed.get("download_params") or {},
                "results": [result] if result else [],
            })

        if parsed["kind"] == "model":
            model = await run_sync(client.get_model, parsed["model_id"])
            if not model:
                return web.json_response({"error": "CivitAI model not found"}, status=404)
            return web.json_response({
                "query": query,
                "mode": "model",
                "results": [_civitai_model_to_dict(model)],
            })

        if parsed["kind"] == "user":
            username = parsed["username"]
            query = ""

        if not query and not username:
            return web.json_response({"error": "Query must be at least 2 characters"}, status=400)
        if query and len(query) < 2:
            return web.json_response({"error": "Query must be at least 2 characters"}, status=400)

        search_kwargs = {
            "query": query or None,
            "username": username or None,
            "limit": limit,
            "page": page,
            "sort": api_sort,
            "period": period or None,
            "nsfw": "true" if nsfw_level > 2 else "false",
        }
        if query:
            # The public CivitAI API has historically rejected page+query combos.
            search_kwargs.pop("page", None)
        if model_type:
            search_kwargs["types"] = model_type

        if query:
            search_result = await run_sync(
                client.search_models_ranked,
                query,
                limit=limit,
                types=model_type or None,
                username=username or None,
                sort=api_sort,
                nsfw_level=nsfw_level,
            )
        else:
            search_result = await run_sync(client.search_models, **search_kwargs)
        return web.json_response({
            "query": query,
            "username": username or None,
            "mode": "user" if username else "search",
            "metadata": {
                "total_items": search_result.total_items,
                "current_page": search_result.current_page,
                "page_size": search_result.page_size,
                "total_pages": search_result.total_pages,
                "next_page": search_result.next_page,
                "prev_page": search_result.prev_page,
            },
            "results": [_civitai_model_to_dict(model) for model in search_result.items],
        })
    except CivitAIError as e:
        return web.json_response({"error": str(e)}, status=502)
    except Exception as e:
        return web.json_response({"error": f"CivitAI search failed: {e}"}, status=500)


@routes.get("/v2/workspace/civitai/model/{model_id}")
@requires_environment
async def workspace_civitai_model(request: web.Request, env) -> web.Response:
    """Fetch one CivitAI model with versions and files."""
    try:
        model_id = int(request.match_info["model_id"])
    except (KeyError, ValueError):
        return web.json_response({"error": "Invalid model ID"}, status=400)

    client = _civitai_client(env)
    try:
        model = await run_sync(client.get_model, model_id)
    except CivitAIError as e:
        return web.json_response({"error": str(e)}, status=502)

    if not model:
        return web.json_response({"error": "CivitAI model not found"}, status=404)
    return web.json_response({"model": _civitai_model_to_dict(model)})


@routes.get("/v2/workspace/civitai/model-version/{version_id}")
@requires_environment
async def workspace_civitai_model_version(request: web.Request, env) -> web.Response:
    """Fetch one CivitAI model version with files."""
    try:
        version_id = int(request.match_info["version_id"])
    except (KeyError, ValueError):
        return web.json_response({"error": "Invalid model version ID"}, status=400)

    client = _civitai_client(env)
    try:
        version = await run_sync(client.get_model_version, version_id)
    except CivitAIError as e:
        return web.json_response({"error": str(e)}, status=502)

    if not version:
        return web.json_response({"error": "CivitAI model version not found"}, status=404)
    return web.json_response({
        "version": _civitai_version_to_dict(version),
        "download_url": _clean_civitai_url(version.download_url or ""),
    })


@routes.get("/v2/workspace/huggingface/repo-info")
@requires_environment
async def workspace_huggingface_repo_info(request: web.Request, env) -> web.Response:
    """Get file listing for a HuggingFace repository."""
    url = (request.query.get("url") or "").strip()
    if not url:
        return web.json_response({"error": "Missing required query param: url"}, status=400)

    # Use core parser for consistency with ModelDownloader
    parsed = parse_huggingface_url(url)
    if parsed.kind == "unknown":
        return web.json_response({"error": "Not a valid HuggingFace model URL"}, status=400)
    if not parsed.repo_id:
        return web.json_response({"error": "Could not extract repository ID from URL"}, status=400)

    repo_id = parsed.repo_id
    revision = parsed.revision or "main"

    token = os.environ.get("HF_TOKEN") or os.environ.get("HUGGINGFACE_TOKEN")
    api = HfApi(token=token if token else None)

    try:
        info = api.model_info(repo_id=repo_id, revision=revision, files_metadata=True)
    except Exception as e:
        error_str = str(e)
        if "401" in error_str or "403" in error_str:
            return web.json_response({
                "error": "This repository requires authentication. Set HF_TOKEN environment variable."
            }, status=401)
        if "404" in error_str:
            return web.json_response({
                "error": f"Repository not found: {repo_id}"
            }, status=404)
        return web.json_response({"error": f"Failed to fetch repo info: {e}"}, status=400)

    model_cfg = ModelConfig.load()
    model_exts = set([e.lower() for e in (model_cfg.default_extensions or [])] + HF_MODEL_EXTS_EXTRA)

    files = []
    for sib in (info.siblings or []):
        path = getattr(sib, "rfilename", None)
        if not path:
            continue
        size = getattr(sib, "size", None) or 0
        lower = path.lower()
        is_model_file = any(lower.endswith(ext) for ext in model_exts)
        files.append({
            "path": path,
            "size": size,
            "is_model_file": is_model_file,
            "shard_group": _shard_group(path),
        })

    return web.json_response({
        "repo_id": repo_id,
        "revision": revision,
        "files": files,
    })


@routes.get("/v2/workspace/models/subdirectories")
@requires_environment
async def workspace_models_subdirectories(request: web.Request, env) -> web.Response:
    """List available model subdirectories for destination picker."""
    model_cfg = ModelConfig.load()
    standard = list(model_cfg.standard_directories or [])

    models_dir = None
    try:
        models_dir = env.workspace.workspace_config_manager.get_models_directory()
    except Exception:
        pass

    existing = []
    if models_dir and models_dir.exists():
        try:
            existing = sorted([
                p.name for p in models_dir.iterdir()
                if p.is_dir() and not p.name.startswith(".")
            ])
        except Exception:
            existing = []

    merged = sorted(set(standard) | set(existing))

    return web.json_response({
        "directories": merged,
        "standard": standard,
        "existing": existing,
    })


@routes.get("/v2/workspace/huggingface/search")
@requires_environment
async def huggingface_search(request: web.Request, env) -> web.Response:
    """Search HuggingFace Hub for model repositories."""
    query = (request.query.get("query") or "").strip()
    if len(query) < 2:
        return web.json_response({"error": "Query must be at least 2 characters"}, status=400)

    try:
        limit = min(int(request.query.get("limit", 10)), 20)
    except (ValueError, TypeError):
        return web.json_response({"error": "Limit must be a valid integer"}, status=400)

    token = os.environ.get("HF_TOKEN") or os.environ.get("HUGGINGFACE_TOKEN")
    api = HfApi(token=token if token else None)

    try:
        models = list(api.list_models(search=query, limit=limit, sort="downloads"))
    except Exception as e:
        return web.json_response({"error": f"Search failed: {e}"}, status=500)

    results = []
    for m in models:
        results.append({
            "repo_id": m.id,
            "description": getattr(m, 'description', None) or (m.card_data.description[:200] if hasattr(m, 'card_data') and m.card_data and hasattr(m.card_data, 'description') and m.card_data.description else None),
            "downloads": getattr(m, 'downloads', 0) or 0,
            "likes": getattr(m, 'likes', 0) or 0,
            "tags": getattr(m, 'tags', []) or []
        })

    return web.json_response({"results": results, "query": query})
