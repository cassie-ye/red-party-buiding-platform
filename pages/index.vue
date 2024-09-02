<script setup>
const onClickLeft = () => history.back();
const router = useRouter()
/**
 * 进入研学人员登录模块
 */
const gotoStudyParticipantsLogin = () => {
    router.push('/studyParticipantsLogin')
}

/**
 * 进入基地管理员登录模块
 */
const gotoBaseManagerLogin = () => {
    router.push('/baseManagerLogin')
}
</script>

<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="角色选择" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="relative w-full h-85vh bg-#f9f9f9">
            <div class="w-full p1.5rem">
                <p class="font-bold font-size-1.5rem">
                    欢迎来到<br>
                    红色党建研学平台
                </p>
                <p class="mt1.2rem">请选择您的角色，方便您进行操作使用</p>
                <div @click="gotoStudyParticipantsLogin()" class="mt0.8rem flex items-center p1.35rem rounded-0.3rem bg-red-100">
                    <div class="w2.5rem h2.8rem mr1.5rem flex justify-center items-center bg-red-5 rounded-0.3rem">
                        <i class="iconfont icon-yonghu1 font-size-2rem color-#fff"></i>
                    </div>
                    <p class="font-bold">我是研学人员</p>
                </div>
                <div @click="gotoBaseManagerLogin()" class="relative mt0.8rem flex items-center p1.35rem rounded-0.3rem bg-blue-100">
                    <div class="w2.5rem h2.8rem mr1.5rem flex justify-center items-center bg-blue-5 rounded-0.3rem">
                        <i class="iconfont icon-guanliyuan font-size-2rem color-#fff"></i>
                    </div>
                    <p class="font-bold">我是基地管理员</p>
                    <p
                        class="font-size-0.6rem absolute right-0.5rem top-0.5rem bg-blue-5 px0.5rem py0.1rem rounded-0.3rem color-#fff">
                        基地入驻</p>
                </div>
            </div>
            <img class="absolute bottom-0 left-0 w-full" src="/public/characterSelection/1.jpg" alt="">
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
</style>
