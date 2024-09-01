<script setup>
// import { _backgroundColor } from '#tailwind-config/theme';

const onClickLeft = () => history.back();
const getRandomBrightColor = () => {
    const hue = Math.random() * 360; // 随机色相

    // 选择明亮的色调（饱和度和亮度较高）
    const saturation = 80 + Math.random() * 10; // 80-90% 饱和度
    const lightness = 50 + Math.random() * 20; // 50-70% 亮度

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
</script>
<template>
    <div class="bg-#fff ">
        <van-nav-bar :fixed="true" :placeholder="true" title="打卡时间轴" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="p1rem ">
            <p class="font-size-1.2rem font-bold mt0.5rem">共计10次打卡</p>
            <el-timeline style="max-width: 38rem;margin-top: 0.5rem;">
                <el-timeline-item v-for="i in 10" timestamp="2018/4" placement="top" size="large" color="#1CD5C7">
                    <el-card v-for="i in 3" class="mb0.5rem relative"
                        :style="{ backgroundColor: getRandomBrightColor() }">
                        <div class="flex justify-between">
                            <div>
                                <div class="flex items-center">
                                    <i class=" iconfont icon-dizhi font-size-1.2rem mr0.5rem"></i>
                                    <p class="">打卡地点：北京天安门</p>
                                </div>
                                <div class="flex items-center">
                                    <i class="iconfont icon-yonghu font-size-1.2rem mr0.5rem"></i>
                                    <p>打卡人：Cassie燁</p>
                                </div>
                                <div class="flex items-center">
                                    <i class="iconfont icon-yonghu font-size-1.2rem mr0.5rem"></i>
                                    <p>打卡时间：2024-09-08 13:05:45</p>
                                </div>
                                <img class="w-100% h8rem rounded-0.2rem mt0.5rem" src="/public/red-base/top-bg.jpg" alt="">

                            </div>
                        </div>
                        <img class="absolute right-0 top-0 w4rem" src="/public/culturalTravelClockIn/daka-white.png"
                            alt="">
                    </el-card>
                </el-timeline-item>
            </el-timeline>
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

.red-radio {
    color: red;
    /* 设置文字颜色为红色 */
}

.red-radio:checked::before {
    background-color: red;
    /* 设置选中状态时的背景色为红色 */
    border-color: red;
    /* 设置选中状态时的边框颜色为红色 */
}
</style>
