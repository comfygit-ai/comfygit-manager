import { ref, computed, watch } from 'vue'
import type { Instance, InstancesResponse } from '@/types/comfygit'
import { mockApi, isMockApi } from '@/services/mockApi'

// Access ComfyUI's API directly (same pattern as other composables)
declare global {
  interface Window {
    app?: {
      api: {
        fetchApi: (endpoint: string, options?: RequestInit) => Promise<Response>
      }
    }
  }
}

const USE_MOCK = isMockApi()
const POLL_INTERVAL_MS = 5000

// Shared state across all consumers
const instances = ref<Instance[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
let pollIntervalId: number | null = null

/**
 * Fetch from ComfyUI API. Throws if API not available.
 */
async function fetchApi(endpoint: string, options?: RequestInit): Promise<Response> {
  if (!window.app?.api) {
    throw new Error('ComfyUI API not available')
  }
  return window.app.api.fetchApi(endpoint, options)
}

/**
 * Composable for managing deploy instances across all providers.
 * Uses shared state so multiple components see the same data.
 */
export function useDeployInstances(options?: { autoStart?: boolean }) {
  // Computed filters
  const runningInstances = computed(() =>
    instances.value.filter(i => i.status === 'running')
  )

  const deployingInstances = computed(() =>
    instances.value.filter(i => i.status === 'deploying')
  )

  const stoppedInstances = computed(() =>
    instances.value.filter(i => i.status === 'stopped')
  )

  const liveInstanceCount = computed(() =>
    runningInstances.value.length + deployingInstances.value.length
  )

  // Sorted instances: deploying first, then running, then stopped
  const sortedInstances = computed(() => {
    const order: Record<string, number> = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    }
    return [...instances.value].sort((a, b) =>
      (order[a.status] ?? 5) - (order[b.status] ?? 5)
    )
  })

  // Actions
  async function refreshInstances(): Promise<void> {
    isLoading.value = true
    error.value = null

    try {
      let data: InstancesResponse

      if (USE_MOCK) {
        data = await mockApi.getInstances()
      } else {
        const response = await fetchApi('/v2/comfygit/deploy/instances')
        if (!response.ok) {
          throw new Error(`Failed to fetch instances: ${response.status}`)
        }
        data = await response.json()
      }

      instances.value = data.instances
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      console.error('[useDeployInstances] refreshInstances error:', e)
    } finally {
      isLoading.value = false
    }
  }

  async function stopInstance(id: string): Promise<void> {
    try {
      if (USE_MOCK) {
        await mockApi.stopRunPodPod(id)
      } else {
        const response = await fetchApi(`/v2/comfygit/deploy/runpod/pods/${id}/stop`, {
          method: 'POST'
        })
        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.message || 'Failed to stop instance')
        }
      }
      // Refresh to get updated state
      await refreshInstances()
    } catch (e) {
      console.error('[useDeployInstances] stopInstance error:', e)
      throw e
    }
  }

  async function startInstance(id: string): Promise<void> {
    try {
      if (USE_MOCK) {
        await mockApi.startRunPodPod(id)
      } else {
        const response = await fetchApi(`/v2/comfygit/deploy/runpod/pods/${id}/start`, {
          method: 'POST'
        })
        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.message || 'Failed to start instance')
        }
      }
      await refreshInstances()
    } catch (e) {
      console.error('[useDeployInstances] startInstance error:', e)
      throw e
    }
  }

  async function terminateInstance(id: string): Promise<void> {
    try {
      if (USE_MOCK) {
        await mockApi.terminateRunPodPod(id)
      } else {
        const response = await fetchApi(`/v2/comfygit/deploy/runpod/pods/${id}`, {
          method: 'DELETE'
        })
        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.message || 'Failed to terminate instance')
        }
      }
      await refreshInstances()
    } catch (e) {
      console.error('[useDeployInstances] terminateInstance error:', e)
      throw e
    }
  }

  // Polling control
  function startPolling(): void {
    if (pollIntervalId) return
    pollIntervalId = window.setInterval(refreshInstances, POLL_INTERVAL_MS)
  }

  function stopPolling(): void {
    if (pollIntervalId) {
      clearInterval(pollIntervalId)
      pollIntervalId = null
    }
  }

  // Auto-start polling when deploying instances exist
  watch(deployingInstances, (deploying) => {
    if (deploying.length > 0) {
      startPolling()
    }
  }, { immediate: true })

  // Auto-start on mount if requested
  if (options?.autoStart) {
    refreshInstances()
    startPolling()
  }

  return {
    // State
    instances,
    isLoading,
    error,

    // Computed
    runningInstances,
    deployingInstances,
    stoppedInstances,
    liveInstanceCount,
    sortedInstances,

    // Actions
    refreshInstances,
    stopInstance,
    startInstance,
    terminateInstance,

    // Polling
    startPolling,
    stopPolling
  }
}
