<script setup lang="ts">
import { useRootStore } from '../stores/root'

const { root, refers } = defineProps<{
    root: string,
    refers: string[]
}>()

const rootStore = useRootStore()

function handleClick() {
    rootStore.$patch({ root, refers })
}
</script>

<template>
    <div @click="handleClick">
        <div v-text="root"></div>
        <div v-text="refers"></div>
    </div>
</template>