/**
 * Composable for managing GitHub PAT authentication in localStorage.
 * Token is stored client-side only and passed with each git remote operation.
 */

const STORAGE_KEY = 'ComfyGit.GitHubPAT'

/**
 * Check if a remote URL uses SSH format (won't work with PAT auth)
 */
export function isRemoteSsh(url: string): boolean {
  return url.startsWith('git@') || url.startsWith('ssh://')
}

/**
 * Check if a remote URL uses HTTPS format (compatible with PAT auth)
 */
export function isRemoteHttps(url: string): boolean {
  return url.startsWith('https://') || url.startsWith('http://')
}

/**
 * Git authentication composable.
 * Manages GitHub PAT storage in browser localStorage.
 */
export function useGitAuth() {
  /**
   * Get the stored PAT token, or null if not set.
   */
  function getToken(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY)
    } catch {
      // localStorage may be unavailable (e.g., in incognito mode on some browsers)
      return null
    }
  }

  /**
   * Store a PAT token in localStorage.
   */
  function setToken(token: string): void {
    try {
      localStorage.setItem(STORAGE_KEY, token)
    } catch (e) {
      console.error('[useGitAuth] Failed to save token:', e)
    }
  }

  /**
   * Clear the stored PAT token.
   */
  function clearToken(): void {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {
      console.error('[useGitAuth] Failed to clear token:', e)
    }
  }

  /**
   * Check if a PAT token is stored.
   */
  function hasToken(): boolean {
    const token = getToken()
    return token !== null && token.length > 0
  }

  return {
    getToken,
    setToken,
    clearToken,
    hasToken,
    isRemoteSsh,
    isRemoteHttps
  }
}
