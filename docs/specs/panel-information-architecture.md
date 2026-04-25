# Panel Information Architecture

This spec defines the intended information architecture for the ComfyGit panel
so related controls remain together and top-level navigation reflects user
mental models rather than the order features were added.

## Goals

- keep top-level navigation small
- group related controls by job-to-be-done
- avoid turning the sidebar into a feature dump
- leave room for the future cloud bridge without rebuilding the panel again

## Navigation Direction

### CGM-IA-01 [PARTIAL]: Top-level panel navigation should group destinations by operational domain
Validation: HUMAN_REVIEW

The panel should organize top-level navigation into a small number of stable
domains such as:
- `THIS ENV`
- `WORKSPACE`
- `CLOUD`
- `DIAGNOSTICS`

These groups should reflect how users reason about the product, not the order in
which features were implemented.

The current panel has grouped sidebar sections for `THIS ENV`, `WORKSPACE`, and
`CLOUD`, but diagnostics is currently a destination inside `THIS ENV` rather
than a separate `DIAGNOSTICS` domain.

### CGM-IA-02 [LIVE]: Git history, branches, and remotes should be presented as one version-control domain
Validation: HUMAN_REVIEW

`History`, `Branches`, and `Remotes` should not remain scattered across
unrelated sidebar areas. The intended direction is a single `Version Control`
destination for the current environment with internal sub-navigation or tabs for:
- commit history
- branch operations
- remote configuration and pull/push workflows

The current panel exposes one `Version Control` destination with internal
`History`, `Branches`, and `Remotes` tabs.

### CGM-IA-03 [LIVE]: The environments view should remain the primary workspace entry point for environment management
Validation: HUMAN_REVIEW

The `Environments` destination should remain the main place where users:
- view available environments
- create new environments
- switch environments
- inspect environment details

Environment import and export should be attached to this surface rather than
remaining independent top-level sidebar destinations.

### CGM-IA-04 [LIVE]: Environment import should be initiated from the environments view instead of the global sidebar
Validation: HUMAN_REVIEW

The `Environments` surface should expose an explicit `Import` action in the
header so users can start creating a new environment from an imported bundle
without leaving the environment-management context.

Import should remain a workspace-level action because it creates a new
environment rather than mutating the current one.

### CGM-IA-05 [LIVE]: Environment export should be initiated from environment cards or details rather than a top-level sidebar destination
Validation: HUMAN_REVIEW

Export is an operation on a specific environment. The intended UX is:
- users open the `Environments` surface
- users choose the environment to export
- export is launched from that environment's card or detail actions

This keeps export coupled to the environment it acts on and avoids a floating
top-level `Export` destination with weak object context.

### CGM-IA-06 [LIVE]: The environments header should prioritize create and import over refresh
Validation: HUMAN_REVIEW

The `Environments` header should emphasize user actions with durable product
meaning:
- `Create`
- `Import`

`Refresh` should not remain a primary always-visible action in that header. If
manual refresh remains useful, it should be secondary or implicit.

### CGM-IA-07 [RETIRED]: The cloud domain should split into distinct `Account` and `Publish` destinations
Validation: HUMAN_REVIEW

The local `Cloud` domain with distinct `Account` and `Publish` destinations is
retired for the repo-backed MVP. The retired model split cloud UI into:
- `Account`
- `Publish`

The retired `Account` surface owned:
- cloud URL or endpoint selection
- sign-in and sign-up flows
- sign-out
- authenticated account details
- later workspace selection when cloud exposes that model

The retired `Publish` surface owned:
- publish revision actions
- recent cloud revisions
- optional local `Working Copy` when the current local state is not yet
  represented by a known published revision
- open-dashboard affordances
- lightweight publication status summaries

Cloud account/session management and environment linkage now belong in the cloud
dashboard. The local bridge to cloud should move through git remotes and pushes.

### CGM-IA-07A [LIVE]: The MVP local panel should not expose a first-class Cloud domain
Validation: HUMAN_REVIEW

For the repo-backed MVP, the local manager panel should not expose `Cloud`,
`Account`, or `Publish` as first-class sidebar destinations. Cloud-visible state
is produced by committing and pushing the environment repository.

Cloud-specific guidance, if needed locally, should be presented inside
version-control and remote-management surfaces.

### CGM-IA-08 [LIVE]: Diagnostics and inspection tools should be consolidated away from primary authoring navigation
Validation: HUMAN_REVIEW

Manifest inspection and debug-oriented views should live under a diagnostics
domain instead of remaining peer-level primary destinations beside authoring and
version-control flows.

This includes surfaces such as:
- manifest inspection
- environment debug
- workspace debug

The current panel has a dedicated `DIAGNOSTICS` sidebar domain with direct
entries for:

- `Manifest`
- `Logging`

The `Logging` destination groups environment, workspace, and orchestrator logs
behind local tabs so logging depth does not over-expand the primary sidebar.

### CGM-IA-09 [LIVE]: The local panel should not try to replicate the full cloud control-plane UX
Validation: HUMAN_REVIEW

The local panel should not grow into a second full deployment dashboard. Rich
deployment orchestration, published-workflow binding, cloud account management,
GitHub App installation, repository linkage, and control-plane administration
should remain cloud-dashboard responsibilities.

The current top-level panel no longer exposes cloud account or publish-revision
surfaces.

### CGM-IA-10 [LIVE]: Provider-target and deployment controls should not remain first-class local panel destinations
Validation: HUMAN_REVIEW

RunPod, custom worker, and other provider-specific deployment controls are not
the intended long-term primary job of the local panel.

The local panel should prefer:
- local commits
- git remotes
- push/fetch/pull state
- optional helper copy that explains cloud ingests the linked GitHub repository

Cloud should own the actual deployment and runtime-management workflow.

The current panel maps old `Deploy`, `Publish`, and `Account` navigation state
to Version Control rather than keeping the retired Cloud domain active. Legacy
deploy components may still exist in the codebase as reference or unused code,
but they are not part of the active panel information architecture.

### CGM-IA-11 [RETIRED]: Blocked publish flows should route users to `Account` rather than embedding a second full auth surface inside `Publish`
Validation: HUMAN_REVIEW

Blocked local publish flows are retired with the local `Publish` destination.
The retired model allowed `Publish` to show:
- unauthenticated status in the header
- a blocked-state message in the main content
- a `Sign in` or `Go to Account` action

The active model does not require local cloud sign-in before cloud can observe
environment state. It requires pushing commits to the GitHub repository linked
in the cloud dashboard.

### CGM-IA-12 [PLANNED]: Readiness should live on Status, not as another top-level destination
Validation: HUMAN_REVIEW

Environment readiness is a cross-cutting summary of the current environment,
not a standalone operational domain. The panel should not add a top-level
`Readiness` destination for the first implementation.

The Status surface should own the compact `Environment Readiness` summary.
Contextual gates such as export and push should link into the same review
surface rather than creating their own separate readiness destinations.

The detailed readiness behavior is specified by `CGM-READY-01` through
`CGM-READY-07` in `docs/specs/environment-readiness.md`.
