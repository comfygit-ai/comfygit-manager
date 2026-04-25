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
        <span v-if="candidate.confidence" class="meta-chip">
          <span class="chip-label">Match</span>
          <span>{{ formatConfidence(candidate.confidence) }}</span>
        </span>
      </div>
      <div v-if="candidate.reasons?.length" class="reason-list" aria-label="Why this link matched">
        <div class="reason-heading">
          <span class="reason-label">Matched by</span>
          <InfoButton
            :size="14"
            title="About match reasons"
            @click="emit('showMatchInfo')"
          />
        </div>
        <span
          v-for="reason in candidate.reasons"
          :key="reason"
          class="reason-chip"
        >
          {{ reason }}
        </span>
      </div>
      <details v-if="candidate.context" class="candidate-context">
        <summary>Workflow snippet</summary>
        <p>{{ candidate.context }}</p>
      </details>
    </div>
    <div class="candidate-actions">
      <BaseButton
        variant="primary"
        size="sm"
        :loading="loading"
        @click="emit('select', candidate.url)"
      >
        {{ actionLabel }}
      </BaseButton>
    </div>
  </article>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import InfoButton from '@/components/base/atoms/InfoButton.vue'
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
  showMatchInfo: []
}>()

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
  display: flex;
  gap: var(--cg-space-3);
  justify-content: space-between;
  align-items: flex-start;
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

.candidate-meta,
.reason-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  align-items: center;
  font-size: var(--cg-font-size-xs);
}

.candidate-meta {
  margin-bottom: var(--cg-space-2);
}

.meta-chip,
.reason-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-secondary);
}

.chip-label,
.reason-label {
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.reason-heading {
  flex-basis: 100%;
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
  margin-bottom: var(--cg-space-1);
}

.reason-chip {
  color: var(--cg-color-accent);
  border-color: var(--cg-color-border-subtle);
}

.candidate-context {
  margin-top: var(--cg-space-1);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  line-height: 1.4;
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

.candidate-actions {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
}
</style>
