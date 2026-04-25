<template>
  <div class="repro-warning">
    <span class="repro-warning-icon">!</span>
    <div class="repro-warning-content">
      <strong>{{ warningCount }} reproducibility warning{{ warningCount !== 1 ? 's' : '' }}</strong>
      <p>{{ message }}</p>

      <div v-if="modelWarningCount" class="warning-group">
        <div class="warning-group-label">
          Models
        </div>
        <ul class="warning-list">
          <li v-for="model in visibleModelWarnings" :key="model.hash || model.filename">
            {{ model.filename }}
          </li>
          <li v-if="hiddenModelCount">+{{ hiddenModelCount }} more model{{ hiddenModelCount !== 1 ? 's' : '' }}</li>
        </ul>
      </div>

      <div v-if="nodeWarningCount" class="warning-group">
        <div class="warning-group-label">
          Nodes
        </div>
        <ul class="warning-list">
          <li v-for="node in visibleNodeWarnings" :key="node.name">
            {{ node.name }} ({{ node.criticality }})
          </li>
          <li v-if="hiddenNodeCount">+{{ hiddenNodeCount }} more node{{ hiddenNodeCount !== 1 ? 's' : '' }}</li>
        </ul>
      </div>

      <button class="review-issues-btn" @click="$emit('review')">
        Review Issues
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EnvironmentReadinessWarnings } from '@/types/comfygit'

const props = withDefaults(defineProps<{
  warnings: EnvironmentReadinessWarnings
  message?: string
  maxItemsPerGroup?: number
}>(), {
  message: 'Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway.',
  maxItemsPerGroup: 2,
})

defineEmits<{
  review: []
}>()

const models = computed(() => props.warnings.models_without_sources || [])
const nodes = computed(() => props.warnings.nodes_without_provenance || [])

const modelWarningCount = computed(() => models.value.length)
const nodeWarningCount = computed(() => nodes.value.length)
const warningCount = computed(() => modelWarningCount.value + nodeWarningCount.value)

const visibleModelWarnings = computed(() =>
  models.value.slice(0, props.maxItemsPerGroup)
)

const visibleNodeWarnings = computed(() =>
  nodes.value.slice(0, props.maxItemsPerGroup)
)

const hiddenModelCount = computed(() =>
  Math.max(0, modelWarningCount.value - visibleModelWarnings.value.length)
)

const hiddenNodeCount = computed(() =>
  Math.max(0, nodeWarningCount.value - visibleNodeWarnings.value.length)
)
</script>

<style scoped>
.repro-warning {
  display: flex;
  gap: var(--cg-space-3);
  padding: var(--cg-space-4);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-sm);
  color: var(--cg-color-warning);
}

.repro-warning-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: 1px solid var(--cg-color-warning);
  border-radius: 50%;
  flex-shrink: 0;
  font-weight: var(--cg-font-weight-bold);
}

.repro-warning-content {
  min-width: 0;
}

.repro-warning-content p {
  margin: var(--cg-space-1) 0 0 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  line-height: 1.4;
}

.warning-group {
  margin-top: var(--cg-space-2);
}

.warning-group-label {
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.warning-list {
  margin: var(--cg-space-1) 0 0 0;
  padding-left: var(--cg-space-4);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.review-issues-btn {
  margin-top: var(--cg-space-3);
  border: 1px solid var(--cg-color-warning);
  background: transparent;
  color: var(--cg-color-warning);
  padding: var(--cg-space-2) var(--cg-space-3);
  cursor: pointer;
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.review-issues-btn:hover {
  background: var(--cg-color-warning-muted);
}
</style>
