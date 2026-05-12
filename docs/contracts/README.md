# Contracts

This directory holds the normative contract surfaces for `comfygit-manager`.

Use these files for:
- stable responsibilities and boundaries
- current guarantees the manager should preserve
- planned guarantees the manager is expected to grow into

Keep these docs smaller than the product.

Contracts are not the only files allowed to contain normative clauses. Specs
under `docs/specs/` may also contain clause IDs and status tags when the truth
is lifecycle, state-machine, information-architecture, or data-shape behavior.

The practical split is:

- contracts define stable surface guarantees and ownership boundaries
- specs define detailed behavior inside those boundaries
- contracts should reference detailed spec clauses instead of restating them

## Surfaces

- `manager-ui/CONTRACT.md`  
  Frontend panel, workflow actions, model/resource resolution UX, and
  graph-adjacent UX boundaries.

- `manager-api/CONTRACT.md`  
  HTTP contract between the frontend and the local manager backend, including
  workflow metadata, resource resolution, model downloads, and local
  environment lifecycle operations.

## Status Tags

- `[LIVE]` — expected to be true in the current codebase
- `[PARTIAL]` — partly true, with known gaps
- `[PLANNED]` — intended direction, not fully implemented yet
- `[DEFERRED]` — intentionally postponed
- `[RETIRED]` — no longer part of the active model

## Validation Classes

- `TEST`
- `STATIC`
- `LLM_REVIEW`
- `HUMAN_REVIEW`
- `MIXED`

Status says whether a clause is true today. Validation says what evidence is appropriate.
