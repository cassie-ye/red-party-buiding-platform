<script setup>
import { getBaseListByCategoryAPI, getAllBaseCategoryListAPI, getHotRedBaseListAPI } from "../utils/apis/redBase.ts"
import { useUserStore } from "../store/user.js"
const userStore = useUserStore()
definePageMeta({
    layout: 'with-tabbar'
})
const router = useRouter()

const moudleList = ref([
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
        link: "/todayRecommand"

    },
    {
        name: "文旅打卡",
        img: "/home/clouking-in.png",
        link: "/culturalTravelClockIn"

    },
    {
        name: "红色专栏",
        img: "/home/red-column.png",
        link: "/redColumn"

    },
    {
        name: "文创商城",
        img: "/home/culture-creative-mall.png",
        link: "/culturalStore"

    },
    {
        name: "金牌讲解",
        img: "/home/gold-medal-explanation.png",
        link: "/goldMedalExplanation"

    },
    {
        name: "交通查询",
        img: "/home/traffic-enquiries.png",
        link: "/trafficQuery"

    },
    {
        name: "住宿餐饮",
        img: "/home/accommodation-catering.png",
        link: ""

    },
    {
        name: "廉政教育",
        img: "/home/character-experience.png",
        link: "/integrityEducation"

    }
])


const hightPeopleString = ref("人气最高人气最高人气最高")
const computedHightPeopleString = computed(() => {
    return hightPeopleString.value.length <= 5 ? hightPeopleString.value : hightPeopleString.value.substring(0, 5) + "..."
});



const tabsList = ref([])
const currentSelectedTabIndex = ref(1)
const currentSelectedCategoryBaseList = ref([])

const active = ref(0);

const gotoPartyHistoryTimeline = () => {
    router.push("/partyHistoryTimeline")
}

/**
 * 调接口获取所有红色基地的分类
 */
const getAllBaseCategoryList = async () => {
    const res = await getAllBaseCategoryListAPI()
    // debugger
    // const { data } = await useFetch('/api/item')
    // const { data } = await useAPI(`/base-cate/selectAll`, {server: false, lazy: true})
    // console.log(res)
    tabsList.value = res
}
getAllBaseCategoryList()

/**
 * 调接口根据红色基地的分类Id获取红色基地列表
 */
const getBaseListByCategory = async (categoryId) => {
    const res = await getBaseListByCategoryAPI(categoryId)
    // const { data } = await useAPI(`/tb-place/getPlaceListByCategory/${categoryId}`)
    currentSelectedCategoryBaseList.value = res
}

/**
 * 切换tab
 * @param index
 */
const changeTab = (e) => {
    // console.log(e)
    // console.log(e.name)
    currentSelectedTabIndex.value = parseInt(e.name) + 1
    getBaseListByCategory(currentSelectedTabIndex.value)
}
// 一进页面就发请求
getBaseListByCategory(currentSelectedTabIndex.value)

/**
 * 进入地区详情
 */
const gotoAreaDetails = (areaId) => {
    console.log(areaId)
    router.push({
        path: '/areaDetails',
        query: { areaId }
    });
}

/**
 * 进入百度地图
 */
const gotoBMapGL = () => {
    router.push("/map")
}

const hotRedBaseList = ref([])
/**
 * 调接口获取热门红色基地列表
 */
const getHotRedBaseList = async () => {
    const res = await getHotRedBaseListAPI()
    // console.log(res)
    hotRedBaseList.value = res
    console.log(hotRedBaseList.value)
}
getHotRedBaseList()

/**
 * 进入搜索
 */
const gotoSearchRedBase = () => {
    router.push("/searchRedBase")
}

/**
 * 进入抽奖
 */
const gotoLottery = () => {
    router.push("/lottery")
}

/**
 * 加载百度地图 获取地理位置信息
 */
const LoadBaiduMapScript = () => {
    const AK = 'xNceWXpU5pTmlF8IE21JknGmWURGLcdY'
    const BMap_URL = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${AK}&callback=init`
    const url = "https://unpkg.com/@bmapgl-plugin/cluster"
    const url2 = "https://mapopen-pub-jsapi.cdn.bcebos.com/static/js/bjpoi.js"
    const url3 = "https://unpkg.com/gcoord/dist/gcoord.global.prod.js"
    return new Promise((resolve, reject) => {
        // 如果已加载直接返回
        if (typeof BMapGL !== "undefined") {
            resolve(BMapGL);
            return true;
        }
        // 百度地图异步加载回调处理
        window.init = function () {
            console.log("百度地图脚本初始化成功...");
            resolve(BMapGL);
        };
        // 插入script脚本
        let scriptNode = document.createElement("script");
        scriptNode.setAttribute("type", "text/javascript");
        scriptNode.setAttribute("src", BMap_URL);
        document.body.appendChild(scriptNode);
        let scriptNode2 = document.createElement("script");
        scriptNode2.setAttribute("src", url);
        document.body.appendChild(scriptNode2);
        let scriptNode3 = document.createElement("script");
        scriptNode3.setAttribute("src", url2);
        document.body.appendChild(scriptNode3);
        let scriptNode4 = document.createElement("script");
        scriptNode4.setAttribute("src", url3);
        document.body.appendChild(scriptNode4);
    })
}
// 地图对象
const mapObj = ref(null)
// 当前位置经纬度
const currentPosition = ref({})
/**
 * 获取当前位置
 */
function getLocation() {
    //当前位置
    var geolocation = new BMapGL.Geolocation();
    // 开启SDK辅助定位
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition((res) => {
        // latitude纬度 longitude经度
        currentPosition.value.lat = res.latitude
        currentPosition.value.lng = res.longitude
        // userStore.userInfo.currentPosition = currentPosition.value
        userStore.updateUserInfoCurrentPosition(res)
    })
}

/**
 * 页面挂载
 */
onMounted(async () => {
    await LoadBaiduMapScript()
    getLocation()
})

/**
 * 进入ChatGPT
 */
const gotoChatGPT = () => {
    router.push("/chatGPT")
}

/**
 * 进入廉政答题
 */
const gotoIntegrityQuiz = () => {
    router.push("/integrityQuiz")
}
</script>
<template>
    <div class="pb3rem">
        <div class="top-red-linear-bg w-full h31rem bg-red pl0.5rem pr0.5rem pt1rem">
            <!-- 头部搜索框 客服  更多-->
            <div class="flex items-center justify-between">
                <!-- 搜索框-->
                <div @click="gotoSearchRedBase()" class="w-18rem h-2rem bg-white  rounded-1rem rounded-bl-0rem flex items-center pl0.8rem
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
                <Icon @click="gotoChatGPT()" name="arcticons:openai-chatgpt" style="color: black" size="25" />
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
            <!-- 红色地图和红色课程 -->
            <div class="mt0.5rem flex justify-between">
                <div @click="gotoBMapGL()"
                    class="p0.1rem mr2% w49% h7rem bg-gradient-to-l from-#FFEFF1 to-#fff rounded-0.5rem">
                    <div class="flex justify-between p0.3rem">
                        <div class="font-bold">红色地图</div>
                        <div
                            class="w5rem h1rem mt0.2rem  flex justify-between bg-red-5 rounded-0.5rem pl0.3rem pr0.1rem">
                            <p class="color-#fff font-size-0.7rem">快速导航</p>
                            <Icon name="ic:round-keyboard-arrow-right" color="#fff" size="15"></Icon>
                        </div>
                    </div>
                    <div class="h4.2rem flex justify-between pl0.3rem pr0.3rem">
                        <img class="h-full w75% rounded-0.3rem" src="/home/map.jpg" alt="">
                        <div
                            class="font-size-0.86rem top-red-linear-bg w20% font-bold flex justify-center items-center rounded-t-0.2rem pl0.2rem">
                            攻略指南</div>
                    </div>
                </div>
                <div class="p0.1rem  w49% h7rem bg-gradient-to-l from-#FFEFF1 to-#fff rounded-0.5rem">
                    <div class="flex justify-between p0.3rem">
                        <div class="font-bold">红色课程</div>
                        <div
                            class="w5rem h1rem mt0.2rem  flex justify-between bg-#fff rounded-0.5rem pl0.3rem pr0.1rem">
                            <p class="handle-text w4rem flex font-size-0.6rem ml0.3rem color-#FF864B">
                                {{ computedHightPeopleString }}
                            </p>
                            <Icon name="ic:round-keyboard-arrow-right" color="#FF864B" size="15"></Icon>
                        </div>
                    </div>
                    <div class=" flex pl0.3rem pr0.3rem justify-between">
                        <div class="w48.5% flex justify-center items-center flex-col">
                            <img class="w100% h3.3rem rounded-0.2rem" src="/home/hot-recommand.jpg" alt="">
                            <p class="mt0.3rem font-size-0.5rem">北京·【天安门】</p>
                        </div>
                        <div class="w48.5%  flex justify-center items-center flex-col">
                            <img class="w100% h3.3rem rounded-0.2rem" src="/home/hot-recommand.jpg" alt="">
                            <p class="mt0.3rem font-size-0.5rem">北京·【天安门】</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 党建时间轴 抽奖得好礼 答题得积分 -->
            <div class="mt0.5rem w-full h4rem flex justify-between">
                <div @click="gotoPartyHistoryTimeline()"
                    class="p0.2rem items-center mr2% w32% bg-#fff rounded-0.3rem h-full justify-between">
                    <p class="font-bold">党建时间轴</p>
                    <div class="flex">
                        <p class="font-size-0.7rem">凝聚党的重要时刻</p>
                        <img class="w2rem color-#717171 mr0.2rem" src="/home/timeline.png" alt="">
                    </div>
                </div>
                <div @click="gotoIntegrityQuiz()"
                    class="relative p0.2rem items-center mr2% w32% bg-#fff rounded-0.3rem h-full justify-between">
                    <p class="font-bold">廉政答题</p>
                    <div class="flex">
                        <p class="font-size-0.7rem">1122w人正在参与</p>
                        <img class="w2rem color-#717171 mr0.2rem" src="/home/answer-questions.png" alt="">
                    </div>
                    <div class="absolute right-0.5rem top-0 flex justify-center items-center">
                        <i class="iconfont icon-hot color-red-5 anima font-size-1.2rem"></i>
                    </div>
                </div>
                <div @click="gotoLottery()" class="items-center w32% flex bg-#fff rounded-0.3rem h-full justify-between
            border-solid border-0.1rem border-red-5
            ">
                    <!-- <p style="font-family: normal;">抽奖得好礼</p>
                <div class="flex">
                    <p class="font-size-0.7rem">文创礼物任你拿</p>
                    <img class="w2rem color-#717171 mr0.2rem" src="/home/lucky-draw.png" alt="">
                </div> -->
                    <div class="p0.2rem ">
                        <p class="font-bold">50元</p>
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
            <!-- 热门推荐和人气最高 -->
            <div class="mt0.5rem flex justify-between">
                <div class="p0.1rem mr2% w49% h7rem bg-gradient-to-l from-#FFEFF1 to-#fff rounded-0.5rem">
                    <div class="flex justify-between p0.3rem">
                        <div class="font-bold">热门推荐</div>
                        <div
                            class="w5rem h1rem mt0.2rem  flex justify-between bg-#fff rounded-0.5rem pl0.3rem pr0.1rem">
                            <van-swipe class="h1.05rem flex font-size-0.6rem ml0.3rem color-red-5" vertical
                                :autoplay="3000" indicator-color="white" :show-indicators="false">
                                <van-swipe-item class="shenglue" v-for="item in hotRedBaseList">{{ item.name
                                    }}</van-swipe-item>
                                <!-- <van-swipe-item>北京博物馆</van-swipe-item>
                                <van-swipe-item>东京博物馆</van-swipe-item>
                                <van-swipe-item>xi'jing</van-swipe-item> -->
                            </van-swipe>
                            <Icon name="ic:round-keyboard-arrow-right" color="red-5" size="15"></Icon>
                        </div>
                    </div>
                    <div class=" flex font-size-0.7rem pl0.3rem pr0.3rem">
                        <img class="h4rem rounded-0.2rem" :src="hotRedBaseList[0]?.image" alt="">
                        <div class="ml0.3rem">
                            <p class="font-size-0.8rem font-bold">{{ hotRedBaseList[0]?.name }}</p>
                            <p class="color-#717171 mt0.2rem">查看详情</p>
                        </div>
                    </div>
                </div>
                <div class="p0.1rem  w49% h7rem bg-gradient-to-l from-#FFEFF1 to-#fff rounded-0.5rem">
                    <div class="flex justify-between p0.3rem">
                        <div class="font-bold">人气最高</div>
                        <div
                            class="w5rem h1rem mt0.2rem  flex justify-between bg-#fff rounded-0.5rem pl0.3rem pr0.1rem">
                            <p class="handle-text w4rem flex font-size-0.6rem ml0.3rem color-#FF864B">
                                {{ "查看详情" }}
                            </p>
                            <Icon name="ic:round-keyboard-arrow-right" color="#FF864B" size="15"></Icon>
                        </div>
                    </div>
                    <div class=" flex pl0.3rem pr0.3rem justify-between">
                        <div class="w48.5% flex justify-center items-center flex-col">
                            <img class="w100% h3.3rem rounded-0.2rem" :src="hotRedBaseList[1]?.image" alt="">
                            <p class="mt0.3rem font-size-0.5rem">{{ hotRedBaseList[1]?.name }}</p>
                        </div>
                        <div class="w48.5%  flex justify-center items-center flex-col">
                            <img class="w100% h3.3rem rounded-0.2rem" :src="hotRedBaseList[2]?.image" alt="">
                            <p class="mt0.3rem font-size-0.5rem">{{ hotRedBaseList[2]?.name }}</p>
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
        <van-tabs v-model:active="active" swipeable class="mt8rem " color="red" @click-tab="changeTab">
            <van-tab class="w-full" v-for="(item, index) in tabsList" :title="item.name" :name="index">
                <div class="w-full pl0.5rem pr0.5rem mt0.5rem flex justify-between flex-wrap">
                    <div @click="gotoAreaDetails(item.id)"
                        class="w49% bg-#fff rounded-0.3rem mb0.5rem flex flex-col items-center"
                        v-for="(item, index) in currentSelectedCategoryBaseList" :key="index">
                        <img :src="item.image" alt="" class="w-full h10rem rounded-t-0.3rem">
                        <div class="font-bold w94% mt0.5rem ml3% flex justify-center text-center shenglue">{{ item.name
                            }}</div>
                        <div class="font-size-0.7rem w96% mt0.2rem ml2% flex justify-center shenglue">
                            <i class="iconfont icon-didian01 color-red-6 font-size-1rem mr0.1rem"></i>
                            <span class="mt0.27rem">{{ item.position }}</span>
                        </div>
                        <div class="font-size-0.7rem mt0.5rem w94% ml3% flex justify-end items-center mb0.3rem">
                            <i class="iconfont icon-daozhequ- color-red-6 font-size-1.4rem mr0.1rem"></i>
                            <span class="mt0.27rem">到这去</span>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
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
