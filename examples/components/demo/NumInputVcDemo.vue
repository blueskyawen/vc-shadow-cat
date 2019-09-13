<template>
  <div class="NumInputVcDemo">
    <p>不同尺寸</p>
    <vc-num-input class="demoItem" v-model="count1"></vc-num-input>
    <vc-num-input class="demoItem" v-model="count2" :size="'middle'"></vc-num-input>
    <vc-num-input class="demoItem" v-model="count3" :size="'small'"></vc-num-input>
    <p>自定义边界值和步长值</p>
    <vc-num-input class="demoItem" v-model="count4" :min="20" :max="80" :step="5"></vc-num-input>
    <p>禁用样式</p>
    <vc-num-input class="demoItem" v-model="count5" :disabled="true"></vc-num-input>
    <vc-num-input class="demoItem" v-model="count6" :size="'middle'" :disabled="true"></vc-num-input>
    <vc-num-input class="demoItem" v-model="count6" :size="'small'" :disabled="true"></vc-num-input>
  </div>
</template>

<script>
export default {
  name: 'NumInputVcDemo',
  data () {
    return {
      count1: 6,
      count2: 7,
      count3: 8,
      count4: 9,
      count5: 10,
      count6: 12
    }
  }
}
</script>

<style scoped lang="less">
.NumInputVcDemo {
  .demoItem {
    margin-right: 15px;
    .demoLabel {
      margin-right: 10px;
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
