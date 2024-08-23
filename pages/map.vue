<script setup>
const LoadBaiduMapScript = () => {
    const AK = 'xNceWXpU5pTmlF8IE21JknGmWURGLcdY'
    const BMap_URL = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${AK}&callback=init`
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
    })
}
// 地图对象
const mapObj = ref(null)
// 当前位置经纬度
const currentPosition = ref({})
// 红色基地经纬度数组
const redBaseInfoList = ref([
    {
        lat: 118.309916,
        lng: 35.67553,
        name: '沂蒙红色影视基地',
    },
    {
        lat: 105.05334,
        lng: 35.69291,
        name: "会宁会师"
    }
])
// 初始化信息窗口
const infoWindow = ref(null)
// 变量用于存储当前打开的信息窗口
let currentInfoWindow = null;

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
        initMap(res.longitude, res.latitude)
    })

}

/**
 * 初始化地图
 * @param longitude 经度
 * @param latitude 纬度
 */
function initMap(longitude, latitude) {
    mapObj.value = new BMapGL.Map("container");          // 创建地图实例
    var myIcon = new BMapGL.Icon("/map/marker.png", new BMapGL.Size(20, 27.5), {});
    var point = new BMapGL.Point(longitude, latitude);  // 创建点坐标
    mapObj.value.centerAndZoom(point, 15);
    mapObj.value.enableScrollWheelZoom(true);
    let marker = new BMapGL.Marker(point, { icon: myIcon })
    mapObj.value.addOverlay(marker)
    addRedBaseListMarkers()
}

function addRedBaseListMarkers() {
    redBaseInfoList.value.map((item) => {
        var point = new BMapGL.Point(item.lat, item.lng);
        var marker = new BMapGL.Marker(point);        // 创建标注
        mapObj.value.addOverlay(marker);
        var infoWindowDom = document.getElementById("infoWindow");
        var opts = {
            width: 10,     // 信息窗口宽度
            height: 80,    // 信息窗口高度
            title: "红色基地"  // 信息窗口标题
        }
        opts.title = item.name
        var infoWindow = new BMapGL.InfoWindow(infoWindowDom, opts);  // 创建信息窗口对象
        // 给标记添加点击事件
        marker.addEventListener('click', () => {
            // 关闭当前打开的信息窗口（如果有的话）
            if (currentInfoWindow) {
                mapObj.value.closeInfoWindow();
            }
            // 打开新的信息窗口
            mapObj.value.openInfoWindow(infoWindow, point);
            // 更新当前打开的信息窗口
            currentInfoWindow = infoWindow;
            console.log(currentInfoWindow)

        });
        // 信息窗口的其他事件，例如点击窗口内部
        infoWindow.addEventListener('click', (event) => {
            console.log('信息窗口内部被点击', event);
        });
        infoWindowDom.addEventListener('touchend', infoWindowClick)
    });

}

function infoWindowClick() {
    console.log(currentInfoWindow)
    const lat = currentInfoWindow.latLng.lat;
    const lng = currentInfoWindow.latLng.lng;
    const url = `https://api.map.baidu.com/marker?location=${lat},${lng}&title=目标位置&content=这里是目标位置&output=html`;
    window.open(url);
}

onMounted(async () => {
    await LoadBaiduMapScript()
    getLocation()
})

</script>

<template>
    <div>
        <!-- <div>我是首页哈哈哈哈哈</div> -->
        <div id="container" class="w-vw h-vh"></div>
        <div id="infoWindow" class=" h-80% flex justify-between">
            <img class="h-full w-60%" src="/public/red-base/top-bg.jpg" alt="">
            <div class="h-full w-38% mr2% flex items-center justify-end">
                <i class="iconfont icon-daozhequ color-#0090ff font-size-1.5rem"></i>
                <p class="">到这去</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
