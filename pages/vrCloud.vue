<script setup>
import { getAllProvinceAndAreaListAPI, getRedBaseByProvinceIdAPI } from "../utils/apis/redBase.ts"
import { getRedBaseByKeywordAPI } from '../utils/apis/redBase.ts'
const route = useRouter()
const onClickLeft = () => history.back();
const tabsList = ref(
    [
        "浙江", "北京", "广东", "四川"
    ]
)

const active = ref(0);
/**
 * 切换tab
 * @param index
 */
const changeTab = (index) => {
    console.log(index.title)
    // getRedBaseByProvinceId(index.value)
    vrCloudHomeShowThreeCityAreaValueIdsList.value.map((item) => {
        if (item.text.includes(index.title)) {
            // console.log(item)
            getRedBaseByProvinceId(item.value)
        }
    })
}

const gotoIndexBar = () => {
    route.push('/indexBar')
}

const gotoVrDetails = (vrUrl) => {
    route.push({
        path: '/vrDetails',
        query: { vrUrl }
    });
}

const provinceAndAreaList = ref([])

const vrCloudHomeShowThreeCityAreaValueIdsList = ref([])
/**
 * 调接口获取所有省市
 */
const getAllProvinceAndAreaList = async () => {
    const res = await getAllProvinceAndAreaListAPI()
    provinceAndAreaList.value = res.map(option => ({
        text: option.label,
        value: option.value,
    }));
    provinceAndAreaList.value.map((item => {
        if (item.text === '浙江省' || item.text === "北京市" || item.text === "广东省" || item.text === "湖南省") {
            vrCloudHomeShowThreeCityAreaValueIdsList.value.push(item)
            // console.log(vrCloudHomeShowThreeCityAreaValueIdsList.value)
        }
    }))
    // console.log(provinceAndAreaList.value)
}
getAllProvinceAndAreaList()

const nowVrCloudHomeShowWhichProvinceRedBaseList = ref([])
/**
 * 调接口根据省份Id查询省份的红色基地信息
 */
const getRedBaseByProvinceId = async (proId) => {
    const res = await getRedBaseByProvinceIdAPI(proId)
    nowVrCloudHomeShowWhichProvinceRedBaseList.value = res
    // console.log(nowVrCloudHomeShowWhichProvinceRedBaseList.value)
}
getRedBaseByProvinceId(1)

const searchValue = ref('')
const isShowSearchPannel = ref(false)
// 模糊查询的结果数组
const searchResultList = ref([])

/**
 * 封装一个防抖函数
 */
function debounce(func, wait) {
    let timeout;

    return function (...args) {
        // 清除之前设置的定时器
        clearTimeout(timeout);
        // 设置新的定时器
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

/**
 * 调接口根据关键词模糊查询红色基地
 * @param name
 */
const getRedBaseByKeyword = async (name) => {
    const res = await getRedBaseByKeywordAPI(name)
    if (res) {
        searchResultList.value = res
    } else {
        searchResBaseNameList.value = []
    }
}

/**
 * 键盘输入内容时触发
 * @param e
 */
const inputContent = (e) => {
    // console.log(e)
    getRedBaseByKeyword(e)
    if (e.length !== 0) {
        isShowSearchPannel.value = true
    } else {
        isShowSearchPannel.value = false
    }
}

/**
 * 使用防抖函数创建一个防抖版本
 * 设置防抖时间为300毫秒
 */
const debouncedInputContent = debounce(inputContent, 500);

/**
 * 搜索后点击模糊查询列表的其中一项跳转到那一项的vr场馆
 */
const gotoSearchItem = (index) => {
    const vrUrl = searchResultList.value[index].vr
    route.push({
        path: '/vrDetails',
        query: { vrUrl }
    });
}
</script>
<template>
    <div class="w-full  h-full">
        <van-nav-bar :fixed="true" :placeholder="true" title="VR云游红色基地" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <!-- <div class="w-full pt1rem h17.5rem top-red-linear-bg ">
            <div
                class="h-2.3rem bg-white bg-opacity-95 rounded-1rem flex items-center ml0.8rem mr1rem pl0.5rem pr0.5rem ">
                <Icon name="ic:outline-search" style="color: #9F9F9F" size="25" />
                <p class="color-#9F9F9F font-size-0.9rem">搜索VR场馆</p>
            </div>
        </div> -->
        <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词"
            @update:model-value="debouncedInputContent" />
            <div class="w-full flex justify-center pb0.5rem bg-#fff">
                <video class="mt0.5rem w96% rounded-0.5rem top-red-linear-bg"
                    src="https://boot-video.xuexi.cn/video/1005/p/59453997e1342bcadc6ca1df48d37397-b6067f7596224c518260653e5df6574e-2.mp4"
                    controls></video>
            </div>
        <div v-show="isShowSearchPannel"
            class="w93% bg-#fff fixed z-999 left-0.8rem top-5.8rem rounded-0.2rem shadow-xl">
            <div @click="gotoSearchItem(index)" v-for="(item, index) in searchResultList" :key="index"
                class="w-full h2.3rem  border-solid border-b-0.05rem border-l-0.05rem border-r-0.05rem border-#F0F0F0 flex items-center pl1rem font-size-0.9rem">
                {{ item.name }}
            </div>
        </div>
        <!-- 滑动标签页 -->
        <div class="relative w-full">
            <van-tabs v-model:active="active" swipeable class=" " color="red" @click-tab="changeTab">
                <van-tab class="w-full " v-for="(item, index) in vrCloudHomeShowThreeCityAreaValueIdsList"
                    :title="item.text.slice(0, -1)">
                    <div class="w-full pt1rem pl0.5rem pr0.5rem bg-#fff">
                        <div class="relative">
                            <img :src="nowVrCloudHomeShowWhichProvinceRedBaseList[0].image" alt=""
                                class="rounded-1rem w-full h11rem"
                                @click="gotoVrDetails(nowVrCloudHomeShowWhichProvinceRedBaseList[0].vr)">
                            <div
                                class="absolute left-45% top-35% font-size-1.5rem color-#fff font-bold w3.5rem h3.5rem rounded-50% border-solid border-0.1rem border-#fff flex justify-center items-center">
                                VR
                            </div>
                            <div
                                class="pt0.1rem pb0.1rem pl0.6rem pr0.6rem bg-red-5 rounded-0.5rem absolute left-0.5rem bottom-0.5rem color-#fff font-size-0.8rem">
                                {{ nowVrCloudHomeShowWhichProvinceRedBaseList[0].name }}
                            </div>
                        </div>
                        <div class="w-full ">
                            <p class="mt0.8rem font-bold">{{ item.text }}红色基地精选VR场景</p>
                            <div class=" flex mt0.5rem w-full h5.7rem overflow-hidden mb0.8rem"
                                v-for="(item, index) in nowVrCloudHomeShowWhichProvinceRedBaseList" :key="index">
                                <div class="relative w10rem rounded-0.3rem h5.7rem">
                                    <div
                                        class="absolute left-40% top-35% font-size-1rem color-#fff font-bold w2rem h2rem rounded-50% border-solid border-0.1rem border-#fff flex justify-center items-center">
                                        VR
                                    </div>
                                    <img class="w10rem rounded-0.3rem h5.7rem" :src="item.image" alt="">
                                </div>
                                <div @click="gotoVrDetails(item.vr)"
                                    class="pl0.5rem flex-1 flex flex-col justify-between">
                                    <p class="font-size-0.9rem font-bold">{{ item.name }}</p>
                                    <p class="font-size-0.8rem color-#525252">{{ item.position }}</p>
                                    <div class="flex items-center">
                                        <Icon name="iconoir:keyframe-position-solid" color="red-5" size="20" />
                                        <p class="font-size-0.8rem color-#9F9F9F ml0.2rem">{{ item.category }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
            <div @click="gotoIndexBar"
                class="absolute right-0 top-0 w5rem h-2.7rem bg-gradient-to-r from-#fff to-red flex justify-center items-center">
                <span class="font-size-1rem color-red-5 font-bold">全国</span>
                <Icon name="ic:outline-keyboard-arrow-right" color="red-5" size="20" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.top-red-linear-bg {
    background: linear-gradient(to bottom,
            #EF4444 1%,
            #FFB4B4 40%,
            transparent);
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
</style>
