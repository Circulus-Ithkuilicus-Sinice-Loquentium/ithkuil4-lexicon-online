import { defineStore } from 'pinia'
import { Spec } from '../types'

export const useRootStore = defineStore('root', {
    state: () => {
        return {
            root: "",
            refers: [],
            stems: undefined,
            notes: undefined
        } as {
            root: string,
            refers: string[],
            stems: [
                Spec | string,
                Spec | string,
                Spec | string,
            ] | undefined,
            notes: string | undefined
        }
    },
})