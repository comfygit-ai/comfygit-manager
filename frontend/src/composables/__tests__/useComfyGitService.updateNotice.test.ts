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

