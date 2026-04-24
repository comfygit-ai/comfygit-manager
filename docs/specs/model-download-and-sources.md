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

