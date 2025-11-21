<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="GIT REMOTES"
        :show-info="true"
        @info-click="showInfoPopover = true"
      >
        <template #actions>
          <ActionButton
            v-if="!showForm"
            variant="primary"
            size="sm"
            @click="handleAddRemote"
          >
            + Add Remote
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #search>
      <SearchBar
        v-if="!showForm"
        v-model="searchQuery"
        placeholder="🔍 Search remotes..."
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading remotes..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadRemotes" />
      </template>
      <template v-else>
        <!-- Add/Edit Form -->
        <RemoteForm
          v-if="showForm"
          :mode="formMode"
          :remote-name="formData.name"
          :fetch-url="formData.fetchUrl"
          :push-url="formData.pushUrl"
          @submit="handleFormSubmit"
          @cancel="cancelForm"
        />

        <!-- Summary Bar -->
        <SummaryBar v-if="remotes.length && !showForm" variant="compact">
          Total: {{ remotes.length }} remote{{ remotes.length !== 1 ? 's' : '' }}
          <span v-if="trackingInfo"> • Tracking: {{ trackingInfo.remote }}/{{ trackingInfo.branch }}</span>
        </SummaryBar>

        <!-- Remotes List -->
        <SectionGroup v-if="filteredRemotes.length && !showForm" title="REMOTES" :count="filteredRemotes.length">
          <RemoteCard
            v-for="remote in filteredRemotes"
            :key="remote.name"
            :remote="remote"
            :sync-status="syncStatuses[remote.name]"
            :tracking-branch="isTrackingRemote(remote.name) ? trackingInfo?.branch : undefined"
            :fetching-remote="fetchingRemote"
            @fetch="handleFetch"
            @edit="handleEdit"
            @remove="handleRemove"
          />
        </SectionGroup>

        <!-- Empty State -->
        <EmptyState
          v-if="!filteredRemotes.length && !showForm"
          icon="🌐"
          :message="searchQuery ? `No remotes match '${searchQuery}'` : 'No remotes configured.'"
        >
          <template #actions>
            <ActionButton variant="primary" @click="handleAddRemote">
              Add Your First Remote
            </ActionButton>
          </template>
        </EmptyState>
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showInfoPopover"
    title="About Git Remotes"
    @close="showInfoPopover = false"
  >
    <template #content>
      <p>
        Git remotes are named references to repositories on other servers.
        They allow you to fetch changes from and push changes to remote repositories.
      </p>
      <p>
        The <strong>"origin"</strong> remote is typically the main repository you cloned from.
        You can configure multiple remotes for collaboration workflows.
      </p>
    </template>
    <template #actions>
      <ActionButton variant="link" @click="openDocs">
        Learn more about Git remotes →
      </ActionButton>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { RemoteInfo, RemoteSyncStatus } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SearchBar from '@/components/base/molecules/SearchBar.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import RemoteCard from '@/components/base/molecules/RemoteCard.vue'
import RemoteForm from '@/components/base/molecules/RemoteForm.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'

const {
  getRemotes,
  addRemote,
  removeRemote,
  updateRemoteUrl,
  fetchRemote,
  getRemoteSyncStatus
} = useComfyGitService()

const remotes = ref<RemoteInfo[]>([])
const trackingInfo = ref<{ remote: string; branch: string } | null>(null)
const syncStatuses = ref<Record<string, RemoteSyncStatus>>({})
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showInfoPopover = ref(false)
const fetchingRemote = ref<string | null>(null)

// Form state
const showForm = ref(false)
const formMode = ref<'add' | 'edit'>('add')
const formData = ref({
  name: '',
  fetchUrl: '',
  pushUrl: ''
})

const filteredRemotes = computed(() => {
  if (!searchQuery.value.trim()) return remotes.value
  const query = searchQuery.value.toLowerCase()
  return remotes.value.filter(r =>
    r.name.toLowerCase().includes(query) ||
    r.fetch_url.toLowerCase().includes(query) ||
    r.push_url.toLowerCase().includes(query)
  )
})

function isTrackingRemote(remoteName: string): boolean {
  return trackingInfo.value?.remote === remoteName
}

async function loadRemotes() {
  loading.value = true
  error.value = null
  try {
    const result = await getRemotes()
    remotes.value = result.remotes
    trackingInfo.value = result.current_branch_tracking || null

    // Load sync statuses for all remotes
    await Promise.all(
      result.remotes.map(async (remote) => {
        const status = await getRemoteSyncStatus(remote.name)
        if (status) {
          syncStatuses.value[remote.name] = status
        }
      })
    )
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load remotes'
  } finally {
    loading.value = false
  }
}

function handleAddRemote() {
  formMode.value = 'add'
  formData.value = { name: '', fetchUrl: '', pushUrl: '' }
  showForm.value = true
}

function handleEdit(remoteName: string) {
  const remote = remotes.value.find(r => r.name === remoteName)
  if (!remote) return

  formMode.value = 'edit'
  formData.value = {
    name: remote.name,
    fetchUrl: remote.fetch_url,
    pushUrl: remote.push_url
  }
  showForm.value = true
}

async function handleFormSubmit(data: { name: string; fetchUrl: string; pushUrl: string }) {
  try {
    if (formMode.value === 'add') {
      await addRemote(data.name, data.fetchUrl)
    } else {
      await updateRemoteUrl(data.name, data.fetchUrl, data.pushUrl || undefined)
    }
    showForm.value = false
    await loadRemotes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Operation failed'
  }
}

function cancelForm() {
  showForm.value = false
  formData.value = { name: '', fetchUrl: '', pushUrl: '' }
}

async function handleFetch(remoteName: string) {
  fetchingRemote.value = remoteName
  try {
    await fetchRemote(remoteName)
    // Reload sync status after fetch
    const status = await getRemoteSyncStatus(remoteName)
    if (status) {
      syncStatuses.value[remoteName] = status
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Fetch failed'
  } finally {
    fetchingRemote.value = null
  }
}

async function handleRemove(remoteName: string) {
  if (!confirm(`Remove remote "${remoteName}"?`)) return

  try {
    await removeRemote(remoteName)
    await loadRemotes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to remove remote'
  }
}

function openDocs() {
  window.open('https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes', '_blank')
}

onMounted(loadRemotes)
</script>

<style scoped>
/* Minimal custom CSS - all styling comes from atomic components */
</style>
