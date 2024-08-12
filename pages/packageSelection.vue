<script setup>
import dayjs from 'dayjs';
const onClickLeft = () => history.back();
const show = ref(false);
const router = useRouter()

const formatter = (day) => {
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();

    const arr = ref([
        {
            info: '不可约',
            month: 9,
            date: 1
        }
    ])

    arr.value.forEach((item) => {
        if (item.month === month && item.date === date) {
            day.bottomInfo = item.info;
        }
    })

    // if (month === 9) {
    //     if (date === 1) {
    //         day.topInfo = '劳动节';
    //     } else if (date === 4) {
    //         day.topInfo = '青年节';
    //     } else if (date === 11) {
    //         day.text = '今天';
    //     }
    // }

    // if (day.type === 'start') {
    //     day.bottomInfo = '入住';
    // } else if (day.type === 'end') {
    //     day.bottomInfo = '离店';
    // }
    return day;
}

const onConfirm = (value) => {
    // 2024年8月29日
    value = dayjs(value).format('YYYY年MM月DD日');
    // console.log(value);
    show.value = false
}

const currentSelectedTeacherIndex = ref(-1)
const teacherTypeArr = ref([
    "上午场", "下午场", "一日游"
])

const selectTeacherType = (index) => {
    currentSelectedTeacherIndex.value = index
}

const currentSelectedTimeTypeIndex = ref(-1)
const selectTimeType = (index) => {
    currentSelectedTimeTypeIndex.value = index
}

const gotoFillInOrderInfo = () => {
    router.push({
        path: '/fillInOrderInfo'
    })
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="套餐选择" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="top-red-linear-bg w-full h31rem bg-red pl0.5rem pr0.5rem pt1rem">
            <div class="mb1rem bg-#fff w-95% ml2.5% rounded-1rem p1rem">
                <p class="font-bold font-size-1.2rem">嘉兴南湖 —— 带你领略小船上的故事</p>
                <p class="mt1rem font-size-0.9rem color-#525252">请由上至下选择出行日期、讲师级别、场次</p>
            </div>

            <img class="mb1rem w-95% ml2.5% rounded-0.5rem h12rem" src="/public/packageSelection/select-img.jpg" alt="">

            <div class="bg-#fff w-95% ml2.5% rounded-1rem p1rem">
                <p class="font-bold">选择日期</p>
                <div class="flex">
                    <div
                        class="mt0.5rem flex flex-col justify-evenly items-center pt0.3rem pb0.3rem border-solid border-0.05rem border-#DEDEDE w6.5rem mr0.3rem font-size-0.8rem rounded-0.3rem">
                        <p>今天 08-11</p>
                        <p>不可约</p>
                    </div>
                    <div
                        class="mt0.5rem flex flex-col justify-evenly items-center pt0.3rem pb0.3rem border-solid border-0.05rem border-#DEDEDE w6.5rem mr0.3rem font-size-0.8rem rounded-0.3rem">
                        <p>今天 08-11</p>
                        <p>不可约</p>
                    </div>
                    <div
                        class="mt0.5rem flex flex-col justify-evenly items-center pt0.3rem pb0.3rem border-solid border-0.05rem border-#DEDEDE w6.5rem mr0.3rem font-size-0.8rem rounded-0.3rem">
                        <p>今天 08-11</p>
                        <p>不可约</p>
                    </div>
                    <div @click="show = true"
                        class="w3rem mt0.5rem flex flex-col justify-center items-center   border-solid border-0.05rem border-#DEDEDE mr0.3rem font-size-0.8rem rounded-0.3rem">
                        更多<br>日期
                    </div>
                </div>
                <p class="font-bold mt1rem">选择讲师</p>
                <div class="flex">
                    <div v-for="(item, index) in teacherTypeArr" :key="index"
                        class="mt0.5rem flex flex-col justify-evenly items-center pt0.3rem pb0.3rem border-solid border-0.05rem border-#DEDEDE w6.5rem mr0.3rem font-size-0.8rem rounded-0.3rem"
                        :class="index === currentSelectedTeacherIndex ? 'bg-yellow color-#fff' : 'bg-#fff'"
                        @click="selectTeacherType(index)">
                        <p>{{ item }}</p>
                    </div>
                </div>
                <p class="font-bold mt1rem">选择场次</p>
                <div class="flex">
                    <div v-for="(item, index) in teacherTypeArr" :key="index"
                        class="mt0.5rem flex flex-col justify-evenly items-center pt0.3rem pb0.3rem border-solid border-0.05rem border-#DEDEDE w6.5rem mr0.3rem font-size-0.8rem rounded-0.3rem"
                        :class="index === currentSelectedTimeTypeIndex ? 'bg-purple color-#fff' : 'bg-#fff'"
                        @click="selectTimeType(index)">
                        <p>{{ item }}</p>
                    </div>
                </div>
            </div>
            <van-calendar v-model:show="show" :formatter="formatter" @confirm="onConfirm" />

        </div>
        <van-action-bar class="pl1rem pr1rem">
            <div class="w10rem h-full color-red-5 flex justify-start items-center font-size-1.2rem font-bold">￥34</div>
            <van-action-bar-button @click="gotoFillInOrderInfo()" color="" type="danger" text="下一步" />
        </van-action-bar>
    </div>
</template>
<style scoped>
.special-date {
    color: red;
    /* 示例：将特殊日期的文字颜色改为红色 */
}

.top-red-linear-bg {
    background: linear-gradient(to bottom,
            #EF4444 10%,
            #FFB4B4 35%,
            transparent);
}

.box-shadow {
    box-shadow: 0 2px 4px rgba(.18, .18, .18, .18), 0 0 6px rgba(0, 0, 0, .15)
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

.shenglue {
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.custom-header {
    text-align: center;
    font-weight: bold;
}

.custom-day {
    text-align: center;
    color: #ff5722;
}

:deep(van-calendar__bottom-info) {
    color: red;

}
</style>
