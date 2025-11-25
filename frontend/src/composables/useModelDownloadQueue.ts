/**
 * Global Model Download Queue
 *
 * Manages async model downloads in a floating popover.
 * Downloads happen in background while user continues using ComfyUI.
 */
import { reactive, readonly, computed, type DeepReadonly } from 'vue'
import type { DownloadQueue, DownloadQueueItem } from '@/types/comfygit'

// Global singleton state
const queue = reactive<DownloadQueue>({
  items: [],
  status: 'idle'
})

// Track active SSE connection
let activeEventSource: EventSource | null = null

// Generate unique IDs
function generateId(): string {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Helper to get item by ID
function getItem(id: string): DownloadQueueItem | undefined {
  return queue.items.find(i => i.id === id)
}

// Process next queued download
async function processQueue() {
  // Skip if already downloading or no queued items
  if (queue.status === 'downloading') return

  const nextItem = queue.items.find(i => i.status === 'queued')
  if (!nextItem) {
    queue.status = 'idle'
    return
  }

  queue.status = 'downloading'
  nextItem.status = 'downloading'
  nextItem.progress = 0
  nextItem.downloaded = 0

  try {
    await downloadFile(nextItem)
    nextItem.status = 'completed'
    nextItem.progress = 100
  } catch (err) {
    nextItem.status = 'failed'
    nextItem.error = err instanceof Error ? err.message : 'Download failed'
    nextItem.retries++
  } finally {
    queue.status = 'idle'
    // Process next item
    processQueue()
  }
}

// Download a single file via SSE streaming
async function downloadFile(item: DownloadQueueItem): Promise<void> {
  return new Promise((resolve, reject) => {
    // Close any existing connection
    if (activeEventSource) {
      activeEventSource.close()
      activeEventSource = null
    }

    // Start SSE download stream with workflow context for pyproject update
    const params = new URLSearchParams({
      url: item.url,
      target_path: item.targetPath,
      filename: item.filename,
      workflow: item.workflow
    })

    const eventSource = new EventSource(`/v2/comfygit/models/download-stream?${params}`)
    activeEventSource = eventSource

    let lastTime = Date.now()
    let lastDownloaded = 0
    let settled = false  // Track if promise is already resolved/rejected

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)

        switch (data.type) {
          case 'progress':
            item.downloaded = data.downloaded || 0
            item.size = data.total || item.size

            // Calculate speed
            const now = Date.now()
            const elapsed = (now - lastTime) / 1000
            if (elapsed > 0.5) {
              const bytesInInterval = item.downloaded - lastDownloaded
              item.speed = bytesInInterval / elapsed
              lastTime = now
              lastDownloaded = item.downloaded

              // Calculate ETA
              if (item.speed > 0 && item.size > 0) {
                const remaining = item.size - item.downloaded
                item.eta = remaining / item.speed
              }
            }

            // Update progress percentage
            if (item.size > 0) {
              item.progress = Math.round((item.downloaded / item.size) * 100)
            }
            break

          case 'complete':
            settled = true
            eventSource.close()
            activeEventSource = null
            resolve()
            break

          case 'error':
            settled = true
            eventSource.close()
            activeEventSource = null
            reject(new Error(data.message || 'Download failed'))
            break
        }
      } catch {
        // Ignore parse errors
      }
    }

    eventSource.onerror = () => {
      eventSource.close()
      activeEventSource = null
      // Only reject if we haven't already settled (complete/error event was received)
      if (!settled) {
        reject(new Error('Connection lost'))
      }
    }
  })
}

// Fetch pending downloads from backend
async function loadPendingDownloads(): Promise<void> {
  try {
    const response = await fetch('/v2/comfygit/models/pending-downloads')
    if (!response.ok) return

    const data = await response.json()
    if (!data.pending_downloads || data.pending_downloads.length === 0) return

    // Add pending downloads as "paused" items (user can resume)
    for (const item of data.pending_downloads) {
      // Skip if already in queue
      if (queue.items.some(i => i.url === item.url && i.filename === item.filename)) {
        continue
      }

      const queueItem: DownloadQueueItem = {
        id: generateId(),
        workflow: item.workflow,
        filename: item.filename,
        url: item.url,
        targetPath: item.target_path,
        size: item.size || 0,
        type: 'model',
        status: 'paused', // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      }
      queue.items.push(queueItem)
    }

    console.log(`[ComfyGit] Loaded ${data.pending_downloads.length} pending download(s)`)
  } catch (err) {
    console.warn('[ComfyGit] Failed to load pending downloads:', err)
  }
}

export function useModelDownloadQueue() {
  // Add items to download queue (skips duplicates by URL+targetPath)
  function addToQueue(items: Array<{
    workflow: string
    filename: string
    url: string
    targetPath: string
    size?: number
    type?: string
  }>) {
    for (const item of items) {
      // Skip if already in queue with same URL + target path (not failed/removed)
      const isDuplicate = queue.items.some(existing =>
        existing.url === item.url &&
        existing.targetPath === item.targetPath &&
        ['queued', 'downloading', 'paused', 'completed'].includes(existing.status)
      )
      if (isDuplicate) {
        console.log(`[ComfyGit] Skipping duplicate download: ${item.filename}`)
        continue
      }

      const queueItem: DownloadQueueItem = {
        id: generateId(),
        workflow: item.workflow,
        filename: item.filename,
        url: item.url,
        targetPath: item.targetPath,
        size: item.size || 0,
        type: item.type || 'model',
        status: 'queued',
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      }
      queue.items.push(queueItem)
    }

    // Start processing if idle
    if (queue.status === 'idle') {
      processQueue()
    }
  }

  // Cancel a download
  async function cancelDownload(id: string) {
    const item = getItem(id)
    if (!item) return

    if (item.status === 'downloading') {
      // Tell backend to cancel the download
      try {
        await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(item.url)}`, {
          method: 'DELETE'
        })
      } catch {
        // Ignore errors - download may have already completed
      }

      // Close SSE connection
      if (activeEventSource) {
        activeEventSource.close()
        activeEventSource = null
      }
      item.status = 'failed'
      item.error = 'Cancelled by user'
      queue.status = 'idle'
      processQueue()
    } else if (item.status === 'queued') {
      // Remove from queue
      const idx = queue.items.findIndex(i => i.id === id)
      if (idx >= 0) {
        queue.items.splice(idx, 1)
      }
    }
  }

  // Retry a failed download
  function retryDownload(id: string) {
    const item = getItem(id)
    if (!item || item.status !== 'failed') return

    item.status = 'queued'
    item.error = undefined
    item.progress = 0
    item.downloaded = 0

    // Start processing if idle
    if (queue.status === 'idle') {
      processQueue()
    }
  }

  // Resume a paused download
  function resumeDownload(id: string) {
    const item = getItem(id)
    if (!item || item.status !== 'paused') return

    item.status = 'queued'

    // Start processing if idle
    if (queue.status === 'idle') {
      processQueue()
    }
  }

  // Resume all paused downloads
  function resumeAllPaused() {
    const paused = queue.items.filter(i => i.status === 'paused')
    for (const item of paused) {
      item.status = 'queued'
    }

    // Start processing if idle
    if (queue.status === 'idle') {
      processQueue()
    }
  }

  // Remove completed/failed/paused item from list
  function removeItem(id: string) {
    const idx = queue.items.findIndex(i => i.id === id)
    if (idx >= 0 && ['completed', 'failed', 'paused'].includes(queue.items[idx].status)) {
      queue.items.splice(idx, 1)
    }
  }

  // Clear all completed downloads
  function clearCompleted() {
    queue.items = queue.items.filter(i => i.status !== 'completed')
  }

  // Clear all failed downloads
  function clearFailed() {
    queue.items = queue.items.filter(i => i.status !== 'failed')
  }

  // Computed helpers
  const currentDownload = computed(() =>
    queue.items.find(i => i.status === 'downloading')
  )

  const queuedItems = computed(() =>
    queue.items.filter(i => i.status === 'queued')
  )

  const completedItems = computed(() =>
    queue.items.filter(i => i.status === 'completed')
  )

  const failedItems = computed(() =>
    queue.items.filter(i => i.status === 'failed')
  )

  const pausedItems = computed(() =>
    queue.items.filter(i => i.status === 'paused')
  )

  const hasItems = computed(() => queue.items.length > 0)

  const activeCount = computed(() =>
    queue.items.filter(i => i.status === 'queued' || i.status === 'downloading').length
  )

  const hasPaused = computed(() =>
    queue.items.some(i => i.status === 'paused')
  )

  return {
    // State (readonly to prevent external mutations)
    queue: readonly(queue) as DeepReadonly<DownloadQueue>,

    // Computed
    currentDownload,
    queuedItems,
    completedItems,
    failedItems,
    pausedItems,
    hasItems,
    activeCount,
    hasPaused,

    // Actions
    addToQueue,
    cancelDownload,
    retryDownload,
    resumeDownload,
    resumeAllPaused,
    removeItem,
    clearCompleted,
    clearFailed,
    loadPendingDownloads
  }
}
