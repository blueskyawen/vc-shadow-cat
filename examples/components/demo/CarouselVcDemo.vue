<template>
  <div class="CarouselVcDemo">
    <div v-if="type === 'normal'">
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
    <div v-if="type === 'manual'">
      <div class="demoItem">
        <vc-carousel style="height: 450px;width: 65%;" :captions="options3"
                     :circular-bead="'6px'" v-model="curIndex3"></vc-carousel>
        <div class="demoLabel">当前播放项索引: {{curIndex3}}</div>
      </div>
    </div>
    <div v-if="type === 'auto'">
      <p>打开自动播放和间隔时间设置</p>
      <div class="demoItem">
        <vc-carousel style="height: 450px;width: 65%;" :captions="options4" :auto-play="true" :timerlen="8000"
                     :circular-bead="'6px'" v-model="curIndex4"></vc-carousel>
      </div>
      <p>鼠标放置其上暂停播放，离开后继续</p>
      <div class="demoItem">
        <vc-carousel style="height: 450px;width: 65%;" :captions="options5" :auto-play="true" :pause="true"
                     :circular-bead="'6px'" v-model="curIndex5"></vc-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselVcDemo',
  props: {
    type: String
  },
  data () {
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
      curIndex2: 0,
      options2: [],
      options3: [],
      options4: [],
      options5: [],
      curIndex3: 2,
      curIndex4: 0,
      curIndex5: 2
    }
  },
  created () {
    this.options2 = JSON.parse(JSON.stringify(this.options))
    this.options3 = JSON.parse(JSON.stringify(this.options))
    this.options4 = JSON.parse(JSON.stringify(this.options))
    this.options5 = JSON.parse(JSON.stringify(this.options))
  }
}
</script>

<style scoped lang="less">
.CarouselVcDemo {
  width: 100%;
  .demoItem {
    margin: 10px 0 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .demoLabel {
      margin: 10px;
    }
  }
  p {
    color: #006666;
  }
  .demoText {
    margin: 15px 10px 5px;
  }
}
</style>
