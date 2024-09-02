<script setup>
import { useOrderStore } from "../store/order.js"
const router = useRouter()
const orderStore = useOrderStore()
let isExistNoPayOrder = ref()
isExistNoPayOrder.value = orderStore.isExistNoPayOrder

/**
 * 监听isExistNoPayOrder的值的变化
 * 当未付款的订单被删除的时候，isExistNoPayOrder的值会变为false，同时隐藏
 */
watch(() => orderStore.isExistNoPayOrder, (newValue, oldValue) => {
    isExistNoPayOrder.value = newValue
    console.log(isExistNoPayOrder.value)
})

const gotoPayOrders = () => {
    router.push({
        path: '/myOrder',
        query: { active: 1 }
    });
}
</script>
<template>
    <main>
        <!-- <NuxtPage /> -->
        <div @click="gotoPayOrders()" v-if="isExistNoPayOrder"
            class="fixed right-0 bottom-4rem bg-yellow-400 p0.3rem z-99999999999 flex items-center rounded-1.3rem">
            <div class="flex items-center mr0.3rem">
                <img class="w2.1rem h2.1rem rounded-50% mr0.5rem" src="/public/red-base/top-bg.jpg" alt="">
                <div class="font-size-0.8rem">
                    <p>等待支付</p>
                    <p>您有一笔订单<span class="color-red-5">未支付</span></p>
                </div>
            </div>
            <div class="flex items-center">
                <!-- <p class="font-size-0.8rem font-bold mr0.2rem">去支付</p> -->
                <i class="iconfont icon-youjiantou font-size-0.8rem"></i>
            </div>
        </div>
        <slot></slot>
    </main>
</template>
