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
    <h4>左边滑出</h4>
    <vc-drawer v-model="showFlag1" :place="'left'" :header="'左边Drawer'">
      <div class="content-left">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <h4>上边滑出</h4>
    <vc-drawer v-model="showFlag2" :place="'top'" :header="'上边Drawer'">
      <div class="content-top">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <h4>右边滑出</h4>
    <vc-drawer v-model="showFlag3" :place="'right'" :header="'右边Drawer'">
      <div class="content-left">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <h4>下边滑出</h4>
    <vc-drawer v-model="showFlag4" :place="'down'" :header="'下边Drawer'">
      <div class="content-top">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
  </div>
</template>
```
:::

## 自定义样式

:::demo
```html
<DrawerVcDemo :type="'manual'"></DrawerVcDemo>
```
```javascript
<template>
  <div class="AvatarVcDemo">
    <h4>左边滑出</h4>
    <vc-drawer v-model="showFlag1" :place="'left'" :header="'左边Drawer'">
      <div class="content-left">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <h4>上边滑出</h4>
    <vc-drawer v-model="showFlag2" :place="'top'" :header="'上边Drawer'">
      <div class="content-top">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <h4>右边滑出</h4>
    <vc-drawer v-model="showFlag3" :place="'right'" :header="'右边Drawer'">
      <div class="content-left">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <h4>下边滑出</h4>
    <vc-drawer v-model="showFlag4" :place="'down'" :header="'下边Drawer'">
      <div class="content-top">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
  </div>
</template>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| place | 滑出方向 | string | top,right,down,left | right |
| showShade | 展示遮罩 | boolean | true,false | true |
| clickShadeClose | 点击展示关闭抽屉 | boolean | true,false | true |
| closable | 有关闭按钮 | boolean | true,false | true |
| header | 标题栏 | string | 无 | 我是标题 |
| zIndex | 层级数 | number | 无 | 9000 |
| isShow | 展示 | boolean | true,false | false |
