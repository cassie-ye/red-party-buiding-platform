import httpRequest from "../fetch.js";
const updateUserInfoAPI = (data: Object) => {
    return httpRequest.post("/apply/save", data);
};
export {
    updateUserInfoAPI
};
