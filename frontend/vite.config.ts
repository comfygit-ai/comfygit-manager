import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/v2': 'http://127.0.0.1:8188',
      '/ws': {
        target: 'ws://127.0.0.1:8188',
        ws: true
      },
      '/system_stats': 'http://127.0.0.1:8188',
      '/feature_flags': 'http://127.0.0.1:8188',
      '/extensions': 'http://127.0.0.1:8188'
    }
  },
  build: {
    outDir: '../web',
    emptyOutDir: true
  }
})
