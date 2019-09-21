<template>
  <div class="BarsVcDemo"></div>
</template>

<script>
export default {
  name: 'BarsVcDemo',
  props: {
    type: String
  }
}
</script>

<style scoped lang="less">
.BarsVcDemo {
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
