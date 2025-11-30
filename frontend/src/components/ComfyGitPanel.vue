<template>
  <div class="comfygit-panel">
    <!-- Header -->
    <div class="panel-header">
      <div class="header-left">
        <h2 class="panel-title">ComfyGit</h2>
        <div v-if="status" class="header-info">
          <!-- <span class="env-name">{{ currentEnvironment?.name || status.environment }}</span> -->
          <!-- <span class="branch-name">@{{ status.branch || 'detached' }}</span> -->
          <!-- <span :class="['status-dot', statusColor]" :title="statusTooltip"></span> -->
        </div>
      </div>
      <div class="header-actions">
        <!-- Social links -->
        <button class="sponsor-btn" @click="openLink('https://github.com/sponsors/comfyhub-org')" title="Sponsor ComfyHub" aria-label="Sponsor ComfyHub on GitHub">
          Sponsor
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z"/>
          </svg>
        </button>
        <button class="icon-btn social-link" @click="openLink('https://discord.gg/2h5rSTeh6Y')" title="Join Discord" aria-label="Join ComfyHub Discord">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.027-.07 8.735 8.735 0 0 1-1.248-.595.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085c-.399.233-.813.44-1.249.594a.05.05 0 0 0-.027.07c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zM5.347 10.64c-.79 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.807 0 1.451.733 1.44 1.613 0 .888-.637 1.612-1.44 1.612zm5.316 0c-.788 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.808 0 1.451.733 1.44 1.613 0 .888-.632 1.612-1.44 1.612z"/>
          </svg>
        </button>
        <button class="icon-btn social-link" @click="openLink('https://x.com/akatz_ai')" title="Follow on X" aria-label="Follow on X">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z"/>
          </svg>
        </button>
        <button class="icon-btn social-link" @click="openLink('https://github.com/comfyhub-org/comfygit')" title="View on GitHub" aria-label="View ComfyGit on GitHub">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </button>
        <button class="icon-btn social-link" @click="openLink('https://docs.comfyhub.org/comfygit/')" title="Documentation" aria-label="View ComfyGit Documentation">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg>
        </button>

        <span class="header-divider"></span>

        <!-- Panel controls -->
        <button class="icon-btn" :class="{ spinning: isLoading }" @click="refresh" title="Refresh">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z"/>
          </svg>
        </button>
        <button class="icon-btn" @click="emit('close')" title="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Environment Switcher -->
    <div class="env-switcher">
      <div class="env-switcher-header">
        <div class="env-switcher-label">CURRENT ENVIRONMENT</div>
        <div class="env-control-buttons">
          <button class="env-control-btn" title="Restart environment" @click="handleRestart">
            Restart
          </button>
          <button class="env-control-btn stop" title="Stop environment" @click="handleStop">
            Stop
          </button>
        </div>
      </div>
      <button class="env-switcher-btn" @click="selectView('environments', 'all-envs')">
        <div v-if="status" class="header-info">
          <span>{{ currentEnvironment?.name || status?.environment || 'Loading...' }}</span>
          <span class="branch-name">({{ status.branch || 'detached' }})</span>
          <!-- <span :class="['status-dot', statusColor]" :title="statusTooltip"></span> -->
        </div>
        <!-- <span>{{ currentEnvironment?.name || status?.environment || 'Loading...' }}</span> -->
        <span class="switch-indicator">SWITCH ▸</span>
      </button>
    </div>

    <!-- Main Content Area -->
    <div class="panel-main">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="sidebar-content">
          <!-- THIS ENV Section -->
          <div class="sidebar-section">
            <div class="sidebar-section-title">THIS ENV</div>
            <button
              :class="['sidebar-item', { active: currentView === 'status' && currentSection === 'this-env' }]"
              @click="selectView('status', 'this-env')"
            >
              STATUS
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'workflows' }]"
              @click="selectView('workflows', 'this-env')"
            >
              WORKFLOWS
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'models-env' }]"
              @click="selectView('models-env', 'this-env')"
            >
              MODELS
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'branches' }]"
              @click="selectView('branches', 'this-env')"
            >
              BRANCHES
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'history' }]"
              @click="selectView('history', 'this-env')"
            >
              HISTORY
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'nodes' }]"
              @click="selectView('nodes', 'this-env')"
            >
              NODES
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'debug-env' }]"
              @click="selectView('debug-env', 'this-env')"
            >
              DEBUG
            </button>
          </div>

          <div class="sidebar-divider"></div>

          <!-- ALL ENVS Section -->
          <div class="sidebar-section">
            <div class="sidebar-section-title">ALL ENVS</div>
            <button
              :class="['sidebar-item', { active: currentView === 'environments' }]"
              @click="selectView('environments', 'all-envs')"
            >
              ENVIRONMENTS
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'model-index' }]"
              @click="selectView('model-index', 'all-envs')"
            >
              MODEL INDEX
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'settings' }]"
              @click="selectView('settings', 'all-envs')"
            >
              SETTINGS
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'debug-workspace' }]"
              @click="selectView('debug-workspace', 'all-envs')"
            >
              DEBUG
            </button>
          </div>

          <div class="sidebar-divider"></div>

          <!-- SHARING Section -->
          <div class="sidebar-section">
            <div class="sidebar-section-title">SHARING</div>
            <button
              :class="['sidebar-item', { active: currentView === 'export' }]"
              @click="selectView('export', 'sharing')"
            >
              EXPORT
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'import' }]"
              @click="selectView('import', 'sharing')"
            >
              IMPORT
            </button>
            <button
              :class="['sidebar-item', { active: currentView === 'remotes' }]"
              @click="selectView('remotes', 'sharing')"
            >
              REMOTES
            </button>
          </div>
        </div>

        <!-- Sidebar Footer -->
        <div class="sidebar-footer">
          <span class="version">v0.0.1</span>
          <span class="made-by">made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z"/></svg> by Akatz</span>
        </div>
      </div>

      <!-- Content Area -->
      <div class="content-area">
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
        <div v-else-if="!status && currentView === 'status'" class="loading">
          Loading status...
        </div>
        <template v-else>
          <!-- Status View -->
          <StatusSection
            v-if="currentView === 'status'"
            ref="statusSectionRef"
            :status="status!"
            :setup-state="setupState"
            @switch-branch="handleSwitchBranchClick"
            @commit-changes="showCommitModal = true"
            @sync-environment="showSyncModal = true"
            @view-workflows="selectView('workflows', 'this-env')"
            @view-history="selectView('history', 'this-env')"
            @view-debug="selectView('debug-env', 'this-env')"
            @view-nodes="selectView('nodes', 'this-env')"
            @repair-missing-models="handleRepairMissingModels"
            @repair-environment="handleRepairEnvironment"
            @start-setup="showSetupWizard = true"
            @view-environments="selectView('environments', 'all-envs')"
            @create-environment="handleCreateEnvironmentFromStatus"
          />

          <!-- Workflows View -->
          <WorkflowsSection
            v-else-if="currentView === 'workflows'"
            ref="workflowsSectionRef"
            @refresh="refresh"
          />

          <!-- Models (Environment) View -->
          <ModelsEnvSection
            v-else-if="currentView === 'models-env'"
            @navigate="handleNavigate"
          />

          <!-- Branches View -->
          <BranchSection
            v-else-if="currentView === 'branches'"
            :branches="branches"
            :current="status?.branch || null"
            @switch="handleBranchSwitch"
            @create="handleBranchCreate"
            @delete="handleBranchDelete"
          />

          <!-- History View -->
          <HistorySection
            v-else-if="currentView === 'history'"
            :commits="commits"
            @select="handleCommitSelect"
            @checkout="handleCheckout"
          />

          <!-- Nodes View -->
          <NodesSection
            v-else-if="currentView === 'nodes'"
            :version-mismatches="status?.comparison?.version_mismatches || []"
            @open-node-manager="handleOpenNodeManager"
            @repair-environment="handleRepairEnvironment"
            @toast="handleToast"
          />

          <!-- Debug (Environment) View -->
          <DebugEnvSection v-else-if="currentView === 'debug-env'" />

          <!-- Environments View -->
          <EnvironmentsSection
            v-else-if="currentView === 'environments'"
            ref="environmentsSectionRef"
            @switch="handleEnvironmentSwitch"
            @created="handleEnvironmentCreated"
            @delete="handleEnvironmentDelete"
          />

          <!-- Model Index View -->
          <ModelIndexSection v-else-if="currentView === 'model-index'" @refresh="refresh" />

          <!-- Settings View -->
          <WorkspaceSettingsSection v-else-if="currentView === 'settings'" />

          <!-- Debug (Workspace) View -->
          <WorkspaceDebugSection v-else-if="currentView === 'debug-workspace'" />

          <!-- Export View -->
          <ExportSection v-else-if="currentView === 'export'" />

          <!-- Import View -->
          <ImportSection
            v-else-if="currentView === 'import'"
            @import-complete-switch="handleImportCompleteSwitch"
          />

          <!-- Remotes View -->
          <RemotesSection v-else-if="currentView === 'remotes'" @toast="handleToast" />
        </template>
      </div>
    </div>

    <!-- Modals -->
    <CommitDetailModal
      v-if="selectedCommit"
      :commit="selectedCommit"
      @close="selectedCommit = null"
      @checkout="handleCheckout"
      @createBranch="handleBranchFromCommit"
    />

    <ConfirmDialog
      v-if="confirmDialog"
      :title="confirmDialog.title"
      :message="confirmDialog.message"
      :details="confirmDialog.details"
      :warning="confirmDialog.warning"
      :confirmLabel="confirmDialog.confirmLabel"
      :cancelLabel="confirmDialog.cancelLabel"
      :secondaryLabel="confirmDialog.secondaryLabel"
      :secondaryAction="confirmDialog.secondaryAction"
      :destructive="confirmDialog.destructive"
      @confirm="confirmDialog.onConfirm"
      @cancel="confirmDialog = null"
      @secondary="confirmDialog.onSecondary"
    />

    <!-- Environment Switching Modals -->
    <ConfirmSwitchModal
      :show="showConfirmSwitch"
      :from-environment="currentEnvironment?.name || 'unknown'"
      :to-environment="targetEnvironment"
      @confirm="confirmEnvironmentSwitch"
      @close="cancelEnvironmentSwitch"
    />

    <!-- Commit Modal (reusing CommitPopover in modal mode) -->
    <CommitPopover
      v-if="showCommitModal && status"
      :status="status"
      :as-modal="true"
      @close="showCommitModal = false"
      @committed="handleCommitSuccess"
    />

    <!-- Sync Environment Modal -->
    <SyncEnvironmentModal
      v-if="showSyncModal && status"
      :show="showSyncModal"
      :mismatch-details="{
        missing_nodes: status.comparison.missing_nodes,
        extra_nodes: status.comparison.extra_nodes
      }"
      @confirm="handleSyncConfirm"
      @close="showSyncModal = false"
    />

    <SwitchProgressModal
      :show="showSwitchProgress"
      :state="switchProgress.state"
      :progress="switchProgress.progress"
      :message="switchProgress.message"
    />

    <!-- Environment Selector Modal -->
    <div v-if="showEnvironmentSelector" class="dialog-overlay" @click.self="showEnvironmentSelector = false">
      <div class="dialog-content env-selector-dialog">
        <div class="dialog-header">
          <h3 class="dialog-title">SWITCH ENVIRONMENT</h3>
          <button class="icon-btn" @click="showEnvironmentSelector = false">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
            </svg>
          </button>
        </div>
        <div class="dialog-body">
          <p class="dialog-message">Select environment to switch to:</p>
          <div class="env-list">
            <div
              v-for="env in environments"
              :key="env.name"
              :class="['env-item', { current: env.is_current }]"
            >
              <div class="env-info">
                <div class="env-name-row">
                  <span class="env-indicator">{{ env.is_current ? '●' : '○' }}</span>
                  <span class="env-name">{{ env.name }}</span>
                  <span v-if="env.current_branch" class="env-branch">({{ env.current_branch }})</span>
                  <span v-if="env.is_current" class="current-label">CURRENT</span>
                </div>
                <div class="env-stats">
                  {{ env.workflow_count }} workflows • {{ env.node_count }} nodes
                </div>
              </div>
              <button
                v-if="!env.is_current"
                class="switch-btn"
                @click="handleEnvironmentSwitch(env.name)"
              >
                SWITCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- First-Time Setup Wizard -->
    <FirstTimeSetupWizard
      v-if="showSetupWizard"
      :default-path="setupStatus?.default_path || '~/comfygit'"
      :detected-models-dir="setupStatus?.detected_models_dir || null"
      :initial-step="wizardInitialStep"
      :existing-environments="setupStatus?.environments || []"
      :cli-installed="setupStatus?.cli_installed ?? true"
      :setup-state="setupStatus?.state || 'no_workspace'"
      :workspace-path="setupStatus?.workspace_path || null"
      @complete="handleSetupComplete"
      @close="handleSetupWizardClose"
      @switch-environment="handleEnvironmentSwitchFromWizard"
      @environment-created-no-switch="handleEnvironmentCreatedNoSwitch"
    />

    <!-- Toast Notifications -->
    <div class="toast-container">
      <transition-group name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="['toast', toast.type]"
        >
          <span class="toast-message">{{ toast.message }}</span>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import EnvironmentSwitcher from './EnvironmentSwitcher.vue'
import StatusSection from './StatusSection.vue'
import BranchSection from './BranchSection.vue'
import HistorySection from './HistorySection.vue'
import WorkflowsSection from './WorkflowsSection.vue'
import ModelsEnvSection from './ModelsEnvSection.vue'
import ModelIndexSection from './ModelIndexSection.vue'
import NodesSection from './NodesSection.vue'
import RemotesSection from './RemotesSection.vue'
import WorkspaceSettingsSection from './WorkspaceSettingsSection.vue'
import WorkspaceDebugSection from './WorkspaceDebugSection.vue'
import DebugEnvSection from './DebugEnvSection.vue'
import EnvironmentsSection from './EnvironmentsSection.vue'
import ExportSection from './ExportSection.vue'
import ImportSection from './ImportSection.vue'
import CommitDetailModal from './CommitDetailModal.vue'
import ConfirmDialog from './ConfirmDialog.vue'
import CommitPopover from './CommitPopover.vue'
import ConfirmSwitchModal from './base/molecules/ConfirmSwitchModal.vue'
import SwitchProgressModal from './base/molecules/SwitchProgressModal.vue'
import SyncEnvironmentModal from './base/molecules/SyncEnvironmentModal.vue'
import FirstTimeSetupWizard from './FirstTimeSetupWizard.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { useOrchestratorService } from '@/composables/useOrchestratorService'
import type { ComfyGitStatus, CommitInfo, BranchInfo, EnvironmentInfo, SetupStatus, SetupState } from '@/types/comfygit'

const props = defineProps<{
  initialView?: string
}>()

const emit = defineEmits<{
  close: []
  statusUpdate: [status: ComfyGitStatus]
}>()

const {
  getStatus,
  getHistory,
  getBranches,
  checkout,
  createBranch,
  switchBranch,
  deleteBranch,
  getEnvironments,
  switchEnvironment,
  getSwitchProgress,
  deleteEnvironment,
  syncEnvironmentManually,
  repairWorkflowModels,
  getSetupStatus
} = useComfyGitService()

const orchestratorService = useOrchestratorService()

function openLink(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

type ViewName = 'status' | 'workflows' | 'models-env' | 'branches' | 'history' | 'nodes' | 'debug-env' |
                'environments' | 'model-index' | 'settings' | 'debug-workspace' |
                'export' | 'import' | 'remotes'

type SectionName = 'this-env' | 'all-envs' | 'sharing'

const status = ref<ComfyGitStatus | null>(null)
const commits = ref<CommitInfo[]>([])
const branches = ref<BranchInfo[]>([])
const environments = ref<EnvironmentInfo[]>([])
const currentEnvironment = computed(() => environments.value.find(e => e.is_current))

// First-time setup state
const setupStatus = ref<SetupStatus | null>(null)
const showSetupWizard = ref(false)
const wizardInitialStep = ref<1 | 2>(1)
const setupState = computed<SetupState>(() => {
  return setupStatus.value?.state || 'managed'
})
const isLoading = ref(false)
const error = ref<string | null>(null)
const selectedCommit = ref<CommitInfo | null>(null)
const showEnvironmentSelector = ref(false)

// Ref to child components for triggering reloads
const workflowsSectionRef = ref<{ loadWorkflows: (forceRefresh?: boolean) => Promise<void> } | null>(null)
const environmentsSectionRef = ref<{ loadEnvironments: () => Promise<void>; openCreateModal: () => void } | null>(null)
const statusSectionRef = ref<{ resetRepairingState: () => void } | null>(null)

// Environment switching modals
const showConfirmSwitch = ref(false)
const showSwitchProgress = ref(false)
const targetEnvironment = ref<string>('')
const switchProgress = ref({ state: 'idle', progress: 0, message: '' })
let switchPollInterval: number | null = null
let progressSimulationInterval: number | null = null

// Map initial view prop to view/section
const initialViewMap: Record<string, { view: ViewName; section: SectionName }> = {
  'debug-env': { view: 'debug-env', section: 'this-env' },
  'debug-workspace': { view: 'debug-workspace', section: 'all-envs' },
  'status': { view: 'status', section: 'this-env' }
}
const initialConfig = props.initialView ? initialViewMap[props.initialView] : null

const currentView = ref<ViewName>(initialConfig?.view ?? 'status')
const currentSection = ref<SectionName>(initialConfig?.section ?? 'this-env')

function selectView(view: ViewName, section: SectionName) {
  currentView.value = view
  currentSection.value = section
}

function handleNavigate(view: string) {
  const viewMap: Record<string, { view: ViewName; section: SectionName }> = {
    'model-index': { view: 'model-index', section: 'all-envs' }
  }
  const target = viewMap[view]
  if (target) {
    selectView(target.view, target.section)
  }
}

function handleSwitchBranchClick() {
  selectView('branches', 'this-env')
}

function handleOpenNodeManager() {
  // Close the panel first
  emit('close')

  // Find and click the Manager button in the toolbar
  // ComfyUI-Manager adds a button with text "Manager" to the menu
  setTimeout(() => {
    const buttons = document.querySelectorAll('button.comfyui-button')
    for (const btn of buttons) {
      if (btn.textContent?.trim() === 'Manager') {
        (btn as HTMLButtonElement).click()
        return
      }
    }
    console.warn('[ComfyGit] Manager button not found in toolbar')
  }, 100) // Small delay to let panel close first
}

interface ConfirmDialogConfig {
  title: string
  message: string
  details?: string[]
  warning?: string
  confirmLabel?: string
  cancelLabel?: string
  secondaryLabel?: string
  secondaryAction?: boolean
  destructive?: boolean
  onConfirm: () => void
  onSecondary?: () => void
}

const confirmDialog = ref<ConfirmDialogConfig | null>(null)

// Modal state
const showCommitModal = ref(false)
const showSyncModal = ref(false)

// Toast notification system
interface Toast {
  id: number
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
}

const toasts = ref<Toast[]>([])
let toastId = 0

function showToast(message: string, type: Toast['type'] = 'info', duration = 3000) {
  const id = ++toastId
  toasts.value.push({ id, message, type })
  if (duration > 0) {
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, duration)
  }
  return id
}

function removeToast(id: number) {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

function handleToast(message: string, type: Toast['type']) {
  showToast(message, type)
}

const statusColor = computed(() => {
  if (!status.value) return 'neutral'
  const wf = status.value.workflows
  const hasChanges = wf.new.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0 || status.value.has_changes
  if (!status.value.comparison.is_synced) return 'error'
  if (hasChanges) return 'warning'
  return 'success'
})

const statusTooltip = computed(() => {
  if (!status.value) return ''
  if (statusColor.value === 'success') return 'All synced'
  if (statusColor.value === 'warning') return 'Uncommitted changes'
  if (statusColor.value === 'error') return 'Not synced'
  return ''
})

async function refresh() {
  isLoading.value = true
  error.value = null

  try {
    // Use forceRefresh=true to clear cached environment state
    const [statusRes, historyRes, branchesRes, envsRes] = await Promise.all([
      getStatus(true),
      getHistory(),
      getBranches(),
      getEnvironments()
    ])
    status.value = statusRes
    commits.value = historyRes.commits
    branches.value = branchesRes.branches
    environments.value = envsRes
    emit('statusUpdate', statusRes)

    // Also refresh workflows section if it's mounted
    if (workflowsSectionRef.value) {
      await workflowsSectionRef.value.loadWorkflows(true)
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load status'
    status.value = null
    commits.value = []
    branches.value = []
  } finally {
    isLoading.value = false
  }
}

function handleCommitSelect(commit: CommitInfo) {
  selectedCommit.value = commit
}

async function handleCheckout(commit: CommitInfo) {
  selectedCommit.value = null

  const hasChanges = status.value && (
    status.value.workflows.new.length > 0 ||
    status.value.workflows.modified.length > 0 ||
    status.value.workflows.deleted.length > 0 ||
    status.value.has_changes
  )

  confirmDialog.value = {
    title: hasChanges ? 'Checkout with Uncommitted Changes' : 'Checkout Commit',
    message: hasChanges
      ? 'You have uncommitted changes that will be lost.'
      : `Checkout commit ${commit.short_hash || commit.hash?.slice(0, 7)}?`,
    details: hasChanges ? getChangeDetails() : undefined,
    warning: 'This will restart ComfyUI to apply the changes.',
    confirmLabel: hasChanges ? 'Discard & Checkout' : 'Checkout',
    cancelLabel: 'Cancel',
    destructive: hasChanges,
    onConfirm: async () => {
      confirmDialog.value = null

      // Set flag to prompt for refresh after server restart
      setRefreshFlag()

      const toastId = showToast(`Checking out ${commit.short_hash || commit.hash?.slice(0, 7)}...`, 'info', 0)

      const result = await checkout(commit.hash, hasChanges)
      removeToast(toastId)

      if (result.status === 'success') {
        showToast('Restarting ComfyUI...', 'success')
      } else {
        showToast(result.message || 'Checkout failed', 'error')
      }
    }
  }
}

async function handleBranchSwitch(branchName: string) {
  const hasChanges = status.value && (
    status.value.workflows.new.length > 0 ||
    status.value.workflows.modified.length > 0 ||
    status.value.workflows.deleted.length > 0 ||
    status.value.has_changes
  )

  confirmDialog.value = {
    title: hasChanges ? 'Switch Branch with Uncommitted Changes' : 'Switch Branch',
    message: hasChanges
      ? 'You have uncommitted changes.'
      : `Switch to branch "${branchName}"?`,
    details: hasChanges ? getChangeDetails() : undefined,
    warning: hasChanges
      ? 'This will restart ComfyUI. Changes will remain in current branch.'
      : 'This will restart ComfyUI to apply the changes.',
    confirmLabel: hasChanges ? 'Switch Anyway' : 'Switch',
    cancelLabel: 'Cancel',
    onConfirm: async () => {
      confirmDialog.value = null

      // Set flag to prompt for refresh after server restart
      setRefreshFlag()

      const toastId = showToast(`Switching to ${branchName}...`, 'info', 0)

      const result = await switchBranch(branchName, hasChanges)
      removeToast(toastId)

      if (result.status === 'success') {
        showToast('Restarting ComfyUI...', 'success')
      } else {
        showToast(result.message || 'Branch switch failed', 'error')
      }
    }
  }
}

async function handleBranchCreate(name: string) {
  const toastId = showToast(`Creating branch ${name}...`, 'info', 0)
  const result = await createBranch(name)
  removeToast(toastId)

  if (result.status === 'success') {
    showToast(`Branch "${name}" created`, 'success')
    await refresh()
  } else {
    showToast(result.message || 'Failed to create branch', 'error')
  }
}

async function handleBranchDelete(branchName: string, force = false) {
  const doDelete = async (forceDelete: boolean) => {
    const toastId = showToast(`Deleting branch ${branchName}...`, 'info', 0)
    try {
      const result = await deleteBranch(branchName, forceDelete)
      removeToast(toastId)

      if (result.status === 'success') {
        showToast(`Branch "${branchName}" deleted`, 'success')
        await refresh()
      } else {
        // Check if it's an unmerged branch error
        if (result.message?.includes('not fully merged')) {
          // Ask user if they want to force delete
          confirmDialog.value = {
            title: 'Branch Not Fully Merged',
            message: `The branch "${branchName}" has commits that haven't been merged.`,
            warning: 'Force deleting will permanently lose any unmerged commits.',
            confirmLabel: 'Force Delete',
            cancelLabel: 'Cancel',
            onConfirm: async () => {
              confirmDialog.value = null
              await doDelete(true)
            }
          }
        } else {
          showToast(result.message || 'Failed to delete branch', 'error')
        }
      }
    } catch (err) {
      removeToast(toastId)
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete branch'
      // Check if it's an unmerged branch error
      if (errorMessage.includes('not fully merged')) {
        confirmDialog.value = {
          title: 'Branch Not Fully Merged',
          message: `The branch "${branchName}" has commits that haven't been merged.`,
          warning: 'Force deleting will permanently lose any unmerged commits.',
          confirmLabel: 'Force Delete',
          cancelLabel: 'Cancel',
          onConfirm: async () => {
            confirmDialog.value = null
            await doDelete(true)
          }
        }
      } else {
        showToast(errorMessage, 'error')
      }
    }
  }

  confirmDialog.value = {
    title: 'Delete Branch',
    message: `Delete branch "${branchName}"?`,
    warning: 'This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    onConfirm: async () => {
      confirmDialog.value = null
      await doDelete(force)
    }
  }
}

async function handleBranchFromCommit(commit: CommitInfo) {
  selectedCommit.value = null
  const name = prompt('Enter branch name:')
  if (name) {
    const toastId = showToast(`Creating branch ${name}...`, 'info', 0)
    const result = await createBranch(name, commit.hash)
    removeToast(toastId)

    if (result.status === 'success') {
      showToast(`Branch "${name}" created from ${commit.short_hash}`, 'success')
      await refresh()
    } else {
      showToast(result.message || 'Failed to create branch', 'error')
    }
  }
}

// Set flag to show refresh notification after server restart
function setRefreshFlag() {
  sessionStorage.setItem('ComfyGit.PendingRefresh', 'true')
  console.log('[ComfyGit] Set refresh flag for post-restart notification')
}

// Restart current environment
async function handleRestart() {
  confirmDialog.value = {
    title: 'Restart Environment',
    message: 'Restart the current environment?',
    warning: 'ComfyUI will restart. Any running workflows will be interrupted.',
    confirmLabel: 'Restart',
    cancelLabel: 'Cancel',
    onConfirm: async () => {
      confirmDialog.value = null
      setRefreshFlag()
      showToast('Restarting environment...', 'info')
      try {
        // Call the reboot endpoint
        if (window.app?.api) {
          await window.app.api.fetchApi('/v2/manager/reboot')
        }
      } catch {
        // Expected - server will restart and connection will drop
      }
    }
  }
}

// Stop current environment
async function handleStop() {
  confirmDialog.value = {
    title: 'Stop Environment',
    message: 'Stop the current environment?',
    warning: 'This will completely shut down ComfyUI. You will need to restart manually.',
    confirmLabel: 'Stop',
    cancelLabel: 'Cancel',
    onConfirm: async () => {
      confirmDialog.value = null
      showToast('Stopping environment...', 'info')
      try {
        // Call the stop endpoint - works for both supervised and unmanaged environments
        if (window.app?.api) {
          await window.app.api.fetchApi('/v2/comfygit/stop', { method: 'POST' })
        }
      } catch {
        // Expected - server will shut down and connection will drop
      }
    }
  }
}

// Environment switching flow
async function handleEnvironmentSwitch(envName: string) {
  showEnvironmentSelector.value = false
  targetEnvironment.value = envName
  showConfirmSwitch.value = true
}

async function confirmEnvironmentSwitch() {
  showConfirmSwitch.value = false
  showSwitchProgress.value = true

  // Set flag to prompt for refresh after server restart
  setRefreshFlag()

  switchProgress.value = {
    progress: 10,
    state: getStateFromProgress(10),
    message: getMessageFromProgress(10)
  }

  try {
    // Initiate the switch
    await switchEnvironment(targetEnvironment.value)

    // Start smooth progress simulation (10% → 60% over 5 seconds)
    startProgressSimulation()

    // Start polling for real progress
    startSwitchPolling()
  } catch (err) {
    stopProgressSimulation()
    showSwitchProgress.value = false
    showToast(`Failed to initiate switch: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
    switchProgress.value = { state: 'idle', progress: 0, message: '' }
  }
}

function getStateFromProgress(progress: number): string {
  if (progress >= 100) return 'complete'
  if (progress >= 80) return 'validating'
  if (progress >= 60) return 'starting'
  if (progress >= 30) return 'syncing'
  return 'preparing'
}

function getMessageFromProgress(progress: number): string {
  const messages: Record<string, string> = {
    preparing: 'Stopping current environment...',
    syncing: 'Preparing target environment...',
    starting: 'Starting new environment...',
    validating: 'Waiting for server to be ready...',
    complete: 'Switch complete!'
  }
  return messages[getStateFromProgress(progress)] || ''
}

function startProgressSimulation() {
  if (progressSimulationInterval) return

  let simulatedProgress = 10
  const targetProgress = 60
  const durationMs = 5000
  const intervalMs = 100
  const incrementPerTick = (targetProgress - simulatedProgress) / (durationMs / intervalMs)

  progressSimulationInterval = window.setInterval(() => {
    simulatedProgress += incrementPerTick

    if (simulatedProgress >= targetProgress) {
      simulatedProgress = targetProgress
      stopProgressSimulation()
    }

    // Only update if we haven't received real progress > 60% yet
    if (switchProgress.value.progress < targetProgress) {
      const progress = Math.floor(simulatedProgress)
      switchProgress.value = {
        progress,
        state: getStateFromProgress(progress),
        message: getMessageFromProgress(progress)
      }
    }
  }, intervalMs)
}

function stopProgressSimulation() {
  if (progressSimulationInterval) {
    clearInterval(progressSimulationInterval)
    progressSimulationInterval = null
  }
}

function startSwitchPolling() {
  if (switchPollInterval) return

  switchPollInterval = window.setInterval(async () => {
    try {
      // Try orchestrator first (survives ComfyUI restarts)
      let progress = await orchestratorService.getStatus()

      // Fallback to ComfyUI server if orchestrator unavailable
      if (!progress || progress.state === 'idle') {
        progress = await getSwitchProgress()
      }

      if (!progress) {
        // No progress info available, keep current state
        return
      }

      const realProgress = progress.progress || 0

      // Stop simulation once real progress reaches 60%+
      if (realProgress >= 60) {
        stopProgressSimulation()
      }

      // Calculate final progress (never go backwards)
      const finalProgress = Math.max(realProgress, switchProgress.value.progress)

      // Determine if we're using real state or derived state
      const usingRealState = progress.state && progress.state !== 'idle' && progress.state !== 'unknown'

      const finalState = usingRealState
        ? progress.state
        : getStateFromProgress(finalProgress)

      // If using derived state, also derive message. Otherwise use real message or derive.
      const finalMessage = usingRealState
        ? (progress.message || getMessageFromProgress(finalProgress))
        : getMessageFromProgress(finalProgress)

      // Update progress (simulation handles 10-60%, real handles 60%+)
      switchProgress.value = {
        state: finalState,
        progress: finalProgress,
        message: finalMessage
      }

      // Handle terminal states
      if (progress.state === 'complete') {
        stopProgressSimulation()
        stopSwitchPolling()
        showSwitchProgress.value = false
        showToast(`✓ Switched to ${targetEnvironment.value}`, 'success')
        await refresh()
        targetEnvironment.value = ''
      } else if (progress.state === 'rolled_back') {
        stopProgressSimulation()
        stopSwitchPolling()
        showSwitchProgress.value = false
        showToast('Switch failed, restored previous environment', 'warning')
        targetEnvironment.value = ''
      } else if (progress.state === 'critical_failure') {
        stopProgressSimulation()
        stopSwitchPolling()
        showSwitchProgress.value = false
        showToast(`Critical error during switch: ${progress.message}`, 'error')
        targetEnvironment.value = ''
      }
    } catch (err) {
      console.error('Failed to poll switch progress:', err)
      // Continue polling - server might be restarting
    }
  }, 1000) // Poll every 1 second
}

function stopSwitchPolling() {
  stopProgressSimulation()
  if (switchPollInterval) {
    clearInterval(switchPollInterval)
    switchPollInterval = null
  }
}

function cancelEnvironmentSwitch() {
  showConfirmSwitch.value = false
  targetEnvironment.value = ''
  // If still in non-managed state, ensure wizard stays open with correct step
  if (setupStatus.value?.state && setupStatus.value.state !== 'managed') {
    // Update initial step based on current state (workspace may have been created)
    wizardInitialStep.value = setupStatus.value.state === 'no_workspace' ? 1 : 2
    showSetupWizard.value = true
  }
}

// Commit and Sync handlers
async function handleCommitSuccess() {
  showCommitModal.value = false
  await refresh()
  showToast('✓ Changes committed', 'success')
}

async function handleSyncConfirm() {
  showSyncModal.value = false
  const toastId = showToast('Syncing environment...', 'info', 0)

  try {
    const result = await syncEnvironmentManually('skip', true)

    removeToast(toastId)

    if (result.status === 'success') {
      const parts: string[] = []
      if (result.nodes_installed.length) {
        parts.push(`${result.nodes_installed.length} installed`)
      }
      if (result.nodes_removed.length) {
        parts.push(`${result.nodes_removed.length} removed`)
      }
      const summary = parts.length ? `: ${parts.join(', ')}` : ''
      showToast(`✓ Environment synced${summary}`, 'success')
      await refresh()
    } else {
      const errorMsg = result.errors.length
        ? result.errors.join('; ')
        : result.message
      showToast(`Sync failed: ${errorMsg}`, 'error')
    }
  } catch (err) {
    removeToast(toastId)
    showToast(`Sync error: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
  }
}

async function handleRepairMissingModels(workflowNames: string[]) {
  try {
    const result = await repairWorkflowModels(workflowNames)

    if (result.failed.length === 0) {
      showToast(`✓ Repaired ${result.success} workflow${result.success === 1 ? '' : 's'}`, 'success')
    } else {
      showToast(`Repaired ${result.success}, failed: ${result.failed.length}`, 'warning')
    }

    await refresh()
  } catch (err) {
    showToast(`Repair failed: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
  } finally {
    statusSectionRef.value?.resetRepairingState()
  }
}

async function handleRepairEnvironment() {
  const toastId = showToast('Repairing environment...', 'info', 0)

  try {
    const result = await syncEnvironmentManually('skip', true)

    removeToast(toastId)

    if (result.status === 'success') {
      const parts: string[] = []
      if (result.nodes_installed.length) {
        parts.push(`${result.nodes_installed.length} installed`)
      }
      if (result.nodes_removed.length) {
        parts.push(`${result.nodes_removed.length} removed`)
      }
      const summary = parts.length ? `: ${parts.join(', ')}` : ''
      showToast(`✓ Environment repaired${summary}`, 'success')
      statusSectionRef.value?.closeDetailModal()
      await refresh()
    } else {
      const errorMsg = result.errors.length
        ? result.errors.join(', ')
        : result.message || 'Unknown error'
      showToast(`Repair failed: ${errorMsg}`, 'error')
    }
  } catch (err) {
    removeToast(toastId)
    showToast(`Repair error: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
  } finally {
    statusSectionRef.value?.resetRepairingEnvironmentState()
  }
}

async function handleEnvironmentCreated(environmentName: string, switchAfter: boolean) {
  showToast(`Environment '${environmentName}' created`, 'success')

  // Refresh environments list
  await refresh()
  if (environmentsSectionRef.value) {
    await environmentsSectionRef.value.loadEnvironments()
  }

  // Switch if requested
  if (switchAfter) {
    await handleEnvironmentSwitch(environmentName)
  }
}

async function handleEnvironmentDelete(envName: string) {
  // Check if trying to delete current environment
  if (currentEnvironment.value?.name === envName) {
    showToast('Cannot delete the currently active environment. Switch to another environment first.', 'error')
    return
  }

  confirmDialog.value = {
    title: 'Delete Environment',
    message: `Are you sure you want to delete "${envName}"?`,
    warning: 'This will permanently delete the environment and all its data. This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    destructive: true,
    onConfirm: async () => {
      confirmDialog.value = null

      try {
        const result = await deleteEnvironment(envName)

        if (result.status === 'success') {
          showToast(`Environment "${envName}" deleted`, 'success')
          await refresh()
          if (environmentsSectionRef.value) {
            await environmentsSectionRef.value.loadEnvironments()
          }
        } else {
          showToast(result.message || 'Failed to delete environment', 'error')
        }
      } catch (err) {
        showToast(`Error deleting environment: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
      }
    }
  }
}

async function handleSetupComplete(environmentName: string) {
  showSetupWizard.value = false

  // Refresh setup status
  try {
    setupStatus.value = await getSetupStatus()
  } catch {
    // Ignore errors
  }

  // Trigger environment switch
  await handleEnvironmentSwitch(environmentName)
}

function handleSetupWizardClose() {
  // Close entire panel when wizard is closed without completing setup
  showSetupWizard.value = false
  emit('close')
}

async function handleEnvironmentSwitchFromWizard(envName: string) {
  // Use existing environment switch flow
  await handleEnvironmentSwitch(envName)
}

async function handleImportCompleteSwitch(environmentName: string) {
  // Refresh environments list first
  await refresh()

  // Trigger the standard environment switch flow
  await handleEnvironmentSwitch(environmentName)
}

async function handleEnvironmentCreatedNoSwitch(envName: string) {
  // Refresh setup status to get updated environments list
  setupStatus.value = await getSetupStatus()

  // Keep wizard open but now with the new environment in the list
  // The wizard will re-render with the updated existingEnvironments prop
  console.log(`Environment '${envName}' created. Available for switching.`)
}

function handleCreateEnvironmentFromStatus() {
  // Navigate to environments section and trigger create modal
  selectView('environments', 'all-envs')
  // Give time for section to mount, then open create modal
  setTimeout(() => {
    environmentsSectionRef.value?.openCreateModal()
  }, 100)
}

function getChangeDetails(): string[] {
  if (!status.value) return []
  const details: string[] = []
  const wf = status.value.workflows
  if (wf.new.length) details.push(`${wf.new.length} new workflow(s)`)
  if (wf.modified.length) details.push(`${wf.modified.length} modified workflow(s)`)
  if (wf.deleted.length) details.push(`${wf.deleted.length} deleted workflow(s)`)
  return details
}

onMounted(async () => {
  // Check setup status first
  try {
    setupStatus.value = await getSetupStatus()

    // Block panel for all non-managed states
    if (setupStatus.value.state === 'no_workspace') {
      showSetupWizard.value = true
      wizardInitialStep.value = 1
      return
    }

    if (setupStatus.value.state === 'empty_workspace') {
      showSetupWizard.value = true
      wizardInitialStep.value = 2  // Skip workspace creation
      return
    }

    if (setupStatus.value.state === 'unmanaged') {
      showSetupWizard.value = true
      wizardInitialStep.value = 2  // Skip workspace creation
      return
    }

    // Only 'managed' state reaches here
  } catch (err) {
    console.warn('Setup status check failed, proceeding normally:', err)
  }

  await refresh()
})
</script>

<style scoped>
.comfygit-panel {
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 100%;
  background: var(--cg-color-bg-primary);
  color: var(--cg-color-text-primary);
  border: 2px solid var(--cg-color-border);
  overflow: hidden;
  font-family: var(--cg-font-mono);
}

/* Header */
.panel-header {
  padding: var(--cg-space-3) var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--cg-color-bg-tertiary);
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.panel-title {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  margin: 0;
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.header-info {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--cg-font-size-xs);
}

.env-name {
  color: var(--cg-color-text-secondary);
}

.branch-name {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot.success { background: var(--cg-color-success); }
.status-dot.warning { background: var(--cg-color-warning); }
.status-dot.error { background: var(--cg-color-error); }
.status-dot.neutral { background: var(--cg-color-text-muted); }

.header-actions {
  display: flex;
  gap: 4px;
}

.icon-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-primary);
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
}

.icon-btn.spinning svg {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Sponsor button */
.sponsor-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-secondary);
  cursor: pointer;
  padding: 4px 8px;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  opacity: 0.7;
}

.sponsor-btn:hover {
  opacity: 1;
  border-color: #db61a2;
  color: #db61a2;
}

/* Social link icons - slightly muted until hover */
.icon-btn.social-link {
  opacity: 0.7;
}

.icon-btn.social-link:hover {
  opacity: 1;
}

/* Header divider between social links and panel controls */
.header-divider {
  width: 1px;
  height: 16px;
  background: var(--cg-color-border-subtle);
  margin: 0 4px;
  align-self: center;
}

/* Environment Switcher */
.env-switcher {
  padding: var(--cg-space-3) var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
  flex-shrink: 0;
}

.env-switcher-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.env-switcher-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.env-control-buttons {
  display: flex;
  gap: var(--cg-space-2);
}

.env-control-btn {
  padding: 2px 8px;
  font-family: var(--cg-font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  background: transparent;
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-muted);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.env-control-btn:hover {
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.env-control-btn.stop {
  border-color: var(--cg-color-error);
  color: var(--cg-color-error);
  opacity: 0.7;
}

.env-control-btn.stop:hover {
  opacity: 1;
}

.env-switcher-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  padding: 8px 12px;
  cursor: pointer;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.env-switcher-btn:hover {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
}

.switch-indicator {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

/* Main Content Area */
.panel-main {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Sidebar */
.sidebar {
  width: 234px;
  background: var(--cg-color-bg-tertiary);
  border-right: 1px solid var(--cg-color-border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
}

.sidebar-footer {
  padding: var(--cg-space-2) var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border-subtle);
  font-size: 10px;
  color: var(--cg-color-text-muted);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.sidebar-footer .version {
  opacity: 0.7;
}

.sidebar-footer .made-by {
  display: flex;
  align-items: center;
  gap: 2px;
}

.sidebar-footer .heart-icon {
  color: #db61a2;
}

.sidebar-section {
  padding: var(--cg-space-3) 0;
}

.sidebar-section-title {
  padding: 0 var(--cg-space-3);
  margin-bottom: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.sidebar-item {
  width: 100%;
  padding: 8px var(--cg-space-3);
  background: transparent;
  border: none;
  border-left: 2px solid transparent;
  color: var(--cg-color-text-secondary);
  text-align: left;
  cursor: pointer;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-normal);
}

.sidebar-item:hover {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-accent);
}

.sidebar-item.active {
  border-left-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
}

.sidebar-divider {
  height: 1px;
  background: var(--cg-color-border-subtle);
  margin: var(--cg-space-2) var(--cg-space-3);
}

/* Content Area */
.content-area {
  flex: 1;
  overflow-y: auto;
  padding: var(--cg-space-4);
}

.loading {
  text-align: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
}

.error-message {
  background: transparent;
  border: 1px solid var(--cg-color-error);
  padding: var(--cg-space-3);
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
}

.view-placeholder {
  padding: var(--cg-space-4);
}

.view-title {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-lg);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-4) 0;
}

.view-placeholder p {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-base);
}

/* Environment Selector Dialog */
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10003;
}

.dialog-content {
  background: var(--cg-color-bg-primary);
  border: 2px solid var(--cg-color-border);
  box-shadow: 0 0 16px rgba(0, 255, 65, 0.5);
  max-width: 780px;
  width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.env-selector-dialog {
  width: 780px;
}

.dialog-header {
  padding: var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  text-shadow: 0 0 8px var(--cg-color-accent);
  margin: 0;
}

.dialog-body {
  padding: var(--cg-space-4);
  overflow-y: auto;
}

.dialog-message {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  margin: 0 0 var(--cg-space-4) 0;
}

.env-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.env-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-3);
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
}

.env-item.current {
  border-color: var(--cg-color-accent);
}

.env-info {
  flex: 1;
}

.env-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.env-indicator {
  color: var(--cg-color-accent);
}

.env-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
}

.env-branch {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.current-label {
  margin-left: auto;
  padding: 2px 8px;
  background: transparent;
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.env-stats {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.switch-btn {
  padding: 6px 12px;
  background: transparent;
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
}

.switch-btn:hover {
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}

/* Toast Notifications */
.toast-container {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 10004;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
}

.toast {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.4);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-primary);
  pointer-events: auto;
  min-width: 234px;
  max-width: 390px;
  font-family: var(--cg-font-mono);
}

.toast.info { border-left: 3px solid var(--cg-color-info); }
.toast.success { border-left: 3px solid var(--cg-color-success); }
.toast.warning { border-left: 3px solid var(--cg-color-warning); }
.toast.error { border-left: 3px solid var(--cg-color-error); }

.toast-message {
  flex: 1;
}

/* Toast transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-move {
  transition: transform 0.3s ease;
}

/* Scrollbar */
.sidebar-content::-webkit-scrollbar,
.content-area::-webkit-scrollbar {
  width: 8px;
}

.sidebar-content::-webkit-scrollbar-track,
.content-area::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.sidebar-content::-webkit-scrollbar-thumb,
.content-area::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.sidebar-content::-webkit-scrollbar-thumb:hover,
.content-area::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
