import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import MissingResourcesPopup from '../MissingResourcesPopup.vue'
import { useModelDownloadQueue } from '@/composables/useModelDownloadQueue'
import { useComfyGitService } from '@/composables/useComfyGitService'

vi.mock('@/composables/useModelDownloadQueue', () => ({
  useModelDownloadQueue: vi.fn()
}))

vi.mock('@/composables/useComfyGitService', () => ({
  useComfyGitService: vi.fn()
}))

describe('MissingResourcesPopup alias dedupe', () => {
  const mockQueueNodeInstall = vi.fn()
  const mockAddToQueue = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()

    vi.mocked(useComfyGitService).mockReturnValue({
      queueNodeInstall: mockQueueNodeInstall.mockResolvedValue({ ui_id: 'ui-1' })
    } as any)

    vi.mocked(useModelDownloadQueue).mockReturnValue({
      addToQueue: mockAddToQueue
    } as any)

    ;(window as any).app = {
      api: {
        addEventListener: vi.fn(),
        removeEventListener: vi.fn()
      }
    }

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue({
          workflow: 'unsaved',
          package_aliases: {
            comfyui_ryanontheinside: 'comfyui_ryanonyheinside'
          },
          nodes: {
            resolved: [],
            unresolved: [],
            version_gated: [],
            uninstallable: [
              {
                reference: { node_type: 'AudioInfo', workflow: 'unsaved' },
                package: {
                  package_id: 'comfyui_ryanontheinside',
                  title: 'Ryan Legacy',
                  repository: 'https://github.com/ryanontheinside/ComfyUI_RyanOnTheInside',
                  latest_version: '2.0.2'
                },
                match_confidence: 1.0,
                match_type: 'auto_selected',
                is_installed: false,
                reason: 'no_installable_package_version'
              },
              {
                reference: { node_type: 'AudioInfo', workflow: 'unsaved' },
                package: {
                  package_id: 'comfyui_ryanonyheinside',
                  title: 'Ryan Canonical',
                  repository: 'https://github.com/ryanontheinside/ComfyUI_RyanOnTheInside',
                  latest_version: '2.2.0'
                },
                match_confidence: 1.0,
                match_type: 'auto_selected',
                is_installed: false,
                reason: 'no_installable_package_version'
              }
            ],
            ambiguous: []
          },
          models: {
            resolved: [],
            unresolved: [],
            ambiguous: []
          },
          stats: {
            total_nodes: 2,
            total_models: 0,
            download_intents: 0,
            nodes_needing_installation: 0,
            packages_needing_installation: 0,
            needs_user_input: false,
            is_fully_resolved: false,
            models_with_category_mismatch: 0
          }
        })
      }) as any
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    document.body.innerHTML = ''
  })

  function mountPopup() {
    return mount(MissingResourcesPopup, {
      attachTo: document.body,
      global: {
        stubs: {
          BaseModal: {
            template: '<div><slot name="body" /><slot name="footer" /></div>'
          },
          BaseButton: {
            template: '<button @click="$emit(\'click\')"><slot /></button>'
          },
          BaseCheckbox: {
            template: '<label><input type="checkbox" /><slot /></label>'
          },
          MissingResourcesDetailModal: true
        }
      }
    })
  }

  it('dedupes community packages by canonical package id and queues canonical install', async () => {
    const wrapper = mountPopup()
    await flushPromises()

    window.dispatchEvent(
      new CustomEvent('comfygit:workflow-loaded', {
        detail: { workflow: { id: 'wf-audio' } }
      })
    )
    await flushPromises()
    await flushPromises()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect((document.body.textContent || '')).toContain('Community-Mapped Packages (1)')
    expect(document.body.querySelectorAll('.community-info')).toHaveLength(1)

    const installButton = Array.from(document.body.querySelectorAll('button'))
      .find(btn => (btn.textContent || '').trim() === 'Install')

    expect(installButton).toBeDefined()
    ;(installButton as HTMLButtonElement).click()
    await flushPromises()

    expect(mockQueueNodeInstall).toHaveBeenCalledTimes(1)
    expect(mockQueueNodeInstall).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'comfyui_ryanonyheinside'
      })
    )

    wrapper.unmount()
  })
})
