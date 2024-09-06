<script setup>
const onClickLeft = () => history.back();
const chartContainer = ref(null);

onMounted(() => {
    const chart = useNuxtApp().$echarts2.init(chartContainer.value);
    const option = {
        title: {
            text: 'Cassie燁的数据看板',
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['粉丝量', '笔记数量', '点赞量'],
            orient: 'vertical', // 垂直排列
            right: 10, // 距离容器右边缘 10 像素
            top: 'top', // 图例垂直居中
        },
        grid: {
            top: 80, // 控制图表区域距离标题的距离
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['01-01', '01-02', '01-03', '01-04', '01-05']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '笔记数量',
                type: 'line',
                itemStyle: {
                    color: '#3498FF' // 修改节点颜色为红色
                },
                areaStyle: {
                    color: '#6FB7FF' // 修改颜色为蓝色，带有透明度
                },
                lineStyle: {
                    color: '#3498FF' // 修改折线颜色为蓝色
                },
                data: [220, 182, 191, 234, 290]
            },
            {
                name: '点赞量',
                type: 'line',
                itemStyle: {
                    color: 'rgba(75, 192, 192, 1)' // 修改节点颜色为红色
                },
                areaStyle: {
                    color: 'rgba(75, 192, 192, 0.5)' // 修改颜色为绿色，带有透明度
                },
                lineStyle: {
                    color: 'rgba(75, 192, 192, 1)' // 修改折线颜色为绿色
                },
                data: [150, 232, 201, 154, 190]
            },
            {
                name: '粉丝量',
                type: 'line',
                itemStyle: {
                    color: '#C479FF' // 修改节点颜色为红色
                },
                areaStyle: {
                    color: '#D6A2FF' // 修改颜色为红色，带有透明度
                },
                lineStyle: {
                    color: '#C479FF' // 修改折线颜色为红色
                },
                data: [120, 132, 101, 134, 90]
            },
        ]
    };
    chart.setOption(option);
});

</script>
<template>
    <div class="page-background">
        <van-nav-bar :fixed="true" :placeholder="true" title="数据概览" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="flex flex-wrap justify-evenly items-center mt1rem">
            <div
                class="w-47% h4rem bg-blue-1 rounded-0.2rem mb0.3rem font-size-0.8rem flex flex-col justify-center items-center">
                点赞与收藏量
                <p class="font-size-1.1rem font-bold">98088</p>
            </div>
            <div
                class="w-47% h4rem bg-green-1 rounded-0.2rem mb0.3rem font-size-0.8rem flex flex-col justify-center items-center">
                粉丝数量
                <p class="font-size-1.1rem font-bold">98088</p>
            </div>
            <div
                class="w-47% h4rem bg-yellow-1 rounded-0.2rem mb0.3rem font-size-0.8rem flex flex-col justify-center items-center">
                发布笔记数量
                <p class="font-size-1.1rem font-bold">543</p>
            </div>
            <div
                class="w-47% h4rem bg-purple-1 rounded-0.2rem mb0.3rem font-size-0.8rem flex flex-col justify-center items-center">
                关注的博主数量
                <p class="font-size-1.1rem font-bold">564</p>
            </div>
        </div>
        <div ref="chartContainer" class="w-full h20rem mt2rem"></div>
    </div>
</template>
<style scoped>
.page-background {
    background-color: #fff;
    min-height: 100vh;
    /* 使背景色覆盖整个页面 */
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
