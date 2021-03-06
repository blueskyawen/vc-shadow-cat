# 多项下拉选择器

mutil-select选择器，弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，每次可选择多个项目

## 基本样式

:::demo
```html
<MutilSelectVcDemo :type="'basic'"></MutilSelectVcDemo>
```
```javascript
<template>
  <div class="MutilSelectVcDemo">
      <h4>正常状态</h4>
      <div class="demoItem">
        <vc-mutil-select :options="options" v-model="selectedItems"></vc-mutil-select>
        <p class="demoText">已选项：{{selectedItems}}</p>
      </div>
      <h4>禁用状态</h4>
      <div class="demoItem">
        <vc-mutil-select :options="options" v-model="selectedItems" :disabled="true"></vc-mutil-select>
      </div>
      <h4>部分选项禁止选择</h4>
      <div class="demoItem">
        <vc-mutil-select :options="options2" v-model="selectedItems2"></vc-mutil-select>
        <p class="demoText">已选项：{{selectedItems2}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MutilSelectVcDemo',
  data () {
    return {
      options: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems: ['iaas', 'saas'],
      options2: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: true },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: true },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems2: ['iaas', 'saas']
    }
  }
}
</script>
```
:::

## 复选框样式

:::demo
```html
<MutilSelectVcDemo :type="'checkbox'"></MutilSelectVcDemo>
```
```javascript
<template>
  <div class="MutilSelectVcDemo">
      <h4>正常复选框</h4>
      <div class="demoItem">
        <vc-mutil-select :options="options" :has-checkbox="true" v-model="selectedItems"></vc-mutil-select>
        <p class="demoText">已选项：{{selectedItems}}</p>
      </div>
      <h4>带全选</h4>
      <div class="demoItem">
        <vc-mutil-select :options="options2" :has-checkbox="true" :all-check="true"
                         v-model="selectedItems2"></vc-mutil-select>
        <p class="demoText">已选项：{{selectedItems2}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MutilSelectVcDemo',
  data () {
    return {
      options: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems: ['iaas', 'saas'],
      options2: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems2: ['iaas', 'saas']
    }
  }
}
</script>
```
:::

## 仅显示选择个数

:::demo
```html
<MutilSelectVcDemo :type="'num'"></MutilSelectVcDemo>
```
```javascript
<template>
  <div class="MutilSelectVcDemo">
      <div class="demoItem">
        <vc-mutil-select :options="options" :show-check-num="true" v-model="selectedItems"></vc-mutil-select>
      </div>
      <div class="demoItem">
        <vc-mutil-select :options="options2" :has-checkbox="true" :show-check-num="true"
                         v-model="selectedItems2"></vc-mutil-select>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MutilSelectVcDemo',
  data () {
    return {
      options: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems: ['iaas', 'saas'],
      options2: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems2: ['iaas', 'saas']
    }
  }
}
</script>
```
:::

## 自定义尺寸宽度

:::demo
```html
<MutilSelectVcDemo :type="'manual'"></MutilSelectVcDemo>
```
```javascript
<template>
  <div class="MutilSelectVcDemo">
      <div class="demoItem">
        <vc-mutil-select style="width: 300px" :options="options" v-model="selectedItems"></vc-mutil-select>
      </div>
      <div class="demoItem">
        <vc-mutil-select style="width: 600px" :options="options" v-model="selectedItems"></vc-mutil-select>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MutilSelectVcDemo',
  data () {
    return {
      options: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems: ['iaas', 'saas']
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
| selection | 已选择值列表 | array | 无 | [] |
| disabled | 禁用 | boolean | true,false | false |
| hasCheckbox | 复选框样式 | boolean | true,false | false |
| allCheck | 带全选 | boolean | true,false | false |
| showCheckNum | 仅显示选择数目 | boolean | true,false | false |
