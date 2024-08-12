<script setup>
const router = useRouter()
const onClickLeft = () => history.back();
const rateValue = ref(3)
const gotoPackageSelection = () => {
    router.push('/packageSelection')
}
</script>

<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="嘉兴南湖|金牌说" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <van-swipe height="370" class="">
            <van-swipe-item>
                <img src="/public/culturalTravelClockIn/1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="/public/culturalTravelClockIn/2.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="/public/culturalTravelClockIn/3.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="/public/culturalTravelClockIn/4.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="/public/culturalTravelClockIn/5.jpg" alt="">
            </van-swipe-item>
            <template #indicator="{ active, total }">
                <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
            </template>
        </van-swipe>
        <div class="bg-#fff p1rem">
            <p class="flex items-center color-red-5">
                <span class="font-bold">￥</span>
                <span class="font-size-1.5rem font-bold">148 - 1599</span>
            </p>
            <p class="mt0.2rem font-size-1.5rem font-bold">嘉兴南湖 金牌解说</p>
            <div class="flex justify-between mt0.2rem items-center">
                <p>走进嘉兴南湖领略党建知识</p>
                <p class="color-#9F9F9F font-size-0.8rem">1.1w人已体验</p>
            </div>
            <div class="p0.2rem border-0.05rem border-solid border-#FA9B00
            color-#FA9B00 font-size-0.8rem mt0.5rem bg-#FFFCED rounded-0.2rem
            w12rem
            ">3小时讲解时长 | 解读红色故事</div>
        </div>
        <div class="mt0.6rem bg-#fff p1rem">
            <p class="font-bold">选择套餐·日期</p>
            <div class="flex">
                <div
                    class="mt0.5rem flex flex-col justify-evenly items-center pt0.3rem pb0.3rem border-solid border-0.05rem border-#DEDEDE w6.5rem mr0.3rem font-size-0.8rem rounded-0.3rem">
                    <p>今天 08-11</p>
                    <p>不可约</p>
                </div>
                <div
                    class="mt0.5rem flex flex-col justify-evenly items-center pt0.3rem pb0.3rem border-solid border-0.05rem border-#DEDEDE w6.5rem mr0.3rem font-size-0.8rem rounded-0.3rem">
                    <p>今天 08-11</p>
                    <p>不可约</p>
                </div>
                <div
                    class="mt0.5rem flex flex-col justify-evenly items-center pt0.3rem pb0.3rem border-solid border-0.05rem border-#DEDEDE w6.5rem mr0.3rem font-size-0.8rem rounded-0.3rem">
                    <p>今天 08-11</p>
                    <p>不可约</p>
                </div>
                <div @click="gotoPackageSelection"
                    class="w3rem mt0.5rem flex flex-col justify-center items-center   border-solid border-0.05rem border-#DEDEDE mr0.3rem font-size-0.8rem rounded-0.3rem">
                    更多<br>日期
                </div>
            </div>
        </div>
        <div class="mt0.6rem bg-#fff p1rem">
            <div class="flex justify-between">
                <span class="font-bold font-size-1.1rem">评价</span>
                <div class="flex items-center">
                    <p>全部（8）</p>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div>
                <div class="flex mt0.8rem items-center">
                    <img src="/public/red-base/top-bg.jpg" alt="" class="w3rem h3rem rounded-50% ">
                    <div class="ml1rem">
                        <p>匿名用户</p>
                        <van-rate v-model="rateValue" :size="20" color="#ffd21e" void-icon="star" void-color="#eee" />
                    </div>
                </div>
                <p class="mt0.6rem color-#909090 font-size-0.85rem">评价时间：2024-03-05 12:14:39</p>
                <p class="mt0.3rem">非常好，值得拥有</p>
            </div>
        </div>
        <div class="mt0.6rem bg-#fff p1rem">
            <p class="font-bold mb1rem">产品详情</p>
            <img src="/public/culturalTravelClockIn/1.jpg" alt="">
        </div>
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" />
            <van-action-bar-icon icon="shop-o" text="店铺" />
            <van-action-bar-button color="#be99ff" type="warning" text="加入购物车" @click="addCart()" />
            <van-action-bar-button color="#7232dd" type="danger" text="立即购买" />
        </van-action-bar>
    </div>
</template>
<style scoped>
.box-shadow {
    box-shadow: 0 2px 4px rgba(.18, .18, .18, .18), 0 0 6px rgba(0, 0, 0, .15)
}

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

.shenglue {
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}
</style>
