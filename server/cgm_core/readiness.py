"""Async adapter for core environment readiness checks."""

from __future__ import annotations

from comfygit_core.services.environment_readiness import (
    build_environment_readiness as build_environment_readiness_sync,
)

from cgm_utils.async_helpers import run_sync


async def build_environment_readiness(env, *, include_blocking: bool = True) -> dict:
    """Run core readiness checks without blocking the aiohttp event loop."""
    readiness = await run_sync(
        build_environment_readiness_sync,
        env,
        include_blocking=include_blocking,
    )
    return readiness.to_dict()
