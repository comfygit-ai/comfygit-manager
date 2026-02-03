<template>
  <BaseModal
    size="md"
    :show-close-button="false"
    @close="$emit('close')"
  >
    <template #header>
      <div class="header-info">
        <h3 class="header-title">BRANCH</h3>
        <span class="branch-name">{{ branchName }}</span>
        <span v-if="isCurrent" class="current-badge">CURRENT</span>
      </div>
      <BaseButton variant="ghost" size="sm" @click="$emit('close')">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
        </svg>
      </BaseButton>
    </template>

    <template #body>
      <!-- Branch metadata -->
      <div class="branch-meta">
        <span v-if="isLoading">Loading...</span>
        <template v-else>
          <span>{{ commits.length }} commits</span>
          <span v-if="hasMore" class="meta-note">(showing first {{ commits.length }})</span>
        </template>
      </div>

      <!-- Loading state -->
      <div v-if="isLoading" class="loading">Loading commit history...</div>

      <!-- Empty state -->
      <div v-else-if="commits.length === 0" class="empty-state">
        No commits found on this branch
      </div>

      <!-- Commit history (scrollable) -->
      <CommitList v-else class="branch-commits">
        <CommitItem
          v-for="commit in commits"
          :key="commit.hash"
          :hash="commit.short_hash || commit.hash.slice(0, 7)"
          :message="commit.message"
          :relative-date="commit.date_relative || commit.relative_date || ''"
          :clickable="false"
        />
      </CommitList>
    </template>

    <template #footer>
      <ActionButton
        v-if="!isCurrent"
        variant="destructive"
        size="sm"
        @click="$emit('delete', branchName)"
      >
        Delete Branch
      </ActionButton>
      <div class="footer-spacer"></div>
      <BaseButton
        v-if="!isCurrent"
        variant="primary"
        @click="$emit('switch', branchName)"
      >
        Switch to Branch
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { CommitInfo } from '@/types/comfygit'
import { useComfyGitService } from '@/composables/useComfyGitService'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import ActionButton from './base/atoms/ActionButton.vue'
import CommitList from './base/molecules/CommitList.vue'
import CommitItem from './base/molecules/CommitItem.vue'

const props = defineProps<{
  branchName: string
  isCurrent: boolean
}>()

defineEmits<{
  close: []
  delete: [branchName: string]
  switch: [branchName: string]
}>()

const { getBranchHistory } = useComfyGitService()

const commits = ref<CommitInfo[]>([])
const hasMore = ref(false)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const result = await getBranchHistory(props.branchName, 50)
    commits.value = result.commits
    hasMore.value = result.has_more
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
.header-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.header-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  margin: 0;
  font-weight: var(--cg-font-weight-normal);
}

.branch-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-base);
  color: var(--cg-color-info);
  font-weight: var(--cg-font-weight-semibold);
}

.current-badge {
  display: inline-block;
  padding: 2px 8px;
  background: transparent;
  border: 1px solid var(--cg-color-accent);
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  width: fit-content;
}

.branch-meta {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-muted);
  margin-bottom: var(--cg-space-3);
  display: flex;
  gap: var(--cg-space-2);
}

.meta-note {
  color: var(--cg-color-text-muted);
  font-style: italic;
}

.loading {
  text-align: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.empty-state {
  text-align: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.branch-commits {
  max-height: 300px;
  overflow-y: auto;
}

.footer-spacer {
  flex: 1;
}
</style>
