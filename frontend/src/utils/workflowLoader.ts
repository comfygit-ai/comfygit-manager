import { fetchComfyApi } from '@/utils/comfyApi'

function ensureJsonExtension(path: string): string {
  return path.toLowerCase().endsWith('.json') ? path : `${path}.json`
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean)))
}

function getUserDataCandidates(workflowName: string): string[] {
  const trimmed = workflowName.trim()
  const withExtension = ensureJsonExtension(trimmed)

  if (trimmed.startsWith('workflows/')) {
    return unique([withExtension, trimmed])
  }

  return unique([
    `workflows/${withExtension}`,
    withExtension,
    trimmed
  ])
}

function getLoadGraphWorkflowName(workflowName: string): string {
  return workflowName
    .trim()
    .replace(/^workflows\//, '')
    .replace(/\.json$/i, '')
}

async function fetchSavedWorkflow(workflowName: string): Promise<unknown> {
  const candidates = getUserDataCandidates(workflowName)
  const errors: string[] = []

  for (const candidate of candidates) {
    try {
      const response = await fetchComfyApi(`/userdata/${encodeURIComponent(candidate)}`)
      if (response.ok) {
        return response.json()
      }
      errors.push(`${candidate}: ${response.status}`)
    } catch (err) {
      errors.push(`${candidate}: ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  throw new Error(`Could not load saved workflow "${workflowName}" (${errors.join(', ')})`)
}

export async function activateSavedWorkflow(workflowName: string): Promise<void> {
  const comfyApp = (window as any).app
  if (typeof comfyApp.loadGraphData !== 'function') {
    throw new Error('ComfyUI loadGraphData is not available')
  }

  const workflowData = await fetchSavedWorkflow(workflowName)
  await comfyApp.loadGraphData(
    workflowData,
    true,
    true,
    getLoadGraphWorkflowName(workflowName),
    {
      showMissingModelsDialog: true,
      showMissingNodesDialog: true
    }
  )

  await new Promise((resolve) => requestAnimationFrame(resolve))
}
