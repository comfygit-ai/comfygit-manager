# Mock API Infrastructure

## Overview

The mock API provides realistic test data for frontend development without requiring a backend server. It conforms exactly to the core library return types from `comfygit_core`.

## Quick Start

### Enable Mock API (Default)
```bash
# Create .env file (or leave empty to use defaults)
VITE_USE_MOCK_API=true
```

### Disable Mock API (Use Real Backend)
```bash
# .env
VITE_USE_MOCK_API=false
```

## Architecture

### Files
- `mockApi.ts` - Mock data generators and API functions
- `useComfyGitService.ts` - Service layer with automatic mock/real toggle

### Toggle Mechanism
```typescript
// Automatic selection based on environment
const USE_MOCK = isMockApi() // reads VITE_USE_MOCK_API

// In each function:
async function getWorkflows() {
  if (USE_MOCK) return mockApi.getWorkflows()

  return fetchApi('/v2/comfygit/workflows')
}
```

## Mock Data (Enhanced)

### Environments
- **3 environments** (production [current], testing, experimental)
- **Realistic metadata**: workflow counts, node counts, branches, creation timestamps
- **Two-level hierarchy**: Environment-scoped vs Workspace-scoped operations

### Workflows
- **18 total workflows** categorized by status:
  - 3 broken (missing dependencies)
  - 2 new (uncommitted)
  - 1 modified
  - 12 synced
- **Rich analysis data**: node counts, model counts, resolution status
- **Full resolution results**: confidence scores, match types, ambiguous candidates

### Models (Two-Level Hierarchy)
- **Environment models (3)** - Used in current environment only
  - flux1-dev-fp8.safetensors (11.7 GB) - Available
  - sd_xl_base_1.0.safetensors (6.9 GB) - Available
  - clip_l.safetensors (246 MB) - Available, no source URL

- **Workspace models (5)** - All models across all environments
  - Above 3 models PLUS:
  - v1-5-pruned.ckpt (4.3 GB) - Unused (candidate for deletion)
  - controlnet_openpose.safetensors (1.5 GB) - Unused

- **Complete metadata**:
  - CRC32 hash (8 chars) for quick lookup
  - SHA256 hash (64 chars) for deduplication
  - File sizes in bytes + MB
  - Unix timestamps (mtime, last_seen)
  - Relative paths, categories
  - Extensible metadata dicts

### Nodes
- **Rich node information**:
  - comfyui_flux (installed, v1.2.0, registry source)
  - rgthree-comfy (not installed, registry source)
  - comfyui-image-saver (not installed, registry source)
- **Complete metadata**: repositories, versions, download URLs, sources

### Resolution Results
- **Confidence scoring**: 0.70 (type_only) to 1.0 (exact match)
- **Match types**: exact, fuzzy, type_only, case_insensitive
- **Popularity ranking**: Registry rank for disambiguation
- **Installation plan**: estimated size, time, download status

### Commits
- **5 realistic commits** with full metadata
- Author: Alex Katz
- Dates: Last 2 weeks (relative + absolute)
- Realistic commit messages

## Swapping to Real Backend

When backend endpoints are implemented:

1. **No Code Changes Required** - Just update `.env`:
   ```bash
   VITE_USE_MOCK_API=false
   ```

2. **Per-Function Override** (if needed):
   ```typescript
   // Remove mock check to force real API
   async function getWorkflows() {
     // if (USE_MOCK) return mockApi.getWorkflows() // Remove this

     return fetchApi('/v2/comfygit/workflows')
   }
   ```

## Data Conformance

**UPDATED:** All mock data now comprehensively matches Core Library API Reference structures.

### Enhanced Data Structures

#### EnvironmentStatus
Matches Core Library API lines 1585-1610:
- ✅ `comparison: EnvironmentComparison` - missing_nodes, extra_nodes, disabled_nodes, version_mismatches
- ✅ `git: GitStatus` - workflow_changes, nodes_added/removed, dependencies_added/removed/updated
- ✅ `workflow: DetailedWorkflowStatus` - analyzed_workflows with full resolution data
- ✅ `missing_models: MissingModelInfo[]` - criticality (required/flexible/optional), can_download status

#### WorkflowAnalysisStatus
Matches Core Library API lines 1719-1761:
- ✅ `dependencies: WorkflowDependencies`
- ✅ `resolution: ResolutionResult` - full resolution with confidence scores
- ✅ `uninstalled_nodes`, `has_issues`, `issue_summary`
- ✅ Computed properties: `model_count`, `node_count`, `models_resolved_count`, etc.

#### ResolutionResult
Matches Core Library API lines 1763-1788:
- ✅ `nodes_resolved` - with match_type, match_confidence, rank (popularity)
- ✅ `nodes_unresolved` - with possible_matches and confidence scores
- ✅ `nodes_ambiguous` - multiple equally-matched candidates
- ✅ `models_resolved` - with match_type (exact, case_insensitive, filename)
- ✅ `models_unresolved` - with expected_category
- ✅ `models_ambiguous` - duplicate model names
- ✅ `download_results` - installation plan with status

#### ModelWithLocation
Matches Core Library API lines 1890-1912:
- ✅ `hash` - CRC32 hash (8 chars, not full SHA256)
- ✅ `sha256_hash` - Full SHA256 for deduplication
- ✅ `blake3_hash` - Optional BLAKE3 hash
- ✅ `file_size` - Size in bytes (not just MB)
- ✅ `relative_path` - Path within model directory
- ✅ `mtime` - Unix timestamp (last modified)
- ✅ `last_seen` - Unix timestamp (last scan)
- ✅ `base_directory` - Model root path
- ✅ `category` - Model category (checkpoints, loras, vae, etc.)
- ✅ `metadata` - Extensible dict with model-specific data

#### NodeInfo
Matches Core Library API lines 1833-1858:
- ✅ `name`, `registry_id`, `repository`, `version`
- ✅ `source` - "registry" | "git" | "development" | "unknown"
- ✅ `download_url` - Where to download from
- ✅ `dependency_sources` - Python dependency groups

### Core Library Type Mapping

| Frontend Type      | Core Library Model | API Reference Lines |
|--------------------|-------------------|---------------------|
| EnvironmentStatus  | EnvironmentStatus | 1585-1610          |
| WorkflowInfo       | WorkflowAnalysisStatus | 1719-1761     |
| WorkflowDetails    | WorkflowAnalysisStatus + ResolutionResult | 1719-1788 |
| ModelInfo          | ModelWithLocation | 1890-1912          |
| NodeInfo           | NodeInfo          | 1833-1858          |
| ResolutionResult   | ResolutionResult  | 1763-1788          |
| GitCommit          | CommitDetail      | -                  |
| LogEntry           | Core logging      | -                  |

## Extending Mock Data

To add more mock data:

```typescript
// mockApi.ts
const MOCK_ENVIRONMENTS: EnvironmentInfo[] = [
  // Add new environments here
  {
    name: 'my-new-env',
    is_current: false,
    workflow_count: 10,
    node_count: 25,
    branch: 'main',
    created_at: new Date().toISOString()
  }
]
```

## Benefits

✅ **No Backend Required** - Develop UI independently
✅ **Type Safety** - All data matches core library structures
✅ **Easy Toggle** - Single environment variable to switch
✅ **Realistic Data** - Based on actual usage patterns
✅ **Zero Maintenance** - No separate mock server to run

## Recent Improvements (2025-11-20)

### Enhanced Mock Data to Match Core Library API

Previously, mock data used simplified structures. Now, all data comprehensively matches the exact structures returned by the Core Library.

#### Key Changes:

1. **EnvironmentStatus Enrichment**
   - Added `comparison` object with missing_nodes, extra_nodes, version_mismatches
   - Added `git` object with detailed change tracking (nodes_added, dependencies_updated, etc.)
   - Added `workflow` object with analyzed_workflows and full resolution data
   - Added `missing_models` array with criticality levels

2. **Model Data Enhancement**
   - Added CRC32 hashes (Core Library primary identifier)
   - Added SHA256 hashes for deduplication
   - Added file_size in bytes (not just MB)
   - Added Unix timestamps (mtime, last_seen)
   - Added relative_path, category, base_directory
   - Added extensible metadata dicts

3. **Node Data Enhancement**
   - Added repository URLs
   - Added version information
   - Added source tracking (registry/git/development/unknown)
   - Added download URLs
   - Added dependency_sources

4. **Resolution Results**
   - Added confidence scores (0.0-1.0)
   - Added match types (exact, fuzzy, type_only, etc.)
   - Added popularity rankings
   - Added resolved/unresolved/ambiguous categorization
   - Added download intents and installation plans

5. **Workflow Analysis**
   - Added sync_state tracking
   - Added detailed issue summaries
   - Added resolution metadata
   - Added computed properties (models_resolved_count, etc.)

#### Benefits for Frontend Development:

✅ **Realistic Edge Cases** - Mock data now includes:
   - Models without source URLs (can't auto-download)
   - Unused models (deletion candidates)
   - Multiple hash types for testing deduplication
   - Confidence scores for fuzzy matching scenarios

✅ **Complete Type Coverage** - All TypeScript types now have full mock implementations

✅ **Backend Integration Ready** - When backend endpoints go live, frontend will work immediately with zero changes

✅ **Testing Completeness** - Can now test:
   - Two-level model hierarchy (environment vs workspace)
   - Resolution confidence UI
   - Match type indicators
   - Ambiguous candidate selection
   - Missing dependency scenarios

## Future Enhancements

- [ ] Add stateful mock API (mutations persist in memory)
- [ ] Add mock websockets for live updates
- [ ] Add configurable delays for testing loading states
- [ ] Add error injection for testing error handling
- [ ] Add mock switch environment progress tracking
- [ ] Add mock import/export with progress callbacks
