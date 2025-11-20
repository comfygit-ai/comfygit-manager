import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchJson } from '@/api/client'

interface InstalledPack {
  cnr_id: string
  aux_id: string
  ver: string
  enabled: boolean
  name: string
}

export const useComfyUIStore = defineStore('comfyui', () => {
  const debugInfo = ref<Record<string, unknown>>({})
  const installedPacks = ref<Record<string, InstalledPack>>({})

  async function fetchDebugInfo() {
    try {
      debugInfo.value = await fetchJson('/v2/debug/comfyui_info')
    } catch (e) {
      console.error('Failed to fetch debug info:', e)
    }
  }

  async function fetchInstalledPacks() {
    try {
      installedPacks.value = await fetchJson('/v2/customnode/installed')
    } catch (e) {
      console.error('Failed to fetch installed packs:', e)
    }
  }

  return {
    debugInfo,
    installedPacks,
    fetchDebugInfo,
    fetchInstalledPacks
  }
})
