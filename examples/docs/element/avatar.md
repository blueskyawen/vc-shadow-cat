# 头像

用来代表用户或事物，支持图片、图标展示

## 基本样式

:::demo
```html
<AvatarVcDemo :type="'basic'"></AvatarVcDemo>
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

## 显示消息提示

:::demo
```html
<AvatarVcDemo :type="'badge'"></AvatarVcDemo>
```
```javascript
<template>
  <div class="AvatarVcDemo">
      <div class="demoItem">
        <vc-avatar class="item" :src="photos[0]" :show-badge="true">
          <vc-badge class="badgeItem" :type="'danger'" :count="6" :show-info="true"></vc-badge>
        </vc-avatar>
        <vc-avatar class="item" :src="photos[0]" :size="'medium'" :show-badge="true">
          <vc-badge class="badgeItem" :type="'danger'" :count="6"></vc-badge>
        </vc-avatar>
        <vc-avatar class="item" :src="photos[0]" :size="'small'" :show-badge="true">
          <vc-badge class="badgeItem2" :type="'danger'" :count="6" :show-info="false"></vc-badge>
        </vc-avatar>
      </div>
      <div class="demoItem">
        <vc-avatar class="item" :src="photos[1]" :type="'circle'" :show-badge="true">
          <vc-badge class="badgeItem" :type="'danger'" :count="6" :show-info="true"></vc-badge>
        </vc-avatar>
        <vc-avatar class="item" :src="photos[1]" :type="'circle'" :size="'medium'" :show-badge="true">
          <vc-badge class="badgeItem" :type="'danger'" :count="6"></vc-badge>
        </vc-avatar>
        <vc-avatar class="item" :src="photos[1]" :type="'circle'" :size="'small'" :show-badge="true">
          <vc-badge class="badgeItem2" :type="'danger'" :count="6" :show-info="false"></vc-badge>
        </vc-avatar>
      </div>
  </div>
</template>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型 | string | square,circle | square |
| size | 头像大小 | string | large,medium,small | large |
| src | 头像地址 | string | 无 | 无 |
| showBadge | 显示消息提示 | boolean | true,false | false |
