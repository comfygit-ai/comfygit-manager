<template>
  <BaseModal
    :title="`Model Details: ${details?.filename || 'Loading...'}`"
    size="lg"
    :loading="loading"
    :error="error"
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
              <button v-if="loc.path" class="open-location-btn" @click="openLocation(loc.path)">
                Open File Location
              </button>
            </div>
          </div>
          <div v-else class="empty-state">No locations found</div>
        </section>

        <!-- Sources -->
        <section class="detail-section">
          <h4 class="section-header">Download Sources ({{ details.sources?.length || 0 }})</h4>
          <div v-if="details.sources?.length" class="sources-list">
            <div v-for="(src, idx) in details.sources" :key="idx" class="source-item">
              <span class="source-type">{{ src.type }}:</span>
              <a :href="src.url" target="_blank" class="source-url">{{ src.url }}</a>
            </div>
          </div>
          <div v-else class="empty-state">
            No download sources configured
          </div>

          <!-- Add Source Form -->
          <div class="add-source-form">
            <input
              v-model="newSourceUrl"
              type="text"
              placeholder="Enter download URL (CivitAI, HuggingFace, etc.)"
              class="source-input"
            />
            <button
              class="add-source-btn"
              :disabled="!newSourceUrl.trim() || addingSource"
              @click="addSource"
            >
              {{ addingSource ? 'Adding...' : 'Add Source' }}
            </button>
          </div>
          <p v-if="sourceError" class="source-error">{{ sourceError }}</p>
          <p v-if="sourceSuccess" class="source-success">{{ sourceSuccess }}</p>
        </section>
      </div>
    </template>

    <template #footer>
      <button class="btn-secondary" @click="$emit('close')">Close</button>
    </template>
  </BaseModal>

  <!-- Toast notifications -->
  <Teleport to="body">
    <div v-if="toast" class="toast" :class="toast.type">
      {{ toast.message }}
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseModal from '@/components/base/BaseModal.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelDetails } from '@/types/comfygit'

const props = defineProps<{
  identifier: string
}>()

const emit = defineEmits<{
  close: []
}>()

const { getModelDetails, updateModelSource, openFileLocation } = useComfyGitService()

const details = ref<ModelDetails | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const newSourceUrl = ref('')
const addingSource = ref(false)
const sourceError = ref<string | null>(null)
const sourceSuccess = ref<string | null>(null)

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

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
  showToast('Copied to clipboard!')
}

async function openLocation(path: string) {
  try {
    await openFileLocation(path)
    showToast('Opening file location...')
  } catch (err) {
    showToast('Failed to open location', 'error')
  }
}

async function addSource() {
  if (!newSourceUrl.value.trim() || !details.value) return

  addingSource.value = true
  sourceError.value = null
  sourceSuccess.value = null

  try {
    // Use the standard hash (custom) which is always computed for every model
    await updateModelSource(details.value.hash, newSourceUrl.value.trim())
    sourceSuccess.value = 'Source added successfully!'
    newSourceUrl.value = ''
    // Reload details to show updated sources
    await loadDetails()
  } catch (err) {
    sourceError.value = err instanceof Error ? err.message : 'Failed to add source'
  } finally {
    addingSource.value = false
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
  align-items: baseline;
}

.source-type {
  color: var(--cg-color-text-muted);
  text-transform: capitalize;
}

.source-url {
  color: var(--cg-color-accent);
  word-break: break-all;
  font-size: var(--cg-font-size-sm);
}

.empty-state {
  color: var(--cg-color-text-muted);
  font-style: italic;
  padding: var(--cg-space-2);
}

.add-source-form {
  display: flex;
  gap: var(--cg-space-2);
  margin-top: var(--cg-space-3);
}

.source-input {
  flex: 1;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  padding: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.source-input::placeholder {
  color: var(--cg-color-text-muted);
}

.source-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.add-source-btn {
  background: var(--cg-color-accent);
  border: none;
  color: var(--cg-color-bg-primary);
  padding: var(--cg-space-2) var(--cg-space-3);
  font-size: var(--cg-font-size-sm);
  cursor: pointer;
  white-space: nowrap;
}

.add-source-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.add-source-btn:not(:disabled):hover {
  filter: brightness(1.1);
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
