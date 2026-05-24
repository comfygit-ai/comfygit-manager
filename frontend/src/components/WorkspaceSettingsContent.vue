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
              @input="civitaiTokenDirty = true"
            />
          </SettingRow>

          <SettingRow
            label="HuggingFace Token"
            description="Access token for downloading gated/private models from HuggingFace"
          >
            <TextInput
              v-model="huggingfaceToken"
              type="password"
              placeholder="Enter HuggingFace token..."
              :style="{ minWidth: '300px' }"
              @input="hfTokenDirty = true"
            />
          </SettingRow>

          <SettingRow
            label="GitHub Personal Access Token"
            description="Client-side token used for private Git remote access during remote operations"
            stacked
          >
            <div class="token-setting">
              <TextInput
                v-model="githubToken"
                type="password"
                placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                @input="githubTokenDirty = true"
              />
              <div v-if="hasSshRemote" class="token-warning">
                SSH origin remote detected. PAT authentication only works with HTTPS remotes.
              </div>
              <div class="token-help">
                Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations.
              </div>
              <div class="token-actions">
                <ActionButton
                  variant="ghost"
                  size="xs"
                  :loading="isTestingGitHubToken"
                  :disabled="!githubToken || isTestingGitHubToken"
                  @click="handleTestGitHubToken"
                >
                  Test Connection
                </ActionButton>
                <ActionButton
                  v-if="hasStoredGitHubToken"
                  variant="ghost"
                  size="xs"
                  @click="handleClearGitHubToken"
                >
                  Clear
                </ActionButton>
              </div>
              <div v-if="gitHubTokenTestResult" :class="['token-test-result', gitHubTokenTestResult.type]">
                {{ gitHubTokenTestResult.message }}
              </div>
            </div>
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

          <SettingRow
            label="Show Missing Dependencies Popup"
            description="Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
          >
            <Toggle v-model="popupEnabled" @update:modelValue="togglePopupSetting" />
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
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { isRemoteSsh, useGitAuth } from '@/composables/useGitAuth'
import type { ConfigSettings } from '@/types/comfygit'

const props = defineProps<{
  // Optional workspace path for when no environment is running (e.g., wizard setup)
  workspacePath?: string | null
}>()

const emit = defineEmits<{
  saved: []
  error: [message: string]
}>()

const { getConfig, updateConfig, getRemotes, testGitAuth } = useComfyGitService()
const { getToken, setToken, clearToken, hasToken } = useGitAuth()

const loading = ref(false)
const error = ref<string | null>(null)
const saveStatus = ref<{ type: 'success' | 'error', message: string } | null>(null)

// Config state
const config = ref<ConfigSettings | null>(null)
const originalConfig = ref<ConfigSettings | null>(null)

// Editable fields
const civitaiToken = ref<string>('')
const huggingfaceToken = ref<string>('')
const githubToken = ref<string>('')
const comfyuiExtraArgs = ref<string>('')  // Space-separated args shown as string

// Dirty tracking for token fields (prevents saving masked values)
const civitaiTokenDirty = ref(false)
const hfTokenDirty = ref(false)
const githubTokenDirty = ref(false)
const originalGitHubToken = ref<string>('')
const hasSshRemote = ref(false)
const isTestingGitHubToken = ref(false)
const gitHubTokenTestResult = ref<{ type: 'success' | 'error'; message: string } | null>(null)

// UI settings (stored in localStorage)
const autoRefresh = ref(false)
const popupEnabled = ref(true)

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

  const civitaiChanged = civitaiTokenDirty.value
  const hfChanged = hfTokenDirty.value
  const githubChanged = githubTokenDirty.value
  const extraArgsChanged = comfyuiExtraArgs.value !== argsToString(originalConfig.value.comfyui_extra_args || [])

  return civitaiChanged || hfChanged || githubChanged || extraArgsChanged
})

const hasStoredGitHubToken = computed(() => hasToken())

async function loadSettings() {
  loading.value = true
  error.value = null

  try {
    config.value = await getConfig(props.workspacePath || undefined)
    originalConfig.value = { ...config.value }

    // Populate editable fields
    civitaiToken.value = config.value.civitai_api_key || ''
    huggingfaceToken.value = config.value.huggingface_token || ''
    comfyuiExtraArgs.value = argsToString(config.value.comfyui_extra_args || [])
    githubToken.value = getToken() || ''
    originalGitHubToken.value = githubToken.value

    // Reset dirty flags (values loaded from backend are not user edits)
    civitaiTokenDirty.value = false
    hfTokenDirty.value = false
    githubTokenDirty.value = false
    gitHubTokenTestResult.value = null

    // Load UI settings from localStorage (default to true if not set)
    const storedAutoRefresh = localStorage.getItem('ComfyGit.Settings.AutoRefresh')
    autoRefresh.value = storedAutoRefresh !== 'false'

    // Load popup enabled setting (default to true)
    popupEnabled.value = localStorage.getItem('comfygit:popup-disabled') !== 'true'

    try {
      const result = await getRemotes()
      const origin = result.remotes?.find(r => r.name === 'origin')
      hasSshRemote.value = !!(origin && isRemoteSsh(origin.url))
    } catch {
      hasSshRemote.value = false
    }
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

    // Only send tokens if user actually modified them (dirty tracking prevents saving masked values)
    if (civitaiTokenDirty.value) {
      updates.civitai_api_key = civitaiToken.value || null
    }

    if (hfTokenDirty.value) {
      updates.huggingface_token = huggingfaceToken.value || null
    }

    if (comfyuiExtraArgs.value !== argsToString(originalConfig.value?.comfyui_extra_args || [])) {
      updates.comfyui_extra_args = stringToArgs(comfyuiExtraArgs.value)
    }

    // Send update
    await updateConfig(updates, props.workspacePath || undefined)

    if (githubTokenDirty.value) {
      if (githubToken.value) {
        setToken(githubToken.value)
      } else {
        clearToken()
      }
    }

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
    huggingfaceToken.value = originalConfig.value.huggingface_token || ''
    comfyuiExtraArgs.value = argsToString(originalConfig.value.comfyui_extra_args || [])
    githubToken.value = originalGitHubToken.value
    civitaiTokenDirty.value = false
    hfTokenDirty.value = false
    githubTokenDirty.value = false
    gitHubTokenTestResult.value = null
    saveStatus.value = null
  }
}

async function handleTestGitHubToken() {
  if (!githubToken.value) return

  isTestingGitHubToken.value = true
  gitHubTokenTestResult.value = null
  try {
    const result = await testGitAuth(githubToken.value)
    gitHubTokenTestResult.value = {
      type: result.status === 'success' ? 'success' : 'error',
      message: result.message,
    }
  } catch (err) {
    gitHubTokenTestResult.value = {
      type: 'error',
      message: err instanceof Error ? err.message : 'Connection test failed',
    }
  } finally {
    isTestingGitHubToken.value = false
  }
}

function handleClearGitHubToken() {
  githubToken.value = ''
  githubTokenDirty.value = true
  gitHubTokenTestResult.value = null
}

function saveAutoRefreshSetting(value: boolean) {
  localStorage.setItem('ComfyGit.Settings.AutoRefresh', String(value))
  console.log('[ComfyGit] Auto-refresh setting saved:', value)
}

// Toggle popup enabled setting
function togglePopupSetting(value: boolean) {
  if (value) {
    localStorage.removeItem('comfygit:popup-disabled')
  } else {
    localStorage.setItem('comfygit:popup-disabled', 'true')
  }
  console.log('[ComfyGit] Popup setting changed:', value ? 'enabled' : 'disabled')
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

.token-setting {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.token-help {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.token-warning {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-warning);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  padding: var(--cg-space-2);
}

.token-actions {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.token-test-result {
  font-size: var(--cg-font-size-xs);
  padding: var(--cg-space-2);
  border: 1px solid transparent;
}

.token-test-result.success {
  color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
  border-color: var(--cg-color-success);
}

.token-test-result.error {
  color: var(--cg-color-error);
  background: var(--cg-color-error-muted);
  border-color: var(--cg-color-error);
}
</style>
