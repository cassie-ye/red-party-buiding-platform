<script setup>
const onClickLeft = () => history.back();
const moudleList = ref([
    {
        name: "火锅",
        img: "/baseService/huoguo.png",
        link: "/redBase"
    },
    {
        name: "蛋糕奶茶",
        img: "/baseService/dangao.png",
        link: "/vrCloud"
    },
    {
        name: "小吃快餐",
        img: "/baseService/kuaican.png",
        link: "/todayRecommand"

    },
    {
        name: "烧烤烤肉",
        img: "/baseService/shaokao.png",
        link: "/culturalTravelClockIn"

    },
    {
        name: "川湘菜",
        img: "/baseService/chuanxiangcai.png",
        link: "/redColumn"

    },
    {
        name: "西餐",
        img: "/baseService/xican.png",
        link: "/culturalStore"

    },
    {
        name: "海鲜大咖",
        img: "/baseService/haixian.png",
        link: "/goldMedalExplanation"

    },
    {
        name: "江浙菜",
        img: "/baseService/jiangzhecai.png",
        link: "/trafficQuery"

    },
])

const time = ref(30 * 60 * 60 * 1000);

const router = useRouter();
const gotoSearchRedBaseFood = () => {
    router.push('/searchRedBaseFood')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="餐饮" left-text="返回" left-arrow @click-left="onClickLeft" />
        <!-- <van-search v-model="value" placeholder="请输入搜索关键词" /> -->
        <div @click="gotoSearchRedBaseFood()"
            class=" h-2.3rem bg-white bg-opacity-95 rounded-1rem flex items-center ml0.8rem mr1rem mt0.5rem pl0.5rem pr0.5rem">
            <Icon name="ic:outline-search" style="color: #9F9F9F" size="25" />
            <p  class="color-#9F9F9F font-size-0.9rem">搜一搜红色基地附近的美食</p>
        </div>
        <div class="eight-moudle-bg flex flex-wrap  rounded-1rem items-center pt0.5rem pb0.8rem mt0.5rem
        bg-gradient-to-b from-#FFD8DB to-#fff relative
        ">
            <div v-for="(item, index) in moudleList" :key="index" class="flex flex-col items-center w-20% h4rem "
                :class="index >= 0 && index < 5 ? 'pb1.4rem' : ''">
                <img class="w2.2rem" :src="item.img" alt="">
                <div class="font-size-0.8rem">{{ item.name }}</div>
            </div>
            <div
                class="w40% h4rem bg-#f6c31b rounded-0.3rem absolute right-0 bottom-0.5rem flex justify-evenly items-center">
                <img class="w5rem h3.6rem rounded-0.2rem" src="/public/baseService/shanghai.jpg" alt="">
                <div>
                    <van-count-down :time="time" />
                    <p class="font-bold font-size-0.85rem">限时秒杀</p>
                </div>
            </div>
        </div>
        <img class="mt0.5rem" src="/public/baseService/2.jpg" alt="">
        <img class="mt0.5rem" src="/public/baseService/1.jpg" alt="">
        <img class="mt0.5rem" src="/public/baseService/3.jpg" alt="">
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

:deep(.van-count-down) {
    color: #fff;
    font-weight: bold;
}
</style>
