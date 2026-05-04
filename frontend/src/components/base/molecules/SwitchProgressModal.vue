<template>
  <teleport to="body">
    <div v-if="show" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">SWITCHING ENVIRONMENTS...</h3>
        </div>

        <div class="modal-body">
          <ProgressBar
            :progress="progress"
            :variant="progressVariant"
          />

          <div class="progress-info">
            <div class="progress-percentage">{{ progress }}%</div>
            <div class="progress-state">{{ stateLabel }}</div>
          </div>

          <div class="switch-steps">
            <div
              v-for="step in steps"
              :key="step.state"
              :class="['switch-step', step.status]"
            >
              <span class="step-icon">{{ step.icon }}</span>
              <span class="step-label">{{ step.label }}</span>
            </div>
          </div>

          <div v-if="logEntries.length" class="switch-log">
            <div class="switch-log-title">Supervisor Log</div>
            <div
              ref="logLinesRef"
              class="switch-log-lines"
              @scroll="handleLogScroll"
            >
              <div
                v-for="(entry, index) in logEntries"
                :key="`${entry.timestamp || 'log'}-${index}`"
                class="switch-log-line"
              >
                <span class="log-level">{{ (entry.level || 'info').toUpperCase() }}</span>
                <span class="log-message">{{ entry.message }}</span>
              </div>
            </div>
          </div>

          <p :class="['progress-warning', { complete: state === 'complete' }]">
            <template v-if="state === 'complete'">
              Environment switched. Copy logs if needed, then refresh the page.
            </template>
            <template v-else>
              Please wait, do not close this window.
            </template>
          </p>

          <div v-if="state === 'complete'" class="completion-actions">
            <button class="refresh-btn" @click="emit('refresh')">
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import ProgressBar from '@/components/base/atoms/ProgressBar.vue'
import type { SwitchLogEntry } from '@/types/comfygit'

const props = defineProps<{
  show: boolean
  state: string        // e.g., 'preparing', 'syncing', 'starting', 'validating', 'complete'
  progress: number     // 0-100
  message?: string
  logs?: SwitchLogEntry[]
}>()

const emit = defineEmits<{
  refresh: []
}>()

const logLinesRef = ref<HTMLElement | null>(null)
const shouldFollowLogs = ref(true)

// Map states to human-readable labels
const stateLabel = computed(() => {
  const labels: Record<string, string> = {
    idle: 'Idle',
    preparing: 'Stopping current environment...',
    syncing: 'Preparing target environment...',
    starting: 'Starting new environment...',
    validating: 'Waiting for server to be ready...',
    complete: 'Switch complete!',
    rolled_back: 'Switch failed, restored previous environment',
    critical_failure: 'Critical error occurred'
  }
  return props.message || labels[props.state] || props.state
})

// Progress bar variant based on state
const progressVariant = computed(() => {
  if (props.state === 'complete') return 'success'
  if (props.state === 'critical_failure' || props.state === 'rolled_back') return 'error'
  return 'default'
})

// Steps with status
const steps = computed(() => {
  const allSteps = [
    { state: 'preparing', label: 'Stopping current environment', icon: '●' },
    { state: 'syncing', label: 'Preparing target environment', icon: '●' },
    { state: 'starting', label: 'Starting new environment', icon: '●' },
    { state: 'validating', label: 'Waiting for server to be ready', icon: '●' }
  ]

  const currentStateIndex = props.state === 'complete'
    ? allSteps.length
    : allSteps.findIndex(s => s.state === props.state)

  return allSteps.map((step, index) => {
    let status = 'pending'
    let icon = '○'

    if (index < currentStateIndex) {
      status = 'completed'
      icon = '✓'
    } else if (index === currentStateIndex) {
      status = 'active'
      icon = '⟳'
    }

    return {
      ...step,
      status,
      icon
    }
  })
})

const logEntries = computed(() => props.logs || [])

function handleLogScroll() {
  const el = logLinesRef.value
  if (!el) return
  const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
  shouldFollowLogs.value = distanceFromBottom < 24
}

watch(
  () => props.logs?.length || 0,
  async () => {
    if (!shouldFollowLogs.value) return
    await nextTick()
    const el = logLinesRef.value
    if (el) {
      el.scrollTop = el.scrollHeight
    }
  }
)
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10006;
  backdrop-filter: blur(3px);
}

.modal-content {
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-accent);
  border-radius: var(--cg-radius-lg);
  box-shadow: var(--cg-shadow-xl), 0 0 20px var(--cg-color-accent-muted);
  max-width: 620px;
  width: 90%;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  padding: var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  text-align: center;
}

.modal-title {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.modal-body {
  padding: var(--cg-space-5);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--cg-space-2);
}

.progress-percentage {
  font-size: var(--cg-font-size-xl);
  font-weight: var(--cg-font-weight-bold);
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
}

.progress-state {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  text-align: right;
  flex: 1;
}

.switch-steps {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-sm);
}

.switch-step {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  transition: all var(--cg-transition-fast);
}

.switch-step.pending {
  color: var(--cg-color-text-muted);
}

.switch-step.pending .step-icon {
  color: var(--cg-color-text-muted);
}

.switch-step.active {
  color: var(--cg-color-accent);
  font-weight: var(--cg-font-weight-medium);
}

.switch-step.active .step-icon {
  color: var(--cg-color-accent);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.switch-step.completed {
  color: var(--cg-color-success);
}

.switch-step.completed .step-icon {
  color: var(--cg-color-success);
}

.step-icon {
  flex-shrink: 0;
  font-size: var(--cg-font-size-base);
  width: 16px;
  display: inline-block;
  text-align: center;
}

.step-label {
  flex: 1;
}

.switch-log {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-sm);
  height: 188px;
  min-height: 188px;
}

.switch-log-title {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.switch-log-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-height: 0;
  overflow: auto;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

.switch-log-line {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: var(--cg-space-2);
  color: var(--cg-color-text-secondary);
}

.log-level {
  color: var(--cg-color-accent);
}

.log-message {
  min-width: 0;
  overflow-wrap: anywhere;
}

.progress-warning {
  margin: 0;
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-info-muted);
  border: 1px solid var(--cg-color-info);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-info);
  text-align: center;
}

.progress-warning.complete {
  background: var(--cg-color-success-muted);
  border-color: var(--cg-color-success);
  color: var(--cg-color-success);
}

.completion-actions {
  display: flex;
  justify-content: flex-end;
}

.refresh-btn {
  padding: var(--cg-space-2) var(--cg-space-4);
  background: var(--cg-color-accent);
  border: 1px solid var(--cg-color-accent);
  border-radius: var(--cg-radius-sm);
  color: var(--cg-color-bg-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
}

.refresh-btn:hover {
  background: var(--cg-color-accent-hover);
  border-color: var(--cg-color-accent-hover);
}
</style>
