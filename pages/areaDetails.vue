<script setup>
const onClickLeft = () => history.back();
const onClickIcon = () => showToast('点击图标');
const onClickButton = () => showToast('点击按钮');
</script>
<template>
    <div class="relative mb10rem ">
        <van-nav-bar :fixed="true" :placeholder="true" title="杭州革命烈士纪念馆" left-text="返回" left-arrow
        @click-left="onClickLeft" />
        <van-swipe class="my-swipe bg-pink h15rem" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img class="w-full h-full" src="https://youimg1.c-ctrip.com/target/10080i0000009nk625854.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="w-full h-full"
                    src="https://img.cjyun.org/a/10194/202108/3a888c968c54a23b7d831629b724c39b.jpeg" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="pl1rem pr1rem bg-#fff absolute top-15rem w-full rounded-t-1.5rem pb4rem">
            <p class="mt0.8rem font-size-1.2rem font-bold color-red-6">杭州革命烈士纪念馆</p>
            <div class="font-size-0.8rem pl0.2rem pr0.2rem flex">
                <i class="mt0.2rem iconfont icon-didian01 color-red-6 font-size-1rem mr0.3rem"></i>
                <p class="mt0.35rem ">浙江省宁波市余姚市四明山镇四明山国家森林公园</p>
            </div>
            <div class="">
                <!-- 开放信息 -->
                <div>
                    <div class="flex mt1rem items-center">
                        <i class="iconfont icon-kaifangshijian color-red-6 mr0.5rem"></i>
                        <p class="font-bold">开放信息</p>
                    </div>
                    <p class="mt0.2rem font-size-0.8rem">
                        本馆全年免费对外开放。 场馆开放时间：周二至周日 9:00 —— 16:30 （16:00停止入馆）
                        每周一闭馆进行设施维护，国家法定节假日除外。
                    </p>
                </div>
                <!-- 互动体验 -->
                <div>
                    <div class="flex mt1rem items-center">
                        <i class="iconfont icon-kaifangshijian color-red-6 mr0.5rem"></i>
                        <p class="font-bold">互动体验</p>
                    </div>
                    <p class="mt0.2rem font-size-0.8rem color-red-6 font-bold">
                        沙画英烈、红色家书、诗文诵读等
                    </p>
                    <img class="mt0.5rem w-full" src="https://www.zjgmls.net/Content/image/sec_bg07.jpg" alt="">
                </div>
                <!-- 服务项目 -->
                <div>
                    <div class="flex mt1rem items-center">
                        <i class="iconfont icon-kaifangshijian color-red-6 mr0.5rem"></i>
                        <p class="font-bold">服务项目</p>
                    </div>
                    <div>
                        <p class="font-size-0.9rem font-bold p0.2rem">(1) 讲解服务</p>
                        <p class="font-size-0.8rem">
                            为10人以上团队提供免费人工讲解，请团队负责人直接到服务中心办理讲解手续。如需租用自助语音导览设备也请到服务中心办理相关手续。服务时间：上午9：00-11：00
                            下午13：30-16：00
                        </p>
                    </div>
                    <div>
                        <p class="font-size-0.9rem font-bold p0.2rem">(2) 公祭服务</p>
                        <p class="font-size-0.8rem">
                            免费提供公祭活动用花篮、音响。
                        </p>
                    </div>
                </div>
                <!-- 参观须知 -->
                <div>
                    <div class="flex mt1rem items-center">
                        <i class="iconfont icon-canguanxuzhi font-size-1.2rem color-red-6 mr0.5rem"></i>
                        <p class="font-bold">参观须知</p>
                    </div>
                    <p class="mt0.2rem font-size-0.8rem">
                        一、本馆基本陈列实行免费参观。<br>
                        二、入馆前请将随身包裹寄存，贵重物品自行保管。自觉接受安检，严禁将易燃易爆、管制械具、液状物体等危险品带入馆内。<br>
                        三、展厅内请勿摄像，拍照请勿使用闪光灯，所拍照片禁止用于商业或出版。<br>
                        四、自觉爱护公共设施，请勿触摸展品，请勿爬靠或挤压玻璃展柜。自觉保持环境卫生，请勿丢弃杂物，请勿在馆内吸烟。<br>
                        五、自觉遵守参观秩序，服从馆内工作人员现场引导。<br>
                    </p>
                </div>
            </div>
        </div>
        <van-action-bar>
            <van-action-bar-icon icon="like-o" text="客服" @click="onClickIcon" />
            <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-action-bar-button type="danger" text="立即预约" @click="onClickButton" />
        </van-action-bar>
    </div>
</template>
<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 1.25rem;
    text-align: center;
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
</style>
