export interface ComfyApi {
  fetchApi: (endpoint: string, options?: RequestInit) => Promise<Response>
  addEventListener?: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void
  removeEventListener?: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) => void
  clientId?: string
  initialClientId?: string
  apiURL?: (endpoint: string) => string
}

function isComfyApi(value: unknown): value is ComfyApi {
  return Boolean(value && typeof (value as ComfyApi).fetchApi === 'function')
}

export function getComfyApi(): ComfyApi | null {
  const win = window as any
  const candidates = [
    win.app?.api,
    win.comfyAPI?.api?.api
  ]

  for (const candidate of candidates) {
    if (isComfyApi(candidate)) {
      return candidate
    }
  }

  return null
}

export async function fetchComfyApi(endpoint: string, options?: RequestInit): Promise<Response> {
  const api = getComfyApi()
  if (!api) {
    throw new Error('ComfyUI API not available')
  }
  return api.fetchApi(endpoint, options)
}

export function getComfyClientId(fallback = 'comfygit-panel'): string {
  const api = getComfyApi()
  return api?.clientId ?? api?.initialClientId ?? fallback
}
