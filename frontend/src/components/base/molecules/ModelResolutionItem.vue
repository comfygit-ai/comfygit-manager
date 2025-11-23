<template>
  <div class="model-item" :class="itemClass">
    <!-- Header -->
    <div class="model-header">
      <div class="model-filename">{{ filename }}</div>
      <div class="node-type">Used by: <code>{{ nodeType }}</code></div>
    </div>

    <!-- Metadata -->
    <div v-if="category || size || confidence !== undefined || isOptional" class="model-meta">
      <span v-if="category" class="category">{{ category }}</span>
      <span v-if="size" class="size">{{ formatSize(size) }}</span>
      <ConfidenceBadge v-if="confidence !== undefined" :confidence="confidence" :match-type="matchType" size="sm" />
      <span v-if="isOptional" class="optional-badge">OPTIONAL</span>
    </div>

    <!-- Multiple Options (Ambiguous) -->
    <div v-if="hasMultipleOptions && options" class="model-options">
      <h4 class="options-title">Choose model:</h4>
      <div
        v-for="(option, index) in options"
        :key="option.model.hash"
        class="option-card"
        :class="{ selected: selectedOptionIndex === index }"
        @click="selectOption(index)"
      >
        <input
          type="radio"
          :name="`model-${filename}`"
          :checked="selectedOptionIndex === index"
          @change="selectOption(index)"
        />

        <div class="option-details">
          <div class="option-filename">{{ option.model.filename }}</div>

          <div class="option-meta">
            <ConfidenceBadge :confidence="option.match_confidence" :match-type="option.match_type" size="sm" />
            <span class="size">{{ formatSize(option.model.size) }}</span>
            <span class="category">{{ option.model.category }}</span>
          </div>

          <div class="option-path">{{ option.model.relative_path }}</div>
        </div>
      </div>

      <!-- Optional checkbox for ambiguous models -->
      <label class="optional-checkbox">
        <input
          type="checkbox"
          :checked="isOptional"
          @change="toggleOptional"
        />
        Mark as optional (workflow works without it)
      </label>
    </div>

    <!-- Unresolved: Show action buttons -->
    <div v-else class="model-actions">
      <button class="action-btn primary" @click="emit('search')">
        🔍 Search Workspace
      </button>

      <button class="action-btn secondary" @click="emit('download-url')">
        📥 Enter Download URL
      </button>

      <button class="action-btn secondary" @click="handleOptional">
        ○ Mark as Optional
      </button>

      <button class="action-btn ghost" @click="emit('skip')">
        Skip for Now
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ConfidenceBadge from '../atoms/ConfidenceBadge.vue'

interface ModelOption {
  model: {
    filename: string
    hash: string
    size: number
    category: string
    relative_path: string
  }
  match_confidence: number
  match_type: string
}

const props = defineProps<{
  filename: string
  nodeType: string
  category?: string
  size?: number
  hash?: string
  confidence?: number
  matchType?: string
  isOptional?: boolean
  hasMultipleOptions?: boolean
  options?: ModelOption[]
  selectedOptionIndex?: number
}>()

const emit = defineEmits<{
  (e: 'mark-optional'): void
  (e: 'unmark-optional'): void
  (e: 'skip'): void
  (e: 'refine-search'): void
  (e: 'download-url'): void
  (e: 'search'): void
  (e: 'option-selected', index: number): void
}>()

const itemClass = ref({
  'has-options': props.hasMultipleOptions,
  'is-optional': props.isOptional
})

function selectOption(index: number) {
  emit('option-selected', index)
}

function toggleOptional() {
  if (props.isOptional) {
    emit('unmark-optional')
  } else {
    emit('mark-optional')
  }
}

function handleOptional() {
  emit('mark-optional')
}

function formatSize(bytes: number): string {
  if (!bytes) return 'Unknown size'
  const gb = bytes / (1024 * 1024 * 1024)
  if (gb >= 1) return `${gb.toFixed(2)} GB`
  const mb = bytes / (1024 * 1024)
  return `${mb.toFixed(2)} MB`
}
</script>

<style scoped>
.model-item {
  border: 1px solid var(--cg-color-border);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-border-radius-sm);
}

.model-item.is-optional {
  border-color: var(--cg-color-warning);
  opacity: 0.8;
}

.model-header {
  margin-bottom: var(--cg-space-2);
}

.model-filename {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-md);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-info);
  margin-bottom: var(--cg-spacing-xs);
}

.node-type {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.node-type code {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-secondary);
}

.model-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-spacing-sm);
  align-items: center;
  margin-bottom: var(--cg-space-2);
  padding: var(--cg-spacing-sm);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-border-radius-sm);
}

.category {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.size {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
}

.optional-badge {
  padding: 2px 6px;
  border: 1px solid var(--cg-color-warning);
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  border-radius: 2px;
}

.model-options {
  display: flex;
  flex-direction: column;
  gap: var(--cg-spacing-sm);
  margin-top: var(--cg-space-2);
}

.options-title {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text);
  margin: 0 0 var(--cg-spacing-sm) 0;
}

.option-card {
  display: flex;
  gap: var(--cg-spacing-sm);
  padding: var(--cg-space-2);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-border-radius-sm);
  background: var(--cg-color-bg);
  cursor: pointer;
  transition: all 0.2s;
}

.option-card:hover {
  border-color: var(--cg-color-primary);
  background: var(--cg-color-bg-tertiary);
}

.option-card.selected {
  border-color: var(--cg-color-success);
  background: var(--cg-color-bg-tertiary);
  box-shadow: 0 0 8px rgba(0, 255, 0, 0.2);
}

.option-details {
  flex: 1;
}

.option-filename {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
  margin-bottom: var(--cg-spacing-xs);
}

.option-meta {
  display: flex;
  gap: var(--cg-spacing-sm);
  align-items: center;
  margin-bottom: var(--cg-spacing-xs);
}

.option-path {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
}

.optional-checkbox {
  display: flex;
  align-items: center;
  gap: var(--cg-spacing-sm);
  padding: var(--cg-spacing-sm);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-border-radius-sm);
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
  margin-top: var(--cg-spacing-sm);
}

.optional-checkbox:hover {
  background: var(--cg-color-bg-hover);
}

.model-actions {
  display: flex;
  flex-direction: column;
  gap: var(--cg-spacing-sm);
  margin-top: var(--cg-space-2);
}

.action-btn {
  padding: var(--cg-spacing-sm) var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-border-radius-sm);
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  display: flex;
  align-items: center;
  gap: var(--cg-spacing-xs);
}

.action-btn.primary {
  background: var(--cg-color-primary);
  color: white;
  border-color: var(--cg-color-primary);
}

.action-btn.primary:hover {
  background: var(--cg-color-primary-hover);
  box-shadow: 0 0 12px rgba(0, 168, 255, 0.3);
}

.action-btn.secondary {
  background: var(--cg-color-bg-secondary);
  color: var(--cg-color-text);
}

.action-btn.secondary:hover {
  background: var(--cg-color-bg-tertiary);
  border-color: var(--cg-color-primary);
}

.action-btn.ghost {
  background: transparent;
  color: var(--cg-color-text-muted);
  border-color: transparent;
}

.action-btn.ghost:hover {
  color: var(--cg-color-text);
  border-color: var(--cg-color-border);
}
</style>
