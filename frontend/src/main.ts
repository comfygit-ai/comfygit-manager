import { app } from '../../scripts/app.js'
import { createApp, h, ref, watch } from 'vue'
import ComfyGitPanel from '@/components/ComfyGitPanel.vue'
import CommitPopover from '@/components/CommitPopover.vue'
import ModelDownloadQueue from '@/components/ModelDownloadQueue.vue'
import MockControlPopover from '@/components/MockControlPopover.vue'
import MissingResourcesPopup from '@/components/MissingResourcesPopup.vue'
import { useModelDownloadQueue } from '@/composables/useModelDownloadQueue'
import { isMockApi } from '@/services/mockApi'
import type { ComfyGitStatus } from '@/types/comfygit'
import { getInitialTheme, applyTheme } from '@/themes'
import { getCompletedTaskError } from '@/utils/managerTaskError'

// Load component CSS
const cssLink = document.createElement('link')
cssLink.rel = 'stylesheet'
cssLink.href = new URL('./comfygit-panel.css', import.meta.url).href
document.head.appendChild(cssLink)

// Apply initial theme
const initialTheme = getInitialTheme()
applyTheme(initialTheme)

// Reset panel tab to default on page load (fresh navigation / refresh)
// sessionStorage persists across close/reopen within a page, but we want
// a fresh page load to always start on the status tab.
sessionStorage.removeItem('ComfyGit.LastView')
sessionStorage.removeItem('ComfyGit.LastSection')

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
let mockControlPopover: HTMLElement | null = null
let mockControlApp: ReturnType<typeof createApp> | null = null
let missingResourcesContainer: HTMLElement | null = null
let missingResourcesApp: ReturnType<typeof createApp> | null = null

// Global status for indicator
const globalStatus = ref<ComfyGitStatus | null>(null)

// Setup state for commit button enablement
type SetupState = 'no_workspace' | 'empty_workspace' | 'unmanaged' | 'managed'
let currentSetupState: SetupState = 'managed'
let hasComfyUIManager = false

// Button group reference
let buttonGroup: HTMLElement | null = null

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
    hasComfyUIManager = true
    return
  }

  if (!app?.api) return
  try {
    const response = await app.api.fetchApi('/v2/setup/status')
    if (response.ok) {
      const data = await response.json()
      currentSetupState = data.state
      hasComfyUIManager = data.has_comfyui_manager ?? false
    }
  } catch {
    // Silently fail
  }
}

// Hide the built-in ComfyUI Manager button when non-managed + ComfyUI-Manager present
function hideBuiltinManagerButton() {
  // Only hide if: non-managed environment AND ComfyUI-Manager is installed
  if (currentSetupState === 'managed' || !hasComfyUIManager) return

  // Find the built-in Manager button (has "Manager" text, no icon)
  const buttons = document.querySelectorAll('button.comfyui-button')
  for (const btn of buttons) {
    const text = btn.textContent?.trim()
    if (text === 'Manager' && !btn.querySelector('svg, i, img')) {
      (btn as HTMLElement).style.display = 'none'
      console.log('[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)')
      return
    }
  }
}

function hasUncommittedChanges(): boolean {
  if (!globalStatus.value) return false
  const wf = globalStatus.value.workflows
  return wf.new.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0 || globalStatus.value.has_changes
}

function showPanel(initialView?: string) {
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
      initialView,
      onClose: closePanel,
      onStatusUpdate: async (status: ComfyGitStatus) => {
        globalStatus.value = status
        updateCommitIndicator()
        // Also refresh setup state in case user switched environments
        await fetchSetupStatus()
        updateCommitButtonState()
        hideBuiltinManagerButton()  // Re-check after environment switch
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
      onCommitted: (result: { success: boolean; message: string }) => {
        closeCommitPopover()
        showCommitToast(result.success, result.message)
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

function showCommitToast(success: boolean, message: string) {
  const toast = document.createElement('div')
  const borderColor = success ? '#22c55e' : '#ef4444'
  const bgColor = success ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'

  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color, #1a1a1a);
    border: 1px solid ${borderColor};
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10002;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: sans-serif;
    font-size: 13px;
    color: var(--fg-color, #fff);
    animation: toastSlideUp 0.2s ease;
  `

  // Icon
  const icon = document.createElement('span')
  icon.textContent = success ? '✓' : '✕'
  icon.style.cssText = `
    color: ${borderColor};
    font-weight: bold;
    font-size: 14px;
  `
  toast.appendChild(icon)

  // Message
  const msgEl = document.createElement('span')
  msgEl.textContent = message
  toast.appendChild(msgEl)

  document.body.appendChild(toast)

  // Auto-remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transition = 'opacity 0.2s ease'
    setTimeout(() => toast.remove(), 200)
  }, 3000)
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

function showMockControlPopover(anchorElement: HTMLElement) {
  closeMockControlPopover()

  mockControlPopover = document.createElement('div')
  mockControlPopover.className = 'comfygit-mock-control-container'

  // Position below the button
  const rect = anchorElement.getBoundingClientRect()
  mockControlPopover.style.position = 'fixed'
  mockControlPopover.style.top = `${rect.bottom + 8}px`
  mockControlPopover.style.right = `${window.innerWidth - rect.right}px`
  mockControlPopover.style.zIndex = '10001'

  // Close on outside click
  const clickOutsideHandler = (e: MouseEvent) => {
    if (mockControlPopover && !mockControlPopover.contains(e.target as Node) && e.target !== anchorElement) {
      closeMockControlPopover()
      document.removeEventListener('mousedown', clickOutsideHandler)
    }
  }
  setTimeout(() => document.addEventListener('mousedown', clickOutsideHandler), 0)

  // Close on Escape
  const escHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMockControlPopover()
      document.removeEventListener('keydown', escHandler)
    }
  }
  document.addEventListener('keydown', escHandler)

  mockControlApp = createApp({
    render: () => h(MockControlPopover, {
      onClose: closeMockControlPopover
    })
  })

  mockControlApp.mount(mockControlPopover)
  document.body.appendChild(mockControlPopover)
}

function closeMockControlPopover() {
  if (mockControlApp) {
    mockControlApp.unmount()
    mockControlApp = null
  }
  if (mockControlPopover) {
    mockControlPopover.remove()
    mockControlPopover = null
  }
}

function mountMissingResourcesPopup() {
  if (missingResourcesContainer) return // Already mounted

  missingResourcesContainer = document.createElement('div')
  missingResourcesContainer.className = 'comfygit-missing-resources-root'

  missingResourcesApp = createApp({
    render: () => h(MissingResourcesPopup)
  })

  missingResourcesApp.mount(missingResourcesContainer)
  document.body.appendChild(missingResourcesContainer)
  console.log('[ComfyGit] Missing resources popup mounted')
}

// Update commit button indicator and disabled state
let commitButton: HTMLButtonElement | null = null
let mockButton: HTMLButtonElement | null = null

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

  .comfygit-mock-btn {
    background: linear-gradient(180deg, #7c3aed 0%, #5b21b6 100%) !important;
    color: white !important;
    border: none !important;
    border-left: 1px solid rgba(0, 0, 0, 0.3) !important;
    border-radius: 0 4px 4px 0 !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
  }

  .comfygit-mock-btn:hover {
    background: linear-gradient(180deg, #8b5cf6 0%, #6d28d9 100%) !important;
  }

  /* Adjust commit button border-radius when mock button is present */
  .comfygit-btn-group:has(.comfygit-mock-btn) .comfygit-commit-btn {
    border-radius: 0 !important;
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

  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: 'ComfyGit.OpenPanel',
      label: 'Open ComfyGit Panel',
      icon: 'pi pi-folder-open',
      function: () => showPanel()
    },
    {
      id: 'ComfyGit.QuickCommit',
      label: 'Quick Commit',
      icon: 'pi pi-check',
      function: () => {
        if (commitButton && !commitButton.disabled) {
          showCommitPopover(commitButton)
        }
      }
    }
  ],

  // Default keybindings (user can customize in Settings → Keyboard Shortcuts)
  keybindings: [
    {
      commandId: 'ComfyGit.OpenPanel',
      combo: { key: 'l', alt: true, shift: true }
    },
    {
      commandId: 'ComfyGit.QuickCommit',
      combo: { key: 'k', alt: true, shift: true }
    }
  ],

  // Hook into workflow loading to intercept missing resources
  async beforeConfigureGraph(graphData: any, _missingNodeTypes: any[]) {
    // Disable ComfyUI's built-in popups - we show our own
    try {
      await Promise.all([
        app.ui.settings.setSettingValueAsync('Comfy.Workflow.ShowMissingModelsWarning', false),
        app.ui.settings.setSettingValueAsync('Comfy.Workflow.ShowMissingNodesWarning', false)
      ])
    } catch (e) {
      console.warn('[ComfyGit] Failed to disable built-in warnings:', e)
    }

    // Store workflow data for afterConfigureGraph (separate hook calls)
    ;(window as any).__comfygit_pending_workflow = graphData
  },

  async afterConfigureGraph(_missingNodeTypes: any[]) {
    const workflow = (window as any).__comfygit_pending_workflow
    if (!workflow) return
    delete (window as any).__comfygit_pending_workflow

    // Dispatch event for MissingResourcesPopup to handle
    window.dispatchEvent(new CustomEvent('comfygit:workflow-loaded', {
      detail: { workflow }
    }))
  },

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

    // Mock control button (only in mock mode)
    if (isMockApi()) {
      mockButton = document.createElement('button')
      mockButton.className = 'comfyui-button comfyui-menu-mobile-collapse comfygit-mock-btn'
      mockButton.textContent = 'Mock'
      mockButton.title = 'Mock Controls - Simulate different environment states'
      mockButton.onclick = () => showMockControlPopover(mockButton!)
      btnGroup.appendChild(mockButton)
      console.log('[ComfyGit] Mock mode enabled - Mock Control button added')
    }

    // Insert before settings button
    if (app.menu?.settingsGroup?.element) {
      app.menu.settingsGroup.element.before(btnGroup)
      buttonGroup = btnGroup  // Store reference for visibility management
      console.log('[ComfyGit] Control Panel buttons added to toolbar')
    }

    // Mount global download queue
    mountDownloadQueue()

    // Mount missing resources popup
    mountMissingResourcesPopup()

    // Listen for panel open requests from other components
    window.addEventListener('comfygit:open-panel', ((event: CustomEvent) => {
      const initialView = event.detail?.initialView
      showPanel(initialView)
    }) as EventListener)

    // Load any pending downloads from previous session
    const { loadPendingDownloads } = useModelDownloadQueue()
    loadPendingDownloads()

    // Initial status fetch for indicator and setup state
    await Promise.all([fetchStatus(), fetchSetupStatus()])
    updateCommitIndicator()
    updateCommitButtonState()
    hideBuiltinManagerButton()

    // Re-check shortly after (built-in Manager button may render after us)
    setTimeout(hideBuiltinManagerButton, 100)

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

            // Check if auto-refresh is enabled (default to true if not set)
            const autoRefresh = localStorage.getItem('ComfyGit.Settings.AutoRefresh') !== 'false'

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

      // ========== MANAGER ERROR TOAST: Show errors for failed node installs ==========
      api.addEventListener('cm-task-completed', (event: CustomEvent) => {
        const errorMsg = getCompletedTaskError(event.detail)
        if (errorMsg) {
          showManagerErrorToast(errorMsg)
        }
      })

      function showManagerErrorToast(message: string) {
        // Remove any existing error toast
        const existing = document.getElementById('comfygit-error-toast')
        if (existing) existing.remove()

        const toast = document.createElement('div')
        toast.id = 'comfygit-error-toast'
        toast.style.cssText = `
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #1a1a1a;
          border: 2px solid #e53935;
          border-radius: 8px;
          padding: 16px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          z-index: 999999;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: sans-serif;
          font-size: 14px;
          color: #fff;
          max-width: 600px;
        `

        // Error icon
        const icon = document.createElement('span')
        icon.textContent = '⚠️'
        icon.style.fontSize = '20px'
        toast.appendChild(icon)

        // Message container
        const msgContainer = document.createElement('div')
        msgContainer.style.cssText = 'flex: 1; display: flex; flex-direction: column; gap: 4px;'

        const title = document.createElement('div')
        title.textContent = 'Node installation failed'
        title.style.cssText = 'font-weight: 600; color: #e53935;'
        msgContainer.appendChild(title)

        const detail = document.createElement('div')
        detail.textContent = 'Dependency conflict detected'
        detail.style.cssText = 'font-size: 12px; opacity: 0.8;'
        msgContainer.appendChild(detail)

        toast.appendChild(msgContainer)

        // View Logs button
        const viewLogsBtn = document.createElement('button')
        viewLogsBtn.textContent = 'View Logs'
        viewLogsBtn.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `
        viewLogsBtn.onmouseover = () => viewLogsBtn.style.background = '#c62828'
        viewLogsBtn.onmouseout = () => viewLogsBtn.style.background = '#e53935'
        viewLogsBtn.onclick = () => {
          toast.remove()
          showPanel('debug-env')
        }
        toast.appendChild(viewLogsBtn)

        // Close button
        const closeBtn = document.createElement('button')
        closeBtn.textContent = '×'
        closeBtn.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
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
        console.log('[ComfyGit] Manager error toast displayed:', message)

        // Auto-dismiss after 10 seconds (longer to give time to click View Logs)
        setTimeout(() => {
          if (document.getElementById('comfygit-error-toast')) {
            toast.remove()
          }
        }, 10000)
      }

      console.log('[ComfyGit] Manager error notification system initialized')

      // ========== RESTART REQUIRED TOAST: Show after nodes installed ==========
      window.addEventListener('comfygit:nodes-installed', (event: Event) => {
        const customEvent = event as CustomEvent
        const { count = 1 } = customEvent.detail || {}
        showRestartRequiredNotification(count)
      })

      function showRestartRequiredNotification(nodeCount: number) {
        // Remove any existing restart toast
        const existing = document.getElementById('comfygit-restart-toast')
        if (existing) existing.remove()

        const toast = document.createElement('div')
        toast.id = 'comfygit-restart-toast'
        toast.style.cssText = `
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #1e1e1e;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 12px 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          z-index: 999999;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: sans-serif;
          font-size: 14px;
          color: #fff;
          max-width: 550px;
        `

        // Success icon (matches Manager style)
        const icon = document.createElement('span')
        icon.textContent = '✅'
        icon.style.fontSize = '20px'
        toast.appendChild(icon)

        // Message container
        const msgContainer = document.createElement('div')
        msgContainer.style.cssText = 'flex: 1; display: flex; flex-direction: column; gap: 2px;'

        const title = document.createElement('div')
        title.textContent = 'To apply changes, please restart ComfyUI'
        title.style.cssText = 'font-weight: 500; color: #fff;'
        msgContainer.appendChild(title)

        const detail = document.createElement('div')
        detail.textContent = `${nodeCount} node package${nodeCount > 1 ? 's' : ''} ready to install`
        detail.style.cssText = 'font-size: 12px; opacity: 0.7;'
        msgContainer.appendChild(detail)

        toast.appendChild(msgContainer)

        // Restart button (matches Manager's bordered style)
        const restartBtn = document.createElement('button')
        restartBtn.textContent = 'Apply Changes'
        restartBtn.style.cssText = `
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
          border-radius: 20px;
          padding: 6px 14px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          transition: background 0.2s;
        `
        restartBtn.onmouseover = () => restartBtn.style.background = 'rgba(255,255,255,0.1)'
        restartBtn.onmouseout = () => restartBtn.style.background = 'transparent'
        restartBtn.onclick = async () => {
          restartBtn.disabled = true
          restartBtn.textContent = 'Restarting...'
          restartBtn.style.opacity = '0.7'

          // Update toast appearance for restarting state
          title.textContent = 'Restarting...'
          detail.textContent = 'Applying changes, please wait...'

          try {
            // Set up reconnection handler BEFORE triggering reboot
            const onReconnect = async () => {
              console.log('[ComfyGit] Reconnected after restart, refreshing node definitions...')

              try {
                // Refresh node definitions (like Manager does)
                if ((app as any).refreshComboInNodes) {
                  await (app as any).refreshComboInNodes()
                  console.log('[ComfyGit] Node definitions refreshed successfully')
                }

                // Update toast to show success
                icon.textContent = '✅'
                title.textContent = 'Nodes Installed'
                title.style.color = '#4caf50'
                detail.textContent = `${nodeCount} package${nodeCount > 1 ? 's' : ''} installed successfully!`
                toast.style.borderColor = '#4caf50'
                restartBtn.style.display = 'none'

                // Auto-close after 3 seconds
                setTimeout(() => {
                  toast.remove()
                }, 3000)
              } catch (refreshErr) {
                console.error('[ComfyGit] Failed to refresh nodes:', refreshErr)
                // Still show success since restart worked
                icon.textContent = '✅'
                title.textContent = 'Restart Complete'
                title.style.color = '#4caf50'
                detail.textContent = 'Refresh the page to load new nodes.'
                toast.style.borderColor = '#4caf50'
                restartBtn.style.display = 'none'
              }
            }

            // Listen for reconnection (once)
            api.addEventListener('reconnected', onReconnect, { once: true } as any)

            // Trigger reboot
            await fetch('/v2/manager/reboot')
            // Toast will update when reconnected
          } catch (err) {
            console.error('[ComfyGit] Failed to restart:', err)
            title.textContent = 'Restart Failed'
            title.style.color = '#e53935'
            detail.textContent = 'Could not restart server. Try again.'
            toast.style.borderColor = '#e53935'
            restartBtn.textContent = 'Try Again'
            restartBtn.disabled = false
            restartBtn.style.opacity = '1'
          }
        }
        toast.appendChild(restartBtn)

        // Close button
        const closeBtn = document.createElement('button')
        closeBtn.textContent = '×'
        closeBtn.title = 'Dismiss (restart later)'
        closeBtn.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
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
        console.log(`[ComfyGit] Restart required notification displayed (${nodeCount} packages installed)`)
      }

      console.log('[ComfyGit] Restart notification system initialized')
    }
  }
})
