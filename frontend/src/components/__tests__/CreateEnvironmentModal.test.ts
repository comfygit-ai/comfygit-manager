import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import CreateEnvironmentModal from '../CreateEnvironmentModal.vue'

const getComfyUIReleases = vi.fn()
const createEnvironment = vi.fn()
const getCreateProgress = vi.fn()
const validateEnvironmentName = vi.fn()

vi.mock('@/composables/useComfyGitService', () => ({
  useComfyGitService: () => ({
    getComfyUIReleases,
    createEnvironment,
    getCreateProgress,
    validateEnvironmentName
  })
}))

function getRequiredElement<T extends Element>(selector: string): T {
  const element = document.body.querySelector(selector)
  if (!element) {
    throw new Error(`Element not found: ${selector}`)
  }
  return element as T
}

describe('CreateEnvironmentModal name validation', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    vi.useFakeTimers()
    document.body.innerHTML = ''

    getComfyUIReleases.mockReset()
    getComfyUIReleases.mockResolvedValue([{ tag_name: 'latest', name: 'Latest', published_at: '' }])
    createEnvironment.mockReset()
    getCreateProgress.mockReset()
    validateEnvironmentName.mockReset()
  })

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
    vi.useRealTimers()
  })

  it('debounces validation and shows success state for valid name', async () => {
    validateEnvironmentName.mockResolvedValue({ valid: true, name: 'my.env-1' })

    wrapper = mount(CreateEnvironmentModal, {
      attachTo: document.body
    })
    await flushPromises()

    const input = getRequiredElement<HTMLInputElement>('input.form-input')
    input.value = 'my.env-1'
    input.dispatchEvent(new Event('input'))
    await flushPromises()

    await vi.advanceTimersByTimeAsync(399)
    expect(validateEnvironmentName).not.toHaveBeenCalled()

    await vi.advanceTimersByTimeAsync(1)
    await flushPromises()

    expect(validateEnvironmentName).toHaveBeenCalledWith('my.env-1')
    expect(document.body.querySelector('.valid-indicator')).not.toBeNull()

    const createBtn = getRequiredElement<HTMLButtonElement>('button.base-btn.primary')
    expect(createBtn.disabled).toBe(false)
  })

  it('shows inline error and keeps create disabled for invalid name', async () => {
    validateEnvironmentName.mockResolvedValue({ valid: false, error: 'Invalid name format' })

    wrapper = mount(CreateEnvironmentModal, {
      attachTo: document.body
    })
    await flushPromises()

    const input = getRequiredElement<HTMLInputElement>('input.form-input')
    input.value = 'invalid-'
    input.dispatchEvent(new Event('input'))
    await flushPromises()

    await vi.advanceTimersByTimeAsync(400)
    await flushPromises()

    const error = getRequiredElement<HTMLDivElement>('.field-error')
    expect(error.textContent).toContain('Invalid name format')

    const createBtn = getRequiredElement<HTMLButtonElement>('button.base-btn.primary')
    expect(createBtn.disabled).toBe(true)
  })

  it('forces validation on enter and does not create when invalid', async () => {
    validateEnvironmentName.mockResolvedValue({ valid: false, error: 'Invalid name format' })

    wrapper = mount(CreateEnvironmentModal, {
      attachTo: document.body
    })
    await flushPromises()

    const input = getRequiredElement<HTMLInputElement>('input.form-input')
    input.value = 'invalid-'
    input.dispatchEvent(new Event('input'))
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }))
    await flushPromises()

    await vi.runAllTimersAsync()
    await flushPromises()

    expect(validateEnvironmentName).toHaveBeenCalledWith('invalid-')
    expect(createEnvironment).not.toHaveBeenCalled()

    const error = getRequiredElement<HTMLDivElement>('.field-error')
    expect(error.textContent).toContain('Invalid name format')
  })
})
