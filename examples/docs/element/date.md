# 时间日期选择器

输入选择日期或时间的控件

## 日期选择器

:::demo
```html
<DateVcDemo :type="'date'"></DateVcDemo>
```
```javascript
  <div class="demoItem">
    <h4>单面板(可配合其他操作使用,比如：按钮)</h4>
    <vc-date-select style="width: 360px"  v-model="date"></vc-date-select>
    <p>选择日期：{{date | vcDateFormat}}</p>
  </div>
  <div class="demoItem">
    <h4>带选择框</h4>
    <vc-date-select style="width: 360px" v-model="date2" :type="'input'"></vc-date-select>
  </div>
</script>
```
:::

## 时间选择器

:::demo
```html
<DateVcDemo :type="'time'"></DateVcDemo>
```
```javascript
  <div class="demoItem">
    <h4>单面板</h4>
    <vc-time-select style="width: 360px" v-model="date" :type="'single'"></vc-time-select>
    <p>选择时间：{{date | vcDateFormat}}</p>
  </div>
  <div class="demoItem">
    <h4>带选择框</h4>
    <vc-time-select style="width: 360px" v-model="date2" :type="'input'"></vc-time-select>
  </div>
</script>
```
:::

## 时间和日期选择器

:::demo
```html
<DateVcDemo :type="'dateTime'"></DateVcDemo>
```
```javascript
  <div class="demoItem">
    <h4>单面板</h4>
    <vc-date-time-select style="width: 360px" v-model="date"></vc-date-time-select>
    <p>选择日期：{{date | vcDateFormat}}</p>
  </div>
  <div class="demoItem">
    <h4>带选择框</h4>
    <vc-date-time-select style="width: 360px" v-model="date2" :type="'input'"></vc-date-time-select>
  </div>
</script>
```
:::

## 属性参数

### vc-date-select

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型 | string | single,input | single |
| value | 当前值 | date | 无 |  |
| noShadow | 无框阴影 | boolean | true,false | false |
| format | 文本格式 | string | 无 | yyyy/mm/dd |

### vc-time-select

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型 | string | single,input | single |
| value | 当前值 | date | 无 |  |
| disableHours | 禁用小时 | array | 无 | [] |
| disableMinutes | 禁用分钟 | array | 无 | [] |
| disableSeconds | 禁用秒 | array | 无 | [] |
| noShadow | 无框阴影 | boolean | true,false | false |
| format | 文本格式 | string | 无 | hh:mm:ss |

### vc-date-time-select

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型 | string | single,input | single |
| value | 当前值 | date | 无 |  |
| format | 文本格式 | string | 无 | yyyy/mm/dd hh:mm:ss |
