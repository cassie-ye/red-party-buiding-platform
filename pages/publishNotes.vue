<script setup>
const onClickLeft = () => history.back();
/**
 * 加载百度地图
 */
const LoadBaiduMapScript = () => {
    const AK = 'xNceWXpU5pTmlF8IE21JknGmWURGLcdY'
    const BMap_URL = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${AK}&callback=init`
    const url = "https://unpkg.com/@bmapgl-plugin/cluster"
    const url2 = "https://mapopen-pub-jsapi.cdn.bcebos.com/static/js/bjpoi.js"
    const url3 = "https://unpkg.com/gcoord/dist/gcoord.global.prod.js"
    return new Promise((resolve, reject) => {
        // 如果已加载直接返回
        if (typeof BMapGL !== "undefined") {
            resolve(BMapGL);
            return true;
        }
        // 百度地图异步加载回调处理
        window.init = function () {
            console.log("百度地图脚本初始化成功...");
            resolve(BMapGL);
        };
        // 插入script脚本
        let scriptNode = document.createElement("script");
        scriptNode.setAttribute("type", "text/javascript");
        scriptNode.setAttribute("src", BMap_URL);
        document.body.appendChild(scriptNode);
        let scriptNode2 = document.createElement("script");
        scriptNode2.setAttribute("src", url);
        document.body.appendChild(scriptNode2);
        let scriptNode3 = document.createElement("script");
        scriptNode3.setAttribute("src", url2);
        document.body.appendChild(scriptNode3);
        let scriptNode4 = document.createElement("script");
        scriptNode4.setAttribute("src", url3);
        document.body.appendChild(scriptNode4);
    })
}
const fileList = ref([]);
const afterRead = (file) => {
    // 此时可以自行将文件上传至服务器
    console.log(file);
};

const titleValue = ref('')
const textarea2 = ref('')

// 地图对象
const mapObj = ref(null)
// 当前位置经纬度
const currentPosition = ref({})
/**
 * 获取当前位置
 */
function getLocation() {
    //当前位置
    var geolocation = new BMapGL.Geolocation();
    // 开启SDK辅助定位
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition((res) => {
        // latitude纬度 longitude经度
        currentPosition.value.lat = res.latitude
        currentPosition.value.lng = res.longitude
        console.log(res)
    })
}

/**
 * 页面挂载
 */
onMounted(async () => {
    await LoadBaiduMapScript()
    getLocation()
})
</script>
<template>
    <div class="h-vh w-vw bg-#fff">
        <van-nav-bar :fixed="true" :placeholder="true" title="发布笔记" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="bg-#fff  pl0.5rem pr0.5rem pb3.4rem overflow-y-auto">
            <van-uploader class="mt1rem" :after-read="afterRead" v-model="fileList" multiple :max-count="5" />
            <el-input class="mt0.5rem" v-model="input" placeholder="添加标题" />
            <el-input class="mt0.5rem" v-model="textarea2" :autosize="{ minRows: 10, maxRows: 100 }" type="textarea"
                placeholder="添加正文" />
            <div class="mt0.5rem pt0.5rem pb0.5rem flex justify-between">
                <div class="flex items-center">
                    <van-icon class="mr0.3rem" name="location-o" size="20" />
                    <span class="font-size-0.9rem">标记地点</span>
                </div>
                <div class="flex items-center">
                    <div
                        class="flex items-center pt0.3rem pb0.3rem pl0.5rem pr0.5rem bg-#f4f4f4 rounded-0.5rem mr0.3rem">
                        <van-icon name="gem" />
                        <p class="font-size-0.8rem">标记位置让更多人看到</p>
                    </div>
                    <van-icon name="arrow" color="#d0d0d0" />
                </div>
            </div>
            <div class="w-full pt0.5rem pb0.5rem flex justify-between">
                <div class="flex items-center">
                    <i class="iconfont icon-gongkaikejian font-size-1.3rem mr0.3rem"></i>
                    <span class="font-size-0.9rem">公开可见</span>
                </div>
                <div class="flex items-center">
                    <van-icon name="arrow" color="#d0d0d0" />
                </div>
            </div>
        </div>
        <div class="fixed bg-#fff left-0 bottom-0 w-full h3.4rem flex justify-end items-center
        border-solid border-t border-#f9f9f9
        ">
            <div
                class="w50% h70% rounded-1rem bg-#fe2542 mr1rem flex justify-center items-center color-#fff font-size-0.9rem">
                发布笔记
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

:deep(.van-field) {
    /* background-color: blue; */
    border-bottom: 0.05rem solid #fcfcfc;
    padding-bottom: 0.5rem;
    padding-left: 0rem;
    padding-right: 0rem;
}

:deep(.van-field__control) {
    height: 16rem !important;
}

:deep(.el-textarea__inner:focus) {
    box-shadow: 0 0 0 1px #fe2542 inset
}

:deep(.el-input) {
    --el-input-focus-border-color: #fe2542
}
</style>
