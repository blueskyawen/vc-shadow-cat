# 按钮组

按钮用来进行用户操作与交互  

## 使用方式

### 基本样式

:::demo
```html
<vc-button class="button-demo" :size="'max'">普通按钮</vc-button>
<vc-button class="button-demo" :size="'min'">普通按钮</vc-button>
<vc-button class="button-demo" :type="'add'" :size="'max'">添加按钮</vc-button>
<vc-button class="button-demo" :type="'add'" :size="'min'">添加按钮</vc-button>
<vc-button class="button-demo" :type="'major'" :size="'max'">重要按钮</vc-button>
<vc-button class="button-demo" :type="'major'" :size="'min'">重要按钮</vc-button>
<vc-button class="button-demo" :type="'cancel'" :size="'max'">取消按钮</vc-button>
<vc-button class="button-demo" :type="'cancel'" :size="'min'">取消按钮</vc-button>
```
:::

### 禁用样式

:::demo
```html
<vc-button class="button-demo" :disabled="true">普通按钮</vc-button>
<vc-button class="button-demo" :type="'add'" :disabled="true">添加按钮</vc-button>
<vc-button class="button-demo" :type="'major'" :disabled="true">重要按钮</vc-button>
<vc-button class="button-demo" :type="'cancel'" :disabled="true">取消按钮</vc-button>
```
:::

### 状态样式

:::demo
```html
<vc-button class="button-demo" :loading="true">普通按钮</vc-button>
<vc-button class="button-demo" :type="'add'" :loading="true">添加按钮</vc-button>
<vc-button class="button-demo" :type="'major'" :loading="true">重要按钮</vc-button>
```
:::

### 动态样式

:::demo
```html
<vc-button class="button-demo" :dnymic="true">普通按钮</vc-button>
<vc-button class="button-demo" :type="'add'" :dnymic="true">添加按钮</vc-button>
```
:::

### 自定义样式

:::demo
```html
<vc-button class="cus-show" :size="'custom'" :width="'360px'" :height="'48px'">自定义按钮</vc-button>
<vc-button class="cus-show" :size="'custom'" :width="'500px'" :height="'48px'">自定义按钮
    <span class="fa fa-chevron-right fa-fix"></span>
</vc-button>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型样式 | string | normal,add,major,cancel | normal |
| size | 尺寸大小 | string | max,min,custom | min |
| disabled | 是否禁用 | boolean | true,false | false |
| loading | 是否load | boolean | true,false | false |
| dnymic | 是否动态效果 | boolean | true,false | false |
| height | 自定义高度 | string | px或百分比 | 36px |
| width | 自定义宽度 | string | px或百分比 | 100% |

<style>
.button-demo {
    margin: 10px;
}
.cus-show {
    margin: 10px 5px;
}
.fa-fix {
    color:#fff;
    margin-left: 10px;
}
</style>
