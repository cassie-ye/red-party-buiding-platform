<script setup>
import LunarCalendar from 'lunar-calendar';
import dayjs from 'dayjs';
const onClickLeft = () => history.back();

/**
 * 获取今天的农历
 * 获取今天的公历
 */
const currentGregorianYearMouth = ref('');
const currentGregorianDate = ref('');
const currentLunarDate = ref('');
const currentWeek = ref('');
const getCurrentDates = () => {
    // 获取公历日期
    const gregorianDate = new Date();
    currentGregorianYearMouth.value = gregorianDate.toLocaleDateString();
    currentGregorianYearMouth.value = dayjs(currentGregorianYearMouth.value).format('YYYY年MM月DD日');
    // 截取DD日
    currentGregorianDate.value = currentGregorianYearMouth.value.slice(8, 10)
    // 获取星期几
    const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    currentWeek.value = week[gregorianDate.getDay()];


    // 获取农历日期
    const lunarInfo = LunarCalendar.solarToLunar(gregorianDate.getFullYear(), gregorianDate.getMonth() + 1, gregorianDate.getDate());

    const lunarMonth = getLunarMonthName(lunarInfo.lunarMonth); // 获取农历月份的汉字表示
    const lunarDay = getLunarDayName(lunarInfo.lunarDay); // 获取农历日期的汉字表示

    const lunarDate = `${lunarMonth}${lunarDay}`;
    currentLunarDate.value = lunarDate;

    // 函数定义，用于获取农历月份的汉字表示
    function getLunarMonthName(month) {
        const lunarMonths = [
            "一月", "二月", "三月", "四月", "五月", "六月",
            "七月", "八月", "九月", "十月", "十一月", "十二月"
        ];
        return lunarMonths[month - 1]; // 数组索引从0开始，农历月份从1开始，所以要减1
    }

    // 函数定义，用于获取农历日期的汉字表示
    function getLunarDayName(day) {
        const lunarDays = [
            "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九",
            "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九",
            "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九",
            "三十"
        ];
        return lunarDays[day - 1]; // 数组索引从0开始，农历日期从1开始，所以要减1
    }

}
getCurrentDates()

const showOverlayFlag = ref(false);
const showBlackroundedFlag = ref(false)
const isRoundedAnimateFlag = ref(false);
const isMovedToBottomFlag = ref(false);
const isShowBottomButtomFlag = ref(false)
// TODO1：一进页面就显示遮罩层 圆形的背景色改为transparent 不可以点击遮罩层
// 一进页面打开遮罩层
showOverlayFlag.value = true;
// 5秒钟之后关闭遮罩层
setTimeout(() => {
    showOverlayFlag.value = false;
    showBlackroundedFlag.value = true
    // TODO2：过5秒钟之后，遮罩层消失 出现一个新的原型 缩小
    // 遮罩层关闭之后，过2秒钟，isRoundedAnimateFlag改为true
    setTimeout(() => {
        isRoundedAnimateFlag.value = true;
        setTimeout(() => {
            isMovedToBottomFlag.value = true;
            setTimeout(() => {
                isShowBottomButtomFlag.value = true
            }, 2000)
        }, 1000);
    }, 1000);
}, 3000);

// TODO3：新的圆形向下移动到底部

// 北京市天安门广场，中国人民抗日战争纪念馆、卢沟桥、宛平城，新文化运动纪念馆，中国国家博物馆，中国人民革命军事博物馆，李大钊烈士陵园，顺义区焦庄户地道战遗址纪念馆；唐山市乐亭县李大钊故居和纪念馆；天津市周恩来邓颖超纪念馆，平津战役纪念馆，盘山烈士陵园。
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

const loveRecommandFlag = ref(false)
const loveRecommand = () => {
    loveRecommandFlag.value = !loveRecommandFlag.value
}

// 动作面板
const show = ref(false);
// 评论输入框
const inputvalue = ref('');

const route = useRouter()
const gotoPastRecommand = () => {
    route.push('/pastRecommand')
}
</script>

<template>
    <div class="w-full  bg-cover bg-no-repeat top-red-linear-bg " style="background: url(/todayRecommand/bg.jpg);">
        <van-nav-bar :fixed="true" :placeholder="true" title="每日推荐" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <van-overlay :show="showOverlayFlag" @click="show = false">
            <div class="wrapper" @click.stop>
                <div class=" flex flex-col items-center  color-#fff">
                    <p class="font-size-1.3rem">{{ currentLunarDate }}</p>
                    <p class="font-size-10rem ">{{ currentGregorianDate }}</p>
                    <p class="font-size-1.3rem">{{ currentGregorianYearMouth.slice(0, 8) }}&nbsp;&nbsp;{{ currentWeek }}
                    </p>
                </div>
            </div>
        </van-overlay>
        <div v-show="showBlackroundedFlag"
            class="w18rem h18rem moveBtn rounded-50% flex flex-col items-center justify-center color-#fff z-99 fixed top-25% left-13%"
            :class="{ 'scale-25 origin-center ease-in-out duration-300': isRoundedAnimateFlag, 'bg-red-5 mt40rem duration-3000': isMovedToBottomFlag, 'max-md:hidden': isShowBottomButtomFlag }">
            <p>{{ currentLunarDate }}</p>
            <p class="font-size-8rem font-bold">{{ currentGregorianDate }}</p>
            <p>{{ currentGregorianYearMouth }}</p>
        </div>

        <p class=" pl1rem pr1rem font-size-1rem mt1rem color-#fff font-bold mb0.5rem">今日红色路线推荐:</p>
        <p class=" pl1rem pr1rem font-size-1rem  color-yellow font-bold">北京－遵化－乐亭－天津线</p>
        <div class="color-#fff pl1rem pr5rem mt1.5rem">
            <div class="mb0.5rem color-#fff font-bold">
                <!-- location icon -->
                主要红色旅游景点有：
            </div>
            <div v-for="(item, index) in areaList" :key="index" class="mb1rem flex items-center"
                :class="{ 'color-yellow': index % 2 === 0 }">
                <div>
                    <i class="iconfont icon-didian01 color-blue-3 font-size-1rem mr0.3rem"></i>
                    {{ item }}
                    <img src="/public/red-base/top-bg.jpg" class="rounded-0.3rem" alt="">
                </div>
            </div>

        </div>
        <di class="color-#fff fixed right-1.5rem flex flex-col bottom-6rem">
            <div @click="loveRecommand()" class="flex flex-col items-center justify-center mb1rem">
                <i class="iconfont icon-aixin_shixin font-size-2rem"
                    :class="{ 'color-#FF00D1': loveRecommandFlag }"></i>
                <p class="font-size-0.7rem">34327</p>
            </div>
            <div @click="show = true">
                <i class="iconfont icon-pinglun font-size-2rem"></i>
                <p class="font-size-0.7rem">34327</p>
            </div>
        </di>
        <van-action-sheet v-model:show="show" title="评论">
            <div class="content">
                <div class="pb0.8rem">
                    <div class="flex h-2.5rem w-full">
                        <img src="/todayRecommand/bg.jpg" alt="" class="w-2.5rem h-2.5rem rounded-50% ">
                        <div class="ml1rem w80% h-full ">
                            <p class="font-size-0.9rem">用户758435dsfsd79384</p>
                            <p class="font-size-0.8rem color-#909090">2024/8/4 13:34:45</p>
                        </div>
                        <div class="w2rem h-2.5rem  ">
                            <i class="iconfont icon-dianzan color-#525252"></i>
                            <span class="font-size-0.8rem ml0.2rem">0</span>
                        </div>
                    </div>
                    <p class="ml3.4rem font-size-0.9rem mt0.2rem">很好很好</p>
                </div>

            </div>
            <!-- 可以使用 CellGroup 作为容器 -->
            <div class="flex items-center fixed left-0 bottom-0">
                <van-cell-group>
                    <van-field v-model="inputvalue" placeholder="请说些什么吧~~" />
                </van-cell-group>
                <van-button type="danger" size="small">发送</van-button>
            </div>
        </van-action-sheet>
        <div v-if="isShowBottomButtomFlag"
            class="pl0.5rem pr0.5rem w-full h-3.5rem fixed left-0 bottom-0 bottomNavBar flex justify-between items-center">
            <i class="iconfont icon-wenjian font-size-1.8rem color-#fff"></i>
            <div
                class="bottomNavBarBtn  font-size-1.5rem w4rem h4rem rounded-50% flex justify-center items-center color-#fff mb2rem">
                {{ currentGregorianDate }}
            </div>
            <i @click="gotoPastRecommand" class="iconfont icon-fenlei font-size-1.5rem color-#fff"></i>
        </div>
    </div>
</template>

<style scoped>
.top-red-linear-bg {
    background: linear-gradient(to bottom,
            #EF4444 10%,
            #FFB4B4 25%,
            transparent);
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
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

.bottomNavBar {
    background-color: rgba(0, 0, 0, 0.5);
}

.bottomNavBarBtn {
    background-color: rgba(0, 0, 0, 0.6);
}

.moveBtn {
    background-color: rgba(0, 0, 0, 0.5);
}

.content {
    padding: 1rem 1rem 20rem;
}

:deep(.van-cell__value) {
    background-color: #626262;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    border-radius: 1rem;
}

:deep(.van-field) {
    width: 20rem;
}
</style>
