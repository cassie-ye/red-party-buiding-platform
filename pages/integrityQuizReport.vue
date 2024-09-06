<script setup>
const onClickLeft = () => history.back();
const router = useRouter()
const gotoIntegrityQuizReportDetails = () => {
    router.push('/integrityQuizReportDetails')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="答题统计" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div
            class="relative font-size-0.9rem pl1rem pr1rem pt0.6rem pb0.6rem bg-#fff w96% ml2% mt0.5rem rounded-0.3rem">
            <div class="border-b-solid border-b-0.03rem border-b-#DEDEDE pb0.2rem color-coolGray">
                2024-09-10&nbsp;&nbsp;09:00:03 ~
                09:00:03</div>
            <p class="mt0.5rem">答题人：Cassie燁</p>
            <p>总答题数：10</p>
            <div class="flex">
                <div class="flex items-center mr0.8rem">
                    <i class="iconfont icon-daduitishu font-size-1.3rem color-green-5 mr0.3rem"></i>
                    <p>答对题数：5</p>
                </div>
                <div class="flex items-center">
                    <i class="iconfont icon-dacuotishu font-size-1.3rem color-red-5 mr0.3rem"></i>
                    <p>答错题数：5</p>
                </div>
            </div>
            <div class="flex items-center mr0.8rem">
                <i class="iconfont icon-icon-test font-size-1.3rem color-blue-5 mr0.3rem"></i>
                <p>正确率：50%</p>
            </div>
            <div @click="gotoIntegrityQuizReportDetails()" class="absolute right-0.5rem bottom-0.5rem">
                <van-button type="primary" size="small" >查看报告</van-button>
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
</style>
