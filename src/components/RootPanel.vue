<script setup lang="ts">
import { useRootStore } from '../stores/root';
import StemViewer from './StemViewer.vue';
import Label from './Label.vue'

const lexionStore = useRootStore()
</script>

<template>
    <div class="root">
        <h2 class="root" v-text="lexionStore.root"></h2>
        <div class="labels">
            <Label v-for="paraphrase in lexionStore.refers" :name="paraphrase"></Label>
        </div>
        <StemViewer v-if="lexionStore.stems?.length === 3" :stems="lexionStore.stems" />
    </div>
</template>

<style scoped lang="less">
div.root {
    padding: 8px;

    h2.root {
        font-size: 48px;
        margin: 0 0 16px 16px;
        font-weight: normal;
        font-family: serif;
    }

    .labels {
        display: flex;
        flex-wrap: wrap;
        column-gap: 4px;
        row-gap: 4px;
        margin-bottom: 16px;
    }

    .stemViewer {
        margin: 8px;
    }
}
</style>
