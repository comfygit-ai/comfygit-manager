import { flushPromises } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useEnvironmentListCache } from '../useEnvironmentListCache'

function apiResponse(payload: unknown): Response {
  return {
    ok: true,
    status: 200,
    text: async () => JSON.stringify(payload)
  } as Response
}

function environmentPayload(names: string[]) {
  return {
    environments: names.map((name, index) => ({
      name,
      is_current: index === 0,
      path: `/workspace/environments/${name}`,
      created_at: null,
      workflow_count: 0,
      node_count: 0,
      model_count: 0,
      current_branch: 'main'
    })),
    current: names[0] ?? null,
    is_managed: true,
    orchestrator_active: true,
    orchestrator_environment: names[0] ?? null,
    is_supervised: true
  }
}

function deferred<T>() {
  let resolve!: (value: T) => void
  let reject!: (reason?: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

describe('useEnvironmentListCache', () => {
  beforeEach(() => {
    const cache = useEnvironmentListCache()
    cache.invalidateEnvironments({ clear: true })
    ;(window as any).app = {
      api: {
        fetchApi: vi.fn()
      }
    }
  })

  it('reuses a fresh cached environment list', async () => {
    const fetchApi = (window as any).app.api.fetchApi
    fetchApi.mockResolvedValueOnce(apiResponse(environmentPayload(['alpha', 'beta'])))

    const cache = useEnvironmentListCache()
    const first = await cache.loadEnvironments({ force: true })
    const second = await cache.loadEnvironments()

    expect(fetchApi).toHaveBeenCalledTimes(1)
    expect(first.map((env) => env.name)).toStrictEqual(['alpha', 'beta'])
    expect(second.map((env) => env.name)).toStrictEqual(['alpha', 'beta'])
    expect(cache.environments.value.map((env) => env.name)).toStrictEqual(['alpha', 'beta'])
  })

  it('keeps warm rows visible while refreshing stale data in the background', async () => {
    const fetchApi = (window as any).app.api.fetchApi
    fetchApi.mockResolvedValueOnce(apiResponse(environmentPayload(['alpha'])))

    const cache = useEnvironmentListCache()
    await cache.loadEnvironments({ force: true })

    const nextResponse = deferred<Response>()
    fetchApi.mockReturnValueOnce(nextResponse.promise)

    const staleRows = await cache.loadEnvironments({ maxAgeMs: -1 })

    expect(fetchApi).toHaveBeenCalledTimes(2)
    expect(staleRows.map((env) => env.name)).toStrictEqual(['alpha'])
    expect(cache.refreshing.value).toBe(true)
    expect(cache.loading.value).toBe(false)

    nextResponse.resolve(apiResponse(environmentPayload(['alpha', 'gamma'])))
    await flushPromises()

    expect(cache.refreshing.value).toBe(false)
    expect(cache.environments.value.map((env) => env.name)).toStrictEqual(['alpha', 'gamma'])
  })

  it('keeps a loaded empty list visible while checking for new environments', async () => {
    const fetchApi = (window as any).app.api.fetchApi
    fetchApi.mockResolvedValueOnce(apiResponse(environmentPayload([])))

    const cache = useEnvironmentListCache()
    await cache.loadEnvironments({ force: true })

    const nextResponse = deferred<Response>()
    fetchApi.mockReturnValueOnce(nextResponse.promise)

    const staleRows = await cache.loadEnvironments({ maxAgeMs: -1 })

    expect(staleRows).toStrictEqual([])
    expect(cache.refreshing.value).toBe(true)
    expect(cache.loading.value).toBe(false)

    nextResponse.resolve(apiResponse(environmentPayload(['created-later'])))
    await flushPromises()

    expect(cache.environments.value.map((env) => env.name)).toStrictEqual(['created-later'])
  })

  it('forces a reload after explicit invalidation', async () => {
    const fetchApi = (window as any).app.api.fetchApi
    fetchApi
      .mockResolvedValueOnce(apiResponse(environmentPayload(['alpha'])))
      .mockResolvedValueOnce(apiResponse(environmentPayload(['alpha', 'beta'])))

    const cache = useEnvironmentListCache()
    await cache.loadEnvironments({ force: true })

    cache.invalidateEnvironments()
    const refreshed = await cache.loadEnvironments({ force: true })

    expect(fetchApi).toHaveBeenCalledTimes(2)
    expect(refreshed.map((env) => env.name)).toStrictEqual(['alpha', 'beta'])
    expect(cache.environments.value.map((env) => env.name)).toStrictEqual(['alpha', 'beta'])
  })
})
