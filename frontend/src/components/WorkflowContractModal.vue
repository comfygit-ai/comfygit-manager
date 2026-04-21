<template>
  <BaseModal
    :title="`WORKFLOW CONTRACT: ${workflowName}`"
    size="xl"
    :loading="loading"
    :error="error || undefined"
    fixed-height
    @close="emit('close')"
  >
    <template #body>
      <template v-if="form">
        <section class="contract-meta">
          <div class="contract-summary">
            <span class="summary-pill">{{ summaryLabel }}</span>
            <span class="summary-pill">{{ activeContract.inputs.length }} input{{ activeContract.inputs.length === 1 ? '' : 's' }}</span>
            <span class="summary-pill">{{ activeContract.outputs.length }} output{{ activeContract.outputs.length === 1 ? '' : 's' }}</span>
          </div>

          <div class="contract-meta-grid">
            <BaseFormField label="Default Contract">
              <BaseInput
                :model-value="form.default_contract"
                full-width
                @update:model-value="handleDefaultContractChange"
              />
            </BaseFormField>
            <BaseFormField label="Display Name">
              <BaseInput
                v-model="activeContract.display_name"
                full-width
              />
            </BaseFormField>
          </div>

          <BaseFormField label="Description">
            <BaseTextarea
              v-model="activeContract.description"
              :rows="2"
              placeholder="Optional description for this contract"
            />
          </BaseFormField>
        </section>

        <section class="contract-layout">
          <div class="contract-column">
            <div class="section-header">
              <BaseTitle variant="section">INPUTS</BaseTitle>
            </div>

            <div v-if="!activeContract.inputs.length" class="empty-message">
              No inputs configured.
            </div>

            <div
              v-for="(input, index) in activeContract.inputs"
              :key="`input-${index}`"
              class="item-card"
            >
              <div class="item-card-header">
                <div>
                  <div class="item-card-title">{{ input.name || `Input ${index + 1}` }}</div>
                  <div class="item-card-meta">
                    Node {{ input.node_id || '?' }}<template v-if="input.widget_idx !== undefined"> · Widget {{ input.widget_idx }}</template>
                  </div>
                </div>
                <BaseButton size="sm" variant="ghost" @click="removeInput(index)">
                  Remove
                </BaseButton>
              </div>

              <div class="item-grid">
                <BaseFormField label="Name">
                  <BaseInput v-model="input.name" full-width />
                </BaseFormField>
                <BaseFormField label="Display Name">
                  <BaseInput v-model="input.display_name" full-width />
                </BaseFormField>
                <BaseFormField label="Type">
                  <BaseSelect
                    :model-value="input.type"
                    :options="typeOptions"
                    full-width
                    @update:model-value="input.type = $event"
                  />
                </BaseFormField>
                <BaseFormField label="Required">
                  <BaseSelect
                    :model-value="input.required ? 'true' : 'false'"
                    :options="requiredOptions"
                    full-width
                    @update:model-value="input.required = $event === 'true'"
                  />
                </BaseFormField>
                <BaseFormField label="Default">
                  <BaseInput v-model="input.default" full-width />
                </BaseFormField>
              </div>
            </div>
          </div>

          <div class="contract-column">
            <div class="section-header">
              <BaseTitle variant="section">OUTPUTS</BaseTitle>
            </div>

            <div v-if="!activeContract.outputs.length" class="empty-message">
              No outputs configured.
            </div>

            <div
              v-for="(output, index) in activeContract.outputs"
              :key="`output-${index}`"
              class="item-card"
            >
              <div class="item-card-header">
                <div>
                  <div class="item-card-title">{{ output.name || `Output ${index + 1}` }}</div>
                  <div class="item-card-meta">
                    Node {{ output.node_id || '?' }}<template v-if="output.selector"> · {{ output.selector }}</template>
                  </div>
                </div>
                <BaseButton size="sm" variant="ghost" @click="removeOutput(index)">
                  Remove
                </BaseButton>
              </div>

              <div class="item-grid">
                <BaseFormField label="Name">
                  <BaseInput v-model="output.name" full-width />
                </BaseFormField>
                <BaseFormField label="Display Name">
                  <BaseInput v-model="output.display_name" full-width />
                </BaseFormField>
                <BaseFormField label="Type">
                  <BaseSelect
                    :model-value="output.type"
                    :options="typeOptions"
                    full-width
                    @update:model-value="output.type = $event"
                  />
                </BaseFormField>
              </div>
            </div>
          </div>
        </section>
      </template>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="openMappingMode">
        Open I/O Mapping Mode
      </BaseButton>
      <BaseButton variant="secondary" @click="emit('close')">
        Close
      </BaseButton>
      <BaseButton
        variant="danger"
        :disabled="!hasSavedContract"
        :loading="deleting"
        @click="handleDelete"
      >
        Delete Contract
      </BaseButton>
      <BaseButton
        variant="primary"
        :loading="saving"
        @click="handleSave"
      >
        Save Contract
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type {
  WorkflowContractInput,
  WorkflowContractOutput,
  WorkflowContractResponse,
  WorkflowExecutionContract,
  NamedWorkflowContract,
} from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import BaseInput from './base/BaseInput.vue'
import BaseSelect from './base/BaseSelect.vue'
import BaseTextarea from './base/BaseTextarea.vue'
import BaseTitle from './base/BaseTitle.vue'
import BaseFormField from './base/BaseFormField.vue'

const props = defineProps<{
  workflowName: string
}>()

const emit = defineEmits<{
  close: []
  refresh: []
}>()

const { getWorkflowContract, saveWorkflowContract, deleteWorkflowContract } = useComfyGitService()

const loading = ref(false)
const saving = ref(false)
const deleting = ref(false)
const error = ref<string | null>(null)
const response = ref<WorkflowContractResponse | null>(null)
const form = ref<WorkflowExecutionContract | null>(null)

const typeOptions = [
  'string',
  'integer',
  'number',
  'boolean',
  'enum',
  'image',
  'video',
  'audio',
  'file',
]

const requiredOptions = [
  { label: 'Required', value: 'true' },
  { label: 'Optional', value: 'false' },
]

const hasSavedContract = computed(() => response.value?.contract_summary.has_contract === true)

const activeContract = computed<NamedWorkflowContract>(() => {
  if (!form.value) {
    return { inputs: [], outputs: [] }
  }

  const name = form.value.default_contract || 'default'
  if (!form.value.contracts[name]) {
    form.value.contracts[name] = { inputs: [], outputs: [] }
  }
  return form.value.contracts[name]
})

const summaryLabel = computed(() => {
  const status = response.value?.contract_summary.status ?? 'none'
  if (status === 'valid') return 'Valid Contract'
  if (status === 'incomplete') return 'Incomplete Contract'
  return 'No Contract'
})

function cloneContract(contract: WorkflowExecutionContract | null | undefined): WorkflowExecutionContract {
  if (!contract) {
    return {
      version: 1,
      default_contract: 'default',
      contracts: {
        default: { inputs: [], outputs: [] },
      },
    }
  }
  return JSON.parse(JSON.stringify(contract))
}

function handleDefaultContractChange(value: string) {
  if (!form.value) return
  const next = value.trim() || 'default'
  form.value.default_contract = next
  if (!form.value.contracts[next]) {
    form.value.contracts[next] = { inputs: [], outputs: [] }
  }
}

function removeInput(index: number) {
  activeContract.value.inputs.splice(index, 1)
}

function removeOutput(index: number) {
  activeContract.value.outputs.splice(index, 1)
}

async function loadContract() {
  loading.value = true
  error.value = null
  try {
    response.value = await getWorkflowContract(props.workflowName)
    form.value = cloneContract(response.value.execution_contract)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workflow contract'
  } finally {
    loading.value = false
  }
}

async function handleSave() {
  if (!form.value) return
  saving.value = true
  error.value = null
  try {
    response.value = await saveWorkflowContract(props.workflowName, form.value)
    form.value = cloneContract(response.value.execution_contract)
    emit('refresh')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to save workflow contract'
  } finally {
    saving.value = false
  }
}

async function handleDelete() {
  deleting.value = true
  error.value = null
  try {
    await deleteWorkflowContract(props.workflowName)
    await loadContract()
    emit('refresh')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to delete workflow contract'
  } finally {
    deleting.value = false
  }
}

function openMappingMode() {
  window.dispatchEvent(new CustomEvent('comfygit:open-io-mapping', {
    detail: { workflowName: props.workflowName }
  }))
  window.dispatchEvent(new CustomEvent('comfygit:close-panel'))
  emit('close')
}

onMounted(loadContract)
</script>

<style scoped>
.contract-meta {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  margin-bottom: var(--cg-space-4);
}

.contract-summary {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
}

.summary-pill {
  padding: 4px 8px;
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.contract-meta-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--cg-space-4);
}

.contract-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--cg-space-4);
  align-items: start;
}

.contract-column {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
}

.item-card {
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
  padding: var(--cg-space-3);
}

.item-card {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.item-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
}

.item-card-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: 600;
}

.item-card-meta {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin-top: 2px;
}

.item-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--cg-space-3);
}

.empty-message {
  padding: var(--cg-space-4);
  border: 1px dashed var(--cg-color-border);
  color: var(--cg-color-text-muted);
  text-align: center;
}

@media (max-width: 1100px) {
  .contract-layout,
  .contract-meta-grid,
  .item-grid {
    grid-template-columns: 1fr;
  }
}
</style>
