<script setup>
import { getAllProvinceAndAreaListAPI, getRedBaseByProvinceIdAPI } from "../utils/apis/redBase.ts"

// 接收页面跳转传递过来的参数
const queryProvince = useRoute().query.citem
const router = useRouter()
const onClickLeft = () => {
    // navigateTo({ path: '/vrCloud' })
    // 跳转到/vrCloud页面
    router.go(-2)
};
// console.log(useRoute().query.citem)


const currentPageProvinceRedBaseList = ref([])
/**
 * 调接口根据省份Id查询省份的红色基地信息
 */
const getRedBaseByProvinceId = async (proId) => {
    const res = await getRedBaseByProvinceIdAPI(proId)
    // console.log(res)
    currentPageProvinceRedBaseList.value = res
}


/**
 * 调接口获取所有省市
 */
const getAllProvinceAndAreaList = async () => {
    const res = await getAllProvinceAndAreaListAPI()
    // console.log(res)
    res.map((item) => {
        if (item.label === useRoute().query.citem) {
            // console.log(item.value)
            getRedBaseByProvinceId(item.value)
        }
    })
}
getAllProvinceAndAreaList()

const gotoVrDetails = (vrUrl) => {
    console.log(vrUrl)
    router.push({
        path: '/vrDetails',
        query: { vrUrl }
    });
}
</script>
<template>
    <div>
        <van-nav-bar :title="`${queryProvince}红色VR展厅`" left-text="返回" left-arrow @click-left="onClickLeft" />
        <div v-if="currentPageProvinceRedBaseList.length > 0" class="w-full pt1rem pl0.5rem pr0.5rem bg-#fff">
            <div  class="relative"
                @click="gotoVrDetails(currentPageProvinceRedBaseList[0].vr)">
                <img :src="currentPageProvinceRedBaseList[0].image" alt="" class="rounded-1rem w-full h11rem"
                    @click="gotoVrDetails">
                <div
                    class="absolute left-45% top-35% font-size-1.5rem color-#fff font-bold w3.5rem h3.5rem rounded-50% border-solid border-0.1rem border-#fff flex justify-center items-center">
                    VR
                </div>
                <div
                    class="pt0.1rem pb0.1rem pl0.6rem pr0.6rem bg-red-5 rounded-0.5rem absolute left-0.5rem bottom-0.5rem color-#fff font-size-0.8rem">
                    {{ currentPageProvinceRedBaseList[0].name }}
                </div>
            </div>
            <div class="w-full ">
                <!--
                https://www.720yun.com/search/26/%E6%B5%99%E6%B1%9F%20%E7%BA%A2%E8%89%B2%E5%9F%BA%E5%9C%B0/2/1
                博物馆 景区 线上会展
             -->
                <div>
                    <p class="mt0.8rem font-bold">{{ queryProvince }}VR场馆</p>
                    <div v-if="currentPageProvinceRedBaseList.length > 0"
                        class=" flex mt0.5rem w-full h5.7rem overflow-hidden mb0.8rem"
                        v-for="(item, index) in currentPageProvinceRedBaseList" :key="index"
                        @click="gotoVrDetails(item.vr)">
                        <div class="relative w10rem rounded-0.3rem h5.7rem">
                            <div
                                class="absolute left-40% top-35% font-size-1rem color-#fff font-bold w2rem h2rem rounded-50% border-solid border-0.1rem border-#fff flex justify-center items-center">
                                VR
                            </div>
                            <img class="w10rem rounded-0.3rem h5.7rem" :src="item.image" alt="">
                        </div>
                        <div class="pl0.5rem flex-1 flex flex-col justify-between">
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
        </div>
        <div v-else>
            <van-empty description="该省份暂无上传的VR场馆" />
        </div>
    </div>
</template>
