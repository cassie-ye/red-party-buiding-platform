<script setup>
import { useUserStore } from "../store/user.js"
const onClickLeft = () => history.back();
const isCheckIn = ref(false)
const isRealCheckIn = ref(false)
const startCheckIn = () => {
    isCheckIn.value = true
    setTimeout(() => {
        isCheckIn.value = false
        isRealCheckIn.value = true
        updateTime()
        // 拿到当前时间 21:43:26
        console.log(currentTime.value)
    }, 4400)
}
// #05cb8e

const currentTime = ref('')
// 定义一个函数来更新时间显示
function updateTime() {
    var now = new Date(); // 获取当前时间
    var hours = now.getHours().toString().padStart(2, '0'); // 获取小时数并格式化为两位数
    var minutes = now.getMinutes().toString().padStart(2, '0'); // 获取分钟数并格式化为两位数
    var seconds = now.getSeconds().toString().padStart(2, '0'); // 获取秒数并格式化为两位数
    currentTime.value = hours + ":" + minutes + ":" + seconds
}

// 使用setInterval来每秒钟调用一次updateTime函数
setInterval(updateTime, 1000); // 1000毫秒 = 1秒

/**
 * 从Pinia中拿到当前位置
 */
const userStore = useUserStore()
const currentPosition = ref({})
currentPosition.value = userStore.userInfo.currentPosition.fullPosition

</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="打卡清单" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="w-full h-full flex flex-col items-center">
            <div class="flex items-center bg-#fff pl1rem pr1rem pt0.7rem pb0.7rem w-92% rounded-0.8rem justify-between mt1rem">
                <div class="flex items-center">
                    <img class="w3.2rem h3.2rem rounded-0.5rem" src="/public/red-base/top-bg.jpg" alt="">
                    <div class="ml1rem">
                        <p class="font-size-1rem">Cassie燁</p>
                        <p class="color-#B9BABC font-size-0.9rem">宁波市阿拉阿拉事业单位</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <van-icon name="sign" size="24"/>
                    <p class="font-size-0.8rem">打卡</p>
                </div>
            </div>
            <div class="font-bold mt2rem">
                打卡基地：宁波市四明山国家公园
            </div>
            <!-- <p>红色基地打卡：四明山</p> -->
            <div @click="startCheckIn"
                class="w11.3rem h11.3rem rounded-50% mt2.15rem flex flex-col justify-center items-center  color-#fff"
                :class="isRealCheckIn ? 'bg-#02affc' : 'bg-#05cb8e'">
                <p>基地打卡：{{ isRealCheckIn ? '已打卡' : '未打卡' }}</p>
                <p class="mt0.5rem">{{ currentTime }}</p>
            </div>
            <div class="flex items-center font-size-0.9rem mt2rem">
                <van-icon class="mr0.5rem" name="location-o" size="20" />
                {{ currentPosition }}
            </div>
        </div>
        <svg v-if="isCheckIn" class="mt3.58rem">
            <circle class="clock" cx="200" cy="200" r="45" :class="isCheckIn ? 'circle' : ''" />
        </svg>
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

svg {
    /* background: #ffece3; */
    width: 25rem;
    height: 25rem;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
}

.circle {
    fill: transparent;
    stroke: rgba(255, 255, 255, .7);
    stroke-width: 5.6rem;
    stroke-dasharray: 471;
    stroke-dashoffset: 471;
    animation: clock-animation 7s linear infinite;
    transform: rotate(-90deg);
    transform-origin: center;
}

@keyframes clock-animation {
    0% {
        stroke-dashoffset: 471;
    }

    100% {
        stroke-dashoffset: 0;
    }
}
</style>
