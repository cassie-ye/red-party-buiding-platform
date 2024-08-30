<script setup>
const active = ref(0);
const onChange = (index) => {
    console.log(index)
    active.value = index
}
</script>
<template>
    <!-- <div text="xl gray4" m-5 flex="~ gap3" justify-center>
    <NuxtLink i-carbon-campsite to="/" />
    <a i-carbon-logo-github href="https://github.com/antfu/vitesse-nuxt3" target="_blank" />
    <DarkToggle />
  </div> -->
    <van-tabbar :route="true" v-model="active" active-color="#ee0a24" :placeholder="true" @change="onChange">
        <van-tabbar-item icon="home-o" to="/home">
            首页
        </van-tabbar-item>
        <van-tabbar-item icon="fire-o" to="/recommand">
            推荐
        </van-tabbar-item>
        <van-tabbar-item icon="list-switching" to="/messages">
            消息
        </van-tabbar-item>
        <van-tabbar-item icon="contact-o" to="/my">
            我的
        </van-tabbar-item>
    </van-tabbar>
</template>

<style scoped>
.van-tabbar__placeholder {
    height: 0px !important;
}
:deep(.van-tabbar){
    border-top: 0.05rem solid #dcdde1;
}
</style>
