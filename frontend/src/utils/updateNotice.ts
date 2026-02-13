import type { UpdateCheckResponse } from '@/types/comfygit'

export const DISMISSED_VERSION_KEY = 'ComfyGit.UpdateNotice.DismissedVersion'

export function getDismissedVersion(): string | null {
  try {
    return localStorage.getItem(DISMISSED_VERSION_KEY)
  } catch {
    return null
  }
}

export function dismissVersion(version: string): void {
  try {
    localStorage.setItem(DISMISSED_VERSION_KEY, version)
  } catch {
    // Ignore if storage is unavailable
  }
}

export function shouldShowUpdateNotice(info: UpdateCheckResponse | null): boolean {
  if (!info) return false
  if (!info.update_available) return false
  if (!info.latest_version) return false
  return getDismissedVersion() !== info.latest_version
}

