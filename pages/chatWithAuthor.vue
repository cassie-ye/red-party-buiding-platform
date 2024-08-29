<script setup>
const onClickLeft = () => history.back();

</script>
<template>
    <div>
        <div class="">
            <div
                class="flex fixed left-0 top-0 z-99 w-full h3rem bg-#fff items-center pl0.5rem pr0.5rem justify-between pt0.5rem pb0.5rem">
                <div class="flex items-center">
                    <van-icon @click="onClickLeft" name="arrow-left" size="18" />
                    <img @click="gotoUserHome()" class="w1.7rem h1.7rem rounded-50% ml0.5rem"
                        src="/public/red-base/top-bg.jpg" alt="">
                    <span class="ml0.5rem font-size-0.9rem">神州</span>
                </div>
                <div class="flex items-center">
                    <div class="w3.5rem h1.3rem rounded-0.7rem flex justify-center items-center border-0.1 border-solid border-red-5
                font-size-0.8rem color-red-5 mr0.5rem
                ">关注</div>
                    <van-icon name="ellipsis" size="20" />
                </div>
            </div>
        </div>
        <div class="fixed bottom-0 left-0 w-full bg-#fff h3rem flex justify-between items-center pl0.5rem pr0.5rem">
            <div class="flex items-center">
                <i class="iconfont icon-yuyin font-size-1.4rem mr0.8rem"></i>
                <input class="bg-#f5f5f5 h2rem rounded-0.5rem font-size-0.9rem pl0.5rem" type="text" id="input-box"
                    name="input-box" placeholder="发消息" />
            </div>
            <div class="flex items-center">
                <i class="iconfont icon-biaoqing font-size-1.4rem mr0.5rem"></i>
                <i class="iconfont icon-jiahao-yuan font-size-1.4rem"></i>
            </div>
        </div>
    </div>
</template>
