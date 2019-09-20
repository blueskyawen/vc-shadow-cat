<template>
  <div class="MsgeifVcDemo">
    <div v-if="type === 'basic'">
      <vc-msgeif class="demoItem" :type="'laugh'"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'serious'"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'aggrieve'"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'angry'"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'love'"></vc-msgeif>
    </div>
    <div v-if="type === 'animate'">
      <vc-msgeif class="demoItem" :type="'laugh'" :animate="true"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'serious'" :animate="true"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'aggrieve'" :animate="true"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'angry'" :animate="true"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'love'" :animate="true"></vc-msgeif>
    </div>
    <div v-if="type === 'manual'">
      <vc-msgeif class="demoItem" :type="'laugh'" :animate="true" :color="'#99e6e6'"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'serious'" :animate="true" :color="'#bf80ff'"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'aggrieve'" :animate="true" :color="'#ace600'"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'angry'" :animate="true" :color="'#ff80bf'"></vc-msgeif>
      <vc-msgeif class="demoItem" :type="'love'" :animate="true" :color="'#66a3ff'"></vc-msgeif>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsgeifVcDemo',
  props: {
    type: String
  }
}
</script>

<style scoped lang="less">
.MsgeifVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    margin-right: 15px;
  }
}
</style>
