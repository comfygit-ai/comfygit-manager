import { ref, reactive } from 'vue'
import type {
  FullResolutionResult,
  NodeChoice,
  ModelChoice,
  AppliedResolutionResult,
  NodeSearchResult,
  ModelSearchResult,
  ResolutionProgressState
} from '@/types/comfygit'
import { mockApi, isMockApi } from '@/services/mockApi'
import { useModelDownloadQueue } from './useModelDownloadQueue'

declare global {
  interface Window {
    app?: {
      api: {
        fetchApi: (endpoint: string, options?: RequestInit) => Promise<Response>
      }
    }
  }
}

export function useWorkflowResolution() {
  const result = ref<FullResolutionResult | null>(null)
  const appliedResult = ref<AppliedResolutionResult | null>(null)
  const searchResults = ref<NodeSearchResult[]>([])
  const modelSearchResults = ref<ModelSearchResult[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
    if (!window.app?.api) {
      throw new Error('ComfyUI API not available')
    }

    const response = await window.app.api.fetchApi(endpoint, options)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      const errorMessage = errorData.error || errorData.message || `Request failed: ${response.status}`
      throw new Error(errorMessage)
    }

    return response.json()
  }

  async function analyzeWorkflow(workflowName: string): Promise<FullResolutionResult> {
    isLoading.value = true
    error.value = null

    try {
      let data: FullResolutionResult

      if (isMockApi()) {
        // Use mock API
        data = await mockApi.analyzeWorkflow(workflowName)
      } else {
        // Use real API
        data = await fetchApi<FullResolutionResult>(
          `/v2/comfygit/workflow/${workflowName}/analyze`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
          }
        )
      }

      // Normalize newly-added node categories for older payloads/mocks
      data.nodes.version_gated = data.nodes.version_gated || []
      data.nodes.uninstallable = data.nodes.uninstallable || []
      data.node_guidance = data.node_guidance || {}
      data.package_aliases = data.package_aliases || {}

      result.value = data
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      error.value = errorMessage
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function applyResolution(
    workflowName: string,
    nodeChoices: Map<string, NodeChoice>,
    modelChoices: Map<string, ModelChoice>,
    skippedPackages?: Set<string>
  ): Promise<AppliedResolutionResult> {
    isLoading.value = true
    error.value = null

    try {
      let data: AppliedResolutionResult

      if (isMockApi()) {
        // Use mock API
        data = await mockApi.applyResolution(workflowName, nodeChoices, modelChoices)
      } else {
        // Convert Map to plain object for JSON serialization
        const nodeChoicesObj = Object.fromEntries(nodeChoices)
        const modelChoicesObj = Object.fromEntries(modelChoices)
        const skippedPackagesArr = skippedPackages ? Array.from(skippedPackages) : []

        data = await fetchApi<AppliedResolutionResult>(
          `/v2/comfygit/workflow/${workflowName}/apply-resolution`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              node_choices: nodeChoicesObj,
              model_choices: modelChoicesObj,
              skipped_packages: skippedPackagesArr
            })
          }
        )
      }

      appliedResult.value = data
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      error.value = errorMessage
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function searchNodes(query: string, limit: number = 10): Promise<NodeSearchResult[]> {
    isLoading.value = true
    error.value = null

    try {
      let data: { results: NodeSearchResult[]; total: number }

      if (isMockApi()) {
        // Use mock API
        data = await mockApi.searchNodes(query, limit)
      } else {
        // Use real API
        data = await fetchApi<{ results: NodeSearchResult[]; total: number }>(
          '/v2/comfygit/workflow/search-nodes',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, limit })
          }
        )
      }

      searchResults.value = data.results
      return data.results
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      error.value = errorMessage
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function searchModels(query: string, limit: number = 10): Promise<ModelSearchResult[]> {
    isLoading.value = true
    error.value = null

    try {
      let data: { results: ModelSearchResult[]; total: number }

      if (isMockApi()) {
        // Use mock API
        data = await mockApi.searchModels(query, limit)
      } else {
        // Use real API
        data = await fetchApi<{ results: ModelSearchResult[]; total: number }>(
          '/v2/comfygit/workflow/search-models',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, limit })
          }
        )
      }

      modelSearchResults.value = data.results
      return data.results
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      error.value = errorMessage
      throw err
    } finally {
      isLoading.value = false
    }
  }

  // Progress state for streaming resolution
  const progress = reactive<ResolutionProgressState>({
    phase: 'idle',
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  })

  function resetProgress() {
    progress.phase = 'idle'
    progress.currentFile = undefined
    progress.currentFileIndex = undefined
    progress.totalFiles = undefined
    progress.bytesDownloaded = undefined
    progress.bytesTotal = undefined
    progress.completedFiles = []
    progress.nodesToInstall = []
    progress.nodesInstalled = []
    progress.installError = undefined
    progress.needsRestart = undefined
    progress.error = undefined
    progress.nodeInstallProgress = undefined
  }

  /**
   * Install node packages for a workflow with progress tracking.
   * Uses SSE for real-time progress updates.
   */
  async function installNodes(workflowName: string): Promise<{ nodes_installed: string[]; status: string; message?: string }> {
    progress.phase = 'installing'
    progress.nodesInstalled = []
    progress.installError = undefined
    progress.nodeInstallProgress = {
      completedNodes: []
    }

    try {
      if (isMockApi()) {
        // Mock: simulate installation with progress
        progress.nodeInstallProgress.totalNodes = progress.nodesToInstall.length
        for (let i = 0; i < progress.nodesToInstall.length; i++) {
          progress.nodeInstallProgress.currentNode = progress.nodesToInstall[i]
          progress.nodeInstallProgress.currentIndex = i
          await new Promise(resolve => setTimeout(resolve, 500))
          progress.nodeInstallProgress.completedNodes.push({
            node_id: progress.nodesToInstall[i],
            success: true
          })
        }
        progress.nodesInstalled = progress.nodesToInstall
        progress.needsRestart = progress.nodesToInstall.length > 0
        return {
          status: 'success',
          nodes_installed: progress.nodesToInstall,
          message: 'Nodes installed successfully'
        }
      }

      // Real API: try SSE first, fallback to regular endpoint
      return await installNodesWithFallback(workflowName)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to install nodes'
      progress.installError = errorMessage
      throw err
    }
  }

  /**
   * Install nodes with SSE progress, falling back to regular endpoint if SSE unavailable
   */
  async function installNodesWithFallback(workflowName: string): Promise<{ nodes_installed: string[]; status: string; message?: string }> {
    // Try regular endpoint (SSE endpoint not implemented yet)
    // When backend SSE is ready, can switch to trying SSE first
    const data = await fetchApi<{
      nodes_installed: string[]
      status: string
      message?: string
      failed?: Array<{ node_id: string; error: string }>
    }>(
      `/v2/comfygit/workflow/${workflowName}/install`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packages: progress.nodesToInstall
        })
      }
    )

    // Build progress completion with success/failure status
    if (progress.nodeInstallProgress) {
      progress.nodeInstallProgress.totalNodes = progress.nodesToInstall.length
      const failedMap = new Map(data.failed?.map(f => [f.node_id, f.error]) || [])

      for (let i = 0; i < progress.nodesToInstall.length; i++) {
        const nodeId = progress.nodesToInstall[i]
        const error = failedMap.get(nodeId)
        progress.nodeInstallProgress.completedNodes.push({
          node_id: nodeId,
          success: !error,
          error
        })
      }
    }

    progress.nodesInstalled = data.nodes_installed
    progress.needsRestart = data.nodes_installed.length > 0

    // Store install error summary if there were failures
    if (data.failed && data.failed.length > 0) {
      progress.installError = `${data.failed.length} package(s) failed to install`
    }

    return data
  }

  async function applyResolutionWithProgress(
    workflowName: string,
    nodeChoices: Map<string, NodeChoice>,
    modelChoices: Map<string, ModelChoice>
  ): Promise<void> {
    resetProgress()
    progress.phase = 'resolving'
    error.value = null

    if (isMockApi()) {
      // Use mock API (non-streaming fallback)
      const data = await mockApi.applyResolution(workflowName, nodeChoices, modelChoices)
      appliedResult.value = data
      progress.nodesToInstall = data.nodes_to_install
      progress.phase = 'complete'
      return
    }

    // Convert Map to plain object for JSON serialization
    const nodeChoicesObj = Object.fromEntries(nodeChoices)
    const modelChoicesObj = Object.fromEntries(modelChoices)

    try {
      // Use fetch directly for SSE streaming
      const response = await fetch(`/v2/comfygit/workflow/${workflowName}/apply-resolution-stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          node_choices: nodeChoicesObj,
          model_choices: modelChoicesObj
        })
      })

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
      }

      if (!response.body) {
        throw new Error('No response body')
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })

        // Process complete SSE events
        const events = buffer.split('\n\n')
        buffer = events.pop() || '' // Keep incomplete event in buffer

        for (const eventStr of events) {
          if (!eventStr.trim()) continue

          // Parse SSE format: "event: type\ndata: {...}"
          const lines = eventStr.split('\n')
          let eventType = ''
          let eventData = ''

          for (const line of lines) {
            if (line.startsWith('event: ')) {
              eventType = line.slice(7)
            } else if (line.startsWith('data: ')) {
              eventData = line.slice(6)
            }
          }

          if (!eventData) continue

          try {
            const data = JSON.parse(eventData)
            handleProgressEvent(eventType, data)
          } catch (parseErr) {
            console.warn('Failed to parse SSE event:', parseErr)
          }
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      error.value = errorMessage
      progress.error = errorMessage
      progress.phase = 'error'
      throw err
    }
  }

  function handleProgressEvent(eventType: string, data: Record<string, unknown>) {
    switch (eventType) {
      case 'batch_start':
        progress.phase = 'downloading'
        progress.totalFiles = data.total as number
        break

      case 'file_start':
        progress.currentFile = data.filename as string
        progress.currentFileIndex = data.index as number
        progress.bytesDownloaded = 0
        progress.bytesTotal = undefined
        break

      case 'file_progress':
        progress.bytesDownloaded = data.downloaded as number
        progress.bytesTotal = data.total as number | undefined
        break

      case 'file_complete':
        progress.completedFiles.push({
          filename: data.filename as string,
          success: data.success as boolean,
          error: data.error as string | undefined
        })
        break

      case 'batch_complete':
        // All downloads done
        break

      case 'done':
        progress.nodesToInstall = (data.nodes_to_install as string[]) || []
        if (data.download_results) {
          // Update completed files with full info
          progress.completedFiles = (data.download_results as Array<{
            filename: string
            success: boolean
            error?: string
            reused?: boolean
          }>)
        }
        progress.phase = 'complete'
        break

      case 'error':
        progress.error = data.message as string
        progress.phase = 'error'
        error.value = data.message as string
        break
    }
  }

  /**
   * Queue models for async download (non-blocking).
   * Adds to global download queue and returns immediately.
   */
  function queueModelDownloads(
    workflowName: string,
    models: Array<{ filename: string; url: string; target_path: string | null; size?: number }>
  ) {
    const { addToQueue } = useModelDownloadQueue()

    const items = models
      .filter(m => m.url && m.target_path)
      .map(m => ({
        workflow: workflowName,
        filename: m.filename,
        url: m.url,
        targetPath: m.target_path!,
        size: m.size || 0,
        type: 'model'
      }))

    if (items.length > 0) {
      addToQueue(items)
    }

    return items.length
  }

  return {
    // State
    result,
    appliedResult,
    searchResults,
    modelSearchResults,
    isLoading,
    error,
    progress,

    // Methods
    analyzeWorkflow,
    applyResolution,
    applyResolutionWithProgress,
    installNodes,
    searchNodes,
    searchModels,
    resetProgress,
    queueModelDownloads
  }
}
