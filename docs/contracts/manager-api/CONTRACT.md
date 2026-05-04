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

The manager backend should provide a workflow-scoped endpoint to create or
replace the saved execution contract for a workflow. Writes should produce a
portable contract owned by ComfyGit core persistence.

The contract write payload should include the ComfyUI-native API-format prompt
captured by the frontend for the currently loaded graph. The backend should
persist that prompt as a tracked artifact and store its path/provenance in the
workflow execution contract metadata.

### CGM-API-03A [PLANNED]: Contract writes must not rely on backend API-format regeneration
Validation: TEST

The manager backend should reject or mark incomplete contract writes that lack a
captured API prompt artifact. It should not call a core-side UI-workflow-to-API
converter as a fallback, because ComfyUI frontend export behavior is the
supported source for contract execution prompts.

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

### CGM-API-09A [LIVE]: Apply-resolution endpoints should report saved workflow resource-decision mutations
Validation: TEST

When the user changes a workflow node or model decision, the apply-resolution
response should expose the durable manifest mutation separately from
install/download work.

The response should distinguish at least:

- `nodes_mapped`: node types mapped to an already installed node package
- `nodes_marked_optional`: node types explicitly marked optional for the
  workflow
- `nodes_optional_cleared`: previously saved node decisions removed by an
  explicit skip or replacement
- `models_marked_optional`: model references explicitly marked optional for the
  workflow
- `model_download_intents_changed`: model download intents added, changed, or
  cleared by explicit user action

These fields let the frontend show an accurate completion summary even when no
node package install or model download is triggered.

Current implementation note: the Manager API owns this mutation path today.
The policy should migrate into ComfyGit core as a typed workflow
resource-decision service before the CLI needs parity with the panel.

### CGM-API-09B [PLANNED]: Node install actions should carry explicit source intent
Validation: MIXED

Node install payloads produced by resource resolution should distinguish
registry installs from git installs.

The API may use the local global mappings table to produce candidate package
metadata, but registry install execution should validate against the live
registry install endpoint before continuing. If no live registry artifact is
available, the API should return a blocked or git-available state rather than
silently cloning the package repository.

Registry install failures must not automatically fall back to git install.
Git install requires an explicit `install_source = "git"` choice and a known
repository URL. Git installs should return enough data for core to persist an
honest git-sourced manifest entry with pinned commit or equivalent immutable
identity.

### CGM-API-09C [LIVE]: Reviewed dependency apply endpoints must preserve preview identity
Validation: TEST

When the API exposes a dependency-review apply action, the request must include
the install identifier and the accepted dependency-preview fingerprints. The API
must call the core guarded apply primitive rather than reimplementing dependency
mutation policy in the manager.

If core reports that the accepted preview is stale, the API should return a
non-success stale-preview response so the frontend can ask the user to refresh
the review before applying.

### CGM-API-10 [LIVE]: Model-source endpoints should carry provider-specific metadata without hiding the generic model shape
Validation: LLM_REVIEW

Hugging Face and direct URL endpoints may expose provider-specific fields, but
the resulting model selections should still map to a generic manager model
source shape that includes source, destination, and filename.

### CGM-API-10A [PLANNED]: Source-candidate APIs should be outcome-neutral
Validation: MIXED

The manager API should expose model source candidates independently from the
action that will consume them.

Candidate payloads may include provider, URL, repository/file metadata,
workflow origin, confidence/ranking hints, validation status, filename hints,
and known hash matches when available.

The API should not force every candidate lookup to become a download. Frontend
callers should be able to use the same candidate response to queue a missing
model download or attach provenance to an existing local model.

### CGM-API-10B [PLANNED]: Full-hash computation should be explicit and cacheable
Validation: TEST

The manager API should support explicit full-hash computation for a known local
model file or model index entry. The operation may be long-running or
asynchronous, but it should make progress/failure visible to the frontend.

Computed Blake3 and SHA256 values should be persisted in the model index so
future source discovery, export/push readiness, and cloud dependency-proof
flows can reuse them without repeatedly rescanning the same model file.

### CGM-API-10C [PLANNED]: Model source mutations should distinguish workspace index scope from environment scope
Validation: MIXED

The manager API should expose or route model-source mutations according to
their scope.

Workspace-scoped source mutations update the shared model index and should be
used by general Model Index management. They must not mutate environment
manifests that happen to reference the same model.

Environment-scoped source mutations update the current environment manifest
through ComfyGit core's environment model-source service. That service may also
update the workspace model index, but the manifest write is the durable
portable-environment mutation.

Readiness repair actions must use the environment-scoped mutation path when
the user applies source decisions for the current environment.

### CGM-API-10D [PLANNED]: Readiness APIs should expose model-index source candidates without treating them as resolved
Validation: MIXED

Readiness payloads for manifest models without sources should be able to carry
candidate source URLs already known by the workspace model index.

Those candidates are repair hints. They should not remove the reproducibility
warning until the user applies a candidate or selected source to the current
environment manifest.

Export and push validation should not silently copy model-index sources into
the manifest. If candidates exist, validation should return an actionable
readiness issue that lets the frontend route the user to the readiness repair
surface.

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

The API must treat optional tracked nodes as excluded from required
reproducibility inputs. Optional development nodes may remain tracked locally
to protect their filesystem directories during sync/rollback, but they should
not be returned as missing portable-provenance warnings.

### CGM-API-15 [PARTIAL]: Readiness APIs should return grouped actionable issues
Validation: MIXED

The manager API should expose readiness results in a grouped, action-oriented
shape that can power Status, export warnings, push warnings, and future
build/deploy gates from the same source of truth.

At minimum, the readiness shape should be able to represent issue groups for:

- source state
- models
- custom nodes
- workflows
- runtime

Each issue should carry enough machine-readable detail for the frontend to show
clear copy and route to the appropriate repair action, without requiring the
frontend to re-derive readiness from raw manifest or git state.

The current Manager API adapts the core readiness result for export validation
and push preview flows, with grouped model and custom-node warnings plus
source-state blockers where requested. This remains partial until source-state,
workflow, and runtime issue groups are fully represented as repairable items.
