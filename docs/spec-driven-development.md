# Spec-Driven Development

This repo uses a lightweight spec-driven development layer for manager-specific behavior.

## Layout

```text
docs/
  contracts/
    manager-ui/CONTRACT.md
    manager-api/CONTRACT.md
  specs/
    README.md
    workflow-contract-authoring.md
    graph-integration-and-selection.md
    panel-information-architecture.md
    cloud-linking-and-publication.md
    resource-resolution-lifecycle.md
    model-download-and-sources.md
    node-installability.md
    environment-lifecycle-and-orchestrator.md
  architecture/
    service-boundaries.md
  deltas/
    modal-system-cleanup.md
  reference/
    legacy-beads-audit.md
```

## Usage

- contracts define stable manager surface guarantees and boundaries
- specs define intended lifecycle, data-model, state-machine, and interaction
  behavior; specs may also contain normative clause IDs
- architecture docs explain responsibility splits
- deltas are bounded planning dossiers for near-term implementation work and
  should not override contracts, specs, or architecture docs
- reference docs preserve historical or supporting context and are not
  normative unless linked from a contract/spec clause

## Active Focus

The truth layer currently covers:

- workflow contract authoring
- graph integration and selection
- local panel information architecture
- cloud linking and revision publication
- missing-resource and dependency resolution
- model download/source metadata
- custom node installability
- orchestrated local environment lifecycle
- boundaries between manager, core, cloud, and ComfyUI

`.beads/` is historical task context only. Use
`docs/reference/legacy-beads-audit.md` for the current classification of old
bead records.

## Traceability

Future implementation work in this repo should reference clause IDs when changing:
- workflow contract authoring
- workflow graph integration
- manager workflow summary/detail payloads
- manager-owned workflow actions
- panel information architecture and navigation grouping
- cloud linking and revision publication behavior
- missing-resource and model-download resolution behavior
- node installability and version-gated dependency behavior
- local environment switch, startup, and orchestrator behavior
