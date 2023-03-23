<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import SearchItem from './SearchItem.vue'
import { search } from '../utils'
import { Root } from '../types';

const list: Ref<Root[]> = ref([])

function handleSearch(e: Event) {
    list.value = search((e.target as HTMLInputElement).value);
}

onMounted(() => {
    list.value = search('');
})
</script>

<template>
    <div>
        <div class="input">
            <input @change="handleSearch" id="searchInput" placeholder="Search...">
        </div>
        <div class="results" v-if="list.length > 0">
            <SearchItem v-for="item in list" :root="item.root" :refers="item.refers" :stems="item.stems"
                :notes="item.notes" />
        </div>
        <span class="tip" v-if="list.length === 10">Only shows the first 10 results at most.</span>
    </div>
</template>

<style scoped lang="less">
.input {
    display: flex;
    justify-content: center;
    margin: 24px 0 16px;

    input {
        background: #eceef0;
        border-radius: 20px;
        font-size: 16px;
        padding: 8px 16px;
        border: none;
        background-color: #eceef0;
        outline: none;
    }
}

.results {
    user-select: none;
    cursor: pointer;
    margin: 36px 36px 28px;
    box-shadow: rgba(104, 112, 118, 0.08) 0px 12px 20px 6px;
    border-radius: 8px;
    padding: 8px;

    div {
        padding: 8px 16px;
    }
}

.tip {
    display: flex;
    justify-content: center;

    color: #c1c3c5;
}
</style>
