<script setup>
import { reserveRedBaseAPI, getRedBaseCanBeReservedDatesAPI, getRedBaseDetailsByIdAPI, getRedBaseDayActivityContentByBaseIdAndSelectedDateAPI, getReserveRedBaseOrderIdAPI } from "../utils/apis/redBase.ts"
import { getUserInfoAPI } from "../utils/apis/user.ts";
import dayjs from 'dayjs';
const route = useRoute()
const router = useRouter()
const onClickLeft = () => history.back();

// 发起预约基地请求 所需要的参数对象
const reserveDataObj = {
    "alipaytradeno": "",
    "basename": "",
    "department": "",
    "gmtpayment": "",
    "groupphone": "",
    "groupusername": "",
    "id": 0,
    "idcard": "",
    "phone": "",
    "pid": 0,
    "position": "",
    "price": 0,
    "startdate": "",
    "status": 0,
    "studycourse": 0,
    "tid": 0,
    "tripname": "",
    "uid": 0,
    "username": ""
}

const currentRedBaseInfo = ref({})
/**
 * 调接口获取基地详情资料
 */
const getRedBaseDetailsById = async () => {
    const res = await getRedBaseDetailsByIdAPI(route.query.areaId)
    // console.log(res)
    currentRedBaseInfo.value = res
    reserveDataObj.pid = currentRedBaseInfo.value.id
    reserveDataObj.basename = currentRedBaseInfo.value.name
}
getRedBaseDetailsById()

/**
 * 调接口获取可预约的日期
 */
const canBeReservedDatesList = ref([])
const getRedBaseCanBeReservedDates = async () => {
    const res = await getRedBaseCanBeReservedDatesAPI(route.query.areaId)
    canBeReservedDatesList.value = res
}
await getRedBaseCanBeReservedDates()

// 显示用户选择的日期 || 请选择你要预约的日期
const selectedReserveDate = ref('请选择你要预约的日期')
// 日历是否show的变量
const canlendarShowFlag = ref(false)
// 可预约的日期数组
const objectYearMonthDateForCanBeReservedDatesList = ref([])
// 用户选择要预约的日期字段
const currentSelectedDate = ref('')
// 用户选择的基地和日期对应的活动内容
let activityContent = []
// 一个容器来临时放 调接口获取指定日期的红色基地活动内容
let temporaryContainer = []


/**
 *  调接口获取指定日期的红色基地活动内容
 * @param currentSelectedDate
 */
const getRedBaseDayActivityContentByBaseIdAndSelectedDate = async (currentSelectedDate) => {
    const res = await getRedBaseDayActivityContentByBaseIdAndSelectedDateAPI(route.query.areaId, currentSelectedDate)
    temporaryContainer = res
}

/**
 * 处理可预约的日期数组 2024 08 30 分割出来
 * 并加上 是否可预约和价格字段
 */
canBeReservedDatesList.value.map(async (item) => {
    // 根据-把2024-08-30 中的年月日抽取出来
    const year = item.split('-')[0]
    const month = item.split('-')[1]
    const date = item.split('-')[2]
    const fullDateInfo = `${year}-${month}-${date}`
    // 调接口获取指定日期的红色基地活动内容数组
    await getRedBaseDayActivityContentByBaseIdAndSelectedDate(fullDateInfo)
    // console.log(activityContent.value)
    // 价格数组
    const priceRangeList = ref([])
    temporaryContainer.forEach((item) => {
        priceRangeList.value.push(item.price)
    })
    // 获取priceRangeList数组中的最小值
    const minPrice = Math.min(...priceRangeList.value)
    objectYearMonthDateForCanBeReservedDatesList.value.push(
        {
            year: year,
            month: month,
            date: date,
            info: '可预约',
            price: `¥${minPrice}起`
        }
    )
})

/**
 * 处理可预约的日期数组 月份、日子 第一个字符不能为0
 */
objectYearMonthDateForCanBeReservedDatesList.value.map((item) => {
    // const fullDateInfo = `${item.year}-${item.month}-${item.date}`
    // 如果item.month的第一个字符是0，就把0去掉
    if (item.month[0] === '0') {
        item.month = item.month.slice(1)
    }
    if (item.date[0] === '0') {
        item.date = item.date.slice(1)
    }
})

/**
 * 处理日历
 * @param day
 */
const formatter = (day) => {
    const year = day.date.getFullYear();
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();
    objectYearMonthDateForCanBeReservedDatesList.value.forEach((item) => {
        if (item.year == year && item.month == month && item.date == date) {
            day.bottomInfo = item.info;
            day.topInfo = item.price
        } else {
            day.bottomInfo = '不可预约'
            day.type = 'disabled'
        }
    })
    if (objectYearMonthDateForCanBeReservedDatesList.value.length === 0) {
        day.type = 'disabled'
    }
    return day;
}

/**
 * 获取用户选择的预约日期并发送请求 获取指定日期的红色基地活动内容
 */
const onConfirm = (e) => {
    e = dayjs(e).format('YYYY-MM-DD');
    currentSelectedDate.value = e
    canlendarShowFlag.value = false
    getRedBaseDayActivityContentByBaseIdAndSelectedDate(e)
    activityContent = temporaryContainer
    // console.log(activityContent.value)
    selectedReserveDate.value = e
    if (objectYearMonthDateForCanBeReservedDatesList.value.length === 0) {
        selectedReserveDate.value = "暂无日期可选"
    }
}

// 请选择您的行程
const selectedActivity = ref('请选择您的行程')
// 控制选择活动的弹窗
const showSelectedActivitySheetFlag = ref(false)
// 当前选择的活动索引
const currentSelectedActivityMoudleIndex = ref(0)
// 当前选择的活动的价格
const selectedActivityPrice = ref('')
// 当前选择日期和形成之后得到的总体对象
let currentSelectedDateAndActivityObj = null
/**
 * 选择活动
 */
const selectActivity = () => {
    showSelectedActivitySheetFlag.value = false
    currentSelectedDateAndActivityObj = activityContent[currentSelectedActivityMoudleIndex.value]
    selectedActivity.value = currentSelectedDateAndActivityObj.title
    selectedActivityPrice.value = currentSelectedDateAndActivityObj.price

    // 添加 价格 出发日期 学时 行程id 行程主题
    reserveDataObj.price = currentSelectedDateAndActivityObj.price
    reserveDataObj.startdate = currentSelectedDateAndActivityObj.startdate
    reserveDataObj.studycourse = currentSelectedDateAndActivityObj.studycourse
    reserveDataObj.tid = currentSelectedDateAndActivityObj.id
    reserveDataObj.tripname = currentSelectedDateAndActivityObj.title
    reserveDataObj.groupusername = currentSelectedDateAndActivityObj.username
}

/**
 * 关闭没有活动的弹窗
 */
const closeNoActivityDataSheet = () => {
    selectedActivity.value = '暂无数据'
    showSelectedActivitySheetFlag.value = false
}

// 气泡弹出框
const showPopover = ref(false);
// 通过 actions 属性来定义菜单选项
const actions = [
    { text: '选项一' },
];

// 预约人资料
const reservePeopleName = ref('')
const reservePeopleDepartment = ref('')
const reservePeoplePosition = ref('')
const reservePeoplePhoneNumber = ref('')
const reservePeopleIdCard = ref('')

let reservePeopleInfo = null
/**
 * 调接口获取用户信息
 */
const getUserInfo = async () => {
    const res = await getUserInfoAPI()
    reservePeopleInfo = res
    actions[0].text = res.name
    console.log(res)
    reserveDataObj.uid = res.id
}
await getUserInfo()

/**
 * 通过气泡框 直接选择多项用户信息
 */
const selectReservePeopleInfo = () => {
    reservePeopleName.value = reservePeopleInfo.name
    reservePeopleDepartment.value = reservePeopleInfo.department
    reservePeoplePosition.value = reservePeopleInfo.position
    reservePeoplePhoneNumber.value = reservePeopleInfo.username
}

const reserveOrderId = ref('')
/**
 * 调接口获取订单id
 */
const getReserveRedBaseOrderId = async () => {
    const res = await getReserveRedBaseOrderIdAPI()
    reserveOrderId.value = res
}

/**
 * 预约接口
 */
const reserveRedBase = async (data) => {
    await reserveRedBaseAPI(data)
}

const showGetOrderIdPannelFlag = ref(false)

/**
 * 点击下单按钮 生成订单Id
 */
const paymentLinkParams = {
    subject: '',
    totalAmount: '',
    traceNo: ''
}
const placeAnOrder = async () => {
    if (selectedReserveDate.value !== '请选择你要预约的日期'
        && selectedActivity.value !== '请选择您的行程'
        && reservePeopleName.value !== ''
        && reservePeopleDepartment.value !== ''
        && reservePeoplePosition.value !== ''
        && reservePeoplePhoneNumber.value !== ''
        && reservePeopleIdCard.value !== ''
    ) {
        // 给reserveDataObj添加数据
        reserveDataObj.department = reservePeopleDepartment.value
        reserveDataObj.username = reservePeopleName.value
        reserveDataObj.position = reservePeoplePosition.value
        reserveDataObj.phone = reservePeoplePhoneNumber.value
        reserveDataObj.idcard = reservePeopleIdCard.value
        showGetOrderIdPannelFlag.value = true
        await getReserveRedBaseOrderId()
        reserveDataObj.id = reserveOrderId.value
        console.log(reserveDataObj)
        paymentLinkParams.subject = `${reserveDataObj.basename}${reserveDataObj.tripname}`,
        paymentLinkParams.totalAmount = reserveDataObj.price,
        paymentLinkParams.traceNo = reserveDataObj.id
    } else {
        showFailToast('请填写完整信息');
    }
}

/**
 * 点击确认并提交按钮
 * 调用预约基地接口
 * 跳转到支付链接
 */
const condirmAndSubmitOrder = () => {
    reserveRedBase(reserveDataObj)
    console.log(paymentLinkParams)
    router.push({
        path: '/paymentLink',
        query: paymentLinkParams
    });
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="预约基地" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class=" pl0.5rem pr0.5rem mt0.5rem">
            <van-field label="基地名称" :model-value="currentRedBaseInfo.name" readonly />
            <div class="w-100%  bg-#fff mt0.5rem flex font-size-0.9rem items-center">
                <div class="mr0.5rem pl0.5rem">
                    <p class="mb0.5rem">
                        <span class="font-bold">基地类型：</span>{{ currentRedBaseInfo.category }}
                    </p>
                    <p>
                        <span class="font-bold">基地地址：</span>{{ currentRedBaseInfo.position }}
                    </p>
                </div>
                <img class="rounded-0.3rem w50% h6rem" :src="currentRedBaseInfo.image" alt="">
            </div>
            <div class="mt0.5rem">
                <van-field label="预约日期" :model-value="selectedReserveDate" @click="canlendarShowFlag = true" readonly />
                <van-calendar v-model:show="canlendarShowFlag" :formatter="formatter" @confirm="onConfirm" />
            </div>
            <div class="mt0.5rem w-full">
                <van-field label="选择活动" :model-value="selectedActivity" @click="showSelectedActivitySheetFlag = true"
                    readonly />
                <van-action-sheet v-model:show="showSelectedActivitySheetFlag" title="选择您当天的活动模块">
                    <div v-if="activityContent.length !== 0" class="content">
                        <div v-for="(item, index) in activityContent" :key="index"
                            class="border-0.01rem rounded-0.5rem border-solid border-#9999 flex mb0.5rem"
                            :class="index === currentSelectedActivityMoudleIndex ? 'bg-red-5 color-#fff' : 'bg-#fff'"
                            @click="currentSelectedActivityMoudleIndex = index">
                            <img class="w7rem h6rem p0.2rem rounded-0.5rem mr0.5rem" src="/public/red-base/top-bg.jpg"
                                alt="">
                            <div class="flex relative justify-between w-full p0.5rem">
                                <div class="font-size-0.9rem w80%">
                                    <div>
                                        <p><span class="font-bold color-black">{{ item.title }}</span></p>
                                    </div>
                                    <div class="font-size-0.8rem">
                                        <p>{{ item.countnum }}人已预约</p>
                                    </div>
                                    <div class="font-size-0.8rem">
                                        <p>培训学时:{{ item.studycourse }}</p>
                                    </div>
                                    <div class="font-size-0.8rem">
                                        <p>培训日期:{{ item.startdate }}</p>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-between">
                                    <p class="font-bold color-orange">
                                        <span>￥</span>
                                        <span class="font-size-1.2rem">{{ item.price }}</span>
                                    </p>
                                </div>
                                <p class="font-size-0.65rem color-blue-6 absolute right-1rem bottom-0.5rem">查看详情</p>
                            </div>
                        </div>
                    </div>
                    <div class="content" v-else>
                        <van-empty description="暂无数据" />
                    </div>
                    <div v-if="activityContent.length !== 0" @click="selectActivity()"
                        class="w90% ml5% mb2rem bg-red-600 h2.5rem rounded-1.5rem color-#fff flex justify-center items-center font-size-0.9rem">
                        确认
                    </div>
                    <div v-else @click="closeNoActivityDataSheet()" class="w90% ml5% mb2rem bg-red-200 h2.5rem rounded-1.5rem color-#fff flex justify-center
                        items-center font-size-0.9rem">
                        确认
                    </div>
                </van-action-sheet>
            </div>
            <div>
                <div class="w-full bg-#fff mt0.5rem ">
                    <van-popover v-model:show="showPopover" :actions="actions" @select="selectReservePeopleInfo()"
                        right-start>
                        <template #reference class="w-full">
                            <van-field v-model="reservePeopleName" label="预约人" placeholder="请输入您的姓名" />
                        </template>
                    </van-popover>
                </div>
                <van-field v-model="reservePeopleDepartment" label="所在单位" placeholder="请输入您所在单位" />
                <van-field v-model="reservePeoplePosition" label="职位" placeholder="请输入您的职位" />
                <van-field v-model="reservePeoplePhoneNumber" type="tel" label="电话" placeholder="请输入您的电话" />
                <van-field v-model="reservePeopleIdCard" type="number" label="身份证" placeholder="请输入您的身份证" />
            </div>
        </div>
        <van-action-bar :placeholder="true" class="pl1rem pr1rem">
            <div class="w10rem h-full flex justify-start items-center">
                <div class="font-size-0.8rem">合计</div>
                <div class="ml0.5rem">
                    <p class="color-red-5 font-size-1.1rem font-bold">
                        <span>￥</span>
                        <span>{{ selectedActivityPrice || "0.00" }}</span>
                    </p>
                    <p class="font-size-0.8rem color-#FFB400">共减免￥0.00</p>
                </div>
            </div>
            <van-action-bar-button @click="placeAnOrder()" color="" type="danger" text="下单" />
            <van-action-sheet v-model:show="showGetOrderIdPannelFlag" title="核对预约信息">
                <div class="content font-size-0.9rem">
                    <div>预约人：{{ reserveDataObj.username }}</div>
                    <div>预约项目：{{ reserveDataObj.tripname }}</div>
                    <div>预约日期：{{ reserveDataObj.startdate }}</div>
                    <div>联系电话：{{ reserveDataObj.phone }}</div>
                </div>
                <div @click="condirmAndSubmitOrder()"
                    class="w90% ml5% mb2rem bg-red-600 h2.5rem rounded-1.5rem color-#fff flex justify-center items-center font-size-0.9rem">
                    确认并提交订单
                </div>
            </van-action-sheet>
        </van-action-bar>
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

/* 日历 */
:deep(.van-calendar__top-info) {
    color: red;
}

:deep(.van-calendar__selected-day) {
    background-color: #fc9802;
    color: #fff;
}

/* 自定义面板 */
.content {
    padding: 1rem 1rem 10rem;
}

/* 动作面板 */
:deep(.van-action-bar) {
    height: 3.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

:deep(.van-popover) {
    width: 100%;
    background: pink;
}
</style>
