import { defineStore } from 'pinia'
export const useUserStore = defineStore('userStore', () => {
    const userInfo = ref({})
    return { userInfo }
}, {
    persist: true,
})
