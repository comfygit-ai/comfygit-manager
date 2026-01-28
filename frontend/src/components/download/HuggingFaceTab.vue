<template>
  <div class="huggingface-tab">
    <!-- Search Input (always visible in search mode, hidden in browse) -->
    <div v-if="mode === 'search'" class="search-section">
      <div class="search-bar">
        <BaseInput
          v-model="searchInput"
          placeholder="Search repos, paste URL, or enter user/repo..."
          @keydown.enter="handleSearch"
        />
        <BaseButton variant="primary" @click="handleSearch" :loading="searching">
          Search
        </BaseButton>
      </div>
    </div>

    <!-- Search Results (search mode) -->
    <div v-if="mode === 'search'" class="search-results">
      <div v-if="searching" class="loading-state">
        Searching HuggingFace...
      </div>
      <div v-else-if="searchError" class="error-state">
        {{ searchError }}
      </div>
      <div v-else-if="searchResults.length > 0" class="results-list">
        <div
          v-for="repo in searchResults"
          :key="repo.repo_id"
          class="repo-card"
          @click="selectRepo(repo.repo_id)"
        >
          <div class="repo-header">
            <span class="repo-id">{{ repo.repo_id }}</span>
            <div class="repo-stats">
              <span class="stat" title="Downloads">
                <span class="stat-icon">↓</span>
                {{ formatNumber(repo.downloads) }}
              </span>
              <span class="stat" title="Likes">
                <span class="stat-icon">★</span>
                {{ formatNumber(repo.likes) }}
              </span>
            </div>
          </div>
          <p v-if="repo.description" class="repo-desc">{{ repo.description }}</p>
          <div v-if="repo.tags.length > 0" class="repo-tags">
            <span v-for="tag in repo.tags.slice(0, 5)" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div v-else-if="hasSearched" class="empty-state">
        No repositories found
      </div>
      <div v-else class="hint-state">
        Enter a HuggingFace URL, repo ID (user/repo), or search term
      </div>
    </div>

    <!-- File Browser (browse mode) -->
    <HfFileBrowser
      v-else
      :repo-id="selectedRepo!"
      :revision="selectedRevision"
      :initial-path="initialPath"
      :preselected-file="preselectedFile"
      @back="handleBack"
      @queue="$emit('queue', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import HfFileBrowser from './HfFileBrowser.vue'
import type { HfDownloadItem } from './HfFileBrowser.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { parseHuggingFaceUrl } from '@/utils/huggingface'
import type { HuggingFaceSearchResult } from '@/types/comfygit'

defineEmits<{
  queue: [items: HfDownloadItem[]]
}>()

const { searchHuggingFaceRepos } = useComfyGitService()

// Mode state
const mode = ref<'search' | 'browse'>('search')

// Search state
const searchInput = ref('')
const searchResults = ref<HuggingFaceSearchResult[]>([])
const searching = ref(false)
const searchError = ref<string | null>(null)
const hasSearched = ref(false)

// Browse mode state
const selectedRepo = ref<string | null>(null)
const selectedRevision = ref('main')
const initialPath = ref<string | undefined>()
const preselectedFile = ref<string | undefined>()

function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`
  }
  return String(num)
}

async function handleSearch() {
  const input = searchInput.value.trim()
  if (!input) return

  // Reset error state
  searchError.value = null

  // Try parsing as HuggingFace URL
  const parsed = parseHuggingFaceUrl(input)

  if (parsed.kind === 'file' && parsed.repoId && parsed.path) {
    // File URL: browse mode with pre-selection
    selectedRepo.value = parsed.repoId
    selectedRevision.value = parsed.revision || 'main'
    // Set initial path to parent folder
    const pathParts = parsed.path.split('/')
    if (pathParts.length > 1) {
      initialPath.value = pathParts.slice(0, -1).join('/')
    } else {
      initialPath.value = undefined
    }
    preselectedFile.value = parsed.path
    mode.value = 'browse'
    return
  }

  if (parsed.kind === 'repo' && parsed.repoId) {
    // Repo URL: go to browse
    selectedRepo.value = parsed.repoId
    selectedRevision.value = parsed.revision || 'main'
    initialPath.value = undefined
    preselectedFile.value = undefined
    mode.value = 'browse'
    return
  }

  // Check for shorthand repo ID (user/repo)
  if (/^[\w-]+\/[\w.-]+$/.test(input) && !input.includes('://')) {
    selectedRepo.value = input
    selectedRevision.value = 'main'
    initialPath.value = undefined
    preselectedFile.value = undefined
    mode.value = 'browse'
    return
  }

  // Otherwise, perform search
  searching.value = true
  try {
    const response = await searchHuggingFaceRepos(input)
    searchResults.value = response.results
    hasSearched.value = true
  } catch (e) {
    searchError.value = e instanceof Error ? e.message : 'Search failed'
  } finally {
    searching.value = false
  }
}

function selectRepo(repoId: string) {
  selectedRepo.value = repoId
  selectedRevision.value = 'main'
  initialPath.value = undefined
  preselectedFile.value = undefined
  mode.value = 'browse'
}

function handleBack() {
  // Return to search mode, preserving search results
  mode.value = 'search'
  selectedRepo.value = null
  initialPath.value = undefined
  preselectedFile.value = undefined
}
</script>

<style scoped>
.huggingface-tab {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  height: 100%;
}

/* Search Section */
.search-section {
  flex-shrink: 0;
}

.search-bar {
  display: flex;
  gap: var(--cg-space-2);
}

.search-bar :deep(input) {
  flex: 1;
}

/* Results */
.search-results {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

.loading-state,
.error-state,
.empty-state,
.hint-state {
  padding: var(--cg-space-4);
  text-align: center;
  color: var(--cg-color-text-muted);
}

.error-state {
  color: var(--cg-color-error);
}

.hint-state {
  font-style: italic;
}

/* Results List */
.results-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.repo-card {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  padding: var(--cg-space-3);
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.repo-card:hover {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
}

.repo-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-1);
}

.repo-id {
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  word-break: break-all;
}

.repo-stats {
  display: flex;
  gap: var(--cg-space-3);
  flex-shrink: 0;
}

.stat {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  white-space: nowrap;
}

.stat-icon {
  font-size: var(--cg-font-size-xs);
}

.repo-desc {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  margin: 0 0 var(--cg-space-2) 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.repo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-1);
}

.tag {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  padding: 2px 6px;
}

/* Scrollbar styling */
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
</style>
