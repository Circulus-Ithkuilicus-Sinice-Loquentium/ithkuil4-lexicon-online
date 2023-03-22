<script setup lang="ts">
import { useLexionStore } from '../stores/lexion';

const { lexion, refers } = defineProps<{
    lexion: string,
    refers: string[]
}>()

const lexionStore = useLexionStore()

function handleClick() {
    lexionStore.$patch({ lexion, refers })
}
</script>

<template>
    <div @click="handleClick">
        <div v-text="lexion"></div>
        <div v-text="refers"></div>
    </div>
</template>