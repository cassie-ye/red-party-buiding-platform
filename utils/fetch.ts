
//文件目录：service/index.ts

// 引入了nuxt/app模块中的FetchOptions类型,FetchOptions类型是一个用于配置请求选项的接口或类型
//文件目录：service/index.ts
// 引入了nuxt/app模块中的FetchOptions类型,FetchOptions类型是一个用于配置请求选项的接口或类型
// import type { FetchOptions } from "nuxt/app";
import type { FetchOptions, ResponseType } from 'ofetch'
import { useUserStore } from "../store/user.js";

//  HTTP 请求的方法
type Methods = "GET" | "POST" | "DELETE" | "PUT";

// URL 基地址
const BASE_URL = "http://192.168.0.111:10087";
// const BASE_URL = "http://10.10.12.170:10087";
// const BASE_URL = "http://192.168.43.108:10087"
// 请求结果数据格式
export interface IResultData<T> {
    code: number;
    data: T;
    msg: string;
}

const transformedData = (data: any) => {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}

/**
 * api请求封装，使用useFetch函数
 * @param { String } url 请求地址
 * @param { String } method 请求方法
 * @param { Object } data 请求数据
 * @param { FetchOptions } options 请求选项
 */

/**
 * options常用参数说明
 * @param { boolean } lazy    是否在加载路由后才请求该异步方法，默认为false
 * @param { boolean } server  是否在服务端请求数据，默认为true
 */
class HttpRequest {
    request<T extends ResponseType>(url: string, method: Methods, data: any, options?: FetchOptions<T>) {
        return new Promise((resolve, reject) => {
            // 继承FetchOptions类型，包含了baseURL和method两个属性
            const newOptions: FetchOptions<T> = {
                baseURL: BASE_URL,
                method,
                ...options,
            };

            // 根据请求方法处理请求的数据
            if (method === "GET" || method === "DELETE") {
                // 将数据设置为newOptions的params属性
                newOptions.params = data;
            }
            if (method === "POST") {
                // newOptions.body = transformedData(data)
                // newOptions.headers = {
                //     'Content-Type': 'application/x-www-form-urlencoded',
                // }
                newOptions.body = data;
            }
            if (method === "PUT") {
                newOptions.body = data;
            }

            newOptions.onRequest = ({ request, options }) => {
                const userStore = useUserStore()
                // @ts-ignore
                const token = userStore.userInfo?.token
                if (token) {
                    options.headers = {
                        // 'Authorization': 'Bearer ' + 'token',
                        'Authorization': token
                    }
                }
            };

            // 发送请求
            $fetch(url, newOptions as any)
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    // 封装常用方法
    get<T extends ResponseType>(url: string, params?: any, options?: FetchOptions<T>) {
        return this.request(url, "GET", params, options);
    }

    post<T extends ResponseType>(url: string, data: any, options?: FetchOptions<T>) {
        return this.request(url, "POST", data, options);
    }

    put<T extends ResponseType>(url: string, data: any, options?: FetchOptions<T>) {
        return this.request(url, "PUT", data, options);
    }


    delete<T extends ResponseType>(url: string, params?: any, options?: FetchOptions<T>) {
        return this.request(url, "DELETE", params, options);
    }
}

const httpRequest = new HttpRequest();

export default httpRequest;

