<template>
  <BaseModal
    title="ADD CUSTOM WORKER"
    size="md"
    @close="$emit('close')"
  >
    <template #body>
      <div class="add-worker-content">
        <!-- Discovered Workers Section -->
        <div v-if="filteredDiscovered.length > 0" class="discovered-section">
          <div class="section-label">Discovered Workers</div>
          <div class="discovered-list">
            <div
              v-for="worker in filteredDiscovered"
              :key="`${worker.host}:${worker.port}`"
              class="discovered-item"
            >
              <div class="discovered-info">
                <span class="discovered-name">{{ worker.name }}</span>
                <span class="discovered-address">({{ worker.host }}:{{ worker.port }})</span>
                <span v-if="worker.gpu_info" class="discovered-gpu">{{ worker.gpu_info }}</span>
              </div>
              <ActionButton
                variant="secondary"
                size="xs"
                @click="selectDiscovered(worker)"
              >
                Add
              </ActionButton>
            </div>
          </div>
        </div>

        <div v-if="filteredDiscovered.length > 0" class="divider">
          <span>Or Enter Manually</span>
        </div>

        <!-- Manual Entry Form -->
        <div class="manual-form">
          <div class="form-row">
            <label class="form-label">Worker Name</label>
            <input
              v-model="form.name"
              type="text"
              class="form-input"
              placeholder="my-worker"
            />
          </div>

          <div class="form-row-inline">
            <div class="form-field flex-2">
              <label class="form-label">Host</label>
              <input
                v-model="form.host"
                type="text"
                class="form-input"
                placeholder="192.168.1.50"
              />
            </div>
            <div class="form-field flex-1">
              <label class="form-label">Port</label>
              <input
                v-model.number="form.port"
                type="number"
                class="form-input"
                placeholder="9090"
              />
            </div>
          </div>

          <div class="form-row">
            <label class="form-label">API Key</label>
            <div class="api-key-wrapper">
              <input
                v-model="form.apiKey"
                :type="showApiKey ? 'text' : 'password'"
                class="form-input"
                placeholder="cg_wk_*********************************"
              />
              <button
                class="toggle-visibility"
                @click="showApiKey = !showApiKey"
                type="button"
              >
                {{ showApiKey ? '👁' : '👁‍🗨' }}
              </button>
            </div>
            <div class="form-help">
              <span class="help-icon">ⓘ</span>
              Run <code>cg-deploy worker setup</code> on the worker to get the key
            </div>
          </div>

          <!-- Test Result -->
          <div v-if="testResult" :class="['test-result', testResult.type]">
            <span class="result-icon">{{ testResult.type === 'success' ? '✓' : '✕' }}</span>
            <div class="result-content">
              <span class="result-message">{{ testResult.message }}</span>
              <span v-if="testResult.gpu_info" class="result-detail">GPU: {{ testResult.gpu_info }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="modal-actions">
        <ActionButton
          variant="ghost"
          size="sm"
          :loading="isTesting"
          :disabled="!canTest || isTesting"
          @click="handleTest"
        >
          Test Connection
        </ActionButton>
        <ActionButton
          variant="primary"
          size="sm"
          :loading="isAdding"
          :disabled="!canAdd || isAdding"
          @click="handleAdd"
        >
          Add Worker
        </ActionButton>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { DiscoveredWorker, AddWorkerRequest } from '@/types/comfygit'
import BaseModal from '@/components/base/BaseModal.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'

const props = defineProps<{
  discoveredWorkers: DiscoveredWorker[]
  isScanning?: boolean
}>()

const emit = defineEmits<{
  close: []
  add: [request: AddWorkerRequest]
  scan: []
}>()

const { testWorkerConnection } = useComfyGitService()

// Form state
const form = reactive({
  name: '',
  host: '',
  port: 9090,
  apiKey: ''
})

const showApiKey = ref(false)
const isTesting = ref(false)
const isAdding = ref(false)
const testResult = ref<{
  type: 'success' | 'error'
  message: string
  gpu_info?: string
} | null>(null)

// Filter out workers that are already being shown (name filled in)
const filteredDiscovered = computed(() => {
  return props.discoveredWorkers.filter(w =>
    !(form.host === w.host && form.port === w.port)
  )
})

const canTest = computed(() => {
  return form.host && form.port && form.apiKey
})

const canAdd = computed(() => {
  return form.name && form.host && form.port && form.apiKey
})

function selectDiscovered(worker: DiscoveredWorker) {
  form.name = worker.name
  form.host = worker.host
  form.port = worker.port
  testResult.value = null
}

async function handleTest() {
  if (!canTest.value) return

  isTesting.value = true
  testResult.value = null

  try {
    const result = await testWorkerConnection({
      host: form.host,
      port: form.port,
      api_key: form.apiKey
    })

    if (result.status === 'success') {
      testResult.value = {
        type: 'success',
        message: result.message,
        gpu_info: result.gpu_info
      }
      // Auto-populate name if empty and test succeeded
      if (!form.name && result.gpu_info) {
        form.name = `worker-${form.host.split('.').pop()}`
      }
    } else {
      testResult.value = {
        type: 'error',
        message: result.message
      }
    }
  } catch (err) {
    testResult.value = {
      type: 'error',
      message: err instanceof Error ? err.message : 'Connection test failed'
    }
  } finally {
    isTesting.value = false
  }
}

function handleAdd() {
  if (!canAdd.value) return

  isAdding.value = true
  emit('add', {
    name: form.name,
    host: form.host,
    port: form.port,
    api_key: form.apiKey
  })
}
</script>

<style scoped>
.add-worker-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

/* Discovered Section */
.discovered-section {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
}

.section-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin-bottom: var(--cg-space-2);
}

.discovered-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.discovered-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
}

.discovered-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.discovered-name {
  color: var(--cg-color-text-primary);
  font-weight: var(--cg-font-weight-medium);
}

.discovered-address {
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

.discovered-gpu {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--cg-color-border-subtle);
}

/* Form */
.manual-form {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.form-row-inline {
  display: flex;
  gap: var(--cg-space-3);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.flex-1 { flex: 1; }
.flex-2 { flex: 2; }

.form-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.form-input {
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.form-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.api-key-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.api-key-wrapper .form-input {
  width: 100%;
  padding-right: 40px;
}

.toggle-visibility {
  position: absolute;
  right: 8px;
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
}

.toggle-visibility:hover {
  color: var(--cg-color-text-primary);
}

.form-help {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.help-icon {
  font-size: 10px;
}

.form-help code {
  padding: 1px 4px;
  background: var(--cg-color-bg-secondary);
  font-family: var(--cg-font-mono);
  color: var(--cg-color-accent);
}

/* Test Result */
.test-result {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
}

.test-result.success {
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
}

.test-result.error {
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
}

.result-icon {
  font-weight: bold;
}

.test-result.success .result-icon {
  color: var(--cg-color-success);
}

.test-result.error .result-icon {
  color: var(--cg-color-error);
}

.result-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.result-message {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
}

.result-detail {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
}

/* Modal Actions */
.modal-actions {
  display: flex;
  gap: var(--cg-space-2);
  justify-content: flex-end;
}
</style>
