<script setup lang="ts">
import { Ref, ref } from 'vue';
import SearchItem from './components/SearchItem.vue'
import { search } from './utils'
import { Lexion } from './types';

const list: Ref<Lexion[]> = ref([])

function handleSearch(e: Event) {
    list.value = search((e.target as HTMLInputElement).value);
}
</script>

<template>
    <input @change="handleSearch">
    <div>
        <SearchItem v-for="item in list" :lexion="item.lexion" :refers="item.refers" />
    </div>
</template>
