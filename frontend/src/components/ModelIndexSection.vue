<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="WORKSPACE MODEL INDEX"
        :show-info="true"
        :stacked="true"
        @info-click="showPopover = true"
      >
        <template #actions>
          <ActionButton variant="primary" size="sm" @click="scanForModels">
            Scan for Models
          </ActionButton>
          <ActionButton variant="primary" size="sm" @click="changeDirectory">
            Change Directory
          </ActionButton>
          <ActionButton variant="primary" size="sm" @click="downloadNewModel">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 12L3 7h3V1h4v6h3L8 12z"/>
              <path d="M14 14H2v-2h12v2z"/>
            </svg>
            DOWNLOAD +
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #search>
      <SearchBar
        v-model="searchQuery"
        placeholder="🔍 Search all indexed models..."
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading workspace models..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadModels" />
      </template>
      <template v-else>
        <!-- Summary at top -->
        <SummaryBar v-if="models.length" variant="compact">
          Total: {{ models.length }} models • {{ formatSize(totalSize) }}
        </SummaryBar>

        <!-- Dynamic sections by model type -->
        <SectionGroup
          v-for="group in modelGroups"
          :key="group.type"
          :title="group.type.toUpperCase()"
          :count="group.models.length"
          :collapsible="true"
          :initially-expanded="false"
        >
          <ItemCard
            v-for="model in group.models"
            :key="model.sha256 || model.filename"
            status="synced"
          >
            <template #icon>📦</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>{{ formatSize(model.size) }}</template>
            <template #details>
              <DetailRow
                label="Hash:"
                :value="model.hash ? model.hash.substring(0, 16) : 'N/A'"
                :mono="true"
                value-variant="hash"
                label-min-width="auto"
              />
            </template>
            <template #actions>
              <ActionButton variant="secondary" size="xs" @click="viewDetails(model)">
                View Details
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Empty state -->
        <EmptyState
          v-if="!filteredModels.length"
          icon="📭"
          :message="searchQuery ? `No models match '${searchQuery}'` : 'No models in workspace index'"
        />
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Workspace Model Index"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        Content-addressable model storage shared across <strong>all environments</strong>.
        Models are deduplicated by hash.
      </p>
    </template>
  </InfoPopover>

  <!-- Model Detail Modal -->
  <ModelDetailModal
    v-if="selectedModelId"
    :identifier="selectedModelId"
    @close="selectedModelId = null"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelInfo } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SearchBar from '@/components/base/molecules/SearchBar.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ItemCard from '@/components/base/molecules/ItemCard.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import ModelDetailModal from '@/components/ModelDetailModal.vue'

const { getWorkspaceModels } = useComfyGitService()

const models = ref<ModelInfo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)
const selectedModelId = ref<string | null>(null)

const totalSize = computed(() =>
  models.value.reduce((sum, m) => sum + (m.size || 0), 0)
)

// Search filtering
const filteredModels = computed(() => {
  if (!searchQuery.value.trim()) return models.value
  const query = searchQuery.value.toLowerCase()
  return models.value.filter(m => {
    const modelAny = m as any
    const sha256 = m.sha256 || modelAny.sha256_hash || ''
    return (
      m.filename.toLowerCase().includes(query) ||
      sha256.toLowerCase().includes(query)
    )
  })
})

// Dynamic grouping by type
const modelGroups = computed(() => {
  const groups: Record<string, ModelInfo[]> = {}
  for (const model of filteredModels.value) {
    const type = model.type || 'other'
    if (!groups[type]) groups[type] = []
    groups[type].push(model)
  }
  // Sort by type name, but put common types first
  const typeOrder = ['checkpoints', 'loras', 'vae', 'controlnet', 'upscale_models', 'clip', 'embeddings', 'clip_vision', 'diffusion_models', 'text_encoders', 'unet', 'configs', 'diffusers']
  return Object.entries(groups)
    .sort(([a], [b]) => {
      const aIdx = typeOrder.indexOf(a)
      const bIdx = typeOrder.indexOf(b)
      if (aIdx >= 0 && bIdx >= 0) return aIdx - bIdx
      if (aIdx >= 0) return -1
      if (bIdx >= 0) return 1
      return a.localeCompare(b)
    })
    .map(([type, models]) => ({ type, models }))
})

// Format bytes to human-readable size
function formatSize(bytes: number | undefined): string {
  if (!bytes) return 'Unknown'
  const GB = 1024 * 1024 * 1024
  const MB = 1024 * 1024
  if (bytes >= GB) {
    return `${(bytes / GB).toFixed(1)} GB`
  }
  if (bytes >= MB) {
    return `${(bytes / MB).toFixed(0)} MB`
  }
  return `${(bytes / 1024).toFixed(0)} KB`
}

function viewDetails(model: ModelInfo) {
  // Use hash as identifier for the detail lookup
  selectedModelId.value = model.hash || model.filename
}

function scanForModels() {
  alert('Scan for models not yet implemented')
}

function changeDirectory() {
  alert('Change directory not yet implemented')
}

function downloadNewModel() {
  alert('Download new model not yet implemented')
}

async function loadModels() {
  loading.value = true
  error.value = null
  try {
    models.value = await getWorkspaceModels()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workspace models'
  } finally {
    loading.value = false
  }
}

onMounted(loadModels)
</script>

<style scoped>
/* Minimal to no custom CSS! Everything is in components */
</style>
