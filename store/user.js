import { defineStore } from 'pinia'
export const useUserStore = defineStore('userStore', () => {
    // define userInfo
    const userInfo = ref({})
    /**
     * 修改用户信息
     * @param {*} obj
     */
    const updateUserInfo = (obj) => {
        userInfo.value = obj
    }
    /**
     * 修改用户当前位置
     * @param {*} obj
     */
    const updateUserInfoCurrentPosition = (obj) => {
        userInfo.value.currentPosition = obj
    }

    /**
     * 修改用户是否有未支付订单
     * @param {*} flag
     */
    const updateUserInfoHasNoPayOrder = (flag) => {
        userInfo.value.isNoPayOrder = flag
    }
    return { userInfo, updateUserInfo ,updateUserInfoCurrentPosition,updateUserInfoHasNoPayOrder}
}, {
    persist: true,
})
