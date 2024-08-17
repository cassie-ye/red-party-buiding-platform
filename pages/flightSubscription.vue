<script setup>
const router = useRouter()
const onClickLeft = () => history.back();

const showActionSheet = ref(false)
const tabsTitleList = ref([
    "产品说明", "行李规定", "退改签规定"
])

const gotoFillingSheet = () => {
    router.push({ path: '/fillingSheet' })
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="北京 ——> 上海" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="p1rem">
            <div class="flex justify-between">
                <div>
                    <p class="font-size-1.5rem font-bold ">22:30</p>
                    <p class="font-size-0.9rem">北京大兴机场</p>
                </div>
                <img class="w4rem" src="/public/traffic/plane.png" alt="">
                <div>
                    <p class="font-size-1.5rem font-bold ">22:30</p>
                    <p class="font-size-0.9rem">北京大兴机场</p>
                </div>
            </div>
            <div class="flex mt1rem font-size-0.9rem items-center">
                <i class="iconfont icon-zhongguoguohang mr0.3rem color-red-5"></i>
                <span class="color-#9F9F9F  mr0.5rem">国航CAB8686 | 飞2时5分 准点率74% | 无餐食</span>
            </div>
            <div class="flex font-size-0.9rem mt1.5rem">
                <p class="color-#48C1A7">
                    [温馨提示]
                </p>
                <p class="color-#747474">&nbsp;&nbsp;航班临近起飞，请您到值机柜台确认可值机...</p>
            </div>
            <div class="w-full mt0.5rem bg-#DBF5FC pl1rem pr1rem pt0.6rem pb0.6rem rounded-0.5rem">
                <p class="color-#55B7E5 font-size-0.8rem">
                    Hi~ 大众会员 下单立享PLUS体验价
                </p>
                <div class="flex justify-between items-center bg-#fff mt0.5rem p0.5rem">
                    <div class="flex items-center">
                        <img class="w1.5rem" src="/public/traffic/daijinjuan.png" alt="">
                        <p class="color-orange-6 font-size-1.1rem font-bold ml0.5rem">代金券&nbsp; </p>
                        <p class="font-size-0.9rem color-orange-4">·&nbsp;您有一张代金券待领取~</p>
                    </div>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div v-for="i in 3" class="mt0.5rem" @click="showActionSheet = true">
                <div class="flex justify-between bg-#fff rounded-t-0.5rem p1rem mt0.5rem">
                    <div class="font-bold color-orange-6">
                        <span>￥</span>
                        <span class="font-size-1.7rem ">596</span>
                    </div>
                    <div class="font-size-0.9rem color-#393939">
                        <p>托运行李23KG</p>
                        <p>退改342元起</p>
                        <p>经济舱3.5折 提供行程单</p>
                        <div class="flex items-center">
                            <img class="w1.2rem mr0.2rem" src="/public/traffic/rounded.png" alt="">
                            <p>起飞前预计1小时内出票</p>
                        </div>
                    </div>
                    <div
                        class="relative w3.6rem h3.6rem flex justify-center items-center bg-orange-500 rounded-0.7rem color-#fff font-size-1.5rem font-bold">
                        <div
                            class="absolute font-size-0.8rem w3rem h1rem bg-#FFE5B2 top-[-0.5rem] color-orange-6 flex justify-center items-center">
                            剩1张
                        </div>
                        <span class="">
                            订
                        </span>
                    </div>
                </div>
                <div
                    class="pl1rem pr1rem pt0.5rem pb0.5rem bg-#FAEADE rounded-b-0.5rem flex justify-between items-center">
                    <div class="flex items-center font-size-0.9rem">
                        <div class="mr1rem">
                            <p class="color-#E37C2E font-bold font-size-1.2rem">航空意外险</p>
                            <p class="color-#9B7140">+￥39 | 更换</p>
                        </div>
                        <div class="color-#9B7140">
                            <div class="flex items-center">
                                <van-icon name="checked" class="mr0.5rem" />
                                <p>￥500万航意保障</p>
                            </div>
                            <div class="flex items-center">
                                <van-icon name="checked" class="mr0.5rem" />
                                <p>航空意外医疗￥5万</p>
                            </div>
                        </div>
                    </div>
                    <van-icon name="arrow" color="#9B7140" />
                </div>
            </div>
        </div>
        <van-action-sheet v-model:show="showActionSheet" title="低价购·安心飞">
            <div class="content">
                <van-tabs v-model:active="active" animated>
                    <van-tab v-for="(item, index) in tabsTitleList" :key="index" :title="item">
                        <div v-if="index == 0" class="p1rem">
                            <div class="flex items-center">
                                <van-icon name="notes" size="25" class="mr0.5rem" />
                                <p class="font-size-1.2rem font-bold">产品说明</p>
                            </div>
                            <div class="flex items-center mt0.5rem">
                                <van-icon name="good-job-o" size="20" class="mr0.5rem" />
                                <p>产品特色</p>
                            </div>
                            <div class="p1rem bg-#F0FAFA mt0.5rem rounded-0.5rem">
                                <div class="mb0.5rem">
                                    <p class="color-#40CDDA font-bold">[提供行程单]</p>
                                    <p>提供全额行程单</p>
                                </div>
                                <div>
                                    <p class="color-#40CDDA font-bold">[起飞前预计一小时内出票]</p>
                                    <p>将在承诺时间内出票，红色党建研学平台全力保障您的出行</p>
                                </div>
                            </div>
                            <div class="flex items-center mt0.5rem">
                                <van-icon name="warn-o" size="20" class="mr0.5rem" />
                                <p>预定须知</p>
                            </div>
                            <div class="p1rem bg-#F0FAFA mt0.5rem rounded-0.5rem">
                                <!-- <div class="mb0.5rem">
                                    <p class="color-#40CDDA font-bold">[提供行程单]</p>
                                    <p>提供全额行程单</p>
                                </div>
                                <div>
                                    <p class="color-#40CDDA font-bold">[起飞前预计一小时内出票]</p>
                                    <p>将在承诺时间内出票，红色党建研学平台全力保障您的出行</p>
                                </div> -->
                                <p>舱位说明</p>
                                <p>儿童票价：￥569；经济舱</p>
                                <p>婴儿票价：￥160；全价经济舱</p>
                                <div class="mt0.5rem">
                                    <p class="color-#40CDDA font-bold">禁止携带“三超”行李提示 </p>
                                    <p class="mt0.5rem">
                                        1、为确保旅客安全，旅客在乘机时禁止携带"三超"行李登机。"三超"行李是指乘坐民用飞机时旅客随身携带的超大、超件、超重行李。<br>
                                        2、携带"三超"行李登机的危害：影响飞机安全、影响客舱安全、影响航班正点率。如执意携带"三超"行李进客舱，会重新进行托运和安检，情节严重者将纳入"机闹"治理范围，交由公安机关处理。<br>
                                        3、如何避免携带"三超"行李：旅客可查看航空公司运输总条件、拨打航空公司客服电话、现场咨询的方式获取行李标准和服务。通过快速通道补办托运、办理快递业务、现场行李寄存的方式对"三超"行李进行处理。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-if="index == 1" class="p1rem">
                            <div class="flex items-center">
                                <van-icon name="bag" size="25" class="mr0.5rem"/>
                                <p class="font-size-1.2rem font-bold">行李规定</p>
                            </div>
                            <img src="/public/traffic/xingli.jpg" alt="" class="mt1rem">
                        </div>
                        <div v-if="index == 2" class="p1rem">
                            <div class="flex items-center">
                                <van-icon name="wechat-moments" size="25" class="mr0.5rem"/>
                                <p class="font-size-1.2rem font-bold">退改签规定</p>
                            </div>
                            <img src="/public/traffic/gaiqian.jpg" alt="" class="mt1rem">
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="flex items-center fixed left-0 bottom-0">
                <van-action-bar class="pl1rem pr1rem">
                    <div class="font-bold mr6rem color-orange-5">
                        <span>￥</span>
                        <span class="font-size-1.5rem">569</span>
                    </div>
                    <van-action-bar-button @click="gotoFillingSheet()" color="#7232dd" type="danger" text="立即预定(仅剩1)" />
                </van-action-bar>
            </div>
        </van-action-sheet>
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

:deep(.van-action-bar){
    height: 4rem;
}
</style>
