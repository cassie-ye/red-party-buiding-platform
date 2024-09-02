<script setup>
const onClickLeft = () => history.back();
const router = useRouter()
/**
 * 去入驻
 */
const gotoBaseRegistration = () => {
    router.push('baseRegistration')
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
                <p class="font-size-1.3rem font-bold">红色党建基地服务</p>
                <van-cell-group inset>
                    <!-- 输入手机号，调起手机号键盘 -->
                    <van-field v-model="tel" class="mt2rem" type="tel" label="手机号" />
                    <!-- 输入密码 -->
                    <van-field v-model="password" type="password" label="密码" />
                </van-cell-group>
                <div class="w70% mt1.8rem bg-red-600 h2.5rem rounded-1.5rem color-#fff flex justify-center items-center font-size-0.9rem">
                    登录
                </div>
                <div @click="gotoBaseRegistration()" class="mt1.5rem flex w70% justify-end items-center font-size-0.9rem">
                    <p class="color-red-600" @click="gotoRegister()">基地入驻</p>
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
<style scoped></style>
