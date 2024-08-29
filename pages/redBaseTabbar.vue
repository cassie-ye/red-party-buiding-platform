<script setup>
definePageMeta({
    layout: 'with-tabbar'
})
// 引入路由
import { useRouter } from 'vue-router';
import { getAllProvinceAndAreaListAPI, getRedBaseByProvinceAndCityAPI, getRandomRedBaseAPI } from "../utils/apis/redBase.ts";

const router = useRouter();
const show = ref(false);
const fieldValue = ref('');
const cascaderValue = ref('');
// const options = useCascaderAreaData();
// // 处理省市区数据
// options.forEach((province) => {
//     province.children.forEach((city) => {
//         delete city.children
//     })
// })
// console.log(options)

/**
 * 选择地区
 * @param param0
 */
const onFinish = ({ selectedOptions }) => {
    show.value = false;
    fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    const obj = {
        proId: selectedOptions[0].value,
        citId: selectedOptions[1].value
    }
    getRedBaseByProvinceAndCity(obj)
}

/**
 * 进入地区详情
 */
const gotoAreaDetails = (areaId) => {
    router.push({
        path: '/areaDetails',
        query: { areaId }
    });
}

/**
 * 进入搜索
 */
const gotoSearchRedBase = () => {
    router.push('/searchRedBase')
}

const provinceAndAreaList = ref([])
/**
 * 调接口获取所有省市
 */
const getAllProvinceAndAreaList = async () => {
    const res = await getAllProvinceAndAreaListAPI()
    provinceAndAreaList.value = res.map(option => ({
        text: option.label,
        value: option.value,
        children: option.children.map(child => ({
            text: child.label,
            value: child.value
        }))
    }));
    console.log(provinceAndAreaList.value)
}
getAllProvinceAndAreaList()

const queryByConditionReturnResBaseList = ref([])
/**
 * 调接口根据省份和城市获取红色基地
 */
const getRedBaseByProvinceAndCity = async (obj) => {
    const res = await getRedBaseByProvinceAndCityAPI(obj)
    queryByConditionReturnResBaseList.value = res
}

/**
 * 调接口获取随机红色基地
 */
const getRandomRedBase = async () => {
    const res = await getRandomRedBaseAPI()
    queryByConditionReturnResBaseList.value = res
    console.log('radom', res)
}
getRandomRedBase()
</script>
<template>
    <div>
        <div class="w-full">
            <div class="w-full h13rem bg-cover bg-no-repeat " style="background-image: url(/red-base/top-bg.jpg);">
                <div class=" flex items-center justify-between  w-full h3.3rem pl0.5rem pr0.5rem">
                    <div class="flex items-center">
                        <img class="w1.5rem mr0.2rem" src="/red-base/top-logo.png" alt="">
                        <span class="font-size-1.1rem font-bold color-#fff ">党建研学</span>
                    </div>
                    <div class="flex items-center">
                        <span
                            class="w2rem h2rem bg-white bg-opacity-50 rounded-50% flex justify-center items-center mr0.5rem">
                            <Icon name="arcticons:openai-chatgpt" style="color: black" size="25" />
                        </span>
                        <span class="w2rem h2rem bg-white bg-opacity-50 rounded-50% flex justify-center items-center">
                            <Icon name="material-symbols:person" style="color: black" size="25" />
                        </span>
                    </div>
                </div>
                <!-- 搜索框-->
                <div @click="gotoSearchRedBase()"
                    class=" h-2.3rem bg-white bg-opacity-95 rounded-1rem flex items-center ml0.8rem mr1rem mt8.5rem pl0.5rem pr0.5rem">
                    <Icon name="ic:outline-search" style="color: #9F9F9F" size="25" />
                    <p class="color-#9F9F9F font-size-0.9rem">想去哪儿研学，搜一搜</p>
                </div>
            </div>
            <!-- 各个省份入口 -->
            <div class="w-full pl0.5rem pr0.5rem mt2rem">
                <van-field v-model="fieldValue" is-link readonly label="地区" placeholder="请选择所在地区"
                    @click="show = true" />
                <van-popup v-model:show="show" round position="bottom">
                    <van-cascader v-model="cascaderValue" title="请选择想去的地区" :options="provinceAndAreaList"
                        @close="show = false" @finish="onFinish" columns="2" class="pt1.5rem" />
                </van-popup>
            </div>
            <div class="w-full pl0.5rem pr0.5rem mt0.5rem flex justify-between flex-wrap">
                <div @click="gotoAreaDetails(item.id)" class="w49% bg-#fff rounded-0.3rem mb0.5rem"
                    v-for="(item, index) in queryByConditionReturnResBaseList" :key="index">
                    <img :src="item.image" alt="" class="w-full h10rem rounded-t-0.3rem">
                    <div class="flex flex-col items-center pt0.5rem pb1rem">
                        <p class="pt0.2rem font-bold">{{ item.name }}</p>
                        <div class="font-size-0.7rem pl0.5rem pr0.5rem ">
                            <i class="iconfont icon-didian01 color-red-6 font-size-1.2rem mr0.3rem"></i>
                            <span class="mt0.35rem">{{ item.position }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
</style>
