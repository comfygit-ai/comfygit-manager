<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="ENVIRONMENTS"
        :show-info="true"
        @info-click="showPopover = true"
      >
        <template #actions>
          <ActionButton
            variant="ghost"
            size="sm"
            @click="openCreateForm"
            title="Create new environment"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
          </ActionButton>
          <ActionButton
            variant="ghost"
            size="sm"
            @click="loadEnvironments"
            title="Refresh environments"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z"/>
            </svg>
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #search>
      <SearchBar
        v-model="searchQuery"
        placeholder="🔍 Search environments..."
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading environments..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadEnvironments" />
      </template>
      <template v-else>
        <!-- Create Environment Form -->
        <div v-if="showCreateForm" class="create-form">
          <div class="create-form__header">
            <span class="create-form__title">Create New Environment</span>
            <ActionButton
              variant="ghost"
              size="xs"
              @click="cancelCreate"
            >
              ✕
            </ActionButton>
          </div>
          <div class="create-form__body">
            <!-- Environment Name -->
            <div class="form-field">
              <label class="form-label">Name</label>
              <TextInput
                v-model="newEnvironmentName"
                placeholder="my-environment"
                @keyup.esc="cancelCreate"
              />
            </div>

            <!-- Python Version -->
            <div class="form-field">
              <label class="form-label">Python Version</label>
              <select v-model="selectedPythonVersion" class="form-select">
                <option v-for="version in PYTHON_VERSIONS" :key="version" :value="version">
                  {{ version }}
                </option>
              </select>
            </div>

            <!-- ComfyUI Version -->
            <div class="form-field">
              <label class="form-label">ComfyUI Version</label>
              <select v-model="selectedComfyUIVersion" class="form-select" :disabled="loadingReleases">
                <option v-for="release in comfyUIReleases" :key="release.tag_name" :value="release.tag_name">
                  {{ release.name }}
                </option>
              </select>
            </div>

            <!-- Torch Backend -->
            <div class="form-field">
              <label class="form-label">PyTorch Backend</label>
              <select v-model="selectedTorchBackend" class="form-select">
                <option v-for="backend in TORCH_BACKENDS" :key="backend" :value="backend">
                  {{ backend }}{{ backend === 'auto' ? ' (detect GPU)' : '' }}
                </option>
              </select>
            </div>

            <!-- Switch After Create -->
            <div class="form-field form-field--checkbox">
              <label class="form-checkbox">
                <input type="checkbox" v-model="switchAfterCreate" />
                <span>Switch to this environment after creation</span>
              </label>
            </div>

            <div class="create-form__actions">
              <ActionButton
                variant="primary"
                size="sm"
                @click="handleCreate"
                :disabled="!newEnvironmentName.trim()"
              >
                Create
              </ActionButton>
              <ActionButton
                variant="secondary"
                size="sm"
                @click="cancelCreate"
              >
                Cancel
              </ActionButton>
            </div>
          </div>
        </div>

        <!-- Summary Bar -->
        <SummaryBar v-if="environments.length" variant="compact">
          Total: {{ environments.length }} {{ environments.length === 1 ? 'environment' : 'environments' }}
          <template v-if="currentEnvironment">
            • Current: <strong>{{ currentEnvironment.name }}</strong>
          </template>
        </SummaryBar>

        <!-- Environment List -->
        <SectionGroup v-if="filteredEnvironments.length" title="ENVIRONMENTS" :count="filteredEnvironments.length">
          <EnvironmentListItem
            v-for="env in filteredEnvironments"
            :key="env.name"
            :environment-name="env.name"
            :is-current="env.is_current"
            :current-branch="env.current_branch"
            :workflow-count="env.workflow_count"
            :node-count="env.node_count"
            :model-count="env.model_count"
            :last-used="formatRelativeTime(env.last_used)"
            :show-last-used="!!env.last_used"
          >
            <template #actions>
              <ActionButton
                v-if="!env.is_current"
                variant="secondary"
                size="sm"
                @click="$emit('switch', env.name)"
              >
                Switch
              </ActionButton>
              <ActionButton
                variant="ghost"
                size="sm"
                @click="viewEnvironmentDetails(env.name)"
                title="View environment details"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  <path d="M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"/>
                </svg>
              </ActionButton>
              <ActionButton
                v-if="!env.is_current && environments.length > 1"
                variant="ghost"
                size="sm"
                @click="confirmDelete(env.name)"
                title="Delete environment"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" style="color: var(--cg-color-error)">
                  <path d="M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z"/>
                </svg>
              </ActionButton>
            </template>
          </EnvironmentListItem>
        </SectionGroup>

        <!-- Empty State -->
        <EmptyState
          v-if="!filteredEnvironments.length"
          icon="🌍"
          :message="searchQuery ? `No environments match '${searchQuery}'` : 'No environments found. Create one to get started!'"
        >
          <template v-if="!searchQuery" #actions>
            <ActionButton
              variant="primary"
              @click="openCreateForm"
            >
              Create Environment
            </ActionButton>
          </template>
        </EmptyState>
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Environments"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        <strong>Environments</strong> are isolated workspaces that contain their own workflows, nodes, and models.
        Each environment can track different branches and maintain separate state.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        <strong>Use cases:</strong>
      </p>
      <ul style="margin-top: var(--cg-space-1); padding-left: var(--cg-space-4)">
        <li>Separate production and development workflows</li>
        <li>Test different node configurations</li>
        <li>Experiment with new models safely</li>
        <li>Maintain multiple project versions</li>
      </ul>
    </template>
    <template #actions>
      <ActionButton variant="secondary" @click="showPopover = false">
        Got it
      </ActionButton>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { EnvironmentInfo, ComfyUIRelease, CreateEnvironmentRequest } from '@/types/comfygit'
import { PYTHON_VERSIONS, DEFAULT_PYTHON_VERSION, TORCH_BACKENDS, DEFAULT_TORCH_BACKEND } from '@/constants/environment'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SearchBar from '@/components/base/molecules/SearchBar.vue'
import EnvironmentListItem from '@/components/base/molecules/EnvironmentListItem.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import TextInput from '@/components/base/atoms/TextInput.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'

const emit = defineEmits<{
  switch: [environmentName: string]
  create: [request: CreateEnvironmentRequest]
  delete: [environmentName: string]
  viewDetails: [environmentName: string]
}>()

const { getEnvironments, getComfyUIReleases } = useComfyGitService()

const environments = ref<EnvironmentInfo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)
const showCreateForm = ref(false)

// Create form state
const newEnvironmentName = ref('')
const selectedPythonVersion = ref(DEFAULT_PYTHON_VERSION)
const selectedComfyUIVersion = ref('latest')
const selectedTorchBackend = ref(DEFAULT_TORCH_BACKEND)
const switchAfterCreate = ref(false)
const comfyUIReleases = ref<ComfyUIRelease[]>([{ tag_name: 'latest', name: 'Latest', published_at: '' }])
const loadingReleases = ref(false)

const currentEnvironment = computed(() =>
  environments.value.find(e => e.is_current)
)

const filteredEnvironments = computed(() => {
  if (!searchQuery.value.trim()) return environments.value
  const query = searchQuery.value.toLowerCase()
  return environments.value.filter(env =>
    env.name.toLowerCase().includes(query) ||
    env.current_branch?.toLowerCase().includes(query)
  )
})

function formatRelativeTime(timestamp?: string): string {
  if (!timestamp) return ''

  try {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'just now'
    if (diffMins < 60) return `${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ago`
    if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`
    if (diffDays < 30) return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`

    return date.toLocaleDateString()
  } catch {
    return timestamp
  }
}

function handleCreate() {
  const name = newEnvironmentName.value.trim()
  if (!name) return

  const request: CreateEnvironmentRequest = {
    name,
    python_version: selectedPythonVersion.value,
    comfyui_version: selectedComfyUIVersion.value,
    torch_backend: selectedTorchBackend.value,
    switch_after: switchAfterCreate.value
  }

  emit('create', request)
  resetCreateForm()
}

function cancelCreate() {
  resetCreateForm()
}

function resetCreateForm() {
  newEnvironmentName.value = ''
  selectedPythonVersion.value = DEFAULT_PYTHON_VERSION
  selectedComfyUIVersion.value = 'latest'
  selectedTorchBackend.value = DEFAULT_TORCH_BACKEND
  switchAfterCreate.value = false
  showCreateForm.value = false
}

async function openCreateForm() {
  showCreateForm.value = true
  // Fetch ComfyUI releases when opening form
  if (comfyUIReleases.value.length <= 1) {
    loadingReleases.value = true
    try {
      comfyUIReleases.value = await getComfyUIReleases()
    } catch (err) {
      console.error('Failed to load ComfyUI releases:', err)
    } finally {
      loadingReleases.value = false
    }
  }
}

function viewEnvironmentDetails(name: string) {
  emit('viewDetails', name)
}

function confirmDelete(name: string) {
  if (confirm(`Delete environment "${name}"?\n\nThis action cannot be undone.`)) {
    emit('delete', name)
  }
}

async function loadEnvironments() {
  loading.value = true
  error.value = null
  try {
    environments.value = await getEnvironments()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load environments'
  } finally {
    loading.value = false
  }
}

onMounted(loadEnvironments)

// Expose methods for parent component
defineExpose({
  loadEnvironments
})
</script>

<style scoped>
.create-form {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-accent);
  border-radius: var(--cg-radius-md);
  margin-bottom: var(--cg-space-4);
  box-shadow: var(--cg-shadow-md);
}

.create-form__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.create-form__title {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.create-form__body {
  padding: var(--cg-space-3);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.create-form__actions {
  display: flex;
  gap: var(--cg-space-2);
  margin-top: var(--cg-space-2);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.form-field--checkbox {
  flex-direction: row;
  align-items: center;
}

.form-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.form-select {
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  padding: var(--cg-space-2);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  cursor: pointer;
}

.form-select:hover {
  border-color: var(--cg-color-border);
}

.form-select:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.form-select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.form-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--cg-color-accent);
  cursor: pointer;
}
</style>
