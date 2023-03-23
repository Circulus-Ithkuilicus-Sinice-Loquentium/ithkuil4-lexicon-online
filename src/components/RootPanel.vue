<script setup lang="ts">
import { useRootStore } from '../stores/root';
import { marked } from 'marked'
import StemViewer from './StemViewer.vue';
import Label from './Label.vue'
import InfoIcon from '../assets/info-circle.svg'

const lexionStore = useRootStore()
</script>

<template>
    <div class="root">
        <h2 class="root" v-text="`-${lexionStore.root}-`"></h2>
        <div class="labels">
            <Label v-for="paraphrase in lexionStore.refers" :name="paraphrase"></Label>
        </div>
        <StemViewer v-if="lexionStore.stems?.length === 3" :stems="lexionStore.stems" />
        <section class="notes" v-if="lexionStore.notes !== undefined">
            <div class="title">
                <img :src="InfoIcon">
                <h3>Notes</h3>
            </div>
            <div class="content" v-html="marked(lexionStore.notes)"></div>
        </section>
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

    .notes {
        margin-top: 32px;
        box-shadow: rgba(104, 112, 118, 0.08) 0px 12px 20px 6px;
        padding: 16px;
        border-radius: 8px;

        .title {
            display: flex;
            column-gap: 8px;
            img {
                width: 24px;
            }
            h3 {
                margin: 0;
                font-size: 20px;
            }
        }

        .content {
            line-height: 22px;
        }
    }
}
</style>
