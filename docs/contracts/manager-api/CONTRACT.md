# Manager API Contract

This contract defines the manager backend API surface used by the local manager frontend for workflow contract authoring and related workflow operations.

## Scope

This surface covers:
- manager HTTP endpoints consumed by the local panel
- workflow contract read/write operations
- workflow summary/detail payloads exposed to the local manager UI

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

### CGM-API-07 [PLANNED]: Manager contract operations should target a workflow's stable identity, not only its display name
Validation: HUMAN_REVIEW

The long-term API direction should support workflow-stable identity so contract state survives workflow renames more cleanly than a purely filename-based model.
