<template>
  <teleport to="body">
    <div v-if="show" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">SWITCHING ENVIRONMENTS...</h3>
        </div>

        <div class="modal-body">
          <LifecycleProgressDisplay
            :state="state"
            :progress="progress"
            :state-label="stateLabel"
            :steps="steps"
            :logs="logs"
            log-title="Supervisor Log"
            complete-message="Environment switched. Copy logs if needed, then refresh the page."
          >
            <template v-if="state === 'complete'" #actions>
              <button class="refresh-btn" @click="emit('refresh')">
                Refresh Page
              </button>
            </template>
          </LifecycleProgressDisplay>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LifecycleProgressDisplay from '@/components/base/molecules/LifecycleProgressDisplay.vue'
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

// Steps with status
const steps = computed(() => {
  return [
    { state: 'preparing', label: 'Stopping current environment', icon: '●' },
    { state: 'syncing', label: 'Preparing target environment', icon: '●' },
    { state: 'starting', label: 'Starting new environment', icon: '●' },
    { state: 'validating', label: 'Waiting for server to be ready', icon: '●' }
  ]
})
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
