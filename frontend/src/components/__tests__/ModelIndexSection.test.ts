import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ModelIndexSection from '../ModelIndexSection.vue'

// Mock the composables
vi.mock('@/composables/useComfyGitService', () => ({
  useComfyGitService: () => ({
    getWorkspaceModels: vi.fn().mockResolvedValue([]),
    scanWorkspaceModels: vi.fn().mockResolvedValue({ changes: 0 }),
    getModelsDirectory: vi.fn().mockResolvedValue({ path: '/test/models' }),
    setModelsDirectory: vi.fn().mockResolvedValue({ path: '/new/path', models_indexed: 0 })
  })
}))

vi.mock('@/composables/useModelDownloadQueue', () => ({
  useModelDownloadQueue: () => ({
    addToQueue: vi.fn()
  })
}))

describe('ModelIndexSection - ModelDownloadModal Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the download button', async () => {
    const wrapper = mount(ModelIndexSection, {
      global: {
        stubs: {
          PanelLayout: true,
          PanelHeader: true,
          SearchBar: true,
          SectionGroup: true,
          ItemCard: true,
          DetailRow: true,
          ActionButton: true,
          SummaryBar: true,
          EmptyState: true,
          LoadingState: true,
          ErrorState: true,
          InfoPopover: true,
          ModelDetailModal: true,
          ModelDownloadModal: true,
          BaseInput: true,
          BaseButton: true,
          Teleport: true
        }
      }
    })

    // Wait for initial data load
    await wrapper.vm.$nextTick()

    // Check that the component uses ModelDownloadModal
    expect(wrapper.findComponent({ name: 'ModelDownloadModal' }).exists()).toBe(true)
  })

  it('should pass show prop to ModelDownloadModal', async () => {
    const wrapper = mount(ModelIndexSection, {
      global: {
        stubs: {
          PanelLayout: true,
          PanelHeader: true,
          SearchBar: true,
          SectionGroup: true,
          ItemCard: true,
          DetailRow: true,
          ActionButton: true,
          SummaryBar: true,
          EmptyState: true,
          LoadingState: true,
          ErrorState: true,
          InfoPopover: true,
          ModelDetailModal: true,
          ModelDownloadModal: true,
          BaseInput: true,
          BaseButton: true,
          Teleport: true
        }
      }
    })

    await wrapper.vm.$nextTick()

    // Modal component should exist and receive show prop
    const modal = wrapper.findComponent({ name: 'ModelDownloadModal' })
    expect(modal.exists()).toBe(true)
    expect(modal.props()).toHaveProperty('show')
  })

  it('should have ModelDownloadModal with proper bindings', async () => {
    const wrapper = mount(ModelIndexSection, {
      global: {
        stubs: {
          PanelLayout: true,
          PanelHeader: true,
          SearchBar: true,
          SectionGroup: true,
          ItemCard: true,
          DetailRow: true,
          ActionButton: true,
          SummaryBar: true,
          EmptyState: true,
          LoadingState: true,
          ErrorState: true,
          InfoPopover: true,
          ModelDetailModal: true,
          ModelDownloadModal: true,
          BaseInput: true,
          BaseButton: true,
          Teleport: true
        }
      }
    })

    await wrapper.vm.$nextTick()

    const modal = wrapper.findComponent({ name: 'ModelDownloadModal' })

    // Modal should exist and be properly bound
    expect(modal.exists()).toBe(true)
    expect(modal.props()).toHaveProperty('show')
  })

  it('should NOT have inline download modal code', async () => {
    const wrapper = mount(ModelIndexSection, {
      global: {
        stubs: {
          PanelLayout: true,
          PanelHeader: true,
          SearchBar: true,
          SectionGroup: true,
          ItemCard: true,
          DetailRow: true,
          ActionButton: true,
          SummaryBar: true,
          EmptyState: true,
          LoadingState: true,
          ErrorState: true,
          InfoPopover: true,
          ModelDetailModal: true,
          ModelDownloadModal: true,
          BaseInput: true,
          BaseButton: true,
          Teleport: true
        }
      }
    })

    await wrapper.vm.$nextTick()

    // Should not find old inline modal elements
    const html = wrapper.html()
    expect(html).not.toContain('Download New Model')
    expect(html).not.toContain('HuggingFace repository detected')
    expect(html).not.toContain('Browse Repo Files')
  })

  it('should NOT have HuggingFaceRepoModal component', async () => {
    const wrapper = mount(ModelIndexSection, {
      global: {
        stubs: {
          PanelLayout: true,
          PanelHeader: true,
          SearchBar: true,
          SectionGroup: true,
          ItemCard: true,
          DetailRow: true,
          ActionButton: true,
          SummaryBar: true,
          EmptyState: true,
          LoadingState: true,
          ErrorState: true,
          InfoPopover: true,
          ModelDetailModal: true,
          ModelDownloadModal: true,
          BaseInput: true,
          BaseButton: true,
          Teleport: true
        }
      }
    })

    await wrapper.vm.$nextTick()

    // Should not find HuggingFaceRepoModal
    expect(wrapper.findComponent({ name: 'HuggingFaceRepoModal' }).exists()).toBe(false)
  })

  it('should use simplified modal without old download state', async () => {
    const wrapper = mount(ModelIndexSection, {
      global: {
        stubs: {
          PanelLayout: true,
          PanelHeader: true,
          SearchBar: true,
          SectionGroup: true,
          ItemCard: true,
          DetailRow: true,
          ActionButton: true,
          SummaryBar: true,
          EmptyState: true,
          LoadingState: true,
          ErrorState: true,
          InfoPopover: true,
          ModelDetailModal: true,
          ModelDownloadModal: true,
          BaseInput: true,
          BaseButton: true,
          Teleport: true
        }
      }
    })

    await wrapper.vm.$nextTick()

    const html = wrapper.html()

    // Should NOT reference old HF-specific logic in rendered output
    expect(html).not.toContain('showHfRepoModal')
    expect(html).not.toContain('hfRepoUrl')
    expect(html).not.toContain('downloadTargetPath')

    // Should only have the unified ModelDownloadModal
    const modals = wrapper.findAllComponents({ name: 'ModelDownloadModal' })
    expect(modals.length).toBe(1)
  })
})
