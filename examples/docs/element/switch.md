# 开关

switch，用于表示项目的启用或禁止

## 使用方式

### 基本样式

:::demo
```html
<SwitchVcDemo></SwitchVcDemo>
```
```javascript
<template>
  <div class="SwitchDemo">
      <vc-switch :type="'max'" v-model="switchs[0]" :disabled="true"></vc-switch>
      <vc-switch :type="'min'" v-model="switchs[1]" :disabled="true"></vc-switch>
  </div>
</template>

<script>
export default {
  name: 'SwitchDemo',
  data () {
    return {
      switchs: [true, false]
    }
  }
}
</script>
```
:::

### 个性化文本样式

:::demo
```html
<SwitchVcDemo :type="'label'"></SwitchVcDemo>
```
```javascript
<template>
  <div class="SwitchDemo">
      <vc-switch :type="'max'" v-model="switchs[0]" :disabled="true"></vc-switch>
      <vc-switch :type="'min'" v-model="switchs[1]" :disabled="true"></vc-switch>
  </div>
</template>

<script>
export default {
  name: 'SwitchDemo',
  data () {
    return {
      switchs: [true, false]
    }
  }
}
</script>
```
:::

### 禁用样式

:::demo
```html
<SwitchVcDemo :type="'disable'"></SwitchVcDemo>
```
```javascript
<template>
  <div class="SwitchDemo">
      <vc-switch :type="'max'" v-model="switchs[0]" :disabled="true"></vc-switch>
      <vc-switch :type="'min'" v-model="switchs[1]" :disabled="true"></vc-switch>
  </div>
</template>

<script>
export default {
  name: 'SwitchDemo',
  data () {
    return {
      switchs: [true, false]
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 尺寸大小 | string | max,min | max |
| switch | 开关值 | boolean | true,false | true |
| disabled | 是否禁用 | boolean | true,false | false |
| tipLabels | 自定义文本 | array | 无 | [] |
