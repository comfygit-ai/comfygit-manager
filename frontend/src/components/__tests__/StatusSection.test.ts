import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusSection from '../StatusSection.vue'
import type { ComfyGitStatus, EnvironmentLifecycleStatus } from '@/types/comfygit'

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

const createLifecycleStatus = (
  overrides: Partial<EnvironmentLifecycleStatus> = {}
): EnvironmentLifecycleStatus => ({
  environment_name: 'test-env',
  workspace_path: '/tmp/workspace',
  current_branch: 'main',
  current_commit: 'abc123',
  detached_head: false,
  layers: [],
  issues: [],
  actions: [],
  primary_action_id: null,
  ...overrides
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

  it('shows runtime custom node import failures in issues', () => {
    const status = createMockStatus()
    status.runtime_issues = {
      available: true,
      custom_node_import_failure_count: 1,
      custom_node_import_failures: [
        {
          name: 'ComfyUI-FL-VoxCPM',
          registry_id: 'ComfyUI-FL-VoxCPM',
          module_name: 'ComfyUI-FL-VoxCPM',
          module_path: '/tmp/custom_nodes/ComfyUI-FL-VoxCPM',
          criticality: 'required',
          used_in_workflows: ['VoxCPM V2 TTS'],
          status: 'failed',
          message: 'Import failed',
          guidance: 'Import failed during ComfyUI startup. Check the ComfyUI logs for the error message.'
        }
      ]
    }

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed'
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    expect(wrapper.text()).toContain('1 custom node failed to import')
    expect(wrapper.text()).toContain('ComfyUI-FL-VoxCPM')
    expect(wrapper.text()).toContain('VoxCPM V2 TTS')
  })

  it('shows lifecycle sync guidance for missing declared nodes', async () => {
    const status = createMockStatus()
    status.comparison.is_synced = false
    status.comparison.missing_nodes = ['comfyui-impact-pack']
    const onSyncEnvironment = vi.fn()

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onSyncEnvironment,
        lifecycleStatus: createLifecycleStatus({
          issues: [
            {
              id: 'missing_declared_nodes',
              layer: 'filesystem',
              severity: 'error',
              message: 'Manifest declares custom nodes that are missing on disk.',
              blocking: true,
              affected_resources: ['comfyui-impact-pack'],
              source: 'EnvironmentComparison.missing_nodes',
              details: [],
              action_ids: ['sync_missing_nodes']
            }
          ],
          actions: [
            {
              id: 'sync_missing_nodes',
              label: 'Sync missing nodes',
              description: 'Install node folders declared by the manifest.',
              target_layer: 'filesystem',
              issue_ids: ['missing_declared_nodes'],
              expected_mutation_layers: ['filesystem', 'operation'],
              enabled: true,
              disabled_reason: null,
              destructive: false,
              restart_required: true,
              confirmation_required: false
            }
          ],
          primary_action_id: 'sync_missing_nodes'
        })
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    expect(wrapper.text()).toContain('Filesystem needs attention')
    expect(wrapper.text()).toContain('Manifest declares custom nodes that are missing on disk.')
    expect(wrapper.text()).toContain('comfyui-impact-pack')
    expect(wrapper.text()).toContain('Restart required after applying this action')

    const syncButton = wrapper.findAllComponents({ name: 'ActionButton' })
      .find(button => button.text().includes('Sync missing nodes'))
    expect(syncButton).toBeTruthy()
    await syncButton!.trigger('click')
    expect(onSyncEnvironment).toHaveBeenCalledTimes(1)
  })

  it('shows new workflow lifecycle guidance as a commit snapshot action', async () => {
    const status = createMockStatus()
    status.workflows.new = ['txt2img_basic']
    const onCommitChanges = vi.fn()

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onCommitChanges,
        lifecycleStatus: createLifecycleStatus({
          issues: [
            {
              id: 'new_workflow_added',
              layer: 'snapshot',
              severity: 'warning',
              message: 'New workflow saved in ComfyUI and not yet captured in the environment snapshot.',
              blocking: false,
              affected_resources: ['txt2img_basic'],
              source: 'WorkflowSyncStatus.new',
              details: [],
              action_ids: ['commit_snapshot']
            }
          ],
          actions: [
            {
              id: 'commit_snapshot',
              label: 'Commit snapshot',
              description: 'Commit the current desired environment state.',
              target_layer: 'snapshot',
              issue_ids: ['new_workflow_added'],
              expected_mutation_layers: ['manifest', 'snapshot'],
              enabled: true,
              disabled_reason: null,
              destructive: false,
              restart_required: false,
              confirmation_required: false
            }
          ],
          primary_action_id: 'commit_snapshot'
        })
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    expect(wrapper.text()).toContain('New workflow added')
    expect(wrapper.text()).toContain('New workflow saved in ComfyUI')
    expect(wrapper.text()).toContain('txt2img_basic')

    const commitButton = wrapper.findAllComponents({ name: 'ActionButton' })
      .find(button => button.text().includes('Commit snapshot'))
    expect(commitButton).toBeTruthy()
    await commitButton!.trigger('click')
    expect(onCommitChanges).toHaveBeenCalledTimes(1)
  })

  it('routes lifecycle runtime import failures to the nodes view', async () => {
    const status = createMockStatus()
    const onViewNodes = vi.fn()
    status.runtime_issues = {
      available: true,
      custom_node_import_failure_count: 1,
      custom_node_import_failures: [
        {
          name: 'ComfyUI-Broken',
          registry_id: 'ComfyUI-Broken',
          module_name: 'ComfyUI-Broken',
          module_path: '/tmp/custom_nodes/ComfyUI-Broken',
          criticality: 'required',
          used_in_workflows: [],
          status: 'failed',
          message: 'Import failed',
          guidance: 'Check ComfyUI logs.'
        }
      ]
    }

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onViewNodes,
        lifecycleStatus: createLifecycleStatus({
          issues: [
            {
              id: 'runtime_import_failure',
              layer: 'runtime',
              severity: 'warning',
              message: 'ComfyUI reported custom-node import failures.',
              blocking: false,
              affected_resources: ['ComfyUI-Broken'],
              source: 'LifecycleRuntimeState.import_errors',
              details: [],
              action_ids: ['view_runtime_import_error']
            }
          ],
          actions: [
            {
              id: 'view_runtime_import_error',
              label: 'View import error',
              description: 'Open runtime import error details.',
              target_layer: 'runtime',
              issue_ids: ['runtime_import_failure'],
              expected_mutation_layers: ['runtime'],
              enabled: true,
              disabled_reason: null,
              destructive: false,
              restart_required: false,
              confirmation_required: false
            }
          ],
          primary_action_id: 'view_runtime_import_error'
        })
      },
      global: {
        stubs: ['StatusDetailModal', 'Teleport']
      }
    })

    expect(wrapper.text()).toContain('Runtime needs attention')
    expect(wrapper.text()).toContain('ComfyUI-Broken')

    const viewButton = wrapper.findAllComponents({ name: 'ActionButton' })
      .find(button => button.text().includes('View import error'))
    expect(viewButton).toBeTruthy()
    await viewButton!.trigger('click')
    expect(onViewNodes).toHaveBeenCalledTimes(1)
  })
})
