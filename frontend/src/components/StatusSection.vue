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

      <!-- Environment Health Section -->
      <div class="health-section-wrapper" @mouseenter="showHealthActions = true" @mouseleave="showHealthActions = false">
        <div class="health-section-header">
          <SectionTitle level="4" style="margin-bottom: var(--cg-space-2)">
            ENVIRONMENT HEALTH
          </SectionTitle>
          <transition name="fade">
            <ActionButton
              v-if="showHealthActions"
              variant="ghost"
              size="xs"
              class="show-all-button"
              @click="handleShowAll"
            >
              Show All
            </ActionButton>
          </transition>
        </div>

        <StatusGrid left-title="WORKFLOWS" right-title="GIT CHANGES">
        <template #left>
          <StatusItem
            v-if="status.workflows.new.length"
            icon="●"
            :count="status.workflows.new.length"
            label="new"
            variant="new"
          />
          <StatusItem
            v-if="status.workflows.modified.length"
            icon="●"
            :count="status.workflows.modified.length"
            label="modified"
            variant="modified"
          />
          <StatusItem
            v-if="status.workflows.deleted.length"
            icon="●"
            :count="status.workflows.deleted.length"
            label="deleted"
            variant="deleted"
          />
          <StatusItem
            icon="✓"
            :count="status.workflows.synced.length"
            label="synced"
            variant="synced"
            :separator="hasWorkflowChanges"
          />
        </template>

        <template #right>
          <StatusItem
            v-if="status.git_changes.nodes_added.length"
            icon="●"
            :count="status.git_changes.nodes_added.length"
            :label="status.git_changes.nodes_added.length === 1 ? 'node added' : 'nodes added'"
            variant="new"
          />
          <StatusItem
            v-if="status.git_changes.nodes_removed.length"
            icon="●"
            :count="status.git_changes.nodes_removed.length"
            :label="status.git_changes.nodes_removed.length === 1 ? 'node removed' : 'nodes removed'"
            variant="deleted"
          />
          <StatusItem
            v-if="status.git_changes.workflow_changes"
            icon="●"
            :count="workflowChangesCount"
            :label="workflowChangesCount === 1 ? 'workflow changed' : 'workflows changed'"
            variant="modified"
          />
          <StatusItem
            v-if="hasOtherWorkflowChanges"
            icon="●"
            label="other changes"
            variant="modified"
          />
          <!-- Show "Configuration updated" when has_changes but no specific changes (e.g., pyproject.toml) -->
          <StatusItem
            v-if="hasGitChanges && !hasSpecificGitChanges && !hasOtherWorkflowChanges"
            icon="●"
            label="configuration updated"
            variant="modified"
          />
          <StatusItem
            v-if="!hasGitChanges"
            icon="✓"
            label="No uncommitted changes"
            variant="ok"
          />
        </template>
        <!-- Footer slot - actions when there are uncommitted changes -->
        <template v-if="hasUncommittedWork" #footer>
          <h4 class="footer-title">ACTIONS</h4>
          <div class="suggestions-content">
            <span class="suggestions-text">{{ uncommittedChangesSummary }}</span>
            <ActionButton variant="primary" size="sm" @click="$emit('commit-changes')">
              Commit
            </ActionButton>
          </div>
        </template>
      </StatusGrid>
      </div>

      <!-- Detached HEAD Warning (Critical Priority) -->
      <IssueCard
        v-if="status.is_detached_head"
        severity="error"
        icon="⚠"
        title="You are in detached HEAD state"
        description="Any commits you make will not be saved to a branch! Create a branch to preserve your work."
        style="margin-top: var(--cg-space-3)"
      >
        <template #actions>
          <ActionButton variant="primary" size="sm" @click="$emit('create-branch')">
            Create Branch
          </ActionButton>
        </template>
      </IssueCard>

      <!-- Issues Section - Always shown for consistency -->
      <div style="margin-top: var(--cg-space-3)">
        <SectionTitle level="4" style="margin-bottom: var(--cg-space-2)">
          ISSUES
        </SectionTitle>

        <!-- Show issue cards when there are actual issues -->
        <template v-if="hasActualIssues">
          <!-- ERROR: Broken Workflows (can't run - missing nodes/dependencies) -->
          <IssueCard
            v-if="allBrokenWorkflows.length > 0"
            severity="error"
            icon="⚠"
            :title="`${allBrokenWorkflows.length} workflow${allBrokenWorkflows.length === 1 ? '' : 's'} can't run`"
            :description="brokenWorkflowDescription"
            :items="allBrokenWorkflows.map(formatBrokenWorkflowItem)"
          >
            <template #actions>
              <ActionButton variant="primary" size="sm" @click="$emit('view-workflows')">
                See Workflows
              </ActionButton>
            </template>
          </IssueCard>

          <!-- WARNING: Path Sync Issues (can run but paths need fixing) -->
          <IssueCard
            v-if="pathSyncWorkflows.length > 0"
            severity="warning"
            icon="⚠"
            :title="`${pathSyncWorkflows.length} workflow${pathSyncWorkflows.length === 1 ? '' : 's'} with path issues`"
            description="These workflows can run but have model paths that should be synced."
            :items="pathSyncWorkflows.map(w => `${w.name} — ${w.models_needing_path_sync_count} model path${w.models_needing_path_sync_count === 1 ? '' : 's'} to sync`)"
          >
            <template #actions>
              <ActionButton variant="primary" size="sm" @click="$emit('view-workflows')">
                See Workflows
              </ActionButton>
            </template>
          </IssueCard>

          <!-- WARNING: Missing Models (not in broken workflows) -->
          <IssueCard
            v-if="status.missing_models_count > 0 && !hasBrokenWorkflows"
            severity="warning"
            icon="⚠"
            :title="`${status.missing_models_count} missing model${status.missing_models_count === 1 ? '' : 's'}`"
            description="Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
          >
            <template #actions>
              <ActionButton
                variant="primary"
                size="sm"
                :disabled="isRepairing"
                @click="handleRepairMissingModels"
              >
                {{ isRepairing ? 'Repairing...' : 'Repair' }}
              </ActionButton>
              <ActionButton variant="secondary" size="sm" @click="$emit('view-workflows')">
                See Workflows
              </ActionButton>
            </template>
          </IssueCard>

          <!-- ERROR: Environment Not Synced -->
          <IssueCard
            v-if="!status.comparison.is_synced"
            severity="error"
            icon="⚠"
            title="Environment not synced"
            :description="syncIssueDescription"
            :items="syncIssueItems"
          >
            <template #actions>
              <ActionButton variant="secondary" size="sm" @click="handleShowAll">
                View Details
              </ActionButton>
              <ActionButton variant="primary" size="sm" @click="$emit('view-nodes')">
                See Nodes
              </ActionButton>
            </template>
          </IssueCard>

          <!-- WARNING: Legacy ComfyUI-Manager detected -->
          <IssueCard
            v-if="status.has_legacy_manager"
            severity="warning"
            icon="⚠"
            title="Legacy ComfyUI-Manager detected"
            description="The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
          >
            <template #actions>
              <ActionButton variant="primary" size="sm" @click="$emit('view-nodes')">
                See Nodes
              </ActionButton>
            </template>
          </IssueCard>
        </template>

        <!-- No issues but has uncommitted work - simple text -->
        <span v-else-if="hasUncommittedWork" class="no-issues-text">No issues</span>

        <!-- All Good State - no issues and no uncommitted work -->
        <EmptyState
          v-else
          icon="✅"
          message="Everything looks good! No issues detected."
        />
      </div>

    </template>
  </PanelLayout>

  <!-- Status Detail Modal -->
  <StatusDetailModal
    :show="showDetailModal"
    :status="status"
    :is-repairing="isRepairingEnvironment"
    @close="showDetailModal = false"
    @navigate-workflows="handleNavigateWorkflows"
    @navigate-nodes="handleNavigateNodes"
    @repair="handleRepairEnvironment"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { AnalyzedWorkflow, ComfyGitStatus, SetupState } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SectionTitle from '@/components/base/atoms/SectionTitle.vue'
import StatusGrid from '@/components/base/molecules/StatusGrid.vue'
import StatusItem from '@/components/base/atoms/StatusItem.vue'
import IssueCard from '@/components/base/molecules/IssueCard.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import StatusDetailModal from '@/components/base/molecules/StatusDetailModal.vue'

interface Props {
  status: ComfyGitStatus
  setupState?: SetupState
}

const props = withDefaults(defineProps<Props>(), {
  setupState: 'managed'
})

const showDetailModal = ref(false)
const showHealthActions = ref(false)

function handleShowAll() {
  showDetailModal.value = true
}

function handleNavigateWorkflows() {
  showDetailModal.value = false
  emit('view-workflows')
}

function handleNavigateNodes() {
  showDetailModal.value = false
  emit('view-nodes')
}

const emit = defineEmits<{
  'view-workflows': []
  'view-history': []
  'commit-changes': []
  'view-debug': []
  'sync-environment': []
  'create-branch': []
  'view-nodes': []
  'repair-missing-models': [workflowNames: string[]]
  'repair-environment': []
  'start-setup': []
  'view-environments': []
  'create-environment': []
}>()

const isRepairing = ref(false)
const isRepairingEnvironment = ref(false)

function handleRepairEnvironment() {
  isRepairingEnvironment.value = true
  emit('repair-environment')
}

function resetRepairingEnvironmentState() {
  isRepairingEnvironment.value = false
}

function closeDetailModal() {
  showDetailModal.value = false
}

// Workflows with unresolved or ambiguous models
const workflowsWithMissingModels = computed(() => {
  const analyzed = props.status.workflows.analyzed || []
  // Filter workflows that have missing model issues
  const filtered = analyzed.filter(w =>
    w.unresolved_models_count > 0 || w.ambiguous_models_count > 0
  )
  // If no specific workflows found but missing_models_count > 0, return all synced workflows
  // (the backend resolve endpoint will re-resolve and fix any mismatched hashes)
  if (filtered.length === 0 && props.status.missing_models_count > 0) {
    return analyzed.filter(w => w.sync_state === 'synced')
  }
  return filtered
})

function handleRepairMissingModels() {
  const workflows = workflowsWithMissingModels.value
  if (workflows.length === 0) return
  isRepairing.value = true
  emit('repair-missing-models', workflows.map(w => w.name))
}

function resetRepairingState() {
  isRepairing.value = false
}

defineExpose({ resetRepairingState, resetRepairingEnvironmentState, closeDetailModal })

const hasWorkflowChanges = computed(() => {
  return props.status.workflows.new.length > 0 ||
         props.status.workflows.modified.length > 0 ||
         props.status.workflows.deleted.length > 0
})

// Use top-level has_changes for determining if there are uncommitted changes
// This catches cases like pyproject.toml modified (dependency updates) that
// don't show up in nodes_added/nodes_removed/workflow_changes
const hasGitChanges = computed(() => {
  return props.status.has_changes
})

// For display purposes: detect specific change types for UI
const hasSpecificGitChanges = computed(() => {
  const gc = props.status.git_changes
  return gc.nodes_added.length > 0 ||
         gc.nodes_removed.length > 0 ||
         gc.workflow_changes
})

const hasUncommittedWork = computed(() => {
  return props.status.has_changes || hasWorkflowChanges.value
})

const workflowChangesCount = computed(() => {
  return Object.keys(props.status.git_changes.workflow_changes_detail).length
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

const hasBrokenWorkflows = computed(() => {
  return allBrokenWorkflows.value.length > 0
})

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

function formatBrokenWorkflowItem(wf: AnalyzedWorkflow): string {
  const summary = wf.issue_summary || 'Has issues'
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

const brokenWorkflowDescription = computed(() => {
  const blockedParts: string[] = []
  if (totalVersionGatedNodes.value > 0) {
    blockedParts.push(
      `${totalVersionGatedNodes.value} require newer ComfyUI${formatWorkflowVersionTargetSummary(versionGatedTargets.value)}`
    )
  }
  if (totalUninstallableNodes.value > 0) {
    blockedParts.push(`${totalUninstallableNodes.value} are uninstallable`)
  }

  if (blockedParts.length > 0) {
    return `These workflows have missing or blocked dependencies (${blockedParts.join(', ')}) that must be resolved before they can run.`
  }
  return 'These workflows have missing dependencies that must be resolved before they can run.'
})

// Issues that are actual problems (not just uncommitted work)
const hasActualIssues = computed(() => {
  return hasBrokenWorkflows.value ||
         pathSyncWorkflows.value.length > 0 ||
         props.status.missing_models_count > 0 ||
         !props.status.comparison.is_synced ||
         props.status.has_legacy_manager
})

// Short summary for the suggestions box
const uncommittedChangesSummary = computed(() => {
  const parts: string[] = []

  if (props.status.workflows.new.length > 0) {
    parts.push(`${props.status.workflows.new.length} new`)
  }
  if (props.status.workflows.modified.length > 0) {
    parts.push(`${props.status.workflows.modified.length} modified`)
  }
  if (props.status.workflows.deleted.length > 0) {
    parts.push(`${props.status.workflows.deleted.length} deleted`)
  }

  if (parts.length > 0) {
    return `${parts.join(', ')} workflow${parts.length === 1 && !parts[0].includes(',') ? '' : 's'} to commit`
  }

  // Fallback for git-only changes (nodes, config)
  return 'Changes ready to commit'
})

// Sync issue details for the environment not synced card
const syncIssueDescription = computed(() => {
  const issues: string[] = []
  const comparison = props.status.comparison

  if (comparison.missing_nodes?.length) {
    issues.push(`${comparison.missing_nodes.length} missing node${comparison.missing_nodes.length === 1 ? '' : 's'}`)
  }
  if (comparison.extra_nodes?.length) {
    issues.push(`${comparison.extra_nodes.length} untracked node${comparison.extra_nodes.length === 1 ? '' : 's'}`)
  }

  if (issues.length === 0) {
    return 'Your environment state does not match the manifest.'
  }
  return `Environment has ${issues.join(' and ')}.`
})

const syncIssueItems = computed(() => {
  const items: string[] = []
  const comparison = props.status.comparison

  // Show first few untracked nodes
  if (comparison.extra_nodes?.length) {
    comparison.extra_nodes.slice(0, 3).forEach(name => {
      items.push(`Untracked: ${name}`)
    })
    if (comparison.extra_nodes.length > 3) {
      items.push(`...and ${comparison.extra_nodes.length - 3} more untracked`)
    }
  }

  // Show first few missing nodes
  if (comparison.missing_nodes?.length) {
    comparison.missing_nodes.slice(0, 3).forEach(name => {
      items.push(`Missing: ${name}`)
    })
    if (comparison.missing_nodes.length > 3) {
      items.push(`...and ${comparison.missing_nodes.length - 3} more missing`)
    }
  }

  return items
})
</script>

<style scoped>
/* Health Section Wrapper */
.health-section-wrapper {
  position: relative;
}

.health-section-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.show-all-button {
  position: absolute;
  top: 0;
  right: 0;
}

/* Footer section in StatusGrid */
.footer-title {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  color: var(--cg-color-text-muted);
  margin: 0 0 var(--cg-space-2) 0;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.suggestions-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-3);
}

.suggestions-text {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

/* Fade transition for Show All button */
.fade-enter-active, .fade-leave-active {
  transition: opacity var(--cg-transition-fast);
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* No issues text - simple inline display */
.no-issues-text {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}
</style>
