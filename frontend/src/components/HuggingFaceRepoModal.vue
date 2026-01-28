<template>
  <BaseModal
    v-if="show"
    :title="modalTitle"
    size="lg"
    :loading="loading"
    :error="error"
    fixed-height
    @close="$emit('close')"
  >
    <template #header>
      <div class="hf-header">
        <span class="hf-title">{{ repoId || 'HuggingFace Repo' }}</span>
        <span v-if="revision" class="revision-pill">{{ revision }}</span>
      </div>
    </template>

    <template #body>
      <div class="hf-modal-content">
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
          <div v-if="filteredFiles.length === 0" class="empty-state">
            {{ files.length === 0 ? 'No files in repository' : 'No files match filter' }}
          </div>
          <div v-else class="file-list">
            <div
              v-for="file in filteredFiles"
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
            <BaseSelect
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

        <!-- Summary -->
        <div class="summary-bar">
          <span class="summary-count">{{ selected.size }} file(s) selected</span>
          <span class="summary-size">{{ formatSize(totalSelectedSize) }}</span>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="$emit('close')">Cancel</BaseButton>
      <BaseButton
        variant="primary"
        :disabled="selected.size === 0 || !isDestinationValid"
        @click="handleQueue"
      >
        Queue Download
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import BaseModal from '@/components/base/BaseModal.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import type { SelectOption } from '@/components/base/BaseSelect.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { parseHuggingFaceUrl, buildHfResolveUrl } from '@/utils/huggingface'
import type { HuggingFaceRepoFile } from '@/types/comfygit'

export interface HfDownloadItem {
  url: string
  destination: string
  filename: string
}

const props = defineProps<{
  show: boolean
  url: string
}>()

const emit = defineEmits<{
  close: []
  queue: [items: HfDownloadItem[]]
}>()

const { getHuggingFaceRepoInfo, getModelsSubdirectories } = useComfyGitService()

// State
const files = ref<HuggingFaceRepoFile[]>([])
const selected = ref<Set<string>>(new Set())
const loading = ref(false)
const error = ref<string | null>(null)

const repoId = ref<string>('')
const revision = ref<string>('main')

const searchQuery = ref('')
const showOnlyModels = ref(true)

const destBase = ref<string>('')
const destSubfolder = ref<string>('')
const destCustom = ref<string>('')

const directories = ref<string[]>([])

// Shard detection regex: matches patterns like model-00001-of-00005.safetensors
const SHARD_REGEX = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i

// Computed
const modalTitle = computed(() => repoId.value || 'Browse HuggingFace Repository')

const filteredFiles = computed(() => {
  let result = files.value

  if (showOnlyModels.value) {
    result = result.filter(f => f.is_model_file)
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(f => f.path.toLowerCase().includes(query))
  }

  return result
})

const destinationOptions = computed<SelectOption[]>(() => {
  const opts: SelectOption[] = directories.value.map(d => ({
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
  for (const file of files.value) {
    if (file.is_model_file) {
      newSelected.add(file.path)
    }
  }
  selected.value = newSelected
}

function clearSelection() {
  selected.value = new Set()
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
        url: buildHfResolveUrl(repoId.value, revision.value, file.path),
        destination,
        filename: file.path.split('/').pop() || file.path
      })
    }
  }

  emit('queue', items)
}

async function loadRepoInfo() {
  if (!props.url) return

  loading.value = true
  error.value = null

  try {
    const parsed = parseHuggingFaceUrl(props.url)
    if (parsed.kind === 'unknown') {
      error.value = 'Invalid HuggingFace URL'
      loading.value = false
      return
    }

    repoId.value = parsed.repoId || ''
    revision.value = parsed.revision || 'main'

    const info = await getHuggingFaceRepoInfo(props.url)
    files.value = info.files
    repoId.value = info.repo_id
    revision.value = info.revision

    // Reset selection
    selected.value = new Set()
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

// Watch for URL changes
watch(() => props.url, () => {
  if (props.show && props.url) {
    loadRepoInfo()
  }
})

// Watch for show changes
watch(() => props.show, (newShow) => {
  if (newShow) {
    loadRepoInfo()
    loadDirectories()
  } else {
    // Reset state when closing
    files.value = []
    selected.value = new Set()
    searchQuery.value = ''
    destSubfolder.value = ''
    destCustom.value = ''
  }
})

onMounted(() => {
  if (props.show) {
    loadRepoInfo()
    loadDirectories()
  }
})
</script>

<style scoped>
.hf-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex: 1;
}

.hf-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
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

.hf-modal-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  height: 100%;
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
  min-width: 150px;
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

/* Summary */
.summary-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
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
