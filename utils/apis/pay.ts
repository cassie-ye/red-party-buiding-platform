import httpRequest from "../fetch.js";

/**
 * 支付链接
 * @param params
 * @returns
 */
const paymentLinkAPI = (params:any) => {
    return httpRequest.get("/alipay/pay",params);
}

/**
 * 判断是否存在未支付的订单
 * @returns
 */
const judgeIsExistNoPayOrderAPI = () => {
    return httpRequest.get("/isHaveThisOrder");
}

/**
 * 删除未支付的订单
 * @returns
 */
const deleteNoPayOrdersAPI = () => {
    return httpRequest.delete("/deleteHaveOrder");
}

/**
 * 获取我没有支付的订单
 * @returns
 */
const getMyNoPayOrderAPI = () => {
    return httpRequest.get("/orders/getMyNotPayOrders");
}

/**
 * 获取我的全部订单
 * @returns
 */
const getMyAllOrdersAPI = () => {
    return httpRequest.get("/orders/getMyOrders");
}

export {
    paymentLinkAPI,judgeIsExistNoPayOrderAPI,deleteNoPayOrdersAPI,getMyNoPayOrderAPI,getMyAllOrdersAPI
};
