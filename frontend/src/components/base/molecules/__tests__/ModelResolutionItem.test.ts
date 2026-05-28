import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ModelResolutionItem from '../ModelResolutionItem.vue'

describe('ModelResolutionItem', () => {
  it('renders unresolved model context and actions', () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'flux_dev.safetensors',
        nodeType: 'CheckpointLoader',
        status: 'not-found',
        statusLabel: 'Not Found'
      }
    })

    expect(wrapper.text()).toContain('Used by: CheckpointLoader')
    expect(wrapper.text()).toContain('Not Found')
    expect(wrapper.text()).toContain('Model not found in workspace')
    expect(wrapper.text()).toContain('Find Source')
    expect(wrapper.text()).toContain('Search Index')
    expect(wrapper.text()).toContain('Mark Optional')
  })

  it('displays multiple candidate options', () => {
    const options = [
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

    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'sdxl_model.safetensors',
        nodeType: 'CheckpointLoader',
        hasMultipleOptions: true,
        options,
        status: 'ambiguous',
        statusLabel: '2 matches'
      }
    })

    const optionCards = wrapper.findAll('.option-card')
    expect(optionCards).toHaveLength(2)
    expect(wrapper.text()).toContain('sdxl_base_1.0.safetensors')
    expect(wrapper.text()).toContain('6.05 GB')
    expect(wrapper.text()).toContain('checkpoints')
  })

  it('renders candidate inputs for selecting an option', () => {
    const options = [
      {
        model: {
          filename: 'option1.safetensors',
          hash: 'abc',
          size: 100,
          category: 'checkpoints',
          relative_path: 'checkpoints/option1.safetensors'
        },
        match_confidence: 0.9,
        match_type: 'exact'
      }
    ]

    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'model.safetensors',
        nodeType: 'CheckpointLoader',
        hasMultipleOptions: true,
        options
      }
    })

    expect(wrapper.find('input[type="radio"]').exists()).toBe(true)
  })

  it('highlights the selected candidate option', () => {
    const options = [
      {
        model: {
          filename: 'option1.safetensors',
          hash: 'abc',
          size: 100,
          category: 'checkpoints',
          relative_path: 'checkpoints/option1.safetensors'
        },
        match_confidence: 0.9,
        match_type: 'exact'
      },
      {
        model: {
          filename: 'option2.safetensors',
          hash: 'def',
          size: 200,
          category: 'checkpoints',
          relative_path: 'checkpoints/option2.safetensors'
        },
        match_confidence: 0.8,
        match_type: 'fuzzy'
      }
    ]

    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'model.safetensors',
        nodeType: 'CheckpointLoader',
        hasMultipleOptions: true,
        options,
        selectedOptionIndex: 1
      }
    })

    expect(wrapper.findAll('.option-card')[1].classes()).toContain('selected')
  })

  it('renders existing choices as resolved', () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'model.safetensors',
        nodeType: 'CheckpointLoader',
        status: 'select',
        statusLabel: 'Selected',
        choice: {
          action: 'select',
          selected_model: {
            filename: 'model.safetensors',
            hash: 'abc'
          }
        }
      }
    })

    expect(wrapper.classes()).toContain('resolved')
    expect(wrapper.text()).toContain('Change Selection')
  })
})
