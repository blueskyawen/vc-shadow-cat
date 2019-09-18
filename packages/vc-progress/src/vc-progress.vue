<template>
  <span class="vc-progress" :class="typeClass">
    <span class="processing-container">
      <span class="processing" :class="processingClass" :style="processingStyle">
        <span class="subDynamic" :style="subDyncStyle" v-if="type === 'dynamic' || subDynamic"></span>
      </span>
    </span>
    <span v-if="type !== 'dynamic' && showInfo" class="description">{{valueShow}}%</span>
  </span>
</template>

<script>
export default {
  name: 'vc-progress',
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    size: {
      type: String,
      default: 'big'
    },
    total: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 30
    },
    color: {
      type: String,
      default: '#3399ff'
    },
    subDynamic: {
      type: Boolean,
      default: false
    },
    subColor: {
      type: String,
      default: '#99d6ff'
    },
    showInfo: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    typeClass: function () {
      return { 'big': this.size === 'big',
        'medium': this.size === 'medium',
        'small': this.size === 'small',
        'showInfo': this.showInfo }
    },
    processingStyle: function () {
      return this.type === 'dynamic' ? { 'width': '100%', 'background': this.color } : { 'width': this.valueShow + '%', 'background': this.color }
    },
    processingClass: function () {
      return this.type === 'dynamic' ? { 'percent100': true } : { 'percent100': this.value === this.total }
    },
    subDyncStyle: function () {
      return { 'background': this.subColor }
    },
    valueShow: function () {
      return Math.round(this.value * 100 / this.total)
    }
  }
}
</script>

<style scoped lang="less">
.vc-progress {
  display:inline-flex;
  width:420px;
  margin:5px 0;
  max-width: 100%;
  &.big {
    height: 16px;
    .processing-container {
      border-radius:8px;
      .processing {
        border-top-left-radius: 8px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 8px;
        &.percent100 {
          border-radius:8px;
        }
        .subDynamic {
          border-top-left-radius: 8px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 8px;
        }
      }
    }
    .description {
      font-size: 14px;
    }
  }
  &.medium {
    height: 10px;
    .processing-container {
      border-radius:5px;
      .processing {
        border-top-left-radius: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 5px;
        &.percent100 {
          border-radius:5px;
        }
        .subDynamic {
          border-top-left-radius: 5px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 5px;
        }
      }
    }
    .description {
      font-size: 12px;
    }
  }
  &.small {
    height:6px;
    .processing-container {
      border-radius:3px;
      .processing {
        border-top-left-radius: 3px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 3px;
        &.percent100 {
          border-radius:3px;
        }
        .subDynamic {
          border-top-left-radius: 3px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 3px;
        }
      }
    }
    .description {
      font-size: 10px;
    }
  }
  &.showInfo {
    .processing-container {
      width: calc(100% - 50px);
    }
  }
  .processing-container {
    width: 100%;
    height:100%;
    display: inline-block;
    position: relative;
    background: #e6e6e6;
    .processing {
      display:inline-block;
      height:100%;
      width: 30%;
      position:absolute;
      left:0;
      background:#3399ff;
      transition: all .5s linear;
      .subDynamic {
        position:absolute;
        left:0;
        display:inline-block;
        height:100%;
        width:100%;
        background:#99d6ff;
        opacity: 0.5;
        animation:subDynAnimat .5s linear infinite;
      }
    }
  }
  .description {
    display: inline-flex;
    align-items: center;
    margin-left: 8px;
  }
}
@keyframes subDynAnimat
{
  0%   {width:0%;}
  100% {width:100%;}
}
</style>
