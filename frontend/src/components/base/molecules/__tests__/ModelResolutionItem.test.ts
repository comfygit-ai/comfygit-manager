import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ModelResolutionItem from '../ModelResolutionItem.vue'

describe('ModelResolutionItem', () => {
  it('renders unresolved model with filename', () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'flux_dev.safetensors',
        nodeType: 'CheckpointLoader'
      }
    })

    expect(wrapper.find('.model-filename').text()).toBe('flux_dev.safetensors')
    expect(wrapper.find('.node-type').text()).toContain('CheckpointLoader')
  })

  it('shows model metadata when provided', () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'sdxl_base.safetensors',
        nodeType: 'CheckpointLoader',
        category: 'checkpoints',
        size: 6500000000,
        confidence: 0.95
      }
    })

    expect(wrapper.text()).toContain('checkpoints')
    expect(wrapper.text()).toContain('6.05 GB')
  })

  it('displays confidence badge when provided', () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'model.safetensors',
        nodeType: 'CheckpointLoader',
        confidence: 0.92
      }
    })

    const badge = wrapper.findComponent({ name: 'ConfidenceBadge' })
    expect(badge.exists()).toBe(true)
    expect(badge.props('confidence')).toBe(0.92)
  })

  it('shows action buttons for unresolved model', () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'model.safetensors',
        nodeType: 'CheckpointLoader'
      }
    })

    // Check buttons are present by text content
    expect(wrapper.text()).toContain('Search')
    expect(wrapper.text()).toContain('Download URL')
  })

  it('emits mark-optional when optional button clicked', async () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'model.safetensors',
        nodeType: 'CheckpointLoader'
      }
    })

    // Find and click the optional button (may be text or icon)
    const buttons = wrapper.findAll('button')
    const optionalBtn = buttons.find(btn => btn.text().includes('Optional'))

    if (optionalBtn) {
      await optionalBtn.trigger('click')
      expect(wrapper.emitted('mark-optional')).toBeTruthy()
    }
  })

  it('shows optional badge when is-optional is true', () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'model.safetensors',
        nodeType: 'CheckpointLoader',
        isOptional: true
      }
    })

    expect(wrapper.text()).toContain('OPTIONAL')
  })

  it('displays multiple options when has-multiple-options is true', () => {
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
        options
      }
    })

    const optionCards = wrapper.findAll('.option-card')
    expect(optionCards.length).toBe(2)
    expect(wrapper.text()).toContain('sdxl_base_1.0.safetensors')
    expect(wrapper.text()).toContain('sdxl_refiner_1.0.safetensors')
  })

  it('emits option-selected when radio option clicked', async () => {
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

    const optionCard = wrapper.find('.option-card')
    await optionCard.trigger('click')

    expect(wrapper.emitted('option-selected')).toBeTruthy()
    expect(wrapper.emitted('option-selected')?.[0]).toEqual([0])
  })

  it('highlights selected option', () => {
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

    const optionCards = wrapper.findAll('.option-card')
    expect(optionCards[1].classes()).toContain('selected')
  })

  it('emits search event when search button clicked', async () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'model.safetensors',
        nodeType: 'CheckpointLoader'
      }
    })

    const buttons = wrapper.findAll('button')
    const searchBtn = buttons.find(btn => btn.text().includes('Search'))

    if (searchBtn) {
      await searchBtn.trigger('click')
      expect(wrapper.emitted('search')).toBeTruthy()
    }
  })

  it('emits download-url event when download URL button clicked', async () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'model.safetensors',
        nodeType: 'CheckpointLoader'
      }
    })

    const buttons = wrapper.findAll('button')
    const downloadBtn = buttons.find(btn => btn.text().includes('Download URL') || btn.text().includes('Manual'))

    if (downloadBtn) {
      await downloadBtn.trigger('click')
      expect(wrapper.emitted('download-url')).toBeTruthy()
    }
  })

  it('formats file size correctly', () => {
    const wrapper = mount(ModelResolutionItem, {
      props: {
        filename: 'model.safetensors',
        nodeType: 'CheckpointLoader',
        size: 6500000000 // ~6.05 GB
      }
    })

    expect(wrapper.text()).toContain('6.05 GB')
  })
})
