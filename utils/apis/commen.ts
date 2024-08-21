//文件目录：api/apiHttps.ts

//引入
import httpRequest from "../fetch.js";

/**
 * 根据分类id查询红色基地信息
 * @param bcid
 * @returns
 */
const registerAPI = (data: any) => {
    return httpRequest.post("/user/save", data);
};

const loginAPI = (data: any) => {
    return httpRequest.post("/login",data);
};

export { registerAPI,loginAPI };

