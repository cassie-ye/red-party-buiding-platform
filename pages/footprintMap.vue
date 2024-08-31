<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="足迹地图" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="h-screen w-screen">
            <div class="h-full w-full bg-black pt3rem" id="china-map"></div>
        </div>
    </div>
</template>

<script>
import chinaJson from '@/assets/china.json'

export default {
    data() {
        return {
            dataList: [
                { name: '青海省', value: 857 },
                { name: '湖南省', value: 58 },
                { name: '青海省', value: 371 },
                { name: '山东省', value: 209 },
                { name: '辽宁省', value: 604 },
                { name: '上海', value: 6 },
                { name: '江苏省', value: 629 },
                { name: '宁夏回族自治区', value: 169 }
            ],
            features: [],
            cityCenter: {},
            mydata: [
                { name: "江苏省", value: 2 },
                { name: "广东省", value: 277 },
                { name: "浙江省", value: 888 },
                { name: "北京市", value: 87 },
            ],
            newData: [
                {
                    name: "江苏省",
                    value: [119.486506, 32.983991, 2],
                },
                {
                    name: "广东省",
                    value: [113.429919, 23.334643, 277],
                },
                {
                    name: "浙江省",
                    value: [120.109913, 29.181466, 8],
                },
                {
                    name: "北京市",
                    value: [116.41995, 40.18994, 88]
                }
            ]
        }
    },
    mounted() {
        this.initEcharts("china", this.mydata, this.newData);
        this.features = this.$echarts.getMap('china').geoJSON.features
        console.log(this.features)
        this.features.map((item) => {
            this.cityCenter[item.properties.name] =
                item.properties.centroid || item.properties.center;
        });
        // 城市中心
        console.log(this.cityCenter)
    },
    methods: {
        async initEcharts(name, data, data2) {
            // 注册geojson
            this.$echarts.registerMap('china', chinaJson);
            const option = {
                backgroundColor: "rgba(0,0,0,0)",
                title: {
                    text: 'Cassie燁的足迹地图',
                    subtext: '共打卡5个红色基地',
                    sublink: 'http://www.census.gov/popest/data/datasets.html',
                    left: 'right',
                    textStyle: {
                        color: "#FFF",
                    },
                    subtextStyle: {
                        color: "#0180fb", // 副标题颜色，修改为你需要的颜色
                    },
                },
                tooltip: {
                    trigger: 'item',
                    showDelay: 0,
                    transitionDuration: 0.2
                },
                visualMap: {
                    left: 0,
                    bottom: 130,
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
                toolbox: {
                    show: true,
                    //orient: 'vertical',
                    left: 'left',
                    top: 'top',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    },
                },
                geo: {
                    map: "china",
                    roam: false,
                    selectedMode: false, //是否允许选中多个区域
                    zoom: 1.2,
                    top: 100,
                    // aspectScale: 0.78,
                    show: false,
                },
                series: [
                    {
                        name: "MAP",
                        type: "map",
                        map: name,
                        // aspectScale: 0.78,
                        data: data,
                        // data: [1,100],
                        selectedMode: false, //是否允许选中多个区域
                        zoom: 1.2,
                        geoIndex: 1,
                        top: 100,
                        tooltip: {
                            show: true,
                            formatter: function (params) {
                                if (params.data) {
                                    return params.name + "：" + params.data["value"];
                                } else {
                                    return params.name;
                                }
                            },
                            backgroundColor: "rgba(0,0,0,.6)",
                            borderColor: "rgba(147, 235, 248, .8)",
                            textStyle: {
                                color: "#FFF",
                            },
                        },
                        label: {
                            show: false,
                            color: "#000",
                            // position: [-10, 0],
                            formatter: function (val) {
                                // console.log(val)
                                if (val.data !== undefined) {
                                    return val.name.slice(0, 2);
                                } else {
                                    return "";
                                }
                            },
                            rich: {},
                        },
                        emphasis: {
                            label: {
                                show: false,
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
                    },
                    {
                        data: data2,
                        type: "effectScatter",
                        coordinateSystem: "geo",
                        symbolSize: function (val) {
                            return 4;
                            // return val[2] / 50;
                        },
                        legendHoverLink: true,
                        showEffectOn: "render",
                        rippleEffect: {
                            // period: 4,
                            scale: 6,
                            color: "rgba(255,255,255, 1)",
                            brushType: "fill",
                        },
                        tooltip: {
                            show: true,
                            formatter: function (params) {
                                if (params.data) {
                                    return params.name + "：" + params.data["value"][2];
                                } else {
                                    return params.name;
                                }
                            },
                            backgroundColor: "rgba(0,0,0,.6)",
                            borderColor: "rgba(147, 235, 248, .8)",
                            textStyle: {
                                color: "#FFF",
                            },
                        },
                        label: {
                            formatter: (param) => {
                                return param.name.slice(0, 2);
                            },

                            fontSize: 11,
                            offset: [0, 2],
                            position: "bottom",
                            textBorderColor: "#fff",
                            textShadowColor: "#000",
                            textShadowBlur: 10,
                            textBorderWidth: 0,
                            color: "#FFF",
                            show: true,
                        },
                        // colorBy: "data",
                        itemStyle: {
                            color: "rgba(255,255,255,1)",
                            borderColor: "rgba(2255,255,255,2)",
                            borderWidth: 4,
                            shadowColor: "#000",
                            shadowBlur: 10,
                        },
                    },
                ],
            };

            const myChart = this.$echarts.init(document.getElementById("china-map"));// 图标初始化
            myChart.setOption(option);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        },
        onClickLeft() {
            history.back()
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

:deep(.van-action-bar){
    height: 4rem;
}
</style>
