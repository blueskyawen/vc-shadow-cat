<template>
  <div class="vc-loading">
    <div class="vc-spin-loading" v-if="type === 'normal' || type === 'clover'">
      <span v-if="type === 'normal'" class="load-spin normal-load" :class="spinClasses"></span>
      <span v-if="type === 'clover'" class="load-spin clover-load" :class="spinClasses">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
    </div>
    <div class="vc-horizon-loading" v-if="type === 'horizontal'" :class="spinClasses">
      <div class="nc-loading-item"></div>
      <div class="nc-loading-item"></div>
      <div class="nc-loading-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-loading',
  props: {
    type: { type: String, default: 'normal' },
    size: { type: String, default: 'max' }
  },
  computed: {
    spinClasses: function () {
      return { 'max-loading': this.size === 'max',
        'medium-loading': this.size === 'medium',
        'min-loading': this.size === 'min' }
    }
  }
}
</script>

<style scoped lang="less">
  .vc-loading {
    display:inline-block;
    .vc-spin-loading {
      margin:20px;
      display: inline-block;
      .load-spin {
        display:inline-block;
        border-radius:50%;
        animation:myloading 1s infinite;
        &.max-loading {
          height:80px;
          width:80px;
          border-width:10px;
        }
        &.medium-loading {
          height:50px;
          width:50px;
          border-width:8px;
        }
        &.min-loading {
          height:30px;
          width:30px;
          border-width:5px;
        }
      }
      .normal-load {
        border:solid 1px #0099ff;
        border-bottom-color:#e6e6e6;
      }
      .clover-load {
        position:relative;
        > span {
          display:inline-block;
          height:30%;
          width:30%;
          border-radius:50%;
          &:nth-child(1) {
            background:#001966;
            position:absolute;
            top:0;
            left:50%;
            transform:translateX(-50%);
          }
          &:nth-child(2) {
            background:#0033cc;
            position:absolute;
            top:50%;
            right:0%;
            transform:translateY(-50%);
          }
          &:nth-child(3) {
            background:#4d79ff;
            position:absolute;
            bottom:0%;
            left:50%;
            transform:translateX(-50%);
          }
          &:nth-child(4) {
            background:#99b3ff;
            position:absolute;
            top:50%;
            left:0%;
            transform:translateY(-50%);
          }
        }
      }
    }
    .vc-horizon-loading {
      display:inline-flex;
      height:30px;
      width:70px;
      justify-content:space-between;
      align-items:center;
      &.max-loading {
        width:90px;
        .nc-loading-item {
          height:20px;
          width:20px;
        }
      }
      &.medium-loading {
        width:70px;
        .nc-loading-item {
          height:16px;
          width:16px;
        }
      }
      &.min-loading {
        width:50px;
        .nc-loading-item {
          height:12px;
          width:12px;
        }
      }
      .nc-loading-item {
        display:inline-block;
        height:16px;
        width:16px;
        border-radius:50%;
        background:#99c2ff;
        opacity:0.5;
        &:first-child {
          animation:nc-load-anim-1 1s linear infinite;
        }
        &:nth-child(2) {
          animation:nc-load-anim-2 1s linear infinite;
        }
        &:last-child {
          animation:nc-load-anim-3 1s linear infinite;
        }
      }
    }
  }

  @keyframes nc-load-anim-1
  {
    0%   {background:#0066ff;opacity:1;}
    50%  {background:#99c2ff;opacity:0.5;}
    100% {background:#99c2ff;opacity:0.5;}
  }
  @keyframes nc-load-anim-2
  {
    0%   {background:#99c2ff;opacity:0.5;}
    50%  {background:#0066ff;opacity:1;}
    100% {background:#99c2ff;opacity:0.5;}
  }
  @keyframes nc-load-anim-3
  {
    0%   {background:#99c2ff;opacity:0.5;}
    50%  {background:#99c2ff;opacity:0.5;}
    100% {background:#0066ff;opacity:1;}
  }
  @keyframes myloading
  {
    0%   {transform: rotate(0deg);}
    10%  {transform: rotate(36deg);}
    20%  {transform: rotate(72deg);}
    30% {transform: rotate(108deg);}
    40% {transform: rotate(144deg);}
    50% {transform: rotate(180deg);}
    60%   {transform: rotate(216deg);}
    70%  {transform: rotate(252deg);}
    80%  {transform: rotate(288deg);}
    90% {transform: rotate(324deg);}
    100% {transform: rotate(360deg);}
  }
</style>
