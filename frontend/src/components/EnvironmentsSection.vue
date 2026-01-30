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
            variant="primary"
            size="sm"
            @click="openCreateModal"
          >
            Create
          </ActionButton>
          <ActionButton
            variant="secondary"
            size="sm"
            @click="loadEnvironments"
          >
            Refresh
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
        <!-- Environment List -->
        <SectionGroup v-if="filteredEnvironments.length" title="ENVIRONMENTS" :count="filteredEnvironments.length">
          <EnvironmentListItem
            v-for="env in filteredEnvironments"
            :key="env.name"
            :environment-name="env.name"
            :is-current="env.is_current"
            :current-branch="env.current_branch"
            :show-last-used="false"
          >
            <template #actions>
              <ActionButton
                v-if="!env.is_current"
                variant="primary"
                size="sm"
                @click="$emit('switch', env.name)"
              >
                Switch
              </ActionButton>
              <ActionButton
                variant="secondary"
                size="sm"
                @click="showEnvironmentDetails(env)"
              >
                Details
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
              @click="openCreateModal"
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

  <!-- Environment Details Modal -->
  <EnvironmentDetailsModal
    v-if="selectedEnvironment"
    :environment="selectedEnvironment"
    :detail="environmentDetail"
    :can-delete="environments.length > 1"
    @close="selectedEnvironment = null; environmentDetail = null"
    @delete="handleDetailsDelete"
  />

  <!-- Create Environment Modal -->
  <CreateEnvironmentModal
    v-if="showCreateModal"
    @close="showCreateModal = false"
    @created="handleCreated"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { EnvironmentInfo, EnvironmentDetail } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SearchBar from '@/components/base/molecules/SearchBar.vue'
import EnvironmentListItem from '@/components/base/molecules/EnvironmentListItem.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import EnvironmentDetailsModal from '@/components/EnvironmentDetailsModal.vue'
import CreateEnvironmentModal from '@/components/CreateEnvironmentModal.vue'

const emit = defineEmits<{
  switch: [environmentName: string]
  created: [environmentName: string, switchAfter: boolean]
  delete: [environmentName: string]
}>()

const { getEnvironments, getEnvironmentDetails } = useComfyGitService()

const environments = ref<EnvironmentInfo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)
const showCreateModal = ref(false)
const selectedEnvironment = ref<EnvironmentInfo | null>(null)
const environmentDetail = ref<EnvironmentDetail | null>(null)

const filteredEnvironments = computed(() => {
  if (!searchQuery.value.trim()) return environments.value
  const query = searchQuery.value.toLowerCase()
  return environments.value.filter(env =>
    env.name.toLowerCase().includes(query) ||
    env.current_branch?.toLowerCase().includes(query)
  )
})

function handleCreated(environmentName: string, switchAfter: boolean) {
  showCreateModal.value = false
  emit('created', environmentName, switchAfter)
}

function openCreateModal() {
  showCreateModal.value = true
}

async function showEnvironmentDetails(env: EnvironmentInfo) {
  selectedEnvironment.value = env
  environmentDetail.value = null
  const detail = await getEnvironmentDetails(env.name)
  if (detail) environmentDetail.value = detail
}

function handleDetailsDelete(name: string) {
  selectedEnvironment.value = null
  environmentDetail.value = null
  emit('delete', name)
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
  loadEnvironments,
  openCreateModal
})
</script>

<style scoped>
/* No component-specific styles needed - all content uses child components */
</style>
