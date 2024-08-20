<script setup>
import { useSearchRedBaseListStore } from '../store/searchRedBase.js';
const onClickLeft = () => history.back();
const searchRedBaseListStore = useSearchRedBaseListStore();
const isShowSearchPannel = ref(false)
const searchValue = ref('')
const inputContent = (e) => {
    console.log(e)
    if (e.length !== 0) {
        isShowSearchPannel.value = true
    } else {
        isShowSearchPannel.value = false
    }
}
</script>
<template>
    <div class=" relative">
        <van-nav-bar :fixed="true" :placeholder="true" title="搜索基地" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词" @search="onSearch"
            @update:model-value="inputContent">
            <template #action>
                <div @click="onClickButton">搜索</div>
            </template>

        </van-search>
        <div v-show="isShowSearchPannel"
            class="w78% bg-#fff fixed z-999 left-1.8rem top-5.8rem rounded-0.2rem shadow-xl">
            <div v-for="item in 10" :key="item"
                class="w-full h2.3rem  border-solid border-b-0.05rem border-l-0.05rem border-r-0.05rem border-#F0F0F0 flex items-center pl1rem font-size-0.9rem">
                sdfjkdsfuh
            </div>
        </div>
        <div class="pl1rem pr1rem">
            <div class="flex justify-between items-center mt1rem">
                <p>历史记录</p>
                <van-icon name="delete-o" size="20" />
            </div>
            <div class="">
                <van-tag plain type="primary" size="large" class="mr0.8rem mt1rem">标签</van-tag>
                <van-tag plain type="primary" size="large" class="mr0.8rem mt1rem">标签标签标签标签标签</van-tag>
                <van-tag plain type="primary" size="large" class="mr0.8rem mt1rem">标签</van-tag>
                <van-tag plain type="primary" size="large" class="mr0.8rem mt1rem">标签</van-tag>
                <van-tag plain type="primary" size="large" class="mr0.8rem mt1rem">标签</van-tag>
                <van-tag plain type="primary" size="large" class="mr0.8rem mt1rem">标签</van-tag>
            </div>
        </div>
    </div>
</template>
<style scoped>
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
