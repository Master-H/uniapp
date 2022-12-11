import {defineStore} from 'pinia';

export const useGlobalStore = defineStore({
    id: 'globalStore',
    state: () => {
        return {
            count: 1,
            age: 1,
        };
    },
    actions: {
        addCount() {
            this.count = this.count + 1;
        },
        log(str = 'log') {
            console.log('log-----', str);
        },
    },
});
