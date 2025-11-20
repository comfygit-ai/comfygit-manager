/**
 * ComfyGit Panel Theme System
 *
 * Available themes:
 * - default: Orange accent, standard dark UI
 * - phosphor: CRT terminal aesthetic with green phosphor glow
 * - swiss: Editorial/magazine typography with elegant minimalism
 * - soft: Organic gradients and glass morphism
 * - brutal: Neo-brutalist with chunky borders and primary colors
 */

export type ThemeName = 'default' | 'phosphor' | 'swiss' | 'soft' | 'brutal'

// Theme CSS imports (will be bundled)
import './base.css'
import defaultCss from './default.css?inline'
import phosphorCss from './phosphor.css?inline'
import swissCss from './swiss.css?inline'
import softCss from './soft.css?inline'
import brutalCss from './brutal.css?inline'

const themeStyles: Record<ThemeName, string> = {
  default: defaultCss,
  phosphor: phosphorCss,
  swiss: swissCss,
  soft: softCss,
  brutal: brutalCss
}

let currentTheme: ThemeName = 'default'
let themeStyleElement: HTMLStyleElement | null = null

/**
 * Get the current theme from URL params or localStorage
 */
export function getInitialTheme(): ThemeName {
  // Check URL param first
  const urlParams = new URLSearchParams(window.location.search)
  const urlTheme = urlParams.get('comfygit-theme') as ThemeName
  if (urlTheme && urlTheme in themeStyles) {
    return urlTheme
  }

  // Check localStorage
  const savedTheme = localStorage.getItem('comfygit-theme') as ThemeName
  if (savedTheme && savedTheme in themeStyles) {
    return savedTheme
  }

  return 'default'
}

/**
 * Apply a theme by injecting its CSS
 */
export function applyTheme(theme: ThemeName): void {
  currentTheme = theme
  localStorage.setItem('comfygit-theme', theme)

  // Remove existing theme styles
  if (themeStyleElement) {
    themeStyleElement.remove()
  }

  // Create new style element
  themeStyleElement = document.createElement('style')
  themeStyleElement.id = 'comfygit-theme-styles'
  themeStyleElement.setAttribute('data-theme', theme)

  // Set theme-specific CSS
  themeStyleElement.textContent = themeStyles[theme]
  document.head.appendChild(themeStyleElement)

  // Set data attribute on body for theme-specific selectors
  document.body.setAttribute('data-comfygit-theme', theme)

  console.log(`[ComfyGit] Applied theme: ${theme}`)
}

/**
 * Get list of available themes with metadata
 */
export function getAvailableThemes(): Array<{ id: ThemeName; name: string; description: string }> {
  return [
    {
      id: 'default',
      name: 'Default',
      description: 'Standard dark UI with orange accent'
    },
    {
      id: 'phosphor',
      name: 'Phosphor Terminal',
      description: 'CRT monitor aesthetic with green phosphor glow'
    },
    {
      id: 'swiss',
      name: 'Swiss Editorial',
      description: 'Clean typography with editorial elegance'
    },
    {
      id: 'soft',
      name: 'Soft Machine',
      description: 'Organic gradients and glass morphism'
    },
    {
      id: 'brutal',
      name: 'Neo-Brutal',
      description: 'Bold chunky borders with primary colors'
    }
  ]
}

export function getCurrentTheme(): ThemeName {
  return currentTheme
}

// Register theme CSS (called from theme files)
export function registerTheme(name: ThemeName, css: string): void {
  themeStyles[name] = css
}
