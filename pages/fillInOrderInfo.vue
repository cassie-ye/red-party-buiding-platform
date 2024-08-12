<script setup>
const router = useRouter()
const onClickLeft = () => {
    router.go(-3);
}

const stepValue = ref(1)

const showActionSheet = ref(false)

const inputNameValue = ref('')
const inputPhoneNumberValue = ref('')

const coupon = {
    available: 1,
    condition: '无门槛\n最多优惠12元',
    reason: '',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元',
};

const coupons = ref([coupon]);
const showList = ref(false);
const chosenCoupon = ref(-1);

const onChange = (index) => {
    showList.value = false;
    chosenCoupon.value = index;
};
const onExchange = (code) => {
    coupons.value.push(coupon);
};

const leaveMessageValue = ref('')

const showPayActionSheet = ref(false)
const value = ref();
const showKeyboard = ref(true);

const keyboardBlur = () => {
    // console.log(e)
    showKeyboard.value = false
}

const fullPassword = ref('')
const onInput = (value) => {
    fullPassword.value += value
    console.log(fullPassword.value)
    if (fullPassword.value.length === 6) {
        if (fullPassword.value === '123456') {
            showSuccessToast('支付成功');
            setTimeout(() => {
                showPayActionSheet.value = false
                router.push('/downOrderSuceess')
            }, 2000)
        } else {
            showFailToast('支付失败');
            fullPassword.value = ''
        }
    }
}

const deleteLastStr = (value) => {
    // fullPassword的值的最后一个字符去掉
    fullPassword.value = fullPassword.value.slice(0, -1)
    // console.log( fullPassword.value )
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="套餐选择" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="top-red-linear-bg w-full h31rem bg-red pl0.5rem pr0.5rem pt1rem mb12rem">
            <div class="mb0.5rem bg-#fff w-95% ml2.5% rounded-0.5rem p0.8rem">
                <p class="font-bold font-size-1.2rem">嘉兴南湖 —— 带你领略小船上的故事</p>
                <p class="mt1rem font-size-0.9rem color-#525252">出行日期：2025-08-11</p>
                <p class="mt1rem font-size-0.9rem color-#525252">已选：普通级讲师|上午场</p>
            </div>

            <div class="bg-#fff w-95% ml2.5% rounded-0.5rem  p0.8rem">
                <div class="flex justify-between items-center">
                    <p class="">价格</p>
                    <p>
                        <span class="color-red-5">￥</span>
                        <span class="font-bold font-size-1.5rem color-red-5">1299.00</span>
                        <span>/团</span>
                    </p>
                </div>
                <div class="flex justify-between items-center mt0.2rem">
                    <p class="">
                        <span class="">出行人数</span>
                        <span class="font-size-0.8rem color-gray ml0.5rem">请如实填写</span>
                    </p>
                    <van-stepper v-model="stepValue" />
                </div>
            </div>

            <div class="mt0.5rem bg-#fff w-95% ml2.5% rounded-0.5rem p0.8rem">
                <div class="flex justify-between items-center " @click="showActionSheet = true">
                    <!-- 优惠券单元格 -->
                    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
                    <!-- 优惠券列表 -->
                    <van-popup v-model:show="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
                        <van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon"
                            :disabled-coupons="disabledCoupons" @change="onChange" @exchange="onExchange" />
                    </van-popup>
                </div>
                <div class="flex justify-between items-center mt1rem ">
                    <p class="">权益卡</p>
                    <p>
                        <span class="font-size-0.8rem color-gray ml0.5rem">无可用权益卡</span>

                    </p>
                </div>
            </div>

            <div class="mt0.5rem bg-#fff w-95% ml2.5% rounded-0.5rem p0.8rem">
                <div class="flex justify-between items-center " @click="showActionSheet = true">
                    <p>
                        <span class="font-bold font-size-1.2rem">联系人信息</span>
                        <span class="font-size-0.9rem color-gray ml0.5rem">(必填)</span>
                    </p>
                </div>
                <div class="flex  items-center mt0.5rem ">
                    <p class="">姓名</p>
                    <van-cell-group inset>
                        <van-field v-model="inputNameValue" placeholder="请输入用户名" />
                    </van-cell-group>
                </div>
                <div class="flex items-center">
                    <p class="">手机号码</p>
                    <van-cell-group inset>
                        <van-field v-model="inputPhoneNumberValue" placeholder="请输入用户名" />
                    </van-cell-group>
                </div>
            </div>

            <div class="mt0.5rem bg-#fff w-95% ml2.5% rounded-0.5rem p0.8rem">
                <p class="font-bold">留言备注</p>
                <van-cell-group inset>
                    <van-field v-model="leaveMessageValue" rows="2" autosize type="textarea" maxlength="50"
                        placeholder="请输入留言" show-word-limit />
                </van-cell-group>
            </div>
        </div>
        <van-action-bar :placeholder="true" class="pl1rem pr1rem">
            <div class="w10rem h-full flex justify-start items-center">
                <div class="font-size-0.8rem">合计</div>
                <div class="ml0.5rem">
                    <p class="color-red-5 font-size-1.1rem font-bold">
                        <span>￥</span>
                        <span>1356.00</span>
                    </p>
                    <p class="font-size-0.8rem color-#FFB400">共减免￥10.00</p>
                </div>
            </div>
            <van-action-bar-button @click="showPayActionSheet = true" color="" type="danger" text="去支付" />
        </van-action-bar>


        <van-action-sheet v-model:show="showPayActionSheet" title="请输入支付密码">
            <div class="content pb20rem">
                <div class="w-full flex flex-col items-center mt1rem mb1rem">
                    <p class="font-size-1.2rem mt0.2rem mb0.2rem">订单支付</p>
                    <p class="font-bold">
                        <span class="font-size-1.4rem">￥</span>
                        <span class="font-size-2.2rem">1356.00</span>
                    </p>
                </div>
                <div class="mt1rem ml0.5rem mr0.5rem border-b-solid border-b-0.05rem border-b-#DEDEDE pb0.3rem">
                    <div class="flex justify-between items-center  ">
                        <span>付款方式</span>
                        <div>
                            <span>更改</span>
                            <van-icon name="arrow" />
                        </div>
                    </div>
                </div>
                <div class="pl0.5rem pr0.5rem mt1rem mb1rem">
                    <div class="flex items-center mb0.3rem">
                        <img class="w1.3rem mr0.5rem" src="/public/pay/zhifubaoPay.png" alt="">
                        <p>支付宝</p>
                    </div>
                    <div>
                        <span>余额支付</span>
                        <span class="color-#989898 font-size-0.8rem">(剩余￥13556956.54)</span>
                    </div>
                </div>
                <!-- 密码输入框 -->
                <van-password-input class="" :value="value" :focused="showKeyboard" @focus="showKeyboard = true" />
                <!-- 数字键盘 -->
                <van-number-keyboard v-model="value" :show="showKeyboard" @blur="keyboardBlur" @input="onInput"
                    @delete="deleteLastStr()" />
            </div>
        </van-action-sheet>

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

:deep(.van-action-bar) {
    height: 3.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

:deep(.van-coupon-cell) {
    padding-left: 0;
    padding-right: 0;
    font-size: 1rem;
}

:deep(.van-field) {
    padding-left: 0;
    padding-right: 0;
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
</style>
