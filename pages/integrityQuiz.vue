<script setup>
const onClickLeft = () => history.back();
const router = useRouter();
const gotoAnswer = () => {
    router.push('/integrityQuizAnswer')
}
const gotoReport = () => {
    router.push('/integrityQuizReport')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="廉政教育答题" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <img src="/public/integrityQuiz/1.jpg" alt="">
        <div class="flex justify-evenly items-center mt0.5rem mb0.5rem">
            <div @click="gotoAnswer()" class="w47% h6rem rounded-0.3rem bg-#259386 color-#fff flex justify-center items-center">
                开始答题
            </div>
            <div @click="gotoReport()" class="w47% h6rem rounded-0.3rem bg-#259386 color-#fff flex justify-center items-center">
                查看报告
            </div>
        </div>
        <img src="/public/integrityQuiz/2.jpg" alt="">
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
