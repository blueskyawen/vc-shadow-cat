# 进度条

用于展示操作或任务的进度情况, 在操作需要较长时间才能完成时，为用户显示该操作的当前进度

## 基本样式

:::demo
```html
<ProgressVcDemo :type="'basic'"></ProgressVcDemo>
```
```javascript
<template>
  <div class="ProgressVcDemo">
    <h4>正常状态</h4>
    <div class="demoItem">
      <vc-progress :value="curValue1"></vc-progress>
    </div>
    <h4>带子动画状态</h4>
    <div class="demoItem">
      <vc-progress :value="curValue1" :total="total" :sub-dynamic="true"></vc-progress>
    </div>
    <h4>不显示进度百分比</h4>
    <div class="demoItem">
      <vc-progress :value="curValue1" :show-info="false"></vc-progress>
    </div>
    <h4>动态进度条</h4>
    <div class="demoItem">
      <vc-progress :type="'dynamic'"></vc-progress>
    </div>
    <div class="demoItem">
      <vc-button class="oper" @click="descValue">-</vc-button>
      <vc-button class="oper" @click="addValue">+</vc-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressVcDemo',
  data () {
    return {
      curValue1: 30,
      total: 100
    }
  }
}
</script>
```
:::

## 不同尺寸的进度条

:::demo
```html
<ProgressVcDemo :type="'size'"></ProgressVcDemo>
```
```javascript
<template>
  <div class="ProgressVcDemo">
    <h4>中等尺寸</h4>
    <div class="demoItem">
      <vc-progress :value="curValue2" :size="'medium'"></vc-progress>
    </div>
    <div class="demoItem">
      <vc-progress :value="curValue2" :size="'medium'" :sub-dynamic="true"></vc-progress>
    </div>
    <div class="demoItem">
      <vc-progress :value="curValue2" :size="'medium'" :show-info="false"></vc-progress>
    </div>
    <div class="demoItem">
      <vc-progress :type="'dynamic'" :size="'medium'"></vc-progress>
    </div>
    <h4>小尺寸</h4>
    <div class="demoItem">
      <vc-progress :value="curValue2" :size="'small'"></vc-progress>
    </div>
    <div class="demoItem">
      <vc-progress :value="curValue2" :size="'small'" :sub-dynamic="true"></vc-progress>
    </div>
    <div class="demoItem">
      <vc-progress :value="curValue2" :size="'small'" :show-info="false"></vc-progress>
    </div>
    <div class="demoItem">
      <vc-progress :type="'dynamic'" :size="'small'"></vc-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressVcDemo',
  data () {
    return {
      curValue2: 50
    }
  }
}
</script>
```
:::

## 自定义样式

:::demo
```html
<ProgressVcDemo :type="'manual'"></ProgressVcDemo>
```
```javascript
<template>
  <div class="ProgressVcDemo">
    <h4>设置宽度</h4>
    <div class="demoItem">
      <vc-progress style="width: 240px;" :value="curValue2" :size="'medium'"></vc-progress>
    </div>
    <h4>设置进度颜色</h4>
    <div class="demoItem">
      <vc-progress :value="curValue2" :size="'medium'" :color="'#ffa31a'"></vc-progress>
    </div>
    <h4>设置子状态颜色</h4>
    <div class="demoItem">
      <vc-progress :value="curValue2" :size="'medium'" :color="'#ffa31a'"
                   :sub-dynamic="true" :sub-color="'#00cc99'"></vc-progress>
    </div>
    <h4>设置total总数</h4>
    <div class="demoItem">
      <vc-progress :value="curValue2" :size="'medium'" :total="150"></vc-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressVcDemo',
  data () {
    return {
      curValue2: 50
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型 | string | normal,dynamic | normal |
| size | 尺寸 | string | big,medium,small | big |
| total | 总数 | number | 无 | 100 |
| value | 当前值 | number | 无 | 30 |
| color | 进度颜色 | string | 无 | #3399ff |
| subDynamic | 展示子动画状态 | boolean | true,false | false |
| subColor | 子状态颜色 | string | 无 | #99d6ff |
| showInfo | 展示进度百分比 | boolean | true,false | true |
