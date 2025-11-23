import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
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
    needs_user_input: true,
    nodes: {
      resolved: [
        {
          node_type: 'KSampler',
          status: 'resolved'
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
              match_type: 'fuzzy'
            },
            {
              package: { package_id: 'flux-ultimate', title: 'Ultimate Flux' },
              match_confidence: 0.85,
              match_type: 'fuzzy'
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
      nodes_resolved: 1,
      nodes_unresolved: 1,
      nodes_ambiguous: 1,
      models_resolved: 0,
      models_unresolved: 1,
      models_ambiguous: 0
    }
  }

  beforeEach(() => {
    vi.clearAllMocks()

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
      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 10))

      // Should show stepper with analysis as current step
      const stepper = wrapper.findComponent({ name: 'ResolutionStepper' })
      expect(stepper.exists()).toBe(true)
      expect(stepper.props('currentStep')).toBe('analysis')
    })

    it('should display analysis results with stats', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 0))

      const analysisText = wrapper.text()
      expect(analysisText).toContain('1 unresolved')
      expect(analysisText).toContain('1 ambiguous')
      expect(analysisText).toContain('nodes')
      expect(analysisText).toContain('1 unresolved')
      expect(analysisText).toContain('models')
    })

    it('should show "Continue" button to proceed to node resolution', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 0))

      const continueBtn = wrapper.find('button:contains("Continue")')
      expect(continueBtn.exists()).toBe(true)
      expect(continueBtn.attributes('disabled')).toBeUndefined()
    })

    it('should transition to node resolution step when clicking Continue from analysis', async () => {
      const wrapper = mount(WorkflowResolveModal, {
        props: {
          workflowName: 'test_workflow'
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
      await new Promise(resolve => setTimeout(resolve, 0))

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
