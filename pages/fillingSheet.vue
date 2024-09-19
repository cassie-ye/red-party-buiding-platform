<script setup>
const router = useRouter()
const onClickLeft = () => history.back();
/**
 * 选择多个乘机人
 */
const checked = ref([]);
const checkboxRefs = ref([]);
const toggle = (index) => {
    checkboxRefs.value[index].toggle();
};

onBeforeUpdate(() => {
    checkboxRefs.value = [];
});

const list = ref(['a', 'b'])

const selectPassages = (value) => {
    // 选择的值 Proxy(Array) {0: 'a', 1: 'b'}
    console.log(checked.value)
}

const gotoAddPassengers = () => {
    router.push('/addPassengers')
}

const tel = ref('13567529804')

const gotoChooseService = () => {
    router.push('/chooseService')
}
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="填单页" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="top-blue-linear-bg w-full p1rem pt3rem">
            <div class="bg-#fff p1rem rounded-1rem">
                <div class="flex items-center ">
                    <div
                        class="pl0.5rem pr0.5rem pt0.1rem pb0.1rem bg-#01D3E2 font-size-0.8rem rounded-0.2rem color-#fff mr0.5rem">
                        直飞</div>
                    <div class="font-bold">
                        <span class="mr0.3rem">北京</span>
                        <span>
                            <i class="iconfont icon-daoda mr0.3rem"></i>
                        </span>
                        <span class="mr0.6rem">上海</span>
                        <span class="mr0.6rem">09-19</span>
                        <span class="mr0.6rem">周二</span>
                        <span>14:30</span>
                    </div>
                </div>
                <div class="mt0.3rem font-size-0.9rem">
                    <span class="mr0.6rem">经济舱</span>
                    成人票￥569 + 基建燃油￥100
                </div>
                <div class="color-orange-5 mt0.3rem font-size-0.9rem">
                    <span class="mr0.6rem">
                        航班起飞前1小时完成出票
                    </span>
                    <span>
                        退改￥342起
                    </span>
                </div>
                <div class="mt0.3rem font-size-0.9rem">
                    免费托运23KG
                </div>
                <div class="bg-#FAF0E3 pl0.8rem pr0.8rem pt0.6rem pb0.6rem rounded-0.5rem mt0.3rem">
                    <div class="flex items-center color-orange-6 font-bold font-size-1.1rem">
                        <p class="mr0.2rem">选购升级服务，行程变动也省钱</p>
                        <van-icon name="info-o" />
                    </div>
                    <div class="flex justify-between mt0.5rem">
                        <div class="bg-#fff rounded-0.5rem pl0.5rem pr0.5rem pt0.6rem pb0.6rem">
                            <div class="flex justify-between">
                                <span class="font-bold">免改期费</span>
                                <div>
                                    <span class="color-orange-5 font-size-0.8rem ">
                                        ￥
                                    </span>
                                    <span class="color-orange-5 font-bold">
                                        38
                                    </span>
                                    <span class="font-size-0.9rem color-#909090">
                                        /份
                                    </span>
                                </div>
                            </div>
                            <p class="font-size-0.8rem color-#909090">改期100%免手续费</p>
                        </div>
                        <div class="bg-#fff rounded-0.5rem pl0.5rem pr0.5rem pt0.6rem pb0.6rem">
                            <div class="flex justify-between">
                                <span class="font-bold">买贵反差</span>
                                <div>
                                    <span class="color-orange-5 font-size-0.8rem ">
                                        ￥
                                    </span>
                                    <span class="color-orange-5 font-bold">
                                        38
                                    </span>
                                    <span class="font-size-0.9rem color-#909090">
                                        /份
                                    </span>
                                </div>
                            </div>
                            <p class="font-size-0.8rem color-#909090">机票买贵最高返300</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-#fff p1rem rounded-1rem mt0.5rem">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <p class="font-size-1.1rem mr0.5rem">选择乘机人</p>
                        <p class="font-size-0.8rem color-orange-5">当前价格仅剩3张</p>
                    </div>
                    <div class="flex items-center color-#01D3E2">
                        <van-icon name="friends-o" />
                        <p class="font-size-0.8rem">邀同行</p>
                    </div>
                </div>
                <van-checkbox-group v-model="checked" class=" mt0.8rem" @change="selectPassages()">
                    <van-cell-group inset>
                        <van-cell v-for="(item, index) in list" clickable :key="item" @click="toggle(index)">
                            <template #right-icon>
                                <div class="flex items-center w12rem mr3rem">
                                    <van-icon name="edit" class="mr2rem" />
                                    <div class="flex flex-col justify-end">
                                        <p>王一</p>
                                        <p>330658330205867484</p>
                                    </div>
                                </div>
                                <van-checkbox :name="item" :ref="el => checkboxRefs[index] = el" @click.stop />
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
                <div @click="gotoAddPassengers"
                    class="flex justify-center items-center color-#01D3E2 pt0.5rem pb0.5rem  bg-#D1D1D1 rounded-0.3rem mt0.5rem">
                    <van-icon name="plus" />
                    <p>新增乘机人</p>
                </div>
            </div>
            <div class="bg-#fff p1rem rounded-1rem mt0.5rem">
                <p class="font-size-1.1rem mr0.5rem">联系人信息</p>
                <div class="flex items-center justify-between">
                    <div class="font-size-0.9rem">
                        境内手机
                    </div>
                    <div class="flex items-center">
                        <span class="font-size-0.9rem">+86</span>
                        <van-field v-model="tel" type="tel" />
                    </div>
                    <van-icon name="user" color="#01D3E2" />
                </div>
                <p class="color-#01D3E2 font-size-0.9rem ml6rem">订单信息将发送至此号码</p>
            </div>
            <div class="bg-#FAF0E3 flex items-center p0.5rem rounded-1rem mt0.5rem">
                <i class="iconfont icon-anquanbaozhang color-orange-5 font-size-1.8rem"></i>
                <p class="color-orange-5 font-size-1.2rem font-bold mr1rem">出行保障</p>
                <p class="color-orange font-size-0.9rem">添加保障，家人更安心</p>
            </div>
        </div>
        <van-action-bar :placeholder="true" class="pl1rem pr1rem">
            <div class="w10rem h-full flex justify-start items-center">
                <div class="ml0.5rem pl0.5rem color-#909090">
                    请选择乘机人
                </div>
            </div>
            <van-action-bar-button @click="gotoChooseService()" color="" type="danger" text="下一步" />
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
