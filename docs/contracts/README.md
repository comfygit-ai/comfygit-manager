# Contracts

This directory holds the normative contract surfaces for `comfygit-manager`.

Use these files for:
- stable responsibilities and boundaries
- current guarantees the manager should preserve
- planned guarantees the manager is expected to grow into

Keep these docs smaller than the product.

## Surfaces

- `manager-ui/CONTRACT.md`  
  Frontend panel, workflow actions, and graph-adjacent UX boundaries.

- `manager-api/CONTRACT.md`  
  HTTP contract between the frontend and the local manager backend.

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
