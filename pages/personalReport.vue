<script setup>
const onClickLeft = () => history.back();
/*
    注册天数
    研学基地
    获得徽章
    获得积分
    粉丝数量
    收藏的基地数量

    对全年每月的基地打卡数量进行折线图和柱状图切换统计
    对积分来源进行饼图统计
    对答题的正确率进行饼图统计、对答题的频率进行饼图统计
    对发布的笔记的点赞、评论数量和粉丝增长量进行统计
*/

const chartContainer = ref(null);

onMounted(() => {
    const chart = useNuxtApp().$echarts2.init(chartContainer.value);
    const option = {
        title: {
            text: '全年研学打卡基地统计'
        },
        tooltip: {},
        xAxis: {
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {},
        series: [{
            name: 'Example',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 36, 10, 10, 20, 36, 10],
            itemStyle: {
                barBorderRadius: 5,
                borderWidth: 1,
                borderType: 'solid',
                borderColor: '#AD5FFF',
                shadowColor: '#FF46D6',
                shadowBlur: 3,
                color: '#E57EFF'
            }
        }],
        //柱形图和折线图相互切换
        toolbox: {
            show: true,
            feature: {
                /* line是折线图，bar是柱形图*/
                magicType: {
                    show: true,
                    type: ['line', 'bar']
                },
            }
        },
    };
    chart.setOption(option);
});

const router = useRouter()
/**
 * 进入积分明细
 */
const gotoPointsDetail = () => {
    router.push('/pointsDetail')
}

/**
 * 进入我的账户
 */
const gotoMyAccount = () => {
    router.push('/myAccount')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="个人报告" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="h-full w-full bg-#fff p1rem font-size-0.9rem">
            <p>亲爱的<span class=" font-bold font-size-1.1rem">{{ "Cassie燁" }}</span>，</p>
            <p>今天是您加入红色党建研学平台的</p>
            <div class="flex items-end mt0.5rem">
                <p class="mr0.5rem">第</p>
                <van-rolling-text class="my-rolling-text" :start-num="0" :target-num="123" />
                <p class="ml0.5rem">天</p>
            </div>
            <div>
                <div>
                    您一共研学了<van-rolling-text class="normal-number" :start-num="0" :target-num="88" />个红色基地，
                    打卡了<van-rolling-text class="normal-number" :start-num="0" :target-num="88" />座城市，
                    收藏了<van-rolling-text class="normal-number" :start-num="0" :target-num="88" />个红色研学基地，
                    获得了<van-rolling-text class="normal-number" :start-num="0" :target-num="1000" />个积分，
                    获得了<van-tag color="#facc15" size="medium">初学行者</van-tag>的研学徽章。
                </div>
            </div>
            <div class="mt1rem">
                <div ref="chartContainer" class="w-full h20rem"></div>
                <div class="flex justify-between items-center">
                    <div @click="gotoPointsDetail()"
                        class="rounded-0.2rem pl0.7rem pr0.7rem pt0.5rem pb0.5rem bg-purple font-size-0.8rem color-#fff">
                        查看积分明细</div>
                    <!-- <div @click="gotoAnswerReport()"
                        class="rounded-0.2rem  pl0.7rem pr0.7rem pt0.5rem pb0.5rem bg-blue font-size-0.8rem color-#fff">
                        查看答题报告</div> -->
                    <div @click="gotoMyAccount()"
                        class="rounded-0.2rem  pl0.7rem pr0.7rem pt0.5rem pb0.5rem bg-orange font-size-0.8rem color-#fff">
                        查看我的账号</div>
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

.my-rolling-text {
    --van-rolling-text-background: #ef4444;
    --van-rolling-text-color: white;
    --van-rolling-text-font-size: 1.5rem;
    --van-rolling-text-gap: 0.375rem;
    --van-rolling-text-item-border-radius: 0.3125rem;
    --van-rolling-text-item-width: 2.5rem;
}

.normal-number {
    --van-rolling-text-font-size: 1.2rem;
    --van-rolling-text-color: #ff0000;
}
</style>
