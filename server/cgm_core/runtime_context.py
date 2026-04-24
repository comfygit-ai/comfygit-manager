"""Runtime context and lifecycle capability helpers.

This module normalizes launch-time process state into an API-facing contract.
Environment variables may seed the context, but callers should consume the
normalized payload and capability checks.
"""

from __future__ import annotations

from copy import deepcopy
from dataclasses import dataclass, field
import json
import os
from pathlib import Path
from typing import Any, Literal


RuntimeMode = Literal[
    "local_unmanaged",
    "local_managed",
    "local_orchestrated",
    "cloud_bound",
]
LifecycleAuthority = Literal["manager", "orchestrator", "cloud"]


DEFAULT_CAPABILITIES: dict[str, bool] = {
    "can_initialize_workspace": False,
    "can_create_environment": False,
    "can_switch_environment": False,
    "can_restart_current": True,
    "can_stop_current": True,
    "can_delete_environment": False,
}

CLOUD_BOUND_CAPABILITIES: dict[str, bool] = {
    "can_initialize_workspace": False,
    "can_create_environment": False,
    "can_switch_environment": False,
    "can_restart_current": False,
    "can_stop_current": False,
    "can_delete_environment": False,
}


@dataclass
class RuntimeContext:
    """Normalized runtime lifecycle context exposed to the manager UI."""

    mode: RuntimeMode
    lifecycle_authority: LifecycleAuthority
    capabilities: dict[str, bool]
    bound_workspace: str | None = None
    bound_environment: str | None = None
    bound_ref: str | None = None
    bound_commit: str | None = None
    cloud_session_id: str | None = None
    source: str = "detected"
    denial_reasons: dict[str, str] = field(default_factory=dict)

    def to_dict(self) -> dict[str, Any]:
        return {
            "mode": self.mode,
            "lifecycle_authority": self.lifecycle_authority,
            "capabilities": self.capabilities,
            "bound_workspace": self.bound_workspace,
            "bound_environment": self.bound_environment,
            "bound_ref": self.bound_ref,
            "bound_commit": self.bound_commit,
            "cloud_session_id": self.cloud_session_id,
            "source": self.source,
            "denial_reasons": self.denial_reasons,
        }


def _read_context_file() -> dict[str, Any]:
    context_file = os.environ.get("COMFYGIT_RUNTIME_CONTEXT_FILE")
    if not context_file:
        return {}

    path = Path(context_file)
    if not path.exists() or not path.is_file():
        return {}

    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return {}

    return data if isinstance(data, dict) else {}


def _truthy_env(name: str) -> bool | None:
    if name not in os.environ:
        return None
    return os.environ[name].strip().lower() in {"1", "true", "yes", "on"}


def _capabilities_for_detected_state(
    setup_state: str,
    *,
    is_supervised: bool,
) -> tuple[RuntimeMode, LifecycleAuthority, dict[str, bool]]:
    caps = deepcopy(DEFAULT_CAPABILITIES)

    if setup_state == "no_workspace":
        mode: RuntimeMode = "local_unmanaged"
        authority: LifecycleAuthority = "manager"
        caps["can_initialize_workspace"] = True
        return mode, authority, caps

    if setup_state in {"empty_workspace", "unmanaged"}:
        mode = "local_unmanaged"
        authority = "manager"
        caps["can_create_environment"] = True
        caps["can_switch_environment"] = setup_state == "unmanaged"
        caps["can_delete_environment"] = setup_state == "unmanaged"
        return mode, authority, caps

    if is_supervised:
        mode = "local_orchestrated"
        authority = "orchestrator"
    else:
        mode = "local_managed"
        authority = "manager"

    caps["can_create_environment"] = True
    caps["can_switch_environment"] = True
    caps["can_delete_environment"] = True
    return mode, authority, caps


def build_runtime_context(
    setup_state: str,
    *,
    workspace_path: str | None = None,
    current_environment: str | None = None,
    is_supervised: bool | None = None,
) -> RuntimeContext:
    """Build the normalized runtime context for the current process."""

    context_data = _read_context_file()
    runtime_mode = (
        context_data.get("mode")
        or os.environ.get("COMFYGIT_RUNTIME_MODE")
        or ""
    )
    source = "context_file" if context_data else "environment" if runtime_mode else "detected"

    if is_supervised is None:
        is_supervised = os.environ.get("COMFYGIT_SUPERVISED") == "1"

    if runtime_mode == "cloud_bound":
        caps = deepcopy(CLOUD_BOUND_CAPABILITIES)
        caps.update({
            key: bool(value)
            for key, value in context_data.get("capabilities", {}).items()
            if key in caps
        })

        for cap_name in list(caps):
            env_value = _truthy_env(f"COMFYGIT_CAPABILITY_{cap_name.upper()}")
            if env_value is not None:
                caps[cap_name] = env_value

        return RuntimeContext(
            mode="cloud_bound",
            lifecycle_authority="cloud",
            capabilities=caps,
            bound_workspace=context_data.get("bound_workspace") or workspace_path,
            bound_environment=context_data.get("bound_environment") or current_environment,
            bound_ref=context_data.get("bound_ref") or os.environ.get("COMFYGIT_BOUND_REF"),
            bound_commit=context_data.get("bound_commit") or os.environ.get("COMFYGIT_BOUND_COMMIT"),
            cloud_session_id=context_data.get("cloud_session_id") or os.environ.get("COMFYGIT_CLOUD_SESSION_ID"),
            source=source,
            denial_reasons=context_data.get("denial_reasons", {}) if isinstance(context_data.get("denial_reasons"), dict) else {},
        )

    mode, authority, caps = _capabilities_for_detected_state(
        setup_state,
        is_supervised=is_supervised,
    )
    return RuntimeContext(
        mode=mode,
        lifecycle_authority=authority,
        capabilities=caps,
        bound_workspace=workspace_path,
        bound_environment=current_environment,
        source=source,
    )


def operation_denied_response(
    context: RuntimeContext,
    capability: str,
    *,
    status: int = 403,
):
    """Return a JSON response for a denied lifecycle operation."""
    from aiohttp import web

    reason = context.denial_reasons.get(
        capability,
        f"Operation is not available in {context.mode} runtime mode.",
    )
    return web.json_response(
        {
            "error": "runtime_capability_denied",
            "reason": capability,
            "message": reason,
            "runtime": context.to_dict(),
        },
        status=status,
    )


def ensure_capability(context: RuntimeContext, capability: str):
    """Return a denial response when a lifecycle capability is unavailable."""
    if context.capabilities.get(capability):
        return None
    return operation_denied_response(context, capability)
