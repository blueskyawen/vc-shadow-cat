<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>组件库测试</h2>
    <div class="opers">
      <vc-loading :type="'normal'" :size="'max'"></vc-loading>
      <vc-loading :type="'normal'" :size="'medium'"></vc-loading>
      <vc-loading :size="'min'"></vc-loading>
    </div>
    <div class="opers">
      <vc-loading :type="'clover'" :size="'max'"></vc-loading>
      <vc-loading :type="'clover'" :size="'medium'"></vc-loading>
      <vc-loading :type="'clover'" :size="'min'"></vc-loading>
    </div>
    <div class="opers">
      <vc-loading class="oper-item" :type="'horizontal'" :size="'max'"></vc-loading>
      <vc-loading class="oper-item" :type="'horizontal'" :size="'medium'"></vc-loading>
      <vc-loading class="oper-item" :type="'horizontal'" :size="'min'"></vc-loading>
    </div>
    <div class="opers">
      <vc-switch class="oper-item" v-model="aggres[0]"></vc-switch>
      <vc-switch class="oper-item" v-model="aggres[1]" :tip-labels="['是','否']"></vc-switch>
      <vc-switch class="oper-item" v-model="aggres[2]" :type="'min'" :disabled="true"></vc-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      aggres: [true, false, true]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
.opers {
  padding: 5px 0;
}
.oper-item {
  margin-right: 20px;
}
.vc-from-group {
  width: 100%;
  .vc-from-label {
    width: 20%;
  }
  .vc-from-control {
    width: 80%;
  }
}
</style>
