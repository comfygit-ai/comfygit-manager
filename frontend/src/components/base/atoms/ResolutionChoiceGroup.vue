<template>
  <div class="resolution-choice-group">
    <button
      :class="['choice-btn', 'mine', { selected: modelValue === 'take_base' }]"
      @click="$emit('update:modelValue', 'take_base')"
      :disabled="disabled"
    >
      <span class="choice-icon">◀</span>
      <span class="choice-label">Keep Mine</span>
    </button>
    <button
      :class="['choice-btn', 'theirs', { selected: modelValue === 'take_target' }]"
      @click="$emit('update:modelValue', 'take_target')"
      :disabled="disabled"
    >
      <span class="choice-label">Keep Theirs</span>
      <span class="choice-icon">▶</span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: 'take_base' | 'take_target' | null
  disabled?: boolean
}>()

defineEmits<{
  'update:modelValue': ['take_base' | 'take_target']
}>()
</script>

<style scoped>
.resolution-choice-group {
  display: flex;
  gap: var(--cg-space-2);
}

.choice-btn {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
  padding: var(--cg-space-2) var(--cg-space-3);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-sm);
  background: var(--cg-color-bg-secondary);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  cursor: pointer;
  transition: all 0.15s ease;
}

.choice-btn:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-text-muted);
}

.choice-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.choice-btn.selected {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-accent-muted);
  color: var(--cg-color-accent);
}

.choice-btn.mine.selected {
  border-color: var(--cg-color-info);
  background: var(--cg-color-info-muted);
  color: var(--cg-color-info);
}

.choice-btn.theirs.selected {
  border-color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.choice-icon {
  font-size: var(--cg-font-size-xs);
}
</style>
