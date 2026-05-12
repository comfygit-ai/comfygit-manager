const ENABLED_STORAGE_KEY = 'ComfyGit.DevAutoReload'
const PANEL_OPEN_STORAGE_KEY = 'ComfyGit.DevAutoReload.PanelOpen'

type WatchedAsset = {
  name: string
  url: string
  signature: string | null
}

function getQueryFlag(): string | null {
  const value = new URLSearchParams(window.location.search).get('comfygitDevReload')
  if (value === null) return null
  return value
}

export function isDevAutoReloadEnabled(): boolean {
  const queryFlag = getQueryFlag()
  if (queryFlag !== null) {
    const enabled = queryFlag !== '0' && queryFlag !== 'false'
    try {
      localStorage.setItem(ENABLED_STORAGE_KEY, enabled ? 'true' : 'false')
    } catch {
      // localStorage may be unavailable.
    }
    return enabled
  }

  try {
    return localStorage.getItem(ENABLED_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export function setDevPanelOpen(open: boolean) {
  if (!isDevAutoReloadEnabled()) return
  try {
    sessionStorage.setItem(PANEL_OPEN_STORAGE_KEY, open ? 'true' : 'false')
  } catch {
    // sessionStorage may be unavailable.
  }
}

export function shouldRestoreDevPanel(): boolean {
  if (!isDevAutoReloadEnabled()) return false
  try {
    return sessionStorage.getItem(PANEL_OPEN_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

async function readAssetSignature(url: string): Promise<string | null> {
  const headResponse = await fetch(url, { cache: 'no-store', method: 'HEAD' })
  if (headResponse.ok) {
    const headers = headResponse.headers
    const etag = headers.get('etag')
    const lastModified = headers.get('last-modified')
    const contentLength = headers.get('content-length')

    if (etag || lastModified) {
      return [etag, lastModified, contentLength].filter(Boolean).join(':')
    }
  }

  const response = await fetch(url, { cache: 'no-store', method: 'GET' })
  if (!response.ok) return null

  const headers = response.headers
  const metadata = [
    headers.get('etag'),
    headers.get('last-modified'),
    headers.get('content-length')
  ].filter(Boolean).join(':')

  // Some static handlers do not expose useful cache headers. The bundle is
  // small enough in dev mode that a lightweight content hash is acceptable.
  const text = await response.text()
  let hash = 0
  for (let i = 0; i < text.length; i += 1) {
    hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0
  }
  return `${metadata}:${text.length}:${hash}`
}

export async function startDevAutoReload(assetUrls: Array<{ name: string; url: string }>) {
  if (!isDevAutoReloadEnabled()) return

  const watchedAssets: WatchedAsset[] = assetUrls.map(asset => ({
    ...asset,
    signature: null
  }))

  for (const asset of watchedAssets) {
    try {
      asset.signature = await readAssetSignature(asset.url)
    } catch (error) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${asset.name}:`, error)
    }
  }

  console.log('[ComfyGit] Dev auto-reload enabled')

  let reloading = false
  window.setInterval(async () => {
    if (reloading) return

    for (const asset of watchedAssets) {
      try {
        const nextSignature = await readAssetSignature(asset.url)
        if (asset.signature && nextSignature && nextSignature !== asset.signature) {
          reloading = true
          console.log(`[ComfyGit] ${asset.name} changed, reloading page...`)
          window.setTimeout(() => window.location.reload(), 500)
          return
        }
        if (nextSignature) {
          asset.signature = nextSignature
        }
      } catch {
        // Ignore transient read failures while Vite is writing the bundle.
      }
    }
  }, 1000)
}
