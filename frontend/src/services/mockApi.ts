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
  NodesResult,
  ExportValidationResult,
  ExportResult,
  EnvironmentDeploySummary,
  NetworkVolume,
  RunPodGpuType,
  RunPodInstance,
  RunPodConnectionResult,
  DeployResult,
  DeployPackageResult,
  DeployConfig
} from '@/types/comfygit'
import { useMockControls } from '@/composables/useMockControls'

// =============================================================================
// Mock State - Tracks added sources for testing export flow
// =============================================================================

const mockAddedSources = new Set<string>()

// =============================================================================
// Mock Data Generators - Matching Core Library Structures
// =============================================================================

/**
 * Mock WorkflowInfo - Simplified view for list display
 * Full details come from WorkflowAnalysisStatus in Core Library
 */
const MOCK_WORKFLOWS: WorkflowInfo[] = [
  // BROKEN workflows (4) - Missing dependencies or category mismatch
  {
    name: 'flux-dev-img2img.json',
    status: 'broken',
    missing_nodes: 2,
    missing_models: 1,
    node_count: 12,
    model_count: 3,
    sync_state: 'synced' // Git status vs dependency status
  },
  // Category mismatch example - model exists but in wrong directory
  {
    name: 'lora-wrong-dir.json',
    status: 'broken',
    missing_nodes: 0,
    missing_models: 0,
    node_count: 8,
    model_count: 2,
    sync_state: 'synced',
    has_category_mismatch_issues: true,
    models_with_category_mismatch: 1
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
  },

  // Category mismatch example - LoRA in wrong directory
  'lora-wrong-dir.json': {
    name: 'lora-wrong-dir.json',
    status: 'broken',
    nodes: [
      {
        name: 'comfyui-core',
        installed: true,
        registry_id: 'comfyui-core',
        repository: null,
        version: '0.3.0',
        source: 'builtin',
        download_url: null
      }
    ],
    models: [
      {
        filename: 'my_character_lora.safetensors',
        hash: 'f8c9e2d1', // CRC32
        sha256_hash: 'f8c9e2d1a0b1c2d3e4f5678901234567890abcdef1234567890abcdef12345678',
        blake3_hash: null,
        status: 'category_mismatch',  // Wrong directory!
        importance: 'required',
        size_mb: 185,
        file_size: 194000000,
        node_type: 'LoraLoader',
        node_id: '7',
        relative_path: 'checkpoints/my_character_lora.safetensors',  // Wrong! Should be loras/
        category: 'checkpoints',  // Wrong category
        mtime: Date.now() / 1000 - 86400 * 3,
        metadata: {
          model_type: 'lora',
          base_model: 'SDXL'
        },
        // Category mismatch details
        has_category_mismatch: true,
        expected_categories: ['loras'],
        actual_category: 'checkpoints'
      },
      {
        filename: 'sdxl_base_1.0.safetensors',
        hash: 'b22f3f8c',
        sha256_hash: 'b22f3f8c90d1e2f3456789abcdef01234567890abcdef1234567890abcdef012',
        blake3_hash: null,
        status: 'available',
        importance: 'required',
        size_mb: 6938,
        file_size: 7275159552,
        node_type: 'CheckpointLoader',
        node_id: '4',
        relative_path: 'checkpoints/sdxl_base_1.0.safetensors',
        category: 'checkpoints',
        mtime: Date.now() / 1000 - 86400 * 30,
        metadata: {
          model_type: 'checkpoint',
          base_model: 'SDXL'
        },
        has_category_mismatch: false,
        expected_categories: ['checkpoints'],
        actual_category: 'checkpoints'
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
    timestamp: '2025-11-23 13:07:40,285',
    name: 'comfygit_core.core.environment',
    level: 'INFO',
    func: 'sync',
    line: '306',
    message: 'Restored workflows from .cec/'
  },
  {
    timestamp: '2025-11-23 13:07:40,285',
    name: 'comfygit_core.managers.workflow_manager',
    level: 'INFO',
    func: 'restore_from_cec',
    line: '554',
    message: "Restored workflow 'default' to ComfyUI"
  },
  {
    timestamp: '2025-11-23 13:07:40,286',
    name: 'comfygit_core.core.environment',
    level: 'DEBUG',
    func: 'sync',
    line: '399',
    message: 'User content symlinks configured'
  },
  {
    timestamp: '2025-11-23 13:07:42,130',
    name: 'comfygit_core.managers.workflow_manager',
    level: 'DEBUG',
    func: 'resolve_workflow',
    line: '884',
    message: "Resolved node: ResolvedNodePackage(package='comfyui-basic-math', node='FloatInput', match=exact, confidence=1.00, 3 version(s), rank=1)"
  },
  {
    timestamp: '2025-11-23 13:07:42,157',
    name: 'comfygit.command',
    level: 'INFO',
    func: 'log_command',
    line: '180',
    message: "Command 'env status' completed successfully"
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

  getModelDetails: async (identifier: string): Promise<any> => {
    await delay(200)
    return {
      filename: identifier,
      hash: "762871a9ab79bfa2",
      blake3: null,
      sha256: null,
      size: 17_300_000_000,
      category: "checkpoints",
      relative_path: `checkpoints/${identifier}`,
      last_seen: "2025-11-11 23:34:23",
      locations: [
        { path: `/workspace/models/checkpoints/${identifier}`, modified: "2024-08-03 13:16:22" }
      ],
      sources: []
    }
  },

  updateModelSource: async (hash: string, sourceUrl: string): Promise<void> => {
    await delay(300)
    mockAddedSources.add(hash)
    console.log(`[MOCK] Added source for ${hash}: ${sourceUrl}`)
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
      workspace_path: '/workspace',
      civitai_api_key: '',
      huggingface_token: '',
      models_path: '/workspace/models',
      auto_sync_models: true,
      confirm_destructive: true,
      comfyui_extra_args: []
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
      name: 'comfygit.workspace'
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
   *
   * To test detached HEAD warning:
   * - Set branch: null
   * - Set is_detached_head: true
   */
  getStatus: async (): Promise<any> => {
    await delay(400)
    // Get has_legacy_manager from mock controls
    const { state: mockState } = useMockControls()
    return {
      environment: 'production',
      branch: 'main',  // Set to null to test detached HEAD
      is_detached_head: false,  // Set to true to test detached HEAD warning
      is_synced: false,
      has_changes: false,
      workflows: {
        new: ['img2img-basic.json', 'controlnet-pose.json'],
        modified: ['flux-schnell.json'],
        deleted: [],
        synced: MOCK_WORKFLOWS.filter(w => w.status === 'synced').map(w => w.name),
        total: 18,
        analyzed: [
          {
            name: 'img2img-basic.json',
            sync_state: 'new',
            status: 'new',
            has_issues: false,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: 'No issues',
            node_count: 8,
            model_count: 2
          },
          {
            name: 'controlnet-pose.json',
            sync_state: 'new',
            status: 'broken',
            has_issues: true,
            uninstalled_nodes: 1,
            unresolved_nodes_count: 1,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: '1 unresolved node',
            node_count: 12,
            model_count: 3
          },
          {
            name: 'flux-schnell.json',
            sync_state: 'modified',
            status: 'modified',
            has_issues: false,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: 'No issues',
            node_count: 15,
            model_count: 4
          },
          {
            name: 'sdxl-lightning.json',
            sync_state: 'synced',
            status: 'broken',
            has_issues: true,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 2,
            unresolved_models_count: 1,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: '2 unresolved nodes, 1 missing model',
            node_count: 20,
            model_count: 5,
            has_category_mismatch_issues: false,
            models_with_category_mismatch_count: 0
          },
          // Category mismatch example - LoRA in wrong directory
          {
            name: 'lora-wrong-dir.json',
            sync_state: 'synced',
            status: 'broken',
            has_issues: true,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: '1 model in wrong directory',
            node_count: 8,
            model_count: 2,
            has_category_mismatch_issues: true,
            models_with_category_mismatch_count: 1
          },
          {
            name: 'flux-dev-img2img.json',
            sync_state: 'synced',
            status: 'synced',
            has_issues: false,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: 'No issues',
            node_count: 18,
            model_count: 3
          }
        ]
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
      missing_models_count: 1,
      has_legacy_manager: mockState.hasLegacyManager
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

  deleteBranch: async (name: string): Promise<void> => {
    await delay(300)
    console.log(`[MOCK] Deleting branch: ${name}`)
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
  },

  /**
   * Get Pull Preview - Returns preview with optional workflow conflicts (V2)
   * GET /v2/comfygit/remotes/{name}/pull-preview
   *
   * Test scenarios by remote name:
   * - "origin" - Returns preview WITH workflow conflicts (default for testing)
   * - "upstream" - Returns preview WITHOUT conflicts (clean pull)
   * - Any other - Returns preview with workflow conflicts
   */
  getPullPreview: async (remote: string): Promise<any> => {
    await delay(500)

    const basePreview = {
      remote,
      branch: 'main',
      commits_behind: 3,
      commits: [
        { hash: 'abc1234', short_hash: 'abc1234', message: 'Add new workflow features', date: '2024-01-15T10:30:00Z', date_relative: '2 hours ago' },
        { hash: 'def5678', short_hash: 'def5678', message: 'Update node dependencies', date: '2024-01-15T09:15:00Z', date_relative: '3 hours ago' },
        { hash: 'ghi9012', short_hash: 'ghi9012', message: 'Fix model path handling', date: '2024-01-15T08:00:00Z', date_relative: '4 hours ago' }
      ],
      changes: {
        workflows: {
          added: ['new-workflow.json'],
          modified: ['flux-schnell.json', 'sdxl-turbo.json'],
          deleted: []
        },
        nodes: {
          to_install: ['comfyui-animatediff', 'comfyui-controlnet-aux'],
          to_remove: []
        },
        models: {
          referenced: ['flux1-dev.safetensors', 'sdxl_base.safetensors'],
          count: 2
        }
      },
      has_uncommitted_changes: false,
      can_pull: true,
      block_reason: null
    }

    // Return preview WITH workflow conflicts for "origin" or other remotes (V2 format)
    if (remote !== 'upstream') {
      return {
        ...basePreview,
        has_conflicts: true,
        workflow_conflicts: [
          {
            name: 'flux-schnell',
            conflict_type: 'both_modified',
            base_hash: 'abc12345',
            target_hash: 'def67890'
          },
          {
            name: 'sdxl-turbo',
            conflict_type: 'both_modified',
            base_hash: '11111111',
            target_hash: '22222222'
          }
        ]
      }
    }

    // Clean preview for "upstream" (no conflicts)
    return {
      ...basePreview,
      has_conflicts: false,
      workflow_conflicts: []
    }
  },

  /**
   * Validate Merge - Check node version compatibility after workflow resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/validate-merge
   */
  validateMerge: async (_remote: string, resolutions: Array<{ name: string; resolution: string }>): Promise<any> => {
    await delay(400)

    // Simulate: if user chose mixed resolutions, show node conflict
    const hasBase = resolutions.some(r => r.resolution === 'take_base')
    const hasTarget = resolutions.some(r => r.resolution === 'take_target')
    const hasMixed = hasBase && hasTarget

    if (hasMixed) {
      return {
        is_compatible: false,
        node_conflicts: [
          {
            node_id: 'rgthree-comfy',
            node_name: "rgthree's ComfyUI Nodes",
            base_version: '2.0.0',
            target_version: '1.5.0',
            chosen_version: '1.5.0',
            chosen_reason: 'Required by sdxl-turbo (theirs)',
            affected_workflows: [
              { name: 'flux-schnell', source: 'base', required_version: '2.0.0' },
              { name: 'sdxl-turbo', source: 'target', required_version: '1.5.0' }
            ]
          }
        ],
        warnings: []
      }
    }

    // All same side - compatible
    return {
      is_compatible: true,
      node_conflicts: [],
      warnings: hasTarget ? ["Model 'flux-dev.safetensors' has no download source"] : []
    }
  },

  /**
   * Pull from Remote - Execute pull with optional conflict resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/pull
   */
  pullFromRemote: async (remote: string, options: any): Promise<any> => {
    await delay(1500)
    console.log(`[MOCK] Pulling from ${remote} with options:`, options)

    // Simulate occasional rollback for testing (10% chance)
    if (options.resolutions && Math.random() < 0.1) {
      return {
        status: 'error',
        pull_output: '',
        sync_result: { nodes_installed: [], nodes_removed: [], models_queued: 0, errors: [] },
        rolled_back: true,
        error: 'Simulated sync failure - merge rolled back'
      }
    }

    return {
      status: 'success',
      pull_output: 'Already up to date.',
      sync_result: {
        nodes_installed: options.resolutions ? ['comfyui-animatediff'] : [],
        nodes_removed: [],
        models_queued: 0,
        errors: []
      },
      rolled_back: false,
      message: 'Pull completed successfully'
    }
  },

  /**
   * Get Push Preview
   * GET /v2/comfygit/remotes/{name}/push-preview
   */
  getPushPreview: async (remote: string): Promise<any> => {
    await delay(400)
    return {
      remote,
      branch: 'main',
      commits_ahead: 2,
      commits: [
        { hash: 'xyz1234', short_hash: 'xyz1234', message: 'Local workflow changes', date: '2024-01-15T11:00:00Z', date_relative: '1 hour ago' },
        { hash: 'uvw5678', short_hash: 'uvw5678', message: 'Add new node configuration', date: '2024-01-15T10:45:00Z', date_relative: '1.5 hours ago' }
      ],
      has_uncommitted_changes: false,
      remote_has_new_commits: false,
      can_push: true,
      needs_force: false,
      block_reason: null
    }
  },

  /**
   * Push to Remote
   * POST /v2/comfygit/remotes/{name}/push
   */
  pushToRemote: async (remote: string, options: any): Promise<any> => {
    await delay(1000)
    console.log(`[MOCK] Pushing to ${remote} with options:`, options)
    return {
      status: 'success',
      push_output: 'Everything up-to-date',
      commits_pushed: 2,
      message: 'Push completed successfully'
    }
  },

  // =============================================================================
  // NEW: Interactive Workflow Resolution Endpoints
  // =============================================================================

  /**
   * Analyze Workflow - Returns full resolution analysis
   * POST /v2/comfygit/workflow/{name}/analyze
   *
   * Test scenarios by using different workflow names:
   * - "test-unresolved-nodes.json" - Only unresolved nodes
   * - "test-unresolved-models.json" - Only unresolved models
   * - "test-ambiguous-nodes.json" - Multiple node options to choose from
   * - "test-ambiguous-models.json" - Multiple model options to choose from
   * - "test-mixed-complex.json" - Complex scenario with all types
   * - "test-all-resolved.json" - Everything perfect, no user input needed
   * - Default: Returns a realistic mixed scenario
   */
  analyzeWorkflow: async (workflowName: string): Promise<any> => {
    await delay(600)

    // Scenario-based mock data
    const scenarios: Record<string, any> = {
      // Scenario 1: Only unresolved nodes (no matching packages found)
      'test-unresolved-nodes.json': {
        workflow: workflowName,
        nodes: {
          resolved: [
            {
              reference: { node_type: 'KSampler', workflow: workflowName },
              package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
              match_confidence: 1.0,
              match_type: 'builtin',
              is_installed: true
            }
          ],
          unresolved: [
            {
              reference: { node_type: 'CustomUpscaler', workflow: workflowName, node_id: 'node1' },
              reason: 'not_found_in_registry'
            },
            {
              reference: { node_type: 'MagicNode', workflow: workflowName, node_id: 'node2' },
              reason: 'not_found_in_registry'
            }
          ],
          ambiguous: []
        },
        models: {
          resolved: [
            {
              reference: { workflow: workflowName, node_id: '4', node_type: 'CheckpointLoader', widget_name: 'model', widget_value: 'flux1-dev.safetensors' },
              model: { filename: 'flux1-dev.safetensors', hash: 'abc123', size: 11725000000, category: 'checkpoints', relative_path: 'checkpoints/flux1-dev.safetensors' },
              match_confidence: 1.0,
              match_type: 'exact'
            }
          ],
          unresolved: [],
          ambiguous: []
        },
        stats: {
          total_nodes: 3,
          total_models: 1,
          nodes_resolved: 1,
          nodes_unresolved: 2,
          nodes_ambiguous: 0,
          models_resolved: 1,
          models_unresolved: 0,
          models_ambiguous: 0,
          needs_user_input: true
        }
      },

      // Scenario 2: Only unresolved models (not found in index)
      'test-unresolved-models.json': {
        workflow: workflowName,
        nodes: {
          resolved: [
            {
              reference: { node_type: 'LoadCheckpoint', workflow: workflowName },
              package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
              match_confidence: 1.0,
              match_type: 'builtin',
              is_installed: true
            }
          ],
          unresolved: [],
          ambiguous: []
        },
        models: {
          resolved: [],
          unresolved: [
            {
              reference: {
                workflow: workflowName,
                node_id: 'node3',
                node_type: 'CheckpointLoader',
                widget_name: 'model',
                widget_value: 'super_rare_model.safetensors'
              },
              reason: 'not_found_in_index'
            },
            {
              reference: {
                workflow: workflowName,
                node_id: 'node4',
                node_type: 'VAELoader',
                widget_name: 'vae',
                widget_value: 'custom_vae.safetensors'
              },
              reason: 'not_found_in_index'
            }
          ],
          ambiguous: []
        },
        stats: {
          total_nodes: 1,
          total_models: 2,
          nodes_resolved: 1,
          nodes_unresolved: 0,
          nodes_ambiguous: 0,
          models_resolved: 0,
          models_unresolved: 2,
          models_ambiguous: 0,
          needs_user_input: true
        }
      },

      // Scenario 3: Ambiguous nodes (multiple matching packages)
      'test-ambiguous-nodes.json': {
        workflow: workflowName,
        nodes: {
          resolved: [],
          unresolved: [],
          ambiguous: [
            {
              reference: { node_type: 'FluxLoader', workflow: workflowName, node_id: 'node1' },
              options: [
                {
                  package: { package_id: 'comfyui-flux-official', title: 'FLUX Official Nodes' },
                  match_confidence: 0.95,
                  match_type: 'fuzzy',
                  is_installed: false
                },
                {
                  package: { package_id: 'flux-community-nodes', title: 'FLUX Community Pack' },
                  match_confidence: 0.90,
                  match_type: 'fuzzy',
                  is_installed: false
                },
                {
                  package: { package_id: 'advanced-flux-toolkit', title: 'Advanced FLUX Toolkit' },
                  match_confidence: 0.85,
                  match_type: 'fuzzy',
                  is_installed: false
                }
              ]
            },
            {
              reference: { node_type: 'ImageEnhancer', workflow: workflowName, node_id: 'node2' },
              options: [
                {
                  package: { package_id: 'comfyui-image-enhance', title: 'Image Enhancement Suite' },
                  match_confidence: 0.88,
                  match_type: 'fuzzy',
                  is_installed: false
                },
                {
                  package: { package_id: 'ultimate-image-toolkit', title: 'Ultimate Image Toolkit' },
                  match_confidence: 0.82,
                  match_type: 'fuzzy',
                  is_installed: false
                }
              ]
            }
          ]
        },
        models: {
          resolved: [
            {
              reference: { workflow: workflowName, node_id: '5', node_type: 'CheckpointLoader', widget_name: 'model', widget_value: 'sdxl_base.safetensors' },
              model: { filename: 'sdxl_base.safetensors', hash: 'def456', size: 6500000000, category: 'checkpoints', relative_path: 'checkpoints/sdxl_base.safetensors' },
              match_confidence: 1.0,
              match_type: 'exact'
            }
          ],
          unresolved: [],
          ambiguous: []
        },
        stats: {
          total_nodes: 2,
          total_models: 1,
          nodes_resolved: 0,
          nodes_unresolved: 0,
          nodes_ambiguous: 2,
          models_resolved: 1,
          models_unresolved: 0,
          models_ambiguous: 0,
          needs_user_input: true
        }
      },

      // Scenario 4: Ambiguous models (multiple files match the name)
      'test-ambiguous-models.json': {
        workflow: workflowName,
        nodes: {
          resolved: [
            {
              reference: { node_type: 'CheckpointLoader', workflow: workflowName },
              package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
              match_confidence: 1.0,
              match_type: 'builtin',
              is_installed: true
            }
          ],
          unresolved: [],
          ambiguous: []
        },
        models: {
          resolved: [],
          unresolved: [],
          ambiguous: [
            {
              reference: {
                workflow: workflowName,
                node_id: 'node3',
                node_type: 'CheckpointLoader',
                widget_name: 'model',
                widget_value: 'sdxl_model.safetensors'
              },
              options: [
                {
                  model: {
                    filename: 'sdxl_base_1.0.safetensors',
                    hash: 'aaa111',
                    size: 6500000000,
                    category: 'checkpoints',
                    relative_path: 'checkpoints/sdxl_base_1.0.safetensors'
                  },
                  match_confidence: 0.95,
                  match_type: 'fuzzy',
                  has_download_source: true
                },
                {
                  model: {
                    filename: 'sdxl_refiner_1.0.safetensors',
                    hash: 'bbb222',
                    size: 6100000000,
                    category: 'checkpoints',
                    relative_path: 'checkpoints/sdxl_refiner_1.0.safetensors'
                  },
                  match_confidence: 0.85,
                  match_type: 'fuzzy',
                  has_download_source: true
                },
                {
                  model: {
                    filename: 'sdxl_turbo.safetensors',
                    hash: 'ccc333',
                    size: 6700000000,
                    category: 'checkpoints',
                    relative_path: 'checkpoints/sdxl_turbo.safetensors'
                  },
                  match_confidence: 0.75,
                  match_type: 'fuzzy',
                  has_download_source: false
                }
              ]
            }
          ]
        },
        stats: {
          total_nodes: 1,
          total_models: 1,
          nodes_resolved: 1,
          nodes_unresolved: 0,
          nodes_ambiguous: 0,
          models_resolved: 0,
          models_unresolved: 0,
          models_ambiguous: 1,
          needs_user_input: true
        }
      },

      // Scenario 5: Complex mixed scenario (everything)
      'test-mixed-complex.json': {
        workflow: workflowName,
        nodes: {
          resolved: [
            {
              reference: { node_type: 'KSampler', workflow: workflowName },
              package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
              match_confidence: 1.0,
              match_type: 'builtin',
              is_installed: true
            }
          ],
          unresolved: [
            {
              reference: { node_type: 'UltraUpscaler', workflow: workflowName, node_id: 'node1' },
              reason: 'not_found_in_registry'
            }
          ],
          ambiguous: [
            {
              reference: { node_type: 'FluxSampler', workflow: workflowName, node_id: 'node2' },
              options: [
                {
                  package: { package_id: 'flux-samplers-pro', title: 'FLUX Samplers Pro' },
                  match_confidence: 0.92,
                  match_type: 'fuzzy',
                  is_installed: false
                },
                {
                  package: { package_id: 'flux-toolkit', title: 'FLUX Toolkit' },
                  match_confidence: 0.87,
                  match_type: 'fuzzy',
                  is_installed: false
                }
              ]
            }
          ]
        },
        models: {
          resolved: [
            {
              reference: { workflow: workflowName, node_id: '4', node_type: 'CheckpointLoader', widget_name: 'model', widget_value: 'flux1-dev.safetensors' },
              model: { filename: 'flux1-dev.safetensors', hash: 'abc123', size: 11725000000, category: 'checkpoints', relative_path: 'checkpoints/flux1-dev.safetensors' },
              match_confidence: 1.0,
              match_type: 'exact'
            }
          ],
          unresolved: [
            {
              reference: {
                workflow: workflowName,
                node_id: 'node5',
                node_type: 'VAELoader',
                widget_name: 'vae',
                widget_value: 'flux_vae.safetensors'
              },
              reason: 'not_found_in_index'
            }
          ],
          ambiguous: [
            {
              reference: {
                workflow: workflowName,
                node_id: 'node6',
                node_type: 'CheckpointLoader',
                widget_name: 'model',
                widget_value: 'sdxl.safetensors'
              },
              options: [
                {
                  model: {
                    filename: 'sdxl_base_1.0.safetensors',
                    hash: 'ddd444',
                    size: 6500000000,
                    category: 'checkpoints',
                    relative_path: 'checkpoints/sdxl_base_1.0.safetensors'
                  },
                  match_confidence: 0.90,
                  match_type: 'fuzzy',
                  has_download_source: true
                },
                {
                  model: {
                    filename: 'sdxl_refiner_1.0.safetensors',
                    hash: 'eee555',
                    size: 6100000000,
                    category: 'checkpoints',
                    relative_path: 'checkpoints/sdxl_refiner_1.0.safetensors'
                  },
                  match_confidence: 0.80,
                  match_type: 'fuzzy',
                  has_download_source: true
                }
              ]
            }
          ]
        },
        stats: {
          total_nodes: 3,
          total_models: 3,
          nodes_resolved: 1,
          nodes_unresolved: 1,
          nodes_ambiguous: 1,
          models_resolved: 1,
          models_unresolved: 1,
          models_ambiguous: 1,
          needs_user_input: true
        }
      },

      // Scenario 6: All resolved (perfect workflow, no user input needed)
      'test-all-resolved.json': {
        workflow: workflowName,
        nodes: {
          resolved: [
            {
              reference: { node_type: 'KSampler', workflow: workflowName },
              package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
              match_confidence: 1.0,
              match_type: 'builtin',
              is_installed: true
            },
            {
              reference: { node_type: 'CLIPTextEncode', workflow: workflowName },
              package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
              match_confidence: 1.0,
              match_type: 'builtin',
              is_installed: true
            },
            {
              reference: { node_type: 'VAEDecode', workflow: workflowName },
              package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
              match_confidence: 1.0,
              match_type: 'builtin',
              is_installed: true
            }
          ],
          unresolved: [],
          ambiguous: []
        },
        models: {
          resolved: [
            {
              reference: { workflow: workflowName, node_id: '1', node_type: 'CheckpointLoader', widget_name: 'model', widget_value: 'sdxl_base.safetensors' },
              model: { filename: 'sdxl_base.safetensors', hash: 'fff666', size: 6500000000, category: 'checkpoints', relative_path: 'checkpoints/sdxl_base.safetensors' },
              match_confidence: 1.0,
              match_type: 'exact'
            },
            {
              reference: { workflow: workflowName, node_id: '2', node_type: 'VAELoader', widget_name: 'vae', widget_value: 'sdxl_vae.safetensors' },
              model: { filename: 'sdxl_vae.safetensors', hash: 'ggg777', size: 335000000, category: 'vae', relative_path: 'vae/sdxl_vae.safetensors' },
              match_confidence: 1.0,
              match_type: 'exact'
            }
          ],
          unresolved: [],
          ambiguous: []
        },
        stats: {
          total_nodes: 3,
          total_models: 2,
          nodes_resolved: 3,
          nodes_unresolved: 0,
          nodes_ambiguous: 0,
          models_resolved: 2,
          models_unresolved: 0,
          models_ambiguous: 0,
          needs_user_input: false
        }
      }
    }

    // Return scenario-specific data or default to existing mock
    return scenarios[workflowName] || {
      workflow: workflowName,
      nodes: {
        resolved: [
          {
            reference: { node_type: 'KSampler', workflow: workflowName },
            package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
            match_confidence: 1.0,
            match_type: 'builtin',
            is_installed: true
          }
        ],
        unresolved: [
          {
            reference: { node_type: 'CustomNode1', workflow: workflowName, node_id: 'node1' },
            reason: 'not_found_in_registry'
          }
        ],
        ambiguous: [
          {
            reference: { node_type: 'FluxNode', workflow: workflowName, node_id: 'node2' },
            options: [
              {
                package: { package_id: 'flux-package-a', title: 'FLUX Package A' },
                match_confidence: 0.92,
                match_type: 'fuzzy',
                is_installed: false
              },
              {
                package: { package_id: 'flux-package-b', title: 'FLUX Package B' },
                match_confidence: 0.85,
                match_type: 'fuzzy',
                is_installed: false
              }
            ]
          }
        ]
      },
      models: {
        resolved: [],
        unresolved: [
          {
            reference: {
              workflow: workflowName,
              node_id: 'node3',
              node_type: 'CheckpointLoader',
              widget_name: 'model',
              widget_value: 'test_model.safetensors'
            },
            reason: 'not_found_in_index'
          }
        ],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 1,
        nodes_ambiguous: 1,
        models_resolved: 0,
        models_unresolved: 1,
        models_ambiguous: 0,
        needs_user_input: true
      }
    }
  },

  /**
   * Apply Resolution - Apply user choices and return installation plan
   * POST /v2/comfygit/workflow/{name}/apply-resolution
   */
  applyResolution: async (
    workflowName: string,
    nodeChoices: Map<string, any>,
    modelChoices: Map<string, any>
  ): Promise<any> => {
    await delay(800)

    const nodesToInstall: string[] = []
    const modelsToDownload: any[] = []

    // Process node choices
    nodeChoices.forEach((choice, nodeType) => {
      if (choice.action === 'install' && choice.package_id) {
        nodesToInstall.push(choice.package_id)
      }
    })

    // Process model choices
    modelChoices.forEach((choice, filename) => {
      if (choice.action === 'download' && choice.url) {
        modelsToDownload.push({
          filename,
          url: choice.url,
          size: 6500000000,
          target_path: choice.target_path || `models/${filename}`
        })
      } else if (choice.action === 'select' && choice.selected_model) {
        // Model already exists, just note it
        console.log(`[MOCK] Selected existing model: ${choice.selected_model.filename}`)
      }
    })

    return {
      status: 'success',
      nodes_to_install: nodesToInstall,
      models_to_download: modelsToDownload,
      estimated_time_seconds: nodesToInstall.length * 30 + modelsToDownload.length * 120
    }
  },

  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (query: string, limit: number = 10): Promise<any> => {
    await delay(400)

    // Mock search results based on query
    const allResults = [
      {
        package_id: 'comfyui-flux-official',
        match_confidence: 0.95,
        match_type: 'fuzzy',
        description: 'Official FLUX model support for ComfyUI with optimized samplers',
        repository: 'https://github.com/black-forest-labs/flux-comfy',
        is_installed: false
      },
      {
        package_id: 'flux-advanced-toolkit',
        match_confidence: 0.88,
        match_type: 'fuzzy',
        description: 'Advanced FLUX tools including custom schedulers and samplers',
        repository: 'https://github.com/community/flux-toolkit',
        is_installed: false
      },
      {
        package_id: 'comfyui-upscaler-pack',
        match_confidence: 0.82,
        match_type: 'fuzzy',
        description: 'Collection of upscaling nodes with various models',
        repository: 'https://github.com/upscaler/comfyui-pack',
        is_installed: false
      },
      {
        package_id: 'ultimate-image-tools',
        match_confidence: 0.75,
        match_type: 'partial',
        description: 'Ultimate image processing toolkit for ComfyUI',
        repository: 'https://github.com/tools/ultimate-image',
        is_installed: true
      },
      {
        package_id: 'comfyui-controlnet-aux',
        match_confidence: 0.70,
        match_type: 'partial',
        description: 'Auxiliary ControlNet preprocessors',
        repository: 'https://github.com/fannovel16/controlnet-aux',
        is_installed: true
      }
    ]

    return {
      results: allResults.slice(0, limit),
      total: allResults.length
    }
  },

  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (query: string, limit: number = 10): Promise<any> => {
    await delay(400)

    // Mock model search results
    const allResults = [
      {
        filename: 'flux1-dev-fp8.safetensors',
        hash: 'abc123def456',
        size: 11725000000,
        category: 'checkpoints',
        has_download_source: true,
        relative_path: 'checkpoints/flux1-dev-fp8.safetensors',
        match_confidence: 0.95
      },
      {
        filename: 'sdxl_base_1.0.safetensors',
        hash: 'def456abc789',
        size: 6500000000,
        category: 'checkpoints',
        has_download_source: true,
        relative_path: 'checkpoints/sdxl_base_1.0.safetensors',
        match_confidence: 0.90
      },
      {
        filename: 'sdxl_refiner_1.0.safetensors',
        hash: 'ghi789jkl012',
        size: 6100000000,
        category: 'checkpoints',
        has_download_source: true,
        relative_path: 'checkpoints/sdxl_refiner_1.0.safetensors',
        match_confidence: 0.85
      },
      {
        filename: 'flux_vae.safetensors',
        hash: 'mno345pqr678',
        size: 335000000,
        category: 'vae',
        has_download_source: false,
        relative_path: 'vae/flux_vae.safetensors',
        match_confidence: 0.80
      },
      {
        filename: 'controlnet_openpose.safetensors',
        hash: 'stu901vwx234',
        size: 1450000000,
        category: 'controlnet',
        has_download_source: true,
        relative_path: 'controlnet/controlnet_openpose.safetensors',
        match_confidence: 0.75
      }
    ]

    return {
      results: allResults.slice(0, limit),
      total: allResults.length
    }
  },

  // Export Validation - shows warnings for models without sources
  validateExport: async (): Promise<ExportValidationResult> => {
    await delay(400)
    // All models that could be missing sources
    const allModelsWithoutSources = [
      {
        filename: 'sd_xl_base_1.0.safetensors',
        hash: 'abc123def456',
        workflows: ['flux-dev-img2img.json', 'sdxl-lightning.json']
      },
      {
        filename: 'controlnet_openpose.safetensors',
        hash: 'xyz789ghi012',
        workflows: ['pose-to-image.json']
      },
      {
        filename: 'custom_lora_v2.safetensors',
        hash: 'lmn345opq678',
        workflows: ['flux-dev-img2img.json']
      },
      {
        filename: 'vae_ft_mse.pt',
        hash: 'rst901uvw234',
        workflows: ['sdxl-lightning.json', 'pose-to-image.json', 'upscale-workflow.json']
      }
    ]

    // Filter out models that have had sources added
    const modelsWithoutSources = allModelsWithoutSources.filter(
      m => !mockAddedSources.has(m.hash)
    )

    return {
      can_export: true,
      blocking_issues: [],
      warnings: {
        models_without_sources: modelsWithoutSources
      }
    }
  },

  // Mock for blocked export (call this variant to test blocked UI)
  validateExportBlocked: async (): Promise<ExportValidationResult> => {
    await delay(400)
    return {
      can_export: false,
      blocking_issues: [
        {
          type: 'uncommitted_workflows',
          message: 'Cannot export with uncommitted workflow changes',
          details: ['new-workflow.json', 'modified-portrait.json', 'another-change.json']
        },
        {
          type: 'unresolved_issues',
          message: 'Cannot export - workflows have unresolved issues',
          details: []
        }
      ],
      warnings: {
        models_without_sources: []
      }
    }
  },

  exportEnvWithForce: async (outputPath?: string): Promise<ExportResult> => {
    await delay(800)
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
    return {
      status: 'success',
      path: outputPath || `/home/user/exports/production_export_${timestamp}.tar.gz`,
      models_without_sources: 4
    }
  },

  // =============================================================================
  // Deploy Endpoints
  // =============================================================================

  getDeploySummary: async (): Promise<EnvironmentDeploySummary> => {
    await delay(300)
    return {
      comfyui_version: 'v0.3.48',
      node_count: 15,
      model_count: 8,
      models_with_sources: 6,
      models_without_sources: 2,
      workflow_count: 3,
      estimated_package_size_mb: 45.2
    }
  },

  testRunPodConnection: async (apiKey: string, saveKey: boolean): Promise<RunPodConnectionResult> => {
    await delay(800)
    if (apiKey.startsWith('rp_')) {
      return {
        status: 'success',
        message: 'Connected to RunPod',
        credit_balance: 25.50
      }
    }
    return {
      status: 'error',
      message: 'Invalid API key format. Keys should start with "rp_"'
    }
  },

  getNetworkVolumes: async (): Promise<{ volumes: NetworkVolume[] }> => {
    await delay(400)
    return {
      volumes: [
        {
          id: '5aio30csvw',
          name: 'comfygit_workspace',
          size_gb: 100,
          data_center_id: 'US-IL-1',
          data_center_name: 'United States'
        },
        {
          id: 'abc123xyz',
          name: 'my-sd-models',
          size_gb: 200,
          data_center_id: 'EU-CZ-1',
          data_center_name: 'Europe'
        }
      ]
    }
  },

  getRunPodGpuTypes: async (dataCenterId?: string): Promise<{ gpu_types: RunPodGpuType[] }> => {
    await delay(400)

    const allGpus: RunPodGpuType[] = [
      { id: 'NVIDIA RTX 4090', displayName: 'RTX 4090', memoryInGb: 24, securePrice: 0.44, communityPrice: 0.34, available: true, data_center_id: 'US-IL-1' },
      { id: 'NVIDIA RTX 3090', displayName: 'RTX 3090', memoryInGb: 24, securePrice: 0.22, communityPrice: 0.16, available: true, data_center_id: 'US-IL-1' },
      { id: 'NVIDIA A100 80GB', displayName: 'A100 80GB', memoryInGb: 80, securePrice: 1.89, communityPrice: 1.49, available: true, data_center_id: 'US-IL-1' },
      { id: 'NVIDIA RTX 4090', displayName: 'RTX 4090', memoryInGb: 24, securePrice: 0.44, communityPrice: 0.34, available: true, data_center_id: 'EU-CZ-1' },
      { id: 'NVIDIA RTX A6000', displayName: 'RTX A6000', memoryInGb: 48, securePrice: 0.79, communityPrice: 0.59, available: true, data_center_id: 'EU-CZ-1' }
    ]

    // Filter by data center if specified
    if (dataCenterId) {
      return { gpu_types: allGpus.filter(g => g.data_center_id === dataCenterId) }
    }

    return { gpu_types: allGpus }
  },

  deployToRunPod: async (config: DeployConfig): Promise<DeployResult> => {
    await delay(2000)
    console.log('[MOCK] Deploying to RunPod:', config)
    return {
      status: 'success',
      pod_id: 'mock_pod_' + Date.now(),
      message: 'Pod created. Starting ComfyUI setup...'
    }
  },

  getRunPodPods: async (): Promise<{ pods: RunPodInstance[] }> => {
    await delay(500)
    return {
      pods: [
        {
          id: 'mock_abc123',
          name: 'my-comfyui-deploy',
          gpu_type: 'NVIDIA RTX 4090',
          gpu_count: 1,
          status: 'RUNNING',
          created_at: new Date(Date.now() - 3600000).toISOString(),
          cost_per_hour: 0.44,
          uptime_seconds: 3600,
          total_cost: 0.44,
          pod_url: 'https://mock_abc123.runpod.net',
          comfyui_url: 'https://mock_abc123-8188.proxy.runpod.net'
        },
        {
          id: 'mock_def456',
          name: 'test-deployment',
          gpu_type: 'NVIDIA RTX 3090',
          gpu_count: 1,
          status: 'EXITED',
          created_at: new Date(Date.now() - 86400000).toISOString(),
          cost_per_hour: 0.22,
          uptime_seconds: 900,
          total_cost: 0.06,
          pod_url: 'https://mock_def456.runpod.net'
        }
      ]
    }
  },

  terminateRunPodPod: async (podId: string): Promise<{ status: 'success' | 'error'; message: string }> => {
    await delay(1000)
    console.log(`[MOCK] Terminating pod: ${podId}`)
    return { status: 'success', message: 'Pod terminated' }
  },

  exportDeployPackage: async (outputPath?: string): Promise<DeployPackageResult> => {
    await delay(1500)
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
    return {
      status: 'success',
      package_path: outputPath || `/home/user/comfygit_deploy_${timestamp}.tar.gz`,
      package_size_mb: 45.2,
      message: 'Deploy package created successfully'
    }
  },

  getStoredRunPodKey: async (): Promise<{ has_key: boolean; key_preview?: string }> => {
    await delay(200)
    // Simulate stored key state - toggle this to test different states
    return {
      has_key: false
    }
  },

  clearRunPodKey: async (): Promise<{ status: 'success' }> => {
    await delay(200)
    console.log('[MOCK] Cleared RunPod API key')
    return { status: 'success' }
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
