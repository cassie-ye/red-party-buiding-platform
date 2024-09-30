<script setup>
const router = useRouter();
const onClickLeft = () => history.back();
const showConfirmPassageInfoFlag = ref(false);

const gotoTrafficQuery = () => {
    router.push('/trafficQuery')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="添加乘机人" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div>
            <div class="w90% ml5% bg-#fff flex justify-center items-center h3rem rounded-0.5rem mt1rem">
                <i class="iconfont icon-paizhao font-size-1.5rem color-blue mr1rem"></i>
                <p>拍证件照新增</p>
            </div>
            <van-notice-bar class="mt1rem" left-icon="volume-o" text="请准确填写乘机人信息，否则会影响乘机优惠推荐和出行安排。" />
        </div>
        <div class="mt0.5rem">
            <van-cell-group inset>
                <van-field label="证件类型" model-value="身份证" readonly />
                <van-field v-model="name" type="text" label="姓名" placeholder="请输入姓名" />
                <van-field v-model="idCard" type="number" label="证件号码" placeholder="请输入证件号码" />
                <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" />
            </van-cell-group>
        </div>
        <div class="mt1rem mb2rem w90% ml5% rounded-1.5rem flex justify-center items-center font-size-1.2rem color-#fff h2.5rem bg-blue"
            @click="showConfirmPassageInfoFlag = true">
            保存</div>
        <p class=" font-size-0.8rem ml1.5rem color-blue">
            儿童/婴儿购票说明
            <i class="iconfont icon-zhuyi"></i>
        </p>
        <p class="font-size-0.9rem ml1.5rem mt0.5rem">点击保存表示您已阅读并同意以下内容</p>
        <p class="font-size-0.9rem ml1.5rem mr1.5rem mt0.5rem color-#9F9F9F">
            请您根据航空公司要求，购买机票需提交乘机人身份证件信息，并在乘机时出具对应身份证件用于验证，请确保录入信息真实有效。红色党建研学平台将通过加密等方式保护您录入的身份证件信息，且在具体定票过程中授权提供给您提供服务的产品供应商、承运人、机票分销系统服务商。
        </p>
        <van-dialog v-model:show="showConfirmPassageInfoFlag" title="乘机人信息确认" show-cancel-button
            @confirm="gotoTrafficQuery">
            <p class="pl2rem pr2rem mt1rem">
                <span class="color-orange">
                    *姓名、证件号错误将影响登记，
                </span>
                请您仔细核对，确保信息与乘机人证件一致
            </p>
            <div class="pl2rem pr2rem mt1rem mb2rem">
                <p class="mb0.5rem">
                    <span class="mr2rem">姓名</span>
                    <span class="font-bold">Cassie</span>
                </p>
                <p>
                    <span class="mr1rem">身份证</span>
                    <span class="font-bold">330681200307876545</span>
                </p>
            </div>
        </van-dialog>
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
