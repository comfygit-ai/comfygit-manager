/**
 * Mock API Infrastructure - Production-Ready Mock Data
 *
 * ============================================================================
 * COMPREHENSIVE MOCK DATA MATCHING CORE LIBRARY API
 * ============================================================================
 *
 * This mock API implementation provides realistic data structures that exactly
 * match what the Core Library will return from backend endpoints. All mock
 * data conforms to the official Core Library API Reference.
 *
 * Core Library Source Files:
 * - packages/core/src/comfygit_core/models/environment.py
 * - packages/core/src/comfygit_core/models/workflow.py
 * - packages/core/src/comfygit_core/models/shared.py
 *
 * API Reference Documentation:
 * - EnvironmentStatus (API ref lines 1585-1610)
 *   - comparison: EnvironmentComparison - missing_nodes, extra_nodes, version_mismatches
 *   - git: GitStatus - workflow_changes, nodes_added, dependencies_added/removed
 *   - workflow: DetailedWorkflowStatus - analyzed_workflows with full resolution
 *   - missing_models: MissingModelInfo[] - criticality and download info
 *
 * - WorkflowAnalysisStatus (API ref lines 1719-1761)
 *   - dependencies: WorkflowDependencies
 *   - resolution: ResolutionResult
 *   - uninstalled_nodes, has_issues, issue_summary
 *
 * - ResolutionResult (API ref lines 1763-1788)
 *   - nodes_resolved/unresolved/ambiguous with confidence scores
 *   - models_resolved/unresolved/ambiguous with match types
 *   - download_results with installation plan
 *
 * - ModelWithLocation (API ref lines 1890-1912)
 *   - hash (CRC32), sha256_hash, blake3_hash
 *   - file_size (bytes), size_mb, relative_path
 *   - mtime, last_seen, base_directory
 *   - category, metadata dict
 *
 * - NodeInfo (API ref lines 1833-1858)
 *   - name, registry_id, repository, version
 *   - source: "registry" | "git" | "development" | "unknown"
 *   - download_url, dependency_sources
 *
 * USAGE:
 * ------
 * Toggle between mock and real API via environment variable:
 *   VITE_USE_MOCK_API=true  -> Use this mock implementation
 *   VITE_USE_MOCK_API=false -> Connect to real backend
 *
 * No code changes needed - automatic selection in useComfyGitService.ts
 *
 * MOCK DATA FEATURES:
 * -------------------
 * ✓ Realistic workflow counts (18 total: 3 broken, 2 new, 1 modified, 12 synced)
 * ✓ Rich node metadata (versions, sources, repositories)
 * ✓ Complete model information (CRC32 + SHA256 hashes, sizes, metadata)
 * ✓ Resolution results with confidence scores and match types
 * ✓ Git status with detailed change tracking
 * ✓ Environment/workspace two-level model hierarchy
 * ✓ Proper Unix timestamps and relative dates
 * ✓ Realistic file sizes and paths
 */

import type {
  EnvironmentInfo,
  WorkflowInfo,
  WorkflowDetails,
  ModelInfo,
  ConfigSettings,
  LogEntry,
  EnvironmentStatus,
  GitCommit,
  NodeInfo,
  NodesResult
} from '@/types/comfygit'

// =============================================================================
// Mock Data Generators - Matching Core Library Structures
// =============================================================================

/**
 * Mock WorkflowInfo - Simplified view for list display
 * Full details come from WorkflowAnalysisStatus in Core Library
 */
const MOCK_WORKFLOWS: WorkflowInfo[] = [
  // BROKEN workflows (3) - Missing dependencies
  {
    name: 'flux-dev-img2img.json',
    status: 'broken',
    missing_nodes: 2,
    missing_models: 1,
    node_count: 12,
    model_count: 3,
    sync_state: 'synced' // Git status vs dependency status
  },
  {
    name: 'sdxl-lightning.json',
    status: 'broken',
    missing_nodes: 1,
    missing_models: 2,
    node_count: 8,
    model_count: 2,
    sync_state: 'synced'
  },
  {
    name: 'sd15-upscale.json',
    status: 'broken',
    missing_nodes: 3,
    missing_models: 0,
    node_count: 15,
    model_count: 4,
    sync_state: 'modified' // Modified AND broken
  },
  // NEW workflows (2) - Untracked
  {
    name: 'img2img-basic.json',
    status: 'new',
    missing_nodes: 0,
    missing_models: 0,
    node_count: 6,
    model_count: 1,
    sync_state: 'new'
  },
  {
    name: 'controlnet-pose.json',
    status: 'new',
    missing_nodes: 0,
    missing_models: 0,
    node_count: 10,
    model_count: 2,
    sync_state: 'new'
  },
  // MODIFIED workflows (1) - Changed since last commit
  {
    name: 'flux-schnell.json',
    status: 'modified',
    missing_nodes: 0,
    missing_models: 0,
    node_count: 9,
    model_count: 2,
    sync_state: 'modified'
  },
  // SYNCED workflows (12) - All good
  ...Array(12).fill(null).map((_, i) => ({
    name: `synced-workflow-${i + 1}.json`,
    status: 'synced' as const,
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + i,
    model_count: 1 + (i % 3),
    sync_state: 'synced' as const
  }))
]

/**
 * Mock WorkflowDetails - Rich workflow analysis
 * Based on WorkflowAnalysisStatus from Core Library (lines 1719-1761)
 */
const MOCK_WORKFLOW_DETAILS: Record<string, WorkflowDetails> = {
  'flux-dev-img2img.json': {
    name: 'flux-dev-img2img.json',
    status: 'broken',
    // Nodes based on NodeInfo structure (lines 1833-1858)
    nodes: [
      {
        name: 'comfyui_flux',
        installed: true,
        registry_id: 'comfyui_flux',
        repository: 'https://github.com/black-forest-labs/flux',
        version: '1.2.0',
        source: 'registry',
        download_url: null
      },
      {
        name: 'rgthree-comfy',
        installed: false,
        registry_id: 'rgthree-comfy',
        repository: 'https://github.com/rgthree/rgthree-comfy',
        version: null, // Not installed
        source: 'registry',
        download_url: 'https://github.com/rgthree/rgthree-comfy/archive/refs/heads/main.zip'
      },
      {
        name: 'comfyui-image-saver',
        installed: false,
        registry_id: 'comfyui-image-saver',
        repository: 'https://github.com/girish946/ComfyUI-Image-Saver',
        version: null,
        source: 'registry',
        download_url: 'https://github.com/girish946/ComfyUI-Image-Saver/archive/refs/heads/main.zip'
      }
    ],
    // Models based on ResolvedModel structure (lines 1805-1827)
    models: [
      {
        filename: 'flux1-dev-fp8.safetensors',
        hash: 'a11e2e7b', // CRC32 hash (Core Library uses CRC32)
        sha256_hash: 'a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab',
        blake3_hash: null,
        status: 'available',
        importance: 'required',
        size_mb: 11725,
        file_size: 12298780672, // bytes
        node_type: 'Load Checkpoint',
        node_id: '4',
        relative_path: 'checkpoints/flux1-dev-fp8.safetensors',
        category: 'checkpoints',
        mtime: Date.now() / 1000 - 86400 * 7, // 7 days ago
        metadata: {
          model_type: 'checkpoint',
          base_model: 'FLUX.1-dev',
          format: 'fp8'
        }
      },
      {
        filename: 'flux_vae.safetensors',
        hash: 'd21a4f89', // CRC32
        sha256_hash: 'd21a4f89d0c1e2f3456789abcdef01234567890abcdef1234567890abcdef012',
        blake3_hash: null,
        status: 'missing',
        importance: 'required',
        size_mb: 335,
        file_size: 351272960, // bytes
        node_type: 'VAELoader',
        node_id: '10',
        relative_path: 'vae/flux_vae.safetensors',
        category: 'vae',
        mtime: null, // Not present
        metadata: {}
      },
      {
        filename: 'clip_l.safetensors',
        hash: '3e9f12a7', // CRC32
        sha256_hash: '3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1',
        blake3_hash: null,
        status: 'available',
        importance: 'flexible',
        size_mb: 246,
        file_size: 257949696, // bytes
        node_type: 'DualCLIPLoader',
        node_id: '11',
        relative_path: 'clip/clip_l.safetensors',
        category: 'clip',
        mtime: Date.now() / 1000 - 86400 * 14, // 14 days ago
        metadata: {
          model_type: 'clip',
          clip_type: 'clip_l'
        }
      }
    ]
  }
}

/**
 * Mock Environment Models - THIS ENV scope
 * Based on ModelWithLocation from Core Library (lines 1890-1912)
 */
const MOCK_ENV_MODELS: ModelInfo[] = [
  {
    filename: 'flux1-dev-fp8.safetensors',
    hash: 'a11e2e7b', // CRC32 hash (8 chars)
    sha256_hash: 'a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab',
    blake3_hash: null,
    type: 'checkpoints',
    category: 'checkpoints',
    size_mb: 11725,
    file_size: 12298780672, // bytes
    relative_path: 'checkpoints/flux1-dev-fp8.safetensors',
    mtime: Date.now() / 1000 - 86400 * 7, // 7 days ago
    last_seen: Math.floor(Date.now() / 1000), // Unix timestamp
    base_directory: '/workspace/models',
    used_by: ['flux-dev-img2img.json', 'flux-schnell.json'],
    sources: ['https://civitai.com/api/download/models/flux1-dev'],
    metadata: {
      model_type: 'checkpoint',
      base_model: 'FLUX.1-dev',
      format: 'fp8'
    }
  },
  {
    filename: 'sd_xl_base_1.0.safetensors',
    hash: 'b22f3f8c', // CRC32
    sha256_hash: 'b22f3f8c90d1e2f3456789abcdef01234567890abcdef1234567890abcdef012',
    blake3_hash: null,
    type: 'checkpoints',
    category: 'checkpoints',
    size_mb: 6938,
    file_size: 7275159552, // bytes
    relative_path: 'checkpoints/sd_xl_base_1.0.safetensors',
    mtime: Date.now() / 1000 - 86400 * 30, // 30 days ago
    last_seen: Math.floor(Date.now() / 1000),
    base_directory: '/workspace/models',
    used_by: ['sdxl-lightning.json'],
    sources: ['https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors'],
    metadata: {
      model_type: 'checkpoint',
      base_model: 'SDXL',
      version: '1.0'
    }
  },
  {
    filename: 'clip_l.safetensors',
    hash: '3e9f12a7', // CRC32
    sha256_hash: '3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1',
    blake3_hash: null,
    type: 'clip',
    category: 'clip',
    size_mb: 246,
    file_size: 257949696, // bytes
    relative_path: 'clip/clip_l.safetensors',
    mtime: Date.now() / 1000 - 86400 * 14, // 14 days ago
    last_seen: Math.floor(Date.now() / 1000),
    base_directory: '/workspace/models',
    used_by: ['flux-dev-img2img.json', 'flux-schnell.json'],
    sources: [], // No source URL configured
    metadata: {
      model_type: 'clip',
      clip_type: 'clip_l'
    }
  }
]

/**
 * Mock Workspace Models - ALL ENVS scope
 * Includes all models across workspace (deduplicated by hash)
 */
const MOCK_WORKSPACE_MODELS: ModelInfo[] = [
  ...MOCK_ENV_MODELS,
  {
    filename: 'v1-5-pruned.ckpt',
    hash: 'c33g4g9d', // CRC32
    sha256_hash: 'c33g4g9d91e2f3456789abcdef01234567890abcdef1234567890abcdef01234',
    blake3_hash: null,
    type: 'checkpoints',
    category: 'checkpoints',
    size_mb: 4265,
    file_size: 4472033280, // bytes
    relative_path: 'checkpoints/v1-5-pruned.ckpt',
    mtime: Date.now() / 1000 - 86400 * 60, // 60 days ago
    last_seen: Math.floor(Date.now() / 1000),
    base_directory: '/workspace/models',
    used_by: [], // Unused model
    sources: ['https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned.ckpt'],
    metadata: {
      model_type: 'checkpoint',
      base_model: 'SD1.5',
      version: '1.5'
    }
  },
  {
    filename: 'controlnet_openpose.safetensors',
    hash: 'd44h5h0e', // CRC32
    sha256_hash: 'd44h5h0e02f3456789abcdef01234567890abcdef1234567890abcdef01234567',
    blake3_hash: null,
    type: 'controlnet',
    category: 'controlnet',
    size_mb: 1450,
    file_size: 1520435200, // bytes
    relative_path: 'controlnet/controlnet_openpose.safetensors',
    mtime: Date.now() / 1000 - 86400 * 45, // 45 days ago
    last_seen: Math.floor(Date.now() / 1000),
    base_directory: '/workspace/models',
    used_by: [], // Unused model
    sources: ['https://huggingface.co/lllyasviel/ControlNet/resolve/main/models/control_openpose-fp16.safetensors'],
    metadata: {
      model_type: 'controlnet',
      controlnet_type: 'openpose'
    }
  }
]

/**
 * Mock Node Data - Git-tracked custom nodes
 * Based on NodeInfo structure from types/comfygit.ts
 */
const MOCK_NODES: NodeInfo[] = [
  {
    name: 'ComfyUI-Manager',
    installed: true,
    registry_id: 'comfyui-manager',
    repository: 'https://github.com/ltdrdata/ComfyUI-Manager',
    version: '2.8.5',
    source: 'registry',
    download_url: null,
    description: 'ComfyUI extension for managing custom nodes',
    used_in_workflows: ['flux-dev-img2img.json', 'sdxl-lightning.json', 'flux-schnell.json']
  },
  {
    name: 'comfyui_flux',
    installed: true,
    registry_id: 'comfyui_flux',
    repository: 'https://github.com/black-forest-labs/flux',
    version: '1.2.0',
    source: 'registry',
    download_url: null,
    description: 'FLUX.1 model support for ComfyUI',
    used_in_workflows: ['flux-dev-img2img.json', 'flux-schnell.json']
  },
  {
    name: 'comfyui-controlnet-aux',
    installed: true,
    registry_id: 'comfyui-controlnet-aux',
    repository: 'https://github.com/Fannovel16/comfyui_controlnet_aux',
    version: '1.0.3',
    source: 'registry',
    download_url: null,
    description: 'ControlNet auxiliary preprocessors',
    used_in_workflows: ['controlnet-pose.json']
  },
  {
    name: 'rgthree-comfy',
    installed: false,
    registry_id: 'rgthree-comfy',
    repository: 'https://github.com/rgthree/rgthree-comfy',
    version: null,
    source: 'registry',
    download_url: 'https://github.com/rgthree/rgthree-comfy/archive/refs/heads/main.zip',
    description: 'Power user nodes for ComfyUI workflows',
    used_in_workflows: ['flux-dev-img2img.json']
  },
  {
    name: 'comfyui-image-saver',
    installed: false,
    registry_id: 'comfyui-image-saver',
    repository: 'https://github.com/girish946/ComfyUI-Image-Saver',
    version: null,
    source: 'registry',
    download_url: 'https://github.com/girish946/ComfyUI-Image-Saver/archive/refs/heads/main.zip',
    description: 'Advanced image saving options',
    used_in_workflows: ['flux-dev-img2img.json']
  },
  {
    name: 'comfyui-impact-pack',
    installed: true,
    registry_id: 'comfyui-impact-pack',
    repository: 'https://github.com/ltdrdata/ComfyUI-Impact-Pack',
    version: '4.12.1',
    source: 'registry',
    download_url: null,
    description: 'Custom nodes for ComfyUI impact pack',
    used_in_workflows: ['sd15-upscale.json']
  },
  {
    name: 'ComfyUI-KJNodes',
    installed: true,
    registry_id: 'comfyui-kjnodes',
    repository: 'https://github.com/kijai/ComfyUI-KJNodes',
    version: '1.1.2',
    source: 'registry',
    download_url: null,
    description: 'KJ utility nodes collection',
    used_in_workflows: []
  },
  {
    name: 'custom-dev-nodes',
    installed: true,
    registry_id: undefined,
    repository: undefined,
    version: '0.1.0-dev',
    source: 'development',
    download_url: null,
    description: 'Local development nodes',
    used_in_workflows: []
  },
  {
    name: 'comfyui-easy-use',
    installed: false,
    registry_id: 'comfyui-easy-use',
    repository: 'https://github.com/yolain/ComfyUI-Easy-Use',
    version: null,
    source: 'registry',
    download_url: 'https://github.com/yolain/ComfyUI-Easy-Use/archive/refs/heads/main.zip',
    description: 'Simplified workflow nodes',
    used_in_workflows: ['sd15-upscale.json']
  }
]

const MOCK_COMMITS: GitCommit[] = [
  {
    hash: 'e719c9c',
    message: 'refactor: Improve UI consistency and fix display issues',
    author: 'Alex Katz',
    date: '2024-01-15T10:30:00Z',
    date_relative: '5 days ago'
  },
  {
    hash: '781a023',
    message: 'refactor: Remove multi-theme system, commit to Phosphor Terminal aesthetic',
    author: 'Alex Katz',
    date: '2024-01-14T15:20:00Z',
    date_relative: '6 days ago'
  },
  {
    hash: '19f7898',
    message: 'Merge branch \'design/phosphor\' into feature/comfygit-ui',
    author: 'Alex Katz',
    date: '2024-01-13T09:15:00Z',
    date_relative: '1 week ago'
  },
  {
    hash: '426fe3c',
    message: 'Merge branch \'feature/comfygit-ui\' into main',
    author: 'Alex Katz',
    date: '2024-01-12T14:45:00Z',
    date_relative: '1 week ago'
  },
  {
    hash: '8c21deb',
    message: 'Add initial agpl 3 license',
    author: 'Alex Katz',
    date: '2024-01-10T11:00:00Z',
    date_relative: '2 weeks ago'
  }
]

const MOCK_LOGS: LogEntry[] = [
  {
    timestamp: new Date().toISOString(),
    level: 'info',
    message: 'Environment synced successfully',
    context: { duration_ms: 2340 }
  },
  {
    timestamp: new Date(Date.now() - 60000).toISOString(),
    level: 'warning',
    message: 'Model not found in index: flux_vae.safetensors',
    context: { workflow: 'flux-dev-img2img.json' }
  },
  {
    timestamp: new Date(Date.now() - 120000).toISOString(),
    level: 'error',
    message: 'Failed to install node: rgthree-comfy',
    context: { error: 'Connection timeout' }
  },
  {
    timestamp: new Date(Date.now() - 180000).toISOString(),
    level: 'debug',
    message: 'Resolving workflow dependencies',
    context: { workflow: 'sdxl-lightning.json', node_count: 8 }
  }
]

// =============================================================================
// Mock API Functions (match core library signatures)
// =============================================================================

export const mockApi = {
  // Environment Management
  getEnvironments: async (): Promise<EnvironmentInfo[]> => {
    await delay(300)
    return [
      {
        name: 'production',
        is_current: true,
        path: '~/comfygit/environments/production',
        workflow_count: 18,
        node_count: 45,
        model_count: 3,
        current_branch: 'main',
        created_at: '2024-01-01T00:00:00Z',
        last_used: new Date().toISOString(),
        last_commit: 'e719c9c',
        last_commit_date: '2024-01-15T10:30:00Z'
      },
      {
        name: 'testing',
        is_current: false,
        path: '~/comfygit/environments/testing',
        workflow_count: 12,
        node_count: 32,
        model_count: 2,
        current_branch: 'develop',
        created_at: '2024-01-05T00:00:00Z',
        last_used: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
        last_commit: '426fe3c',
        last_commit_date: '2024-01-12T14:45:00Z'
      },
      {
        name: 'experimental',
        is_current: false,
        path: '~/comfygit/environments/experimental',
        workflow_count: 5,
        node_count: 18,
        model_count: 1,
        current_branch: 'feature/new-nodes',
        created_at: '2024-01-10T00:00:00Z',
        last_used: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        last_commit: '781a023',
        last_commit_date: '2024-01-14T15:20:00Z'
      }
    ]
  },

  switchEnvironment: async (targetEnv: string): Promise<void> => {
    await delay(500)
    console.log(`[MOCK] Switching to environment: ${targetEnv}`)
  },

  createEnvironment: async (name: string, pytorchBackend: string, cloneFrom?: string): Promise<void> => {
    await delay(1000)
    console.log(`[MOCK] Creating environment: ${name} with backend ${pytorchBackend}`, cloneFrom ? `cloned from ${cloneFrom}` : '')
  },

  deleteEnvironment: async (name: string): Promise<void> => {
    await delay(500)
    console.log(`[MOCK] Deleting environment: ${name}`)
  },

  // Workflow Management
  getWorkflows: async (): Promise<WorkflowInfo[]> => {
    await delay(400)
    return MOCK_WORKFLOWS
  },

  getWorkflowDetails: async (name: string): Promise<WorkflowDetails> => {
    await delay(300)
    return MOCK_WORKFLOW_DETAILS[name] || {
      name,
      status: 'synced',
      nodes: [],
      models: []
    }
  },

  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (name: string): Promise<any> => {
    await delay(800)
    return {
      workflow_name: name,
      // Nodes resolved with confidence scores
      nodes_resolved: [
        {
          node_type: 'ComfyUI-Flux',
          match_type: 'exact',
          package_id: 'comfyui_flux',
          match_confidence: 1.0,
          is_optional: false,
          rank: 5, // Registry popularity
          versions: ['1.2.0', '1.1.0', '1.0.0']
        }
      ],
      // Nodes that need installation
      nodes_unresolved: [
        {
          node_type: 'RgthreeNodeSet',
          possible_matches: [
            {
              package_id: 'rgthree-comfy',
              match_type: 'fuzzy',
              match_confidence: 0.85,
              rank: 12
            }
          ]
        },
        {
          node_type: 'ImageSaver',
          possible_matches: [
            {
              package_id: 'comfyui-image-saver',
              match_type: 'type_only',
              match_confidence: 0.70,
              rank: 45
            }
          ]
        }
      ],
      nodes_ambiguous: [], // Multiple equally-matched candidates
      // Models resolved
      models_resolved: [
        {
          workflow: name,
          filename: 'flux1-dev-fp8.safetensors',
          resolved_model: {
            hash: 'a11e2e7b',
            sha256_hash: 'a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab'
          },
          match_type: 'exact',
          match_confidence: 1.0,
          is_optional: false,
          needs_path_sync: false
        },
        {
          workflow: name,
          filename: 'clip_l.safetensors',
          resolved_model: {
            hash: '3e9f12a7',
            sha256_hash: '3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1'
          },
          match_type: 'exact',
          match_confidence: 1.0,
          is_optional: false,
          needs_path_sync: false
        }
      ],
      // Models that need downloading
      models_unresolved: [
        {
          workflow: name,
          filename: 'flux_vae.safetensors',
          node_type: 'VAELoader',
          node_id: '10',
          expected_category: 'vae'
        }
      ],
      models_ambiguous: [], // Multiple models match same name
      // Download intents (models queued for download)
      download_results: [
        {
          model: 'flux_vae.safetensors',
          status: 'pending',
          source_url: null, // No source configured
          can_download: false,
          estimated_size_mb: 335
        }
      ],
      // Summary fields
      has_issues: true, // Has unresolved nodes and models
      has_download_intents: true,
      summary: 'Missing: 2 nodes, 1 model',
      // Installation plan preview
      nodes_to_install: ['rgthree-comfy', 'comfyui-image-saver'],
      models_to_download: ['flux_vae.safetensors'],
      estimated_size_mb: 335,
      estimated_time_seconds: 120
    }
  },

  installWorkflowDeps: async (name: string, installNodes: boolean, installModels: boolean): Promise<void> => {
    await delay(2000)
    console.log(`[MOCK] Installing deps for ${name}: nodes=${installNodes}, models=${installModels}`)
  },

  setModelImportance: async (workflow: string, modelHash: string, importance: 'required' | 'flexible' | 'optional'): Promise<void> => {
    await delay(200)
    console.log(`[MOCK] Setting ${modelHash} importance to ${importance} in ${workflow}`)
  },

  // Model Management
  getEnvironmentModels: async (): Promise<ModelInfo[]> => {
    await delay(350)
    return MOCK_ENV_MODELS
  },

  getWorkspaceModels: async (): Promise<ModelInfo[]> => {
    await delay(400)
    return MOCK_WORKSPACE_MODELS
  },

  updateModelSource: async (sha256: string, sourceUrl: string): Promise<void> => {
    await delay(300)
    console.log(`[MOCK] Updating source for ${sha256}: ${sourceUrl}`)
  },

  deleteModel: async (sha256: string): Promise<void> => {
    await delay(500)
    console.log(`[MOCK] Deleting model: ${sha256}`)
  },

  downloadModel: async (request: any): Promise<void> => {
    await delay(3000)
    console.log(`[MOCK] Downloading model:`, request)
  },

  // Node Management
  getNodes: async (): Promise<NodesResult> => {
    await delay(350)
    const installed = MOCK_NODES.filter(n => n.installed)
    const missing = MOCK_NODES.filter(n => !n.installed)
    return {
      nodes: MOCK_NODES,
      total_count: MOCK_NODES.length,
      installed_count: installed.length,
      missing_count: missing.length
    }
  },

  installNode: async (nodeName: string): Promise<void> => {
    await delay(2500)
    console.log(`[MOCK] Installing node: ${nodeName}`)
  },

  updateNode: async (nodeName: string): Promise<void> => {
    await delay(2000)
    console.log(`[MOCK] Updating node: ${nodeName}`)
  },

  uninstallNode: async (nodeName: string): Promise<void> => {
    await delay(1000)
    console.log(`[MOCK] Uninstalling node: ${nodeName}`)
  },

  // Settings & Debug
  getConfig: async (): Promise<ConfigSettings> => {
    await delay(200)
    return {
      civitai_api_key: '',
      huggingface_token: '',
      models_path: '/workspace/models',
      auto_sync_models: true
    }
  },

  updateConfig: async (config: ConfigSettings): Promise<void> => {
    await delay(300)
    console.log(`[MOCK] Updating config:`, config)
  },

  getEnvironmentLogs: async (level?: string, lines?: number): Promise<LogEntry[]> => {
    await delay(250)
    const filtered = level
      ? MOCK_LOGS.filter(log => log.level === level)
      : MOCK_LOGS
    return filtered.slice(0, lines || 100)
  },

  getWorkspaceLogs: async (level?: string, lines?: number): Promise<LogEntry[]> => {
    await delay(300)
    // Workspace logs would include entries from all environments
    const allLogs = [...MOCK_LOGS, ...MOCK_LOGS.map(log => ({
      ...log,
      context: { ...log.context, environment: 'testing' }
    }))]
    const filtered = level
      ? allLogs.filter(log => log.level === level)
      : allLogs
    return filtered.slice(0, lines || 100)
  },

  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async (): Promise<any> => {
    await delay(400)
    return {
      environment: 'production',
      branch: 'main',
      is_detached_head: false,
      is_synced: false,
      has_changes: false,
      workflows: {
        new: ['img2img-basic.json', 'controlnet-pose.json'],
        modified: ['flux-schnell.json'],
        deleted: [],
        synced: MOCK_WORKFLOWS.filter(w => w.status === 'synced').map(w => w.name),
        total: 18
      },
      git_changes: {
        nodes_added: [],
        nodes_removed: [],
        workflow_changes: false,
        has_other_changes: false
      },
      comparison: {
        is_synced: false,
        missing_nodes: ['rgthree-comfy', 'comfyui-image-saver'],
        extra_nodes: []
      },
      missing_models_count: 1
    }
  },

  getCommitHistory: async (limit = 10): Promise<GitCommit[]> => {
    await delay(300)
    return MOCK_COMMITS.slice(0, limit)
  },

  getBranches: async (): Promise<any> => {
    await delay(250)
    return {
      branches: [
        { name: 'main', is_current: true },
        { name: 'develop', is_current: false },
        { name: 'feature/new-nodes', is_current: false }
      ],
      current: 'main'
    }
  },

  // Git Remotes Management
  getRemotes: async (): Promise<any> => {
    await delay(300)
    return {
      remotes: [
        {
          name: 'origin',
          fetch_url: 'https://github.com/comfyhub/comfygit-demo.git',
          push_url: 'https://github.com/comfyhub/comfygit-demo.git',
          is_default: true
        },
        {
          name: 'upstream',
          fetch_url: 'https://github.com/comfyhub/comfygit.git',
          push_url: 'https://github.com/comfyhub/comfygit.git',
          is_default: false
        }
      ],
      current_branch_tracking: {
        remote: 'origin',
        branch: 'main'
      }
    }
  },

  addRemote: async (name: string, url: string): Promise<void> => {
    await delay(400)
    console.log(`[MOCK] Adding remote: ${name} -> ${url}`)
  },

  removeRemote: async (name: string): Promise<void> => {
    await delay(350)
    console.log(`[MOCK] Removing remote: ${name}`)
  },

  updateRemoteUrl: async (name: string, url: string, pushUrl?: string): Promise<void> => {
    await delay(400)
    console.log(`[MOCK] Updating remote ${name}: ${url}${pushUrl ? ` (push: ${pushUrl})` : ''}`)
  },

  fetchRemote: async (name: string): Promise<void> => {
    await delay(1500)
    console.log(`[MOCK] Fetching from remote: ${name}`)
  },

  getRemoteSyncStatus: async (remote: string): Promise<any> => {
    await delay(300)
    return {
      remote,
      branch: 'main',
      ahead: 2,
      behind: 1,
      last_fetch: new Date(Date.now() - 3600000).toISOString()
    }
  }
}

// =============================================================================
// Utilities
// =============================================================================

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Helper to detect if we're using mock or real API
 */
export function isMockApi(): boolean {
  return import.meta.env.VITE_USE_MOCK_API !== 'false'
}
