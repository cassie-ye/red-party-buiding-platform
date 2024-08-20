import type { UseFetchOptions } from "nuxt/app";

type Methods = "GET" | "POST" | "DELETE" | "PUT";

const BASE_URL = "http://localhost:10087";

export interface IResultData<T> {
    code: number;
    data: T;
    msg: string;
}


type Interceptor<T> = (config: UseFetchOptions<T>) => UseFetchOptions<T>;
type ResponseInterceptor<T> = (response: T) => T;

class HttpRequest {
    private requestInterceptors: Interceptor<any>[] = [];
    private responseInterceptors: ResponseInterceptor<any>[] = [];

    // 添加请求拦截器
    addRequestInterceptor(interceptor: Interceptor<any>) {
        this.requestInterceptors.push(interceptor);
    }

    // 添加响应拦截器
    addResponseInterceptor(interceptor: ResponseInterceptor<any>) {
        this.responseInterceptors.push(interceptor);
    }

    private applyRequestInterceptors<T>(config: UseFetchOptions<T>): UseFetchOptions<T> {
        return this.requestInterceptors.reduce((acc: any, interceptor) => interceptor(acc), config);
    }

    private applyResponseInterceptors<T>(response: T): T {
        return this.responseInterceptors.reduce((acc: any, interceptor) => interceptor(acc), response);
    }

    request<T = any>(url: string, method: Methods, data: any, options?: UseFetchOptions<T>) {
        return new Promise((resolve, reject) => {
            let newOptions: UseFetchOptions<T> = {
                baseURL: BASE_URL,
                method,
                ...options,
            };

            if (method === "GET" || method === "DELETE") {
                newOptions.params = data;
            }
            if (method === "POST" || method === "PUT") {
                newOptions.body = data;
            }

            // 应用请求拦截器
            newOptions = this.applyRequestInterceptors(newOptions);

            useFetch(url, newOptions)
                .then((res) => {
                    let result = res.data.value;

                    // 应用响应拦截器
                    result = this.applyResponseInterceptors(result);

                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
        return this.request(url, "GET", params, options);
    }

    post<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
        return this.request(url, "POST", data, options);
    }

    put<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
        return this.request(url, "PUT", data, options);
    }

    delete<T = any>(url: string, params: any, options?: UseFetchOptions<T>) {
        return this.request(url, "DELETE", params, options);
    }
}

const httpRequest = new HttpRequest();


export default httpRequest;
