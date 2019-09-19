# 抽屉

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务

## 基本样式

:::demo
```html
<DrawerVcDemo :type="'basic'"></DrawerVcDemo>
```
```javascript
<template>
  <div class="AvatarVcDemo">
      <h4>方形头像</h4>
      <div class="demoItem">
        <vc-avatar class="item" :src="photos[0]"></vc-avatar>
        <vc-avatar class="item" :src="photos[0]" :size="'medium'"></vc-avatar>
        <vc-avatar class="item" :src="photos[0]" :size="'small'"></vc-avatar>
      </div>
      <h4>圆形头像</h4>
      <div class="demoItem">
        <vc-avatar class="item" :src="photos[1]" :type="'circle'"></vc-avatar>
        <vc-avatar class="item" :src="photos[1]" :type="'circle'" :size="'medium'"></vc-avatar>
        <vc-avatar class="item" :src="photos[1]" :type="'circle'" :size="'small'"></vc-avatar>
      </div>
  </div>
</template>
```
:::
