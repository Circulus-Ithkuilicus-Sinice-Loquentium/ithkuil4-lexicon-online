<script setup lang="ts">
import { useRootStore } from '../stores/root'
import Label from './Label.vue'
import { Spec } from '../types';

const props = defineProps<{
    root: string,
    refers: string[]
    stems?: [
        Spec | string,
        Spec | string,
        Spec | string,
    ],
    notes?: string
}>()

const rootStore = useRootStore()

const handleClick = () => {
    rootStore.$patch(props)
    console.log(rootStore.root, props.root)
}
</script>

<template>
    <div :class="`item ${rootStore.root === root ? 'selected' : ''}`" @click="handleClick">
        <div class="root" v-text="root"></div>
        <div class="labels">
            <Label v-for="paraphrase in refers" :name="paraphrase"></Label>
        </div>
    </div>
</template>

<style scoped lang="less">
.item {
    display: flex;
    column-gap: 12px;
    transition: all ease .2s;
    border-radius: 8px;
    position: relative;

    .root {
        font-family: serif;
        font-size: 32px;
    }

    .labels {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        column-gap: 4px;
        align-items: center;

        span {
            color: rgb(126, 134, 140);
            background-color: #f1f3f5;
            transition: all ease .2s;
        }
    }

    .labels::after {
        content: "";
        position: absolute;
        right: 0;
        display: block;
        width: 100px;
        height: 30px;
        background: linear-gradient(to right, transparent, #ffffff);
        border-radius: 0 8px 8px 0;
    }
}

.item.selected {
    background: #f1f3f5;

    .labels>span {
        background-color: #e1e3e5;
    }

    .labels::after {

        background: linear-gradient(to right, transparent, #f1f3f5);
    }
}
</style>