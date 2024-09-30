<script setup>
const onClickLeft = () => history.back();
// rate的分数
const rateValue = ref(3);

const showAddCartPannel = ref(false)
const addCart = () => {
    showAddCartPannel.value = true
}

const stepperValue = ref(1)

const activeIndex = ref(0)

const successToast = () => {
    showSuccessToast('加入购物车成功');
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="环球文旅集章护照本" left-text="返回" left-arrow
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
            <p class="flex items-center color-#F6A50C">
                <span class="font-bold">￥</span>
                <span class="font-size-1.5rem font-bold">28.8</span>
            </p>
            <p class="mt0.2rem font-size-1.5rem font-bold">环球文旅集章护照本</p>
            <div class="flex justify-between mt0.2rem">
                <p>一本护照打卡全球</p>
                <p class="color-#9F9F9F">已售：已售3794</p>
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
        <van-action-sheet v-model:show="showAddCartPannel" title="添加到购物车">
            <div class="content p1rem">
                <div class="flex items-center border-b-8 pb0.7rem">
                    <div class="pr1.5rem">
                        <div class="font-bold">
                            <van-icon name="location-o" />
                            浙江省阿拉路099号阿拉阿拉单位
                        </div>
                        <div>
                            <van-icon name="manager-o" />
                            Cassie燁 <span class="color-#9F9F9F">13985631485</span>
                        </div>
                    </div>
                    <van-icon name="arrow" />
                </div>
                <div class="mt1rem flex ">
                    <img class="w5.5rem h5.5rem rounded-0.4rem mr1rem" src="/public/culturalTravelClockIn/1.jpg" alt="">
                    <div class="flex flex-col justify-between">
                        <p class="flex items-center color-red-5">
                            <span class="font-bold">￥</span>
                            <span class="font-size-1.2rem font-bold">28.8</span>
                        </p>
                        <van-stepper v-model="stepperValue" />
                        <p class="color-#9F9F9F font-size-0.8rem">有货</p>
                    </div>
                </div>
                <div class="mt1rem">
                    <p class="font-bold mb0.5rem">颜色分类</p>
                    <div class="flex flex-wrap">
                        <div v-for="(item,index) in 2" class="pl1rem pr1rem pt0.5rem pb0.5rem rounded-0.3rem font-size-0.9rem  mr0.8rem mb0.5rem"
                        :class="activeIndex==index?'bg-purple color-#fff':'bg-#E3E3E3'" @click="activeIndex=index"
                        >
                            深蓝色
                        </div>
                    </div>
                </div>
                <div class="mt1rem ml5%">
                    <div class="w90% h2.5rem bg-purple flex justify-center items-center rounded-1.3rem color-#fff font-bold"
                    @click="successToast()"
                    >
                        加入购物车
                    </div>
                </div>
            </div>
        </van-action-sheet>
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

.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}
</style>
