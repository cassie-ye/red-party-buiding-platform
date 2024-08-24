export const useSearchRedBaseListStore = defineStore('searchRedBase', () => {
    const searchRedBaseList = ref([])
    return { searchRedBaseList }
}, {
    persist: true
})
