<script setup lang="ts">
import { useLexionStore } from '../stores/lexion';

const lexionStore = useLexionStore()
</script>

<template>
    <div v-text="lexionStore.lexion"></div>
    <div v-text="lexionStore.refers"></div>
</template>
