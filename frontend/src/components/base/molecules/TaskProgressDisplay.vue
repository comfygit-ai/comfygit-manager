<template>
  <div class="task-progress">
    <ProgressBar :progress="progress" :variant="variant" />
    <div class="progress-info">
      <span class="progress-percentage">{{ progress }}%</span>
      <span class="progress-message">{{ message }}</span>
    </div>

    <!-- Optional: Phase steps display -->
    <div v-if="showSteps && steps.length > 0" class="progress-steps">
      <div
        v-for="step in steps"
        :key="step.id"
        :class="['step', getStepStatus(step.id)]"
      >
        <span class="step-icon">{{ getStepIcon(step.id) }}</span>
        <span class="step-label">{{ step.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBar from '@/components/base/atoms/ProgressBar.vue'

interface Step {
  id: string
  label: string
  progressThreshold: number
  aliases?: string[]
}

interface Props {
  progress: number
  message: string
  currentPhase?: string
  variant?: 'default' | 'success' | 'warning' | 'error'
  showSteps?: boolean
  steps?: Step[]
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  showSteps: false,
  steps: () => []
})

function getStepStatus(stepId: string): 'pending' | 'active' | 'completed' {
  const step = props.steps.find(s => s.id === stepId)
  if (!step) return 'pending'

  if (props.currentPhase === stepId || (step.aliases || []).includes(props.currentPhase || '')) return 'active'
  if (props.progress >= step.progressThreshold) return 'completed'
  return 'pending'
}

function getStepIcon(stepId: string): string {
  const status = getStepStatus(stepId)
  if (status === 'completed') return '✓'
  if (status === 'active') return '⟳'
  return '○'
}
</script>

<style scoped>
.task-progress {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--cg-font-size-sm);
}

.progress-percentage {
  font-weight: var(--cg-font-weight-bold);
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
}

.progress-message {
  color: var(--cg-color-text-secondary);
  text-align: right;
  flex: 1;
  margin-left: var(--cg-space-2);
}

.progress-steps {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  margin-top: var(--cg-space-2);
  padding-top: var(--cg-space-2);
  border-top: 1px solid var(--cg-color-border-subtle);
}

.step {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  transition: all var(--cg-transition-fast);
}

.step.pending { color: var(--cg-color-text-muted); }
.step.active { color: var(--cg-color-accent); font-weight: var(--cg-font-weight-medium); }
.step.completed { color: var(--cg-color-success); }

.step.active .step-icon { animation: spin 1s linear infinite; }

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.step-icon {
  width: 14px;
  text-align: center;
}
</style>
