<template>
  <div class="vc-info">
    <transition name="fadeTop">
      <div v-if="showTopInfo" class="top-info" :class="infoClass" :style="topInfoStyle">
        <div :class="{'msg': type !== 'success'}"><slot></slot></div>
        <div v-if="type !== 'success'" class="oper-cancel" @click="cancel">
         <svg viewBox="64 64 896 896" data-icon="close" width="14px" height="14px" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
        </div>
      </div>
    </transition>

    <transition name="fadeRight">
      <div v-if="showRightInfo" class="right-info" :style="topInfoStyle">
        <div class="header">
          <span @click="cancel">
             <svg viewBox="64 64 896 896" data-icon="close" width="14px" height="14px" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
          </span>
        </div>
        <div class="acticle">
          <div class="gradetitle">
             <span class="icon icon-green" v-if="type === 'success'">
              <svg viewBox="64 64 896 896" fill="currentColor" width="14px" height="14px" data-icon="check" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
             </span>
             <span class="icon icon-yellow" v-if="type === 'warn'">
              !
             </span>
             <span class="icon icon-red" v-if="type === 'error'">
               <svg viewBox="64 64 896 896" data-icon="close" width="14px" height="14px" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
             </span>
             <span class="title">{{headerTitle}}</span>
          </div>
          <div class="content">
            <slot name="content"></slot>
          </div>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'vc-info',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'success'
    },
    location: {
      type: String,
      default: 'top'
    },
    timerLen: {
      type: Number,
      default: 2000
    },
    headerTitle: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 9000
    },
    top: {
      type: String,
      default: '10px'
    }
  },
  updated: function () {
    if (this.show && this.type === 'success') {
      setTimeout(() => {
        this.cancel()
      }, this.timerLen)
    }
  },
  computed: {
    infoClass: function () {
      return { 'success': this.type === 'success',
        'warn': this.type === 'warn',
        'error': this.type === 'error' }
    },
    infoClasszz: function () {
      return { 'icon-green': this.type === 'success',
        'icon-yellow': this.type === 'warn',
        'icon-red': this.type === 'error' }
    },
    showTopInfo: function () {
      return this.show && this.location === 'top'
    },
    showRightInfo: function () {
      return this.show && this.location === 'right'
    },
    topInfoStyle: function () {
      return { 'z-index': this.zIndex, 'top': this.top }
    }
  },
  methods: {
    cancel: function () {
      this.$emit('change', false)
    }
  }
}
</script>

<style scoped lang="less">
.vc-info {
  width: 100%;
  > div {
    position:fixed;
    z-index: 9000;
    &.top-info {
      min-height:45px;
      left:50%;
      transform: translateX(-50%);
      border-radius:2px;
      width: 600px;
      text-align:center;
      display:flex;
      color:#fff;
      justify-content: center;
      align-items: center;
      &.fadeTop-enter, &.fadeTop-leave-to  {
        opacity: 0;
      }
      &.fadeTop-enter-active, &.fadeTop-leave-active  {
        transition: opacity .3s;
      }
      &.success {
        background:#009900;
        text-align:center;
      }
      &.warn {
        background:#ff9933;
        .oper-cancel:hover {
          background: #e67300;
        }
      }
      &.error{
        background:#cc0000;
        .oper-cancel:hover {
          background: #990000;
        }
      }
      .msg {
        height:100%;
        text-align:center;
        flex:1 1 auto;
      }
      .oper-cancel {
        width:22px;
        height: 22px;
        border: solid 1px transparent;
        border-radius: 100%;
        display:inline-flex;
        justify-content:center;
        align-items:center;
        margin-right: 10px;
        &:hover {
          cursor:pointer;
        }
      }
    }
    &.right-info {
      width:450px;
      min-height:180px;
      max-width: 70%;
      right:30px;
      border:solid 1px #e6e6e6;
      border-radius: 5px;
      box-shadow: 1px 1px 3px 0 #f2f2f2;
      background: #fff;
      display:flex;
      flex-direction:column;
      &.fadeRight-enter, &.fadeRight-leave-to {
        right:-150px;
        opacity: 0;
      }
      &.fadeRight-enter-to, &.fadeRight-leave {
        right: 30px;
      }
      &.fadeRight-enter-active, &.fadeRight-leave-active  {
        transition: all .5s;
      }
      > .header {
        display:flex;
        justify-content:flex-end;
        align-items:center;
        height:36px;
        border:solid 0px;
        span {
          display:inline-block;
          height:24px;
          width:24px;
          line-height:24px;
          text-align:center;
          border-radius:50%;
          margin-right:10px;
          &:hover {
            background:#999;
            cursor:pointer;
          }
        }
      }
      > .acticle {
        display:flex;
        flex-direction:column;
        width:90%;
        margin:auto;
        margin-top:10px;
        margin-bottom:0px;
        .gradetitle {
          width:100%;
          .icon {
            display:inline-flex;
            height:20px;
            width:20px;
            line-height:20px;
            justify-content: center;
            align-items: center;
            border-radius:50%;
            background:#fff;
            &.icon-green {
              border:solid 1px #009900;
              color:#009900;
            }
            &.icon-yellow {
              border:solid 1px #ff9900;
              color:#ff9900;
            }
            &.icon-red {
              border:solid 1px #ff1a1a;
              color:#ff1a1a;
            }
          }
          .title {
            margin-left:5px;
          }
        }
        .content {
          font-size:12px;
          border:solid 0px;
          margin-left:30px;
          word-break:break-all;
        }
      }
      > .footer {
        display:inline-block;
        width:90%;
        margin:auto;
      }
    }
  }
}

@media (min-width: 768px) {
  .vc-info div.top-info {
    width:50%;
  }
}
@media (max-width: 767px) {
  .vc-info div.top-info {
    width:75%;
  }
  .vc-info div.right-info {
    right: 15px;
  }
  .vc-info div.right-info.fadeRight-enter-to {
    right: 15px;
  }
}
</style>
