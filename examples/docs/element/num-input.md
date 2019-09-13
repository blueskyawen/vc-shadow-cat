# 数字输入框

数字输入框,通过鼠标或键盘，输入范围内的数值

:::demo
```html
<NumInputVcDemo></NumInputVcDemo>
```
```javascript
<template>
  <div class="NumInputVcDemo">
    <p>不同尺寸</p>
    <vc-num-input class="demoItem" v-model="count1"></vc-num-input>
    <vc-num-input class="demoItem" v-model="count2" :size="'middle'"></vc-num-input>
    <vc-num-input class="demoItem" v-model="count3" :size="'small'"></vc-num-input>
    <p>自定义边界值和单步step值</p>
    <vc-num-input class="demoItem" v-model="count4" :min="20" :max="80" :step="5"></vc-num-input>
    <p>禁用样式</p>
    <vc-num-input class="demoItem" v-model="count5" :disabled="true"></vc-num-input>
    <vc-num-input class="demoItem" v-model="count6" :size="'middle'" :disabled="true"></vc-num-input>
    <vc-num-input class="demoItem" v-model="count6" :size="'small'" :disabled="true"></vc-num-input>
  </div>
</template>

<script>
export default {
  name: 'NumInputVcDemo',
  data () {
    return {
      count1: 6,
      count2: 7,
      count3: 8,
      count4: 9,
      count5: 10,
      count6: 12
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| size | 尺寸大小 | string | large,moddle,small | large |
| max | 最大值 | number | 无 | 99 |
| min | 最小值 | number | 无 | 0 |
| step | 步长 | number | 无 | 1 |
| disabled | 禁用 | boolean | true,false | false |
| value | 输入值 | number | 无 | 66 |
