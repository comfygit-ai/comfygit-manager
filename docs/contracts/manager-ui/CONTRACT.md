# Manager UI Contract

This contract defines the responsibilities and behavioral boundaries of the ComfyGit manager frontend inside ComfyUI.

## Scope

This surface covers:
- panel navigation
- workflow-facing actions
- manager-owned modal and overlay UX
- graph-adjacent interaction owned by the manager

This surface does not define:
- portable manifest persistence details in core
- cloud deployment or published workflow behavior
- ComfyUI's internal APP mode behavior

### CGM-UI-01 [LIVE]: The manager UI must remain a panel/overlay system layered onto the ComfyUI frontend
Validation: LLM_REVIEW

The manager frontend may mount panels, modals, popovers, and graph-adjacent overlays, but it must remain an extension layered on top of ComfyUI rather than a forked replacement for the base frontend.

### CGM-UI-02 [LIVE]: Workflow actions should originate from the workflows section rather than unrelated sections
Validation: LLM_REVIEW

Workflow-specific actions such as inspecting workflow details, resolving dependencies, and configuring workflow contracts should be initiated from the workflow list/detail surfaces in the manager UI.

### CGM-UI-03 [PLANNED]: Workflow contract authoring must be exposed as a first-class workflow action
Validation: HUMAN_REVIEW

The workflow list should expose an explicit action such as `Configure Contract` or `Contract` for each workflow. Contract authoring should not be hidden under dependency-only details.

### CGM-UI-04 [PLANNED]: Workflow contract editing should use a dedicated contract surface rather than the existing dependency details modal
Validation: HUMAN_REVIEW

Contract authoring should live in a dedicated modal, drawer, or overlay designed around inputs, outputs, and graph selection. The existing workflow details modal may summarize contract state, but it should not become the primary editor.

### CGM-UI-05 [PLANNED]: The manager UI should support graph-aware contract authoring without requiring ComfyUI APP mode
Validation: HUMAN_REVIEW

The manager should be able to author workflow execution contracts on older and current supported ComfyUI versions, using its own UI and graph integration rather than depending on APP mode availability.

### CGM-UI-06 [PLANNED]: The manager UI should surface contract state directly in workflow summaries
Validation: HUMAN_REVIEW

Workflow cards or rows should expose compact contract state such as:
- no contract
- valid contract with input/output counts
- stale or mismatched contract

This allows users to reason about deployability without opening each workflow.

### CGM-UI-07 [PLANNED]: Contract editing should begin with explicit candidate inspection before full graph click-mapping
Validation: HUMAN_REVIEW

The first contract-authoring slice should allow users to inspect inferred input/output candidates and persist a contract before introducing full graph hit-testing and click-to-map behavior.

### CGM-UI-08 [PLANNED]: Manager-owned overlays should integrate with the active loaded workflow lifecycle
Validation: LLM_REVIEW

Contract-authoring UI should subscribe to the active workflow load lifecycle used by the manager extension so that graph-aware features operate on the currently loaded workflow rather than stale or inferred state.
