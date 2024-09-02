//文件目录：api/apiHttps.ts

//引入
import httpRequest from "../fetch.js";

const chatGptAPI = (params: any) => {
    return httpRequest.get("/ai/chat", params);
}

export { chatGptAPI };

