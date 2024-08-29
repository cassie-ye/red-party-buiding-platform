<script setup>
const onClickLeft = () => history.back();
const router = useRouter()
const gotoUserHome = () => {
    router.push('/userHome')
}
</script>
<template>
    <div class="">
        <div class="flex fixed left-0 top-0 z-99 w-full h3rem bg-#fff items-center pl0.5rem pr0.5rem justify-between pt0.5rem pb0.5rem">
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
                <van-icon name="share-o" size="20" />
            </div>
        </div>
        <div class="mt3rem">
            <van-swipe :loop="false" class="bg-amber h23rem" :autoplay="3000">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>
        <div class="pl0.5rem pr0.5rem">
            <p class="font-bold mt1rem">两个双一流大学怎么选？迷茫了两个双一流大学怎么选？迷茫了两个双一流大学怎么选？迷茫了。。。。。。。</p>
            <p class="mt0.8rem font-size-0.9rem">
                两个双一流大学怎么选？迷茫了两个双一流大学怎么选？迷茫了两个双一流大学怎么选？迷茫了两个双一流大学怎么选？迷茫了
            </p>
            <p class="color-#717171 font-size-0.9rem mt0.8rem">08-09</p>
        </div>
        <div class="w-96% ml2% h0.02rem bg-#fff"></div>
        <van-action-bar class="flex justify-between items-center">
            <div class="flex items-center h70% w8rem bg-#f5f5f5 font-size-0.9rem color-#717171
            rounded-5rem justify-center ml0.5rem
            ">
                <van-icon name="edit" class="mr0.5rem" />
                <p>说点什么...</p>
            </div>
            <div class="flex items-center mr0.5rem">
                <div class="flex items-center mr0.5rem">
                    <van-icon name="like-o" size="20" />
                    <span>179</span>
                </div>
                <div class="flex items-center mr0.5rem">
                    <van-icon name="star-o" size="20" />
                    <span>25</span>
                </div>
                <div class="flex items-center">
                    <van-icon name="comment-o" size="20" />
                    <span>852</span>
                </div>
            </div>
        </van-action-bar>
    </div>
</template>
<style scoped></style>
