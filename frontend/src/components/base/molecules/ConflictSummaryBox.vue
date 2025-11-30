<template>
  <div class="conflict-summary-box">
    <div class="summary-header">
      <span class="summary-icon">⚠</span>
      <div class="summary-text">
        <strong>{{ conflictCount }} conflict{{ conflictCount !== 1 ? 's' : '' }} detected</strong>
        <p v-if="resolvedCount < conflictCount">
          Resolve all conflicts before {{ operationType }}ing
        </p>
        <p v-else class="all-resolved">
          All conflicts resolved - ready to {{ operationType }}
        </p>
      </div>
    </div>
    <div class="summary-progress">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
      <span class="progress-text">{{ resolvedCount }} / {{ conflictCount }} resolved</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  conflictCount: number
  resolvedCount: number
  operationType: 'pull' | 'merge'
}>()

const progressPercent = computed(() =>
  props.conflictCount > 0 ? (props.resolvedCount / props.conflictCount) * 100 : 0
)
</script>

<style scoped>
.conflict-summary-box {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
}

.summary-header {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-2);
}

.summary-icon {
  font-size: var(--cg-font-size-lg);
  color: var(--cg-color-warning);
}

.summary-text {
  flex: 1;
}

.summary-text strong {
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-sm);
}

.summary-text p {
  margin: var(--cg-space-1) 0 0 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.summary-text p.all-resolved {
  color: var(--cg-color-success);
}

.summary-progress {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-sm);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--cg-color-warning);
  border-radius: var(--cg-radius-sm);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  white-space: nowrap;
}
</style>
