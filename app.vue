<script setup lang="ts">
import { appName } from '~/constants'

useHead({
    title: appName,
})
</script>

<template>
    <VitePwaManifest />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <Footer v-if="!$route.meta.hideFooter" />
</template>

<style>
html,
body,
#__nuxt {
    height: 100vh;
    margin: 0;
    padding: 0;
}

html.dark {
    background: #222;
    color: white;
}

/*
    页面跳转的动画
*/
/* .fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */
</style>
