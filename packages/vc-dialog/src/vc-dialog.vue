<template>
  <div class="vc-dialog" :style="dialogContainStyle">
    <div class="shade" :style="shadeStyle"></div>
    <div class="myDialog" :class="{'large': type === 'large'}" :style="dialogStyle">
      <header>
        <span>{{header}}</span>
        <span @click="close()">
          <svg viewBox="64 64 896 896" data-icon="close" width="14px" height="14px" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
        </span>
      </header>
      <article>
        <slot name="content"></slot>
      </article>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-dialog',
  model: {
    prop: 'isShow',
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    header: {
      type: String,
      default: '操作名称'
    },
    top: {
      type: String,
      default: '80px'
    },
    width: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 9000
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialogContainStyle: function () {
      return { 'display': this.isShow ? 'block' : 'none' }
    },
    shadeStyle: function () {
      return { 'z-index': this.zIndex }
    },
    dialogStyle: function () {
      return { 'top': this.top, 'z-index': this.zIndex + 1, 'width': this.width ? this.width : 'none' }
    }
  },
  methods: {
    close: function () {
      this.$emit('change', false)
    }
  }
}
</script>

<style scoped lang="less">
.vc-dialog {
  position: fixed;
  top:0;
  left:0;
  height:100%;
  width:100%;
  display:none;
  z-index: 9000;
  overflow-y: auto;
  .shade {
    height:100%;
    width:100%;
    background:#666;
    opacity: 0.6;
    position: fixed;
  }
  .myDialog {
    display: flex;
    flex-direction:column;
    position: absolute;
    z-index: 9001;
    left:50%;
    background:#fff;
    border:solid 1px #999;
    border-radius:6px;
    width:760px;
    max-width: 90%;
    min-height:80px;
    min-width: 120px;
    transform: translateX(-50%);
    box-shadow:0 0 5px 0 #999;
    animation: modal-out  500ms;
    &.large {
      width:70%;
      min-height:200px;
    }
    header {
      border:solid 0px;
      height:36px;
      line-height:36px;
      display: flex;
      justify-content:space-between;
      align-items:center;
      z-index: 9001;
      width:100%;
      span {
        &:first-child{
          margin-left:15px;
          font-size:14px;
        }
        &:last-child{
          height:24px;
          width:24px;
          line-height:24px;
          text-align:center;
          border-radius:100%;
          margin-right:15px;
          &:hover{
            background:#e6e6e6;
            cursor:pointer;
          }
        }
      }
    }
    article {
      display:inline-block;
      padding: 10px 30px;
      box-sizing: border-box;
      width:100%;
    }
    footer {
      width:100%;
      padding: 10px 0 10px;
      display:flex;
      justify-content:center;
    }
  }
}
@keyframes modal-out {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>
