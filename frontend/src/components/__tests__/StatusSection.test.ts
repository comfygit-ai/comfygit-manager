import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusSection from '../StatusSection.vue'
import type { ComfyGitStatus } from '@/types/comfygit'

// Mock minimal status object for tests
const createMockStatus = (): ComfyGitStatus => ({
  environment: 'test-env',
  branch: 'main',
  is_synced: true,
  has_changes: false,
  is_detached_head: false,
  has_legacy_manager: false,
  workflows: {
    new: [],
    modified: [],
    deleted: [],
    synced: [],
    total: 0,
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
    extra_nodes: [],
    disabled_nodes: [],
    version_mismatches: [],
    packages_in_sync: true
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

  it('shows version target in broken workflow description when guidance is available', () => {
    const status = createMockStatus()
    status.workflows.analyzed = [
      {
        name: 'needs-new-comfyui.json',
        sync_state: 'synced',
        status: 'broken',
        has_issues: true,
        has_path_sync_issues: false,
        uninstalled_nodes: 0,
        unresolved_nodes_count: 0,
        nodes_version_gated_count: 1,
        nodes_uninstallable_count: 0,
        version_gated_guidance: ['Requires ComfyUI >= 0.3.10'],
        unresolved_models_count: 0,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 0,
        issue_summary: '1 node requires newer ComfyUI',
        node_count: 10,
        model_count: 2,
        has_category_mismatch_issues: false,
        models_with_category_mismatch_count: 0
      }
    ]

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed'
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    expect(wrapper.text()).toContain('require newer ComfyUI (>= 0.3.10)')
    expect(wrapper.text()).toContain('needs ComfyUI >= 0.3.10')
  })

  it('uses community package terminology for uninstallable counts', () => {
    const status = createMockStatus()
    status.workflows.analyzed = [
      {
        name: 'community.json',
        sync_state: 'synced',
        status: 'broken',
        has_issues: true,
        has_path_sync_issues: false,
        uninstalled_nodes: 0,
        unresolved_nodes_count: 0,
        nodes_version_gated_count: 0,
        nodes_uninstallable_count: 2,
        version_gated_guidance: [],
        unresolved_models_count: 0,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 0,
        issue_summary: '2 uninstallable node mappings',
        node_count: 10,
        model_count: 2,
        has_category_mismatch_issues: false,
        models_with_category_mismatch_count: 0
      }
    ]

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed'
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    expect(wrapper.text()).toContain('community packages')
    expect(wrapper.text().toLowerCase()).not.toContain('uninstallable node mappings')
  })
})
