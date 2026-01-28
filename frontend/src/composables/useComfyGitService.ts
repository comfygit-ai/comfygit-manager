import { ref } from 'vue'
import type {
  ComfyGitStatus,
  CommitResult,
  LogResult,
  ExportResult,
  ExportValidationResult,
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
  PullPreview,
  PullResult,
  PushPreview,
  PushResult,
  ImportAnalysis,
  ValidateNameResult,
  ImportResult,
  ImportProgress,
  SetupStatus,
  InitializeWorkspaceRequest,
  InitializeProgress,
  ValidatePathRequest,
  ValidatePathResult,
  DataCenter,
  EnvironmentDeploySummary,
  NetworkVolume,
  RunPodGpuType,
  RunPodInstance,
  RunPodConnectionResult,
  RunPodKeyStatus,
  DeployResult,
  DeployPackageResult,
  DeployConfig,
  DeploymentStatus,
  CustomWorkersResponse,
  AddWorkerRequest,
  WorkerScanResponse,
  WorkerTestResult,
  CustomWorkerSystemInfo,
  WorkerInstancesResponse,
  DeployToWorkerRequest,
  HuggingFaceRepoInfoResponse,
  HuggingFaceSearchResponse,
  ModelsSubdirectoriesResponse
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

// UUID generator that works in non-secure contexts (HTTP)
// generateUUID() only works in secure contexts (HTTPS/localhost)
function generateUUID(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return generateUUID()
  }
  // Fallback for non-secure contexts
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

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

// ============================================================================
// MOCK IMPORT STATE
// ============================================================================

interface MockImportState {
  state: 'idle' | 'importing' | 'complete' | 'error'
  phase: string | null
  progress: number
  message: string
  startTime: number | null
  envName: string | null
}

const mockImportState: MockImportState = {
  state: 'idle',
  phase: null,
  progress: 0,
  message: '',
  startTime: null,
  envName: null
}

// Import phases with timing (matches core library phases)
const MOCK_IMPORT_PHASES = [
  { id: 'clone_comfyui', endTime: 2000, progress: 15, message: 'Cloning/restoring ComfyUI...' },
  { id: 'extract_builtins', endTime: 2500, progress: 20, message: 'Extracting builtin nodes...' },
  { id: 'configure_pytorch', endTime: 3500, progress: 35, message: 'Configuring PyTorch backend...' },
  { id: 'install_dependencies', endTime: 6000, progress: 60, message: 'Installing dependencies...' },
  { id: 'sync_nodes', endTime: 7000, progress: 70, message: 'Syncing custom nodes...' },
  { id: 'copy_workflows', endTime: 7500, progress: 80, message: 'Copying workflows...' },
  { id: 'resolve_models', endTime: 8000, progress: 85, message: 'Resolving models...' },
  { id: 'download_models', endTime: 9500, progress: 95, message: 'Downloading models...' },
  { id: 'finalize', endTime: 10000, progress: 100, message: 'Finalizing environment...' },
]

function updateMockImportProgress(): void {
  if (mockImportState.state !== 'importing' || !mockImportState.startTime) return

  const elapsed = Date.now() - mockImportState.startTime

  // Find current phase based on elapsed time
  for (const phase of MOCK_IMPORT_PHASES) {
    if (elapsed < phase.endTime) {
      mockImportState.phase = phase.id
      mockImportState.message = phase.message
      // Interpolate progress within phase
      const prevPhaseIdx = MOCK_IMPORT_PHASES.indexOf(phase) - 1
      const prevEndTime = prevPhaseIdx >= 0 ? MOCK_IMPORT_PHASES[prevPhaseIdx].endTime : 0
      const prevProgress = prevPhaseIdx >= 0 ? MOCK_IMPORT_PHASES[prevPhaseIdx].progress : 0
      const phaseDuration = phase.endTime - prevEndTime
      const phaseElapsed = elapsed - prevEndTime
      mockImportState.progress = Math.floor(prevProgress + (phase.progress - prevProgress) * (phaseElapsed / phaseDuration))
      return
    }
  }

  // Past all phases - complete
  mockImportState.state = 'complete'
  mockImportState.phase = 'complete'
  mockImportState.progress = 100
  mockImportState.message = `Environment '${mockImportState.envName}' imported successfully`
  mockImportState.startTime = null
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

    // Handle empty responses (some endpoints return 200 with no body)
    const text = await response.text()
    if (!text) {
      return undefined as T
    }
    return JSON.parse(text)
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

  async function validateExport(): Promise<ExportValidationResult> {
    if (USE_MOCK) return mockApi.validateExport()

    return fetchApi<ExportValidationResult>('/v2/comfygit/export/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    })
  }

  async function validateDeploy(): Promise<ExportValidationResult> {
    // Deploy validation doesn't check for uncommitted changes
    // because deploys pull from git remotes, not local files
    if (USE_MOCK) {
      // Mock always allows deploy
      return {
        can_export: true,
        blocking_issues: [],
        warnings: { models_without_sources: [] }
      }
    }

    return fetchApi<ExportValidationResult>('/v2/comfygit/deploy/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    })
  }

  async function exportEnvWithForce(outputPath?: string): Promise<ExportResult> {
    if (USE_MOCK) return mockApi.exportEnvWithForce(outputPath)

    return fetchApi<ExportResult>('/v2/comfygit/export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ output_path: outputPath, force: true })
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

  async function switchEnvironment(targetEnv: string, workspacePath?: string): Promise<void> {
    if (USE_MOCK) return mockApi.switchEnvironment(targetEnv)

    const body: { target_env: string; workspace_path?: string } = { target_env: targetEnv }
    if (workspacePath) body.workspace_path = workspacePath

    return fetchApi('/v2/comfygit/switch_environment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
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

  async function getHuggingFaceRepoInfo(url: string): Promise<HuggingFaceRepoInfoResponse> {
    if (USE_MOCK) {
      return {
        repo_id: 'mock/repo',
        revision: 'main',
        files: [
          { path: 'model.safetensors', size: 1024 * 1024 * 100, is_model_file: true, shard_group: null }
        ]
      }
    }
    const params = new URLSearchParams({ url })
    return fetchApi(`/v2/workspace/huggingface/repo-info?${params}`)
  }

  async function getModelsSubdirectories(): Promise<ModelsSubdirectoriesResponse> {
    if (USE_MOCK) {
      return {
        directories: ['checkpoints', 'loras', 'vae', 'controlnet'],
        standard: ['checkpoints', 'loras', 'vae'],
        existing: ['checkpoints', 'controlnet']
      }
    }
    return fetchApi('/v2/workspace/models/subdirectories')
  }

  async function searchHuggingFaceRepos(query: string, limit = 10): Promise<HuggingFaceSearchResponse> {
    if (USE_MOCK) {
      return {
        query,
        results: [
          { repo_id: 'black-forest-labs/FLUX.1-dev', description: 'FLUX.1 development model', downloads: 1200000, likes: 4500, tags: ['text-to-image', 'diffusers'] },
          { repo_id: 'stabilityai/stable-diffusion-xl-base-1.0', description: 'SDXL base model', downloads: 890000, likes: 3200, tags: ['text-to-image'] }
        ]
      }
    }
    const params = new URLSearchParams({ query, limit: String(limit) })
    return fetchApi(`/v2/workspace/huggingface/search?${params}`)
  }

  // Settings
  async function getConfig(workspacePath?: string): Promise<ConfigSettings> {
    if (USE_MOCK) return mockApi.getConfig()

    try {
      const url = workspacePath
        ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(workspacePath)}`
        : '/v2/comfygit/config'
      return fetchApi<ConfigSettings>(url)
    } catch {
      return {
        workspace_path: '~/comfygit',
        models_path: '~/comfygit/models',
        auto_sync_models: true,
        confirm_destructive: true,
        comfyui_extra_args: []
      }
    }
  }

  async function updateConfig(config: Partial<ConfigSettings>, workspacePath?: string): Promise<void> {
    if (USE_MOCK) return mockApi.updateConfig(config as ConfigSettings)

    const url = workspacePath
      ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(workspacePath)}`
      : '/v2/comfygit/config'
    return fetchApi(url, {
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

  async function getEnvironmentLogPath(): Promise<{ path: string; exists: boolean }> {
    if (USE_MOCK) {
      return { path: '/mock/workspace/logs/env/full.log', exists: true }
    }

    return fetchApi<{ path: string; exists: boolean }>('/v2/comfygit/debug/logs/path')
  }

  async function getWorkspaceLogPath(): Promise<{ path: string; exists: boolean }> {
    if (USE_MOCK) {
      return { path: '/mock/workspace/logs/workspace/full.log', exists: true }
    }

    return fetchApi<{ path: string; exists: boolean }>('/v2/workspace/debug/logs/path')
  }

  async function getOrchestratorLogs(level?: string, lines?: number): Promise<LogEntry[]> {
    if (USE_MOCK) return mockApi.getWorkspaceLogs(level, lines) // Reuse mock for now

    try {
      const params = new URLSearchParams()
      if (level) params.append('level', level)
      if (lines) params.append('lines', lines.toString())
      return fetchApi<LogEntry[]>(`/v2/workspace/debug/orchestrator-logs?${params}`)
    } catch {
      return []
    }
  }

  async function getOrchestratorLogPath(): Promise<{ path: string; exists: boolean }> {
    if (USE_MOCK) {
      return { path: '/mock/workspace/.metadata/orchestrator.log', exists: true }
    }

    return fetchApi<{ path: string; exists: boolean }>('/v2/workspace/debug/orchestrator-logs/path')
  }

  async function openFile(path: string): Promise<{ status: string }> {
    if (USE_MOCK) {
      console.log(`[MOCK] Opening file: ${path}`)
      return { status: 'success' }
    }

    return fetchApi('/v2/workspace/open-file', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path })
    })
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

  /**
   * Queue a node install via Manager queue API.
   * This routes through the Manager's sequential queue to avoid race conditions.
   * Returns the ui_id for tracking via WebSocket events.
   */
  async function queueNodeInstall(params: {
    id: string
    version?: string
    selected_version?: string
    repository?: string
    mode?: string
    channel?: string
  }): Promise<{ ui_id: string }> {
    if (USE_MOCK) {
      await mockApi.installNode(params.id)
      return { ui_id: generateUUID() }
    }

    const ui_id = generateUUID()

    // Get client_id from ComfyUI's API if available
    const client_id = (window as any).app?.api?.clientId ??
                      (window as any).app?.api?.initialClientId ??
                      'comfygit-panel'

    const task = {
      kind: 'install',
      params: {
        id: params.id,
        version: params.version || params.selected_version || 'latest',
        selected_version: params.selected_version || 'latest',
        repository: params.repository || '',
        mode: params.mode || 'remote',
        channel: params.channel || 'default'
      },
      ui_id,
      client_id
    }

    // Queue the task
    await fetchApi<void>('/v2/manager/queue/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })

    // Start queue processing
    await fetchApi<void>('/v2/manager/queue/start')

    return { ui_id }
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

  async function fetchRemote(name: string, authToken?: string): Promise<RemoteOperationResult> {
    if (USE_MOCK) {
      await mockApi.fetchRemote(name)
      return { status: 'success', remote_name: name }
    }

    const headers: Record<string, string> = {}
    if (authToken) {
      headers['X-Git-Auth-Token'] = authToken
    }

    return fetchApi<RemoteOperationResult>(`/v2/comfygit/remotes/${encodeURIComponent(name)}/fetch`, {
      method: 'POST',
      headers
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

  // Push/Pull Operations
  async function getPullPreview(remote: string, branch?: string): Promise<PullPreview> {
    if (USE_MOCK) return mockApi.getPullPreview(remote)
    const url = branch
      ? `/v2/comfygit/remotes/${encodeURIComponent(remote)}/pull-preview?branch=${encodeURIComponent(branch)}`
      : `/v2/comfygit/remotes/${encodeURIComponent(remote)}/pull-preview`
    return fetchApi<PullPreview>(url)
  }

  async function pullFromRemote(
    remote: string,
    options: { modelStrategy?: string; force?: boolean; resolutions?: any[]; authToken?: string } = {}
  ): Promise<PullResult> {
    if (USE_MOCK) return mockApi.pullFromRemote(remote, options)

    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (options.authToken) {
      headers['X-Git-Auth-Token'] = options.authToken
    }

    return fetchApi<PullResult>(`/v2/comfygit/remotes/${encodeURIComponent(remote)}/pull`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model_strategy: options.modelStrategy || 'skip',
        force: options.force || false,
        resolutions: options.resolutions
      })
    })
  }

  async function getPushPreview(remote: string, branch?: string): Promise<PushPreview> {
    if (USE_MOCK) return mockApi.getPushPreview(remote)
    const url = branch
      ? `/v2/comfygit/remotes/${encodeURIComponent(remote)}/push-preview?branch=${encodeURIComponent(branch)}`
      : `/v2/comfygit/remotes/${encodeURIComponent(remote)}/push-preview`
    return fetchApi<PushPreview>(url)
  }

  async function pushToRemote(
    remote: string,
    options: { force?: boolean; authToken?: string } = {}
  ): Promise<PushResult> {
    if (USE_MOCK) return mockApi.pushToRemote(remote, options)

    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (options.authToken) {
      headers['X-Git-Auth-Token'] = options.authToken
    }

    return fetchApi<PushResult>(`/v2/comfygit/remotes/${encodeURIComponent(remote)}/push`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ force: options.force || false })
    })
  }

  // V2: Validate merge before executing
  async function validateMerge(
    remote: string,
    resolutions: Array<{ name: string; resolution: string }>
  ): Promise<{ is_compatible: boolean; node_conflicts: any[]; warnings: string[] }> {
    if (USE_MOCK) return mockApi.validateMerge(remote, resolutions)
    return fetchApi(`/v2/comfygit/remotes/${encodeURIComponent(remote)}/validate-merge`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resolutions })
    })
  }

  // Repair missing model references by re-resolving workflows
  async function repairWorkflowModels(workflowNames: string[]): Promise<{
    success: number
    failed: Array<{ name: string; error: string }>
  }> {
    const results = {
      success: 0,
      failed: [] as Array<{ name: string; error: string }>
    }

    for (const name of workflowNames) {
      try {
        await resolveWorkflow(name)
        results.success++
      } catch (err) {
        results.failed.push({
          name,
          error: err instanceof Error ? err.message : 'Unknown error'
        })
      }
    }

    return results
  }

  // Import Operations
  async function previewTarballImport(file: File): Promise<ImportAnalysis> {
    if (USE_MOCK) {
      // Return mock data for development
      await new Promise(resolve => setTimeout(resolve, 500))
      return {
        comfyui_version: 'v0.3.8',
        comfyui_version_type: 'release',
        total_models: 3,
        models_locally_available: 1,
        models_needing_download: 1,
        models_without_sources: 1,
        models: [],
        total_nodes: 5,
        registry_nodes: 4,
        dev_nodes: 1,
        git_nodes: 0,
        nodes: [],
        total_workflows: 2,
        workflows: [],
        needs_model_downloads: true,
        needs_node_installs: true,
        download_strategy_recommendation: 'required'
      }
    }

    // Use FormData to upload the file
    const formData = new FormData()
    formData.append('file', file)

    if (!window.app?.api) {
      throw new Error('ComfyUI API not available')
    }

    const response = await window.app.api.fetchApi('/v2/workspace/import/preview', {
      method: 'POST',
      body: formData
      // Don't set Content-Type - browser will set multipart boundary automatically
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || `Preview failed: ${response.status}`)
    }

    return response.json()
  }

  async function validateEnvironmentName(name: string): Promise<ValidateNameResult> {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200))
      // Simulate name validation
      if (name === 'existing-env') {
        return { valid: false, error: "Environment 'existing-env' already exists" }
      }
      if (name.includes('/') || name.includes(' ')) {
        return { valid: false, error: 'Name contains invalid characters' }
      }
      return { valid: true, name }
    }

    return fetchApi<ValidateNameResult>(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(name)}`
    )
  }

  async function executeImport(
    file: File,
    name: string,
    modelStrategy: 'all' | 'required' | 'skip',
    torchBackend: string
  ): Promise<ImportResult> {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300))
      // Start mock import progress simulation
      mockImportState.state = 'importing'
      mockImportState.phase = null
      mockImportState.progress = 0
      mockImportState.message = `Importing environment '${name}'...`
      mockImportState.startTime = Date.now()
      mockImportState.envName = name
      return { status: 'started', message: `Importing environment '${name}'...` }
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', name)
    formData.append('model_strategy', modelStrategy)
    formData.append('torch_backend', torchBackend)

    if (!window.app?.api) {
      throw new Error('ComfyUI API not available')
    }

    const response = await window.app.api.fetchApi('/v2/workspace/import', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || errorData.error || `Import failed: ${response.status}`)
    }

    return response.json()
  }

  async function getImportProgress(): Promise<ImportProgress> {
    if (USE_MOCK) {
      // Update mock progress based on elapsed time
      updateMockImportProgress()
      return {
        state: mockImportState.state,
        phase: mockImportState.phase,
        progress: mockImportState.progress,
        message: mockImportState.message,
        environment_name: mockImportState.envName
      }
    }

    return fetchApi<ImportProgress>('/v2/workspace/import/status')
  }

  async function previewGitImport(gitUrl: string): Promise<ImportAnalysis> {
    if (USE_MOCK) {
      // Return mock data for development
      await new Promise(resolve => setTimeout(resolve, 800))
      return {
        comfyui_version: 'v0.3.8',
        comfyui_version_type: 'release',
        total_models: 3,
        models_locally_available: 1,
        models_needing_download: 1,
        models_without_sources: 1,
        models: [],
        total_nodes: 5,
        registry_nodes: 4,
        dev_nodes: 1,
        git_nodes: 0,
        nodes: [],
        total_workflows: 2,
        workflows: [],
        needs_model_downloads: true,
        needs_node_installs: true,
        download_strategy_recommendation: 'required'
      }
    }

    return fetchApi<ImportAnalysis>('/v2/workspace/import/preview/git', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ git_url: gitUrl })
    })
  }

  async function executeGitImport(
    gitUrl: string,
    name: string,
    modelStrategy: 'all' | 'required' | 'skip',
    torchBackend: string
  ): Promise<ImportResult> {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300))
      // Start mock import progress simulation (reuse existing mock state)
      mockImportState.state = 'importing'
      mockImportState.phase = null
      mockImportState.progress = 0
      mockImportState.message = `Importing environment '${name}' from git...`
      mockImportState.startTime = Date.now()
      mockImportState.envName = name
      return { status: 'started', message: `Importing environment '${name}'...` }
    }

    return fetchApi<ImportResult>('/v2/workspace/import/git', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        git_url: gitUrl,
        name,
        model_strategy: modelStrategy,
        torch_backend: torchBackend
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

  // Deploy Operations
  async function getDeploySummary(): Promise<EnvironmentDeploySummary> {
    if (USE_MOCK) return mockApi.getDeploySummary()
    return fetchApi<EnvironmentDeploySummary>('/v2/comfygit/deploy/summary')
  }

  async function getDataCenters(): Promise<{ data_centers: DataCenter[] }> {
    if (USE_MOCK) return mockApi.getDataCenters()
    return fetchApi<{ data_centers: DataCenter[] }>('/v2/comfygit/deploy/runpod/data-centers')
  }

  async function testRunPodConnection(apiKey: string, saveKey: boolean): Promise<RunPodConnectionResult> {
    if (USE_MOCK) return mockApi.testRunPodConnection(apiKey, saveKey)
    return fetchApi<RunPodConnectionResult>('/v2/comfygit/deploy/runpod/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: apiKey, save_key: saveKey })
    })
  }

  async function getNetworkVolumes(): Promise<{ volumes: NetworkVolume[] }> {
    if (USE_MOCK) return mockApi.getNetworkVolumes()
    return fetchApi<{ volumes: NetworkVolume[] }>('/v2/comfygit/deploy/runpod/volumes')
  }

  async function getRunPodGpuTypes(dataCenterId?: string): Promise<{ gpu_types: RunPodGpuType[] }> {
    if (USE_MOCK) return mockApi.getRunPodGpuTypes()
    const url = dataCenterId
      ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(dataCenterId)}`
      : '/v2/comfygit/deploy/runpod/gpu-types'
    return fetchApi<{ gpu_types: RunPodGpuType[] }>(url)
  }

  async function deployToRunPod(config: DeployConfig): Promise<DeployResult> {
    if (USE_MOCK) return mockApi.deployToRunPod(config)
    return fetchApi<DeployResult>('/v2/comfygit/deploy/runpod', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    })
  }

  async function getRunPodPods(): Promise<{ pods: RunPodInstance[] }> {
    if (USE_MOCK) return mockApi.getRunPodPods()
    return fetchApi<{ pods: RunPodInstance[] }>('/v2/comfygit/deploy/runpod/pods')
  }

  async function terminateRunPodPod(podId: string): Promise<{ status: 'success' | 'error'; message: string }> {
    if (USE_MOCK) return mockApi.terminateRunPodPod(podId)
    return fetchApi(`/v2/comfygit/deploy/runpod/${encodeURIComponent(podId)}`, {
      method: 'DELETE'
    })
  }

  async function stopRunPodPod(podId: string): Promise<{ status: 'success' | 'error'; message: string }> {
    if (USE_MOCK) return mockApi.stopRunPodPod(podId)
    return fetchApi(`/v2/comfygit/deploy/runpod/${encodeURIComponent(podId)}/stop`, {
      method: 'POST'
    })
  }

  async function startRunPodPod(podId: string): Promise<{ status: 'success' | 'error'; message: string; cost_per_hour?: number }> {
    if (USE_MOCK) return mockApi.startRunPodPod(podId)
    return fetchApi(`/v2/comfygit/deploy/runpod/${encodeURIComponent(podId)}/start`, {
      method: 'POST'
    })
  }

  async function getDeploymentStatus(podId: string): Promise<DeploymentStatus> {
    if (USE_MOCK) return mockApi.getDeploymentStatus(podId)
    return fetchApi<DeploymentStatus>(`/v2/comfygit/deploy/runpod/${encodeURIComponent(podId)}/status`)
  }

  async function exportDeployPackage(outputPath?: string): Promise<DeployPackageResult> {
    if (USE_MOCK) return mockApi.exportDeployPackage(outputPath)
    return fetchApi<DeployPackageResult>('/v2/comfygit/deploy/package', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ output_path: outputPath })
    })
  }

  async function getStoredRunPodKey(verify = false): Promise<RunPodKeyStatus> {
    if (USE_MOCK) return mockApi.getStoredRunPodKey()
    const url = verify
      ? '/v2/comfygit/deploy/runpod/key?verify=true'
      : '/v2/comfygit/deploy/runpod/key'
    return fetchApi<RunPodKeyStatus>(url)
  }

  async function clearRunPodKey(): Promise<{ status: 'success' }> {
    if (USE_MOCK) return mockApi.clearRunPodKey()
    return fetchApi('/v2/comfygit/deploy/runpod/key', {
      method: 'DELETE'
    })
  }

  // Custom Worker Operations
  async function getCustomWorkers(): Promise<CustomWorkersResponse> {
    if (USE_MOCK) {
      return { workers: [] }
    }
    return fetchApi<CustomWorkersResponse>('/v2/comfygit/deploy/custom/workers')
  }

  async function addCustomWorker(request: AddWorkerRequest): Promise<{ status: 'success' }> {
    return fetchApi('/v2/comfygit/deploy/custom/workers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    })
  }

  async function removeCustomWorker(name: string): Promise<{ status: 'success' }> {
    return fetchApi(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(name)}`, {
      method: 'DELETE'
    })
  }

  async function testWorkerConnection(params: { host: string; port: number; api_key: string }): Promise<WorkerTestResult> {
    return fetchApi<WorkerTestResult>('/v2/comfygit/deploy/custom/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    })
  }

  async function scanForWorkers(): Promise<WorkerScanResponse> {
    if (USE_MOCK) {
      return { discovered: [] }
    }
    return fetchApi<WorkerScanResponse>('/v2/comfygit/deploy/custom/scan', {
      method: 'POST'
    })
  }

  async function getWorkerSystemInfo(workerName: string): Promise<CustomWorkerSystemInfo> {
    return fetchApi<CustomWorkerSystemInfo>(`/v2/comfygit/deploy/custom/${encodeURIComponent(workerName)}/info`)
  }

  async function getWorkerInstances(workerName: string): Promise<WorkerInstancesResponse> {
    return fetchApi<WorkerInstancesResponse>(`/v2/comfygit/deploy/custom/${encodeURIComponent(workerName)}/instances`)
  }

  async function deployToWorker(workerName: string, request: DeployToWorkerRequest): Promise<DeployResult> {
    return fetchApi<DeployResult>(`/v2/comfygit/deploy/custom/${encodeURIComponent(workerName)}/instances`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    })
  }

  async function startWorkerInstance(workerName: string, instanceId: string): Promise<{ status: 'success' }> {
    return fetchApi(`/v2/comfygit/deploy/custom/${encodeURIComponent(workerName)}/instances/${encodeURIComponent(instanceId)}/start`, {
      method: 'POST'
    })
  }

  async function stopWorkerInstance(workerName: string, instanceId: string): Promise<{ status: 'success' }> {
    return fetchApi(`/v2/comfygit/deploy/custom/${encodeURIComponent(workerName)}/instances/${encodeURIComponent(instanceId)}/stop`, {
      method: 'POST'
    })
  }

  async function terminateWorkerInstance(workerName: string, instanceId: string): Promise<{ status: 'success' }> {
    return fetchApi(`/v2/comfygit/deploy/custom/${encodeURIComponent(workerName)}/instances/${encodeURIComponent(instanceId)}`, {
      method: 'DELETE'
    })
  }

  // Git Authentication (for cloud deployments)
  async function testGitAuth(token: string): Promise<{ status: 'success' | 'error'; message: string }> {
    if (USE_MOCK) {
      // Mock: simulate token validation
      await new Promise(resolve => setTimeout(resolve, 500))
      if (token.startsWith('ghp_')) {
        return { status: 'success', message: 'GitHub authentication successful' }
      }
      return { status: 'error', message: 'Invalid token format' }
    }
    return fetchApi<{ status: 'success' | 'error'; message: string }>('/v2/comfygit/deploy/test-git-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    })
  }

  return {
    isLoading,
    error,
    getStatus,
    commit,
    getHistory,
    exportEnv,
    validateExport,
    validateDeploy,
    exportEnvWithForce,
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
    getHuggingFaceRepoInfo,
    getModelsSubdirectories,
    searchHuggingFaceRepos,
    // Settings
    getConfig,
    updateConfig,
    // Debug/Logs
    getEnvironmentLogs,
    getWorkspaceLogs,
    getEnvironmentLogPath,
    getWorkspaceLogPath,
    getOrchestratorLogs,
    getOrchestratorLogPath,
    openFile,
    // Node Management
    getNodes,
    trackNodeAsDev,
    installNode,
    queueNodeInstall,
    updateNode,
    uninstallNode,
    // Git Remotes
    getRemotes,
    addRemote,
    removeRemote,
    updateRemoteUrl,
    fetchRemote,
    getRemoteSyncStatus,
    // Push/Pull
    getPullPreview,
    pullFromRemote,
    getPushPreview,
    pushToRemote,
    validateMerge,
    // Environment Sync
    syncEnvironmentManually,
    // Workflow Repair
    repairWorkflowModels,
    // Import Operations
    previewTarballImport,
    previewGitImport,
    validateEnvironmentName,
    executeImport,
    executeGitImport,
    getImportProgress,
    // First-Time Setup
    getSetupStatus,
    initializeWorkspace,
    getInitializeProgress,
    validatePath,
    // Deploy Operations
    getDeploySummary,
    getDataCenters,
    testRunPodConnection,
    getNetworkVolumes,
    getRunPodGpuTypes,
    deployToRunPod,
    getRunPodPods,
    terminateRunPodPod,
    stopRunPodPod,
    startRunPodPod,
    getDeploymentStatus,
    exportDeployPackage,
    getStoredRunPodKey,
    clearRunPodKey,
    // Custom Worker Operations
    getCustomWorkers,
    addCustomWorker,
    removeCustomWorker,
    testWorkerConnection,
    scanForWorkers,
    getWorkerSystemInfo,
    getWorkerInstances,
    deployToWorker,
    startWorkerInstance,
    stopWorkerInstance,
    terminateWorkerInstance,
    // Git Authentication
    testGitAuth
  }
}
