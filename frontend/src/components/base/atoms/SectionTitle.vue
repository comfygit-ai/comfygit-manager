<template>
  <component
    :is="`h${level}`"
    :class="['section-title', { clickable }]"
    @click="clickable && $emit('click')"
  >
    <slot></slot>
    <span v-if="count !== undefined" class="section-title-count">({{ count }})</span>
    <span v-if="clickable" class="section-title-icon">{{ expanded ? '▼' : '▸' }}</span>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  level?: 3 | 4 | 5
  count?: number
  clickable?: boolean
  expanded?: boolean
}>(), {
  level: 4,
  clickable: false,
  expanded: false
})

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.section-title {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0;
  font-weight: var(--cg-font-weight-normal);
}

.section-title.clickable {
  cursor: pointer;
  user-select: none;
}

.section-title.clickable:hover {
  color: var(--cg-color-accent);
}

.section-title-count {
  margin-left: 4px;
}

.section-title-icon {
  margin-left: 6px;
  font-size: var(--cg-font-size-xs);
}
</style>
