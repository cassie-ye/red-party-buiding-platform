<script setup>
const LoadBaiduMapScript = () => {
    const AK = 'xNceWXpU5pTmlF8IE21JknGmWURGLcdY'
    const BMap_URL = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${AK}&callback=init`
    return new Promise((resolve, reject) => {
        if (typeof BMapGL !== "undefined") {
            resolve(BMapGL);
            return true;
        }
        window.init = function () {
            console.log("百度地图脚本初始化成功...");
            resolve(BMapGL);
        };
        let scriptNode = document.createElement("script");
        scriptNode.setAttribute("type", "text/javascript");
        scriptNode.setAttribute("src", BMap_URL);
        document.body.appendChild(scriptNode);
    })
}
const mapObj = ref(null)
const currentPosition = ref({})
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
const infoWindow = ref(null)
let currentInfoWindow = null;


function getLocation() {
    var geolocation = new BMapGL.Geolocation();
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition((res) => {
        currentPosition.value.lat = res.latitude
        currentPosition.value.lng = res.longitude
        initMap(res.longitude, res.latitude)
    })

}

function initMap(longitude, latitude) {
    mapObj.value = new BMapGL.Map("container");
    var myIcon = new BMapGL.Icon("/map/marker.png", new BMapGL.Size(20, 27.5), {});
    var point = new BMapGL.Point(longitude, latitude);
    mapObj.value.centerAndZoom(point, 15);
    mapObj.value.enableScrollWheelZoom(true);
    let marker = new BMapGL.Marker(point, { icon: myIcon })
    mapObj.value.addOverlay(marker)
    addRedBaseListMarkers()
}

function addRedBaseListMarkers() {
    redBaseInfoList.value.map((item) => {
        var point = new BMapGL.Point(item.lat, item.lng);
        var marker = new BMapGL.Marker(point);
        mapObj.value.addOverlay(marker);
        var infoWindowDom = document.getElementById("infoWindow");
        var opts = {
            width: 10,
            height: 80,
            title: "红色基地"
        }
        opts.title = item.name
        var infoWindow = new BMapGL.InfoWindow(infoWindowDom, opts);
        marker.addEventListener('click', () => {
            if (currentInfoWindow) {
                mapObj.value.closeInfoWindow();
            }
            mapObj.value.openInfoWindow(infoWindow, point);
            currentInfoWindow = infoWindow;

        });
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
    addCluster();
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

如何加上点聚合
