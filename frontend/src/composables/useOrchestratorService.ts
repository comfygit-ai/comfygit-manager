/**
 * Orchestrator Service Composable (Refactored for Remote Access)
 *
 * Uses ComfyUI API proxy routes instead of direct orchestrator connections.
 * Works with cloud proxies (RunPod, Vast.ai) and local development.
 */

export interface OrchestratorHealth {
  status: string
  pid: number
  current_env: string
  supervised: boolean
  comfyui?: {
    pid: number
    running: boolean
    uptime_seconds: number
  }
}

export interface OrchestratorStatus {
  state: string
  current_env?: string
  message?: string
  progress?: number
  target_env?: string
  source_env?: string
  error?: string
  recovery_command?: string
}

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

export function useOrchestratorService() {
  /**
   * Check orchestrator health via proxy.
   */
  async function checkHealth(): Promise<OrchestratorHealth | null> {
    try {
      return await fetchApi<OrchestratorHealth>('/v2/comfygit/orchestrator/health')
    } catch {
      return null
    }
  }

  /**
   * Get current switch status via proxy.
   * Falls back to file-based status if orchestrator unreachable.
   */
  async function getStatus(): Promise<OrchestratorStatus | null> {
    try {
      return await fetchApi<OrchestratorStatus>('/v2/comfygit/orchestrator/status')
    } catch {
      return null
    }
  }

  /**
   * Request orchestrator to restart current environment.
   */
  async function restart(): Promise<void> {
    await fetchApi('/v2/comfygit/orchestrator/restart', { method: 'POST' })
  }

  /**
   * Request orchestrator to shutdown completely.
   */
  async function kill(): Promise<void> {
    await fetchApi('/v2/comfygit/orchestrator/kill', { method: 'POST' })
  }

  return {
    checkHealth,
    getStatus,
    restart,
    kill
  }
}
