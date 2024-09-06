<script setup>
const onClickLeft = () => history.back();
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

const active = ref(0)


</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="题目1" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <van-tabs class="" v-model:active="active">
            <van-tab v-for="index in 8" :title="'题目 ' + index">
                <div class="mt1rem">
                    <div
                        class="font-size-0.9rem w-full p0.6rem bg-#fff border-b-solid border-b-0.05rem border-b-#e9e9e9">
                        <span>正确答案：</span>
                        <span class="color-#17b1cd">A</span>
                    </div>
                    <div
                        class="flex justify-between items-center font-size-0.9rem w-full p0.6rem bg-#fff border-b-solid border-b-0.05rem border-b-#fff">
                        <div>
                            <span>你的作答：</span>
                            <span class="color-#17b1cd">A</span>
                        </div>
                        <van-icon name="success" size="20" color="#17b1cd" />
                        <!-- <van-icon name="cross" size="20" color="red-6"/> -->
                    </div>
                </div>
                <div>
                    <div
                        class="mt1rem flex justify-between items-center font-size-0.9rem w-full p0.6rem bg-#fff border-b-solid border-b-0.05rem border-b-#e9e9e9">
                        <div class="flex">
                            <van-tag class="mr0.5rem" type="primary">单选题</van-tag>
                            <van-tag type="success">简单</van-tag>
                        </div>
                        <div class="flex items-center">
                            <span class="font-size-1.1rem font-bold color-#17b1cd">10</span>
                            <span>分</span>
                        </div>
                    </div>
                    <div class="font-size-0.9rem w-full p0.6rem bg-#fff">
                        <p>新中国成立后，在（）基础上，确立了新中国的宪法制度喝立法行政司法体制</p>
                        <div class="mt0.5rem" v-for="(item, index) in labeledOptions" :key="index">
                            <div>
                                {{ item }}
                            </div>
                        </div>
                    </div>
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
