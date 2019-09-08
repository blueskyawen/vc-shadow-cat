# 加载等待

用于访问初始访问页面的加载等候，以及从后端获取数据的等待处理

## 使用方式

### 基本样式

:::demo
```html
<vc-loading :size="'max'"></vc-loading>
<vc-loading :size="'medium'"></vc-loading>
<vc-loading :size="'min'"></vc-loading>
```
:::

### 四叶草样式

:::demo
```html
<vc-loading :type="'clover'" :size="'max'"></vc-loading>
<vc-loading :type="'clover'" :size="'medium'"></vc-loading>
<vc-loading :type="'clover'" :size="'min'"></vc-loading>
```
:::

### 水平样式

:::demo
```html
<vc-loading class="load-show" :type="'horizontal'" :size="'max'"></vc-loading>
<vc-loading class="load-show" :type="'horizontal'" :size="'medium'"></vc-loading>
<vc-loading class="load-show" :type="'horizontal'" :size="'min'"></vc-loading>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型样式 | string | normal,clover,horizontal | normal |
| size | 尺寸大小 | string | max,medium,min | max |

<style>
.load-show {
    margin-right: 50px;
}
</style>
