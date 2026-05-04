<template>
  <div :class="['civitai-tab', { 'detail-mode': mode === 'detail' }]">
    <div v-if="mode === 'search'" class="search-section">
      <div class="search-header">
        <div class="search-bar">
          <BaseInput
            v-model="searchInput"
            placeholder="Search models, creators, or paste a Civitai URL..."
            @enter="handleSearch"
          />
          <BaseButton variant="primary" :loading="searching" @click="handleSearch">
            Search
          </BaseButton>
        </div>
        <BaseButton variant="secondary" size="sm" @click="showTokenModal = true">
          {{ tokenMask ? `Key: ${tokenMask}` : 'Configure Key' }}
        </BaseButton>
      </div>
    </div>

    <div v-if="mode === 'search'" class="search-results">
      <div v-if="searching" class="state-message">Searching Civitai...</div>
      <div v-else-if="searchError" class="error-state">
        <p>{{ searchError }}</p>
        <BaseButton
          v-if="isAuthError"
          variant="primary"
          size="sm"
          @click="showTokenModal = true"
        >
          Configure Civitai Key
        </BaseButton>
      </div>
      <div v-else-if="searchResults.length" class="model-grid">
        <article
          v-for="model in searchResults"
          :key="model.id"
          class="model-card"
          tabindex="0"
          @click="openModel(model)"
          @keydown.enter="openModel(model)"
          @keydown.space.prevent="openModel(model)"
        >
          <div class="model-thumb">
            <img v-if="previewImage(model)" :src="previewImage(model)!" alt="" loading="lazy" />
            <div v-else class="thumb-placeholder">{{ initials(model.name) }}</div>
            <span v-if="model.nsfw" class="nsfw-chip">NSFW</span>
          </div>

          <div class="model-card-body">
            <div class="model-card-header">
              <div>
                <h4>{{ model.name }}</h4>
                <div class="creator-row">
                  <img
                    v-if="model.creator?.image"
                    :src="model.creator.image"
                    alt=""
                    class="creator-avatar"
                    loading="lazy"
                  />
                  <span v-else class="creator-avatar creator-avatar-fallback">
                    {{ initials(model.creator?.username || '?') }}
                  </span>
                  <span>{{ model.creator?.username || 'Unknown creator' }}</span>
                </div>
              </div>
              <span v-if="model.type" class="type-chip">{{ model.type }}</span>
            </div>

            <p v-if="plainText(model.description)" class="model-description">
              {{ plainText(model.description) }}
            </p>

            <div class="model-stats">
              <span>Downloads {{ formatNumber(model.download_count) }}</span>
              <span>Rating {{ formatRating(model.rating) }}</span>
              <span>{{ model.versions.length }} variant{{ model.versions.length === 1 ? '' : 's' }}</span>
            </div>

            <div v-if="model.tags.length" class="tag-row">
              <span v-for="tag in model.tags.slice(0, 4)" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
      <div v-else-if="hasSearched" class="state-message">No Civitai models found</div>
      <div v-else class="hint-state">
        Search by model name, creator, Civitai model page, creator page, or download URL.
      </div>
    </div>

    <div v-else class="detail-view">
      <div class="detail-header">
        <button class="back-btn" type="button" title="Back to search" @click="handleBack">◄</button>
        <div class="detail-title">
          <span class="detail-kicker">Civitai model</span>
          <span>{{ selectedModel?.name || 'Loading model...' }}</span>
        </div>
      </div>

      <div v-if="detailLoading" class="state-message">Loading model details...</div>
      <div v-else-if="detailError" class="error-state">
        <p>{{ detailError }}</p>
      </div>
      <template v-else-if="selectedModel">
        <section class="detail-hero">
          <div class="gallery-pane">
            <div class="main-image">
              <img v-if="mainImage" :src="mainImage" alt="" />
              <div v-else class="thumb-placeholder large">{{ initials(selectedModel.name) }}</div>
            </div>
            <div v-if="versionImages.length > 1" class="thumb-strip">
              <button
                v-for="image in versionImages.slice(0, 8)"
                :key="`${image.id}:${image.url}`"
                type="button"
                :class="['gallery-thumb', { active: selectedImageUrl === image.url }]"
                @click="selectedImageUrl = image.url"
              >
                <img :src="image.url" alt="" loading="lazy" />
              </button>
            </div>
          </div>

          <div class="model-info-pane">
            <div class="detail-heading-row">
              <div>
                <h3>{{ selectedModel.name }}</h3>
                <div class="creator-row">
                  <img
                    v-if="selectedModel.creator?.image"
                    :src="selectedModel.creator.image"
                    alt=""
                    class="creator-avatar"
                    loading="lazy"
                  />
                  <span v-else class="creator-avatar creator-avatar-fallback">
                    {{ initials(selectedModel.creator?.username || '?') }}
                  </span>
                  <span>{{ selectedModel.creator?.username || 'Unknown creator' }}</span>
                </div>
              </div>
              <span v-if="selectedModel.type" class="type-chip">{{ selectedModel.type }}</span>
            </div>

            <div class="detail-stats">
              <div>
                <span class="stat-value">{{ formatNumber(selectedModel.download_count) }}</span>
                <span class="stat-label">Downloads</span>
              </div>
              <div>
                <span class="stat-value">{{ formatRating(selectedModel.rating) }}</span>
                <span class="stat-label">Rating</span>
              </div>
              <div>
                <span class="stat-value">{{ selectedModel.versions.length }}</span>
                <span class="stat-label">Variants</span>
              </div>
              <div>
                <span class="stat-value">{{ formatNumber(selectedModel.comment_count) }}</span>
                <span class="stat-label">Comments</span>
              </div>
            </div>

            <div
              v-if="selectedModelDescription"
              :class="['detail-description-shell', { expanded: descriptionExpanded }]"
            >
              <p class="detail-description">
                {{ selectedModelDescription }}
              </p>
              <template v-if="descriptionExpandable">
                <div v-if="!descriptionExpanded" class="description-fade"></div>
                <button
                  type="button"
                  class="description-toggle"
                  @click="descriptionExpanded = !descriptionExpanded"
                >
                  {{ descriptionExpanded ? 'Collapse description' : 'Expand description' }}
                </button>
              </template>
            </div>

            <div v-if="selectedModel.tags.length" class="tag-row">
              <span v-for="tag in selectedModel.tags.slice(0, 8)" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </section>

        <section class="version-file-layout">
          <div class="version-list">
            <h4>Variants</h4>
            <div class="version-scroll">
              <button
                v-for="version in selectedModel.versions"
                :key="version.id"
                type="button"
                :class="['version-card', { active: selectedVersion?.id === version.id }]"
                @click="selectVersion(version)"
              >
                <span class="version-name">{{ version.name }}</span>
                <span class="version-meta">
                  {{ version.base_model || 'Unknown base' }} · {{ formatDate(version.created_at) }}
                </span>
                <span class="version-downloads">Downloads {{ formatNumber(version.download_count) }}</span>
              </button>
            </div>
          </div>

          <div class="file-panel">
            <div class="file-panel-header">
              <div>
                <h4>Files</h4>
                <p v-if="selectedVersion">
                  {{ selectedVersion.base_model || 'Unknown base model' }}
                  <span v-if="selectedVersion.trained_words.length">
                    · trigger words: {{ selectedVersion.trained_words.join(', ') }}
                  </span>
                </p>
              </div>
            </div>

            <div v-if="selectedVersionDescription" class="version-description">
              {{ selectedVersionDescription }}
            </div>

            <div v-if="selectedVersion?.files.length" class="file-list">
              <button
                v-for="file in selectedVersion.files"
                :key="file.id"
                type="button"
                :class="['file-row', { active: selectedFile?.id === file.id }]"
                @click="selectFile(file)"
              >
                <div class="file-main">
                  <span class="file-name">{{ file.name }}</span>
                  <span class="file-meta">
                    {{ file.type || 'File' }}
                    <template v-if="file.metadata.format"> · {{ file.metadata.format }}</template>
                    <template v-if="file.metadata.size"> · {{ file.metadata.size }}</template>
                    <template v-if="file.metadata.fp"> · {{ file.metadata.fp }}</template>
                  </span>
                </div>
                <div class="file-side">
                  <span>{{ formatSizeKb(file.size_kb) }}</span>
                  <span :class="['scan-chip', scanStatusClass(file)]">
                    {{ scanSummary(file) }}
                  </span>
                </div>
              </button>
            </div>
            <div v-else class="state-message compact">No downloadable files returned for this variant.</div>
          </div>
        </section>

        <section v-if="selectedFile && modeKind === 'download'" class="download-panel">
          <ModelDownloadTargetPicker
            v-model="destination"
            :suggested-directory="suggestedDirectory"
            :target-filename="selectedFile.name"
            @update:target-path="targetPath = $event"
          />

          <div class="download-actions">
            <div class="selected-source">
              <span>Source</span>
              <code>{{ selectedDownloadUrl }}</code>
            </div>
            <BaseButton
              variant="primary"
              :disabled="!targetPath"
              @click="queueSelectedFile"
            >
              {{ actionLabel }}
            </BaseButton>
          </div>
        </section>

        <section v-else-if="selectedFile" class="download-panel">
          <div class="download-actions">
            <div class="selected-source">
              <span>Source</span>
              <code>{{ selectedDownloadUrl }}</code>
            </div>
            <BaseButton variant="primary" @click="useSelectedSource">
              {{ actionLabel }}
            </BaseButton>
          </div>
        </section>
      </template>
    </div>

    <TokenConfigModal
      v-if="showTokenModal"
      provider="civitai"
      :current-token-mask="tokenMask"
      :overlay-z-index="overlayZIndex + 2"
      @close="showTokenModal = false"
      @saved="handleTokenSaved"
      @cleared="handleTokenCleared"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import ModelDownloadTargetPicker from '@/components/download/ModelDownloadTargetPicker.vue'
import TokenConfigModal from '@/components/download/TokenConfigModal.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { CivitaiFile, CivitaiImage, CivitaiModel, CivitaiVersion } from '@/types/comfygit'

const props = withDefaults(defineProps<{
  modeKind?: 'download' | 'source'
  actionLabel?: string
  overlayZIndex?: number
}>(), {
  modeKind: 'download',
  actionLabel: 'Queue Download',
  overlayZIndex: 10003
})

const emit = defineEmits<{
  queue: [items: Array<{ url: string; targetPath: string; filename: string }>]
  selectSource: [url: string]
}>()

const { searchCivitaiModels, getCivitaiModel, getConfig } = useComfyGitService()

const mode = ref<'search' | 'detail'>('search')
const searchInput = ref('')
const searchResults = ref<CivitaiModel[]>([])
const searching = ref(false)
const searchError = ref<string | null>(null)
const hasSearched = ref(false)

const selectedModel = ref<CivitaiModel | null>(null)
const selectedVersionId = ref<number | null>(null)
const selectedFileId = ref<number | string | null>(null)
const selectedImageUrl = ref<string | null>(null)
const detailLoading = ref(false)
const detailError = ref<string | null>(null)
const descriptionExpanded = ref(false)

const destination = ref('')
const targetPath = ref('')
const showTokenModal = ref(false)
const tokenMask = ref<string | null>(null)

const isAuthError = computed(() => {
  const error = searchError.value || detailError.value || ''
  const lower = error.toLowerCase()
  return error.includes('401') || error.includes('403') || lower.includes('unauthorized') || lower.includes('api key')
})

const selectedVersion = computed(() => {
  const model = selectedModel.value
  if (!model) return null
  return model.versions.find(version => version.id === selectedVersionId.value) || model.versions[0] || null
})

const selectedFile = computed(() => {
  const version = selectedVersion.value
  if (!version) return null
  return version.files.find(file => file.id === selectedFileId.value) || version.files.find(file => file.primary) || version.files[0] || null
})

const versionImages = computed(() => {
  const version = selectedVersion.value
  if (!version) return []
  const renderableImages = version.images.filter(image => isRenderableImageUrl(image.url))
  const safeImages = renderableImages.filter(image => !image.nsfw)
  return safeImages.length ? safeImages : renderableImages
})

const mainImage = computed(() => selectedImageUrl.value || versionImages.value[0]?.url || null)

const selectedModelDescription = computed(() => plainText(selectedModel.value?.description || ''))

const descriptionExpandable = computed(() => selectedModelDescription.value.length > 650)

const selectedVersionDescription = computed(() => {
  const text = plainText(selectedVersion.value?.description || '')
  return text.length > 500 ? `${text.slice(0, 500)}...` : text
})

const selectedDownloadUrl = computed(() => {
  if (!selectedVersion.value || !selectedFile.value) return ''
  return buildFileDownloadUrl(selectedVersion.value, selectedFile.value)
})

const suggestedDirectory = computed(() => directoryForModelType(selectedModel.value?.type || selectedVersion.value?.model?.type || ''))

async function handleSearch() {
  const query = searchInput.value.trim()
  if (!query) return

  searching.value = true
  searchError.value = null
  detailError.value = null

  try {
    const response = await searchCivitaiModels(query, { limit: 18 })
    hasSearched.value = true

    if ((response.mode === 'model' || response.mode === 'model_version') && response.results.length === 1) {
      const versionId = response.version?.id || response.results[0].matched_version_id || null
      await openModel(response.results[0], versionId)
      return
    }

    searchResults.value = response.results
  } catch (err) {
    searchError.value = err instanceof Error ? err.message : 'Civitai search failed'
  } finally {
    searching.value = false
  }
}

async function openModel(model: CivitaiModel, preferredVersionId?: number | null) {
  mode.value = 'detail'
  detailLoading.value = true
  detailError.value = null
  descriptionExpanded.value = false
  selectedModel.value = model
  selectedVersionId.value = preferredVersionId || model.matched_version_id || model.versions[0]?.id || null
  selectDefaultFileAndImage()

  try {
    const response = await getCivitaiModel(model.id)
    selectedModel.value = response.model
    selectedVersionId.value = preferredVersionId || model.matched_version_id || response.model.versions[0]?.id || null
    selectDefaultFileAndImage()
  } catch (err) {
    detailError.value = err instanceof Error ? err.message : 'Failed to load Civitai model details'
  } finally {
    detailLoading.value = false
  }
}

function handleBack() {
  mode.value = 'search'
  detailError.value = null
}

function selectVersion(version: CivitaiVersion) {
  selectedVersionId.value = version.id
  selectDefaultFileAndImage()
}

function selectFile(file: CivitaiFile) {
  selectedFileId.value = file.id
}

function selectDefaultFileAndImage() {
  const version = selectedVersion.value
  selectedFileId.value = version?.files.find(file => file.primary)?.id || version?.files[0]?.id || null
  selectedImageUrl.value = versionImages.value[0]?.url || null
  targetPath.value = ''
}

function queueSelectedFile() {
  const file = selectedFile.value
  if (!file || !targetPath.value || !selectedDownloadUrl.value) return
  emit('queue', [{
    url: selectedDownloadUrl.value,
    targetPath: targetPath.value,
    filename: filenameFromPath(file.name)
  }])
}

function useSelectedSource() {
  if (!selectedDownloadUrl.value) return
  emit('selectSource', selectedDownloadUrl.value)
}

async function loadTokenStatus() {
  try {
    const config = await getConfig()
    tokenMask.value = config.civitai_api_key || null
  } catch (err) {
    console.error('Failed to load Civitai token status:', err)
  }
}

function handleTokenSaved() {
  loadTokenStatus()
  if (isAuthError.value && searchInput.value.trim()) {
    handleSearch()
  }
}

function handleTokenCleared() {
  tokenMask.value = null
}

function previewImage(model: CivitaiModel): string | null {
  const matchedVersion = model.versions.find(version => version.id === model.matched_version_id)
  const version = matchedVersion || model.versions[0]
  if (!version) return null
  const renderableImages = version.images.filter(image => isRenderableImageUrl(image.url))
  const safeImage = renderableImages.find(image => !image.nsfw)
  return civitaiPreviewUrl(safeImage?.url || renderableImages[0]?.url || null)
}

function isRenderableImageUrl(url: string | null | undefined): boolean {
  if (!url) return false
  const cleanUrl = url.split('?')[0].toLowerCase()
  return !/\.(mp4|webm|mov|m4v)$/.test(cleanUrl)
}

function civitaiPreviewUrl(url: string | null | undefined): string | null {
  if (!url) return null
  if (!url.includes('image.civitai.com')) return url
  return url.replace('/original=true/', '/width=450/')
}

function buildFileDownloadUrl(version: CivitaiVersion, file: CivitaiFile): string {
  const base = file.download_url || version.download_url || `https://civitai.com/api/download/models/${version.id}`
  try {
    const url = new URL(base)
    if (file.type) url.searchParams.set('type', file.type)
    if (file.metadata.format) url.searchParams.set('format', file.metadata.format)
    if (file.metadata.size) url.searchParams.set('size', file.metadata.size)
    if (file.metadata.fp) url.searchParams.set('fp', file.metadata.fp)
    url.searchParams.delete('token')
    return url.toString()
  } catch {
    return base
  }
}

function directoryForModelType(type: string): string | null {
  const normalized = type.toLowerCase().replace(/\s+/g, '')
  if (!normalized) return null
  if (normalized.includes('checkpoint')) return 'checkpoints'
  if (normalized.includes('lora') || normalized.includes('locon')) return 'loras'
  if (normalized.includes('vae')) return 'vae'
  if (normalized.includes('controlnet')) return 'controlnet'
  if (normalized.includes('textualinversion') || normalized.includes('embedding')) return 'embeddings'
  if (normalized.includes('upscaler')) return 'upscale_models'
  if (normalized.includes('motionmodule')) return 'animatediff_models'
  return null
}

function scanSummary(file: CivitaiFile): string {
  if (file.virus_scan_result === 'Success' && file.pickle_scan_result === 'Success') return 'Scanned'
  if (file.virus_scan_result || file.pickle_scan_result) return 'Review scan'
  return 'Scan unknown'
}

function scanStatusClass(file: CivitaiFile): string {
  if (file.virus_scan_result === 'Success' && file.pickle_scan_result === 'Success') return 'ok'
  if (file.virus_scan_result || file.pickle_scan_result) return 'warn'
  return 'muted'
}

function plainText(html: string | null | undefined): string {
  if (!html) return ''
  const spacedHtml = html
    .replace(/<\s*br\s*\/?>/gi, ' ')
    .replace(/<\/\s*(p|div|h[1-6]|li|ul|ol|blockquote|section|article)\s*>/gi, ' ')
  if (typeof document !== 'undefined') {
    const container = document.createElement('div')
    container.innerHTML = spacedHtml
    return normalizeWhitespace(container.textContent || container.innerText || '')
  }
  return normalizeWhitespace(spacedHtml.replace(/<[^>]+>/g, ' '))
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}

function filenameFromPath(path: string): string {
  return path.replace(/\\/g, '/').split('/').filter(Boolean).pop() || path
}

function initials(value: string): string {
  return value.trim().slice(0, 2).toUpperCase()
}

function formatNumber(num: number | null | undefined): string {
  const value = num || 0
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`
  return String(value)
}

function formatRating(value: number | null | undefined): string {
  if (!value) return 'n/a'
  return value.toFixed(1)
}

function formatSizeKb(sizeKb: number | null | undefined): string {
  const bytes = (sizeKb || 0) * 1024
  const gb = 1024 * 1024 * 1024
  const mb = 1024 * 1024
  if (bytes >= gb) return `${(bytes / gb).toFixed(2)} GB`
  if (bytes >= mb) return `${(bytes / mb).toFixed(1)} MB`
  return `${Math.round(bytes / 1024)} KB`
}

function formatDate(value: string | null | undefined): string {
  if (!value) return 'Unknown date'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Unknown date'
  return date.toLocaleDateString()
}

onMounted(loadTokenStatus)
</script>

<style scoped>
.civitai-tab {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  height: 100%;
  min-height: 0;
}

.civitai-tab.detail-mode {
  height: auto;
  min-height: 100%;
}

.search-section {
  flex-shrink: 0;
}

.search-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
}

.search-bar {
  display: flex;
  gap: var(--cg-space-2);
  flex: 1;
}

.search-bar :deep(.base-input-wrapper) {
  flex: 1;
}

.search-results,
.detail-view {
  min-height: 0;
}

.search-results {
  flex: 1;
  overflow-y: auto;
}

.detail-view {
  overflow: visible;
}

.state-message,
.hint-state,
.error-state {
  padding: var(--cg-space-4);
  text-align: center;
  color: var(--cg-color-text-muted);
}

.state-message.compact {
  padding: var(--cg-space-3);
}

.hint-state {
  font-style: italic;
}

.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-2);
}

.error-state p {
  margin: 0;
  color: var(--cg-color-error);
}

.model-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--cg-space-3);
}

.model-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.model-card:hover,
.model-card:focus {
  outline: none;
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
}

.model-thumb {
  position: relative;
  width: 100%;
  height: 128px;
  flex: 0 0 128px;
  background: var(--cg-color-bg-tertiary);
  border-bottom: 1px solid var(--cg-color-border);
}

.model-thumb img,
.main-image img,
.gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.thumb-placeholder {
  width: 100%;
  height: 100%;
  min-height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-lg);
  background: var(--cg-color-bg-tertiary);
}

.thumb-placeholder.large {
  min-height: 280px;
  font-size: var(--cg-font-size-xl);
}

.nsfw-chip,
.type-chip,
.tag,
.scan-chip {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  color: var(--cg-color-text-secondary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  padding: 2px 7px;
}

.nsfw-chip {
  position: absolute;
  right: var(--cg-space-1);
  bottom: var(--cg-space-1);
  color: var(--cg-color-warning);
  border-color: var(--cg-color-warning);
  background: var(--cg-color-warning-muted);
}

.model-card-body {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  flex: 1;
}

.model-card-header,
.detail-heading-row,
.file-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--cg-space-2);
}

.model-card h4,
.model-info-pane h3,
.version-list h4,
.file-panel h4 {
  margin: 0;
  color: var(--cg-color-text-primary);
}

.model-card h4 {
  font-size: var(--cg-font-size-base);
  line-height: 1.25;
}

.creator-row {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin-top: var(--cg-space-1);
}

.creator-avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--cg-color-border);
  flex: 0 0 22px;
}

.creator-avatar-fallback {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--cg-color-bg-tertiary);
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
}

.model-description {
  margin: 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.model-stats,
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-1);
}

.model-stats span {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.detail-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  padding-bottom: var(--cg-space-2);
  border-bottom: 1px solid var(--cg-color-border);
  margin-bottom: var(--cg-space-3);
}

.back-btn {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-secondary);
  padding: 6px 10px;
  cursor: pointer;
}

.back-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.detail-title {
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
}

.detail-kicker {
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-family);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.detail-hero {
  display: grid;
  grid-template-columns: minmax(240px, 340px) minmax(0, 1fr);
  gap: var(--cg-space-4);
  margin-bottom: var(--cg-space-4);
}

.gallery-pane {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.main-image {
  height: 280px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
}

.thumb-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--cg-space-1);
}

.gallery-thumb {
  height: 56px;
  padding: 0;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  cursor: pointer;
}

.gallery-thumb.active {
  border-color: var(--cg-color-accent);
}

.model-info-pane {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.detail-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  padding: var(--cg-space-3);
}

.detail-stats div {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-value {
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
}

.stat-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.detail-description,
.version-description {
  margin: 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  line-height: 1.5;
}

.detail-description-shell {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  padding-bottom: var(--cg-space-2);
}

.detail-description-shell:not(.expanded) .detail-description {
  max-height: 12em;
  overflow: hidden;
}

.description-fade {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 36px;
  height: 42px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--cg-color-bg-primary)
  );
}

.description-toggle {
  align-self: flex-start;
  background: transparent;
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-secondary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  padding: 6px 10px;
  cursor: pointer;
}

.description-toggle:hover {
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.version-file-layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: var(--cg-space-3);
  margin-bottom: var(--cg-space-3);
}

.version-list,
.file-panel,
.download-panel {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  padding: var(--cg-space-3);
}

.version-card,
.file-row {
  width: 100%;
  text-align: left;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  padding: var(--cg-space-2);
  cursor: pointer;
}

.version-card {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-height: 72px;
}

.version-scroll {
  --version-card-height: 72px;
  --version-card-gap: var(--cg-space-2);
  display: flex;
  flex-direction: column;
  gap: var(--version-card-gap);
  min-height: calc((var(--version-card-height) * 4.5) + (var(--version-card-gap) * 4));
  max-height: calc((var(--version-card-height) * 4.5) + (var(--version-card-gap) * 4));
  overflow-y: auto;
  padding-right: var(--cg-space-1);
}

.version-scroll::-webkit-scrollbar {
  width: 8px;
}

.version-scroll::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.version-scroll::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.version-scroll::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}

.version-card:hover,
.version-card.active,
.file-row:hover,
.file-row.active {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
}

.version-name,
.file-name {
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  overflow-wrap: anywhere;
}

.version-meta,
.version-downloads,
.file-meta,
.file-panel-header p {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.file-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
}

.file-main {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.file-side {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

.scan-chip.ok {
  color: var(--cg-color-success);
  border-color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
}

.scan-chip.warn {
  color: var(--cg-color-warning);
  border-color: var(--cg-color-warning);
  background: var(--cg-color-warning-muted);
}

.download-actions {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--cg-space-3);
}

.selected-source {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.selected-source code {
  color: var(--cg-color-text-secondary);
  overflow-wrap: anywhere;
}

.search-results::-webkit-scrollbar {
  width: 8px;
}

.search-results::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.search-results::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.search-results::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}

@media (max-width: 720px) {
  .search-header,
  .download-actions,
  .file-row {
    flex-direction: column;
    align-items: stretch;
  }

  .detail-hero,
  .version-file-layout {
    grid-template-columns: 1fr;
  }

  .detail-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .model-card {
    flex-direction: column;
  }

  .model-thumb {
    width: 100%;
    height: 180px;
    border-right: none;
    border-bottom: 1px solid var(--cg-color-border);
  }
}
</style>
