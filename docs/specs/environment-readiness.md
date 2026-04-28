# Environment Readiness

## Purpose

This spec defines how the local manager summarizes whether the current
environment is ready for reproducible export, git push handoff, and later
cloud build/deploy ingestion.

Readiness is a cross-cutting environment summary. It is not a separate primary
domain like workflows, models, nodes, version control, environments, or
diagnostics. It should help users understand what needs attention without
making them inspect manifests, hashes, package-manager internals, or cloud
control-plane state first.

## User Mental Model

The local manager should support this authoring path:

1. Build or open a workflow.
2. Fix missing resources.
3. Define workflow inputs and outputs.
4. Check environment readiness.
5. Commit and push.

Readiness exists to keep steps 2 through 5 understandable. It should collapse
technical dependency and source-state details into actionable grouped issues.

## Readiness Domains

The readiness model should group issues by user-facing domain:

- Source State: uncommitted changes, remote/branch handoff issues
- Models: missing download source, missing strong hash when required later,
  unavailable or private source access when known
- Custom Nodes: missing registry/git provenance, local-dev-only source,
  required versus optional criticality
- Workflows: missing workflow file state, missing or invalid execution
  contract for deployable workflows
- Runtime: managed-runtime compatibility, system dependency or custom runtime
  requirements when cloud/build-plan checks can determine them

Near-term local manager repair should focus on models, custom nodes, workflow
contracts, and source-state issues. Runtime/system dependency readiness is
deferred to cloud/build-plan checks unless the local manager has reliable local
evidence.

## Clauses

### CGM-READY-01 [PARTIAL]: Status should summarize environment readiness
Validation: HUMAN_REVIEW

The Status surface should make environment reproducibility visible with the
same issue language used for other local environment problems.

When readiness issues exist, Status should show a compact warning under
`Issues` with a grouped summary and a `Review Issues` action. When no
readiness issues exist, Status should not add a separate success card or make
reproducibility compete with runtime health.

Manual refresh controls should not be required in the primary readiness review
path when repair actions already revalidate the content.

The current Status implementation reports environment reproducibility as a
warning card under the Status `Issues` section. This keeps reproducibility
visible without presenting it as more severe than local runtime failures. The
card links model/custom-node repair items to the shared readiness review
surface.

This remains partial until Source State, Workflows, and Runtime issue groups
are fully represented by the shared readiness object and review surface.

### CGM-READY-02 [PLANNED]: Readiness review should be a shared contextual repair surface
Validation: MIXED

The manager should use one shared readiness review surface for environment
readiness issues, rather than separate incompatible modals for status, export,
push, and future deploy/build paths.

The shared surface should be reusable from:

- the Status reproducibility issue card
- export warnings
- push warnings
- future cloud/build/deploy warning gates

Entry context may change copy and primary action labels, but the issue grouping
and repair actions should remain consistent.

### CGM-READY-03 [PLANNED]: Readiness should group issues before exposing implementation detail
Validation: HUMAN_REVIEW

Readiness review should group issues by Source State, Models, Custom Nodes,
Workflows, and Runtime before showing low-level details.

The UI should prefer user-facing labels such as:

- `download source`
- `ready`
- `needs attention`
- `blocked`
- `review issues`

Implementation-heavy terms such as `provenance`, `manifest`, `hash`, or
`package metadata` may appear in details or diagnostics, but they should not be
the first concepts users must understand.

### CGM-READY-04 [LIVE]: Model and custom-node source issues are the first readiness repair slice
Validation: MIXED

The current local readiness flow detects model entries without download
sources and required custom nodes without portable source metadata.

The current repair path is:

- models: open the model source-finder directly from readiness, attach a
  download source, and compute full hashes when needed
- custom nodes: expose required/optional criticality and missing portable
  source state; required nodes can be resolved by adding portable source
  metadata or marking the node optional

Optional nodes must remain tracked locally but should not appear in
reproducibility warnings, export/push gates, cloud build-plan required inputs,
or deployment required inputs when they lack portable source metadata.

The readiness review surface should not route users through Model Details just
to repair a missing model source. Model Details remains available for factual
inspection, while readiness is a guided repair flow.

### CGM-READY-05 [PLANNED]: Workflow contract readiness should feed the same review surface
Validation: MIXED

When a workflow is expected to be deployable or callable by a future cloud/API
flow, readiness should be able to report missing or invalid execution
contracts.

The first useful action for that issue should route users to the workflow's
contract authoring surface instead of making them inspect raw workflow metadata.

### CGM-READY-06 [PLANNED]: Source-state readiness should stay tied to git handoff
Validation: MIXED

Export, push, and future cloud handoff checks should surface source-state
issues such as uncommitted changes, missing remote configuration, or unknown
branch/commit identity through the same readiness review pattern.

The local manager should remain git-handoff oriented. It should not turn
source-state readiness into a cloud account, GitHub App installation, or cloud
environment-linking workflow.

### CGM-READY-07 [DEFERRED]: Runtime readiness should be cloud/build-plan driven
Validation: HUMAN_REVIEW

Managed runtime compatibility, system dependency support, GPU/runtime tier
fit, custom image requirements, provider asset availability, and model cache
availability should primarily be determined by cloud build-plan and deployment
checks.

The local manager may later display cloud-provided summaries, but it should not
pretend to prove runtime deployability from local package state alone.
