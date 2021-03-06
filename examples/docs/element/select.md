# 单项下拉选择器

select选择器，弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，每次只选择一个项目

## 使用示例

:::demo
```html
<SelectVcDemo></SelectVcDemo>
```
```javascript
<template>
  <div class="SelectVcDemo">
    <h4>基本样式</h4>
    <div class="demoItem">
      <vc-select :options="selectOptions" v-model="selectValue"></vc-select>
      <p class="demoText">selectValue: {{selectValue}}</p>
    </div>
    <h4>禁用样式</h4>
    <div class="demoItem">
      <vc-select :options="selectOptions" v-model="selectValue" :disabled="true"></vc-select>
    </div>
    <h4>部分选项禁止选择</h4>
    <div class="demoItem">
      <vc-select :options="selectOptions2" v-model="selectValue2"></vc-select>
    </div>
    <h4>自定义尺寸</h4>
    <div class="demoItem">
      <vc-select style="height: 50px;width: 300px" :options="selectOptions3" v-model="selectValue3"></vc-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectVcDemo',
  data () {
    return {
      selectOptions: [
        { label: 'paletx-UI', value: 'paletxui', disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas-Saas-Saas-Saas-Saas-Saas-Saas-Saas-Saas-Saas-Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectValue: '',
      selectOptions2: [
        { label: 'paletx-UI', value: 'paletxui', disable: false },
        { label: 'Iaas', value: 'iaas', disable: true },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas-Saas-Saas-Saas-Saas', value: 'saas', disable: true },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectValue2: '',
      selectOptions3: [
        { label: 'paletx-UI', value: 'paletxui', disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas-Saas-Saas-Saas-Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectValue3: ''
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| options | 选项列表 | array | 无 | [] |
| disabled | 禁用 | boolean | true,false | false |
| value | 当前选择值 | string | 无 | '' |
