import { defineStore } from 'pinia'
import { Spec } from '../types'

export const useRootStore = defineStore('root', {
    state: () => {
        return { 
            root: "",
            refers: [] as string[],
            stems: undefined as [
                Spec | string,
                Spec | string,
                Spec | string,
            ] | undefined
        } 
    },
})