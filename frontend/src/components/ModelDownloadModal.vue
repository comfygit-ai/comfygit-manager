<template>
  <BaseModal
    v-if="show"
    title="DOWNLOAD NEW MODEL"
    size="xl"
    fixed-height
    @close="handleClose"
  >
    <template #body>
      <div class="download-modal">
        <!-- Tab Buttons -->
        <div class="tab-bar">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab-btn', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            {{ tab.icon }} {{ tab.label }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="tab-content">
          <WorkflowLinksTab
            v-if="activeTab === 'workflow'"
            @select-url="handleWorkflowUrl"
          />
          <HuggingFaceTab
            v-else-if="activeTab === 'huggingface'"
            @queue="handleQueue"
          />
          <CivitaiTab v-else-if="activeTab === 'civitai'" />
          <DirectUrlTab
            v-else-if="activeTab === 'direct'"
            :initial-url="selectedWorkflowUrl"
            @queue="handleDirectQueue"
          />
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="handleClose">
        Cancel
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseModal from '@/components/base/BaseModal.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import WorkflowLinksTab from '@/components/download/WorkflowLinksTab.vue'
import HuggingFaceTab from '@/components/download/HuggingFaceTab.vue'
import CivitaiTab from '@/components/download/CivitaiTab.vue'
import DirectUrlTab from '@/components/download/DirectUrlTab.vue'
import { useModelDownloadQueue } from '@/composables/useModelDownloadQueue'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const { addToQueue } = useModelDownloadQueue()

const tabs = [
  { id: 'workflow', label: 'Workflow Links', icon: '🔎' },
  { id: 'huggingface', label: 'HuggingFace', icon: '🤗' },
  { id: 'civitai', label: 'Civitai', icon: '🎨' },
  { id: 'direct', label: 'Direct URL', icon: '🔗' }
] as const

const activeTab = ref<(typeof tabs)[number]['id']>('workflow')
const selectedWorkflowUrl = ref('')

function handleQueue(items: Array<{ url: string; destination: string; filename: string }>) {
  addToQueue(items.map(item => ({
    workflow: '__manual__',
    filename: item.filename,
    url: item.url,
    targetPath: item.destination ? `${item.destination}/${item.filename}` : item.filename
  })))
  emit('close')
}

function handleDirectQueue(items: Array<{ url: string; targetPath: string; filename: string }>) {
  addToQueue(items.map(item => ({
    workflow: '__manual__',
    filename: item.filename,
    url: item.url,
    targetPath: item.targetPath
  })))
  emit('close')
}

function handleWorkflowUrl(url: string) {
  selectedWorkflowUrl.value = url
  activeTab.value = 'direct'
}

function handleClose() {
  emit('close')
}
</script>

<style scoped>
.download-modal {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tab-bar {
  display: flex;
  gap: var(--cg-space-1);
  padding-bottom: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border);
  margin-bottom: var(--cg-space-3);
}

.tab-btn {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-secondary);
  padding: var(--cg-space-2) var(--cg-space-3);
  font-size: var(--cg-font-size-sm);
  cursor: pointer;
  transition: all 0.15s ease;
}

.tab-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.tab-btn.active {
  background: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-text-inverse);
}

.tab-content {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}
</style>
