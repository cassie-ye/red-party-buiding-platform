<script setup>
const router = useRouter()
const onClickLeft = () => history.back();

/**
 * picker 选择器 选择年份
 */
const startYear = 1921;
const endYear = 2024;
const pickerYearArray = [];
for (let year = startYear; year <= endYear; year++) {
    pickerYearArray.push({
        text: year.toString() + "年",
        value: year.toString()
    });
}

const fieldValue = ref('');
const showPicker = ref(false);
const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    fieldValue.value = selectedOptions[0].text;
    console.log(fieldValue.value)
};
</script>
<template>
    <div class="w-full h-vh bg-cover bg-no-repeat " style="background-image: url(/partyHistoryTimeline/bg.jpg);">
        <van-nav-bar :fixed="true" :placeholder="true" title="党史时间轴" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="mt5rem ml2%">
            <van-button class="w6rem " @click="showPicker = true" color="linear-gradient(to right, #ff6034, #ee0a24)"
                size="small">
                {{ fieldValue || "选择党史年份" }}
            </van-button>
        </div>
        <div class=" w96% ml2% p1rem h32rem overflow-y-scroll bg-color mt0.5rem rounded-0.5rem">
            <el-timeline style="max-width: 600px;margin-top: 1rem;" class="">
                <el-timeline-item timestamp="1921/07/23" placement="top" color="#FF4848">
                    <el-card>
                        <p class="font-bold">中共一大召开</p>
                        <p class="font-size-0.8rem">中国共产党第一次全国代表大会在上海召开（最后一天转移到浙江嘉兴南湖），标志着中国共产党的正式成立。</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="1922/07" placement="top" color="#FF4848">
                    <el-card>
                        <p class="font-bold">中共二大召开</p>
                        <p>中共二大在上海召开，制定了党的最低纲领和最高纲领，为中国革命指明了方向。</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="1923/06" placement="top">
                    <el-card>
                        <p class="font-bold">中共三大召开</p>
                        <p>中共三大在广州召开，确定了国共合作的策略，促进了第一次国共合作的实现。</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="1926/07/09" placement="top">
                    <el-card>
                        <p class="font-bold">国民革命军在广州誓师北伐</p>
                        <p>国民革命军在广州誓师北伐，推动了中国革命的进程。</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="1927/08/01" placement="top">
                    <el-card>
                        <p class="font-bold">南昌起义</p>
                        <p>南昌起义爆发，标志着中国共产党独立领导革命战争、创建人民军队和武装夺取政权的开始。</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                    <el-card>
                        <p class="font-bold">中共二大召开</p>
                        <p>Tom committed 2018/4/2 20:46</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="1927/09" placement="top">
                    <el-card>
                        <p class="font-bold">秋收起义</p>
                        <p>秋收起义爆发，毛泽东率领起义军到达井冈山，创建了井冈山革命根据地。</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="1935/01" placement="top">
                    <el-card>
                        <p class="font-bold">遵义会议</p>
                        <p>遵义会议召开，确立了毛泽东在党中央和红军的领导地位，挽救了党和红军。</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="1937/07/07" placement="top">
                    <el-card>
                        <p class="font-bold">卢沟桥事变爆发</p>
                        <p>卢沟桥事变爆发，日本全面侵华战争开始，中国进入全面抗战阶段。</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
        <van-popup v-model:show="showPicker" round position="bottom">
            <van-picker :columns="pickerYearArray" @cancel="showPicker = false" @confirm="onConfirm" />
        </van-popup>
    </div>
</template>
<style scoped>
:deep(.van-nav-bar) {
    background-color: rgba(255, 255, 255, .6);
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

.bg-color {
    background-color: rgba(255, 255, 255, .6);
}
</style>
