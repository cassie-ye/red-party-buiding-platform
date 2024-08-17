<script setup>
const router = useRouter()
const onClickLeft = () => history.back();
const currentSelectedServiceIndex = ref(0)
const gotoSecureCashRegister = () => {
    router.push('/secureCashRegister')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="选服务" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="top-blue-linear-bg w-full p1rem pt3rem">
            <div class="bg-#fff p1rem rounded-1rem">
                <div class="flex justify-between">
                    <div class="font-size-1.2rem">
                        <p>小浣熊温馨提醒</p>
                        <p>升级如下保障服务
                            <span class="color-#01D3E2">出行更安全</span>
                        </p>
                    </div>
                    <img class="w4rem" src="/public/traffic/xiong.png" alt="">
                </div>
                <div class="justify-between mt1.5rem flex ">
                    <div class="rounded-0.5rem bg-#F7F8FA p0.3rem  flex flex-col justify-center items-center pt0.5rem pb0.5rem w6.8remborder-solid border-0.08rem border-#F7F8FA"
                        @click="currentSelectedServiceIndex = 0"
                        :class="currentSelectedServiceIndex === 0 ? 'border-solid border-0.08rem border-blue-4' : ''">
                        <i class="iconfont icon-anquanbaozhang font-size-2.1rem color-#909090"></i>
                        <p class="font-bold ">缺乏出行保险</p>
                        <p class="font-size-0.9rem color-#909090">自行承担</p>
                        <div class="mt0.5rem w1.4rem h1.4rem  border-solid border-0.08rem border-#DEDEDE rounded-50%"
                            :class="currentSelectedServiceIndex === 0 ? 'bg-blue-4 border-solid border-0.08rem border-blue-4 color-#fff flex justify-center items-center' : ''">
                            <van-icon v-if="currentSelectedServiceIndex === 0" name="success" />
                        </div>
                    </div>
                    <div class="rounded-0.5rem bg-#F7F8FA p0.3rem flex flex-col justify-center items-center pt0.5rem pb0.5rem w6.8rem
                        border-solid border-0.08rem border-#F7F8FA
                        " @click="currentSelectedServiceIndex = 1"
                        :class="currentSelectedServiceIndex === 1 ? 'border-solid border-0.08rem border-blue-4' : ''">
                        <i class="iconfont icon-anquanbaozhang font-size-2.1rem color-green"></i>
                        <p class="font-bold ">航空意外险</p>
                        <p class="font-size-0.9rem color-#909090">
                            <span class="font-bold color-orange-5">￥</span>
                            <span class="font-bold color-orange-5">39</span>
                            <span>✖1</span>
                        </p>
                        <div class="mt0.5rem w1.4rem h1.4rem  border-solid border-0.08rem border-#DEDEDE rounded-50%"
                            :class="currentSelectedServiceIndex === 1 ? 'bg-blue-4 border-solid border-0.08rem border-blue-4 color-#fff flex justify-center items-center' : ''">
                            <van-icon v-if="currentSelectedServiceIndex === 1" name="success" />
                        </div>
                    </div>
                    <div class="rounded-0.5rem bg-#F7F8FA p0.3rem flex flex-col justify-center items-center pt0.5rem pb0.5rem w6.8rem
                        border-solid border-0.08rem border-#F7F8FA
                        " @click="currentSelectedServiceIndex = 2"
                        :class="currentSelectedServiceIndex === 2 ? 'border-solid border-0.08rem border-blue-4' : ''">
                        <i class="iconfont icon-anquanbaozhang font-size-2.1rem color-orange-50"></i>
                        <p class="font-bold ">航意航延险</p>
                        <p class="font-size-0.9rem color-#909090">
                            <span class="font-bold color-orange-5">￥</span>
                            <span class="font-bold color-orange-5">50</span>
                            <span>/份</span>
                        </p>
                        <div class="mt0.5rem w1.4rem h1.4rem  border-solid border-0.08rem border-#DEDEDE rounded-50%"
                            :class="currentSelectedServiceIndex === 2 ? 'bg-blue-4 border-solid border-0.08rem border-blue-4 color-#fff flex justify-center items-center' : ''">
                            <van-icon v-if="currentSelectedServiceIndex === 2" name="success" />
                        </div>
                    </div>
                </div>
                <div class="mt1rem">
                    <div class="flex items-center">
                        航空意外险
                        <van-icon name="warning-o" />
                    </div>
                    <div class="flex items-center mt0.3rem">
                        <van-icon name="success" color="green" class="mr0.5rem" />
                        <p>
                            航空意外伤害保障
                            <span class="color-green font-bold">
                                ￥500万
                            </span>
                        </p>
                    </div>
                    <div class="flex items-center mt0.3rem">
                        <van-icon name="success" color="green" class="mr0.5rem" />
                        <p>
                            行李物品损失保障
                            <span class="color-green font-bold">
                                ￥2000
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="font-size-0.9rem mt1rem">
                您添加了[航空意外险]，点击下一步表示已确认投被保人信息正确，已阅读并同意
                <span class="color-#01D3E2">保险条款、重要提示、投保须知、免费声明书、个人信息授权声明</span>
                等其他内容
            </div>
            <div @click="gotoSecureCashRegister()" class="border-solid border-0.08rem border-blue flex justify-center items-center w-86% ml7% mt1rem h2.8rem color-#fff bg-blue rounded-1.5rem">
                添加保障，去支付
            </div>
            <div class="border-solid border-0.08rem border-blue flex justify-center items-center w-86% ml7% mt1rem h2.8rem color-blue bg-#fff rounded-1.5rem">
                不添加，去支付
            </div>
        </div>
        <van-action-bar :placeholder="true" class="pl1rem pr1rem flex justify-between">
            <div class="w10rem h-full flex justify-start items-center">
                <div class="ml0.5rem pl0.5rem color-orange-5 font-bold">
                    <span>￥</span>
                    <span class="font-size-1.8rem">796</span>
                </div>
            </div>
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

:deep(.van-action-bar) {
    height: 4rem;
}

.top-blue-linear-bg {
    background: linear-gradient(to bottom,
            #01D3E2 10%,
            #CBF5F7 35%,
            transparent);
}
</style>
