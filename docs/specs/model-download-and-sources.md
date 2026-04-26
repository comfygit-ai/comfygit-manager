# Model Download And Sources

## Purpose

This spec defines manager behavior for finding, selecting, and downloading
model files from external sources such as Hugging Face or direct URLs.

The manager should preserve source metadata so environments remain portable and
auditable. A downloaded file without a source is less useful than a model entry
that records where it came from and why it was selected.

## Clauses

### CGM-MDL-01 [LIVE]: Model acquisition should preserve source metadata
Validation: LLM_REVIEW

Model download UI and APIs should preserve source information such as provider,
repository, path, revision when available, original URL, destination category,
and local filename.

This metadata should be carried into pending download intents and any durable
environment state that records model requirements.

### CGM-MDL-02 [LIVE]: Hugging Face browsing should support repository and file-level selection
Validation: TEST

The manager API may expose Hugging Face search, repository-info,
subdirectory-listing, and file-selection endpoints so the frontend can help
users choose exact files rather than forcing manual URL entry.

### CGM-MDL-03 [PARTIAL]: Hugging Face auth should have explicit token precedence
Validation: LLM_REVIEW

Hugging Face token behavior should be explicit and easy to reason about.

The intended precedence is:

1. user-provided token for the current request or session, when supported
2. manager/server configuration
3. unauthenticated access

The current implementation primarily relies on server environment
configuration, so richer user-scoped token handling remains partial.

### CGM-MDL-04 [LIVE]: Destination inference should be visible and overridable
Validation: LLM_REVIEW

The manager may infer model destination directories from model type, filename,
or workflow metadata, but the user should be able to see the resulting
destination before queueing a download.

### CGM-MDL-05 [PARTIAL]: Download progress should survive panel refreshes where practical
Validation: TEST

Long-running downloads should have backend-owned state so the panel can
reconnect and show current progress after reload or remount.

This clause remains partial until the download job lifecycle is consistently
covered by tests and reconnect behavior.

### CGM-MDL-06 [PLANNED]: Manual model add and remove flows should preserve the same metadata model
Validation: HUMAN_REVIEW

When users manually add or remove model entries, those flows should use the
same source, destination, and portability concepts as the guided download flow.

Manual model management should not create a second incompatible model metadata
shape.

### CGM-MDL-07 [PARTIAL]: Source discovery should be a shared picker primitive
Validation: LLM_REVIEW

The manager should treat "find a model source" as a reusable primitive rather
than a behavior owned only by the download modal.

The shared source picker currently supports workflow-link discovery, Hugging
Face search/file selection, and direct URL entry across model download and
existing-model source repair flows.

The shared source picker should support provider/search surfaces such as:

- workflow links discovered from saved or active workflow JSON
- Hugging Face search and file selection
- Civitai search or lookup when supported
- direct URL entry

The picker should return a candidate source selection. Callers decide what the
candidate means:

- missing-model acquisition queues or starts a model download
- existing-model provenance repair attaches the source to a local model record
- future cloud/build-plan checks use the same source facts as dependency
  availability evidence

This remains partial until Civitai and any future provider-specific source
selection flows share the same primitive.

### CGM-MDL-08 [LIVE]: Download and provenance repair should be separate outcomes of the same source selection
Validation: LLM_REVIEW

The model download flow and the model provenance-repair flow may share source
search, candidate presentation, token configuration, workflow-link scanning,
and direct URL validation, but they should not share the same user-facing
outcome.

For a missing model, the primary action is `Download` or `Queue Download`, and
the UI must show the selected source and destination before the action.

For an already-present local model, the primary action is `Use as source`, and
the UI must attach the selected URL/provenance metadata to the existing model
index entry without downloading another copy.

### CGM-MDL-09 [LIVE]: Model details should remain factual while source repair uses a dedicated flow
Validation: HUMAN_REVIEW

The model details surface should show the current local facts for a model:
filename, category, size, known hashes, locations, and configured download
sources.

When source metadata is missing, the details surface should expose a compact
`Find Source` action near download sources. That action should open a dedicated
source-repair flow rather than expanding the details modal into a full search
and resolution workspace.

Readiness may bypass Model Details and open the dedicated source-repair flow
directly when the issue is already known to be a missing model source.

### CGM-MDL-10 [PARTIAL]: Workflow-link source candidates are assistive and user-confirmed
Validation: MIXED

Workflow-link scanning should search workflow JSON and text-bearing workflow
content such as notes, markdown-like instructions, and metadata for likely
model source URLs.

The scanner may rank candidates by proximity to filename, model stem, category,
or known hashes, but it must not silently attach or download a candidate. The
user should review the candidate and explicitly choose `Download` or `Use as
source`.

Provider or URL validation may be shown as advisory evidence. Validation should
not be treated as a perfect guarantee because some providers require auth,
redirects, signed URLs, or provider-specific download flows.

The scanner currently deduplicates repeated occurrences of the same URL in the
same workflow for source-picking purposes. That prevents duplicate UI rows
while still allowing the scanner to consider links embedded in node metadata
and links written in workflow notes.

### CGM-MDL-10A [LIVE]: Workflow-link downloads should omit models already available locally
Validation: MIXED

The `Download New Model` workflow-links tab should focus on model URLs that may
represent missing downloads. It should not prompt users to download a model
that is already represented in the workspace model index.

The download candidate scanner should filter out workflow URLs when:

- the URL exactly matches an existing model source URL, or
- the URL points to a model filename already present in the workspace model
  index

This filtering applies to the missing/new model download flow. It must not
remove the same URL from the dedicated source-repair flow for an existing model,
because that flow uses workflow links to attach missing source metadata.

### CGM-MDL-11 [LIVE]: Full model hashes should be lazy, explicit, and cached
Validation: MIXED

The manager should not compute full Blake3 or SHA256 hashes for every model in
the background by default. Large model libraries make surprise disk scans an
unfriendly default.

Full hashes should be computed when the user enters a provenance-sensitive path
or explicitly asks for stronger identity evidence, such as:

- `Find Source` for a local model
- export or push readiness review
- an explicit `Compute hashes` action on model details or source repair
- future cloud/build-plan readiness checks

Once computed, full hashes should be cached in the model index and reused by
source discovery, readiness checks, and future cloud dependency proofs.
