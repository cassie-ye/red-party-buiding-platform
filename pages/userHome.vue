<script setup>
const onClickLeft = () => history.back();
const tabTitleList = ref([
    "笔记", "收藏"
])
const activeTabIndex = ref(1)
const isEmpty = ref(true)
const router = useRouter()
const gotoChatWithAuthor = () => {
    router.push('/chatWithAuthor')
}
</script>
<template>
    <div>
        <div class="w-full h16rem bg-#182e2c">
            <div class="pl1rem pr1rem flex justify-between items-center pt1rem">
                <van-icon @click="onClickLeft" name="arrow-left" color="#fff" size="20" />
                <van-icon name="ellipsis" color="#fff" size="20" />
            </div>
            <div class="w-full mt1.3rem pl1rem pr1rem flex items-center">
                <img  class="w4.5rem h4.5rem rounded-50% mr1rem" src="/public/red-base/top-bg.jpg" alt="">
                <div class="color-#fff">
                    <p class="mb0.5rem">我爱干饭</p>
                    <p class="font-size-0.7rem color-#f5fcfb">研学Id：3479382749</p>
                    <p class="font-size-0.7rem color-#f5fcfb">IP属性：浙江</p>
                </div>
            </div>
            <div class="color-#f5fcfb mt2.5rem pl1rem pr1rem flex justify-between items-center font-size-0.8rem">
                <div class="flex items-center">
                    <div class="flex mr1.5rem flex-col justify-center items-center">
                        <span>0</span>
                        <p>关注</p>
                    </div>
                    <div class="flex mr1.5rem flex-col justify-center items-center">
                        <span>0</span>
                        <p>粉丝</p>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <span>5</span>
                        <p>获赞与收藏</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w3.5rem h1.3rem rounded-0.7rem flex justify-center items-center border-0.1 border-solid border-red-5
                font-size-0.8rem color-#fff bg-red-5 mr0.5rem">关注</div>
                    <div @click="gotoChatWithAuthor()"
                        class="w2.2rem h1.3rem ml-.6rem border-solid border-0.05rem border-#fff rounded-2rem flex justify-center items-center">
                        <van-icon name="chat-o" size="16" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex bg-#fff items-center pl0.5rem pr0.5rem justify-between pt0.5rem pb0.5rem">
            <van-icon name="ellipsis" color="#fff" size="23" />
            <div class="flex h1.5rem pt1rem pb0.7rem items-center w50% justify-between font-size-0.9rem">
                <div v-for="(item, index) in tabTitleList" :key="index"
                    class="border-b-solid border-b-0.13rem pb0.2rem border-#fff" @click="activeTabIndex = index"
                    :class="activeTabIndex === index ? ' border-red-5 font-bold' : ''">
                    {{ item }}
                </div>
            </div>
            <van-icon name="search" size="23" />
        </div>
        <div v-if="activeTabIndex === 1" class="w-full pl0.5rem pr0.5rem mt0.5rem flex justify-between flex-wrap">
            <div @click="gotoNotesDetails" v-if="isEmpty" class="w49% bg-#fff rounded-0.3rem mb0.5rem"
                v-for="(item, index) in 8" :key="index">
                <img src="/public/red-base/top-bg.jpg" alt="" class="w-full h10rem rounded-t-0.3rem">
                <div class="flex flex-col pt0.5rem pb1rem">
                    <p class="pt0.2rem font-size-0.9rem pl0.5rem shenglue2">浙江各地市公务员待遇解密，还值得报考吗ssssssssssssssss</p>
                    <div class="flex justify-between font-size-0.7rem mt0.5rem">
                        <div class="flex items-center w6.5rem ml0.5rem ">
                            <img src="/public/red-base/top-bg.jpg" class="w1.2rem mr0.3rem h1.2rem rounded-50%" alt="">
                            <p class="shenglue">公考搭子给就覅的官方根据地</p>
                        </div>
                        <div class="flex items-center mr0.5rem">
                            <van-icon name="like-o" size="14" class="mr0.2rem" />
                            <span>153</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="w-full flex justify-center">
                <van-empty description="暂无推荐的笔记" />
            </div>
        </div>
    </div>
</template>
<style scoped></style>
