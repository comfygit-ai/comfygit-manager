import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import WorkflowResolveModal from '../WorkflowResolveModal.vue'
import { useWorkflowResolution } from '@/composables/useWorkflowResolution'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { useModelDownloadQueue } from '@/composables/useModelDownloadQueue'

vi.mock('@/composables/useWorkflowResolution', () => ({
  useWorkflowResolution: vi.fn()
}))

vi.mock('@/composables/useComfyGitService', () => ({
  useComfyGitService: vi.fn()
}))

vi.mock('@/composables/useModelDownloadQueue', () => ({
  useModelDownloadQueue: vi.fn()
}))

function buildAnalysisResult() {
  return {
    workflow: 'test_workflow',
    nodes: {
      resolved: [],
      unresolved: [],
      ambiguous: [],
      version_gated: [],
      uninstallable: [
        {
          reference: { node_type: 'GetNode', workflow: 'test_workflow' },
          package: {
            package_id: 'kj-nodes',
            title: 'KJ Nodes',
            repository: 'https://github.com/kijai/ComfyUI-KJNodes',
            latest_version: '1.2.3'
          },
          match_confidence: 1,
          match_type: 'auto_selected',
          is_installed: false,
          reason: 'no_installable_package_version',
          guidance: 'No compatible package version for this ComfyUI'
        }
      ]
    },
    node_guidance: {},
    models: {
      resolved: [],
      unresolved: [],
      ambiguous: []
    },
    stats: {
      total_nodes: 1,
      total_models: 0,
      download_intents: 0,
      nodes_needing_installation: 0,
      packages_needing_installation: 0,
      needs_user_input: false,
      models_with_category_mismatch: 0
    }
  }
}

function buildUnresolvedAnalysisResult() {
  const analysis = buildAnalysisResult()
  analysis.nodes.uninstallable = []
  analysis.nodes.unresolved = [
    {
      reference: { node_type: 'JWIntegerDiv', workflow: 'test_workflow' },
      reason: 'not_found'
    },
    {
      reference: { node_type: 'JWFloatMul', workflow: 'test_workflow' },
      reason: 'not_found'
    }
  ]
  analysis.stats.total_nodes = 2
  analysis.stats.needs_user_input = true
  return analysis
}

function clickButtonByText(text: string) {
  const buttons = Array.from(document.querySelectorAll('button'))
  const button = buttons.find(btn => (btn.textContent || '').includes(text))
  expect(button, `button "${text}" not found`).toBeTruthy()
  ;(button as HTMLButtonElement).click()
}

describe('WorkflowResolveModal - Community-Mapped Flow', () => {
  const mockAnalyzeWorkflow = vi.fn()
  const mockApplyResolution = vi.fn()
  const mockInstallNodes = vi.fn()
  const mockQueueModelDownloads = vi.fn()
  const mockResetProgress = vi.fn()
  const mockQueueNodeInstall = vi.fn()
  const mockOpenFileLocation = vi.fn()
  const mockGetNodes = vi.fn()
  const mockGetConfig = vi.fn()
  const mockSyncEnvironmentManually = vi.fn()
  const mockLoadPendingDownloads = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

    mockAnalyzeWorkflow.mockResolvedValue(buildAnalysisResult())
    mockApplyResolution.mockResolvedValue({
      status: 'success',
      nodes_to_install: ['kj-nodes'],
      models_to_download: []
    })
    mockInstallNodes.mockResolvedValue({
      status: 'success',
      nodes_installed: [],
      message: 'ok'
    })
    mockQueueNodeInstall.mockResolvedValue({ ui_id: 'ui-1' })
    mockGetNodes.mockResolvedValue({ nodes: [] })
    mockGetConfig.mockResolvedValue({
      active_overlays: [],
      active_overlay_names: []
    })
    mockSyncEnvironmentManually.mockResolvedValue({
      status: 'success',
      nodes_installed: [],
      nodes_removed: [],
      errors: [],
      message: 'Sync completed'
    })
    mockLoadPendingDownloads.mockResolvedValue(undefined)

    vi.mocked(useWorkflowResolution).mockReturnValue({
      analyzeWorkflow: mockAnalyzeWorkflow,
      applyResolution: mockApplyResolution,
      installNodes: mockInstallNodes,
      queueModelDownloads: mockQueueModelDownloads,
      resetProgress: mockResetProgress,
      progress: {
        phase: 'idle',
        completedFiles: [],
        nodesToInstall: [],
        nodesInstalled: [],
        nodesMarkedOptional: [],
        nodeInstallProgress: { completedNodes: [] }
      }
    } as any)

    vi.mocked(useComfyGitService).mockReturnValue({
      openFileLocation: mockOpenFileLocation,
      queueNodeInstall: mockQueueNodeInstall,
      getNodes: mockGetNodes,
      getConfig: mockGetConfig,
      syncEnvironmentManually: mockSyncEnvironmentManually
    } as any)

    vi.mocked(useModelDownloadQueue).mockReturnValue({
      loadPendingDownloads: mockLoadPendingDownloads
    } as any)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  function mountModal() {
    return mount(WorkflowResolveModal, {
      props: { workflowName: 'test_workflow' },
      attachTo: document.body,
      global: {
        stubs: {
          ResolutionStepper: { template: '<div />' },
          NodeResolutionStep: { template: '<div />' },
          ModelResolutionStep: { template: '<div />' },
          ApplyingStep: { template: '<div />' }
        }
      }
    })
  }

  it('treats uninstallable nodes as actionable (not blocked)', async () => {
    const wrapper = mountModal()
    await flushPromises()

    const text = document.body.textContent || ''
    expect(text).toContain('1 item need your input')
    expect(text).not.toContain('blocked and require manual action')
    wrapper.unmount()
  })

  it('treats saved optional uninstallable choices as already decided', async () => {
    const analysis = buildAnalysisResult()
    analysis.nodes.uninstallable[0].saved_choice = { action: 'optional' }
    mockAnalyzeWorkflow.mockResolvedValueOnce(analysis)

    const wrapper = mountModal()
    await flushPromises()

    const text = document.body.textContent || ''
    expect(text).toContain('All dependencies are resolved!')
    expect(text).not.toContain('1 item need your input')
    expect(text).not.toContain('community-mapped node type needs installation choices')
    wrapper.unmount()
  })

  it('sends explicit uninstallable registry choices in apply-resolution payload', async () => {
    const wrapper = mountModal()
    await flushPromises()

    clickButtonByText('Continue')
    await flushPromises()
    clickButtonByText('Install from Registry')
    await flushPromises()
    clickButtonByText('Continue to Review')
    await flushPromises()
    clickButtonByText('Apply Resolution')
    await flushPromises()

    expect(mockApplyResolution).toHaveBeenCalledTimes(1)
    const nodeChoices = mockApplyResolution.mock.calls[0][1] as Map<string, any>
    expect(nodeChoices.get('GetNode')).toMatchObject({
      action: 'install',
      package_id: 'kj-nodes',
      install_source: 'registry'
    })
    expect(mockInstallNodes).toHaveBeenCalledWith('test_workflow')
    expect(mockQueueNodeInstall).not.toHaveBeenCalled()
    expect(mockSyncEnvironmentManually).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('queues explicit git install separately and excludes it from registry install list', async () => {
    const wrapper = mountModal()
    await flushPromises()

    clickButtonByText('Continue')
    await flushPromises()
    clickButtonByText('Install via Git')
    await flushPromises()
    clickButtonByText('Continue to Review')
    await flushPromises()
    clickButtonByText('Apply Resolution')
    await flushPromises()

    expect(mockApplyResolution).toHaveBeenCalledTimes(1)
    const nodeChoices = mockApplyResolution.mock.calls[0][1] as Map<string, any>
    expect(nodeChoices.get('GetNode')).toMatchObject({
      action: 'install',
      package_id: 'kj-nodes',
      install_source: 'git',
      repository: 'https://github.com/kijai/ComfyUI-KJNodes'
    })
    expect(mockInstallNodes).not.toHaveBeenCalled()
    expect(mockQueueNodeInstall).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'kj-nodes',
        repository: 'https://github.com/kijai/ComfyUI-KJNodes',
        install_source: 'git'
      })
    )
    expect(mockSyncEnvironmentManually).toHaveBeenCalledWith('skip', false, true)
    wrapper.unmount()
  })

  it('offers node packs selected earlier in the wizard as mapping chips', async () => {
    mockAnalyzeWorkflow.mockResolvedValueOnce(buildUnresolvedAnalysisResult())

    const NodeResolutionStepStub = defineComponent({
      name: 'NodeResolutionStep',
      props: {
        nodes: { type: Array, required: true },
        nodeChoices: { type: Object, required: true },
        autoResolvedPackages: { type: Array, required: true },
        skippedPackages: { type: Object, required: true },
        installedNodePacks: { type: Array, required: true }
      },
      emits: ['manual-entry'],
      setup(_props, { emit }) {
        return () => h('button', {
          type: 'button',
          onClick: () => emit(
            'manual-entry',
            'JWIntegerDiv',
            'comfyui-various',
            {
              install_source: 'git',
              repository: 'https://github.com/jameswalker55/comfyui-various'
            }
          )
        }, 'Choose Various')
      }
    })

    const wrapper = mount(WorkflowResolveModal, {
      props: { workflowName: 'test_workflow' },
      attachTo: document.body,
      global: {
        stubs: {
          ResolutionStepper: { template: '<div />' },
          NodeResolutionStep: NodeResolutionStepStub,
          ModelResolutionStep: { template: '<div />' },
          ApplyingStep: { template: '<div />' }
        }
      }
    })
    await flushPromises()

    clickButtonByText('Continue')
    await flushPromises()

    const initialNodeStep = wrapper.findComponent(NodeResolutionStepStub)
    expect(initialNodeStep.exists()).toBe(true)
    initialNodeStep.vm.$emit(
      'manual-entry',
      'JWIntegerDiv',
      'comfyui-various',
      {
        install_source: 'git',
        repository: 'https://github.com/jameswalker55/comfyui-various'
      }
    )
    await flushPromises()

    const nodeStep = wrapper.findComponent(NodeResolutionStepStub)
    expect(nodeStep.props('installedNodePacks')).toContainEqual({
      package_id: 'comfyui-various',
      source: 'selected-git'
    })

    wrapper.unmount()
  })

  it('syncs environment after registry node installation requires restart', async () => {
    const progress: any = {
      phase: 'idle',
      completedFiles: [],
      nodesToInstall: [],
      nodesInstalled: [],
      nodesMarkedOptional: [],
      nodeInstallProgress: { completedNodes: [] }
    }
    vi.mocked(useWorkflowResolution).mockReturnValue({
      analyzeWorkflow: mockAnalyzeWorkflow,
      applyResolution: mockApplyResolution,
      installNodes: vi.fn().mockImplementation(async () => {
        progress.needsRestart = true
        return {
          status: 'success',
          nodes_installed: ['kj-nodes'],
          message: 'ok'
        }
      }),
      queueModelDownloads: mockQueueModelDownloads,
      resetProgress: mockResetProgress,
      progress
    } as any)

    const wrapper = mountModal()
    await flushPromises()

    clickButtonByText('Continue')
    await flushPromises()
    clickButtonByText('Install from Registry')
    await flushPromises()
    clickButtonByText('Continue to Review')
    await flushPromises()
    clickButtonByText('Apply Resolution')
    await flushPromises()

    expect(mockSyncEnvironmentManually).toHaveBeenCalledWith('skip', false, true)
    wrapper.unmount()
  })

  it('does not complete when post-install environment sync returns an error result', async () => {
    const progress: any = {
      phase: 'idle',
      completedFiles: [],
      nodesToInstall: [],
      nodesInstalled: [],
      nodesMarkedOptional: [],
      nodeInstallProgress: { completedNodes: [] }
    }
    vi.mocked(useWorkflowResolution).mockReturnValue({
      analyzeWorkflow: mockAnalyzeWorkflow,
      applyResolution: mockApplyResolution,
      installNodes: vi.fn().mockImplementation(async () => {
        progress.needsRestart = true
        return {
          status: 'success',
          nodes_installed: ['kj-nodes'],
          message: 'ok'
        }
      }),
      queueModelDownloads: mockQueueModelDownloads,
      resetProgress: mockResetProgress,
      progress
    } as any)
    mockSyncEnvironmentManually.mockResolvedValueOnce({
      status: 'error',
      nodes_installed: [],
      nodes_removed: [],
      errors: ['uv sync failed'],
      message: 'Sync completed with errors'
    })

    const wrapper = mountModal()
    await flushPromises()

    clickButtonByText('Continue')
    await flushPromises()
    clickButtonByText('Install from Registry')
    await flushPromises()
    clickButtonByText('Continue to Review')
    await flushPromises()
    clickButtonByText('Apply Resolution')
    await flushPromises()

    expect(mockSyncEnvironmentManually).toHaveBeenCalledWith('skip', false, true)
    expect(progress.phase).toBe('error')
    expect(progress.error).toBe('Environment sync failed: uv sync failed')
    expect(mockLoadPendingDownloads).not.toHaveBeenCalled()
    expect(wrapper.emitted('install')).toBeUndefined()
    wrapper.unmount()
  })

  it('sends optional uninstallable package choices without installing', async () => {
    mockApplyResolution.mockResolvedValueOnce({
      status: 'success',
      nodes_to_install: [],
      nodes_marked_optional: ['GetNode'],
      models_to_download: []
    })

    const wrapper = mountModal()
    await flushPromises()

    clickButtonByText('Continue')
    await flushPromises()
    clickButtonByText('Optional')
    await flushPromises()
    clickButtonByText('Continue to Review')
    await flushPromises()
    clickButtonByText('Apply Resolution')
    await flushPromises()

    expect(mockApplyResolution).toHaveBeenCalledTimes(1)
    const nodeChoices = mockApplyResolution.mock.calls[0][1] as Map<string, any>
    expect(nodeChoices.get('GetNode')).toMatchObject({
      action: 'optional'
    })
    expect(mockInstallNodes).not.toHaveBeenCalled()
    expect(mockQueueNodeInstall).not.toHaveBeenCalled()
    expect(mockSyncEnvironmentManually).not.toHaveBeenCalled()
    wrapper.unmount()
  })
})
