<script setup>
const onClickLeft = () => history.back();
const today = new Date();
const getDateStr = (daysAgo) => {
    const date = new Date(today);
    date.setDate(today.getDate() - daysAgo);
    return date.toISOString().split('T')[0]; // 格式化为 yyyy-mm-dd
};

const studyRoutes = [
    {
        date: getDateStr(2),  // 往前推2天
        locations: [
            "长征起点地",
            "遵义会议遗址",
            "四渡赤水纪念馆",
        ],
        route: "长征起点地-遵义会议遗址-四渡赤水纪念馆"
    },
    {
        date: getDateStr(1),  // 往前推1天
        locations: [
            "井冈山革命历史纪念馆",
            "黄洋界",
            "井冈山烈士陵园",
            "茨坪",
            "永新县起义纪念碑",
            "红色摇篮博物馆",
            "井冈山红军纪念馆",
            "茨坪革命遗址",
            "井冈山大安山",
            "井冈山博物馆",
        ],
        route: "井冈山革命历史纪念馆-黄洋界-井冈山"
    },
    {
        date: getDateStr(5),  // 往前推5天
        locations: [
            "南京大屠杀纪念馆",
            "侵华日军南京大屠杀遇难同胞纪念馆",
            "南京长江大桥",
        ],
        route: "南京大屠杀纪念馆-侵华日军南京大屠杀遇难同胞纪念馆-南京长江大桥"
    },
];

const studyRoutes2 = [
    {
        date: getDateStr(0),  // 今天
        locations: [
            "延安革命遗址",
            "宝塔山",
            "革命纪念馆",
            "杨家岭革命旧址",
            "抗大旧址",
            "延安窑洞",
            "延安党校旧址",
            "延安黄土高原",
            "延安革命旧址群",
            "延安杨家岭",
        ],
        route: "延安革命遗址-宝塔山-革命纪念馆-杨家岭革命旧址-抗大旧址-延安窑洞-延安党校旧址-延安黄土高原-延安革命旧址群-延安杨家岭"
    },
    {
        date: getDateStr(3),  // 往前推3天
        locations: [
            "广州起义纪念馆",
            "黄花岗七十二烈士墓",
            "南越王宫",
        ],
        route: "广州起义纪念馆-黄花岗七十二烈士墓-南越王宫"
    },
    {
        date: getDateStr(4),  // 往前推4天
        locations: [
            "遵义会议遗址",
            "红军长征纪念馆",
            "红色旅游文化村",
        ],
        route: "遵义会议遗址-红军长征纪念馆-红色旅游文化村"
    },

]
const areaList = ref([
    "北京市天安门广场",
    "中国人民抗日战争纪念馆",
    "卢沟桥",
    "宛平城",
    "新文化运动纪念馆",
    "中国国家博物馆",
    "中国人民革命军事博物馆",
    "李大钊烈士陵园",
    "顺义区焦庄户地道战遗址纪念馆",
    "唐山市乐亭县李大钊故居和纪念馆",
    "天津市周恩来邓颖超纪念馆",
    "平津战役纪念馆",
    "盘山烈士陵园"
])

const areaList2 = ref([
    "北京市天安门广场",
    "中国人民抗日战争纪念馆",
    "卢沟桥",
    "宛平城",

])

const baseColor = ref('#f60')
const getRandomBgColor = () => {
    // 生成随机的 R、G、B 值
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // 返回随机颜色的字符串格式
    return `rgb(${r},${g},${b})`;
}

</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="往期推荐" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="w-full p0.5rem  mb0.5rem flex justify-between">
            <div class="w49%">
                <div v-for="(item, index) in studyRoutes2" :key="index"
                    class="p0.5rem w-100% rounded-0.5rem color-#fff mb0.5rem"
                    :style="{ backgroundColor: getRandomBgColor() }">
                    <div class="flex items-center">
                        <i class="iconfont icon-shijian mr0.3rem font-size-1.3rem"></i>
                        <p>{{ item.date }}</p>
                    </div>
                    <div class="flex">
                        <i class="iconfont icon-luxian mr0.3rem"></i>
                        <p class="font-size-0.85rem font-bold"> {{ item.route }}</p>
                    </div>
                    <div class="flex">
                        <p class="font-size-0.85rem"> 途径地址:</p>
                    </div>
                    <div class="flex" v-for="(item2) in item.locations" :key="item">
                        <i class="iconfont icon-dizhi mr0.3rem"></i>
                        <p class="font-size-0.85rem"> {{ item2 }}</p>
                    </div>
                    <div class="w-full h0.05rem bg-coolGray mt0.5rem mb0.5rem"></div>
                    <div class="w-full flex items-center justify-end">
                        <i class="iconfont icon-dianzan color-#fff"></i>
                        <span class="font-size-0.8rem ml0.5rem">0</span>
                    </div>
                </div>
            </div>
            <div class="w49%">
                <div v-for="(item, index) in studyRoutes" :key="index"
                    class="p0.5rem w-100% rounded-0.5rem color-#fff mb0.5rem"
                    :style="{ backgroundColor: getRandomBgColor() }">
                    <div class="flex items-center">
                        <i class="iconfont icon-shijian mr0.3rem font-size-1.3rem"></i>
                        <p>{{ item.date }}</p>
                    </div>
                    <div class="flex">
                        <i class="iconfont icon-luxian mr0.3rem"></i>
                        <p class="font-size-0.85rem font-bold"> {{ item.route }}</p>
                    </div>
                    <div class="flex">
                        <p class="font-size-0.85rem"> 途径地址:</p>
                    </div>
                    <div class="flex" v-for="(item2) in item.locations" :key="item">
                        <i class="iconfont icon-dizhi mr0.3rem"></i>
                        <p class="font-size-0.85rem"> {{ item2 }}</p>
                    </div>
                    <div class="w-full h0.05rem bg-coolGray mt0.5rem mb0.5rem"></div>
                    <div class="w-full flex items-center justify-end">
                        <i class="iconfont icon-dianzan color-#fff"></i>
                        <span class="font-size-0.8rem ml0.5rem">0</span>
                    </div>
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
</style>
