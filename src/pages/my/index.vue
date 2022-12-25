<template>
    <view>
        <uni-section title="全局类名使用" type="line">
            <uni-card :is-shadow="false">
                <text class="c-title text">这是一个基础卡片示例</text>
            </uni-card>
        </uni-section>
        <uni-section title="图片体积" type="line">
            <uni-card :is-shadow="false">
                <SaveImage/>>
            </uni-card>
        </uni-section>
    </view>

</template>

<script lang="ts" setup>
import {onLoad} from '@dcloudio/uni-app';
onLoad(async () => {
    console.log(4444444);

    // const imgSize = await getImageSize(props.src) as number;
    // const formatImgSize = bytesToSize(imgSize);
    // console.log('formatImgSize', formatImgSize);

});
</script>

<style lang="scss">
.text {
    color: $uni-text-color-red;
}
</style>