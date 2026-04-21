<template>
  <div class="text-viewer-wrapper">
    <div
      ref="textOutputElement"
      class="text-output"
      tabindex="0"
      @keydown="handleKeydown"
      @copy="handleCopy"
    >
      <button
        class="copy-overlay-btn"
        @click="copyText"
        :disabled="copyState !== 'idle'"
        :title="copyState === 'copied' ? 'Copied!' : 'Copy text'"
      >
        {{ copyState === 'copied' ? 'Copied!' : 'Copy' }}
      </button>
      <pre class="text-content">{{ content }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { copyToClipboard } from '@/utils/copyToClipboard'

const props = defineProps<{
  content: string
}>()

const textOutputElement = ref<HTMLElement | null>(null)
const copyState = ref<'idle' | 'copied'>('idle')

async function copyText() {
  if (!props.content) return

  try {
    await copyToClipboard(props.content)
    copyState.value = 'copied'
    setTimeout(() => { copyState.value = 'idle' }, 2000)
  } catch (err) {
    console.error('Failed to copy text:', err)
  }
}

function handleKeydown(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
    e.stopPropagation()
  }
}

function handleCopy(e: ClipboardEvent) {
  e.stopPropagation()
}
</script>

<style scoped>
.text-viewer-wrapper {
  position: relative;
  height: 100%;
  min-height: 0;
}

.text-output {
  position: relative;
  height: 100%;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
  margin: 0;
  user-select: text !important;
  -webkit-user-select: text !important;
  cursor: text;
  overflow: auto;
}

.copy-overlay-btn {
  position: sticky;
  top: 8px;
  float: right;
  margin-left: 8px;
  margin-bottom: 4px;
  padding: 4px 8px;
  font-size: 10px;
  font-family: var(--cg-font-body);
  line-height: 1.2;
  background: var(--cg-color-bg-secondary);
  color: var(--cg-color-text-secondary);
  border: 1px solid var(--cg-color-border);
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.15s ease;
  z-index: 2;
}

.text-viewer-wrapper:hover .copy-overlay-btn {
  opacity: 1;
}

.copy-overlay-btn:hover {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-text-primary);
}

.copy-overlay-btn:disabled {
  cursor: default;
}

.text-content {
  margin: 0;
  white-space: pre;
  line-height: 1.5;
  user-select: text !important;
  -webkit-user-select: text !important;
  padding-top: 24px;
}
</style>
