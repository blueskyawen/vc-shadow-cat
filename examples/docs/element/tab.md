# 选项卡

Tab选项卡，用于在不同视图框中根据选择来呈现不同的内容

## 一级Tab选项

### card 样式

:::demo
```html
<TabVcDemo :type="'card'"></TabVcDemo>
```
```javascript
<template>
  <div class="TabVcDemo">
      <vc-tab :level="'super'" :type="'card'" :options="tabOptions" v-model="curTab">
        <div v-if="curTab === 'apple'">
          苹果公司,由史蒂夫·乔布斯、斯蒂夫·沃兹尼亚克和罗·韦恩(Ron Wayne)等人于1976年4月1日创立，并命名为美国苹果电脑公司.
        </div>
        <div v-if="curTab === 'xiaomi'">
          北京小米科技有限责任公司成立2010年4月，是一家专注于智能硬件和电子产品研发的移动互联网公司。“为发烧而生”是小米的产品概念
        </div>
        <div v-if="curTab === 'oppo'">
          OPPO 更多年轻人选择的拍照手机。十年来，OPPO一直专注手机拍照的技术创新，开创了“手机自拍美颜”时代
        </div>
        <div v-if="curTab === 'vivo'">
          vivo是一家全球性的移动互联网智能终端公司，致力于为消费者打造拥有极致拍照、畅快游戏、Hi-Fi音乐的智能手机产品。
        </div>
        <div v-if="curTab === 'zte'">
          中兴通讯（ZTE）,全球领先的综合通信解决方案提供商，中国最大的通信设备上市公司
        </div>
      </vc-tab>
  </div>
</template>

<script>
export default {
  name: 'TabVcDemo',
  data () {
    return {
      tabOptions: [
        { name: '苹果', value: 'apple', isDisable: false },
        { name: '小米-小米-小米-小米-小米', value: 'xiaomi', isDisable: false },
        { name: '欧普', value: 'oppo', isDisable: false },
        { name: '维沃', value: 'vivo', isDisable: false },
        { name: '中兴', value: 'zte', isDisable: false }
      ],
      curTab: 'apple'
    }
  }
}
</script>
```
:::

### line 样式

:::demo
```html
<TabVcDemo :type="'line'"></TabVcDemo>
```
```javascript
<template>
  <div class="TabVcDemo">
      <vc-tab :level="'super'" :type="'line'" :options="tabOptions" v-model="curTab">
        <div v-if="curTab === 'apple'">
          苹果公司,由史蒂夫·乔布斯、斯蒂夫·沃兹尼亚克和罗·韦恩(Ron Wayne)等人于1976年4月1日创立，并命名为美国苹果电脑公司.
        </div>
        <div v-if="curTab === 'xiaomi'">
          北京小米科技有限责任公司成立2010年4月，是一家专注于智能硬件和电子产品研发的移动互联网公司。“为发烧而生”是小米的产品概念
        </div>
        <div v-if="curTab === 'oppo'">
          OPPO 更多年轻人选择的拍照手机。十年来，OPPO一直专注手机拍照的技术创新，开创了“手机自拍美颜”时代
        </div>
        <div v-if="curTab === 'vivo'">
          vivo是一家全球性的移动互联网智能终端公司，致力于为消费者打造拥有极致拍照、畅快游戏、Hi-Fi音乐的智能手机产品。
        </div>
        <div v-if="curTab === 'zte'">
          中兴通讯（ZTE）,全球领先的综合通信解决方案提供商，中国最大的通信设备上市公司
        </div>
      </vc-tab>
  </div>
</template>

<script>
export default {
  name: 'TabVcDemo',
  data () {
    return {
      tabOptions: [
        { name: '苹果', value: 'apple', isDisable: false },
        { name: '小米-小米-小米-小米-小米', value: 'xiaomi', isDisable: false },
        { name: '欧普', value: 'oppo', isDisable: false },
        { name: '维沃', value: 'vivo', isDisable: false },
        { name: '中兴', value: 'zte', isDisable: false }
      ],
      curTab: 'oppo'
    }
  }
}
</script>
```
:::

## 二级Tab选项

:::demo
```html
<TabVcDemo :type="'second'"></TabVcDemo>
```
```javascript
<template>
  <div class="TabVcDemo">
      <vc-tab :level="'second'" :options="tabOptions" v-model="curTab">
        <div v-if="curTab === 'apple'">
          苹果公司,由史蒂夫·乔布斯、斯蒂夫·沃兹尼亚克和罗·韦恩(Ron Wayne)等人于1976年4月1日创立，并命名为美国苹果电脑公司.
        </div>
        <div v-if="curTab === 'xiaomi'">
          北京小米科技有限责任公司成立2010年4月，是一家专注于智能硬件和电子产品研发的移动互联网公司。“为发烧而生”是小米的产品概念
        </div>
        <div v-if="curTab === 'oppo'">
          OPPO 更多年轻人选择的拍照手机。十年来，OPPO一直专注手机拍照的技术创新，开创了“手机自拍美颜”时代
        </div>
        <div v-if="curTab === 'vivo'">
          vivo是一家全球性的移动互联网智能终端公司，致力于为消费者打造拥有极致拍照、畅快游戏、Hi-Fi音乐的智能手机产品。
        </div>
        <div v-if="curTab === 'zte'">
          中兴通讯（ZTE）,全球领先的综合通信解决方案提供商，中国最大的通信设备上市公司
        </div>
      </vc-tab>
  </div>
</template>

<script>
export default {
  name: 'TabVcDemo',
  data () {
    return {
      tabOptions: [
        { name: '苹果', value: 'apple', isDisable: false },
        { name: '小米-小米-小米-小米-小米', value: 'xiaomi', isDisable: false },
        { name: '欧普', value: 'oppo', isDisable: false },
        { name: '维沃', value: 'vivo', isDisable: false },
        { name: '中兴', value: 'zte', isDisable: false }
      ],
      curTab: ''
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| level | tad级别 | string | super,second | super |
| type | 基本样式(super级有效) | string | card,line | card |
| options | 选项列表 | array | 无 | [] |
| curTab | 默认激活选项 | string | 无 | '' |
