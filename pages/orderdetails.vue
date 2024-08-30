<script setup>
const onClickLeft = () => history.back();
const router = useRouter()
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="下单成功" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="h-vh w-vw bg-#fff p1rem">
            <p class="font-size-1.3rem color-red-6 font-bold">付款成功!</p>
            <div>
                <p class="mt1rem"><span class="font-bold font-size-0.9rem">订单编号：</span>202208121111</p>
                <div class="mt0.5rem flex">
                    <img class="w6rem h6rem rounded-0.5rem " src="/public/red-base/top-bg.jpg" alt="">
                    <div class="w60% h-full pl0.3rem font-size-0.9rem">
                        <p class="shenglue">嘉兴南湖--带你领略小船上的故事</p>
                        <div class="color-#959595 font-size-0.8rem">
                            <p>预约基地：{{ "嘉兴南湖" }}</p>
                            <p>预约时间：{{ "2025-08-11" }}</p>
                            <p>预约人：{{ "上午场" }}</p>
                            <p>联系电话：{{ "13568959589" }}</p>
                        </div>
                    </div>
                    <div class="">
                        <p class="flex items-center color-red-5 font-bold">
                            <span class="">￥</span>
                            <span class="font-size-0.9rem ">1486.77</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full  mt1rem font-size-0.85rem">
                <div class="flex items-center justify-between w-full">
                    <div>实付款</div>
                    <div class="color-#9ea5ab">
                        ￥39.9
                    </div>
                </div>
                <div class="flex mt0.5rem items-center justify-between w-full">
                    <div>订单编号</div>
                    <div class="color-#9ea5ab">
                        202208121111
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
                        2024-08-11 12:00:11
                    </div>
                </div>
                <div class="flex mt0.5rem items-center justify-between w-full">
                    <div>创建时间</div>
                    <div class="color-#9ea5ab">
                        2024-08-11 12:00:11
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
