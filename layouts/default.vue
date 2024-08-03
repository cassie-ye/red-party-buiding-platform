<template>
    <main>
        <router-view />
        <Footer v-if="!$route.meta.hideFooter" />
    </main>
</template>
