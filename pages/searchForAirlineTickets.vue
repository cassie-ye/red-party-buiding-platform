<script setup>
const router = useRouter()
const onClickLeft = () => history.back();

</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="交通查询" left-text="返回" left-arrow
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