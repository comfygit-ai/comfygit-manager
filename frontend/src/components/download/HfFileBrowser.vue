<template>
  <div class="hf-file-browser">
    <!-- Header with back button -->
    <div class="browser-header">
      <button class="back-btn" @click="$emit('back')" title="Back to search">
        ◄
      </button>
      <div class="repo-info">
        <span class="repo-id">{{ repoId }}</span>
        <span v-if="revision" class="revision-pill">{{ revision }}</span>
      </div>
    </div>

    <!-- Loading/Error states -->
    <div v-if="loading" class="loading-state">
      Loading repository files...
    </div>
    <div v-else-if="error" class="error-state">
      {{ error }}
    </div>

    <template v-else>
      <!-- Toolbar -->
      <div class="toolbar">
        <BaseInput
          v-model="searchQuery"
          placeholder="Filter files..."
          type="search"
          class="search-input"
        />
        <div class="toolbar-actions">
          <button
            :class="['toggle-btn', { active: showOnlyModels }]"
            @click="showOnlyModels = !showOnlyModels"
          >
            {{ showOnlyModels ? 'Models Only' : 'All Files' }}
          </button>
          <button class="action-btn" @click="autoSelectModels">Auto-Select Models</button>
          <button class="action-btn" @click="clearSelection">Clear</button>
        </div>
      </div>

      <!-- File List -->
      <div class="file-list-container">
        <!-- Header row -->
        <div v-if="filteredFiles.length > 0" class="file-list-header">
          <input
            type="checkbox"
            :checked="allFilteredSelected"
            :indeterminate="someFilteredSelected && !allFilteredSelected"
            class="file-checkbox"
            @change="toggleSelectAll"
          />
          <span class="header-name" @click="toggleSort('name')">
            Name
            <span class="sort-indicator">{{ sortKey === 'name' ? (sortAsc ? '▲' : '▼') : '' }}</span>
          </span>
          <span class="header-size" @click="toggleSort('size')">
            Size
            <span class="sort-indicator">{{ sortKey === 'size' ? (sortAsc ? '▲' : '▼') : '' }}</span>
          </span>
        </div>
        <div v-if="filteredFiles.length === 0" class="empty-state">
          {{ files.length === 0 ? 'No files in repository' : 'No files match filter' }}
        </div>
        <div v-else class="file-list">
          <div
            v-for="file in sortedFiles"
            :key="file.path"
            :class="['file-item', { selected: selected.has(file.path) }]"
            @click="toggleFile(file)"
          >
            <input
              type="checkbox"
              :checked="selected.has(file.path)"
              class="file-checkbox"
              @click.stop
              @change="toggleFile(file)"
            />
            <span class="file-path">{{ file.path }}</span>
            <span class="file-size">{{ formatSize(file.size) }}</span>
          </div>
        </div>
      </div>

      <!-- Destination Section -->
      <div class="destination-section">
        <h4 class="section-label">Download Destination</h4>
        <div class="destination-row">
          <BaseDropdown
            v-model="destBase"
            :options="destinationOptions"
            placeholder="Select directory..."
            class="dest-select"
          />
          <span v-if="destBase !== '__custom__'" class="path-separator">/</span>
          <BaseInput
            v-if="destBase !== '__custom__'"
            v-model="destSubfolder"
            placeholder="subfolder (optional)"
            class="dest-subfolder"
          />
        </div>
        <BaseInput
          v-if="destBase === '__custom__'"
          v-model="destCustom"
          placeholder="Enter full path relative to models directory..."
          class="dest-custom"
          full-width
        />
      </div>

      <!-- Summary & Action -->
      <div class="action-bar">
        <div class="summary-info">
          <span class="summary-count">{{ selected.size }} file(s) selected</span>
          <span class="summary-size">{{ formatSize(totalSelectedSize) }}</span>
        </div>
        <BaseButton
          variant="primary"
          :disabled="selected.size === 0 || !isDestinationValid"
          @click="handleQueue"
        >
          Queue Download
        </BaseButton>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseDropdown from '@/components/base/BaseDropdown.vue'
import type { DropdownOption } from '@/components/base/BaseDropdown.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { buildHfResolveUrl } from '@/utils/huggingface'
import type { HuggingFaceRepoFile } from '@/types/comfygit'

export interface HfDownloadItem {
  url: string
  destination: string
  filename: string
}

const props = defineProps<{
  repoId: string
  revision: string
  initialPath?: string
  preselectedFile?: string
}>()

const emit = defineEmits<{
  queue: [items: HfDownloadItem[]]
  back: []
}>()

const { getHuggingFaceRepoInfo, getModelsSubdirectories } = useComfyGitService()

// State
const files = ref<HuggingFaceRepoFile[]>([])
const selected = ref<Set<string>>(new Set())
const loading = ref(false)
const error = ref<string | null>(null)

const searchQuery = ref('')
const showOnlyModels = ref(false)

// Sorting state
const sortKey = ref<'name' | 'size'>('name')
const sortAsc = ref(true)

const destBase = ref<string>('')
const destSubfolder = ref<string>('')
const destCustom = ref<string>('')

const directories = ref<string[]>([])

// Shard detection regex: matches patterns like model-00001-of-00005.safetensors
const SHARD_REGEX = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i

// Computed
const filteredFiles = computed(() => {
  let result = files.value

  // Filter by initialPath if provided
  if (props.initialPath) {
    const pathPrefix = props.initialPath.endsWith('/') ? props.initialPath : `${props.initialPath}/`
    result = result.filter(f => f.path.startsWith(pathPrefix) || f.path === props.initialPath)
  }

  if (showOnlyModels.value) {
    result = result.filter(f => f.is_model_file)
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(f => f.path.toLowerCase().includes(query))
  }

  return result
})

const sortedFiles = computed(() => {
  const result = [...filteredFiles.value]
  result.sort((a, b) => {
    let cmp: number
    if (sortKey.value === 'name') {
      cmp = a.path.localeCompare(b.path)
    } else {
      cmp = a.size - b.size
    }
    return sortAsc.value ? cmp : -cmp
  })
  return result
})

const allFilteredSelected = computed(() => {
  if (filteredFiles.value.length === 0) return false
  return filteredFiles.value.every(f => selected.value.has(f.path))
})

const someFilteredSelected = computed(() => {
  return filteredFiles.value.some(f => selected.value.has(f.path))
})

const destinationOptions = computed<DropdownOption[]>(() => {
  const opts: DropdownOption[] = directories.value.map(d => ({
    label: d,
    value: d
  }))
  opts.push({ label: 'Custom path...', value: '__custom__' })
  return opts
})

const isDestinationValid = computed(() => {
  if (destBase.value === '__custom__') {
    return destCustom.value.trim().length > 0
  }
  return destBase.value.length > 0
})

const totalSelectedSize = computed(() => {
  let total = 0
  for (const path of selected.value) {
    const file = files.value.find(f => f.path === path)
    if (file) total += file.size
  }
  return total
})

// Methods
function formatSize(bytes: number): string {
  if (bytes === 0) return '0 B'
  const GB = 1024 * 1024 * 1024
  const MB = 1024 * 1024
  const KB = 1024
  if (bytes >= GB) return `${(bytes / GB).toFixed(2)} GB`
  if (bytes >= MB) return `${(bytes / MB).toFixed(1)} MB`
  if (bytes >= KB) return `${(bytes / KB).toFixed(0)} KB`
  return `${bytes} B`
}

function getShardGroup(path: string): string | null {
  const match = path.match(SHARD_REGEX)
  if (match) {
    // Return the base name + extension as group identifier
    return `${match[1]}${match[4]}`
  }
  return null
}

function toggleFile(file: HuggingFaceRepoFile) {
  const newSelected = new Set(selected.value)
  const isCurrentlySelected = newSelected.has(file.path)

  // Check if this file is part of a shard group
  const shardGroup = file.shard_group || getShardGroup(file.path)

  if (shardGroup) {
    // Find all files in the same shard group
    const groupFiles = files.value.filter(f => {
      const fGroup = f.shard_group || getShardGroup(f.path)
      return fGroup === shardGroup
    })

    // Toggle all files in the group together
    if (isCurrentlySelected) {
      groupFiles.forEach(f => newSelected.delete(f.path))
    } else {
      groupFiles.forEach(f => newSelected.add(f.path))
    }
  } else {
    // Single file toggle
    if (isCurrentlySelected) {
      newSelected.delete(file.path)
    } else {
      newSelected.add(file.path)
    }
  }

  selected.value = newSelected
}

function autoSelectModels() {
  const newSelected = new Set(selected.value)
  for (const file of filteredFiles.value) {
    if (file.is_model_file) {
      newSelected.add(file.path)
    }
  }
  selected.value = newSelected
}

function clearSelection() {
  selected.value = new Set()
}

function toggleSelectAll() {
  if (allFilteredSelected.value) {
    // Deselect all filtered files
    const newSelected = new Set(selected.value)
    for (const file of filteredFiles.value) {
      newSelected.delete(file.path)
    }
    selected.value = newSelected
  } else {
    // Select all filtered files
    const newSelected = new Set(selected.value)
    for (const file of filteredFiles.value) {
      newSelected.add(file.path)
    }
    selected.value = newSelected
  }
}

function toggleSort(key: 'name' | 'size') {
  if (sortKey.value === key) {
    sortAsc.value = !sortAsc.value
  } else {
    sortKey.value = key
    sortAsc.value = true
  }
}

function getDestinationPath(): string {
  if (destBase.value === '__custom__') {
    return destCustom.value.trim()
  }
  if (destSubfolder.value.trim()) {
    return `${destBase.value}/${destSubfolder.value.trim()}`
  }
  return destBase.value
}

function handleQueue() {
  if (selected.value.size === 0 || !isDestinationValid.value) return

  const destination = getDestinationPath()
  const items: HfDownloadItem[] = []

  for (const path of selected.value) {
    const file = files.value.find(f => f.path === path)
    if (file) {
      items.push({
        url: buildHfResolveUrl(props.repoId, props.revision, file.path),
        destination,
        filename: file.path.split('/').pop() || file.path
      })
    }
  }

  emit('queue', items)
}

async function loadRepoFiles() {
  if (!props.repoId) return

  loading.value = true
  error.value = null

  try {
    // Construct URL from repoId and revision
    const url = `https://huggingface.co/${props.repoId}/tree/${props.revision || 'main'}`
    const info = await getHuggingFaceRepoInfo(url)
    files.value = info.files

    // Pre-select file if specified
    if (props.preselectedFile) {
      const file = files.value.find(f => f.path === props.preselectedFile)
      if (file) {
        toggleFile(file)
      }
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load repository'
  } finally {
    loading.value = false
  }
}

async function loadDirectories() {
  try {
    const response = await getModelsSubdirectories()
    directories.value = response.directories
    // Default to first directory if available
    if (response.directories.length > 0 && !destBase.value) {
      destBase.value = response.directories[0]
    }
  } catch {
    // Fallback to common directories
    directories.value = ['checkpoints', 'loras', 'vae', 'controlnet', 'unet']
    if (!destBase.value) {
      destBase.value = 'checkpoints'
    }
  }
}

// Watch for prop changes
watch(() => [props.repoId, props.revision], () => {
  if (props.repoId) {
    loadRepoFiles()
  }
}, { immediate: false })

onMounted(() => {
  loadRepoFiles()
  loadDirectories()
})
</script>

<style scoped>
.hf-file-browser {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  height: 100%;
}

/* Header */
.browser-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  padding-bottom: var(--cg-space-2);
  border-bottom: 1px solid var(--cg-color-border);
}

.back-btn {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-secondary);
  padding: 6px 10px;
  font-size: var(--cg-font-size-sm);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.repo-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex: 1;
}

.repo-id {
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
}

.revision-pill {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  padding: 2px 8px;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
}

/* Loading/Error states */
.loading-state,
.error-state {
  padding: var(--cg-space-4);
  text-align: center;
  color: var(--cg-color-text-muted);
}

.error-state {
  color: var(--cg-color-error);
}

/* Toolbar */
.toolbar {
  display: flex;
  gap: var(--cg-space-2);
  align-items: center;
  flex-wrap: wrap;
}

.search-input {
  flex: 1;
  min-width: 200px;
}

.toolbar-actions {
  display: flex;
  gap: var(--cg-space-2);
}

.toggle-btn,
.action-btn {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-secondary);
  padding: 6px 12px;
  font-size: var(--cg-font-size-xs);
  cursor: pointer;
  white-space: nowrap;
}

.toggle-btn:hover,
.action-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.toggle-btn.active {
  background: var(--cg-color-accent);
  color: var(--cg-color-text-inverse);
  border-color: var(--cg-color-accent);
}

/* File List */
.file-list-container {
  flex: 1;
  min-height: 0;
  max-height: 300px;
  overflow-y: auto;
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
}

.file-list-container::-webkit-scrollbar {
  width: 8px;
}

.file-list-container::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.file-list-container::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.file-list-container::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}

/* File List Header */
.file-list-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border-bottom: 1px solid var(--cg-color-border);
  position: sticky;
  top: 0;
  z-index: 1;
}

.header-name,
.header-size {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  color: var(--cg-color-text-secondary);
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
}

.header-name:hover,
.header-size:hover {
  color: var(--cg-color-accent);
}

.header-name {
  flex: 1;
}

.header-size {
  white-space: nowrap;
}

.sort-indicator {
  font-size: 10px;
  color: var(--cg-color-accent);
  min-width: 10px;
}

.file-list {
  display: flex;
  flex-direction: column;
}

.file-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  cursor: pointer;
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.file-item:last-child {
  border-bottom: none;
}

.file-item:hover {
  background: var(--cg-color-bg-hover);
}

.file-item.selected {
  background: var(--cg-color-accent-muted);
}

.file-checkbox {
  cursor: pointer;
  accent-color: var(--cg-color-accent);
}

.file-path {
  flex: 1;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  word-break: break-all;
  color: var(--cg-color-text-primary);
}

.file-size {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  white-space: nowrap;
}

.empty-state {
  padding: var(--cg-space-4);
  text-align: center;
  color: var(--cg-color-text-muted);
  font-style: italic;
}

/* Destination Section */
.destination-section {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  padding: var(--cg-space-3);
}

.section-label {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  font-size: var(--cg-font-size-xs);
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-2) 0;
}

.destination-row {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.dest-select {
  min-width: 220px;
}

.path-separator {
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
}

.dest-subfolder {
  flex: 1;
}

.dest-custom {
  margin-top: var(--cg-space-2);
}

/* Action bar with summary */
.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--cg-space-3);
}

.summary-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
}

.summary-count {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.summary-size {
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}
</style>
