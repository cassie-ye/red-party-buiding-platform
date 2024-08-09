<script setup>
const onClickLeft = () => history.back();
const active = ref(0)
const tabList = ref([
    {
        name: "红色头条"
    },
    {
        name: "红色镜头"
    },
    {
        name: "红色人物"
    },
    {
        name: "红色书画"
    },
    {
        name: "英雄事迹"
    },

])
const imgList = ref([
    {
        img: "https://img2.baidu.com/it/u=1960531282,1758286080&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=909",
    },
    {
        img: "https://img2.baidu.com/it/u=4005510462,751589954&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=923",
    }
])

const currentIndex = ref(0)
const prevSlide = () => {
    if (currentIndex.value != 0) {
        currentIndex.value -= 1
    }
}

const nextSlide = () => {
    if (currentIndex.value != imgList.value.length - 1) {
        currentIndex.value += 1
    }
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="红色专栏" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <van-tabs v-model:active="active">
            <van-tab v-for="(item, index) in tabList" :title="item.name">
                <div v-if="index == 0" v-for="item in 8"
                    class="w-96% bg-#fff ml2% mr2% p1.5rem rounded-0.5rem mt0.8rem">
                    <img class="w-full h13rem rounded-0.5rem" src="http://www.crt.com.cn/2024images/8/hs503.jpg" alt="">
                    <p class="pt1rem shenglue">红色头条：纪念红军长征九十周年、毛主席发表《为人民服务》八十周年等红色系列活动第八场在京举行（组图） </p>
                    <div class="flex mt0.3rem justify-end">
                        <p class="font-size-0.9rem color-coolgray">2024-08-09</p>
                    </div>
                </div>
                <div v-if="index == 1" v-for="item in 8"
                    class="w-96% bg-#fff ml2% mr2% p1.5rem rounded-0.5rem mt0.8rem">
                    <div class="flex items-center">
                        <img class="w3rem rounded-50% mr0.5rem"
                            src="https://img2.baidu.com/it/u=3727265762,2314152880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                            alt="">
                        <p class="color-red-5 font-bold">中红网</p>
                    </div>
                    <p class="shenglue mb0.5rem">中红网江山镜头中的红色经典之三：瑞金的“井”（组图）</p>
                    <div class="flex flex-wrap justify-between  h22rem ">
                        <img v-for="item in 9" class="w6.5rem h6.5rem"
                            src="http://www.crt.com.cn/2023images/7/hs2667.jpg" alt="">
                    </div>
                </div>
                <div v-if="index == 2" v-for="(item2, index2) in 8" :key="index2"
                    class="w-96% bg-#fff ml2% mr2% p1.5rem rounded-0.5rem mt0.8rem flex items-center"
                    :class="index2 % 2 === 0 ? 'bg-left' : 'bg-right'">
                    <div v-if="index2 % 2 === 0" class="w5rem h-full flex flex-col items-center">
                        <img class="w5rem h5rem rounded-50%"
                            src="https://imgnews.gmw.cn/attachement/jpg/site2/20210507/f44d305ea12e21fe83dd1d.jpg"
                            alt="">
                        <p class="font-bold mt0.5rem">李大钊</p>
                    </div>
                    <div class=" flex-1" :class="index2 % 2 === 0 ? 'ml1.2rem' : 'mr1.2rem'">
                        <p class="shenglue4">
                            李大钊同志1889年10月29日出生于河北省乐亭县。那时，中国正处在帝国主义列强加紧侵略和封建统治愈益腐朽而造成的深重灾难之中，国家和民族濒于危亡的边缘。进入二十世纪，辛亥革命爆发、新文化运动涌起，特别是五四运动的发生，使中国社会出现了曙光初现的变化。李大钊同志是在这样的历史背景下走上探索救国救民道路的。1913年，他东渡日本，就读于东京早稻田大学，开始接触社会主义思想和马克思主义学说。1916年回国后，他积极投身新文化运动，宣传民主、科学精神，抨击旧礼教、旧道德，向封建顽固势力展开猛烈斗争。他和他的战友们改造旧中国的决心和激情，有力激发了当时中国青年的蓬勃朝气和进取精神
                        </p>
                    </div>
                    <div v-show="index2 % 2 === 1" class="w5rem h-full flex flex-col items-center">
                        <img class="w5rem h5rem rounded-50%"
                            src="https://imgnews.gmw.cn/attachement/jpg/site2/20210507/f44d305ea12e21fe83dd1d.jpg"
                            alt="">
                        <p class="font-bold mt0.5rem">李大钊</p>
                    </div>
                </div>
                <div v-if="index == 3"
                    class="relative h100vh w-96% ml2% mr2% rounded-0.5rem mt0.8rem flex items-center">
                    <div v-for="(item, index) in imgList " :key="index">
                        <img v-show="currentIndex == index" class="rounded-0.5rem h100vh w-full " :src="item.img"
                            alt="">
                    </div>
                    <div @click="prevSlide()"
                        class="w2.2rem h2.2rem prevAndNext rounded-50% absolute left-[-0.5rem] top-20rem flex justify-center items-center">
                        <van-icon name="arrow-left" color="#fff" />
                    </div>
                    <div @click="nextSlide()"
                        class="w2.2rem h2.2rem prevAndNext rounded-50% absolute right-[-0.5rem] top-20rem flex justify-center items-center">
                        <van-icon name="arrow" color="#fff" />
                    </div>

                </div>
                <div v-if="index == 4" v-for="item in 8"
                    class="w-96% bg-#fff ml2% mr2% p1.5rem rounded-0.5rem mt0.8rem flex flex-col items-center">
                    <img class="w-full h13rem rounded-0.5rem" src="http://www.crt.com.cn/2024images/8/hs503.jpg" alt="">
                    <p class="pt1rem shenglue">红色头条：纪念红军长征九十周年、毛主席发表《为人民服务》八十周年等红色系列活动第八场在京举行（组图） </p>
                </div>
            </van-tab>
        </van-tabs>
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

.shenglue4 {
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.bg-left {
    background-image: linear-gradient(to right, rgb(255, 68, 68) 10%, rgba(255, 0, 0, 0) 70%);
}

.bg-right {
    background-image: linear-gradient(to right, rgba(255, 0, 0, 0) 10%, rgb(255, 68, 68) 70%);
}

.prevAndNext {
    background-color: rgba(0, 0, 0, 0.5);
    /* 50% 透明度 */
}

.transparent-background {
    background-color: rgba(255, 255, 255, 0.5);
    /* 白色背景，透明度为 0.5 */
}
</style>
