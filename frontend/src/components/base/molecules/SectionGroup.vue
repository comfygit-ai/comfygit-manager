<template>
  <section class="section-group">
    <SectionTitle
      :count="count"
      :clickable="collapsible"
      :expanded="isExpanded"
      @click="toggleExpanded"
    >
      {{ title }}
    </SectionTitle>
    <div v-if="!collapsible || isExpanded" class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionTitle from '../atoms/SectionTitle.vue'

const props = withDefaults(defineProps<{
  title: string
  count?: number
  collapsible?: boolean
  initiallyExpanded?: boolean
}>(), {
  collapsible: false,
  initiallyExpanded: true
})

const emit = defineEmits<{
  toggle: [expanded: boolean]
}>()

const isExpanded = ref(props.initiallyExpanded)

function toggleExpanded() {
  if (props.collapsible) {
    isExpanded.value = !isExpanded.value
    emit('toggle', isExpanded.value)
  }
}
</script>

<style scoped>
.section-group {
  margin-bottom: var(--cg-space-4);
}

.section-content {
  margin-top: var(--cg-space-2);
}
</style>
