<script setup lang="ts">
interface ModuleItem {
    name: string;
    img: string;
    link: string
}
const moudleList = ref<ModuleItem[]>([
    {
        name: "红色基地",
        img: "/home/red-base.png",
        link: "/redBase"
    },
    {
        name: "VR云游",
        img: "/home/vr-cloud.png",
        link: "/vrCloud"
    },
    {
        name: "每日推荐",
        img: "/home/daily-recommendations.png",
        link: ""

    },
    {
        name: "文旅打卡",
        img: "/home/clouking-in.png",
        link: ""

    },
    {
        name: "红色专栏",
        img: "/home/red-column.png",
        link: ""

    },
    {
        name: "文创商城",
        img: "/home/culture-creative-mall.png",
        link: ""

    },
    {
        name: "金牌讲解",
        img: "/home/gold-medal-explanation.png",
        link: ""

    },
    {
        name: "交通查询",
        img: "/home/traffic-enquiries.png",
        link: ""

    },
    {
        name: "住宿餐饮",
        img: "/home/accommodation-catering.png",
        link: ""

    },
    {
        name: "角色体验",
        img: "/home/character-experience.png",
        link: ""

    }
])


const hightPeopleString = ref<string>("人气最高人气最高人气最高")
const computedHightPeopleString = computed(() => {
    return hightPeopleString.value.length <= 5 ? hightPeopleString.value : hightPeopleString.value.substring(0, 5) + "..."
});

const tabsList = ref<string[]>(
    [
    "遗址类", "纪念馆类", "文化馆类", "烈士陵园"
    ]
)

const active = ref(0);
/**
 * 切换tab
 * @param index
 */
const changeTab = (index: { title: string; }) => {
    console.log(index.title)
}
</script>
<template>
    <div class="top-red-linear-bg w-full h31rem bg-red pl0.5rem pr0.5rem pt1rem">
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
            <NuxtLink :to="item.link" v-for="(item, index) in moudleList" :key="index"
                class="flex flex-col items-center w-20% justify-center"
                :class="index >= 0 && index < 5 ? 'pb1.4rem' : ''">
                <img class="w2.2rem" :src="item.img" alt="">
                <div class="font-size-0.8rem">{{ item.name }}</div>
            </NuxtLink>
        </div>
        <!-- 热门推荐和人气最高 -->
        <div class="mt0.5rem flex justify-between">
            <div class="p0.1rem mr2% w49% h7rem bg-gradient-to-l from-#FFEFF1 to-#fff rounded-0.5rem">
                <div class="flex justify-between p0.3rem">
                    <div class="font-bold">热门推荐</div>
                    <div class="w5rem h1rem mt0.2rem  flex justify-between bg-#fff rounded-0.5rem pl0.3rem pr0.1rem">
                        <van-swipe class="h1.3rem flex font-size-0.6rem ml0.3rem color-red-5" vertical :autoplay="3000"
                            indicator-color="white" :show-indicators="false">
                            <van-swipe-item>南京博物馆</van-swipe-item>
                            <van-swipe-item>北京博物馆</van-swipe-item>
                            <van-swipe-item>东京博物馆</van-swipe-item>
                            <van-swipe-item>xi'jing</van-swipe-item>
                        </van-swipe>
                        <Icon name="ic:round-keyboard-arrow-right" color="red-5" size="15"></Icon>
                    </div>
                </div>
                <div class=" flex font-size-0.7rem pl0.3rem pr0.3rem">
                    <img class="h4rem rounded-0.2rem" src="/home/hot-recommand.jpg" alt="">
                    <div class="ml0.3rem">
                        <p class="font-size-0.8rem font-bold">北京天安门</p>
                        <p class="color-#717171">生在红旗下，长在春风里</p>
                    </div>
                </div>
            </div>
            <div class="p0.1rem  w49% h7rem bg-gradient-to-l from-#FFEFF1 to-#fff rounded-0.5rem">
                <div class="flex justify-between p0.3rem">
                    <div class="font-bold">人气最高</div>
                    <div class="w5rem h1rem mt0.2rem  flex justify-between bg-#fff rounded-0.5rem pl0.3rem pr0.1rem">
                        <p class="handle-text w4rem flex font-size-0.6rem ml0.3rem color-#FF864B">
                            {{ computedHightPeopleString }}
                        </p>
                        <Icon name="ic:round-keyboard-arrow-right" color="#FF864B" size="15"></Icon>
                    </div>
                </div>
                <div class=" flex pl0.3rem pr0.3rem justify-between">
                    <div class="flex justify-center items-center flex-col">
                        <img class="w4.8rem h3.3rem rounded-0.2rem" src="/home/hot-recommand.jpg" alt="">
                        <p class="mt0.3rem font-size-0.5rem">北京·【天安门】</p>
                    </div>
                    <div class="flex justify-center items-center flex-col">
                        <img class="w4.8rem h3.3rem rounded-0.2rem" src="/home/hot-recommand.jpg" alt="">
                        <p class="mt0.3rem font-size-0.5rem">北京·【天安门】</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 党建时间轴 抽奖得好礼 答题得积分 -->
        <div class="mt0.5rem w-full h4rem flex justify-between">
            <div class="p0.2rem items-center mr2% w32% bg-#fff rounded-0.3rem h-full justify-between">
                <p style="font-family: normal;">党建时间轴</p>
                <div class="flex">
                    <p class="font-size-0.7rem">凝聚党的重要时刻</p>
                    <img class="w2rem color-#717171 mr0.2rem" src="/home/timeline.png" alt="">
                </div>
            </div>
            <div class="relative p0.2rem items-center mr2% w32% bg-#fff rounded-0.3rem h-full justify-between">
                <p style="font-family: normal;">答题得积分</p>
                <div class="flex">
                    <p class="font-size-0.7rem">1122w人正在参与</p>
                    <img class="w2rem color-#717171 mr0.2rem" src="/home/answer-questions.png" alt="">
                </div>
                <div class="absolute right-0.5rem top-0 flex justify-center items-center">
                    <i class="iconfont icon-hot color-red-5 anima font-size-1.2rem"></i>
                </div>
            </div>
            <div class="items-center w32% flex bg-#fff rounded-0.3rem h-full justify-between
            border-solid border-0.1rem border-red-5
            ">
                <!-- <p style="font-family: normal;">抽奖得好礼</p>
                <div class="flex">
                    <p class="font-size-0.7rem">文创礼物任你拿</p>
                    <img class="w2rem color-#717171 mr0.2rem" src="/home/lucky-draw.png" alt="">
                </div> -->
                <div class="p0.2rem ">
                    <p style="font-family: normal;">50元</p>
                    <p class="font-size-0.7rem">抽奖领现金</p>
                </div>
                <div class="relative w35% h-full bg-red-5 flex justify-center items-center overflow-hidden">
                    <div class="w1.3rem h1.3rem rounded-50% flex justify-center items-center bg-#fff ">
                        <Icon name="ic:round-keyboard-arrow-right" color="#FF864B" size="25"></Icon>
                        <span class="download-btn-ani" style="display: inline;"></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 轮播图 -->
        <van-swipe class="swipe mt0.5rem rounded-0.3rem" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img class="w-full h-4.5rem" src="http://www.crt.com.cn/news2007/Templets/2012images/hs2012_03.jpg"
                    alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="w-full h-4.5rem" src="http://www.crt.com.cn/news2007/Templets/2012images/hs2012_04.jpg"
                    alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="w-full h-4.5rem" src="http://www.crt.com.cn/news2007/Templets/2012images/hs2012_07.jpg"
                    alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="w-full h-4.5rem" src="http://www.crt.com.cn/news2007/Templets/2012images/hs2012_12.jpg"
                    alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- 滑动标签页 -->
    <van-tabs v-model:active="active" swipeable class="mt0.5rem" color="red" @click-tab="changeTab">
        <van-tab class="w-full" v-for="(item, index) in tabsList" :title="item">
            <div class="w-full pl0.5rem pr0.5rem mt0.5rem flex justify-between flex-wrap">
                <div class="w49% bg-#fff rounded-0.3rem mb0.5rem" v-for="item in 8">
                    <img src="https://www.zj.gov.cn/picture/yunyou/d8c275b3a3b4c7cd374c1fd243a350e6.jpg" alt=""
                        class="w-full h10rem rounded-t-0.3rem">
                    <div class="flex flex-col items-center pt0.5rem pb1rem">
                        <p class="pt0.2rem font-bold">四明山烈士陵园</p>
                        <div class="font-size-0.7rem pl0.5rem pr0.5rem ">
                            <i class="iconfont icon-didian01 color-red-6 font-size-1.2rem mr0.3rem"></i>
                            <span class="mt0.35rem">浙江省宁波市余姚市四明山镇四明山国家森林公园</span>
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
    </van-tabs>
</template>
<style scoped>
@keyframes lightmove {
    0% {
        left: -120px;
        top: -40px;
    }

    100% {
        left: 36px;
        top: 0px;
    }
}

.top-red-linear-bg {
    background: linear-gradient(to bottom,
            #EF4444 10%,
            #FFB4B4 35%,
            transparent);
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 1.25rem;
    line-height: 0.375rem;
    text-align: center;
    background-color: #39a9ed;
}

.handle-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.download-btn-ani {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.125rem;
    height: 10rem;
    background-color: rgba(255, 255, 255, 0.3);
    transform: rotate(-150deg);
    animation: lightmove 3.6s ease-in infinite;
    -webkit-animation: lightmove 3.6s ease-in infinite;
    /* Safari and Chrome */
}

.anima {
    animation-name: likes;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-duration: 1s;
}

@keyframes likes {
    0% {
        transform: scale(1);
    }

    25% {
        transform: scale(0.9);
    }

    50% {
        transform: scale(0.85);
    }

    75% {
        transform: scale(0.9);
    }

    100% {
        transform: scale(1);
    }
}

.swipe .van-swipe-item {
    color: #fff;
    font-size: 1..25rem;
    line-height: 4.5rem;
    text-align: center;
    background-color: #39a9ed;
}
</style>
