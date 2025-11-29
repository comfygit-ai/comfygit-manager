<template>
  <div
    :class="['file-drop-zone', { 'drop-active': isDragging, 'has-file': hasFile }]"
    @dragenter.prevent="handleDragEnter"
    @dragover.prevent="handleDragOver"
    @dragleave.prevent="handleDragLeave"
    @drop.prevent="handleDrop"
  >
    <div v-if="!hasFile" class="drop-zone-empty">
      <div class="drop-zone-icon">
        <svg width="48" height="48" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 4L4 8h3v4h2V8h3L8 4z"/>
          <path d="M2 14h12v-2H2v2z"/>
        </svg>
      </div>
      <div class="drop-zone-text">
        <p class="drop-zone-primary">{{ primaryText }}</p>
        <p class="drop-zone-secondary">{{ secondaryText }}</p>
      </div>
      <div class="drop-zone-actions">
        <FileInput
          :accept="accept"
          :multiple="multiple"
          variant="primary"
          size="md"
          @change="handleFileSelect"
        >
          {{ buttonText }}
        </FileInput>
      </div>
    </div>

    <div v-else class="drop-zone-file">
      <div class="file-info">
        <div class="file-icon">📦</div>
        <div class="file-details">
          <div class="file-name">{{ fileName }}</div>
          <div class="file-size">{{ fileSize }}</div>
        </div>
      </div>
      <ActionButton
        variant="ghost"
        size="xs"
        @click="handleClear"
        title="Remove file"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
        </svg>
      </ActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import FileInput from '@/components/base/atoms/FileInput.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'

const props = withDefaults(defineProps<{
  accept?: string
  multiple?: boolean
  primaryText?: string
  secondaryText?: string
  buttonText?: string
}>(), {
  accept: '*/*',
  multiple: false,
  primaryText: 'Drag & drop file here',
  secondaryText: 'or click to browse',
  buttonText: 'Browse Files'
})

const emit = defineEmits<{
  fileSelected: [file: File]
  clear: []
}>()

const isDragging = ref(false)
const selectedFile = ref<File | null>(null)
const dragCounter = ref(0)

const hasFile = computed(() => selectedFile.value !== null)
const fileName = computed(() => selectedFile.value?.name || '')
const fileSize = computed(() => {
  if (!selectedFile.value) return ''
  const bytes = selectedFile.value.size
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`
})

function handleDragEnter(event: DragEvent) {
  // Stop propagation to prevent ComfyUI from intercepting
  event.stopPropagation()
  dragCounter.value++
  if (event.dataTransfer?.types.includes('Files')) {
    isDragging.value = true
  }
}

function handleDragOver(event: DragEvent) {
  // Stop propagation to prevent ComfyUI from intercepting
  event.stopPropagation()
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'copy'
  }
}

function handleDragLeave(event: DragEvent) {
  // Stop propagation to prevent ComfyUI from intercepting
  event.stopPropagation()
  dragCounter.value--
  if (dragCounter.value === 0) {
    isDragging.value = false
  }
}

function handleDrop(event: DragEvent) {
  // Stop propagation to prevent ComfyUI from intercepting
  event.stopPropagation()
  dragCounter.value = 0
  isDragging.value = false

  const files = event.dataTransfer?.files
  if (files && files.length > 0) {
    processFile(files[0])
  }
}

function handleFileSelect(files: FileList) {
  if (files.length > 0) {
    processFile(files[0])
  }
}

function processFile(file: File) {
  selectedFile.value = file
  emit('fileSelected', file)
}

function handleClear() {
  selectedFile.value = null
  emit('clear')
}
</script>

<style scoped>
.file-drop-zone {
  border: 2px dashed var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  padding: var(--cg-space-6);
  text-align: center;
  transition: all var(--cg-transition-base);
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-drop-zone.drop-active {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-accent-muted);
  box-shadow: 0 0 16px var(--cg-shadow-accent);
}

.file-drop-zone.has-file {
  border-style: solid;
  border-color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
  min-height: auto;
  padding: var(--cg-space-4);
}

.drop-zone-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-4);
  width: 100%;
}

.drop-zone-icon {
  color: var(--cg-color-text-muted);
  opacity: 0.5;
}

.drop-zone-text {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.drop-zone-primary {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-medium);
  margin: 0;
}

.drop-zone-secondary {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}

.drop-zone-actions {
  margin-top: var(--cg-space-2);
}

.drop-zone-file {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: var(--cg-space-3);
}

.file-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  flex: 1;
  min-width: 0;
}

.file-icon {
  font-size: var(--cg-font-size-2xl);
  flex-shrink: 0;
}

.file-details {
  flex: 1;
  min-width: 0;
  text-align: left;
}

.file-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-medium);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-size {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
}
</style>
