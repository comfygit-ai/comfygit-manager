<template>
  <div class="base-textarea-wrapper">
    <textarea
      :value="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxLength"
      class="base-textarea"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      @keydown.ctrl.enter="$emit('ctrlEnter')"
      @keydown.meta.enter="$emit('ctrlEnter')"
      @keydown.enter="handleEnter"
    ></textarea>
    <div v-if="showCharCount && maxLength" class="base-textarea-count">
      {{ modelValue.length }} / {{ maxLength }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: string
  rows?: number
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  showCharCount?: boolean
  submitOnEnter?: boolean  // If true, Enter key emits 'submit' instead of inserting newline
}>(), {
  rows: 3,
  disabled: false,
  showCharCount: false,
  submitOnEnter: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  ctrlEnter: []
  submit: []
}>()

function handleEnter(event: KeyboardEvent) {
  // Shift+Enter always inserts newline (default behavior)
  // Ctrl/Meta+Enter is handled separately
  if (event.shiftKey || event.ctrlKey || event.metaKey) return

  // If submitOnEnter is enabled, Enter key submits instead of newline
  if (props.submitOnEnter) {
    event.preventDefault()
    emit('submit')
  }
}
</script>

<style scoped>
.base-textarea-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.base-textarea {
  width: 100%;
  padding: 10px 12px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-family: inherit;
  resize: vertical;
  line-height: var(--cg-line-height-normal);
  transition: all var(--cg-transition-fast);
}

.base-textarea:focus {
  outline: none;
  border-color: var(--cg-color-accent);
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted);
}

.base-textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.base-textarea-count {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-align: right;
}
</style>
