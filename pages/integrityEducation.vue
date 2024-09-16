<script setup>
const onClickLeft = () => history.back();
const tabsTitleList = ref([
    "廉政反向案例", "廉政数字化展厅", "廉政课程"
])
const activeTabIndex = ref(0);

const columns = [
    { text: '全部案例', value: '0' },
    // byPartyOfficials
    { text: '党员领导干部严重违纪违法典型案例', value: '0' },
    // byPartyOfficialsInHigherEducationInstitutions
    { text: '高校党员领导干部严重违纪违法典型案例', value: '1' },
    // theEightPointRegulationSpiritOfTheCentralCommittee
    { text: '违反中央八项规定精神典型案例', value: '2' },
    // formalismAndBureaucratismIssues
    { text: '形式主义官僚主义问题典型案例', value: '3' },
];

// TODO1：廉政反向案例数组
const allExampleList = ref([
    {
        // 标题
        title: '中华全国供销合作总社原党组副书记、理事会主任刘士余受到留党察看二年、政务撤职处分',
        // 来源
        source: "中央纪委国家监委网",
        // 图片
        img: "",
        // 立案审查调查
        caseFilingAndInvestigation: "日前，经中共中央批准，中央纪委国家监委对第十九届中央委员，中华全国供销合作总社原党组副书记、理事会主任刘士余严重违纪违法问题进行了立案审查调查。",
        // 违纪违法行为
        disciplinaryAndIllegalBehavior: "经查，刘士余同志身为中央委员，背离初心使命，政治立场动摇，党性原则缺失，落实党中央重大决策部署不力，公开发表不当言论，缺乏政治警觉和保密意识；为官不廉，利用职权和职务影响为他人谋取私利，违规安排他人到金融系统工作和提拔职务，为亲属违规购房打招呼，收受礼品礼金。",
        // 处分决定
        disciplinaryDecision: "刘士余同志的行为严重违反党的政治纪律和政治规矩、组织纪律、廉洁纪律、工作纪律，并构成严重职务违法，且在党的十八大后不收敛、不收手，应予严肃处理。同时，鉴于刘士余同志能够主动投案，如实交代违纪违法问题，认错悔错态度较好，按照“惩前毖后，治病救人”的原则，对其可予从轻处理。依据《中国共产党纪律处分条例》《中华人民共和国监察法》等有关规定，经中央纪委常委会会议研究并报中央政治局会议审议，决定给予刘士余同志留党察看二年处分，由国家监委给予其政务撤职处分，降为一级调研员；终止其党的十九大代表资格；收缴其违纪违法所得。依据《中国共产党章程》第四十二条第三款的规定，给予刘士余同志留党察看二年的处分，待召开中央委员会全体会议时予以追认。",
        // 类型：columns数组元素
        type: "byPartyOfficials"
    }
])

// TODO2：廉政数字化展厅数组
/*
    type:
    空间设计 spaceDesign
    线上会展 onlineExhibition
    博物馆 museum
    教育 education
    景区 scenicSpot
*/
const digitalExhibitionHallList = ref([
    {
        // 分类
        type: "spaceDesign",
        // 东征廉政教育广场
        title: "",
        // 弄一张差不多的图片上去
        img: "",
        // 跳转过去的VR链接
        vrLink: ""
    }
])

// TODO3: 廉政课程视频数组
const antiCorruptionCourseList = ref([
    {
        // 视频链接
        videoLink: ""
    }
])

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
