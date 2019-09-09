<template>
  <button :class="spinClasses" :style="buttonStyles">
    <span v-if="showAdd">+</span>
    <span v-if="loading" class="loading"></span>
    <span :class="{dynamic1: suffix}">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'vc-button',
  props: {
    type: { type: String, default: 'normal' },
    size: { type: String, default: 'min' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    dnymic: { type: Boolean, default: false },
    suffix: { type: Boolean, default: false },
    height: { type: String, default: 'auto' },
    width: { type: String, default: 'auto' }
  },
  computed: {
    showAdd: function () {
      return this.type === 'add' && !this.loading
    },
    spinClasses: function () {
      return { 'button-normal': this.type === 'normal',
        'button-add': this.type === 'add',
        'button-major': this.type === 'major',
        'button-cancel': this.type === 'cancel',
        'font-big': this.size === 'max',
        'font-small': this.size === 'min',
        'disabled': this.disabled,
        'dynamic3': this.dnymic }
    },
    buttonStyles: function () {
      if (this.size === 'max') {
        return { 'width': this.width, 'height': '54px' }
      }
      if (this.size === 'min') {
        return { 'width': this.width, 'height': '36px' }
      }
      if (this.size === 'custom') {
        return { 'width': this.width, 'height': this.height }
      }
      return {}
    }
  }
}
</script>

<style scoped lang="less">
  button {
    background-color: #4db251;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    padding: 0px 20px;
    border-radius: 4px;
    cursor: pointer;
    min-width: 60px;
    min-height: 20px;
    outline: none;
    max-width: 100%;
    &:active {
      outline: none;
    }
    &.button-add{
      background-color: #4db251;
      &:hover, &:focus {
        background-color: #3e8e41;
        box-shadow: 0 3px 10px 0 rgba(0,0,0,0.24), 0 5px 10px 0 rgba(0,0,0,0.19);
        transition: background-color 200ms;
      }
      &:active {
        background-color: #2e6b31;
      }
    }
    &.button-normal{
      background-color: #1a75ff;
      &:hover, &:focus {
        background-color: #005ce6;
        transition: background-color 200ms;
      }
      &:active {
        background-color: #0047b3;
      }
    }
    &.button-major {
      background-color: #ff4d4d;
      &:hover, &:focus {
        background-color: #ff1a1a;
        transition: background-color 200ms;
      }
      &:active {
        background-color: #cc0000;
      }
    }
    &.button-cancel {
      background-color: #fff;
      border:solid 1px #ccc;
      color: #1a75ff;
      &:hover, &:focus {
        border-color: #1a75ff;
        background-color:#e6e6e6;
        transition: background-color 200ms,border-color 200ms;
      }
      &:active {
        background-color: #1a75ff;
        color:#fff;
      }
    }
    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &.font-small{
      font-size: 14px;
    }
    &.font-big{
      font-size: 20px;
    }
    &.dynamic3{
      width:130px;
      transition: all 500ms;
      &:active {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
      }
    }
    .loading{
      border-left:solid 2px #fff;
      border-top:solid 2px #fff;
      border-radius:50%;
      height:12px;
      width:12px;
      display:inline-block;
      margin-right:10px;
      -webkit-animation: myLoading 500ms linear infinite;
      -moz-animation: myLoading 500ms linear infinite;
      animation: myLoading 500ms linear infinite;
    }

    .dynamic1{
      display: inline-block;
      position: relative;
      &:after {
        content:">>";
        position: absolute;
        top:3px;
        left:55px;
        opacity: 0;
      }
    }
    &:hover {
      .dynamic1{
        padding-right: 20px;
        transition: padding-right 500ms;
        &:after {
          left:65px;
          opacity: 1;
        }
      }
    }
  }

  @keyframes myLoading {
    0%   {-webkit-transform: rotate(90deg);transform: rotate(90deg);}
    25%  {-webkit-transform: rotate(180deg);transform: rotate(180deg);}
    50%  {-webkit-transform: rotate(270deg);transform: rotate(270deg);}
    100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}
  }
</style>
