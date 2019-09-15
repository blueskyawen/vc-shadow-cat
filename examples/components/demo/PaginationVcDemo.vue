<template>
  <div class="PaginationVcDemo">
    <h4>默认样式</h4>
    <div class="demoItem">
      <vc-pagination></vc-pagination>
    </div>
    <div class="demoItem">
      <vc-pagination :appear-num="6"></vc-pagination>
    </div>
    <div class="demoItem">
      <vc-pagination :appear-num="10" :page-num="20" v-model="curPage1"></vc-pagination>
      <p class="demoText">curPage1: {{curPage1}}</p>
    </div>
    <div class="demoItem">
      <vc-pagination></vc-pagination>
    </div>
    <h4>边框样式</h4>
    <div class="demoItem">
      <vc-pagination :have-border="true"></vc-pagination>
    </div>
    <div class="demoItem">
      <vc-pagination :have-border="true" :appear-num="6"></vc-pagination>
    </div>
    <div class="demoItem">
      <vc-pagination :have-border="true" :appear-num="10" :page-num="30" v-model="curPage2"></vc-pagination>
      <p class="demoText">curPage2: {{curPage2}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      curPage1: 6,
      curPage2: 16
    }
  }
}
</script>

<style scoped lang="less">
.PaginationVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 10px 0;
    border-bottom: dotted 1px #999;
    .demoText {
      margin: 15px 10px 5px;
    }
  }
}
</style>
