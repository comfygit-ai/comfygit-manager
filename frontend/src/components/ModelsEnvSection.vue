<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="MODELS IN THIS ENVIRONMENT"
        :show-info="true"
        @info-click="showPopover = true"
      />
      <!-- No actions slot - environment section has no header actions -->
    </template>

    <template #search>
      <SearchBar
        v-model="searchQuery"
        placeholder="🔍 Search models used in this environment..."
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading environment models..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadModels" />
      </template>
      <template v-else>
        <!-- Summary at top -->
        <SummaryBar v-if="models.length" variant="compact">
          Total: {{ models.length }} models • {{ formatSize(totalSize) }} (symlinked from workspace)
        </SummaryBar>

        <!-- Dynamic sections by model type -->
        <SectionGroup
          v-for="group in modelGroups"
          :key="group.type"
          :title="group.type.toUpperCase()"
          :count="group.models.length"
          :collapsible="true"
          :initially-expanded="true"
        >
          <ItemCard
            v-for="model in group.models"
            :key="model.hash || model.filename"
            status="synced"
          >
            <template #icon>📦</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>{{ formatSize(model.size) }}</template>
            <template #details>
              <DetailRow label="Used by:" :value="(model.used_in_workflows || []).join(', ') || 'Not used'" />
              <DetailRow label="Path:" :value="model.relative_path || 'Unknown'" :mono="true" />
            </template>
            <template #actions>
              <ActionButton variant="secondary" size="xs" @click="viewDetails(model)">
                View Details
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Missing Models (unique to environment view) -->
        <SectionGroup v-if="filteredMissing.length" title="MISSING" :count="filteredMissing.length">
          <ItemCard
            v-for="model in filteredMissing"
            :key="model.filename"
            status="broken"
          >
            <template #icon>⚠</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>
              <span style="color: var(--cg-color-error)">Not found in workspace index</span>
            </template>
            <template #details>
              <DetailRow label="Required by:" :value="model.workflow_names?.join(', ') || 'Unknown'" />
            </template>
            <template #actions>
              <ActionButton variant="primary" size="sm" @click="downloadModel(model.filename)">
                Download
              </ActionButton>
              <ActionButton variant="secondary" size="sm" @click="searchInWorkspace(model.filename)">
                Search Workspace Index
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Empty state -->
        <EmptyState
          v-if="!filteredModels.length && !filteredMissing.length"
          icon="📭"
          :message="searchQuery ? `No models match '${searchQuery}'` : 'No models in this environment.'"
        />
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Environment Models"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        These are models currently used by workflows in <strong>"{{ environmentName }}"</strong>.
        All models are symlinked from the workspace model index.
      </p>
    </template>
    <template #actions>
      <ActionButton variant="primary" @click="navigateToIndex">
        View Workspace Model Index →
      </ActionButton>
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

// No extended interface needed - use ModelInfo directly

interface MissingModelInfo {
  filename: string
  workflow_names?: string[]
}

const emit = defineEmits<{
  navigate: [view: string]
}>()

const { getEnvironmentModels, getStatus } = useComfyGitService()

const models = ref<ModelInfo[]>([])
const missingModels = ref<MissingModelInfo[]>([])
const environmentName = ref('production')
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)
const selectedModelId = ref<string | null>(null)

function navigateToIndex() {
  showPopover.value = false
  emit('navigate', 'model-index')
}

const totalSize = computed(() =>
  models.value.reduce((sum, m) => sum + (m.size || 0), 0)
)

// Search filtering for models
const filteredModels = computed(() => {
  if (!searchQuery.value.trim()) return models.value
  const query = searchQuery.value.toLowerCase()
  return models.value.filter(m => m.filename.toLowerCase().includes(query))
})

// Search filtering for missing models
const filteredMissing = computed(() => {
  if (!searchQuery.value.trim()) return missingModels.value
  const query = searchQuery.value.toLowerCase()
  return missingModels.value.filter(m => m.filename.toLowerCase().includes(query))
})

// Dynamic grouping by type (same logic as ModelIndexSection)
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

function formatSize(bytes: number | undefined): string {
  if (!bytes) return 'Unknown'
  const mb = bytes / (1024 * 1024)
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(1)} GB`
  }
  return `${mb.toFixed(0)} MB`
}

function viewDetails(model: ModelInfo) {
  // Use hash as identifier for the detail lookup
  selectedModelId.value = model.hash || model.filename
}

function searchInWorkspace(_filename: string) {
  // TODO: Navigate to model index with search query
  emit('navigate', 'model-index')
}

function downloadModel(filename: string) {
  // TODO: Open download modal
  alert(`Download functionality not yet implemented for ${filename}`)
}

async function loadModels() {
  loading.value = true
  error.value = null
  try {
    const envModels = await getEnvironmentModels()
    models.value = envModels

    // TODO: Get missing models from workflow details API when available
    // For now, missingModels stays empty until the API is implemented
    missingModels.value = []

    const status = await getStatus()
    environmentName.value = status.environment || 'production'
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load models'
  } finally {
    loading.value = false
  }
}

onMounted(loadModels)
</script>

<style scoped>
/* Minimal to no custom CSS! Everything is in components */
</style>
