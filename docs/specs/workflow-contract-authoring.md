# Workflow Contract Authoring

This spec defines the intended local authoring flow for workflow execution contracts inside `comfygit-manager`.

## Purpose

The manager should let workflow authors define a minimal execution contract for a ComfyUI workflow:
- selected inputs
- selected outputs
- contract labels and normalized types

That contract is portable environment state and should travel with revisions instead of being cloud-only dashboard metadata.

## Lifecycle

1. A workflow appears in the manager workflow list.
2. The user opens a dedicated contract-authoring surface from that workflow.
3. The manager loads existing saved contract state, if any.
4. The manager inspects the currently loaded workflow graph and derives candidate inputs/outputs.
5. The user selects, edits, removes, or reorders contract items.
6. The manager saves the resulting contract through the manager API.
7. The portable contract is written into ComfyGit-managed workflow manifest state.

## Workflow Identity Assumption

For the first contract-authoring slice, workflows may remain environment-local
and name/path scoped.

That means:

- one environment cannot contain two workflows with the same filename
- the manager may address workflow contracts using the current workflow name or
  path
- if a workflow is renamed, the old workflow-scoped contract state is treated
  as removed and the renamed workflow is treated as a new workflow identity

The manager should not imply rename-preserving workflow continuity unless core
later introduces a stronger workflow identity model.

## Intended UX Shape

### CGM-WCA-01 [PLANNED]: Contract authoring should start from a workflow-scoped action in the manager
Validation: HUMAN_REVIEW

Users should start contract work from the workflow itself, not from workspace settings or unrelated global screens.

### CGM-WCA-02 [PLANNED]: Contract authoring should use a dedicated manager-owned editor surface
Validation: HUMAN_REVIEW

The manager should provide a distinct contract authoring surface rather than overloading the dependency resolution wizard or dependency details modal.

### CGM-WCA-03 [PLANNED]: The first contract authoring slice should support inspect-and-save before graph click-mapping
Validation: HUMAN_REVIEW

The first implementation should support:
- reading existing contract state
- showing inferred candidates
- saving a structured contract

Full click-to-map canvas interaction can follow afterward.

### CGM-WCA-04 [PLANNED]: Contract authoring should treat inputs and outputs as separate editable sets
Validation: HUMAN_REVIEW

The editor should clearly distinguish:
- workflow inputs exposed to callers
- workflow outputs exposed to callers

These should not be conflated with dependency metadata.

### CGM-WCA-05 [PLANNED]: Contract save must replace the durable saved contract, not only transient UI state
Validation: TEST

Saving a contract should update the manager backend and the underlying ComfyGit-managed manifest state so the contract survives reloads, restarts, commits, and later revision publication.

### CGM-WCA-06 [PLANNED]: A workflow without a valid contract should remain editable but not contract-ready
Validation: HUMAN_REVIEW

The manager should permit workflows to exist without a saved execution contract, while clearly communicating that contract-dependent downstream usage is not yet configured.

### CGM-WCA-07 [PLANNED]: Existing saved contract state should prefill the authoring UI
Validation: TEST

If a workflow already has a saved execution contract, reopening the editor should load and display that state rather than starting from an empty contract.
