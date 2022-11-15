/*
 * @Author: huangxingyuan uestchxy@163.com
 * @Date: 2022-10-04 10:24:52
 * @LastEditors: huangxingyuan uestchxy@163.com
 * @LastEditTime: 2022-10-04 10:49:26
 * @FilePath: /uniapp/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createSSRApp} from 'vue';
import App from './App.vue';
import {createPinia} from 'pinia';
export function createApp() {
    const app = createSSRApp(App);
    app.use(createPinia());
    return {
        app,
    };
}
