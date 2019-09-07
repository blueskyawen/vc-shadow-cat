<template>
  <div class="vc-form-group-item">
    <input :value="value" v-bind="$attrs" @input="valueChange" />
  </div>
</template>

<script>
export default {
  name: 'vc-input',
  inheritAttrs: false,
  props: {
    value: String
  },
  data () {
    return {

    }
  },
  methods: {
    valueChange: function ($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style scoped lang="less">
  .vc-form-group-item {
    display:inline-flex;
    align-items:center;
    width: 100%;
    min-width:120px;
    height:36px;
    position:relative;
    max-width: 100%;
    box-sizing: border-box;
    input {
      display:inline-block;
      height:100%;
      width:100%;
      font-size:14px;
      border:solid 1px #999;
      border-radius:4px;
      box-shadow:none;
      box-sizing:border-box;
      outline:none;
      padding:0 10px 0 10px;
      color:#4d4d4d;
      &:hover {
        border-color:#3399ff;
      }
    }
    &.nc-form-group-item-disabled {
      input:hover {
        border-color:#999;
      }
      &:hover input{
        cursor:not-allowed;
      }
    }
  }
</style>
