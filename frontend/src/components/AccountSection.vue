<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="CLOUD ACCOUNT"
        :show-info="true"
        @info-click="showInfo = true"
      >
        <template #actions>
          <div :class="['auth-chip', { authenticated: isAuthenticated }]">
            {{ authChipLabel }}
          </div>
        </template>
      </PanelHeader>
    </template>

    <template #content>
      <SectionGroup title="AUTHENTICATION">
        <div class="account-section">
          <template v-if="isAuthenticated && user">
            <div class="account-card">
              <div class="account-card-header">
                <div class="account-title">SIGNED IN</div>
                <ActionButton variant="ghost" size="xs" :loading="signingOut" @click="handleSignOut">
                  Sign Out
                </ActionButton>
              </div>
              <div class="account-meta">
                <div><span class="meta-label">Email:</span> {{ user.email || '—' }}</div>
                <div><span class="meta-label">User ID:</span> {{ user.id }}</div>
              </div>
              <div class="row-actions">
                <ActionButton variant="primary" size="xs" @click="emit('navigate', 'publish')">
                  Go To Publish
                </ActionButton>
                <ActionButton variant="ghost" size="xs" @click="handleOpenDashboard">
                  Open Dashboard
                </ActionButton>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="account-card">
              <div class="account-title">SIGN IN OR CREATE ACCOUNT</div>
              <div class="auth-form-grid">
                <div class="field-group full-span">
                  <label class="field-label">Email</label>
                  <TextInput
                    v-model="email"
                    type="email"
                    placeholder="you@example.com"
                    @keydown.enter.prevent="handleSignIn"
                  />
                </div>
                <div class="field-group full-span">
                  <label class="field-label">Password</label>
                  <TextInput
                    v-model="password"
                    type="password"
                    placeholder="Enter password"
                    @keydown.enter.prevent="handleSignIn"
                  />
                </div>
              </div>
              <div class="row-actions">
                <ActionButton variant="primary" size="xs" :loading="signingIn" @click="handleSignIn">
                  Sign In
                </ActionButton>
                <ActionButton variant="secondary" size="xs" :loading="signingUp" @click="handleSignUp">
                  Create Account
                </ActionButton>
              </div>
              <div v-if="authMessage" :class="['status-text', authMessage.type]">
                {{ authMessage.message }}
              </div>
            </div>
          </template>
        </div>
      </SectionGroup>

      <SectionGroup title="ADVANCED" collapsible :initially-expanded="false">
        <div class="account-section">
          <SettingRow
            label="Cloud API URL"
            description="Override the ComfyGit Cloud API base URL for local development or non-default deployments"
            stacked
          >
            <div class="stacked-form">
              <TextInput
                v-model="cloudUrlInput"
                placeholder="http://127.0.0.1:8012"
              />
              <div class="row-actions">
                <ActionButton variant="secondary" size="xs" @click="handleSaveCloudUrl">
                  Save URL
                </ActionButton>
                <ActionButton variant="ghost" size="xs" :loading="testingConnection" @click="handleTestConnection">
                  Test Connection
                </ActionButton>
              </div>
              <div v-if="connectionMessage" :class="['status-text', connectionMessage.type]">
                {{ connectionMessage.message }}
              </div>
            </div>
          </SettingRow>

          <SettingRow
            label="Dashboard URL"
            description="Override the cloud dashboard URL used by the Open Dashboard actions"
            stacked
          >
            <div class="stacked-form">
              <TextInput
                v-model="dashboardUrlInput"
                placeholder="http://100.99.14.94:5174"
              />
              <div class="row-actions">
                <ActionButton variant="secondary" size="xs" @click="handleSaveDashboardUrl">
                  Save URL
                </ActionButton>
              </div>
            </div>
          </SettingRow>
        </div>
      </SectionGroup>
    </template>
  </PanelLayout>

  <InfoPopover
    :show="showInfo"
    title="Cloud Account"
    @close="showInfo = false"
  >
    <template #content>
      <div class="info-content">
        <p>This page manages the local panel's connection to ComfyGit Cloud.</p>
        <p>Use it to configure the cloud URL, sign in or create an account, and inspect the currently linked cloud identity.</p>
        <p>Publishing revisions happens from the separate <strong>Publish</strong> page.</p>
      </div>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import SettingRow from '@/components/base/molecules/SettingRow.vue'
import TextInput from '@/components/base/atoms/TextInput.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { useCloudAuth } from '@/composables/useCloudAuth'

const emit = defineEmits<{
  toast: [message: string, type: 'info' | 'success' | 'warning' | 'error']
  navigate: [tab: string]
}>()

const { getCloudAuthConfig, loginToCloud, signupToCloud, getCloudMe, logoutFromCloud } = useComfyGitService()
const { cloudUrl, dashboardUrl, session, user, isAuthenticated, authLabel, setCloudUrl, setDashboardUrl, setAuth, clearAuth } = useCloudAuth()

const showInfo = ref(false)
const cloudUrlInput = ref(cloudUrl.value)
const dashboardUrlInput = ref(dashboardUrl.value)
const email = ref('')
const password = ref('')
const testingConnection = ref(false)
const signingIn = ref(false)
const signingUp = ref(false)
const signingOut = ref(false)
const connectionMessage = ref<{ type: 'success' | 'error' | 'info'; message: string } | null>(null)
const authMessage = ref<{ type: 'success' | 'error' | 'info'; message: string } | null>(null)

const authChipLabel = computed(() => isAuthenticated.value ? authLabel.value : 'Not signed in')

function persistCloudUrl(): string {
  const nextValue = cloudUrlInput.value.trim()
  setCloudUrl(nextValue)
  cloudUrlInput.value = cloudUrl.value
  return cloudUrl.value
}

async function refreshAccountState() {
  if (!session.value?.access_token || !cloudUrl.value) return
  try {
    const result = await getCloudMe(cloudUrl.value, session.value.access_token)
    if (session.value) {
      setAuth(session.value, result.user)
    }
  } catch (err) {
    clearAuth()
    authMessage.value = {
      type: 'error',
      message: err instanceof Error ? err.message : 'Stored cloud session is no longer valid.',
    }
  }
}

async function handleTestConnection() {
  const nextCloudUrl = persistCloudUrl()
  testingConnection.value = true
  connectionMessage.value = null
  try {
    const config = await getCloudAuthConfig(nextCloudUrl)
    connectionMessage.value = {
      type: 'success',
      message: `Connected. Supabase auth is configured for ${config.url}.`,
    }
  } catch (err) {
    connectionMessage.value = {
      type: 'error',
      message: err instanceof Error ? err.message : 'Failed to connect to cloud.',
    }
  } finally {
    testingConnection.value = false
  }
}

function handleSaveCloudUrl() {
  const nextCloudUrl = persistCloudUrl()
  connectionMessage.value = {
    type: 'info',
    message: `Cloud URL saved: ${nextCloudUrl}`,
  }
}

function handleSaveDashboardUrl() {
  const nextValue = dashboardUrlInput.value.trim()
  setDashboardUrl(nextValue)
  dashboardUrlInput.value = dashboardUrl.value
  connectionMessage.value = {
    type: 'info',
    message: `Dashboard URL saved: ${dashboardUrl.value || 'cleared'}`,
  }
}

async function handleSignIn() {
  const nextCloudUrl = persistCloudUrl()
  signingIn.value = true
  authMessage.value = null
  try {
    const result = await loginToCloud(nextCloudUrl, email.value.trim(), password.value)
    if (!result.session || !result.user) {
      throw new Error('Cloud did not return a session.')
    }
    setAuth(result.session, result.user)
    authMessage.value = { type: 'success', message: 'Signed in successfully.' }
    emit('toast', 'Signed in to ComfyGit Cloud', 'success')
    password.value = ''
  } catch (err) {
    authMessage.value = {
      type: 'error',
      message: err instanceof Error ? err.message : 'Failed to sign in.',
    }
  } finally {
    signingIn.value = false
  }
}

async function handleSignUp() {
  const nextCloudUrl = persistCloudUrl()
  signingUp.value = true
  authMessage.value = null
  try {
    const result = await signupToCloud(nextCloudUrl, email.value.trim(), password.value)
    if (!result.session || !result.user) {
      throw new Error('Cloud did not return a session.')
    }
    setAuth(result.session, result.user)
    authMessage.value = { type: 'success', message: 'Account created and signed in.' }
    emit('toast', 'ComfyGit Cloud account created', 'success')
    password.value = ''
  } catch (err) {
    authMessage.value = {
      type: 'error',
      message: err instanceof Error ? err.message : 'Failed to create account.',
    }
  } finally {
    signingUp.value = false
  }
}

async function handleSignOut() {
  signingOut.value = true
  try {
    await logoutFromCloud(cloudUrl.value, session.value?.refresh_token)
  } catch {
    // best effort
  } finally {
    clearAuth()
    signingOut.value = false
    authMessage.value = { type: 'info', message: 'Signed out.' }
    emit('toast', 'Signed out of ComfyGit Cloud', 'info')
  }
}

function handleOpenDashboard() {
  if (!dashboardUrl.value) return
  window.open(dashboardUrl.value, '_blank', 'noopener,noreferrer')
}

onMounted(() => {
  void refreshAccountState()
})
</script>

<style scoped>
.auth-chip {
  color: var(--cg-color-text-muted);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-1) var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
}

.auth-chip.authenticated {
  color: var(--cg-color-success);
  border-color: var(--cg-color-success);
}

.account-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.stacked-form,
.account-card {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.account-card {
  padding: var(--cg-space-3);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
}

.account-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--cg-space-3);
}

.account-title,
.field-label {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
  text-transform: uppercase;
}

.auth-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--cg-space-3);
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.full-span {
  grid-column: 1 / -1;
}

.row-actions {
  display: flex;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.status-text,
.account-meta,
.info-content {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  line-height: 1.6;
}

.status-text.success {
  color: var(--cg-color-success);
}

.status-text.error {
  color: var(--cg-color-error);
}

.status-text.info {
  color: var(--cg-color-text-secondary);
}

.meta-label {
  color: var(--cg-color-text-muted);
}

@media (max-width: 720px) {
  .auth-form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
