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
  SwitchBranchResult,
  EnvironmentInfo,
  SwitchEnvironmentProgress,
  CreateEnvironmentResult,
  SyncEnvironmentResult,
  WorkflowInfo,
  WorkflowDetails,
  WorkflowResolutionPlan,
  ModelInfo,
  DownloadModelRequest,
  ConfigSettings,
  LogEntry,
  NodeInfo,
  NodesResult,
  RemotesResult,
  RemoteOperationResult,
  RemoteSyncStatus
} from '@/types/comfygit'
import { mockApi, isMockApi } from '@/services/mockApi'

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

// Toggle between mock and real API (set VITE_USE_MOCK_API=false in .env to disable)
const USE_MOCK = isMockApi()

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

  async function getStatus(forceRefresh = false): Promise<ComfyGitStatus> {
    if (USE_MOCK) return mockApi.getStatus()

    const url = forceRefresh ? '/v2/comfygit/status?refresh=true' : '/v2/comfygit/status'
    return fetchApi<ComfyGitStatus>(url)
  }

  async function commit(message: string, allowIssues = false): Promise<CommitResult> {
    return fetchApi<CommitResult>('/v2/comfygit/commit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, allow_issues: allowIssues })
    })
  }

  async function getHistory(limit = 10, offset = 0): Promise<LogResult> {
    if (USE_MOCK) {
      const commits = await mockApi.getCommitHistory(limit)
      return {
        commits,
        total: commits.length,
        offset
      }
    }

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
    if (USE_MOCK) return mockApi.getBranches()

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

  // Environment Management
  async function getEnvironments(): Promise<EnvironmentInfo[]> {
    if (USE_MOCK) return mockApi.getEnvironments()

    try {
      const response = await fetchApi<{ environments: EnvironmentInfo[], current: string | null, is_managed: boolean }>('/v2/comfygit/environments')
      return response.environments
    } catch {
      // Fallback: try to build single environment from status
      try {
        const status = await getStatus()
        return [{
          name: status.environment,
          is_current: true,
          path: '~/comfygit/environments/' + status.environment,
          created_at: new Date().toISOString(),
          workflow_count: status.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: status.branch
        }]
      } catch {
        return []
      }
    }
  }

  async function switchEnvironment(targetEnv: string): Promise<void> {
    if (USE_MOCK) return mockApi.switchEnvironment(targetEnv)

    return fetchApi('/v2/comfygit/switch_environment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target_env: targetEnv })
    })
  }

  async function getSwitchProgress(): Promise<SwitchEnvironmentProgress | null> {
    if (USE_MOCK) return null // Mock doesn't simulate long-running operations

    try {
      return fetchApi<SwitchEnvironmentProgress>('/v2/comfygit/switch_status')
    } catch {
      return null
    }
  }

  async function createEnvironment(name: string, pytorchBackend: string, cloneFrom?: string): Promise<CreateEnvironmentResult> {
    if (USE_MOCK) {
      await mockApi.createEnvironment(name, pytorchBackend, cloneFrom)
      return { status: 'success' }
    }

    return fetchApi<CreateEnvironmentResult>('/v2/workspace/environments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, pytorch_backend: pytorchBackend, clone_from: cloneFrom })
    })
  }

  async function deleteEnvironment(name: string): Promise<{ status: 'success' | 'error', message?: string }> {
    if (USE_MOCK) {
      await mockApi.deleteEnvironment(name)
      return { status: 'success' }
    }

    return fetchApi(`/v2/workspace/environments/${name}`, {
      method: 'DELETE'
    })
  }

  // Workflow Management
  async function getWorkflows(forceRefresh = false): Promise<WorkflowInfo[]> {
    if (USE_MOCK) return mockApi.getWorkflows()

    try {
      const url = forceRefresh ? '/v2/comfygit/workflows?refresh=true' : '/v2/comfygit/workflows'
      return fetchApi<WorkflowInfo[]>(url)
    } catch {
      const status = await getStatus(forceRefresh)
      const workflows: WorkflowInfo[] = []

      status.workflows.new.forEach(name => {
        workflows.push({ name, status: 'new', missing_nodes: 0, missing_models: 0, path: name })
      })
      status.workflows.modified.forEach(name => {
        workflows.push({ name, status: 'modified', missing_nodes: 0, missing_models: 0, path: name })
      })
      status.workflows.synced.forEach(name => {
        workflows.push({ name, status: 'synced', missing_nodes: 0, missing_models: 0, path: name })
      })

      return workflows
    }
  }

  async function getWorkflowDetails(name: string): Promise<WorkflowDetails> {
    if (USE_MOCK) return mockApi.getWorkflowDetails(name)

    return fetchApi<WorkflowDetails>(`/v2/comfygit/workflow/${encodeURIComponent(name)}/details`)
  }

  async function resolveWorkflow(name: string): Promise<WorkflowResolutionPlan> {
    if (USE_MOCK) return mockApi.resolveWorkflow(name)

    return fetchApi<WorkflowResolutionPlan>(`/v2/comfygit/workflow/${encodeURIComponent(name)}/resolve`, {
      method: 'POST'
    })
  }

  async function installWorkflowDeps(name: string, installNodes: boolean, installModels: boolean): Promise<{ status: 'success' | 'error', message?: string }> {
    if (USE_MOCK) {
      await mockApi.installWorkflowDeps(name, installNodes, installModels)
      return { status: 'success' }
    }

    return fetchApi(`/v2/comfygit/workflow/${encodeURIComponent(name)}/install`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ install_nodes: installNodes, install_models: installModels })
    })
  }

  async function setModelImportance(workflow: string, model: string, importance: 'required' | 'flexible' | 'optional'): Promise<void> {
    if (USE_MOCK) return mockApi.setModelImportance(workflow, model, importance)

    return fetchApi(`/v2/comfygit/workflow/${encodeURIComponent(workflow)}/model-importance`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, importance })
    })
  }

  // Model Management
  async function getEnvironmentModels(): Promise<ModelInfo[]> {
    if (USE_MOCK) return mockApi.getEnvironmentModels()

    try {
      return fetchApi<ModelInfo[]>('/v2/comfygit/models/environment')
    } catch {
      return []
    }
  }

  async function getWorkspaceModels(): Promise<ModelInfo[]> {
    if (USE_MOCK) return mockApi.getWorkspaceModels()

    try {
      return fetchApi<ModelInfo[]>('/v2/workspace/models')
    } catch {
      return []
    }
  }

  async function updateModelSource(sha256: string, sourceUrl: string): Promise<void> {
    if (USE_MOCK) return mockApi.updateModelSource(sha256, sourceUrl)

    return fetchApi(`/v2/workspace/models/${sha256}/source`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source_url: sourceUrl })
    })
  }

  async function deleteModel(sha256: string): Promise<void> {
    if (USE_MOCK) return mockApi.deleteModel(sha256)

    return fetchApi(`/v2/workspace/models/${sha256}`, {
      method: 'DELETE'
    })
  }

  async function downloadModel(request: DownloadModelRequest): Promise<{ status: 'success' | 'error', message?: string }> {
    if (USE_MOCK) {
      await mockApi.downloadModel(request)
      return { status: 'success' }
    }

    return fetchApi('/v2/workspace/models/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    })
  }

  // Settings
  async function getConfig(): Promise<ConfigSettings> {
    if (USE_MOCK) return mockApi.getConfig()

    try {
      return fetchApi<ConfigSettings>('/v2/comfygit/config')
    } catch {
      return {
        workspace_path: '~/comfygit',
        models_path: '~/comfygit/models',
        auto_sync_models: true,
        confirm_destructive: true
      }
    }
  }

  async function updateConfig(config: Partial<ConfigSettings>): Promise<void> {
    if (USE_MOCK) return mockApi.updateConfig(config as ConfigSettings)

    return fetchApi('/v2/comfygit/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    })
  }

  // Debug/Logs
  async function getEnvironmentLogs(level?: string, lines?: number): Promise<LogEntry[]> {
    if (USE_MOCK) return mockApi.getEnvironmentLogs(level, lines)

    try {
      const params = new URLSearchParams()
      if (level) params.append('level', level)
      if (lines) params.append('lines', lines.toString())
      return fetchApi<LogEntry[]>(`/v2/comfygit/debug/logs?${params}`)
    } catch {
      return []
    }
  }

  async function getWorkspaceLogs(level?: string, lines?: number): Promise<LogEntry[]> {
    if (USE_MOCK) return mockApi.getWorkspaceLogs(level, lines)

    try {
      const params = new URLSearchParams()
      if (level) params.append('level', level)
      if (lines) params.append('lines', lines.toString())
      return fetchApi<LogEntry[]>(`/v2/workspace/debug/logs?${params}`)
    } catch {
      return []
    }
  }

  // Node Management
  async function getNodes(): Promise<NodesResult> {
    if (USE_MOCK) return mockApi.getNodes()

    try {
      return fetchApi<NodesResult>('/v2/comfygit/nodes')
    } catch {
      return {
        nodes: [],
        total_count: 0,
        installed_count: 0,
        missing_count: 0,
        untracked_count: 0
      }
    }
  }

  async function trackNodeAsDev(nodeName: string): Promise<{ status: 'success' | 'error', message?: string }> {
    if (USE_MOCK) {
      // Mock implementation
      return { status: 'success', message: `Node '${nodeName}' tracked as development` }
    }

    return fetchApi(`/v2/comfygit/nodes/${encodeURIComponent(nodeName)}/track-dev`, {
      method: 'POST'
    })
  }

  async function installNode(nodeName: string): Promise<{ status: 'success' | 'error', message?: string }> {
    if (USE_MOCK) {
      await mockApi.installNode(nodeName)
      return { status: 'success' }
    }

    return fetchApi(`/v2/comfygit/nodes/${encodeURIComponent(nodeName)}/install`, {
      method: 'POST'
    })
  }

  async function updateNode(nodeName: string): Promise<{ status: 'success' | 'error', message?: string }> {
    if (USE_MOCK) {
      await mockApi.updateNode(nodeName)
      return { status: 'success' }
    }

    return fetchApi(`/v2/comfygit/nodes/${encodeURIComponent(nodeName)}/update`, {
      method: 'POST'
    })
  }

  async function uninstallNode(nodeName: string): Promise<{ status: 'success' | 'error', message?: string }> {
    if (USE_MOCK) {
      await mockApi.uninstallNode(nodeName)
      return { status: 'success' }
    }

    return fetchApi(`/v2/comfygit/nodes/${encodeURIComponent(nodeName)}`, {
      method: 'DELETE'
    })
  }

  // Git Remotes Management
  async function getRemotes(): Promise<RemotesResult> {
    if (USE_MOCK) return mockApi.getRemotes()

    try {
      return fetchApi<RemotesResult>('/v2/comfygit/remotes')
    } catch {
      // Return empty list if API not available
      return { remotes: [] }
    }
  }

  async function addRemote(name: string, url: string): Promise<RemoteOperationResult> {
    if (USE_MOCK) {
      await mockApi.addRemote(name, url)
      return { status: 'success', remote_name: name }
    }

    return fetchApi<RemoteOperationResult>('/v2/comfygit/remotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, url })
    })
  }

  async function removeRemote(name: string): Promise<RemoteOperationResult> {
    if (USE_MOCK) {
      await mockApi.removeRemote(name)
      return { status: 'success', remote_name: name }
    }

    return fetchApi<RemoteOperationResult>(`/v2/comfygit/remotes/${encodeURIComponent(name)}`, {
      method: 'DELETE'
    })
  }

  async function updateRemoteUrl(name: string, url: string, pushUrl?: string): Promise<RemoteOperationResult> {
    if (USE_MOCK) {
      await mockApi.updateRemoteUrl(name, url, pushUrl)
      return { status: 'success', remote_name: name }
    }

    return fetchApi<RemoteOperationResult>(`/v2/comfygit/remotes/${encodeURIComponent(name)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, push_url: pushUrl })
    })
  }

  async function fetchRemote(name: string): Promise<RemoteOperationResult> {
    if (USE_MOCK) {
      await mockApi.fetchRemote(name)
      return { status: 'success', remote_name: name }
    }

    return fetchApi<RemoteOperationResult>(`/v2/comfygit/remotes/${encodeURIComponent(name)}/fetch`, {
      method: 'POST'
    })
  }

  async function getRemoteSyncStatus(remote: string): Promise<RemoteSyncStatus | null> {
    if (USE_MOCK) return mockApi.getRemoteSyncStatus(remote)

    try {
      return fetchApi<RemoteSyncStatus>(`/v2/comfygit/remotes/${encodeURIComponent(remote)}/status`)
    } catch {
      return null
    }
  }

  async function syncEnvironmentManually(
    modelStrategy: 'skip' | 'auto' | 'manual' = 'skip',
    removeExtraNodes = true
  ): Promise<SyncEnvironmentResult> {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 1500))
      return {
        status: 'success',
        nodes_installed: ['example-node'],
        nodes_removed: [],
        errors: [],
        message: 'Sync completed'
      }
    }

    return fetchApi<SyncEnvironmentResult>('/v2/comfygit/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model_strategy: modelStrategy,
        remove_extra_nodes: removeExtraNodes
      })
    })
  }

  return {
    isLoading,
    error,
    getStatus,
    commit,
    getHistory,
    exportEnv,
    // Git Operations
    getBranches,
    getCommitDetail,
    checkout,
    createBranch,
    switchBranch,
    // Environment Management
    getEnvironments,
    switchEnvironment,
    getSwitchProgress,
    createEnvironment,
    deleteEnvironment,
    // Workflow Management
    getWorkflows,
    getWorkflowDetails,
    resolveWorkflow,
    installWorkflowDeps,
    setModelImportance,
    // Model Management
    getEnvironmentModels,
    getWorkspaceModels,
    updateModelSource,
    deleteModel,
    downloadModel,
    // Settings
    getConfig,
    updateConfig,
    // Debug/Logs
    getEnvironmentLogs,
    getWorkspaceLogs,
    // Node Management
    getNodes,
    trackNodeAsDev,
    installNode,
    updateNode,
    uninstallNode,
    // Git Remotes
    getRemotes,
    addRemote,
    removeRemote,
    updateRemoteUrl,
    fetchRemote,
    getRemoteSyncStatus,
    // Environment Sync
    syncEnvironmentManually
  }
}
