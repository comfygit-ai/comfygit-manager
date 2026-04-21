# Workflow Contract Data Model

This spec defines the portable workflow execution-contract shape that
`comfygit` core should persist and `comfygit-manager` should read and write.

## Purpose

The workflow execution contract needs one concrete durable shape so that:

- core can persist it in `pyproject.toml`
- manager can author and edit it
- cloud can later ingest and project it

The first implementation should keep this data model small and stable rather
than trying to solve every future contract variation.

## Persistence Shape

For the initial implementation, the execution contract should live under the
existing workflow entry in `pyproject.toml`.

Example:

```toml
[tool.comfygit.workflows.z-image]
path = "workflows/z-image.json"

[tool.comfygit.workflows.z-image.execution_contract]
version = 1
default_contract = "default"

[tool.comfygit.workflows.z-image.execution_contract.contracts.default]
display_name = "Default"
description = "Primary image generation contract"

[[tool.comfygit.workflows.z-image.execution_contract.contracts.default.inputs]]
name = "prompt"
type = "string"
display_name = "Prompt"
node_id = 6
widget_idx = 0
required = true
default = ""

[[tool.comfygit.workflows.z-image.execution_contract.contracts.default.outputs]]
name = "image"
type = "image"
display_name = "Image"
node_id = 27
selector = "primary"

[[tool.comfygit.workflows.z-image.execution_contract.contracts.default.inputs]]
name = "steps"
type = "integer"
node_id = 12
widget_idx = 2
required = false
default = 30
min = 1
max = 150

[[tool.comfygit.workflows.z-image.execution_contract.contracts.default.inputs]]
name = "scheduler"
type = "enum"
node_id = 19
widget_idx = 0
required = true
enum_values = ["normal", "karras", "exponential"]
```

Contract health such as `valid`, `stale`, or `incomplete` should be derived by
manager or cloud projection logic and must not be stored as part of the durable
contract payload.

## Workflow Identity Assumption

For the first slice, the durable contract may remain attached to the current
environment-local workflow entry keyed by workflow name/path.

That means:

- workflow filenames remain unique within an environment
- renaming a workflow is treated as removal of one workflow entry and creation
  of another
- workflow-scoped contract continuity does not automatically carry across
  rename

## Contract Object Shape

### CGM-WCDM-01 [PLANNED]: The durable contract must be stored under the workflow entry in `pyproject.toml`
Validation: TEST

Core persistence should store the execution contract as workflow-scoped
portable manifest data rather than as separate manager-only state.

### CGM-WCDM-02 [PLANNED]: The durable contract must store a schema version and default contract name
Validation: TEST

The top-level execution contract object should store at least:

- `version`
- `default_contract`
- `contracts`

The initial version should be `1`.

### CGM-WCDM-03 [PLANNED]: Contract health must be derived rather than persisted
Validation: HUMAN_REVIEW

Fields such as:

- `status`
- `is_valid`
- `stale`

must not be stored in the durable contract payload. Manager and cloud may
derive and expose those values in summary payloads, but they should not be part
of the committed contract object.

### CGM-WCDM-04 [PLANNED]: The first implementation may support one named contract while preserving room for multiple later
Validation: HUMAN_REVIEW

The persisted shape should allow multiple named contracts under
`execution_contract.contracts`, but the first implementation only needs one
named contract, conventionally `default`.

### CGM-WCDM-05 [PLANNED]: Each named contract should support user-facing metadata
Validation: TEST

Each named contract may store:

- `display_name` optional
- `description` optional

These fields are presentation metadata for authoring and later cloud projection.

## Input Item Shape

### CGM-WCDM-06 [PLANNED]: Persisted input items must use normalized field names rather than raw UI-only state
Validation: TEST

Each persisted input item should support at least:

- `name`
- `type`
- `node_id`
- `required`

Optional fields may include:

- `display_name`
- `widget_idx`
- `field_key`
- `default`
- `min`
- `max`
- `enum_values`
- `description`

The durable input item should represent portable mapping state, not transient
frontend selection state.

### CGM-WCDM-06A [PLANNED]: Numeric input constraints may be stored as optional durable bounds
Validation: TEST

Inputs with normalized type `integer` or `number` may store:

- `min`
- `max`

These fields should remain optional and should only be used when the contract
author intends to bound valid numeric values.

### CGM-WCDM-06B [PLANNED]: Enum input values may be stored as an explicit allowed set
Validation: TEST

Inputs with normalized type `enum` may store:

- `enum_values`

`enum_values` should be a bounded ordered list of allowed string values. This
field should be treated as the durable source of truth for enum options when
present.

### CGM-WCDM-07 [PLANNED]: The first implementation may target widget-backed inputs before broader graph source kinds
Validation: HUMAN_REVIEW

The first implementation may limit durable input mapping to widget-backed
workflow inputs identified by `node_id` plus `widget_idx` or equivalent field
reference. Broader source kinds such as slot-backed inputs or uploads may be
added later without invalidating the core contract shape.

## Output Item Shape

### CGM-WCDM-08 [PLANNED]: Persisted output items must be node-scoped and normalized
Validation: TEST

Each persisted output item should support at least:

- `name`
- `type`
- `node_id`

Optional fields may include:

- `display_name`
- `selector`
- `description`

### CGM-WCDM-09 [PLANNED]: The first implementation may support a simplified output selector model
Validation: HUMAN_REVIEW

The first implementation may use a simple selector convention such as
`primary`, or another bounded selector field, instead of attempting to encode
every possible ComfyUI output shape immediately.

## Normalized Types

### CGM-WCDM-10 [PLANNED]: Persisted contract items should use a bounded normalized type set
Validation: HUMAN_REVIEW

The initial normalized type set should be small and portable. Recommended
values are:

- `string`
- `integer`
- `number`
- `boolean`
- `enum`
- `image`
- `video`
- `audio`
- `file`

If manager inference cannot confidently assign a type, the authoring UI may
require explicit user choice rather than persisting unstable ad hoc type labels.

### CGM-WCDM-10A [PLANNED]: Type-specific constraint fields should be gated by normalized type
Validation: HUMAN_REVIEW

The authoring and projection layers should treat the following fields as
type-scoped rather than universally meaningful:

- `min` and `max` for `integer` and `number`
- `enum_values` for `enum`

These fields may be omitted entirely when they do not apply.

## Save Semantics

### CGM-WCDM-11 [PLANNED]: Contract writes should replace the saved contract for the workflow rather than patching it in place
Validation: TEST

The first manager/core write path should treat contract save as create-or-replace
for the workflow's durable contract state.

### CGM-WCDM-12 [PLANNED]: Reset and delete should remain distinct operations
Validation: HUMAN_REVIEW

The authoring flow should distinguish between:

- reset editor state to last saved contract
- delete the saved durable contract

These operations should not be conflated.

## Staleness And Projection

### CGM-WCDM-13 [PLANNED]: Staleness should be determined by comparing saved contract references to the active graph, not by persisted flags
Validation: TEST

If a saved contract references nodes or fields that no longer exist in the
active workflow graph, manager should project that contract as stale or
mismatched without mutating the underlying durable payload automatically.

### CGM-WCDM-14 [PLANNED]: Workflow summary payloads may expose derived contract health separately from the durable contract object
Validation: TEST

Manager API summary or detail payloads may expose derived fields such as:

- contract presence
- input count
- output count
- stale or incomplete health

Those projection fields should remain outside the committed portable contract
payload itself.
