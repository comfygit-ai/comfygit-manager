# Manager UI Contract

This contract defines the responsibilities and behavioral boundaries of the ComfyGit manager frontend inside ComfyUI.

## Scope

This surface covers:
- panel navigation
- panel information architecture
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

### CGM-UI-03 [LIVE]: Workflow contract authoring must be exposed as a first-class workflow action
Validation: HUMAN_REVIEW

The workflow list should expose an explicit action such as `Configure Contract` or `Contract` for each workflow. Contract authoring should not be hidden under dependency-only details.

### CGM-UI-04 [LIVE]: Workflow contract editing should use a dedicated contract surface rather than the existing dependency details modal
Validation: HUMAN_REVIEW

Contract authoring should live in a dedicated modal, drawer, or overlay designed around inputs, outputs, and graph selection. The existing workflow details modal may summarize contract state, but it should not become the primary editor.

### CGM-UI-05 [LIVE]: The manager UI should support graph-aware contract authoring without requiring ComfyUI APP mode
Validation: HUMAN_REVIEW

The manager should be able to author workflow execution contracts on older and current supported ComfyUI versions, using its own UI and graph integration rather than depending on APP mode availability.

### CGM-UI-06 [LIVE]: The manager UI should surface contract state directly in workflow summaries
Validation: HUMAN_REVIEW

Workflow cards or rows should expose compact contract state such as:
- no contract
- valid contract with input/output counts
- stale or mismatched contract

This allows users to reason about deployability without opening each workflow.

### CGM-UI-07 [RETIRED]: Contract editing should begin with explicit candidate inspection before full graph click-mapping
Validation: HUMAN_REVIEW

This was a useful initial sequencing constraint, but the active product direction now includes first-class graph click-mapping and no longer treats candidate-only inspection as the intended primary authoring flow.

### CGM-UI-08 [LIVE]: Manager-owned overlays should integrate with the active loaded workflow lifecycle
Validation: LLM_REVIEW

Contract-authoring UI should subscribe to the active workflow load lifecycle used by the manager extension so that graph-aware features operate on the currently loaded workflow rather than stale or inferred state.

### CGM-UI-09 [LIVE]: Workflow contract authoring should use paired review and mapping surfaces over one contract object
Validation: HUMAN_REVIEW

The manager should expose:
- a contract modal for review and small edits
- a graph-aware I/O mapping overlay for direct selection

These surfaces should edit the same underlying contract object rather than creating separate authoring systems.

### CGM-UI-10 [PLANNED]: Panel navigation should group destinations by operational domain rather than feature accretion order
Validation: HUMAN_REVIEW

Primary navigation should cluster related actions into bounded domains such as:
- current-environment authoring
- workspace-wide management
- cloud linkage and publication
- diagnostics

The sidebar should not expose unrelated git, environment transfer, cloud, and debug features as a single mixed section.
