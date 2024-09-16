<script setup>
import { chatGptAPI } from "../utils/apis/chatgpt.ts"
import { useUserStore } from "../store/user.js";
const onClickLeft = () => history.back();
const userStore = useUserStore()
console.log(userStore.userInfo.token)

// const chatGpt = async (params) => {
//     const res = await chatGptAPI(params)
//     console.log(res)
// }
// const paramsObj = ref({})
// paramsObj.value.msg = "为什么地球是圆的"
// chatGpt(paramsObj.value)

async function chatGpt() {
    await $fetch('http://192.168.0.111:10083/ai/chat', {
        method: 'GET',
        params: {
            // My todo data
            msg: "为什么地球是圆的"
        },
        headers: {
            'Authorization': userStore.userInfo.token
        }
    })
}
// chatGpt()
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="Ai 导航" left-text="返回" left-arrow
            @click-left="onClickLeft" />
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
</style>
