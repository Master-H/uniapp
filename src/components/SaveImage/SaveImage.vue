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
        default: 'https://t12.baidu.com/it/u=2601721880,178854445&fm=30&app=106&f=JPEG?w=640&h=436&s=32B17984164236FAC21CC98D0200F09B',
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
    uni.downloadFile({
        url: props.src,
        success: res => {
            const imageByte = res.dataLength;
            const imageSize = bytesToSize(imageByte);
            uni.getImageInfo({
                src: props.src,
                success: res => {
                    console.log(1, res.width);
                    console.log(2, res.height);
                },
            });

        },
    });
});


</script>

