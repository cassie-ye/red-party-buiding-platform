<script setup>
import { getRedBaseFoodServiceByBaseIdAPI } from '../utils/apis/baseService.ts'
const onClickLeft = () => history.back();
const route = useRoute()
const areaId = route.query.areaId
console.log(areaId)

const redBaseFoodList = ref([])
const currentActiveFoodCnameList = ref([])

/**
 * 调接口根据基地Id获取基地餐饮数据列表
 */
const getRedBaseFoodServiceByBaseId = async () => {
    const res = await getRedBaseFoodServiceByBaseIdAPI(areaId)
    redBaseFoodList.value = res
    currentActiveFoodCnameList.value = res[0].dishes
    console.log('redBaseFoodList.value', redBaseFoodList.value)
    console.log('currentActiveFoodCnameList', currentActiveFoodCnameList.value)
}
const foodCnameTitleList = ref([])
/**
 * 获取分类列表数组 渲染在左侧
 */
const getFoddCnameTitleListValue = () => {
    redBaseFoodList.value.map((item) => {
        foodCnameTitleList.value.push(item.cname)
    })
}

/**
 * 挂载
 */
onMounted(async () => {
    await getRedBaseFoodServiceByBaseId()
    await getFoddCnameTitleListValue()
})
console.log('foodCnameTitleList', foodCnameTitleList.value)

const active = ref(0)
const currentActiveSlidebarIndex = ref(0)
/**
 * 切换左侧导航栏的分类
 */
const onChange = (index) => {
    // console.log(index)
    currentActiveSlidebarIndex.value = index
    currentActiveFoodCnameList.value = redBaseFoodList.value[index].dishes
}

const router = useRouter()

/**
 * 跳转到食物详情
 */
const gotoFoodDetails = (item) => {
    console.log('item',item)
    router.push({
        path: '/foodDetails',
        query: { item: JSON.stringify(item) }
    });
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="基地餐饮" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="flex">
            <div class="w5rem  bg-#f7f8fa">
                <van-sidebar v-model="active" @change="onChange">
                    <van-sidebar-item v-for="(item, index) in foodCnameTitleList" :key="index" :title="item" />
                </van-sidebar>
            </div>
            <div class="flex-1" v-show="active == currentActiveSlidebarIndex">
                <div v-if="currentActiveFoodCnameList.length > 0" @click="gotoFoodDetails(item)" v-for="(item, index) in currentActiveFoodCnameList" :key="index"
                    class="m0.5rem mb0 p0.5rem bg-#fff rounded-0.5rem w-95% flex justify-between">
                    <img class="w4rem h4rem rounded-0.2rem " :src="item.image" alt="">
                    <div class="w55% h-full ">
                        <p class="font-size-0.9rem">{{ item.name }}</p>
                        <van-tag type="primary">{{ item.categoryName }}</van-tag>
                    </div>
                    <div class="font-bold color-red-5 flex flex-col items-end">
                        <p>¥<span class="">{{ item.price }}</span></p>
                        <van-icon name="add" color="#fac231" size="20" class="mt0.5rem" />
                    </div>
                </div>
                <div v-else>
                    <van-empty description="暂无数据" />
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

:deep(.van-action-bar) {
    height: 4rem;
}

:deep(.van-count-down) {
    color: #fff;
    font-weight: bold;
}
</style>
