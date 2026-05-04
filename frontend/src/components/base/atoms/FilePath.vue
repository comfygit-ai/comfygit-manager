<template>
  <div class="file-path">
    <span class="file-path-icon">📄</span>
    <code class="file-path-text">{{ path }}</code>
    <button
      v-if="copyable"
      class="copy-btn"
      :title="copied ? 'Copied!' : 'Copy path'"
      @click="copyToClipboard"
    >
      {{ copied ? '✓' : '📋' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { copyToClipboard as copyTextToClipboard } from '@/utils/copyToClipboard'

const props = withDefaults(defineProps<{
  path: string
  copyable?: boolean
}>(), {
  copyable: true
})

const copied = ref(false)

async function copyToClipboard() {
  try {
    await copyTextToClipboard(props.path)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped>
.file-path {
  display: inline-flex;
  align-items: center;
  gap: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-1) var(--cg-space-2);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  max-width: 100%;
  overflow: hidden;
}

.file-path-icon {
  flex-shrink: 0;
  font-size: var(--cg-font-size-sm);
}

.file-path-text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

.copy-btn {
  flex-shrink: 0;
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 0;
  font-size: var(--cg-font-size-sm);
  transition: color var(--cg-transition-fast);
}

.copy-btn:hover {
  color: var(--cg-color-accent);
}
</style>
