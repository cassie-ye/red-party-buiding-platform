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
                <el-timeline-item timestamp="2018/4/12" placement="top" color="#FF4848">
                    <el-card>
                        <p class="font-bold">中共一大召开</p>
                        <p class="font-size-0.8rem">确定共产党是无产阶级政党，任务是工人阶级运动目标是实现共产主义</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top" color="#FF4848">
                    <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/3 20:46</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                    <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/2 20:46</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/12" placement="top">
                    <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/12 20:46</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                    <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/3 20:46</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                    <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/2 20:46</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/12" placement="top">
                    <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/12 20:46</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                    <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/3 20:46</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                    <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/2 20:46</p>
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
