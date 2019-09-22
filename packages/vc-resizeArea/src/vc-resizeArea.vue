<template>
  <div class="vc-resizeArea" ref="resizeArea" :class="resizeAreaClass" @mousemove="mousemoveArea($event)">
    <div ref="leftArea" class="left-resize-area" :style="leftStyle">
      <slot name="leftarea"></slot>
    </div>
    <div ref="resizeBar" class="resize-border" :class="barClass" :style="barStyle"
         @mousedown="mouseDownBar($event)" @mouseup="mouseupBar"></div>
    <div ref="rightArea" class="right-resize-area" :class="rightClass"
         :style="{'min-width': this.minRightWidth + 'px'}">
      <slot name="rightarea"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-resize-area',
  props: {
    leftWidth: {
      type: String,
      default: '50%'
    },
    minLeftWidth: {
      type: Number,
      default: 100
    },
    minRightWidth: {
      type: Number,
      default: 100
    },
    resizable: {
      type: Boolean,
      default: true
    },
    single: {
      type: Boolean,
      default: false
    },
    hasBorder: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      noBorder: true,
      leftAreWidth: '50%',
      containerWidth: 0,
      mouseClientX: 0,
      isMoving: false,
      leftOffsetWidth: 0,
      rightOffsetWidth: 0,
      moveTimer: undefined,
      currentX: 0,
      isChanged: false
    }
  },
  created () {
    this.noBorder = this.single ? true : !this.hasBorder
  },
  mounted: function () {
    this.containerWidth = this.$refs.resizeArea.offsetWidth
    window.addEventListener('mouseup', () => {
      this.isMoving = false
    })
  },
  computed: {
    leftStyle: function () {
      return { 'width': this.leftAreaWidth, 'min-width': this.minLeftWidth + 'px' }
    },
    barStyle: function () {
      return { 'left': this.leftAreaWidth }
    },
    leftAreaWidth: function () {
      return this.isChanged ? (this.leftOffsetWidth + this.currentX - this.mouseClientX) + 'px' : this.single ? '100%' : this.leftWidth ? this.noBorder ? this.leftWidth : 'calc(' + this.leftWidth + ' - 10px)' : '50%'
    },
    barClass: function () {
      return { 'disable': !this.resizable }
    },
    rightClass: function () {
      return { 'hide': this.single }
    },
    resizeAreaClass: function () {
      return { 'has-border': this.hasBorder, 'single': this.single }
    }
  },
  methods: {
    mouseDownBar: function ($event) {
      this.mouseClientX = $event.clientX
      this.leftOffsetWidth = this.$refs.leftArea.offsetWidth
      this.rightOffsetWidth = this.$refs.rightArea.offsetWidth
      this.isMoving = true
    },
    mouseupBar: function () {
      this.isMoving = false
    },
    mousemoveArea: function ($event) {
      if (this.resizable && this.isMoving && !this.moveTimer) {
        this.isChanged = true
        this.moveTimer = setTimeout(() => {
          this.computeResizeWidth($event)
          this.moveTimer = undefined
        }, 50)
      }
    },
    computeResizeWidth: function ($event) {
      if (!this.isMoving) return
      if ($event.clientX < this.mouseClientX &&
        this.leftOffsetWidth + $event.clientX < this.mouseClientX + this.minLeftWidth) {
        return
      }
      if (!this.single && $event.clientX > this.mouseClientX &&
        this.rightOffsetWidth + this.mouseClientX < $event.clientX + this.minRightWidth) {
        return
      }
      if (this.single && $event.clientX > this.mouseClientX &&
        this.containerWidth + this.mouseClientX < $event.clientX + this.leftOffsetWidth) {
        return
      }
      this.currentX = $event.clientX
    }
  }
}
</script>

<style scoped lang="less">
.vc-resizeArea {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  .left-resize-area {
    font-size: 14px;
    border: solid 1px #d9d9d9;
    border-radius: 3px 0 0 3px;
    margin-right: 0;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    float: left;
  }
  .right-resize-area {
    font-size: 14px;
    border: solid 1px #d9d9d9;
    border-radius: 0 3px 3px 0;
    border-left: none;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
  }
  .resize-border {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10px;
    cursor: col-resize;
    z-index: 5;
    margin-left: -5px;
    &.disable {
      cursor: auto !important;
    }
  }
  &.has-border {
    .left-resize-area {
      border-radius: 3px;
      margin-right: 20px;
    }
    .right-resize-area {
      border-radius: 3px;
      border-left: solid 1px #d9d9d9;
    }
    .resize-border {
      width: 30px;
    }
  }
  &.single {
    .left-resize-area {
      border-radius: 3px;
    }
    .right-resize-area {
      border-radius: 3px;
      border-left: solid 1px #d9d9d9;
      &.hide {
        display: none;
      }
    }
    .resize-border {
      width: 4px;
      margin-left: -2px;
      margin-right: 0;
    }
  }
}
@media (max-width: 767px) {
  .vc-resizeArea .left-resize-area, .vc-resizeArea .right-resize-area {
    min-width: auto;
  }
}
</style>
