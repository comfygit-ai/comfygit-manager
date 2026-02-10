import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import UpdateNoticeBanner from '../UpdateNoticeBanner.vue'

describe('UpdateNoticeBanner', () => {
  it('renders version and emits actions', async () => {
    const onUpdate = vi.fn()
    const onDismiss = vi.fn()
    const onReleaseNotes = vi.fn()

    const wrapper = mount(UpdateNoticeBanner, {
      props: {
        info: {
          current_version: '0.0.20',
          latest_version: '0.0.21',
          update_available: true,
          release_url: 'https://example.com/release',
          changelog_summary: 'Fixes',
          checked_at: '2026-02-10T00:00:00Z'
        },
        updating: false,
        onUpdate,
        onDismiss,
        onReleaseNotes
      }
    })

    expect(wrapper.text()).toContain('ComfyGit Manager v0.0.21 available')
    expect(wrapper.text()).toContain('Fixes')

    const updateBtn = wrapper.get('button.update-banner__btn.primary')
    expect((updateBtn.element as HTMLButtonElement).disabled).toBe(false)
    await updateBtn.trigger('click')
    expect(onUpdate).toHaveBeenCalledTimes(1)

    await wrapper.findAll('button.update-banner__btn')[1].trigger('click')
    expect(onReleaseNotes).toHaveBeenCalledTimes(1)

    await wrapper.findAll('button.update-banner__btn')[2].trigger('click')
    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it('hides release notes button when release_url is null', () => {
    const wrapper = mount(UpdateNoticeBanner, {
      props: {
        info: {
          current_version: '0.0.20',
          latest_version: '0.0.21',
          update_available: true,
          release_url: null,
          changelog_summary: null,
          checked_at: null
        }
      }
    })

    expect(wrapper.text()).toContain('ComfyGit Manager v0.0.21 available')
    expect(wrapper.text()).not.toContain('Release notes')
  })
})
