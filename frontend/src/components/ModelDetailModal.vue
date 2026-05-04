<template>
  <BaseModal
    :title="`Model Details: ${details?.filename || 'Loading...'}`"
    size="lg"
    :loading="loading"
    :error="error"
    :overlay-z-index="overlayZIndex"
    @close="$emit('close')"
  >
    <template #body>
      <div v-if="details" class="model-details">
        <!-- Primary Info -->
        <section class="detail-section">
          <div class="detail-row">
            <span class="detail-label">Hash:</span>
            <span class="detail-value mono">{{ details.hash || 'Not computed' }}</span>
            <button v-if="details.hash" class="copy-btn" @click="copyToClipboard(details.hash)">Copy</button>
          </div>
          <div class="detail-row">
            <span class="detail-label">Blake3:</span>
            <span class="detail-value mono">{{ details.blake3 || 'Not computed' }}</span>
            <button v-if="details.blake3" class="copy-btn" @click="copyToClipboard(details.blake3)">Copy</button>
          </div>
          <div class="detail-row">
            <span class="detail-label">SHA256:</span>
            <span class="detail-value mono">{{ details.sha256 || 'Not computed' }}</span>
            <button v-if="details.sha256" class="copy-btn" @click="copyToClipboard(details.sha256)">Copy</button>
          </div>
          <div v-if="missingFullHashes" class="detail-row">
            <span class="detail-label"></span>
            <span class="detail-value">
              <button
                class="compute-hashes-btn"
                :disabled="computingHashes"
                @click="computeHashes"
              >
                {{ computingHashes ? 'Computing hashes...' : 'Compute Full Hashes' }}
              </button>
            </span>
          </div>
          <div v-if="hashError" class="detail-row">
            <span class="detail-label"></span>
            <span class="detail-value hash-error">{{ hashError }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Size:</span>
            <span class="detail-value">{{ formatSize(details.size) }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Category:</span>
            <span class="detail-value">{{ details.category }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Last Seen:</span>
            <span class="detail-value">{{ details.last_seen || 'Unknown' }}</span>
          </div>
        </section>

        <!-- Locations -->
        <section class="detail-section">
          <h4 class="section-header">Locations ({{ details.locations?.length || 0 }})</h4>
          <div v-if="details.locations?.length" class="locations-list">
            <div v-for="(loc, idx) in details.locations" :key="idx" class="location-item">
              <span class="location-path mono">{{ loc.path }}</span>
              <span v-if="loc.modified" class="location-modified">Modified: {{ loc.modified }}</span>
              <button v-if="loc.path" class="open-location-btn" @click="copyToClipboard(loc.path)">
                Copy File Path
              </button>
            </div>
          </div>
          <div v-else class="empty-state">No locations found</div>
        </section>

        <!-- Sources -->
        <section class="detail-section">
          <div class="section-header-row">
            <h4 class="section-header">Download Sources ({{ details.sources?.length || 0 }})</h4>
            <button class="find-source-btn" @click="showSourceModal = true">
              Find Source
            </button>
          </div>
          <div v-if="details.sources?.length" class="sources-list">
            <div v-for="(src, idx) in details.sources" :key="idx" class="source-item">
              <span class="source-type">{{ src.type }}:</span>
              <a :href="src.url" target="_blank" class="source-url">{{ src.url }}</a>
              <button
                class="remove-source-btn"
                :disabled="removingSourceUrl === src.url"
                @click="removeSource(src.url)"
              >
                {{ removingSourceUrl === src.url ? '...' : '×' }}
              </button>
            </div>
          </div>
          <div v-else class="empty-state">
            No download sources configured
          </div>
          <p v-if="sourceError" class="source-error">{{ sourceError }}</p>
          <p v-if="sourceSuccess" class="source-success">{{ sourceSuccess }}</p>
        </section>
      </div>
    </template>

    <template #footer>
      <BaseButton
        v-if="details"
        variant="danger"
        :disabled="deletingModel"
        @click="showDeleteConfirm = true"
      >
        Delete Model
      </BaseButton>
      <div class="footer-spacer"></div>
      <BaseButton variant="secondary" @click="$emit('close')">Close</BaseButton>
    </template>
  </BaseModal>

  <!-- Toast notifications -->
  <Teleport to="body">
    <div v-if="toast" class="toast" :class="toast.type">
      {{ toast.message }}
    </div>
  </Teleport>

  <ModelSourceModal
    v-if="details && showSourceModal"
    :model="details"
    :overlay-z-index="(overlayZIndex || 10003) + 2"
    @close="showSourceModal = false"
    @saved="handleSourceSaved"
    @hashes-computed="handleHashesComputed"
  />

  <BaseModal
    v-if="details && showDeleteConfirm"
    title="Delete Model"
    size="md"
    :overlay-z-index="(overlayZIndex || 10003) + 4"
    :close-on-overlay-click="!deletingModel"
    :show-close-button="!deletingModel"
    @close="showDeleteConfirm = false"
  >
    <template #body>
      <div class="delete-confirm">
        <p>
          This will permanently delete all indexed file locations for
          <strong>{{ details.filename }}</strong>.
        </p>
        <div class="delete-meta">
          <span>Hash</span>
          <code>{{ details.hash }}</code>
        </div>
        <div class="delete-paths">
          <h4>Files to delete ({{ deletionPaths.length }})</h4>
          <code v-for="path in deletionPaths" :key="path" class="delete-path">
            {{ path }}
          </code>
        </div>
        <p v-if="deleteError" class="delete-error">{{ deleteError }}</p>
        <p class="delete-warning">
          This removes the files from disk and removes the model from the workspace index when no locations remain.
        </p>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" :disabled="deletingModel" @click="showDeleteConfirm = false">
        Cancel
      </BaseButton>
      <BaseButton variant="danger" :loading="deletingModel" :disabled="deletingModel" @click="confirmDeleteModel">
        {{ deletingModel ? 'Deleting...' : 'Delete Model' }}
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import BaseModal from '@/components/base/BaseModal.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import ModelSourceModal from '@/components/ModelSourceModal.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { copyToClipboard as copyTextToClipboard } from '@/utils/copyToClipboard'
import type { ModelDetails } from '@/types/comfygit'

const props = defineProps<{
  identifier: string
  overlayZIndex?: number
}>()

const emit = defineEmits<{
  close: []
  sourceSaved: []
  sourceRemoved: []
  deleted: []
}>()

const { getModelDetails, removeModelSource, computeModelHashes, deleteModel } = useComfyGitService()

const details = ref<ModelDetails | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const removingSourceUrl = ref<string | null>(null)
const sourceError = ref<string | null>(null)
const sourceSuccess = ref<string | null>(null)
const showSourceModal = ref(false)
const computingHashes = ref(false)
const hashError = ref<string | null>(null)
const showDeleteConfirm = ref(false)
const deletingModel = ref(false)
const deleteError = ref<string | null>(null)

const missingFullHashes = computed(() => Boolean(details.value?.hash && (!details.value.blake3 || !details.value.sha256)))
const deletionPaths = computed(() => details.value?.locations?.map(location => location.path).filter(Boolean) || [])

// Toast notifications
const toast = ref<{ message: string; type: 'success' | 'error' | 'info' } | null>(null)
let toastTimeout: ReturnType<typeof setTimeout> | null = null

function showToast(message: string, type: 'success' | 'error' | 'info' = 'success', duration = 2000) {
  if (toastTimeout) clearTimeout(toastTimeout)
  toast.value = { message, type }
  toastTimeout = setTimeout(() => {
    toast.value = null
  }, duration)
}

function formatSize(bytes: number | undefined): string {
  if (!bytes) return 'Unknown'
  const GB = 1024 * 1024 * 1024
  const MB = 1024 * 1024
  if (bytes >= GB) return `${(bytes / GB).toFixed(1)} GB`
  if (bytes >= MB) return `${(bytes / MB).toFixed(0)} MB`
  return `${(bytes / 1024).toFixed(0)} KB`
}

async function copyToClipboard(text: string) {
  try {
    await copyTextToClipboard(text)
    showToast('Copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy:', err)
    showToast('Failed to copy to clipboard', 'error')
  }
}

async function removeSource(url: string) {
  if (!details.value) return

  removingSourceUrl.value = url
  sourceError.value = null
  sourceSuccess.value = null

  try {
    await removeModelSource(details.value.hash, url)
    showToast('Source removed')
    // Reload details to show updated sources
    await loadDetails()
    emit('sourceRemoved')
  } catch (err) {
    sourceError.value = err instanceof Error ? err.message : 'Failed to remove source'
  } finally {
    removingSourceUrl.value = null
  }
}

async function handleSourceSaved() {
  sourceSuccess.value = 'Source added successfully!'
  showSourceModal.value = false
  await loadDetails()
  emit('sourceSaved')
}

async function handleHashesComputed() {
  await loadDetails()
}

async function computeHashes() {
  if (!details.value?.hash) return

  computingHashes.value = true
  hashError.value = null

  try {
    details.value = await computeModelHashes(details.value.hash)
    showToast('Hashes computed successfully!')
  } catch (err) {
    hashError.value = err instanceof Error ? err.message : 'Failed to compute hashes'
  } finally {
    computingHashes.value = false
  }
}

async function confirmDeleteModel() {
  if (!details.value?.hash) return

  deletingModel.value = true
  deleteError.value = null

  try {
    const result = await deleteModel(details.value.hash)
    if (result.status === 'partial' || result.errors.length > 0) {
      const failedCount = result.errors.length
      deleteError.value = `Deleted ${result.deleted_paths.length} file(s), but ${failedCount} location(s) failed.`
      showToast(deleteError.value, 'error', 4000)
      await loadDetails()
      return
    }

    showToast(`Deleted ${result.deleted_paths.length} model file(s)`)
    showDeleteConfirm.value = false
    emit('deleted')
    emit('close')
  } catch (err) {
    deleteError.value = err instanceof Error ? err.message : 'Failed to delete model'
    showToast(deleteError.value, 'error', 4000)
  } finally {
    deletingModel.value = false
  }
}

async function loadDetails() {
  loading.value = true
  error.value = null
  try {
    details.value = await getModelDetails(props.identifier)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load model details'
  } finally {
    loading.value = false
  }
}

onMounted(loadDetails)
</script>

<style scoped>
.model-details {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.detail-section {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  padding: var(--cg-space-3);
}

.section-header {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  font-size: var(--cg-font-size-xs);
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-2) 0;
  padding-bottom: var(--cg-space-2);
  border-bottom: 1px solid var(--cg-color-border);
}

.section-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border);
  margin-bottom: var(--cg-space-2);
  padding-bottom: var(--cg-space-2);
}

.section-header-row .section-header {
  margin: 0;
  padding-bottom: 0;
  border-bottom: 0;
}

.find-source-btn {
  background: transparent;
  border: 1px solid var(--cg-color-accent);
  color: var(--cg-color-accent);
  padding: 4px 10px;
  font-size: var(--cg-font-size-xs);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.find-source-btn:hover {
  background: var(--cg-color-accent-muted);
}

.detail-row {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-1) 0;
}

.detail-label {
  color: var(--cg-color-text-muted);
  min-width: 100px;
  font-size: var(--cg-font-size-sm);
}

.detail-value {
  color: var(--cg-color-text-primary);
  flex: 1;
  word-break: break-all;
}

.detail-value.mono {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

.copy-btn {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-muted);
  padding: 2px 8px;
  font-size: var(--cg-font-size-xs);
  cursor: pointer;
}

.copy-btn:hover {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
}

.compute-hashes-btn {
  background: transparent;
  border: 1px solid var(--cg-color-accent);
  color: var(--cg-color-accent);
  padding: 4px 10px;
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
}

.compute-hashes-btn:hover:not(:disabled) {
  background: var(--cg-color-accent-muted);
}

.compute-hashes-btn:disabled {
  opacity: 0.6;
  cursor: wait;
}

.hash-error {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
}

.locations-list,
.sources-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.location-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border-left: 2px solid var(--cg-color-accent);
}

.location-path {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  word-break: break-all;
}

.location-modified {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.source-item {
  display: flex;
  gap: var(--cg-space-2);
  align-items: center;
}

.source-type {
  color: var(--cg-color-text-muted);
  text-transform: capitalize;
  flex-shrink: 0;
}

.source-url {
  color: var(--cg-color-accent);
  word-break: break-all;
  font-size: var(--cg-font-size-sm);
  flex: 1;
}

.remove-source-btn {
  background: transparent;
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-muted);
  width: 20px;
  height: 20px;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-source-btn:hover:not(:disabled) {
  background: var(--cg-color-error, #ef4444);
  border-color: var(--cg-color-error, #ef4444);
  color: white;
}

.remove-source-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.empty-state {
  color: var(--cg-color-text-muted);
  font-style: italic;
  padding: var(--cg-space-2);
}

.source-error {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
  margin-top: var(--cg-space-2);
}

.source-success {
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-sm);
  margin-top: var(--cg-space-2);
}

.btn-secondary {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  padding: var(--cg-space-2) var(--cg-space-4);
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
}

.footer-spacer {
  flex: 1;
}

.open-location-btn {
  margin-top: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-muted);
  padding: 4px 12px;
  font-size: var(--cg-font-size-xs);
  cursor: pointer;
  align-self: flex-start;
}

.open-location-btn:hover {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
}

/* Toast styles */
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-accent);
  color: var(--cg-color-text-primary);
  padding: 10px 20px;
  font-size: var(--cg-font-size-sm);
  z-index: 10010;
  animation: toastSlideIn 0.2s ease;
}

.toast.success {
  border-color: var(--cg-color-success, #4ade80);
}

.toast.error {
  border-color: var(--cg-color-error, #ef4444);
}

.toast.info {
  border-color: var(--cg-color-accent);
}

.delete-confirm {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.delete-confirm p {
  margin: 0;
  color: var(--cg-color-text-primary);
  line-height: var(--cg-line-height-normal);
}

.delete-meta {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.delete-meta code {
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  word-break: break-all;
}

.delete-paths {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  padding: var(--cg-space-3);
}

.delete-paths h4 {
  margin: 0 0 var(--cg-space-2) 0;
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
}

.delete-path {
  display: block;
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  word-break: break-all;
  padding: 4px 0;
}

.delete-warning {
  color: var(--cg-color-warning) !important;
  border: 1px solid var(--cg-color-warning);
  background: var(--cg-color-warning-muted);
  padding: var(--cg-space-2);
}

.delete-error {
  color: var(--cg-color-error) !important;
}

@keyframes toastSlideIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>
