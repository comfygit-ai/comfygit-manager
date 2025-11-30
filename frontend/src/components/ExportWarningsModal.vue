<template>
  <BaseModal
    title="Export Warnings"
    size="md"
    @close="$emit('cancel')"
  >
    <template #body>
      <div class="export-warnings">
        <!-- Success State (all models now have sources) -->
        <div v-if="models.length === 0" class="success-header">
          <span class="success-icon">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/>
            </svg>
          </span>
          <div class="success-summary">
            <h3 class="success-title">All models have source URLs</h3>
            <p class="success-description">
              Your environment is ready to export. Recipients will be able to download all models automatically.
            </p>
          </div>
        </div>

        <!-- Warning State (models still missing sources) -->
        <template v-else>
          <!-- Warning Header -->
          <div class="warning-header">
            <span class="warning-icon">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/>
                <path d="M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
            </span>
            <div class="warning-summary">
              <h3 class="warning-title">
                {{ models.length }} model{{ models.length !== 1 ? 's' : '' }} missing source URLs
              </h3>
              <p class="warning-description">
                Recipients won't be able to download these models automatically.
                Click "Add Source" to fix, or export anyway.
              </p>
            </div>
          </div>

          <!-- Models List -->
          <div class="models-section">
            <div class="models-list">
              <div
                v-for="model in visibleModels"
                :key="model.hash"
                class="model-item"
              >
                <div class="model-info">
                  <div class="model-filename">{{ model.filename }}</div>
                  <div class="model-workflows">
                    Used by: {{ model.workflows.join(', ') }}
                  </div>
                </div>
                <button
                  class="add-source-btn"
                  @click="selectedModelHash = model.hash"
                >
                  Add Source
                </button>
              </div>
            </div>

            <!-- Show More Button -->
            <button
              v-if="models.length > 3 && !showAllModels"
              class="show-more-btn"
              @click="showAllModels = true"
            >
              Show {{ models.length - 3 }} more model{{ models.length - 3 !== 1 ? 's' : '' }}...
            </button>
          </div>
        </template>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="$emit('cancel')">
        Cancel Export
      </BaseButton>
      <BaseButton variant="primary" @click="$emit('confirm')">
        {{ models.length === 0 ? 'Export' : 'Export Anyway' }}
      </BaseButton>
    </template>
  </BaseModal>

  <!-- Model Detail Modal (for adding sources) -->
  <ModelDetailModal
    v-if="selectedModelHash"
    :identifier="selectedModelHash"
    @close="handleDetailModalClose"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import ModelDetailModal from './ModelDetailModal.vue'
import type { ModelWithoutSource } from '@/types/comfygit'

const props = defineProps<{
  models: ModelWithoutSource[]
}>()

const emit = defineEmits<{
  confirm: []
  cancel: []
  revalidate: []
}>()

const showAllModels = ref(false)
const selectedModelHash = ref<string | null>(null)

const visibleModels = computed(() => {
  if (showAllModels.value || props.models.length <= 3) {
    return props.models
  }
  return props.models.slice(0, 3)
})

function handleDetailModalClose() {
  selectedModelHash.value = null
  emit('revalidate')
}
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

.models-section {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  overflow: hidden;
}

.models-list {
  max-height: 240px;
  overflow-y: auto;
}

.model-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.model-item:last-child {
  border-bottom: none;
}

.model-info {
  flex: 1;
  min-width: 0;
}

.model-filename {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  word-break: break-all;
}

.model-workflows {
  margin-top: var(--cg-space-1);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.add-source-btn {
  flex-shrink: 0;
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-accent);
  padding: 4px 10px;
  font-size: var(--cg-font-size-xs);
  cursor: pointer;
  white-space: nowrap;
}

.add-source-btn:hover {
  background: var(--cg-color-accent);
  color: var(--cg-color-bg-primary);
  border-color: var(--cg-color-accent);
}

.show-more-btn {
  width: 100%;
  padding: var(--cg-space-2);
  background: transparent;
  border: none;
  border-top: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-sm);
  cursor: pointer;
  transition: background var(--cg-transition-base);
}

.show-more-btn:hover {
  background: var(--cg-color-bg-secondary);
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
