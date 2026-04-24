# Environment Lifecycle And Orchestrator

## Purpose

This spec defines manager expectations for switching ComfyGit environments,
supervising managed ComfyUI startup, and deciding which runtime lifecycle
actions are available in a given launch context.

The local orchestrator remains a manager-owned affordance for local desktop and
local development use. Cloud deployment, cloud build orchestration, provider
operations, and cloud-bound session lifecycle remain cloud-owned.

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

### CGM-ENV-07 [PARTIAL]: Runtime lifecycle authority should be expressed as an explicit context contract
Validation: MIXED

The manager backend should expose a runtime context that tells the frontend who
owns lifecycle decisions for the current ComfyUI process.

The context should include at least:

- runtime mode, such as `local_unmanaged`, `local_managed`,
  `local_orchestrated`, or `cloud_bound`
- lifecycle authority, such as `manager`, `orchestrator`, or `cloud`
- optional bound workspace, environment, ref, commit, or cloud session identity
- a capability map for lifecycle and setup actions

The frontend should not infer lifecycle authority only from path shape,
environment names, or individual process environment variables.

### CGM-ENV-08 [PARTIAL]: Environment variables may seed runtime context, but they are not the frontend contract
Validation: HUMAN_REVIEW

Launch-time inputs such as `COMFYGIT_RUNTIME_MODE` or a
`COMFYGIT_RUNTIME_CONTEXT_FILE` may be used by Docker, cloud workers, or local
scripts to seed the backend runtime context.

Those inputs should be normalized by the manager backend into the explicit
runtime context returned by API responses. UI code should consume the normalized
context and capabilities rather than reading or assuming launch environment
variables directly.

### CGM-ENV-09 [PARTIAL]: Lifecycle endpoints should enforce runtime capabilities server-side
Validation: TEST

Lifecycle-sensitive endpoints such as environment switch, restart, stop,
workspace initialization, environment creation, and environment deletion should
check the runtime context before performing mutations.

Hiding buttons in the frontend is not enough. If the runtime context says an
operation is unavailable, the backend should reject the request with a clear
machine-readable reason.

### CGM-ENV-10 [PARTIAL]: Cloud-bound manager sessions should be inspect/edit surfaces, not environment switch authorities
Validation: MIXED

When the manager is running inside a cloud-bound authoring or execution session,
the active process should be treated as bound to the workspace/environment/ref
chosen by the cloud control plane.

In that mode, the manager may inspect and edit allowed environment-local state,
but it should not:

- switch to a different environment
- initialize an unrelated local workspace
- create or delete sibling local environments
- stop or restart the process except through an explicitly allowed same-session
  action

Changing the bound environment, ref, commit, build, or cloud session should be
owned by the outer cloud dashboard or cloud API.

### CGM-ENV-11 [PARTIAL]: Local bootstrap and local orchestrator modes should remain first-class
Validation: HUMAN_REVIEW

The runtime context system should preserve the current local adoption path:
users may install the manager as a custom node, initialize a workspace, create
or import a managed environment, and switch into that environment through the
local orchestrator.

The cloud-bound restrictions in `CGM-ENV-10` should not remove local desktop
bootstrap behavior. They should make lifecycle authority explicit so local and
cloud contexts can diverge safely.
