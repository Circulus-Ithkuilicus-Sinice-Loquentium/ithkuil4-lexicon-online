<script setup lang="ts">
import { useRootStore } from '../stores/root';

const lexionStore = useRootStore()
</script>

<template>
    <div>
        <div v-text="lexionStore.root"></div>
        <div v-text="lexionStore.refers"></div>
    </div>
</template>
