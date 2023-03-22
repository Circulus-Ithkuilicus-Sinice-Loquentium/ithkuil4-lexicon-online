<script setup lang="ts">
import { useRootStore } from '../stores/root'
import { Spec } from '../types';

const { root, refers, stems } = defineProps<{
    root: string,
    refers: string[]
    stems?: [
        Spec | string,
        Spec | string,
        Spec | string,
    ]
}>()

const rootStore = useRootStore()

function handleClick() {
    rootStore.$patch({ root, refers, stems })
}
</script>

<template>
    <div @click="handleClick">
        <div v-text="root"></div>
        <div v-text="refers"></div>
    </div>
</template>