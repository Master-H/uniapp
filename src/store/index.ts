// store.js
import {defineStore} from 'pinia';

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore({
    // id: 必须的，在所有 Store 中唯一
    id: 'globalStore',
    // state: 返回对象的函数
    state: () => ({
        count: 1,
    }),
    actions: {
        add() {
            this.count++;
        },
        async log() {
            await Promise.resolve(1);
            console.log(222);
        },
    },
});