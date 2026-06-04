import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import StatusDetailModal from '../StatusDetailModal.vue'
import type { ComfyGitStatus } from '@/types/comfygit'

function createStatus(overrides: Partial<ComfyGitStatus> = {}): ComfyGitStatus {
  return {
    environment: 'test-env',
    branch: 'main',
    is_detached_head: false,
    is_synced: true,
    has_changes: false,
    workflows: {
      new: [],
      modified: [],
      deleted: [],
      synced: [],
      total: 0,
      analyzed: []
    },
    git_changes: {
      nodes_added: [],
      nodes_removed: [],
      workflow_changes: false,
      workflow_changes_detail: {},
      has_other_changes: false
    },
    comparison: {
      is_synced: true,
      missing_nodes: [],
      extra_nodes: [],
      disabled_nodes: [],
      version_mismatches: [],
      packages_in_sync: true
    },
    missing_models_count: 0,
    has_legacy_manager: false,
    ...overrides
  }
}

describe('StatusDetailModal', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('shows generic uncommitted manifest changes instead of a clean state', () => {
    mount(StatusDetailModal, {
      props: {
        show: true,
        status: createStatus({ has_changes: true })
      },
      attachTo: document.body
    })

    const text = document.body.textContent || ''
    expect(text).toContain('Current Branch:')
    expect(text).toContain('main')
    expect(text).toContain('UNCOMMITTED CHANGES')
    expect(text).toContain('CONFIGURATION UPDATED')
    expect(text).toContain('Manifest or environment configuration files changed')
    expect(text).not.toContain('detached HEAD')
    expect(text).not.toContain('Environment is clean!')
  })
})
