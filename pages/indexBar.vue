<script setup>
const route = useRouter();
const onClickLeft = () => history.back();
definePageMeta({
    layout: 'hideFooter'
})

const provincesByAlphabet = ref([
    { alphabet: 'A', children: ['安徽省'], num: 0 },
    { alphabet: 'F', children: ['福建省'], num: 5 },
    { alphabet: 'G', children: ['甘肃省', '广东省', '广西壮族自治区', '贵州省'], num: 6 },
    { alphabet: 'H', children: ['海南省', '河北省', '河南省', '黑龙江省', '湖北省', '湖南省'], num: 7 },
    { alphabet: 'J', children: ['江苏省', '江西省', '吉林省'], num: 9 },
    { alphabet: 'L', children: ['辽宁省'], num: 11 },
    { alphabet: 'N', children: ['内蒙古自治区', '宁夏回族自治区'], num: 13 },
    { alphabet: 'Q', children: ['青海省'], num: 16 },
    { alphabet: 'S', children: ['山东省', '山西省', '陕西省', '四川省'], num: 18 },
    { alphabet: 'X', children: ['西藏自治区', '新疆维吾尔自治区'], num: 20 },
    { alphabet: 'Y', children: ['云南省'], num: 21 },
    { alphabet: 'Z', children: ['浙江省'], num: 22 },
]);

const alphaList = ref(['A', 'F', 'G', 'H', 'J', 'L', 'N', 'Q', 'S', 'X', 'Y', 'Z']);

/**
 * 选择城市
 * @param citem
 * @returns
 */
const chooseCity = (citem) => {
    console.log(citem)
    navigateTo({ path: '/provinceVrCloud', query: { citem: citem } })

}
</script>
<template>
    <div>
        <van-sticky>
            <van-nav-bar title="选择VR场馆所在区域" left-text="返回" left-arrow @click-left="onClickLeft" />
        </van-sticky>
        <van-index-bar class="indexBar w-full" :sticky="false" highlight-color="#fb6463" :index-list="alphaList">
            <van-index-anchor v-for="(item, index) in provincesByAlphabet" :key="index" :index="index" class="">
                <span class="indexWord">{{ item.alphabet }}</span>
                <van-cell @click="chooseCity(citem)" v-for="(citem, cindex) in item.children" :key="cindex"
                    :title="citem" />
            </van-index-anchor>
        </van-index-bar>
    </div>
</template>
<style scoped></style>
