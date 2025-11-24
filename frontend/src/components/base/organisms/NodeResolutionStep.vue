<template>
  <div class="node-resolution-step">
    <!-- Section Header -->
    <div class="step-header">
      <div class="step-info">
        <h3 class="step-title">Resolve Missing Nodes</h3>
        <p class="step-description">
          Browse unresolved nodes and choose how to handle each one.
          Unaddressed items will be skipped.
        </p>
      </div>
      <span class="stat-badge">{{ resolvedCount }}/{{ nodes.length }} resolved</span>
    </div>

    <!-- Item Navigator -->
    <ItemNavigator
      v-if="currentNode"
      :item-name="currentNode.node_type"
      :status="currentNodeStatus"
      :status-label-override="currentNodeStatusLabel"
      :current-index="currentIndex"
      :total-items="nodes.length"
      @prev="goToItem(currentIndex - 1)"
      @next="goToItem(currentIndex + 1)"
    />

    <!-- Current Node Card -->
    <div v-if="currentNode" class="step-body">
      <NodeResolutionItem
        :node-type="currentNode.node_type"
        :has-multiple-options="!!currentNode.options?.length"
        :options="currentNode.options"
        :choice="nodeChoices?.get(currentNode.node_type)"
        @mark-optional="handleMarkOptional"
        @skip="handleSkip"
        @manual-entry="handleManualEntry"
        @search="handleSearch"
        @option-selected="handleOptionSelected"
        @clear-choice="handleClearChoice"
      />
    </div>

    <!-- Empty state if no nodes -->
    <div v-else class="empty-state">
      <p>No nodes need resolution.</p>
    </div>

    <!-- Search Modal -->
    <Teleport to="body">
      <div v-if="showSearch" class="node-resolution-modal-overlay" @click.self="closeSearch">
        <div class="node-search-modal">
          <div class="node-modal-header">
            <h4>Search Node Packages</h4>
            <button class="node-modal-close-btn" @click="closeSearch">✕</button>
          </div>
          <div class="node-modal-body">
            <BaseInput
              v-model="searchQuery"
              placeholder="Search by node type, package name..."
              @input="handleSearchInput"
            />
            <div v-if="searchResults.length > 0" class="node-search-results">
              <div
                v-for="result in searchResults"
                :key="result.package_id"
                class="node-search-result-item"
                @click="selectSearchResult(result)"
              >
                <div class="node-result-header">
                  <code class="node-result-package-id">{{ result.package_id }}</code>
                  <ConfidenceBadge v-if="result.match_confidence" :confidence="result.match_confidence" size="sm" />
                </div>
                <div v-if="result.description" class="node-result-description">{{ result.description }}</div>
              </div>
            </div>
            <div v-else-if="searchQuery && !isSearching" class="node-no-results">
              No packages found matching "{{ searchQuery }}"
            </div>
            <div v-if="isSearching" class="node-searching">Searching...</div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Manual Entry Modal -->
    <Teleport to="body">
      <div v-if="showManualEntry" class="node-resolution-modal-overlay" @click.self="closeManualEntry">
        <div class="node-manual-entry-modal">
          <div class="node-modal-header">
            <h4>Enter Package Manually</h4>
            <button class="node-modal-close-btn" @click="closeManualEntry">✕</button>
          </div>
          <div class="node-modal-body">
            <BaseInput
              v-model="manualPackageInput"
              label="Package ID or GitHub URL"
              placeholder="e.g., comfyui-my-package"
            />
            <div class="node-modal-actions">
              <BaseButton variant="secondary" @click="closeManualEntry">Cancel</BaseButton>
              <BaseButton
                variant="primary"
                :disabled="!manualPackageInput.trim()"
                @click="submitManualEntry"
              >
                Add Package
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import NodeResolutionItem from '../molecules/NodeResolutionItem.vue'
import ItemNavigator from '../molecules/ItemNavigator.vue'
import type { ResolutionStatus } from '../molecules/ItemNavigator.vue'
import ConfidenceBadge from '../atoms/ConfidenceBadge.vue'
import BaseButton from '../BaseButton.vue'
import BaseInput from '../BaseInput.vue'
import type { NodeSearchResult, NodeChoice } from '@/types/comfygit'

interface NodeOption {
  package_id: string
  title?: string
  match_confidence: number
  match_type: string
  is_installed: boolean
}

interface NodeToResolve {
  node_type: string
  reason?: string
  is_unresolved?: boolean
  options?: NodeOption[]
}

const props = defineProps<{
  nodes: NodeToResolve[]
  nodeChoices: Map<string, NodeChoice>
}>()

const emit = defineEmits<{
  (e: 'mark-optional', nodeType: string): void
  (e: 'skip', nodeType: string): void
  (e: 'option-selected', nodeType: string, index: number): void
  (e: 'manual-entry', nodeType: string, packageId: string): void
  (e: 'clear-choice', nodeType: string): void
}>()

// Local state
const currentIndex = ref(0)
const showSearch = ref(false)
const showManualEntry = ref(false)
const searchQuery = ref('')
const manualPackageInput = ref('')
const searchResults = ref<NodeSearchResult[]>([])
const isSearching = ref(false)

// Computed
const currentNode = computed(() => props.nodes[currentIndex.value])

const resolvedCount = computed(() => {
  return props.nodes.filter(n => props.nodeChoices.has(n.node_type)).length
})

// Compute status for ItemNavigator
const currentNodeStatus = computed((): ResolutionStatus => {
  if (!currentNode.value) return 'not-found'

  const choice = props.nodeChoices.get(currentNode.value.node_type)
  if (choice) {
    switch (choice.action) {
      case 'install': return 'install'
      case 'optional': return 'optional'
      case 'skip': return 'skip'
    }
  }

  // No choice yet - show current state
  if (currentNode.value.options?.length) {
    return 'ambiguous'
  }
  return 'not-found'
})

const currentNodeStatusLabel = computed((): string | undefined => {
  if (!currentNode.value) return undefined

  const choice = props.nodeChoices.get(currentNode.value.node_type)
  if (choice) {
    switch (choice.action) {
      case 'install': return choice.package_id ? `→ ${choice.package_id}` : 'Installing'
      case 'optional': return 'Optional'
      case 'skip': return 'Skipped'
    }
  }

  // No choice yet
  if (currentNode.value.options?.length) {
    return `${currentNode.value.options.length} matches`
  }
  return 'Not Found'
})

// Item navigation (within section)
function goToItem(index: number) {
  if (index >= 0 && index < props.nodes.length) {
    currentIndex.value = index
  }
}

// Handlers - no auto-advance, user navigates manually
function handleMarkOptional() {
  if (!currentNode.value) return
  emit('mark-optional', currentNode.value.node_type)
}

function handleSkip() {
  if (!currentNode.value) return
  emit('skip', currentNode.value.node_type)
}

function handleOptionSelected(index: number) {
  if (!currentNode.value) return
  emit('option-selected', currentNode.value.node_type, index)
}

function handleClearChoice() {
  if (!currentNode.value) return
  emit('clear-choice', currentNode.value.node_type)
}

function handleSearch() {
  if (!currentNode.value) return
  searchQuery.value = currentNode.value.node_type
  showSearch.value = true
}

function handleManualEntry() {
  manualPackageInput.value = ''
  showManualEntry.value = true
}

function closeSearch() {
  showSearch.value = false
  searchQuery.value = ''
  searchResults.value = []
}

function closeManualEntry() {
  showManualEntry.value = false
  manualPackageInput.value = ''
}

function handleSearchInput() {
  // TODO: Connect to actual search API via composable
  isSearching.value = true
  setTimeout(() => {
    isSearching.value = false
  }, 300)
}

function selectSearchResult(result: NodeSearchResult) {
  if (!currentNode.value) return
  emit('manual-entry', currentNode.value.node_type, result.package_id)
  closeSearch()
}

function submitManualEntry() {
  if (!currentNode.value || !manualPackageInput.value.trim()) return
  emit('manual-entry', currentNode.value.node_type, manualPackageInput.value.trim())
  closeManualEntry()
}
</script>

<style scoped>
.node-resolution-step {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  min-height: 400px;
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--cg-space-3);
  padding-bottom: var(--cg-space-2);
  border-bottom: 1px solid var(--cg-color-border);
}

.step-info {
  flex: 1;
}

.step-title {
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
  margin: 0;
}

.step-description {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  margin: 2px 0 0 0;
}

.stat-badge {
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  padding: 4px 8px;
  border-radius: var(--cg-radius-sm);
  background: var(--cg-color-bg-tertiary);
  color: var(--cg-color-text-secondary);
  border: 1px solid var(--cg-color-border-subtle);
  white-space: nowrap;
}

.step-body {
  flex: 1;
  overflow-y: auto;
}

.empty-state {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cg-color-text-muted);
}
</style>

<!-- Unscoped styles for Teleported modal content -->
<style>
.node-resolution-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10010;
}

.node-search-modal,
.node-manual-entry-modal {
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  background: var(--cg-color-bg-primary, #1a1a2e);
  border: 1px solid var(--cg-color-border, #333);
  border-radius: var(--cg-radius-lg, 8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.node-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--cg-color-border, #333);
  background: var(--cg-color-bg-secondary, #252542);
}

.node-modal-header h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--cg-color-text-primary, #fff);
}

.node-modal-close-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--cg-color-text-muted, #888);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.node-modal-close-btn:hover {
  color: var(--cg-color-text-primary, #fff);
  background: var(--cg-color-bg-hover, #333);
}

.node-modal-body {
  padding: 16px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.node-modal-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
}

.node-search-results {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.node-search-result-item {
  padding: 8px 12px;
  border: 1px solid var(--cg-color-border-subtle, #444);
  border-radius: 6px;
  background: var(--cg-color-bg-secondary, #252542);
  cursor: pointer;
  transition: all 0.15s ease;
}

.node-search-result-item:hover {
  border-color: var(--cg-color-accent, #7c3aed);
  background: var(--cg-color-bg-hover, #333);
}

.node-result-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.node-result-package-id {
  font-family: var(--cg-font-mono, monospace);
  font-weight: 600;
  font-size: 13px;
  color: var(--cg-color-accent, #7c3aed);
}

.node-result-description {
  font-size: 12px;
  color: var(--cg-color-text-muted, #888);
}

.node-no-results,
.node-searching {
  padding: 16px;
  text-align: center;
  color: var(--cg-color-text-muted, #888);
  font-size: 13px;
}
</style>
