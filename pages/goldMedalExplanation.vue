<script setup>
const onClickLeft = () => history.back();
const activeSelectedIndex = ref(0)
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="金牌讲解" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="p1rem bg-#fff ">
            <div class="flex justify-between">
                <p class="font-bold font-size-1.2rem">金牌讲解人工精讲</p>
                <p class="font-size-0.9rem">全部 <span><van-icon name="arrow" /></span></p>
            </div>
            <p class="mt0.3rem color-#525252">深度剖析党建精髓，让历史在你面前生动再现</p>
            <van-swipe class="mt1rem" :loop="false" :width="130" :show-indicators="false">
                <van-swipe-item v-for="i in 8" class="relative mr0.5rem">
                    <div class="box-shadow mb0.3rem rounded-0.3rem">
                        <img src="/public/red-base/top-bg.jpg" class="w-full h5rem rounded-0.3rem" alt="">
                        <p class="shenglue pl0.5rem pr0.5rem mt0.5rem mb0.5rem">嘉兴南湖嘉兴南湖嘉兴南湖嘉兴南湖嘉兴南湖</p>
                        <div class="flex items-center justify-between pr0.1rem">
                            <div class="flex items-center color-red-4 font-bold">
                                <span class="font-size-0.8rem ">￥</span>
                                <p class="">11.58</p>
                            </div>
                            <div
                                class="w3rem h1.2rem bg-purple flex justify-center items-center font-size-0.8rem rounded-0.3rem color-#fff">
                                预定
                            </div>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="p1rem bg-#fff ">
            <div class="flex justify-between">
                <p class="font-bold font-size-1.2rem">名师荟萃</p>
                <p class="font-size-0.9rem">全部 <span><van-icon name="arrow" /></span></p>
            </div>
            <p class="mt0.3rem color-#525252">红色基地优秀文化讲者聚集地</p>
            <van-swipe class="mt1rem pr0.5rem" :loop="false" :width="255" :show-indicators="false">
                <van-swipe-item v-for="i in 3" class=" mr1rem">
                    <div v-for="i2 in 3" class="box-shadow w15rem h5rem rounded-0.3rem bg-#fff flex mb0.5rem">
                        <img class="w-5rem h5rem rounded-0.3rem" src="/public/red-base/top-bg.jpg" alt="">
                        <div class="pl1rem pr0.3rem flex flex-col justify-evenly">
                            <p class="font-bold">安然</p>
                            <p class="font-size-0.9rem">中国高级导游员</p>
                            <p class="font-size-0.9rem">中国高级导游员</p>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="p1rem bg-#fff ">
            <div class="flex justify-between">
                <p class="font-bold font-size-1.2rem">手机智能自助导览</p>
                <!-- <p class="font-size-0.9rem">全部 <span><van-icon name="arrow" /></span></p> -->
            </div>
            <p class="mt0.3rem color-#525252">让手机成为你的专属讲解员</p>
            <van-swipe class="mt1rem" :loop="false" :width="100" :show-indicators="false">
                <van-swipe-item v-for="(item, index) in 4" :key="index" class=" mr0.5rem">
                    <div class="pl0.8rem pr0.8rem pt0.3rem pb0.3rem  flex justify-center items-center border-0.05rem rounded-0.5rem"
                        :class="index === activeSelectedIndex ? 'bg-purple color-#fff' : ' border-solid border-#DEDEDE'"
                        @click="activeSelectedIndex = index">
                        遗址类
                    </div>
                </van-swipe-item>
            </van-swipe>
            <div class="mt0.5rem flex justify-between flex-wrap">
                <div v-for="i in 9" class="w32% bg-#fff h8.5rem box-shadow mb0.5rem rounded-0.3rem ">
                    <img class=" rounded-t-0.3rem w-full h5rem" src="/red-base/top-bg.jpg" alt="">
                    <div class="p0.3rem">
                        <p class="font-size-0.9rem font-bold">北京天安门</p>
                    <div class="flex items-center">
                        <van-icon name="service-o" color-red-5 mr0.3rem />
                        <p class="font-size-0.8rem mt0.1rem">257.2w</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
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

::v-deep .van-nav-bar__arrow {
    color: black;
}

::v-deep .van-nav-bar__text {
    color: black;
}

::v-deep .van-ellipsis {
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
</style>
