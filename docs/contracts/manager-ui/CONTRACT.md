# Manager UI Contract

This contract defines the responsibilities and behavioral boundaries of the ComfyGit manager frontend inside ComfyUI.

## Scope

This surface covers:
- panel navigation
- panel information architecture
- workflow-facing actions
- manager-owned modal and overlay UX
- graph-adjacent interaction owned by the manager
- missing-resource, model-download, and dependency-resolution UX

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

### CGM-UI-10 [PARTIAL]: Panel navigation should group destinations by operational domain rather than feature accretion order
Validation: HUMAN_REVIEW

The UI contract requires the panel to keep navigation grouped by user-facing
operational domains rather than feature accretion order.

Detailed navigation structure is specified in `CGM-IA-01` through `CGM-IA-11`
in `docs/specs/panel-information-architecture.md`.

This contract clause is partial for the same reason as `CGM-IA-01`: the active
panel groups `THIS ENV`, `WORKSPACE`, and `CLOUD`, while diagnostics is still
inside `THIS ENV` rather than its own top-level domain.

### CGM-UI-11 [LIVE]: The local panel should center environment management, version control, and cloud publication rather than local deployment orchestration
Validation: HUMAN_REVIEW

The UI contract requires the local panel to remain an authoring and publication
bridge, not a cloud deployment dashboard.

Detailed local/cloud responsibilities are specified in:

- `CGM-IA-09` and `CGM-IA-10` in
  `docs/specs/panel-information-architecture.md`
- `CGM-CLP-01` through `CGM-CLP-05` in
  `docs/specs/cloud-linking-and-publication.md`

### CGM-UI-12 [LIVE]: The publish surface should expose lightweight cloud linkage and revision-publication state rather than full deployment administration
Validation: HUMAN_REVIEW

The UI contract requires `Publish` to stay revision-centric and lightweight.
It may summarize cloud link state and publication history, but it should not
become the surface for target provisioning, deployment binding, or runtime
administration.

Detailed publish behavior is specified by `CGM-CLP-02`, `CGM-CLP-03`,
`CGM-CLP-03B`, and `CGM-IA-10`.

### CGM-UI-12A [LIVE]: The publish surface should not imply revision-delta claims that the system cannot actually prove
Validation: HUMAN_REVIEW

The UI contract requires local publish state to avoid unproven semantic diff
claims.

Detailed working-copy semantics are specified by `CGM-CLP-02A`.

### CGM-UI-12B [LIVE]: Publish actions should use the same family of validation and warning UX as export for deployability-sensitive issues
Validation: HUMAN_REVIEW

The UI contract requires publish actions to run a readiness review before
creating a cloud revision and to reuse export-style blocking/warning UX where
the underlying readiness issues are shared.

Detailed publish readiness behavior is specified by `CGM-CLP-02B`.

### CGM-UI-13 [LIVE]: Cloud identity should live in a dedicated `Account` surface rather than being fully embedded in `Publish`
Validation: HUMAN_REVIEW

The UI contract requires cloud identity and session management to live in a
dedicated `Account` surface. `Publish` may summarize auth state and block
publication, but it should route users to `Account` for the full identity flow.

Detailed account/publish split behavior is specified by `CGM-IA-07`,
`CGM-IA-11`, `CGM-CLP-01A`, and `CGM-CLP-01B`.

### CGM-UI-14 [LIVE]: Missing-resource resolution should use manager-owned review surfaces
Validation: LLM_REVIEW

When the manager detects missing workflow resources, the user-facing review and
resolution flow should live in manager-owned UI rather than leaving users to
interpret raw ComfyUI errors.

### CGM-UI-15 [LIVE]: Model download UX should show source and destination before queueing
Validation: LLM_REVIEW

The model download flow should make the selected source and destination visible
before the user starts or queues a download.

This includes guided Hugging Face selections and direct URL entries.

### CGM-UI-16 [PARTIAL]: Blocked custom nodes should be visible as blocked, not hidden
Validation: LLM_REVIEW

When custom node packages are version-gated, unknown, or missing a trusted
install source, the UI should present that state clearly instead of silently
dropping the node from resolution choices.

Some blocked-node presentation exists, but this remains partial until all
workflow/resource surfaces use the same status language.

### CGM-UI-17 [LIVE]: Local development source overrides are not portable environment UI
Validation: HUMAN_REVIEW

Local editable package overrides belong to development scripts and local
overlays. The manager UI should not present tracked environment metadata as the
place to configure a developer's personal source checkout paths.
