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

### CGM-ENV-11A [LIVE]: Git environment import should be ref-aware
Validation: TEST

When importing an environment from a Git repository, the manager should not
implicitly assume the remote default branch is the desired source.

The import flow should discover remote branches and tags, select the remote
default branch when available, and let the user choose the ref before preview.
The selected ref should be sent to both preview and execute so the environment
that gets materialized is the same repository state the user reviewed.

Commit-level selection is useful for reproducibility, but it may be layered on
after branch and tag selection. Until commit selection exists, the flow should
still surface the selected branch or tag and the tip commit returned by remote
ref discovery when available.

### CGM-ENV-11B [LIVE]: Import progress should remain inspectable at completion
Validation: TEST

Environment import is a workspace-level lifecycle operation that may install
Python packages, sync custom nodes, copy workflows, resolve model references,
and download models. The manager should expose progress and recent lifecycle
logs while this operation runs.

The import progress surface should stay available after terminal success so
users can verify or copy logs. If switch-after-import is enabled, the switch
confirmation may be layered on top of the completed import surface instead of
closing the import context first.

The completion action should be part of the progress surface footer rather than
inline body content, so users can always close the completed import without
scrolling through logs or lifecycle details. When the user activates that
completion action, the manager should close the import surface and refresh the
environment-specific data sources used by the panel shell and the environments
section so the imported environment is reflected in navigation without relying
on unrelated status refreshes.

### CGM-ENV-11C [PARTIAL]: Unmanaged local ComfyUI installs should have a best-effort adoption path
Validation: MIXED

When the manager is running inside an unmanaged local ComfyUI install and a
ComfyGit workspace exists, the setup flow should offer an `Import Current
Environment` path. This path should scan the currently running ComfyUI
directory, create a normal managed ComfyGit environment in the selected
workspace, copy discoverable workflow files and custom-node checkouts into that
environment, and then let the user switch to it through the existing local
orchestrator flow.

This adoption path is best-effort. It should not claim that every dependency is
fully portable merely because it was present in the unmanaged runtime. Unknown
custom-node provenance, Python package drift, and unresolved model sources
should remain visible through the normal ComfyGit status, readiness, and
resolution surfaces after import.

The unmanaged source ComfyUI directory must not be converted in place. Import
current environment creates a sibling managed environment and leaves the
original runtime available until the user explicitly switches.

### CGM-ENV-12 [LIVE]: Manager-created environments should use supported ComfyUI releases
Validation: TEST

The manager environment creation flow should only offer ComfyUI release choices
that preserve the manager integration surfaces it depends on.

The supported release floor is `v0.4.0`. Releases below that floor may still run
ComfyUI itself, but they do not provide the native frontend manager integration
needed for the expected custom-node browsing and install flow. The manager API
should filter unsupported release tags from the creation selector and reject
explicit create requests for unsupported release tags. The selector should fetch
enough release history to expose supported older releases down to this floor,
not just the newest release page.

### CGM-ENV-13 [LIVE]: `cg run` supervision may consume local switch requests
Validation: TEST

When ComfyUI is launched by `cg run` as the long-lived process, especially in
Docker dev containers where PID 1 is a fixed `cg -e <env> run` command, the
manager should not spawn a separate temporary orchestrator for environment
switching.

In that runtime shape, the ComfyUI child may exit with the switch code and the
existing `cg run` process should consume the workspace switch request, sync the
target environment with the same launch options, release the switch lock, and
start ComfyUI for the target environment. This prevents Docker restart policy
from relaunching the original fixed environment and killing the temporary
orchestrator before the switch can complete.

### CGM-ENV-14 [PARTIAL]: Switch progress should be observable outside ComfyUI
Validation: MIXED

Environment switch progress should not depend only on endpoints served by the
ComfyUI process that is being stopped and replaced.

The active lifecycle authority, either the manager-spawned orchestrator or the
`cg run` supervisor, should expose a small switch-observation surface that
survives ComfyUI restarts. That surface should provide the current switch
status and recent supervisor log lines through a stable JSON shape so the
frontend can show real progress and debugging context instead of relying only
on simulated progress.

For local desktop and containerized development, that observer must be
reachable from the user's browser, not only from inside the ComfyUI process.
Manager-spawned orchestrators should therefore advertise a direct observer URL
before the source ComfyUI process exits, using the same public request host as
the panel and the selected control-server port.

The shared schema, metadata filenames, status/log file helpers, observer URL
payload shape, and HTTP observer server belong to ComfyGit core so CLI and
manager lifecycle authorities do not drift. The CLI and manager may still own
their process-specific handoff decisions, but they should call the same core
observer primitives for status and log publication.

The observer's terminal success state means the target ComfyUI process is
actually reachable, not just that the old environment stopped or the new child
process was launched. During target boot, the authority should stay in a
validation state and stream target startup output into the same lifecycle log
when it owns the child process.

Readiness checks should use shared core lifecycle helpers that parse the same
ComfyUI arguments used for launch, including `--listen` and `--port`, plus
configured defaults. Wildcard bind addresses may be probed through a local
loopback address by the same supervisor, but explicit listen hosts should be
preserved.

This remains partial until both supervisor modes are covered by automated
handoff tests and the switch modal consumes them without falling back to noisy
failed polling during normal handoff.
