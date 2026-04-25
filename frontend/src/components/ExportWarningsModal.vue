<template>
  <BaseModal
    :title="mode === 'publish' ? 'Publish Warnings' : 'Export Warnings'"
    size="md"
    @close="$emit('cancel')"
  >
    <template #body>
      <div class="export-warnings">
        <!-- Success State (all dependencies now have portable provenance) -->
        <div v-if="warningCount === 0" class="success-header">
          <span class="success-icon">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/>
            </svg>
          </span>
          <div class="success-summary">
              <h3 class="success-title">All dependencies have portable provenance</h3>
              <p class="success-description">
              Your environment is ready to {{ mode }}. Recipients will be able to reconstruct declared dependencies automatically.
              </p>
          </div>
        </div>

        <!-- Warning State (dependencies still missing provenance) -->
        <template v-else>
          <div class="warning-header">
            <span class="warning-icon">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/>
                <path d="M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
            </span>
            <div class="warning-summary">
              <h3 class="warning-title">
                {{ warningCount }} reproducibility warning{{ warningCount !== 1 ? 's' : '' }}
              </h3>
              <p class="warning-description">
                Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.
                Review the missing details, or {{ mode }} anyway.
              </p>
              <ul class="warning-list">
                <li v-for="model in visibleModelWarnings" :key="model.hash || model.filename">
                  Model: {{ model.filename }}
                </li>
                <li v-for="node in visibleNodeWarnings" :key="node.name">
                  Node: {{ node.name }} ({{ node.criticality }})
                </li>
                <li v-if="hiddenWarningCount">+{{ hiddenWarningCount }} more</li>
              </ul>
              <button class="review-issues-btn" @click="showReadinessIssuesModal = true">
                Review Issues
              </button>
            </div>
          </div>
        </template>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="$emit('cancel')">
        Cancel {{ mode === 'publish' ? 'Publish' : 'Export' }}
      </BaseButton>
      <BaseButton variant="primary" @click="$emit('confirm')">
        {{ warningCount === 0 ? actionLabel : `${actionLabel} Anyway` }}
      </BaseButton>
    </template>
  </BaseModal>

  <ReadinessIssuesModal
    v-if="showReadinessIssuesModal"
    :warnings="warnings"
    @close="showReadinessIssuesModal = false"
    @revalidate="$emit('revalidate')"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import ReadinessIssuesModal from '@/components/ReadinessIssuesModal.vue'
import type { ModelWithoutSource, NodeWithoutProvenance } from '@/types/comfygit'

const props = defineProps<{
  models: ModelWithoutSource[]
  nodes?: NodeWithoutProvenance[]
  mode?: 'export' | 'publish'
}>()

defineEmits<{
  confirm: []
  cancel: []
  revalidate: []
}>()

const showReadinessIssuesModal = ref(false)
const mode = computed(() => props.mode || 'export')
const actionLabel = computed(() => mode.value === 'publish' ? 'Publish' : 'Export')
const nodes = computed(() => props.nodes || [])
const warningCount = computed(() => props.models.length + nodes.value.length)

const warnings = computed(() => ({
  models_without_sources: props.models,
  nodes_without_provenance: nodes.value,
}))

const visibleModelWarnings = computed(() =>
  props.models.slice(0, 3)
)

const visibleNodeWarnings = computed(() => {
  const remainingSlots = Math.max(0, 3 - visibleModelWarnings.value.length)
  return nodes.value.slice(0, remainingSlots)
})

const hiddenWarningCount = computed(() =>
  warningCount.value - visibleModelWarnings.value.length - visibleNodeWarnings.value.length
)
</script>

<style scoped>
.export-warnings {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.warning-header {
  display: flex;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
}

.warning-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--cg-color-warning);
  color: var(--cg-color-bg-primary);
  border-radius: 50%;
  flex-shrink: 0;
}

.warning-summary {
  flex: 1;
}

.warning-title {
  margin: 0 0 var(--cg-space-1) 0;
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
}

.warning-description {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.warning-list {
  margin: var(--cg-space-2) 0 0 0;
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

/* Success state styles */
.success-header {
  display: flex;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
  border-radius: var(--cg-radius-md);
}

.success-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--cg-color-success);
  color: var(--cg-color-bg-primary);
  border-radius: 50%;
  flex-shrink: 0;
}

.success-summary {
  flex: 1;
}

.success-title {
  margin: 0 0 var(--cg-space-1) 0;
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
}

.success-description {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}
</style>
