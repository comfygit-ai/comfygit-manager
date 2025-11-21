import { ref } from 'vue'
import type {
  ComfyGitStatus,
  CommitResult,
  LogResult,
  ExportResult,
  BranchesResult,
  CommitDetail,
  CheckoutResult,
  CreateBranchResult,
  SwitchBranchResult
} from '@/types/comfygit'

// Access ComfyUI's API
declare global {
  interface Window {
    app?: {
      api: {
        fetchApi: (endpoint: string, options?: RequestInit) => Promise<Response>
      }
    }
  }
}

export function useComfyGitService() {
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
    if (!window.app?.api) {
      throw new Error('ComfyUI API not available')
    }

    const response = await window.app.api.fetchApi(endpoint, options)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || errorData.message || `Request failed: ${response.status}`)
    }

    return response.json()
  }

  async function getStatus(): Promise<ComfyGitStatus> {
    return fetchApi<ComfyGitStatus>('/v2/comfygit/status')
  }

  async function commit(message: string, allowIssues = false): Promise<CommitResult> {
    return fetchApi<CommitResult>('/v2/comfygit/commit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, allow_issues: allowIssues })
    })
  }

  async function getHistory(limit = 10, offset = 0): Promise<LogResult> {
    return fetchApi<LogResult>(`/v2/comfygit/log?limit=${limit}&offset=${offset}`)
  }

  async function exportEnv(outputPath?: string): Promise<ExportResult> {
    return fetchApi<ExportResult>('/v2/comfygit/export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ output_path: outputPath })
    })
  }

  // Phase 2 APIs

  async function getBranches(): Promise<BranchesResult> {
    return fetchApi<BranchesResult>('/v2/comfygit/branches')
  }

  async function getCommitDetail(hash: string): Promise<CommitDetail> {
    return fetchApi<CommitDetail>(`/v2/comfygit/commit/${hash}`)
  }

  async function checkout(ref: string, force = false): Promise<CheckoutResult> {
    return fetchApi<CheckoutResult>('/v2/comfygit/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ref, force })
    })
  }

  async function createBranch(name: string, startPoint = 'HEAD'): Promise<CreateBranchResult> {
    return fetchApi<CreateBranchResult>('/v2/comfygit/branch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, start_point: startPoint })
    })
  }

  async function switchBranch(branch: string, force = false): Promise<SwitchBranchResult> {
    return fetchApi<SwitchBranchResult>('/v2/comfygit/switch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ branch, force })
    })
  }

  // Phase 3 - Environment switching

  async function listEnvironments(): Promise<any> {
    return fetchApi('/v2/comfygit/environments')
  }

  async function switchEnvironment(targetEnv: string): Promise<any> {
    return fetchApi('/v2/comfygit/switch_environment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target_env: targetEnv })
    })
  }

  async function getSwitchStatus(): Promise<any> {
    return fetchApi('/v2/comfygit/switch_status')
  }

  return {
    isLoading,
    error,
    getStatus,
    commit,
    getHistory,
    exportEnv,
    // Phase 2
    getBranches,
    getCommitDetail,
    checkout,
    createBranch,
    switchBranch,
    // Phase 3
    listEnvironments,
    switchEnvironment,
    getSwitchStatus
  }
}
