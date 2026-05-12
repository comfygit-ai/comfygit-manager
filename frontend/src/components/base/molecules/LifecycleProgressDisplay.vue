<template>
  <div class="lifecycle-progress">
    <ProgressBar
      :progress="boundedProgress"
      :variant="progressVariant"
    />

    <div class="progress-info">
      <div class="progress-percentage">{{ boundedProgress }}%</div>
      <div class="progress-state">{{ stateLabel }}</div>
    </div>

    <div v-if="steps.length" class="lifecycle-steps">
      <div
        v-for="step in renderedSteps"
        :key="step.state"
        :class="['lifecycle-step', step.status]"
      >
        <span class="step-icon">{{ step.icon }}</span>
        <span class="step-label">{{ step.label }}</span>
      </div>
    </div>

    <div class="lifecycle-log">
      <div class="lifecycle-log-title">{{ logTitle }}</div>
      <div
        ref="logLinesRef"
        class="lifecycle-log-lines"
        @scroll="handleLogScroll"
      >
        <div
          v-if="!logEntries.length"
          class="lifecycle-log-empty"
        >
          Waiting for log output...
        </div>
        <div
          v-for="(entry, index) in logEntries"
          :key="`${entry.timestamp || 'log'}-${index}`"
          class="lifecycle-log-line"
        >
          <span class="log-level">{{ (entry.level || 'info').toUpperCase() }}</span>
          <span class="log-message">{{ entry.message }}</span>
        </div>
      </div>
    </div>

    <p :class="['progress-warning', { complete: isComplete, error: isError }]">
      <slot name="message">
        {{ statusMessage }}
      </slot>
    </p>

    <div v-if="$slots.actions" class="completion-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import ProgressBar from '@/components/base/atoms/ProgressBar.vue'
import type { SwitchLogEntry } from '@/types/comfygit'

interface LifecycleStep {
  state: string
  label: string
  aliases?: string[]
  progressThreshold?: number
}

const props = withDefaults(defineProps<{
  state: string
  progress: number
  stateLabel?: string
  logs?: SwitchLogEntry[]
  steps?: LifecycleStep[]
  logTitle?: string
  completeStates?: string[]
  errorStates?: string[]
  activeMessage?: string
  completeMessage?: string
  errorMessage?: string
}>(), {
  logs: () => [],
  steps: () => [],
  logTitle: 'Log',
  completeStates: () => ['complete'],
  errorStates: () => ['error', 'rolled_back', 'critical_failure'],
  activeMessage: 'Please wait, do not close this window.',
  completeMessage: 'Completed. Copy logs if needed before closing.',
  errorMessage: 'Operation failed. Review logs for details.'
})

const logLinesRef = ref<HTMLElement | null>(null)
const shouldFollowLogs = ref(true)

const boundedProgress = computed(() => Math.max(0, Math.min(100, Math.round(props.progress || 0))))
const logEntries = computed(() => props.logs || [])
const isComplete = computed(() => props.completeStates.includes(props.state))
const isError = computed(() => props.errorStates.includes(props.state))
const stateLabel = computed(() => props.stateLabel || props.state)

const progressVariant = computed(() => {
  if (isComplete.value) return 'success'
  if (isError.value) return 'error'
  return 'default'
})

const renderedSteps = computed(() => {
  const currentStateIndex = (() => {
    if (isComplete.value) return props.steps.length

    const exactIndex = props.steps.findIndex(step => {
      return step.state === props.state || (step.aliases || []).includes(props.state)
    })
    if (exactIndex >= 0) return exactIndex

    const hasThresholds = props.steps.some(step => typeof step.progressThreshold === 'number')
    if (!hasThresholds) return -1

    const thresholdIndex = props.steps.findIndex(step => {
      return typeof step.progressThreshold === 'number' && boundedProgress.value < step.progressThreshold
    })
    return thresholdIndex >= 0 ? thresholdIndex : props.steps.length
  })()

  return props.steps.map((step, index) => {
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

const statusMessage = computed(() => {
  if (isComplete.value) return props.completeMessage
  if (isError.value) return props.errorMessage
  return props.activeMessage
})

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
.lifecycle-progress {
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
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xl);
  font-weight: var(--cg-font-weight-bold);
}

.progress-state {
  flex: 1;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  text-align: right;
}

.lifecycle-steps {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-sm);
}

.lifecycle-step {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  transition: all var(--cg-transition-fast);
}

.lifecycle-step.pending {
  color: var(--cg-color-text-muted);
}

.lifecycle-step.active {
  color: var(--cg-color-accent);
  font-weight: var(--cg-font-weight-medium);
}

.lifecycle-step.active .step-icon {
  animation: spin 1s linear infinite;
}

.lifecycle-step.completed {
  color: var(--cg-color-success);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.step-icon {
  flex-shrink: 0;
  width: 16px;
  text-align: center;
}

.step-label {
  flex: 1;
}

.lifecycle-log {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  height: 188px;
  min-height: 188px;
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-sm);
}

.lifecycle-log-title {
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  letter-spacing: var(--cg-letter-spacing-wide);
  text-transform: uppercase;
}

.lifecycle-log-lines {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
  min-height: 0;
  overflow: auto;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

.lifecycle-log-empty {
  color: var(--cg-color-text-muted);
}

.lifecycle-log-line {
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
  color: var(--cg-color-info);
  background: var(--cg-color-info-muted);
  border: 1px solid var(--cg-color-info);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
  text-align: center;
}

.progress-warning.complete {
  color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
  border-color: var(--cg-color-success);
}

.progress-warning.error {
  color: var(--cg-color-error);
  background: var(--cg-color-error-muted);
  border-color: var(--cg-color-error);
}

.completion-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--cg-space-2);
}
</style>
