<script setup>
function loadJScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=nSxiPohfziUaCuONe4ViUP2N&callback=initMap'
    // script.src = '//api.map.baidu.com/api?type=webgl&v=1.0&ak=您的密钥&callback=init';
    document.body.appendChild(script);
}

const LoadBaiduMapScript = () => {
    const AK = 'xNceWXpU5pTmlF8IE21JknGmWURGLcdY'
    const BMap_URL = 'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=xNceWXpU5pTmlF8IE21JknGmWURGLcdY&callback=init'
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


function initMap() {
    var map = new BMapGL.Map("container");          // 创建地图实例
    var point = new BMapGL.Point(116.404, 39.915);  // 创建点坐标

    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true); 
    let marker = new BMapGL.Marker(point)
    map.addOverlay(marker)
}

onMounted(async () => {
    await LoadBaiduMapScript()
    initMap()
})

</script>

<template>
    <div>
        <!-- <div>我是首页哈哈哈哈哈</div> -->
        <div id="container" class="w-vw h-vh"></div>
    </div>
</template>

<style scoped></style>
