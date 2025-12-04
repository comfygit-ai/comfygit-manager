<template>
  <BaseModal
    :title="`WORKER: ${worker.name}`"
    size="md"
    @close="$emit('close')"
  >
    <template #body>
      <div class="worker-details-content">
        <!-- Connection Section -->
        <div class="section">
          <div class="section-label">CONNECTION</div>
          <div class="detail-card">
            <div class="detail-row">
              <span class="detail-label">Host:</span>
              <span class="detail-value mono">{{ worker.host }}:{{ worker.port }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span :class="['detail-value', 'status', worker.status]">
                {{ worker.status === 'online' ? '● Online' : '○ Offline' }}
              </span>
            </div>
          </div>
        </div>

        <!-- System Info Section -->
        <div v-if="systemInfo" class="section">
          <div class="section-label">SYSTEM INFO</div>
          <div class="detail-card">
            <div class="detail-row">
              <span class="detail-label">GPU:</span>
              <span class="detail-value">{{ systemInfo.gpu.name }} ({{ Math.round(systemInfo.gpu.memory_total_mb / 1024) }}GB)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Mode:</span>
              <span class="detail-value capitalize">{{ systemInfo.default_mode }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Workspace:</span>
              <span class="detail-value mono">{{ systemInfo.workspace_path }}</span>
            </div>
          </div>
        </div>

        <!-- Instances Section -->
        <div class="section">
          <div class="section-header">
            <div class="section-label">INSTANCES ({{ instances.length }})</div>
            <ActionButton
              variant="ghost"
              size="xs"
              :loading="isLoadingInstances"
              @click="loadInstances"
            >
              Refresh
            </ActionButton>
          </div>

          <div v-if="isLoadingInstances && instances.length === 0" class="loading-text">
            Loading instances...
          </div>

          <div v-else-if="instances.length === 0" class="empty-text">
            No instances on this worker
          </div>

          <div v-else class="instances-list">
            <div
              v-for="instance in instances"
              :key="instance.id"
              class="instance-item"
            >
              <div class="instance-info">
                <span :class="['instance-status', instance.status]">
                  {{ getStatusIcon(instance.status) }}
                </span>
                <span class="instance-name">{{ instance.name }}</span>
                <span class="instance-port">:{{ instance.assigned_port }}</span>
                <span class="instance-state">{{ instance.status }}</span>
              </div>
              <div class="instance-actions">
                <ActionButton
                  v-if="instance.status === 'running'"
                  variant="ghost"
                  size="xs"
                  :loading="actionLoadingId === instance.id"
                  @click="handleStop(instance.id)"
                >
                  Stop
                </ActionButton>
                <ActionButton
                  v-if="instance.status === 'stopped'"
                  variant="ghost"
                  size="xs"
                  :loading="actionLoadingId === instance.id"
                  @click="handleStart(instance.id)"
                >
                  Start
                </ActionButton>
                <ActionButton
                  variant="ghost"
                  size="xs"
                  :loading="actionLoadingId === instance.id"
                  @click="handleTerminate(instance.id)"
                >
                  Term
                </ActionButton>
              </div>
            </div>
          </div>
        </div>

        <!-- Port Range Info -->
        <div v-if="portsInfo" class="section">
          <div class="port-info">
            PORT RANGE: {{ portsInfo.port_range.start }}-{{ portsInfo.port_range.end }} ({{ portsInfo.ports_available }} available)
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="modal-actions">
        <ActionButton
          variant="ghost"
          size="sm"
          @click="$emit('close')"
        >
          Disconnect
        </ActionButton>
        <ActionButton
          variant="error"
          size="sm"
          :loading="isRemoving"
          @click="handleRemove"
        >
          Remove Worker
        </ActionButton>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type {
  CustomWorker,
  CustomWorkerSystemInfo,
  WorkerInstance,
  WorkerInstancesResponse
} from '@/types/comfygit'
import BaseModal from '@/components/base/BaseModal.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'

const props = defineProps<{
  worker: CustomWorker
}>()

const emit = defineEmits<{
  close: []
  toast: [message: string, type: 'info' | 'success' | 'warning' | 'error']
  refresh: []
}>()

const {
  getWorkerSystemInfo,
  getWorkerInstances,
  startWorkerInstance,
  stopWorkerInstance,
  terminateWorkerInstance,
  removeCustomWorker
} = useComfyGitService()

// State
const systemInfo = ref<CustomWorkerSystemInfo | null>(null)
const instances = ref<WorkerInstance[]>([])
const portsInfo = ref<Pick<WorkerInstancesResponse, 'port_range' | 'ports_available'> | null>(null)
const isLoadingInfo = ref(false)
const isLoadingInstances = ref(false)
const actionLoadingId = ref<string | null>(null)
const isRemoving = ref(false)

function getStatusIcon(status: string): string {
  switch (status) {
    case 'running': return '●'
    case 'stopped': return '○'
    case 'deploying': return '⟳'
    case 'error': return '✕'
    default: return '?'
  }
}

async function loadSystemInfo() {
  if (props.worker.status !== 'online') return

  isLoadingInfo.value = true
  try {
    systemInfo.value = await getWorkerSystemInfo(props.worker.name)
  } catch {
    emit('toast', 'Failed to load system info', 'error')
  } finally {
    isLoadingInfo.value = false
  }
}

async function loadInstances() {
  if (props.worker.status !== 'online') return

  isLoadingInstances.value = true
  try {
    const result = await getWorkerInstances(props.worker.name)
    instances.value = result.instances
    portsInfo.value = {
      port_range: result.port_range,
      ports_available: result.ports_available
    }
  } catch {
    emit('toast', 'Failed to load instances', 'error')
  } finally {
    isLoadingInstances.value = false
  }
}

async function handleStart(instanceId: string) {
  actionLoadingId.value = instanceId
  try {
    await startWorkerInstance(props.worker.name, instanceId)
    emit('toast', 'Instance starting...', 'success')
    await loadInstances()
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to start instance', 'error')
  } finally {
    actionLoadingId.value = null
  }
}

async function handleStop(instanceId: string) {
  actionLoadingId.value = instanceId
  try {
    await stopWorkerInstance(props.worker.name, instanceId)
    emit('toast', 'Instance stopped', 'success')
    await loadInstances()
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to stop instance', 'error')
  } finally {
    actionLoadingId.value = null
  }
}

async function handleTerminate(instanceId: string) {
  actionLoadingId.value = instanceId
  try {
    await terminateWorkerInstance(props.worker.name, instanceId)
    emit('toast', 'Instance terminated', 'success')
    await loadInstances()
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to terminate instance', 'error')
  } finally {
    actionLoadingId.value = null
  }
}

async function handleRemove() {
  isRemoving.value = true
  try {
    await removeCustomWorker(props.worker.name)
    emit('toast', `Worker '${props.worker.name}' removed`, 'success')
    emit('refresh')
    emit('close')
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to remove worker', 'error')
  } finally {
    isRemoving.value = false
  }
}

onMounted(() => {
  loadSystemInfo()
  loadInstances()
})
</script>

<style scoped>
.worker-details-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.detail-card {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.detail-row {
  display: flex;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.detail-label {
  color: var(--cg-color-text-muted);
  min-width: 80px;
}

.detail-value {
  color: var(--cg-color-text-primary);
}

.detail-value.mono {
  font-family: var(--cg-font-mono);
}

.detail-value.capitalize {
  text-transform: capitalize;
}

.detail-value.status.online {
  color: var(--cg-color-success);
}

.detail-value.status.offline {
  color: var(--cg-color-text-muted);
}

.loading-text,
.empty-text {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-align: center;
  padding: var(--cg-space-3);
}

.instances-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-2);
}

.instance-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
}

.instance-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.instance-status {
  font-size: 10px;
}

.instance-status.running {
  color: var(--cg-color-success);
}

.instance-status.stopped {
  color: var(--cg-color-text-muted);
}

.instance-status.deploying {
  color: var(--cg-color-accent);
  animation: spin 1s linear infinite;
}

.instance-status.error {
  color: var(--cg-color-error);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.instance-name {
  color: var(--cg-color-text-primary);
  font-weight: var(--cg-font-weight-medium);
}

.instance-port {
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

.instance-state {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: capitalize;
}

.instance-actions {
  display: flex;
  gap: var(--cg-space-1);
}

.port-info {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  text-align: center;
}

.modal-actions {
  display: flex;
  gap: var(--cg-space-2);
  justify-content: space-between;
}
</style>
