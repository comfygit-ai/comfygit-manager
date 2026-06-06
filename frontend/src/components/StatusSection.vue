<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="STATUS" />
    </template>

    <template #content>
      <!-- Setup Issue Cards (highest priority) -->
      <IssueCard
        v-if="props.setupState === 'no_workspace'"
        severity="info"
        icon="🚀"
        title="No ComfyGit workspace detected"
        description="Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
      >
        <template #actions>
          <ActionButton variant="primary" size="sm" @click="$emit('start-setup')">
            Start Setup
          </ActionButton>
        </template>
      </IssueCard>

      <IssueCard
        v-else-if="props.setupState === 'unmanaged'"
        severity="warning"
        icon="⚠"
        title="Not in a managed environment"
        description="You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
      >
        <template #actions>
          <ActionButton variant="primary" size="sm" @click="$emit('view-environments')">
            View Environments
          </ActionButton>
        </template>
      </IssueCard>

      <IssueCard
        v-else-if="props.setupState === 'empty_workspace'"
        severity="info"
        icon="🏗"
        title="Workspace ready - create your first environment"
        description="Your workspace is set up. Create a managed environment to start using ComfyGit."
      >
        <template #actions>
          <ActionButton variant="primary" size="sm" @click="$emit('create-environment')">
            Create Environment
          </ActionButton>
        </template>
      </IssueCard>

      <IssueCard
        v-if="lifecycleGuidance"
        :severity="lifecycleGuidance.severity"
        :icon="lifecycleGuidance.icon"
        :title="lifecycleGuidance.title"
        :description="lifecycleGuidance.description"
        :items="lifecycleGuidance.items"
      >
        <template #actions>
          <ActionButton
            v-if="lifecycleGuidance.primaryAction"
            variant="primary"
            size="sm"
            :disabled="!lifecycleGuidance.primaryAction.enabled"
            @click="handleLifecycleAction(lifecycleGuidance.primaryAction)"
          >
            {{ lifecycleGuidance.primaryAction.label }}
          </ActionButton>
        </template>
      </IssueCard>

      <!-- Environment Health Section -->
      <div class="health-section-wrapper">
        <div class="health-section-header">
          <SectionTitle level="4" style="margin-bottom: var(--cg-space-2)">
            ENVIRONMENT HEALTH
          </SectionTitle>
        </div>

        <div class="lifecycle-tile-grid">
          <div
            v-for="tile in lifecycleTiles"
            :key="tile.id"
            :class="['lifecycle-tile', `lifecycle-tile--${tile.status}`]"
          >
            <div class="lifecycle-tile__header">
              <button
                v-if="tile.navigationAction"
                type="button"
                class="lifecycle-tile__title lifecycle-tile__title-button"
                @click="handleLifecycleTileNavigation(tile)"
              >
                {{ tile.title }}
              </button>
              <h4 v-else class="lifecycle-tile__title">{{ tile.title }}</h4>
              <span
                v-if="tile.status !== 'ok'"
                :class="['lifecycle-tile__badge', `lifecycle-tile__badge--${tile.status}`]"
              >
                {{ tile.statusLabel }}
              </span>
            </div>

            <div class="lifecycle-tile__lines">
              <div
                v-for="line in tile.lines"
                :key="line.text"
                :class="['lifecycle-tile__line', `lifecycle-tile__line--${line.variant || tile.status}`]"
              >
                <span class="lifecycle-tile__mark">{{ line.icon || lineIcon(line.variant || tile.status) }}</span>
                <span>{{ line.text }}</span>
              </div>
            </div>

            <div v-if="tile.action" class="lifecycle-tile__action">
              <ActionButton
                :variant="tile.status === 'blocked' ? 'primary' : 'secondary'"
                size="xs"
                @click.stop="handleLifecycleTileAction(tile)"
              >
                {{ tile.action.label }}
              </ActionButton>
            </div>
          </div>
        </div>
      </div>

    </template>
  </PanelLayout>

  <ReadinessIssuesModal
    v-if="showReadinessIssuesModal && readinessResult"
    :warnings="readinessResult.warnings"
    @close="showReadinessIssuesModal = false"
    @revalidate="handleReadinessRevalidate"
    @applied="handleReadinessApplied"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type {
  AnalyzedWorkflow,
  ComfyGitStatus,
  EnvironmentLifecycleStatus,
  ExportValidationResult,
  LifecycleAction,
  LifecycleIssue,
  SetupState
} from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SectionTitle from '@/components/base/atoms/SectionTitle.vue'
import IssueCard from '@/components/base/molecules/IssueCard.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import ReadinessIssuesModal from '@/components/ReadinessIssuesModal.vue'

interface Props {
  status: ComfyGitStatus
  setupState?: SetupState
  lifecycleStatus?: EnvironmentLifecycleStatus | null
}

const props = withDefaults(defineProps<Props>(), {
  setupState: 'managed'
})

const showReadinessIssuesModal = ref(false)
const readinessResult = ref<ExportValidationResult | null>(null)
const readinessError = ref<string | null>(null)
const isCheckingReadiness = ref(false)

const { validateExport } = useComfyGitService()

const emit = defineEmits<{
  'view-workflows': []
  'view-models': []
  'view-history': []
  'commit-changes': []
  'view-debug': []
  'sync-environment': []
  'create-branch': []
  'view-nodes': []
  'repair-environment': []
  'start-setup': []
  'view-environments': []
  'create-environment': []
  'refresh-status': []
  'resolve-workflow-dependencies': [workflowName?: string]
}>()

type IssueCardSeverity = 'info' | 'warning' | 'error'
type LifecycleTileStatus = 'ok' | 'attention' | 'blocked' | 'unknown'
type LifecycleTileActionID =
  | 'view-workflows'
  | 'view-models'
  | 'view-nodes'
  | 'view-history'
  | 'view-debug'
  | 'sync-environment'
  | 'repair-environment'
  | 'commit-changes'
  | 'create-branch'
  | 'review-readiness'
  | 'resolve-models'
  | 'download-models'
  | 'sync-model-paths'
  | 'resolve-nodes'
  | 'refresh-status'

interface LifecycleTileLine {
  text: string
  variant?: LifecycleTileStatus
  icon?: string
}

interface LifecycleTileAction {
  id: LifecycleTileActionID
  label: string
}

interface LifecycleTile {
  id: string
  title: string
  status: LifecycleTileStatus
  statusLabel: string
  lines: LifecycleTileLine[]
  navigationAction?: LifecycleTileAction
  action?: LifecycleTileAction
}

interface LifecycleGuidanceView {
  severity: IssueCardSeverity
  icon: string
  title: string
  description: string
  items: string[]
  primaryAction: LifecycleAction | null
}

const NODE_LIFECYCLE_ISSUE_IDS = new Set([
  'missing_declared_nodes',
  'missing_development_nodes',
  'untracked_node_folder',
  'untracked_development_node',
  'node_version_mismatch',
  'disabled_node',
  'workflow_unresolved_nodes',
  'workflow_node_dependencies_pending',
  'workflow_uninstalled_nodes',
  'workflow_version_gated_nodes',
  'workflow_uninstallable_nodes',
  'node_provenance_missing'
])

const lifecyclePrimaryAction = computed(() => {
  const lifecycle = props.lifecycleStatus
  if (!lifecycle) return null
  return lifecycle.actions.find(action => action.id === lifecycle.primary_action_id) ||
         lifecycle.actions.find(action => action.enabled) ||
         null
})

const lifecycleIssuesById = computed(() => {
  const entries = (props.lifecycleStatus?.issues || []).map(issue => [issue.id, issue] as const)
  return new Map(entries)
})

const lifecyclePrimaryIssue = computed(() => {
  const lifecycle = props.lifecycleStatus
  if (!lifecycle) return null

  const action = lifecyclePrimaryAction.value
  const actionIssue = action?.issue_ids
    .map(id => lifecycleIssuesById.value.get(id))
    .find((issue): issue is LifecycleIssue => Boolean(issue))
  if (actionIssue) return actionIssue

  return lifecycle.issues.find(issue => issue.severity === 'error') ||
         lifecycle.issues.find(issue => issue.severity === 'warning') ||
         lifecycle.issues.find(issue => issue.severity === 'info') ||
         null
})

const lifecycleGuidance = computed<LifecycleGuidanceView | null>(() => {
  if (props.setupState !== 'managed') return null
  const issue = lifecyclePrimaryIssue.value
  const action = lifecyclePrimaryAction.value
  if (!issue && !action) return null

  const severity = issue?.severity || 'info'
  return {
    severity,
    icon: severity === 'error' ? '⚠' : severity === 'warning' ? '⚠' : 'ℹ',
    title: issue ? lifecycleIssueTitle(issue) : 'Recommended next step',
    description: issue?.message || action?.description || 'Review the current environment lifecycle state.',
    items: lifecycleGuidanceItems(issue, action),
    primaryAction: action
  }
})

function lifecycleIssueTitle(issue: LifecycleIssue): string {
  if (NODE_LIFECYCLE_ISSUE_IDS.has(issue.id)) {
    return 'Nodes need attention'
  }
  if (issue.id === 'new_workflow_added') {
    return issue.affected_resources.length === 1 ? 'New workflow added' : 'New workflows added'
  }
  if (issue.id === 'workflow_modified') {
    return issue.affected_resources.length === 1 ? 'Workflow modified' : 'Workflows modified'
  }
  if (issue.id === 'workflow_deleted') {
    return issue.affected_resources.length === 1 ? 'Workflow removed' : 'Workflows removed'
  }
  if (issue.id === 'workflow_changes') {
    return 'Workflow changes pending'
  }

  const layerLabels: Record<string, string> = {
    manifest: 'Manifest needs attention',
    filesystem: 'Filesystem needs attention',
    runtime: 'Runtime needs attention',
    snapshot: 'Snapshot needs attention',
    workspace_index: 'Model index needs attention',
    operation: 'Operation in progress'
  }
  return layerLabels[issue.layer] || 'Environment needs attention'
}

function lifecycleGuidanceItems(issue: LifecycleIssue | null, action: LifecycleAction | null): string[] {
  const items: string[] = []

  if (issue) {
    issue.affected_resources.slice(0, 4).forEach(resource => {
      items.push(resource)
    })
    if (issue.affected_resources.length > 4) {
      items.push(`...and ${issue.affected_resources.length - 4} more`)
    }
    if (items.length === 0) {
      issue.details.slice(0, 3).forEach(detail => items.push(detail))
    }
  }

  if (action?.restart_required) {
    items.push('Restart required after applying this action')
  }
  if (action?.disabled_reason) {
    items.push(action.disabled_reason)
  }

  return items
}

async function openReadinessIssues() {
  if (!readinessResult.value) {
    await validateReadiness()
  }
  if (readinessResult.value) {
    showReadinessIssuesModal.value = true
  }
}

async function handleLifecycleAction(action: LifecycleAction) {
  if (!action.enabled) return

  switch (action.id) {
    case 'setup_workspace':
      emit('start-setup')
      return
    case 'create_environment':
      emit('create-environment')
      return
    case 'import_existing_environment':
      emit('view-environments')
      return
    case 'sync_environment':
    case 'sync_missing_nodes':
      emit('sync-environment')
      return
    case 'repair_environment':
    case 'restart_comfyui':
      emit('repair-environment')
      return
    case 'review_untracked_node':
    case 'track_dev_node':
    case 'remove_untracked_node':
    case 'restore_or_relink_dev_node':
    case 'view_runtime_import_error':
      emit('view-nodes')
      return
    case 'review_workflow_changes':
      emit('view-workflows')
      return
    case 'resolve_workflow_nodes':
    case 'sync_model_paths':
    case 'download_required_models':
    case 'resolve_missing_model':
      emit('resolve-workflow-dependencies', workflowNameForLifecycleAction(action.id))
      return
    case 'add_model_source':
    case 'add_node_source_info':
    case 'fix_build_readiness':
    case 'export_environment':
    case 'deploy_environment':
      await openReadinessIssues()
      return
    case 'commit_snapshot':
      emit('commit-changes')
      return
    case 'create_branch':
      emit('create-branch')
      return
    case 'push_snapshot':
      emit('view-history')
      return
    case 'view_operation_logs':
      emit('view-debug')
      return
    default:
      handleLifecycleLayer(action.target_layer)
  }
}

function handleLifecycleLayer(layer: LifecycleAction['target_layer']) {
  switch (layer) {
    case 'manifest':
    case 'workspace_index':
      emit('view-workflows')
      return
    case 'filesystem':
    case 'runtime':
      emit('view-nodes')
      return
    case 'snapshot':
      emit('view-history')
      return
    case 'operation':
      emit('view-debug')
      return
    default:
      return
  }
}

function resetRepairingState() {
  // Kept for parent compatibility; missing-model repair now routes through Workflows.
}

function resetRepairingEnvironmentState() {
  // Kept for parent compatibility; repair state is now owned by the parent flow.
}

function closeDetailModal() {
  showReadinessIssuesModal.value = false
}

defineExpose({ resetRepairingState, resetRepairingEnvironmentState, closeDetailModal })

const hasWorkflowChanges = computed(() => {
  return props.status.workflows.new.length > 0 ||
         props.status.workflows.modified.length > 0 ||
         props.status.workflows.deleted.length > 0
})

const hasUncommittedWork = computed(() => {
  return props.status.has_changes || hasWorkflowChanges.value
})

const readinessWarnings = computed(() => readinessResult.value?.warnings || {
  models_without_sources: [],
  nodes_without_provenance: [],
  runtime_node_import_failures: []
})

const readinessModelWarningCount = computed(() =>
  readinessWarnings.value.models_without_sources.length
)

const readinessNodeWarningCount = computed(() =>
  readinessWarnings.value.nodes_without_provenance.length
)

async function validateReadiness() {
  isCheckingReadiness.value = true
  readinessError.value = null

  try {
    readinessResult.value = await validateExport()
  } catch (err) {
    readinessError.value = err instanceof Error ? err.message : 'Failed to check readiness'
  } finally {
    isCheckingReadiness.value = false
  }
}

async function handleReadinessRevalidate() {
  await validateReadiness()
}

function handleReadinessApplied() {
  emit('refresh-status')
}

watch(
  () => [
    props.setupState,
    props.status.has_changes,
    props.status.workflows.new.length,
    props.status.workflows.modified.length,
    props.status.workflows.deleted.length,
    props.status.missing_models_count,
    props.status.comparison.is_synced,
    props.status.has_legacy_manager,
    props.status.runtime_issues?.custom_node_import_failure_count || 0,
  ],
  () => {
    if (props.setupState === 'managed') {
      void validateReadiness()
    }
  },
  { immediate: true }
)

const workflowChangesCount = computed(() => {
  return Object.keys(props.status.git_changes.workflow_changes_detail).length
})

const capturedWorkflowChangeCounts = computed(() => {
  const counts = {
    added: 0,
    modified: 0,
    deleted: 0,
    other: 0
  }

  for (const changeType of Object.values(props.status.git_changes.workflow_changes_detail)) {
    if (changeType === 'added') counts.added += 1
    else if (changeType === 'modified') counts.modified += 1
    else if (changeType === 'deleted') counts.deleted += 1
    else counts.other += 1
  }

  return counts
})

const capturedWorkflowChangesCount = computed(() => {
  const counts = capturedWorkflowChangeCounts.value
  return counts.added + counts.modified + counts.deleted + counts.other
})

const hasOtherWorkflowChanges = computed(() => {
  return props.status.git_changes.has_other_changes
})

// All broken workflows (can't run - has_issues=true)
const allBrokenWorkflows = computed(() => {
  return props.status.workflows.analyzed?.filter(w => w.status === 'broken') || []
})

// Workflows with path sync issues only (can run but paths need fixing)
const pathSyncWorkflows = computed(() => {
  return props.status.workflows.analyzed?.filter(w =>
    w.has_path_sync_issues && !w.has_issues
  ) || []
})

const runtimeNodeImportFailures = computed(() =>
  props.status.runtime_issues?.custom_node_import_failures || []
)

const runtimeNodeImportItems = computed(() =>
  runtimeNodeImportFailures.value.map((node) => {
    const workflows = node.used_in_workflows || []
    if (workflows.length === 0) {
      return `${node.name} — check ComfyUI logs`
    }
    if (workflows.length === 1) {
      return `${node.name} — used by ${workflows[0]}`
    }
    return `${node.name} — used by ${workflows.length} workflows`
  })
)

function extractVersionTarget(guidance: string): string | null {
  const patterns = [
    />=\s*v?(\d+(?:\.\d+){1,3})/i,
    /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
    /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
  ]

  for (const pattern of patterns) {
    const match = guidance.match(pattern)
    if (match?.[1]) {
      return match[1]
    }
  }

  return null
}

function getVersionTargetsFromGuidance(guidanceList: string[]): string[] {
  const targets = guidanceList
    .map(extractVersionTarget)
    .filter((target): target is string => Boolean(target))
  return [...new Set(targets)]
}

function formatWorkflowVersionTargetSummary(targets: string[]): string {
  if (targets.length === 0) return ''
  if (targets.length === 1) return ` (>= ${targets[0]})`

  const shownTargets = targets.slice(0, 2).map(target => `>= ${target}`).join(', ')
  const hasMore = targets.length > 2
  return ` (${shownTargets}${hasMore ? ', ...' : ''})`
}

function normalizeIssueTerminology(summary: string): string {
  return summary
    .replace(/uninstallable node mappings?/gi, (match) => match.toLowerCase().endsWith('s') ? 'community packages' : 'community package')
    .replace(/no installable package versions?/gi, 'need community packages')
    .replace(/\bare uninstallable\b/gi, 'need community packages')
    .replace(/\buninstallable\b/gi, 'community-mapped')
}

function formatBrokenWorkflowItem(wf: AnalyzedWorkflow): string {
  const summary = normalizeIssueTerminology(wf.issue_summary || 'Has issues')
  const summaryHasVersionInfo = /(?:>=|v?\d+\.\d+)/i.test(summary)
  const versionTargets = getVersionTargetsFromGuidance(wf.version_gated_guidance || [])

  if ((wf.nodes_version_gated_count || 0) > 0 && versionTargets.length > 0 && !summaryHasVersionInfo) {
    return `${wf.name} — ${summary} (needs ComfyUI ${versionTargets.map(target => `>= ${target}`).join(', ')})`
  }

  return `${wf.name} — ${summary}`
}

const totalVersionGatedNodes = computed(() => {
  return allBrokenWorkflows.value.reduce(
    (sum, wf) => sum + (wf.nodes_version_gated_count || 0),
    0
  )
})

const versionGatedTargets = computed(() => {
  const targets = allBrokenWorkflows.value.flatMap(wf =>
    getVersionTargetsFromGuidance(wf.version_gated_guidance || [])
  )
  return [...new Set(targets)]
})

const totalUninstallableNodes = computed(() => {
  return allBrokenWorkflows.value.reduce(
    (sum, wf) => sum + (wf.nodes_uninstallable_count || 0),
    0
  )
})

function workflowSnapshotChangeSummaryFromCounts(
  counts: { added: number; modified: number; deleted: number; other: number }
): string {
  const parts: string[] = []

  if (counts.added > 0) parts.push(`${counts.added} new`)
  if (counts.modified > 0) parts.push(`${counts.modified} modified`)
  if (counts.deleted > 0) parts.push(`${counts.deleted} removed`)
  if (counts.other > 0) parts.push(`${counts.other} changed`)

  const total = counts.added + counts.modified + counts.deleted + counts.other
  if (total === 0) return ''

  return `${parts.join(', ')} workflow${total === 1 ? '' : 's'} to commit`
}

function workflowSyncChangeSummary(): string {
  return workflowSnapshotChangeSummaryFromCounts({
    added: props.status.workflows.new.length,
    modified: props.status.workflows.modified.length,
    deleted: props.status.workflows.deleted.length,
    other: 0
  })
}

// Short summary for the suggestions box
const uncommittedChangesSummary = computed(() => {
  const syncWorkflowSummary = workflowSyncChangeSummary()
  if (syncWorkflowSummary) {
    return syncWorkflowSummary
  }

  const capturedWorkflowSummary = workflowSnapshotChangeSummaryFromCounts(capturedWorkflowChangeCounts.value)
  if (capturedWorkflowSummary) {
    return capturedWorkflowSummary
  }

  // Fallback for git-only changes (nodes, config)
  return 'Changes ready to commit'
})

function pluralize(count: number, singular: string, plural = `${singular}s`): string {
  return `${count} ${count === 1 ? singular : plural}`
}

function needsVerb(count: number): string {
  return count === 1 ? 'needs' : 'need'
}

function lifecycleStatusLabel(status: LifecycleTileStatus): string {
  switch (status) {
    case 'ok':
      return 'OK'
    case 'attention':
      return 'Attention'
    case 'blocked':
      return 'Blocked'
    case 'unknown':
      return 'Unknown'
  }
}

function lineIcon(status: LifecycleTileStatus): string {
  switch (status) {
    case 'ok':
      return '✓'
    case 'attention':
      return '•'
    case 'blocked':
      return '!'
    case 'unknown':
      return '?'
  }
}

function mostSevereStatus(statuses: LifecycleTileStatus[]): LifecycleTileStatus {
  if (statuses.includes('blocked')) return 'blocked'
  if (statuses.includes('attention')) return 'attention'
  if (statuses.includes('unknown')) return 'unknown'
  return 'ok'
}

function createTile(
  id: LifecycleTile['id'],
  title: string,
  status: LifecycleTileStatus,
  lines: LifecycleTileLine[],
  action?: LifecycleTileAction,
  navigationAction?: LifecycleTileAction
): LifecycleTile {
  return {
    id,
    title,
    status,
    statusLabel: lifecycleStatusLabel(status),
    lines: lines.length ? lines : [{ text: 'OK', variant: 'ok' }],
    navigationAction,
    action
  }
}

function summarizeFirst(items: string[], remainingLabel: string): string[] {
  if (items.length <= 1) return items
  return [items[0], `...and ${items.length - 1} more ${remainingLabel}`]
}

const workflowsWithModelBlockers = computed(() =>
  (props.status.workflows.analyzed || []).filter(w =>
    w.unresolved_models_count > 0 ||
    w.ambiguous_models_count > 0 ||
    w.has_category_mismatch_issues
  )
)

const workflowsWithPendingDownloads = computed(() =>
  (props.status.workflows.analyzed || []).filter(w => w.pending_downloads_count > 0)
)

const workflowsWithModelPathIssues = computed(() =>
  (props.status.workflows.analyzed || []).filter(w =>
    w.models_needing_path_sync_count > 0 && !w.has_issues
  )
)

const workflowsWithNodeIssues = computed(() =>
  (props.status.workflows.analyzed || []).filter(w =>
    w.unresolved_nodes_count > 0 ||
    w.ambiguous_nodes_count > 0 ||
    w.uninstalled_nodes > 0 ||
    (w.nodes_version_gated_count || 0) > 0 ||
    (w.nodes_uninstallable_count || 0) > 0
  )
)

const workflowsWithUninstalledNodes = computed(() =>
  (props.status.workflows.analyzed || []).filter(w => w.uninstalled_nodes > 0)
)

const pendingWorkflowNames = computed(() =>
  new Set([
    ...props.status.workflows.new,
    ...props.status.workflows.modified
  ])
)

const workflowsWithPendingNodeDependencies = computed(() =>
  workflowsWithUninstalledNodes.value.filter(w =>
    w.sync_state === 'new' ||
    w.sync_state === 'modified' ||
    pendingWorkflowNames.value.has(w.name)
  )
)

const workflowsWithTrackedUninstalledNodes = computed(() =>
  workflowsWithUninstalledNodes.value.filter(w =>
    !workflowsWithPendingNodeDependencies.value.includes(w)
  )
)

const workflowsWithUnresolvedNodeMappings = computed(() =>
  (props.status.workflows.analyzed || []).filter(w =>
    w.unresolved_nodes_count > 0 ||
    w.ambiguous_nodes_count > 0
  )
)

const workflowsWithNodeCompatibilityIssues = computed(() =>
  (props.status.workflows.analyzed || []).filter(w =>
    (w.nodes_version_gated_count || 0) > 0 ||
    (w.nodes_uninstallable_count || 0) > 0
  )
)

function workflowNameForLifecycleAction(actionId: string): string | undefined {
  if (actionId === 'resolve_workflow_nodes') {
    return workflowsWithUnresolvedNodeMappings.value[0]?.name ||
      workflowsWithNodeCompatibilityIssues.value[0]?.name ||
      workflowsWithPendingNodeDependencies.value[0]?.name ||
      workflowsWithUninstalledNodes.value[0]?.name ||
      workflowsWithNodeIssues.value[0]?.name
  }
  if (actionId === 'download_required_models') {
    return workflowsWithPendingDownloads.value[0]?.name ||
      workflowsWithModelBlockers.value[0]?.name
  }
  if (actionId === 'sync_model_paths') {
    return workflowsWithModelPathIssues.value[0]?.name ||
      workflowsWithModelBlockers.value[0]?.name
  }
  if (actionId === 'resolve_missing_model') {
    return workflowsWithModelBlockers.value[0]?.name
  }
  return undefined
}

const workflowTile = computed<LifecycleTile>(() => {
  const lines: LifecycleTileLine[] = []
  const statuses: LifecycleTileStatus[] = []
  const changedCount = props.status.workflows.new.length +
    props.status.workflows.modified.length +
    props.status.workflows.deleted.length

  if (changedCount > 0) {
    lines.push({ text: workflowSyncChangeSummary(), variant: 'attention' })
    statuses.push('attention')
  } else if (capturedWorkflowChangesCount.value > 0) {
    lines.push({
      text: workflowSnapshotChangeSummaryFromCounts(capturedWorkflowChangeCounts.value),
      variant: 'attention'
    })
    statuses.push('attention')
  }

  if (props.status.workflows.synced.length > 0 || lines.length === 0) {
    lines.push({
      text: `${props.status.workflows.synced.length} ${lines.length > 0 ? 'captured' : 'synced'}`,
      variant: lines.length === 0 ? 'ok' : 'unknown',
      icon: lines.length === 0 ? undefined : '✓'
    })
  }

  return createTile(
    'workflows',
    'Workflows',
    mostSevereStatus(statuses),
    lines,
    undefined,
    { id: 'view-workflows', label: 'Open workflows' }
  )
})

const modelTile = computed<LifecycleTile>(() => {
  const lines: LifecycleTileLine[] = []
  const statuses: LifecycleTileStatus[] = []

  if (workflowsWithModelBlockers.value.length > 0 || props.status.missing_models_count > 0) {
    const count = workflowsWithModelBlockers.value.length || props.status.missing_models_count
    lines.push({ text: `${pluralize(count, 'workflow')} missing models`, variant: 'blocked' })
    statuses.push('blocked')
  }

  if (workflowsWithPendingDownloads.value.length > 0) {
    lines.push({
      text: `${pluralize(workflowsWithPendingDownloads.value.length, 'workflow')} pending model downloads`,
      variant: 'attention'
    })
    statuses.push('attention')
  }

  if (workflowsWithModelPathIssues.value.length > 0) {
    lines.push({
      text: `${pluralize(workflowsWithModelPathIssues.value.length, 'workflow')} ${needsVerb(workflowsWithModelPathIssues.value.length)} model path sync`,
      variant: 'attention'
    })
    statuses.push('attention')
  }

  if (readinessModelWarningCount.value > 0) {
    lines.push({
      text: `${pluralize(readinessModelWarningCount.value, 'model')} missing source info`,
      variant: 'attention'
    })
    statuses.push('attention')
  }

  const action = modelTileAction.value

  return createTile(
    'models',
    'Models',
    mostSevereStatus(statuses),
    lines,
    action,
    { id: 'view-models', label: 'Open models' }
  )
})

const modelTileAction = computed<LifecycleTileAction | undefined>(() => {
  if (workflowsWithModelBlockers.value.length > 0 || props.status.missing_models_count > 0) {
    return { id: 'resolve-models', label: 'Resolve models' }
  }
  if (workflowsWithPendingDownloads.value.length > 0) {
    return { id: 'download-models', label: 'Download models' }
  }
  if (workflowsWithModelPathIssues.value.length > 0) {
    return { id: 'sync-model-paths', label: 'Sync paths' }
  }
  if (readinessModelWarningCount.value > 0) {
    return { id: 'review-readiness', label: 'Review sources' }
  }
  return undefined
})

const nodeTile = computed<LifecycleTile>(() => {
  const lines: LifecycleTileLine[] = []
  const statuses: LifecycleTileStatus[] = []
  const comparison = props.status.comparison

  if (workflowsWithNodeIssues.value.length > 0) {
    lines.push({
      text: `${pluralize(workflowsWithNodeIssues.value.length, 'workflow')} ${needsVerb(workflowsWithNodeIssues.value.length)} nodes`,
      variant: 'blocked'
    })
    statuses.push('blocked')
  }

  if (totalVersionGatedNodes.value > 0) {
    lines.push({
      text: `${pluralize(totalVersionGatedNodes.value, 'node')} ${needsVerb(totalVersionGatedNodes.value)} newer ComfyUI${formatWorkflowVersionTargetSummary(versionGatedTargets.value)}`,
      variant: 'blocked'
    })
    statuses.push('blocked')
  }

  if (totalUninstallableNodes.value > 0) {
    lines.push({
      text: `${pluralize(totalUninstallableNodes.value, 'community package')} needed`,
      variant: 'blocked'
    })
    statuses.push('blocked')
  }

  if (comparison.missing_nodes?.length) {
    lines.push({ text: `${pluralize(comparison.missing_nodes.length, 'declared node')} missing on disk`, variant: 'blocked' })
    statuses.push('blocked')
  }

  if (comparison.extra_nodes?.length) {
    lines.push({ text: `${pluralize(comparison.extra_nodes.length, 'untracked node')} on disk`, variant: 'attention' })
    statuses.push('attention')
  }

  if (comparison.disabled_nodes?.length) {
    lines.push({ text: `${pluralize(comparison.disabled_nodes.length, 'disabled node')} on disk`, variant: 'attention' })
    statuses.push('attention')
  }

  if (props.status.has_legacy_manager) {
    lines.push({ text: 'Legacy ComfyUI-Manager detected', variant: 'attention' })
    statuses.push('attention')
  }

  if (readinessNodeWarningCount.value > 0) {
    lines.push({ text: `${pluralize(readinessNodeWarningCount.value, 'node')} missing source info`, variant: 'attention' })
    statuses.push('attention')
  }

  const action = nodeTileAction.value

  return createTile(
    'nodes',
    'Nodes',
    mostSevereStatus(statuses),
    lines,
    action,
    { id: 'view-nodes', label: 'Open nodes' }
  )
})

const nodeTileAction = computed<LifecycleTileAction | undefined>(() => {
  const comparison = props.status.comparison

  if (
    workflowsWithUnresolvedNodeMappings.value.length > 0 ||
    workflowsWithPendingNodeDependencies.value.length > 0 ||
    (workflowsWithUninstalledNodes.value.length > 0 && !comparison.missing_nodes?.length)
  ) {
    return { id: 'resolve-nodes', label: 'Resolve nodes' }
  }
  if (comparison.missing_nodes?.length || workflowsWithTrackedUninstalledNodes.value.length > 0) {
    return { id: 'sync-environment', label: 'Sync missing nodes' }
  }
  if (
    workflowsWithNodeCompatibilityIssues.value.length > 0 ||
    comparison.extra_nodes?.length ||
    comparison.disabled_nodes?.length ||
    props.status.has_legacy_manager
  ) {
    return { id: 'view-nodes', label: 'Review nodes' }
  }
  if (readinessNodeWarningCount.value > 0) {
    return { id: 'review-readiness', label: 'Review sources' }
  }
  return undefined
})

const runtimeTile = computed<LifecycleTile>(() => {
  const lines: LifecycleTileLine[] = []
  const statuses: LifecycleTileStatus[] = []
  const runtimeState = props.lifecycleStatus?.runtime_state

  if (runtimeState?.comfyui_reachable === false) {
    lines.push({ text: runtimeState.message || 'ComfyUI runtime is unreachable', variant: 'blocked' })
    statuses.push('blocked')
  } else if (runtimeState?.comfyui_reachable === null) {
    lines.push({ text: runtimeState.message || 'Runtime state unknown', variant: 'unknown' })
    statuses.push('unknown')
  }

  if (runtimeState?.restart_required) {
    lines.push({ text: 'Restart required', variant: 'attention' })
    statuses.push('attention')
  }

  if (runtimeNodeImportFailures.value.length > 0) {
    lines.push({
      text: `${pluralize(runtimeNodeImportFailures.value.length, 'custom node')} failed to import`,
      variant: 'attention'
    })
    summarizeFirst(runtimeNodeImportItems.value, 'import failures')
      .forEach(item => lines.push({ text: item, variant: 'attention', icon: '↳' }))
    statuses.push('attention')
  }

  const action = statuses.includes('blocked') || statuses.includes('attention')
      ? { id: 'repair-environment' as const, label: 'Repair' }
      : undefined

  return createTile(
    'runtime',
    'Runtime',
    mostSevereStatus(statuses),
    lines,
    action,
    { id: 'view-debug', label: 'Open runtime diagnostics' }
  )
})

const filesystemTile = computed<LifecycleTile>(() => {
  const lines: LifecycleTileLine[] = []
  const statuses: LifecycleTileStatus[] = []
  const comparison = props.status.comparison

  if (!comparison.packages_in_sync) {
    lines.push({ text: 'Python dependencies not synced', variant: 'blocked' })
    statuses.push('blocked')
  }

  if (comparison.version_mismatches?.length) {
    lines.push({ text: `${pluralize(comparison.version_mismatches.length, 'node version mismatch', 'node version mismatches')}`, variant: 'attention' })
    statuses.push('attention')
  }

  const nodeDriftCount = (comparison.missing_nodes?.length || 0) +
    (comparison.extra_nodes?.length || 0) +
    (comparison.disabled_nodes?.length || 0)
  if (!comparison.is_synced && nodeDriftCount === 0 && comparison.packages_in_sync) {
    lines.push({ text: 'Environment state differs from manifest', variant: 'attention' })
    statuses.push('attention')
  }

  return createTile(
    'filesystem',
    'Filesystem',
    mostSevereStatus(statuses),
    lines,
    statuses.includes('blocked') ? { id: 'sync-environment', label: 'Sync' } : undefined,
    { id: 'view-nodes', label: 'Open filesystem state' }
  )
})

const snapshotTile = computed<LifecycleTile>(() => {
  const lines: LifecycleTileLine[] = []
  const statuses: LifecycleTileStatus[] = []

  if (props.status.is_detached_head) {
    lines.push({ text: 'Detached HEAD', variant: 'blocked' })
    statuses.push('blocked')
  }

  if (hasUncommittedWork.value) {
    lines.push({ text: uncommittedChangesSummary.value, variant: 'attention' })
    statuses.push('attention')
  } else {
    lines.push({ text: 'No uncommitted changes', variant: 'ok' })
  }

  if (
    workflowChangesCount.value > 0 &&
    !hasWorkflowChanges.value &&
    capturedWorkflowChangesCount.value === 0
  ) {
    lines.push({ text: `${pluralize(workflowChangesCount.value, 'workflow file')} changed`, variant: 'attention' })
    statuses.push('attention')
  }

  if (hasOtherWorkflowChanges.value) {
    lines.push({ text: 'Other workflow files changed', variant: 'attention' })
    statuses.push('attention')
  }

  const action = props.status.is_detached_head
    ? { id: 'create-branch' as const, label: 'Branch' }
    : hasUncommittedWork.value
      ? { id: 'commit-changes' as const, label: 'Commit' }
      : undefined

  return createTile(
    'snapshot',
    'Snapshot',
    mostSevereStatus(statuses),
    lines,
    action,
    { id: 'view-history', label: 'Open version control' }
  )
})

const lifecycleTiles = computed<LifecycleTile[]>(() => [
  workflowTile.value,
  modelTile.value,
  nodeTile.value,
  runtimeTile.value,
  filesystemTile.value,
  snapshotTile.value
])

async function handleLifecycleTileAction(tile: LifecycleTile) {
  if (!tile.action) return
  await handleLifecycleTileActionById(tile.action)
}

async function handleLifecycleTileNavigation(tile: LifecycleTile) {
  if (!tile.navigationAction) return
  await handleLifecycleTileActionById(tile.navigationAction)
}

async function handleLifecycleTileActionById(action: LifecycleTileAction) {
  switch (action.id) {
    case 'view-workflows':
      emit('view-workflows')
      return
    case 'view-models':
      emit('view-models')
      return
    case 'view-nodes':
      emit('view-nodes')
      return
    case 'view-history':
      emit('view-history')
      return
    case 'view-debug':
      emit('view-debug')
      return
    case 'sync-environment':
      emit('sync-environment')
      return
    case 'repair-environment':
      emit('repair-environment')
      return
    case 'commit-changes':
      emit('commit-changes')
      return
    case 'create-branch':
      emit('create-branch')
      return
    case 'refresh-status':
      emit('refresh-status')
      return
    case 'review-readiness':
      await openReadinessIssues()
      return
    case 'resolve-models':
      emit('resolve-workflow-dependencies', workflowNameForLifecycleAction('resolve_missing_model'))
      return
    case 'download-models':
      emit('resolve-workflow-dependencies', workflowNameForLifecycleAction('download_required_models'))
      return
    case 'sync-model-paths':
      emit('resolve-workflow-dependencies', workflowNameForLifecycleAction('sync_model_paths'))
      return
    case 'resolve-nodes':
      emit('resolve-workflow-dependencies', workflowNameForLifecycleAction('resolve_workflow_nodes'))
      return
  }
}
</script>

<style scoped>
.health-section-wrapper {
  position: relative;
  margin-top: var(--cg-space-3);
}

.health-section-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.lifecycle-tile-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-md);
  overflow: hidden;
  background: var(--cg-color-bg-secondary);
}

.lifecycle-tile {
  min-height: 132px;
  padding: var(--cg-space-3);
  border-right: 1px solid var(--cg-color-border-subtle);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
  transition:
    background var(--cg-transition-fast),
    border-color var(--cg-transition-fast);
}

.lifecycle-tile:nth-child(2n) {
  border-right: 0;
}

.lifecycle-tile:nth-last-child(-n + 2) {
  border-bottom: 0;
}

.lifecycle-tile--blocked {
  box-shadow: inset 3px 0 0 var(--cg-color-error);
}

.lifecycle-tile--attention {
  box-shadow: inset 3px 0 0 var(--cg-color-warning);
}

.lifecycle-tile--unknown {
  box-shadow: inset 3px 0 0 var(--cg-color-text-muted);
}

.lifecycle-tile__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-2);
}

.lifecycle-tile__title {
  margin: 0;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  letter-spacing: var(--cg-letter-spacing-wide);
  text-transform: uppercase;
}

.lifecycle-tile__title-button {
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: color var(--cg-transition-fast);
}

.lifecycle-tile__title-button:hover,
.lifecycle-tile__title-button:focus-visible {
  color: var(--cg-color-text-primary);
  outline: none;
}

.lifecycle-tile__badge {
  flex-shrink: 0;
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
}

.lifecycle-tile__badge--ok {
  color: var(--cg-color-success);
}

.lifecycle-tile__badge--attention {
  color: var(--cg-color-warning);
}

.lifecycle-tile__badge--blocked {
  color: var(--cg-color-error);
}

.lifecycle-tile__badge--unknown {
  color: var(--cg-color-text-muted);
}

.lifecycle-tile__lines {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.lifecycle-tile__line {
  display: grid;
  grid-template-columns: 1rem minmax(0, 1fr);
  gap: var(--cg-space-1);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  line-height: 1.35;
}

.lifecycle-tile__line--ok {
  color: var(--cg-color-success);
}

.lifecycle-tile__line--blocked {
  color: var(--cg-color-error);
}

.lifecycle-tile__line--attention {
  color: var(--cg-color-text-secondary);
}

.lifecycle-tile__line--unknown {
  color: var(--cg-color-text-muted);
}

.lifecycle-tile__mark {
  color: currentColor;
  text-align: center;
}

.lifecycle-tile__action {
  display: flex;
  justify-content: flex-end;
  margin-top: var(--cg-space-2);
}

@media (max-width: 640px) {
  .lifecycle-tile-grid {
    grid-template-columns: 1fr;
  }

  .lifecycle-tile,
  .lifecycle-tile:nth-child(2n),
  .lifecycle-tile:nth-last-child(-n + 2) {
    border-right: 0;
    border-bottom: 1px solid var(--cg-color-border-subtle);
  }

  .lifecycle-tile:last-child {
    border-bottom: 0;
  }
}
</style>
