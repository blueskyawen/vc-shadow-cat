<template>
  <div class="vc-inputs-item">
    <div class="vc-form-group-item" :class="inputClassz" :style="inputStylez">
      <span v-if="prefix" class="input-affix input-preffix">{{prefix}}</span>
      <slot name="preIcon"></slot>
      <input :value="value" :required="required" :disabled="disabled" :class="inputItemClassz"
             v-bind="$attrs" @focus="focusInput" @blur="blurInput" @input="valueChange"/>
      <slot name="subIcon"></slot>
      <span class="nc-form-group-search" v-if="search"></span>
      <span v-if="suffix" class="input-affix input-subffix">{{suffix}}</span>
    </div>
    <div class="nc-form-group-hint nc-form-group-explain" v-if="showHint && isShowHint">{{hintText}}</div>
    <div class="nc-form-group-hint nc-form-group-error" v-if="showError && isShowError">{{errorShowText}}</div>
  </div>
</template>

<script>
export default {
  name: 'vc-input',
  inheritAttrs: false,
  props: {
    value: String,
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    search: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '36px'
    },
    width: {
      type: String,
      default: '100%'
    },
    hintText: {
      type: String,
      default: '请输入..'
    },
    errorText: {
      type: String,
      default: '输入错误'
    },
    showHint: {
      type: Boolean,
      default: false
    },
    showError: {
      type: Boolean,
      default: false
    },
    iconfix: {
      type: String,
      default: ''
    },
    noBorder: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShowHint: false,
      isShowError: false,
      errorShowText: ''
    }
  },
  methods: {
    valueChange: function ($event) {
      this.$emit('input', $event.target.value)
    },
    blurInput: function ($event) {
      this.isShowHint = false
      if (this.required && !$event.target.value) {
        this.errorText = '必填，不能为空！'
        this.isShowError = true
        return
      }
      if (this.showError) {
        this.errorShowText = this.errorText || '输入错误，请检查！'
        this.isShowError = true
        return
      }
      this.isShowError = false
    },
    focusInput: function () {
      this.isShowHint = true
    }
  },
  computed: {
    inputClassz: function () {
      return { 'nc-form-group-item-disabled': this.disabled,
        'nc-form-group-item-error': this.isShowError }
    },
    inputStylez: function () {
      return { 'width': this.width, 'height': this.height }
    },
    inputItemClassz: function () {
      return { 'hasSuffix': !!this.suffix,
        'hasPrefix': !!this.prefix,
        'hasSubIcon': this.iconfix === 'sub',
        'hasPreIcon': this.iconfix === 'pre',
        'hasNoBorder': this.noBorder }
    }
  }
}

</script>

<style scoped lang="less">
  .vc-inputs-item {
    width: 100%;
    .vc-form-group-item {
      display:inline-flex;
      align-items:center;
      width: inherit;
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
        &.hasPrefix {
          border-radius:0 4px 4px 0;
        }
        &.hasSuffix {
          border-radius:4px 0 0 4px;
        }
        &.hasPrefix.hasSuffix {
          border-radius:0;
        }
        &.hasSubIcon {
          padding-right: 25px;
        }
        &.hasPreIcon {
          padding-left: 25px;
        }
        &.hasNoBorder {
          border: none !important;
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
      &.nc-form-group-item-error {
        border-color:#ff0000;
      }
      .input-affix {
        display:inline-flex;
        height:100%;
        border:none;
        width:60px;
        box-sizing:border-box;
        align-items:center;
        justify-content:center;
        color:#8c8c8c;
        font-size:14px;
        &.input-subffix {
          border-radius:0 4px 4px 0;
          border:solid 1px #999;
          border-left:none;
        }
        &.input-preffix {
          border-radius:4px 0 0 4px;
          border:solid 1px #999;
          border-right:none;
        }
      }
      .nc-form-group-search {
        content:"";
        display:inline-block;
        border:solid 1px #4d4d4d;
        position:absolute;
        height:14px;
        width:14px;
        border-radius:50%;
        right:10px;
        top:50%;
        transform: translateY(-50%) rotate(45deg);
        &:after {
          content:"";
          position:absolute;
          display:inline-block;
          width:6px;
          height:0px;
          border:solid 1px #4d4d4d;
          top:50%;
          left:100%;
        }
      }
    }
    .nc-form-group-hint {
      width:100%;
      font-size:12px;
      margin: 5px 0;
      &.nc-form-group-explain {
        color:#666;
      }
      &.nc-form-group-error {
        color:#ff0000;
      }
    }
  }

</style>
