<template>
  <div class="vc-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vc-collapse'
}
</script>

<style scoped lang="less">
.vc-collapse {
  width:800px;
  min-height:100px;
  display: flex;
  flex-direction:column;
  max-width: 100%;
  min-width: 150px;
}
</style>
