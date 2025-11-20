<template>
  <div class="status-section">
    <h3 class="section-title">Status</h3>
    <div class="status-grid">
      <!-- Workflow column -->
      <div class="status-column">
        <h4 class="column-title">Workflows</h4>
        <div class="status-item" v-if="status.workflows.new.length">
          <span class="icon">●</span>
          <span class="count new">{{ status.workflows.new.length }}</span>
          <span class="label">new</span>
        </div>
        <div class="status-item" v-if="status.workflows.modified.length">
          <span class="icon">●</span>
          <span class="count modified">{{ status.workflows.modified.length }}</span>
          <span class="label">modified</span>
        </div>
        <div class="status-item" v-if="status.workflows.deleted.length">
          <span class="icon">●</span>
          <span class="count deleted">{{ status.workflows.deleted.length }}</span>
          <span class="label">deleted</span>
        </div>
        <div class="status-item synced-item">
          <span class="icon synced">✓</span>
          <span class="count synced">{{ status.workflows.synced.length }}</span>
          <span class="label">synced</span>
        </div>
      </div>

      <!-- Git status column -->
      <div class="status-column">
        <h4 class="column-title">Git Changes</h4>
        <div v-if="status.git_changes.nodes_added.length" class="status-item">
          <span class="icon">●</span>
          <span class="count new">{{ status.git_changes.nodes_added.length }}</span>
          <span class="label">node added</span>
        </div>
        <div v-if="status.git_changes.nodes_removed.length" class="status-item">
          <span class="icon">●</span>
          <span class="count deleted">{{ status.git_changes.nodes_removed.length }}</span>
          <span class="label">node removed</span>
        </div>
        <div v-if="hasOtherWorkflowChanges" class="status-item">
          <span class="icon">●</span>
          <span class="count modified">●</span>
          <span class="label">other changes</span>
        </div>
        <div v-if="!hasGitChanges" class="status-item ok">
          <span class="icon">✓</span>
          <span class="label">No uncommitted changes</span>
        </div>
      </div>
    </div>

    <!-- Warnings -->
    <div v-if="status.missing_models_count > 0" class="warning-box">
      <span class="warning-icon">⚠</span>
      <span>{{ status.missing_models_count }} missing model(s)</span>
    </div>
    <div v-if="!status.comparison.is_synced" class="warning-box error">
      <span class="warning-icon">⚠</span>
      <span>Environment not synced</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComfyGitStatus } from '@/types/comfygit'

const props = defineProps<{
  status: ComfyGitStatus
}>()

const hasGitChanges = computed(() => {
  const gc = props.status.git_changes
  return gc.nodes_added.length > 0 || gc.nodes_removed.length > 0 || gc.workflow_changes || gc.has_other_changes
})

const hasOtherWorkflowChanges = computed(() => {
  const gc = props.status.git_changes
  const wf = props.status.workflows
  // Only show "other changes" if there are workflow changes that aren't already shown
  // as new/modified/deleted in the Workflows column
  return (gc.workflow_changes || gc.has_other_changes) &&
         wf.new.length === 0 &&
         wf.modified.length === 0 &&
         wf.deleted.length === 0
})
</script>

<style scoped>
.status-section {
  margin-bottom: 16px;
}

.section-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--descrip-text, #999);
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
}

.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: var(--comfy-input-bg, #222);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 6px;
}

.status-column {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
}

.status-column:first-child {
  border-right: 1px solid var(--border-color, #4a4a4a);
}

.column-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--descrip-text, #999);
  margin: 0 0 6px 0;
  letter-spacing: 0.5px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--input-text, #ddd);
}

.status-item .icon {
  font-size: 8px;
  opacity: 0.7;
}

.status-item .icon.synced {
  color: var(--descrip-text, #999);
  font-size: 10px;
}

.synced-item {
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px solid var(--border-color, #3a3a3a);
}

.count {
  font-weight: 600;
  min-width: 16px;
}

.count.new { color: #4ade80; }
.count.modified { color: #fbbf24; }
.count.deleted { color: #f87171; }
.count.synced { color: var(--descrip-text, #999); }

.label {
  color: var(--descrip-text, #999);
}

.status-item.ok {
  color: #4ade80;
}

.status-item.ok .icon {
  font-size: 10px;
  opacity: 1;
}

.status-item.ok .label {
  color: #4ade80;
}

.warning-box {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 8px 10px;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid #fbbf24;
  border-radius: 4px;
  font-size: 12px;
  color: #fbbf24;
}

.warning-box.error {
  background: rgba(239, 68, 68, 0.1);
  border-color: #ef4444;
  color: #f87171;
}

.warning-icon {
  font-size: 14px;
}
</style>
