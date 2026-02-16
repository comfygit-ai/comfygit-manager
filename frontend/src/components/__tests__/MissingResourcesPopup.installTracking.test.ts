import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import MissingResourcesPopup from '../MissingResourcesPopup.vue'
import MissingResourcesDetailModal from '../MissingResourcesDetailModal.vue'
import { useModelDownloadQueue } from '@/composables/useModelDownloadQueue'
import { useComfyGitService } from '@/composables/useComfyGitService'

vi.mock('@/composables/useModelDownloadQueue', () => ({
  useModelDownloadQueue: vi.fn()
}))

vi.mock('@/composables/useComfyGitService', () => ({
  useComfyGitService: vi.fn()
}))

type MissingPackageInput = {
  package_id: string
  title?: string
  latest_version?: string | null
  repository?: string | null
}

type CommunityPackageInput = {
  item_id?: string
  node_type: string
  title: string
  package_id: string | null
  latest_version?: string | null
  repository?: string | null
}

function buildAnalysisResult(options: {
  missingPackages?: MissingPackageInput[]
  communityPackages?: CommunityPackageInput[]
}) {
  const missingPackages = options.missingPackages || []
  const communityPackages = options.communityPackages || []

  return {
    workflow: 'unsaved',
    package_aliases: {},
    nodes: {
      resolved: missingPackages.map((pkg, idx) => ({
        reference: { node_type: `ResolvedNode${idx + 1}`, workflow: 'unsaved' },
        package: {
          package_id: pkg.package_id,
          title: pkg.title || pkg.package_id,
          repository: pkg.repository || null,
          latest_version: pkg.latest_version || 'latest'
        },
        is_installed: false,
        match_confidence: 1,
        match_type: 'auto_selected'
      })),
      unresolved: [],
      version_gated: [],
      uninstallable: communityPackages.map((pkg) => ({
        reference: { node_type: pkg.node_type, workflow: 'unsaved' },
        package: {
          package_id: pkg.package_id,
          title: pkg.title,
          repository: pkg.repository || null,
          latest_version: pkg.latest_version || 'latest'
        },
        is_installed: false,
        match_confidence: 1,
        match_type: 'auto_selected',
        reason: 'no_installable_package_version'
      })),
      ambiguous: []
    },
    models: {
      resolved: [],
      unresolved: [],
      ambiguous: []
    },
    stats: {
      total_nodes: missingPackages.length + communityPackages.length,
      total_models: 0,
      download_intents: 0,
      nodes_needing_installation: missingPackages.length,
      packages_needing_installation: missingPackages.length,
      needs_user_input: false,
      is_fully_resolved: false,
      models_with_category_mismatch: 0
    }
  }
}

let workflowCounter = 0

async function triggerWorkflowAnalysis(workflowId?: string) {
  const id = workflowId || `wf-install-hardening-${++workflowCounter}`
  window.dispatchEvent(
    new CustomEvent('comfygit:workflow-loaded', {
      detail: { workflow: { id } }
    })
  )
  await flushPromises()
  await flushPromises()
}

function findButtonByText(text: string): HTMLButtonElement {
  const button = Array.from(document.body.querySelectorAll('button'))
    .find((btn) => (btn.textContent || '').trim() === text)
  expect(button, `button "${text}" not found`).toBeTruthy()
  return button as HTMLButtonElement
}

describe('MissingResourcesPopup install tracking hardening', () => {
  const mockQueueNodeInstall = vi.fn()
  const mockAddToQueue = vi.fn()
  const fetchMock = vi.fn()
  const addEventListenerMock = vi.fn()
  const removeEventListenerMock = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    vi.useRealTimers()
    localStorage.clear()

    vi.mocked(useComfyGitService).mockReturnValue({
      queueNodeInstall: mockQueueNodeInstall
    } as any)

    vi.mocked(useModelDownloadQueue).mockReturnValue({
      addToQueue: mockAddToQueue
    } as any)

    ;(window as any).app = {
      api: {
        addEventListener: addEventListenerMock,
        removeEventListener: removeEventListenerMock
      }
    }

    vi.stubGlobal('fetch', fetchMock)
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
    document.body.innerHTML = ''
  })

  function mountPopup() {
    return mount(MissingResourcesPopup, {
      attachTo: document.body
    })
  }

  it('surfaces queueNodeInstall failures as failed package state', async () => {
    mockQueueNodeInstall.mockRejectedValue(new Error('Queue start failed'))
    fetchMock.mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(buildAnalysisResult({
        missingPackages: [{ package_id: 'pkg-fail', title: 'Package Fail' }]
      }))
    })

    const wrapper = mountPopup()
    await triggerWorkflowAnalysis()

    findButtonByText('Install').click()
    await flushPromises()

    expect(mockQueueNodeInstall).toHaveBeenCalledTimes(1)
    const failedBadge = document.body.querySelector('.failed-badge') as HTMLElement
    expect(failedBadge).toBeTruthy()
    expect(failedBadge.getAttribute('title')).toContain('Queue start failed')

    wrapper.unmount()
  })

  it('marks queued package as failed after 30s timeout without cm-task-started', async () => {
    vi.useFakeTimers()
    mockQueueNodeInstall.mockResolvedValue({ ui_id: 'ui-timeout' })
    fetchMock.mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(buildAnalysisResult({
        missingPackages: [{ package_id: 'pkg-timeout', title: 'Package Timeout' }]
      }))
    })

    const wrapper = mountPopup()
    await triggerWorkflowAnalysis()

    findButtonByText('Install').click()
    await flushPromises()

    expect(document.body.textContent || '').toContain('Queued')

    vi.advanceTimersByTime(30_000)
    await flushPromises()

    const failedBadge = document.body.querySelector('.failed-badge') as HTMLElement
    expect(failedBadge).toBeTruthy()
    expect(failedBadge.getAttribute('title')).toBe('Queue timeout — please retry')
    expect(document.body.textContent || '').not.toContain('Queued')

    wrapper.unmount()
  })

  it('shows user-visible error when action is attempted without package_id', async () => {
    mockQueueNodeInstall.mockResolvedValue({ ui_id: 'ui-unused' })
    fetchMock.mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(buildAnalysisResult({
        communityPackages: [
          { item_id: 'node:NodeA', node_type: 'NodeA', title: 'Node A', package_id: null },
          { item_id: 'node:NodeB', node_type: 'NodeB', title: 'Node B', package_id: null },
          { item_id: 'node:NodeC', node_type: 'NodeC', title: 'Node C', package_id: null },
          { item_id: 'node:NodeD', node_type: 'NodeD', title: 'Node D', package_id: null },
          { item_id: 'node:NodeE', node_type: 'NodeE', title: 'Node E', package_id: null }
        ]
      }))
    })

    const wrapper = mountPopup()
    await triggerWorkflowAnalysis()

    const showAllRow = Array.from(document.body.querySelectorAll('.show-all-row'))
      .find((row) => (row.textContent || '').includes('Show all 5 packages'))
    expect(showAllRow).toBeTruthy()
    ;(showAllRow as HTMLDivElement).click()
    await flushPromises()

    const detailModal = wrapper.findComponent(MissingResourcesDetailModal)
    expect(detailModal.exists()).toBe(true)
    detailModal.vm.$emit(
      'action',
      { id: 'node:NodeA', name: 'Node A', canAction: false },
      'install_registry'
    )
    await flushPromises()

    expect((document.body.querySelector('.base-modal-error') as HTMLElement).textContent || '')
      .toContain('package_id is missing')

    wrapper.unmount()
  })

  it('downloadAll continues installs after failures and surfaces summary', async () => {
    mockQueueNodeInstall
      .mockRejectedValueOnce(new Error('first install failed'))
      .mockResolvedValueOnce({ ui_id: 'ui-success' })
    fetchMock.mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(buildAnalysisResult({
        missingPackages: [
          { package_id: 'pkg-one', title: 'Package One' },
          { package_id: 'pkg-two', title: 'Package Two' }
        ]
      }))
    })

    const wrapper = mountPopup()
    await triggerWorkflowAnalysis()

    findButtonByText('Download All').click()
    await flushPromises()
    await flushPromises()
    await flushPromises()

    expect(mockQueueNodeInstall).toHaveBeenCalledTimes(2)
    expect((document.body.querySelector('.base-modal-error') as HTMLElement).textContent || '')
      .toContain('1 of 2 installs queued, 1 failed')
    const allDoneButton = findButtonByText('All Done')
    expect(allDoneButton.disabled).toBe(true)

    wrapper.unmount()
  })
})
