//引入
import httpRequest from "../fetch.js";

/**
 * 根据分类id查询红色基地信息
 * @param bcid
 * @returns
 */
const getNotesListByTimeAPI = () => {
    return httpRequest.get("/blog/getAllBlogByTime");
};

export { getNotesListByTimeAPI };
