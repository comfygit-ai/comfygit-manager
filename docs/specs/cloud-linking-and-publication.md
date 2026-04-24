# Cloud Repo Handoff

## Purpose

This spec defines the intended local-panel behavior for preparing a ComfyGit
environment for ComfyGit Cloud under the repo-backed MVP model.

The local panel is an authoring and version-control surface. It should help
users commit environment state and push it to the GitHub repository that the
cloud dashboard has already linked as the environment source of truth. The
local panel should not be a separate cloud account, publication, build, or
deployment control plane.

## Ownership Split

The local panel should own:

- local environment authoring
- workflow contract authoring
- local commits
- local git remote configuration
- push/pull/fetch operations against user-configured remotes

The local panel should not own:

- cloud account connection state for the MVP
- cloud sign-in and sign-out affordances for the MVP
- cloud workspace selection for the MVP
- direct revision publication into cloud
- cloud environment linkage
- cloud build policy
- target creation
- provider configuration
- deployment orchestration
- runtime health administration
- published-workflow binding administration

Those remain cloud responsibilities.

## Repo-Backed Handoff Workflow

The intended MVP story is:

1. edit locally
2. define workflow contracts locally
3. commit locally
4. configure the Git remote for the cloud-linked GitHub environment repository
5. push commits to that repository
6. use the cloud dashboard to inspect commits, build images, deploy, and manage runtime behavior

## Linking Model

### CGM-CLP-01 [RETIRED]: The local panel should model cloud linkage as account and workspace state
Validation: HUMAN_REVIEW

This account/workspace local-linking model has been retired for the repo-backed
MVP. The retired model exposed:
- signed-in cloud account
- active cloud workspace or organization when cloud exposes that model
- local session or token state

The active direction is `CGM-CLP-06`: cloud linkage is established in the cloud
dashboard through GitHub App installation and repository selection, while the
local panel only pushes commits to the configured git remote.

### CGM-CLP-01A [RETIRED]: `Account` should be the primary local surface for cloud identity and session management
Validation: HUMAN_REVIEW

The dedicated local `Account` destination is retired for the repo-backed MVP.
The retired model included:
- cloud URL configuration
- sign-in
- sign-up
- sign-out
- authenticated account details

Cloud identity and GitHub App installation should be managed in the cloud
dashboard, not in the local ComfyUI manager panel.

### CGM-CLP-01B [RETIRED]: `Publish` should show authentication status but not become the primary full auth form
Validation: HUMAN_REVIEW

The local `Publish` destination is retired for the repo-backed MVP. The retired
model allowed `Publish` to show:
- signed-in or signed-out status in the header
- a blocked-state card when publication is unavailable due to missing auth

This no longer matches the active source-of-truth model because publication is
not a direct local-to-cloud API operation. Pushing a git commit is the local
handoff.

### CGM-CLP-02 [RETIRED]: Publication should create immutable cloud revisions rather than attempt in-place local deployment
Validation: HUMAN_REVIEW

The local `Publish Revision` action is retired for the repo-backed MVP.

The retired action would have:
- package the local environment snapshot
- send revision metadata and environment state to cloud
- receive a created cloud revision identity or version
- leave deployment selection to the cloud dashboard

Under the active model, cloud revisions/build candidates are derived from GitHub
repository commits observed by the cloud dashboard.

### CGM-CLP-02C [RETIRED]: The publish surface should support an explicit local-to-cloud environment link rather than relying only on environment-name matching
Validation: HUMAN_REVIEW

The explicit local-to-cloud environment link is retired for the repo-backed
MVP. The cloud dashboard owns environment linkage by selecting a GitHub
installation, repository, and tracked branch.

### CGM-CLP-02A [RETIRED]: The publish surface may show a local `Working Copy`, but that row should represent only the current local publish candidate
Validation: HUMAN_REVIEW

The local publish working-copy row is retired with the local `Publish` surface.
Working-copy state remains a version-control concern in the local panel.

### CGM-CLP-02B [RETIRED]: Publish readiness should use export-style validation and warning UX before creating a cloud revision
Validation: HUMAN_REVIEW

Local publish readiness checks are retired with the direct local publication
flow. Validation remains useful before export, commit, build, and cloud deploy,
but local `Publish Revision` is no longer the MVP trigger.

### CGM-CLP-03 [RETIRED]: The publish surface should remain lightweight after publication succeeds
Validation: HUMAN_REVIEW

This local publish-success surface is retired for the repo-backed MVP. The
retired model allowed the local panel to show:
- latest published revision id or version
- publish time
- publish success or failure status
- link to open the cloud dashboard

### CGM-CLP-03B [RETIRED]: The publish surface should be revision-centric rather than deployment-centric
Validation: HUMAN_REVIEW

The local publish surface is retired, so it should no longer define the primary
local/cloud mental model. The active mental model is repo commit handoff.

### CGM-CLP-03A [RETIRED]: The first local auth slice may use cloud user-session auth before converging on dedicated publication credentials
Validation: HUMAN_REVIEW

Local cloud user-session auth for publication is retired for the repo-backed
MVP. The local panel should rely on git credentials for push/fetch operations;
cloud user auth belongs in the cloud dashboard.

### CGM-CLP-04 [RETIRED]: Local cloud publication should preserve portable workflow contracts and manifest state
Validation: HUMAN_REVIEW

Direct local cloud publication is retired. The durable state still must be
preserved, but it now travels through git commits. A pushed commit should carry:
- environment manifest state
- workflow definitions
- portable workflow execution contracts
- source metadata such as optional Git commit identity

Cloud should ingest that state from the linked repository commit rather than
requiring repeated dashboard-side remapping.

### CGM-CLP-05 [DEFERRED]: Pulling cloud working-copy state or revisions back into local environments is not part of the first slice
Validation: HUMAN_REVIEW

The initial direction should focus on:
- local authoring
- local commit/version control
- local git push to the cloud-linked repository

Cloud-to-local pull or working-copy hydration may exist later, but it should not
complicate the first integrated local/cloud bridge.

### CGM-CLP-06 [PLANNED]: The local cloud handoff should be git remote and push oriented
Validation: HUMAN_REVIEW

The local manager should treat git as the handoff protocol to ComfyGit Cloud.
For the MVP, the local panel should help users ensure that:

- the environment is committed
- the appropriate GitHub remote is configured
- commits are pushed to the repository linked in the cloud dashboard

The local panel should not call cloud publication APIs or require a local cloud
session to make a commit visible to cloud.

### CGM-CLP-07 [PLANNED]: Cloud environment linking should be dashboard-owned
Validation: HUMAN_REVIEW

The cloud dashboard should own GitHub account connection, GitHub App
installation, repository selection, tracked branch selection, and environment
linkage. The local panel may point users toward remote configuration and the
cloud dashboard, but it should not duplicate that linking flow.

### CGM-CLP-08 [PLANNED]: Version Control should be the local bridge to cloud
Validation: HUMAN_REVIEW

The local panel's version-control and remote-management surfaces should become
the place users prepare cloud-visible state. Cloud-facing helper copy may exist
there, but the local sidebar should not require a separate `Cloud` domain for
MVP account or publication flows.
