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

## Contract Direction

### CGM-SB-01 [PLANNED]: The manager should own local contract authoring UX while core owns durable contract persistence
Validation: HUMAN_REVIEW

### CGM-SB-02 [PLANNED]: The manager should use ComfyUI graph state as an integration surface rather than duplicating graph ownership
Validation: HUMAN_REVIEW

### CGM-SB-03 [PLANNED]: The manager API should be the frontend's write path for contract mutations
Validation: HUMAN_REVIEW

### CGM-SB-04 [PLANNED]: Portable workflow contract state should remain valid without any cloud layer present
Validation: HUMAN_REVIEW
