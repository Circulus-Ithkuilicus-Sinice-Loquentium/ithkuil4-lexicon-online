<script setup lang="ts">
defineProps<{
    lexion: string,
    refers: string[]
}>()
</script>

<template>
    <div>
        <div v-text="lexion"></div>
        <div v-text="refers"></div>
    </div>
</template>