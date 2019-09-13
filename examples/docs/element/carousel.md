# 轮播

轮播图，一种灵活的、响应式的向站点添加滑块的方式

## 播放样式

:::demo
```html
<CarouselVcDemo :type="'normal'"></CarouselVcDemo>
```
```javascript
<template>
  <div class="CarouselVcDemo">
      <p>渐显播放</p>
      <div class="demoItem">
        <vc-carousel :captions="options" v-model="curIndex"></vc-carousel>
        <div class="demoLabel">当前播放项索引: {{curIndex}}</div>
      </div>
      <p>滑动播放</p>
      <div class="demoItem">
        <vc-carousel :effect="'slide'" :captions="options2" v-model="curIndex2"></vc-carousel>
        <div class="demoLabel">当前播放项索引: {{curIndex2}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'InfoVcDemo',
  props: {
    type: String
  },
  data () {
    return {
    return {
      options: [
        { url: require('../../assets/images/carousel-photo01.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo01') }
        },
        { url: require('../../assets/images/carousel-photo02.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo02') }
        },
        { url: require('../../assets/images/carousel-photo03.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo03') }
        },
        { url: require('../../assets/images/carousel-photo04.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo04') }
        },
        { url: require('../../assets/images/carousel-photo05.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo05') }
        }
      ],
      curIndex: 0,
      options2: [],
      curIndex2: 0
    }
  }
}
</script>
```
:::

## 自定义尺寸/圆角和默认首页项

:::demo
```html
<CarouselVcDemo :type="'manual'"></CarouselVcDemo>
```
```javascript
<template>
  <div class="CarouselVcDemo">
      <div class="demoItem">
        <vc-carousel style="height: 450px;width: 60%;" :captions="options3"
                     :circular-bead="'6px'" v-model="curIndex3"></vc-carousel>
        <div class="demoLabel">当前播放项索引: {{curIndex3}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'InfoVcDemo',
  props: {
    type: String
  },
  data () {
    return {
    return {
      options: [
        { url: require('../../assets/images/carousel-photo01.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo01') }
        },
        { url: require('../../assets/images/carousel-photo02.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo02') }
        },
        { url: require('../../assets/images/carousel-photo03.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo03') }
        },
        { url: require('../../assets/images/carousel-photo04.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo04') }
        },
        { url: require('../../assets/images/carousel-photo05.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo05') }
        }
      ],
      curIndex: 2
    }
  }
}
</script>
```
:::

## 自动播放设置

:::demo
```html
<CarouselVcDemo :type="'auto'"></CarouselVcDemo>
```
```javascript
<template>
  <div class="CarouselVcDemo">
      <p>打开自动播放和间隔时间设置</p>
      <div class="demoItem">
        <vc-carousel style="height: 450px;width: 60%;" :captions="options" :auto-play="true" :timerlen="8000"
                     :circular-bead="'6px'" v-model="curIndex"></vc-carousel>
      </div>
      <p>鼠标放置其上暂停播放，离开后继续</p>
      <div class="demoItem">
        <vc-carousel style="height: 450px;width: 60%;" :captions="options" :auto-play="true" :pause="true"
                     :circular-bead="'6px'" v-model="curIndex2"></vc-carousel>
      </div>
  </div>
</template>

<script>
export default {
  name: 'InfoVcDemo',
  props: {
    type: String
  },
  data () {
    return {
    return {
      options: [
        { url: require('../../assets/images/carousel-photo01.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo01') }
        },
        { url: require('../../assets/images/carousel-photo02.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo02') }
        },
        { url: require('../../assets/images/carousel-photo03.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo03') }
        },
        { url: require('../../assets/images/carousel-photo04.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo04') }
        },
        { url: require('../../assets/images/carousel-photo05.jpg'),
          disabled: false,
          callback: () => { console.log('callback: photo05') }
        }
      ],
      curIndex: 0,
      curIndex2: 2
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| captions | 项目列表 | array | 无 | [] |
| effect | 播放类型 | string | slide/fade | fade |
| autoPlay | 自动播放 | boolean | true,false | false |
| timerlen | 自动播放间隔时间 | number(ms) | 无 | 6000 |
| pause | 鼠标浮动暂停播放 | boolean | true,false | false |
| circularBead | 圆角尺寸 | string | 无 | '' |
| curIndex | 默认显示项目 | number | 无 | 0 |
