#!/usr/bin/env node
import { chromium } from '@playwright/test'
import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const scriptPath = fileURLToPath(import.meta.url)
const managerRepo = path.resolve(path.dirname(scriptPath), '..')

function usage() {
  console.log(`Usage:
  node scripts/compare-api-prompts.mjs --workflow-dir <dir> [options]

Options:
  --workflow <file>       Compare one workflow file instead of a directory
  --workflow-dir <dir>    Recursively compare *.json workflows in a directory
  --comfy-url <url>       Running ComfyUI URL (default: http://127.0.0.1:8189)
  --core-repo <dir>       ComfyGit core repo (default: ../comfygit)
  --out <file>            Write the JSON report to a file
  --headed                Show the browser
  --limit <n>             Stop after n workflow files
`)
}

function parseArgs(argv) {
  const args = {
    comfyUrl: 'http://127.0.0.1:8189',
    coreRepo: process.env.COMFYGIT_CORE_REPO || path.resolve(managerRepo, '..', 'comfygit'),
    headed: false,
    limit: 0
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--help' || arg === '-h') {
      args.help = true
    } else if (arg === '--workflow-dir') {
      args.workflowDir = argv[++index]
    } else if (arg === '--workflow') {
      args.workflow = argv[++index]
    } else if (arg === '--comfy-url') {
      args.comfyUrl = argv[++index]
    } else if (arg === '--core-repo') {
      args.coreRepo = argv[++index]
    } else if (arg === '--out') {
      args.out = argv[++index]
    } else if (arg === '--headed') {
      args.headed = true
    } else if (arg === '--limit') {
      args.limit = Number.parseInt(argv[++index], 10)
    } else {
      throw new Error(`Unknown argument: ${arg}`)
    }
  }

  return args
}

async function findWorkflowFiles(rootDir) {
  const files = []
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(entryPath)
      } else if (entry.isFile() && entry.name.endsWith('.json')) {
        files.push(entryPath)
      }
    }
  }
  await walk(rootDir)
  return files.sort()
}

function renderBackendPrompt(coreRepo, workflowPath) {
  const helper = path.join(coreRepo, 'dev', 'scripts', 'render-api-prompt.py')
  const result = spawnSync('uv', ['run', 'python', helper, workflowPath], {
    cwd: coreRepo,
    encoding: 'utf-8'
  })

  let payload = null
  try {
    payload = JSON.parse(result.stdout || '{}')
  } catch (error) {
    return {
      ok: false,
      error: 'invalid_backend_json',
      message: error.message,
      stderr: result.stderr,
      stdout: result.stdout
    }
  }

  if (result.status !== 0 || payload.ok === false) {
    return {
      ok: false,
      error: payload.error || 'backend_failed',
      message: payload.message || result.stderr || 'Backend conversion failed',
      stderr: result.stderr,
      stdout: result.stdout
    }
  }

  return payload
}

function canonicalize(value) {
  if (Array.isArray(value)) {
    return value.map(canonicalize)
  }
  if (value && typeof value === 'object') {
    const result = {}
    for (const key of Object.keys(value).sort()) {
      if (key === '_meta') continue
      result[key] = canonicalize(value[key])
    }
    return result
  }
  return value
}

function filterFrontendOutput(frontendOutput, backendOutput) {
  const filtered = {}
  const ignored = []

  for (const [nodeId, node] of Object.entries(frontendOutput || {})) {
    if (node && typeof node === 'object' && node.class_type == null && !(nodeId in backendOutput)) {
      ignored.push(nodeId)
      continue
    }
    filtered[nodeId] = node
  }

  return { output: filtered, ignored }
}

function sourceNodeIds(workflowData) {
  if (!Array.isArray(workflowData?.nodes)) return null
  return workflowData.nodes.map((node) => String(node.id)).filter(Boolean)
}

function frontendLoadedNodeIds(frontendPayload) {
  if (!Array.isArray(frontendPayload?.workflow?.nodes)) return []
  return frontendPayload.workflow.nodes.map((node) => String(node.id)).filter(Boolean)
}

function loadOverlap(sourceIds, loadedIds) {
  const loaded = new Set(loadedIds)
  const matched = sourceIds.filter((id) => loaded.has(id))
  return {
    matched: matched.length,
    source_count: sourceIds.length,
    loaded_count: loadedIds.length,
    ratio: sourceIds.length ? matched.length / sourceIds.length : 0
  }
}

function collectDiffs(frontend, backend, prefix = '', diffs = []) {
  if (diffs.length >= 50) return diffs

  const frontendArray = Array.isArray(frontend)
  const backendArray = Array.isArray(backend)
  if (frontendArray || backendArray) {
    if (!frontendArray || !backendArray) {
      diffs.push({ path: prefix || '$', kind: 'type', frontend, backend })
      return diffs
    }
    if (frontend.length !== backend.length) {
      diffs.push({
        path: prefix || '$',
        kind: 'array_length',
        frontend: frontend.length,
        backend: backend.length
      })
      return diffs
    }
    for (let index = 0; index < frontend.length; index += 1) {
      collectDiffs(frontend[index], backend[index], `${prefix}[${index}]`, diffs)
    }
    return diffs
  }

  const frontendObject = frontend && typeof frontend === 'object'
  const backendObject = backend && typeof backend === 'object'
  if (frontendObject || backendObject) {
    if (!frontendObject || !backendObject) {
      diffs.push({ path: prefix || '$', kind: 'type', frontend, backend })
      return diffs
    }

    const frontendKeys = new Set(Object.keys(frontend))
    const backendKeys = new Set(Object.keys(backend))
    for (const key of [...frontendKeys].filter((item) => !backendKeys.has(item)).sort()) {
      diffs.push({ path: joinPath(prefix, key), kind: 'missing_backend', frontend: frontend[key] })
      if (diffs.length >= 50) return diffs
    }
    for (const key of [...backendKeys].filter((item) => !frontendKeys.has(item)).sort()) {
      diffs.push({ path: joinPath(prefix, key), kind: 'missing_frontend', backend: backend[key] })
      if (diffs.length >= 50) return diffs
    }
    for (const key of [...frontendKeys].filter((item) => backendKeys.has(item)).sort()) {
      collectDiffs(frontend[key], backend[key], joinPath(prefix, key), diffs)
      if (diffs.length >= 50) return diffs
    }
    return diffs
  }

  if (frontend !== backend) {
    diffs.push({ path: prefix || '$', kind: 'value', frontend, backend })
  }
  return diffs
}

function joinPath(prefix, key) {
  return prefix ? `${prefix}.${key}` : key
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    usage()
    return
  }

  if (!args.workflow && !args.workflowDir) {
    usage()
    throw new Error('Pass --workflow or --workflow-dir')
  }
  if (!existsSync(args.coreRepo)) {
    throw new Error(`Core repo does not exist: ${args.coreRepo}`)
  }

  let workflowFiles = args.workflow
    ? [path.resolve(args.workflow)]
    : await findWorkflowFiles(path.resolve(args.workflowDir))

  if (args.limit > 0) {
    workflowFiles = workflowFiles.slice(0, args.limit)
  }
  workflowFiles = workflowFiles.filter((file) => statSync(file).isFile())

  const browser = await chromium.launch({ headless: !args.headed })
  const page = await browser.newPage()
  const results = []

  try {
    await page.goto(args.comfyUrl, { waitUntil: 'domcontentloaded' })
    await page.waitForFunction(
      () => window.ComfyGitDev?.exportApiPromptForWorkflow,
      null,
      { timeout: 30000 }
    )

    for (const workflowPath of workflowFiles) {
      const relativePath = path.relative(process.cwd(), workflowPath)
      const workflowData = JSON.parse(readFileSync(workflowPath, 'utf-8'))
      const item = { workflow: relativePath }
      const sourceIds = sourceNodeIds(workflowData)

      const backend = renderBackendPrompt(args.coreRepo, workflowPath)
      if (!backend.ok) {
        results.push({ ...item, status: 'backend_error', backend })
        continue
      }
      if (!sourceIds) {
        results.push({
          ...item,
          status: 'frontend_unsupported_format',
          backend_node_count: Object.keys(backend.output || {}).length,
          message: 'Frontend oracle only supports saved ComfyUI UI workflow JSON with a nodes list.'
        })
        continue
      }

      let frontend
      try {
        frontend = await page.evaluate(async (data) => {
          return window.ComfyGitDev.exportApiPromptForWorkflow(data)
        }, workflowData)
      } catch (error) {
        results.push({
          ...item,
          status: 'frontend_error',
          frontend: {
            error: error.name,
            message: error.message
          }
        })
        continue
      }

      const loadedIds = frontendLoadedNodeIds(frontend)
      const overlap = loadOverlap(sourceIds, loadedIds)
      if (sourceIds.length > 0 && overlap.ratio < 0.2) {
        results.push({
          ...item,
          status: 'frontend_load_mismatch',
          backend_node_count: Object.keys(backend.output || {}).length,
          frontend_node_count: Object.keys(frontend.output || {}).length,
          load_overlap: overlap,
          message: 'ComfyUI frontend did not appear to load the requested workflow before export.'
        })
        continue
      }

      const backendOutput = canonicalize(backend.output)
      const filteredFrontend = filterFrontendOutput(frontend.output, backend.output)
      const frontendOutput = canonicalize(filteredFrontend.output)
      const diffs = collectDiffs(frontendOutput, backendOutput)

      results.push({
        ...item,
        status: diffs.length ? 'semantic_diff' : 'matched',
        frontend_node_count: Object.keys(frontendOutput).length,
        backend_node_count: Object.keys(backendOutput).length,
        ignored_frontend_nodes_without_class_type: filteredFrontend.ignored,
        diffs
      })
    }
  } finally {
    await browser.close()
  }

  const summary = {
    workflow_count: results.length,
    matched: results.filter((item) => item.status === 'matched').length,
    semantic_diff: results.filter((item) => item.status === 'semantic_diff').length,
    frontend_error: results.filter((item) => item.status === 'frontend_error').length,
    frontend_load_mismatch: results.filter((item) => item.status === 'frontend_load_mismatch').length,
    frontend_unsupported_format: results.filter((item) => item.status === 'frontend_unsupported_format').length,
    backend_error: results.filter((item) => item.status === 'backend_error').length
  }
  const report = {
    generated_at: new Date().toISOString(),
    comfy_url: args.comfyUrl,
    core_repo: path.resolve(args.coreRepo),
    summary,
    results
  }

  const output = `${JSON.stringify(report, null, 2)}\n`
  if (args.out) {
    writeFileSync(args.out, output)
  }
  process.stdout.write(output)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
