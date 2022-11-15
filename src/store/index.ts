import {defineStore} from 'pinia';
import {ref, reactive} from 'vue';

export const useGlobalStore = defineStore('globalStore', () => {
    const count  = ref<number>(1);
    interface Info {
        name: string;
        age: number;
    }
    const info = reactive<Info>({
        name: '',
        age: 1,
    });

    const addCount  = () => {
        count.value = count.value + 1;
    };

    const addAge = () => {
        info.age = info.age + 1;
    };

    return {
        count,
        info,
        addCount,
        addAge,
    };
});
