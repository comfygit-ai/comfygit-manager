<template>
  <div class="resolution-stepper">
    <div class="stepper-header">
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        :class="['step', {
          active: currentStep === step.id,
          completed: isStepCompleted(step.id),
          'in-progress': isStepInProgress(step.id),
          disabled: isStepDisabled(step.id)
        }]"
        @click="handleStepClick(step.id)"
      >
        <div :class="['step-indicator', getStepState(step.id)]">
          <span v-if="isStepCompleted(step.id)" class="step-icon">✓</span>
          <span v-else class="step-number">{{ index + 1 }}</span>
        </div>
        <div class="step-label">{{ step.label }}</div>
        <div v-if="index < steps.length - 1" class="step-connector"></div>
      </div>
    </div>
    <div class="stepper-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Step {
  id: string
  label: string
}

interface StepStats {
  resolved: number
  total: number
}

const props = defineProps<{
  steps: Step[]
  currentStep: string
  completedSteps: string[]
  stepStats?: Record<string, StepStats>
}>()

const emit = defineEmits<{
  (e: 'step-change', stepId: string): void
}>()

function isStepCompleted(stepId: string): boolean {
  // Check if all items in this step are resolved
  if (props.stepStats?.[stepId]) {
    const stats = props.stepStats[stepId]
    return stats.total > 0 && stats.resolved === stats.total
  }
  return props.completedSteps.includes(stepId)
}

function isStepInProgress(stepId: string): boolean {
  // Has some resolutions but not all
  if (props.stepStats?.[stepId]) {
    const stats = props.stepStats[stepId]
    return stats.resolved > 0 && stats.resolved < stats.total
  }
  return false
}

function getStepState(stepId: string): string {
  if (isStepCompleted(stepId)) return 'state-complete'
  if (isStepInProgress(stepId)) return 'state-partial'
  return 'state-pending'
}

function isStepDisabled(stepId: string): boolean {
  // Allow free navigation - no steps are disabled
  return false
}

function handleStepClick(stepId: string) {
  if (!isStepDisabled(stepId)) {
    emit('step-change', stepId)
  }
}
</script>

<style scoped>
.resolution-stepper {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.stepper-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-bottom: 1px solid var(--cg-color-border);
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1;
  position: relative;
  cursor: pointer;
  transition: opacity 0.2s;
}

.step.disabled {
  cursor: not-allowed;
  pointer-events: none;
}

.step.disabled .step-indicator,
.step.disabled .step-label {
  opacity: 0.4;
}

.step-indicator {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cg-color-bg-tertiary);
  border: 2px solid var(--cg-color-border);
  color: var(--cg-color-text-muted);
  font-weight: var(--cg-font-weight-semibold);
  font-size: var(--cg-font-size-xs);
  transition: all 0.2s;
  position: relative;
  z-index: 2;
}

/* State: pending (gray) */
.step-indicator.state-pending {
  background: var(--cg-color-bg-tertiary);
  border-color: var(--cg-color-border);
  color: var(--cg-color-text-muted);
}

/* State: partial/in-progress (orange/warning) */
.step-indicator.state-partial {
  background: var(--cg-color-warning-muted);
  border-color: var(--cg-color-warning);
  color: var(--cg-color-warning);
}

/* State: complete (green) */
.step-indicator.state-complete {
  background: var(--cg-color-success);
  border-color: var(--cg-color-success);
  color: white;
}

/* Active step gets accent color ring */
.step.active .step-indicator {
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted);
  border-color: var(--cg-color-accent);
}

.step-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-align: center;
  font-weight: var(--cg-font-weight-medium);
}

.step.active .step-label {
  color: var(--cg-color-text);
  font-weight: var(--cg-font-weight-semibold);
}

.step-connector {
  position: absolute;
  top: 14px;
  left: calc(50% + 14px);
  right: calc(-50% + 14px);
  height: 2px;
  background: var(--cg-color-border);
  z-index: 1;
}

.stepper-content {
  padding: var(--cg-space-2) var(--cg-space-3);
}
</style>
