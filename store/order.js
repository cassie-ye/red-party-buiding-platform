import { defineStore } from 'pinia'
import { getMyNoPayOrderAPI, deleteNoPayOrdersAPI, judgeIsExistNoPayOrderAPI, getMyAllOrdersAPI } from '../utils/apis/pay.ts'
export const useOrderStore = defineStore('orderStore', () => {
    // 没有支付的订单对象
    const noPayOrderObj = ref({})

    // 我的全部订单数组
    const myAllOrderList = ref([])

    // 是否存在未支付的订单
    const isExistNoPayOrder = ref(false)

    /**
     * 调接口判断是否存在未支付的订单
     * @returns boolean
     */
    const judgeIsExistNoPayOrder = async () => {
        const res = await judgeIsExistNoPayOrderAPI()
        isExistNoPayOrder.value = res
        return res
    }

    /**
     * 调接口获取我没有支付的订单
     */
    const getMyNoPayOrder = async () => {
        const res = await getMyNoPayOrderAPI()
        noPayOrderObj.value = res
    }

    /**
     * 调接口删除未支付的订单
     */
    const deleteNoPayOrders = async () => {
        const res = await deleteNoPayOrdersAPI()
        if(res){
            showSuccessToast('您未支付的订单已经取消');
        }
    }

    /**
     * 调接口获取我的全部订单
     */
    const getMyAllOrders = async () => {
        const res = await getMyAllOrdersAPI()
        myAllOrderList.value = res
    }

    return { noPayOrderObj, isExistNoPayOrder,myAllOrderList,
        getMyNoPayOrder, deleteNoPayOrders, judgeIsExistNoPayOrder, getMyAllOrders

    }
}, {
    persist: true,
})
