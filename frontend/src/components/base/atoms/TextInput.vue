<template>
  <input
    ref="inputRef"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="['text-input', { error: hasError, monospace }]"
    @input="handleInput"
    @keyup.enter="$emit('enter')"
    @keyup.escape="$emit('escape')"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: string
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  disabled?: boolean
  hasError?: boolean
  monospace?: boolean
  autoFocus?: boolean
}>(), {
  type: 'text',
  placeholder: '',
  disabled: false,
  hasError: false,
  monospace: true,
  autoFocus: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  enter: []
  escape: []
  focus: []
  blur: []
}>()

const inputRef = ref<HTMLInputElement | null>(null)

function handleInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
}

onMounted(() => {
  if (props.autoFocus && inputRef.value) {
    inputRef.value.focus()
  }
})

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur()
})
</script>

<style scoped>
.text-input {
  width: 100%;
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  transition: border-color var(--cg-transition-fast), box-shadow var(--cg-transition-fast);
}

.text-input.monospace {
  font-family: var(--cg-font-mono);
}

.text-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
  box-shadow: 0 0 8px var(--cg-shadow-accent);
}

.text-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.text-input.error {
  border-color: var(--cg-color-error);
}

.text-input.error:focus {
  box-shadow: 0 0 8px var(--cg-shadow-error);
}

.text-input::placeholder {
  color: var(--cg-color-text-muted);
}
</style>
