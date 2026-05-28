<template>
  <div :class="['model-resolution-item', { resolved: hasChoice, ambiguous: hasMultipleOptions }]">
    <!-- Node info context with status badge -->
    <div class="node-info">
      <span class="node-info-text">Used by: <code>{{ nodeType }}</code></span>
      <span v-if="statusLabel" :class="['status-badge', statusVariant]">{{ statusLabel }}</span>
    </div>

    <div class="item-body">
      <!-- Already resolved state - show change option -->
      <div v-if="hasChoice" class="resolved-state">
        <BaseButton variant="ghost" size="sm" @click="handleClearChoice">
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
          <BaseButton variant="secondary" size="sm" @click="handleFindSource">
            Find Source
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="handleSearch">
            Search Index
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="handleMarkOptional">
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
          <BaseButton variant="secondary" size="sm" @click="handleFindSource">
            Find Source
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="handleSearch">
            Search Index
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="handleMarkOptional">
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
  action: 'download' | 'select' | 'optional' | 'skip' | 'cancel_download'
  url?: string
  target_path?: string
  selected_model?: {
    filename: string
    hash?: string
  }
}

export type ResolutionStatus =
  | 'not-found'
  | 'ambiguous'
  | 'download'
  | 'select'
  | 'optional'
  | 'skip'

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
  // Status badge props
  status?: ResolutionStatus
  statusLabel?: string
}>()

const emit = defineEmits<{
  (e: 'mark-optional'): void
  (e: 'skip'): void
  (e: 'find-source'): void
  (e: 'search'): void
  (e: 'option-selected', index: number): void
  (e: 'clear-choice'): void
}>()

// Computed properties for choice state
const hasChoice = computed(() => !!props.choice)
const choiceAction = computed(() => props.choice?.action)
const choiceModel = computed(() => props.choice?.selected_model?.filename || 'selected')

// Status badge variant based on status
const statusVariant = computed(() => {
  switch (props.status) {
    case 'not-found': return 'unresolved'
    case 'ambiguous': return 'ambiguous'
    case 'download':
    case 'select': return 'resolved'
    case 'optional': return 'optional'
    case 'skip': return 'skip'
    default: return 'unresolved'
  }
})

function handleOptionClick(index: number) {
  emit('option-selected', index)
}

function handleMarkOptional() {
  emit('mark-optional')
}

function handleFindSource() {
  emit('find-source')
}

function handleSearch() {
  emit('search')
}

function handleClearChoice() {
  emit('clear-choice')
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  background: var(--cg-color-bg-tertiary);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.node-info-text {
  flex: 1;
  min-width: 0;
}

.node-info code {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-secondary);
}

.status-badge {
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  white-space: nowrap;
  flex-shrink: 0;
}

.status-badge.unresolved {
  background: var(--cg-color-error-muted);
  color: var(--cg-color-error);
}

.status-badge.ambiguous {
  background: var(--cg-color-warning-muted);
  color: var(--cg-color-warning);
}

.status-badge.resolved {
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.status-badge.optional {
  background: var(--cg-color-info-muted);
  color: var(--cg-color-info);
}

.status-badge.skip {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-text-muted);
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
