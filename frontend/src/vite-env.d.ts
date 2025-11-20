/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// ComfyUI app module
declare module '../../scripts/app.js' {
  interface ComfyMenu {
    settingsGroup?: {
      element: HTMLElement
    }
  }

  interface ComfyApp {
    menu?: ComfyMenu
    registerExtension: (extension: {
      name: string
      setup?: () => Promise<void> | void
    }) => void
  }

  export const app: ComfyApp
}
