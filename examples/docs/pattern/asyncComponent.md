# 动态异步组件

用于动态加载一些常用的异步组件，配合一旦配置参数可实现先缓存和简单出入场动画，使用方式：

    <vc-async-component :path="component_path></vc-async-component>
    
暂时只支持使用绝对路径加载。

## 基本样式

:::demo
```html
<AsyncComponentVcDemo :type="'basic'"></AsyncComponentVcDemo>
```
```javascript
<template>
  <div class="AsyncComponentDemo">
    <vc-async-component :path="componentPath" :keep-alive="isKeepAlive" :transition="isTransition">
    </vc-async-component>
  </div>
</template>

<script>
export default {
  name: 'AsyncComponentDemo',
  data () {
    return {
      inputPath: 'components/demo/CheckboxVcDemo',
      componentPath: 'components/demo/CheckboxVcDemo',
      isKeepAlive: false,
      isTransition: false,
    }
  },
  methods: {
    loadComponent: function (index) {
      this.componentPath = this.inputPath
    }
  }
}
</script>
```
:::

## 自定义参数和动画类

## 基本样式

:::demo
```html
<AsyncComponentVcDemo :type="'advance'"></AsyncComponentVcDemo>
```
```javascript
<template>
  <div class="AsyncComponentDemo">
    <vc-async-component :path="componentPath" :delay="delayLen" :timeout="timeoutLen"
                        :transition="true" :transition-class="asyncClass">
    </vc-async-component>
  </div>
</template>

<script>
export default {
  name: 'AsyncComponentDemo',
  data () {
    return {
      inputPath: 'components/demo/FilterVcDemo2',
      componentPath: 'components/demo/FilterVcDemo2',
      delayLen: 100,
      timeoutLen: 5000,
      asyncClass: {
        enter: 'async-enter',
        enterActive: 'async-enter-active',
        enterTo: 'async-enter-to',
        leave: 'async-leave',
        leaveActive: 'async-leave-active',
        leaveTo: 'async-leave-to'
      }
    }
  },
  methods: {
    loadComponent: function (index) {
      this.componentPath = this.inputPath
    }
  }
}
</script>
```
:::

## 属性参数
| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| path | 组件绝对路径 | string |  |  |
| transition | 出入场动画 | boolean | true,false | false |
| keep alive | 实例缓存 | boolean | true,false | false |
| delay | 加载延时 | number(ms) |  | 200 |
| timeout | 加载超时时间 | number(ms) |  | 3000 |
| transitionClass | 自定义出入场样式类 | object | 无 | { enter: 'v-enter',enterTo: 'v-enter-to',enterActive: 'v-enter-active',leave: 'v-leave',leaveTo: 'v-leave-to',leaveActive: 'v-leave-active' } |
