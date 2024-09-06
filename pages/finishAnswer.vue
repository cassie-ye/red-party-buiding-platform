<script setup>
const onClickLeft = () => history.back();
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="答题结束" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="bg-#259386 w-full h-vh flex flex-col items-center pt3rem">
            <img class="w8rem h8rem" src="/public/integrityQuiz/prize.png" alt="">
            <div class="relative">
                <img class="w12rem h3rem" src="/public/integrityQuiz/finish.png" alt="">
                <p class="absolute left-3.5rem bottom-0.8rem font-size-1.2rem color-#fff font-bold">答题结束</p>
            </div>
            <p class="color-#fff font-bold mt1rem ">本次答题得分为</p>
            <p class="color-#f6ea0e font-bold mt0.5rem font-size-1.6rem mb2rem">100
                <span class="font-size-1rem font-normal color-#fff ">分</span>
            </p>
            <van-button plain type="primary" style="padding-left: 3rem;padding-right: 3rem;">返回</van-button>
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
