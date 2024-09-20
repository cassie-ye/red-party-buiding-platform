<script setup>
const onClickLeft = () => history.back();
const router = useRouter();
const gotoHotelPage = () => {
    router.push('/hotelPage')
}
const gotoFoodPage = () => {
    router.push('/foodPage')
}

const foodList = ref([
    {
        name: "东坡肉",
        img: "https://img1.baidu.com/it/u=1576873116,1855605017&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=743",
        price: 78
    },
    {
        name: "家庭小炒肉",
        img: "https://img0.baidu.com/it/u=2036102749,2197289751&fm=253&fmt=auto&app=138&f=JPEG?w=529&h=500",
        price: 55
    },
    {
        name: "面包蟹",
        img: "https://img2.baidu.com/it/u=309570285,2707774235&fm=253&fmt=auto?w=608&h=418",
        price: 155
    }
])
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="住宿餐饮" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <!-- <img src="/public/baseService/a.jpg" class="w-full h10rem" alt=""> -->
        <div class="w-full   pl0.5rem pr0.5rem">
            <div class="w-full flex justify-evenly pb1rem bg-#fff pt1rem mt0.5rem rounded-0.3rem">
                <div @click="gotoHotelPage()"
                    class="w5rem h5rem rounded-0.5rem bg-#FFD1DB flex flex-col justify-center items-center">
                    <img class="w2.5rem" src="/public/hotelFood/hotel.png" alt="">
                    <span class="font-size-0.9rem">酒店</span>
                </div>
                <div @click="gotoFoodPage()"
                    class="w5rem h5rem rounded-0.5rem bg-#FFD8C1 flex flex-col justify-center items-center">
                    <img class="w2.5rem" src="/public/hotelFood/food.png" alt="">
                    <span class="font-size-0.9rem">餐饮</span>
                </div>
            </div>
            <img src="/public/baseService/a.jpg" class="w-full h10rem mt0.5rem rounded-0.3rem" alt="">
            <div class="flex items-center mb0.5rem mt1rem">
                <van-icon name="fire" class="mr0.5rem" size="25" color="#E33436" />
                <span class="font-bold">热门推荐</span>
            </div>
            <div v-for="(item, index) in foodList" class="flex bg-#fff p0.5rem rounded-0.3rem mb0.5rem">
                <div class="w7rem h5rem rounded-0.3rem mr0.5rem">
                    <img class="w7rem h5rem rounded-0.3rem mr0.5rem"
                    :src="item.img" alt="">
                </div>
                <div class="w75% h5rem flex flex-col justify-evenly h-full ">
                    <p class="font-size-0.9rem">{{ item.name }}</p>
                    <div>
                        <van-tag type="primary">热销菜</van-tag>
                    </div>
                    <p class="font-size-0.9rem">四明山</p>
                </div>
                <div>
                    <span>￥</span>
                    <span>{{ item.price }}</span>
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
</style>
