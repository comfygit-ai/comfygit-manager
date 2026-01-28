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

  it('should open ModelDownloadModal when download button is clicked', async () => {
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

    // Initially, modal should not be shown
    const modal = wrapper.findComponent({ name: 'ModelDownloadModal' })
    expect(modal.props('show')).toBe(false)

    // Simulate clicking the download button by setting showDownloadModal to true
    const vm = wrapper.vm as any
    vm.showDownloadModal = true
    await wrapper.vm.$nextTick()

    // Modal should now be shown
    expect(modal.props('show')).toBe(true)
  })

  it('should close ModelDownloadModal when close event is emitted', async () => {
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

    // Open the modal
    const vm = wrapper.vm as any
    vm.showDownloadModal = true
    await wrapper.vm.$nextTick()

    const modal = wrapper.findComponent({ name: 'ModelDownloadModal' })
    expect(modal.props('show')).toBe(true)

    // Emit close event
    await modal.vm.$emit('close')
    await wrapper.vm.$nextTick()

    // Modal should be closed
    expect(modal.props('show')).toBe(false)
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

  it('should NOT have download-related state variables', async () => {
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

    const vm = wrapper.vm as any

    // Should NOT have these old state variables
    expect(vm.downloadUrl).toBeUndefined()
    expect(vm.downloadTargetPath).toBeUndefined()
    expect(vm.showHfRepoModal).toBeUndefined()
    expect(vm.hfRepoUrl).toBeUndefined()

    // Should still have showDownloadModal
    expect(vm.showDownloadModal).toBeDefined()
  })
})
