import { defineStore } from 'pinia'
export const useUserStore = defineStore('userStore', () => {
    const userInfo = ref({})
    const updateUserInfo = (obj) => {
        userInfo.value = obj
    }
    return { userInfo, updateUserInfo }
}, {
    persist: true,
})
