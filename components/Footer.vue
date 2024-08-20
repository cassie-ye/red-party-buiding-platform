<template>
    <!-- <div text="xl gray4" m-5 flex="~ gap3" justify-center>
    <NuxtLink i-carbon-campsite to="/" />
    <a i-carbon-logo-github href="https://github.com/antfu/vitesse-nuxt3" target="_blank" />
    <DarkToggle />
  </div> -->
    <van-tabbar :route="true" :placeholder="true">
        <van-tabbar-item icon="home-o" to="/home">
            首页
        </van-tabbar-item>
        <van-tabbar-item icon="search" to="/hh">
            ee
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/fsdf">
            rr
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/my">
            我的
        </van-tabbar-item>
    </van-tabbar>
</template>

<style scoped>
.van-tabbar__placeholder {
    height: 0px!important;
}
</style>
