<script setup lang="ts">
import { Ref, ref } from 'vue';
import SearchItem from './SearchItem.vue'
import { search } from '../utils'
import { Root } from '../types';

const list: Ref<Root[]> = ref([])

function handleSearch(e: Event) {
    list.value = search((e.target as HTMLInputElement).value);
}
</script>

<template>
    <div>
        <input @change="handleSearch">
        <div class="results" v-if="list.length > 0">
            <SearchItem v-for="item in list" :root="item.root" :refers="item.refers" />
        </div>
    </div>
</template>

<style scoped lang="less">
.results {
    user-select: none;
    cursor: pointer;
    border: 1px #000 solid;

    div {
        border-bottom: 1px #000 solid;
    }

    div:last-child {
        border: none;
    }
}
</style>
