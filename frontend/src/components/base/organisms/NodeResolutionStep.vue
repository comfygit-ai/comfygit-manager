<template>
  <div class="node-resolution-step">
    <!-- Auto-resolved packages section (shown first if exists) -->
    <div v-if="autoResolvedPackages.length > 0" class="auto-resolved-section">
      <div class="section-header">
        <div class="section-info">
          <h4 class="section-title">Packages to Install</h4>
          <p class="section-description">
            These packages were automatically resolved. You can skip any if needed.
          </p>
        </div>
        <span class="stat-badge">{{ packagesToInstallCount }}/{{ autoResolvedPackages.length }} to install</span>
      </div>

      <div class="resolved-packages-list">
        <div
          v-for="pkg in autoResolvedPackages"
          :key="pkg.package_id"
          class="resolved-package-item"
        >
          <div class="package-info">
            <code class="package-id">{{ pkg.package_id }}</code>
            <span class="node-count">{{ pkg.node_types_count }} node type{{ pkg.node_types_count > 1 ? 's' : '' }}</span>
          </div>
          <div class="package-actions">
            <span v-if="!isPackageSkipped(pkg.package_id)" class="status-badge install">
              WILL INSTALL
            </span>
            <span v-else class="status-badge skip">
              SKIPPED
            </span>
            <button
              class="toggle-skip-btn"
              @click="togglePackageSkip(pkg.package_id)"
            >
              {{ isPackageSkipped(pkg.package_id) ? 'Include' : 'Skip' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider between sections -->
    <div v-if="autoResolvedPackages.length > 0 && nodes.length > 0" class="section-divider"></div>

    <!-- Unresolved/ambiguous nodes section -->
    <template v-if="nodes.length > 0">
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
          :status="currentNodeStatus"
          :status-label="currentNodeStatusLabel"
          :search-results="currentNodeSearchResults"
          :is-searching="isCurrentNodeSearching"
          @mark-optional="handleMarkOptional"
          @skip="handleSkip"
          @manual-entry="handleManualEntry"
          @search="handleSearch"
          @option-selected="handleOptionSelected"
          @clear-choice="handleClearChoice"
          @search-result-selected="handleSearchResultSelected"
        />
      </div>
    </template>

    <!-- Empty state if no nodes AND no packages -->
    <div v-if="nodes.length === 0 && autoResolvedPackages.length === 0" class="empty-state">
      <p>No nodes need resolution.</p>
    </div>

    <!-- Search Modal -->
    <Teleport to="body">
      <div
        v-if="showSearch"
        class="node-resolution-modal-overlay"
        @mousedown.self="overlayMouseDown = true"
        @mouseup.self="handleOverlayClick"
      >
        <div class="node-search-modal" @mousedown="overlayMouseDown = false">
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
            <div class="node-search-results-container">
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
              <div v-else-if="isSearching" class="node-empty-state">Searching...</div>
              <div v-else-if="searchQuery" class="node-empty-state">No packages found matching "{{ searchQuery }}"</div>
              <div v-else class="node-empty-state">Enter a search term</div>
            </div>
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
import { ref, computed, watch, nextTick } from 'vue'
import NodeResolutionItem from '../molecules/NodeResolutionItem.vue'
import type { ResolutionStatus } from '../molecules/NodeResolutionItem.vue'
import ItemNavigator from '../molecules/ItemNavigator.vue'
import ConfidenceBadge from '../atoms/ConfidenceBadge.vue'
import BaseButton from '../BaseButton.vue'
import BaseInput from '../BaseInput.vue'
import type { NodeSearchResult, NodeChoice } from '@/types/comfygit'
import { useWorkflowResolution } from '@/composables/useWorkflowResolution'

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

interface AutoResolvedPackage {
  package_id: string
  title: string
  node_types_count: number
}

const props = defineProps<{
  nodes: NodeToResolve[]
  nodeChoices: Map<string, NodeChoice>
  autoResolvedPackages: AutoResolvedPackage[]
  skippedPackages: Set<string>
}>()

const emit = defineEmits<{
  (e: 'mark-optional', nodeType: string): void
  (e: 'skip', nodeType: string): void
  (e: 'option-selected', nodeType: string, index: number): void
  (e: 'manual-entry', nodeType: string, packageId: string): void
  (e: 'clear-choice', nodeType: string): void
  (e: 'package-skip', packageId: string): void
}>()

const { searchNodes } = useWorkflowResolution()

// Local state
const currentIndex = ref(0)
const showSearch = ref(false)
const showManualEntry = ref(false)
const searchQuery = ref('')
const manualPackageInput = ref('')
const searchResults = ref<NodeSearchResult[]>([])
const isSearching = ref(false)

// Cache of inline search results per node type
const inlineSearchCache = ref<Map<string, NodeSearchResult[]>>(new Map())
const inlineSearchLoading = ref<Set<string>>(new Set())

// Track if mousedown started on overlay (for proper click-outside detection)
const overlayMouseDown = ref(false)

function handleOverlayClick() {
  // Only close if mousedown also happened on overlay (not inside modal)
  if (overlayMouseDown.value) {
    closeSearch()
  }
  overlayMouseDown.value = false
}

// Computed
const currentNode = computed(() => props.nodes[currentIndex.value])

const resolvedCount = computed(() => {
  return props.nodes.filter(n => props.nodeChoices.has(n.node_type)).length
})

// Get cached search results for current node
const currentNodeSearchResults = computed(() => {
  if (!currentNode.value) return []
  return inlineSearchCache.value.get(currentNode.value.node_type) || []
})

const isCurrentNodeSearching = computed(() => {
  if (!currentNode.value) return false
  return inlineSearchLoading.value.has(currentNode.value.node_type)
})

// Auto-search for unresolved nodes (no options) when they become current
watch(currentNode, async (node) => {
  if (!node) return
  // Only auto-search for unresolved nodes (no options array)
  if (node.options?.length) return
  // Skip if already searched or currently searching
  if (inlineSearchCache.value.has(node.node_type)) return
  if (inlineSearchLoading.value.has(node.node_type)) return
  // Skip if user already made a choice
  if (props.nodeChoices.has(node.node_type)) return

  await runInlineSearch(node.node_type)
}, { immediate: true })

async function runInlineSearch(nodeType: string) {
  inlineSearchLoading.value.add(nodeType)
  try {
    const results = await searchNodes(nodeType, 5)
    inlineSearchCache.value.set(nodeType, results)
  } catch {
    // Silently fail - user can still manually search
    inlineSearchCache.value.set(nodeType, [])
  } finally {
    inlineSearchLoading.value.delete(nodeType)
  }
}

// Auto-resolved packages helpers
const packagesToInstallCount = computed(() => {
  return props.autoResolvedPackages.filter(p => !props.skippedPackages.has(p.package_id)).length
})

function isPackageSkipped(packageId: string): boolean {
  return props.skippedPackages.has(packageId)
}

function togglePackageSkip(packageId: string) {
  emit('package-skip', packageId)
}

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

// Auto-advance helper: find next unresolved item and navigate to it
function advanceToNextUnresolved() {
  // Find next item after current that doesn't have a choice
  for (let i = currentIndex.value + 1; i < props.nodes.length; i++) {
    const node = props.nodes[i]
    if (!props.nodeChoices?.has(node.node_type)) {
      goToItem(i)
      return
    }
  }
  // No more unresolved items - stay on current (user can see completion status)
}

// Handlers with auto-advance after making a choice
function handleMarkOptional() {
  if (!currentNode.value) return
  emit('mark-optional', currentNode.value.node_type)
  nextTick(() => advanceToNextUnresolved())
}

function handleSkip() {
  if (!currentNode.value) return
  emit('skip', currentNode.value.node_type)
  nextTick(() => advanceToNextUnresolved())
}

function handleOptionSelected(index: number) {
  if (!currentNode.value) return
  emit('option-selected', currentNode.value.node_type, index)
  nextTick(() => advanceToNextUnresolved())
}

function handleClearChoice() {
  if (!currentNode.value) return
  emit('clear-choice', currentNode.value.node_type)
}

function handleSearch() {
  if (!currentNode.value) return
  searchQuery.value = currentNode.value.node_type
  searchResults.value = currentNodeSearchResults.value // Pre-populate with cached results
  showSearch.value = true
  // Auto-search on modal open
  doModalSearch(searchQuery.value)
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

// Debounced search for modal
let searchTimeout: ReturnType<typeof setTimeout> | null = null
function handleSearchInput() {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    doModalSearch(searchQuery.value)
  }, 300)
}

async function doModalSearch(query: string) {
  if (!query.trim()) {
    searchResults.value = []
    return
  }
  isSearching.value = true
  try {
    searchResults.value = await searchNodes(query, 10)
  } catch {
    searchResults.value = []
  } finally {
    isSearching.value = false
  }
}

function selectSearchResult(result: NodeSearchResult) {
  if (!currentNode.value) return
  emit('manual-entry', currentNode.value.node_type, result.package_id)
  closeSearch()
  nextTick(() => advanceToNextUnresolved())
}

// Handler for inline search result selection
function handleSearchResultSelected(result: NodeSearchResult) {
  if (!currentNode.value) return
  emit('manual-entry', currentNode.value.node_type, result.package_id)
  nextTick(() => advanceToNextUnresolved())
}

function submitManualEntry() {
  if (!currentNode.value || !manualPackageInput.value.trim()) return
  emit('manual-entry', currentNode.value.node_type, manualPackageInput.value.trim())
  closeManualEntry()
  nextTick(() => advanceToNextUnresolved())
}
</script>

<style scoped>
.node-resolution-step {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  min-height: 400px;
}

/* Auto-resolved packages section */
.auto-resolved-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--cg-space-3);
}

.section-info {
  flex: 1;
}

.section-title {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
  margin: 0;
}

.section-description {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  margin: 2px 0 0 0;
}

.resolved-packages-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  max-height: 200px;
  overflow-y: auto;
}

.resolved-package-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
  border-left: 3px solid var(--cg-color-success);
}

.package-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
}

.package-id {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-accent);
}

.node-count {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.package-actions {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.status-badge {
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  padding: 2px 6px;
  border-radius: var(--cg-radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-badge.install {
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.status-badge.skip {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-text-muted);
}

.toggle-skip-btn {
  font-size: var(--cg-font-size-xs);
  padding: var(--cg-space-1) var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-sm);
  color: var(--cg-color-text-secondary);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.toggle-skip-btn:hover {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-text-primary);
}

.section-divider {
  height: 1px;
  background: var(--cg-color-border);
  margin: var(--cg-space-2) 0;
}

/* Step header for unresolved nodes */
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

.node-search-modal {
  width: 90%;
  max-width: 500px;
  height: 75vh;
  background: var(--cg-color-bg-primary, #1a1a2e);
  border: 1px solid var(--cg-color-border, #333);
  border-radius: var(--cg-radius-lg, 8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.node-manual-entry-modal {
  width: 90%;
  max-width: 500px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
  overflow: hidden;
}

.node-modal-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
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

.node-search-results-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.node-search-results {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
}

.node-empty-state {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cg-color-text-muted, #888);
  font-size: 13px;
}
</style>
