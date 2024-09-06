<script setup>
const onClickLeft = () => history.back();
const time = ref(1 * 60 * 1000);
// 倒计时结束时触发
const onFinish = () => {
    console.log("onFinish")
}
const type = ref('primary')
const optionList = ref([
    "《唐律》",
    "《唐诗》",
    "《宋词》",
    "《宋史》"
])
const labeledOptions = optionList.value.map((item, index) => {
    const labels = ['A', 'B', 'C', 'D'];
    return `${labels[index]}、 ${item}`;
});
const activeIndex = ref(0)

const router = useRouter()
const gotoFinishAnswer = () => {
    router.push('/finishAnswer')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="廉政教育答题" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="flex items-center w-full pl1rem pr1rem pt0.8rem pb0.8rem bg-#deeff9">
            <p>倒计时：</p>
            <van-count-down :time="time" @finish="onFinish()">
                <template #default="timeData">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>
        </div>
        <div class="w-full p1rem">
            <p class="font-bold mb1rem">1、唐代的监察立法，不包括（）。</p>
            <p class="font-size-0.9rem color-coolgray mb1rem">单选题</p>
            <div v-for="(item, index) in labeledOptions" :key="index">
                <van-button :type="activeIndex == index ? 'primary' : 'default'" plain @click="activeIndex = index">
                    {{ item }}
                </van-button>
            </div>
        </div>
        <div class="flex justify-evenly">
            <van-button type="primary"
                style="width: 40%;display: flex;justify-content: center;align-items: center">上一题</van-button>
            <van-button @click="gotoFinishAnswer()" type="primary"
                style="width: 40%;display: flex;justify-content: center;align-items: center">下一题</van-button>
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

.colon {
    display: inline-block;
    margin: 0 4px;
    color: #1989fa;
}

.block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #1989fa;
}

:deep(.van-button) {
    width: 98%;
    margin-left: 1%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
}
</style>
