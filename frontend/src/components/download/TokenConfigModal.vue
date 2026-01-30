<template>
  <BaseModal title="Configure API Token" @close="$emit('close')">
    <template #body>
      <div class="token-config-modal">
        <div class="provider-info">
          <span class="provider-icon">{{ providerIcon }}</span>
          <span class="provider-name">{{ providerName }}</span>
        </div>

        <div v-if="currentTokenMask" class="current-token">
          <span class="label">Current token:</span>
          <span class="mask">{{ currentTokenMask }}</span>
          <BaseButton variant="danger" size="sm" @click="handleClear" :loading="clearing">
            Clear Token
          </BaseButton>
        </div>

        <div class="token-input-section">
          <label class="input-label">
            {{ currentTokenMask ? 'Replace with new token:' : 'Enter token:' }}
          </label>
          <BaseInput
            v-model="newToken"
            type="password"
            :placeholder="placeholder"
          />
          <div class="help-text">
            <a :href="helpUrl" target="_blank" rel="noopener">
              {{ helpLinkText }}
            </a>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="modal-actions">
        <BaseButton variant="secondary" @click="$emit('close')">
          Cancel
        </BaseButton>
        <BaseButton
          variant="primary"
          :disabled="!newToken.trim()"
          :loading="saving"
          @click="handleSave"
        >
          Save Token
        </BaseButton>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseModal from '@/components/base/BaseModal.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'

type Provider = 'huggingface' | 'civitai'

const props = defineProps<{
  provider: Provider
  currentTokenMask: string | null  // e.g., "***abcd" or null
}>()

const emit = defineEmits<{
  close: []
  saved: []
  cleared: []
}>()

const { updateConfig } = useComfyGitService()

const newToken = ref('')
const saving = ref(false)
const clearing = ref(false)

const providerName = computed(() =>
  props.provider === 'huggingface' ? 'HuggingFace' : 'CivitAI'
)

const providerIcon = computed(() =>
  props.provider === 'huggingface' ? '🤗' : '🎨'
)

const placeholder = computed(() =>
  props.provider === 'huggingface' ? 'hf_xxxx...' : 'Enter API key...'
)

const helpUrl = computed(() =>
  props.provider === 'huggingface'
    ? 'https://huggingface.co/settings/tokens'
    : 'https://civitai.com/user/account'
)

const helpLinkText = computed(() =>
  props.provider === 'huggingface'
    ? 'Get your HuggingFace token →'
    : 'Get your CivitAI API key →'
)

async function handleSave() {
  if (!newToken.value.trim()) return
  saving.value = true
  try {
    const updates = props.provider === 'huggingface'
      ? { huggingface_token: newToken.value.trim() }
      : { civitai_api_key: newToken.value.trim() }
    await updateConfig(updates)
    newToken.value = ''
    emit('saved')
    emit('close')
  } catch (e) {
    console.error('Failed to save token:', e)
  } finally {
    saving.value = false
  }
}

async function handleClear() {
  clearing.value = true
  try {
    const updates = props.provider === 'huggingface'
      ? { huggingface_token: null }
      : { civitai_api_key: null }
    await updateConfig(updates)
    emit('cleared')
    emit('close')
  } catch (e) {
    console.error('Failed to clear token:', e)
  } finally {
    clearing.value = false
  }
}
</script>

<style scoped>
.token-config-modal {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.provider-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-lg);
  font-weight: var(--cg-font-weight-medium);
}

.current-token {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-border-radius);
}

.current-token .label {
  color: var(--cg-color-text-secondary);
}

.current-token .mask {
  font-family: var(--cg-font-mono);
  flex: 1;
}

.token-input-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.input-label {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.help-text {
  font-size: var(--cg-font-size-xs);
}

.help-text a {
  color: var(--cg-color-accent);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--cg-space-2);
}
</style>
