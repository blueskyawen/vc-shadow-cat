# 滑动输入条

滑动型输入器，展示当前值和可选范围

## 基本样式

:::demo
```html
<SliderVcDemo :type="'basic'"></SliderVcDemo>
```
```javascript
<template>
  <div class="SliderVcDemo">
      <h4>正常输入</h4>
      <div class="demoItem">
        <vc-slider v-model="value1"></vc-slider>
        <p class="demoText">当前值：{{value1}}</p>
      </div>
      <h4>禁止输入</h4>
      <div class="demoItem">
        <vc-slider :disabled="true" v-model="value2"></vc-slider>
        <p class="demoText">当前值：{{value2}}</p>
      </div>
      <h4>自定义宽度</h4>
      <div class="demoItem">
        <vc-slider style="width: 500px" v-model="value3"></vc-slider>
        <p class="demoText">当前值：{{value3}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SliderVcDemo',
  data () {
    return {
      value1: 30,
      value2: 40,
      value3: 20
    }
  }
}
</script>
```
:::
