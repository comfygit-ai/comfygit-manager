<template>
  <div class="download-item" :class="`status-${item.status}`">
    <div class="item-header">
      <div class="item-info">
        <div class="filename">{{ item.filename }}</div>
        <div class="metadata">
          <span class="size">{{ formatSize(item.size) }}</span>
          <span v-if="item.type" class="type">{{ item.type }}</span>
        </div>
        <div v-if="item.targetPath" class="target-path">{{ item.targetPath }}</div>
      </div>

      <div class="item-actions">
        <!-- Cancel (queued/downloading) -->
        <button
          v-if="item.status === 'queued' || item.status === 'downloading'"
          class="action-icon cancel"
          @click="emit('cancel')"
          title="Cancel"
        >
          ×
        </button>

        <!-- Resume (paused) -->
        <button
          v-if="item.status === 'paused'"
          class="action-icon resume"
          @click="emit('resume')"
          title="Resume"
        >
          ▶
        </button>

        <!-- Retry (failed) -->
        <button
          v-if="item.status === 'failed'"
          class="action-icon retry"
          @click="emit('retry')"
          title="Retry"
        >
          ↻
        </button>

        <!-- Remove (completed/failed/paused) -->
        <button
          v-if="item.status === 'completed' || item.status === 'failed' || item.status === 'paused'"
          class="action-icon remove"
          @click="emit('remove')"
          title="Remove"
        >
          ×
        </button>
      </div>
    </div>

    <!-- Progress (downloading) -->
    <div v-if="item.status === 'downloading'" class="progress-section">
      <div :class="['progress-bar', { indeterminate: isIndeterminate }]">
        <div class="progress-fill" :style="{ width: `${item.progress}%` }"></div>
      </div>
      <div class="progress-stats">
        <span class="downloaded">{{ progressLabel }}</span>
        <span class="speed">{{ formatSpeed(item.speed) }}</span>
        <span v-if="item.eta > 0" class="eta">{{ formatETA(item.eta) }}</span>
      </div>
    </div>

    <!-- Status Messages -->
    <div v-else-if="item.status === 'paused'" class="status-msg paused">
      Paused - click Resume to download
    </div>

    <div v-else-if="item.status === 'queued'" class="status-msg queued">
      Waiting in queue...
    </div>

    <div v-else-if="item.status === 'completed'" class="status-msg completed">
      ✓ Downloaded
    </div>

    <div v-else-if="item.status === 'failed'" class="status-msg failed">
      ✗ {{ item.error || 'Failed' }}
      <span v-if="item.retries > 0" class="retries">({{ item.retries }} retries)</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DownloadQueueItem } from '@/types/comfygit'

const props = defineProps<{
  item: DownloadQueueItem
}>()

const emit = defineEmits<{
  cancel: []
  retry: []
  resume: []
  remove: []
}>()

const isIndeterminate = computed(() => {
  return props.item.status === 'downloading' && (!props.item.size || !props.item.downloaded)
})

const progressLabel = computed(() => {
  if (isIndeterminate.value) return 'Downloading...'
  return `${formatSize(props.item.downloaded)} / ${formatSize(props.item.size)}`
})

function formatSize(bytes: number): string {
  if (bytes === 0) return '?'
  const gb = bytes / (1024 * 1024 * 1024)
  if (gb >= 1) return `${gb.toFixed(2)} GB`
  const mb = bytes / (1024 * 1024)
  return `${mb.toFixed(1)} MB`
}

function formatSpeed(bytesPerSec: number): string {
  if (bytesPerSec === 0) return '-'
  const mbps = bytesPerSec / (1024 * 1024)
  return `${mbps.toFixed(1)} MB/s`
}

function formatETA(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m`
  const hours = Math.floor(minutes / 60)
  return `${hours}h ${minutes % 60}m`
}
</script>

<style scoped>
.download-item {
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
}

.download-item.status-downloading {
  border-color: var(--cg-color-accent);
}

.download-item.status-completed {
  border-color: var(--cg-color-success);
}

.download-item.status-failed {
  border-color: var(--cg-color-error);
}

.download-item.status-paused {
  border-color: var(--cg-color-warning);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.item-info {
  flex: 1;
  min-width: 0;
}

.filename {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.metadata {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  margin-top: 2px;
  display: flex;
  gap: var(--cg-space-2);
}

.target-path {
  margin-top: 2px;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-actions {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.action-icon {
  width: 20px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-icon:hover {
  background: var(--cg-color-bg-hover);
}

.action-icon.cancel:hover,
.action-icon.remove:hover {
  border-color: var(--cg-color-error);
  color: var(--cg-color-error);
}

.action-icon.retry:hover {
  border-color: var(--cg-color-warning);
  color: var(--cg-color-warning);
}

.action-icon.resume {
  font-size: 10px;
}

.action-icon.resume:hover {
  border-color: var(--cg-color-success);
  color: var(--cg-color-success);
}

.progress-section {
  margin-top: var(--cg-space-1);
}

.progress-bar {
  height: 3px;
  background: var(--cg-color-bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: var(--cg-color-accent);
  transition: width 0.2s ease;
}

.progress-bar.indeterminate .progress-fill {
  width: 35% !important;
  animation: indeterminate-progress 1.2s ease-in-out infinite;
}

@keyframes indeterminate-progress {
  0% {
    transform: translateX(-110%);
  }
  100% {
    transform: translateX(300%);
  }
}

.progress-stats {
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  font-size: 10px;
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
}

.speed {
  color: var(--cg-color-accent);
}

.status-msg {
  font-size: var(--cg-font-size-xs);
  margin-top: var(--cg-space-1);
}

.status-msg.paused {
  color: var(--cg-color-warning);
}

.status-msg.queued {
  color: var(--cg-color-text-muted);
}

.status-msg.completed {
  color: var(--cg-color-success);
}

.status-msg.failed {
  color: var(--cg-color-error);
}

.retries {
  opacity: 0.7;
}
</style>
