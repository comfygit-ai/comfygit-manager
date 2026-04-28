<template>
  <article class="candidate-card">
    <div class="candidate-main">
      <div class="candidate-url">{{ candidate.url }}</div>
      <div class="candidate-meta">
        <span class="meta-chip">
          <span class="chip-label">Provider</span>
          <span>{{ formatProvider(candidate.source_type) }}</span>
        </span>
        <span v-if="candidate.workflow" class="meta-chip">
          <span class="chip-label">Workflow</span>
          <span>{{ candidate.workflow }}</span>
        </span>
        <span v-if="candidate.confidence" ref="matchPopoverRoot" class="match-chip-wrap">
          <button
            v-if="candidate.reasons?.length"
            class="meta-chip meta-chip-button"
            type="button"
            :aria-expanded="showMatchReasons"
            @click.stop="showMatchReasons = !showMatchReasons"
          >
            <span class="chip-label">Match</span>
            <span>{{ formatConfidence(candidate.confidence) }}</span>
          </button>
          <span v-else class="meta-chip">
            <span class="chip-label">Match</span>
            <span>{{ formatConfidence(candidate.confidence) }}</span>
          </span>
          <div v-if="showMatchReasons && candidate.reasons?.length" class="match-popover" @click.stop>
            <div class="match-popover-title">Matched by</div>
            <div class="match-popover-reasons">
              <span
                v-for="reason in candidate.reasons"
                :key="reason"
                class="reason-chip"
              >
                {{ reason }}
              </span>
            </div>
          </div>
        </span>
      </div>
      <div class="candidate-footer">
        <details v-if="candidate.context" class="candidate-context">
          <summary>Workflow snippet</summary>
          <p>{{ candidate.context }}</p>
        </details>
        <div v-else></div>

        <BaseButton
          variant="primary"
          size="sm"
          :loading="loading"
          @click="emit('select', candidate.url)"
        >
          {{ actionLabel }}
        </BaseButton>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import type { ModelSourceCandidate } from '@/types/comfygit'

withDefaults(defineProps<{
  candidate: ModelSourceCandidate
  actionLabel?: string
  loading?: boolean
}>(), {
  actionLabel: 'Use as Source',
  loading: false
})

const emit = defineEmits<{
  select: [url: string]
}>()

const showMatchReasons = ref(false)
const matchPopoverRoot = ref<HTMLElement | null>(null)

function closeMatchPopover() {
  showMatchReasons.value = false
}

function handleDocumentPointerDown(event: PointerEvent) {
  const target = event.target
  if (!(target instanceof Node)) return
  if (matchPopoverRoot.value?.contains(target)) return
  closeMatchPopover()
}

function handleDocumentKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeMatchPopover()
  }
}

watch(showMatchReasons, (isOpen) => {
  if (isOpen) {
    document.addEventListener('pointerdown', handleDocumentPointerDown)
    document.addEventListener('keydown', handleDocumentKeyDown)
  } else {
    document.removeEventListener('pointerdown', handleDocumentPointerDown)
    document.removeEventListener('keydown', handleDocumentKeyDown)
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleDocumentPointerDown)
  document.removeEventListener('keydown', handleDocumentKeyDown)
})

function formatProvider(provider: string): string {
  if (provider === 'huggingface') return 'Hugging Face'
  if (provider === 'civitai') return 'Civitai'
  return 'Direct URL'
}

function formatConfidence(confidence: number): string {
  if (confidence >= 75) return 'Strong'
  if (confidence >= 45) return 'Possible'
  return 'Weak'
}
</script>

<style scoped>
.candidate-card {
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
}

.candidate-main {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.candidate-url {
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  overflow-wrap: anywhere;
}

.candidate-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  align-items: center;
  font-size: var(--cg-font-size-xs);
}

.candidate-meta {
  margin-bottom: var(--cg-space-2);
}

.meta-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-secondary);
}

.meta-chip-button {
  font: inherit;
  cursor: pointer;
}

.meta-chip-button:hover {
  border-color: var(--cg-color-accent);
  color: var(--cg-color-text-primary);
}

.chip-label {
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.match-chip-wrap {
  position: relative;
  display: inline-flex;
}

.match-popover {
  position: absolute;
  top: calc(100% + var(--cg-space-1));
  left: 0;
  z-index: 2;
  width: max-content;
  max-width: 280px;
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border);
  box-shadow: var(--cg-shadow-md);
}

.match-popover-title {
  margin-bottom: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.match-popover-reasons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
}

.reason-chip {
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  background: var(--cg-color-bg-tertiary);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-accent);
  border-color: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-border-subtle);
}

.candidate-context {
  margin-top: var(--cg-space-1);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  line-height: 1.4;
}

.candidate-footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--cg-space-3);
  margin-top: var(--cg-space-1);
}

.candidate-context summary {
  cursor: pointer;
  color: var(--cg-color-text-secondary);
}

.candidate-context summary:hover {
  color: var(--cg-color-accent);
}

.candidate-context p {
  margin: var(--cg-space-2) 0 0;
  max-height: 110px;
  overflow: auto;
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  font-family: var(--cg-font-mono);
  overflow-wrap: anywhere;
}

</style>
