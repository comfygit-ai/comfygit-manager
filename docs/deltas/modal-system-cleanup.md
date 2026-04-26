# Modal System Cleanup Dossier

## Purpose

This dossier scopes a targeted modal cleanup pass for the manager frontend.
It is not a broad component reorganization plan.

The goal is to make active modal usage predictable enough that readiness,
source repair, export/push, and model-download work can keep moving without
recurring z-index, nested-modal, and duplicated-shell bugs.

## Current Signal

Recent UI work exposed repeated modal friction:

- readiness repair opened unnecessary intermediate modal layers
- nested source and token modals needed explicit z-index fixes
- export and push warning modals drifted in layout and action placement
- workflow/source picker reuse improved behavior but increased nested modal use
- several active components still implement their own Teleport/overlay shell

The right response is a small primitive cleanup, not a large folder reshuffle.

## Canonical Direction

`BaseModal` should be the canonical modal shell for active manager modals unless
there is a concrete reason a component cannot use it.

Canonical modal behavior should cover:

- body/header/footer slots
- size variants
- fixed-height mode when needed
- explicit `overlayZIndex`
- close-on-overlay behavior
- predictable nested modal stacking

## Phase 1: Small High-Value Targets

These are active, high-friction, and small enough to migrate without turning the
cleanup into a product detour.

### ReadinessIssuesModal

- Path: `frontend/src/components/ReadinessIssuesModal.vue`
- Current shell: custom `Teleport` plus custom overlay/modal/footer styles
- Why first: active in export/push warning flows and nests `ModelSourceModal`
- Desired result: use `BaseModal`, keep existing issue grouping and repair
  behavior, preserve direct source-repair flow

### ModelIndexSection directory modal

- Path: `frontend/src/components/ModelIndexSection.vue`
- Current shell: inline custom `Teleport` directory modal
- Why next: active, self-contained, and likely easy to convert
- Desired result: use `BaseModal` for directory selection/editing without
  changing model-index behavior

### Simple lifecycle modals

Candidate files:

- `frontend/src/components/ConfirmSwitchModal.vue`
- `frontend/src/components/SyncEnvironmentModal.vue`
- `frontend/src/components/StatusDetailModal.vue`

Why: these duplicate custom modal shell CSS with low product complexity.

Desired result: convert opportunistically after the first two targets if the
changes stay mechanical.

## Defer

Do not migrate these in the first cleanup pass:

- `frontend/src/components/base/molecules/PullModal.vue`
- `frontend/src/components/base/molecules/PushModal.vue`
- `frontend/src/components/CommitPopover.vue`
- `frontend/src/components/WorkflowResolveModal.vue` nested resolution steps
- `frontend/src/components/ModelResolutionStep.vue`
- `frontend/src/components/NodeResolutionStep.vue`

Reasons:

- they are active but complex
- some contain nested flows and warning gates
- some are hybrid popover/modal components
- migration risk is higher than immediate cleanup value

## Legacy Or Unclear

Review separately before migrating:

- `frontend/src/components/EnvironmentSwitcher.vue`
- `frontend/src/components/deploy/DeploySettingsModal.vue`

These appear legacy or unclear from static import usage. The right action may
be deletion or retirement, not migration.

## Non-Goals

- Do not reorganize the component folder tree.
- Do not rename broad atoms/molecules/organisms paths.
- Do not convert every modal in one sweep.
- Do not change push/pull semantics while cleaning modal shells.
- Do not change model source selection behavior while cleaning modal shells.

## Validation

For each migrated modal:

- run `cd frontend && npm run build`
- include rebuilt `js/comfygit-panel.js` and `js/comfygit-panel.css`
- manually inspect or reason through nested modal z-index behavior when the
  migrated modal can open another modal
- keep screenshots/manual validation focused on the migrated surface only

## Exit Criteria

The cleanup pass is done when:

- `ReadinessIssuesModal` uses `BaseModal`
- the model-index directory modal uses `BaseModal`, or is explicitly deferred
  with a reason
- one small lifecycle modal has been migrated only if it remains mechanical
- no broad folder reorganization has started

