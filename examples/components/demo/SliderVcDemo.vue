<template>
  <div class="SliderVcDemo">
    <div v-if="type === 'basic'">
      <h4>正常输入</h4>
      <div class="demoItem">
        <vc-slider v-model="value1"></vc-slider>
        <p class="demoText">当前值：{{value1}}</p>
      </div>
      <h4>禁止输入</h4>
      <div class="demoItem">
        <vc-slider :disabled="true" v-model="value2"></vc-slider>
        <p class="demoText">当前值：{{value2}}</p>
      </div>
      <h4>自定义宽度</h4>
      <div class="demoItem">
        <vc-slider style="width: 500px" v-model="value3"></vc-slider>
        <p class="demoText">当前值：{{value3}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      value1: 30,
      value2: 40,
      value3: 20,
      value4: 60,
      value5: 20
    }
  }
}
</script>

<style scoped lang="less">
.SliderVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 10px 0;
    font-size: 18px;
    border-bottom: dotted 1px #999;
  }
}
</style>
