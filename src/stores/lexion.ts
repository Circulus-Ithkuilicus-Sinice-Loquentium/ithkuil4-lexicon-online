import { defineStore } from 'pinia'

export const useLexionStore = defineStore('lexion', {
    state: () => {
        return { 
            lexion: "",
            refers: [] as string[]
        } 
    },
})