<template>
  <PanelLayout>
    <template #header>
      <PanelHeader :title="headerTitle" />
    </template>

    <template #content>
      <EmptyState
        v-if="commits.length === 0"
        icon="📜"
        message="No commits yet"
      />

      <CommitList v-else>
        <CommitItem
          v-for="commit in commits"
          :key="commit.hash"
          :hash="commit.short_hash || commit.hash"
          :message="commit.message"
          :relative-date="commit.date_relative || commit.relative_date"
          @click="$emit('select', commit)"
        >
          <template #actions>
            <ActionButton
              variant="ghost"
              size="xs"
              @click="$emit('checkout', commit)"
              title="Checkout this commit"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 12L3 7h3V1h4v6h3L8 12z"/>
              </svg>
            </ActionButton>
          </template>
        </CommitItem>
      </CommitList>
    </template>
  </PanelLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CommitInfo } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import CommitList from '@/components/base/molecules/CommitList.vue'
import CommitItem from '@/components/base/molecules/CommitItem.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'

const props = defineProps<{
  commits: CommitInfo[]
  currentRef?: string | null
}>()

const headerTitle = computed(() => {
  const ref = props.currentRef || 'detached'
  return `HISTORY (${ref})`
})

defineEmits<{
  select: [commit: CommitInfo]
  checkout: [commit: CommitInfo]
}>()
</script>

<style scoped>
/* Minimal custom styles - everything else comes from atomic components */
</style>
