//引入
import httpRequest from "../fetch.js";

/**
 * 根据Id获取红色基地的食品服务
 * @param baseId
 * @returns
 */
const getRedBaseFoodServiceByBaseIdAPI = (baseId: any) => {
    return httpRequest.get(`/tb-dish/getPlaceFood/${baseId}`);
};

/**
 * 根据食品Id获取红色基地的食品口味
 * @param foodId
 * @returns
 */
const getFoodFlavorsByFoodIdAPI = (foodId: any) => {
    return httpRequest.get(`/tb-dish/getFoodFlavor/${foodId}`);
}

/**
 * 创建食品订单
 * @param data
 * @returns
 */
const createFoodOrderAPI = (data: any) => {
    return httpRequest.post(`/menu-orders/createOrderToCache`, data);
}

export { getRedBaseFoodServiceByBaseIdAPI, getFoodFlavorsByFoodIdAPI, createFoodOrderAPI };
