<template>
  <div v-if="visible" class="io-mapping-root">
    <div class="io-mapping-header">
      <div class="io-mapping-header-main">
        <div class="io-mapping-title">I/O MAPPING MODE</div>
        <div class="io-mapping-subtitle">
          {{ workflowName }} · Click {{ selectionMode === 'inputs' ? 'input widgets' : 'output slots' }} on the graph to add them to the contract.
        </div>
      </div>

      <div class="io-mapping-header-actions">
        <BaseButton
          size="sm"
          :variant="selectionMode === 'inputs' ? 'primary' : 'secondary'"
          @click="selectionMode = 'inputs'"
        >
          Map Inputs
        </BaseButton>
        <BaseButton
          size="sm"
          :variant="selectionMode === 'outputs' ? 'primary' : 'secondary'"
          @click="selectionMode = 'outputs'"
        >
          Map Outputs
        </BaseButton>
        <BaseButton size="sm" variant="secondary" @click="closeOverlay({ reopenContract: true })">
          Exit
        </BaseButton>
      </div>
    </div>

    <aside class="io-mapping-sidebar">
      <div class="io-mapping-sidebar-scroll">
        <div v-if="loading" class="io-state-block">
          Loading workflow contract...
        </div>

        <div v-else-if="error" class="io-state-block io-state-error">
          {{ error }}
        </div>

        <template v-else-if="form">
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

          <section class="mapping-section">
            <div class="section-header">
              <BaseTitle variant="section">INPUTS</BaseTitle>
              <BaseButton size="sm" variant="secondary" @click="addBlankInput">
                Add Input
              </BaseButton>
            </div>

            <div v-if="!activeContract.inputs.length" class="empty-message">
              No inputs configured.
            </div>

            <div
              v-for="(input, index) in activeContract.inputs"
              :key="`input-${index}`"
              :class="['item-card', { selected: selectionMode === 'inputs' && selectedInputIndex === index }]"
              @click="selectedInputIndex = index"
            >
              <div class="item-card-header">
                <div>
                  <div class="item-card-title">{{ input.name || `Input ${index + 1}` }}</div>
                  <div class="item-card-meta">
                    Node {{ input.node_id || '?' }}<template v-if="input.widget_idx !== undefined"> · Widget {{ input.widget_idx }}</template>
                  </div>
                </div>
                <BaseButton size="sm" variant="ghost" @click.stop="removeInput(index)">
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
                <BaseFormField label="Node ID">
                  <BaseInput v-model="input.node_id" full-width />
                </BaseFormField>
                <BaseFormField label="Widget Index">
                  <BaseInput v-model="input.widget_idx" full-width />
                </BaseFormField>
                <BaseFormField label="Field Key">
                  <BaseInput v-model="input.field_key" full-width />
                </BaseFormField>
                <BaseFormField label="Default">
                  <BaseInput v-model="input.default" full-width />
                </BaseFormField>
              </div>
            </div>
          </section>

          <section class="mapping-section">
            <div class="section-header">
              <BaseTitle variant="section">OUTPUTS</BaseTitle>
              <BaseButton size="sm" variant="secondary" @click="addBlankOutput">
                Add Output
              </BaseButton>
            </div>

            <div v-if="!activeContract.outputs.length" class="empty-message">
              No outputs configured.
            </div>

            <div
              v-for="(output, index) in activeContract.outputs"
              :key="`output-${index}`"
              :class="['item-card', { selected: selectionMode === 'outputs' && selectedOutputIndex === index }]"
              @click="selectedOutputIndex = index"
            >
              <div class="item-card-header">
                <div>
                  <div class="item-card-title">{{ output.name || `Output ${index + 1}` }}</div>
                  <div class="item-card-meta">
                    Node {{ output.node_id || '?' }}<template v-if="output.selector"> · {{ output.selector }}</template>
                  </div>
                </div>
                <BaseButton size="sm" variant="ghost" @click.stop="removeOutput(index)">
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
                <BaseFormField label="Node ID">
                  <BaseInput v-model="output.node_id" full-width />
                </BaseFormField>
                <BaseFormField label="Selector">
                  <BaseInput v-model="output.selector" full-width />
                </BaseFormField>
              </div>
            </div>
          </section>
        </template>
      </div>

      <div class="io-mapping-footer">
        <BaseButton variant="secondary" @click="closeOverlay({ reopenContract: true })">
          Cancel
        </BaseButton>
        <BaseButton variant="primary" :loading="saving" @click="handleSave">
          Save Contract
        </BaseButton>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import BaseButton from './base/BaseButton.vue'
import BaseFormField from './base/BaseFormField.vue'
import BaseInput from './base/BaseInput.vue'
import BaseSelect from './base/BaseSelect.vue'
import BaseTextarea from './base/BaseTextarea.vue'
import BaseTitle from './base/BaseTitle.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { NamedWorkflowContract, WorkflowContractInput, WorkflowContractOutput, WorkflowContractResponse, WorkflowExecutionContract } from '@/types/comfygit'

const props = defineProps<{
  comfyApp: any
}>()

const { getWorkflowContract, saveWorkflowContract } = useComfyGitService()

const visible = ref(false)
const workflowName = ref('')
const loading = ref(false)
const saving = ref(false)
const error = ref<string | null>(null)
const response = ref<WorkflowContractResponse | null>(null)
const form = ref<WorkflowExecutionContract | null>(null)
const selectionMode = ref<'inputs' | 'outputs'>('inputs')
const selectedInputIndex = ref<number | null>(null)
const selectedOutputIndex = ref<number | null>(null)

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

function slugifyName(value: string, fallback: string): string {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
  return normalized || fallback
}

function normalizeType(value: unknown): string {
  const normalized = String(value ?? '').toLowerCase()
  if (normalized.includes('image')) return 'image'
  if (normalized.includes('video')) return 'video'
  if (normalized.includes('audio')) return 'audio'
  if (normalized.includes('int')) return 'integer'
  if (normalized.includes('float') || normalized.includes('double') || normalized.includes('number')) return 'number'
  if (normalized.includes('bool')) return 'boolean'
  if (normalized.includes('combo') || normalized.includes('enum')) return 'enum'
  if (normalized.includes('string') || normalized.includes('text')) return 'string'
  return 'file'
}

function addBlankInput() {
  activeContract.value.inputs.push({
    name: '',
    type: 'string',
    node_id: '',
    required: true,
    default: '',
  })
  selectedInputIndex.value = activeContract.value.inputs.length - 1
  selectionMode.value = 'inputs'
}

function addBlankOutput() {
  activeContract.value.outputs.push({
    name: '',
    type: 'image',
    node_id: '',
    selector: 'primary',
  })
  selectedOutputIndex.value = activeContract.value.outputs.length - 1
  selectionMode.value = 'outputs'
}

function removeInput(index: number) {
  activeContract.value.inputs.splice(index, 1)
  if (selectedInputIndex.value === index) {
    selectedInputIndex.value = null
  }
}

function removeOutput(index: number) {
  activeContract.value.outputs.splice(index, 1)
  if (selectedOutputIndex.value === index) {
    selectedOutputIndex.value = null
  }
}

function getCanvasElement(): HTMLCanvasElement | null {
  return props.comfyApp?.canvasEl || props.comfyApp?.canvas?.canvas || null
}

function eventTargetsOverlayChrome(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false
  return !!target.closest('.io-mapping-header, .io-mapping-sidebar')
}

function getNodeFromEventTarget(target: EventTarget | null): any | null {
  if (!(target instanceof Element)) return null
  const nodeEl = target.closest('[data-node-id]')
  const nodeId = nodeEl?.getAttribute('data-node-id')
  if (!nodeId) return null
  return props.comfyApp?.graph?.getNodeById?.(nodeId) ?? props.comfyApp?.rootGraph?.getNodeById?.(nodeId) ?? null
}

function addOrSelectInput(node: any, widget: any) {
  const widgetIndex = Array.isArray(node.widgets) ? node.widgets.indexOf(widget) : -1
  const index = activeContract.value.inputs.findIndex(input =>
    String(input.node_id) === String(node.id) &&
    input.widget_idx === widgetIndex,
  )

  if (index >= 0) {
    selectedInputIndex.value = index
    return
  }

  const fieldKey = typeof widget?.options?.property === 'string' ? widget.options.property : undefined
  const nameSource = widget?.name || fieldKey || 'input'

  const nextInput: WorkflowContractInput = {
    name: slugifyName(String(nameSource), `input_${activeContract.value.inputs.length + 1}`),
    display_name: String(widget?.name || fieldKey || `Input ${activeContract.value.inputs.length + 1}`),
    type: normalizeType(widget?.type),
    node_id: String(node.id),
    widget_idx: widgetIndex >= 0 ? widgetIndex : undefined,
    field_key: fieldKey,
    required: true,
    default: widget?.value ?? '',
  }

  activeContract.value.inputs.push(nextInput)
  selectedInputIndex.value = activeContract.value.inputs.length - 1
}

function addOrSelectOutput(node: any, output: any) {
  const outputIndex = Array.isArray(node.outputs) ? node.outputs.indexOf(output) : -1
  const selector = outputIndex >= 0 ? `slot:${outputIndex}` : 'primary'
  const index = activeContract.value.outputs.findIndex(existing =>
    String(existing.node_id) === String(node.id) &&
    (existing.selector || 'primary') === selector,
  )

  if (index >= 0) {
    selectedOutputIndex.value = index
    return
  }

  const nextOutput: WorkflowContractOutput = {
    name: slugifyName(String(output?.name || 'output'), `output_${activeContract.value.outputs.length + 1}`),
    display_name: String(output?.name || `Output ${activeContract.value.outputs.length + 1}`),
    type: normalizeType(output?.type),
    node_id: String(node.id),
    selector,
  }

  activeContract.value.outputs.push(nextOutput)
  selectedOutputIndex.value = activeContract.value.outputs.length - 1
}

function handleCanvasPointerDown(event: PointerEvent) {
  if (!visible.value || !form.value) return
  if (event.button !== 0) return
  if (eventTargetsOverlayChrome(event.target)) return

  const canvas = props.comfyApp?.canvas
  if (!canvas) return

  const graphPos = canvas.convertEventToCanvasOffset?.(event)
  if (!graphPos || graphPos.length < 2) return
  const [canvasX, canvasY] = graphPos

  const graph = canvas.graph || props.comfyApp?.graph || props.comfyApp?.rootGraph
  let node =
    graph?.getNodeOnPos?.(canvasX, canvasY, canvas.visible_nodes) ||
    canvas.getNodeOnPos?.(canvasX, canvasY) ||
    getNodeFromEventTarget(event.target)
  if (!node) return

  if (selectionMode.value === 'inputs') {
    const widget = node.getWidgetOnPos?.(canvasX, canvasY, true)
    if (!widget) return

    event.preventDefault()
    event.stopImmediatePropagation()
    event.stopPropagation()

    if (Array.isArray(canvas.graph_mouse)) {
      canvas.graph_mouse[0] = canvasX
      canvas.graph_mouse[1] = canvasY
    }
    canvas.selectNode?.(node, false)
    addOrSelectInput(node, widget)
    return
  }

  const output =
    node.getOutputOnPos?.([canvasX, canvasY]) ||
    (node.constructor?.nodeData?.output_node
      ? {
          name: node.title || node.type || 'output',
          type: 'image',
        }
      : null)
  if (!output) return

  event.preventDefault()
  event.stopImmediatePropagation()
  event.stopPropagation()

  if (Array.isArray(canvas.graph_mouse)) {
    canvas.graph_mouse[0] = canvasX
    canvas.graph_mouse[1] = canvasY
  }
  canvas.selectNode?.(node, false)
  addOrSelectOutput(node, output)
}

function attachCanvasListener() {
  document.addEventListener('pointerdown', handleCanvasPointerDown, true)
}

function detachCanvasListener() {
  document.removeEventListener('pointerdown', handleCanvasPointerDown, true)
}

async function loadContract() {
  if (!workflowName.value) return
  loading.value = true
  error.value = null
  try {
    response.value = await getWorkflowContract(workflowName.value)
    form.value = cloneContract(response.value.execution_contract)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workflow contract'
  } finally {
    loading.value = false
  }
}

async function handleSave() {
  if (!form.value || !workflowName.value) return
  saving.value = true
  error.value = null
  try {
    response.value = await saveWorkflowContract(workflowName.value, form.value)
    form.value = cloneContract(response.value.execution_contract)
    window.dispatchEvent(new CustomEvent('comfygit:workflow-contract-saved', {
      detail: { workflowName: workflowName.value }
    }))
    closeOverlay({ reopenContract: true })
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to save workflow contract'
  } finally {
    saving.value = false
  }
}

function reopenContractModal() {
  if (!workflowName.value) return
  window.dispatchEvent(new CustomEvent('comfygit:open-panel', {
    detail: { initialView: 'workflows' }
  }))
  window.setTimeout(() => {
    window.dispatchEvent(new CustomEvent('comfygit:open-workflow-contract', {
      detail: { workflowName: workflowName.value }
    }))
  }, 120)
}

function closeOverlay(options?: { reopenContract?: boolean }) {
  visible.value = false
  if (options?.reopenContract) {
    reopenContractModal()
  }
}

async function openOverlay(event: Event) {
  const customEvent = event as CustomEvent<{ workflowName?: string }>
  const nextWorkflow = customEvent.detail?.workflowName?.trim()
  if (!nextWorkflow) {
    return
  }

  workflowName.value = nextWorkflow
  selectionMode.value = 'inputs'
  selectedInputIndex.value = null
  selectedOutputIndex.value = null
  visible.value = true
  await loadContract()
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && visible.value) {
    closeOverlay({ reopenContract: true })
  }
}

watch(visible, (isVisible) => {
  if (isVisible) {
    attachCanvasListener()
  } else {
    detachCanvasListener()
  }
})

onMounted(() => {
  window.addEventListener('comfygit:open-io-mapping', openOverlay as EventListener)
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  detachCanvasListener()
  window.removeEventListener('comfygit:open-io-mapping', openOverlay as EventListener)
  window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.io-mapping-root {
  position: fixed;
  inset: 0;
  z-index: 10003;
  pointer-events: none;
}

.io-mapping-header {
  position: fixed;
  top: 16px;
  left: 16px;
  right: 440px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  border: 1px solid var(--cg-color-border);
  background: color-mix(in srgb, var(--cg-color-bg-primary) 92%, transparent);
  backdrop-filter: blur(10px);
  pointer-events: auto;
}

.io-mapping-header-main {
  min-width: 0;
}

.io-mapping-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: 600;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.io-mapping-subtitle {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  margin-top: 4px;
}

.io-mapping-header-actions {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.io-mapping-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 420px;
  max-width: min(420px, 92vw);
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--cg-color-border);
  background: color-mix(in srgb, var(--cg-color-bg-primary) 96%, transparent);
  backdrop-filter: blur(14px);
  pointer-events: auto;
}

.io-mapping-sidebar-scroll {
  flex: 1;
  overflow-y: auto;
  padding: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.io-mapping-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--cg-space-2);
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border);
}

.contract-meta,
.mapping-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
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
  gap: var(--cg-space-3);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
}

.item-card {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
  cursor: pointer;
}

.item-card.selected {
  border-color: var(--cg-color-accent);
  box-shadow: inset 0 0 0 1px var(--cg-color-accent);
}

.item-card-header {
  display: flex;
  align-items: flex-start;
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

.empty-message,
.io-state-block {
  padding: var(--cg-space-4);
  border: 1px dashed var(--cg-color-border);
  color: var(--cg-color-text-muted);
  text-align: center;
}

.io-state-error {
  border-color: var(--cg-color-danger);
  color: var(--cg-color-danger);
}

@media (max-width: 1100px) {
  .io-mapping-header {
    right: 16px;
  }

  .io-mapping-sidebar {
    width: min(420px, 100vw);
  }
}

@media (max-width: 820px) {
  .io-mapping-header {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
  }

  .io-mapping-sidebar {
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 100vw;
  }

  .contract-meta-grid,
  .item-grid {
    grid-template-columns: 1fr;
  }
}
</style>
