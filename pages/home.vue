<script setup lang="ts">
interface ModuleItem {
    name: string;
    img: string;
}
const moudleList = ref<ModuleItem[]>([
    {
        name: "红色基地",
        img: "/home/red-base.png"
    },
    {
        name: "VR云游",
        img: "/home/vr-cloud.png"
    },
    {
        name: "每日推荐",
        img: "/home/daily-recommendations.png"
    },
    {
        name: "文旅打卡",
        img: "/home/clouking-in.png"
    },
    {
        name: "红色专栏",
        img: "/home/red-column.png"
    },
    {
        name: "文创商城",
        img: "/home/culture-creative-mall.png"
    },
    {
        name: "金牌讲解",
        img: "/home/gold-medal-explanation.png"
    },
    {
        name: "交通查询",
        img: "/home/traffic-enquiries.png"
    },
    {
        name: "住宿餐饮",
        img: "/home/accommodation-catering.png"
    },
    {
        name: "角色体验",
        img: "/home/character-experience.png"
    }
])
</script>
<template>
    <div class="top-red-linear-bg w-full h20rem bg-red pl0.5rem pr0.5rem pt1rem">
        <!-- 头部搜索框 客服  更多-->
        <div class="flex items-center justify-between">
            <!-- 搜索框-->
            <div class="w-18rem h-2rem bg-white  rounded-1rem rounded-bl-0rem flex items-center pl0.8rem
                border-solid border-0.1rem border-red-4">
                <Icon name="ic:outline-search" style="color: #EF4444" size="25" />
                <van-swipe class=" h2.3rem flex pt0.5rem font-size-0.9rem ml0.3rem color-red-5" vertical
                    :autoplay="3000" indicator-color="white" :show-indicators="false">
                    <van-swipe-item>南京博物馆</van-swipe-item>
                    <van-swipe-item>北京博物馆</van-swipe-item>
                    <van-swipe-item>东京博物馆</van-swipe-item>
                    <van-swipe-item>xi'jing</van-swipe-item>
                </van-swipe>
            </div>
            <!-- chatgpt -->
            <Icon name="arcticons:openai-chatgpt" style="color: black" size="25" />
            <!-- 更多 -->
            <Icon name="material-symbols:more-horiz" style="color: black" size="25" />
        </div>
        <!--
            10个模块入口
            红色基地 VR云游 每日推荐 文旅打卡 红色专栏
            文创商城 金牌讲解 交通查询 住宿餐饮 角色体验
        -->
        <div class="eight-moudle-bg flex flex-wrap justify-between rounded-1rem items-center pt1rem pb1rem mt1rem
        bg-gradient-to-b from-#FFD8DB to-#fff
        ">
            <div v-for="(item, index) in moudleList" :key="index"
                class="flex flex-col items-center w-20% justify-center" :class="index >= 0 && index < 5 ? 'pb1.4rem' : ''">
                <img class="w2.2rem" :src="item.img" alt="">
                <div class="font-size-0.8rem">{{ item.name }}</div>
            </div>
        </div>
    </div>

</template>
<style scoped>
.top-red-linear-bg {
    background: linear-gradient(to bottom,
            #FF6F6F 10%,
            #FFB4B4 55%,
            transparent);
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}

.eight-moudle-bg {
    /* background: linear-gradient(to bottom,
            #FFB4B4 ,
            #fff ,
            ); */
}
</style>
