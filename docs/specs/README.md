# Specs

This directory holds manager behavior specs.

Specs may contain clause IDs and status tags. A clause being normative does not
mean the file belongs in `docs/contracts/`.

Use specs for:

- lifecycle behavior
- state machines
- information architecture
- durable data shapes used by manager behavior
- product flow details inside a contracted surface

Use contracts for:

- stable surface boundaries
- API or UI guarantees that other code depends on
- cross-file responsibilities that should stay true while implementation
  details change

Use architecture docs for:

- ownership rationale
- manager/core/cloud responsibility splits
- long-lived design philosophy

Use reference docs for:

- historical audits
- migration notes
- supporting material that is not the active source of truth

## Current Specs

- `workflow-contract-authoring.md` defines the workflow contract editing flow.
- `workflow-contract-data-model.md` defines the manager-facing contract data
  shape. If this becomes a core-owned durable schema, promote or mirror the
  canonical shape in the core repo.
- `graph-integration-and-selection.md` defines active graph observation and
  selection behavior.
- `panel-information-architecture.md` defines local panel navigation and
  grouping behavior.
- `cloud-linking-and-publication.md` defines the local-panel bridge to
  ComfyGit Cloud revision publication.
- `resource-resolution-lifecycle.md` defines missing-resource analysis and
  resolution flow.
- `model-download-and-sources.md` defines model source and download behavior.
- `node-installability.md` defines missing-node and blocked-node semantics.
- `environment-lifecycle-and-orchestrator.md` defines local orchestrator and
  environment switch behavior.

## Promotion Rule

Move or mirror a spec clause into a contract only when it becomes a stable
surface guarantee that callers, sibling repos, or major UI/API boundaries depend
on directly.

Otherwise, keep detailed behavior in specs and have contracts reference the
relevant spec clause IDs.

