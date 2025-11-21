<template>
  <div class="detail-row">
    <Label :min-width="labelMinWidth">{{ label }}</Label>
    <Value v-if="value" :mono="mono" :variant="valueVariant" :truncate="truncate">
      {{ value }}
    </Value>
    <slot v-else name="value"></slot>
  </div>
</template>

<script setup lang="ts">
import Label from '../atoms/Label.vue'
import Value from '../atoms/Value.vue'

withDefaults(defineProps<{
  label: string
  value?: string
  mono?: boolean
  valueVariant?: 'default' | 'hash' | 'warning' | 'error'
  truncate?: boolean
  labelMinWidth?: string
}>(), {
  mono: false,
  valueVariant: 'default',
  truncate: false,
  labelMinWidth: '70px'
})
</script>

<style scoped>
.detail-row {
  display: flex;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  align-items: baseline;
}
</style>
