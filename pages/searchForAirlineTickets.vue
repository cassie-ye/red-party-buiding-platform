<script setup>
const router = useRouter()
const onClickLeft = () => history.back();
const activeIndex = ref(0)

const gotoFlightSubscription = () => {
    router.push('/flightSubscription')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="北京 ——> 上海" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="relative">
            <van-swipe class="p0.8rem bg-#fff h5.5rem " :loop="false" :width="60" :show-indicators="false">
                <van-swipe-item v-for="(item, index) in 8" :key="index"
                    class="rounded-0.5rem  mr0.4rem flex flex-col justify-center items-center font-size-0.8rem"
                    :class="activeIndex === index ? 'bg-#01C8D7 color-#fff' : 'color-#01C8D7'"
                    @click="activeIndex = index">
                    <p>08.13</p>
                    <p>今天</p>
                    <p>￥569</p>
                </van-swipe-item>
            </van-swipe>
            <div
                class="w3.5rem h3.9rem bg-#fff shadow-2xl absolute right-0 bottom-0.8rem flex flex-col justify-center items-center">
                <i class="iconfont icon-rili"></i>
                <p class="font-size-0.8rem">日历</p>
            </div>
        </div>
        <div v-for="(item, index) in 5" @click="gotoFlightSubscription" class="m0.5rem bg-#fff rounded-0.5rem p1rem pt0rem pb1rem">
            <div class=" flex justify-between items-center h5.5rem">
                <div class="flex items-center">
                    <div>
                        <p class="font-size-1.5rem font-bold">22:30</p>
                        <p class="font-size-0.9rem color-orange-5">北京大兴</p>
                    </div>
                    <i class="iconfont icon-daoda color-#01C8D7 font-size-3rem mb1.5rem ml1.8rem mr1.8rem"></i>
                    <div>
                        <p class="font-size-1.5rem font-bold ">22:30</p>
                        <p class="font-size-0.9rem color-orange-5">北京大兴</p>
                    </div>
                </div>
                <p class="flex items-center color-red-5 font-bold">
                    <span class="">￥</span>
                    <span class="font-size-1.5rem ">1486</span>
                </p>
            </div>
            <div class="flex font-size-0.9rem items-center">
                <i class="iconfont icon-zhongguoguohang mr0.3rem color-red-5"></i>
                <span class="color-#9F9F9F  mr0.5rem">国航CAB8686 | 空客321(中)</span>
                <p class="color-#48C1A7">
                    查看共享航班
                    <van-icon name="arrow-down" />
                </p>
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
</style>
