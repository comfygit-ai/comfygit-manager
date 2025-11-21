<template>
  <button class="info-button" :title="title" @click="$emit('click')">
    <svg :width="size" :height="size" viewBox="0 0 16 16" fill="currentColor">
      <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <text x="8" y="11" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">i</text>
    </svg>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number
  title?: string
}>(), {
  size: 16,
  title: 'About this section'
})

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.info-button {
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--cg-transition-fast);
}

.info-button:hover {
  color: var(--cg-color-accent);
  transform: scale(1.1);
}
</style>
