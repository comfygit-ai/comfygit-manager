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

### CGM-IA-01 [PLANNED]: Top-level panel navigation should group destinations by operational domain
Validation: HUMAN_REVIEW

The panel should organize top-level navigation into a small number of stable
domains such as:
- `THIS ENV`
- `WORKSPACE`
- `CLOUD`
- `DIAGNOSTICS`

These groups should reflect how users reason about the product, not the order in
which features were implemented.

### CGM-IA-02 [PLANNED]: Git history, branches, and remotes should be presented as one version-control domain
Validation: HUMAN_REVIEW

`History`, `Branches`, and `Remotes` should not remain scattered across
unrelated sidebar areas. The intended direction is a single `Version Control`
destination for the current environment with internal sub-navigation or tabs for:
- commit history
- branch operations
- remote configuration and pull/push workflows

### CGM-IA-03 [PLANNED]: The environments view should remain the primary workspace entry point for environment management
Validation: HUMAN_REVIEW

The `Environments` destination should remain the main place where users:
- view available environments
- create new environments
- switch environments
- inspect environment details

Environment import and export should be attached to this surface rather than
remaining independent top-level sidebar destinations.

### CGM-IA-04 [PLANNED]: Environment import should be initiated from the environments view instead of the global sidebar
Validation: HUMAN_REVIEW

The `Environments` surface should expose an explicit `Import` action in the
header so users can start creating a new environment from an imported bundle
without leaving the environment-management context.

Import should remain a workspace-level action because it creates a new
environment rather than mutating the current one.

### CGM-IA-05 [PLANNED]: Environment export should be initiated from environment cards or details rather than a top-level sidebar destination
Validation: HUMAN_REVIEW

Export is an operation on a specific environment. The intended UX is:
- users open the `Environments` surface
- users choose the environment to export
- export is launched from that environment's card or detail actions

This keeps export coupled to the environment it acts on and avoids a floating
top-level `Export` destination with weak object context.

### CGM-IA-06 [PLANNED]: The environments header should prioritize create and import over refresh
Validation: HUMAN_REVIEW

The `Environments` header should emphasize user actions with durable product
meaning:
- `Create`
- `Import`

`Refresh` should not remain a primary always-visible action in that header. If
manual refresh remains useful, it should be secondary or implicit.

### CGM-IA-07 [PLANNED]: Cloud linkage and publication should become a first-class top-level domain
Validation: HUMAN_REVIEW

The current `Deploy` / sharing-oriented area should evolve into a `Cloud`
destination that can later hold:
- sign-in or linked-account state
- publish revision actions
- recent cloud revisions
- open-dashboard affordances
- lightweight deployment status summaries

This section should be the local bridge into the cloud control plane rather than
a duplicate of the full cloud dashboard.

### CGM-IA-08 [PLANNED]: Diagnostics and inspection tools should be consolidated away from primary authoring navigation
Validation: HUMAN_REVIEW

Manifest inspection and debug-oriented views should live under a diagnostics
domain instead of remaining peer-level primary destinations beside authoring and
version-control flows.

This includes surfaces such as:
- manifest inspection
- environment debug
- workspace debug

### CGM-IA-09 [DEFERRED]: The local panel should not try to replicate the full cloud control-plane UX
Validation: HUMAN_REVIEW

The local panel may provide a lightweight cloud bridge, but it should not grow
into a second full deployment dashboard. Rich deployment orchestration,
published-workflow binding, and control-plane administration should remain
cloud-dashboard responsibilities.
