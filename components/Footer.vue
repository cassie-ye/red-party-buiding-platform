<template>
    <!-- <div text="xl gray4" m-5 flex="~ gap3" justify-center>
    <NuxtLink i-carbon-campsite to="/" />
    <a i-carbon-logo-github href="https://github.com/antfu/vitesse-nuxt3" target="_blank" />
    <DarkToggle />
  </div> -->
    <van-tabbar>
        <van-tabbar-item icon="home-o">
            <NuxtLink to="/home">首页</NuxtLink>
        </van-tabbar-item>
        <van-tabbar-item icon="search">
            <NuxtLink to="/home">首页</NuxtLink>
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o">
            <NuxtLink to="/my">我的</NuxtLink>
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o">
            <NuxtLink to="/my">我的</NuxtLink>
        </van-tabbar-item>
    </van-tabbar>
</template>
