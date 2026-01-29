<template>
  <div :class="['base-select-wrapper', { 'full-width': fullWidth, error: !!error }]">
    <select
      :value="modelValue"
      :disabled="disabled"
      :class="['base-select', { error: !!error }]"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="getOptionValue(option)"
        :value="getOptionValue(option)"
      >
        {{ getOptionLabel(option) }}
      </option>
    </select>
    <span v-if="error" class="base-select-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
export interface SelectOption {
  label: string
  value: string | number
}

const props = withDefaults(defineProps<{
  modelValue: string | number
  options: SelectOption[] | string[]
  placeholder?: string
  disabled?: boolean
  error?: string
  fullWidth?: boolean
}>(), {
  fullWidth: false,
  disabled: false
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

function getOptionValue(option: SelectOption | string): string | number {
  return typeof option === 'string' ? option : option.value
}

function getOptionLabel(option: SelectOption | string): string {
  return typeof option === 'string' ? option : option.label
}
</script>

<style scoped>
.base-select-wrapper {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
}

.base-select-wrapper.full-width {
  width: 100%;
}

.base-select {
  padding: 10px 12px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
  transition: all var(--cg-transition-fast);
  cursor: pointer;
  width: 100%;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}

.base-select:focus {
  outline: none;
  border-color: var(--cg-color-accent);
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted);
}

.base-select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.base-select.error {
  border-color: var(--cg-color-error);
}

.base-select-error {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-error);
}

/* Style the dropdown arrow */
.base-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4L6 8L10 4' stroke='%2300d9ff' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}
</style>
