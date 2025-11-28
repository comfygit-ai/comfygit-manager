<template>
  <div class="node-conflict-item">
    <div class="node-header">
      <code class="node-name">{{ conflict.node_name }}</code>
      <span class="node-id">({{ conflict.node_id }})</span>
    </div>

    <div class="version-comparison">
      <div class="version yours">
        <span class="label">Your version:</span>
        <code>{{ conflict.base_version }}</code>
      </div>
      <span class="arrow">→</span>
      <div class="version theirs">
        <span class="label">Their version:</span>
        <code>{{ conflict.target_version }}</code>
      </div>
    </div>

    <div class="chosen-version">
      <span class="label">Will install:</span>
      <code class="chosen">{{ conflict.chosen_version }}</code>
      <span class="chosen-reason">{{ conflict.chosen_reason }}</span>
    </div>

    <!-- Collapsible affected workflows -->
    <details class="affected-workflows">
      <summary>
        Affected workflows ({{ conflict.affected_workflows.length }})
      </summary>
      <ul>
        <li v-for="wf in conflict.affected_workflows" :key="wf.name">
          <code>{{ wf.name }}</code>
          <span class="wf-source">({{ wf.source === 'base' ? 'yours' : 'theirs' }})</span>
          <span class="wf-version">needs v{{ wf.required_version }}</span>
        </li>
      </ul>
    </details>
  </div>
</template>

<script setup lang="ts">
import type { NodeVersionConflict } from '@/types/comfygit'

defineProps<{
  conflict: NodeVersionConflict
}>()
</script>

<style scoped>
.node-conflict-item {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
}

.node-header {
  display: flex;
  align-items: baseline;
  gap: var(--cg-space-2);
}

.node-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
}

.node-id {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.version-comparison {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
}

.version {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.version .label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.version code {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-primary);
}

.version.yours code {
  color: var(--cg-color-info);
}

.version.theirs code {
  color: var(--cg-color-success);
}

.arrow {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-lg);
}

.chosen-version {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2);
  background: var(--cg-color-accent-muted);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
}

.chosen-version .label {
  color: var(--cg-color-text-muted);
}

.chosen-version .chosen {
  font-family: var(--cg-font-mono);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-accent);
}

.chosen-reason {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  margin-left: auto;
}

.affected-workflows {
  font-size: var(--cg-font-size-sm);
}

.affected-workflows summary {
  cursor: pointer;
  color: var(--cg-color-text-secondary);
  user-select: none;
}

.affected-workflows summary:hover {
  color: var(--cg-color-text-primary);
}

.affected-workflows ul {
  margin: var(--cg-space-2) 0 0 var(--cg-space-4);
  padding: 0;
  list-style: none;
}

.affected-workflows li {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-1) 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
}

.affected-workflows li code {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-primary);
}

.wf-source {
  color: var(--cg-color-text-muted);
}

.wf-version {
  margin-left: auto;
  color: var(--cg-color-text-muted);
}
</style>
