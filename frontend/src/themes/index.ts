/**
 * ComfyGit Panel Theme System
 *
 * Theme: Phosphor Terminal
 * Aesthetic: CRT terminal with green phosphor glow
 * Design System: See .claude/context/shared/designs/DESIGN_SYSTEM.md
 */

export type ThemeName = 'phosphor'

// Theme CSS imports (will be bundled)
import './base.css'
import phosphorCss from './phosphor.css?inline'

let themeStyleElement: HTMLStyleElement | null = null

/**
 * Get the initial theme (always phosphor)
 */
export function getInitialTheme(): ThemeName {
  return 'phosphor'
}

/**
 * Apply the phosphor theme by injecting its CSS
 */
export function applyTheme(theme: ThemeName = 'phosphor'): void {
  // Remove existing theme styles
  if (themeStyleElement) {
    themeStyleElement.remove()
  }

  // Create new style element
  themeStyleElement = document.createElement('style')
  themeStyleElement.id = 'comfygit-theme-styles'
  themeStyleElement.setAttribute('data-theme', 'phosphor')

  // Set phosphor theme CSS
  themeStyleElement.textContent = phosphorCss
  document.head.appendChild(themeStyleElement)

  // Set data attribute on body for theme-specific selectors
  document.body.setAttribute('data-comfygit-theme', 'phosphor')

  console.log('[ComfyGit] Applied theme: phosphor')
}

/**
 * Get the current theme (always phosphor)
 */
export function getCurrentTheme(): ThemeName {
  return 'phosphor'
}
