<script setup>
import { getAllRedBaseInfoAPI } from '../utils/apis/redBase.ts'
import Cluster from '@bmapgl-plugin/cluster';
import { useUserStore } from "../store/user.js"
const onClickLeft = () => history.back();
const userStore = useUserStore()

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

let redBaseList = []
const nowImgUrl = ref("")
/**
 * 调接口获取所有红色基地的分类
 */
const getAllRedBaseInfo = async () => {
    const res = await getAllRedBaseInfoAPI()
    redBaseList = res
    console.log('redBaseList777', redBaseList)
    redBaseList = redBaseList.map((item) => {
        return {
            geometry: {
                coordinates: [item.longitude, item.latitude],
                type: "Point"
            },
            properties: {
                address: item.image,
                area: "",
                city: "",
                name: item.name,
                provice: ""
            },
            type: "Feature"
        }
    })
    console.log('redBaseList999', redBaseList)
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
var cluster = null;

/**
 * 获取当前位置
 */
function getLocation() {
    const lat = userStore.userInfo.lat
    const lng = userStore.userInfo.lng
    currentPosition.value.lat = lat
    currentPosition.value.lng = lng
    initMap(lng, lat)
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
    console.log(Cluster)
    let marker = new BMapGL.Marker(point, { icon: myIcon })
    mapObj.value.addOverlay(marker)
    addCluster()
}

/**
 * 添加聚合
 */
function addCluster() {
    getAllRedBaseInfo().then(() => {
        cluster = new Cluster.View(mapObj.value);
        console.log(cluster)
        cluster.on(Cluster.ClusterEvent.CLICK, (e) => {
            console.log('ClusterEvent.CLICK', e);
        });
        cluster.on(Cluster.ClusterEvent.MOUSE_OVER, (e) => {
            console.log('ClusterEvent.MOUSEOVER', e);
        });
        cluster.on(Cluster.ClusterEvent.MOUSE_OUT, (e) => {
            console.log('ClusterEvent.MOUSEOUT', e);
        });
        console.log('redBaseList', redBaseList)

        var points = Cluster.pointTransformer(redBaseList, function (data) {
            return {
                point: data.geometry.coordinates,  // 直接使用coordinates数组中的经纬度
                properties: {
                    name: data.properties.name,
                    address: data.properties.address,
                    area: data.properties.area,
                    city: data.properties.city,
                    province: data.properties.province
                }
            };
        });
        // console.log('points', points)
        redBaseInfoList.value = points
        cluster.setData(points);
        console.log('redBaseInfoList', redBaseInfoList.value)
        addRedBaseListMarkers()
    })


}

// 移除聚合数据
function removeCluster() {
    cluster && cluster.destroy();
    cluster = null;
}

/**
 * 添加红色基地的marker和infoWindo
 */
function addRedBaseListMarkers() {
    redBaseInfoList.value.map((item) => {
        var point = new BMapGL.Point(item.geometry.coordinates[0], item.geometry.coordinates[1]);
        var img = item.properties.address
        var marker = new BMapGL.Marker(point);        // 创建标注
        mapObj.value.addOverlay(marker);
        var infoWindowDom = document.getElementById("infoWindow");
        var opts = {
            width: 10,     // 信息窗口宽度
            height: 80,    // 信息窗口高度
            title: "红色基地"  // 信息窗口标题
        }
        opts.title = item.properties.name
        var infoWindow = new BMapGL.InfoWindow(infoWindowDom, opts);  // 创建信息窗口对象
        // 给标记添加点击事件
        marker.addEventListener('click', () => {
            // 关闭当前打开的信息窗口（如果有的话）
            if (currentInfoWindow) {
                mapObj.value.closeInfoWindow();
            }
            // 打开新的信息窗口
            mapObj.value.openInfoWindow(infoWindow, point);
            console.log('打开新的信息窗口', img)
            nowImgUrl.value = img
            // 更新当前打开的信息窗口
            currentInfoWindow = infoWindow;
        });
        // 信息窗口的其他事件，例如点击窗口内部
        infoWindow.addEventListener('click', (event) => {
            console.log('信息窗口内部被点击', event);
        });
        infoWindowDom.addEventListener('touchend', infoWindowClick)
    });

}

/**
 * 信息窗口点击事件 点击跳转到百度地图
 */
function infoWindowClick() {
    // console.log(currentInfoWindow)
    const lat = currentInfoWindow.latLng.lat;
    const lng = currentInfoWindow.latLng.lng;
    const url = `https://api.map.baidu.com/marker?location=${lat},${lng}&title=目标位置&content=这里是目标位置&output=html`;
    window.open(url);
}

/**
 * 页面挂载
 */
onMounted(async () => {
    await LoadBaiduMapScript()
    getLocation()
    nextTick(() => {
        getAllRedBaseInfo()
    })
})

const searchValue = ref()

const columns = [
    { text: '当前位置', value: 'currentPosition' },
    { text: '全国', value: 'country' },
];
const fieldValue = ref('当前位置');
const showPicker = ref(false);

/**
 * 关闭选择器界面。
 * 将用户选择的第一个选项的文本值更新到某个字段中。
 * @param param0
 */
const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    fieldValue.value = selectedOptions[0].text;
    if (selectedOptions[0].text == '全国') {
        mapObj.value.setZoom(3.5)
    }
    if (selectedOptions[0].text == '当前位置') {
        initMap(currentPosition.value.lng, currentPosition.value.lat)
    }
};
</script>

<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="红色地图" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="flex">
            <van-search v-model="searchValue" class="" placeholder="请输入搜索关键词" />
            <div @click="showPicker = true" class="bg-#fff flex-1 flex justify-center items-center font-size-0.9rem">
                <span class="mr0.5rem">{{ fieldValue }}</span>
                <van-icon name="arrow-down" />
            </div>
        </div>
        <van-popup v-model:show="showPicker" round position="bottom">
            <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
        </van-popup>
        <div id="container" class="w-vw h-vh"></div>
        <div id="infoWindow" class=" h-80% flex justify-between">
            <img class="h-full w-60%" :src="nowImgUrl" alt="">
            <div class="h-full w-38% mr2% flex items-center justify-end">
                <i class="iconfont icon-daozhequ color-#0090ff font-size-1.5rem"></i>
                <p class="">到这去</p>
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

:deep(.van-search) {
    width: 75%;
    height: 3rem;
}

:deep(.van-dropdown-menu) {
    width: 25%;
    height: 3rem;
    border-color: #fff;
}

:deep(.van-dropdown-menu__bar) {
    box-shadow: unset !important;
}
</style>
