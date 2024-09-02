<script setup>
const onClickLeft = () => history.back();
const route = useRoute();
const url = route.query.url;
definePageMeta({
    layout: 'register-login'
})
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="支付宝付款" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <iframe class="h43rem w-full" id="inlineFrameExample" title="Inline Frame Example" :src="url">
        </iframe>
    </div>
</template>
<style scoped>
/* iframe {
  width: ;
  height: 43rem;
} */
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
