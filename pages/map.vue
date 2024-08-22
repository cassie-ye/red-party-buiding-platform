<script setup>
import { onMounted } from "vue";
onMounted(() => {
    loadMapScript(); // 加载百度地图资源
});
const currentLocation = ref({})
/**
 * 加载百度地图
 * @param lng
 * @param lat
 */
const loadMap = (lng, lat) => {
    let Bmap = window.BMap; // 注意要带window，不然会报错（注意官方api,会有改动，之前是Bmap,后面3.0版本改为了BMap,最好查文档或者打印一下window）
    var map = new Bmap.Map("allmap"); // allmap必须和dom上的id一直
    map.centerAndZoom(
        new Bmap.Point(lng, lat),
        15
    ); // 初始化地图,设置中心点坐标和地图级别
    // map.setCurrentCity("成都");
    map.enableScrollWheelZoom(true);
    map.enableDragging(true);
    addCurrentMarker()
    console.log(window.BMap)
};
/**
 * 获取当前位置
 */
const getLocation = () => {
    //当前位置
    let Bmap = window.BMap; // 注意要带window，不然会报错（注意官方api,会有改动，之前是Bmap,后面3.0版本改为了BMap,最好查文档或者打印一下window）
    var geolocation = new Bmap.Geolocation();
    // 开启SDK辅助定位
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition((res) => {
        console.log(res)
        // 纬度
        currentLocation.value.lat = res.latitude
        // 经度
        currentLocation.value.lng = res.longitude
        console.log(currentLocation.value)
        loadMap(currentLocation.value.lng, currentLocation.value.lat)
        // this.currentPosition.lat = res.latitude
        // this.currentPosition.lng = res.longitude
        // this.loadMap(res.latitude, res.longitude)
    })
}

/**
 * 添加当前位置的marker标注
 */
const addCurrentMarker = () => {
    let Bmap = window.BMap; // 注意要带window，不然会报错（注意官方api,会有改动，之前是Bmap,后面3.0版本改为了BMap,最好查文档或者打印一下window）
    var point = new Bmap.Point(currentLocation.value.lng, currentLocation.value.lat);
    var marker = new Bmap.Marker(point);        // 创建标注
    Bmap.addOverlay(marker);
}

/**
 * 引入百度地图的相关资源
 */
const loadMapScript = () => {
    // 此处在所需页面引入资源就是，不用再public/index.html中引入
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.className = "loadmap"; // 给script一个类名
    script.src =
        "https://api.map.baidu.com/getscript?v=3.0&ak=xNceWXpU5pTmlF8IE21JknGmWURGLcdY";
    // 此处需要注意：申请ak时，一定要应用类别一定要选浏览器端，不能选服务端，不然地图会报ak无效
    script.onload = () => {
        // 使用script.onload，待资源加载完成，再初始化地图
        getLocation();
    };
    let loadmap = document.getElementsByClassName("loadmap");
    if (loadmap) {
        // 每次append script之前判断一下，避免重复添加script资源标签
        for (var i = 0; i < loadmap.length; i++) {
            document.body.removeChild(loadmap[i]);
        }
    }
    document.body.appendChild(script);
};
</script>
<!-- vue3引入百度api -->
<template>
    <div>
        <div class="w-vw h-vh" id="allmap"></div>
    </div>
</template>
<style scoped>
/* 去除水印 */
::v-deep(.BMap_cpyCtrl) {
    display: none;
}

::v-deep(.anchorBL) {
    display: none !important;
}

/* #allmap {
    width: 80%;
    height: 60%;
    margin: auto;
} */
/* // 注意给dom宽高，不然地图不出来 */

/* html {
    height: 100%
}

body {
    height: 100%;
    margin: 0px;
    padding: 0px
} */
</style>
