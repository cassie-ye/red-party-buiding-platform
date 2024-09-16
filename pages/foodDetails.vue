<script setup>
import { getFoodFlavorsByFoodIdAPI,createFoodOrderAPI } from '../utils/apis/baseService.ts'
const onClickLeft = () => history.back();
const route = useRoute();
const foodDetails = JSON.parse(route.query.item || '{}');

const foodFlavorsList = ref([])

/**
 * 调接口获取食物口味
 */
const getFoodFlavorsByFoodId = async () => {
    const res = await getFoodFlavorsByFoodIdAPI(foodDetails.id)
    // console.log(res);
    res.map((item) => {
        item.value = JSON.parse(item.value)
    })
    foodFlavorsList.value = res
}
onMounted(async () => {
    await getFoodFlavorsByFoodId()
    console.log('foodFlavorsList', foodFlavorsList.value)

})

const selectFavorOptionsList = ref([])
const selectFavorList = ref([])
/**
 * 选择口味
 */
const selectFavors = (item, index1, index2) => {
    // console.log(foodFlavorsList.value[index1])
    // selectFavorOptionsList.value.push({
    //     name: foodFlavorsList.value[index1].name,
    //     value: foodFlavorsList.value[index1].value[index2]
    // })
    // console.log(selectFavorOptionsList.value)

    selectFavorOptionsList.value.map((item, i) => {
        if (item.name == foodFlavorsList.value[index1].name) {
            selectFavorOptionsList.value.splice(i, 1);
        }
    })
    selectFavorOptionsList.value.push({
        name: foodFlavorsList.value[index1].name,
        value: foodFlavorsList.value[index1].value[index2]
    })

    selectFavorList.value = selectFavorOptionsList.value.map(item => item.value);
    console.log('selectFavorOptionsList', selectFavorOptionsList.value)
    console.log('selectFavorList', selectFavorList.value)

}

const createFoodOrder = async (data) => {
    await createFoodOrderAPI(data)
}

/*
    基地名称
    菜品*x+菜品*x

*/
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="基地餐饮" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <img class="w-full h16rem" :src="foodDetails.image" alt="">
        <div class="w-full bg-#fff h24rem">
            <div class="flex justify-between pt0.5rem pl0.5rem pr0.5rem">
                <p class="font-bold">{{ foodDetails.name }}</p>
                <div class="flex items-center">
                    <img class="w1.2rem mr0.5rem" src="/public/baseService/zuanshi.png" alt="">
                    <img class="w1.2rem" src="/public/baseService/baozhang.png" alt="">
                </div>
            </div>
            <div v-for="(item, index) in foodFlavorsList" :key="index" class="w-full mt1.5rem pl0.5rem pr0.5rem">
                <div class="flex flex-wrap">
                    <div class="font-size-0.9rem mr1rem w3rem">{{ item.name }}</div>
                    <div class="flex-1 flex flex-wrap">
                        <div :class="selectFavorList.includes(item2) ? 'bg-red-100 color-red-4 font-bold' : 'bg-#f7f7f7'"
                            @click="selectFavors(item, index, index2)" v-for="(item2, index2) in item.value"
                            :key="index2"
                            class="w5rem h1.5rem bg-#f7f7f7 flex flex-wrap justify-center items-center font-size-0.8rem rounded-0.2rem mr0.5rem mb0.5rem">
                            {{ item2 }}
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

:deep(.van-action-bar) {
    height: 4rem;
}

:deep(.van-count-down) {
    color: #fff;
    font-weight: bold;
}
</style>
