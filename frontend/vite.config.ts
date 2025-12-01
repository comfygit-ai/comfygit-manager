import { fileURLToPath, URL } from 'node:url'
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Read version from pyproject.toml
function getVersion(): string {
  try {
    const pyproject = readFileSync('../pyproject.toml', 'utf-8')
    const match = pyproject.match(/^version\s*=\s*"([^"]+)"/m)
    return match ? match[1] : '0.0.0'
  } catch {
    return '0.0.0'
  }
}

const APP_VERSION = getVersion()

export default defineConfig({
  plugins: [vue()],
  define: {
    __APP_VERSION__: JSON.stringify(APP_VERSION),
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: './src/main.ts',
      formats: ['es'],
      fileName: 'comfygit-panel'
    },
    rollupOptions: {
      external: [
        // ComfyUI scripts (relative from js/ output dir)
        '../../scripts/app.js',
        '../../scripts/api.js',
        // Runtime-provided dependencies
        'vue',
        'vue-i18n',
        'pinia',
        /^primevue\/?.*/,
        /^@primevue\/themes\/?.*/,
      ],
      output: {
        dir: '../js',
        entryFileNames: 'comfygit-panel.js',
        assetFileNames: '[name].[ext]'
      }
    },
    outDir: '../js',
    emptyOutDir: false,
    sourcemap: false,
    cssCodeSplit: false,
    // Inline CSS into JS bundle
    cssMinify: true
  },
  server: {
    port: 5173,
    proxy: {
      '/v2': 'http://127.0.0.1:8188',
      '/ws': {
        target: 'ws://127.0.0.1:8188',
        ws: true
      }
    }
  }
})
