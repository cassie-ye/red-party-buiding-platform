import httpRequest from "../fetch.js";
/**
 * 修改用户信息
 * @param data
 * @returns
 */
const updateUserInfoAPI = (data: Object) => {
    return httpRequest.post("/apply/save", data);
};

/**
 * 获取用户信息
 * @returns
 */
const getUserInfoAPI = () => {
    return httpRequest.get("/user/get");
}
export {
    updateUserInfoAPI, getUserInfoAPI
};
