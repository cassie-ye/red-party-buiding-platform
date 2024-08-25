<script setup>
const onClickLeft = () => history.back();
const name = ref('')
const compony = ref('')
const position = ref('')
const phoneNumber = ref('')
const idCardNumber = ref('')
const email = ref('')

</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="修改个人资料" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="flex flex-col items-center">
            <img src="/public/red-base/top-bg.jpg" class="w4rem h4rem rounded-50% mt1rem" alt="">
            <van-field class="mt1rem" v-model="name" label="姓名" placeholder="请输入您的真实姓名" />
            <van-field class="mt0.3rem" v-model="compony" label="单位" placeholder="请输入您的单位名称" />
            <van-field class="mt0.3rem" v-model="position" label="职务" placeholder="请输入您在单位的职务" />
            <van-field class="mt0.3rem" v-model="phoneNumber" label="手机号" placeholder="请输入您的手机号" type="tel" />
            <van-field class="mt0.3rem" v-model="idCardNumber" label="身份证" placeholder="请输入您的身份证号码" type="number" />
            <van-field class="mt0.3rem" v-model="email" label="邮箱" placeholder="请输入您的邮箱" />
            <div
                class="w95% mt1rem bg-red-600 h2.5rem rounded-1.5rem color-#fff flex justify-center items-center font-size-0.9rem">
                保存
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

:deep(.van-nav-bar__arrow) {
    color: black;
}

:deep(.van-nav-bar__text) {
    color: black;
}

:deep(.van-ellipsis) {
    color: black
}

:deep(.van-cell-group) {
    margin-top: 1rem;
    background-color: transparent;
}
</style>
