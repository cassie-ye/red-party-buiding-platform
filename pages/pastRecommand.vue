<script setup>
const onClickLeft = () => history.back();
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
                <div class="p0.5rem w-100% rounded-0.5rem color-#fff mb0.5rem"
                    :style="{ backgroundColor: getRandomBgColor() }">
                    <div class="flex items-center">
                        <i class="iconfont icon-shijian mr0.3rem font-size-1.3rem"></i>
                        <p>2024/08/04</p>
                    </div>
                    <div class="flex">
                        <i class="iconfont icon-luxian mr0.3rem"></i>
                        <p class="font-size-0.85rem font-bold"> 北京－遵化－乐亭－天津线</p>
                    </div>
                    <div class="flex">
                        <p class="font-size-0.85rem"> 途径地址:</p>
                    </div>
                    <div class="flex" v-for="item in areaList" :key="item">
                        <i class="iconfont icon-dizhi mr0.3rem"></i>
                        <p class="font-size-0.85rem"> {{ item }}</p>
                    </div>
                    <div class="w-full h0.05rem bg-coolGray mt0.5rem mb0.5rem"></div>
                    <div class="w-full flex items-center justify-end">
                            <i class="iconfont icon-dianzan color-#fff"></i>
                            <span class="font-size-0.8rem ml0.5rem">0</span>
                    </div>
                </div>
                <div class="p0.5rem w-100% rounded-0.5rem color-#fff mb0.5rem"
                    :style="{ backgroundColor: getRandomBgColor() }">
                    <div class="flex items-center">
                        <i class="iconfont icon-shijian mr0.3rem font-size-1.3rem"></i>
                        <p>2024/08/04</p>
                    </div>
                    <div class="flex">
                        <i class="iconfont icon-luxian mr0.3rem"></i>
                        <p class="font-size-0.85rem font-bold"> 北京－遵化－乐亭－天津线</p>
                    </div>
                    <div class="flex">
                        <p class="font-size-0.85rem"> 途径地址:</p>
                    </div>
                    <div class="flex" v-for="item in areaList2" :key="item">
                        <i class="iconfont icon-dizhi mr0.3rem"></i>
                        <p class="font-size-0.85rem"> {{ item }}</p>
                    </div>
                    <div class="w-full h0.05rem bg-coolGray mt0.5rem mb0.5rem"></div>
                    <div class="w-full flex items-center justify-end">
                            <i class="iconfont icon-dianzan color-#fff"></i>
                            <span class="font-size-0.8rem ml0.5rem">0</span>
                    </div>
                </div>
            </div>
            <div class="w49%">
                <div class="p0.5rem w-100% rounded-0.5rem color-#fff mb0.5rem"
                    :style="{ backgroundColor: getRandomBgColor() }">
                    <div class="flex items-center">
                        <i class="iconfont icon-shijian mr0.3rem font-size-1.3rem"></i>
                        <p>2024/08/04</p>
                    </div>
                    <div class="flex">
                        <i class="iconfont icon-luxian mr0.3rem"></i>
                        <p class="font-size-0.85rem font-bold"> 北京－遵化－乐亭－天津线</p>
                    </div>
                    <div class="flex">
                        <p class="font-size-0.85rem"> 途径地址:</p>
                    </div>
                    <div class="flex" v-for="item in areaList2" :key="item">
                        <i class="iconfont icon-dizhi mr0.3rem"></i>
                        <p class="font-size-0.85rem"> {{ item }}</p>
                    </div>
                    <div class="w-full h0.05rem bg-coolGray mt0.5rem mb0.5rem"></div>
                    <div class="w-full flex items-center justify-end">
                            <i class="iconfont icon-dianzan color-#fff"></i>
                            <span class="font-size-0.8rem ml0.5rem">0</span>
                    </div>
                </div>
                <div class="p0.5rem w-100% rounded-0.5rem color-#fff mb0.5rem"
                    :style="{ backgroundColor: getRandomBgColor() }">
                    <div class="flex items-center">
                        <i class="iconfont icon-shijian mr0.3rem font-size-1.3rem"></i>
                        <p>2024/08/04</p>
                    </div>
                    <div class="flex">
                        <i class="iconfont icon-luxian mr0.3rem"></i>
                        <p class="font-size-0.85rem font-bold"> 北京－遵化－乐亭－天津线</p>
                    </div>
                    <div class="flex">
                        <p class="font-size-0.85rem"> 途径地址:</p>
                    </div>
                    <div class="flex" v-for="item in areaList" :key="item">
                        <i class="iconfont icon-dizhi mr0.3rem"></i>
                        <p class="font-size-0.85rem"> {{ item }}</p>
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

::v-deep .van-nav-bar__arrow {
    color: black;
}

::v-deep .van-nav-bar__text {
    color: black;
}

::v-deep .van-ellipsis {
    color: black
}
</style>
