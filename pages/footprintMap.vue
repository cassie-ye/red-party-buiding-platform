<template>
    <div class="h-screen w-screen">
        <van-nav-bar :fixed="true" :placeholder="true" title="红色地图" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="h-full w-full" id="china-map"></div>
    </div>
</template>

<script>
import chinaJson from '../assets/china.json'

export default {
    mounted() {
        this.initEcharts();
    },
    methods: {
        async initEcharts() {
            // 注册geojson
            this.$echarts.registerMap('china', chinaJson);

            const option = {
                title: {
                    text: 'aaa)',
                    subtext: 'ggg',
                    sublink: 'http://www.census.gov/popest/data/datasets.html',
                    left: 'right'
                },
                tooltip: {
                    trigger: 'item',
                    showDelay: 0,
                    transitionDuration: 0.2
                },
                visualMap: {
                    left: 'right',
                    min: 500000,
                    max: 38000000,
                    inRange: {
                        color: [
                            '#313695',
                            '#4575b4',
                            '#74add1',
                            '#abd9e9',
                            '#e0f3f8',
                            '#ffffbf',
                            '#fee090',
                            '#fdae61',
                            '#f46d43',
                            '#d73027',
                            '#a50026'
                        ]
                    },
                    text: ['High', 'Low'],
                    calculable: true
                },
                toolbox: {
                    show: true,
                    //orient: 'vertical',
                    left: 'left',
                    top: 'top',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '中国',
                        type: 'map',
                        roam: true,
                        map: 'china',
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        data: [
                            { name: '山东', value: 4822023 },
                            { name: '山西', value: 731449 },
                            { name: '河南', value: 6553255 },
                            { name: '河北', value: 2949131 },
                            { name: '陕西', value: 38041430 },
                            { name: '广东', value: 5187582 },
                            { name: '福建', value: 3590347 },
                            { name: '浙江', value: 917092 },
                            { name: '甘肃', value: 632323 },
                            { name: '吉林', value: 19317568 },
                            { name: '新疆', value: 9919945 },
                            { name: '内蒙古', value: 1392313 },
                        ]
                    }
                ]
            };

            const myChart = this.$echarts.init(document.getElementById("china-map"));// 图标初始化
            myChart.setOption(option);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        },

    }
};
</script>
