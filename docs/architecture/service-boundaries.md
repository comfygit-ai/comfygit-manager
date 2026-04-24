# Service Boundaries

This document describes the intended boundaries between ComfyUI, `comfygit-manager`, and `comfygit-core` for local workflow contract authoring.

## ComfyUI Frontend

ComfyUI owns:
- graph rendering
- graph editing primitives
- workflow load/save lifecycle
- widget and slot behavior

ComfyUI does not own:
- portable ComfyGit workflow execution contract persistence
- manager-specific workflow contract lifecycle

## ComfyGit Manager

The manager owns:
- local workflow list/detail UX
- manager-specific workflow actions
- workflow contract authoring UX
- graph-aware overlay behavior used for contract selection
- local panel information architecture
- local bootstrap and local orchestrator lifecycle UX
- runtime context normalization for the local panel
- git remote and push UX used for repo-backed cloud handoff
- API endpoints consumed by the manager frontend

The manager should not become the durable source of truth for portable workflow contracts. It should read/write that state through core persistence.
The manager should also not become the deployment control plane for cloud
targets, provider runtimes, or cloud-bound session lifecycle.

## ComfyGit Core

Core owns:
- durable environment and manifest persistence
- workflow-scoped portable execution contract representation
- environment-local contract read/write helpers
- revision portability of saved contract state

Core should not own:
- manager modal layout
- ComfyUI overlay behavior
- cloud deployment semantics

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

### CGM-SB-02 [PLANNED]: The manager should use ComfyUI graph state as an integration surface rather than duplicating graph ownership
Validation: HUMAN_REVIEW

### CGM-SB-03 [PLANNED]: The manager API should be the frontend's write path for contract mutations
Validation: HUMAN_REVIEW

### CGM-SB-04 [PLANNED]: Portable workflow contract state should remain valid without any cloud layer present
Validation: HUMAN_REVIEW

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
