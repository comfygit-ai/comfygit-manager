# Resource Resolution Lifecycle

## Purpose

This spec defines how the manager handles workflows that reference missing
nodes, models, or other resources.

The resource-resolution flow is a local manager feature. It should help users
make the current ComfyGit environment runnable without turning the manager into
a cloud deployment or provider orchestration surface.

## Lifecycle

1. A workflow is loaded, imported, or selected for inspection.
2. The manager analyzes the workflow graph against the active environment.
3. Missing resources are classified as installable nodes, blocked nodes, model
   download intents, or manual follow-up.
4. The user reviews the resolution plan in a manager-owned surface.
5. The manager applies selected installs and queues selected downloads through
   backend APIs.
6. The active workflow/environment state is refreshed so the user can retry the
   workflow with current dependency state.

## Clauses

### CGM-RRL-01 [LIVE]: Missing-resource interception is manager-owned and environment-scoped
Validation: LLM_REVIEW

The manager may intercept ComfyUI missing-resource signals and replace or
augment the default popup when the active ComfyUI instance is managed by
ComfyGit.

The manager should not assume it owns missing-resource behavior for unrelated
or unsupervised ComfyUI instances.

### CGM-RRL-02 [LIVE]: Resource analysis must be tied to the active workflow identity
Validation: LLM_REVIEW

Resolution UI should analyze the workflow that is currently loaded or
explicitly selected. It should avoid using stale global workflow state when the
user has loaded a different workflow or when no saved workflow is active.

### CGM-RRL-03 [LIVE]: Saved and unsaved workflow analysis are distinct modes
Validation: LLM_REVIEW

The manager may analyze saved workflow files and browser-provided workflow JSON,
but the UI and API should preserve which mode is being used.

Unsaved workflow analysis should not imply that durable workflow metadata or
contracts have already been written.

### CGM-RRL-04 [LIVE]: Resolution actions should separate installs from model download intents
Validation: LLM_REVIEW

Node installation actions, model download intents, and manual follow-up should
remain distinguishable in backend payloads and frontend review UI.

A workflow that only needs model downloads should not require the user to step
through node-install selection as if nodes were missing.

### CGM-RRL-05 [PARTIAL]: Popup suppression should be workflow-scoped rather than global-only
Validation: LLM_REVIEW

Suppression state should prevent repeated prompts for the same active workflow
and session without hiding unrelated missing-resource prompts for other
workflows.

The current code has session suppression behavior, but this remains a useful
review target whenever the active workflow lifecycle changes.

### CGM-RRL-06 [PARTIAL]: Apply-resolution results should expose follow-up state
Validation: TEST

After applying a resolution plan, the API should return enough information for
the frontend to show what was installed, what was queued for download, and what
still requires manual action.

This is especially important for model download intents, because a queued
download is not the same as a model already being available on disk.

### CGM-RRL-07 [PLANNED]: Workflow model links should feed both missing-model and provenance repair flows
Validation: MIXED

When workflows contain likely model links in notes, markdown-like instructions,
or metadata, the manager should expose those links as source candidates.

Those candidates may help users in two different states:

- a referenced model is missing locally and the user wants to download it
- a referenced model exists locally but lacks portable source provenance

The resolution system should preserve this distinction. A workflow link is a
candidate source, not proof that a missing model is installed and not proof that
an existing local model came from that exact URL until the user confirms it.
