# 加载占位

在需要等待加载内容的位置提供一个占位图

## 基本样式

:::demo
```html
<vc-skeleton :show="true"></vc-skeleton>
```
:::

## 动画效果

:::demo
```html
<SkeletonVcDemo :type="'dync'"></SkeletonVcDemo>
```
```javascript
<template>
  <div class="SkeletonVcDemo">
      <div><vc-switch v-model="loading"></vc-switch></div>
      <vc-skeleton :show="loading" :avatar="true" :dynamic="true"></vc-skeleton>
      <div class="wenzhang" v-if="!loading">
        <p>倚在冬的门楣，静心遥盼雪天使的降临。娉娉婷婷，风姿绰约，飘飘扬扬，曼妙万千。以一身晶莹，绽放独特魅力；以一分柔媚，征服万物生灵；
          以一缕素洁，攫获万心宠爱。如蝶飞舞，如梦唯美，如烟轻柔，如雾飘缈，如心纯净，如水澄澈。</p>
        <p>忧郁的愁丝晕染了流年的底色，孤寒的素洁染白了寒冬的萧瑟。凛冽的寒风呼啸而来，残瘦的枯枝在风中摇曳。清冷的浩空好似在酝酿一场盛
          大的群舞盛宴，天边仿佛飞来白茫茫一片素洁，那是雪精灵在炫舞翩跹。曼妙的舞姿，灵动的舞步，飘逸的神韵，优雅地绽放，美而不艳，媚而不俗，
          令人沉醉，不能自拔……</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonVcDemo',
  data () {
    return {
      loading: true
    }
  }
}
</script>
```
:::

## 自定义样式

:::demo
```html
<SkeletonVcDemo :type="'manual'"></RateVcDemo>
```
```javascript
<h4>显示头像占位,可设置尺寸</h4>
<vc-skeleton :show="true" :avatar="true"></vc-skeleton>
<h4>设置占位行数</h4>
<vc-skeleton :show="true" :avatar="true" :size="'default'" :rows="6"></vc-skeleton>
<h4>设置占位宽度</h4>
<vc-skeleton style="width: 800px;" :show="true" :avatar="true"></vc-skeleton>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| show | 显示 | boolean | true,false | false |
| rows | 占位行数 | number | 无 | 4 |
| avatar | 显示头像占位 | boolean | true,false | false |
| dynamic | 动画效果 | boolean | true,false | false |
| size | 头像占位图大小 | string | default,small | default |
