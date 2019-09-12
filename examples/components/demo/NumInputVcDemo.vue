<template>
  <div class="NumInputVcDemo">
    <p>不同尺寸</p>
    <vc-num-input v-model="count1"></vc-num-input>
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
      count5: 10
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
