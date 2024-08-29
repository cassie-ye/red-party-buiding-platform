<script setup>
const onClickLeft = () => history.back();
const tabTitleList = ref([
    "全部订单",
    "待付款",
])
const isPay = ref(false)
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="我的订单" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <!-- 滑动标签页 -->
        <van-tabs v-model:active="active" animated>
            <van-tab v-for="(item, index) in tabTitleList" :title="item">
                <div class="w-full pl0.5rem pr0.5rem mt0.5rem flex justify-between flex-wrap">
                    <div class="w-full h9rem bg-#fff rounded-0.5rem p0.5rem" :class="isPay ? 'h8.5rem' : 'h9rem'">
                        <div class="w-full ">
                            <div class="font-size-0.9rem flex justify-between">
                                <p>订单编号： 1234567890</p>
                                <p v-if="isPay" class="color-red-5">交易完成</p>
                                <p v-else class="color-orange-5">订单已提交</p>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex mt0.5rem">
                                    <img class="w4rem h4rem rounded-0.5rem mr0.5rem" src="/public/red-base/top-bg.jpg"
                                        alt="">
                                    <div class="">
                                        <p class="font-size-0.9rem font-bold">嘉兴南湖基地{{ "XXXX项目" }}</p>
                                        <van-tag color="#ef4444" plain>研学时间：2024-09-09</van-tag>
                                    </div>
                                </div>
                                <div class="flex items-center font-size-0.9rem mt3rem justify-end">
                                    <span v-if="isPay" class="font-size-0.8rem">实付款</span>
                                    <span class="color-red-5 font-bold font-size-1.1rem">￥</span>
                                    <span class="color-red-5 font-bold font-size-1.1rem">374</span>
                                </div>
                            </div>
                            <div @click="" v-if="isPay" class="color-blue font-size-0.7rem flex justify-end mt0.5rem">
                                查看订单详情
                            </div>
                            <div v-else class="flex justify-end">
                                <div class="color-#fff w4.5rem h1.5rem rounded-0.3rem flex justify-center items-center bg-orange font-size-0.8rem flex justify-end mt0.5rem">
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
