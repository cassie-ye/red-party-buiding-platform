<script setup>
import { getBaseListByCategoryAPI } from "../utils/apis/redBase.ts"
const router = useRouter()
const onClickLeft = () => history.back();
const activeSelectedIndex = ref(0)
const gotoMedalExplanationDetails = () => {
    router.push('/medalExplanationDetails')
}

const currentSelectedCategoryBaseList = ref()
/**
 * 调接口根据红色基地的分类Id获取红色基地列表
 */
const getBaseListByCategory = async (categoryId) => {
    const res = await getBaseListByCategoryAPI(categoryId)
    // const { data } = await useAPI(`/tb-place/getPlaceListByCategory/${categoryId}`)
    currentSelectedCategoryBaseList.value = res
    currentSelectedCategoryBaseList.value = currentSelectedCategoryBaseList.value.slice(1, 13)
    console.log(currentSelectedCategoryBaseList.value)
}

getBaseListByCategory(2)


const tabList = ref([
    "遗址类", "纪念馆类", "文化馆类", "烈士陵园"
])

const peopleList = ref([
    {
        childList: [
            {
                name: "王柔",
                img: "https://img0.baidu.com/it/u=501051755,261031675&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=659",
                level: "特级讲师"
            },
            {
                name: "楼可中",
                img: "https://img1.baidu.com/it/u=3655599061,2804306150&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
                level: "特级讲师"
            },
            {
                name: "肖进",
                img: "https://img.zcool.cn/community/01725f5d331e29a8012187f4f67f30.jpg@1280w_1l_2o_100sh.jpg",
                level: "特级讲师",
            }
        ]
    },
    {
        childList: [
            {
                name: "王使空",
                img: "https://p5.itc.cn/q_70/images03/20230429/dc03a7e2d20a4f3fb47ee14cd5c1c51e.jpeg",
                level: "一级讲师"
            },
            {
                name: "柯布与",
                img: "https://img1.baidu.com/it/u=344896747,2581188184&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
                level: "一级讲师"
            },
            {
                name: "楼一浩",
                img: "https://img0.baidu.com/it/u=763593683,312292042&fm=253&fmt=auto&app=138&f=JPEG?w=615&h=500",
                level: "一级讲师"
            },
        ]
    },

    {

        childList: [
            {
                name: "管婷",
                img: "https://img0.baidu.com/it/u=1290680491,2182197305&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=500",
                level: "一级讲师"
            },
            {
                name: "张风",
                img: "https://img2.baidu.com/it/u=4211511386,3746034425&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
                level: "高级讲师",
            },
            {
                name: "张菲菲",
                img: "https://img0.baidu.com/it/u=1947968229,699167019&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
                level: "一级讲师",
            }
        ]
    },

])
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
                <van-swipe-item v-for="(item, index) in currentSelectedCategoryBaseList" :key="index"
                    class="relative mr0.5rem " @click="gotoMedalExplanationDetails">
                    <div class="box-shadow mb0.3rem rounded-0.3rem h10rem">
                        <img :src="item.image" class="w-full h5rem rounded-0.3rem" alt="">
                        <p class="shenglue pl0.5rem pr0.5rem mt0.5rem mb0.5rem">{{ item.name }}</p>
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
                <van-swipe-item v-for="(item, index) in peopleList" :key="index" class=" mr1rem">
                    <div v-for="i2 in item.childList"
                        class="box-shadow w15rem h5rem rounded-0.3rem bg-#fff flex mb0.5rem">
                        <img class="w-5rem h5rem rounded-0.3rem" :src="i2.img" alt="">
                        <div class="pl1rem pr0.3rem flex flex-col justify-evenly">
                            <p class="font-bold">{{ i2.name }}</p>
                            <p class="font-size-0.9rem">中国高级导游员</p>
                            <p class="font-size-0.9rem">{{ i2.level }}</p>
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
                <van-swipe-item v-for="(item, index) in tabList" :key="index" class=" mr0.5rem">
                    <div class="pl0.8rem pr0.8rem pt0.3rem pb0.3rem  flex justify-center items-center border-0.05rem rounded-0.5rem"
                        :class="index === activeSelectedIndex ? 'bg-purple color-#fff' : ' border-solid border-#DEDEDE'"
                        @click="activeSelectedIndex = index">
                        {{ item }}
                    </div>
                </van-swipe-item>
            </van-swipe>
            <div class="mt0.5rem flex justify-between flex-wrap">
                <div v-for="(item, index) in currentSelectedCategoryBaseList" :key="index"
                    class="w32% bg-#fff h8.5rem box-shadow mb0.5rem rounded-0.3rem ">
                    <img class=" rounded-t-0.3rem w-full h5rem" :src="item.image" alt="">
                    <div class="p0.3rem">
                        <p class="shenglue font-size-0.9rem font-bold">{{ item.name }}</p>
                        <div class="flex items-center">
                            <van-icon name="service-o" color-red-5 mr0.3rem />
                            <p class="font-size-0.8rem mt0.1rem">{{ index + 54 }}w</p>
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
