<template>
  <div class="search-bar">
    <SearchInput
      :model-value="modelValue"
      :placeholder="placeholder"
      :debounce="debounce"
      :clearable="clearable"
      @update:model-value="$emit('update:modelValue', $event)"
      @clear="$emit('clear')"
    />
  </div>
</template>

<script setup lang="ts">
import SearchInput from '../atoms/SearchInput.vue'

withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  debounce?: number
  clearable?: boolean
}>(), {
  placeholder: '🔍 Search...',
  debounce: 300,
  clearable: true
})

defineEmits<{
  'update:modelValue': [value: string]
  clear: []
}>()
</script>

<style scoped>
.search-bar {
  margin-bottom: var(--cg-space-4);
}
</style>
