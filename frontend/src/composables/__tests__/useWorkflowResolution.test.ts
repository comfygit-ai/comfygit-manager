import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useWorkflowResolution } from '../useWorkflowResolution'

describe('useWorkflowResolution', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('analyzeWorkflow', () => {
    it('should analyze workflow and return full resolution result', async () => {
      const { analyzeWorkflow, result, isLoading } = useWorkflowResolution()

      // Mock the API response
      global.window = {
        app: {
          api: {
            fetchApi: vi.fn().mockResolvedValue({
              ok: true,
              json: vi.fn().mockResolvedValue({
                workflow: 'test-workflow',
                nodes: {
                  resolved: [
                    {
                      node_type: 'TestNode',
                      package_id: 'test-package',
                      match_type: 'exact',
                      match_confidence: 1.0,
                      description: 'Test node package',
                      repository: 'https://github.com/test/test',
                      source: 'registry',
                      is_installed: false,
                      is_optional: false
                    }
                  ],
                  unresolved: [],
                  ambiguous: []
                },
                models: {
                  resolved: [],
                  unresolved: [],
                  ambiguous: []
                },
                stats: {
                  total_nodes: 1,
                  total_models: 0,
                  needs_user_input: false
                }
              })
            })
          }
        }
      } as any

      await analyzeWorkflow('test-workflow')

      expect(result.value).toBeDefined()
      expect(result.value?.workflow).toBe('test-workflow')
      expect(result.value?.nodes.resolved).toHaveLength(1)
      expect(result.value?.nodes.resolved[0].node_type).toBe('TestNode')
      expect(result.value?.nodes.ambiguous).toHaveLength(0)
      expect(result.value?.nodes.unresolved).toHaveLength(0)
      expect(result.value?.nodes.version_gated).toHaveLength(0)
      expect(result.value?.nodes.uninstallable).toHaveLength(0)
      expect(result.value?.node_guidance).toEqual({})
      expect(result.value?.package_aliases).toEqual({})
      expect(isLoading.value).toBe(false)
    })

    it('should handle analysis errors gracefully', async () => {
      const { analyzeWorkflow, error } = useWorkflowResolution()

      global.window = {
        app: {
          api: {
            fetchApi: vi.fn().mockResolvedValue({
              ok: false,
              status: 404,
              json: vi.fn().mockResolvedValue({
                error: 'Workflow not found'
              })
            })
          }
        }
      } as any

      await expect(analyzeWorkflow('nonexistent')).rejects.toThrow('Workflow not found')
      expect(error.value).toContain('Workflow not found')
    })

    it('should handle ambiguous node matches', async () => {
      const { analyzeWorkflow, result } = useWorkflowResolution()

      global.window = {
        app: {
          api: {
            fetchApi: vi.fn().mockResolvedValue({
              ok: true,
              json: vi.fn().mockResolvedValue({
                workflow: 'test-workflow',
                nodes: {
                  resolved: [],
                  unresolved: [],
                  ambiguous: [
                    {
                      node_type: 'AmbiguousNode',
                      options: [
                        {
                          package_id: 'option-1',
                          match_confidence: 0.8,
                          match_type: 'fuzzy',
                          description: 'First option',
                          repository: 'https://github.com/test/option1',
                          is_installed: false
                        },
                        {
                          package_id: 'option-2',
                          match_confidence: 0.75,
                          match_type: 'fuzzy',
                          description: 'Second option',
                          repository: 'https://github.com/test/option2',
                          is_installed: false
                        }
                      ]
                    }
                  ]
                },
                models: {
                  resolved: [],
                  unresolved: [],
                  ambiguous: []
                },
                stats: {
                  total_nodes: 1,
                  total_models: 0,
                  needs_user_input: true
                }
              })
            })
          }
        }
      } as any

      await analyzeWorkflow('test-workflow')

      expect(result.value?.nodes.ambiguous).toHaveLength(1)
      expect(result.value?.nodes.ambiguous[0].options).toHaveLength(2)
      expect(result.value?.stats.needs_user_input).toBe(true)
    })

    it('should preserve version-gated and uninstallable node fields from API', async () => {
      const { analyzeWorkflow, result } = useWorkflowResolution()

      global.window = {
        app: {
          api: {
            fetchApi: vi.fn().mockResolvedValue({
              ok: true,
              json: vi.fn().mockResolvedValue({
                workflow: 'test-workflow',
                nodes: {
                  resolved: [],
                  unresolved: [],
                  ambiguous: [],
                  version_gated: [
                    {
                      reference: { node_type: 'SetNode', workflow: 'test-workflow' },
                      reason: 'requires_newer_comfyui',
                      guidance: 'Upgrade ComfyUI to >= v0.3.18'
                    }
                  ],
                  uninstallable: [
                    {
                      reference: { node_type: 'GetNode', workflow: 'test-workflow' },
                      package: { package_id: 'kj-nodes', title: 'KJ Nodes' },
                      match_confidence: 1.0,
                      match_type: 'auto_selected',
                      is_installed: false,
                      reason: 'no_installable_package_version'
                    }
                  ]
                },
                node_guidance: { SetNode: 'Upgrade ComfyUI to >= v0.3.18' },
                models: {
                  resolved: [],
                  unresolved: [],
                  ambiguous: []
                },
                stats: {
                  total_nodes: 2,
                  total_models: 0,
                  needs_user_input: false
                }
              })
            })
          }
        }
      } as any

      await analyzeWorkflow('test-workflow')

      expect(result.value?.nodes.version_gated).toHaveLength(1)
      expect(result.value?.nodes.uninstallable).toHaveLength(1)
      expect(result.value?.node_guidance?.SetNode).toContain('Upgrade ComfyUI')
    })

    it('should preserve package aliases from API payload', async () => {
      const { analyzeWorkflow, result } = useWorkflowResolution()

      global.window = {
        app: {
          api: {
            fetchApi: vi.fn().mockResolvedValue({
              ok: true,
              json: vi.fn().mockResolvedValue({
                workflow: 'test-workflow',
                package_aliases: {
                  comfyui_ryanontheinside: 'comfyui_ryanonyheinside'
                },
                nodes: {
                  resolved: [],
                  unresolved: [],
                  ambiguous: []
                },
                models: {
                  resolved: [],
                  unresolved: [],
                  ambiguous: []
                },
                stats: {
                  total_nodes: 0,
                  total_models: 0,
                  needs_user_input: false
                }
              })
            })
          }
        }
      } as any

      await analyzeWorkflow('test-workflow')

      expect(result.value?.package_aliases).toEqual({
        comfyui_ryanontheinside: 'comfyui_ryanonyheinside'
      })
    })
  })

  describe('applyResolution', () => {
    it('should apply user choices correctly', async () => {
      const { applyResolution, appliedResult } = useWorkflowResolution()

      const nodeChoices = new Map([
        ['NodeType1', { action: 'install', package_id: 'pkg-1' }],
        ['NodeType2', { action: 'optional' }]
      ])

      const modelChoices = new Map([
        ['model1.safetensors', { action: 'download', url: 'https://example.com/model1.safetensors' }]
      ])

      global.window = {
        app: {
          api: {
            fetchApi: vi.fn().mockResolvedValue({
              ok: true,
              json: vi.fn().mockResolvedValue({
                status: 'success',
                nodes_to_install: ['pkg-1'],
                models_to_download: [
                  {
                    filename: 'model1.safetensors',
                    url: 'https://example.com/model1.safetensors',
                    size: 1000000,
                    target_path: '/models/model1.safetensors'
                  }
                ],
                estimated_time_seconds: 60
              })
            })
          }
        }
      } as any

      await applyResolution('test-workflow', nodeChoices, modelChoices)

      expect(appliedResult.value).toBeDefined()
      expect(appliedResult.value?.status).toBe('success')
      expect(appliedResult.value?.nodes_to_install).toContain('pkg-1')
      expect(appliedResult.value?.models_to_download).toHaveLength(1)
    })

    it('should handle apply errors gracefully', async () => {
      const { applyResolution, error } = useWorkflowResolution()

      global.window = {
        app: {
          api: {
            fetchApi: vi.fn().mockResolvedValue({
              ok: false,
              status: 400,
              json: vi.fn().mockResolvedValue({
                error: 'Invalid choices provided'
              })
            })
          }
        }
      } as any

      const nodeChoices = new Map()
      const modelChoices = new Map()

      await expect(applyResolution('test', nodeChoices, modelChoices)).rejects.toThrow('Invalid choices provided')
      expect(error.value).toContain('Invalid choices provided')
    })

    it('serializes uninstallable git choice fields in apply-resolution payload', async () => {
      const { applyResolution } = useWorkflowResolution()
      const fetchApi = vi.fn().mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue({
          status: 'success',
          nodes_to_install: [],
          models_to_download: [],
          estimated_time_seconds: 0
        })
      })

      global.window = {
        app: {
          api: { fetchApi }
        }
      } as any

      const nodeChoices = new Map([
        ['GetNode', {
          action: 'install',
          package_id: 'kj-nodes',
          install_source: 'git',
          repository: 'https://github.com/kijai/ComfyUI-KJNodes'
        }]
      ])

      await applyResolution('test-workflow', nodeChoices, new Map())

      const request = fetchApi.mock.calls[0]
      expect(request[0]).toBe('/v2/comfygit/workflow/test-workflow/apply-resolution')
      const payload = JSON.parse(request[1].body)
      expect(payload.node_choices.GetNode).toMatchObject({
        action: 'install',
        package_id: 'kj-nodes',
        install_source: 'git',
        repository: 'https://github.com/kijai/ComfyUI-KJNodes'
      })
    })
  })

  describe('searchNodes', () => {
    it('should search for node packages', async () => {
      const { searchNodes, searchResults } = useWorkflowResolution()

      global.window = {
        app: {
          api: {
            fetchApi: vi.fn().mockResolvedValue({
              ok: true,
              json: vi.fn().mockResolvedValue({
                results: [
                  {
                    package_id: 'comfyui-upscaler',
                    match_confidence: 0.9,
                    match_type: 'text_search',
                    description: 'Image upscaler node',
                    repository: 'https://github.com/example/upscaler'
                  }
                ],
                total: 1
              })
            })
          }
        }
      } as any

      await searchNodes('upscaler', 5)

      expect(searchResults.value).toHaveLength(1)
      expect(searchResults.value[0].package_id).toBe('comfyui-upscaler')
    })
  })

  describe('searchModels', () => {
    it('should search for models', async () => {
      const { searchModels, modelSearchResults } = useWorkflowResolution()

      global.window = {
        app: {
          api: {
            fetchApi: vi.fn().mockResolvedValue({
              ok: true,
              json: vi.fn().mockResolvedValue({
                results: [
                  {
                    filename: 'flux-model.safetensors',
                    hash: 'abc123',
                    size: 5000000000,
                    category: 'checkpoints',
                    has_download_source: true
                  }
                ],
                total: 1
              })
            })
          }
        }
      } as any

      await searchModels('flux', 5)

      expect(modelSearchResults.value).toHaveLength(1)
      expect(modelSearchResults.value[0].filename).toBe('flux-model.safetensors')
    })
  })
})
