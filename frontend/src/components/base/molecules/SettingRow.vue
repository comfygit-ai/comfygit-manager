<template>
  <div :class="['setting-row', { disabled, stacked }]">
    <div class="setting-info">
      <div class="setting-label">
        {{ label }}
        <span v-if="required" class="required-marker">*</span>
      </div>
      <div v-if="description" class="setting-description">
        {{ description }}
      </div>
    </div>
    <div class="setting-control">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  description?: string
  required?: boolean
  disabled?: boolean
  stacked?: boolean
}>(), {
  required: false,
  disabled: false,
  stacked: false
})
</script>

<style scoped>
.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--cg-space-4);
  padding: var(--cg-space-3) 0;
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.setting-row:last-child {
  border-bottom: none;
}

.setting-row.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.setting-row.stacked {
  flex-direction: column;
  align-items: stretch;
}

.setting-info {
  flex: 1;
  min-width: 0;
}

.setting-label {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  margin-bottom: var(--cg-space-1);
}

.required-marker {
  color: var(--cg-color-error);
  margin-left: 2px;
}

.setting-description {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  line-height: var(--cg-line-height-normal);
}

.setting-control {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.setting-row.stacked .setting-control {
  width: 100%;
  flex-shrink: 1;
}
</style>
