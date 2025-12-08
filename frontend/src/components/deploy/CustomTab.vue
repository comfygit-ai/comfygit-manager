<template>
  <div class="custom-tab">
    <!-- Workers Section Header -->
    <div class="section-header">
      <span class="section-title">CUSTOM WORKERS</span>
      <div class="section-actions">
        <ActionButton
          variant="ghost"
          size="xs"
          :loading="isScanning"
          :disabled="isScanning"
          @click="handleScan"
        >
          Scan Network
        </ActionButton>
        <ActionButton
          variant="secondary"
          size="xs"
          @click="showAddModal = true"
        >
          + Add
        </ActionButton>
      </div>
    </div>

    <!-- Workers Content -->
    <div class="workers-content">
      <!-- Loading state -->
      <div v-if="isLoading && workers.length === 0" class="loading-state">
        <span class="spinner"></span>
        Loading workers...
      </div>

      <!-- Empty state -->
      <div v-else-if="workers.length === 0" class="empty-state">
        <div class="empty-card">
          <span class="empty-text">No workers registered yet</span>
          <p class="empty-help">
            To add a custom worker:
          </p>
          <ol class="setup-steps">
            <li>On your GPU machine, run:<br>
              <code>cg-deploy worker setup</code><br>
              <code>cg-deploy worker up --broadcast</code>
            </li>
            <li>Click "Scan Network" above or "Add" to enter manually</li>
          </ol>
        </div>
      </div>

      <!-- Workers list -->
      <div v-else class="workers-list">
        <WorkerCard
          v-for="worker in workers"
          :key="worker.name"
          :worker="worker"
          :is-action-loading="actionLoadingWorker === worker.name"
          @deploy="handleDeploy"
          @remove="handleRemove"
        />
      </div>
    </div>

    <!-- Scan Result Banner -->
    <div v-if="scanResult" :class="['scan-result', scanResult.type]">
      <span class="scan-icon">{{ scanResult.type === 'success' ? '✓' : 'ⓘ' }}</span>
      <span class="scan-message">{{ scanResult.message }}</span>
      <button class="dismiss-btn" @click="scanResult = null">×</button>
    </div>

    <!-- Discovered Workers Modal (from scan) -->
    <DiscoveredWorkersModal
      v-if="showDiscoveredModal"
      :workers="discoveredWorkers"
      @close="showDiscoveredModal = false"
      @add="handleAddWorkerFromDiscovered"
    />

    <!-- Add Worker Modal (manual entry) -->
    <AddWorkerModal
      v-if="showAddModal"
      @close="showAddModal = false"
      @add="handleAddWorker"
    />

    <!-- Deploy to Worker Modal -->
    <DeployToWorkerModal
      v-if="deployingToWorker"
      :worker="deployingToWorker"
      @close="deployingToWorker = null"
      @toast="(msg, type) => emit('toast', msg, type)"
      @deployed="handleDeployed"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { CustomWorker, DiscoveredWorker, AddWorkerRequest } from '@/types/comfygit'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import WorkerCard from './WorkerCard.vue'
import AddWorkerModal from './AddWorkerModal.vue'
import DiscoveredWorkersModal from './DiscoveredWorkersModal.vue'
import DeployToWorkerModal from './DeployToWorkerModal.vue'

const emit = defineEmits<{
  toast: [message: string, type: 'info' | 'success' | 'warning' | 'error']
  deployed: []
}>()

const {
  getCustomWorkers,
  addCustomWorker,
  removeCustomWorker,
  scanForWorkers
} = useComfyGitService()

// State
const workers = ref<CustomWorker[]>([])
const discoveredWorkers = ref<DiscoveredWorker[]>([])
const isLoading = ref(false)
const isScanning = ref(false)
const actionLoadingWorker = ref<string | null>(null)

// Modals
const showAddModal = ref(false)
const showDiscoveredModal = ref(false)
const deployingToWorker = ref<CustomWorker | null>(null)

// Scan feedback
const scanResult = ref<{ type: 'success' | 'info'; message: string } | null>(null)

async function loadWorkers() {
  isLoading.value = true
  try {
    const result = await getCustomWorkers()
    workers.value = result.workers
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to load workers', 'error')
  } finally {
    isLoading.value = false
  }
}

async function handleScan() {
  isScanning.value = true
  scanResult.value = null
  try {
    const result = await scanForWorkers()

    // Filter out already registered workers
    const newWorkers = result.discovered.filter(
      d => !workers.value.some(w => w.host === d.host && w.port === d.port)
    )

    discoveredWorkers.value = newWorkers

    if (newWorkers.length > 0) {
      // Open discovered workers modal
      showDiscoveredModal.value = true
    } else if (result.discovered.length > 0) {
      scanResult.value = {
        type: 'info',
        message: 'All discovered workers are already registered'
      }
    } else {
      scanResult.value = {
        type: 'info',
        message: 'No workers found on the network. Make sure workers are running with --broadcast'
      }
    }
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Network scan failed', 'error')
  } finally {
    isScanning.value = false
  }
}

async function handleAddWorker(request: AddWorkerRequest) {
  try {
    await addCustomWorker(request)
    emit('toast', `Worker '${request.name}' added`, 'success')
    showAddModal.value = false
    await loadWorkers()
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to add worker', 'error')
  }
}

async function handleAddWorkerFromDiscovered(request: AddWorkerRequest) {
  try {
    await addCustomWorker(request)
    emit('toast', `Worker '${request.name}' added`, 'success')
    showDiscoveredModal.value = false
    await loadWorkers()
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to add worker', 'error')
  }
}

async function handleRemove(workerName: string) {
  actionLoadingWorker.value = workerName
  try {
    await removeCustomWorker(workerName)
    emit('toast', `Worker '${workerName}' removed`, 'success')
    await loadWorkers()
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to remove worker', 'error')
  } finally {
    actionLoadingWorker.value = null
  }
}

function handleDeploy(worker: CustomWorker) {
  deployingToWorker.value = worker
}

function handleDeployed() {
  deployingToWorker.value = null
  emit('deployed')
}

onMounted(() => {
  loadWorkers()
})
</script>

<style scoped>
.custom-tab {
  padding: var(--cg-space-3);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--cg-space-3);
}

.section-title {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.section-actions {
  display: flex;
  gap: var(--cg-space-2);
}

.workers-content {
  /* Container for worker list content */
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
}

.loading-state .spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: var(--cg-space-2);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-state {
  padding: var(--cg-space-2);
}

.empty-card {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
}

.empty-text {
  display: block;
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  margin-bottom: var(--cg-space-3);
}

.empty-help {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin: 0 0 var(--cg-space-2) 0;
}

.setup-steps {
  margin: 0;
  padding-left: var(--cg-space-4);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  line-height: 1.6;
}

.setup-steps li {
  margin-bottom: var(--cg-space-2);
}

.setup-steps code {
  display: inline-block;
  margin-top: var(--cg-space-1);
  padding: var(--cg-space-1) var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-accent);
}

.workers-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

/* Scan Result Banner */
.scan-result {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  margin-top: var(--cg-space-3);
  font-size: var(--cg-font-size-xs);
}

.scan-result.success {
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
}

.scan-result.info {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
}

.scan-icon {
  flex-shrink: 0;
}

.scan-result.success .scan-icon {
  color: var(--cg-color-success);
}

.scan-message {
  flex: 1;
  color: var(--cg-color-text-primary);
}

.dismiss-btn {
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 0 var(--cg-space-1);
  font-size: var(--cg-font-size-md);
}

.dismiss-btn:hover {
  color: var(--cg-color-text-primary);
}
</style>
