import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
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
        nodeInstallProgress: { completedNodes: [] }
      }
    } as any)

    vi.mocked(useComfyGitService).mockReturnValue({
      openFileLocation: mockOpenFileLocation,
      queueNodeInstall: mockQueueNodeInstall
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
    expect(text).toContain('community-mapped node type needs installation choices')
    expect(text).not.toContain('blocked and require manual action')
    wrapper.unmount()
  })

  it('sends uninstallable choices in apply-resolution payload with registry default', async () => {
    const wrapper = mountModal()
    await flushPromises()

    clickButtonByText('Continue')
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
    wrapper.unmount()
  })
})
