<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <span v-text="name"></span>
</template>

<style scoped>
span {
    flex-shrink: 0;
    padding: 4px 8px;
    border-radius: 8px;
}
</style>