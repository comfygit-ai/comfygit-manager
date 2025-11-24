<template>
  <teleport to="body">
    <div v-if="show" class="modal-overlay" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">ENVIRONMENT STATUS DETAILS</h3>
          <button class="modal-close" @click="$emit('close')">✕</button>
        </div>

        <div class="modal-body">
          <!-- Branch Info -->
          <div class="status-section">
            <SectionTitle level="4">BRANCH</SectionTitle>
            <DetailRow
              label="Current Branch:"
              :value="status.current_branch || 'detached HEAD'"
              :mono="true"
            />
          </div>

          <!-- Workflows Section -->
          <div v-if="hasWorkflows" class="status-section">
            <div class="section-header-row">
              <SectionTitle level="4">WORKFLOWS</SectionTitle>
              <button class="link-btn" @click="$emit('navigate-workflows')">
                See Workflows →
              </button>
            </div>

            <!-- Broken Synced Workflows (CRITICAL) -->
            <div v-if="brokenSyncedWorkflows.length" class="workflow-group">
              <div class="workflow-group-header">
                <span class="workflow-status-icon broken">⚠</span>
                <span class="workflow-group-title">BROKEN (COMMITTED) ({{ brokenSyncedWorkflows.length }})</span>
              </div>
              <div class="workflow-list">
                <div v-for="wf in brokenSyncedWorkflows" :key="wf.name" class="workflow-item">
                  <span class="workflow-name">{{ wf.name }}</span>
                  <span class="workflow-issue">{{ wf.issue_summary }}</span>
                </div>
              </div>
            </div>

            <!-- Broken Uncommitted Workflows (WARNING) -->
            <div v-if="brokenUncommittedWorkflows.length" class="workflow-group">
              <div class="workflow-group-header">
                <span class="workflow-status-icon broken">⚠</span>
                <span class="workflow-group-title">BROKEN (UNCOMMITTED) ({{ brokenUncommittedWorkflows.length }})</span>
              </div>
              <div class="workflow-list">
                <div v-for="wf in brokenUncommittedWorkflows" :key="wf.name" class="workflow-item">
                  <span class="workflow-name">{{ wf.name }}</span>
                  <span class="workflow-issue">{{ wf.issue_summary }}</span>
                </div>
              </div>
            </div>

            <!-- New Workflows -->
            <div v-if="status.workflows?.new?.length" class="workflow-group">
              <div class="workflow-group-header">
                <span class="workflow-status-icon new">●</span>
                <span class="workflow-group-title">NEW ({{ status.workflows.new.length }})</span>
              </div>
              <div class="workflow-list">
                <div v-for="wf in status.workflows.new" :key="wf" class="workflow-item">
                  <span class="workflow-name">{{ wf }}</span>
                </div>
              </div>
            </div>

            <!-- Modified Workflows -->
            <div v-if="status.workflows?.modified?.length" class="workflow-group">
              <div class="workflow-group-header">
                <span class="workflow-status-icon modified">●</span>
                <span class="workflow-group-title">MODIFIED ({{ status.workflows.modified.length }})</span>
              </div>
              <div class="workflow-list">
                <div v-for="wf in status.workflows.modified" :key="wf" class="workflow-item">
                  <span class="workflow-name">{{ wf }}</span>
                </div>
              </div>
            </div>

            <!-- Deleted Workflows -->
            <div v-if="status.workflows?.deleted?.length" class="workflow-group">
              <div class="workflow-group-header">
                <span class="workflow-status-icon deleted">●</span>
                <span class="workflow-group-title">DELETED ({{ status.workflows.deleted.length }})</span>
              </div>
              <div class="workflow-list">
                <div v-for="wf in status.workflows.deleted" :key="wf" class="workflow-item">
                  <span class="workflow-name">{{ wf }}</span>
                </div>
              </div>
            </div>

            <!-- Synced Workflows (collapsible) -->
            <div v-if="healthySyncedWorkflows.length" class="workflow-group">
              <div
                class="workflow-group-header clickable"
                @click="showSynced = !showSynced"
              >
                <span class="workflow-status-icon synced">✓</span>
                <span class="workflow-group-title">SYNCED ({{ healthySyncedWorkflows.length }})</span>
                <span class="expand-icon">{{ showSynced ? '▼' : '▶' }}</span>
              </div>
              <div v-if="showSynced" class="workflow-list">
                <div v-for="wf in healthySyncedWorkflows" :key="wf" class="workflow-item">
                  <span class="workflow-name">{{ wf }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Git Changes Section -->
          <div v-if="hasGitChanges" class="status-section">
            <SectionTitle level="4">UNCOMMITTED CHANGES</SectionTitle>

            <!-- Nodes Added -->
            <div v-if="status.git_changes?.nodes_added?.length" class="change-group">
              <div class="change-group-header">
                <span class="change-icon add">+</span>
                <span class="change-group-title">NODES ADDED ({{ status.git_changes.nodes_added.length }})</span>
              </div>
              <div class="change-list">
                <div v-for="node in status.git_changes.nodes_added" :key="getNodeName(node)" class="change-item">
                  <span class="node-name">{{ getNodeName(node) }}</span>
                  <span v-if="isDevNode(node)" class="dev-badge">dev</span>
                </div>
              </div>
            </div>

            <!-- Nodes Removed -->
            <div v-if="status.git_changes?.nodes_removed?.length" class="change-group">
              <div class="change-group-header">
                <span class="change-icon remove">-</span>
                <span class="change-group-title">NODES REMOVED ({{ status.git_changes.nodes_removed.length }})</span>
              </div>
              <div class="change-list">
                <div v-for="node in status.git_changes.nodes_removed" :key="getNodeName(node)" class="change-item">
                  <span class="node-name">{{ getNodeName(node) }}</span>
                  <span v-if="isDevNode(node)" class="dev-badge">dev</span>
                </div>
              </div>
            </div>

            <!-- Workflow Changes -->
            <div v-if="status.git_changes?.workflow_changes" class="change-group">
              <div class="change-group-header">
                <span class="change-icon modified">~</span>
                <span class="change-group-title">WORKFLOW FILES CHANGED</span>
              </div>
              <div class="change-list">
                <div class="change-item">
                  <span class="node-name">{{ workflowChangesCount }} workflow file(s) modified</span>
                </div>
              </div>
            </div>

            <!-- Other Changes -->
            <div v-if="status.git_changes?.has_other_changes" class="change-group">
              <div class="change-group-header">
                <span class="change-icon modified">~</span>
                <span class="change-group-title">OTHER CHANGES</span>
              </div>
              <div class="change-list">
                <div class="change-item">
                  <span class="node-name">Configuration or other files modified</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Environment Drift Section -->
          <div v-if="!status.comparison?.is_synced" class="status-section">
            <SectionTitle level="4">ENVIRONMENT DRIFT</SectionTitle>
            <div class="warning-box">
              <span class="warning-icon">⚠</span>
              <span>Environment needs repair</span>
            </div>

            <!-- Missing Nodes -->
            <div v-if="status.comparison?.missing_nodes?.length" class="drift-item">
              <DetailRow
                label="Missing Nodes:"
                :value="`${status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`"
              />
              <div class="drift-list">
                <div v-for="node in status.comparison.missing_nodes.slice(0, 10)" :key="node" class="drift-list-item">
                  - {{ node }}
                </div>
                <div v-if="status.comparison.missing_nodes.length > 10" class="drift-list-more">
                  ... and {{ status.comparison.missing_nodes.length - 10 }} more
                </div>
              </div>
            </div>

            <!-- Extra Nodes -->
            <div v-if="status.comparison?.extra_nodes?.length" class="drift-item">
              <DetailRow
                label="Extra Nodes:"
                :value="`${status.comparison.extra_nodes.length} untracked nodes on filesystem`"
              />
              <div class="drift-list">
                <div v-for="node in status.comparison.extra_nodes.slice(0, 10)" :key="node" class="drift-list-item">
                  - {{ node }}
                </div>
                <div v-if="status.comparison.extra_nodes.length > 10" class="drift-list-more">
                  ... and {{ status.comparison.extra_nodes.length - 10 }} more
                </div>
              </div>
            </div>

            <!-- Version Mismatches -->
            <div v-if="status.comparison?.version_mismatches?.length" class="drift-item">
              <DetailRow
                label="Version Mismatches:"
                :value="`${status.comparison.version_mismatches.length} packages have version conflicts`"
              />
            </div>

            <!-- Packages Out of Sync -->
            <div v-if="!status.comparison?.packages_in_sync" class="drift-item">
              <DetailRow
                label="Package Sync:"
                value="Python packages out of sync"
                value-variant="warning"
              />
            </div>
          </div>

          <!-- Disabled Nodes Section -->
          <div v-if="status.comparison?.disabled_nodes?.length" class="status-section">
            <SectionTitle level="4">DISABLED NODES</SectionTitle>
            <div class="info-box">
              <span class="info-icon">ℹ</span>
              <span>{{ status.comparison.disabled_nodes.length }} nodes are disabled</span>
            </div>
            <div class="drift-list">
              <div v-for="node in status.comparison.disabled_nodes.slice(0, 10)" :key="node" class="drift-list-item">
                • {{ node }}
              </div>
              <div v-if="status.comparison.disabled_nodes.length > 10" class="drift-list-more">
                ... and {{ status.comparison.disabled_nodes.length - 10 }} more
              </div>
            </div>
          </div>

          <!-- Missing Models Section -->
          <div v-if="(status.missing_models_count ?? 0) > 0" class="status-section">
            <SectionTitle level="4">MISSING MODELS</SectionTitle>
            <div class="warning-box">
              <span class="warning-icon">⚠</span>
              <span>{{ status.missing_models_count }} model(s) not found in workspace</span>
            </div>
            <p class="help-text">
              Some workflows reference models that need to be downloaded or resolved.
              Use the Workflows section to resolve these issues.
            </p>
          </div>

          <!-- Empty State -->
          <div v-if="isClean" class="empty-state-inline">
            <div class="empty-icon">✅</div>
            <div class="empty-message">
              <strong>Environment is clean!</strong>
              <p>No workflows, no uncommitted changes, no issues detected.</p>
            </div>
          </div>
        </div>

        <div class="modal-actions">
          <ActionButton variant="secondary" @click="$emit('close')">
            Close
          </ActionButton>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import type { ComfyGitStatus } from '@/types/comfygit'
import SectionTitle from '@/components/base/atoms/SectionTitle.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'

const props = defineProps<{
  show: boolean
  status: ComfyGitStatus
}>()

defineEmits<{
  close: []
  'navigate-workflows': []
}>()

const showSynced = ref(false)

// Debug: Log when component mounts
onMounted(() => {
  console.log('StatusDetailModal mounted, initial show value:', props.show)
})

// Debug: Log when show prop changes
watch(() => props.show, (newVal, oldVal) => {
  console.log('StatusDetailModal show prop changed from', oldVal, 'to', newVal)
}, { immediate: true })

const brokenSyncedWorkflows = computed(() => {
  return props.status?.workflows?.analyzed?.filter(w =>
    w.status === 'broken' && w.sync_state === 'synced'
  ) || []
})

const brokenUncommittedWorkflows = computed(() => {
  return props.status?.workflows?.analyzed?.filter(w =>
    w.status === 'broken' && w.sync_state !== 'synced'
  ) || []
})

const healthySyncedWorkflows = computed(() => {
  return props.status?.workflows?.synced?.filter(wfName => {
    const analyzed = props.status?.workflows?.analyzed?.find(w => w.name === wfName)
    return !analyzed || analyzed.status !== 'broken'
  }) || []
})

const hasWorkflows = computed(() => {
  if (!props.status?.workflows) return false
  return (props.status.workflows.new?.length ?? 0) > 0 ||
         (props.status.workflows.modified?.length ?? 0) > 0 ||
         (props.status.workflows.deleted?.length ?? 0) > 0 ||
         (props.status.workflows.synced?.length ?? 0) > 0
})

const hasGitChanges = computed(() => {
  const gc = props.status?.git_changes
  if (!gc) return false
  return (gc.nodes_added?.length ?? 0) > 0 ||
         (gc.nodes_removed?.length ?? 0) > 0 ||
         gc.workflow_changes ||
         gc.has_other_changes
})

const isClean = computed(() => {
  return !hasWorkflows.value &&
         !hasGitChanges.value &&
         props.status?.comparison?.is_synced &&
         (props.status?.missing_models_count ?? 0) === 0 &&
         (props.status?.comparison?.disabled_nodes?.length ?? 0) === 0
})

const workflowChangesCount = computed(() => {
  const changes = props.status?.git_changes?.workflow_changes
  if (!changes) return 0
  if (typeof changes === 'number') return changes
  return Object.keys(changes).length
})

function getNodeName(node: string | { name: string; is_development?: boolean }): string {
  return typeof node === 'string' ? node : node.name
}

function isDevNode(node: string | { name: string; is_development?: boolean }): boolean {
  return typeof node === 'object' && node.is_development === true
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10005;
  backdrop-filter: blur(2px);
}

.modal-content {
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-lg);
  box-shadow: var(--cg-shadow-lg);
  max-width: 700px;
  width: 90%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  flex-shrink: 0;
}

.modal-title {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.modal-close {
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xl);
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--cg-transition-fast);
}

.modal-close:hover {
  color: var(--cg-color-text-primary);
}

.modal-body {
  padding: var(--cg-space-4);
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

.modal-actions {
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border-subtle);
  display: flex;
  gap: var(--cg-space-2);
  justify-content: flex-end;
  flex-shrink: 0;
}

.status-section {
  margin-bottom: var(--cg-space-5);
}

.status-section:last-child {
  margin-bottom: 0;
}

.section-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link-btn {
  background: transparent;
  border: none;
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  cursor: pointer;
  padding: 4px 8px;
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  transition: opacity var(--cg-transition-fast);
}

.link-btn:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* Workflow Groups */
.workflow-group {
  margin-bottom: var(--cg-space-3);
}

.workflow-group-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.workflow-group-header.clickable {
  cursor: pointer;
  user-select: none;
}

.workflow-group-header.clickable:hover {
  color: var(--cg-color-accent);
}

.workflow-status-icon {
  font-size: var(--cg-font-size-base);
  flex-shrink: 0;
}

.workflow-status-icon.new {
  color: var(--cg-color-info);
}

.workflow-status-icon.modified {
  color: var(--cg-color-warning);
}

.workflow-status-icon.deleted {
  color: var(--cg-color-error);
}

.workflow-status-icon.synced {
  color: var(--cg-color-success);
}

.workflow-status-icon.broken {
  color: var(--cg-color-error);
}

.workflow-group-title {
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  flex: 1;
}

.expand-icon {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.workflow-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding-left: var(--cg-space-5);
}

.workflow-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.workflow-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
}

.workflow-issue {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  margin-left: var(--cg-space-2);
  font-style: italic;
}

/* Change Groups */
.change-group {
  margin-bottom: var(--cg-space-3);
}

.change-group-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.change-icon {
  font-size: var(--cg-font-size-lg);
  font-weight: var(--cg-font-weight-bold);
  font-family: var(--cg-font-mono);
  flex-shrink: 0;
}

.change-icon.add {
  color: var(--cg-color-info);
}

.change-icon.remove {
  color: var(--cg-color-error);
}

.change-icon.modified {
  color: var(--cg-color-warning);
}

.change-group-title {
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.change-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding-left: var(--cg-space-5);
}

.change-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.node-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
}

.dev-badge {
  display: inline-block;
  padding: 2px 6px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  font-weight: var(--cg-font-weight-semibold);
}

/* Drift Items */
.drift-item {
  margin-bottom: var(--cg-space-3);
}

.drift-list {
  margin-top: var(--cg-space-2);
  padding-left: var(--cg-space-4);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.drift-list-item {
  margin-bottom: var(--cg-space-1);
}

.drift-list-more {
  margin-top: var(--cg-space-1);
  color: var(--cg-color-text-muted);
  font-style: italic;
}

/* Message Boxes */
.warning-box {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-warning);
  margin-bottom: var(--cg-space-3);
}

.warning-icon {
  font-size: var(--cg-font-size-lg);
  flex-shrink: 0;
}

.info-box {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  margin-bottom: var(--cg-space-3);
}

.info-icon {
  font-size: var(--cg-font-size-lg);
  flex-shrink: 0;
  color: var(--cg-color-info);
}

.help-text {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-muted);
  line-height: 1.5;
}

/* Empty State */
.empty-state-inline {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  padding: var(--cg-space-4);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-sm);
}

.empty-icon {
  font-size: var(--cg-font-size-2xl);
  flex-shrink: 0;
}

.empty-message {
  flex: 1;
}

.empty-message strong {
  display: block;
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  margin-bottom: var(--cg-space-1);
}

.empty-message p {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  line-height: 1.5;
}
</style>
