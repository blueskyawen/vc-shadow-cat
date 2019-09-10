<template>
  <div class="vc-radio">
    <span v-for="option in options" :key="option.value" class="radio-group">
      <span class="radio"
            :class="{ active: option.value === value, default: option.value !== value, disabled: option.disabled }">
        <input type="radio" :disabled="option.disabled" :checked="option.value === value"
               :value="option.value" @click="change(option, $event)"/>
      </span>
      <span :for="option.value">{{option.label}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vc-radio',
  props: {
    options: {
      type: Array
    },
    value: String
  },
  data () {
    return {
      isDisable: false
    }
  },
  created: function () {
    if (this.value) {
      for (let option of this.options) {
        if (option.value === this.value) {
          this.isDisable = option.disabled
          break
        }
      }
    }
  },
  methods: {
    change: function (option, $event) {
      if (option.disabled || this.isDisable) return
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style scoped lang="less">
  .vc-radio {
    .radio-group {
      margin-right: 10px;
      .radio {
        display:inline-block;
        height:18px;
        width:18px;
        border:solid 1px #999;
        border-radius:50%;
        margin-right:10px;
        position:relative;
        left:5px;
        top:4px;
        box-sizing:border-box;
        transition: all .5s;
        &.active {
          border-width:6px;
          border-color:#008ae6;
          input{
            top:-6px;
            left:-9px;
          }
          &.disabled {
            opacity: 0.5;
            border-color:#ccc;
          }
        }
        &.default {
          input{
            top:-1px;
            left:-3px;
            &:hover{
              cursor:pointer;
            }
          }
          &.disabled{
            opacity: 0.5;
            background-color:#ccc;
          }
        }
        &:not(.disabled):hover{
          border-color:#008ae6;
        }
        input {
          position:absolute;
          opacity: 0;
          z-index: 7;
          transform: scale(1.8,1.8);
          box-shadow:none;
          cursor:pointer;
          &[disabled] {
            cursor:not-allowed;
          }
        }
      }
    }
  }
</style>
