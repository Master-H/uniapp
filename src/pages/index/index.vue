<template>
    <view class="tab1">
        <uni-section title="store使用" type="line">
            <uni-card :is-shadow="false">
                <Test/>
                <div>count:{{ count }}</div>
                <div>info.height:{{ info.height }}</div>
            </uni-card>
        </uni-section>
        <uni-section title="修改store数据" type="line">
            <uni-card :is-shadow="false">
                <div class="block">
                    <uni-tag
                        :text="`count值：${count}`"
                        type="primary"
                        class="tag"
                        :inverted="true"
                    />
                    <uni-icons
                        type="plus-filled"
                        size="30"
                        class="icon"
                        @click="handleAddCount"
                    />
                </div>
            </uni-card>
        </uni-section>
        <uni-section title="全局样式使用" type="line">
            <uni-card :is-shadow="false">
                <div>count:{{ count }}</div>
                <text class="text">这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
            </uni-card>
        </uni-section>

        <uni-section title="全局类名使用" type="line">
            <uni-card :is-shadow="false">
                <text class="c-fw500">这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
            </uni-card>
        </uni-section>

        <uni-section title="utils使用" type="line">
            <uni-card :is-shadow="false">
                <text>{{ Utils.getPagePath() }}</text>
            </uni-card>
        </uni-section>

        <uni-section title="pinia使用" type="line">
            <uni-card :is-shadow="false">
                <div class="block">
                    <uni-tag
                        :text="`count值：${count}`"
                        type="primary"
                        class="tag"
                        :inverted="true"
                    />
                    <uni-icons
                        type="plus-filled"
                        size="30"
                        class="icon"
                        @click="handleAddCount"
                    />
                </div>
                <div class="block">
                    <uni-tag
                        :text="`age${info.age}`"
                        type="primary"
                        class="tag"
                        :inverted="true"
                    />
                    <uni-icons
                        type="plus-filled"
                        size="30"
                        class="icon"
                        @click="handleAddAge"
                    />
                </div>
            </uni-card>
        </uni-section>
    </view>
</template>

<script lang="ts" setup>
import {onInit} from '@dcloudio/uni-app';
import {API} from '@/utils/api';
import {request} from '@/utils/request';
import {Utils} from '@/utils/utils';
import {useGlobalStore} from '@/store/index';
import {storeToRefs} from 'pinia';

const globalStore = useGlobalStore();
const {count, info} = storeToRefs(globalStore);

// 直接修改state
const handleAddCount = () => {
    globalStore.addCount();
};

const handleAddAge = () => {
    globalStore.addAge();
};

onInit(async () => {
    const data = await request.get(API.TBA1.BANNER).catch();
    console.log('data', data);

});

</script>

<style lang="scss">
.text {
  color: $uni-color-error;
}

.block {
  display: flex;
  height: 100rpx;
  align-items: center;
  margin-bottom: 6px;

  .tag {
      margin-right: 10rpx;
      height: 100%;
      align-items: center;
      display: flex;
  }

  .icon {
      height: 100%;
      display: flex;
      align-items: center;
  }
}
</style>
