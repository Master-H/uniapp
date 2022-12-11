/**
 * @file request
 */

import {toast} from '@/utils/utils';
 interface ResponseData {
     code: number;
     message: string;
     data: unknown;
 }

/**
  * getHeaderConfig
  *
  * 获取公共请求头，存放登录token信息
  *
  * @returns {UniNamespace.RequestOptions['header']}
  */
function getHeaderConfig(): UniNamespace.RequestOptions['header'] {
    const token = uni.getStorageSync('token');
    return {token};
}


/**
  * handleSuccess
  *
  * 处理接口成功响应
  * @params response 请求数据
  * @params response
  * @params reject
  *
  * @returns {UniNamespace.RequestOptions['header']}
  */
function handleSuccess(
    response: UniNamespace.RequestSuccessCallbackResult,
    resolve: (data: unknown) => void,
    reject: (message: string) => void
) {
    const {statusCode, data = {}} = response;
    const {code, message} = data as ResponseData;
    if (statusCode === 200 && code === 0) {
        return resolve(data);
    }

    toast(message);
    reject(message);
}
/**
  * handleSuccess
  *
  * 处理接口失败响应
  * @params err 异常对象
  * @params reject
  *
  * @returns {UniNamespace.RequestOptions['header']}
  */
function handleFail(
    err: UniNamespace.GeneralCallbackResult,
    reject: (message: object) => void
) {
    console.log(err);
    reject({
        errno: -1,
        errmsg: '网络不给力',
    });
}

/**
  * baseRequest
  *
  * 基础请求方法
  *
  * @param method 请求方法
  * @param data 请求数据
  * @param header 请求头
  * @returns Promise<any>
  */
export function baseRequest(
    url: string,
    method: UniNamespace.RequestOptions['method'],
    data: UniNamespace.RequestOptions['data'],
    header: UniNamespace.RequestOptions['header']
): Promise<any> {
    return new Promise((resolve, reject) => {
        uni.request({
            url,
            data,
            method,
            header,
            success(res) {
                handleSuccess(res, resolve, reject);
            },
            fail(err) {
                handleFail(err, reject);
            },
        });
    });
}

function handleRequest() {
    return async function innerReq(
        url: string,
        method: UniNamespace.RequestOptions['method'],
        data: UniNamespace.RequestOptions['data']
    ): Promise<any> {
        try {
            // 公共请求头
            const header = getHeaderConfig();
            return await baseRequest(url, method, data, header);
        }
        catch (err: any) {
            throw err;
        }
    };
}


export const request = {
    get: (url: string, params?: object) => handleRequest()(url, 'GET', {...params}),
    post: (url: string, params?: object) => handleRequest()(url, 'POST', {...params}),
    put: (url: string, params?: object) => handleRequest()(url, 'PUT', {...params}),
    delete: (url: string, params?: object) => handleRequest()(url, 'DELETE', {...params}),
};
