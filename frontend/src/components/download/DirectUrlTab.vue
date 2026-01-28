<template>
  <div class="direct-url-tab">
    <div class="input-group">
      <label>Download URL</label>
      <BaseInput
        v-model="url"
        placeholder="https://example.com/model.safetensors"
      />
    </div>

    <div class="input-group">
      <label>Target Path (relative to models directory)</label>
      <BaseInput
        v-model="targetPath"
        placeholder="e.g. checkpoints/model.safetensors"
      />
      <p v-if="targetPathError" class="error">{{ targetPathError }}</p>
    </div>

    <p class="note">Model will be queued for background download.</p>

    <div class="actions">
      <BaseButton
        variant="primary"
        :disabled="!isValid"
        @click="handleQueue"
      >
        Queue Download
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

// Emits
interface Emits {
  (e: 'queue', items: Array<{ url: string; targetPath: string; filename: string }>): void
}
const emit = defineEmits<Emits>()

// Internal state
const url = ref('')
const targetPath = ref('')

// Computed: Target path validation
const targetPathError = computed(() => {
  const p = targetPath.value.trim()
  if (!p) return null
  const last = p.replace(/\\/g, '/').split('/').pop() || ''
  const hasExt = last.includes('.') && !last.endsWith('.')
  if (!hasExt) {
    return 'Target path must include a filename (e.g. checkpoints/model.safetensors).'
  }
  return null
})

// Computed: Form validation
const isValid = computed(() => {
  return url.value.trim() !== '' &&
         targetPath.value.trim() !== '' &&
         !targetPathError.value
})

// Handle queue download
const handleQueue = () => {
  if (!isValid.value) return

  const filename = targetPath.value.replace(/\\/g, '/').split('/').pop() || ''

  emit('queue', [{
    url: url.value.trim(),
    targetPath: targetPath.value.trim(),
    filename
  }])

  // Clear form after queuing
  url.value = ''
  targetPath.value = ''
}
</script>

<style scoped>
.direct-url-tab {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-weight: 500;
  font-size: 0.875rem;
}

.error {
  color: var(--error-color, #ef4444);
  font-size: 0.875rem;
  margin: 0;
}

.note {
  color: var(--text-secondary, #666);
  font-size: 0.875rem;
  margin: 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}
</style>
