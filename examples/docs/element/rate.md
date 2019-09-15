# 评分条

评分星星，用于评价体验分数

## 基本样式

:::demo
```html
<RateVcDemo :type="'normal'"></RateVcDemo>
```
```javascript
<template>
  <div class="RateVcDemo">
     <vc-rate v-model="curStar"></vc-rate>
      <p class="demoText">curStar: {{curStar}}</p>
  </div>
</template>

<script>
export default {
  name: 'RateVcDemo',
  data () {
    return {
      curStar: 6
    }
  }
}
</script>
```
:::

## 自定义样式

:::demo
```html
<RateVcDemo :type="'manual'"></RateVcDemo>
```
```javascript
<template>
  <div class="RateVcDemo">
      <h4>自定义总数和文本</h4>
      <div class="demoItem">
        <vc-rate :total="5" :text="'分'" v-model="curStar1"></vc-rate>
        <p class="demoText">curStar1: {{curStar1}}</p>
      </div>
      <h4>自定义颜色和尺寸</h4>
      <div class="demoItem">
        <vc-rate :size="'36px'" :color="'#bf00ff'" v-model="curStar2"></vc-rate>
        <p class="demoText">curStar2: {{curStar2}}</p>
      </div>
      <h4>不呈现文本</h4>
      <div class="demoItem">
        <vc-rate :color="'#ff1a1a'" v-model="curStar3"></vc-rate>
        <p class="demoText">curStar3: {{curStar3}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RateVcDemo',
  data () {
    return {
      curStar1: 3,
      curStar2: 6,
      curStar3: 6
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| size | 尺寸 | string | 无 | 24px |
| color | 颜色 | string | 无 | #ff8000 |
| total | 总数 | number | 无 | 10 |
| value | 当前值 | number | 无 | 6 |
| text | 评分文本 | string | 无 | 星 |
| showTitle | 是否显示文本 | boolean | true,false | true |
