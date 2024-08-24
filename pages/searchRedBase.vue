<script setup>
import { useSearchRedBaseListStore } from '../store/searchRedBase.js';
import { getRedBaseByKeywordAPI } from '../utils/apis/redBase.ts'
const onClickLeft = () => history.back();
const router = useRouter();
const searchRedBaseListStore = useSearchRedBaseListStore();
const isShowSearchPannel = ref(false)
const searchValue = ref('')
// 模糊查询的结果数组
const searchResultList = ref([])

/**
 * 封装一个防抖函数
 */
function debounce(func, wait) {
    let timeout;

    return function (...args) {
        // 清除之前设置的定时器
        clearTimeout(timeout);
        // 设置新的定时器
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

/**
 * 调接口根据关键词模糊查询红色基地
 * @param name
 */
const getRedBaseByKeyword = async (name) => {
    const res = await getRedBaseByKeywordAPI(name)
    if (res) {
        searchResultList.value = res
    } else {
        searchResBaseNameList.value = []
    }
}

/**
 * 键盘输入内容时触发
 * @param e
 */
const inputContent = (e) => {
    // console.log(e)
    getRedBaseByKeyword(e)
    if (e.length !== 0) {
        isShowSearchPannel.value = true
    } else {
        isShowSearchPannel.value = false
    }
}

// 创建一个去重函数
function uniqueArray(array) {
    // 使用Set去重
    return [...new Set(array)];
}

/**
 * 使用防抖函数创建一个防抖版本
 * 设置防抖时间为300毫秒
 */
const debouncedInputContent = debounce(inputContent, 500);

/**
 * 点击搜索列表的其中一项Item，跳转到Item详情页
 * 对历史记录数组进行处理
 * @param index
 */
const gotoSearchItem = (index) => {
    const areaId = searchResultList.value[index].id
    router.push({
        path: '/areaDetails',
        query: { areaId }
    });
    const result = searchRedBaseListStore.searchRedBaseList.includes(searchResultList.value[index].name)
    if (result) {
        searchRedBaseListStore.searchRedBaseList.map((item) => {
            if (item == searchResultList.value[index].name) {
                const currentIndex = searchRedBaseListStore.searchRedBaseList.findIndex(item => item == searchResultList.value[index].name)
                searchRedBaseListStore.searchRedBaseList.splice(currentIndex, 1)
            }
        })
    }
    searchRedBaseListStore.searchRedBaseList.unshift(searchResultList.value[index].name)
}

const onSearch = () => { }

/**
 * 删除某个历史记录的标签
 * @param index
 */
const close = (index) => {
    searchRedBaseListStore.searchRedBaseList.splice(index, 1);
}

/**
 * 清空所有历史记录
 */
const clearAllRecordTags = () => {
    showConfirmDialog({
        title: '',
        message:
            '确定要删除所有搜索记录吗？删除后将无法找回！',
    })
        .then(() => {
            // on confirm
            searchRedBaseListStore.searchRedBaseList = []
        })
        .catch(() => {
            // on cancel
        });
}

const gotoSearchHistoryItem = async (index) => {
    const areaName = searchRedBaseListStore.searchRedBaseList[index]
    await getRedBaseByKeyword(areaName)
    const areaId = searchResultList.value[0].id
    router.push({
        path: '/areaDetails',
        query: { areaId }
    });
}
</script>
<template>
    <div class=" relative">
        <van-nav-bar :fixed="true" :placeholder="true" title="搜索基地" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词" @search="onSearch"
            @update:model-value="debouncedInputContent">
            <template #action>
                <div @click="onClickButton">搜索</div>
            </template>
        </van-search>
        <div v-show="isShowSearchPannel"
            class="w78% bg-#fff fixed z-999 left-1.8rem top-5.8rem rounded-0.2rem shadow-xl">
            <div @click="gotoSearchItem(index)" v-for="(item, index) in searchResultList" :key="index"
                class="w-full h2.3rem  border-solid border-b-0.05rem border-l-0.05rem border-r-0.05rem border-#F0F0F0 flex items-center pl1rem font-size-0.9rem">
                {{ item.name }}
            </div>
        </div>
        <div class="pl1rem pr1rem">
            <div class="flex justify-between items-center mt1rem">
                <p>历史记录</p>
                <van-icon @click="clearAllRecordTags()" name="delete-o" size="20" />
            </div>
            <div class="">
                <van-tag @click="gotoSearchHistoryItem(index)"
                    v-for="(item, index) in searchRedBaseListStore.searchRedBaseList" :key="index" plain type="primary"
                    size="large" class="mr0.8rem mt1rem" closeable @close="close(index)">
                    {{ item }}
                </van-tag>
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
