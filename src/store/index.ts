import {defineStore} from 'pinia';
import {ref, reactive} from 'vue';

export const useGlobalStore = defineStore('globalStore', () => {
    const count  = ref<number>(1);
    const weather  = ref<string>('');
    interface Info {
        name: string;
        age: number;
        height: number;
    }
    const info = reactive<Info>({
        name: '成都巴菲特',
        age: 1,
        height: 166,
    });

    const addCount  = () => {
        count.value = count.value + 1;
    };

    const addAge = () => {
        info.age = info.age + 1;
    };

    const updateWeather =  async (city: string) => {
        // 模拟接口返回
        const data = await Promise.resolve(`${city}-天气`);
        weather.value = data;
    };


    return {
        count,
        info,
        addCount: addCount,
        addAge,
        updateWeather,
        weather,
    };
});
