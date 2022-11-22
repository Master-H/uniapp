<template>
    <view class="page">
        <uni-section title="新建页面" type="line">
            <uni-card :is-shadow="false">
                <text>test</text>
            </uni-card>
        </uni-section>
    </view>
</template>

<script lang="ts" setup>
import {onInit} from '@dcloudio/uni-app';
import {useGlobalStore} from '@/store/index';
import {storeToRefs} from 'pinia';

const globalStore = useGlobalStore();
const {count, info} = storeToRefs(globalStore);

onInit(async () => { });

</script>

<style lang="scss">
</style>
