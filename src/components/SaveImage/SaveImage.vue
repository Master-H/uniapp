<template>
    <div>
        <image
            :src="src"
            mode="scaleToFill"
        />
    </div>
</template>

<script lang="ts" setup>
import {Utils} from '@/utils';
import {onLoad} from '@dcloudio/uni-app';
import {onMounted} from 'vue';
const props = defineProps({
    src: {
        type: String,
        default: 'https://t10.baidu.com/it/u=2512351127,2651210443&fm=179&app=35&f=JPEG?w=2484&h=1396&s=C6349EE67BF33C8634148D2903005051',
    },
});
// 图片体积bit转换
const bytesToSize = (bytes: number) => {
    if (bytes === 0) {
        return '0 B';
    }
    const k = 1000;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
};
const getImageSize = (src: string) => {
    console.log(99999);

    return new Promise((resolve, reject) => {
        let blob = null;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', src, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            blob = xhr.response;
            if (blob.type.includes('image')) {
                console.log('bolo.size', blob.size);

                resolve(blob.size);
            }
            else {

                reject();
                alert('请输入正确图片链接地址');
            }

        };
        xhr.send();
    });
};
onMounted(async () => {
    console.log(11111122);
    Utils.toast('测试');

    const imgSize = await getImageSize(props.src) as number;
    const formatImgSize = bytesToSize(imgSize);
    console.log('formatImgSize', formatImgSize);

});


</script>

