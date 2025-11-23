<template>
  <div class="model-resolution-step">
    <div class="step-header">
      <h3 class="step-title">Resolve Missing Models</h3>
      <div class="step-progress">
        <span class="progress-text">{{ currentIndex + 1 }} of {{ totalModels }}</span>
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: `${progressPercentage}%` }"
          ></div>
        </div>
      </div>
    </div>

    <div v-if="currentModel" class="step-body">
      <ModelResolutionItem
        :filename="currentModel.reference.widget_value"
        :node-type="currentModel.reference.node_type"
        :category="currentModel.category"
        :size="currentModel.size"
        :hash="currentModel.hash"
        :confidence="currentModel.confidence"
        :match-type="currentModel.match_type"
        :is-optional="currentModel.is_optional"
        :has-multiple-options="!!(currentModel.options && currentModel.options.length > 0)"
        :options="currentModel.options"
        :selected-option-index="currentModel.selected_option_index"
        @mark-optional="emit('mark-optional', currentModel.reference.widget_value)"
        @unmark-optional="emit('unmark-optional', currentModel.reference.widget_value)"
        @skip="emit('skip', currentModel.reference.widget_value)"
        @refine-search="emit('refine-search', currentModel.reference.widget_value)"
        @download-url="emit('download-url', currentModel.reference.widget_value)"
        @search="emit('search', currentModel.reference.widget_value)"
        @option-selected="(index) => emit('option-selected', currentModel.reference.widget_value, index)"
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
        v-if="!isLastModel"
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
        Continue to Review →
      </button>
    </div>

    <!-- Search Panel -->
    <div v-if="showSearch" class="search-panel">
      <div class="search-panel-header">
        <h4>Search for Model</h4>
        <button class="close-btn" @click="emit('close-search')">✕</button>
      </div>
      <div class="search-panel-body">
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="Search by filename, category, or hash..."
          @input="handleSearchInput"
        />
        <div v-if="searchResults && searchResults.length > 0" class="search-results">
          <div
            v-for="result in searchResults"
            :key="result.hash"
            class="search-result-item"
            @click="emit('search-result-selected', result)"
          >
            <div class="result-header">
              <span class="result-filename">{{ result.filename }}</span>
              <ConfidenceBadge :confidence="result.match_confidence" size="sm" />
            </div>
            <div class="result-meta">
              <span class="category">{{ result.category }}</span>
              <span class="separator">•</span>
              <span class="size">{{ formatSize(result.size) }}</span>
            </div>
            <div class="result-path">{{ result.relative_path }}</div>
          </div>
        </div>
        <div v-else-if="searchQuery && !isSearching" class="no-results">
          <span class="warning-icon">⚠</span>
          <span>No models found matching "{{ searchQuery }}"</span>
        </div>
        <div v-if="isSearching" class="searching">
          <span>Searching...</span>
        </div>
      </div>
    </div>

    <!-- Manual Download URL Panel -->
    <div v-if="showManualDownload" class="manual-download-panel">
      <div class="manual-download-header">
        <h4>Enter Download URL</h4>
        <button class="close-btn" @click="emit('close-manual-download')">✕</button>
      </div>
      <div class="manual-download-body">
        <label class="form-label">
          Download URL
          <input
            v-model="downloadUrl"
            type="url"
            class="url-input"
            placeholder="https://example.com/models/flux_dev.safetensors"
          />
        </label>
        <label class="form-label">
          Target Path (relative to models directory)
          <input
            v-model="downloadPath"
            type="text"
            class="path-input"
            placeholder="checkpoints/flux_dev.safetensors"
          />
        </label>
        <div class="manual-download-actions">
          <button class="btn secondary" @click="emit('close-manual-download')">
            Cancel
          </button>
          <button
            class="btn primary"
            :disabled="!downloadUrl.trim() || !downloadPath.trim()"
            @click="handleManualDownloadSubmit"
          >
            Add Download
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ModelResolutionItem from '../molecules/ModelResolutionItem.vue'
import ConfidenceBadge from '../atoms/ConfidenceBadge.vue'
import type { ModelSearchResult } from '@/types/comfygit'

interface ModelToResolve {
  reference: {
    workflow: string
    node_id: string
    node_type: string
    widget_name: string
    widget_value: string
  }
  category?: string
  size?: number
  hash?: string
  confidence?: number
  match_type?: string
  is_optional?: boolean
  has_multiple_options?: boolean
  options?: any[]
  selected_option_index?: number
  reason?: string
}

const props = defineProps<{
  models: ModelToResolve[]
  currentIndex: number
  showSearch?: boolean
  showManualDownload?: boolean
  searchResults?: ModelSearchResult[]
  isSearching?: boolean
}>()

const emit = defineEmits<{
  (e: 'previous'): void
  (e: 'next'): void
  (e: 'complete'): void
  (e: 'mark-optional', filename: string): void
  (e: 'unmark-optional', filename: string): void
  (e: 'skip', filename: string): void
  (e: 'refine-search', filename: string): void
  (e: 'download-url', filename: string): void
  (e: 'search', filename: string): void
  (e: 'option-selected', filename: string, index: number): void
  (e: 'close-search'): void
  (e: 'close-manual-download'): void
  (e: 'search-input', query: string): void
  (e: 'search-result-selected', result: ModelSearchResult): void
  (e: 'manual-download-submit', url: string, path: string): void
}>()

const searchQuery = ref('')
const downloadUrl = ref('')
const downloadPath = ref('')

const currentModel = computed(() => props.models[props.currentIndex])
const totalModels = computed(() => props.models.length)
const isLastModel = computed(() => props.currentIndex === totalModels.value - 1)
const progressPercentage = computed(() =>
  totalModels.value > 0 ? ((props.currentIndex + 1) / totalModels.value) * 100 : 0
)

const canGoPrevious = computed(() => props.currentIndex > 0)
const canContinue = computed(() => {
  if (!currentModel.value) return false
  // Can continue if model has a selection, is optional, or has been resolved
  return !!(
    currentModel.value.hash ||
    currentModel.value.is_optional ||
    currentModel.value.selected_option_index !== undefined
  )
})

function handleSearchInput() {
  emit('search-input', searchQuery.value)
}

function handleManualDownloadSubmit() {
  if (downloadUrl.value.trim() && downloadPath.value.trim()) {
    emit('manual-download-submit', downloadUrl.value.trim(), downloadPath.value.trim())
    downloadUrl.value = ''
    downloadPath.value = ''
  }
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
.model-resolution-step {
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
.manual-download-panel {
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
.manual-download-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border);
}

.search-panel-header h4,
.manual-download-header h4 {
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
.manual-download-body {
  padding: var(--cg-space-3);
  overflow-y: auto;
  flex: 1;
}

.search-input,
.url-input,
.path-input {
  width: 100%;
  padding: var(--cg-spacing-sm);
  font-size: var(--cg-font-size-sm);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-border-radius-sm);
  background: var(--cg-color-bg-secondary);
  color: var(--cg-color-text);
}

.search-input:focus,
.url-input:focus,
.path-input:focus {
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

.result-filename {
  font-weight: var(--cg-font-weight-semibold);
  font-size: var(--cg-font-size-sm);
  flex: 1;
}

.result-meta {
  display: flex;
  gap: var(--cg-spacing-sm);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  margin-bottom: var(--cg-spacing-xs);
}

.result-path {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
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

.manual-download-actions {
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
