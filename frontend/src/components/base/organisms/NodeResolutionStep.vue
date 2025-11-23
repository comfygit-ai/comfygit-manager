<template>
  <div class="node-resolution-step">
    <div class="step-header">
      <h3 class="step-title">Resolve Missing Nodes</h3>
      <div class="step-progress">
        <span class="progress-text">{{ currentIndex + 1 }} of {{ totalNodes }}</span>
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: `${progressPercentage}%` }"
          ></div>
        </div>
      </div>
    </div>

    <div v-if="currentNode" class="step-body">
      <NodeResolutionItem
        :node-type="currentNode.node_type"
        :package-id="currentNode.package_id"
        :confidence="currentNode.confidence"
        :match-type="currentNode.match_type"
        :description="currentNode.description"
        :repository="currentNode.repository"
        :source="currentNode.source"
        :is-installed="currentNode.is_installed"
        :is-optional="currentNode.is_optional"
        :is-selected="true"
        :has-multiple-options="currentNode.has_multiple_options"
        :options="currentNode.options"
        :selected-option-index="currentNode.selected_option_index"
        @mark-optional="emit('mark-optional', currentNode.node_type)"
        @unmark-optional="emit('unmark-optional', currentNode.node_type)"
        @skip="emit('skip', currentNode.node_type)"
        @refine-search="emit('refine-search', currentNode.node_type)"
        @manual-entry="emit('manual-entry', currentNode.node_type)"
        @search="emit('search', currentNode.node_type)"
        @option-selected="(index) => emit('option-selected', currentNode.node_type, index)"
      />
    </div>

    <div class="step-footer">
      <button
        class="nav-btn prev"
        :disabled="!canGoPrevious"
        @click="emit('previous')"
      >
        ← Previous
      </button>
      <button
        v-if="!isLastNode"
        class="nav-btn next primary"
        :disabled="!canContinue"
        @click="emit('next')"
      >
        Continue →
      </button>
      <button
        v-else
        class="nav-btn next primary"
        :disabled="!canContinue"
        @click="emit('complete')"
      >
        Continue to Models →
      </button>
    </div>

    <!-- Search Panel (shown when refine-search or search is triggered) -->
    <div v-if="showSearch" class="search-panel">
      <div class="search-panel-header">
        <h4>Search for Node Package</h4>
        <button class="close-btn" @click="emit('close-search')">✕</button>
      </div>
      <div class="search-panel-body">
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="Search by node type, package name, or description..."
          @input="handleSearchInput"
        />
        <div v-if="searchResults.length > 0" class="search-results">
          <div
            v-for="result in searchResults"
            :key="result.package_id"
            class="search-result-item"
            @click="emit('search-result-selected', result)"
          >
            <div class="result-header">
              <span class="result-package-id">{{ result.package_id }}</span>
              <ConfidenceBadge :confidence="result.match_confidence" size="sm" />
            </div>
            <div v-if="result.description" class="result-description">
              {{ result.description }}
            </div>
            <div class="result-meta">
              <span v-if="result.repository" class="repository">{{ result.repository }}</span>
              <span v-if="result.is_installed" class="installed-badge">Installed</span>
            </div>
          </div>
        </div>
        <div v-else-if="searchQuery && !isSearching" class="no-results">
          <span class="warning-icon">⚠</span>
          <span>No packages found matching "{{ searchQuery }}"</span>
        </div>
        <div v-if="isSearching" class="searching">
          <span>Searching...</span>
        </div>
      </div>
    </div>

    <!-- Manual Entry Panel -->
    <div v-if="showManualEntry" class="manual-entry-panel">
      <div class="manual-entry-header">
        <h4>Enter Package Manually</h4>
        <button class="close-btn" @click="emit('close-manual-entry')">✕</button>
      </div>
      <div class="manual-entry-body">
        <label class="form-label">
          Package ID or GitHub URL
          <input
            v-model="manualPackageInput"
            type="text"
            class="manual-input"
            placeholder="e.g., comfyui-my-package or https://github.com/user/repo"
          />
        </label>
        <div class="manual-entry-actions">
          <button class="btn secondary" @click="emit('close-manual-entry')">
            Cancel
          </button>
          <button
            class="btn primary"
            :disabled="!manualPackageInput.trim()"
            @click="handleManualSubmit"
          >
            Add Package
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import NodeResolutionItem from '../molecules/NodeResolutionItem.vue'
import ConfidenceBadge from '../atoms/ConfidenceBadge.vue'
import type { NodeSearchResult } from '@/types/comfygit'

interface NodeToResolve {
  node_type: string
  package_id?: string
  confidence?: number
  match_type?: string
  description?: string
  repository?: string
  source?: string
  is_installed?: boolean
  is_optional?: boolean
  has_multiple_options?: boolean
  options?: any[]
  selected_option_index?: number
}

const props = defineProps<{
  nodes: NodeToResolve[]
  currentIndex: number
  nodeChoices?: Map<string, any>
  showSearch?: boolean
  showManualEntry?: boolean
  searchResults?: NodeSearchResult[]
  isSearching?: boolean
}>()

const emit = defineEmits<{
  (e: 'previous'): void
  (e: 'next'): void
  (e: 'complete'): void
  (e: 'mark-optional', nodeType: string): void
  (e: 'unmark-optional', nodeType: string): void
  (e: 'skip', nodeType: string): void
  (e: 'refine-search', nodeType: string): void
  (e: 'manual-entry', nodeType: string): void
  (e: 'search', nodeType: string): void
  (e: 'option-selected', nodeType: string, index: number): void
  (e: 'close-search'): void
  (e: 'close-manual-entry'): void
  (e: 'search-input', query: string): void
  (e: 'search-result-selected', result: NodeSearchResult): void
  (e: 'manual-submit', packageId: string): void
}>()

const searchQuery = ref('')
const manualPackageInput = ref('')

const currentNode = computed(() => props.nodes[props.currentIndex])
const totalNodes = computed(() => props.nodes.length)
const isLastNode = computed(() => props.currentIndex === totalNodes.value - 1)
const progressPercentage = computed(() =>
  totalNodes.value > 0 ? ((props.currentIndex + 1) / totalNodes.value) * 100 : 0
)

const canGoPrevious = computed(() => props.currentIndex > 0)
const canContinue = computed(() => {
  if (!currentNode.value) {
    console.log('[NodeResolutionStep] canContinue: no current node')
    return false
  }

  // Check if user has made a choice for this node
  const hasChoice = props.nodeChoices && props.nodeChoices.has(currentNode.value.node_type)

  console.log('[NodeResolutionStep] canContinue check:', {
    nodeType: currentNode.value.node_type,
    hasChoice,
    package_id: currentNode.value.package_id,
    is_optional: currentNode.value.is_optional,
    selected_option_index: currentNode.value.selected_option_index,
    nodeChoices: props.nodeChoices ? Array.from(props.nodeChoices.entries()) : 'none'
  })

  // Can continue if node has a selection, is optional, has a choice made, or has ambiguous option selected
  const result = !!(
    currentNode.value.package_id ||
    currentNode.value.is_optional ||
    currentNode.value.selected_option_index !== undefined ||
    hasChoice
  )

  console.log('[NodeResolutionStep] canContinue result:', result)
  return result
})

function handleSearchInput() {
  emit('search-input', searchQuery.value)
}

function handleManualSubmit() {
  if (manualPackageInput.value.trim()) {
    emit('manual-submit', manualPackageInput.value.trim())
    manualPackageInput.value = ''
  }
}
</script>

<style scoped>
.node-resolution-step {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  height: 100%;
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border);
}

.step-title {
  font-size: var(--cg-font-size-lg);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text);
  margin: 0;
}

.step-progress {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--cg-spacing-xs);
}

.progress-text {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-muted);
}

.progress-bar {
  width: 200px;
  height: 6px;
  background: var(--cg-color-bg-tertiary);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--cg-color-primary);
  transition: width 0.3s;
}

.step-body {
  flex: 1;
  overflow-y: auto;
}

.step-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border);
}

.nav-btn {
  padding: var(--cg-spacing-sm) var(--cg-space-3);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg);
  color: var(--cg-color-text);
  border-radius: var(--cg-border-radius);
  cursor: pointer;
  transition: all 0.2s;
}

.nav-btn:hover:not(:disabled) {
  background: var(--cg-color-bg-tertiary);
  border-color: var(--cg-color-primary);
}

.nav-btn.primary {
  background: var(--cg-color-primary);
  color: white;
  border-color: var(--cg-color-primary);
}

.nav-btn.primary:hover:not(:disabled) {
  background: var(--cg-color-primary-hover);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.search-panel,
.manual-entry-panel {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  background: var(--cg-color-bg);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.search-panel-header,
.manual-entry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border);
}

.search-panel-header h4,
.manual-entry-header h4 {
  margin: 0;
  font-size: var(--cg-font-size-md);
  font-weight: var(--cg-font-weight-semibold);
}

.close-btn {
  background: none;
  border: none;
  font-size: var(--cg-font-size-lg);
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: var(--cg-spacing-xs);
}

.close-btn:hover {
  color: var(--cg-color-text);
}

.search-panel-body,
.manual-entry-body {
  padding: var(--cg-space-3);
  overflow-y: auto;
  flex: 1;
}

.search-input,
.manual-input {
  width: 100%;
  padding: var(--cg-spacing-sm);
  font-size: var(--cg-font-size-sm);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-border-radius-sm);
  background: var(--cg-color-bg-secondary);
  color: var(--cg-color-text);
}

.search-input:focus,
.manual-input:focus {
  outline: none;
  border-color: var(--cg-color-primary);
}

.search-results {
  margin-top: var(--cg-space-3);
  display: flex;
  flex-direction: column;
  gap: var(--cg-spacing-sm);
}

.search-result-item {
  padding: var(--cg-space-2);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-border-radius-sm);
  background: var(--cg-color-bg-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.search-result-item:hover {
  border-color: var(--cg-color-primary);
  background: var(--cg-color-bg-tertiary);
}

.result-header {
  display: flex;
  align-items: center;
  gap: var(--cg-spacing-sm);
  margin-bottom: var(--cg-spacing-xs);
}

.result-package-id {
  font-weight: var(--cg-font-weight-semibold);
  font-size: var(--cg-font-size-sm);
}

.result-description {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  margin-bottom: var(--cg-spacing-xs);
}

.result-meta {
  display: flex;
  gap: var(--cg-spacing-sm);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.no-results,
.searching {
  padding: var(--cg-space-3);
  text-align: center;
  color: var(--cg-color-text-muted);
}

.warning-icon {
  margin-right: var(--cg-spacing-xs);
}

.form-label {
  display: flex;
  flex-direction: column;
  gap: var(--cg-spacing-xs);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text);
  margin-bottom: var(--cg-space-3);
}

.manual-entry-actions {
  display: flex;
  gap: var(--cg-spacing-sm);
  justify-content: flex-end;
}

.btn {
  padding: var(--cg-spacing-sm) var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-border-radius-sm);
  cursor: pointer;
  transition: all 0.2s;
}

.btn.secondary {
  background: var(--cg-color-bg-secondary);
  color: var(--cg-color-text);
}

.btn.secondary:hover {
  background: var(--cg-color-bg-tertiary);
}

.btn.primary {
  background: var(--cg-color-primary);
  color: white;
  border-color: var(--cg-color-primary);
}

.btn.primary:hover:not(:disabled) {
  background: var(--cg-color-primary-hover);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
