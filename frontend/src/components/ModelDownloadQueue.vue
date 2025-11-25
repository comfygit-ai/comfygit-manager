<template>
  <Teleport to="body">
    <div
      v-if="hasItems"
      class="model-download-queue"
      :class="{ minimized: !expanded }"
    >
      <!-- Header -->
      <div class="queue-header" @click="expanded = !expanded">
        <div class="queue-title">
          <span class="icon">↓</span>
          <span class="title">Downloads</span>
          <span class="count">({{ activeCount }}/{{ queue.items.length }})</span>
        </div>

        <div class="queue-actions">
          <span class="action-label">{{ expanded ? 'minimize' : 'expand' }}</span>
        </div>
      </div>

      <!-- Minimized: Overall Progress -->
      <div v-if="!expanded" class="overall-progress">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${overallProgress}%` }"></div>
        </div>
        <div v-if="currentDownload" class="current-mini">
          <span class="filename">{{ currentDownload.filename }}</span>
          <span class="speed">{{ formatSpeed(currentDownload.speed) }}</span>
        </div>
      </div>

      <!-- Expanded: Full Queue -->
      <div v-else class="queue-content">
        <!-- Current Download -->
        <div v-if="currentDownload" class="section">
          <div class="section-label">Downloading</div>
          <DownloadQueueItem
            :item="currentDownload"
            @cancel="handleCancel(currentDownload.id)"
          />
        </div>

        <!-- Paused (pending downloads from previous session) -->
        <div v-if="pausedItems.length > 0" class="section">
          <div class="section-header">
            <span class="section-label paused">Paused ({{ pausedItems.length }})</span>
            <button class="resume-all-btn" @click="resumeAllPaused">Resume All</button>
          </div>
          <div class="items-list">
            <DownloadQueueItem
              v-for="item in pausedItems"
              :key="item.id"
              :item="item"
              @resume="resumeDownload(item.id)"
              @remove="removeItem(item.id)"
            />
          </div>
        </div>

        <!-- Queued -->
        <div v-if="queuedItems.length > 0" class="section">
          <div class="section-header">
            <span class="section-label">Queued ({{ queuedItems.length }})</span>
          </div>
          <div class="items-list">
            <DownloadQueueItem
              v-for="item in queuedItems"
              :key="item.id"
              :item="item"
              @cancel="handleCancel(item.id)"
            />
          </div>
        </div>

        <!-- Completed -->
        <div v-if="completedItems.length > 0" class="section">
          <div class="section-header">
            <span class="section-label">Completed ({{ completedItems.length }})</span>
            <button class="clear-btn" @click="clearCompleted">Clear</button>
          </div>
          <div class="items-list">
            <DownloadQueueItem
              v-for="item in completedItems.slice(0, 3)"
              :key="item.id"
              :item="item"
              @remove="removeItem(item.id)"
            />
          </div>
        </div>

        <!-- Failed -->
        <div v-if="failedItems.length > 0" class="section">
          <div class="section-header">
            <span class="section-label failed">Failed ({{ failedItems.length }})</span>
          </div>
          <div class="items-list">
            <DownloadQueueItem
              v-for="item in failedItems"
              :key="item.id"
              :item="item"
              @retry="retryDownload(item.id)"
              @remove="removeItem(item.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useModelDownloadQueue } from '@/composables/useModelDownloadQueue'
import DownloadQueueItem from './base/molecules/DownloadQueueItem.vue'

const {
  queue,
  currentDownload,
  queuedItems,
  completedItems,
  failedItems,
  pausedItems,
  hasItems,
  activeCount,
  hasPaused,
  cancelDownload,
  retryDownload,
  resumeDownload,
  resumeAllPaused,
  removeItem,
  clearCompleted
} = useModelDownloadQueue()

const expanded = ref(false)
let autoCloseTimer: ReturnType<typeof setTimeout> | null = null

// Auto-close when all downloads complete successfully
// Wait a moment so user can see the success state
watch(
  () => ({
    active: activeCount.value,
    failed: failedItems.value.length,
    paused: pausedItems.value.length,
    completed: completedItems.value.length
  }),
  (newVal, oldVal) => {
    // Clear any pending auto-close
    if (autoCloseTimer) {
      clearTimeout(autoCloseTimer)
      autoCloseTimer = null
    }

    // Check if all downloads just finished successfully
    // (no active, no failed, no paused, but has completed items)
    const allDone = newVal.active === 0 &&
                    newVal.failed === 0 &&
                    newVal.paused === 0 &&
                    newVal.completed > 0

    // Only trigger if we just transitioned from active to done
    const wasActive = oldVal && (oldVal.active > 0 || oldVal.paused > 0)

    if (allDone && wasActive) {
      // Auto-close after 2 seconds so user can see success
      autoCloseTimer = setTimeout(() => {
        clearCompleted()
        autoCloseTimer = null
      }, 2000)
    }
  },
  { deep: true }
)

const overallProgress = computed(() => {
  if (queue.items.length === 0) return 0
  const completed = completedItems.value.length
  const current = currentDownload.value?.progress || 0
  return Math.round(((completed + current / 100) / queue.items.length) * 100)
})

function handleCancel(id: string) {
  cancelDownload(id)
}

function formatSpeed(bytesPerSec: number): string {
  if (bytesPerSec === 0) return ''
  const mbps = bytesPerSec / (1024 * 1024)
  return `${mbps.toFixed(1)} MB/s`
}
</script>

<style scoped>
.model-download-queue {
  position: fixed;
  bottom: 16px;
  right: 340px;
  width: 360px;
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  z-index: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.queue-header {
  padding: var(--cg-space-2) var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  background: var(--cg-color-bg-secondary);
}

.queue-header:hover {
  background: var(--cg-color-bg-hover);
}

.queue-title {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-primary);
  font-weight: var(--cg-font-weight-semibold);
  font-size: var(--cg-font-size-sm);
}

.icon {
  font-size: var(--cg-font-size-base);
}

.count {
  color: var(--cg-color-text-muted);
  font-weight: normal;
  font-size: var(--cg-font-size-xs);
}

.action-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: lowercase;
  font-style: italic;
}

.overall-progress {
  padding: var(--cg-space-2) var(--cg-space-3);
}

.progress-bar {
  height: 4px;
  background: var(--cg-color-bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--cg-color-accent);
  transition: width 0.3s ease;
}

.current-mini {
  display: flex;
  justify-content: space-between;
  margin-top: var(--cg-space-1);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.current-mini .filename {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.current-mini .speed {
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
}

.queue-content {
  max-height: 450px;
  overflow-y: auto;
  padding: var(--cg-space-2);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.section-label.failed {
  color: var(--cg-color-error);
}

.section-label.paused {
  color: var(--cg-color-warning);
}

.resume-all-btn {
  padding: 4px 10px;
  background: var(--cg-color-warning);
  border: none;
  color: #000;
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  cursor: pointer;
}

.resume-all-btn:hover {
  filter: brightness(1.1);
}

.clear-btn {
  padding: 2px 6px;
  background: transparent;
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  cursor: pointer;
}

.clear-btn:hover {
  color: var(--cg-color-error);
  border-color: var(--cg-color-error);
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}
</style>
