<script setup>
import { getMyNoPayOrderAPI, getMyAllOrdersAPI } from "../utils/apis/pay.ts"
const route = useRoute()
const router = useRouter()
const onClickLeft = () => history.back();
const tabTitleList = ref([
    "全部订单",
    "待付款",
])
const isPay = ref(true)

/**
 * 进入页面后首先展示全部订单还是待付款订单
 * 如果是从 等待支付通知块跳转过来的 就首先展示待付款订单
 * 否则就展示全部订单
 */
const activeTab = ref(0);
onMounted(() => {
    const active = route.query.active;
    if (active) {
        activeTab.value = Number(active); // 0-based index
    } else {
        activeTab.value = 0; // Default to the first tab
    }
});

const noPayOrderInfoObj = ref({})
/**
 * 获取未支付的订单信息 一般只有一个
 */
const getMyNoPayOrder = async () => {
    const res = await getMyNoPayOrderAPI()
    noPayOrderInfoObj.value = res
}
getMyNoPayOrder()

const myAllOrdersList = ref([])
/**
 * 获取全部订单
 */
const getMyAllOrders = async () => {
    const res = await getMyAllOrdersAPI()
    myAllOrdersList.value = res
}
getMyAllOrders()

/**
 * 点击全部订单的查看订单详情跳转到订单详情页面
 */
const gotoOrderDetails = (item) => {
    // console.log(item)
    router.push({
        path: '/orderDetails',
        query: { orderInfo:  JSON.stringify(item)  }
    });
}

/**
 * 点击跳转到支付宝沙箱
 */
const gotoAliPay = () => {
    const subject = noPayOrderInfoObj.value.basename+noPayOrderInfoObj.value.tripname+""
    const totalAmount = noPayOrderInfoObj.value.price
    const traceNo = noPayOrderInfoObj.value.id
    const url = `http://192.168.0.111:10087/alipay/pay?subject=${subject}&totalAmount=${totalAmount}&traceNo=${traceNo}`
    router.push({
        path: '/aliPay',
        query: { url }
    })
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="我的订单" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <!-- 滑动标签页 -->
        <van-tabs v-model:active="activeTab" animated>
            <van-tab v-for="(item, index) in tabTitleList" :title="item">
                <!-- 全部订单 -->
                <div v-if="index == 0" class="w-full pl0.5rem pr0.5rem mt0.5rem flex justify-between flex-wrap">
                    <div @click="gotoOrderDetails(item)" v-if="myAllOrdersList.length > 0"
                        v-for="(item, index) in myAllOrdersList" :key="index"
                        class="w-full h9rem bg-#fff rounded-0.5rem p0.5rem mb0.5rem"
                        :class="isPay ? 'h8.5rem' : 'h9rem'">
                        <div class="w-full ">
                            <div class="font-size-0.9rem flex justify-between">
                                <p>订单编号： {{ item.id }}</p>
                                <p v-if="isPay" class="color-red-5">交易完成</p>
                                <p v-else class="color-orange-5">订单已提交</p>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex mt0.5rem w15.5rem">
                                    <img class="w4rem h4rem rounded-0.5rem mr0.5rem" src="/public/red-base/top-bg.jpg"
                                        alt="">
                                    <div class="">
                                        <p v-if="item.tripname" class="font-size-0.9rem font-bold">{{ item.basename }}{{
                                            item.tripname }}</p>
                                        <p v-if="item.content" class="font-size-0.9rem font-bold">{{ item.basename }}
                                        </p>
                                        <van-tag v-if="item.tripname" color="#ef4444" plain>研学时间：{{
                                            item.startdate?.slice(0, 10) }}</van-tag>
                                        <div v-if="item.content" class="font-size-0.7rem color-orange-5">
                                            菜品：{{ item.content }}</div>
                                    </div>
                                </div>
                                <div class="flex items-center font-size-0.9rem mt3rem justify-end">
                                    <span v-if="isPay" class="font-size-0.8rem">实付款</span>
                                    <span class="color-red-5 font-bold font-size-1.1rem">￥</span>
                                    <span class="color-red-5 font-bold font-size-1.1rem">{{ item.price }}</span>
                                </div>
                            </div>
                            <div @click="" v-if="isPay" class="color-blue font-size-0.7rem flex justify-end mt0.5rem">
                                查看订单详情
                            </div>
                            <div v-else class="flex justify-end">
                                <div
                                    class="color-#fff w4.5rem h1.5rem rounded-0.3rem flex justify-center items-center bg-orange font-size-0.8rem flex justify-end mt0.5rem">
                                    立即支付
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="w-full flex justify-center">
                        <van-empty description="暂无订单" />
                    </div>
                </div>
                <!-- 未支付订单 -->
                <div v-if="index == 1" class="w-full pl0.5rem pr0.5rem mt0.5rem flex justify-between flex-wrap">
                    <div v-if="noPayOrderInfoObj = {}" class="w-full flex justify-center">
                        <van-empty description="暂无未支付订单" />
                    </div>
                    <div @click="gotoAliPay()" v-else class="w-full h9rem bg-#fff rounded-0.5rem p0.5rem"
                        :class="isPay ? 'h8.5rem' : 'h9rem'">
                        <div class="w-full">
                            <div class="font-size-0.9rem flex justify-between">
                                <p>订单编号： {{ noPayOrderInfoObj.id }}</p>
                                <!-- <p v-if="isPay" class="color-red-5">交易完成</p> -->
                                <p class="color-orange-5">订单已提交</p>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex mt0.5rem">
                                    <img class="w4rem h4rem rounded-0.5rem mr0.5rem" src="/public/red-base/top-bg.jpg"
                                        alt="">
                                    <div class="">
                                        <p class="font-size-0.9rem font-bold">{{ noPayOrderInfoObj.basename }}{{
                                            noPayOrderInfoObj.tripname }}</p>
                                        <van-tag color="#ef4444" plain>研学时间：{{ noPayOrderInfoObj.startdate?.slice(0, 10)
                                            }}</van-tag>
                                    </div>
                                </div>
                                <div class="flex items-center font-size-0.9rem mt3rem justify-end">
                                    <span v-if="isPay" class="font-size-0.8rem">实付款</span>
                                    <span class="color-red-5 font-bold font-size-1.1rem">￥</span>
                                    <span class="color-red-5 font-bold font-size-1.1rem">{{
                                        noPayOrderInfoObj.price }}</span>
                                </div>
                            </div>
                            <!-- <div @click="" v-if="isPay" class="color-blue font-size-0.7rem flex justify-end mt0.5rem">
                                查看订单详情
                            </div> -->
                            <div class="flex justify-end">
                                <div
                                    class="color-#fff w4.5rem h1.5rem rounded-0.3rem flex justify-center items-center bg-orange font-size-0.8rem flex justify-end mt0.5rem">
                                    立即支付
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<style scoped>
:deep(.van-nav-bar) {
    background-color: rgba(255, 255, 255, .6);
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
}

:deep(.van-nav-bar__arrow) {
    color: black;
}

:deep(.van-nav-bar__text) {
    color: black;
}

:deep(.van-ellipsis) {
    color: black
}
</style>
