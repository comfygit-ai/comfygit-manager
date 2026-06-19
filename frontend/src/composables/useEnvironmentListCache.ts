import { computed, ref } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { EnvironmentInfo } from '@/types/comfygit'

const DEFAULT_ENVIRONMENT_LIST_TTL_MS = 30_000

type EnvironmentListResponse = {
  environments: EnvironmentInfo[]
  current: string | null
  is_managed: boolean
  orchestrator_active?: boolean
  orchestrator_environment?: string | null
  is_supervised?: boolean
}

type LoadEnvironmentOptions = {
  force?: boolean
  background?: boolean
  maxAgeMs?: number
}

type InvalidateOptions = {
  clear?: boolean
}

const environments = ref<EnvironmentInfo[]>([])
const current = ref<string | null>(null)
const isManaged = ref<boolean | null>(null)
const loading = ref(false)
const refreshing = ref(false)
const error = ref<string | null>(null)
const lastRefreshError = ref<string | null>(null)
const loadedAt = ref<number | null>(null)
let inFlight: Promise<EnvironmentInfo[]> | null = null

const hasLoaded = computed(() => loadedAt.value !== null)

function messageFromError(err: unknown): string {
  return err instanceof Error ? err.message : 'Failed to load environments'
}

function isCacheFresh(maxAgeMs: number): boolean {
  return loadedAt.value !== null && Date.now() - loadedAt.value <= maxAgeMs
}

async function fetchEnvironmentList(background: boolean): Promise<EnvironmentInfo[]> {
  if (inFlight) return inFlight

  const shouldBlock = !background || !hasLoaded.value
  if (shouldBlock) {
    loading.value = true
    error.value = null
  } else {
    refreshing.value = true
    lastRefreshError.value = null
  }

  inFlight = (async () => {
    const { listEnvironments } = useComfyGitService()
    const response = await listEnvironments() as EnvironmentListResponse
    environments.value = response.environments || []
    current.value = response.current ?? environments.value.find((env) => env.is_current)?.name ?? null
    isManaged.value = response.is_managed
    loadedAt.value = Date.now()
    error.value = null
    lastRefreshError.value = null
    return environments.value
  })()

  try {
    return await inFlight
  } catch (err) {
    const message = messageFromError(err)
    if (shouldBlock) {
      error.value = message
    } else {
      lastRefreshError.value = message
    }
    throw err
  } finally {
    if (shouldBlock) {
      loading.value = false
    } else {
      refreshing.value = false
    }
    inFlight = null
  }
}

async function loadEnvironments(options: LoadEnvironmentOptions = {}): Promise<EnvironmentInfo[]> {
  const maxAgeMs = options.maxAgeMs ?? DEFAULT_ENVIRONMENT_LIST_TTL_MS
  const force = options.force ?? false

  if (!force && hasLoaded.value && isCacheFresh(maxAgeMs)) {
    return environments.value
  }

  const background = options.background ?? hasLoaded.value

  if (!force && background && hasLoaded.value) {
    void fetchEnvironmentList(true).catch(() => {
      // Keep warm rows visible. The error is available as lastRefreshError.
    })
    return environments.value
  }

  return fetchEnvironmentList(false)
}

function invalidateEnvironments(options: InvalidateOptions = {}) {
  loadedAt.value = null
  lastRefreshError.value = null
  if (options.clear) {
    environments.value = []
    current.value = null
    isManaged.value = null
    error.value = null
  }
}

export function useEnvironmentListCache() {
  return {
    environments,
    current,
    isManaged,
    loading,
    refreshing,
    error,
    lastRefreshError,
    loadedAt,
    hasLoaded,
    loadEnvironments,
    invalidateEnvironments
  }
}
