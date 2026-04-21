import { computed, ref } from 'vue'
import type { CloudSession, CloudUser } from '@/types/comfygit'

const CLOUD_URL_KEY = 'ComfyGit.Cloud.Url'
const DASHBOARD_URL_KEY = 'ComfyGit.Cloud.DashboardUrl'
const CLOUD_SESSION_KEY = 'ComfyGit.Cloud.Session'
const CLOUD_USER_KEY = 'ComfyGit.Cloud.User'

function readJson<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function readString(key: string, fallback = ''): string {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

const cloudUrl = ref<string>(readString(CLOUD_URL_KEY, 'http://127.0.0.1:8012'))
const dashboardUrl = ref<string>(readString(DASHBOARD_URL_KEY, ''))
const session = ref<CloudSession | null>(readJson<CloudSession>(CLOUD_SESSION_KEY))
const user = ref<CloudUser | null>(readJson<CloudUser>(CLOUD_USER_KEY))

export function useCloudAuth() {
  const isAuthenticated = computed(() => !!session.value?.access_token && !!user.value?.id)
  const authLabel = computed(() => user.value?.email || 'Not signed in')

  function setCloudUrl(value: string): void {
    cloudUrl.value = value.trim()
    try {
      localStorage.setItem(CLOUD_URL_KEY, cloudUrl.value)
    } catch (e) {
      console.error('[useCloudAuth] Failed to save cloud URL:', e)
    }
  }

  function setDashboardUrl(value: string): void {
    dashboardUrl.value = value.trim()
    try {
      localStorage.setItem(DASHBOARD_URL_KEY, dashboardUrl.value)
    } catch (e) {
      console.error('[useCloudAuth] Failed to save dashboard URL:', e)
    }
  }

  function setAuth(nextSession: CloudSession, nextUser: CloudUser): void {
    session.value = nextSession
    user.value = nextUser
    try {
      localStorage.setItem(CLOUD_SESSION_KEY, JSON.stringify(nextSession))
      localStorage.setItem(CLOUD_USER_KEY, JSON.stringify(nextUser))
    } catch (e) {
      console.error('[useCloudAuth] Failed to save auth state:', e)
    }
  }

  function clearAuth(): void {
    session.value = null
    user.value = null
    try {
      localStorage.removeItem(CLOUD_SESSION_KEY)
      localStorage.removeItem(CLOUD_USER_KEY)
    } catch (e) {
      console.error('[useCloudAuth] Failed to clear auth state:', e)
    }
  }

  return {
    cloudUrl,
    dashboardUrl,
    session,
    user,
    isAuthenticated,
    authLabel,
    setCloudUrl,
    setDashboardUrl,
    setAuth,
    clearAuth,
  }
}
