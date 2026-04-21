<template>
  <div class="log-viewer-wrapper">
    <div
      ref="logOutputElement"
      class="log-output"
      @keydown="handleKeydown"
      @copy="handleCopy"
      tabindex="0"
    >
      <button
        class="copy-overlay-btn"
        @click="copyLogs"
        :disabled="copyState !== 'idle'"
        :title="copyState === 'copied' ? 'Copied!' : 'Copy all logs'"
      >
        {{ copyState === 'copied' ? 'Copied!' : 'Copy' }}
      </button>
      <div
        v-for="(line, index) in formattedLines"
        :key="index"
        :class="`log-line log-level-${line.level.toLowerCase()}`"
      >
        {{ line.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import type { LogEntry } from '@/types/comfygit'
import { copyToClipboard } from '@/utils/copyToClipboard'

const props = defineProps<{
  logs: LogEntry[]
  /** If true, show raw message only (for orchestrator logs). If false, show full structured format. */
  rawFormat?: boolean
}>()

const logOutputElement = ref<HTMLElement | null>(null)
const copyState = ref<'idle' | 'copied'>('idle')

// Format logs for display
const formattedLines = computed(() => {
  return props.logs.map(log => {
    // Raw logs just show message, structured logs show full format
    const text = props.rawFormat || !log.timestamp
      ? log.message
      : `${log.timestamp} - ${log.name} - ${log.level} - ${log.func}:${log.line} - ${log.message}`
    return {
      text,
      level: log.level
    }
  })
})

// Scroll to bottom helper
async function scrollToBottom() {
  await nextTick()
  const scrollContainer = logOutputElement.value?.closest('.panel-layout-content') as HTMLElement | null
  if (scrollContainer) {
    scrollContainer.scrollTop = scrollContainer.scrollHeight
  }
}

// Scroll to bottom on mount and when logs change
onMounted(scrollToBottom)
watch(() => props.logs, scrollToBottom)

async function copyLogs() {
  if (formattedLines.value.length === 0) return

  const text = formattedLines.value.map(l => l.text).join('\n')
  try {
    await copyToClipboard(text)
    copyState.value = 'copied'
    setTimeout(() => { copyState.value = 'idle' }, 2000)
  } catch (err) {
    console.error('Failed to copy logs:', err)
  }
}

// Handle Ctrl+C/Cmd+C within log area - stops ComfyUI from intercepting
function handleKeydown(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
    e.stopPropagation() // Prevent ComfyUI from capturing
  }
}

// Handle native copy event - ensure it works
function handleCopy(e: ClipboardEvent) {
  e.stopPropagation() // Prevent ComfyUI from capturing
}
</script>

<style scoped>
.log-viewer-wrapper {
  position: relative;
}

.log-output {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
  margin: 0;
  /* Ensure text selection works even if ComfyUI overrides it globally */
  user-select: text !important;
  -webkit-user-select: text !important;
  cursor: text;
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

.log-viewer-wrapper:hover .copy-overlay-btn {
  opacity: 1;
}

.copy-overlay-btn:hover {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-text-primary);
}

.copy-overlay-btn:disabled {
  cursor: default;
}

.log-line {
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  user-select: text !important;
  -webkit-user-select: text !important;
}

.log-level-error {
  color: #ff5555;
}

.log-level-warning {
  color: #ffb86c;
}

.log-level-info {
  color: #50fa7b;
}

.log-level-debug {
  color: #6272a4;
}
</style>
