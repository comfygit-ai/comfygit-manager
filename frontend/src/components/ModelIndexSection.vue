<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="WORKSPACE MODEL INDEX"
        :show-info="true"
        :stacked="true"
        @info-click="showPopover = true"
      >
        <template #actions>
          <ActionButton
            variant="primary"
            size="sm"
            :disabled="scanning"
            @click="scanForModels"
          >
            {{ scanning ? 'Scanning...' : 'Scan for Models' }}
          </ActionButton>
          <ActionButton variant="primary" size="sm" @click="showDirectoryModal = true">
            Change Directory
          </ActionButton>
          <ActionButton variant="primary" size="sm" @click="showDownloadModal = true">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 12L3 7h3V1h4v6h3L8 12z"/>
              <path d="M14 14H2v-2h12v2z"/>
            </svg>
            DOWNLOAD +
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #search>
      <!-- Progress bar for indexing operations -->
      <div v-if="indexingProgress" class="indexing-progress">
        <div class="progress-info">
          <span class="progress-label">{{ indexingProgress.message }}</span>
          <span class="progress-count">{{ indexingProgress.current }}/{{ indexingProgress.total }}</span>
        </div>
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: `${(indexingProgress.current / indexingProgress.total) * 100}%` }"
          ></div>
        </div>
      </div>

      <SearchBar
        v-model="searchQuery"
        placeholder="🔍 Search all indexed models..."
      />
    </template>

    <template #content>
      <template v-if="loading || indexingProgress">
        <LoadingState :message="indexingProgress ? 'Indexing models...' : 'Loading workspace models...'" />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadModels" />
      </template>
      <template v-else>
        <!-- Summary at top -->
        <SummaryBar v-if="models.length" variant="compact">
          Total: {{ models.length }} models • {{ formatSize(totalSize) }}
        </SummaryBar>

        <!-- Dynamic sections by model type -->
        <SectionGroup
          v-for="group in modelGroups"
          :key="group.type"
          :title="group.type.toUpperCase()"
          :count="group.models.length"
          :collapsible="true"
          :initially-expanded="false"
        >
          <ItemCard
            v-for="model in group.models"
            :key="model.sha256 || model.filename"
            status="synced"
          >
            <template #icon>📦</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>{{ formatSize(model.size) }}</template>
            <template #details>
              <DetailRow
                label="Hash:"
                :value="model.hash ? model.hash.substring(0, 16) : 'N/A'"
                :mono="true"
                value-variant="hash"
                label-min-width="auto"
              />
            </template>
            <template #actions>
              <ActionButton variant="secondary" size="xs" @click="viewDetails(model)">
                View Details
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Empty state -->
        <EmptyState
          v-if="!filteredModels.length"
          icon="📭"
          :message="searchQuery ? `No models match '${searchQuery}'` : 'No models in workspace index'"
        />
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Workspace Model Index"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        Content-addressable model storage shared across <strong>all environments</strong>.
        Models are deduplicated by hash.
      </p>
    </template>
  </InfoPopover>

  <!-- Model Detail Modal -->
  <ModelDetailModal
    v-if="selectedModelId"
    :identifier="selectedModelId"
    @close="selectedModelId = null"
  />

  <!-- Change Directory Modal -->
  <Teleport to="body">
    <div v-if="showDirectoryModal" class="modal-overlay" @click.self="showDirectoryModal = false">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Change Models Directory</h3>
          <button class="modal-close" @click="showDirectoryModal = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="input-group">
            <label>Current Directory</label>
            <code class="current-path">{{ currentDirectory || 'Not set' }}</code>
          </div>
          <div class="input-group">
            <label>New Directory Path</label>
            <BaseInput
              v-model="newDirectoryPath"
              placeholder="/path/to/models"
            />
          </div>
          <p class="modal-note">
            Note: Changing the directory will scan and index all models in the new location.
            This may take a few minutes for large collections.
          </p>
        </div>
        <div class="modal-footer">
          <BaseButton variant="secondary" @click="showDirectoryModal = false">
            Cancel
          </BaseButton>
          <BaseButton
            variant="primary"
            :disabled="!newDirectoryPath.trim() || changingDirectory"
            :loading="changingDirectory"
            @click="handleChangeDirectory"
          >
            {{ changingDirectory ? 'Indexing...' : 'Change Directory' }}
          </BaseButton>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- Download New Model Modal -->
  <Teleport to="body">
    <div v-if="showDownloadModal" class="modal-overlay" @click.self="showDownloadModal = false">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Download New Model</h3>
          <button class="modal-close" @click="showDownloadModal = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="input-group">
            <label>Download URL</label>
            <BaseInput
              v-model="downloadUrl"
              placeholder="https://huggingface.co/user/repo or https://.../resolve/..."
            />
          </div>

          <template v-if="isHfRepoUrl">
            <p class="modal-note">
              HuggingFace repository detected. Click <strong>Browse Repo Files</strong> to pick files.
            </p>
          </template>

          <template v-else>
            <div class="input-group">
              <label>Target Path (relative to models directory)</label>
              <BaseInput
                v-model="downloadTargetPath"
                placeholder="e.g. checkpoints/model.safetensors"
              />
              <p v-if="targetPathError" class="modal-error">{{ targetPathError }}</p>
            </div>
            <p class="modal-note">Model will be queued for background download.</p>
          </template>
        </div>
        <div class="modal-footer">
          <BaseButton variant="secondary" @click="showDownloadModal = false">Cancel</BaseButton>
          <BaseButton
            v-if="isHfRepoUrl"
            variant="primary"
            :disabled="!downloadUrl.trim()"
            @click="openHfRepoModal"
          >
            Browse Repo Files
          </BaseButton>
          <BaseButton
            v-else
            variant="primary"
            :disabled="!downloadUrl.trim() || !downloadTargetPath.trim() || !!targetPathError"
            @click="handleDownloadModel"
          >
            Queue Download
          </BaseButton>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- HuggingFace Repo Modal -->
  <HuggingFaceRepoModal
    :show="showHfRepoModal"
    :url="hfRepoUrl"
    @close="showHfRepoModal = false"
    @queue="handleQueueHfRepo"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { useModelDownloadQueue } from '@/composables/useModelDownloadQueue'
import type { ModelInfo } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SearchBar from '@/components/base/molecules/SearchBar.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ItemCard from '@/components/base/molecules/ItemCard.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import ModelDetailModal from '@/components/ModelDetailModal.vue'
import HuggingFaceRepoModal from '@/components/HuggingFaceRepoModal.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { parseHuggingFaceUrl } from '@/utils/huggingface'

const {
  getWorkspaceModels,
  scanWorkspaceModels,
  getModelsDirectory,
  setModelsDirectory
} = useComfyGitService()

const { addToQueue } = useModelDownloadQueue()

const emit = defineEmits<{
  (e: 'refresh'): void
}>()

// State
const models = ref<ModelInfo[]>([])
const loading = ref(false)
const scanning = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)
const selectedModelId = ref<string | null>(null)

// Directory modal state
const showDirectoryModal = ref(false)
const currentDirectory = ref<string | null>(null)
const newDirectoryPath = ref('')
const changingDirectory = ref(false)

// Download modal state
const showDownloadModal = ref(false)
const downloadUrl = ref('')
const downloadTargetPath = ref('')

// HuggingFace repo modal state
const showHfRepoModal = ref(false)
const hfRepoUrl = ref('')

// Computed: HuggingFace URL detection
const hfParsed = computed(() => parseHuggingFaceUrl(downloadUrl.value))
const isHfRepoUrl = computed(() => hfParsed.value.kind === 'repo' && !!hfParsed.value.repoId)

// Computed: Target path validation
const targetPathError = computed(() => {
  const p = downloadTargetPath.value.trim()
  if (!p) return null
  const last = p.replace(/\\/g, '/').split('/').pop() || ''
  const hasExt = last.includes('.') && !last.endsWith('.')
  if (!hasExt) {
    return 'Target path must include a filename (e.g. checkpoints/model.safetensors).'
  }
  return null
})

// Progress state for indexing
const indexingProgress = ref<{ message: string; current: number; total: number } | null>(null)

const totalSize = computed(() =>
  models.value.reduce((sum, m) => sum + (m.size || 0), 0)
)

// Search filtering
const filteredModels = computed(() => {
  if (!searchQuery.value.trim()) return models.value
  const query = searchQuery.value.toLowerCase()
  return models.value.filter(m => {
    const modelAny = m as any
    const sha256 = m.sha256 || modelAny.sha256_hash || ''
    return (
      m.filename.toLowerCase().includes(query) ||
      sha256.toLowerCase().includes(query)
    )
  })
})

// Dynamic grouping by type
const modelGroups = computed(() => {
  const groups: Record<string, ModelInfo[]> = {}
  for (const model of filteredModels.value) {
    const type = model.type || 'other'
    if (!groups[type]) groups[type] = []
    groups[type].push(model)
  }
  // Sort by type name, but put common types first
  const typeOrder = ['checkpoints', 'loras', 'vae', 'controlnet', 'upscale_models', 'clip', 'embeddings', 'clip_vision', 'diffusion_models', 'text_encoders', 'unet', 'configs', 'diffusers']
  return Object.entries(groups)
    .sort(([a], [b]) => {
      const aIdx = typeOrder.indexOf(a)
      const bIdx = typeOrder.indexOf(b)
      if (aIdx >= 0 && bIdx >= 0) return aIdx - bIdx
      if (aIdx >= 0) return -1
      if (bIdx >= 0) return 1
      return a.localeCompare(b)
    })
    .map(([type, models]) => ({ type, models }))
})

// Format bytes to human-readable size
function formatSize(bytes: number | undefined): string {
  if (!bytes) return 'Unknown'
  const GB = 1024 * 1024 * 1024
  const MB = 1024 * 1024
  if (bytes >= GB) {
    return `${(bytes / GB).toFixed(1)} GB`
  }
  if (bytes >= MB) {
    return `${(bytes / MB).toFixed(0)} MB`
  }
  return `${(bytes / 1024).toFixed(0)} KB`
}

function viewDetails(model: ModelInfo) {
  selectedModelId.value = model.hash || model.filename
}

async function scanForModels() {
  scanning.value = true
  error.value = null
  try {
    const result = await scanWorkspaceModels()
    // Reload models after scan
    await loadModels()
    if (result.changes > 0) {
      console.log(`Scan complete: ${result.changes} changes detected`)
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to scan models'
  } finally {
    scanning.value = false
  }
}

async function handleChangeDirectory() {
  if (!newDirectoryPath.value.trim()) return

  changingDirectory.value = true
  error.value = null
  try {
    const result = await setModelsDirectory(newDirectoryPath.value.trim())
    currentDirectory.value = result.path
    showDirectoryModal.value = false
    newDirectoryPath.value = ''
    // Reload models after directory change
    await loadModels()
    console.log(`Directory changed: ${result.models_indexed} models indexed`)
    // Trigger full panel refresh to update workflow statuses
    emit('refresh')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to change directory'
  } finally {
    changingDirectory.value = false
  }
}

function handleDownloadModel() {
  if (!downloadUrl.value.trim()) return

  // If it's a HF repo URL, open the repo modal instead
  const parsed = parseHuggingFaceUrl(downloadUrl.value.trim())
  if (parsed.kind === 'repo') {
    openHfRepoModal()
    return
  }

  // Direct download requires target path
  if (!downloadTargetPath.value.trim()) return

  // Extract filename from target path
  const filename = downloadTargetPath.value.split('/').pop() || 'model.safetensors'

  // Add to download queue
  addToQueue([{
    workflow: '__manual__',
    filename,
    url: downloadUrl.value.trim(),
    targetPath: downloadTargetPath.value.trim()
  }])

  // Reset form and close modal
  downloadUrl.value = ''
  downloadTargetPath.value = ''
  showDownloadModal.value = false
}

function openHfRepoModal() {
  hfRepoUrl.value = downloadUrl.value.trim()
  showHfRepoModal.value = true
  showDownloadModal.value = false
}

function handleQueueHfRepo(items: Array<{ url: string; destination: string; filename: string }>) {
  // Transform HfDownloadItem[] to queue format
  addToQueue(items.map(item => ({
    workflow: '__manual__',
    filename: item.filename,
    url: item.url,
    targetPath: item.destination ? `${item.destination}/${item.filename}` : item.filename
  })))
  showHfRepoModal.value = false
  hfRepoUrl.value = ''
  downloadUrl.value = ''
  downloadTargetPath.value = ''
}

async function loadModels() {
  loading.value = true
  error.value = null
  try {
    models.value = await getWorkspaceModels()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workspace models'
  } finally {
    loading.value = false
  }
}

async function loadCurrentDirectory() {
  try {
    const result = await getModelsDirectory()
    currentDirectory.value = result.path
  } catch {
    // Ignore errors
  }
}

onMounted(() => {
  loadModels()
  loadCurrentDirectory()
})
</script>

<style scoped>
/* Progress bar styles */
.indexing-progress {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  padding: var(--cg-space-2) var(--cg-space-3);
  margin-bottom: var(--cg-space-2);
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--cg-space-1);
}

.progress-label {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.progress-count {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.progress-bar {
  height: 4px;
  background: var(--cg-color-bg-hover);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--cg-color-accent);
  transition: width 0.2s ease;
}
</style>

<!-- Unscoped modal styles (for Teleport) -->
<style>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10010;
}

.modal-content {
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

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--cg-color-border, #333);
  background: var(--cg-color-bg-secondary, #252542);
}

.modal-header h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--cg-color-text-primary, #fff);
}

.modal-close {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--cg-color-text-muted, #888);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.modal-close:hover {
  color: var(--cg-color-text-primary, #fff);
  background: var(--cg-color-bg-hover, #333);
}

.modal-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-group label {
  font-size: 12px;
  font-weight: 500;
  color: var(--cg-color-text-secondary, #aaa);
}

.current-path {
  font-family: var(--cg-font-mono, monospace);
  font-size: 13px;
  padding: 8px 12px;
  background: var(--cg-color-bg-tertiary, #333);
  border-radius: 4px;
  color: var(--cg-color-accent, #7c3aed);
  word-break: break-all;
  overflow-wrap: anywhere;
}

.modal-note {
  font-size: 12px;
  color: var(--cg-color-text-muted, #888);
  margin: 0;
  padding: 8px;
  background: var(--cg-color-bg-secondary, #252542);
  border-radius: 4px;
}

.modal-error {
  font-size: 12px;
  color: var(--cg-color-error, #ef4444);
  margin-top: 4px;
}

.modal-footer {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding: 12px 16px;
  border-top: 1px solid var(--cg-color-border, #333);
  background: var(--cg-color-bg-secondary, #252542);
}
</style>
