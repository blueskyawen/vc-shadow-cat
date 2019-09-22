# 栅格

基于行（row）和列（col）来定义信息区块的外部框架，特点：

<ul style="margin:18px;">
    <li>通过row在水平方向建立一组column（简写col</li>
    <li>内容应当放置于col内，只有col可以作为row的直接元素</li>
    <li>一个row中的col总和超过12，多余的col会另起一行排列</li>
    <li>提供Flex布局相关特性设置</li>
</ul>

## 基础栅格

### 基本行列组

:::demo
```html
<GridVcDemo :type="'1'"></AlertVcDemo>
```
```javascript
<div class="vc-container">
  <vc-row>
    <vc-col v-for="num in 12" :key="num" :xs="{span: 1}">
      <div class="item">1/12</div>
    </vc-col>
  </vc-row>
  <vc-row>
    <vc-col v-for="num in 6" :key="num" :xs="{span: 2}">
      <div class="item">1/6</div>
    </vc-col>
  </vc-row>
  <vc-row>
    <vc-col v-for="num in 4" :key="num" :xs="{span: 3}">
      <div class="item">1/4</div>
    </vc-col>
  </vc-row>
  <vc-row>
    <vc-col v-for="num in 3" :key="num" :xs="{span: 4}">
      <div class="item">1/3</div>
    </vc-col>
  </vc-row>
  <vc-row>
    <vc-col v-for="num in 2" :key="num" :xs="{span: 6}">
      <div class="item">1/2</div>
    </vc-col>
  </vc-row>
  <vc-row>
    <vc-col v-for="num in 1" :key="num" :xs="{span: 12}">
      <div class="item">1/1</div>
    </vc-col>
  </vc-row>
</div>
```
:::

### 列组合

:::demo
```html
<GridVcDemo :type="'2'"></AlertVcDemo>
```
```javascript
<div class="vc-container">
  <vc-row>
    <vc-col :xs="{span: 5}">
      <div class="item">5/12</div>
    </vc-col>
    <vc-col :xs="{span: 7}">
      <div class="item">7/12</div>
    </vc-col>
  </vc-row>
  <vc-row>
    <vc-col :xs="{span: 9}">
      <div class="item">3/4</div>
    </vc-col>
    <vc-col :xs="{span: 3}">
      <div class="item">1/4</div>
    </vc-col>
  </vc-row>
  <vc-row>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6</div>
    </vc-col>
    <vc-col :xs="{span: 7}">
      <div class="item">7/12</div>
    </vc-col>
    <vc-col :xs="{span: 3}">
      <div class="item">1/4</div>
    </vc-col>
  </vc-row>
</div>
```
:::

### 列嵌套

:::demo
```html
<GridVcDemo :type="'3'"></AlertVcDemo>
```
```javascript
<div class="vc-container">
  <vc-row>
    <vc-col :xs="{span: 6}">
      <vc-row>
        <vc-col :xs="{span: 4}">
          <div class="item">1/3</div>
        </vc-col>
        <vc-col :xs="{span: 4}">
          <div class="item">1/3</div>
        </vc-col>
        <vc-col :xs="{span: 4}">
          <div class="item">1/3</div>
        </vc-col>
      </vc-row>
    </vc-col>
    <vc-col :xs="{span: 6}">
      <div class="item">1/2</div>
    </vc-col>
  </vc-row>
  <vc-row>
    <vc-col :xs="{span: 6}">
      <div class="item">1/2</div>
    </vc-col>
    <vc-col :xs="{span: 6}">
      <div class="item">1/2</div>
    </vc-col>
  </vc-row>
</div>
```
:::

### 列偏移

:::demo
```html
<GridVcDemo :type="'4'"></AlertVcDemo>
```
```javascript
<div class="vc-container">
  <vc-row>
    <vc-col :xs="{span: 2, offset: 3}">
      <div class="item">1/6</div>
    </vc-col>
    <vc-col :xs="{span: 4, offset: 1}">
      <div class="item">1/3</div>
    </vc-col>
  </vc-row>
  <vc-row>
    <vc-col :xs="{span: 6}">
      <div class="item">1/2</div>
    </vc-col>
    <vc-col :xs="{span: 6, offset: 6}">
      <div class="item">1/2</div>
    </vc-col>
  </vc-row>
</div>
```
:::

### 列呈现类型

:::demo
```html
<GridVcDemo :type="'9'"></AlertVcDemo>
```
```javascript
<div class="vc-container">
  <vc-row>
    <vc-col :xs="{span: 4, type: 'block'}" :md="{span: 4, type: 'none'}">
      <div class="item">1/3-A</div>
    </vc-col>
    <vc-col :xs="{span: 4, type: 'none'}" :md="{span: 4, type: 'block'}">
      <div class="item">1/3-B</div>
    </vc-col>
    <vc-col :xs="{span: 4, type: 'inline-block'}" :md="{span: 4, type: 'none'}">
      <div class="item">1/3-C</div>
    </vc-col>
  </vc-row>
  <vc-row>
    <vc-col :xs="{span: 4, type: 'block'}" :md="{span: 4, type: 'flex'}">
      <div class="item">1/3-D</div>
    </vc-col>
    <vc-col :xs="{span: 4, type: 'none'}" :md="{span: 4, type: 'inline-block'}">
      <div class="item">1/3-E</div>
    </vc-col>
    <vc-col :xs="{span: 4, type: 'block'}" :sm="{span: 4, type: 'none'}">
      <div class="item">1/3-F</div>
    </vc-col>
  </vc-row>
</div>
```
:::

## Flex布局
栅格系统支持 Flex 布局，允许使用flex常用布局方式

### 排列方向

:::demo
```html
<GridVcDemo :type="'5'"></AlertVcDemo>
```
```javascript
<div class="vc-container">
  <vc-row :type="'flex'" :direction="'row'">
    <vc-col :xs="{span: 4}">
      <div class="item">1/3-A</div>
    </vc-col>
    <vc-col :xs="{span: 4}">
      <div class="item">1/3-B</div>
    </vc-col>
    <vc-col :xs="{span: 4}">
      <div class="item">1/3-C</div>
    </vc-col>
  </vc-row>
  <vc-row :type="'flex'" :direction="'reverse'">
    <vc-col :xs="{span: 4}">
      <div class="item">1/3-A</div>
    </vc-col>
    <vc-col :xs="{span: 4}">
      <div class="item">1/3-B</div>
    </vc-col>
    <vc-col :xs="{span: 4}">
      <div class="item">1/3-C</div>
    </vc-col>
  </vc-row>
</div>
```
:::

### 主/次轴方向对齐

:::demo
```html
<GridVcDemo :type="'6'"></AlertVcDemo>
```
```javascript
<div class="vc-container">
  <vc-row :type="'flex'" :justify="'start'" :align="'start'">
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-A</div>
    </vc-col>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-B</div>
    </vc-col>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-C</div>
    </vc-col>
  </vc-row>
  <vc-row :type="'flex'" :justify="'center'" :align="'end'">
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-A</div>
    </vc-col>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-B</div>
    </vc-col>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-C</div>
    </vc-col>
  </vc-row>
  <vc-row :type="'flex'" :justify="'end'" :align="'center'">
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-A</div>
    </vc-col>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-B</div>
    </vc-col>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-C</div>
    </vc-col>
  </vc-row>
  <vc-row :type="'flex'" :justify="'space-between'" :align="'baseline'">
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-A</div>
    </vc-col>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-B</div>
    </vc-col>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-C</div>
    </vc-col>
  </vc-row>
  <vc-row :type="'flex'" :justify="'space-around'" :align="'stretch'">
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-A</div>
    </vc-col>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-B</div>
    </vc-col>
    <vc-col :xs="{span: 2}">
      <div class="item">1/6-C</div>
    </vc-col>
  </vc-row>
</div>
```
:::

### 元素显示次序

:::demo
```html
<GridVcDemo :type="'7'"></AlertVcDemo>
```
```javascript
<div class="vc-container">
  <vc-row :type="'flex'" :justify="'space-around'">
    <vc-col :xs="{span: 3, order: 3}">
      <div class="item">1/4-A</div>
    </vc-col>
    <vc-col :xs="{span: 3, order: 1}">
      <div class="item">1/4-B</div>
    </vc-col>
    <vc-col :xs="{span: 3, order: 2}">
      <div class="item">1/4-C</div>
    </vc-col>
  </vc-row>
  <vc-row :type="'flex'" :justify="'space-around'">
    <vc-col :xs="{span: 3, order: 2}">
      <div class="item">1/4-A</div>
    </vc-col>
    <vc-col :xs="{span: 3, order: 3}">
      <div class="item">1/4-B</div>
    </vc-col>
    <vc-col :xs="{span: 3, order: 1}">
      <div class="item">1/4-C</div>
    </vc-col>
  </vc-row>
</div>
```
:::

### wrap排列

:::demo
```html
<GridVcDemo :type="'8'"></AlertVcDemo>
```
```javascript
<div class="vc-container">
  <vc-row class="wrap-hidden" :type="'flex'" :wrap="'nowrap'">
    <vc-col :xs="{span: 5}">
      <div class="item">5/12-A</div>
    </vc-col>
    <vc-col :xs="{span: 5}">
      <div class="item">5/12-B</div>
    </vc-col>
    <vc-col :xs="{span: 5}">
      <div class="item">5/12-C</div>
    </vc-col>
  </vc-row>
  <vc-row class="wrap-hidden" :type="'flex'" :wrap="'wrap'">
    <vc-col :xs="{span: 5}">
      <div class="item">5/12-A</div>
    </vc-col>
    <vc-col :xs="{span: 5}">
      <div class="item">5/12-B</div>
    </vc-col>
    <vc-col :xs="{span: 5}">
      <div class="item">5/12-C</div>
    </vc-col>
  </vc-row>
</div>
```
:::

## 属性参数

### vc-row

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| place | 滑出方向 | string | top,right,down,left | right |
| showShade | 展示遮罩 | boolean | true,false | true |
| clickShadeClose | 点击展示关闭抽屉 | boolean | true,false | true |
| closable | 有关闭按钮 | boolean | true,false | true |
| header | 标题栏 | string | 无 | 我是标题 |
| zIndex | 层级数 | number | 无 | 9000 |
| isShow | 展示 | boolean | true,false | false |

### vc-col

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| place | 滑出方向 | string | top,right,down,left | right |
| showShade | 展示遮罩 | boolean | true,false | true |
| clickShadeClose | 点击展示关闭抽屉 | boolean | true,false | true |
| closable | 有关闭按钮 | boolean | true,false | true |
| header | 标题栏 | string | 无 | 我是标题 |
| zIndex | 层级数 | number | 无 | 9000 |
| isShow | 展示 | boolean | true,false | false |

