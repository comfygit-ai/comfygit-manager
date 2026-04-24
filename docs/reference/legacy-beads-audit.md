# Legacy Beads Audit

## Purpose

This document records the April 2026 pass over `.beads/issues.jsonl`.

The old beads are historical implementation context. They are not the active
source of truth. Active behavior should be governed by:

- `docs/contracts/`
- `docs/specs/`
- tests and code that validate those clauses

## Inventory

The audited `.beads/issues.jsonl` contained:

- 113 records total
- 88 closed records
- 20 open records
- 5 tombstone records

Most records were implementation tasks for previously completed frontend,
backend, or testing slices. They should not be copied directly into the truth
layer.

## Kept As Active Truth

The audit found several durable behavior areas that were useful enough to keep
as active specs:

- workflow missing-resource and resolution lifecycle
- model download/source metadata, especially Hugging Face browsing and auth
- node installability, version-gated packages, and canonical package identity
- orchestrator-supervised environment switching and health status

These are now represented by:

- `docs/specs/resource-resolution-lifecycle.md`
- `docs/specs/model-download-and-sources.md`
- `docs/specs/node-installability.md`
- `docs/specs/environment-lifecycle-and-orchestrator.md`

## Already Covered Elsewhere

The audit did not find a need to replace the existing specs for:

- workflow contract authoring
- graph integration and selection
- panel information architecture
- cloud linking and publication
- manager/core/cloud service boundaries

Those remain the active documents for their domains.

## Retired Or Context-Only Areas

The following bead-era ideas should not drive new implementation unless a new
spec explicitly reintroduces them:

- bead-first task workflow
- tracked local UV path rewrites for editable development sources
- local panel deployment/provider orchestration
- RunPod or cloud provider management inside the local manager panel
- component-level implementation tasks that only described one historical UI
  layout or refactor

Local editable source behavior is now overlay-based and documented in
`scripts/README.md`, `dev/docker/README.md`, and `AGENTS.md`.

## Open Debt Preserved

Some open bead topics remain useful as gap-analysis targets, but they should be
tracked through clauses rather than bead IDs:

- health-check timeout and stale switch-lock recovery
- heartbeat/dead-process detection for managed ComfyUI instances
- richer Hugging Face token precedence and user-scoped auth
- reconnectable download progress
- manual model add/remove UX
- install-source validation for inferred or community-mapped custom nodes
- possible future UI for accelerator packages and local package overlays

