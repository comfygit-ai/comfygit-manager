<template>
  <div class="source-url-form">
    <div class="input-group">
      <label v-if="label">{{ label }}</label>
      <BaseInput
        :model-value="modelValue"
        :placeholder="placeholder"
        :error="urlError || undefined"
        full-width
        @update:model-value="emit('update:modelValue', $event)"
        @enter="submit"
      />
      <p v-if="description" class="description">{{ description }}</p>
    </div>

    <slot />

    <div class="actions">
      <BaseButton
        variant="primary"
        :disabled="!canSubmit"
        :loading="loading"
        @click="submit"
      >
        {{ actionLabel }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'

const props = withDefaults(defineProps<{
  modelValue: string
  actionLabel: string
  label?: string
  placeholder?: string
  description?: string
  disabled?: boolean
  loading?: boolean
}>(), {
  label: 'Download URL',
  placeholder: 'https://huggingface.co/org/repo/resolve/main/model.safetensors',
  description: '',
  disabled: false,
  loading: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  submit: [url: string]
}>()

const normalizedUrl = computed(() => props.modelValue.trim())

const urlError = computed(() => {
  const value = normalizedUrl.value
  if (!value) return null
  try {
    const parsed = new URL(value)
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return 'Use an HTTP or HTTPS URL.'
    }
  } catch {
    return 'Enter a valid URL.'
  }
  return null
})

const canSubmit = computed(() => {
  return Boolean(normalizedUrl.value) && !urlError.value && !props.disabled
})

function submit() {
  if (!canSubmit.value) return
  emit('submit', normalizedUrl.value)
}
</script>

<style scoped>
.source-url-form {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.input-group label {
  font-weight: var(--cg-font-weight-medium);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.description {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: var(--cg-space-2);
}
</style>
