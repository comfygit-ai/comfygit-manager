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
  gap: var(--cg-space-4);
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

.error {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}

.note {
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
