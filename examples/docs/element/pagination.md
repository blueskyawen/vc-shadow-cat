# 分页条

一种无序列表，常用于项目或表格分页

## 使用示例

:::demo
```html
<PaginationVcDemo></PaginationVcDemo>
```
```javascript
<template>
  <div class="PaginationVcDemo">
    <h4>默认样式</h4>
    <div class="demoItem">
      <vc-pagination></vc-pagination>
    </div>
    <div class="demoItem">
      <vc-pagination :appear-num="5"></vc-pagination>
    </div>
    <div class="demoItem">
      <vc-pagination :appear-num="10" :page-num="20" v-model="curPage1"></vc-pagination>
    </div>
    <div class="demoItem">
      <vc-pagination></vc-pagination>
    </div>
    <h4>边框样式</h4>
    <div class="demoItem">
      <vc-pagination :have-border="true" :appear-num="6"></vc-pagination>
    </div>
    <div class="demoItem">
      <vc-pagination :have-border="true" :appear-num="8"></vc-pagination>
    </div>
    <div class="demoItem">
      <vc-pagination :have-border="true" :appear-num="10" :page-num="30" v-model="curPage2"></vc-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationVcDemo',
  data () {
    return {
      curPage1: 6,
      curPage2: 16
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| haveBorder | 带边框 | boolean | true,false | false |
| pageNum | 总页数 | number | 无 | 10 |
| appearNum | 可见页数 | number | 无 | 6 |
| curPage | 当前选中值 | number | 无 | 1 |
