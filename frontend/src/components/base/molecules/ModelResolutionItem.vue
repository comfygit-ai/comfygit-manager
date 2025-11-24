<template>
  <div :class="['model-resolution-item', { resolved: hasChoice, ambiguous: hasMultipleOptions }]">
    <!-- Node info context -->
    <div class="node-info">
      Used by: <code>{{ nodeType }}</code>
    </div>

    <div class="item-body">
      <!-- Already resolved state - show change option -->
      <div v-if="hasChoice" class="resolved-state">
        <BaseButton variant="ghost" size="sm" @click="emit('clear-choice')">
          Change Selection
        </BaseButton>
      </div>

      <!-- Multiple options (ambiguous) - show radio selection -->
      <div v-else-if="hasMultipleOptions && options" class="multiple-options">
        <p class="options-prompt">Select a model to use:</p>
        <div class="options-list">
          <label
            v-for="(option, index) in options"
            :key="option.model.hash"
            :class="['option-card', { selected: selectedOptionIndex === index }]"
            @click="handleOptionClick(index)"
          >
            <input
              type="radio"
              :name="`model-option-${filename}`"
              :value="index"
              :checked="selectedOptionIndex === index"
              @change="handleOptionClick(index)"
            />
            <div class="option-content">
              <div class="option-header">
                <span class="option-filename">{{ option.model.filename }}</span>
                <ConfidenceBadge :confidence="option.match_confidence" size="sm" />
              </div>
              <div class="option-meta">
                <span class="option-size">{{ formatSize(option.model.size) }}</span>
                <span class="option-category">{{ option.model.category }}</span>
              </div>
              <div class="option-path">{{ option.model.relative_path }}</div>
            </div>
          </label>
        </div>

        <!-- Action buttons for ambiguous -->
        <div class="action-buttons">
          <BaseButton variant="ghost" size="sm" @click="emit('search')">
            Search Workspace
          </BaseButton>
          <BaseButton variant="ghost" size="sm" @click="emit('download-url')">
            Download URL
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="emit('mark-optional')">
            Mark Optional
          </BaseButton>
        </div>
      </div>

      <!-- Unresolved - show action options -->
      <div v-else class="unresolved">
        <div class="unresolved-message">
          <span class="warning-icon">⚠</span>
          <span>Model not found in workspace</span>
        </div>

        <div class="action-buttons">
          <BaseButton variant="primary" size="sm" @click="emit('search')">
            Search Workspace
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="emit('download-url')">
            Download URL
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="emit('mark-optional')">
            Mark Optional
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ConfidenceBadge from '../atoms/ConfidenceBadge.vue'
import BaseButton from '../BaseButton.vue'

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
  has_download_source?: boolean
}

interface ModelChoice {
  action: 'download' | 'select' | 'optional' | 'skip'
  url?: string
  target_path?: string
  selected_model?: {
    filename: string
    hash?: string
  }
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
  choice?: ModelChoice
}>()

const emit = defineEmits<{
  (e: 'mark-optional'): void
  (e: 'skip'): void
  (e: 'download-url'): void
  (e: 'search'): void
  (e: 'option-selected', index: number): void
  (e: 'clear-choice'): void
}>()

// Computed properties for choice state
const hasChoice = computed(() => !!props.choice)
const choiceAction = computed(() => props.choice?.action)
const choiceModel = computed(() => props.choice?.selected_model?.filename || 'selected')

function handleOptionClick(index: number) {
  emit('option-selected', index)
}

function formatSize(bytes: number): string {
  if (!bytes) return 'Unknown'
  const gb = bytes / (1024 * 1024 * 1024)
  if (gb >= 1) return `${gb.toFixed(2)} GB`
  const mb = bytes / (1024 * 1024)
  return `${mb.toFixed(1)} MB`
}
</script>

<style scoped>
.model-resolution-item {
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-lg);
  background: var(--cg-color-bg-secondary);
  overflow: hidden;
  transition: all var(--cg-transition-fast);
}

.model-resolution-item.ambiguous {
  border-color: var(--cg-color-warning);
}

.model-resolution-item.resolved {
  border-color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
}

.node-info {
  padding: var(--cg-space-2) var(--cg-space-3);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  background: var(--cg-color-bg-tertiary);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.node-info code {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-secondary);
}

.item-body {
  padding: var(--cg-space-3);
}

.resolved-state {
  display: flex;
  justify-content: center;
}

.multiple-options {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.options-prompt {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.option-card {
  display: flex;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-md);
  background: var(--cg-color-bg-primary);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.option-card:hover {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
}

.option-card.selected {
  border-color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
}

.option-card input[type="radio"] {
  margin-top: 4px;
  accent-color: var(--cg-color-accent);
}

.option-content {
  flex: 1;
  min-width: 0;
}

.option-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.option-filename {
  font-family: var(--cg-font-mono);
  font-weight: var(--cg-font-weight-semibold);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
}

.option-meta {
  display: flex;
  gap: var(--cg-space-2);
  align-items: center;
  margin-top: var(--cg-space-1);
  font-size: var(--cg-font-size-xs);
}

.option-size {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-muted);
}

.option-category {
  color: var(--cg-color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.option-path {
  margin-top: var(--cg-space-1);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-muted);
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  justify-content: flex-start;
  padding-top: var(--cg-space-2);
  border-top: 1px solid var(--cg-color-border-subtle);
}

.unresolved {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.unresolved-message {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-sm);
}

.warning-icon {
  font-size: var(--cg-font-size-lg);
}
</style>
