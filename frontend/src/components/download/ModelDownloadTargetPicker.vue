<template>
  <div class="download-target-picker">
    <DownloadDestinationPicker
      v-model="destination"
      :suggested-directory="suggestedDirectory"
      show-filename
      v-model:filename-value="filename"
      filename-placeholder="model.safetensors"
    />

    <p v-if="warning" class="target-warning">{{ warning }}</p>

    <div v-if="targetPath" class="target-summary">
      <span class="summary-label">Save as</span>
      <code>{{ targetPath }}</code>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import DownloadDestinationPicker from '@/components/download/DownloadDestinationPicker.vue'

const props = withDefaults(defineProps<{
  modelValue?: string
  suggestedDirectory?: string | null
  targetFilename?: string | null
  warning?: string
}>(), {
  modelValue: '',
  suggestedDirectory: null,
  targetFilename: null,
  warning: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:targetPath': [value: string]
}>()

const destination = ref('')
const filename = ref('')

const resolvedFilename = computed(() => filenameFromPath(props.targetFilename || ''))

const targetPath = computed(() => {
  if (!destination.value.trim()) return ''
  const normalizedFilename = filenameFromPath(filename.value)
  if (!normalizedFilename) return ''
  return joinPath(destination.value, normalizedFilename)
})

watch(() => props.modelValue, (value) => {
  const normalized = normalizeDirectory(value || '')
  if (normalized !== destination.value) {
    destination.value = normalized
  }
}, { immediate: true })

watch(destination, (value) => {
  emit('update:modelValue', normalizeDirectory(value))
})

watch(resolvedFilename, (value) => {
  if (value && value !== filename.value) {
    filename.value = value
  }
}, { immediate: true })

watch(targetPath, (value) => {
  emit('update:targetPath', value)
}, { immediate: true })

function normalizePath(path: string): string {
  return path.replace(/\\/g, '/').replace(/^\/+/, '')
}

function filenameFromPath(path: string): string {
  return normalizePath(path).split('/').filter(Boolean).pop() || normalizePath(path)
}

function normalizeDirectory(path: string): string {
  return normalizePath(path).replace(/\/+$/, '')
}

function joinPath(directory: string, filename: string): string {
  if (!directory.trim()) return normalizePath(filename)
  return `${normalizeDirectory(directory)}/${normalizePath(filename)}`
}
</script>

<style scoped>
.download-target-picker {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.target-summary {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.summary-label {
  color: var(--cg-color-text-secondary);
}

.target-summary code {
  color: var(--cg-color-text-primary);
  overflow-wrap: anywhere;
}

.target-warning {
  color: var(--cg-color-warning);
  border: 1px solid var(--cg-color-warning);
  background: var(--cg-color-warning-muted);
  padding: var(--cg-space-2);
  margin: 0;
  font-size: var(--cg-font-size-sm);
}
</style>
