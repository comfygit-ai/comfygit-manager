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
  CreateEnvironmentRequest,
  CreateEnvironmentResult,
  CreateEnvironmentProgress,
  ComfyUIRelease,
  SyncEnvironmentResult,
  WorkflowInfo,
  WorkflowDetails,
  WorkflowResolutionPlan,
  ModelInfo,
  ModelDetails,
  DownloadModelRequest,
  ConfigSettings,
  LogEntry,
  NodeInfo,
  NodesResult,
  RemotesResult,
  RemoteOperationResult,
  RemoteSyncStatus,
  SetupStatus,
  InitializeWorkspaceRequest,
  InitializeProgress,
  ValidatePathRequest,
  ValidatePathResult
} from '@/types/comfygit'
import { mockApi, isMockApi } from '@/services/mockApi'
import { useMockControls } from '@/composables/useMockControls'

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

// ============================================================================
// MOCK STATE MANAGEMENT
// For simulating stateful operations like wizard flows
// ============================================================================

interface MockSetupState {
  initState: 'idle' | 'creating_workspace' | 'setting_models_dir' | 'scanning_models' | 'complete' | 'error'
  initProgress: number
  initMessage: string
  initStartTime: number | null
  modelsFound: number
}

interface MockCreateEnvState {
  state: 'idle' | 'creating' | 'complete' | 'error'
  phase: string | null
  progress: number
  message: string
  startTime: number | null
  envName: string | null
}

// Global mock state (persists across function calls in the same session)
const mockSetupState: MockSetupState = {
  initState: 'idle',
  initProgress: 0,
  initMessage: 'No initialization in progress',
  initStartTime: null,
  modelsFound: 0
}

const mockCreateEnvState: MockCreateEnvState = {
  state: 'idle',
  phase: null,
  progress: 0,
  message: '',
  startTime: null,
  envName: null
}

// Phase definitions with timing (matches core library phases)
const MOCK_ENV_PHASES = [
  { id: 'init_structure', endTime: 300, progress: 5, message: 'Creating environment structure...' },
  { id: 'resolve_version', endTime: 800, progress: 10, message: 'Resolving ComfyUI version...' },
  { id: 'clone_comfyui', endTime: 2800, progress: 25, message: 'Cloning ComfyUI...' },
  { id: 'configure_environment', endTime: 3300, progress: 30, message: 'Configuring environment...' },
  { id: 'create_venv', endTime: 4300, progress: 35, message: 'Creating virtual environment...' },
  { id: 'install_pytorch', endTime: 8300, progress: 70, message: 'Installing PyTorch...' },
  { id: 'configure_pytorch', endTime: 8800, progress: 75, message: 'Configuring PyTorch backend...' },
  { id: 'install_dependencies', endTime: 11300, progress: 95, message: 'Installing ComfyUI dependencies...' },
  { id: 'finalize', endTime: 11800, progress: 100, message: 'Finalizing environment...' },
]

// Helper to simulate progress over time for workspace initialization
function updateMockInitProgress(): void {
  if (mockSetupState.initState === 'idle' || mockSetupState.initState === 'complete' || mockSetupState.initState === 'error') {
    return
  }

  if (!mockSetupState.initStartTime) return

  const elapsed = Date.now() - mockSetupState.initStartTime

  // Simulate phases: 0-2s creating, 2-4s setting models, 4-8s scanning, 8s+ complete
  if (elapsed < 2000) {
    mockSetupState.initState = 'creating_workspace'
    mockSetupState.initProgress = Math.min(20, Math.floor(elapsed / 100))
    mockSetupState.initMessage = 'Creating workspace structure...'
  } else if (elapsed < 4000) {
    mockSetupState.initState = 'setting_models_dir'
    mockSetupState.initProgress = 20 + Math.floor((elapsed - 2000) / 200)
    mockSetupState.initMessage = 'Configuring models directory...'
  } else if (elapsed < 8000) {
    mockSetupState.initState = 'scanning_models'
    const scanProgress = Math.floor((elapsed - 4000) / 50)
    mockSetupState.initProgress = 30 + Math.min(65, scanProgress)
    const modelsScanned = Math.floor((elapsed - 4000) / 100)
    mockSetupState.initMessage = `Scanning models (${modelsScanned}/42)...`
  } else {
    mockSetupState.initState = 'complete'
    mockSetupState.initProgress = 100
    mockSetupState.initMessage = 'Complete! 42 models indexed'
    mockSetupState.modelsFound = 42
    mockSetupState.initStartTime = null
  }
}

// Helper to simulate progress over time for environment creation
function updateMockCreateEnvProgress(): void {
  if (mockCreateEnvState.state === 'idle' || mockCreateEnvState.state === 'complete' || mockCreateEnvState.state === 'error') {
    return
  }

  if (!mockCreateEnvState.startTime) return

  const elapsed = Date.now() - mockCreateEnvState.startTime

  // Find current phase based on elapsed time
  let foundPhase = false
  for (const phase of MOCK_ENV_PHASES) {
    if (elapsed < phase.endTime) {
      mockCreateEnvState.phase = phase.id
      mockCreateEnvState.message = phase.message
      // Interpolate progress within phase
      const prevPhaseIdx = MOCK_ENV_PHASES.indexOf(phase) - 1
      const prevEndTime = prevPhaseIdx >= 0 ? MOCK_ENV_PHASES[prevPhaseIdx].endTime : 0
      const prevProgress = prevPhaseIdx >= 0 ? MOCK_ENV_PHASES[prevPhaseIdx].progress : 0
      const phaseDuration = phase.endTime - prevEndTime
      const phaseElapsed = elapsed - prevEndTime
      const phaseProgress = phaseElapsed / phaseDuration
      mockCreateEnvState.progress = Math.floor(prevProgress + (phase.progress - prevProgress) * phaseProgress)
      foundPhase = true
      break
    }
  }

  // If past all phases, complete
  if (!foundPhase) {
    mockCreateEnvState.state = 'complete'
    mockCreateEnvState.phase = 'complete'
    mockCreateEnvState.progress = 100
    mockCreateEnvState.message = `Environment '${mockCreateEnvState.envName}' created successfully`
    mockCreateEnvState.startTime = null
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

  async function deleteBranch(name: string, force = false): Promise<{ status: 'success' | 'error', message?: string }> {
    if (USE_MOCK) {
      await mockApi.deleteBranch(name)
      return { status: 'success' }
    }

    return fetchApi(`/v2/comfygit/branch/${encodeURIComponent(name)}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ force })
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

  async function createEnvironment(request: CreateEnvironmentRequest): Promise<CreateEnvironmentResult> {
    if (USE_MOCK) {
      // Start the mock environment creation process
      mockCreateEnvState.state = 'creating'
      mockCreateEnvState.phase = 'init_structure'
      mockCreateEnvState.progress = 0
      mockCreateEnvState.message = 'Creating environment structure...'
      mockCreateEnvState.startTime = Date.now()
      mockCreateEnvState.envName = request.name
      console.log('[MOCK] Starting environment creation:', request)
      return { status: 'started', task_id: 'mock-task-id', message: 'Creating environment...' }
    }

    return fetchApi<CreateEnvironmentResult>('/v2/workspace/environments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    })
  }

  async function getCreateProgress(): Promise<CreateEnvironmentProgress> {
    if (USE_MOCK) {
      // Update progress based on elapsed time
      updateMockCreateEnvProgress()

      return {
        state: mockCreateEnvState.state,
        phase: mockCreateEnvState.phase ?? undefined,
        progress: mockCreateEnvState.progress,
        message: mockCreateEnvState.message,
        environment_name: mockCreateEnvState.state === 'complete' ? mockCreateEnvState.envName || undefined : undefined,
        error: mockCreateEnvState.state === 'error' ? 'Mock error occurred' : undefined
      }
    }

    return fetchApi<CreateEnvironmentProgress>('/v2/workspace/environments/create_status')
  }

  async function getComfyUIReleases(limit = 20): Promise<ComfyUIRelease[]> {
    if (USE_MOCK) {
      return [
        { tag_name: 'latest', name: 'Latest', published_at: new Date().toISOString() },
        { tag_name: 'v0.3.69', name: 'v0.3.69', published_at: '2025-01-15T00:00:00Z' },
        { tag_name: 'v0.3.68', name: 'v0.3.68', published_at: '2025-01-10T00:00:00Z' },
      ]
    }

    return fetchApi<ComfyUIRelease[]>(`/v2/workspace/comfyui_releases?limit=${limit}`)
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

  async function getModelDetails(identifier: string): Promise<ModelDetails> {
    if (USE_MOCK) return mockApi.getModelDetails(identifier)

    return fetchApi<ModelDetails>(`/v2/workspace/models/details/${encodeURIComponent(identifier)}`)
  }

  async function openFileLocation(path: string): Promise<{ status: string }> {
    if (USE_MOCK) {
      console.log(`[MOCK] Opening file location: ${path}`)
      return { status: 'success' }
    }

    return fetchApi('/v2/workspace/open-location', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path })
    })
  }

  async function addModelSource(hash: string, sourceUrl: string): Promise<{ status: string; source_type: string }> {
    if (USE_MOCK) {
      await mockApi.updateModelSource(hash, sourceUrl)
      return { status: 'success', source_type: 'custom' }
    }

    return fetchApi(`/v2/workspace/models/${hash}/source`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source_url: sourceUrl })
    })
  }

  async function removeModelSource(hash: string, sourceUrl: string): Promise<{ status: string }> {
    if (USE_MOCK) {
      return { status: 'success' }
    }

    return fetchApi(`/v2/workspace/models/${hash}/source`, {
      method: 'DELETE',
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

  async function scanWorkspaceModels(): Promise<{ status: string, changes: number }> {
    if (USE_MOCK) {
      return { status: 'success', changes: 0 }
    }

    return fetchApi('/v2/workspace/models/scan', {
      method: 'POST'
    })
  }

  async function getModelsDirectory(): Promise<{ path: string | null }> {
    if (USE_MOCK) {
      return { path: '~/comfygit/models' }
    }

    return fetchApi('/v2/workspace/models/directory')
  }

  async function setModelsDirectory(path: string): Promise<{ status: string, path: string, models_indexed: number }> {
    if (USE_MOCK) {
      return { status: 'success', path, models_indexed: 10 }
    }

    return fetchApi('/v2/workspace/models/directory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path })
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

  // First-Time Setup
  async function getSetupStatus(): Promise<SetupStatus> {
    if (USE_MOCK) {
      // Use mock controls state as primary source
      const { state: mockState, setupState } = useMockControls()

      // Build environments list based on mock controls
      const environments: string[] = []
      if (mockState.hasEnvironments) {
        environments.push('mock-env-1', 'mock-env-2')
      }
      // Add any environment created during this session
      if (mockCreateEnvState.state === 'complete' && mockCreateEnvState.envName) {
        if (!environments.includes(mockCreateEnvState.envName)) {
          environments.push(mockCreateEnvState.envName)
        }
      }

      return {
        state: setupState.value,
        workspace_path: mockState.hasWorkspace ? '~/comfygit' : null,
        default_path: '~/comfygit',
        environments,
        current_environment: mockState.isManaged ? 'mock-env-1' : null,
        detected_models_dir: '/mock/ComfyUI/models',
        cli_installed: false,
        cli_path: null
      }
    }
    return fetchApi<SetupStatus>('/v2/setup/status')
  }

  async function initializeWorkspace(request: InitializeWorkspaceRequest): Promise<{ status: string; task_id: string }> {
    if (USE_MOCK) {
      // Start the mock initialization process
      mockSetupState.initState = 'creating_workspace'
      mockSetupState.initProgress = 0
      mockSetupState.initMessage = 'Starting workspace creation...'
      mockSetupState.initStartTime = Date.now()
      mockSetupState.modelsFound = 0
      console.log('[MOCK] Starting workspace initialization:', request)
      return { status: 'started', task_id: 'mock-task-id' }
    }
    return fetchApi('/v2/setup/initialize_workspace', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    })
  }

  async function getInitializeProgress(): Promise<InitializeProgress> {
    if (USE_MOCK) {
      // Update progress based on elapsed time
      updateMockInitProgress()

      return {
        state: mockSetupState.initState,
        progress: mockSetupState.initProgress,
        message: mockSetupState.initMessage,
        models_found: mockSetupState.initState === 'complete' ? mockSetupState.modelsFound : undefined,
        error: mockSetupState.initState === 'error' ? 'Mock error occurred' : undefined
      }
    }
    return fetchApi<InitializeProgress>('/v2/setup/initialize_status')
  }

  async function validatePath(request: ValidatePathRequest): Promise<ValidatePathResult> {
    if (USE_MOCK) {
      // Simulate realistic validation
      await new Promise(resolve => setTimeout(resolve, 200)) // Small delay

      if (request.type === 'workspace') {
        // Check for obviously invalid paths
        if (!request.path || request.path.trim() === '') {
          return { valid: false, error: 'Path cannot be empty' }
        }
        // Simulate workspace already exists
        if (request.path.includes('existing')) {
          return { valid: false, error: 'Workspace already exists at this location' }
        }
        return { valid: true }
      } else if (request.type === 'models') {
        if (!request.path || request.path.trim() === '') {
          return { valid: false, error: 'Path cannot be empty' }
        }
        // Simulate ComfyUI root detection
        if (request.path.endsWith('ComfyUI') || request.path.endsWith('comfyui')) {
          return {
            valid: false,
            error: 'This appears to be a ComfyUI installation, not a models directory',
            suggestion: request.path + '/models'
          }
        }
        // Valid models directory
        return { valid: true, model_count: 42 }
      }
      return { valid: true }
    }
    return fetchApi<ValidatePathResult>('/v2/setup/validate_path', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
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
    deleteBranch,
    // Environment Management
    getEnvironments,
    switchEnvironment,
    getSwitchProgress,
    createEnvironment,
    getCreateProgress,
    getComfyUIReleases,
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
    getModelDetails,
    openFileLocation,
    addModelSource,
    removeModelSource,
    deleteModel,
    downloadModel,
    scanWorkspaceModels,
    getModelsDirectory,
    setModelsDirectory,
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
    syncEnvironmentManually,
    // First-Time Setup
    getSetupStatus,
    initializeWorkspace,
    getInitializeProgress,
    validatePath
  }
}
