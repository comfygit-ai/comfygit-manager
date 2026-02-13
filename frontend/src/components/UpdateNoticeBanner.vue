<template>
  <div class="update-banner">
    <div class="update-banner__left">
      <div class="update-banner__title">
        ComfyGit Manager v{{ info.latest_version }} available
      </div>
      <div v-if="info.changelog_summary" class="update-banner__summary">
        {{ info.changelog_summary }}
      </div>
    </div>

    <div class="update-banner__actions">
      <button class="update-banner__btn primary" :disabled="updating" @click="emit('update')">
        {{ updating ? 'Updating…' : 'Update' }}
      </button>
      <button
        v-if="info.release_url"
        class="update-banner__btn"
        :disabled="updating"
        @click="emit('release-notes')"
      >
        Release notes
      </button>
      <button class="update-banner__btn" :disabled="updating" @click="emit('dismiss')">
        Dismiss
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UpdateCheckResponse } from '@/types/comfygit'

defineProps<{
  info: UpdateCheckResponse
  updating?: boolean
}>()

const emit = defineEmits<{
  update: []
  dismiss: []
  'release-notes': []
}>()
</script>

<style scoped>
.update-banner {
  display: flex;
  gap: var(--cg-space-3);
  align-items: center;
  justify-content: space-between;
  padding: 10px var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border);
  background: color-mix(in srgb, var(--cg-color-bg-tertiary) 70%, var(--cg-color-success-muted) 30%);
}

.update-banner__title {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
  line-height: var(--cg-line-height-tight);
}

.update-banner__summary {
  margin-top: 4px;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  line-height: var(--cg-line-height-normal);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.update-banner__actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.update-banner__btn {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  padding: 6px 10px;
  border-radius: var(--cg-radius-sm);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-primary);
  color: var(--cg-color-text-primary);
  cursor: pointer;
}

.update-banner__btn.primary {
  border-color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.update-banner__btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
