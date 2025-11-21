<template>
  <div class="remote-url-display">
    <span class="url-text" :title="url">{{ displayUrl }}</span>
    <button
      class="copy-btn"
      :class="{ copied }"
      @click="copyUrl"
      :title="copied ? 'Copied!' : 'Copy URL'"
    >
      <svg v-if="!copied" width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z"/>
        <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z"/>
      </svg>
      <svg v-else width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(defineProps<{
  url: string
  maxLength?: number
}>(), {
  maxLength: 60
})

const copied = ref(false)

const displayUrl = computed(() => {
  if (props.url.length <= props.maxLength) {
    return props.url
  }
  const start = props.url.slice(0, Math.floor(props.maxLength * 0.6))
  const end = props.url.slice(-Math.floor(props.maxLength * 0.3))
  return `${start}...${end}`
})

async function copyUrl() {
  try {
    await navigator.clipboard.writeText(props.url)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy URL:', err)
  }
}
</script>

<style scoped>
.remote-url-display {
  display: inline-flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.url-text {
  color: var(--cg-color-text-secondary);
  word-break: break-all;
}

.copy-btn {
  background: transparent;
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--cg-transition-fast);
  flex-shrink: 0;
}

.copy-btn:hover {
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.copy-btn.copied {
  color: var(--cg-color-success);
  border-color: var(--cg-color-success);
}
</style>
