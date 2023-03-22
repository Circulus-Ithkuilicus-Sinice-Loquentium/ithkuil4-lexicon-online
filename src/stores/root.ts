import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', {
    state: () => {
        return { 
            root: "",
            refers: [] as string[]
        } 
    },
})