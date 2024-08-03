<script setup>
// 接收页面跳转传递过来的参数
const route = useRoute().query.citem
</script>
<template>
    <div>
        {{ route }}
    </div>
</template>
