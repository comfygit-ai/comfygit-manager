import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusSection from '../StatusSection.vue'
import type { ComfyGitStatus } from '@/types/comfygit'

// Mock minimal status object for tests
const createMockStatus = (): ComfyGitStatus => ({
  environment: 'test-env',
  workspace: '/test/workspace',
  branch: 'main',
  has_changes: false,
  is_detached_head: false,
  workflows: {
    new: [],
    modified: [],
    deleted: [],
    synced: [],
    analyzed: []
  },
  git_changes: {
    nodes_added: [],
    nodes_removed: [],
    workflow_changes: false,
    workflow_changes_detail: {},
    has_other_changes: false
  },
  comparison: {
    is_synced: true,
    missing_nodes: [],
    extra_nodes: []
  },
  missing_models_count: 0
})

describe('StatusSection - Setup State Issue Cards', () => {
  it('shows no_workspace issue card when setupState is no_workspace', () => {
    const wrapper = mount(StatusSection, {
      props: {
        status: createMockStatus(),
        setupState: 'no_workspace'
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    const issueCard = wrapper.find('.issue-card')
    expect(issueCard.exists()).toBe(true)
    expect(wrapper.text()).toContain('No ComfyGit workspace detected')
    expect(wrapper.text()).toContain('Start Setup')
  })

  it('shows unmanaged issue card when setupState is unmanaged', () => {
    const wrapper = mount(StatusSection, {
      props: {
        status: createMockStatus(),
        setupState: 'unmanaged'
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    expect(wrapper.text()).toContain('Not in a managed environment')
    expect(wrapper.text()).toContain('View Environments')
  })

  it('shows empty_workspace issue card when setupState is empty_workspace', () => {
    const wrapper = mount(StatusSection, {
      props: {
        status: createMockStatus(),
        setupState: 'empty_workspace'
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    // This should show an issue card for empty_workspace state
    expect(wrapper.text()).toContain('Workspace ready')
    expect(wrapper.text()).toContain('Create Environment')
  })

  it('emits create-environment when Create Environment button is clicked', async () => {
    const wrapper = mount(StatusSection, {
      props: {
        status: createMockStatus(),
        setupState: 'empty_workspace'
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    // Find and click the Create Environment button
    const buttons = wrapper.findAll('button')
    const createEnvButton = buttons.find(b => b.text().includes('Create Environment'))
    expect(createEnvButton).toBeDefined()

    await createEnvButton?.trigger('click')
    expect(wrapper.emitted('create-environment')).toBeTruthy()
  })

  it('shows normal status when setupState is managed', () => {
    const wrapper = mount(StatusSection, {
      props: {
        status: createMockStatus(),
        setupState: 'managed'
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    // Should NOT show any setup issue cards
    expect(wrapper.text()).not.toContain('No ComfyGit workspace detected')
    expect(wrapper.text()).not.toContain('Not in a managed environment')
    expect(wrapper.text()).not.toContain('Workspace ready')

    // Should show normal health section
    expect(wrapper.text()).toContain('ENVIRONMENT HEALTH')
  })
})
