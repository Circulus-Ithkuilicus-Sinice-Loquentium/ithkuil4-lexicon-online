<script setup lang="ts">
import { ref } from 'vue'
import { Spec } from '../types';

defineProps<{
    stems: [
        Spec | string,
        Spec | string,
        Spec | string
    ]
}>()

let currentStem = ref(0);
</script>

<template>
    <div class="switcher">
        <div class="inner">
            <span @click="currentStem = 0" :class="currentStem === 0 ? 'selected' : ''">Stem 1</span>
            <span @click="currentStem = 1" :class="currentStem === 1 ? 'selected' : ''">Stem 2</span>
            <span @click="currentStem = 2" :class="currentStem === 2 ? 'selected' : ''">Stem 3</span>
        </div>
    </div>
    <div class="viewer">
        <div v-if="typeof stems[currentStem] === 'string'" class="specs">
            <span class="head">Unspecified</span>
            <span class="content" v-text="stems[currentStem]"></span>
        </div>
        <div v-else class="specs">
            <template v-for="spec in (['BSC', 'CTE', 'CSV', 'OBJ'] as const)">
                <span class="head" v-text="spec"></span>
                <span class="content" v-text="(stems[currentStem] as Spec)[spec]"></span>
            </template>
        </div>
    </div>
</template>

<style scoped lang="less">
.switcher {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    .inner {
        display: flex;
        justify-content: space-around;
        width: 320px;
        border-radius: 16px;
        background-color: #eceef0;
        height: 48px;
        overflow: hidden;
        user-select: none;

        span {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all ease .2s;
        }

        span.selected {
            background-color: #363449;
            color: #fff;
            cursor: auto;
        }
    }
}

.viewer {
    box-shadow: rgba(104, 112, 118, 0.08) 0px 12px 20px 6px;
    padding: 16px;
    border-radius: 8px;

    .head {
        background: #363449;
        color: #fff;
        display: flex;
        padding: 6px 12px;
        border-radius: 8px;
        max-width: fit-content;
        height: fit-content;
    }

    .content {
        color: #11181c;
        padding-top: 5px;
        line-height: 22px;
    }

    .specs {
        display: grid;
        grid-template-columns: min-content auto;
        column-gap: 16px;

        row-gap: 16px;
    }
}
</style>