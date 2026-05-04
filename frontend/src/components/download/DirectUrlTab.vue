<template>
  <div class="direct-url-tab">
    <DirectModelUrlForm
      :initial-url="initialUrl"
      action-label="Queue Download"
      note="Model will be queued for background download."
      clear-on-submit
      @submit="handleQueue"
    />
  </div>
</template>

<script setup lang="ts">
import DirectModelUrlForm from '@/components/download/DirectModelUrlForm.vue'

defineProps<{
  initialUrl?: string
}>()

interface Emits {
  (e: 'queue', items: Array<{ url: string; targetPath: string; filename: string }>): void
}
const emit = defineEmits<Emits>()

const handleQueue = (payload: { url: string; targetPath: string; filename: string }) => {
  emit('queue', [{
    url: payload.url,
    targetPath: payload.targetPath,
    filename: payload.filename
  }])
}
</script>

<style scoped>
.direct-url-tab {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}
</style>
