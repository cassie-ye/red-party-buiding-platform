<script setup>
const onClickLeft = () => history.back();
const route = useRoute()
const router = useRouter()
const orderInfo = ref({});
/**
 * 得到页面传参的orderInfo的信息
 */
onMounted(() => {
    const queryOrderInfo = route.query.orderInfo;
    if (queryOrderInfo) {
        try {
            orderInfo.value = JSON.parse(queryOrderInfo);
            console.log(orderInfo.value);
        } catch (e) {
            console.error('Failed to parse orderInfo from query:', e);
        }
    }
});
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="订单详情" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="h-vh w-vw bg-#fff p1rem pt0.5rem">
            <div>
                <p class="mt1rem"><span class="font-bold font-size-0.9rem">订单编号：</span>{{ orderInfo.id }}</p>
                <div class="mt0.5rem flex">
                    <img class="w6rem h6rem rounded-0.5rem " src="/public/red-base/top-bg.jpg" alt="">
                    <div class="w60% h-full pl0.3rem font-size-0.9rem">
                        <p class="shenglue">{{ orderInfo.tripname }}</p>
                        <div class="color-#959595 font-size-0.8rem">
                            <p>预约基地：{{ orderInfo.basename }}</p>
                            <p>预约时间：{{ orderInfo?.startdate?.slice(0, 10) }}</p>
                            <p>预约人：{{ orderInfo.username }}</p>
                            <p>联系电话：{{ orderInfo.phone }}</p>
                        </div>
                    </div>
                    <div class="">
                        <p class="flex items-center color-red-5 font-bold">
                            <span class="">￥</span>
                            <span class="font-size-0.9rem ">{{ orderInfo.price }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full  mt1rem font-size-0.85rem">
                <div class="flex items-center justify-between w-full">
                    <div>实付款</div>
                    <div class="color-#9ea5ab">
                        {{ orderInfo.price }}
                    </div>
                </div>
                <div class="flex mt0.5rem items-center justify-between w-full">
                    <div>订单编号</div>
                    <div class="color-#9ea5ab">
                        {{ orderInfo.id }}
                    </div>
                </div>
                <div class="flex mt0.5rem items-center justify-between w-full">
                    <div>收货信息</div>
                    <div class="color-#9ea5ab">
                        暂无
                    </div>
                </div>
                <div class="flex mt0.5rem items-center justify-between w-full">
                    <div>交易快照</div>
                    <div class="color-#9ea5ab">
                        发生交易争议时，可作为判断依据
                    </div>
                </div>
                <div class="flex mt0.5rem items-center justify-between w-full">
                    <div>创建时间</div>
                    <div class="color-#9ea5ab">
                        {{ orderInfo.gmtpayment.slice(0,10) }}&nbsp;{{ orderInfo.gmtpayment.slice(11,19) }}
                    </div>
                </div>
            </div>
            <!-- footer -->
            <div class="fixed bottom-0 left-0 w-full bg-#fff h3rem flex justify-between items-center
            border-t border-solid border-#f5f5f5 border-t-0.05rem
            pl0.5rem pr0.5rem
            ">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <van-icon class="mr0.3rem" name="chat-o" size="20" />
                        <p class="font-size-0.9rem">客服</p>
                    </div>
                    <div class="flex items-center ml0.8rem">
                        <van-icon class="mr0.3rem" name="more-o" size="20" />
                        <p class="font-size-0.9rem">更多</p>
                    </div>
                </div>
                <div class="color-#fff pl0.8rem pr0.8rem pt0.4rem pb0.4rem rounded-0.5rem bg-red-5 font-size-0.8rem">
                    再来一单
                </div>
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

.shenglue {
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>
