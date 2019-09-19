<template>
  <div class="vc-slider" :class="{'disable':disabled,'withTitle':withTitle}">
    <input type="range" ref="sliderInput" :min="0" :max="total" :value="value"
           @change="rangeChange($event)" :disabled="disabled">
    <span class="range">
      <span class="before" :style="beforeBarStyle"></span>
      <span class="bar" :style="barStyle"></span>
      <span class="after" :style="afterBarStyle"></span>
    </span>
    <span class="text" v-if="withTitle">{{curValue}}</span>
  </div>
</template>

<script>
export default {
  name: 'vc-slider',
  props: {
    total: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 30
    },
    disabled: {
      type: Boolean,
      default: false
    },
    withTitle: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      curValue: 0
    }
  },
  created: function () {
    this.curValue = this.value
  },
  computed: {
    barStyle: function () {
      return { 'left': (this.curValue * 100 / this.total) + '%' }
    },
    beforeBarStyle: function () {
      return { 'width': (this.curValue * 100 / this.total) + '%' }
    },
    afterBarStyle: function () {
      return { 'width': (100 - this.curValue * 100 / this.total) + '%' }
    }
  },
  methods: {
    rangeChange: function ($event) {
      this.curValue = +$event.target.value
      this.$emit('input', this.curValue)
    }
  }
}
</script>

<style scoped lang="less">
.vc-slider {
  display:inline-flex;
  width:100%;
  height:30px;
  position:relative;
  max-width: 100%;
  min-width: 100px;
  > input {
    width:100%;
    height:100%;
    border:none;
    opacity:0;
    margin:0;
    cursor:pointer;
    outline: none;
  }
  > .range {
    display:flex;
    align-items:center;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    padding:0;
    z-index:-12;
    cursor:pointer;
    .bar {
      display:inline-block;
      width:12px;
      height:12px;
      border:solid 3px #0066ff;
      border-radius:100%;
      //left:200px;
      margin-left:-5px;
      background:#fff;
    }
    .before {
      display:inline-block;
      //width:205px;
      height:8px;
      border:none;
      border-radius:4px 0 0 4px;
      top:2px;
      background:#4da6ff;
      float:left;
      transition: width 1s;
    }
    .after {
      display:inline-block;
      //width:295px;
      height:8px;
      border:none;
      border-radius:0 4px 4px 0;
      background:#e6e6e6;
      float:left;
      transition: width 1s;
    }
  }
  &:hover {
    > .range .bar {
      width:16px;
      height:16px;
    }
  }
  &.disable {
    opacity: 0.6;
    > input {
      cursor:not-allowed;
    }
    > .range {
      opacity: 0.8;
      .bar {
        border-color:#999;
      }
      .before {
        background:#b3b3b3;
      }
      .after {
      }
    }
  }
  &.withTitle {
    > input, > .range {
      width:calc(100% - 30px);
    }
  }
  .text {
    display:inline-block;
    height:100%;
    width: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
  }
}
</style>
