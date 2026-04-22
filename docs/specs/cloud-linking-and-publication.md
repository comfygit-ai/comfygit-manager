# Cloud Linking And Publication

## Purpose

This spec defines the intended local-panel behavior for connecting a ComfyGit
environment to ComfyGit Cloud and publishing immutable revisions into that cloud
workspace.

The goal is to make the local panel the source-authoring and publication entry
point without turning it into a second deployment dashboard.

## Ownership Split

The local panel should own:

- cloud account connection state
- cloud sign-in and sign-out affordances
- active cloud workspace selection when supported by cloud
- revision publication initiation
- lightweight visibility into recent published revisions

The local panel should not own:

- target creation
- provider configuration
- deployment orchestration
- runtime health administration
- published-workflow binding administration

Those remain cloud responsibilities.

## Publication Workflow

The intended first integrated story is:

1. edit locally
2. define workflow contracts locally
3. commit locally
4. authenticate to cloud
5. publish an immutable revision to cloud
6. open the cloud dashboard to deploy and manage runtime behavior

## Linking Model

### CGM-CLP-01 [PLANNED]: The local panel should model cloud linkage as account and workspace state
Validation: HUMAN_REVIEW

The local panel should expose a concept of:
- signed-in cloud account
- active cloud workspace or organization when cloud exposes that model
- local session or token state

It should not model provider targets as the first cloud-linking primitive.

### CGM-CLP-01A [PLANNED]: `Account` should be the primary local surface for cloud identity and session management
Validation: HUMAN_REVIEW

The local panel should expose a dedicated `Account` destination under the cloud
domain for:
- cloud URL configuration
- sign-in
- sign-up
- sign-out
- authenticated account details

This destination should be the canonical place for managing cloud identity from
the local panel.

### CGM-CLP-01B [PLANNED]: `Publish` should show authentication status but not become the primary full auth form
Validation: HUMAN_REVIEW

The `Publish` destination may show:
- signed-in or signed-out status in the header
- a blocked-state card when publication is unavailable due to missing auth

If the user is not authenticated, the primary recovery action should navigate
them to `Account` rather than opening or embedding a second full login/signup
surface inside `Publish`.

### CGM-CLP-02 [PLANNED]: Publication should create immutable cloud revisions rather than attempt in-place local deployment
Validation: HUMAN_REVIEW

The primary local-cloud action should be `Publish Revision`.

That action should:
- package the local environment snapshot
- send revision metadata and environment state to cloud
- receive a created cloud revision identity or version
- leave deployment selection to the cloud dashboard

The successful result of this action should be understood as:

- immutable revision created in cloud

and not automatically as:

- provider-compatible build available
- verified runtime artifact available
- live deployment created

### CGM-CLP-02C [PLANNED]: The publish surface should support an explicit local-to-cloud environment link rather than relying only on environment-name matching
Validation: HUMAN_REVIEW

The local panel should allow a user to explicitly choose which cloud
environment a given local environment publishes into.

This link should:
- be scoped to the current local environment identity
- prefer an explicit stored cloud environment id over name matching
- fall back to name matching only when no explicit link exists

The publish surface should make that linked environment visible so users can
verify where revisions will be created.

### CGM-CLP-02A [PLANNED]: The publish surface may show a local `Working Copy`, but that row should represent only the current local publish candidate
Validation: HUMAN_REVIEW

If the current local environment snapshot does not match a known published cloud
revision, the local panel may show a top-level `Working Copy` row.

That row should mean only:
- current local publish candidate
- not yet represented by a known published cloud revision

It should not imply:
- semantic diff from the latest cloud revision
- additive or subtractive change counts such as workflows added or removed
- clean lineage from any particular prior cloud revision

Those claims require a stronger revision comparison model than the first slice
should assume.

### CGM-CLP-02B [PLANNED]: Publish readiness should use export-style validation and warning UX before creating a cloud revision
Validation: HUMAN_REVIEW

Before creating a cloud revision, `Publish Revision` should run a preflight
validation pass similar in spirit to local export validation.

That validation should be able to surface:
- blocking issues such as uncommitted changes or unresolved environment issues
- non-blocking deployability warnings such as models missing source URLs or
  other portability gaps

The publish flow should reuse the same family of warning/review UX patterns
rather than publishing blindly.

### CGM-CLP-03 [PLANNED]: The publish surface should remain lightweight after publication succeeds
Validation: HUMAN_REVIEW

After publication, the local panel may show:
- latest published revision id or version
- publish time
- publish success or failure status
- link to open the cloud dashboard

It should not immediately turn into a full deployment operations console.

The local panel may later show lightweight cloud-derived summaries such as:
- revision published
- build in progress or failed
- revision verified for a target class

But those summaries should remain read-oriented indicators coming from cloud
rather than local build orchestration.

### CGM-CLP-03B [PLANNED]: The publish surface should be revision-centric rather than deployment-centric
Validation: HUMAN_REVIEW

The primary mental model of the publish surface should be:
- optional local `Working Copy`
- immutable published revisions

It should not primarily present:
- provider targets
- deployment instances
- rollout controls
- runtime operations

It should also avoid implying that a published revision is already a built or
verified runtime unless cloud has explicitly supplied that state.

### CGM-CLP-03A [PLANNED]: The first local auth slice may use cloud user-session auth before converging on dedicated publication credentials
Validation: HUMAN_REVIEW

For the first integrated slice, local publication may authenticate with the
same cloud user session used for the dashboard account flow.

Later iterations may introduce dedicated scoped publication credentials or API
keys for local clients, but that should not block the first account-linking and
publish flow.

### CGM-CLP-04 [PLANNED]: Local cloud publication should preserve portable workflow contracts and manifest state
Validation: HUMAN_REVIEW

Publishing a revision from the local panel should carry:
- environment manifest state
- workflow definitions
- portable workflow execution contracts
- source metadata such as optional Git commit identity

Cloud should ingest that state as part of the revision rather than forcing
repeated dashboard-side remapping.

### CGM-CLP-05 [DEFERRED]: Pulling cloud working-copy state or revisions back into local environments is not part of the first slice
Validation: HUMAN_REVIEW

The initial direction should focus on:
- local authoring
- local commit/version control
- local-to-cloud revision publication

Cloud-to-local pull or working-copy hydration may exist later, but it should not
complicate the first integrated local/cloud bridge.
