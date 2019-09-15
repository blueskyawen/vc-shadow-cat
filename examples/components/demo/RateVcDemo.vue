<template>
  <div class="RateVcDemo">
    <div v-if="type === 'normal'">
      <vc-rate v-model="curStar"></vc-rate>
      <p class="demoText">curStar: {{curStar}}</p>
    </div>
    <div v-if="type === 'manual'">
      <h4>自定义总数和文本</h4>
      <div class="demoItem">
        <vc-rate :total="5" :text="'分'" v-model="curStar1"></vc-rate>
        <p class="demoText">curStar1: {{curStar1}}</p>
      </div>
      <h4>自定义颜色和尺寸</h4>
      <div class="demoItem">
        <vc-rate :size="'42px'" :color="'#bf00ff'" v-model="curStar2"></vc-rate>
        <p class="demoText">curStar2: {{curStar2}}</p>
      </div>
      <h4>不呈现文本</h4>
      <div class="demoItem">
        <vc-rate :color="'#ff1a1a'" :show-title="false" v-model="curStar3"></vc-rate>
        <p class="demoText">curStar3: {{curStar3}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RateVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      curStar: 6,
      curStar1: 3,
      curStar2: 6,
      curStar3: 6
    }
  }
}
</script>

<style scoped lang="less">
.RateVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 10px 0;
    border-bottom: dotted 1px #999;
  }
  .demoText {
    margin: 15px 10px 5px;
  }
}
</style>
