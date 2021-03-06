# 过滤器

用于一些常见的文本格式化和数据的显示转化，可用在插值表达式和属性绑定表达式，类似于angular里的管道。
本库封装了一些常见的过滤器方便使用，过滤器使用方式

    {{ data | filter_name(...args) | filter_name2(...args) | ... }}

## 示例

:::demo
```html
<FilterVcDemo></FilterVcDemo>
```
```javascript
<template>
  <div class="FilterVcDemo">
    <h4>vcLowercase：把文本转换成全小写形式</h4>
    <div class="demoItem">{{message | vcLowercase}}</div>
    <h4>vcLowercase：把文本转换成全大写形式</h4>
    <div class="demoItem">{{message | vcUpperCase}}</div>
    <h4>vcSlice(start[, :end])：从一个 Array 或 String 中创建其元素一个新子集（slice）</h4>
    <div class="demoItem">String类型: {{message | vcSlice(3)}}</div>
    <div class="demoItem">String类型: {{message | vcSlice(3, 9)}}</div>
    <div class="demoItem">Array类型: {{items | vcSlice(2, 7)}}</div>
    <h4>vcKeyValue：把对象或映射转换为键值对数组</h4>
    <div class="demoItem">{{person | vcKeyValue}}</div>
    <h4>vcPercent([: digitsInfo])：把数字转换成百分比字符串，可指定小数位数</h4>
    <div class="demoItem">默认：{{num | vcPercent}}</div>
    <div class="demoItem">指定小数位数：{{num | vcPercent(3)}}</div>
    <h4>vcJson([: space])：把对象转换成 JSON 格式，可指定分隔形式</h4>
    <div class="demoItem">默认：{{person | vcJson}}</div>
    <div class="demoItem">指定分隔：{{person | vcJson('###')}}</div>
    <h4>vcDateFormat([: format, : lang])：根据设置规则格式化日期值</h4>
    <div class="demoItem">默认：{{date | vcDateFormat}}</div>
  </div>
</template>

<script>
export default {
  name: 'FilterVcDemo',
  data () {
    return {
      message: 'Hello Vc-Shadow-Cat !',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      person: { name: '李雷', age: 18, country: '中国', city: '上海', like: ['fish', 'tea'] },
      num: 0.3142309621,
      date: new Date()
    }
  }
}
</script>
```
:::
