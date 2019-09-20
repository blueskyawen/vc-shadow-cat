# 可拖拽区间

用于区域的动态伸缩以及可拖拽布局

## 基本样式

### 双边可拖拽区间

#### 无边缘间隔

:::demo
```html
<ResizeAreaVcDemo :type="'one'"></ResizeAreaVcDemo>
```
```javascript
<div class="ResizeAreaVcDemo">
  <vc-resize-area style="height: 300px;width: 100%;">
    <template v-slot:leftarea>
      <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
    </template>
    <template v-slot:rightarea>
      <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
    </template>
  </vc-resize-area>
</div>
```
:::

#### 有边缘间隔

:::demo
```html
<ResizeAreaVcDemo :type="'two'"></ResizeAreaVcDemo>
```
```javascript
<div class="ResizeAreaVcDemo">
  <vc-resize-area style="height: 300px;width: 100%;" :has-border="true">
    <template v-slot:leftarea>
      <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
    </template>
    <template v-slot:rightarea>
      <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
    </template>
  </vc-resize-area>
</div>
```
:::

#### 禁止拖拽

:::demo
```html
<ResizeAreaVcDemo :type="'three'"></ResizeAreaVcDemo>
```
```javascript
<div class="ResizeAreaVcDemo">
  <vc-resize-area style="height: 400px;width: 100%;" :resizable="false">
    <template v-slot:leftarea>
      <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
    </template>
    <template v-slot:rightarea>
      <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
    </template>
  </vc-resize-area>
</div>
```
:::

### 单边可拖拽区间

:::demo
```html
<ResizeAreaVcDemo :type="'four'"></ResizeAreaVcDemo>
```
```javascript
<div class="ResizeAreaVcDemo">
  <vc-resize-area style="height: 400px;width: 100%;" :single="true">
    <template v-slot:leftarea>
      <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
    </template>
    <template v-slot:rightarea>
      <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
    </template>
  </vc-resize-area>
</div>
```
:::

## 自定义样式

:::demo
```html
<ResizeAreaVcDemo :type="'five'"></ResizeAreaVcDemo>
```
```javascript
<div class="ResizeAreaVcDemo">
  <vc-resize-area style="height: 200px;width: 800px" :left-width="'30%'" :min-left-width="100">
    <template v-slot:leftarea>
      <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
    </template>
    <template v-slot:rightarea>
      <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
    </template>
  </vc-resize-area>
</div>
```
:::


## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| leftWidth | 类型 | string | success,info,warn,danger | success |
| minLeftWidth | 有关闭按钮 | boolean | true,false | false |
| minRightWidth | 带图标 | boolean | true,false | false |
| resizable | 提示内容 | string | 无 | header |
| single | 展示提示 | boolean | true,false | false |
| hasBorder | 展示提示 | boolean | true,false | false |
