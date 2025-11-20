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
