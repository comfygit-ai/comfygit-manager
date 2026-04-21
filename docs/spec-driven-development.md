# Spec-Driven Development

This repo uses a lightweight spec-driven development layer for manager-specific behavior.

## Layout

```text
docs/
  contracts/
    manager-ui/CONTRACT.md
    manager-api/CONTRACT.md
  specs/
    workflow-contract-authoring.md
    graph-integration-and-selection.md
    panel-information-architecture.md
  architecture/
    service-boundaries.md
```

## Usage

- contracts define normative manager guarantees and boundaries
- specs define intended lifecycle and interaction behavior
- architecture docs explain responsibility splits

## Initial Focus

The first truth-layer focus is workflow contract authoring:
- manager UI entry points
- manager API contract
- graph integration seam
- boundary between manager, core, and ComfyUI

## Traceability

Future implementation work in this repo should reference clause IDs when changing:
- workflow contract authoring
- workflow graph integration
- manager workflow summary/detail payloads
- manager-owned workflow actions
- panel information architecture and navigation grouping
