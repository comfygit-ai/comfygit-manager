<template>
  <div :class="['node-resolution-item', { selected: isSelected, ambiguous: hasMultipleOptions }]">
    <div class="item-header">
      <div class="item-title">
        <span class="node-type">{{ nodeType }}</span>
        <ConfidenceBadge
          v-if="confidence !== undefined"
          :confidence="confidence"
          size="sm"
        />
        <span v-if="matchType" class="match-type">{{ matchType }}</span>
      </div>
      <div class="item-actions">
        <button
          v-if="!isOptional"
          class="action-btn mark-optional"
          @click="emit('mark-optional')"
          title="Mark as optional"
        >
          Optional
        </button>
        <button
          v-else
          class="action-btn unmark-optional"
          @click="emit('unmark-optional')"
          title="Unmark as optional"
        >
          Required
        </button>
        <button
          class="action-btn skip"
          @click="emit('skip')"
          title="Skip this node"
        >
          Skip
        </button>
      </div>
    </div>

    <div class="item-body">
      <!-- Single option or resolved -->
      <div v-if="!hasMultipleOptions && packageId" class="single-option">
        <div class="package-info">
          <div class="package-id">{{ packageId }}</div>
          <div v-if="description" class="package-description">{{ description }}</div>
          <div class="package-meta">
            <span v-if="repository" class="repository">
              <a :href="repository" target="_blank" rel="noopener">{{ repository }}</a>
            </span>
            <span v-if="source" class="source-badge">{{ source }}</span>
            <span v-if="isInstalled" class="installed-badge">Already Installed</span>
          </div>
        </div>
        <div class="item-controls">
          <button class="action-btn refine" @click="emit('refine-search')">
            Refine Search
          </button>
          <button class="action-btn manual" @click="emit('manual-entry')">
            Enter Manually
          </button>
        </div>
      </div>

      <!-- Multiple options (ambiguous) -->
      <div v-else-if="hasMultipleOptions && options" class="multiple-options">
        <div class="options-header">
          <span class="options-count">{{ options.length }} possible matches found</span>
        </div>
        <div class="options-list">
          <label
            v-for="(option, index) in options"
            :key="option.package_id"
            :class="['option-card', { selected: selectedOptionIndex === index }]"
          >
            <input
              type="radio"
              :name="`node-option-${nodeType}`"
              :value="index"
              :checked="selectedOptionIndex === index"
              @change="emit('option-selected', index)"
            />
            <div class="option-content">
              <div class="option-header">
                <span class="option-package-id">{{ option.package_id }}</span>
                <ConfidenceBadge :confidence="option.match_confidence" size="sm" />
              </div>
              <div v-if="option.description" class="option-description">
                {{ option.description }}
              </div>
              <div class="option-meta">
                <span v-if="option.repository" class="repository">{{ option.repository }}</span>
                <span v-if="option.is_installed" class="installed-badge">Installed</span>
              </div>
            </div>
          </label>
        </div>
        <div class="item-controls">
          <button class="action-btn refine" @click="emit('refine-search')">
            Refine Search
          </button>
          <button class="action-btn manual" @click="emit('manual-entry')">
            Enter Manually
          </button>
        </div>
      </div>

      <!-- Unresolved -->
      <div v-else class="unresolved">
        <div class="unresolved-message">
          <span class="warning-icon">⚠</span>
          <span>No matches found for this node type</span>
        </div>
        <div class="item-controls">
          <button class="action-btn search" @click="emit('search')">
            Search Registry
          </button>
          <button class="action-btn manual primary" @click="emit('manual-entry')">
            Enter Manually
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ConfidenceBadge from '../atoms/ConfidenceBadge.vue'

interface NodeOption {
  package_id: string
  match_confidence: number
  match_type: string
  description?: string
  repository?: string
  is_installed: boolean
}

const props = defineProps<{
  nodeType: string
  packageId?: string
  confidence?: number
  matchType?: string
  description?: string
  repository?: string
  source?: string
  isInstalled?: boolean
  isOptional?: boolean
  isSelected?: boolean
  hasMultipleOptions?: boolean
  options?: NodeOption[]
  selectedOptionIndex?: number
}>()

const emit = defineEmits<{
  (e: 'mark-optional'): void
  (e: 'unmark-optional'): void
  (e: 'skip'): void
  (e: 'refine-search'): void
  (e: 'manual-entry'): void
  (e: 'search'): void
  (e: 'option-selected', index: number): void
}>()
</script>

<style scoped>
.node-resolution-item {
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-border-radius);
  background: var(--cg-color-bg-secondary);
  margin-bottom: var(--cg-space-3);
  transition: all 0.2s;
}

.node-resolution-item.selected {
  border-color: var(--cg-color-primary);
  box-shadow: 0 0 0 2px var(--cg-color-primary-alpha);
}

.node-resolution-item.ambiguous {
  border-color: var(--cg-color-warning);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
}

.item-title {
  display: flex;
  align-items: center;
  gap: var(--cg-spacing-sm);
}

.node-type {
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text);
  font-size: var(--cg-font-size-sm);
}

.match-type {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  padding: 2px var(--cg-spacing-xs);
  background: var(--cg-color-bg);
  border-radius: var(--cg-border-radius-sm);
}

.item-actions {
  display: flex;
  gap: var(--cg-spacing-sm);
}

.action-btn {
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  border: 2px solid #555;
  background: #2a2a2a;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.action-btn:hover {
  background: #3a3a3a;
  border-color: #0066cc;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 102, 204, 0.3);
}

.action-btn.primary {
  background: #0066cc;
  color: white;
  border-color: #0066cc;
}

.action-btn.primary:hover {
  background: #0052a3;
  border-color: #0052a3;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.4);
}

.item-body {
  padding: var(--cg-space-3);
}

.package-info {
  margin-bottom: var(--cg-space-3);
}

.package-id {
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text);
  margin-bottom: var(--cg-spacing-xs);
}

.package-description {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-muted);
  margin-bottom: var(--cg-spacing-sm);
}

.package-meta {
  display: flex;
  gap: var(--cg-spacing-sm);
  align-items: center;
  font-size: var(--cg-font-size-xs);
}

.repository a {
  color: var(--cg-color-primary);
  text-decoration: none;
}

.repository a:hover {
  text-decoration: underline;
}

.source-badge,
.installed-badge {
  padding: 2px var(--cg-spacing-xs);
  border-radius: var(--cg-border-radius-sm);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
}

.source-badge {
  background: var(--cg-color-info-bg);
  color: var(--cg-color-info);
}

.installed-badge {
  background: var(--cg-color-success-bg);
  color: var(--cg-color-success);
}

.item-controls {
  display: flex;
  gap: var(--cg-spacing-sm);
  justify-content: flex-end;
}

.multiple-options {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.options-header {
  margin-bottom: var(--cg-space-2);
}

.options-count {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-warning);
  font-weight: var(--cg-font-weight-semibold);
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-spacing-sm);
  margin-bottom: var(--cg-space-3);
}

.option-card {
  display: flex;
  gap: var(--cg-spacing-sm);
  padding: var(--cg-space-2);
  border: 1px solid var(--cg-color-border-subtle);
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
  border-color: var(--cg-color-primary);
  background: var(--cg-color-primary-alpha);
}

.option-card input[type="radio"] {
  margin-top: 2px;
}

.option-content {
  flex: 1;
}

.option-header {
  display: flex;
  align-items: center;
  gap: var(--cg-spacing-sm);
  margin-bottom: var(--cg-spacing-xs);
}

.option-package-id {
  font-weight: var(--cg-font-weight-semibold);
  font-size: var(--cg-font-size-sm);
}

.option-description {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  margin-bottom: var(--cg-spacing-xs);
}

.option-meta {
  display: flex;
  gap: var(--cg-spacing-sm);
  align-items: center;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.unresolved {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.unresolved-message {
  display: flex;
  align-items: center;
  gap: var(--cg-spacing-sm);
  padding: var(--cg-space-2);
  background: var(--cg-color-warning-bg);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-border-radius-sm);
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-sm);
}

.warning-icon {
  font-size: var(--cg-font-size-md);
}
</style>
