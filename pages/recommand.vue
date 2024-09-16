<script setup>
import { getNotesListByTimeAPI } from "../utils/apis/notes.ts"
definePageMeta({
    layout: 'with-tabbar'
})
// notes List
const notesList = ref([])
const tabTitleList = ref([
    "关注", "发现", "附近"
])
const activeTabIndex = ref(1)
const router = useRouter()
const gotoNotesDetails = () => {
    router.push('/notesDetails')
}

const state = reactive({
    offset: { x: document.body.clientWidth * 300 / 375, y: 504 }
})

const gotoPublishNotes = () => {
    router.push('/publishNotes')
}

const isNotesByTimeListEmpty = ref(true)

/**
 * 根据发布时间远近 获取笔记列表
 * 那个
 */
const getNotesListByTime = async () => {
    const res = await getNotesListByTimeAPI()
    notesList.value = res
    if (notesList.value.length == 0) {
        isNotesByTimeListEmpty.value = true
    } else {
        isNotesByTimeListEmpty.value = false
    }
    console.log(notesList.value.length)
}
getNotesListByTime()
</script>
<template>
    <div>
        <div
            class="fixed left-0 top-0 w-full h3rem flex bg-#fff items-center pl0.5rem pr0.5rem justify-between pt0.5rem pb0.5rem">
            <van-icon name="ellipsis" size="23" />
            <div class="flex h1.5rem pt1rem pb0.7rem items-center w50% justify-between font-size-0.9rem">
                <div v-for="(item, index) in tabTitleList" :key="index"
                    class="border-b-solid border-b-0.13rem pb0.2rem border-#fff" @click="activeTabIndex = index"
                    :class="activeTabIndex === index ? ' border-red-5 font-bold' : ''">
                    {{ item }}
                </div>
            </div>
            <van-icon name="search" size="23" />
        </div>
        <div v-if="activeTabIndex === 1"
            class="w-full pl0.5rem pr0.5rem mt3.5rem mb5rem flex justify-between flex-wrap">
            <div @click="gotoNotesDetails" v-if="!isNotesByTimeListEmpty" class="w49% bg-#fff rounded-0.3rem mb0.5rem"
                v-for="(item, index) in notesList" :key="index">
                <img src="/public/red-base/top-bg.jpg" alt="" class="w-full h10rem rounded-t-0.3rem">
                <div class="flex flex-col pt0.5rem pb1rem">
                    <p class="pt0.2rem font-size-0.9rem pl0.5rem shenglue2">{{ item.title }}</p>
                    <div class="flex justify-between font-size-0.7rem mt0.5rem">
                        <div class="flex items-center w6.5rem ml0.5rem ">
                            <img src="/public/red-base/top-bg.jpg" class="w1.2rem mr0.3rem h1.2rem rounded-50%" alt="">
                            <p class="shenglue">公考搭子给就覅的官方根据地</p>
                        </div>
                        <div class="flex items-center mr0.5rem">
                            <van-icon name="like-o" size="14" class="mr0.2rem" />
                            <span>153</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="w-full flex justify-center">
                <van-empty description="暂无推荐的笔记" />
            </div>
        </div>
        <van-floating-bubble v-model:offset="state.offset" axis="xy" icon="records-o" magnetic="x"
            @click="gotoPublishNotes()" />
    </div>
</template>
<style scoped>
.shenglue {
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.shenglue2 {
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
