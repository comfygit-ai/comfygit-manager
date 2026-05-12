# Graph Integration And Selection

This spec defines how the manager should integrate with the active ComfyUI graph for workflow contract authoring.

## Purpose

The manager should be graph-aware enough to:
- observe the currently loaded workflow
- derive candidate contract inputs/outputs
- later support click-to-map selection on the graph

without taking ownership of ComfyUI's full graph editor.

## Runtime Model

The active ComfyUI graph remains the source for current graph structure and widget/output locations.  
The manager consumes that state, projects it into authoring candidates, and persists only the portable contract state.

### CGM-GIS-01 [LIVE]: The manager extension already observes workflow load lifecycle events
Validation: LLM_REVIEW

The manager frontend may rely on the existing workflow-loaded integration pattern as the starting point for graph-aware authoring features.

### CGM-GIS-02 [PLANNED]: Contract authoring should use the active loaded graph as its primary graph context
Validation: HUMAN_REVIEW

When contract authoring is graph-aware, it should operate on the currently loaded workflow graph rather than trying to reconstruct a second graph model purely from manager-side payloads.

### CGM-GIS-03 [PLANNED]: Candidate inference should precede selection UI
Validation: HUMAN_REVIEW

Before implementing full click-to-map behavior, the manager should be able to derive candidate inputs and outputs from the active graph and present them as inspectable options.

### CGM-GIS-04 [PLANNED]: Full graph selection must remain manager-owned overlay behavior
Validation: HUMAN_REVIEW

If the manager adds click-to-map interaction, it should do so as an overlay or graph-adjacent interaction layer rather than by forking ComfyUI's core graph editor behavior.

### CGM-GIS-05 [PLANNED]: Saved contract items should support reverse navigation back to their graph source
Validation: HUMAN_REVIEW

The contract editor should support locating or highlighting the corresponding graph field or output node for a saved contract item, even if the item was loaded from saved manifest state.

### CGM-GIS-06 [PLANNED]: Graph-derived contract state should detect stale references
Validation: TEST

If a saved contract references nodes, widgets, or outputs that no longer exist in the loaded workflow graph, the manager should surface that state as stale or mismatched instead of silently accepting it as valid.
