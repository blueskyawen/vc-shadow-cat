# 消息表情

用于显示消息的动态卡通头像

## 基本样式

:::demo
```html
<MsgeifVcDemo :type="'basic'"></MsgeifVcDemo>
```
```javascript
<div class="AvatarVcDemo">
    <vc-msgeif :type="'laugh'"></vc-msgeif>
    <vc-msgeif :type="'serious'"></vc-msgeif>
    <vc-msgeif :type="'aggrieve'"></vc-msgeif>
    <vc-msgeif :type="'angry'"></vc-msgeif>
    <vc-msgeif :type="'love'"></vc-msgeif>
</div>
```
:::

## 动画效果

:::demo
```html
<MsgeifVcDemo :type="'animate'"></MsgeifVcDemo>
```
```javascript
<div class="AvatarVcDemo">
    <vc-msgeif :type="'laugh'" :animate="true"></vc-msgeif>
    <vc-msgeif :type="'serious'" :animate="true"></vc-msgeif>
    <vc-msgeif :type="'aggrieve'" :animate="true"></vc-msgeif>
    <vc-msgeif :type="'angry'" :animate="true"></vc-msgeif>
    <vc-msgeif :type="'love'" :animate="true"></vc-msgeif>
</div>
```
:::

## 自定义颜色

:::demo
```html
<MsgeifVcDemo :type="'manual'"></MsgeifVcDemo>
```
```javascript
<div class="AvatarVcDemo">
  <vc-msgeif :type="'laugh'" :color="'#99e6e6'"></vc-msgeif>
  <vc-msgeif :type="'serious'" :animate="true" :color="'#bf80ff'"></vc-msgeif>
  <vc-msgeif :type="'aggrieve'" :animate="true" :color="'#ace600'"></vc-msgeif>
  <vc-msgeif :type="'angry'" :animate="true" :color="'#ff80bf'"></vc-msgeif>
  <vc-msgeif :type="'love'" :animate="true" :color="'#66a3ff'"></vc-msgeif>
</div>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型 | string | laugh,serious,aggrieve,angry,love | laugh |
| animate | 动画效果 | boolean | true,false | false |
| color | 表情颜色 | string | 无 | #ffad33 |
