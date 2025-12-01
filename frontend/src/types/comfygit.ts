export interface WorkflowSyncStatus {
  new: string[]
  modified: string[]
  deleted: string[]
  synced: string[]
  total: number
}

export interface AnalyzedWorkflow {
  name: string
  sync_state: 'new' | 'modified' | 'synced' | 'deleted'
  status: 'broken' | 'new' | 'modified' | 'synced' | 'deleted'
  has_issues: boolean
  has_path_sync_issues: boolean
  uninstalled_nodes: number
  unresolved_nodes_count: number
  unresolved_models_count: number
  ambiguous_models_count: number
  ambiguous_nodes_count: number
  models_needing_path_sync_count: number
  pending_downloads_count: number
  issue_summary: string
  node_count: number
  model_count: number
  // Category mismatch (blocking issue)
  has_category_mismatch_issues: boolean
  models_with_category_mismatch_count: number
}

export interface GitChanges {
  nodes_added: string[]
  nodes_removed: string[]
  workflow_changes: boolean
  workflow_changes_detail: Record<string, string>
  has_other_changes: boolean
}

export interface VersionMismatch {
  name: string
  expected: string
  actual: string
}

export interface ComparisonStatus {
  is_synced: boolean
  missing_nodes: string[]
  extra_nodes: string[]
  disabled_nodes: string[]
  version_mismatches: VersionMismatch[]
  packages_in_sync: boolean
}

export interface ComfyGitStatus {
  environment: string
  branch: string | null
  is_detached_head: boolean
  is_synced: boolean
  has_changes: boolean
  workflows: WorkflowSyncStatus & { analyzed: AnalyzedWorkflow[] }
  git_changes: GitChanges
  comparison: ComparisonStatus
  missing_models_count: number
  has_legacy_manager: boolean
}

export interface CommitInfo {
  hash: string
  short_hash?: string
  message: string
  date: string
  date_relative?: string
  relative_date?: string
  refs?: string[]
}

export interface CommitResult {
  status: 'success' | 'no_changes' | 'blocked' | 'error'
  message?: string
  summary?: {
    new: number
    modified: number
    deleted: number
  }
  issues?: Array<{
    name: string
    issue: string
  }>
}

export interface ExportResult {
  status: 'success' | 'error'
  path?: string
  models_without_sources?: number
  message?: string
}

// Export Validation Types
export interface ModelWithoutSource {
  filename: string
  hash: string
  workflows: string[]
}

export interface ExportBlockingIssue {
  type: 'uncommitted_workflows' | 'uncommitted_git_changes' | 'unresolved_issues'
  message: string
  details: string[]
}

export interface ExportValidationResult {
  can_export: boolean
  blocking_issues: ExportBlockingIssue[]
  warnings: {
    models_without_sources: ModelWithoutSource[]
  }
}

export interface LogResult {
  commits: CommitInfo[]
  has_more: boolean
  current_branch: string | null
}

// Phase 2 types

export interface BranchInfo {
  name: string
  is_current: boolean
}

export interface BranchesResult {
  branches: BranchInfo[]
  current: string | null
}

export interface CommitDetail {
  hash: string
  short_hash: string
  message: string
  date: string
  date_relative: string
  refs: string[]
  stats: {
    files_changed: number
    insertions: number
    deletions: number
  }
  changes: {
    workflows: {
      added: string[]
      modified: string[]
      deleted: string[]
    }
    nodes: {
      added: Array<{ name: string; version?: string }>
      removed: Array<{ name: string }>
    }
    models: {
      resolved: number
    }
  }
}

export interface CheckoutResult {
  status: 'success' | 'warning' | 'error'
  message?: string
  reason?: 'uncommitted_changes'
  is_detached?: boolean
}

export interface CreateBranchResult {
  status: 'success' | 'error'
  message?: string
  branch?: string
}

export interface SwitchBranchResult {
  status: 'success' | 'warning' | 'error'
  message?: string
  reason?: 'uncommitted_changes' | 'restart_required'
}

// Environment Management Types
export interface EnvironmentInfo {
  name: string
  is_current: boolean
  path: string
  created_at: string
  last_used?: string
  workflow_count: number
  node_count: number
  model_count: number
  current_branch: string | null
  last_commit?: string
  last_commit_date?: string
}

export interface SwitchEnvironmentProgress {
  state: 'idle' | 'preparing' | 'syncing' | 'starting' | 'validating' | 'complete' | 'rolled_back' | 'critical_failure'
  target_env: string
  source_env?: string
  old_pid?: number
  new_pid?: number
  progress: number
  message: string
  started_at?: string
  updated_at?: string
  error?: string
  recovery_command?: string
}

export interface CreateEnvironmentRequest {
  name: string
  python_version?: string
  comfyui_version?: string
  torch_backend?: string
  switch_after?: boolean
  workspace_path?: string  // Optional, used during first-time setup
}

export interface CreateEnvironmentResult {
  status: 'started' | 'success' | 'error'
  task_id?: string
  message?: string
  name?: string
  path?: string
}

export interface CreateEnvironmentProgress {
  state: 'idle' | 'creating' | 'complete' | 'error'
  task_id?: string
  environment_name?: string
  phase?: string
  progress?: number
  message: string
  error?: string
}

export interface ComfyUIRelease {
  tag_name: string
  name: string
  published_at: string
}

export interface SyncEnvironmentResult {
  status: 'success' | 'error'
  nodes_installed: string[]
  nodes_removed: string[]
  errors: string[]
  message: string
}

// Workflow Management Types
export interface WorkflowInfo {
  name: string
  status: 'broken' | 'new' | 'modified' | 'synced'
  missing_nodes: number // Count of missing nodes
  missing_models: number // Count of missing models
  pending_downloads?: number // Count of models with download intents
  path?: string
  node_count?: number // Total node count
  model_count?: number // Total model count
  sync_state?: 'new' | 'modified' | 'synced' | 'deleted' // Git sync state
  has_path_sync_issues?: boolean // Has model paths that need syncing
  models_needing_path_sync?: number // Count of models needing path sync
  // Category mismatch (blocking issue)
  has_category_mismatch_issues?: boolean
  models_with_category_mismatch?: number
}

export interface ModelUsageInfo {
  filename: string
  hash: string
  type: string
  size: number
  status: 'available' | 'missing' | 'downloadable' | 'path_mismatch' | 'category_mismatch'
  used_in_workflows: string[]
  importance: 'required' | 'flexible' | 'optional'
  loaded_by: Array<{ node_type: string; node_id: string }>
  line_number?: number
  file_path?: string | null
  // Deprecated - use loaded_by instead
  node_type?: string
  node_id?: string
  // Category mismatch details
  has_category_mismatch?: boolean
  expected_categories?: string[]
  actual_category?: string | null
}

export interface WorkflowDetails {
  name: string
  path: string
  status: 'broken' | 'new' | 'modified' | 'synced'
  models: ModelUsageInfo[]
  nodes: Array<{ name: string; version?: string; status: 'installed' | 'missing' }>
}

export interface WorkflowResolutionPlan {
  workflow: string
  nodes: {
    auto_installable: Array<{ name: string; version?: string; source: string; description?: string }>
    manual: Array<{ name: string; reason: string }>
  }
  models: {
    auto_downloadable: Array<{ filename: string; url: string; size: number; type: string }>
    manual: Array<{ filename: string; reason: string; suggested_url?: string }>
  }
  estimated_time: number
  estimated_size: number
}

// Model Management Types
export interface ModelInfo {
  filename: string
  hash: string
  sha256?: string
  type: string
  size: number
  relative_path?: string
  status: 'available' | 'missing' | 'downloadable' | 'path_mismatch'
  source_url?: string
  used_in_environments?: Array<{ env_name: string; workflow_count: number }>
  used_in_workflows?: string[]
}

export interface ModelDetails {
  filename: string
  hash: string
  blake3: string | null
  sha256: string | null
  size: number
  category: string
  relative_path: string
  last_seen: string | null
  locations: Array<{ path: string; modified?: string }>
  sources: Array<{ type: string; url: string }>
}

export interface DownloadModelRequest {
  source: 'civitai' | 'huggingface' | 'custom'
  url: string
  model_type: string
  api_key?: string
}

// Settings Types
export interface ConfigSettings {
  workspace_path: string
  models_path: string
  civitai_api_key?: string
  huggingface_token?: string
  auto_sync_models: boolean
  confirm_destructive: boolean
  comfyui_extra_args: string[]
}

// Node Management Types
export interface NodeInfo {
  name: string
  installed: boolean
  tracked: boolean  // True if in pyproject.toml manifest
  registry_id?: string | null
  repository?: string | null
  version?: string | null
  source: 'registry' | 'git' | 'development' | 'unknown' | 'untracked'
  download_url?: string | null
  description?: string
  used_in_workflows?: string[]
}

export interface NodesResult {
  nodes: NodeInfo[]
  total_count: number
  installed_count: number
  missing_count: number
  untracked_count: number
}

export interface TrackDevResult {
  status: 'success' | 'error'
  message?: string
  node?: {
    name: string
    source: string
    version: string | null
    registry_id: string | null
  }
}

// Debug/Logs Types
export interface LogEntry {
  timestamp: string  // Raw Python format: "2025-11-23 13:07:42,157"
  name: string       // Full logger name: "comfygit_core.managers.workflow_manager"
  level: 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG'
  func: string       // Function name: "resolve_workflow"
  line: string       // Line number: "871"
  message: string    // Log message
}

// Git Remotes Types
export interface RemoteInfo {
  name: string
  fetch_url: string
  push_url: string
  is_default?: boolean
}

export interface RemotesResult {
  remotes: RemoteInfo[]
  current_branch_tracking?: {
    remote: string
    branch: string
  }
}

export interface RemoteOperationResult {
  status: 'success' | 'error'
  message?: string
  remote_name?: string
}

export interface RemoteSyncStatus {
  remote: string
  branch: string
  ahead: number
  behind: number
  last_fetch?: string
}

// Push/Pull Types
export interface PullPreview {
  remote: string
  branch: string
  commits_behind: number
  commits: CommitInfo[]
  changes: {
    workflows: {
      added: string[]
      modified: string[]
      deleted: string[]
    }
    nodes: {
      to_install: string[]
      to_remove: string[]
    }
    models: {
      referenced: string[]
      count: number
    }
  }
  has_uncommitted_changes: boolean
  can_pull: boolean
  block_reason: string | null
}

export interface PullResult {
  status: 'success' | 'error'
  pull_output: string
  sync_result: {
    nodes_installed: string[]
    nodes_removed: string[]
    models_queued: number
    errors: string[]
  }
  message?: string
}

export interface PushPreview {
  remote: string
  branch: string
  commits_ahead: number
  commits: CommitInfo[]
  has_uncommitted_changes: boolean
  remote_has_new_commits: boolean
  can_push: boolean
  needs_force: boolean
  block_reason: string | null
}

export interface PushResult {
  status: 'success' | 'error'
  push_output: string
  commits_pushed: number
  message?: string
}

// Interactive Workflow Resolution Types
export interface ResolvedNode {
  node_type: string
  package_id: string
  match_type: 'exact' | 'fuzzy' | 'semantic' | 'manual'
  match_confidence: number  // 0.0-1.0
  description?: string
  repository?: string
  source: 'registry' | 'github' | 'manual'
  is_installed: boolean
  is_optional: boolean
}

export interface NodeReference {
  node_type: string
  workflow: string
  node_id?: string
}

export interface ResolvedNode {
  reference: NodeReference
  package: {
    package_id: string
    title: string
  }
  match_confidence: number
  match_type: string
  is_installed: boolean
}

export interface UnresolvedNode {
  reference: NodeReference
  reason: string
}

export interface AmbiguousNode {
  reference: NodeReference
  options: Array<{
    package: {
      package_id: string
      title: string
    }
    match_confidence: number
    match_type: string
    is_installed: boolean
  }>
}

export interface ModelReference {
  workflow: string
  node_id: string
  node_type: string
  widget_name: string
  widget_value: string
}

export interface ResolvedModelData {
  filename: string
  hash: string
  size: number
  category: string
  relative_path: string
}

export interface ResolvedModel {
  reference: ModelReference
  model: ResolvedModelData | null
  match_type: string
  match_confidence: number
  needs_path_sync: boolean
  has_download_source: boolean
  is_optional: boolean
  // Category mismatch (blocking issue)
  has_category_mismatch: boolean
  expected_categories: string[]
  actual_category: string | null
  file_path: string | null
}

export interface UnresolvedModel {
  reference: ModelReference
  reason: string
}

export interface AmbiguousModel {
  reference: ModelReference
  options: Array<{
    model: ResolvedModelData
    match_confidence: number
    match_type: string
    has_download_source: boolean
  }>
}

export interface FullResolutionResult {
  workflow: string
  nodes: {
    resolved: ResolvedNode[]
    unresolved: UnresolvedNode[]
    ambiguous: AmbiguousNode[]
  }
  models: {
    resolved: ResolvedModel[]
    unresolved: UnresolvedModel[]
    ambiguous: AmbiguousModel[]
  }
  stats: {
    total_nodes: number
    total_models: number
    download_intents: number
    nodes_needing_installation: number  // Node types count
    packages_needing_installation: number  // Unique packages count
    needs_user_input: boolean
    is_fully_resolved: boolean
    models_with_category_mismatch: number
  }
}

export interface NodeChoice {
  action: 'install' | 'optional' | 'skip' | 'manual'
  package_id?: string
  manual_url?: string
}

export interface ModelChoice {
  action: 'download' | 'select' | 'optional' | 'skip' | 'cancel_download'
  url?: string
  target_path?: string
  selected_model?: ResolvedModelData
}

export interface AppliedResolutionResult {
  status: 'success' | 'error'
  nodes_to_install: string[]
  models_to_download: Array<{
    filename: string
    url: string
    size: number
    target_path: string
  }>
  estimated_time_seconds: number
  error?: string
}

export interface NodeSearchResult {
  package_id: string
  match_confidence: number
  match_type: string
  description?: string
  repository?: string
  is_installed?: boolean
}

export interface ModelSearchResult {
  filename: string
  hash: string
  size: number
  category: string
  has_download_source: boolean
  relative_path?: string
}

// Node installation progress tracking
export interface NodeInstallProgress {
  currentNode?: string
  currentIndex?: number
  totalNodes?: number
  completedNodes: Array<{ node_id: string; success: boolean; error?: string }>
}

// SSE Resolution Progress Types
export interface ResolutionProgressState {
  phase: 'idle' | 'resolving' | 'installing' | 'downloading' | 'complete' | 'error'
  currentFile?: string
  currentFileIndex?: number
  totalFiles?: number
  bytesDownloaded?: number
  bytesTotal?: number
  completedFiles: Array<{ filename: string; success: boolean; error?: string; reused?: boolean }>
  nodesToInstall: string[]
  nodesInstalled: string[]
  installError?: string
  needsRestart?: boolean
  error?: string
  nodeInstallProgress?: NodeInstallProgress
}

export interface DownloadResult {
  filename: string
  success: boolean
  error?: string
  reused?: boolean
}

// Model Download Queue Types
export interface DownloadQueueItem {
  id: string
  workflow: string
  filename: string
  url: string
  targetPath: string
  size: number
  type: string
  status: 'queued' | 'downloading' | 'paused' | 'completed' | 'failed'
  progress: number
  downloaded: number
  speed: number
  eta: number
  error?: string
  retries: number
}

export interface DownloadQueue {
  items: DownloadQueueItem[]
  status: 'idle' | 'downloading' | 'paused'
}

// =============================================================================
// Workflow Resolution Types (V2 - Simplified, workflows only)
// =============================================================================

/** Workflow file conflict requiring user resolution */
export interface WorkflowConflict {
  name: string  // Workflow filename without .json extension
  conflict_type: 'both_modified' | 'delete_modify'
  base_hash: string | null  // Hash of local version
  target_hash: string | null  // Hash of incoming version
}

/** User's resolution choice for a workflow conflict */
export interface WorkflowResolution {
  name: string
  resolution: 'take_base' | 'take_target'
}

// =============================================================================
// Validation Types (Post-resolution, read-only display)
// =============================================================================

/** Node version conflict detected after workflow resolution */
export interface NodeVersionConflict {
  node_id: string
  node_name: string
  base_version: string  // Version in our branch
  target_version: string  // Version in their branch
  chosen_version: string  // Version that will be used
  chosen_reason: string  // Explanation: "Required by workflow-b (theirs)"
  affected_workflows: AffectedWorkflow[]
}

export interface AffectedWorkflow {
  name: string
  source: 'base' | 'target'  // Which branch this workflow came from
  required_version: string
}

/** Result of merge validation after workflow resolutions */
export interface MergeValidation {
  is_compatible: boolean
  node_conflicts: NodeVersionConflict[]
  warnings: string[]  // Non-blocking warnings
}

// =============================================================================
// Pull/Merge Preview Types (V2)
// =============================================================================

/** Extended PullPreview with workflow conflicts only */
export interface PullPreviewWithConflicts extends PullPreview {
  has_conflicts: boolean
  workflow_conflicts: WorkflowConflict[]  // ONLY workflows, not nodes/deps
}

/** Type guard for preview with workflow conflicts */
export function hasWorkflowConflicts(preview: PullPreview): preview is PullPreviewWithConflicts {
  return 'has_conflicts' in preview &&
         (preview as PullPreviewWithConflicts).has_conflicts === true &&
         Array.isArray((preview as PullPreviewWithConflicts).workflow_conflicts)
}

// =============================================================================
// Import Types (matches core library dataclasses)
// =============================================================================

/** Model analysis from import preview */
export interface ModelAnalysis {
  filename: string
  hash: string | null
  sources: string[]
  relative_path: string
  locally_available: boolean
  needs_download: boolean
  workflows: string[]
}

/** Node analysis from import preview */
export interface NodeAnalysis {
  name: string
  source: string  // "registry" | "development" | "git"
  install_spec: string | null
  is_dev_node: boolean
}

/** Workflow analysis from import preview */
export interface WorkflowAnalysis {
  name: string
  models_required: number
  models_optional: number
}

/** Import analysis result from preview endpoint (matches core library ImportAnalysis dataclass) */
export interface ImportAnalysis {
  // ComfyUI version
  comfyui_version: string | null
  comfyui_version_type: string | null

  // Models breakdown
  models: ModelAnalysis[]
  total_models: number
  models_locally_available: number
  models_needing_download: number
  models_without_sources: number

  // Nodes breakdown
  nodes: NodeAnalysis[]
  total_nodes: number
  registry_nodes: number
  dev_nodes: number
  git_nodes: number

  // Workflows
  workflows: WorkflowAnalysis[]
  total_workflows: number

  // Summary flags
  needs_model_downloads: boolean
  needs_node_installs: boolean
}

/** Environment name validation result */
export interface ValidateNameResult {
  valid: boolean
  name?: string
  error?: string
}

/** Import start result */
export interface ImportResult {
  status: 'started' | 'error'
  message: string
}

/** Import progress (polling response) */
export interface ImportProgress {
  state: 'idle' | 'importing' | 'complete' | 'error'
  phase?: string | null
  progress?: number
  message: string
  environment_name?: string | null
  error?: string | null
}

// =============================================================================
// Deploy Types
// =============================================================================

export interface NetworkVolume {
  id: string
  name: string
  size_gb: number
  data_center_id: string        // e.g., "US-IL-1", "EU-CZ-1"
  data_center_name: string      // e.g., "United States", "Europe"
  used_gb?: number              // Optional: current usage
  created_at?: string
}

export interface RunPodGpuType {
  id: string
  displayName: string
  memoryInGb: number
  securePrice: number      // $/hr for secure cloud
  communityPrice: number   // $/hr for community cloud
  available: boolean
  data_center_id?: string  // Which data center this GPU is in
}

export interface DeployConfig {
  gpu_type_id: string
  pod_name: string
  network_volume_id: string  // Network volume ID instead of ephemeral storage
  cloud_type: 'SECURE' | 'COMMUNITY'
}

export interface EnvironmentDeploySummary {
  comfyui_version: string
  node_count: number
  model_count: number
  models_with_sources: number
  models_without_sources: number
  workflow_count: number
  estimated_package_size_mb: number
}

export interface DeployResult {
  status: 'success' | 'error'
  pod_id?: string
  message: string
}

export interface RunPodInstance {
  id: string
  name: string
  gpu_type: string
  gpu_count: number
  status: 'CREATED' | 'RUNNING' | 'EXITED' | 'TERMINATED'
  created_at: string
  cost_per_hour: number
  uptime_seconds: number
  total_cost: number
  // Connection info (when running)
  pod_url?: string
  comfyui_url?: string      // Proxied port 8188
}

export interface DeployPackageResult {
  status: 'success' | 'error'
  package_path?: string
  package_size_mb?: number
  message?: string
}

export interface RunPodConnectionResult {
  status: 'success' | 'error'
  message: string
  credit_balance?: number
}

// First-Time Setup Types
export type SetupState = 'no_workspace' | 'empty_workspace' | 'unmanaged' | 'managed'

export interface SetupStatus {
  state: SetupState
  workspace_path: string | null
  default_path: string
  environments: string[]
  current_environment: string | null
  detected_models_dir: string | null
  cli_installed: boolean
  cli_path: string | null
}

export interface InitializeWorkspaceRequest {
  workspace_path?: string
  models_directory?: string | null
}

export interface InitializeProgress {
  state: 'idle' | 'creating_workspace' | 'setting_models_dir' | 'scanning_models' | 'complete' | 'error'
  progress: number
  message: string
  task_id?: string
  models_found?: number
  error?: string
}

export interface ValidatePathRequest {
  path: string
  type: 'workspace' | 'models'
}

export interface ValidatePathResult {
  valid: boolean
  error?: string
  suggestion?: string
  model_count?: number
}
