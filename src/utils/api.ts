/**
 * @file api接口地址管理
 * @author huangxingyuan@baidu.com
 */

 const BASE_URL = 'http://yq01-svc-01.yq01.baidu.com:8989';

 export const API = {
     // 首页tab
     INDEX: {
         BANNER: `${BASE_URL}/v1/common/setting/banner`, // 小程序首页banner接口
     },
     // 政务宝典tab
     GOV: {
         MAIN: `${BASE_URL}/corn/dolly/n/goods/detail`,
     },
     // 我的tab
     MY: {
         CONTENT: `${BASE_URL}/v1/common/setting/home_page`,
     },
 };
 
 export default API;
 