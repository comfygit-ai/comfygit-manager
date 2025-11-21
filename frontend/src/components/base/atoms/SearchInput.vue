<template>
  <div class="search-input-wrapper">
    <input
      ref="inputRef"
      :value="modelValue"
      type="text"
      :placeholder="placeholder"
      class="search-input"
      @input="handleInput"
      @keyup.escape="handleClear"
    />
    <button
      v-if="clearable && modelValue"
      class="clear-button"
      @click="handleClear"
      title="Clear search"
    >
      ✕
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  debounce?: number
  clearable?: boolean
  autoFocus?: boolean
}>(), {
  placeholder: '🔍 Search...',
  debounce: 300,
  clearable: true,
  autoFocus: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  clear: []
}>()

const inputRef = ref<HTMLInputElement | null>(null)
let debounceTimer: number | undefined

function handleInput(event: Event) {
  const value = (event.target as HTMLInputElement).value

  if (props.debounce > 0) {
    clearTimeout(debounceTimer)
    debounceTimer = window.setTimeout(() => {
      emit('update:modelValue', value)
    }, props.debounce)
  } else {
    emit('update:modelValue', value)
  }
}

function handleClear() {
  emit('update:modelValue', '')
  emit('clear')
  inputRef.value?.focus()
}

onMounted(() => {
  if (props.autoFocus && inputRef.value) {
    inputRef.value.focus()
  }
})
</script>

<style scoped>
.search-input-wrapper {
  position: relative;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  padding-right: 32px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.search-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.2);
}

.clear-button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 4px;
  font-size: var(--cg-font-size-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--cg-transition-fast);
}

.clear-button:hover {
  color: var(--cg-color-text-primary);
}
</style>
