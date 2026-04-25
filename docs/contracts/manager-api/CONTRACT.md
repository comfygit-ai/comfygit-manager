# Manager API Contract

This contract defines the manager backend API surface used by the local manager
frontend for workflow contract authoring, workflow operations, resource
resolution, model downloads, and local environment lifecycle actions.

## Scope

This surface covers:
- manager HTTP endpoints consumed by the local panel
- workflow contract read/write operations
- workflow summary/detail payloads exposed to the local manager UI
- resource-resolution and model-download endpoints consumed by the panel
- local environment switch and status endpoints consumed by the panel
- runtime context and lifecycle capability payloads consumed by the panel

This surface does not define:
- cloud control-plane APIs
- public execution APIs
- worker/provider runtime protocols

### CGM-API-01 [LIVE]: The manager API should remain the frontend's primary path for workflow metadata and mutation
Validation: LLM_REVIEW

The manager frontend should not directly mutate core manifest files or infer durable state solely in the browser. Durable workflow metadata and contract operations should flow through manager API endpoints.

### CGM-API-02 [PLANNED]: The manager API must expose a workflow execution contract read endpoint
Validation: TEST

The manager backend should provide a workflow-scoped endpoint to read the saved execution contract for a workflow, including enough metadata for the frontend to render inputs, outputs, and summary state.

### CGM-API-03 [PLANNED]: The manager API must expose a workflow execution contract write endpoint
Validation: TEST

The manager backend should provide a workflow-scoped endpoint to create or replace the saved execution contract for a workflow. Writes should produce a portable contract owned by ComfyGit core persistence.

### CGM-API-04 [PLANNED]: Workflow summary payloads should expose contract presence and compact health
Validation: TEST

The workflow list payload should carry manager-usable contract summary data such as:
- whether a contract exists
- input/output counts
- whether the saved contract appears stale or incomplete

### CGM-API-05 [PLANNED]: Workflow detail payloads should expose contract state separately from dependency state
Validation: TEST

The workflow detail payload should distinguish dependency information from execution-contract information rather than overloading model/node detail payloads with contract semantics.

### CGM-API-06 [PLANNED]: Manager contract endpoints should remain stable across graph-authoring UI iterations
Validation: HUMAN_REVIEW

The API shape used by the manager UI for contract authoring should not depend on the exact current modal layout or graph-selection implementation. Backend payloads should represent contract state, not transient frontend interaction state.

### CGM-API-07 [PLANNED]: Manager contract operations may target a workflow's current environment-local name/path identity for the initial slice
Validation: HUMAN_REVIEW

For the initial workflow-contract feature, manager API operations may remain
workflow-scoped by the current environment-local workflow name or path, because
ComfyGit already treats workflow rename as delete-plus-create rather than
rename-preserving identity. A later enhancement may add workflow-stable
identity if rename-preserving workflow metadata becomes a requirement.

### CGM-API-08 [LIVE]: Resource analysis endpoints should preserve workflow analysis mode
Validation: LLM_REVIEW

When the API analyzes workflow resources, payloads should preserve whether the
input came from saved workflow state, an explicitly selected workflow file, or
browser-provided workflow JSON.

The frontend should not have to infer durable workflow identity from an
ambiguous analysis response.

### CGM-API-09 [LIVE]: Apply-resolution endpoints should distinguish installs from download intents
Validation: LLM_REVIEW

Resource resolution mutation responses should separately expose node installs,
queued or returned model download intents, and unresolved manual actions.

This distinction prevents the UI from treating a queued model download as if it
were already installed.

### CGM-API-10 [LIVE]: Model-source endpoints should carry provider-specific metadata without hiding the generic model shape
Validation: LLM_REVIEW

Hugging Face and direct URL endpoints may expose provider-specific fields, but
the resulting model selections should still map to a generic manager model
source shape that includes source, destination, and filename.

### CGM-API-11 [PARTIAL]: Environment switch status should expose terminal failure states
Validation: TEST

The environment switch/status API should report explicit terminal failure when
startup, restart, or health validation fails.

This remains partial until timeout and stale-lock behavior are consistently
observable through API responses and tests.

### CGM-API-12 [PARTIAL]: Managed ComfyUI process status should support stale-state recovery
Validation: TEST

The manager backend should provide enough switch-lock, process, or heartbeat
state for clients and tests to distinguish an in-progress switch from a stale
or crashed process state.

### CGM-API-13 [PARTIAL]: Runtime context should be exposed through manager API payloads
Validation: MIXED

The manager API should expose the normalized runtime context and capability map
needed by the frontend to decide which lifecycle and setup controls are
available.

At minimum, the API contract should support:

- runtime mode
- lifecycle authority
- lifecycle/setup capability flags
- optional bound workspace, environment, ref, commit, or cloud session identity
- machine-readable denial reasons when unavailable operations are requested

The detailed lifecycle semantics are specified by `CGM-ENV-07` through
`CGM-ENV-11` in `docs/specs/environment-lifecycle-and-orchestrator.md`.

### CGM-API-14 [LIVE]: Node criticality updates must flow through manager API and core
Validation: TEST

The manager API should expose package-level criticality for tracked custom
nodes and provide a mutation endpoint that validates `required` or `optional`
before persisting the value through ComfyGit core.

The frontend must not edit manifest files directly or treat browser-only state
as durable node criticality. Missing criticality in older manifests should be
reported as `required` so readiness behavior remains conservative.
