# 复选框

复选框checkbox，用于表单的多选项目  

## 使用方式

### 单项复选框

:::demo
```html
<CheckboxVcDemo :type="'one'"></RadioVcDemo>
```
```javascript
<template>
  <div class="CheckboxDemo">
    <p>默认选择</p>
    <span class="demoItem">
    <span class="demoLabel">是否同意: </span>
    <vc-checkbox v-model="aggre1"></vc-checkbox>
    </span>
    <p>带部分选择</p>
    <span class="demoItem">
    <span class="demoLabel">是否同意: </span>
    <vc-checkbox v-model="aggre2" :partial="true"></vc-checkbox>
    </span>
    <p>带选项值的选择</p>
    <span class="demoItem" v-for="option of options" :key="option.label">
      <vc-checkbox v-model="option.check" :value="option.label"></vc-checkbox>
    </span>
    <p>禁止选择</p>
    <span class="demoItem" v-for="option of options2" :key="option.label">
      <vc-checkbox v-model="option.check" :value="option.label" :disabled="option.disabled"></vc-checkbox>
    </span>
  </div>
</template>

<script>
export default {
  name: 'CheckboxDemo',
  data () {
    return {
        aggre1: true,
        aggre2: 1,
        options: [
          { label: '何炅', check: true },
          { label: '黄磊', check: false },
          { label: '大华', check: false }
        ],
        options2: [
          { label: '何炅', check: true, disabled: true },
          { label: '黄磊', check: false, disabled: true }
        ]
    }
  }
}
</script>
```
:::


### 多项复选框

:::demo
```html
<CheckboxVcDemo :type="'mutil'"></RadioVcDemo>
```
```javascript
<template>
  <div class="CheckboxDemo">
    <vc-mutil-checkbox :options="likes" v-model="selectValue"></vc-mutil-checkbox>
  </div>
</template>

<script>
export default {
  name: 'CheckboxDemo',
  data () {
    return {
      likes: [
        { value: 'fish', name: '鱼肉' },
        { value: 'pig', name: '猪肉' },
        { value: 'apple', name: '苹果' },
        { value: 'duck', name: '烤鸭' },
        { value: 'watermelon', name: '西瓜' }
      ],
      selectValue: ['fish']
    }
  }
}
</script>
```
:::

## 属性参数

### vc-checkbox

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| checked | 选中标志 | boolean/number | true/false,0/1(全部)/2(部分) | true |
| disabled | 是否禁用 | boolean | true,false | false |
| partial | 是否部分选择 | boolean | true,false | false |
| value | 选项文本 | string | 无 | 无 |

### vc-mutil-checkbox

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| options | 项目列表 | array | 无 | [] |
| value | 选中值 | array | 无 | [] |
