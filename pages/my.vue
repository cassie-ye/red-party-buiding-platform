<script setup>
import { useUserStore } from '../store/user.js'

definePageMeta({
    layout: 'with-tabbar'
})

const router = useRouter()
/**
 * 跳转到编辑个人信息页面
 */
const gotoEditUserInfo = () => {
    router.push('/editUserInfo')
}

/**
 * 跳转到我的订单页面
 */
const gotoMyOrder = () => {
    router.push('/myOrder')
}


const userStore = useUserStore()
const logOut = () => {
    userStore.userInfo = {}
    // 清除localStorage
    localStorage.removeItem('userInfo')
    router.push('/')
}

const gotoPersonalReport = () => {
    router.push('/personalReport')
}

const show = ref(false)
onMounted(() => {
bvnhgpahjsdjf
})
</script>
<template>
    <div class="bg-#EFEEF3 w-vw h-vh pl1rem pr1rem">
        <div class="relative bg-#FCFCFC  w-full p0.8rem pr1rem pl1rem mt2rem rounded-0.5rem">
            <img class="absolute w4.5rem h4.5rem rounded-0.5rem top-[-1.3rem] left-1.5rem border-solid border-0.15rem border-#fff"
                src="/public/red-base/top-bg.jpg" alt="">
            <div class="w71% ml29% flex items-center justify-between ">
                <p class="font-bold font-size-1.3rem">Cassie燁</p>
                <div class="flex items-center">
                    <van-icon class="shadow-2xl mr1rem" name="qr" size="18" color="#B9BABC" />
                    <div @click="gotoEditUserInfo" class="flex items-center">
                        <van-icon class="shadow-2xl" name="edit" size="18" color="#B9BABC" />
                        <p class="color-#B9BABC font-size-0.9rem">编辑资料</p>
                    </div>
                </div>
            </div>
            <div class="color-#A5A5A5 flex items-center mt2rem">
                <p>宁波市阿拉阿拉事业单位</p>
                <van-icon name="arrow" color="#A5A5A5" />
            </div>
            <div class="flex items-center mt0.2rem">
                <div class="flex items-center mr0.8rem">
                    <i class="iconfont icon-gaojirenzheng mr0.2rem color-#047EF9"></i>
                    <p class="font-size-0.9rem">高级认证</p>
                </div>
                <div class="flex items-center">
                    <i class="iconfont icon-zhuanshubanxianxing mr0.2rem color-#6488F1"></i>
                    <p class="font-size-0.9rem">专属版</p>
                </div>
            </div>
            <div class="w-full h0.05rem bg-#EDEDED mt0.6rem mb0.6rem"></div>
            <div class="flex items-center color-#A5A5A5 font-size-0.9rem">
                <img class="w1.4rem mr0.2rem" src="/public/my/fighting.png" alt="">
                <p>奋斗中</p>
            </div>
        </div>
        <div class=" bg-#FCFCFC flex items-center justify-between w-full p0.8rem pr1rem pl1rem mt0.8rem rounded-0.5rem">
            <div class="flex items-center justify-center rounded-0.5rem w40%">
                <i class="iconfont icon-haoyouliebiao font-size-1.6rem mr0.3rem"></i>
                <span class="font-size-0.9rem mr0.2rem">好友列表</span>
            </div>
            <div class="w0.05rem h1rem bg-#A5A5A5"></div>
            <div class="flex items-center  w40%">
                <i class="iconfont icon-yanxue font-size-1.5rem mr0.3rem"></i>
                <span class="font-size-0.9rem mr0.2rem">研学打卡</span>
            </div>
        </div>
        <div class=" bg-#FCFCFC flex items-center justify-between w-full p0.8rem pr1rem pl1rem mt0.8rem rounded-0.5rem">
            <div class="flex items-center">
                <i class="iconfont icon-wodeyouhuiquan font-size-1.5rem mr0.3rem"></i>
                <span class="font-size-0.9rem mr0.2rem">优惠券</span>
                <span class="font-bold">0</span>
            </div>
            <div class="w0.05rem h1rem bg-#A5A5A5"></div>
            <div class="flex items-center">
                <i class="iconfont icon-shoucang font-size-1.5rem mr0.3rem"></i>
                <span class="font-size-0.9rem mr0.2rem">浏览收藏</span>
                <span class="font-bold">0</span>
            </div>
            <div class="w0.05rem h1rem bg-#A5A5A5"></div>
            <div class="flex items-center">
                <i class="iconfont icon-jifen font-size-1.5rem mr0.3rem"></i>
                <span class="font-size-0.9rem mr0.2rem">积分</span>
                <span class="font-bold">1000</span>
            </div>
        </div>
        <div class=" bg-#FCFCFC flex items-center justify-between w-full p0.8rem pr1rem pl1rem mt0.8rem rounded-0.5rem">
            <div @click="gotoMyOrder()" class="flex flex-col items-center">
                <i class="iconfont icon-dingdan font-size-1.5rem mr0.3rem"></i>
                <span class="font-size-0.9rem mr0.2rem">我的订单</span>
            </div>
            <div class="w0.05rem h1rem bg-#A5A5A5"></div>
            <div class="flex flex-col items-center">
                <i class="iconfont icon-xiaoxi font-size-1.5rem mr0.3rem"></i>
                <span class="font-size-0.9rem mr0.2rem">我的消息</span>
            </div>
            <div class="w0.05rem h1rem bg-#A5A5A5"></div>
            <div class="flex flex-col items-center">
                <i class="iconfont icon-shouhuodizhiguanli font-size-1.5rem mr0.3rem"></i>
                <span class="font-size-0.9rem mr0.2rem">地址管理</span>
            </div>
            <div class="w0.05rem h1rem bg-#A5A5A5"></div>
            <div @click="gotoPersonalReport()" class="flex flex-col items-center">
                <i class="iconfont icon-tongji font-size-1.5rem mr0.3rem color-red-6"></i>
                <span class="font-size-0.9rem mr0.2rem">个人报告</span>
            </div>
        </div>
        <div @click="logOut()"
            class="w90% ml5% mb2rem mt3rem bg-red-600 h2.5rem rounded-1.5rem color-#fff flex justify-center items-center font-size-0.9rem">
            退出登录
        </div>
        <van-notify v-model:show="show">
            <div class="w-full h-full p-0.5rem flex">
                <div class="w10% h-full  flex justify-center items-center">
                    <div class="w2rem h2rem rounded-50% bg-red-500 flex justify-center items-center">
                        <van-icon name="bell" color="#fff" size="18" />
                    </div>
                </div>
                <div class="w80% h-full flex flex-col justify-center items-start pl0.5rem">
                    <div>系统消息</div>
                    <div class="color-#717171 font-size-0.8rem">您提交的修改资料内容已通过审核并更新</div>
                </div>
                <div class="w10% h-full flex justify-center items-center color-#717171 font-size-0.7rem">
                    <p>刚刚</p>
                </div>
            </div>
        </van-notify>
    </div>
</template>
<style scoped>
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
