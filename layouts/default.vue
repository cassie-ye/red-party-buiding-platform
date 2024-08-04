<template>
    <main>
        <NuxtPage />
        <Footer v-if="!$route.meta.hideFooter" />
    </main>
</template>
