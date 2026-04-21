<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="MANIFEST (PYPROJECT.TOML)"
        :show-info="true"
        @info-click="showPopover = true"
      >
        <template #actions>
          <ActionButton
            variant="secondary"
            size="sm"
            @click="loadManifest"
            :disabled="loading"
          >
            {{ loading ? 'Loading...' : 'Refresh' }}
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading manifest..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadManifest" />
      </template>
      <template v-else>
        <EmptyState
          v-if="!manifest.exists || !manifest.content"
          icon="📄"
          message="No manifest content available"
        />
        <div v-else class="manifest-viewer-shell">
          <TextViewer :content="manifest.content" />
        </div>
      </template>
    </template>
  </PanelLayout>

  <InfoPopover
    :show="showPopover"
    title="About Manifest View"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        This view shows the live <strong>pyproject.toml</strong> from the current
        environment's <strong>.cec</strong> directory.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        It is read-only and intended for quick inspection and debugging without
        leaving the ComfyGit panel.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        Path:
      </p>
      <div class="manifest-path">
        <code>{{ manifest.path || 'unknown' }}</code>
      </div>
      <p style="margin-top: var(--cg-space-2)">
      </p>
    </template>
    <template #actions>
      <ActionButton variant="primary" @click="showPopover = false">
        Got it
      </ActionButton>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ManifestFileResponse } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import TextViewer from '@/components/base/molecules/TextViewer.vue'

const { getEnvironmentManifest } = useComfyGitService()

const loading = ref(false)
const error = ref<string | null>(null)
const showPopover = ref(false)
const manifest = ref<ManifestFileResponse>({
  path: '',
  exists: false,
  content: '',
})

async function loadManifest() {
  loading.value = true
  error.value = null
  try {
    manifest.value = await getEnvironmentManifest()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load manifest'
  } finally {
    loading.value = false
  }
}

onMounted(loadManifest)
</script>

<style scoped>
.manifest-path {
  margin-top: var(--cg-space-2);
  padding: var(--cg-space-2);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  overflow-wrap: anywhere;
  word-break: break-word;
}

.manifest-path code {
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.manifest-viewer-shell {
  height: 100%;
  min-height: 0;
}
</style>
