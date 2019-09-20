<template>
  <span class="vc-msgeif" :class="eifClasses" :style="eifStyle">
    <span class="bubble-eyes">
      <span class="eye left-eye"></span>
      <span class="eye right-eye"></span>
    </span>
    <span class="bubble-mouth">
      <span class="mouth" :style="mouthStyle">
        <span :style="loveStyle"></span>
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'vc-msgeif',
  props: {
    type: {
      type: String,
      default: 'laugh'
    },
    animate: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#ffad33'
    }
  },
  computed: {
    eifClasses: function () {
      return { 'laugh': this.type === 'laugh',
        'serious': this.type === 'serious',
        'aggrieve': this.type === 'aggrieve',
        'angry': this.type === 'angry',
        'love': this.type === 'love',
        'animate': this.animate }
    },
    eifStyle: function () {
      return { 'background': this.color,
        'border-color': this.color + ' ' + this.color + ' transparent transparent' }
    },
    mouthStyle: function () {
      return this.type === 'aggrieve' ? { 'background-color': this.color } : {}
    },
    loveStyle: function () {
      return { 'background-color': this.color }
    }
  }
}
</script>

<style scoped lang="less">
.vc-msgeif {
  display:inline-flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:60px;
  width:80px;
  background:#ffad33;
  border-radius:0 10px 10px 10px;
  margin:10px;
  position:relative;
  perspective: 750px;
  border-color:#ffad33 #ffad33 transparent transparent;
  &:before {
    content:"";
    display:inline-block;
    border: solid 6px;
    border-color:inherit;
    position:absolute;
    right:100%;
    top:0;
  }
  .bubble-eyes {
    display:inline-flex;
    justify-content:space-between;
    align-items:center;
    width:45px;
    height:50%;
    margin-top:10px;
    .eye {
      display:inline-block;
      width:10px;
      height:10px;
      background-color:#262626;
      border-radius:50%;
      position:relative;
    }
  }
  .bubble-mouth {
    display:inline-flex;
    justify-content:center;
    align-items:center;
    height:50%;
    .mouth {
      display:inline-block;
      > span {
        display: none;
      }
    }
  }
  &.laugh {
    .bubble-mouth .mouth {
      width:30px;
      height:20px;
      background-color:#262626;
      border-radius:50%;
      background: linear-gradient(to bottom,transparent 50%,#262626 50%,#262626 100%);
      margin-top:-8px;
    }
    &.animate {
      .bubble-mouth .mouth {
        animation:bubble-mouth-laugh 500ms infinite alternate;
      }
    }
  }
  &.serious {
    .bubble-mouth .mouth {
      width:20px;
      height:5px;
      background-color:#262626;
    }
    &.animate {
      .bubble-mouth .mouth {
        animation:bubble-mouth-serious 1s infinite alternate;
      }
    }
  }
  &.aggrieve {
    .bubble-mouth .mouth {
      width:36px;
      height:10px;
      border:solid 3px #262626;
      border-radius:50%;
      position:relative;
      background-color:#ffad33;
      &:after {
        content:"";
        display:inline-block;
        width:50px;
        height:10px;
        background-color:inherit;
        position:absolute;
        top:50%;
        left:-5px;
      }
    }
    &.animate {
      .bubble-mouth .mouth {
        animation:bubble-mouth-aggrieve 1s infinite alternate;
      }
    }
  }
  &.angry {
    .bubble-mouth .mouth {
      width:34px;
      height:20px;
      background-color:#262626;
      border-radius:50%;
      margin-top:-4px;
    }
    .bubble-eyes .eye {
      &:before {
        content:"";
        display:inline-block;
        width:22px;
        height:4px;
        background-color:#262626;
        position:absolute;
        top:-6px;
      }
      &.left-eye:before {
        transform:rotate(30deg);
        left:-4px;
      }
      &.right-eye:before {
        transform:rotate(-30deg);
        left:-8px;
      }
    }
    &.animate {
      .bubble-mouth .mouth {
        animation:bubble-mouth-angry 500ms infinite alternate;
      }
      .bubble-eyes .eye.left-eye:before {
        transform:rotate(30deg);
        left:-4px;
        animation:bubble-eye-angry-left 1s infinite alternate;
        top:-10px;
      }
      .bubble-eyes .eye.right-eye:before {
        transform:rotate(-30deg);
        left:-8px;
        animation:bubble-eye-angry-right 1s infinite alternate;
        top:-10px;
      }
    }
  }
  &.love {
    .bubble-mouth .mouth {
      width:30px;
      height:20px;
      background-color:#262626;
      border-radius:50%;
      margin-top:-8px;
      position:relative;
      > span {
        display:inline-block;
        width:44px;
        height:20px;
        background-color:#ffad33;
        border-radius:50%;
        position:absolute;
        top:-8px;
        left:-7px;
      }
    }
    .bubble-eyes .eye {
      display:inline-block;
      width:10px;
      height:10px;
      background-color:#262626;
      border-radius:0%;
      position:relative;
      z-index:1;
      &:before {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius:50%;
        content: '';
        background: #262626;
        left:-50%;
      }
      &:after {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius:50%;
        content: '';
        background: #262626;
        bottom:50%;
      }
      &.left-eye {
        transform: rotate(15deg);
      }
      &.right-eye {
        transform: rotate(75deg);
      }
    }
    &.animate {
      .bubble-eyes .eye.left-eye {
        animation: bubble-eye-left-love 500ms infinite alternate;
      }
      .bubble-eyes .eye.right-eye {
        animation: bubble-eye-right-love 500ms infinite alternate;
      }
    }
  }
}
@keyframes bubble-eye-left-love
{
  0%   {transform: scale(0.9,0.9) rotate(15deg);}
  50%   {transform: scale(1,1) rotate(15deg);}
  100% {transform: scale(1.1,1.1) rotate(15deg);}
}
@keyframes bubble-eye-right-love
{
  0%   {transform: scale(0.9,0.9) rotate(75deg);}
  50%   {transform: scale(1,1) rotate(75deg);}
  100% {transform: scale(1.1,1.1) rotate(75deg);}
}
@keyframes bubble-mouth-angry
{
  0%   {height:20px;transform: scale(0.9,0.9);}
  50%   {height:15px;transform: scale(1,1);}
  100% {height:10px;transform: scale(1.1,1.1);}
}
@keyframes bubble-eye-angry-left
{
  0%   {top:-6px;transform: rotate(30deg);}
  100% {top:-9px;transform: rotate(20deg);}
}
@keyframes bubble-eye-angry-right
{
  0%   {top:-6px;transform: rotate(-30deg);}
  100% {top:-9px;transform: rotate(-20deg);}
}
@keyframes bubble-mouth-aggrieve
{
  0%   {width:30px;}
  50%   {width:35px;}
  100% {width:42px;}
}
@keyframes bubble-mouth-serious
{
  0%   {width:20px;}
  50%   {width:25px;}
  100% {width:30px;}
}
@keyframes bubble-mouth-laugh
{
  0%   {background: linear-gradient(to bottom,transparent 50%,#262626 50%,#262626 100%);}
  50%   {background: linear-gradient(to bottom,transparent 60%,#262626 60%,#262626 100%);}
  100% {background: linear-gradient(to bottom,transparent 70%,#262626 70%,#262626 100%);}
}
</style>
