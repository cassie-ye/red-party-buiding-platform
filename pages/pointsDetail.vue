<script setup>
const onClickLeft = () => history.back();
const chartContainer = ref(null);

onMounted(() => {
    const chart = useNuxtApp().$echarts2.init(chartContainer.value);
    const option = {
        title: {
            text: '积分来源占比图',
            subtext: 'Cassit燁的积分：共1000积分',
            left: 'left'
        },
        // 提示框
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#ff7f50', '#87cefa', '#da70d6', '#32c5e9', '#ff69b4'],
        legend: {
            orient: 'vertical', // 垂直排列
            right: 10, // 距离容器右边缘 10 像素
            top: 'top', // 图例垂直居中
            data: ['签到', '完善资料', 'C', '答题', '抽奖']
        },
        series: [
            {
                type: 'pie',
                center: ['50%', '60%'], // 根据需要调整位置
                radius: '50%', // 设置半径为容器宽度的 40% 到 70%
                data: [
                    {
                        value: 100,
                        name: '签到'
                    },
                    {
                        value: 200,
                        name: '完善资料'
                    },
                    {
                        value: 300,
                        name: ''
                    },
                    {
                        value: 400,
                        name: '答题'
                    },
                    {
                        value: 500,
                        name: '抽奖'
                    }
                ],
                roseType: 'area'
            }
        ]
    };
    chart.setOption(option);
});

const tableData = ref([
    {
        date: '2016-05-03',
        name: '完善资料',
        address: '200'
    },
    {
        date: '2016-05-02',
        name: '签到',
        address: '100'
    },
    {
        date: '2016-05-04',
        name: 'C',
        address: '300'
    },
    {
        date: '2016-05-01',
        name: '答题',
        address: '400'
    },
    {
        date: '2016-05-08',
        name: '抽奖',
        address: '500'
    }
])
</script>
<template>
    <div class="page-background ">
        <van-nav-bar :fixed="true" :placeholder="true" title="积分明细" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="h-full w-full bg-#fff p1rem font-size-0.9rem">
            <div ref="chartContainer" class="w-full h21rem "></div>
        </div>
        <el-table :data="tableData" class="w-full">
            <el-table-column prop="date" label="日期" width="120" />
            <el-table-column prop="name" label="积分来源" width="120" />
            <el-table-column prop="address" label="积分数量" />
        </el-table>
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
