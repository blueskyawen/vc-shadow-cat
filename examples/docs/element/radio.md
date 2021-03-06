# 单选框

单选框radio，用于表单的单选项目  

## 使用方式

### 基本样式

:::demo
```html
<RadioVcDemo></RadioVcDemo>
```
```javascript
<template>
  <div class="SwitchDemo">
      <vc-radio :options="options" v-model="checkValue"></vc-radio>
  </div>
</template>

<script>
export default {
  name: 'SwitchDemo',
  data () {
    return {
      options: [
        { label: '何炅', value: 'hejiong', disabled: false },
        { label: '黄磊', value: 'huanlei', disabled: false },
        { label: '大华', value: 'dahua', disabled: false }
      ],
      checkValue: 'huanlei'
    }
  }
}
</script>
```
:::

### 禁用样式

:::demo
```html
<RadioVcDemo :typez="'disable'"></RadioVcDemo>
```
```javascript
<template>
  <div class="SwitchDemo">
      <vc-radio :options="options2" v-model="checkValue"></vc-radio>
      <vc-radio :options="option3" v-model="checkValue"></vc-radio>
  </div>
</template>

<script>
export default {
  name: 'SwitchDemo',
  data () {
    return {
      options2: [
        { label: '何炅', value: 'hejiong', disabled: true },
        { label: '黄磊', value: 'huanlei', disabled: true },
        { label: '大华', value: 'dahua', disabled: false }
      ],
      options3: [
        { label: '何炅', value: 'hejiong', disabled: true },
        { label: '黄磊', value: 'huanlei', disabled: false },
        { label: '大华', value: 'dahua', disabled: false }
      ],
      checkValue: 'huanlei'
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| options | 项目列表 | array | 无 | [] |
| value | 选中值 | string | 无 | 无 |
