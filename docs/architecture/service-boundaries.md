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
- API endpoints consumed by the manager frontend

The manager should not become the durable source of truth for portable workflow contracts. It should read/write that state through core persistence.

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
- deployment lifecycle and runtime operations
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
