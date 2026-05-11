"""Async adapter for core environment readiness checks."""

from __future__ import annotations

from comfygit_core.services.environment_readiness import (
    build_environment_readiness as build_environment_readiness_sync,
)

from cgm_core.runtime_imports import collect_runtime_import_report
from cgm_utils.async_helpers import run_sync


async def build_environment_readiness(env, *, include_blocking: bool = True) -> dict:
    """Run core readiness checks without blocking the aiohttp event loop."""
    readiness = await run_sync(
        build_environment_readiness_sync,
        env,
        include_blocking=include_blocking,
    )
    readiness_payload = readiness.to_dict()
    warnings = readiness_payload.setdefault("warnings", {})
    warnings.setdefault("models_without_sources", [])
    warnings.setdefault("nodes_without_provenance", [])

    try:
        status = await run_sync(env.status)
        nodes = await run_sync(env.list_nodes)
        runtime_import_report = await run_sync(
            collect_runtime_import_report,
            env,
            nodes=nodes,
            status=status,
        )
        warnings["runtime_node_import_failures"] = [
            failure.to_readiness_warning()
            for failure in runtime_import_report.failures
        ]
    except Exception:
        warnings["runtime_node_import_failures"] = []

    return readiness_payload
