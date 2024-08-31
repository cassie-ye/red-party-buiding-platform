<script setup>
const onClickLeft = () => history.back();
const router = useRouter()
// const go = () => {
//     window.open('https://www.ctrip.com/')
// }
const gotoCheckIn = () => {
    router.push('/checkIn')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="打卡清单" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="m0.5rem bg-#fff p0.5rem rounded-0.5rem pl1rem pr1rem font-size-0.9rem
        flex justify-between items-center
        ">
            <div>
                <p>打卡时间：<span class="font-bold">2024-09-10</span></p>
                <p class="mt0.1rem">基地地址：<span class="font-bold">嘉兴南湖</span></p>
                <p class="mt0.1rem">打卡人：<span class="font-bold">Cassie燁</span></p>
            </div>
            <van-button @click="gotoCheckIn()" size="small" color="linear-gradient(to right, #ff6034, #ee0a24)">
                去打卡
            </van-button>
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
