export interface WorkflowSyncStatus {
  new: string[]
  modified: string[]
  deleted: string[]
  synced: string[]
  total: number
}

export interface GitChanges {
  nodes_added: string[]
  nodes_removed: string[]
  workflow_changes: boolean
  has_other_changes: boolean
}

export interface ComparisonStatus {
  is_synced: boolean
  missing_nodes: string[]
  extra_nodes: string[]
}

export interface ComfyGitStatus {
  environment: string
  branch: string | null
  is_detached_head: boolean
  is_synced: boolean
  has_changes: boolean
  workflows: WorkflowSyncStatus
  git_changes: GitChanges
  comparison: ComparisonStatus
  missing_models_count: number
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

export interface CreateEnvironmentResult {
  status: 'success' | 'error'
  message?: string
  name?: string
  path?: string
}

// Workflow Management Types
export interface WorkflowInfo {
  name: string
  status: 'broken' | 'new' | 'modified' | 'synced'
  missing_nodes: number // Count of missing nodes
  missing_models: number // Count of missing models
  path?: string
  node_count?: number // Total node count
  model_count?: number // Total model count
  sync_state?: 'new' | 'modified' | 'synced' | 'deleted' // Git sync state
}

export interface ModelUsageInfo {
  filename: string
  sha256: string
  type: string
  size: number
  used_in_workflows: string[]
  importance: 'required' | 'flexible' | 'optional'
  line_number?: number
  node_type?: string
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
  sha256: string
  type: string
  size: number
  source_url?: string
  used_in_environments?: Array<{ env_name: string; workflow_count: number }>
  used_in_workflows?: string[]
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
}

// Node Management Types
export interface NodeInfo {
  name: string
  installed: boolean
  registry_id?: string
  repository?: string
  version?: string | null
  source: 'registry' | 'git' | 'development' | 'unknown'
  download_url?: string | null
  description?: string
  used_in_workflows?: string[]
}

export interface NodesResult {
  nodes: NodeInfo[]
  total_count: number
  installed_count: number
  missing_count: number
}

// Debug/Logs Types
export interface LogEntry {
  timestamp: string
  level: 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG'
  message: string
  context?: string
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
