<script setup>
const onClickLeft = () => history.back();
const router = useRouter()
const gotoHome = () => {
    router.push('/')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="下单成功" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="h-vh w-vw bg-#fff p1rem">
            <p class="font-size-1.5rem ">下单成功!</p>
            <div>
                <div class="mt1rem flex items-center justify-between">
                    <p>待发货</p>
                    <div class="flex items-center">
                        <p>查看详情</p>
                        <van-icon name="arrow" />
                    </div>
                </div>
                <div class="mt0.5rem flex">
                    <img class="w6rem h6rem rounded-0.5rem " src="/public/red-base/top-bg.jpg" alt="">
                    <div class="w60% h-full pl0.3rem font-size-0.9rem">
                        <p class="shenglue">嘉兴南湖--带你领略小船上的故事</p>
                        <div class="color-#959595">
                            <p>出行日期 2025-08-11</p>
                            <p>场次 上午场</p>
                            <p>讲师 普通级讲师</p>
                        </div>
                    </div>
                    <div class="">
                        <p class="flex items-center color-red-5 font-bold">
                            <span class="">￥</span>
                            <span class="font-size-0.9rem ">1486.77</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full  flex justify-center mt5rem">
                <van-button color="linear-gradient(to right, #ff6034, #ee0a24)"
                style="margin-right: 1rem;"
                @click="gotoHome()"
                >
                    回到首页
                </van-button>
                <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
                    再来一单
                </van-button>
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

.shenglue {
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>
