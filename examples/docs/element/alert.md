# 警告提示

展现需要关注的信息, 当某个页面需要向用户显示警告的信息时使用，非浮层的静态展现形式，始终展现，不会自动消失，可以点击关闭

## 基本样式

:::demo
```html
<AlertVcDemo :type="'basic'"></AlertVcDemo>
```
```javascript
<div class="AlertVcDemo">
  <h4>普通提示</h4>
  <vc-alert :show="true" :type="'success'" :header="'成功, 很好地完成了提交!'"></vc-alert>
  <vc-alert :show="true" :type="'info'" :header="'信息, 注意这个信息!'"></vc-alert>
  <vc-alert :show="true" :type="'warn'" :header="'警告, 请不要提交!'"></vc-alert>
  <vc-alert :show="true" :type="'danger'" :header="'错误, 请进行一些更改!'"></vc-alert>
  <h4>带关闭按钮</h4>
  <vc-alert v-model="shows0" :type="'success'" :header="'成功, 很好地完成了提交!'" :closable="true"></vc-alert>
  <vc-alert v-model="shows1" :type="'info'" :header="'信息, 注意这个信息!'" :closable="true"></vc-alert>
  <vc-alert v-model="shows2" :type="'warn'" :header="'警告, 请不要提交!'" :closable="true"></vc-alert>
  <vc-alert v-model="shows3" :type="'danger'" :header="'错误, 请进行一些更改!'" :closable="true"></vc-alert>
  <h4>带图标</h4>
  <vc-alert v-model="shows20" :type="'success'" :header="'成功, 很好地完成了提交!'"
                :closable="true" :show-icon="true"></vc-alert>
  <vc-alert v-model="shows21" :type="'info'" :header="'信息, 注意这个信息!'"
                :closable="true" :show-icon="true"></vc-alert>
  <vc-alert v-model="shows22" :type="'warn'" :header="'警告, 请不要提交!'"
                :closable="true" :show-icon="true"></vc-alert>
  <vc-alert v-model="shows23" :type="'danger'" :header="'错误, 请进行一些更改!'"
                :closable="true" :show-icon="true"></vc-alert>
</div>
```
:::

## 自定义样式

:::demo
```html
<AlertVcDemo :type="'advance'"></AlertVcDemo>
```
```javascript
<div class="AlertVcDemo">
  <h4>自定义宽度</h4>
  <vc-alert style="width: 300px;" :show="true" :type="'success'" :header="'成功, 很好地完成了提交!'"
            :show-icon="true"></vc-alert>
  <vc-alert style="width: 400px;" :show="true" :type="'info'" :header="'信息, 注意这个信息!'"
            :show-icon="true"></vc-alert>
  <vc-alert style="width: 600px;" :show="true" :type="'warn'" :header="'警告, 请不要提交!'"
            :show-icon="true"></vc-alert>
  <vc-alert style="width: 800px;" :show="true" :type="'danger'" :header="'错误, 请进行一些更改!'"
            :show-icon="true"></vc-alert>
  <h4>带辅助性文字介绍</h4>
  <vc-alert :show="true" :type="'success'" :header="'成功, 很好地完成了提交!'" :show-icon="true">
    Success Description Success Description Success Description
  </vc-alert>
  <vc-alert :show="true" :type="'info'" :header="'信息, 注意这个信息!'" :show-icon="true" :closable="true">
    Info Description Info Description Info Description
  </vc-alert>
</div>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型 | string | success,info,warn,danger | success |
| closable | 有关闭按钮 | boolean | true,false | false |
| showIcon | 带图标 | boolean | true,false | false |
| header | 提示内容 | string | 无 | header |
| show | 展示提示 | boolean | true,false | false |
