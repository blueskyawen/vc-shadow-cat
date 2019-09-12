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
    <vc-num-input v-model="count1"></vc-num-input>
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
      count5: 10
    }
  }
}
</script>
```
:::
