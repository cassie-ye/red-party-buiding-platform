<script setup>
const onClickLeft = () => history.back();
const tabsTitleList = ref([
    "廉政反向案例", "廉政数字化展厅", "廉政课程"
])
const activeTabIndex = ref(0);

const columns = [
    { text: '全部案例', value: '0' },
    { text: '党员领导干部严重违纪违法典型案例', value: '0' },
    { text: '高校党员领导干部严重违纪违法典型案例', value: '1' },
    { text: '违反中央八项规定精神典型案例', value: '2' },
    { text: '形式主义官僚主义问题典型案例', value: '3' },
];
const fieldValue = ref('全部案例');
const showPicker = ref(false);

const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    fieldValue.value = selectedOptions[0].text;
};

const router = useRouter()
const gotoCaseDetails = () => {
    router.push('/caseDetails')
}

const activeSidebarIndex = ref(0)

</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="廉政教育" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <van-tabs v-model:active="activeTabIndex" animated>
            <van-tab v-for="(item, index) in tabsTitleList" :title="item" :key="index"
                @change="activeTabIndex = index"></van-tab>
        </van-tabs>
        <div v-if="activeTabIndex == 0" class="">
            <van-field v-model="fieldValue" is-link readonly label="案例模式" placeholder="选择模式"
                @click="showPicker = true" />
            <van-popup v-model:show="showPicker" round position="bottom">
                <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
            </van-popup>
            <div @click="gotoCaseDetails()" class="w-96% ml2% p1rem  bg-#fff rounded-0.3rem mt0.3rem font-bold">
                中华全国供销合作总社原党组副书记、理事会主任刘士余受到留党察看二年、政务撤职处分
                <img class="rounded-0.3rem mt0.3rem"
                    src="https://img2.baidu.com/it/u=1724090465,1850249659&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                    alt="">
            </div>
        </div>
        <div v-if="activeTabIndex == 1" class="flex">
            <div class="w5rem h-vh bg-#f7f8fa">
                <van-sidebar v-model="activeSidebarIndex">
                    <van-sidebar-item title="空间设计" badge="65" />
                    <van-sidebar-item title="线上会展" badge="445" />
                    <van-sidebar-item title="博物馆" badge="35" />
                    <van-sidebar-item title="教育" badge="55" />
                    <van-sidebar-item title="景区" badge="65" />
                </van-sidebar>
            </div>
            <div>
                <div class="relative p0.5rem rounded-0.3rem ml0.5rem mr0.5rem mt0.5rem bg-#fff">
                    <img class="rounded-0.3rem mt0.3rem"
                        src="https://img2.baidu.com/it/u=1724090465,1850249659&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
                    <div
                        class="absolute left-40% top-35% font-size-1.5rem color-black font-bold w3rem h3rem rounded-50% border-solid border-0.1rem border-black flex justify-center items-center">
                        VR
                    </div>
                    <div
                        class="absolute left-1rem pl0.5rem pr0.5rem pt0.1rem pb0.1rem bg-blue color-#fff rounded-0.3rem top-80% font-size-0.8rem  flex justify-center items-center">
                        东征廉政教育广场
                    </div>
                </div>
            </div>
        </div>
        <div v-if="activeTabIndex == 2" class="">
            <div class="w-full flex justify-center pb0.5rem bg-#fff">
                <video class="mt0.5rem w96% rounded-0.5rem top-red-linear-bg"
                    src="https://boot-video.xuexi.cn/video/1005/p/59453997e1342bcadc6ca1df48d37397-b6067f7596224c518260653e5df6574e-2.mp4"
                    controls></video>
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
