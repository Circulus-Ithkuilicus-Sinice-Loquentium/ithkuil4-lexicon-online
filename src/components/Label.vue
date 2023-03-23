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
    background-color: #363449;
    color: #fff;
    padding: 4px 8px;
    border-radius: 8px;
}
</style>