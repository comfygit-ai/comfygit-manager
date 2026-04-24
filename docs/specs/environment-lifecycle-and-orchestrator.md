# Environment Lifecycle And Orchestrator

## Purpose

This spec defines local manager expectations for switching ComfyGit
environments and supervising managed ComfyUI startup.

This is local development/runtime behavior inside the manager. It is separate
from cloud deployment, cloud build orchestration, and provider operations.

## Clauses

### CGM-ENV-01 [LIVE]: Environment switching should be orchestrator-supervised when the orchestrator is active
Validation: LLM_REVIEW

When the manager orchestrator is running, environment switch requests should
flow through orchestrator-owned state rather than direct unsupervised process
mutation.

### CGM-ENV-02 [LIVE]: Unsupervised instances should warn or block unsafe switch actions
Validation: LLM_REVIEW

If the panel is attached to an unsupervised ComfyUI instance while an
orchestrator-managed instance exists, the manager should avoid pretending it can
safely switch the orchestrated environment from the wrong process.

The UI should warn or block actions that would create conflicting environment
state.

### CGM-ENV-03 [PARTIAL]: Switch progress should fail visibly on health timeout
Validation: TEST

Environment switch status should reach an explicit failure state when ComfyUI
does not become healthy within the timeout.

The user should not be left with an indefinitely progressing status after a
startup crash or health-check timeout.

### CGM-ENV-04 [PARTIAL]: Switch locks should recover from dead or crashed processes
Validation: TEST

Switch locks and status files should have enough process or heartbeat context
to detect stale locks after crashes such as abrupt interpreter exits.

This remains partial until stale-lock recovery and heartbeat behavior are
covered by focused tests.

### CGM-ENV-05 [LIVE]: Crash retry should be bounded and visible enough for diagnosis
Validation: LLM_REVIEW

The orchestrator may retry managed ComfyUI startup after a crash, but retry
behavior should be bounded and should leave useful logs or status for the user
and developer to diagnose the failure.

### CGM-ENV-06 [LIVE]: Environment detail payloads should expose user-facing summary state
Validation: LLM_REVIEW

Environment detail APIs and UI should expose useful summary state such as
environment name, creation time when available, active status, and dependency
counts without requiring users to inspect raw files.

