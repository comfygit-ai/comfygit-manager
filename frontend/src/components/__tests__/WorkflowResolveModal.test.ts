import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import WorkflowResolveModal from '../WorkflowResolveModal.vue'
import { useWorkflowResolution } from '@/composables/useWorkflowResolution'

// Mock the composable
vi.mock('@/composables/useWorkflowResolution', () => ({
  useWorkflowResolution: vi.fn()
}))

// Mock the comfygit service
vi.mock('@/composables/useComfyGitService', () => ({
  useComfyGitService: vi.fn(() => ({
    resolveWorkflow: vi.fn(),
    installWorkflowDeps: vi.fn()
  }))
}))

describe('WorkflowResolveModal - Interactive Wizard Flow', () => {
  const mockAnalysisResult = {
    workflow: 'test_workflow',
    nodes: {
      resolved: [
        {
          reference: { node_type: 'KSampler', workflow: 'test_workflow' },
          package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
          match_confidence: 1.0,
          match_type: 'builtin',
          is_installed: true
        }
      ],
      unresolved: [
        {
          reference: {
            node_type: 'CustomUpscaler',
            workflow: 'test_workflow',
            node_id: 'node1'
          },
          reason: 'not_found_in_registry'
        }
      ],
      ambiguous: [
        {
          reference: {
            node_type: 'FluxLoader',
            workflow: 'test_workflow',
            node_id: 'node2'
          },
          options: [
            {
              package: { package_id: 'flux-comfy', title: 'Flux for ComfyUI' },
              match_confidence: 0.92,
              match_type: 'fuzzy',
              is_installed: false
            },
            {
              package: { package_id: 'flux-ultimate', title: 'Ultimate Flux' },
              match_confidence: 0.85,
              match_type: 'fuzzy',
              is_installed: false
            }
          ]
        }
      ]
    },
    models: {
      resolved: [],
      unresolved: [
        {
          reference: {
            workflow: 'test_workflow',
            node_id: 'node3',
            node_type: 'CheckpointLoader',
            widget_name: 'model',
            widget_value: 'flux_dev.safetensors'
          },
          reason: 'not_found_in_index'
        }
      ],
      ambiguous: []
    },
    stats: {
      total_nodes: 3,
      total_models: 1,
      nodes_resolved: 1,
      nodes_unresolved: 1,
      nodes_ambiguous: 1,
      models_resolved: 0,
      models_unresolved: 1,
      models_ambiguous: 0,
      needs_user_input: true
    }
  }

  beforeEach(() => {
    vi.clearAllMocks()

    // Create a div for teleport target
    const el = document.createElement('div')
    el.id = 'modal-target'
    document.body.appendChild(el)

    // Setup default mock implementation
    const mockAnalyzeWorkflow = vi.fn().mockResolvedValue(mockAnalysisResult)
    const mockApplyResolution = vi.fn().mockResolvedValue({
      status: 'success',
      nodes_to_install: ['flux-comfy'],
      models_to_download: []
    })
    const mockSearchNodes = vi.fn().mockResolvedValue([])
    const mockSearchModels = vi.fn().mockResolvedValue([])

    vi.mocked(useWorkflowResolution).mockReturnValue({
      analyzeWorkflow: mockAnalyzeWorkflow,
      applyResolution: mockApplyResolution,
      searchNodes: mockSearchNodes,
      searchModels: mockSearchModels,
      loading: { value: false },
      error: { value: null }
    } as any)
  })

  afterEach(() => {
    // Clean up
    document.body.innerHTML = ''
  })

  describe('Wizard Flow', () => {
    it('should show analysis step initially', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        },
        global: {
          stubs: {
            BaseModal: false,
            ResolutionStepper: false,
            NodeResolutionStep: true,
            ModelResolutionStep: true
          }
        }
      })

      // Wait for component to mount and call analysis
      await flushPromises()
      await wrapper.vm.$nextTick()

      // Should show stepper with analysis as current step
      const stepper = wrapper.findComponent({ name: 'ResolutionStepper' })
      expect(stepper.exists()).toBe(true)
      expect(stepper.props('currentStep')).toBe('analysis')
    })

    it('should display analysis results with stats', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        },
        attachTo: document.body
      })

      await flushPromises()
      await wrapper.vm.$nextTick()

      const analysisText = document.body.textContent || ''
      expect(analysisText).toContain('1')
      expect(analysisText).toContain('unresolved')
      expect(analysisText).toContain('ambiguous')
      expect(analysisText).toContain('resolved')

      wrapper.unmount()
    })

    it('should show "Continue" button to proceed to node resolution', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await flushPromises()
      await wrapper.vm.$nextTick()

      const buttons = wrapper.findAll('button')
      const continueBtn = buttons.find(btn => btn.text().includes('Continue'))
      expect(continueBtn).toBeDefined()
      expect(continueBtn?.attributes('disabled')).toBeUndefined()
    })

    it('should transition to node resolution step when clicking Continue from analysis', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Click Continue button
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      // Should now be on nodes step
      const stepper = wrapper.findComponent({ name: 'ResolutionStepper' })
      expect(stepper.props('currentStep')).toBe('nodes')
    })

    it('should show NodeResolutionStep component during nodes phase', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Move to nodes step
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      // Should show NodeResolutionStep
      const nodeStep = wrapper.findComponent({ name: 'NodeResolutionStep' })
      expect(nodeStep.exists()).toBe(true)
      expect(nodeStep.props('nodes')).toHaveLength(2) // 1 unresolved + 1 ambiguous
    })

    it('should transition to model resolution after completing nodes', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Move to nodes step
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      // Complete node resolution
      const nodeStep = wrapper.findComponent({ name: 'NodeResolutionStep' })
      nodeStep.vm.$emit('complete')
      await wrapper.vm.$nextTick()

      // Should now be on models step
      const stepper = wrapper.findComponent({ name: 'ResolutionStepper' })
      expect(stepper.props('currentStep')).toBe('models')
    })

    it('should show ModelResolutionStep component during models phase', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Navigate to models step
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()
      const nodeStep = wrapper.findComponent({ name: 'NodeResolutionStep' })
      nodeStep.vm.$emit('complete')
      await wrapper.vm.$nextTick()

      // Should show ModelResolutionStep
      const modelStep = wrapper.findComponent({ name: 'ModelResolutionStep' })
      expect(modelStep.exists()).toBe(true)
      expect(modelStep.props('models')).toHaveLength(1)
    })

    it('should transition to review step after completing models', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Navigate through wizard
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()
      wrapper.findComponent({ name: 'NodeResolutionStep' }).vm.$emit('complete')
      await wrapper.vm.$nextTick()
      wrapper.findComponent({ name: 'ModelResolutionStep' }).vm.$emit('complete')
      await wrapper.vm.$nextTick()

      // Should be on review step
      const stepper = wrapper.findComponent({ name: 'ResolutionStepper' })
      expect(stepper.props('currentStep')).toBe('review')
    })

    it('should show summary of user choices in review step', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Navigate to review
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()
      wrapper.findComponent({ name: 'NodeResolutionStep' }).vm.$emit('complete')
      await wrapper.vm.$nextTick()
      wrapper.findComponent({ name: 'ModelResolutionStep' }).vm.$emit('complete')
      await wrapper.vm.$nextTick()

      // Should show review content
      const reviewText = wrapper.text()
      expect(reviewText).toContain('Review')
      expect(reviewText).toContain('Nodes')
      expect(reviewText).toContain('Models')
    })

    it('should allow going back to previous steps', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Navigate to models step
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()
      wrapper.findComponent({ name: 'NodeResolutionStep' }).vm.$emit('complete')
      await wrapper.vm.$nextTick()

      // Click previous
      const modelStep = wrapper.findComponent({ name: 'ModelResolutionStep' })
      modelStep.vm.$emit('previous')
      await wrapper.vm.$nextTick()

      // Should go back to nodes
      const stepper = wrapper.findComponent({ name: 'ResolutionStepper' })
      expect(stepper.props('currentStep')).toBe('nodes')
    })

    it('should track completed steps', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Navigate through steps
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      const stepper = wrapper.findComponent({ name: 'ResolutionStepper' })
      expect(stepper.props('completedSteps')).toContain('analysis')
    })

    it('should call applyResolution when applying from review step', async () => {
      const mockApplyResolution = vi.fn().mockResolvedValue({
        status: 'success',
        nodes_to_install: [],
        models_to_download: []
      })

      vi.mocked(useWorkflowResolution).mockReturnValue({
        analyzeWorkflow: vi.fn().mockResolvedValue(mockAnalysisResult),
        applyResolution: mockApplyResolution,
        searchNodes: vi.fn(),
        searchModels: vi.fn(),
        loading: { value: false },
        error: { value: null }
      } as any)

      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Navigate to review
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()
      wrapper.findComponent({ name: 'NodeResolutionStep' }).vm.$emit('complete')
      await wrapper.vm.$nextTick()
      wrapper.findComponent({ name: 'ModelResolutionStep' }).vm.$emit('complete')
      await wrapper.vm.$nextTick()

      // Click Apply
      await wrapper.find('button:contains("Apply")').trigger('click')
      await wrapper.vm.$nextTick()

      expect(mockApplyResolution).toHaveBeenCalledWith(
        'test_workflow',
        expect.any(Map), // node choices
        expect.any(Map)  // model choices
      )
    })

    it('should skip node resolution step if no unresolved/ambiguous nodes', async () => {
      const noNodesResult = {
        ...mockAnalysisResult,
        nodes: {
          resolved: mockAnalysisResult.nodes.resolved,
          unresolved: [],
          ambiguous: []
        },
        stats: {
          ...mockAnalysisResult.stats,
          nodes_unresolved: 0,
          nodes_ambiguous: 0
        }
      }

      vi.mocked(useWorkflowResolution).mockReturnValue({
        analyzeWorkflow: vi.fn().mockResolvedValue(noNodesResult),
        applyResolution: vi.fn(),
        searchNodes: vi.fn(),
        searchModels: vi.fn(),
        loading: { value: false },
        error: { value: null }
      } as any)

      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Click Continue from analysis
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      // Should skip nodes and go directly to models
      const stepper = wrapper.findComponent({ name: 'ResolutionStepper' })
      expect(stepper.props('currentStep')).toBe('models')
    })

    it('should skip model resolution step if no unresolved/ambiguous models', async () => {
      const noModelsResult = {
        ...mockAnalysisResult,
        models: {
          resolved: [],
          unresolved: [],
          ambiguous: []
        },
        stats: {
          ...mockAnalysisResult.stats,
          models_unresolved: 0,
          models_ambiguous: 0
        }
      }

      vi.mocked(useWorkflowResolution).mockReturnValue({
        analyzeWorkflow: vi.fn().mockResolvedValue(noModelsResult),
        applyResolution: vi.fn(),
        searchNodes: vi.fn(),
        searchModels: vi.fn(),
        loading: { value: false },
        error: { value: null }
      } as any)

      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Navigate through wizard
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()
      wrapper.findComponent({ name: 'NodeResolutionStep' }).vm.$emit('complete')
      await wrapper.vm.$nextTick()

      // Should skip models and go to review
      const stepper = wrapper.findComponent({ name: 'ResolutionStepper' })
      expect(stepper.props('currentStep')).toBe('review')
    })
  })

  describe('Download Intent Details in Review Step', () => {
    const mockAnalysisWithDownloadIntents = {
      workflow: 'test_workflow',
      nodes: {
        resolved: [],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: {
              workflow: 'test_workflow',
              node_id: 'node1',
              node_type: 'CheckpointLoader',
              widget_name: 'model',
              widget_value: 'flux_dev.safetensors'
            },
            model: {
              filename: 'flux_dev.safetensors',
              hash: 'abc123',
              size: 1024000000,
              category: 'checkpoints',
              relative_path: 'checkpoints/flux_dev.safetensors'
            },
            match_type: 'download_intent',
            match_confidence: 1.0,
            is_installed: false,
            download_source: 'https://huggingface.co/black-forest-labs/FLUX.1-dev/resolve/main/flux_dev.safetensors',
            target_path: 'models/checkpoints/flux_dev.safetensors'
          },
          {
            reference: {
              workflow: 'test_workflow',
              node_id: 'node2',
              node_type: 'VAELoader',
              widget_name: 'vae',
              widget_value: 'ae.safetensors'
            },
            model: {
              filename: 'ae.safetensors',
              hash: 'def456',
              size: 512000000,
              category: 'vae',
              relative_path: 'vae/ae.safetensors'
            },
            match_type: 'download_intent',
            match_confidence: 1.0,
            is_installed: false,
            download_source: 'https://huggingface.co/black-forest-labs/FLUX.1-dev/resolve/main/ae.safetensors',
            target_path: 'models/vae/ae.safetensors'
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 0,
        total_models: 2,
        nodes_resolved: 0,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        nodes_needing_installation: 0,
        packages_needing_installation: 0,
        models_resolved: 2,
        models_unresolved: 0,
        models_ambiguous: 0,
        models_with_category_mismatch: 0,
        download_intents: 2,
        needs_user_input: false
      }
    }

    it('should show "Models to Download" section in review step when download intents exist', async () => {
      vi.mocked(useWorkflowResolution).mockReturnValue({
        analyzeWorkflow: vi.fn().mockResolvedValue(mockAnalysisWithDownloadIntents),
        applyResolution: vi.fn().mockResolvedValue({ status: 'success', nodes_to_install: [], models_to_download: [] }),
        searchNodes: vi.fn(),
        searchModels: vi.fn(),
        installNodes: vi.fn(),
        queueModelDownloads: vi.fn(),
        progress: { phase: 'idle', completedFiles: [], totalFiles: 0 },
        resetProgress: vi.fn(),
        loading: { value: false },
        error: { value: null }
      } as any)

      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        },
        attachTo: document.body
      })

      await flushPromises()
      await wrapper.vm.$nextTick()

      // Navigate to review step (analysis -> models -> review for download-intent-only workflow)
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      // Should show "Models to Download" section with count
      const reviewText = document.body.textContent || ''
      expect(reviewText).toContain('Models to Download')
      expect(reviewText).toContain('(2)')

      wrapper.unmount()
    })

    it('should display filename, target path, and truncated URL for each download intent', async () => {
      vi.mocked(useWorkflowResolution).mockReturnValue({
        analyzeWorkflow: vi.fn().mockResolvedValue(mockAnalysisWithDownloadIntents),
        applyResolution: vi.fn().mockResolvedValue({ status: 'success', nodes_to_install: [], models_to_download: [] }),
        searchNodes: vi.fn(),
        searchModels: vi.fn(),
        installNodes: vi.fn(),
        queueModelDownloads: vi.fn(),
        progress: { phase: 'idle', completedFiles: [], totalFiles: 0 },
        resetProgress: vi.fn(),
        loading: { value: false },
        error: { value: null }
      } as any)

      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        },
        attachTo: document.body
      })

      await flushPromises()
      await wrapper.vm.$nextTick()

      // Navigate to review step
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      const reviewText = document.body.textContent || ''
      // Should show filenames
      expect(reviewText).toContain('flux_dev.safetensors')
      expect(reviewText).toContain('ae.safetensors')
      // Should show target paths
      expect(reviewText).toContain('models/checkpoints/flux_dev.safetensors')
      expect(reviewText).toContain('models/vae/ae.safetensors')
      // Should show truncated URLs (URL is longer than 50 chars, should be truncated)
      expect(reviewText).toContain('huggingface.co')

      wrapper.unmount()
    })

    it('should not show cancelled download intents in Models to Download section', async () => {
      vi.mocked(useWorkflowResolution).mockReturnValue({
        analyzeWorkflow: vi.fn().mockResolvedValue(mockAnalysisWithDownloadIntents),
        applyResolution: vi.fn().mockResolvedValue({ status: 'success', nodes_to_install: [], models_to_download: [] }),
        searchNodes: vi.fn(),
        searchModels: vi.fn(),
        installNodes: vi.fn(),
        queueModelDownloads: vi.fn(),
        progress: { phase: 'idle', completedFiles: [], totalFiles: 0 },
        resetProgress: vi.fn(),
        loading: { value: false },
        error: { value: null }
      } as any)

      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        },
        attachTo: document.body
      })

      await flushPromises()
      await wrapper.vm.$nextTick()

      // Navigate to models step
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      // Cancel one download intent via the model choices
      const modelStep = wrapper.findComponent({ name: 'ModelResolutionStep' })
      modelStep.vm.$emit('skip', 'flux_dev.safetensors')
      await wrapper.vm.$nextTick()

      // Continue to review
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      // Should only show 1 download in the count
      const reviewText = document.body.textContent || ''
      expect(reviewText).toContain('Models to Download')
      expect(reviewText).toContain('(1)')
      // The cancelled one should not be in the download section
      // (it may still appear in the generic Models section with "Skip" badge)

      wrapper.unmount()
    })

    it('should not show "Models to Download" section when no download intents exist', async () => {
      const noDownloadIntentsResult = {
        ...mockAnalysisWithDownloadIntents,
        models: {
          resolved: [],
          unresolved: [],
          ambiguous: []
        },
        stats: {
          ...mockAnalysisWithDownloadIntents.stats,
          models_resolved: 0,
          download_intents: 0
        }
      }

      vi.mocked(useWorkflowResolution).mockReturnValue({
        analyzeWorkflow: vi.fn().mockResolvedValue(noDownloadIntentsResult),
        applyResolution: vi.fn().mockResolvedValue({ status: 'success', nodes_to_install: [], models_to_download: [] }),
        searchNodes: vi.fn(),
        searchModels: vi.fn(),
        installNodes: vi.fn(),
        queueModelDownloads: vi.fn(),
        progress: { phase: 'idle', completedFiles: [], totalFiles: 0 },
        resetProgress: vi.fn(),
        loading: { value: false },
        error: { value: null }
      } as any)

      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        },
        attachTo: document.body
      })

      await flushPromises()
      await wrapper.vm.$nextTick()

      // Navigate to review step (direct since no models/nodes)
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      // Should NOT show "Models to Download" section
      const reviewText = document.body.textContent || ''
      expect(reviewText).not.toContain('Models to Download')

      wrapper.unmount()
    })

    it('should show full URL in tooltip on hover', async () => {
      vi.mocked(useWorkflowResolution).mockReturnValue({
        analyzeWorkflow: vi.fn().mockResolvedValue(mockAnalysisWithDownloadIntents),
        applyResolution: vi.fn().mockResolvedValue({ status: 'success', nodes_to_install: [], models_to_download: [] }),
        searchNodes: vi.fn(),
        searchModels: vi.fn(),
        installNodes: vi.fn(),
        queueModelDownloads: vi.fn(),
        progress: { phase: 'idle', completedFiles: [], totalFiles: 0 },
        resetProgress: vi.fn(),
        loading: { value: false },
        error: { value: null }
      } as any)

      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        },
        attachTo: document.body
      })

      await flushPromises()
      await wrapper.vm.$nextTick()

      // Navigate to review step
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()

      // Check that the full URL is in a title attribute for tooltip
      const downloadUrlElement = wrapper.find('.download-url')
      expect(downloadUrlElement.exists()).toBe(true)
      expect(downloadUrlElement.attributes('title')).toContain('https://huggingface.co/black-forest-labs/FLUX.1-dev/resolve/main/')

      wrapper.unmount()
    })
  })

  describe('Error Handling', () => {
    it('should display error if analysis fails', async () => {
      vi.mocked(useWorkflowResolution).mockReturnValue({
        analyzeWorkflow: vi.fn().mockRejectedValue(new Error('Analysis failed')),
        applyResolution: vi.fn(),
        searchNodes: vi.fn(),
        searchModels: vi.fn(),
        loading: { value: false },
        error: { value: 'Analysis failed' }
      } as any)

      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      expect(wrapper.text()).toContain('Analysis failed')
    })

    it('should display error if apply resolution fails', async () => {
      const mockApplyResolution = vi.fn().mockRejectedValue(new Error('Apply failed'))

      vi.mocked(useWorkflowResolution).mockReturnValue({
        analyzeWorkflow: vi.fn().mockResolvedValue(mockAnalysisResult),
        applyResolution: mockApplyResolution,
        searchNodes: vi.fn(),
        searchModels: vi.fn(),
        loading: { value: false },
        error: { value: null }
      } as any)

      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await flushPromises()

      // Navigate to review and apply
      await wrapper.find('button:contains("Continue")').trigger('click')
      await wrapper.vm.$nextTick()
      wrapper.findComponent({ name: 'NodeResolutionStep' }).vm.$emit('complete')
      await wrapper.vm.$nextTick()
      wrapper.findComponent({ name: 'ModelResolutionStep' }).vm.$emit('complete')
      await wrapper.vm.$nextTick()

      await wrapper.find('button:contains("Apply")').trigger('click')
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('Apply failed')
    })
  })
})
