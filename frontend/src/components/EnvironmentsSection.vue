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
            @click="showCreateForm = true"
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
            <TextInput
              v-model="newEnvironmentName"
              placeholder="Enter environment name..."
              @keyup.enter="handleCreate"
              @keyup.esc="cancelCreate"
            />
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
              @click="showCreateForm = true"
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
import type { EnvironmentInfo } from '@/types/comfygit'
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

const emit = defineEmits<{
  switch: [environmentName: string]
  create: [environmentName: string]
  delete: [environmentName: string]
  viewDetails: [environmentName: string]
}>()

const { getEnvironments } = useComfyGitService()

const environments = ref<EnvironmentInfo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)
const showCreateForm = ref(false)
const newEnvironmentName = ref('')

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

  emit('create', name)
  newEnvironmentName.value = ''
  showCreateForm.value = false
}

function cancelCreate() {
  newEnvironmentName.value = ''
  showCreateForm.value = false
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
}
</style>
