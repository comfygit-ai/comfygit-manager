import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ModelResolutionStep from '../ModelResolutionStep.vue'
import type { ModelSearchResult } from '@/types/comfygit'

describe('ModelResolutionStep', () => {
  const mockUnresolvedModel = {
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

  it('renders model resolution header with progress', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 0
      }
    })

    expect(wrapper.find('.step-title').text()).toBe('Resolve Missing Models')
    expect(wrapper.find('.progress-text').text()).toBe('1 of 2')
  })

  it('shows current unresolved model', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 0
      }
    })

    const item = wrapper.findComponent({ name: 'ModelResolutionItem' })
    expect(item.exists()).toBe(true)
    expect(item.props('filename')).toBe('flux_dev.safetensors')
  })

  it('shows ambiguous model with multiple options', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 1
      }
    })

    const item = wrapper.findComponent({ name: 'ModelResolutionItem' })
    expect(item.exists()).toBe(true)
    expect(item.props('hasMultipleOptions')).toBe(true)
    expect(item.props('options')).toHaveLength(2)
  })

  it('emits next event when next button clicked', async () => {
    // Give model a hash so continue button is enabled
    const modelWithHash = { ...mockUnresolvedModel, hash: 'xyz123' }
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: [modelWithHash, mockAmbiguousModel],
        currentIndex: 0
      }
    })

    await wrapper.find('.nav-btn.next').trigger('click')
    expect(wrapper.emitted('next')).toBeTruthy()
  })

  it('emits complete event when last model and continue clicked', async () => {
    // Give ambiguous model a selected option so continue button is enabled
    const modelWithSelection = { ...mockAmbiguousModel, selected_option_index: 0 }
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: [mockUnresolvedModel, modelWithSelection],
        currentIndex: 1 // Last model
      }
    })

    await wrapper.find('.nav-btn.next').trigger('click')
    expect(wrapper.emitted('complete')).toBeTruthy()
  })

  it('emits previous event when previous button clicked', async () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 1
      }
    })

    await wrapper.find('.nav-btn.prev').trigger('click')
    expect(wrapper.emitted('previous')).toBeTruthy()
  })

  it('disables previous button on first model', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 0
      }
    })

    const prevBtn = wrapper.find('.nav-btn.prev')
    expect(prevBtn.attributes('disabled')).toBeDefined()
  })

  it('shows search panel when search triggered', async () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 0,
        showSearch: true
      }
    })

    expect(wrapper.find('.search-panel').exists()).toBe(true)
    expect(wrapper.find('.search-panel-header h4').text()).toBe('Search for Model')
  })

  it('emits search-input event when typing in search', async () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 0,
        showSearch: true
      }
    })

    const searchInput = wrapper.find('.search-input')
    await searchInput.setValue('flux')
    expect(wrapper.emitted('search-input')).toBeTruthy()
    expect(wrapper.emitted('search-input')?.[0]).toEqual(['flux'])
  })

  it('displays search results when provided', () => {
    const mockSearchResults: ModelSearchResult[] = [
      {
        filename: 'flux_dev_v1.0.safetensors',
        hash: 'xyz789',
        size: 12000000000,
        category: 'checkpoints',
        relative_path: 'checkpoints/flux_dev_v1.0.safetensors',
        match_confidence: 0.92
      }
    ]

    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 0,
        showSearch: true,
        searchResults: mockSearchResults
      }
    })

    const results = wrapper.findAll('.search-result-item')
    expect(results).toHaveLength(1)
    expect(results[0].text()).toContain('flux_dev_v1.0.safetensors')
  })

  it('emits search-result-selected when clicking search result', async () => {
    const mockSearchResults: ModelSearchResult[] = [
      {
        filename: 'flux_dev_v1.0.safetensors',
        hash: 'xyz789',
        size: 12000000000,
        category: 'checkpoints',
        relative_path: 'checkpoints/flux_dev_v1.0.safetensors',
        match_confidence: 0.92
      }
    ]

    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 0,
        showSearch: true,
        searchResults: mockSearchResults
      }
    })

    await wrapper.find('.search-result-item').trigger('click')
    expect(wrapper.emitted('search-result-selected')).toBeTruthy()
    expect(wrapper.emitted('search-result-selected')?.[0]).toEqual([mockSearchResults[0]])
  })

  it('shows manual download URL panel when triggered', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 0,
        showManualDownload: true
      }
    })

    expect(wrapper.find('.manual-download-panel').exists()).toBe(true)
    expect(wrapper.find('.manual-download-header h4').text()).toBe('Enter Download URL')
  })

  it('emits manual-download-submit with URL and path', async () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 0,
        showManualDownload: true
      }
    })

    await wrapper.find('.url-input').setValue('https://example.com/model.safetensors')
    await wrapper.find('.path-input').setValue('checkpoints/model.safetensors')
    await wrapper.find('.btn.primary').trigger('click')

    expect(wrapper.emitted('manual-download-submit')).toBeTruthy()
    expect(wrapper.emitted('manual-download-submit')?.[0]).toEqual([
      'https://example.com/model.safetensors',
      'checkpoints/model.safetensors'
    ])
  })

  it('calculates progress percentage correctly', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 0
      }
    })

    const progressBar = wrapper.find('.progress-fill')
    expect(progressBar.attributes('style')).toContain('width: 50%') // 1 of 2 = 50%
  })

  it('shows "Continue to Review" button on last model', () => {
    const wrapper = mount(ModelResolutionStep, {
      props: {
        models: mockModels,
        currentIndex: 1 // Last model
      }
    })

    const nextBtn = wrapper.find('.nav-btn.next')
    expect(nextBtn.text()).toContain('Continue to Review')
  })
})
