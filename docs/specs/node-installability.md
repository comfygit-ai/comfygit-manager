# Node Installability

## Purpose

This spec defines how the manager represents missing custom nodes, blocked node
installability, and version-gated package choices.

The goal is to give users clear dependency status without pretending every
missing node can be installed automatically.

## Clauses

### CGM-NODE-01 [LIVE]: Missing-node state should distinguish installable, blocked, and unknown cases
Validation: LLM_REVIEW

The manager should not collapse all missing custom node state into one
`missing` bucket.

Resolution payloads and UI should distinguish:

- installable packages with a trusted install source
- version-gated packages that cannot be installed in the current environment
- community-mapped or inferred packages that need validation
- unknown nodes that require manual action

### CGM-NODE-02 [LIVE]: Version-gated nodes are blocked rather than silently skipped
Validation: LLM_REVIEW

When a node package is known but blocked by ComfyUI, Python, platform, or other
version constraints, the manager should present it as blocked with a reason.

It should not silently omit the package from resolution output.

### CGM-NODE-03 [PARTIAL]: Community-mapped packages should become actionable only after install-source validation
Validation: LLM_REVIEW

Registry and git install sources should be validated before the manager turns a
community-mapped or inferred package into an install action.

This remains partial because package identity and source-validation behavior
should be reviewed whenever registry data or alias handling changes.

### CGM-NODE-04 [LIVE]: Canonical package identity should prevent duplicate install choices
Validation: LLM_REVIEW

The manager should deduplicate package choices by canonical identity when a
package is discoverable through aliases, registry identifiers, or inferred node
names.

### CGM-NODE-05 [RETIRED]: Tracked local UV path rewrites are not the active dev override model
Validation: HUMAN_REVIEW

Older bead-era work explored modifying tracked environment configuration for
local editable package paths.

The active local-development model is overlay-based. Local editable source
paths belong in `.cec/overlays/.local.toml` and development scripts, not in
portable environment truth.

### CGM-NODE-06 [PLANNED]: Accelerator package overlays may get dedicated UI later
Validation: HUMAN_REVIEW

Special accelerator packages and local package overlays may need UI in a later
developer-focused slice, but they are not part of the current resource
resolution baseline.

### CGM-NODE-07 [LIVE]: Installed node criticality is not inferred from workflow usage
Validation: MIXED

Tracked custom nodes are considered required unless the user explicitly marks
them optional.

Workflow usage analysis may show which workflows reference a package, but it
must not decide whether an installed package is required or optional. A package
can affect runtime behavior without appearing as a graph node, so automatic
criticality inference would create a false reproducibility guarantee.

Readiness checks should report required nodes without portable provenance as
issues. Optional nodes without portable provenance should stay tracked in the
local environment manifest, but they should be excluded from export, push,
cloud build-plan, and deployment readiness warnings.

This preserves the local safety property of tracking development nodes so
sync/rollback does not treat them as random filesystem drift, while allowing
the user to declare that a local development node is not part of the portable
dependency set.
