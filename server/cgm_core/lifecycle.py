"""Async adapter for core environment lifecycle status."""

from __future__ import annotations

from comfygit_core.models import LifecycleRuntimeState

from cgm_core.runtime_imports import collect_runtime_import_report
from cgm_utils.async_helpers import run_sync


async def build_environment_lifecycle_status(
    env,
    *,
    include_readiness: bool = True,
    status=None,
) -> dict:
    """Build Manager's lifecycle status payload without blocking aiohttp.

    Core owns the durable manifest/filesystem/snapshot decision policy. Manager
    enriches that policy with runtime observations only available inside the
    live ComfyUI process.
    """
    if status is None:
        status = await run_sync(env.status)

    runtime_state = await _build_runtime_state(env, status=status)
    lifecycle_status = await run_sync(
        env.get_lifecycle_status,
        status=status,
        include_readiness=include_readiness,
        runtime_state=runtime_state,
    )

    payload = lifecycle_status.to_dict()
    payload["runtime_state"] = runtime_state.to_dict()
    return payload


async def _build_runtime_state(env, *, status) -> LifecycleRuntimeState:
    try:
        nodes = await run_sync(env.list_nodes)
        runtime_import_report = await run_sync(
            collect_runtime_import_report,
            env,
            nodes=nodes,
            status=status,
        )
    except Exception:
        return LifecycleRuntimeState(
            comfyui_reachable=None,
            message="Runtime import health is unavailable.",
        )

    if not runtime_import_report.available:
        return LifecycleRuntimeState(comfyui_reachable=None)

    return LifecycleRuntimeState(
        comfyui_reachable=True,
        import_errors=tuple(failure.name for failure in runtime_import_report.failures),
    )
