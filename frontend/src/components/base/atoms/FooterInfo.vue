<template>
  <div class="footer-info">
    <span class="version" :title="versionTitle">
      {{ APP_VERSION }}
      <span v-if="isDevelopmentBuild" class="dev-badge">dev</span>
    </span>
    <span class="made-by">
      made with
      <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z"/>
      </svg>
      by {{ AUTHOR_NAME }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { APP_VERSION, AUTHOR_NAME } from '@/constants/social'
import { useComfyGitService } from '@/composables/useComfyGitService'

const { getConfig } = useComfyGitService()
const managerSource = ref<string | null>(null)
const managerBranch = ref<string | null>(null)
const managerCommit = ref<string | null>(null)

const isDevelopmentBuild = computed(() => managerSource.value === 'development')
const versionTitle = computed(() => {
  if (!isDevelopmentBuild.value) return APP_VERSION

  const details = [managerBranch.value, managerCommit.value?.slice(0, 7)].filter(Boolean).join(' @ ')
  return details ? `${APP_VERSION} (${details})` : `${APP_VERSION} (development)`
})

onMounted(async () => {
  try {
    const config = await getConfig()
    managerSource.value = config.manager_source ?? null
    managerBranch.value = config.manager_branch ?? null
    managerCommit.value = config.manager_commit ?? null
  } catch {
    managerSource.value = null
  }
})
</script>

<style scoped>
.footer-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  font-size: 10px;
  color: var(--cg-color-text-muted);
}

.version {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  opacity: 0.7;
}

.dev-badge {
  border: 1px solid color-mix(in srgb, var(--cg-color-text-muted) 60%, transparent);
  border-radius: 999px;
  color: var(--cg-color-text-muted);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1;
  padding: 2px 5px;
  text-transform: uppercase;
}

.made-by {
  display: flex;
  align-items: center;
  gap: 2px;
}

.heart-icon {
  color: #db61a2;
}
</style>
