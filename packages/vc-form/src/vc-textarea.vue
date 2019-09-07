<template>
  <div class="vc-form-textarea" :style="{height: height, width: width}">
    <textarea name="textarea"
              :value="value"
              v-on="inputListeners"
              v-bind="$attrs"
              maxlength="100">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'vc-textarea',
  inheritAttrs: false,
  props: {
    value: String,
    height: { type: String, default: 'auto' },
    width: { type: String, default: '100%' }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function ($event) {
            vm.$emit('input', $event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style scoped lang="less">
  .vc-form-textarea {
    position: relative;
    border:none;
    height:auto;
    max-width:100%;
    textarea {
      width:100%;
      height:100%;
      max-width:100%;
      min-width:100%;
      min-height:80px;
      max-height:240px;
      padding:5px;
      box-sizing:border-box;
      border-radius:4px;
      outline:none;
      border:solid 1px #999;
      &:hover, &:focus {
        border-color:#3399ff;
      }
    }
    &:after {
      content: "0/100";
      position: absolute;
      top:0px;
      right: 7px;
      font-size: 12px;
    }
  }
</style>
