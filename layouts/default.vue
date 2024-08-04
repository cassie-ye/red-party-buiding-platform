<template>
    <main>
        <!-- <NuxtPage /> -->
        <slot></slot>
        <Footer v-if="!$route.meta.hideFooter" />
    </main>
</template>
