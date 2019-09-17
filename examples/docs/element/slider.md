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
      <h4>自定义total</h4>
      <div class="demoItem">
        <vc-slider style="width: 600px" :total="150" v-model="value4"></vc-slider>
        <p class="demoText">当前值：{{value4}}</p>
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
      value3: 20,
      value4: 60
    }
  }
}
</script>
```
:::

## 带输入数值

:::demo
```html
<SliderVcDemo :type="'text'"></SliderVcDemo>
```
```javascript
<template>
  <div class="SliderVcDemo">
      <h4>正常输入</h4>
      <div class="demoItem">
        <vc-slider :withTitle="true" v-model="value5"></vc-slider>
      </div>
      <h4>自定义宽度</h4>
      <div class="demoItem">
        <vc-slider style="width: 500px" :withTitle="true" v-model="value6"></vc-slider>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SliderVcDemo',
  data () {
    return {
      value5: 60,
      value6: 30
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| total | 总数 | number | 无 | 100 |
| value | 数值 | number | 无 | 30 |
| disabled | 禁用 | boolean | true,false | false |
| withTitle | 带数值 | boolean | true,false | false |
