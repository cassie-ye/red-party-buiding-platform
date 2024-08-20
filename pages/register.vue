<script setup>
import { registerAPI } from "../utils/apis/commen.ts"
const tel = ref('')
const password = ref('')
const secondPassword = ref('')
const router = useRouter()
const onClickLeft = () => history.back();
const registerData = ref(
    {
        "department": "",
        "idcard": "",
        "name": "",
        "password": "",
        "position": "",
        "roleName": 0,
        "studyCourse": 0,
        "username": "",
        "yearCourse": 0
    }
)

/**
 * 调接口注册
 */
const register = async (data) => {
    const res = await registerAPI(data)
    if (res) {
        showSuccessToast('注册成功');
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }
}

/**
 * 注册
 */
const startRegister = () => {
    if (password.value !== secondPassword.value) {
        showFailToast('两次密码输入不一致');
    } else {
        registerData.value.username = tel.value
        registerData.value.password = password.value
        register(registerData.value)
    }

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
                    <van-field v-model="tel" class="mt2rem" type="tel" placeholder="手机号" />
                    <!-- 输入密码 -->
                    <van-field v-model="password" type="password" placeholder="密码" />
                    <!-- 再次输入密码 -->
                    <van-field v-model="secondPassword" type="password" placeholder="再次输入密码" />
                </van-cell-group>
                <div @click="startRegister()"
                    class="w70% mt1.8rem bg-red-600 h2.5rem rounded-1.5rem color-#fff flex justify-center items-center font-size-0.9rem">
                    注册
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
