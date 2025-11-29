import { app } from '../../scripts/app.js'
import { createApp, h, ref, watch } from 'vue'
import ComfyGitPanel from '@/components/ComfyGitPanel.vue'
import CommitPopover from '@/components/CommitPopover.vue'
import ModelDownloadQueue from '@/components/ModelDownloadQueue.vue'
import { useModelDownloadQueue } from '@/composables/useModelDownloadQueue'
import { isMockApi } from '@/services/mockApi'
import type { ComfyGitStatus } from '@/types/comfygit'
import { getInitialTheme, applyTheme } from '@/themes'

// Load component CSS
const cssLink = document.createElement('link')
cssLink.rel = 'stylesheet'
cssLink.href = new URL('./comfygit-panel.css', import.meta.url).href
document.head.appendChild(cssLink)

// Apply initial theme
const initialTheme = getInitialTheme()
applyTheme(initialTheme)

// Expose theme switcher to console for easy testing
// Usage: window.ComfyGit.setTheme('comfy') or window.ComfyGit.setTheme('phosphor')
import { switchTheme, getCurrentTheme, type ThemeName } from '@/themes'
;(window as any).ComfyGit = {
  setTheme: (theme: ThemeName) => {
    console.log(`[ComfyGit] Switching to theme: ${theme}`)
    switchTheme(theme)
  },
  getTheme: () => {
    const current = getCurrentTheme()
    console.log(`[ComfyGit] Current theme: ${current}`)
    return current
  }
}

// Panel state
let panelOverlay: HTMLElement | null = null
let commitPopover: HTMLElement | null = null
let commitVueApp: ReturnType<typeof createApp> | null = null
let downloadQueueContainer: HTMLElement | null = null
let downloadQueueApp: ReturnType<typeof createApp> | null = null

// Global status for indicator
const globalStatus = ref<ComfyGitStatus | null>(null)

// Setup state for commit button enablement
type SetupState = 'no_workspace' | 'empty_workspace' | 'unmanaged' | 'managed'
let currentSetupState: SetupState = 'managed'

// Fetch status for commit indicator
async function fetchStatus() {
  if (!app?.api) return null
  try {
    const response = await app.api.fetchApi('/v2/comfygit/status')
    if (response.ok) {
      globalStatus.value = await response.json()
    }
  } catch {
    // Silently fail
  }
}

// Fetch setup status to determine if in managed environment
async function fetchSetupStatus() {
  // Mock mode: always return no_workspace to test disabled state
  if (isMockApi()) {
    currentSetupState = 'no_workspace'
    return
  }

  if (!app?.api) return
  try {
    const response = await app.api.fetchApi('/v2/setup/status')
    if (response.ok) {
      const data = await response.json()
      currentSetupState = data.state
    }
  } catch {
    // Silently fail
  }
}

function hasUncommittedChanges(): boolean {
  if (!globalStatus.value) return false
  const wf = globalStatus.value.workflows
  return wf.new.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0 || globalStatus.value.has_changes
}

function showPanel() {
  if (panelOverlay) {
    panelOverlay.remove()
  }

  panelOverlay = document.createElement('div')
  panelOverlay.className = 'comfygit-panel-overlay'

  const panelContainer = document.createElement('div')
  panelContainer.className = 'comfygit-panel-container'
  panelOverlay.appendChild(panelContainer)

  panelOverlay.addEventListener('click', (e) => {
    if (e.target === panelOverlay) closePanel()
  })

  const escHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePanel()
      document.removeEventListener('keydown', escHandler)
    }
  }
  document.addEventListener('keydown', escHandler)

  const vueApp = createApp({
    render: () => h(ComfyGitPanel, {
      onClose: closePanel,
      onStatusUpdate: async (status: ComfyGitStatus) => {
        globalStatus.value = status
        updateCommitIndicator()
        // Also refresh setup state in case user switched environments
        await fetchSetupStatus()
        updateCommitButtonState()
      }
    })
  })

  vueApp.mount(panelContainer)
  document.body.appendChild(panelOverlay)
}

function closePanel() {
  if (panelOverlay) {
    panelOverlay.remove()
    panelOverlay = null
  }
}

function showCommitPopover(anchorElement: HTMLElement) {
  closeCommitPopover()

  commitPopover = document.createElement('div')
  commitPopover.className = 'comfygit-commit-popover-container'

  // Position below the button
  const rect = anchorElement.getBoundingClientRect()
  commitPopover.style.position = 'fixed'
  commitPopover.style.top = `${rect.bottom + 8}px`
  commitPopover.style.right = `${window.innerWidth - rect.right}px`
  commitPopover.style.zIndex = '10001'

  // Close on outside click
  const clickOutsideHandler = (e: MouseEvent) => {
    if (commitPopover && !commitPopover.contains(e.target as Node) && e.target !== anchorElement) {
      closeCommitPopover()
      document.removeEventListener('mousedown', clickOutsideHandler)
    }
  }
  setTimeout(() => document.addEventListener('mousedown', clickOutsideHandler), 0)

  // Close on Escape
  const escHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeCommitPopover()
      document.removeEventListener('keydown', escHandler)
    }
  }
  document.addEventListener('keydown', escHandler)

  commitVueApp = createApp({
    render: () => h(CommitPopover, {
      status: globalStatus.value,
      onClose: closeCommitPopover,
      onCommitted: () => {
        closeCommitPopover()
        fetchStatus().then(updateCommitIndicator)
      }
    })
  })

  commitVueApp.mount(commitPopover)
  document.body.appendChild(commitPopover)
}

function closeCommitPopover() {
  if (commitVueApp) {
    commitVueApp.unmount()
    commitVueApp = null
  }
  if (commitPopover) {
    commitPopover.remove()
    commitPopover = null
  }
}

function mountDownloadQueue() {
  if (downloadQueueContainer) return // Already mounted

  downloadQueueContainer = document.createElement('div')
  downloadQueueContainer.className = 'comfygit-download-queue-root'

  downloadQueueApp = createApp({
    render: () => h(ModelDownloadQueue)
  })

  downloadQueueApp.mount(downloadQueueContainer)
  document.body.appendChild(downloadQueueContainer)
  console.log('[ComfyGit] Model download queue mounted')
}

// Update commit button indicator and disabled state
let commitButton: HTMLButtonElement | null = null

function updateCommitIndicator() {
  if (!commitButton) return
  const indicator = commitButton.querySelector('.commit-indicator') as HTMLElement
  if (indicator) {
    indicator.style.display = hasUncommittedChanges() ? 'block' : 'none'
  }
}

function updateCommitButtonState() {
  if (!commitButton) return
  const isDisabled = currentSetupState !== 'managed'
  commitButton.disabled = isDisabled
  commitButton.title = isDisabled
    ? 'Commit disabled - switch to a managed environment first'
    : 'Quick Commit'
}

// Inject styles
const styles = document.createElement('style')
styles.textContent = `
  .comfygit-panel-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .comfygit-panel-container {
    width: var(--cg-panel-width, 580px);
    max-width: 90vw;
    max-height: 80vh;
    display: flex;
  }

  .comfygit-btn-group {
    display: flex;
    gap: 0;
    margin-right: 4px;
    order: -1;
  }

  .comfygit-panel-btn,
  .comfygit-commit-btn {
    height: 32px;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .comfygit-panel-btn {
    background: linear-gradient(180deg, var(--cg-btn-gradient-start, #fb923c) 0%, var(--cg-btn-gradient-end, #ea580c) 100%) !important;
    color: white !important;
    border: none !important;
    border-radius: 4px 0 0 4px !important;
    box-shadow: var(--cg-btn-shadow-inset, inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15)) !important;
  }

  .comfygit-panel-btn:hover {
    background: linear-gradient(180deg, var(--cg-btn-gradient-start, #fb923c) 0%, var(--cg-btn-gradient-end, #ea580c) 100%) !important;
    filter: brightness(1.1);
  }

  .comfygit-commit-btn {
    background: linear-gradient(180deg, #525252 0%, #3f3f3f 100%) !important;
    color: white !important;
    border: none !important;
    border-left: 1px solid rgba(0, 0, 0, 0.3) !important;
    border-radius: 0 4px 4px 0 !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
    position: relative;
  }

  .comfygit-commit-btn:hover:not(:disabled) {
    background: linear-gradient(180deg, #404040 0%, #2e2e2e 100%) !important;
  }

  .comfygit-commit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .commit-indicator {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 8px;
    height: 8px;
    background: #fbbf24;
    border-radius: 50%;
    display: none;
  }

  .comfygit-commit-popover-container {
    animation: popoverFadeIn 0.15s ease-out;
  }

  @keyframes popoverFadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
document.head.appendChild(styles)

// Register extension
app.registerExtension({
  name: 'Comfy.ComfyGitPanel',

  async setup() {
    // Create button group
    const btnGroup = document.createElement('div')
    btnGroup.className = 'comfygit-btn-group'

    // ComfyGit panel button (orange)
    const panelButton = document.createElement('button')
    panelButton.className = 'comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn'
    panelButton.textContent = 'ComfyGit'
    panelButton.title = 'ComfyGit Control Panel'
    panelButton.onclick = showPanel

    // Commit button (ash gray)
    commitButton = document.createElement('button')
    commitButton.className = 'comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn'
    commitButton.innerHTML = 'Commit <span class="commit-indicator"></span>'
    commitButton.title = 'Quick Commit'
    commitButton.onclick = () => showCommitPopover(commitButton!)

    btnGroup.appendChild(panelButton)
    btnGroup.appendChild(commitButton)

    // Insert before settings button
    if (app.menu?.settingsGroup?.element) {
      app.menu.settingsGroup.element.before(btnGroup)
      console.log('[ComfyGit] Control Panel buttons added to toolbar')
    }

    // Mount global download queue
    mountDownloadQueue()

    // Load any pending downloads from previous session
    const { loadPendingDownloads } = useModelDownloadQueue()
    loadPendingDownloads()

    // Initial status fetch for indicator and setup state
    await Promise.all([fetchStatus(), fetchSetupStatus()])
    updateCommitIndicator()
    updateCommitButtonState()

    // Refresh status periodically (fallback for external changes)
    setInterval(async () => {
      await Promise.all([fetchStatus(), fetchSetupStatus()])
      updateCommitIndicator()
      updateCommitButtonState()
    }, 30000)

    // Register custom WebSocket event type with ComfyUI API
    // CRITICAL: Use the imported 'app' object, NOT window.app (which doesn't exist yet)
    const api = (app as any).api

    if (api) {
      api.addEventListener('comfygit:workflow-changed', async (event: CustomEvent) => {
        const { change_type, workflow_name } = event.detail
        console.log(`[ComfyGit] Workflow ${change_type}: ${workflow_name}`)

        // Trigger immediate status check
        await fetchStatus()
        updateCommitIndicator()
      })

      console.log('[ComfyGit] Registered workflow file change listener')

      // ========== REFRESH PROMPT: Show notification after git operations ==========
      let wasConnected = false

      api.addEventListener('status', async (event: CustomEvent) => {
        const isConnected = event.detail != null

        // Detect reconnection after disconnect (server restart from git operation)
        if (isConnected && !wasConnected) {
          const pendingRefresh = sessionStorage.getItem('ComfyGit.PendingRefresh')
          if (pendingRefresh) {
            sessionStorage.removeItem('ComfyGit.PendingRefresh')

            // Check if auto-refresh is enabled
            const autoRefresh = localStorage.getItem('ComfyGit.Settings.AutoRefresh') === 'true'

            if (autoRefresh) {
              console.log('[ComfyGit] Auto-refresh enabled, reloading page...')
              clearWorkflowStateAndReload()
            } else {
              showRefreshNotification()
            }
          }
        }

        wasConnected = isConnected
      })

      function clearWorkflowStateAndReload() {
        // Clear all workflow state so ComfyUI starts fresh after refresh
        localStorage.removeItem('workflow')
        localStorage.removeItem('Comfy.PreviousWorkflow')
        localStorage.removeItem('Comfy.OpenWorkflowsPaths')
        localStorage.removeItem('Comfy.ActiveWorkflowIndex')

        // Clear workflow content from sessionStorage
        Object.keys(sessionStorage).forEach(key => {
          if (key.startsWith('workflow:') ||
              key.startsWith('Comfy.OpenWorkflowsPaths:') ||
              key.startsWith('Comfy.ActiveWorkflowIndex:')) {
            sessionStorage.removeItem(key)
          }
        })

        // Reload the page
        window.location.reload()
      }

      function showRefreshNotification() {
        // Create toast container
        const toast = document.createElement('div')
        toast.style.cssText = `
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 16px 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 10000;
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: sans-serif;
          font-size: 14px;
          color: var(--fg-color);
        `

        // Message
        const message = document.createElement('span')
        message.textContent = 'Workflows updated - refresh required'
        toast.appendChild(message)

        // Refresh button
        const refreshBtn = document.createElement('button')
        refreshBtn.textContent = 'Refresh'
        refreshBtn.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `
        refreshBtn.onmouseover = () => refreshBtn.style.background = 'var(--comfy-input-bg)'
        refreshBtn.onmouseout = () => refreshBtn.style.background = 'var(--comfy-menu-bg)'
        refreshBtn.onclick = () => clearWorkflowStateAndReload()
        toast.appendChild(refreshBtn)

        // Close button
        const closeBtn = document.createElement('button')
        closeBtn.textContent = '×'
        closeBtn.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `
        closeBtn.onmouseover = () => closeBtn.style.opacity = '1'
        closeBtn.onmouseout = () => closeBtn.style.opacity = '0.6'
        closeBtn.onclick = () => toast.remove()
        toast.appendChild(closeBtn)

        document.body.appendChild(toast)
        console.log('[ComfyGit] Refresh notification displayed')
      }

      console.log('[ComfyGit] Refresh notification system initialized')
    }
  }
})
