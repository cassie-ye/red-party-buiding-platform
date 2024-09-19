<script setup>
import dayjs from 'dayjs';
import { useCascaderAreaData } from '@vant/area-data';
const router = useRouter()

const onClickLeft = () => history.back();
const activeTagQuery = ref(0)

const tabsList = ref([
    {
        type: "飞机",
        icon: "icon-feiji"
    },
    {
        type: "火车",
        icon: "icon-huochepiao"
    }
])

// 选择的出行类型
const selectFlightClassIndex = ref(0)

/**
 * 日历模块
 */
const calendarShowFlag = ref(false);
const calendarSelectedDate = ref('')
const specialDate = ref('今天')
const today = new Date(); // 获取今天的日期
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1); // 将日期设置为明天
const todayDate = dayjs(today.toISOString().split('T')[0]).format('MM月DD日')
const tomorrowDate = dayjs(tomorrow.toISOString().split('T')[0]).format('MM月DD日');
calendarSelectedDate.value = todayDate

const onConfirm = (value) => {
    // 选择的日期
    value = dayjs(value).format('MM月DD日');
    calendarSelectedDate.value = value
    if (value === todayDate) {
        specialDate.value = '今天'
    } else if (value === tomorrowDate) {
        specialDate.value = '明天'
    } else {
        specialDate.value = ''
    }
    calendarShowFlag.value = false
}

/**
 * 选出发地点
 */
const startArea = ref('')

const showSelectStartAreaPannel = ref(false);
const startCascaderValue = ref('');
const options = useCascaderAreaData();
// 处理省市区数据
options.forEach((province) => {
    province.children.forEach((city) => {
        delete city.children
    })
})
const onStartFinish = ({ selectedOptions }) => {
    showSelectStartAreaPannel.value = false;
    selectedOptions.map((item) => {
        startArea.value = item.text
    })
};

/**
 * 选目的地
 */
const arriveArea = ref('')

const showSelectArriveAreaPannel = ref(false);
const arriveCascaderValue = ref('');
const onArriveFinish = ({ selectedOptions }) => {
    showSelectArriveAreaPannel.value = false;
    selectedOptions.map((item) => {
        arriveArea.value = item.text
    })
};

/**
 * 选择乘机人的弹窗
 */
const showSelectPassengerPannelFlag = ref(false)


/**
 * 跳转到添加乘机人
 */
const gotoAddPassengers = () => {
    router.push('/addPassengers')
}

/**
 * 选择多个乘机人
 */
const checked = ref([]);
const checkboxRefs = ref([]);

const peopleName = ref('请选择乘机人以获取低价推荐')
const toggle = (index) => {
    checkboxRefs.value[index].toggle();
};

onBeforeUpdate(() => {
    checkboxRefs.value = [];
});

const list = ref(['a', 'b'])

const selectPassages = (value) => {
    // 选择的值 Proxy(Array) {0: 'a', 1: 'b'}
    console.log(checked.value)
}

/**
 * 跳转到搜索机票页面
 */
const gotoSearchForAirlineTickets = () => {
    router.push('/searchForAirlineTickets')
}

// async function addTodo(departureDate, departureCityName, arrivalCityName) {
//     // 构造请求参数
//     const params = new URLSearchParams({
//         r: 'train/trainTicket/getTickets',
//         'primary[departureDate]': departureDate,
//         'primary[departureCityName]': departureCityName,
//         'primary[arrivalCityName]': arrivalCityName
//     }).toString();

//     // 发起请求
//     try {
//         const response = await $fetch(`https://huoche.tuniu.com/yii.php?${params}`, {
//             method: 'GET', // 使用 'GET' 方法进行请求
//         });

//         // 处理响应
//         console.log('Response:', response);
//         return response;
//     } catch (error) {
//         // 处理错误
//         console.error('Error:', error);
//     }
// }
// addTodo('2024-08-21', 'Beijing', 'Shanghai');


const peopleList = ref([
    {
        name: "王一",
        idCard: "330658330205867484"
    },
])

function sure() {
    showSelectPassengerPannelFlag.value = false
    peopleName.value = "王一"
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="交通查询" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="200">
            <van-swipe-item>
                <img src="/public/traffic/bg-1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="/public/traffic/bg-2.jpg" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="w-full bg-#fff p1rem pb5rem">
            <van-tabs v-model:active="activeTagQuery">
                <van-tab v-for="(item, index) in tabsList">
                    <template #title>
                        <i class="iconfont font-size-1.5rem" :class="item.icon"></i>
                        {{ item.type }}
                    </template>
                    <div v-if="index === 0">
                        <div class="mt1.5rem flex items-center justify-between font-size-1.8rem font-bold">
                            <span @click="showSelectStartAreaPannel = true">{{ startArea || '出发地' }}</span>
                            <van-popup v-model:show="showSelectStartAreaPannel" round position="bottom">
                                <van-cascader v-model="startCascaderValue" title="请选择所在地区" :options="options"
                                    @close="show = false" @finish="onStartFinish" />
                            </van-popup>
                            <i class="iconfont icon-kongyunchukou font-size-2rem color-blue"></i>
                            <span @click="showSelectArriveAreaPannel = true">{{ arriveArea || '目的地' }}</span>
                            <van-popup v-model:show="showSelectArriveAreaPannel" round position="bottom">
                                <van-cascader v-model="arriveCascaderValue" title="请选择所在地区" :options="options"
                                    @close="show = false" @finish="onArriveFinish" />
                            </van-popup>
                        </div>
                        <div class="mt1rem" @click="calendarShowFlag = true">
                            <span class="font-size-1.5rem ">{{ calendarSelectedDate }}</span>
                            <span class="ml0.5rem">{{ specialDate }}</span>
                        </div>
                        <div class="mt2rem flex justify-between" @click="showSelectPassengerPannelFlag = true">
                            <span>乘机人</span>
                            <p>
                                <span class="color-blue">{{ peopleName }}</span>
                                <van-icon name="arrow" />
                            </p>
                        </div>
                        <div
                            class="pl0.15rem pr0.15rem mt2rem w10rem h2rem rounded-0.2rem bg-blue flex justify-between items-center ">
                            <div class="pl0.5rem pr0.5rem pt0.3rem pb0.3rem rounded-0.2rem font-size-0.8rem"
                                :class="selectFlightClassIndex === 0 ? 'bg-#C9E3FF color-blue-8' : ''"
                                @click="selectFlightClassIndex = 0">
                                舱位不限</div>
                            <div class="pl0.5rem pr0.5rem pt0.3rem pb0.3rem rounded-0.2rem  font-size-0.8rem"
                                :class="selectFlightClassIndex === 1 ? 'bg-#C9E3FF color-blue-8' : ''"
                                @click="selectFlightClassIndex = 1">
                                公务/头等舱</div>
                        </div>
                        <div class="flex justify-center items-center font-size-1.2rem color-#fff mt3rem w-90% h3rem bg-blue ml5% rounded-1.5rem"
                            @click="gotoSearchForAirlineTickets()">
                            搜索机票
                        </div>
                    </div>
                    <div v-if="index === 1">
                        <div class="mt1.5rem flex items-center justify-between font-size-1.8rem font-bold">
                            <span @click="showSelectStartAreaPannel = true">{{ startArea || '出发地' }}</span>
                            <van-popup v-model:show="showSelectStartAreaPannel" round position="bottom">
                                <van-cascader v-model="startCascaderValue" title="请选择所在地区" :options="options"
                                    @close="show = false" @finish="onStartFinish" />
                            </van-popup>
                            <i class="iconfont icon-changxianhuodong font-size-2rem color-blue"></i>
                            <span @click="showSelectArriveAreaPannel = true">{{ arriveArea || '目的地' }}</span>
                            <van-popup v-model:show="showSelectArriveAreaPannel" round position="bottom">
                                <van-cascader v-model="arriveCascaderValue" title="请选择所在地区" :options="options"
                                    @close="show = false" @finish="onArriveFinish" />
                            </van-popup>
                        </div>
                        <div class="mt1rem">
                            <span class="font-size-1.5rem ">8月13日</span>
                            <span class="ml0.5rem">明天</span>
                        </div>
                        <div class="mt2rem flex justify-between">
                            <span>乘机人</span>
                            <p>
                                <span class="color-blue">请选择乘机人以获取低价推荐</span>
                                <van-icon name="arrow" />
                            </p>
                        </div>
                        <div
                            class="pl0.15rem pr0.15rem mt2rem w8rem h2rem rounded-0.2rem bg-blue flex justify-between items-center ">
                            <div class="pl0.5rem pr0.5rem pt0.3rem pb0.3rem rounded-0.2rem font-size-0.8rem"
                                :class="selectFlightClassIndex === 0 ? 'bg-#C9E3FF color-blue-8' : ''"
                                @click="selectFlightClassIndex = 0">
                                学生票</div>
                            <div class="pl0.5rem pr0.5rem pt0.3rem pb0.3rem rounded-0.2rem  font-size-0.8rem"
                                :class="selectFlightClassIndex === 1 ? 'bg-#C9E3FF color-blue-8' : ''"
                                @click="selectFlightClassIndex = 1">
                                成人票</div>
                        </div>
                        <div
                            class="flex justify-center items-center font-size-1.2rem color-#fff mt3rem w-90% h3rem bg-blue ml5% rounded-1.5rem">
                            搜索火车票
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <van-action-sheet v-model:show="showSelectPassengerPannelFlag" title="选择乘机人">
            <div class="content flex justify-center items-center flex-col mt1rem">
                <p>请选择乘机人，将根据您的选择
                    <span class="color-blue font-bold">推荐优惠票价</span>
                </p>
                <!-- <p class="color-green font-bold mt0.5rem" @click="gotoAddPassengers">
                    <van-icon name="plus" />
                    添加乘机人
                </p> -->
                <van-checkbox-group v-model="checked" class="mt2rem" @change="selectPassages()">
                    <van-cell-group inset>
                        <van-cell v-for="(item, index) in list" clickable :key="item" @click="toggle(index)">
                            <template #right-icon>
                                <div v-for="(item, index) in peopleList" :key="index"
                                    class="flex items-center w18rem mr3rem">
                                    <van-icon name="edit" class="mr2rem" />
                                    <div class="flex flex-col justify-end">
                                        <p>{{ item.name }}</p>
                                        <p>身份证 {{ item.idCard }}</p>
                                    </div>
                                </div>
                                <van-checkbox :name="item" :ref="el => checkboxRefs[index] = el" @click.stop />
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
                <div class="mt2rem mb2rem w90%  rounded-1.5rem flex justify-center items-center font-size-1.2rem color-#fff h2.5rem bg-blue"
                    @click="sure()">
                    确定</div>
            </div>
        </van-action-sheet>
        <van-calendar v-model:show="calendarShowFlag" @confirm="onConfirm" />
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

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    /* background-color: #39a9ed; */
}
</style>
