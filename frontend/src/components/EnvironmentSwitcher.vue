<template>
  <div class="environment-switcher">
    <div class="section-header">
      <h3>Environment</h3>
    </div>

    <div v-if="!isManaged" class="warning-banner">
      ⚠️ Not in ComfyGit workspace. Environment switching is disabled.
    </div>
    <div v-else-if="orchestratorActive && !isSupervised" class="warning-banner">
      ⚠️ An orchestrator is managing this workspace from another ComfyUI instance.
      Switch environments from that instance, or stop the orchestrator first.
    </div>

    <div v-if="isManaged" class="env-selector">
      <select
        v-model="selectedEnv"
        :disabled="switching || environments.length === 0"
        class="env-dropdown"
      >
        <option
          v-for="env in environments"
          :key="env.name"
          :value="env.name"
        >
          {{ env.name }} {{ env.is_current ? '(current)' : '' }}
        </option>
      </select>
      <button
        @click="handleSwitch"
        :disabled="!canSwitch"
        class="btn-primary switch-btn"
      >
        Switch
      </button>
    </div>

    <!-- Progress Bar (shown during switch) -->
    <div v-if="switching" class="switch-progress">
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: switchStatus.progress + '%' }"
        ></div>
      </div>
      <p class="status-message">{{ switchStatus.message }}</p>
      <p class="status-phase">{{ switchStatus.state }}</p>
    </div>

    <!-- Critical Failure Modal -->
    <div v-if="criticalFailure" class="modal-overlay" @click="dismissModal">
      <div class="modal-content" @click.stop>
        <h3>❌ Critical Error</h3>
        <p>{{ criticalFailure.message }}</p>
        <p v-if="criticalFailure.error" class="error-details">{{ criticalFailure.error }}</p>

        <div v-if="criticalFailure.recovery_command" class="recovery-section">
          <h4>Manual Recovery Required:</h4>
          <pre class="recovery-command">{{ criticalFailure.recovery_command }}</pre>
          <button @click="copyRecoveryCommand" class="btn-secondary">Copy Command</button>
        </div>

        <button @click="dismissModal" class="btn-secondary">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'

const emit = defineEmits<{
  toast: [message: string, type: 'success' | 'error' | 'warning' | 'info']
}>()

const service = useComfyGitService()

// State
const environments = ref<Array<{name: string, is_current: boolean}>>([])
const currentEnv = ref<string>('')
const selectedEnv = ref<string>('')
const switching = ref(false)
const switchStatus = ref({
  state: 'idle',
  progress: 0,
  message: '',
  target_env: null,
  source_env: null
})
const criticalFailure = ref<any>(null)
const isManaged = ref(true)
const orchestratorActive = ref(false)
const isSupervised = ref(false)

// Computed
const canSwitch = computed(() => {
  return isManaged.value &&
         !(orchestratorActive.value && !isSupervised.value) &&
         selectedEnv.value !== currentEnv.value &&
         !switching.value &&
         environments.value.length > 0
})

// Polling
let statusPollInterval: number | null = null

// Methods
async function loadEnvironments() {
  try {
    const response = await service.listEnvironments()
    environments.value = response.environments || []
    const current = response.current || environments.value.find((env) => env.is_current)?.name || ''
    currentEnv.value = current
    selectedEnv.value = current
    isManaged.value = response.is_managed !== false
    orchestratorActive.value = response.orchestrator_active === true
    isSupervised.value = response.is_supervised === true
  } catch (error) {
    console.error('Failed to load environments:', error)
    emit('toast', 'Failed to load environments', 'error')
  }
}

async function handleSwitch() {
  if (!canSwitch.value) return

  try {
    switching.value = true

    await service.switchEnvironment(selectedEnv.value)

    // Start polling for status
    startStatusPolling()

  } catch (error: any) {
    console.error('Failed to initiate switch:', error)
    switching.value = false
    emit('toast', `Failed to switch: ${error.message}`, 'error')
  }
}

function startStatusPolling() {
  if (statusPollInterval) return

  statusPollInterval = window.setInterval(async () => {
    try {
      const status = await service.getSwitchProgress()
      if (!status) {
        return
      }

      switchStatus.value = status

      // Handle terminal states
      if (status.state === 'complete') {
        switching.value = false
        currentEnv.value = status.target_env
        selectedEnv.value = status.target_env
        stopStatusPolling()
        emit('toast', `Switched to ${status.target_env}`, 'success')
        // Reload environments to update current
        await loadEnvironments()

      } else if (status.state === 'rolled_back') {
        switching.value = false
        selectedEnv.value = currentEnv.value // Reset selection
        stopStatusPolling()
        emit('toast', 'Switch failed, restored previous environment', 'warning')

      } else if (status.state === 'critical_failure') {
        switching.value = false
        criticalFailure.value = status
        stopStatusPolling()
      }

    } catch (error) {
      console.error('Failed to poll switch status:', error)
      // Continue polling (server might be restarting)
    }
  }, 1000) // Poll every 1 second
}

function stopStatusPolling() {
  if (statusPollInterval) {
    clearInterval(statusPollInterval)
    statusPollInterval = null
  }
}

function copyRecoveryCommand() {
  if (criticalFailure.value?.recovery_command) {
    navigator.clipboard.writeText(criticalFailure.value.recovery_command)
    emit('toast', 'Recovery command copied to clipboard', 'info')
  }
}

function dismissModal() {
  criticalFailure.value = null
}

// Lifecycle
onMounted(() => {
  loadEnvironments()
})

onUnmounted(() => {
  stopStatusPolling()
})
</script>

<style scoped>
.environment-switcher {
  padding: 16px;
  border-bottom: 1px solid var(--border-color, #e0e0e0);
}

.section-header {
  margin-bottom: 12px;
}

.section-header h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color, #333);
}

.env-selector {
  display: flex;
  gap: 8px;
  align-items: center;
}

.env-dropdown {
  flex: 1;
  padding: 6px 8px;
  border: 1px solid var(--border-color, #ccc);
  border-radius: 4px;
  background: var(--bg-color, white);
  color: var(--text-color, #333);
  font-size: 13px;
}

.env-dropdown:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.switch-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background: var(--primary-color, #007bff);
  color: white;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
}

.switch-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.switch-btn:not(:disabled):hover {
  background: var(--primary-hover-color, #0056b3);
}

.switch-progress {
  margin-top: 12px;
  padding: 12px;
  background: var(--bg-secondary, #f5f5f5);
  border-radius: 4px;
}

.progress-bar {
  height: 20px;
  background: var(--progress-bg, #e0e0e0);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  transition: width 0.3s ease;
}

.status-message {
  margin: 8px 0 0;
  font-weight: 500;
  font-size: 13px;
  color: var(--text-color, #333);
}

.status-phase {
  margin: 4px 0 0;
  font-size: 11px;
  color: var(--text-secondary, #666);
  text-transform: uppercase;
}

.warning-banner {
  padding: 8px 12px;
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 4px;
  font-size: 13px;
  color: #856404;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background: var(--bg-color, white);
  padding: 24px;
  border-radius: 8px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-content h3 {
  margin: 0 0 16px;
  color: #d32f2f;
}

.error-details {
  margin: 12px 0;
  padding: 8px;
  background: #ffebee;
  border-radius: 4px;
  font-size: 12px;
  color: #c62828;
}

.recovery-section {
  margin-top: 16px;
  padding: 16px;
  background: #fff3cd;
  border-radius: 4px;
}

.recovery-section h4 {
  margin: 0 0 8px;
  font-size: 14px;
}

.recovery-command {
  padding: 12px;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  overflow-x: auto;
  margin: 8px 0;
}

.btn-secondary {
  padding: 6px 12px;
  border: 1px solid var(--border-color, #ccc);
  border-radius: 4px;
  background: var(--bg-color, white);
  color: var(--text-color, #333);
  font-size: 13px;
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--bg-secondary, #f5f5f5);
}
</style>
