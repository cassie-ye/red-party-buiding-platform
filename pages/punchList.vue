<script setup>
const onClickLeft = () => history.back();
const getRandomLightColor = () => {
    const r = Math.floor(Math.random() * 56 + 200); // 200-255
    const g = Math.floor(Math.random() * 56 + 200); // 200-255
    const b = Math.floor(Math.random() * 56 + 200); // 200-255
    return `rgb(${r},${g},${b})`;
};
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="打卡清单" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div v-for="(item, index) in 10" :key="index" class="relative mt0.5rem ml0.5rem mr0.5rem rounded-0.5rem p1rem pt1rem pb1rem"
        :style="{ backgroundColor: getRandomLightColor() }">
            <div class="flex items-center">
                <i class=" iconfont icon-dizhi font-size-1.2rem mr0.5rem"></i>
                <p class="">打卡地点：北京天安门</p>
            </div>
            <div class="flex items-center">
                <i class="iconfont icon-shijian font-size-1.2rem mr0.5rem "></i>
                <p>打卡时间：2024-09-09 13:45:34</p>
            </div>
            <div class="flex items-center">
                <i class="iconfont icon-yonghu font-size-1.2rem mr0.5rem"></i>
                <p>打卡人：Cassie燁</p>
            </div>
            <img class="absolute right-0 bottom-0 w4rem" src="/public/culturalTravelClockIn/daka.png" alt="">
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

::v-deep .van-nav-bar__arrow {
    color: black;
}

::v-deep .van-nav-bar__text {
    color: black;
}

::v-deep .van-ellipsis {
    color: black
}
</style>
