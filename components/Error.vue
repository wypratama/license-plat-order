<script setup lang="ts">
const { error } = defineProps<{
  error: {
    message: string
  }
}>()
</script>

<template>
  <div>
    error getting data. reason: {{ error.message }}
  </div>
</template>
