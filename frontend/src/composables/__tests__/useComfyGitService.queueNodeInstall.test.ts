import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useComfyGitService } from '../useComfyGitService'

function okResponse() {
  return {
    ok: true,
    status: 200,
    text: async () => ''
  }
}

describe('useComfyGitService queueNodeInstall', () => {
  beforeEach(() => {
    ;(window as any).app = {
      api: {
        fetchApi: vi.fn().mockResolvedValue(okResponse())
      }
    }
  })

  it('queues registry installs without git source fields', async () => {
    const svc = useComfyGitService()

    const result = await svc.queueNodeInstall({
      id: 'kj-nodes',
      version: '1.2.3',
      selected_version: '1.2.3',
      repository: 'https://github.com/kijai/ComfyUI-KJNodes'
    })

    const calls = (window as any).app.api.fetchApi.mock.calls
    expect(calls[0][0]).toBe('/v2/manager/queue/task')
    expect(calls[1][0]).toBe('/v2/manager/queue/start')
    expect(result.ui_id).toBeTruthy()

    const body = JSON.parse(calls[0][1].body)
    expect(body.kind).toBe('install')
    expect(body.params.id).toBe('kj-nodes')
    expect(body.params.version).toBe('1.2.3')
    expect(body.params.selected_version).toBe('1.2.3')
    expect(body.params.install_source).toBeUndefined()
    expect(body.params.repository).toBeUndefined()
  })

  it('queues explicit git installs with install_source and repository', async () => {
    const svc = useComfyGitService()

    await svc.queueNodeInstall({
      id: 'kj-nodes',
      repository: 'https://github.com/kijai/ComfyUI-KJNodes',
      install_source: 'git'
    })

    const calls = (window as any).app.api.fetchApi.mock.calls
    const body = JSON.parse(calls[0][1].body)
    expect(body.params.id).toBe('kj-nodes')
    expect(body.params.version).toBe('latest')
    expect(body.params.selected_version).toBe('latest')
    expect(body.params.install_source).toBe('git')
    expect(body.params.repository).toBe('https://github.com/kijai/ComfyUI-KJNodes')
  })

  it('runs beforeQueueStart hook before queue start request', async () => {
    const callOrder: string[] = []
    ;(window as any).app.api.fetchApi = vi.fn().mockImplementation(async (endpoint: string) => {
      callOrder.push(endpoint)
      return okResponse()
    })
    const beforeQueueStart = vi.fn().mockImplementation((uiId: string) => {
      expect(uiId).toBeTruthy()
      callOrder.push('beforeQueueStart')
    })

    const svc = useComfyGitService()
    await svc.queueNodeInstall(
      {
        id: 'kj-nodes'
      },
      {
        beforeQueueStart
      }
    )

    expect(beforeQueueStart).toHaveBeenCalledTimes(1)
    expect(callOrder).toEqual([
      '/v2/manager/queue/task',
      'beforeQueueStart',
      '/v2/manager/queue/start'
    ])
  })

  it('throws when queue start request fails', async () => {
    const fetchApi = vi.fn()
      .mockResolvedValueOnce(okResponse())
      .mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: async () => ({ error: 'Queue start failed' }),
        text: async () => '{"error":"Queue start failed"}'
      })
    ;(window as any).app.api.fetchApi = fetchApi

    const svc = useComfyGitService()
    await expect(svc.queueNodeInstall({
      id: 'kj-nodes'
    })).rejects.toThrow('Queue start failed')

    expect(fetchApi).toHaveBeenCalledTimes(2)
    expect(fetchApi.mock.calls[0][0]).toBe('/v2/manager/queue/task')
    expect(fetchApi.mock.calls[1][0]).toBe('/v2/manager/queue/start')
  })
})
