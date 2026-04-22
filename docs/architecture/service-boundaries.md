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
- lightweight cloud bridge UX owned by the local panel
- local cloud auth/link state
- revision publication initiation from the local environment
- API endpoints consumed by the manager frontend

The manager should not become the durable source of truth for portable workflow contracts. It should read/write that state through core persistence.
The manager should also not become the deployment control plane for cloud
targets or provider runtimes.

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
- revision registry and publication destination
- target-class compatibility resolution
- runtime build and artifact lifecycle
- verification and smoke-test state
- deployment lifecycle and runtime operations
- targets, bindings, and provider-specific deployment configuration
- published workflow identity and API exposure

The local manager may link to and publish into the cloud, but it should not
become a second full control-plane dashboard.

## Contract Direction

### CGM-SB-01 [PLANNED]: The manager should own local contract authoring UX while core owns durable contract persistence
Validation: HUMAN_REVIEW

### CGM-SB-02 [PLANNED]: The manager should use ComfyUI graph state as an integration surface rather than duplicating graph ownership
Validation: HUMAN_REVIEW

### CGM-SB-03 [PLANNED]: The manager API should be the frontend's write path for contract mutations
Validation: HUMAN_REVIEW

### CGM-SB-04 [PLANNED]: Portable workflow contract state should remain valid without any cloud layer present
Validation: HUMAN_REVIEW

### CGM-SB-05 [PLANNED]: The local panel may provide cloud linkage and revision publication without duplicating full cloud control-plane behavior
Validation: HUMAN_REVIEW

The manager may expose a `Cloud` domain for:
- authentication or account-link state
- revision publication
- recent cloud-linked revision visibility
- open-dashboard affordances

It should not attempt to fully replace cloud-side deployment and publication
administration.

### CGM-SB-06 [PLANNED]: Target and deployment administration should remain cloud-owned even when publication is initiated locally
Validation: HUMAN_REVIEW

The local panel may publish a revision to cloud, but cloud should remain the
authority for:
- target registration
- deployment creation and rollout
- runtime provider configuration
- published-workflow binding
- runtime health and live execution state

### CGM-SB-07 [PLANNED]: Local cloud linkage should be account-and-workspace scoped rather than target scoped
Validation: HUMAN_REVIEW

The local panel should model cloud integration in terms of:
- signed-in user or agent identity
- selected cloud workspace or organization
- revision publication destination

It should not treat provider targets such as RunPod or custom workers as
first-class local panel authorities.

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
