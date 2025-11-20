import { app } from '../../scripts/app.js'
import { createApp, h, ref, watch } from 'vue'
import ComfyGitPanel from '@/components/ComfyGitPanel.vue'
import CommitPopover from '@/components/CommitPopover.vue'
import type { ComfyGitStatus } from '@/types/comfygit'
import { getInitialTheme, applyTheme, getAvailableThemes, getCurrentTheme, type ThemeName } from '@/themes'

// Load component CSS
const cssLink = document.createElement('link')
cssLink.rel = 'stylesheet'
cssLink.href = new URL('./comfygit-panel.css', import.meta.url).href
document.head.appendChild(cssLink)

// Apply initial theme
const initialTheme = getInitialTheme()
applyTheme(initialTheme)

// Panel state
let panelOverlay: HTMLElement | null = null
let commitPopover: HTMLElement | null = null
let commitVueApp: ReturnType<typeof createApp> | null = null

// Global status for indicator
const globalStatus = ref<ComfyGitStatus | null>(null)

// Fetch status for commit indicator
async function fetchStatus() {
  if (!window.app?.api) return null
  try {
    const response = await window.app.api.fetchApi('/v2/comfygit/status')
    if (response.ok) {
      globalStatus.value = await response.json()
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
      onStatusUpdate: (status: ComfyGitStatus) => {
        globalStatus.value = status
        updateCommitIndicator()
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

// Update commit button indicator
let commitButton: HTMLButtonElement | null = null

function updateCommitIndicator() {
  if (!commitButton) return
  const indicator = commitButton.querySelector('.commit-indicator') as HTMLElement
  if (indicator) {
    indicator.style.display = hasUncommittedChanges() ? 'block' : 'none'
  }
}

// Theme switching function
function cycleTheme() {
  const themes = getAvailableThemes()
  const currentIndex = themes.findIndex(t => t.id === getCurrentTheme())
  const nextIndex = (currentIndex + 1) % themes.length
  const nextTheme = themes[nextIndex].id as ThemeName
  applyTheme(nextTheme)

  // Show notification
  const notification = document.createElement('div')
  notification.className = 'comfygit-theme-notification'
  notification.innerHTML = `
    <strong>Theme:</strong> ${themes[nextIndex].name}
    <div class="theme-desc">${themes[nextIndex].description}</div>
  `
  document.body.appendChild(notification)
  setTimeout(() => notification.remove(), 2000)
}

// Add keyboard shortcut for theme switching (Ctrl+Shift+T)
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'T') {
    e.preventDefault()
    cycleTheme()
  }
})

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
  }

  .comfygit-panel-btn {
    background: linear-gradient(180deg, #fb923c 0%, #ea580c 100%) !important;
    color: white !important;
    border: none !important;
    border-radius: 4px 0 0 4px !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
  }

  .comfygit-panel-btn:hover {
    background: linear-gradient(180deg, #f97316 0%, #c2410c 100%) !important;
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

  .comfygit-commit-btn:hover {
    background: linear-gradient(180deg, #404040 0%, #2e2e2e 100%) !important;
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

  .comfygit-theme-notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 13px;
    z-index: 10002;
    animation: notificationSlide 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .comfygit-theme-notification .theme-desc {
    font-size: 11px;
    opacity: 0.7;
    margin-top: 4px;
  }

  @keyframes notificationSlide {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
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

    // Initial status fetch for indicator
    await fetchStatus()
    updateCommitIndicator()

    // Refresh status periodically
    setInterval(async () => {
      await fetchStatus()
      updateCommitIndicator()
    }, 30000)
  }
})
