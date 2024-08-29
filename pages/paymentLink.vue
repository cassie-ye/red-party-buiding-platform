<script setup>
import { paymentLinkAPI } from "../utils/apis/pay.ts";
const route = useRoute()
const router = useRouter()
const onClickLeft = () => history.back();
const currentSelectedPayMethodIndex = ref(0)

// const paymentLink = async () => {
//     const res = await paymentLinkAPI(route.query)
//     console.log(res)
// }

/**
 *  选择支付方式 支付宝
 * @param index
 */
const selectPayMethod = (index) => {
    currentSelectedPayMethodIndex.value = index
}

/**
 * 确认支付 跳转到支付宝沙箱
 */
const confirmPayment = () => {
    if (currentSelectedPayMethodIndex.value == 0) {
        // TODO：支付链接
        window.open(`http://10.10.12.170:10087/alipay/pay?subject=${route.query.subject}&totalAmount=${route.query.totalAmount}&traceNo=${route.query.traceNo}`)
    }
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="安全收银台" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="p1rem">
            <div class="flex justify-center">
                <p class="font-bold">
                    <span class="font-size-1.4rem">￥</span>
                    <span class="font-size-2.5rem">{{ route.query.totalAmount }}</span>
                </p>
            </div>
            <div>
                <p>支付方式</p>
                <div class="bg-#fff pt0.5rem pb0.5rem pl1rem pr1rem mt0.5rem rounded-0.5rem">
                    <div class="flex justify-between items-center mt0.7rem" @click="selectPayMethod(0)">
                        <div class="flex items-center">
                            <i class="iconfont icon-zhifubao1 color-#1879FE font-size-1.2rem mr0.8rem"></i>
                            <span class="font-size-1.1rem">支付宝支付</span>
                        </div>
                        <div class="mt0.5rem w1.4rem h1.4rem  border-solid border-0.08rem border-#DEDEDE rounded-50%"
                            :class="currentSelectedPayMethodIndex === 0 ? 'bg-blue-4 border-solid border-0.08rem border-blue-4 color-#fff flex justify-center items-center' : ''">
                            <van-icon v-if="currentSelectedPayMethodIndex === 0" name="success" />
                        </div>
                    </div>
                    <div class="flex justify-between items-center  mt0.7rem" @click="selectPayMethod(1)">
                        <div class="flex items-center">
                            <i class="iconfont icon-weixinzhifu color-#41AE38 font-size-1.3rem mr0.7rem"></i>
                            <span class="font-size-1.1rem">微信支付</span>
                        </div>
                        <div class="mt0.5rem w1.4rem h1.4rem  border-solid border-0.08rem border-#DEDEDE rounded-50%"
                            :class="currentSelectedPayMethodIndex === 1 ? 'bg-blue-4 border-solid border-0.08rem border-blue-4 color-#fff flex justify-center items-center' : ''">
                            <van-icon v-if="currentSelectedPayMethodIndex === 1" name="success" />
                        </div>
                    </div>
                    <div class="flex justify-between items-center  mt0.7rem" @click="selectPayMethod(2)">
                        <div class="flex items-center">
                            <i class="iconfont icon-jiansheyinhang color-#0E3484 font-size-1.5rem mr0.5rem"></i>
                            <span class="font-size-1.1rem">建设银行储蓄卡</span>
                        </div>
                        <div class="mt0.5rem w1.4rem h1.4rem  border-solid border-0.08rem border-#DEDEDE rounded-50%"
                            :class="currentSelectedPayMethodIndex === 2 ? 'bg-blue-4 border-solid border-0.08rem border-blue-4 color-#fff flex justify-center items-center' : ''">
                            <van-icon v-if="currentSelectedPayMethodIndex === 2" name="success" />
                        </div>
                    </div>
                </div>
            </div>
            <div @click="confirmPayment()"
                class="w90% ml5% mb2rem mt8rem bg-red-600 h2.5rem rounded-1.5rem color-#fff flex justify-center items-center font-size-0.9rem">
                确认支付
            </div>
        </div>

    </div>
</template>
<style scoped>
.van-nav-bar {
    background-color: #fff;
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

:deep(.van-action-bar) {
    height: 4rem;
}
</style>
