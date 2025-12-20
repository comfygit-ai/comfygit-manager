<template>
  <div class="workspace-settings-content">
    <template v-if="loading">
      <LoadingState message="Loading workspace settings..." />
    </template>
    <template v-else-if="error">
      <ErrorState :message="error" :retry="true" @retry="loadSettings" />
    </template>
    <template v-else>
      <!-- Workspace Paths Section -->
      <SectionGroup title="WORKSPACE PATHS">
        <div class="settings-section">
          <div class="path-setting">
            <div class="path-label">Workspace Root</div>
            <div class="path-description">Root directory of this workspace (read-only)</div>
            <div class="path-value">{{ config?.workspace_path || 'Loading...' }}</div>
          </div>

          <div class="path-setting">
            <div class="path-label">Models Directory</div>
            <div class="path-description">Where model files are indexed and stored</div>
            <div class="path-value">{{ config?.models_path || 'Not configured' }}</div>
          </div>
        </div>
      </SectionGroup>

      <!-- API Credentials Section -->
      <SectionGroup title="API CREDENTIALS">
        <div class="settings-section">
          <SettingRow
            label="CivitAI API Key"
            description="API key for downloading models from CivitAI"
          >
            <TextInput
              v-model="civitaiToken"
              type="password"
              placeholder="Enter CivitAI API key..."
              :style="{ minWidth: '300px' }"
            />
          </SettingRow>
        </div>
      </SectionGroup>

      <!-- ComfyUI Settings -->
      <SectionGroup title="COMFYUI SETTINGS">
        <div class="settings-section">
          <SettingRow
            label="Extra Startup Arguments"
            description="Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
          >
            <TextInput
              v-model="comfyuiExtraArgs"
              placeholder="--lowvram --listen 0.0.0.0"
              :style="{ minWidth: '300px' }"
            />
          </SettingRow>
          <div class="setting-hint">
            Common flags: <code>--lowvram</code>, <code>--highvram</code>, <code>--listen 0.0.0.0</code>, <code>--cuda-device 1</code>
          </div>
        </div>
      </SectionGroup>

      <!-- UI Settings -->
      <SectionGroup title="UI SETTINGS">
        <div class="settings-section">
          <SettingRow
            label="Auto-Refresh After Git Operations"
            description="Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
          >
            <Toggle v-model="autoRefresh" @update:modelValue="saveAutoRefreshSetting" />
          </SettingRow>
        </div>
      </SectionGroup>

      <!-- Save Status -->
      <SummaryBar v-if="saveStatus" :variant="saveStatus.type === 'success' ? 'compact' : 'compact'">
        <span :style="{ color: saveStatus.type === 'success' ? 'var(--cg-color-success)' : 'var(--cg-color-error)' }">
          {{ saveStatus.message }}
        </span>
      </SummaryBar>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import SettingRow from '@/components/base/molecules/SettingRow.vue'
import TextInput from '@/components/base/atoms/TextInput.vue'
import Toggle from '@/components/base/atoms/Toggle.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ConfigSettings } from '@/types/comfygit'

const props = defineProps<{
  // Optional workspace path for when no environment is running (e.g., wizard setup)
  workspacePath?: string | null
}>()

const emit = defineEmits<{
  saved: []
  error: [message: string]
}>()

const { getConfig, updateConfig } = useComfyGitService()

const loading = ref(false)
const error = ref<string | null>(null)
const saveStatus = ref<{ type: 'success' | 'error', message: string } | null>(null)

// Config state
const config = ref<ConfigSettings | null>(null)
const originalConfig = ref<ConfigSettings | null>(null)

// Editable fields
const civitaiToken = ref<string>('')
const comfyuiExtraArgs = ref<string>('')  // Space-separated args shown as string

// UI settings (stored in localStorage)
const autoRefresh = ref(false)

// Helper to convert args array to space-separated string
function argsToString(args: string[]): string {
  return args.join(' ')
}

// Helper to convert space-separated string to args array
function stringToArgs(str: string): string[] {
  return str.trim() ? str.trim().split(/\s+/) : []
}

// Check if settings have changed
const hasChanges = computed(() => {
  if (!originalConfig.value) return false

  // Check all editable fields
  const civitaiChanged = civitaiToken.value !== (originalConfig.value.civitai_api_key || '')
  const extraArgsChanged = comfyuiExtraArgs.value !== argsToString(originalConfig.value.comfyui_extra_args || [])

  return civitaiChanged || extraArgsChanged
})

async function loadSettings() {
  loading.value = true
  error.value = null

  try {
    config.value = await getConfig(props.workspacePath || undefined)
    originalConfig.value = { ...config.value }

    // Populate editable fields
    civitaiToken.value = config.value.civitai_api_key || ''
    comfyuiExtraArgs.value = argsToString(config.value.comfyui_extra_args || [])

    // Load UI settings from localStorage (default to true if not set)
    const storedAutoRefresh = localStorage.getItem('ComfyGit.Settings.AutoRefresh')
    autoRefresh.value = storedAutoRefresh !== 'false'
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load settings'
  } finally {
    loading.value = false
  }
}

async function saveSettings() {
  saveStatus.value = null

  try {
    // Only send changed fields
    const updates: Partial<ConfigSettings> = {}

    if (civitaiToken.value !== (originalConfig.value?.civitai_api_key || '')) {
      updates.civitai_api_key = civitaiToken.value || null
    }

    if (comfyuiExtraArgs.value !== argsToString(originalConfig.value?.comfyui_extra_args || [])) {
      updates.comfyui_extra_args = stringToArgs(comfyuiExtraArgs.value)
    }

    // Send update
    await updateConfig(updates, props.workspacePath || undefined)

    // Reload to get latest state
    await loadSettings()

    saveStatus.value = { type: 'success', message: 'Settings saved successfully' }
    emit('saved')

    // Clear status after 3 seconds
    setTimeout(() => {
      saveStatus.value = null
    }, 3000)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to save settings'
    saveStatus.value = { type: 'error', message }
    emit('error', message)
  }
}

function resetSettings() {
  if (originalConfig.value) {
    civitaiToken.value = originalConfig.value.civitai_api_key || ''
    comfyuiExtraArgs.value = argsToString(originalConfig.value.comfyui_extra_args || [])
    saveStatus.value = null
  }
}

function saveAutoRefreshSetting(value: boolean) {
  localStorage.setItem('ComfyGit.Settings.AutoRefresh', String(value))
  console.log('[ComfyGit] Auto-refresh setting saved:', value)
}

// Expose methods for parent components
defineExpose({
  saveSettings,
  resetSettings,
  hasChanges,
  loadSettings
})

onMounted(loadSettings)
</script>

<style scoped>
.workspace-settings-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.settings-section {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
}

.path-setting {
  padding: var(--cg-space-3) 0;
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.path-setting:last-child {
  border-bottom: none;
}

.path-label {
  font-size: var(--cg-font-size-sm);
  font-weight: 500;
  color: var(--cg-color-text-primary);
  margin-bottom: var(--cg-space-1);
}

.path-description {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  margin-bottom: var(--cg-space-2);
}

.path-value {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-primary);
  background: var(--cg-color-bg-primary);
  padding: var(--cg-space-2);
  border-radius: var(--cg-border-radius-sm);
  border: 1px solid var(--cg-color-border-subtle);
  word-break: break-all;
}

.setting-hint {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  margin-top: var(--cg-space-2);
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-primary);
  border-radius: var(--cg-border-radius-sm);
}

.setting-hint code {
  font-family: var(--cg-font-mono);
  background: var(--cg-color-bg-secondary);
  padding: 0 var(--cg-space-1);
  border-radius: var(--cg-border-radius-sm);
}
</style>
