<template>
  <div class="vc-form-group-label" :style="{height: height}" :class="labelClasses">
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'vc-form-label',
  props: {
    height: {
      type: String
    },
    noshowOption: {
      type: Boolean,
      default: false
    },
    require: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelClasses: function () {
      return { 'vc-form-noshow-option': this.noshowOption,
        'vc-form-group-label-require': this.require }
    }
  }
}
</script>

<style scoped lang="less">
  .vc-form-group-label {
    height:36px;
    display:inline-flex;
    align-items:center;
    justify-content: flex-end;
    color:#333;
    width:100%;
    label {
      display:inline-flex;
      height:100%;
      align-items:center;
      color: #666;
      position: relative;
      &:after{
        content:":";
        margin-right: 10px;
      }
    }
    .vc-form-group-label-require {
      margin-left: -10px;
      color:#ff3300;
    }
    &.vc-form-noshow-option label:after {
      content:"";
    }
  }
</style>
