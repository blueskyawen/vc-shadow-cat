<template>
  <span class="nc-input-icon" :class="iconTypeClass">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'vc-input-icon',
  props: {
    type: String
  },
  computed: {
    iconTypeClass: function () {
      return { 'vc-input-icon-preffix': this.type === 'pre',
        'vc-input-icon-subffix': this.type === 'sub' }
    }
  }
}
</script>

<style scoped lang="less">
.nc-input-icon {
  color:#a6a6a6;
  margin:0 8px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  &.vc-input-icon-preffix {
    left: 0;
  }
  &.vc-input-icon-subffix {
    right: 0;
  }
}
</style>
