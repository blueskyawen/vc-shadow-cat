<template>
  <div class="vc-drawer" :class="{'show': isShow}" :style="drawerStyle">
    <div class="shade" v-if="showShade || !closable" @click="shadeClose"></div>
    <div class="drawer-content" :class="placeClasses">
      <div class="header">
        <span class="title">{{header}}</span>
        <span class="close" v-if="closable || !showShade" @click="close">
         <svg viewBox="64 64 896 896" data-icon="close" width="16px" height="16px" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
        </span>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-drawer',
  model: {
    prop: 'isShow',
    event: 'change'
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    place: {
      type: String,
      default: 'right'
    },
    showShade: {
      type: Boolean,
      default: true
    },
    clickShadeClose: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    header: {
      type: String,
      default: '我是标题'
    },
    zIndex: {
      type: Number,
      default: 9000
    }
  },
  computed: {
    placeClasses: function () {
      return { 'place-right': this.place === 'right',
        'place-left': this.place === 'left',
        'place-top': this.place === 'top',
        'place-down': this.place === 'down' }
    },
    drawerStyle: function () {
      return { 'z-index': this.zIndex }
    }
  },
  methods: {
    shadeClose: function () {
      if (this.clickShadeClose || !this.closable) {
        this.close()
      }
    },
    close: function () {
      this.$emit('change', false)
    }
  }
}
</script>

<style scoped lang="less">
.vc-drawer {
  position: fixed;
  top:0;
  left:0;
  height:0;
  width:0;
  display:block;
  z-index: 9000;
  .shade {
    position: fixed;
    height:100%;
    width:100%;
    background:#e6e6e6;
    opacity: 0.5;
    display: none;
  }
  .drawer-content {
    display: inline-block;
    position: fixed;
    z-index: 1;
    background:#fff;
    border:solid 1px #ccc;
    border-radius:3px;
    transition: transform .5s linear;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px 20px;
    box-sizing: border-box;
    &.place-right {
      height:100%;
      top:0;
      right:0;
      max-width: 70%;
      transform: translateX(100%);
    }
    &.place-left {
      height:100%;
      top:0;
      left:0;
      max-width: 70%;
      transform: translateX(-100%);
    }
    &.place-top {
      width:100%;
      max-height: 70%;
      top:0;
      left:0;
      transform: translateY(-100%);
    }
    &.place-down {
      width:100%;
      max-height: 70%;
      bottom:0;
      left:0;
      transform: translateY(100%);
    }
    .header {
      width: 100%;
      height:36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #4d4d4d;
      .title {
        font-size: 18px;
      }
      .close {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        width: 24px;
        border: solid 1px transparent;
        border-radius: 100%;
        &:hover {
          background-color: #f2f2f2;
          cursor: pointer;
        }
      }
    }
  }
  &.show {
    height:100%;
    width:100%;
    .shade {
      display: block;
    }
    .drawer-content {
      &.place-right {
        transform: translateX(0);
      }
      &.place-left {
        transform: translateX(0);
      }
      &.place-top {
        transform: translateY(0);
      }
      &.place-down {
        transform: translateY(0);
      }
    }
  }
}
</style>
