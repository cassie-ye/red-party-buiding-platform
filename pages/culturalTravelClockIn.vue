<script setup>
const route = useRouter()
const onClickLeft = () => history.back();
const gotoPunchList = () => {
    route.push('/punchList')
}

const gotoTimeLine = () => {
    route.push('/punchTimeline')
}

const gotoFootprintMap = () => {
    route.push('/footprintMap')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="文旅打卡" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="top-red-linear-bg w-full h10rem"></div>
        <div class="w-full rounded-t-2rem bg-#fff mt[-5rem] relative pl0.5rem pr0.5rem">
            <img class="w3.9rem h3.9rem rounded-50% absolute left-1.5rem top-[-1.8rem] border-0.1rem border-solid border-#fff"
                src="https://img.cjyun.org/a/10194/202108/3a888c968c54a23b7d831629b724c39b.jpeg" alt="">
            <div class="flex justify-between items-center pt2.5rem">
                <p class="font-size-1.1rem font-bold">{{ "Cassie燁" }}</p>
                <div
                    class="w-5rem h1.4rem font-size-0.8rem flex justify-center items-center rounded-1rem color-#fff bg-gradient-to-r from-sky-500 to-indigo-500">
                    初学行者 v1</div>
            </div>
            <div class="w-full flex justify-between mt1rem">
                <div @click="gotoPunchList()"
                    class="flex w7rem h3.8rem bg-#FFF5DB flex justify-center items-center color-amber rounded-0.5rem">
                    <i class="iconfont icon-24gf-clipboardChecklist font-size-1.6rem "></i>
                    <p class="font-size-0.85rem ml0.2rem font-bold">打卡清单</p>
                </div>
                <div @click="gotoTimeLine()"
                    class="flex w7rem h3.8rem bg-#F1F3FF flex justify-center items-center color-#2C6FEC rounded-0.5rem">
                    <i class="iconfont icon-shijian font-size-1.6rem"></i>
                    <p class="font-size-0.85rem ml0.2rem font-bold">打卡时间轴</p>
                </div>
                <div @click="gotoFootprintMap()"
                    class="flex w7rem h3.8rem bg-#F4FFF1 flex justify-center items-center color-#59A639 rounded-0.5rem">
                    <i class="iconfont icon-map font-size-1.6rem"></i>
                    <p class="font-size-0.85rem ml0.2rem font-bold">足迹地图</p>
                </div>
            </div>
            <div class="w-full mt1rem ">
                <p class="font-bold">打卡人气榜</p>
                <p class="font-size-0.8rem color-#9F9F9F mt0.3rem">每周人气大汇集</p>
                <div class="flex justify-between items-center">
                    <p class="font-size-0.7rem">全球已有<span class="font-size-1rem font-bold color-red-5">244187</span>人打卡
                    </p>
                    <UAvatarGroup size="sm" :max="5">
                        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
                        <UAvatar src="https://avatars.githubusercontent.com/u/904724?v=4" alt="Atinux" />
                        <UAvatar src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
                        <UAvatar src="https://q2.itc.cn/q_70/images03/20240320/3df8c75302424a05864e62215a548e28.jpeg"
                            alt="smarroufin" />
                        <UAvatar src="https://q2.itc.cn/q_70/images03/20240714/5265b8330b054f4294314df029b3a530.jpeg">
                        </UAvatar>
                    </UAvatarGroup>
                </div>
                <!-- 遗址类 纪念馆类 文化馆类 -->
                <van-swipe class="mt1rem" :loop="false" :width="140" :show-indicators="false">
                    <van-swipe-item class="relative">
                        <img src="/public/red-base/top-bg.jpg" class="w8rem h5rem rounded-0.3rem" alt="">
                        <p class="absolute bottom-0.2rem left-0.3rem color-#fff font-size-0.8rem">遗址类基地合集</p>
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="/public/red-base/top-bg.jpg" class="w8rem h5rem rounded-0.3rem" alt="">
                        <p class="absolute bottom-0.2rem left-0.3rem color-#fff font-size-0.8rem">纪念馆类基地合集</p>
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="/public/red-base/top-bg.jpg" class="w8rem h5rem rounded-0.3rem" alt="">
                        <p class="absolute bottom-0.2rem left-0.3rem color-#fff font-size-0.8rem">文化馆类基地合集</p>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="w-full mt1rem ">
                <p class="font-bold">红色研学护照</p>
                <p class="font-size-0.8rem color-#9F9F9F mt0.3rem">带着护照去研学</p>
                <div class="w-full mt0.5rem h15rem bg-#fff rounded-0.5rem shadow-xl">
                    <img class="rounded-t-0.5rem w-full" src="/public/culturalTravelClockIn/ad.jpg" alt="">
                    <div class="flex justify-between items-center">
                        <div class="pl1rem mt0.5rem">
                            <p class="font-bold">红色研学集章护照本</p>
                            <p class="font-size-0.8rem color-#AAA7AA mt0.3rem">朱红色 深蓝色</p>
                        </div>
                        <div class="color-orange-5 font-size-1.2rem font-bold pr1rem mt0.3rem">
                            ￥28.8
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full mt1rem pb-1rem">
                <p class="font-bold">热门打卡地</p>
                <p class="font-size-0.8rem color-#9F9F9F mt0.3rem">大家正在打卡</p>
                <div class=" flex mt0.5rem w-full h5.7rem overflow-hidden mb0.8rem" v-for="item in 3">
                    <div class="relative w10rem rounded-0.3rem h5.7rem">
                        <!-- <div
                                class="absolute left-40% top-35% font-size-1rem color-#fff font-bold w2rem h2rem rounded-50% border-solid border-0.1rem border-#fff flex justify-center items-center">
                                VR
                            </div> -->
                        <img class="w10rem rounded-0.3rem h5.7rem"
                            src="https://pavo.elongstatic.com/i/Hotel870_470/nw_MdYOwAeC8E.jpg" alt="">
                    </div>
                    <div class="pl0.5rem flex-1 flex flex-col justify-between">
                        <p class="font-size-0.9rem font-bold">红十三军军部旧址</p>
                        <p class="font-size-0.8rem color-#525252">hong 13th military headquarters site</p>
                        <div class="flex items-center">
                            <!-- <Icon name="iconoir:keyframe-position-solid" color="red-5" size="20" /> -->
                            <i class="iconfont icon-daka1 color-red-5 font-size-1.2rem"></i>
                            <p class="font-size-0.8rem color-#9F9F9F ml0.2rem">34827人已打卡</p>
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

.top-red-linear-bg {
    background: linear-gradient(to bottom,
            #EF4444 3%,
            #FFB4B4 55%,
            transparent);
}
</style>
