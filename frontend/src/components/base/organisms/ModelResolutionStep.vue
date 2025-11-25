<template>
  <div class="model-resolution-step">
    <!-- Section Header -->
    <div class="step-header">
      <div class="step-info">
        <h3 class="step-title">{{ hasDownloadIntents ? 'Review Model Downloads' : 'Resolve Missing Models' }}</h3>
        <p class="step-description">
          {{ hasDownloadIntents
            ? 'Review pending downloads. Mark as optional or skip to cancel.'
            : 'Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped.'
          }}
        </p>
      </div>
      <span class="stat-badge">{{ resolvedCount }}/{{ models.length }} resolved</span>
    </div>

    <!-- Item Navigator -->
    <ItemNavigator
      v-if="currentModel"
      :item-name="currentModel.filename"
      :current-index="currentIndex"
      :total-items="models.length"
      @prev="goToItem(currentIndex - 1)"
      @next="goToItem(currentIndex + 1)"
    />

    <!-- Current Model Card -->
    <div v-if="currentModel" class="step-body">
      <ModelResolutionItem
        :filename="currentModel.filename"
        :node-type="currentModel.reference?.node_type || 'Unknown'"
        :has-multiple-options="!!currentModel.options?.length"
        :options="currentModel.options"
        :choice="modelChoices?.get(currentModel.filename)"
        :status="currentModelStatus"
        :status-label="currentModelStatusLabel"
        @mark-optional="handleMarkOptional"
        @skip="handleSkip"
        @download-url="handleDownloadUrl"
        @search="handleSearch"
        @option-selected="handleOptionSelected"
        @clear-choice="handleClearChoice"
      />
    </div>

    <!-- Empty state if no models -->
    <div v-else class="empty-state">
      <p>No models need resolution.</p>
    </div>

    <!-- Search Modal -->
    <Teleport to="body">
      <div v-if="showSearch" class="model-resolution-modal-overlay" @click.self="closeSearch">
        <div class="model-search-modal">
          <div class="model-modal-header">
            <h4>Search Workspace Models</h4>
            <button class="model-modal-close-btn" @click="closeSearch">✕</button>
          </div>
          <div class="model-modal-body">
            <BaseInput
              v-model="searchQuery"
              placeholder="Search by filename, category..."
              @input="handleSearchInput"
            />
            <div v-if="searchResults.length > 0" class="model-search-results">
              <div
                v-for="result in searchResults"
                :key="result.hash"
                class="model-search-result-item"
                @click="selectSearchResult(result)"
              >
                <div class="model-result-header">
                  <code class="model-result-filename">{{ result.filename }}</code>
                </div>
                <div class="model-result-meta">
                  <span class="model-result-category">{{ result.category }}</span>
                  <span class="model-result-size">{{ formatSize(result.size) }}</span>
                </div>
                <div v-if="result.relative_path" class="model-result-path">{{ result.relative_path }}</div>
              </div>
            </div>
            <div v-else-if="searchQuery && !isSearching" class="model-no-results">
              No models found matching "{{ searchQuery }}"
            </div>
            <div v-if="isSearching" class="model-searching">Searching...</div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Download URL Modal -->
    <Teleport to="body">
      <div v-if="showDownloadUrl" class="model-resolution-modal-overlay" @click.self="closeDownloadUrl">
        <div class="model-download-url-modal">
          <div class="model-modal-header">
            <h4>Enter Download URL</h4>
            <button class="model-modal-close-btn" @click="closeDownloadUrl">✕</button>
          </div>
          <div class="model-modal-body">
            <div class="model-input-group">
              <label class="model-input-label">Download URL</label>
              <BaseInput
                v-model="downloadUrl"
                placeholder="https://civitai.com/api/download/..."
              />
            </div>
            <div class="model-input-group">
              <label class="model-input-label">Host Path</label>
              <BaseInput
                v-model="downloadPath"
                :placeholder="suggestedPath || 'e.g. loras/model.safetensors'"
              />
            </div>
            <div class="model-modal-actions">
              <BaseButton variant="secondary" @click="closeDownloadUrl">Cancel</BaseButton>
              <BaseButton
                variant="primary"
                :disabled="!downloadUrl.trim() || !downloadPath.trim()"
                @click="submitDownloadUrl"
              >
                Queue Download
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
import ModelResolutionItem from '../molecules/ModelResolutionItem.vue'
import type { ResolutionStatus } from '../molecules/ModelResolutionItem.vue'
import ItemNavigator from '../molecules/ItemNavigator.vue'
import BaseButton from '../BaseButton.vue'
import BaseInput from '../BaseInput.vue'
import type { ModelSearchResult, ModelChoice } from '@/types/comfygit'

// Node type to model directory mapping (from comfyui_models.py)
const NODE_DIRECTORY_MAPPINGS: Record<string, string[]> = {
  CheckpointLoaderSimple: ['checkpoints'],
  CheckpointLoader: ['checkpoints'],
  unCLIPCheckpointLoader: ['checkpoints'],
  ImageOnlyCheckpointLoader: ['checkpoints'],
  VAELoader: ['vae'],
  LoraLoader: ['loras'],
  LoraLoaderModelOnly: ['loras'],
  CLIPLoader: ['clip'],
  DualCLIPLoader: ['clip'],
  TripleCLIPLoader: ['clip'],
  QuadrupleCLIPLoader: ['clip'],
  UNETLoader: ['diffusion_models'],
  CLIPVisionLoader: ['clip_vision'],
  ControlNetLoader: ['controlnet'],
  DiffControlNetLoader: ['controlnet'],
  StyleModelLoader: ['style_models'],
  UpscaleModelLoader: ['upscale_models'],
  GLIGENLoader: ['gligen'],
  HypernetworkLoader: ['hypernetworks'],
  PhotoMakerLoader: ['photomaker'],
  DiffusersLoader: ['diffusers'],
}

function getDirectoryForNodeType(nodeType: string | undefined): string | null {
  if (!nodeType) return null
  return NODE_DIRECTORY_MAPPINGS[nodeType]?.[0] || null
}

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

interface ModelToResolve {
  filename: string
  reference?: {
    workflow: string
    node_id: string
    node_type: string
    widget_name: string
    widget_value: string
  }
  reason?: string
  is_unresolved?: boolean
  is_download_intent?: boolean
  resolved_model?: ModelOption['model'] | null
  download_source?: string  // Existing URL for download intents
  target_path?: string      // Existing target path for download intents
  options?: ModelOption[]
}

const props = defineProps<{
  models: ModelToResolve[]
  modelChoices: Map<string, ModelChoice>
}>()

const emit = defineEmits<{
  (e: 'mark-optional', filename: string): void
  (e: 'skip', filename: string): void
  (e: 'option-selected', filename: string, index: number): void
  (e: 'download-url', filename: string, url: string, targetPath?: string): void
  (e: 'clear-choice', filename: string): void
}>()

// Local state
const currentIndex = ref(0)
const showSearch = ref(false)
const showDownloadUrl = ref(false)
const searchQuery = ref('')
const downloadUrl = ref('')
const downloadPath = ref('')
const searchResults = ref<ModelSearchResult[]>([])
const isSearching = ref(false)

// Computed
const currentModel = computed(() => props.models[currentIndex.value])

const hasDownloadIntents = computed(() => {
  return props.models.some(m => m.is_download_intent)
})

const resolvedCount = computed(() => {
  // Count models with choices + download intents (they're already "resolved" with a pending download)
  return props.models.filter(m =>
    props.modelChoices.has(m.filename) || m.is_download_intent
  ).length
})

const suggestedPath = computed(() => {
  if (!currentModel.value) return ''
  const dir = getDirectoryForNodeType(currentModel.value.reference?.node_type)
  if (!dir) return ''  // Unknown node type - user must specify path
  return `${dir}/${currentModel.value.filename}`
})

// Compute status for ItemNavigator
const currentModelStatus = computed((): ResolutionStatus => {
  if (!currentModel.value) return 'not-found'

  const choice = props.modelChoices.get(currentModel.value.filename)
  if (choice) {
    switch (choice.action) {
      case 'select': return 'select'
      case 'download': return 'download'
      case 'optional': return 'optional'
      case 'skip': return 'skip'
      case 'cancel_download': return 'skip'
    }
  }

  // No choice yet - show current state
  if (currentModel.value.is_download_intent) {
    return 'download'
  }
  if (currentModel.value.options?.length) {
    return 'ambiguous'
  }
  return 'not-found'
})

const currentModelStatusLabel = computed((): string | undefined => {
  if (!currentModel.value) return undefined

  const choice = props.modelChoices.get(currentModel.value.filename)
  if (choice) {
    switch (choice.action) {
      case 'select': return choice.selected_model?.filename ? `→ ${choice.selected_model.filename}` : 'Selected'
      case 'download': return 'Download'
      case 'optional': return 'Optional'
      case 'skip': return 'Skipped'
      case 'cancel_download': return 'Cancelled'
    }
  }

  // No choice yet - check if it's a download intent
  if (currentModel.value.is_download_intent) {
    return 'Pending Download'
  }
  if (currentModel.value.options?.length) {
    return `${currentModel.value.options.length} matches`
  }
  return 'Not Found'
})

// Item navigation (within section)
function goToItem(index: number) {
  if (index >= 0 && index < props.models.length) {
    currentIndex.value = index
  }
}

// Handlers - no auto-advance, user navigates manually
function handleMarkOptional() {
  if (!currentModel.value) return
  emit('mark-optional', currentModel.value.filename)
}

function handleSkip() {
  if (!currentModel.value) return
  emit('skip', currentModel.value.filename)
}

function handleOptionSelected(index: number) {
  if (!currentModel.value) return
  emit('option-selected', currentModel.value.filename, index)
}

function handleClearChoice() {
  if (!currentModel.value) return
  emit('clear-choice', currentModel.value.filename)
}

function handleSearch() {
  if (!currentModel.value) return
  searchQuery.value = currentModel.value.filename
  showSearch.value = true
}

function handleDownloadUrl() {
  if (!currentModel.value) return
  // Pre-populate with existing download intent data if available
  downloadUrl.value = currentModel.value.download_source || ''
  downloadPath.value = currentModel.value.target_path || suggestedPath.value
  showDownloadUrl.value = true
}

function closeSearch() {
  showSearch.value = false
  searchQuery.value = ''
  searchResults.value = []
}

function closeDownloadUrl() {
  showDownloadUrl.value = false
  downloadUrl.value = ''
  downloadPath.value = ''
}

function handleSearchInput() {
  // TODO: Connect to actual search API via composable
  isSearching.value = true
  setTimeout(() => {
    isSearching.value = false
  }, 300)
}

function selectSearchResult(result: ModelSearchResult) {
  if (!currentModel.value) return
  // TODO: emit proper selection
  closeSearch()
}

function submitDownloadUrl() {
  if (!currentModel.value || !downloadUrl.value.trim()) return
  emit('download-url', currentModel.value.filename, downloadUrl.value.trim(), downloadPath.value.trim() || undefined)
  closeDownloadUrl()
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
.model-resolution-step {
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
.model-resolution-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10010;
}

.model-search-modal,
.model-download-url-modal {
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

.model-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--cg-color-border, #333);
  background: var(--cg-color-bg-secondary, #252542);
}

.model-modal-header h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--cg-color-text-primary, #fff);
}

.model-modal-close-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--cg-color-text-muted, #888);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.model-modal-close-btn:hover {
  color: var(--cg-color-text-primary, #fff);
  background: var(--cg-color-bg-hover, #333);
}

.model-modal-body {
  padding: 16px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.model-input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.model-input-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--cg-color-text-secondary, #aaa);
}

.model-modal-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
}

.model-search-results {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.model-search-result-item {
  padding: 8px 12px;
  border: 1px solid var(--cg-color-border-subtle, #444);
  border-radius: 6px;
  background: var(--cg-color-bg-secondary, #252542);
  cursor: pointer;
  transition: all 0.15s ease;
}

.model-search-result-item:hover {
  border-color: var(--cg-color-accent, #7c3aed);
  background: var(--cg-color-bg-hover, #333);
}

.model-result-header {
  margin-bottom: 4px;
}

.model-result-filename {
  font-family: var(--cg-font-mono, monospace);
  font-weight: 600;
  font-size: 13px;
  color: var(--cg-color-accent, #7c3aed);
}

.model-result-meta {
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: var(--cg-color-text-muted, #888);
  margin-bottom: 4px;
}

.model-result-category {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.model-result-size {
  font-family: var(--cg-font-mono, monospace);
}

.model-result-path {
  font-size: 12px;
  font-family: var(--cg-font-mono, monospace);
  color: var(--cg-color-text-muted, #888);
}

.model-no-results,
.model-searching {
  padding: 16px;
  text-align: center;
  color: var(--cg-color-text-muted, #888);
  font-size: 13px;
}
</style>
