import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useComfyGitService } from '../useComfyGitService'

describe('useComfyGitService update notice APIs', () => {
  beforeEach(() => {
    ;(window as any).app = {
      api: {
        fetchApi: vi.fn()
      }
    }
  })

  it('calls GET /v2/comfygit/update-check', async () => {
    const payload = {
      current_version: '0.0.20',
      latest_version: '0.0.21',
      update_available: true,
      release_url: 'https://example.com',
      changelog_summary: 'Fixes',
      checked_at: '2026-02-10T00:00:00Z'
    }

    ;(window as any).app.api.fetchApi.mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(payload)
    })

    const svc = useComfyGitService()
    const res = await svc.getUpdateCheck()

    expect((window as any).app.api.fetchApi).toHaveBeenCalledWith('/v2/comfygit/update-check', undefined)
    expect(res.latest_version).toBe('0.0.21')
    expect(res.update_available).toBe(true)
  })

  it('calls POST /v2/comfygit/update', async () => {
    const payload = {
      status: 'success',
      changed: true,
      old_version: '0.0.20',
      new_version: '0.0.21',
      message: 'Updated',
      restart_required: true,
      manual_instructions: null
    }

    ;(window as any).app.api.fetchApi.mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(payload)
    })

    const svc = useComfyGitService()
    const res = await svc.updateManager()

    expect((window as any).app.api.fetchApi).toHaveBeenCalledWith('/v2/comfygit/update', { method: 'POST' })
    expect(res.status).toBe('success')
    expect(res.restart_required).toBe(true)
  })
})

describe('useComfyGitService lifecycle safety APIs', () => {
  beforeEach(() => {
    ;(window as any).app = {
      api: {
        fetchApi: vi.fn()
      }
    }
  })

  it('syncs manually with workflow preservation enabled by default', async () => {
    ;(window as any).app.api.fetchApi.mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify({
        status: 'success',
        nodes_installed: [],
        nodes_removed: [],
        errors: [],
        message: 'Sync completed'
      })
    })

    const svc = useComfyGitService()
    await svc.syncEnvironmentManually()

    expect((window as any).app.api.fetchApi).toHaveBeenCalledWith('/v2/comfygit/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model_strategy: 'skip',
        remove_extra_nodes: true,
        preserve_workflows: true
      })
    })
  })

  it('captures a dotted saved workflow name through the workflow capture endpoint', async () => {
    ;(window as any).app.api.fetchApi.mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify({
        status: 'success',
        workflow: 'LTX-2.3_-_FML2V_First_Middle_Last_Frame_guider',
        path: '.cec/workflows/LTX-2.3_-_FML2V_First_Middle_Last_Frame_guider.json'
      })
    })

    const svc = useComfyGitService()
    const result = await svc.captureWorkflow('LTX-2.3_-_FML2V_First_Middle_Last_Frame_guider.json')

    expect((window as any).app.api.fetchApi).toHaveBeenCalledWith('/v2/comfygit/workflow/capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'LTX-2.3_-_FML2V_First_Middle_Last_Frame_guider.json' })
    })
    expect(result.workflow).toBe('LTX-2.3_-_FML2V_First_Middle_Last_Frame_guider')
  })

  it('loads bundled status without forcing deep refresh by default', async () => {
    const payload = {
      status: { environment: 'test-env' },
      lifecycle_status: { environment_name: 'test-env' }
    }
    ;(window as any).app.api.fetchApi.mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(payload)
    })

    const svc = useComfyGitService()
    const result = await svc.getStatusBundle({ includeReadiness: false })

    expect((window as any).app.api.fetchApi).toHaveBeenCalledWith(
      '/v2/comfygit/status_bundle?include_readiness=false',
      undefined
    )
    expect(result).toStrictEqual(payload)
  })
})
