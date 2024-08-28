import httpRequest from "../fetch.js";
// const paymentLinkAPI = (subject: any, totalAmount: any, traceNo: any) => {
//     return httpRequest.get(`/alipay/pay?subject=${subject}&totalAmount=${totalAmount}&traceNo=${traceNo}`);
// }
const paymentLinkAPI = (params:any) => {
    return httpRequest.get("/alipay/pay",params);
}
export {
    paymentLinkAPI
};
