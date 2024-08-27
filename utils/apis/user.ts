import httpRequest from "../fetch.js";
const updateUserInfoAPI = (data: Object) => {
    return httpRequest.post("/apply/save", data);
};

const getUserInfoAPI = () => {
    return httpRequest.get("/user/get");
}
export {
    updateUserInfoAPI, getUserInfoAPI
};
