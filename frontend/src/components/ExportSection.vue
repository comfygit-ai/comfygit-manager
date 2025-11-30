<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="EXPORT ENVIRONMENT"
        :show-info="true"
        @info-click="showInfo = true"
      />
    </template>

    <template #content>
      <!-- Export Options -->
      <SectionGroup title="EXPORT OPTIONS">
        <div class="export-card">
          <div class="export-card-header">
            <span class="export-icon">📁</span>
            <div class="export-header-text">
              <div class="export-title">Output Destination</div>
              <div class="export-subtitle">Leave empty for default location, or specify a custom path</div>
            </div>
          </div>

          <div class="export-path-row">
            <TextInput
              v-model="outputPath"
              placeholder="Leave empty for default, or enter path like /mnt/c/Users/you/exports/"
              class="path-input"
            />
          </div>

          <div class="export-actions">
            <ActionButton
              variant="primary"
              size="md"
              :loading="isValidating || isExporting"
              :disabled="isValidating || isExporting"
              @click="handleExport"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 4L3 9h3v6h4V9h3L8 4z"/>
                <path d="M14 2H2v2h12V2z"/>
              </svg>
              {{ buttonLabel }}
            </ActionButton>
          </div>
        </div>
      </SectionGroup>

      <!-- Export Result -->
      <SectionGroup v-if="exportResult" title="LAST EXPORT">
        <ItemCard :status="exportResult.status === 'success' ? 'synced' : 'broken'">
          <template #icon>{{ exportResult.status === 'success' ? '✓' : '✕' }}</template>
          <template #title>
            {{ exportResult.status === 'success' ? 'Export Completed Successfully' : 'Export Failed' }}
          </template>
          <template #subtitle>
            {{ exportResult.status === 'success' ? 'Your environment has been exported' : exportResult.message }}
          </template>
          <template v-if="exportResult.status === 'success'" #details>
            <DetailRow label="Saved to:">
              <FilePath :path="exportResult.path || 'Unknown location'" />
            </DetailRow>
            <DetailRow
              v-if="exportResult.models_without_sources !== undefined"
              label="Models without sources:"
              :value="exportResult.models_without_sources.toString()"
            />
            <div v-if="exportResult.models_without_sources && exportResult.models_without_sources > 0" class="export-warning">
              <span class="warning-icon">!</span>
              <span class="warning-text">
                Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere.
              </span>
            </div>
          </template>
          <template v-if="exportResult.status === 'success'" #actions>
            <ActionButton
              variant="primary"
              size="sm"
              :loading="isDownloading"
              @click="handleDownload"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 12L3 7h3V1h4v6h3L8 12z"/>
                <path d="M14 14H2v2h12v-2z"/>
              </svg>
              Download
            </ActionButton>
            <ActionButton variant="secondary" size="sm" @click="copyExportPath">
              Copy Path
            </ActionButton>
            <ActionButton variant="ghost" size="sm" @click="exportResult = null">
              Dismiss
            </ActionButton>
          </template>
        </ItemCard>
      </SectionGroup>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showInfo"
    title="What Gets Exported"
    @close="showInfo = false"
  >
    <template #content>
      <div class="export-info">
        <div class="info-section">
          <strong>Included in Export:</strong>
          <ul>
            <li><strong>Workflows</strong> — All workflows in this environment</li>
            <li><strong>Custom Nodes</strong> — Node definitions and dependencies</li>
            <li><strong>Models</strong> — References and source URLs (not the files)</li>
            <li><strong>Configuration</strong> — Environment settings and metadata</li>
          </ul>
        </div>
        <div class="info-section">
          <strong>Use Cases:</strong>
          <ul>
            <li>Share environments with collaborators</li>
            <li>Back up your setup for safekeeping</li>
            <li>Import into other ComfyGit workspaces</li>
          </ul>
        </div>
        <p class="info-note">
          <strong>Note:</strong> Model files are not included to keep exports small. Models can be re-downloaded on import using their source information.
        </p>
      </div>
    </template>
  </InfoPopover>

  <!-- Export Blocked Modal -->
  <ExportBlockedModal
    v-if="showBlockedModal && validationResult"
    :issues="validationResult.blocking_issues"
    @close="showBlockedModal = false"
  />

  <!-- Export Warnings Modal -->
  <ExportWarningsModal
    v-if="showWarningsModal && validationResult"
    :models="validationResult.warnings.models_without_sources"
    @confirm="handleExportConfirmed"
    @cancel="showWarningsModal = false"
    @revalidate="handleRevalidate"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ExportResult, ExportValidationResult } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ItemCard from '@/components/base/molecules/ItemCard.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import TextInput from '@/components/base/atoms/TextInput.vue'
import FilePath from '@/components/base/atoms/FilePath.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import ExportBlockedModal from '@/components/ExportBlockedModal.vue'
import ExportWarningsModal from '@/components/ExportWarningsModal.vue'

const { validateExport, exportEnvWithForce } = useComfyGitService()

const outputPath = ref('')
const isValidating = ref(false)
const isExporting = ref(false)
const isDownloading = ref(false)
const exportResult = ref<ExportResult | null>(null)
const showInfo = ref(false)

// Validation state
const validationResult = ref<ExportValidationResult | null>(null)
const showBlockedModal = ref(false)
const showWarningsModal = ref(false)

const buttonLabel = computed(() => {
  if (isValidating.value) return 'Validating...'
  if (isExporting.value) return 'Exporting...'
  return 'Export Environment'
})

async function handleExport() {
  isValidating.value = true
  exportResult.value = null

  try {
    const result = await validateExport()
    validationResult.value = result

    if (!result.can_export) {
      // Show blocking issues modal
      showBlockedModal.value = true
    } else if (result.warnings.models_without_sources.length > 0) {
      // Show warnings modal for confirmation
      showWarningsModal.value = true
    } else {
      // No issues, proceed directly
      await executeExport()
    }
  } catch (err) {
    exportResult.value = {
      status: 'error',
      message: err instanceof Error ? err.message : 'Validation failed'
    }
  } finally {
    isValidating.value = false
  }
}

async function handleExportConfirmed() {
  showWarningsModal.value = false
  await executeExport()
}

async function handleRevalidate() {
  try {
    const result = await validateExport()
    validationResult.value = result
  } catch (err) {
    console.error('Re-validation failed:', err)
  }
}

async function executeExport() {
  isExporting.value = true

  try {
    const result = await exportEnvWithForce(outputPath.value || undefined)
    exportResult.value = result
  } catch (err) {
    exportResult.value = {
      status: 'error',
      message: err instanceof Error ? err.message : 'Export failed'
    }
  } finally {
    isExporting.value = false
  }
}

async function copyExportPath() {
  if (exportResult.value?.path) {
    try {
      await navigator.clipboard.writeText(exportResult.value.path)
    } catch (err) {
      console.error('Failed to copy path:', err)
    }
  }
}

async function handleDownload() {
  if (!exportResult.value?.path) return

  isDownloading.value = true
  try {
    // Fetch the file from the server
    const response = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(exportResult.value.path)}`)

    if (!response.ok) {
      throw new Error(`Download failed: ${response.statusText}`)
    }

    // Get the blob and create a download link
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)

    // Extract filename from path
    const filename = exportResult.value.path.split('/').pop() || 'environment-export.tar.gz'

    // Create temporary link and trigger download
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Clean up the blob URL
    URL.revokeObjectURL(url)
  } catch (err) {
    console.error('Failed to download:', err)
    alert(`Download failed: ${err instanceof Error ? err.message : 'Unknown error'}`)
  } finally {
    isDownloading.value = false
  }
}
</script>

<style scoped>
/* Export Card */
.export-card {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.export-card-header {
  display: flex;
  gap: var(--cg-space-3);
  align-items: flex-start;
}

.export-icon {
  font-size: var(--cg-font-size-xl);
}

.export-header-text {
  flex: 1;
}

.export-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
}

.export-subtitle {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin-top: var(--cg-space-1);
}

.export-path-row {
  display: flex;
  gap: var(--cg-space-2);
  align-items: center;
}

.export-path-row .path-input {
  flex: 1;
}

.export-actions {
  display: flex;
  gap: var(--cg-space-3);
  align-items: center;
  padding-top: var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border-subtle);
}

/* Export Result Warning */
.export-warning {
  display: flex;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  margin-top: var(--cg-space-2);
}

.warning-icon {
  color: var(--cg-color-warning);
  font-weight: var(--cg-font-weight-bold);
  flex-shrink: 0;
}

.warning-text {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  line-height: 1.4;
}

/* Info Popover Content */
.export-info {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.info-section strong {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.info-section ul {
  margin: var(--cg-space-2) 0 0 0;
  padding-left: var(--cg-space-4);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  line-height: 1.6;
}

.info-section li {
  margin-bottom: var(--cg-space-1);
}

.info-section li strong {
  font-size: var(--cg-font-size-xs);
}

.info-note {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin: 0;
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border-left: 2px solid var(--cg-color-warning);
}
</style>
