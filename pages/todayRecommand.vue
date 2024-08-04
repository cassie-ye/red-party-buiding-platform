<script setup>
const showCircle = ref(true);
const loadingCircle = ref(""); // 创建一个 ref 引用

function toggleClass() {
    if (showCircle.value) {
        loadingCircle.value.classList.add('animate-class');
    }
}

onMounted(() => {
    setTimeout(() => {
        toggleClass()
    }, 5000);

    setTimeout(() => {
        showCircle.value = false;
    }, 10000);
});


</script>

<template>
    <div class="home">
        <div class="loading-circle w20rem h20rem" v-if="showCircle" ref="loadingCircle">

        </div>
        <!-- 页面的其他元素 -->
        <div class="content">
            <!-- 这里放你的页面内容 -->
            <h1>Welcome to Home Page</h1>
            <p>This is the content of the home page.</p>
        </div>
    </div>
</template>

<style scoped>
.home {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-circle {
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.animate-class{
    animation: moveAndScale 8s ease forwards;
}

.content {
    text-align: center;
    font-size: 24px;
}

@keyframes moveAndScale {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }

    100% {
        transform: translate(-50%, 300%) scale(0.1);
        opacity: 0;
    }
}
</style>
