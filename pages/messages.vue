<script setup>
definePageMeta({
    layout: 'with-tabbar'
})
</script>
<template>
    <div class="w-vw h-vh bg-#fff ">
        <van-nav-bar :fixed="true" :placeholder="true" title="消息" @click-left="onClickLeft" />
        <div class="flex justify-between pl4rem pr4rem mt0.5rem mb1rem">
            <div class="flex flex-col items-center">
                <div class="w3rem h3rem bg-#fae2e2 flex justify-center items-center rounded-0.6rem">
                    <van-icon name="like" color="#fc5f58" size="26" />
                </div>
                <p class="font-size-0.9rem mt0.5rem">赞和收藏</p>
            </div>
            <div class="flex flex-col items-center">
                <div class="w3rem h3rem bg-#e6effe flex justify-center items-center rounded-0.6rem">
                    <van-icon name="contact" color="#3684fd" size="26" />
                </div>
                <p class="font-size-0.9rem mt0.5rem">新增关注</p>
            </div>
            <div class="flex flex-col items-center">
                <div class="w3rem h3rem bg-#e7faf4 flex justify-center items-center rounded-0.6rem">
                    <van-icon name="chat" color="#36d99d" size="26" />
                </div>
                <p class="font-size-0.9rem mt0.5rem">评论和@</p>
            </div>
        </div>
        <div v-for="i in 10" class="w-full bg-#fff p0.7rem pt0.6rem pb0.6rem flex justify-between">
            <div class="flex items-center">
                <div>
                    <img class="w2.5rem h2.5rem rounded-50%" src="/public/red-base/top-bg.jpg" alt="">
                </div>
                <div class="font-size-0.8rem ml0.5rem">
                    <p class="font-size-0.85rem">别看我啦</p>
                    <p class="color-#9F9F9F">486468484</p>
                </div>
            </div>
            <div>
                <p class="font-size-0.8rem color-#9F9F9F">星期二</p>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
