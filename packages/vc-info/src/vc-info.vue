<template>
  <div class="vc-info">
    <transition name="fadeTop">
      <div v-if="showTopInfo" class="top-info'" :class="infoClass">
        <div :class="{'msg': type === 'success'}"><slot></slot></div>
        <div v-if="type !== 'success'" class="oper-cancel"><span @click="cancel">x</span></div>
      </div>
    </transition>

    <transition name="fadeRight">
      <div v-if="showRightInfo" class="right-info'">
        <div class="header">
          <span @click="cancel">×</span>
        </div>
        <div class="acticle">
          <div class="gradetitle">
            <span class="icon" :class="infoClasszz">{{iocnType}}</span>
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
    }
  },
  data () {
    return {
      iconType: '√'
    }
  },
  updated: function () {
    console.log('setTimeout')
  },
  created: function () {
    this.iconType = this.type === 'success' ? '√' : this.type === 'warn' ? '!' : '×'
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
  position:fixed;
  z-index: 9000;
  > div {
    &.top-info {
      min-height:45px;
      top:2px;
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
      }
      &.error{
        background:#cc0000;
      }
      .msg {
        height:100%;
        text-align:center;
        flex:1 1 auto;
      }
      .oper-cancel {
        width:100%;
        flex:0 0 45px;
        display:flex;
        justify-content:center;
        align-items:center;
        span {
          height:50%;
          width:50%;
          line-height:22.5px;
          text-align:center;
          border-radius:50%;
          font-size:14px;
          &:hover{
            background: #999999;
            cursor:pointer;
          }
        }
      }
    }
    &.right-info {
      width:450px;
      min-height:180px;
      max-width: 70%;
      top:30px;
      right:30px;
      border:solid 1px #e6e6e6;
      border-radius: 5px;
      box-shadow: 1px 1px 3px 0 #f2f2f2;
      background: #fff;
      display:flex;
      flex-direction:column;
      -webkit-animation: modal-out-3 500ms;
      animation: modal-out-3  500ms;
      -moz-animation: modal-out-3 500ms;
      &.fadeRight-enter, &.fadeRight-leave-to {
        right:-150px;
      }
      &.fadeRight-enter-to, &.fadeRight-leave {
        right: 30px;;
      }
      &.fadeRight-enter-active, &.fadeRight-leave-active  {
        transition: right .5s;
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
            display:inline-block;
            height:20px;
            width:20px;
            line-height:20px;
            text-align:center;
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
