<script setup lang="ts">
import { useRootStore } from '../stores/root';

const lexionStore = useRootStore()
</script>

<template>
    <div>
        <div v-text="lexionStore.root"></div>
        <div v-text="lexionStore.refers"></div>
        <div v-for="stem in lexionStore.stems">
            <div v-text="stem"></div>
        </div>
    </div>
</template>
