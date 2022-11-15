/**
 * @file request
 * @author huangxingyuan@baidu.com
 */

 import {toast} from '@/utils/utils';
 interface ResponseData {
     code: string;
     message: string;
     data: unknown;
 }
 
 /**
  * resolveHeader
  *
  * 获取公共请求头，存放登录token信息
  *
  * @returns {UniNamespace.RequestOptions['header']}
  */
 function resolveHeader(): UniNamespace.RequestOptions['header'] {
     const token = uni.getStorageSync('accessToken');
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
     const responseData = response.data as ResponseData;
     const statusCode = response.statusCode;
     if (statusCode === 200 && responseData.code === 'OK') {
         return resolve(responseData.data);
     }
 
     toast(responseData.message);
     reject(responseData.message);
 
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
                 console.log(err);
                 reject({
                     errno: -1,
                     errmsg: '网络不给力，请检查你的网络设置~',
                 });
             },
         });
     });
 }
 const maxRequestCount = 3;
 
 function requestHelper() {
     let times = 0;
     return async function innerReq(
         url: string,
         method: UniNamespace.RequestOptions['method'],
         data: UniNamespace.RequestOptions['data']
     ): Promise<any> {
         try {
             // 公共请求头
             const header = resolveHeader();
             return await baseRequest(url, method, data, header);
         }
         catch (err: any) {
             //  超时重连
             if (times < maxRequestCount) {
                 times++;
                 return await innerReq(url, method, data);
             }
             throw err;
         }
     };
 }
 
 export const request = {
     get: (url: string, params?: object) => requestHelper()(url, 'GET', {...params}),
     post: (url: string, params?: object) => requestHelper()(url, 'POST', {...params}),
     put: (url: string, params?: object) => requestHelper()(url, 'PUT', {...params}),
     delete: (url: string, params?: object) => requestHelper()(url, 'DELETE', {...params}),
 };
 