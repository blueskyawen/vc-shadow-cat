# 饼环状图

直观的向用户提供一种数据比例的呈现方式

## 饼状图

:::demo
```html
<PieVcDemo :type="'pie'"></PieVcDemo>
```
```javascript
<div class="PieVcDemo">
  <vc-pie v-for="(option, index) of options" :key="index" :header="option.title" :pie-data="option.data"
          :type="'pie'"></vc-pie>
</div>

<script>
export default {
  name: 'PieVcDemo',
  data () {
    return {
      options: [
        { title: '使用率',
          type: 'pie',
          data: [{ title: '已使用', value: 37 }, { title: '总共', value: 100 }]
        },
        { title: '使用率',
          type: 'pie',
          data: [{ title: '已使用', value: 75 }, { title: '总共', value: 100 }]
        },
        { title: '使用率',
          type: 'pie',
          data: [{ title: '已使用', value: 90 }, { title: '总共', value: 100 }]
        }
      ]
    }
  }
}
</script>
```
:::

## 环状图

:::demo
```html
<PieVcDemo :type="'ring'"></PieVcDemo>
```
```javascript
<div class="PieVcDemo">
  <vc-pie v-for="(option, index) of options" :key="index" :header="option.title" :pie-data="option.data"
          :type="'ring'"></vc-pie>
</div>

<script>
export default {
  name: 'PieVcDemo',
  data () {
    return {
      options: [
        { title: '使用率',
          type: 'pie',
          data: [{ title: '已使用', value: 37 }, { title: '总共', value: 100 }]
        },
        { title: '使用率',
          type: 'pie',
          data: [{ title: '已使用', value: 75 }, { title: '总共', value: 100 }]
        },
        { title: '使用率',
          type: 'pie',
          data: [{ title: '已使用', value: 90 }, { title: '总共', value: 100 }]
        }
      ]
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| header | 标题 | string | 无 | 使用率 |
| type | 类型 | string | pie,ring | pie |
| pieData | 数据 | array | 无 | [] |
