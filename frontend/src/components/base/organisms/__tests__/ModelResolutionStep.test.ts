import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ModelResolutionStep from '../ModelResolutionStep.vue'
import type { ModelChoice } from '@/types/comfygit'

describe('ModelResolutionStep', () => {
  const mockUnresolvedModel = {
    filename: 'flux_dev.safetensors',
    reference: {
      workflow: 'test_workflow',
      node_id: 'node1',
      node_type: 'CheckpointLoader',
      widget_name: 'model',
      widget_value: 'flux_dev.safetensors'
    },
    reason: 'not_found_in_index'
  }

  const mockAmbiguousModel = {
    filename: 'sdxl_model.safetensors',
    reference: {
      workflow: 'test_workflow',
      node_id: 'node2',
      node_type: 'CheckpointLoader',
      widget_name: 'model',
      widget_value: 'sdxl_model.safetensors'
    },
    options: [
      {
        model: {
          filename: 'sdxl_base_1.0.safetensors',
          hash: 'abc123',
          size: 6500000000,
          category: 'checkpoints',
          relative_path: 'checkpoints/sdxl_base_1.0.safetensors'
        },
        match_confidence: 0.95,
        match_type: 'fuzzy'
      },
      {
        model: {
          filename: 'sdxl_refiner_1.0.safetensors',
          hash: 'def456',
          size: 6100000000,
          category: 'checkpoints',
          relative_path: 'checkpoints/sdxl_refiner_1.0.safetensors'
        },
        match_confidence: 0.85,
        match_type: 'fuzzy'
      }
    ]
  }

  const mockModels = [mockUnresolvedModel, mockAmbiguousModel]

  it('renders the model resolution header and resolved count', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        modelChoices: new Map()
      }
    })

    expect(wrapper.find('.step-title').text()).toBe('Resolve Missing Models')
    expect(wrapper.find('.stat-badge').text()).toBe('0/2 resolved')
  })

  it('uses an empty choices map by default', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels
      }
    })

    expect(wrapper.find('.stat-badge').text()).toBe('0/2 resolved')
    expect(wrapper.findComponent({ name: 'ModelResolutionItem' }).exists()).toBe(true)
  })

  it('shows the current model in the item navigator and item card', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        modelChoices: new Map()
      }
    })

    expect(wrapper.text()).toContain('flux_dev.safetensors')
    const item = wrapper.findComponent({ name: 'ModelResolutionItem' })
    expect(item.props('filename')).toBe('flux_dev.safetensors')
    expect(item.props('status')).toBe('not-found')
  })

  it('passes ambiguous candidates to the item card when navigated', async () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        modelChoices: new Map()
      }
    })

    await wrapper.findAll('.nav-arrow')[1].trigger('click')

    const item = wrapper.findComponent({ name: 'ModelResolutionItem' })
    expect(item.props('filename')).toBe('sdxl_model.safetensors')
    expect(item.props('hasMultipleOptions')).toBe(true)
    expect(item.props('options')).toHaveLength(2)
    expect(item.props('status')).toBe('ambiguous')
  })

  it('counts selected choices as resolved', () => {
    const modelChoices = new Map<string, ModelChoice>([
      ['flux_dev.safetensors', { action: 'optional' }]
    ])

    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        modelChoices
      }
    })

    expect(wrapper.find('.stat-badge').text()).toBe('1/2 resolved')
    expect(wrapper.findComponent({ name: 'ModelResolutionItem' }).props('choice')).toEqual({ action: 'optional' })
  })

  it('derives a suggested model category for source lookup', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        modelChoices: new Map()
      },
    })

    const item = wrapper.findComponent({ name: 'ModelResolutionItem' })
    expect(item.props('nodeType')).toBe('CheckpointLoader')
  })

})
