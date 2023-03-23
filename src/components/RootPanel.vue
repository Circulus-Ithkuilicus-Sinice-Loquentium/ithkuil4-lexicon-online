<script setup lang="ts">
import { useRootStore } from '../stores/root';
import { marked } from 'marked'
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
        <div v-if="lexionStore.notes !== undefined" v-html="marked(lexionStore.notes)"></div>
    </div>
</template>

<style scoped lang="less">
div.root {
    margin: 36px;

    h2.root {
        font-size: 48px;
        margin: 16px 0 16px 16px;
        font-weight: normal;
        font-family: serif;
    }

    .labels {
        display: flex;
        flex-wrap: wrap;
        column-gap: 4px;
        row-gap: 4px;
        margin-bottom: 16px;

        span {
            background-color: #363449;
            color: #fff;
        }
    }

    .stemViewer {
        margin: 8px;
    }
}
</style>
