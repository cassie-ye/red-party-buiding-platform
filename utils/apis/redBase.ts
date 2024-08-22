//文件目录：api/apiHttps.ts

//引入
import httpRequest from "../fetch.js";

/**
 * 根据分类id查询红色基地信息
 * @param bcid
 * @returns
 */
const getBaseListByCategoryAPI = (bcid: Number) => {
    return httpRequest.get(`/tb-place/getPlaceListByCategory/${bcid}`);
};

/**
 * 获取所有红色基地分类名称
 * @returns
 */
const getAllBaseCategoryListAPI = () => {
    return httpRequest.get("/base-cate/selectAll");
};

/**
 * 获取所有省市区
 * @returns
 */
const getAllProvinceAndAreaListAPI = () => {
    return httpRequest.get("/tb-place/getAllAddress");
}

/**
 * 根据省份Id和市区Id获取红色基地
 * @param obj
 * @returns
 */
const getRedBaseByProvinceAndCityAPI = (obj: any) => {
    return httpRequest.get(`/tb-place/getPlaceListByProvinceAndCity/${obj.proId}/${obj.citId}`)
}

/**
 * 获取指定省份的红色基地
 * @param proId
 * @returns
 */
const getRedBaseByProvinceIdAPI = (proId: Number) => {
    return httpRequest.get(`/tb-place/getPlaceListByProvince/${proId}`)
}

/**
 * 获取随机的红色基地
 * @returns
 */
const getRandomRedBaseAPI = () => {
    return httpRequest.get("/tb-place/getRandomCourse")
}


const getRedBaseDetailsByIdAPI = (id: Number) => {
    return httpRequest.get(`/tb-place/getCourse/${id}`)
}
// /**
//  * @description 获取当前城市天气
//  * @returns 列表数据
//  */
// const getCurrentCityAndWeatherAPI = () => {
//     return httpRequest.get("https://api.oioweb.cn/api/weather/GetWeather");
// }

// const getTrendingWorldwideInfosAPI = () => {
//     return httpRequest.get("https://api.oioweb.cn/api/common/HotList");
// }

// /**
//  * 只在客户端侧发起请求
//  * @description 修改数据
//  * @param {any} data
//  * @returns {any}
//  */
// const editListData = (data: unknown) => {
//     return httpRequest.post("/test", data, {
//         server: false,
//     });
// };

export {
    getBaseListByCategoryAPI, getAllBaseCategoryListAPI,
    getAllProvinceAndAreaListAPI, getRedBaseByProvinceAndCityAPI,
    getRandomRedBaseAPI,
    getRedBaseByProvinceIdAPI,getRedBaseDetailsByIdAPI
};

