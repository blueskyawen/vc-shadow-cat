<template>
  <span class="vc-tooltip">
    <span v-if="type === 'prompt'" class="tip-title"><slot name="title"></slot></span>
    <span v-if="type === 'help'" class="tip-icon" :class="iconClasss">{{helpTitle}}</span>
    <div class="tip-text" :class="placeClasss"><slot></slot></div>
  </span>
</template>

<script>
export default {
  name: 'vc-tooltip',
  props: {
    type: {
      type: String,
      default: 'prompt'
    },
    helpTitle: {
      type: String,
      default: '?'
    },
    helpStyle: {
      type: String,
      default: 'default'
    },
    place: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    placeClasss: function () {
      return { 'place-top': this.place === 'top',
        'place-left': this.place === 'left',
        'place-right': this.place === 'right',
        'place-bottom': this.place === 'bottom' }
    },
    iconClasss: function () {
      return { 'normal-help': this.helpStyle === 'normal',
        'warn-help': this.helpStyle === 'warn',
        'error-help': this.helpStyle === 'error',
        'default-help': this.helpStyle === 'default' }
    }
  }
}
</script>

<style scoped lang="less">
.vc-tooltip {
  position: relative;
  display: inline-block;
  .tip-text {
    position: absolute;
    z-index: 1;
    opacity: 0;
    padding: 5px;
    font-size:12px;
    border-radius: 5px;
    border:solid 1px #999;
    background:#999;
    color:#fff;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.28);
    transition: all .3s linear;
    text-align: left;
    &.place-top {
      left:50%;
      transform: translateX(-50%);
      bottom:100%;
      margin-bottom: 10px;
      &:after {
        content:"";
        position: absolute;
        top: 100%;
        left: 50%;
        padding:0px;
        margin-left: -8px;
        border-width: 8px;
        border-style: solid;
        border-color: #999 transparent transparent transparent;
      }
    }
    &.place-bottom {
      left:50%;
      transform: translateX(-50%);
      top:100%;
      margin-top: 10px;
      &:after {
        content:"";
        position: absolute;
        bottom: 100%;
        left: 50%;
        padding:0px;
        margin-left: -8px;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent #999 transparent;
      }
    }
    &.place-left {
      right:100%;
      top:50%;
      margin-right: 10px;
      transform: translateY(-50%);
      &:after {
        content:"";
        position: absolute;
        left: 100%;
        top: 50%;
        padding:0px;
        margin-top: -8px;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent transparent #999;
      }
    }
    &.place-right {
      left:100%;
      bottom:50%;
      margin-left: 10px;
      transform: translateY(50%);
      &:after {
        content:"";
        position: absolute;
        right: 100%;
        top: 50%;
        padding:0px;
        margin-top: -8px;
        border-width: 8px;
        border-style: solid;
        border-color: transparent #999 transparent transparent;
      }
    }
  }
  &:hover {
    cursor:pointer;
  }
  .tip-title {
    &:hover + .tip-text {
      opacity: 1;
    }
  }
  .tip-icon {
    display:inline-block;
    height:20px;
    width:20px;
    border:solid 1px #0099ff;
    border-radius:50%;
    line-height:20px;
    text-align:center;
    &:hover + .tip-text {
      opacity: 1;
    }
    &.normal-help {
      border-color:#0099ff;
      color:#0099ff;
    }
    &.warn-help {
      border-color: #ff9900;
      color: #ff9900;
    }
    &.error-help {
      border-color:#ff0000;
      color:#ff0000;
    }
    &.default-help{
      border-color:#808080;
      color:#808080;
    }
  }
}
</style>
