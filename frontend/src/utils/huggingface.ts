export type HuggingFaceUrlKind = 'repo' | 'file' | 'unknown'

export interface HuggingFaceParsedUrl {
  kind: HuggingFaceUrlKind
  repoId?: string
  revision?: string
  path?: string // file path in repo (for kind='file')
}

function isHfHost(host: string): boolean {
  const h = host.toLowerCase()
  return h === 'huggingface.co' || h.endsWith('.huggingface.co') || h === 'hf.co'
}

export function parseHuggingFaceUrl(rawUrl: string): HuggingFaceParsedUrl {
  const url = rawUrl.trim()
  if (!url) return { kind: 'unknown' }

  let u: URL
  try {
    u = new URL(url)
  } catch {
    return { kind: 'unknown' }
  }

  if (!isHfHost(u.hostname)) return { kind: 'unknown' }

  const parts = u.pathname.replace(/^\/+/, '').split('/').filter(Boolean)

  // Ignore datasets/spaces URLs for now (model downloader MVP)
  if (parts[0] === 'datasets' || parts[0] === 'spaces') return { kind: 'unknown' }

  if (parts.length < 2) return { kind: 'unknown' }

  const repoId = `${parts[0]}/${parts[1]}`
  const rest = parts.slice(2)

  // https://huggingface.co/owner/repo
  if (rest.length === 0) {
    return { kind: 'repo', repoId, revision: 'main' }
  }

  const marker = rest[0]

  // https://huggingface.co/owner/repo/tree/main(/subdir...)
  if (marker === 'tree') {
    const revision = rest[1] || 'main'
    const path = rest.slice(2).join('/')
    return { kind: 'repo', repoId, revision, path: path || undefined }
  }

  // https://huggingface.co/owner/repo/resolve/main/path/to/file
  if (marker === 'resolve') {
    const revision = rest[1] || 'main'
    const path = rest.slice(2).join('/')
    if (!path) return { kind: 'repo', repoId, revision }
    return { kind: 'file', repoId, revision, path }
  }

  // Browser file page (not direct download)
  if (marker === 'blob') {
    const revision = rest[1] || 'main'
    const path = rest.slice(2).join('/')
    if (!path) return { kind: 'repo', repoId, revision }
    return { kind: 'file', repoId, revision, path }
  }

  // Fallback: treat as repo
  return { kind: 'repo', repoId, revision: 'main' }
}

function encodePath(path: string): string {
  return path.split('/').map(encodeURIComponent).join('/')
}

export function buildHfResolveUrl(repoId: string, revision: string, path: string): string {
  const [owner, repo] = repoId.split('/')
  return `https://huggingface.co/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/resolve/${encodeURIComponent(revision)}/${encodePath(path)}`
}
