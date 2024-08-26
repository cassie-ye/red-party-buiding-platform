<template>
    <div class="h-screen w-screen">
        <van-nav-bar :fixed="true" :placeholder="true" title="红色地图" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="h-full w-full bg-#03050c" id="china-map"></div>
    </div>
</template>

<script>
import chinaJson from '../assets/china.json'

export default {
    data() {
        return {
            maptitle: "设备分布图",
            options: {},
            code: "china", //china 代表中国 其他地市是行政编码
            echartBindClick: false,
            isSouthChinaSea: false, //是否要展示南海群岛  修改此值请刷新页面
        }
    },
    mounted() {
        // this.getData("china");
        this.initEcharts();
    },
    methods: {
        getData(code) {
            currentGET("big8", { regionCode: code }).then((res) => {
                console.log("设备分布", res);
                if (res.success) {
                    this.getGeojson(res.data.regionCode, res.data.dataList);
                    this.mapclick();
                } else {
                    this.$Message.warning(res.msg);
                }
            });
        },
        async initEcharts(myData) {
            // 注册geojson
            this.$echarts.registerMap('china', chinaJson);
            const option = {
                title: {
                    text: 'Cassie燁的打卡地图',
                    subtext: '一共打卡32个红色基地',
                    // 点击标题之后跳转的网址
                    sublink: 'http://www.census.gov/popest/data/datasets.html',
                    left: 'right'
                },
                /*
                    定义了一个当鼠标悬停在图表元素上时立即显示、带有 0.2 秒过渡动画的提示框，
                */
                tooltip: {
                    trigger: 'item',
                    showDelay: 0,
                    transitionDuration: 0.2,
                    backgroundColor: "rgba(0,0,0,.6)",
                    borderColor: "rgba(147, 235, 248, .8)",
                    textStyle: {
                        color: "#FFF",
                    },
                },
                visualMap: {
                    left: 0,
                    bottom: 20,
                    pieces: [
                        { gte: 10, label: "10个以上" }, // 不指定 max，表示 max 为无限大（Infinity）。
                        { gte: 6, lte: 10, label: "6-10个" },
                        { gte: 2, lte: 5, label: "2-5个" },
                        { lte: 1, label: "1个" }, // 不指定 min，表示 min 为无限大（-Infinity）。
                    ],
                    inRange: {
                        // 渐变颜色，从小到大
                        color: [
                            "#c3d7df",
                            "#5cb3cc",
                            "#8abcd1",
                            "#66a9c9",
                            "#2f90b9",
                            "#1781b5",
                        ],
                    },
                    textStyle: {
                        color: "#fff",
                    },
                },
                /*
                    左上角的数据视图 刷新 下载工具栏
                */
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
                        tooltip: {
                            show: true,
                            backgroundColor: "rgba(0,0,0,.6)",
                            borderColor: "rgba(147, 235, 248, .8)",
                            textStyle: {
                                color: "#FFF",
                            },
                            formatter: function (params) {
                                if (params.data) {
                                    return params.name + "：" + params.data["value"];
                                } else {
                                    return params.name;
                                }
                            },
                        },
                        label: {
                            show: false,
                            color: "#000",
                            // position: [-10, 0],

                            rich: {},
                        },
                        emphasis: {
                            label: {
                                show: false,
                                formatter: function (val) {
                                    // console.log(val)
                                    if (val.data !== undefined) {
                                        return val.name.slice(0, 2);
                                    } else {
                                        return "";
                                    }
                                },
                            },
                            itemStyle: {
                                areaColor: "#389BB7",
                                borderWidth: 1,
                            },
                        },
                        itemStyle: {
                            borderColor: "rgba(147, 235, 248, .8)",
                            borderWidth: 1,
                            areaColor: {
                                type: "radial",
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺为 false
                            },
                            shadowColor: "rgba(128, 217, 248, .3)",
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10,
                        },
                        data: [
                            { name: '山东', value: 1 },
                            { name: '山西', value: 2 },
                            { name: '河南', value: 3 },
                            { name: '河北', value: 4 },
                            { name: '陕西', value: 5 },
                            { name: '广东', value: 6 },
                            { name: '福建', value: 7 },
                            { name: '浙江', value: 90 },
                            { name: '甘肃', value: 78 },
                            { name: '吉林', value: 33 },
                            { name: '新疆', value: 0 },
                            { name: '内蒙古', value: 200 },
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
        onClickLeft() {
            history.back();
        }
    }
};
</script>
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
