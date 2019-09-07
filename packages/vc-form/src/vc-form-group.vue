<template>
  <div class="vc-form-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vc-form-group',
  props: {
    width: { type: String, default: '470px' }
  }
}
</script>

<style scoped lang="less">
  .vc-form-group{
    display:inline-flex;
    padding: 5px 0;
    box-sizing: border-box;
    flex-wrap: wrap;
    width:100%;
    position:relative;
    align-items: center;
  }
</style>
