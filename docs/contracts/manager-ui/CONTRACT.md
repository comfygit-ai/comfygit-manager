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
- lifecycle and setup controls rendered inside the local manager panel

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

### CGM-UI-09 [RETIRED]: Workflow contract authoring should use paired review and mapping surfaces over one contract object
Validation: HUMAN_REVIEW

The manager previously exposed:
- a contract modal for review and small edits
- a graph-aware I/O mapping overlay for direct selection

This two-surface model was retired because it made the contract flow feel
duplicative. The active direction is `CGM-UI-09A`: one graph-aware mapping
surface owns contract metadata, input/output mapping, save, delete, and cancel.

### CGM-UI-09A [LIVE]: Workflow contract authoring should use one graph-aware mapping surface
Validation: HUMAN_REVIEW

The workflow `Contract` action should open the manager-owned I/O mapping overlay
directly rather than first opening a separate review modal. That overlay should
own:

- contract metadata such as default contract, display name, and description
- input and output item editing
- graph click-mapping
- cancel, save, and delete actions

Less-frequent metadata editing may be collapsed by default, but it should still
be available inside the same authoring surface.

Saving from the mapping surface should keep the user in I/O mapping mode and
show a lightweight success notification, so users can save intermediate work
without leaving the graph-authoring context.

### CGM-UI-09B [LIVE]: Destructive workflow contract deletion should require confirmation
Validation: HUMAN_REVIEW

Deleting a saved workflow execution contract should require an explicit
destructive confirmation. The confirmation should make clear that the saved
contract is removed, not the workflow itself.

### CGM-UI-09C [LIVE]: Saving a contract should capture the frontend-native API prompt
Validation: TEST

The graph-aware mapping surface should save both the selected I/O mapping and
the ComfyUI-native API-format prompt for the currently loaded workflow graph.
If API prompt capture fails, the UI should surface that failure and avoid
presenting the contract as runtime-ready.

### CGM-UI-10 [PARTIAL]: Panel navigation should group destinations by operational domain rather than feature accretion order
Validation: HUMAN_REVIEW

The UI contract requires the panel to keep navigation grouped by user-facing
operational domains rather than feature accretion order.

Detailed navigation structure is specified in `CGM-IA-01` through `CGM-IA-11`
in `docs/specs/panel-information-architecture.md`.

This contract clause is partial for the same reason as `CGM-IA-01`: the active
panel groups `THIS ENV`, `WORKSPACE`, and `CLOUD`, while diagnostics is still
inside `THIS ENV` rather than its own top-level domain.

### CGM-UI-11 [LIVE]: The local panel should center environment management and version control rather than cloud publication or deployment orchestration
Validation: HUMAN_REVIEW

The UI contract requires the local panel to remain an authoring and
version-control surface, not a cloud publication or deployment dashboard.
Repo-backed cloud handoff should happen through git remotes and pushes.

Detailed local/cloud responsibilities are specified in:

- `CGM-IA-09` and `CGM-IA-10` in
  `docs/specs/panel-information-architecture.md`
- `CGM-CLP-06` through `CGM-CLP-08` in
  `docs/specs/cloud-linking-and-publication.md`

### CGM-UI-12 [RETIRED]: The publish surface should expose lightweight cloud linkage and revision-publication state rather than full deployment administration
Validation: HUMAN_REVIEW

The local `Publish` surface is retired for the repo-backed MVP. The retired
contract required `Publish` to stay revision-centric and lightweight rather than
becoming a deployment control surface.

Repo-backed cloud handoff should now be represented by version-control and git
remote surfaces, as specified by `CGM-CLP-06` through `CGM-CLP-08`.

### CGM-UI-12A [RETIRED]: The publish surface should not imply revision-delta claims that the system cannot actually prove
Validation: HUMAN_REVIEW

This local publish-surface constraint is retired with the `Publish` surface.
Version-control surfaces should still avoid unproven semantic diff claims, but
there is no MVP local publish working-copy model.

### CGM-UI-12B [RETIRED]: Publish actions should use the same family of validation and warning UX as export for deployability-sensitive issues
Validation: HUMAN_REVIEW

Local `Publish` actions are retired for the repo-backed MVP. Validation remains
important before export, commit, build, and deploy, but local `Publish Revision`
is no longer the handoff mechanism.

### CGM-UI-13 [RETIRED]: Cloud identity should live in a dedicated `Account` surface rather than being fully embedded in `Publish`
Validation: HUMAN_REVIEW

The local cloud `Account` surface is retired for the repo-backed MVP. Cloud
identity, GitHub account connection, GitHub App installation, and cloud
workspace selection should live in the cloud dashboard.

### CGM-UI-13A [PLANNED]: Version-control surfaces should explain repo-backed cloud handoff
Validation: HUMAN_REVIEW

The local UI may provide remote-build helper copy or links inside version-control and
remote-management surfaces. That copy should explain that the remote service reads
from the GitHub repository linked in the dashboard, and that local users update
remote-visible state by pushing commits to that repository.

This helper UX should not require local cloud sign-in and should not recreate
the cloud dashboard's GitHub App installation or repository-linking flow.

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

### CGM-UI-15A [PARTIAL]: Model source selection should be reusable across download and provenance repair
Validation: LLM_REVIEW

The UI should not duplicate separate provider-search and workflow-link search
experiences for model download and model provenance repair.

The shared source-selection experience may appear inside different wrappers,
but the visible outcome should match the user's intent:

- missing model: download or queue the selected source into a visible
  destination
- existing local model: attach the selected source as provenance for the
  current model

The current UI shares workflow-link, Hugging Face, Civitai, and direct-URL
source selection between the download and provenance-repair flows. This remains
partial until provider source-selection coverage is backed by direct behavioral
tests.

### CGM-UI-15B [LIVE]: Model details should launch provenance repair without becoming the repair workspace
Validation: HUMAN_REVIEW

The model details modal should remain a compact factual view of local model
state. When download sources are missing, it should provide a `Find Source`
action near the download-sources section.

The source search, workflow-link review, provider search, direct URL entry, and
optional hash computation controls should live in a dedicated source-repair
surface opened from that action.

Contextual readiness repair may open that same source-repair surface directly
when the user is already acting on a missing-source issue.

### CGM-UI-15C [PLANNED]: Readiness source repair should apply environment manifest changes explicitly
Validation: HUMAN_REVIEW

When the user opens model source repair from Status, export, push, or another
environment-readiness context, the UI should present source choices as changes
to the current environment.

If a source already exists in the workspace model index, the readiness repair
surface may show it as a preselected candidate such as "source found in model
index." The user should still be able to change the source before applying.

The readiness repair surface should use an explicit `Apply` action for staged
source choices. Applying should update the current environment manifest and
make the normal commit indicator reflect the resulting uncommitted changes.

The general Model Index source-repair flow may continue to use an immediate
`Use as source` action because that flow edits shared workspace knowledge, not
a specific environment manifest.

### CGM-UI-15D [LIVE]: Missing model availability should route to workflow dependency resolution
Validation: TEST

When Status reports a workflow model that is not available locally and does not
have a known downloadable source, the primary action should open the workflow
dependency-resolution flow for an affected workflow.

This state should not open the readiness/reproducibility source-repair modal,
because there is no existing local model whose provenance can be repaired yet.
The user first needs to select a local model, add or find a source, queue a
download, mark the model optional, or edit the workflow dependency.

### CGM-UI-16 [PARTIAL]: Blocked custom nodes should be visible as blocked, not hidden
Validation: LLM_REVIEW

When custom node packages are version-gated, unknown, or missing a trusted
install source, the UI should present that state clearly instead of silently
dropping the node from resolution choices.

Some blocked-node presentation exists, but this remains partial until all
workflow/resource surfaces use the same status language.

### CGM-UI-16A [PLANNED]: Node install choices should not hide source trust boundaries
Validation: HUMAN_REVIEW

When a user chooses a package from node registry search, the UI should show the
available install sources as distinct actions instead of implying that every
registry-listed package has a registry artifact.

The UI should show:

- `Install from Registry` only when the package has a registry artifact or the
  API confirms one through live validation
- `Install from GitHub` only when a repository URL is available
- a blocked/no-installable-source state when neither source is available

If a package appears in registry search but only has a GitHub repository, the
primary action should make the GitHub trust boundary explicit. The UI should
not label that path as a registry install.

### CGM-UI-17 [LIVE]: Local development source overrides are not portable environment UI
Validation: HUMAN_REVIEW

Local editable package overrides belong to development scripts and local
overlays. The manager UI should not present tracked environment metadata as the
place to configure a developer's personal source checkout paths.

### CGM-UI-17A [LIVE]: Active dependency overlays should be visible at install decision points
Validation: STATIC

When active local or shared dependency overlays exist, the manager UI should
show them in workspace settings and dependency-resolution/install surfaces
before the user applies node installs or sync-triggering resolution actions.

The UI should present overlays as local dependency context rather than portable
environment metadata. It should not ask users to rewrite tracked manifest
dependencies just because a local overlay is active.

### CGM-UI-18 [PARTIAL]: Lifecycle controls should render from runtime capabilities
Validation: MIXED

The manager UI should render workspace setup, environment creation,
environment switching, restart, stop, and delete affordances from the backend
runtime context capability map rather than hardcoded assumptions about the
current process.

In local bootstrap and local orchestrator contexts, this should preserve the
friendly custom-node install path for non-technical users.

In remote-bound contexts, the UI should present the bound environment/session as
managed by the remote service and hide or disable lifecycle controls whose
authority belongs to the cloud dashboard.

The corresponding API and lifecycle semantics are specified by `CGM-API-13`
and `CGM-ENV-07` through `CGM-ENV-11`.

### CGM-UI-18A [LIVE]: Git import should let users choose the source ref before analysis
Validation: TEST

The import environment modal should treat Git repository imports as a two-step
selection flow: first load repository refs, then analyze the selected branch or
tag. The selected ref should remain visible in the preview state so users know
which repository state they are about to materialize.

The UI should send the same selected ref to import execution that it used for
preview.

### CGM-UI-18B [LIVE]: Import preview should be tabbed and provenance-oriented
Validation: TEST

The import environment modal should summarize workflows, models, custom nodes,
and Git source information in a scannable preview layout. The preview should
use a fixed-height tabbed inspector with an overview tab, drill-down tabs for
workflows, models, custom nodes, Git information, and a raw manifest tab.

The overview tab should show high-level counts and trust signals, including
local versus downloadable models, trusted versus unknown model sources, and
registry versus Git or development custom nodes. Drill-down rows should expose
trust-relevant details before users accept an import, including model hashes,
download source URLs, node registry or Git provenance, versions, branches, and
pinned commits when those fields are available in the import preview payload.

### CGM-UI-18C [LIVE]: Environment import progress should show creation logs
Validation: TEST

After a user starts environment import, the import modal should show a stable
progress display with recent import logs so users can tell whether dependency
installation, node sync, workflow copy, model resolution, and downloads are
still moving.

The import progress log display should share the same reusable progress/log
component used by environment switching. Its log area should have fixed height,
auto-follow new output while the user is at the bottom, and preserve manual
scrolling when the user scrolls back.

When import reaches a terminal success state, the modal should stay open at
100 percent with an explicit completion action instead of closing immediately.
That completion action should live in the progress modal footer and remain
visible during the import run; it should be disabled until the import reaches a
terminal state. Activating it should dismiss the import modal and refresh the
environment-specific data sources used by the shell and environments section so
the newly imported environment is visible immediately. If the user requested
switch-after-import, the normal switch confirmation may appear above the
completed import modal.

### CGM-UI-19 [LIVE]: Installed node criticality should be explicitly user-editable
Validation: MIXED

The nodes section should expose package-level criticality for tracked installed
custom nodes as a small required/optional control near the node's row actions.

Nodes should default to required. The manager must only change criticality from
an explicit user action; workflow graph usage, package presence, and missing
source analysis may inform warnings, but they must not automatically mark a
node optional.

The UI should not imply that optional means proven unused. Optional means the
user has chosen not to include that node in the portable dependency set for
export, build-plan, or deployment readiness checks when the node lacks portable
provenance.

### CGM-UI-19A [PARTIAL]: Switch progress should show supervisor logs when available
Validation: MIXED

The environment switch progress modal should consume restart-stable observer
URLs returned by switch initiation when available.

While a switch is in progress, the modal should show both the progress state
and a compact terminal-style log area with recent lifecycle authority messages.
The log area should help users distinguish a slow sync or startup from a
stalled or crashed handoff.

The log area should remain layout-stable as new lines arrive. It should keep a
fixed visual height, auto-follow new output while the user is already at the
bottom, and preserve manual scrolling when the user scrolls back to inspect or
copy earlier lines.

When a switch reaches a terminal success state, the modal should stay open long
enough for the user to read or copy logs and should offer an explicit page
refresh action instead of closing immediately before the new environment loads.
The refresh action should only be enabled after the target ComfyUI process has
passed the lifecycle authority's readiness check. Supervisor handoff completion
or target process launch is not enough to mark the switch complete.

When the lifecycle authority can access target ComfyUI stdout or stderr while
the process boots, those boot lines should appear in the same fixed-height log
area as supervisor lifecycle messages.

When no restart-stable observer is available, the UI may retain simulated
progress as a fallback, but normal `cg run` and local orchestrator paths should
prefer real status and log data.

Optional development nodes should remain tracked locally so sync and rollback
do not treat their directories as unmanaged drift, but they should not appear
as reproducibility issues once the user has marked them optional.

### CGM-UI-20 [PARTIAL]: Status should expose primary lifecycle guidance and domain health
Validation: HUMAN_REVIEW

The manager UI should make environment lifecycle state visible before users
reach export, push, or future deploy/build warning gates.

The Status surface should show one prominent primary guidance card for the next
recommended action, then summarize other lifecycle domains in a compact health
grid. The grid should separate at least workflow, model, node, runtime,
filesystem, and snapshot state so users can distinguish "what changed" from
"what cannot run" without reading a stack of competing alert cards.

The health grid may route users to the existing Workflows, Nodes, Version
Control, Sync, or readiness review surfaces, but it should not duplicate the
primary lifecycle card as a second loud issue card. Snapshot commits should use
the existing commit modal, including its existing force/allow-issues affordance
when workflow issues are present.

The current implementation exposes lifecycle domains in a Status health grid.
It remains partial until the shared readiness surface includes source-state,
workflow contract, and runtime/build-plan issue groups.

Detailed readiness behavior is specified by `CGM-READY-01` through
`CGM-READY-07` in `docs/specs/environment-readiness.md`.

### CGM-UI-20A [LIVE]: Custom-node import failures should be visible but non-blocking
Validation: HUMAN_REVIEW

When the backend reports runtime custom-node import failures, Status should show
a compact runtime health signal and route users to Nodes.

The Nodes surface should mark each failed installed node with a visible runtime
status and details text that tells the user to inspect ComfyUI logs for the
underlying Python import error. This status should not block commits, exports,
pushes, or environment switching in the first implementation.

### CGM-UI-20B [LIVE]: Workflow-file edits should be presented as snapshot capture work
Validation: TEST

When Status receives lifecycle guidance for new, modified, deleted, or mixed
workflow file changes, the top-level card should name the workflow-file state
directly, such as `New workflow added`, `Workflow modified`, `Workflow
removed`, or `Workflow changes pending`.

When no higher-priority materialization, model, node, runtime, or operation
blocker exists, the primary action for those workflow-file states should use
the existing commit modal through `commit_snapshot`. The UI may still offer
review/detail navigation elsewhere, but it should not make `Review workflow
changes` the primary CTA for normal saved workflow edits.

### CGM-UI-20C [LIVE]: Environment navigation should reuse a warm list cache
Validation: TEST

The manager panel should not show a blocking environments-list loading state on
every visit to the Environments surface when it already has a recently loaded
environment list.

The panel may refresh stale environment-list data in the background, but cached
rows should remain visible while that refresh runs. Environment creation,
import, deletion, and switch flows should invalidate or force-refresh the cache
so list membership and current-environment state do not remain stale after
mutations.

### CGM-UI-21 [PARTIAL]: Export, push, and future deploy gates should use the shared readiness review surface
Validation: MIXED

Export warnings, push warnings, and future cloud/build/deploy warnings should
open the same manager-owned readiness review surface used by Status.

Those contextual gates may adjust framing and primary action labels, but they
should not fork the issue grouping, copy vocabulary, or repair workflows into
separate incompatible modal stacks.

The current export and push warning flows open the shared readiness review
surface. This remains partial until Status owns the compact readiness summary
and future cloud/build/deploy gates use the same review surface.

### CGM-UI-22 [LIVE]: Valid workflow contracts should expose a local Studio action
Validation: MIXED

Workflow rows with a valid saved execution contract may expose an explicit
`Studio` action near the contract action. Activating it should ask the manager
API to start or reuse the local Studio server for the current environment and
then open the returned URL in a separate browser tab.

The local Studio action should not appear as a deployment action and should not
try to create cloud state. Workflows without a valid contract should continue
to route users to contract authoring first.
