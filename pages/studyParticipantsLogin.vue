<script setup>
import { useUserStore } from '../store/user.js'
import { useOrderStore } from '../store/order.js'
import { getUserInfoAPI } from "../utils/apis/user.ts"
definePageMeta({
    layout: 'register-login'
})
const tel = ref('')
const password = ref('')
const router = useRouter()
/**
 * 去注册
 */
const gotoRegister = () => {
    router.push('/register')
}

const loginData = ref({
    username: "",
    password: ""
})

const userStore = useUserStore()
const orderStore = useOrderStore()

/**
 * 处理请求数据
 * @param {*} data
 */
const transformedData = (data) => {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret.slice(0, -1) // 移除末尾的 '&'
};

/**
 * 调接口获取用户信息 存到pinia中
 */
const getUserInfo = async () => {
    const res = await getUserInfoAPI()
    // console.log(res)
    userStore.userInfo.infoObj = res
}

// /**
//  * 调接口判断是否存在未支付的订单
//  */
// const judgeIsExistNoPayOrder = async () => {
//     const res = await judgeIsExistNoPayOrderAPI()
//     userStore.userInfo.isNoPayOrder = res
//     console.log(userStore.isNoPayOrder)
// }

/**
 * 登录
 */
const performLogin = async () => {
    const body = transformedData(loginData.value);
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    try {
        // const res = await $fetch('http://192.168.43.108:10087/login', {
        //     method: 'POST',
        //     headers: headers,
        //     body: body
        // });
        // const res = await $fetch('http://192.168.0.111:10087/login', {
        //     method: 'POST',
        //     headers: headers,
        //     body: body
        // });
        const res = await $fetch('http://10.10.12.170:10087/login', {
            method: 'POST',
            headers: headers,
            body: body
        });

        const result = JSON.parse(res)
        // console.log(result)

        if (result.status === 'success') {
            userStore.userInfo.token = result.token
            console.log(userStore.userInfo)
            showSuccessToast('登录成功');
            setTimeout(() => {
                router.push('/home')
            }, 3000)
            await getUserInfo()
            // 是否存在未支付的订单 存入pinia
            await orderStore.judgeIsExistNoPayOrder()
            // 获取我没有支付的订单 存入pinia
            await orderStore.getMyNoPayOrder()
            // 获取全部订单 存入pinia
            await orderStore.getMyAllOrders()
            // 是否存在未支付的订单
            console.log('是否存在未支付的订单', orderStore.isExistNoPayOrder)
            // 没有支付的订单对象
            console.log('没有支付的订单对象', orderStore.noPayOrderObj)
            // 我的全部订单
            console.log('我的全部订单', orderStore.myAllOrderList)
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};

/**
 * 调接口实现登录
 */
const userLogin = () => {
    loginData.value.username = tel.value
    loginData.value.password = password.value
    // login(loginData.value)
    performLogin()
}
</script>
<template>
    <div>
        <div class="flex relative">
            <div @click="onClickLeft"
                class="flex items-center absolute top-0.5rem left-0.1rem color-#fff font-size-1rem">
                <van-icon name="arrow-left" />
                返回
            </div>
            <img class="h-vh" src="/public/login/bg.jpg" alt="">
            <div class="absolute top-8rem w-full flex flex-col items-center">
                <p class="font-size-1.3rem font-bold">红色党建研学平台</p>
                <van-cell-group inset>
                    <!-- 输入手机号，调起手机号键盘 -->
                    <van-field v-model="tel" class="mt2rem" type="tel" label="手机号" />
                    <!-- 输入密码 -->
                    <van-field v-model="password" type="password" label="密码" />
                </van-cell-group>
                <div @click="userLogin()"
                    class="w70% mt1.8rem bg-red-600 h2.5rem rounded-1.5rem color-#fff flex justify-center items-center font-size-0.9rem">
                    登录
                </div>
                <div class="mt1.5rem flex color-gray justify-center items-center font-size-0.9rem">
                    <p>忘记密码</p>
                    <div class="w0.05rem h0.8rem bg-gray ml1rem mr1rem"></div>
                    <p @click="gotoRegister()">去注册</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
:deep(.van-field__label) {
    width: 3rem;
}
</style>
