<script setup>
import Stomp from 'stompjs';
import SockJS from "sockjs-client/dist/sockjs.min.js";
import { updateUserInfoAPI,getUserInfoAPI } from "../utils/apis/user.ts"
import { useUserStore } from '../store/user.js'
const router = useRouter()
const token = useUserStore().userInfo.token
// const userInfo = useUserStore().userInfo.infoObj
const onClickLeft = () => history.back();
const name = ref('')
const compony = ref('')
const position = ref('')
const phoneNumber = ref('')
const idCardNumber = ref('')
const email = ref('')
const editUserInfoObj = ref({
    "createTime": "",
    "department": "",
    "email": "",
    "id": 0,
    "idcard": "",
    "name": "",
    "position": "",
    "uid": 0,
    "username": ""
})

let userInfo = null
const getUserInfo = async () => {
    const res = await getUserInfoAPI()
    userInfo = res
}

await getUserInfo()

name.value = userInfo.name
compony.value = userInfo.department
position.value = userInfo.position
phoneNumber.value = userInfo.username
idCardNumber.value = userInfo.idcard
email.value = userInfo.email

const show = ref(true)

/**
 * 调接口修改用户信息
 * @param obj
 */
const updateUserInfo = async (obj) => {
    const res = await updateUserInfoAPI(obj)
    console.log(res)
    if(res){
        showSuccessToast('资料上传成功，等待管理员审核');
        setTimeout(() => {
                router.push('/my')
            }, 3000)
    }
}

// const BASE_URL = "http://192.168.0.111:10087";
// const BASE_URL = "http://10.10.12.170:10087";
const BASE_URL = "http://192.168.0.110:10087";
// const BASE_URL = "http://192.168.43.108:10087";
const stompClient = Stomp.over(new SockJS(BASE_URL + '/ws/ep'));
console.log(stompClient)
let authToken = token;
stompClient.connect({ 'Auth-Token': authToken }, success => {
    stompClient.subscribe('/user/queue/chat', message => {
        console.log('listen-----');
        const result = JSON.parse(message.body)
        console.log(result);
        const showNotify = () => {
            show.value = true;
            setTimeout(() => {
                show.value = false;
            }, 5000);
        };
        showNotify()
    })
}, error => {
    console.log("失败")
});

/**
 * 点击保存按钮将编辑资料的内容提交给管理员审核
 */
const saveEditContent = () => {
    editUserInfoObj.value.department = compony.value
    editUserInfoObj.value.email = email.value
    editUserInfoObj.value.idcard = idCardNumber.value
    editUserInfoObj.value.name = name.value
    editUserInfoObj.value.position = position.value
    editUserInfoObj.value.username = phoneNumber.value
    updateUserInfo(editUserInfoObj.value)
}
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
            <div @click="saveEditContent()"
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

:deep(.van-notify) {
    background-color: #fff;
    color: #000;
    height: 4rem;
    border-radius: 0.5rem;
    margin-left: 3.5%;
    width: 93%;
    margin-top: 1.5rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 0;
}
</style>
