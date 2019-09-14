# 提示工具

简单的文字提示气泡框，鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。
可用来代替系统默认的 title 提示，提供一个文字/操作的帮助解释

## 文字提示

:::demo
```html
<TooltipVcDemo :type="'info'"></TooltipVcDemo>
```
```javascript
<template>
  <div class="TooltipVcDemo">
      <vc-tooltip :type="'prompt'" :place="'right'">
        <template v-slot:title>我在右边</template>
        <p>我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边</p>
      </vc-tooltip>
      <vc-tooltip :type="'prompt'" :place="'left'">
        <template v-slot:title>我在左边</template>
        <p>我在左边</p>
      </vc-tooltip>
      <vc-tooltip :type="'prompt'" :place="'top'">
        <template v-slot:title>我在上边</template>
        <p>我在上边</p>
      </vc-tooltip>
      <vc-tooltip :type="'prompt'" :place="'bottom'">
        <template v-slot:title>我在下边</template>
        <p>我在下边</p>
      </vc-tooltip>
  </div>
</template>

<script>
export default {
  name: 'TooltipVcDemo',
  props: {
    type: String
  }
}
</script>
```
:::

## 帮助提示

:::demo
```html
<TooltipVcDemo :type="'help'"></TooltipVcDemo>
```
```javascript
<template>
  <div class="TooltipVcDemo">
    <vc-tooltip :type="'help'" :helpStyle="'default'" :place="'right'">
      <p>我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边</p>
    </vc-tooltip>
    <vc-tooltip :type="'help'" :helpStyle="'normal'" :place="'left'">
      <p>我在左边</p>
    </vc-tooltip>
    <vc-tooltip :type="'help'" :helpTitle="'?'" :helpStyle="'warn'" :place="'top'">
      <p>我在上边</p>
    </vc-tooltip>
    <vc-tooltip :type="'help'" :helpTitle="'?'" :helpStyle="'error'" :place="'bottom'">
      <p>我在下边</p>
    </vc-tooltip>
  </div>
</template>

<script>
export default {
  name: 'TooltipVcDemo',
  props: {
    type: String
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型样式 | string | prompt,help | prompt |
| place | 呈现位置 | string | top,bottom,left,right | right |
| helpTitle | 帮助提示文本 | string | 无 | ? |
| helpStyle | 帮助提示样式 | string | default,normal,warn,error | default |
