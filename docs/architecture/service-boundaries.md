# Service Boundaries

This document describes the intended boundaries between ComfyUI, `comfygit-manager`, and `comfygit-core` for local workflow contract authoring.

## ComfyUI Frontend

ComfyUI owns:
- graph rendering
- graph editing primitives
- workflow load/save lifecycle
- widget and slot behavior
- native API-format prompt export for the currently loaded graph

ComfyUI does not own:
- portable ComfyGit workflow execution contract persistence
- manager-specific workflow contract lifecycle

## ComfyGit Manager

The manager owns:
- local workflow list/detail UX
- manager-specific workflow actions
- workflow contract authoring UX
- graph-aware overlay behavior used for contract selection
- capture of ComfyUI-native API-format prompts during contract save
- local panel information architecture
- local bootstrap and local orchestrator lifecycle UX
- runtime context normalization for the local panel
- git remote and push UX used for repo-backed cloud handoff
- API endpoints consumed by the manager frontend

The manager should not become the durable source of truth for portable workflow contracts. It should read/write that state through core persistence.
The manager may capture frontend-derived API prompt artifacts, but those
artifacts become durable environment state only after being written through the
manager API/core persistence boundary.
The manager should also not become the deployment control plane for cloud
targets, provider runtimes, or cloud-bound session lifecycle.

## ComfyGit Core

Core owns:
- durable environment and manifest persistence
- workflow-scoped portable execution contract representation
- persistence and lookup of captured contract API prompt artifacts
- environment-local contract read/write helpers
- revision portability of saved contract state
- durable workflow node-decision policy for mapping node types to packages,
  marking workflow node types optional, and clearing saved workflow node
  decisions

Core should not own:
- manager modal layout
- ComfyUI overlay behavior
- UI-workflow-to-API-prompt conversion
- cloud deployment semantics

Manager adapters should use core's documented public facades for cross-package
calls. Imports from core managers, repositories, analyzers, factories,
lifecycle modules, and generic utilities are implementation coupling unless
they are explicitly covered by a temporary boundary-test allowlist.

## Cloud Dashboard

The cloud dashboard owns:
- account and workspace identity
- GitHub App installation and repository linkage
- tracked branch and commit ingestion
- build candidate and build artifact lifecycle
- target-class compatibility resolution
- runtime build and artifact lifecycle
- verification and smoke-test state
- deployment lifecycle and runtime operations
- targets, bindings, and provider-specific deployment configuration
- published workflow identity and API exposure
- cloud-bound authoring or execution session binding

The local manager may help users push commits to a configured remote, but it
should not link cloud environments, publish directly to cloud, or become a
second full control-plane dashboard.

## Contract Direction

### CGM-SB-01 [PLANNED]: The manager should own local contract authoring UX while core owns durable contract persistence
Validation: HUMAN_REVIEW

Manager-owned contract authoring includes capturing the ComfyUI-native
API-format prompt from the loaded frontend graph at contract save time. Core owns
the durable persisted contract and artifact references after the manager submits
them.

### CGM-SB-02 [PLANNED]: The manager should use ComfyUI graph state as an integration surface rather than duplicating graph ownership
Validation: HUMAN_REVIEW

The manager should use ComfyUI's loaded graph and native export behavior for API
prompt capture instead of asking core to reconstruct API format from saved
UI-workflow JSON.

### CGM-SB-03 [PLANNED]: The manager API should be the frontend's write path for contract mutations
Validation: HUMAN_REVIEW

### CGM-SB-04 [PLANNED]: Portable workflow contract state should remain valid without any cloud layer present
Validation: HUMAN_REVIEW

### CGM-SB-04A [PLANNED]: Core should own workflow node-decision manifest mutations
Validation: MIXED

The manager currently applies workflow node-decision mutations through its
local API endpoint because the panel is the only implemented user-facing
adapter for this flow.

The durable policy belongs in ComfyGit core once another adapter needs parity.
Core should provide a typed service for:

- mapping a workflow node type to an installed or declared package
- marking a workflow node type optional
- clearing a saved workflow node decision
- invalidating or refreshing affected workflow resolution state
- returning a typed summary of the durable mutations

The manager should then remain an adapter that parses UI choices, calls core,
and renders the result.

### CGM-SB-05 [RETIRED]: The local panel may provide cloud linkage and revision publication without duplicating full cloud control-plane behavior
Validation: HUMAN_REVIEW

This local `Cloud` domain model is retired for the repo-backed MVP. The retired
model allowed the manager to expose:
- authentication or account-link state
- revision publication
- recent cloud-linked revision visibility
- open-dashboard affordances

The active boundary is `CGM-SB-05A`: the local panel prepares commits and pushes
to git remotes, while cloud owns GitHub linking, commit ingestion, builds, and
deployments.

### CGM-SB-05A [PLANNED]: The local panel should hand off to cloud through git remotes
Validation: HUMAN_REVIEW

For the repo-backed MVP, the local panel should not require cloud auth or direct
publication APIs. Its cloud handoff responsibility is to help users create
commits and push them to the GitHub repository linked by the cloud dashboard.

Cloud should observe the repository/branch and decide which commits become
build candidates or deployments.

### CGM-SB-06 [PLANNED]: Target and deployment administration should remain cloud-owned
Validation: HUMAN_REVIEW

Cloud should remain the authority for:
- cloud account auth
- GitHub App installation
- environment repository linkage
- commit ingestion
- build policy
- target registration
- deployment creation and rollout
- runtime provider configuration
- published-workflow binding
- runtime health and live execution state

### CGM-SB-07 [RETIRED]: Local cloud linkage should be account-and-workspace scoped rather than target scoped
Validation: HUMAN_REVIEW

Local cloud account/workspace linkage is retired for the repo-backed MVP. The
retired model would have represented:
- signed-in user or agent identity
- selected cloud workspace or organization
- revision publication destination

The active model represents cloud linkage in the cloud dashboard. The local
panel only needs git remote state.

### CGM-SB-08 [PLANNED]: The local panel may surface cloud build or verification summaries, but cloud should remain the authority for realization, artifacts, and deployability
Validation: HUMAN_REVIEW

The local panel may later show lightweight status such as:
- revision published
- build queued or failed
- verified for a target class

But it should not become the surface that:
- orchestrates provider-specific builds
- manages runtime artifacts directly
- defines deployability independently of cloud verification

### CGM-SB-09 [PARTIAL]: Cloud-bound manager sessions should keep lifecycle authority with cloud
Validation: HUMAN_REVIEW

The manager may run inside a cloud-provided authoring or execution session, but
that does not make the embedded manager panel the owner of cloud session
lifecycle.

For cloud-bound sessions:

- cloud should choose the workspace, environment, ref, commit, build, or
  session identity
- the manager should expose that binding as runtime context for the local panel
- manager lifecycle controls should respect the capability map supplied by that
  context
- environment switching and session rebinding should go through cloud

This preserves the local orchestrator as a local adoption tool while preventing
cloud sessions from becoming detached from the outer cloud control plane.

### CGM-SB-10 [PARTIAL]: Manager should consume ComfyGit Core through public facades
Validation: STATIC

The manager backend should import reusable core behavior through documented
facades such as `comfygit_core`, `comfygit_core.models`,
`comfygit_core.runtime`, `comfygit_core.workflow`, `comfygit_core.git`, and
`comfygit_core.assets`.

Direct imports from core implementation packages are allowed only as temporary
exceptions tracked by the manager's core import-boundary test. Git remote and
token-authenticated git operations should flow through core facade methods
rather than direct `comfygit_core.utils.git` imports. Deployment summary and
validation flows should consume `EnvironmentManifestSnapshot` and
`EnvironmentReadiness` through `Environment` facade methods rather than
`env.pyproject` internals. As core exposes facade methods for workspace
configuration and remaining runtime setup behavior, those temporary exceptions
should be removed.

Non-deploy manager APIs now use Workspace facade methods for workspace
configuration such as model directory and Civitai/Hugging Face credentials.
Model-index routes also use Workspace facade methods for source management,
hash completion, indexed lookup, and model file/location deletion instead of
touching model repositories directly.
Retired provider-specific deployment endpoints remain a separate cleanup area
and are excluded from that workspace-config guardrail.
