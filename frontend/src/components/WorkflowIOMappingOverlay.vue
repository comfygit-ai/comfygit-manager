<template>
  <div v-if="visible" class="io-mapping-root">
    <div class="io-mapping-visual-layer">
      <div
        v-for="overlay in inputOverlays"
        :key="overlay.key"
        :class="['io-highlight', 'io-highlight-input', { active: overlay.active }]"
        :style="overlay.style"
      />
      <div
        v-for="overlay in outputOverlays"
        :key="overlay.key"
        :class="['io-highlight', 'io-highlight-output', { active: overlay.active }]"
        :style="overlay.style"
      />
      <div
        v-if="hoverOverlay"
        :class="['io-highlight', hoverOverlay.kind === 'input' ? 'io-highlight-hover-input' : 'io-highlight-hover-output']"
        :style="hoverOverlay.style"
      />
    </div>

    <div class="io-mapping-header">
      <div class="io-mapping-header-main">
        <div class="io-mapping-title">I/O MAPPING MODE</div>
        <div class="io-mapping-subtitle">
          {{ workflowName }} · Hover any input widget or output target on the graph, then click to add it to the contract.
        </div>
        <div v-if="hoverSummary" class="io-mapping-hover-summary">
          Hovering {{ hoverSummary.kind }}: {{ hoverSummary.label }}
        </div>
      </div>

      <div class="io-mapping-header-actions">
        <BaseButton size="sm" variant="secondary" @click="closeOverlay({ reopenPanel: true })">
          Exit
        </BaseButton>
      </div>
    </div>

    <aside class="io-mapping-sidebar">
      <div v-if="saveToast" :class="['io-save-toast', saveToast.type]">
        <span class="io-save-toast-icon">{{ saveToast.type === 'success' ? '✓' : '!' }}</span>
        <span>{{ saveToast.message }}</span>
      </div>

      <div class="io-mapping-sidebar-scroll">
        <div v-if="loading" class="io-state-block">
          Loading workflow contract...
        </div>

        <div v-else-if="error" class="io-state-block io-state-error">
          {{ error }}
        </div>

        <template v-else-if="form">
          <section class="contract-meta-section">
            <button
              class="contract-meta-toggle"
              type="button"
              @click="metadataExpanded = !metadataExpanded"
            >
              <span>Contract Details</span>
              <span class="contract-meta-toggle-icon">{{ metadataExpanded ? '▾' : '▸' }}</span>
            </button>

            <div v-if="metadataExpanded" class="contract-meta-body">
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

              <BaseFormField label="Description">
                <BaseTextarea
                  v-model="activeContract.description"
                  :rows="2"
                  placeholder="Optional description for this contract"
                />
              </BaseFormField>
            </div>
          </section>

          <section class="contract-summary">
            <span class="summary-pill">{{ summaryLabel }}</span>
            <span class="summary-pill">{{ activeContract.inputs.length }} input{{ activeContract.inputs.length === 1 ? '' : 's' }}</span>
            <span class="summary-pill">{{ activeContract.outputs.length }} output{{ activeContract.outputs.length === 1 ? '' : 's' }}</span>
          </section>

          <section class="mapping-section">
            <div class="section-header">
              <BaseTitle variant="section">INPUTS</BaseTitle>
            </div>

            <div v-if="!activeContract.inputs.length" class="empty-message">
              No inputs configured.
            </div>

            <div
              v-for="(input, index) in activeContract.inputs"
              :key="getInputCardKey(input, index)"
              :class="[
                'item-card',
                {
                  selected: selectedInputIndex === index,
                  dragging: isDraggingItem('input', index),
                  'drop-before': isDropTarget('input', index, 'before'),
                  'drop-after': isDropTarget('input', index, 'after'),
                }
              ]"
              @dragenter.prevent="handleItemDragOver('input', index, $event)"
              @dragover.prevent="handleItemDragOver('input', index, $event)"
              @drop.prevent="handleItemDrop('input', index, $event)"
            >
              <div class="item-card-header item-card-header-toggle" @click="toggleSelectedInput(index)">
                <button
                  class="item-drag-handle"
                  type="button"
                  draggable="true"
                  :aria-label="`Reorder input ${input.name || index + 1}`"
                  title="Drag to reorder"
                  @click.stop
                  @dragstart.stop="startItemDrag('input', index, $event)"
                  @dragend="endItemDrag"
                >
                  <span v-for="dot in 6" :key="dot" />
                </button>

                <div class="item-card-main">
                  <div class="item-card-title">{{ input.name || `Input ${index + 1}` }}</div>
                  <div class="item-card-meta">
                    Node {{ input.node_id || '?' }}<template v-if="input.widget_idx !== undefined"> · Widget {{ input.widget_idx }}</template>
                  </div>
                  <div class="item-card-summary">
                    <span>{{ input.type || 'string' }}</span>
                    <span>{{ input.required ? 'required' : 'optional' }}</span>
                    <span v-if="input.default !== undefined && input.default !== ''">default {{ formatValuePreview(input.default) }}</span>
                  </div>
                </div>
                <BaseButton size="sm" variant="ghost" @click.stop="removeInput(index)">
                  Remove
                </BaseButton>
              </div>

              <div v-if="selectedInputIndex === index" class="item-grid" @click.stop>
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
                    @update:model-value="setInputType(input, $event)"
                  />
                </BaseFormField>
                <BaseFormField v-if="input.type === 'string'" label="Text Control">
                  <BaseSelect
                    :model-value="input.ui_control || 'textarea'"
                    :options="textControlOptions"
                    full-width
                    @update:model-value="setInputTextControl(input, $event)"
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
                <BaseFormField :class="{ 'item-grid-full': input.type === 'string' || input.type === 'enum' }" label="Default">
                  <BaseTextarea
                    v-if="input.type === 'string'"
                    :model-value="formatTextareaValue(input.default)"
                    :rows="3"
                    placeholder="Default string value"
                    @update:model-value="input.default = $event"
                  />
                  <BaseInput v-else v-model="input.default" full-width />
                </BaseFormField>
                <BaseFormField v-if="isNumericType(input.type)" label="Min">
                  <BaseInput
                    :model-value="formatOptionalNumber(input.min)"
                    full-width
                    @update:model-value="input.min = parseOptionalNumber($event)"
                  />
                </BaseFormField>
                <BaseFormField v-if="isNumericType(input.type)" label="Max">
                  <BaseInput
                    :model-value="formatOptionalNumber(input.max)"
                    full-width
                    @update:model-value="input.max = parseOptionalNumber($event)"
                  />
                </BaseFormField>
                <BaseFormField v-if="isNumericType(input.type)" label="Step">
                  <BaseInput
                    :model-value="formatOptionalNumber(input.step)"
                    :placeholder="formatOptionalNumber(defaultNumericStep(input.type))"
                    full-width
                    @update:model-value="input.step = parseOptionalPositiveNumber($event)"
                  />
                </BaseFormField>
                <BaseFormField v-if="isEnumType(input.type)" class="item-grid-full" label="Enum Values">
                  <BaseTextarea
                    :model-value="formatEnumValues(input.enum_values)"
                    :rows="4"
                    placeholder="One or more values, separated by commas or new lines"
                    @update:model-value="input.enum_values = parseEnumValues($event)"
                  />
                </BaseFormField>
              </div>
            </div>
          </section>

          <section class="mapping-section">
            <div class="section-header">
              <BaseTitle variant="section">OUTPUTS</BaseTitle>
            </div>

            <div v-if="!activeContract.outputs.length" class="empty-message">
              No outputs configured.
            </div>

            <div
              v-for="(output, index) in activeContract.outputs"
              :key="getOutputCardKey(output, index)"
              :class="[
                'item-card',
                {
                  selected: selectedOutputIndex === index,
                  dragging: isDraggingItem('output', index),
                  'drop-before': isDropTarget('output', index, 'before'),
                  'drop-after': isDropTarget('output', index, 'after'),
                }
              ]"
              @dragenter.prevent="handleItemDragOver('output', index, $event)"
              @dragover.prevent="handleItemDragOver('output', index, $event)"
              @drop.prevent="handleItemDrop('output', index, $event)"
            >
              <div class="item-card-header item-card-header-toggle" @click="toggleSelectedOutput(index)">
                <button
                  class="item-drag-handle"
                  type="button"
                  draggable="true"
                  :aria-label="`Reorder output ${output.name || index + 1}`"
                  title="Drag to reorder"
                  @click.stop
                  @dragstart.stop="startItemDrag('output', index, $event)"
                  @dragend="endItemDrag"
                >
                  <span v-for="dot in 6" :key="dot" />
                </button>

                <div class="item-card-main">
                  <div class="item-card-title">{{ output.name || `Output ${index + 1}` }}</div>
                  <div class="item-card-meta">
                    Node {{ output.node_id || '?' }}<template v-if="output.selector"> · {{ output.selector }}</template>
                  </div>
                  <div class="item-card-summary">
                    <span>{{ output.type || 'file' }}</span>
                  </div>
                </div>
                <BaseButton size="sm" variant="ghost" @click.stop="removeOutput(index)">
                  Remove
                </BaseButton>
              </div>

              <div v-if="selectedOutputIndex === index" class="item-grid" @click.stop>
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
          </section>
        </template>
      </div>

      <div class="io-mapping-footer">
        <div class="io-mapping-footer-left">
          <BaseButton variant="secondary" @click="closeOverlay({ reopenPanel: true })">
            Cancel
          </BaseButton>
        </div>
        <div class="io-mapping-footer-right">
          <BaseButton
            variant="danger"
            :disabled="!hasSavedContract"
            :loading="deleting"
            @click="handleDelete"
          >
            Delete
          </BaseButton>
          <BaseButton variant="primary" :loading="saving" @click="handleSave">
            Save
          </BaseButton>
        </div>
      </div>
    </aside>

    <ConfirmDialog
      v-if="showDeleteConfirm"
      title="Delete Workflow Contract"
      :message="`Delete the contract for ${workflowName}?`"
      warning="This removes the saved input/output contract for this workflow. The workflow itself will not be deleted."
      confirm-label="Delete"
      cancel-label="Cancel"
      :destructive="true"
      @confirm="confirmDelete"
      @cancel="showDeleteConfirm = false"
    />
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
import ConfirmDialog from './ConfirmDialog.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { NamedWorkflowContract, WorkflowContractInput, WorkflowContractOutput, WorkflowContractResponse, WorkflowExecutionContract } from '@/types/comfygit'

const props = defineProps<{
  comfyApp: any
}>()

const { getWorkflowContract, saveWorkflowContract, deleteWorkflowContract } = useComfyGitService()

const visible = ref(false)
const workflowName = ref('')
const loading = ref(false)
const saving = ref(false)
const deleting = ref(false)
const error = ref<string | null>(null)
const response = ref<WorkflowContractResponse | null>(null)
const form = ref<WorkflowExecutionContract | null>(null)
const metadataExpanded = ref(false)
const showDeleteConfirm = ref(false)
const selectedInputIndex = ref<number | null>(null)
const selectedOutputIndex = ref<number | null>(null)
const overlayTick = ref(0)
const hoverSummary = ref<{ kind: 'input' | 'output'; label: string } | null>(null)
const hoverOverlay = ref<{ kind: 'input' | 'output'; style: Record<string, string> } | null>(null)
const saveToast = ref<{ message: string; type: 'success' | 'error' } | null>(null)
let saveToastTimeout: ReturnType<typeof setTimeout> | null = null
let overlayFrame: number | null = null

type MappingItemKind = 'input' | 'output'
type DropPosition = 'before' | 'after'

const draggingItem = ref<{ kind: MappingItemKind; index: number } | null>(null)
const dropTarget = ref<{ kind: MappingItemKind; index: number; position: DropPosition } | null>(null)

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

const textControlOptions = [
  { label: 'Multiline text', value: 'textarea' },
  { label: 'Text field', value: 'input' },
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

function extractApiPromptPayload(graphToPromptResult: unknown): Record<string, unknown> {
  if (!graphToPromptResult || typeof graphToPromptResult !== 'object') {
    throw new Error('ComfyUI API export returned an invalid payload')
  }

  const payload = graphToPromptResult as Record<string, unknown>
  const output = payload.output
  if (output && typeof output === 'object' && !Array.isArray(output)) {
    return output as Record<string, unknown>
  }

  const prompt = payload.prompt
  if (prompt && typeof prompt === 'object' && !Array.isArray(prompt)) {
    return prompt as Record<string, unknown>
  }

  return payload
}

async function captureCurrentApiPrompt(): Promise<Record<string, unknown>> {
  const comfyApp = props.comfyApp
  if (typeof comfyApp?.graphToPrompt !== 'function') {
    throw new Error('ComfyUI graphToPrompt is not available')
  }

  const graph = comfyApp.rootGraph ?? comfyApp.graph
  const result = await comfyApp.graphToPrompt(graph)
  return extractApiPromptPayload(result)
}

function isSubgraphNode(node: any): boolean {
  return typeof node?.isSubgraphNode === 'function' && node.isSubgraphNode()
}

function getSubgraphApiNodeId(subgraphNode: any, sourceNodeId: string | number): string {
  if (typeof subgraphNode?.getInnerNodes === 'function') {
    try {
      const nodesByExecutionId = new Map<string, any>()
      const innerNodes = subgraphNode.getInnerNodes(nodesByExecutionId, [])
      for (const entry of innerNodes ?? []) {
        if (String(entry?.node?.id) === String(sourceNodeId) && entry?.id != null) {
          return String(entry.id)
        }
      }
      for (const [executionId, entry] of nodesByExecutionId.entries()) {
        if (String(entry?.node?.id) === String(sourceNodeId)) {
          return String(executionId)
        }
      }
    } catch (err) {
      console.warn('[ComfyGit] Failed to resolve subgraph API node id', err)
    }
  }

  return `${subgraphNode.id}:${sourceNodeId}`
}

function resolveInputApiBinding(node: any, widget: any | null, fieldKey: string | undefined) {
  if (!node || !fieldKey) return {}

  const sourceNodeId = widget?.sourceNodeId
  const sourceWidgetName = widget?.sourceWidgetName
  if (
    isSubgraphNode(node) &&
    sourceNodeId != null &&
    typeof sourceWidgetName === 'string' &&
    sourceWidgetName.length > 0
  ) {
    return {
      api_node_id: getSubgraphApiNodeId(node, sourceNodeId),
      api_field_key: sourceWidgetName,
    }
  }

  return {
    api_node_id: String(node.id),
    api_field_key: fieldKey,
  }
}

function asNonEmptyString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  return trimmed || undefined
}

function isGeneratedWidgetName(value: unknown): boolean {
  const text = asNonEmptyString(value)
  return !!text && /^(value|input)_\d+$/i.test(text)
}

function getWidgetFieldKey(widget: any | null): string | undefined {
  return asNonEmptyString(widget?.options?.property) ?? asNonEmptyString(widget?.name)
}

function firstHumanWidgetLabel(...values: unknown[]): string | undefined {
  for (const value of values) {
    const text = asNonEmptyString(value)
    if (text && !isGeneratedWidgetName(text)) {
      return text
    }
  }
  return undefined
}

function getWidgetDisplayLabel(widget: any | null, fieldKey: string | undefined, fallback: string): string {
  return firstHumanWidgetLabel(
    widget?.label,
    widget?.options?.label,
    widget?.input?.label,
    widget?.localized_name,
    widget?.display_name,
    widget?.displayName,
    widget?.options?.localized_name,
    widget?.options?.display_name,
    widget?.options?.displayName,
    widget?.input?.localized_name,
    widget?.input?.display_name,
    widget?.input?.displayName,
    widget?.sourceWidgetName,
    widget?.name,
    fieldKey,
  ) ?? fallback
}

function hydrateApiBindings(contract: WorkflowExecutionContract) {
  const graph = props.comfyApp?.rootGraph ?? props.comfyApp?.graph
  for (const namedContract of Object.values(contract.contracts)) {
    for (const input of namedContract.inputs) {
      const node = graph?.getNodeById?.(String(input.node_id))
      const mediaLoader = getMediaLoaderDescriptor(node)
      if (
        mediaLoader &&
        input.type === mediaLoader.type &&
        (!input.field_key || input.field_key === mediaLoader.fieldKey || input.api_field_key === mediaLoader.fieldKey)
      ) {
        input.field_key = mediaLoader.fieldKey
        input.api_node_id = String(node.id)
        input.api_field_key = mediaLoader.apiFieldKey
        continue
      }

      if (input.widget_idx == null) continue
      const widget = Array.isArray(node?.widgets) ? node.widgets[input.widget_idx] : null
      const fieldKey = input.field_key || getWidgetFieldKey(widget)
      if (fieldKey) {
        input.field_key = fieldKey
      }
      const apiBinding = resolveInputApiBinding(node, widget, fieldKey)
      if (apiBinding.api_node_id) input.api_node_id = apiBinding.api_node_id
      if (apiBinding.api_field_key) input.api_field_key = apiBinding.api_field_key
    }
  }
}

function isNumericType(type: string | undefined): boolean {
  return type === 'integer' || type === 'number'
}

function isEnumType(type: string | undefined): boolean {
  return type === 'enum'
}

function formatOptionalNumber(value: number | undefined): string {
  return value == null ? '' : String(value)
}

function parseOptionalNumber(value: string): number | undefined {
  const trimmed = value.trim()
  if (!trimmed) return undefined
  const parsed = Number(trimmed)
  return Number.isFinite(parsed) ? parsed : undefined
}

function parseOptionalPositiveNumber(value: string): number | undefined {
  const parsed = parseOptionalNumber(value)
  return parsed != null && parsed > 0 ? parsed : undefined
}

function formatEnumValues(values: string[] | undefined): string {
  return (values || []).join('\n')
}

function parseEnumValues(value: string): string[] {
  return value
    .split(/[\n,]/)
    .map(part => part.trim())
    .filter(Boolean)
}

function formatValuePreview(value: unknown): string {
  if (typeof value === 'string') return value.length > 24 ? `${value.slice(0, 24)}...` : value
  return String(value)
}

function formatTextareaValue(value: unknown): string {
  if (value == null) return ''
  return String(value)
}

function setInputType(input: WorkflowContractInput, value: string) {
  input.type = value
  if (value === 'string') {
    input.ui_control = input.ui_control || 'textarea'
  } else {
    delete input.ui_control
  }
}

function setInputTextControl(input: WorkflowContractInput, value: string) {
  input.ui_control = value === 'input' ? 'input' : 'textarea'
}

function normalizeInputUiControls(contract: WorkflowExecutionContract) {
  for (const namedContract of Object.values(contract.contracts)) {
    for (const input of namedContract.inputs) {
      if (input.type === 'string') {
        input.ui_control = input.ui_control || 'textarea'
      } else {
        delete input.ui_control
      }
    }
  }
}

function inferWidgetEnumValues(widget: any): string[] {
  const rawValues = widget?.options?.values
  if (!Array.isArray(rawValues)) return []
  return rawValues.map((value: unknown) => String(value)).filter(Boolean)
}

const UNBOUNDED_NUMERIC_BOUND_ABS = 1_000_000_000_000_000
const DEFAULT_INTEGER_STEP = 1
const DEFAULT_NUMBER_STEP = 0.01

function readNestedValue(source: any, path: string[]): unknown {
  let current = source
  for (const segment of path) {
    if (current == null || typeof current !== 'object') return undefined
    current = current[segment]
  }
  return current
}

function firstPresentWidgetValue(widget: any, paths: string[][]): unknown {
  for (const path of paths) {
    const value = readNestedValue(widget, path)
    if (value != null && value !== '') return value
  }
  return undefined
}

function inferWidgetNumericBound(widget: any, key: 'min' | 'max'): number | undefined {
  const paths = [
    ['options', key],
    ['input', key],
    [key],
  ]
  for (const path of paths) {
    const value = readNestedValue(widget, path)
    if (value == null || value === '') continue
    const parsed = Number(value)
    if (!Number.isFinite(parsed)) continue
    if (Math.abs(parsed) >= UNBOUNDED_NUMERIC_BOUND_ABS) continue
    return parsed
  }
  return undefined
}

function parsePositiveNumericMetadata(value: unknown): number | undefined {
  const parsed = Number(value)
  if (!Number.isFinite(parsed) || parsed <= 0) return undefined
  if (Math.abs(parsed) >= UNBOUNDED_NUMERIC_BOUND_ABS) return undefined
  return parsed
}

function inferWidgetNumericStep(widget: any, inputType: string | undefined): number | undefined {
  const ignoreWeakRuntimeStep = inputType === 'integer'
  const paths = [
    { path: ['input', 'step'], strong: true },
    { path: ['input', 'widget', 'step'], strong: true },
    { path: ['step'], strong: false },
    { path: ['options', 'step'], strong: false },
  ]
  for (const { path, strong } of paths) {
    if (ignoreWeakRuntimeStep && !strong) continue
    const parsed = parsePositiveNumericMetadata(readNestedValue(widget, path))
    if (parsed != null) return parsed
  }
  return undefined
}

function slugifyName(value: string, fallback: string): string {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
  return normalized || fallback
}

function handleDefaultContractChange(value: string) {
  if (!form.value) return
  const next = value.trim() || 'default'
  form.value.default_contract = next
  if (!form.value.contracts[next]) {
    form.value.contracts[next] = { inputs: [], outputs: [] }
  }
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

function defaultNumericStep(type: string | undefined): number {
  return type === 'integer' ? DEFAULT_INTEGER_STEP : DEFAULT_NUMBER_STEP
}

function normalizeWidgetType(widget: any): string {
  const explicitType = firstPresentWidgetValue(widget, [
    ['input', 'type'],
    ['input', 'widget', 'type'],
    ['options', 'type'],
    ['options', 'inputType'],
    ['type'],
  ])
  const normalized = normalizeType(explicitType)
  if (normalized !== 'number') return normalized

  const explicitTypeText = String(explicitType ?? '').toLowerCase()
  if (
    explicitTypeText.includes('float') ||
    explicitTypeText.includes('double') ||
    explicitTypeText.includes('decimal')
  ) {
    return 'number'
  }

  const precision = firstPresentWidgetValue(widget, [
    ['options', 'precision'],
    ['input', 'precision'],
    ['precision'],
  ])
  if (precision != null && Number(precision) === 0) {
    return 'integer'
  }

  return normalized
}

function getInputCardKey(input: WorkflowContractInput, index: number): string {
  return `input-${input.node_id || index}-${input.widget_idx ?? 'na'}`
}

function getOutputCardKey(output: WorkflowContractOutput, index: number): string {
  return `output-${output.node_id || index}-${output.selector || 'primary'}`
}

function clearDragState() {
  draggingItem.value = null
  dropTarget.value = null
}

function isDraggingItem(kind: MappingItemKind, index: number): boolean {
  return draggingItem.value?.kind === kind && draggingItem.value.index === index
}

function isDropTarget(kind: MappingItemKind, index: number, position: DropPosition): boolean {
  return dropTarget.value?.kind === kind &&
    dropTarget.value.index === index &&
    dropTarget.value.position === position
}

function startItemDrag(kind: MappingItemKind, index: number, event: DragEvent) {
  draggingItem.value = { kind, index }
  dropTarget.value = null
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.setData('text/plain', `${kind}:${index}`)
  }
}

function getDropPosition(event: DragEvent): DropPosition {
  const target = event.currentTarget
  if (!(target instanceof HTMLElement)) return 'after'
  const rect = target.getBoundingClientRect()
  return event.clientY < rect.top + rect.height / 2 ? 'before' : 'after'
}

function normalizeDropTarget(kind: MappingItemKind, index: number, event: DragEvent) {
  const items = kind === 'input' ? activeContract.value.inputs : activeContract.value.outputs
  const position = getDropPosition(event)
  if (position === 'after' && index < items.length - 1) {
    return { kind, index: index + 1, position: 'before' as const }
  }
  return { kind, index, position }
}

function handleItemDragOver(kind: MappingItemKind, index: number, event: DragEvent) {
  if (!draggingItem.value || draggingItem.value.kind !== kind) return
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
  }
  dropTarget.value = normalizeDropTarget(kind, index, event)
}

function moveArrayItem<T>(items: T[], fromIndex: number, insertionIndex: number): number {
  if (fromIndex < 0 || fromIndex >= items.length) return fromIndex
  const boundedInsertionIndex = Math.max(0, Math.min(insertionIndex, items.length))
  const adjustedInsertionIndex = fromIndex < boundedInsertionIndex
    ? boundedInsertionIndex - 1
    : boundedInsertionIndex
  if (adjustedInsertionIndex === fromIndex) return fromIndex

  const [item] = items.splice(fromIndex, 1)
  items.splice(adjustedInsertionIndex, 0, item)
  return adjustedInsertionIndex
}

function remapSelectedIndex(selectedIndex: number | null, fromIndex: number, toIndex: number): number | null {
  if (selectedIndex == null || fromIndex === toIndex) return selectedIndex
  if (selectedIndex === fromIndex) return toIndex
  if (fromIndex < toIndex && selectedIndex > fromIndex && selectedIndex <= toIndex) {
    return selectedIndex - 1
  }
  if (fromIndex > toIndex && selectedIndex >= toIndex && selectedIndex < fromIndex) {
    return selectedIndex + 1
  }
  return selectedIndex
}

function handleItemDrop(kind: MappingItemKind, index: number, event: DragEvent) {
  if (!draggingItem.value || draggingItem.value.kind !== kind) return

  const normalizedTarget = dropTarget.value?.kind === kind
    ? dropTarget.value
    : normalizeDropTarget(kind, index, event)
  const insertionIndex = normalizedTarget.position === 'after'
    ? normalizedTarget.index + 1
    : normalizedTarget.index
  const fromIndex = draggingItem.value.index

  if (kind === 'input') {
    const toIndex = moveArrayItem(activeContract.value.inputs, fromIndex, insertionIndex)
    selectedInputIndex.value = remapSelectedIndex(selectedInputIndex.value, fromIndex, toIndex)
  } else {
    const toIndex = moveArrayItem(activeContract.value.outputs, fromIndex, insertionIndex)
    selectedOutputIndex.value = remapSelectedIndex(selectedOutputIndex.value, fromIndex, toIndex)
  }

  clearDragState()
}

function endItemDrag() {
  clearDragState()
}

function removeInput(index: number) {
  activeContract.value.inputs.splice(index, 1)
  if (selectedInputIndex.value === index) {
    selectedInputIndex.value = null
  } else if (selectedInputIndex.value != null && selectedInputIndex.value > index) {
    selectedInputIndex.value -= 1
  }
}

function removeOutput(index: number) {
  activeContract.value.outputs.splice(index, 1)
  if (selectedOutputIndex.value === index) {
    selectedOutputIndex.value = null
  } else if (selectedOutputIndex.value != null && selectedOutputIndex.value > index) {
    selectedOutputIndex.value -= 1
  }
}

function toggleSelectedInput(index: number) {
  selectedInputIndex.value = selectedInputIndex.value === index ? null : index
  if (selectedInputIndex.value != null) {
    selectedOutputIndex.value = null
  }
}

function toggleSelectedOutput(index: number) {
  selectedOutputIndex.value = selectedOutputIndex.value === index ? null : index
  if (selectedOutputIndex.value != null) {
    selectedInputIndex.value = null
  }
}

function getCanvasElement(): HTMLCanvasElement | null {
  return props.comfyApp?.canvasEl || props.comfyApp?.canvas?.canvas || null
}

function getNodeElement(nodeId: string | number): HTMLElement | null {
  const escaped = typeof CSS !== 'undefined' && typeof CSS.escape === 'function'
    ? CSS.escape(String(nodeId))
    : String(nodeId)
  return document.querySelector(`[data-node-id="${escaped}"]`)
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

function getWidgetElement(nodeId: string | number, widgetIndex?: number): HTMLElement | null {
  if (widgetIndex == null || widgetIndex < 0) return null
  const nodeEl = getNodeElement(nodeId)
  if (!nodeEl) return null
  const widgets = nodeEl.querySelectorAll<HTMLElement>('[data-testid="node-widget"]')
  return widgets[widgetIndex] ?? null
}

function rectToStyle(rect: DOMRect | null | undefined): Record<string, string> | null {
  if (!rect || rect.width <= 0 || rect.height <= 0) return null
  return {
    left: `${rect.left}px`,
    top: `${rect.top}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  }
}

function getNodeClientRect(node: any): DOMRect | null {
  const nodeEl = getNodeElement(node?.id ?? '')
  if (nodeEl) return nodeEl.getBoundingClientRect()

  const app = props.comfyApp
  if (!node || typeof app?.canvasPosToClientPos !== 'function') return null
  const titleHeight = 32
  const topLeft = app.canvasPosToClientPos([node.pos[0], node.pos[1] - titleHeight])
  const bottomRight = app.canvasPosToClientPos([node.pos[0] + node.size[0], node.pos[1] + node.size[1]])
  if (!topLeft || !bottomRight) return null
  return new DOMRect(topLeft[0], topLeft[1], bottomRight[0] - topLeft[0], bottomRight[1] - topLeft[1])
}

function getInputClientRect(input: WorkflowContractInput): DOMRect | null {
  const widgetEl = getWidgetElement(input.node_id, input.widget_idx)
  if (widgetEl) return widgetEl.getBoundingClientRect()

  const node = props.comfyApp?.graph?.getNodeById?.(String(input.node_id)) ??
    props.comfyApp?.rootGraph?.getNodeById?.(String(input.node_id))
  if (!node || typeof input.widget_idx !== 'number' || !Array.isArray(node.widgets)) return null
  const widget = node.widgets[input.widget_idx]
  if (!widget || typeof props.comfyApp?.canvasPosToClientPos !== 'function') return getNodeClientRect(node)

  const marginX = 10
  const topLeft = props.comfyApp.canvasPosToClientPos([node.pos[0] + marginX, node.pos[1] + (widget.y ?? 0)])
  const bottomRight = props.comfyApp.canvasPosToClientPos([node.pos[0] + node.size[0] - marginX, node.pos[1] + (widget.y ?? 0) + (widget.computedHeight ?? 24)])
  if (!topLeft || !bottomRight) return getNodeClientRect(node)
  return new DOMRect(topLeft[0], topLeft[1], bottomRight[0] - topLeft[0], bottomRight[1] - topLeft[1])
}

function getOutputClientRect(output: WorkflowContractOutput): DOMRect | null {
  const node = props.comfyApp?.graph?.getNodeById?.(String(output.node_id)) ??
    props.comfyApp?.rootGraph?.getNodeById?.(String(output.node_id))
  return getNodeClientRect(node)
}

const inputOverlays = computed(() => {
  overlayTick.value
  return activeContract.value.inputs
    .map((input, index) => {
      const style = rectToStyle(getInputClientRect(input))
      if (!style) return null
      return {
        key: `input-${index}-${input.node_id}-${input.widget_idx ?? 'na'}`,
        style,
        active: selectedInputIndex.value === index,
      }
    })
    .filter((value): value is { key: string; style: Record<string, string>; active: boolean } => Boolean(value))
})

const outputOverlays = computed(() => {
  overlayTick.value
  return activeContract.value.outputs
    .map((output, index) => {
      const style = rectToStyle(getOutputClientRect(output))
      if (!style) return null
      return {
        key: `output-${index}-${output.node_id}-${output.selector ?? 'primary'}`,
        style,
        active: selectedOutputIndex.value === index,
      }
    })
    .filter((value): value is { key: string; style: Record<string, string>; active: boolean } => Boolean(value))
})

type MediaLoaderDescriptor = {
  fieldKey: string
  apiFieldKey: string
  displayName: string
  type: 'image' | 'audio' | 'video'
  label: string
}

type ResolvedHoverTarget =
  | { kind: 'input'; node: any; widget: any | null; canvasX: number; canvasY: number; source?: 'widget' | 'media_loader'; media?: MediaLoaderDescriptor }
  | { kind: 'output'; node: any; output: any; canvasX: number; canvasY: number }

function getMediaLoaderDescriptor(node: any): MediaLoaderDescriptor | null {
  const type = String(node?.type || node?.comfyClass || node?.constructor?.type || node?.constructor?.nodeData?.name || '')
  const classType = String(node?.constructor?.nodeData?.name || node?.constructor?.nodeData?.display_name || '')
  const normalizedType = type.toLowerCase().replace(/[^a-z0-9]/g, '')
  const normalizedClass = classType.toLowerCase().replace(/[^a-z0-9]/g, '')

  if (normalizedType === 'loadimage' || normalizedClass === 'loadimage') {
    return { fieldKey: 'image', apiFieldKey: 'image', displayName: 'Image', type: 'image', label: 'image upload' }
  }
  if (normalizedType === 'loadaudio' || normalizedClass === 'loadaudio') {
    return { fieldKey: 'audio', apiFieldKey: 'audio', displayName: 'Audio', type: 'audio', label: 'audio upload' }
  }
  if (normalizedType === 'loadvideo' || normalizedClass === 'loadvideo') {
    return { fieldKey: 'video', apiFieldKey: 'file', displayName: 'Video', type: 'video', label: 'video upload' }
  }
  return null
}

function isMediaLoaderWidget(widget: any, descriptor: MediaLoaderDescriptor): boolean {
  const name = String(widget?.name || widget?.options?.property || '').toLowerCase()
  return name === descriptor.fieldKey
}

function getMediaLoaderWidget(node: any, descriptor: MediaLoaderDescriptor): any | null {
  if (!Array.isArray(node?.widgets)) return null
  return node.widgets.find((widget: any) => isMediaLoaderWidget(widget, descriptor)) ?? null
}

function isArtifactOutputNode(node: any): boolean {
  if (node?.constructor?.nodeData?.output_node === true) return true
  const type = String(node?.type || node?.comfyClass || node?.constructor?.nodeData?.name || '').toLowerCase()
  return [
    'saveimage',
    'previewimage',
    'saveanimatedwebp',
    'saveaudio',
    'savevideo',
  ].includes(type)
}

function getArtifactOutputDescriptor(node: any) {
  const type = String(`${node?.type || ''} ${node?.constructor?.nodeData?.name || ''} ${node?.title || ''}`).toLowerCase()
  const displayName = String(node?.title || node?.type || 'output')
  if (type.includes('audio')) return { name: displayName, type: 'audio' }
  if (type.includes('video') || type.includes('webp')) return { name: displayName, type: 'video' }
  if (type.includes('image')) return { name: displayName, type: 'image' }
  return { name: displayName, type: 'file' }
}

function resolveGraphTarget(event: PointerEvent): ResolvedHoverTarget | null {
  if (eventTargetsOverlayChrome(event.target)) return null

  const canvas = props.comfyApp?.canvas
  if (!canvas) return null

  const graphPos = canvas.convertEventToCanvasOffset?.(event)
  if (!graphPos || graphPos.length < 2) return null
  const [canvasX, canvasY] = graphPos

  const graph = canvas.graph || props.comfyApp?.graph || props.comfyApp?.rootGraph
  const node =
    graph?.getNodeOnPos?.(canvasX, canvasY, canvas.visible_nodes) ||
    canvas.getNodeOnPos?.(canvasX, canvasY) ||
    getNodeFromEventTarget(event.target)
  if (!node) return null

  const mediaLoader = getMediaLoaderDescriptor(node)
  if (mediaLoader) {
    return {
      kind: 'input',
      node,
      widget: getMediaLoaderWidget(node, mediaLoader),
      canvasX,
      canvasY,
      source: 'media_loader',
      media: mediaLoader,
    }
  }

  if (isArtifactOutputNode(node)) {
    return { kind: 'output', node, output: getArtifactOutputDescriptor(node), canvasX, canvasY }
  }

  const widget = node.getWidgetOnPos?.(canvasX, canvasY, true)
  if (widget) {
    return { kind: 'input', node, widget, canvasX, canvasY }
  }

  return null
}

function addOrSelectInput(node: any, widget: any | null, source: 'widget' | 'media_loader' = 'widget', media?: MediaLoaderDescriptor) {
  const widgetIndex = widget && Array.isArray(node.widgets) ? node.widgets.indexOf(widget) : -1
  const index = activeContract.value.inputs.findIndex(input =>
    String(input.node_id) === String(node.id) &&
    input.widget_idx === widgetIndex,
  )

  if (index >= 0) {
    selectedInputIndex.value = index
    return
  }

  const isMediaLoaderSource = source === 'media_loader' && media
  const fieldKey = isMediaLoaderSource
    ? media.fieldKey
    : getWidgetFieldKey(widget)
  const fallbackLabel = `Input ${activeContract.value.inputs.length + 1}`
  const displayName = isMediaLoaderSource
    ? media.displayName
    : getWidgetDisplayLabel(widget, fieldKey, fallbackLabel)
  const nameSource = isMediaLoaderSource ? media.fieldKey : displayName

  const nextInput: WorkflowContractInput = {
    name: slugifyName(String(nameSource), `input_${activeContract.value.inputs.length + 1}`),
    display_name: displayName,
    type: isMediaLoaderSource ? media.type : normalizeWidgetType(widget),
    node_id: String(node.id),
    widget_idx: widgetIndex >= 0 ? widgetIndex : undefined,
    field_key: fieldKey,
    ...(isMediaLoaderSource
      ? { api_node_id: String(node.id), api_field_key: media.apiFieldKey }
      : resolveInputApiBinding(node, widget, fieldKey)),
    required: true,
    default: isMediaLoaderSource ? '' : (widget?.value ?? ''),
  }

  if (nextInput.type === 'string') {
    nextInput.ui_control = 'textarea'
  }

  if (isNumericType(nextInput.type)) {
    nextInput.min = inferWidgetNumericBound(widget, 'min')
    nextInput.max = inferWidgetNumericBound(widget, 'max')
    nextInput.step = inferWidgetNumericStep(widget, nextInput.type)
  }

  if (isEnumType(nextInput.type)) {
    nextInput.enum_values = inferWidgetEnumValues(widget)
  }

  activeContract.value.inputs.push(nextInput)
  selectedInputIndex.value = activeContract.value.inputs.length - 1
  selectedOutputIndex.value = null
}

function addOrSelectOutput(node: any, output: any) {
  const selector = 'primary'
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
  selectedInputIndex.value = null
}

function updateHoverState(event: PointerEvent) {
  if (!visible.value) {
    hoverSummary.value = null
    hoverOverlay.value = null
    return
  }

  const target = resolveGraphTarget(event)
  if (!target) {
    hoverSummary.value = null
    hoverOverlay.value = null
    return
  }

  if (target.kind === 'input') {
    const widgetIndex = target.widget && Array.isArray(target.node.widgets)
      ? target.node.widgets.indexOf(target.widget)
      : -1
    const rect = target.source === 'media_loader'
      ? rectToStyle(getNodeClientRect(target.node))
      : rectToStyle(getWidgetElement(target.node.id, widgetIndex)?.getBoundingClientRect() ?? getInputClientRect({
        name: '',
        type: 'string',
        node_id: String(target.node.id),
        widget_idx: widgetIndex >= 0 ? widgetIndex : undefined,
        required: true,
      }))
    if (!rect) {
      hoverSummary.value = null
      hoverOverlay.value = null
      return
    }
    hoverSummary.value = {
      kind: 'input',
      label: target.source === 'media_loader'
        ? `${target.media?.label || 'file upload'} · Node ${target.node.id}`
        : `${getWidgetDisplayLabel(target.widget, getWidgetFieldKey(target.widget), 'widget')} · Node ${target.node.id}`,
    }
    hoverOverlay.value = { kind: 'input', style: rect }
    return
  }

  const rect = rectToStyle(getNodeClientRect(target.node))
  if (!rect) {
    hoverSummary.value = null
    hoverOverlay.value = null
    return
  }
  hoverSummary.value = {
    kind: 'output',
    label: `${target.output?.name || target.node.title || target.node.type || 'output'} · Node ${target.node.id}`,
  }
  hoverOverlay.value = { kind: 'output', style: rect }
}

function handleCanvasPointerDown(event: PointerEvent) {
  if (!visible.value || !form.value) return
  if (event.button !== 0) return
  const target = resolveGraphTarget(event)
  if (!target) return

  const canvas = props.comfyApp?.canvas
  if (!canvas) return

  if (target.kind === 'input') {

    event.preventDefault()
    event.stopImmediatePropagation()
    event.stopPropagation()

    if (Array.isArray(canvas.graph_mouse)) {
      canvas.graph_mouse[0] = target.canvasX
      canvas.graph_mouse[1] = target.canvasY
    }
    canvas.selectNode?.(target.node, false)
    addOrSelectInput(target.node, target.widget, target.source, target.media)
    return
  }

  event.preventDefault()
  event.stopImmediatePropagation()
  event.stopPropagation()

  if (Array.isArray(canvas.graph_mouse)) {
    canvas.graph_mouse[0] = target.canvasX
    canvas.graph_mouse[1] = target.canvasY
  }
  canvas.selectNode?.(target.node, false)
  addOrSelectOutput(target.node, target.output)
}

function attachCanvasListener() {
  document.addEventListener('pointerdown', handleCanvasPointerDown, true)
  document.addEventListener('pointermove', updateHoverState, true)
}

function detachCanvasListener() {
  document.removeEventListener('pointerdown', handleCanvasPointerDown, true)
  document.removeEventListener('pointermove', updateHoverState, true)
}

function showSaveToast(message: string, type: 'success' | 'error' = 'success') {
  if (saveToastTimeout) {
    clearTimeout(saveToastTimeout)
  }
  saveToast.value = { message, type }
  saveToastTimeout = setTimeout(() => {
    saveToast.value = null
    saveToastTimeout = null
  }, 3000)
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
    normalizeInputUiControls(form.value)
    hydrateApiBindings(form.value)
    const apiPrompt = await captureCurrentApiPrompt()
    response.value = await saveWorkflowContract(workflowName.value, form.value, apiPrompt)
    form.value = cloneContract(response.value.execution_contract)
    window.dispatchEvent(new CustomEvent('comfygit:workflow-contract-saved', {
      detail: { workflowName: workflowName.value }
    }))
    showSaveToast('Contract saved')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to save workflow contract'
    showSaveToast(error.value, 'error')
  } finally {
    saving.value = false
  }
}

async function handleDelete() {
  showDeleteConfirm.value = true
}

async function confirmDelete() {
  if (!workflowName.value) return
  showDeleteConfirm.value = false
  deleting.value = true
  error.value = null
  try {
    await deleteWorkflowContract(workflowName.value)
    window.dispatchEvent(new CustomEvent('comfygit:workflow-contract-saved', {
      detail: { workflowName: workflowName.value }
    }))
    closeOverlay({ reopenPanel: true })
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to delete workflow contract'
  } finally {
    deleting.value = false
  }
}

function reopenWorkflowsPanel() {
  window.dispatchEvent(new CustomEvent('comfygit:open-panel', {
    detail: { initialView: 'workflows' }
  }))
}

function closeOverlay(options?: { reopenPanel?: boolean }) {
  visible.value = false
  hoverSummary.value = null
  hoverOverlay.value = null
  saveToast.value = null
  if (saveToastTimeout) {
    clearTimeout(saveToastTimeout)
    saveToastTimeout = null
  }
  showDeleteConfirm.value = false
  clearDragState()
  if (options?.reopenPanel) {
    reopenWorkflowsPanel()
  }
}

async function openOverlay(event: Event) {
  const customEvent = event as CustomEvent<{ workflowName?: string }>
  const nextWorkflow = customEvent.detail?.workflowName?.trim()
  if (!nextWorkflow) {
    return
  }

  workflowName.value = nextWorkflow
  selectedInputIndex.value = null
  selectedOutputIndex.value = null
  metadataExpanded.value = false
  visible.value = true
  await loadContract()
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && visible.value) {
    if (showDeleteConfirm.value) {
      showDeleteConfirm.value = false
      return
    }
    closeOverlay({ reopenPanel: true })
  }
}

function startOverlayLoop() {
  if (overlayFrame != null) return
  const tick = () => {
    overlayTick.value += 1
    if (!visible.value) {
      overlayFrame = null
      return
    }
    overlayFrame = window.requestAnimationFrame(tick)
  }
  overlayFrame = window.requestAnimationFrame(tick)
}

function stopOverlayLoop() {
  if (overlayFrame == null) return
  window.cancelAnimationFrame(overlayFrame)
  overlayFrame = null
}

watch(visible, (isVisible) => {
  if (isVisible) {
    attachCanvasListener()
    startOverlayLoop()
  } else {
    detachCanvasListener()
    stopOverlayLoop()
  }
})

onMounted(() => {
  window.addEventListener('comfygit:open-io-mapping', openOverlay as EventListener)
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  detachCanvasListener()
  stopOverlayLoop()
  if (saveToastTimeout) {
    clearTimeout(saveToastTimeout)
    saveToastTimeout = null
  }
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

.io-mapping-visual-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
}

.io-highlight {
  position: fixed;
  border-radius: 10px;
  transition: left 80ms linear, top 80ms linear, width 80ms linear, height 80ms linear, opacity 120ms ease, box-shadow 120ms ease, border-color 120ms ease;
}

.io-highlight-input {
  border: 2px solid rgba(99, 102, 241, 0.5);
  background: rgba(99, 102, 241, 0.08);
}

.io-highlight-input.active {
  border-color: rgba(129, 140, 248, 0.95);
  box-shadow: 0 0 0 2px rgba(129, 140, 248, 0.2);
  background: rgba(99, 102, 241, 0.12);
}

.io-highlight-output {
  border: 2px solid rgba(245, 158, 11, 0.45);
  background: rgba(245, 158, 11, 0.08);
}

.io-highlight-output.active {
  border-color: rgba(251, 191, 36, 0.95);
  box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.18);
  background: rgba(245, 158, 11, 0.12);
}

.io-highlight-hover-input {
  border: 2px solid rgba(129, 140, 248, 1);
  box-shadow: 0 0 0 2px rgba(129, 140, 248, 0.22), inset 0 0 0 1px rgba(255, 255, 255, 0.12);
  background: rgba(99, 102, 241, 0.16);
}

.io-highlight-hover-output {
  border: 2px solid rgba(251, 191, 36, 1);
  box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.22), inset 0 0 0 1px rgba(255, 255, 255, 0.12);
  background: rgba(245, 158, 11, 0.16);
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

.io-mapping-hover-summary {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin-top: 6px;
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

.io-save-toast {
  position: absolute;
  right: calc(100% + var(--cg-space-3));
  bottom: var(--cg-space-4);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  width: max-content;
  max-width: 320px;
  padding: var(--cg-space-2) var(--cg-space-3);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
  color: var(--cg-color-text-primary);
  box-shadow: var(--cg-shadow-lg);
  font-size: var(--cg-font-size-sm);
  pointer-events: none;
}

.io-save-toast.success {
  border-color: var(--cg-color-success);
}

.io-save-toast.error {
  border-color: var(--cg-color-error);
}

.io-save-toast-icon {
  color: var(--cg-color-success);
  font-weight: 700;
}

.io-save-toast.error .io-save-toast-icon {
  color: var(--cg-color-error);
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
  justify-content: space-between;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border);
}

.io-mapping-footer-left,
.io-mapping-footer-right {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.mapping-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.contract-meta-section {
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
}

.contract-meta-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: transparent;
  border: 0;
  color: var(--cg-color-text-primary);
  cursor: pointer;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  letter-spacing: var(--cg-letter-spacing-wide);
  text-align: left;
  text-transform: uppercase;
}

.contract-meta-toggle:hover {
  color: var(--cg-color-accent);
}

.contract-meta-toggle-icon {
  color: var(--cg-color-text-muted);
}

.contract-meta-body {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: 0 var(--cg-space-3) var(--cg-space-3);
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

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
}

.item-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
  transition: border-color 120ms ease, box-shadow 120ms ease, opacity 120ms ease;
}

.item-card.selected {
  border-color: var(--cg-color-accent);
  box-shadow: inset 0 0 0 1px var(--cg-color-accent);
}

.item-card.dragging {
  opacity: 0.55;
}

.item-card.drop-before::before,
.item-card.drop-after::after {
  content: '';
  position: absolute;
  left: var(--cg-space-2);
  right: var(--cg-space-2);
  height: 2px;
  border-radius: 999px;
  background: var(--cg-color-accent);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--cg-color-accent) 35%, transparent);
}

.item-card.drop-before::before {
  top: -2px;
}

.item-card.drop-after::after {
  bottom: -2px;
}

.item-card-header {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-2);
}

.item-card-header-toggle {
  cursor: pointer;
}

.item-card-main {
  min-width: 0;
  flex: 1;
}

.item-drag-handle {
  flex: 0 0 auto;
  width: 20px;
  min-height: 32px;
  display: grid;
  grid-template-columns: repeat(2, 4px);
  align-content: center;
  justify-content: center;
  gap: 4px;
  padding: 4px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: var(--cg-color-text-muted);
  cursor: grab;
}

.item-drag-handle:hover,
.item-drag-handle:focus-visible {
  border-color: var(--cg-color-border);
  color: var(--cg-color-accent);
  background: var(--cg-color-bg-tertiary);
  outline: none;
}

.item-drag-handle:active {
  cursor: grabbing;
}

.item-drag-handle span {
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: currentColor;
}

.item-card-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: 600;
  overflow-wrap: anywhere;
}

.item-card-meta {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin-top: 2px;
}

.item-card-summary {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  margin-top: 6px;
}

.item-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--cg-space-3);
}

.item-grid-full {
  grid-column: 1 / -1;
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

  .io-save-toast {
    right: auto;
    left: var(--cg-space-4);
    bottom: calc(72px + var(--cg-space-3));
    max-width: calc(100% - (var(--cg-space-4) * 2));
  }

  .item-grid {
    grid-template-columns: 1fr;
  }
}
</style>
