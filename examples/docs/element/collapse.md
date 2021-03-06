# 折叠面板

可以折叠/展开的内容区域，常用于折叠显示一些文档或表单输入

## 基本样式

:::demo
```html
<CollapseVcDemo :type="'basic'"></CollapseVcDemo>
```
```javascript
<template>
  <div class="CollapseVcDemo">
      <vc-collapse>
        <vc-panel v-for="(option, index) in options" :key="index" :header-title="option.header" v-model="option.active">
          <p v-if="index === 0">杨过，名过，字改之，是金庸武侠小说《神雕侠侣》[1]  中的主人公，前作《射雕英雄传》中杨康与穆念慈之子，西毒欧阳锋的义子。
            名字为郭靖、黄蓉所取，取“有过则改之”之意。</p>
          <p v-if="index === 1">小龙女，是金庸小说《神雕侠侣》的女主角，金庸笔下广受读者喜爱的女角之一。容貌秀美若仙、清丽绝俗。性格宽容恬淡、天真可爱。
            武功轻灵飘逸，于婀娜妩媚中击敌制胜</p>
          <p v-if="index === 2">黄药师，外号“东邪”，天下“五绝”之一，是金庸武侠小说《射雕英雄传》和《神雕侠侣》中的角色。是黄蓉之父，
            对其妻冯氏（小字阿衡）一往情深。</p>
        </vc-panel>
      </vc-collapse>
  </div>
</template>

<script>
export default {
    name: 'CollapseVcDemo',
    data () {
      return {
          options: [
            { header: '杨过', active: false, disable: false },
            { header: '小龙女', active: false, disable: false },
            { header: '黄药师', active: false, disable: false }
          ]
      }
    }
}
</script>
```
:::

## 定义默认展开和禁止

:::demo
```html
<CollapseVcDemo :type="'advance'"></CollapseVcDemo>
```
```javascript
<template>
  <div class="CollapseVcDemo">
      <vc-collapse>
        <vc-panel v-for="(option, index) in options" :key="index" :header-title="option.header"
                  :disable="option.disable" v-model="option.active">
          <p v-if="index === 0">杨过，名过，字改之，是金庸武侠小说《神雕侠侣》[1]  中的主人公，前作《射雕英雄传》中杨康与穆念慈之子，西毒欧阳锋的义子。
            名字为郭靖、黄蓉所取，取“有过则改之”之意。</p>
          <p v-if="index === 1">小龙女，是金庸小说《神雕侠侣》的女主角，金庸笔下广受读者喜爱的女角之一。容貌秀美若仙、清丽绝俗。性格宽容恬淡、天真可爱。
            武功轻灵飘逸，于婀娜妩媚中击敌制胜</p>
          <p v-if="index === 2">黄药师，外号“东邪”，天下“五绝”之一，是金庸武侠小说《射雕英雄传》和《神雕侠侣》中的角色。是黄蓉之父，
            对其妻冯氏（小字阿衡）一往情深。</p>
        </vc-panel>
      </vc-collapse>
  </div>
</template>

<script>
export default {
  name: 'CollapseVcDemo',
  data () {
    return {
      options: [
        { header: '杨过', active: false, disable: false },
        { header: '小龙女', active: false, disable: false },
        { header: '黄药师', active: false, disable: false }
      ]
    }
  }
}
</script>
```
:::

## 自定义宽度和行为

:::demo
```html
<CollapseVcDemo :type="'manual'"></CollapseVcDemo>
```
```javascript
<template>
  <div class="CollapseVcDemo">
      <vc-collapse style="width: 100%;">
        <vc-panel v-for="(option, index) in options" :key="index" :header-title="option.header"
                  v-model="option.active" @change="panelChange(option)">
          <p v-if="index === 0">杨过，名过，字改之，是金庸武侠小说《神雕侠侣》[1]  中的主人公，前作《射雕英雄传》中杨康与穆念慈之子，西毒欧阳锋的义子。
            名字为郭靖、黄蓉所取，取“有过则改之”之意。</p>
          <p v-if="index === 1">小龙女，是金庸小说《神雕侠侣》的女主角，金庸笔下广受读者喜爱的女角之一。容貌秀美若仙、清丽绝俗。性格宽容恬淡、天真可爱。
            武功轻灵飘逸，于婀娜妩媚中击敌制胜</p>
          <p v-if="index === 2">黄药师，外号“东邪”，天下“五绝”之一，是金庸武侠小说《射雕英雄传》和《神雕侠侣》中的角色。是黄蓉之父，
            对其妻冯氏（小字阿衡）一往情深。</p>
        </vc-panel>
      </vc-collapse>
  </div>
</template>

<script>
export default {
    name: 'CollapseVcDemo',
    data () {
    return {
      options: [
        { header: '杨过', active: false, disable: false },
        { header: '小龙女', active: false, disable: false },
        { header: '黄药师', active: false, disable: false }
      ]
    }
    },
    methods: {
      panelChange: function (option) {
        this.options.forEach(item => {
          if (item.header !== option.header) {
            item.active = false
          }
        })
      }
    }
}
</script>
```
:::

## 属性参数(vc-panel)

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| headerTitle | 标题 | string | 无 | header |
| disable | 禁用 | boolean | true,false | false |
| active | 激活 | boolean | true,false | false |
