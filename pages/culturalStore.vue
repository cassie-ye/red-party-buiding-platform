<script setup>
const onClickLeft = () => history.back();
const value = ref('');
const method = ref(true)
const onChange = () => {
    method.value = !method.value
}

const value1 = ref(0);
const value2 = ref('a');
const option1 = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
];
const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '销量从高到低', value: 'b' },
    { text: '销量从低到高', value: 'c' },
];

// TODO：把这两个值传给后端发请求
const changeSelectedOption1 = (e) => {
    console.log(e); // 选中项的value值
}

const changeSelectedOption2 = (e) => {
    console.log(e); // 选中项的value值
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="文创商城" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="flex justify-between items-center bg-#fff pl0.5rem pr0.5rem">
            <van-search v-model="value" placeholder="请输入搜索关键词"
            class="w-95%"
            />
            <div @click="onChange" class="">
                <i class="iconfont icon-fenlei font-size-1.2rem"></i>
            </div>
        </div>
        <div class="flex pb0.5rem justify-between items-center bg-#fff">
            <van-dropdown-menu class="w100%" active-color="#ee0a24">
                <van-dropdown-item @change="changeSelectedOption1"  v-model="value1" :options="option1" />
                <van-dropdown-item @change="changeSelectedOption2" v-model="value2" :options="option2" />
            </van-dropdown-menu>
        </div>
        <div class="ml2% mr2% w96% h-full flex flex-wrap justify-between">
            <div v-if="method" v-for="i in 20" class="mt0.8rem mr1% w48.5% bg-#fff shadow-md rounded-0.5rem">
                <img class="rounded-t-0.5rem " src="/public/red-base/top-bg.jpg" alt="">
                <div class="p0.5rem">
                    <div class="shenglue font-size-0.9rem ">
                        红军色革命文化卡通家具办公会议
                    </div>
                    <p class="font-size-0.8rem color-coolgray">大|新中式</p>
                    <div class=" color-red-5 flex justify-between items-start">
                        <div class="flex items-center">
                            <span class="font-size-0.8rem color-red-4">￥</span>
                            <p class="font-bold">11.58</p>
                        </div>
                        <p class="font-size-0.8rem color-coolgray">13人付款</p>
                    </div>
                </div>
            </div>
            <div v-else v-for="i in 20"
                class="flex justify-between items-center mt0.8rem w100% bg-#fff shadow-md rounded-0.5rem">
                <img class="rounded w12rem h7rem" src="/public/red-base/top-bg.jpg" alt="">
                <div class="flex-1 p0.5rem">
                    <div class="shenglue font-size-0.9rem ">
                        红军色革命文化卡通家具办公会议
                    </div>
                    <p class="font-size-0.8rem color-coolgray">大|新中式</p>
                    <div class=" color-red-5 flex justify-between items-start">
                        <div class="flex items-center">
                            <span class="font-size-0.8rem color-red-4">￥</span>
                            <p class="font-bold">11.58</p>
                        </div>
                        <p class="font-size-0.8rem color-coolgray">13人付款</p>
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

::v-deep .van-nav-bar__arrow {
    color: black;
}

::v-deep .van-nav-bar__text {
    color: black;
}

::v-deep .van-ellipsis {
    color: black
}

.shenglue {
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
