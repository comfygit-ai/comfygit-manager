import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { h } from 'vue'
import TokenConfigModal from '../TokenConfigModal.vue'

const { updateConfig } = vi.hoisted(() => ({ updateConfig: vi.fn() }))
vi.mock('@/composables/useComfyGitService', () => ({
  useComfyGitService: () => ({ updateConfig })
}))

function render() {
  return mount(TokenConfigModal, {
    props: { provider: 'huggingface', currentTokenMask: '****' },
    global: {
      stubs: {
        BaseModal: { setup: (_, { slots }) => () => h('div', [slots.body?.(), slots.footer?.()]) },
        BaseButton: { setup: (_, { slots }) => () => h('button', slots.default?.()) },
        BaseInput: {
          props: ['modelValue'], emits: ['update:modelValue'],
          setup: (props, { emit }) => () => h('input', { value: props.modelValue, onInput: (event) => emit('update:modelValue', event.target.value) })
        }
      }
    }
  })
}

describe('TokenConfigModal credential errors', () => {
  beforeEach(() => { updateConfig.mockReset() })

  it('keeps the dialog open and displays secure-store save failure', async () => {
    updateConfig.mockRejectedValue(new Error('Unlock the OS secure store or use HF_TOKEN'))
    const wrapper = render()
    await wrapper.get('input').setValue('hf_test_token')
    await wrapper.findAll('button').find(button => button.text() === 'Save Token')!.trigger('click')
    await flushPromises()
    expect(updateConfig).toHaveBeenCalledWith({ huggingface_token: 'hf_test_token' })
    expect(wrapper.get('[role="alert"]').text()).toContain('HF_TOKEN')
    expect(wrapper.emitted('saved')).toBeUndefined()
    expect(wrapper.emitted('close')).toBeUndefined()
  })

  it('does not report a failed clear as successful', async () => {
    updateConfig.mockRejectedValue(new Error('Secure store is locked'))
    const wrapper = render()
    await wrapper.findAll('button').find(button => button.text() === 'Clear Saved Token')!.trigger('click')
    await flushPromises()
    expect(updateConfig).toHaveBeenCalledWith({ huggingface_token: null })
    expect(wrapper.get('[role="alert"]').text()).toContain('locked')
    expect(wrapper.emitted('cleared')).toBeUndefined()
    expect(wrapper.emitted('close')).toBeUndefined()
  })
})
