import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
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

const findLifecycleTile = (wrapper: VueWrapper, title: string): DOMWrapper<Element> => {
  const tile = wrapper.findAll('.lifecycle-tile').find(candidate => {
    const titleElement = candidate.find('.lifecycle-tile__title-button, .lifecycle-tile__title')
    return titleElement.exists() && titleElement.text() === title
  })

  expect(tile).toBeTruthy()
  return tile!
}

describe('StatusSection - Setup State Issue Cards', () => {
  it('shows no_workspace issue card when setupState is no_workspace', () => {
    const wrapper = mount(StatusSection, {
      props: {
        status: createMockStatus(),
        setupState: 'no_workspace'
      },
      global: {
        stubs: ['Teleport']
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
        stubs: ['Teleport']
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
        stubs: ['Teleport']
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
        stubs: ['Teleport']
      }
    })

    // Should NOT show any setup issue cards
    expect(wrapper.text()).not.toContain('No ComfyGit workspace detected')
    expect(wrapper.text()).not.toContain('Not in a managed environment')
    expect(wrapper.text()).not.toContain('Workspace ready')

    // Should show normal health section
    expect(wrapper.text()).toContain('ENVIRONMENT HEALTH')
  })

  it('keeps healthy lifecycle tiles visually quiet', () => {
    const wrapper = mount(StatusSection, {
      props: {
        status: createMockStatus(),
        setupState: 'managed',
        lifecycleStatus: createLifecycleStatus()
      },
      global: {
        stubs: ['Teleport']
      }
    })

    expect(wrapper.find('.lifecycle-tile__badge--ok').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('No issues detected')

    const healthyLines = wrapper.findAll('.lifecycle-tile__line--ok')
      .map(line => line.text())
    expect(healthyLines).toContain('✓OK')
    expect(wrapper.findAllComponents({ name: 'ActionButton' })
      .some(button => button.text() === 'Open')).toBe(false)
    expect(wrapper.findAllComponents({ name: 'ActionButton' })
      .some(button => button.text() === 'History')).toBe(false)
  })

  it('navigates from lifecycle tile titles instead of generic open buttons', async () => {
    const status = createMockStatus()
    const onViewWorkflows = vi.fn()
    const onViewModels = vi.fn()
    const onViewHistory = vi.fn()

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        lifecycleStatus: createLifecycleStatus(),
        onViewWorkflows,
        onViewModels,
        onViewHistory
      },
      global: {
        stubs: ['Teleport']
      }
    })

    const titleButtons = wrapper.findAll('.lifecycle-tile__title-button')
    const workflowsTitle = titleButtons.find(button => button.text() === 'Workflows')
    const modelsTitle = titleButtons.find(button => button.text() === 'Models')
    const snapshotTitle = titleButtons.find(button => button.text() === 'Snapshot')

    expect(workflowsTitle).toBeTruthy()
    expect(modelsTitle).toBeTruthy()
    expect(snapshotTitle).toBeTruthy()

    await workflowsTitle!.trigger('click')
    expect(onViewWorkflows).toHaveBeenCalledTimes(1)

    await modelsTitle!.trigger('click')
    expect(onViewModels).toHaveBeenCalledTimes(1)

    await snapshotTitle!.trigger('click')
    expect(onViewHistory).toHaveBeenCalledTimes(1)
  })

  it('shows version target in the nodes tile when guidance is available', () => {
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
        stubs: ['Teleport']
      }
    })

    const nodesTile = findLifecycleTile(wrapper, 'Nodes')
    expect(nodesTile.text()).toContain('1 node needs newer ComfyUI (>= 0.3.10)')
    expect(wrapper.text()).not.toContain('ISSUES')
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
        stubs: ['Teleport']
      }
    })

    expect(wrapper.text()).toContain('community packages')
    expect(wrapper.text().toLowerCase()).not.toContain('uninstallable node mappings')
  })

  it('shows runtime custom node import failures in the runtime tile', () => {
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
        stubs: ['Teleport']
      }
    })

    expect(wrapper.text()).toContain('1 custom node failed to import')
    expect(wrapper.text()).toContain('ComfyUI-FL-VoxCPM')
    expect(wrapper.text()).toContain('VoxCPM V2 TTS')
    expect(wrapper.text()).not.toContain('ISSUES')
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
        stubs: ['Teleport']
      }
    })

    expect(wrapper.text()).toContain('Nodes need attention')
    expect(wrapper.text()).not.toContain('Filesystem needs attention')
    expect(wrapper.text()).toContain('Manifest declares custom nodes that are missing on disk.')
    expect(wrapper.text()).toContain('comfyui-impact-pack')
    expect(wrapper.text()).toContain('Restart required after applying this action')

    const nodesTile = findLifecycleTile(wrapper, 'Nodes')
    expect(nodesTile.classes()).toContain('lifecycle-tile--blocked')
    expect(nodesTile.text()).toContain('1 declared node missing on disk')
    expect(nodesTile.text()).toContain('Sync missing nodes')

    const tileSyncButton = nodesTile.findAll('button')
      .find(button => button.text().includes('Sync missing nodes'))
    expect(tileSyncButton).toBeTruthy()
    await tileSyncButton!.trigger('click')
    expect(onSyncEnvironment).toHaveBeenCalledTimes(1)

    const syncButton = wrapper.findAllComponents({ name: 'ActionButton' })
      .find(button => button.text().includes('Sync missing nodes'))
    expect(syncButton).toBeTruthy()
    await syncButton!.trigger('click')
    expect(onSyncEnvironment).toHaveBeenCalledTimes(2)
  })

  it('shows workflow tracked node materialization guidance as node attention', async () => {
    const status = createMockStatus()
    const onSyncEnvironment = vi.fn()
    status.comparison.missing_nodes = ['ComfyUI-Impact-Pack']
    status.workflows.analyzed = [
      {
        name: 'LTX-2.3_-_FML2V_First_Middle_Last_Frame_guider',
        sync_state: 'synced',
        status: 'broken',
        has_issues: true,
        has_path_sync_issues: false,
        uninstalled_nodes: 1,
        unresolved_nodes_count: 0,
        nodes_version_gated_count: 0,
        nodes_uninstallable_count: 0,
        version_gated_guidance: [],
        unresolved_models_count: 0,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 0,
        issue_summary: '1 node to install',
        node_count: 10,
        model_count: 0,
        has_category_mismatch_issues: false,
        models_with_category_mismatch_count: 0
      }
    ]

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onSyncEnvironment,
        lifecycleStatus: createLifecycleStatus({
          issues: [
            {
              id: 'workflow_uninstalled_nodes',
              layer: 'filesystem',
              severity: 'error',
              message: 'Tracked workflow nodes are not installed locally.',
              blocking: true,
              affected_resources: ['LTX-2.3_-_FML2V_First_Middle_Last_Frame_guider'],
              source: 'WorkflowAnalysisStatus.uninstalled_nodes',
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
              issue_ids: ['workflow_uninstalled_nodes'],
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
        stubs: ['Teleport']
      }
    })

    expect(wrapper.text()).toContain('Nodes need attention')
    expect(wrapper.text()).not.toContain('Filesystem needs attention')
    expect(wrapper.text()).toContain('Tracked workflow nodes are not installed locally.')
    expect(wrapper.text()).toContain('LTX-2.3_-_FML2V_First_Middle_Last_Frame_guider')

    const nodesTile = findLifecycleTile(wrapper, 'Nodes')
    expect(nodesTile.classes()).toContain('lifecycle-tile--blocked')
    expect(nodesTile.text()).toContain('1 workflow needs nodes')
    expect(nodesTile.text()).toContain('Sync missing nodes')

    const filesystemTile = findLifecycleTile(wrapper, 'Filesystem')
    expect(filesystemTile.classes()).toContain('lifecycle-tile--ok')

    const syncButton = nodesTile.findAll('button')
      .find(button => button.text().includes('Sync missing nodes'))
    expect(syncButton).toBeTruthy()
    await syncButton!.trigger('click')
    expect(onSyncEnvironment).toHaveBeenCalledTimes(1)
  })

  it('routes untracked workflow node package installs to dependency resolution', async () => {
    const status = createMockStatus()
    const onResolveWorkflowDependencies = vi.fn()
    const onSyncEnvironment = vi.fn()
    status.workflows.analyzed = [
      {
        name: 'captured-node-flow',
        sync_state: 'synced',
        status: 'broken',
        has_issues: true,
        has_path_sync_issues: false,
        uninstalled_nodes: 1,
        unresolved_nodes_count: 0,
        nodes_version_gated_count: 0,
        nodes_uninstallable_count: 0,
        version_gated_guidance: [],
        unresolved_models_count: 0,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 0,
        issue_summary: '1 node package needs install',
        node_count: 10,
        model_count: 0,
        has_category_mismatch_issues: false,
        models_with_category_mismatch_count: 0
      }
    ]

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onResolveWorkflowDependencies,
        onSyncEnvironment
      },
      global: {
        stubs: ['Teleport']
      }
    })

    const nodesTile = findLifecycleTile(wrapper, 'Nodes')
    expect(nodesTile.classes()).toContain('lifecycle-tile--blocked')
    expect(nodesTile.text()).toContain('1 workflow needs nodes')
    expect(nodesTile.text()).toContain('Resolve nodes')
    expect(nodesTile.text()).not.toContain('Sync missing nodes')

    const resolveButton = nodesTile.findAll('button')
      .find(button => button.text().includes('Resolve nodes'))
    expect(resolveButton).toBeTruthy()
    await resolveButton!.trigger('click')
    expect(onResolveWorkflowDependencies).toHaveBeenCalledWith('captured-node-flow')
    expect(onSyncEnvironment).not.toHaveBeenCalled()
  })

  it('routes unresolved node tile CTA to workflow dependency resolution', async () => {
    const status = createMockStatus()
    const onResolveWorkflowDependencies = vi.fn()
    status.workflows.analyzed = [
      {
        name: 'node-resolution-flow',
        sync_state: 'synced',
        status: 'broken',
        has_issues: true,
        has_path_sync_issues: false,
        uninstalled_nodes: 0,
        unresolved_nodes_count: 1,
        nodes_version_gated_count: 0,
        nodes_uninstallable_count: 0,
        version_gated_guidance: [],
        unresolved_models_count: 0,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 0,
        issue_summary: '1 missing node',
        node_count: 10,
        model_count: 0,
        has_category_mismatch_issues: false,
        models_with_category_mismatch_count: 0
      }
    ]

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onResolveWorkflowDependencies
      },
      global: {
        stubs: ['Teleport']
      }
    })

    const nodesTile = findLifecycleTile(wrapper, 'Nodes')
    expect(nodesTile.classes()).toContain('lifecycle-tile--blocked')
    expect(nodesTile.text()).toContain('1 workflow needs nodes')
    expect(nodesTile.text()).toContain('Resolve nodes')

    const resolveButton = nodesTile.findAll('button')
      .find(button => button.text().includes('Resolve nodes'))
    expect(resolveButton).toBeTruthy()
    await resolveButton!.trigger('click')
    expect(onResolveWorkflowDependencies).toHaveBeenCalledWith('node-resolution-flow')
  })

  it('routes new workflow uninstalled-node CTA to workflow dependency resolution', async () => {
    const status = createMockStatus()
    const onResolveWorkflowDependencies = vi.fn()
    const onSyncEnvironment = vi.fn()
    status.workflows.new = ['new-node-flow']
    status.workflows.analyzed = [
      {
        name: 'new-node-flow',
        sync_state: 'new',
        status: 'broken',
        has_issues: true,
        has_path_sync_issues: false,
        uninstalled_nodes: 1,
        unresolved_nodes_count: 0,
        nodes_version_gated_count: 0,
        nodes_uninstallable_count: 0,
        version_gated_guidance: [],
        unresolved_models_count: 0,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 0,
        issue_summary: '1 node package needs install',
        node_count: 10,
        model_count: 0,
        has_category_mismatch_issues: false,
        models_with_category_mismatch_count: 0
      }
    ]

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onResolveWorkflowDependencies,
        onSyncEnvironment
      },
      global: {
        stubs: ['Teleport']
      }
    })

    const nodesTile = findLifecycleTile(wrapper, 'Nodes')
    expect(nodesTile.classes()).toContain('lifecycle-tile--blocked')
    expect(nodesTile.text()).toContain('1 workflow needs nodes')
    expect(nodesTile.text()).toContain('Resolve nodes')
    expect(nodesTile.text()).not.toContain('Sync missing nodes')

    const resolveButton = nodesTile.findAll('button')
      .find(button => button.text().includes('Resolve nodes'))
    expect(resolveButton).toBeTruthy()
    await resolveButton!.trigger('click')
    expect(onResolveWorkflowDependencies).toHaveBeenCalledWith('new-node-flow')
    expect(onSyncEnvironment).not.toHaveBeenCalled()
  })

  it('routes top lifecycle node dependency CTA to workflow dependency resolution', async () => {
    const status = createMockStatus()
    const onResolveWorkflowDependencies = vi.fn()
    const onSyncEnvironment = vi.fn()
    status.workflows.new = ['new-node-flow']
    status.workflows.analyzed = [
      {
        name: 'new-node-flow',
        sync_state: 'new',
        status: 'broken',
        has_issues: true,
        has_path_sync_issues: false,
        uninstalled_nodes: 1,
        unresolved_nodes_count: 0,
        nodes_version_gated_count: 0,
        nodes_uninstallable_count: 0,
        version_gated_guidance: [],
        unresolved_models_count: 0,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 0,
        issue_summary: '1 node package needs install',
        node_count: 10,
        model_count: 0,
        has_category_mismatch_issues: false,
        models_with_category_mismatch_count: 0
      }
    ]

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onResolveWorkflowDependencies,
        onSyncEnvironment,
        lifecycleStatus: createLifecycleStatus({
          issues: [
            {
              id: 'workflow_node_dependencies_pending',
              layer: 'manifest',
              severity: 'error',
              message: 'Workflows need custom-node dependencies resolved before they can be installed.',
              blocking: true,
              affected_resources: ['new-node-flow'],
              source: 'ResolutionResult.nodes_resolved_uninstalled',
              details: [],
              action_ids: ['resolve_workflow_nodes']
            }
          ],
          actions: [
            {
              id: 'resolve_workflow_nodes',
              label: 'Resolve workflow nodes',
              description: 'Choose how missing workflow custom-node dependencies should be resolved.',
              target_layer: 'manifest',
              issue_ids: ['workflow_node_dependencies_pending'],
              expected_mutation_layers: ['manifest', 'filesystem', 'runtime'],
              enabled: true,
              disabled_reason: null,
              destructive: false,
              restart_required: true,
              confirmation_required: false
            }
          ],
          primary_action_id: 'resolve_workflow_nodes'
        })
      },
      global: {
        stubs: ['Teleport']
      }
    })

    expect(wrapper.text()).toContain('Nodes need attention')
    expect(wrapper.text()).toContain('Resolve workflow nodes')

    const resolveButton = wrapper.findAllComponents({ name: 'ActionButton' })
      .find(button => button.text().includes('Resolve workflow nodes'))
    expect(resolveButton).toBeTruthy()
    await resolveButton!.find('button').trigger('click')

    expect(onResolveWorkflowDependencies).toHaveBeenCalledWith('new-node-flow')
    expect(onSyncEnvironment).not.toHaveBeenCalled()
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
        stubs: ['Teleport']
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

    const snapshotTileCommitButton = wrapper.findAllComponents({ name: 'ActionButton' })
      .find(button => button.text() === 'Commit')
    expect(snapshotTileCommitButton).toBeTruthy()
    await snapshotTileCommitButton!.trigger('click')
    expect(onCommitChanges).toHaveBeenCalledTimes(2)
  })

  it('shows modified workflow lifecycle guidance as a commit snapshot action', async () => {
    const status = createMockStatus()
    status.workflows.modified = ['txt2img_basic']
    const onCommitChanges = vi.fn()

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onCommitChanges,
        lifecycleStatus: createLifecycleStatus({
          issues: [
            {
              id: 'workflow_modified',
              layer: 'snapshot',
              severity: 'warning',
              message: 'Workflow modified in ComfyUI and not yet captured in the environment snapshot.',
              blocking: false,
              affected_resources: ['txt2img_basic'],
              source: 'WorkflowSyncStatus.modified',
              details: [],
              action_ids: ['commit_snapshot', 'review_workflow_changes']
            }
          ],
          actions: [
            {
              id: 'commit_snapshot',
              label: 'Commit snapshot',
              description: 'Commit the current desired environment state.',
              target_layer: 'snapshot',
              issue_ids: ['workflow_modified'],
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
        stubs: ['Teleport']
      }
    })

    expect(wrapper.text()).toContain('Workflow modified')
    expect(wrapper.text()).toContain('Workflow modified in ComfyUI')
    expect(wrapper.text()).toContain('txt2img_basic')
    expect(wrapper.text()).not.toContain('Manifest needs attention')

    const commitButton = wrapper.findAllComponents({ name: 'ActionButton' })
      .find(button => button.text().includes('Commit snapshot'))
    expect(commitButton).toBeTruthy()
    await commitButton!.trigger('click')
    expect(onCommitChanges).toHaveBeenCalledTimes(1)
  })

  it('keeps workflow file lifecycle separate from model dependency blockers', () => {
    const status = createMockStatus()
    status.workflows.new = ['sd1.5']
    status.workflows.analyzed = [
      {
        name: 'sd1.5',
        sync_state: 'new',
        status: 'broken',
        has_issues: true,
        has_path_sync_issues: false,
        uninstalled_nodes: 0,
        unresolved_nodes_count: 0,
        nodes_version_gated_count: 0,
        nodes_uninstallable_count: 0,
        version_gated_guidance: [],
        unresolved_models_count: 1,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 0,
        issue_summary: '1 unresolved model',
        node_count: 10,
        model_count: 1,
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
        stubs: ['Teleport']
      }
    })

    const workflowsTile = findLifecycleTile(wrapper, 'Workflows')
    expect(workflowsTile.classes()).toContain('lifecycle-tile--attention')
    expect(workflowsTile.classes()).not.toContain('lifecycle-tile--blocked')
    expect(workflowsTile.text()).toContain('1 new workflow to commit')
    expect(workflowsTile.text()).not.toContain("can't run")
    expect(workflowsTile.text()).not.toContain('unresolved models')

    const modelsTile = findLifecycleTile(wrapper, 'Models')
    expect(modelsTile.classes()).toContain('lifecycle-tile--blocked')
    expect(modelsTile.text()).toContain('1 workflow missing models')
  })

  it('shows captured git workflow additions as workflow-domain pending snapshot work', () => {
    const status = createMockStatus()
    status.has_changes = true
    status.workflows.synced = ['existing_1', 'existing_2', 'existing_3', 'existing_4', 'ltx_flow']
    status.git_changes.workflow_changes = true
    status.git_changes.workflow_changes_detail = {
      ltx_flow: 'added'
    }

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed'
      },
      global: {
        stubs: ['Teleport']
      }
    })

    const workflowsTile = findLifecycleTile(wrapper, 'Workflows')
    expect(workflowsTile.classes()).toContain('lifecycle-tile--attention')
    expect(workflowsTile.text()).toContain('1 new workflow to commit')
    expect(workflowsTile.text()).toContain('5 captured')
    expect(workflowsTile.text()).not.toContain('5 synced')

    const snapshotTile = findLifecycleTile(wrapper, 'Snapshot')
    expect(snapshotTile.text()).toContain('1 new workflow to commit')
    expect(snapshotTile.text()).toContain('Commit')
  })

  it('routes missing model lifecycle CTA to workflow dependency resolution', async () => {
    const status = createMockStatus()
    const onResolveWorkflowDependencies = vi.fn()
    status.workflows.new = ['sd1.5']
    status.workflows.analyzed = [
      {
        name: 'sd1.5',
        sync_state: 'new',
        status: 'broken',
        has_issues: true,
        has_path_sync_issues: false,
        uninstalled_nodes: 0,
        unresolved_nodes_count: 0,
        nodes_version_gated_count: 0,
        nodes_uninstallable_count: 0,
        version_gated_guidance: [],
        unresolved_models_count: 1,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 0,
        issue_summary: '1 unresolved model',
        node_count: 10,
        model_count: 1,
        has_category_mismatch_issues: false,
        models_with_category_mismatch_count: 0
      }
    ]

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onResolveWorkflowDependencies,
        lifecycleStatus: createLifecycleStatus({
          issues: [
            {
              id: 'missing_model_source',
              layer: 'workspace_index',
              severity: 'error',
              message: 'Workflows reference models that are not available or sourced.',
              blocking: true,
              affected_resources: ['sd1.5'],
              source: 'ResolutionResult.models_unresolved',
              details: [],
              action_ids: ['resolve_missing_model']
            }
          ],
          actions: [
            {
              id: 'resolve_missing_model',
              label: 'Resolve models',
              description: 'Choose how missing workflow model references should be resolved.',
              target_layer: 'workspace_index',
              issue_ids: ['missing_model_source'],
              expected_mutation_layers: ['manifest', 'filesystem', 'workspace_index'],
              enabled: true,
              disabled_reason: null,
              destructive: false,
              restart_required: false,
              confirmation_required: false
            }
          ],
          primary_action_id: 'resolve_missing_model'
        })
      },
      global: {
        stubs: ['Teleport']
      }
    })

    expect(wrapper.text()).toContain('Model index needs attention')
    expect(wrapper.text()).toContain('Resolve models')

    const resolveButton = wrapper.findAllComponents({ name: 'ActionButton' })
      .find(button => button.text().includes('Resolve models'))
    expect(resolveButton).toBeTruthy()
    await resolveButton!.find('button').trigger('click')

    expect(onResolveWorkflowDependencies).toHaveBeenCalledWith('sd1.5')
  })

  it('prioritizes model tile CTA for missing models over pending downloads and source review', async () => {
    const status = createMockStatus()
    const onResolveWorkflowDependencies = vi.fn()
    status.workflows.analyzed = [
      {
        name: 'missing-model-flow',
        sync_state: 'synced',
        status: 'broken',
        has_issues: true,
        has_path_sync_issues: false,
        uninstalled_nodes: 0,
        unresolved_nodes_count: 0,
        nodes_version_gated_count: 0,
        nodes_uninstallable_count: 0,
        version_gated_guidance: [],
        unresolved_models_count: 1,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 0,
        issue_summary: '1 unresolved model',
        node_count: 10,
        model_count: 1,
        has_category_mismatch_issues: false,
        models_with_category_mismatch_count: 0
      },
      {
        name: 'pending-download-flow',
        sync_state: 'synced',
        status: 'pending_download',
        has_issues: false,
        has_path_sync_issues: false,
        uninstalled_nodes: 0,
        unresolved_nodes_count: 0,
        nodes_version_gated_count: 0,
        nodes_uninstallable_count: 0,
        version_gated_guidance: [],
        unresolved_models_count: 0,
        ambiguous_models_count: 0,
        ambiguous_nodes_count: 0,
        models_needing_path_sync_count: 0,
        pending_downloads_count: 1,
        issue_summary: '1 pending model download',
        node_count: 10,
        model_count: 1,
        has_category_mismatch_issues: false,
        models_with_category_mismatch_count: 0
      }
    ]

    const wrapper = mount(StatusSection, {
      props: {
        status,
        setupState: 'managed',
        onResolveWorkflowDependencies
      },
      global: {
        stubs: ['Teleport']
      }
    })

    const modelsTile = findLifecycleTile(wrapper, 'Models')
    expect(modelsTile.text()).toContain('1 workflow missing models')
    expect(modelsTile.text()).toContain('1 workflow pending model downloads')

    expect(modelsTile.text()).toContain('Resolve models')
    const resolveButton = modelsTile.findAll('button')
      .find(button => button.text().includes('Resolve models'))
    expect(resolveButton).toBeTruthy()
    expect(modelsTile.text()).not.toContain('Review')

    await resolveButton!.trigger('click')
    expect(onResolveWorkflowDependencies).toHaveBeenCalledWith('missing-model-flow')
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
        stubs: ['Teleport']
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
