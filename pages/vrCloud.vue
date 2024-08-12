<script setup>
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
}

const gotoIndexBar = () => {
    route.push('/indexBar')
}

const gotoVrDetails = () => {
    route.push('/vrDetails')
}
</script>
<template>
    <div class="w-full  h-full">
        <van-nav-bar :fixed="true" :placeholder="true" title="红色基地" left-text="返回" left-arrow
        @click-left="onClickLeft" />
        <div class="w-full pt1rem h17.5rem top-red-linear-bg ">
            <div
                class="h-2.3rem bg-white bg-opacity-95 rounded-1rem flex items-center ml0.8rem mr1rem pl0.5rem pr0.5rem ">
                <Icon name="ic:outline-search" style="color: #9F9F9F" size="25" />
                <p class="color-#9F9F9F font-size-0.9rem">搜索VR场馆</p>
            </div>
            <div class="w-full flex justify-center">
                <video class="mt0.8rem w96% rounded-0.5rem top-red-linear-bg"
                    src="https://boot-video.xuexi.cn/video/1005/p/59453997e1342bcadc6ca1df48d37397-b6067f7596224c518260653e5df6574e-2.mp4"
                    controls></video>
            </div>
        </div>
        <!-- 滑动标签页 -->
        <div class="relative w-full">
            <van-tabs v-model:active="active" swipeable class=" " color="red" @click-tab="changeTab">
                <van-tab class="w-full " v-for="(item, index) in tabsList" :title="item">
                    <div class="w-full pt1rem pl0.5rem pr0.5rem bg-#fff">
                        <div class="relative">
                            <img src="https://www.finding.com.cn/uploadfile/2021/1115/202111151012328.jpg" alt=""
                                class="rounded-1rem w-full h11rem" @click="gotoVrDetails">
                            <div
                                class="absolute left-45% top-35% font-size-1.5rem color-#fff font-bold w3.5rem h3.5rem rounded-50% border-solid border-0.1rem border-#fff flex justify-center items-center">
                                VR
                            </div>
                            <div
                                class="pt0.1rem pb0.1rem pl0.6rem pr0.6rem bg-red-5 rounded-0.5rem absolute left-0.5rem bottom-0.5rem color-#fff font-size-0.8rem">
                                嘉兴南湖
                            </div>
                        </div>
                        <div class="w-full ">
                            <p class="mt0.8rem font-bold">浙江省红色基地精选VR场景</p>
                            <div class=" flex mt0.5rem w-full h5.7rem overflow-hidden mb0.8rem" v-for="item in 8">
                                <div class="relative w10rem rounded-0.3rem h5.7rem">
                                    <div
                                        class="absolute left-40% top-35% font-size-1rem color-#fff font-bold w2rem h2rem rounded-50% border-solid border-0.1rem border-#fff flex justify-center items-center">
                                        VR
                                    </div>
                                    <img class="w10rem rounded-0.3rem h5.7rem"
                                        src="https://pavo.elongstatic.com/i/Hotel870_470/nw_MdYOwAeC8E.jpg" alt="">
                                </div>
                                <div class="pl0.5rem flex-1 flex flex-col justify-between">
                                    <p class="font-size-0.9rem font-bold">红十三军军部旧址</p>
                                    <p class="font-size-0.8rem color-#525252">hong 13th military headquarters site</p>
                                    <div class="flex items-center">
                                        <Icon name="iconoir:keyframe-position-solid" color="red-5" size="20" />
                                        <p class="font-size-0.8rem color-#9F9F9F ml0.2rem">"浙江·嘉兴</p>
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
