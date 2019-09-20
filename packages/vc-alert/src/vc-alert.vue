<template>
  <transition name="alert" mode="out-in">
    <div class="vc-alert" :class="alertClass" v-if="show">
      <span class="alert-icon" v-if="showIcon">
        <span v-if="type === 'success'">
          <svg viewBox="64 64 896 896" fill="currentColor" width="16px" height="16px" data-icon="check" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
        </span>
        <span v-if="type === 'info'">!</span>
        <span v-if="type === 'warn'">!</span>
        <span v-if="type === 'danger'">
          <svg viewBox="64 64 896 896" data-icon="close" width="16px" height="16px" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
        </span>
      </span>
      <span class="alert-body" :class="{'hasIcon': showIcon}">
        <span class="alert-header">
          <span class="alert-title" :class="{'hasClose': closable}" :title="header">{{header}}</span>
          <span class="alert-close" v-if="closable" @click="close">
           <svg viewBox="64 64 896 896" data-icon="close" width="14px" height="14px" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
          </span>
        </span>
        <span class="alert-description"><slot></slot></span>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'vc-alert',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'success'
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    header: {
      type: String,
      default: 'header'
    }
  },
  computed: {
    alertClass: function () {
      return { 'success': this.type === 'success',
        'info': this.type === 'info',
        'warn': this.type === 'warn',
        'danger': this.type === 'danger' }
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
.vc-alert {
  display:flex;
  align-items:center;
  width:500px;
  min-width: 120px;
  max-width: 100%;
  max-height: 200px;
  padding: 10px;
  box-sizing: border-box;
  border: solid 1px #ccc;
  border-radius:3px;
  color: #333;
  position: relative;
  &.success {
    border-color: #009933;
    background: #e5ffee;
    .alert-icon > span {
      border-color: #009933;
      background-color: #ccffde;
      color: #009933;
    }
  }
  &.info {
    border-color: #0072e6;
    background: #e5f2ff;
    .alert-icon > span {
      border-color: #0072e6;
      background-color: #cce5ff;
      color: #0072e6;
    }
  }
  &.warn {
    border-color:#ff9900;
    background:#fffbe6;
    .alert-icon > span {
      border-color: #ff9900;
      background-color: #ffebcc;
      color: #ff9900;
    }
  }
  &.danger {
    border-color:#ff0000;
    background:#ffe5e5;
    .alert-icon > span {
      border-color: #ff0000;
      background-color: #ffcccc;
      color: #ff0000;
    }
  }
  .alert-icon {
    height: inherit;
    position: absolute;
    left: 15px;
    top: 7px;
    > span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      border: solid 1px #ccc;
      border-radius: 100%;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
  }
  .alert-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    &.hasIcon {
      padding-left: 50px;
    }
    .alert-header {
      width: 100%;
      // height:36px;
      display: flex;
      align-items: center;
      position: relative;
      .alert-title {
        display: inline-block;
        width: inherit;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        &.hasClose {
          width: calc(100% - 40px);;
        }
      }
      .alert-close {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        border: solid 1px transparent;
        border-radius: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        &:hover {
          cursor: pointer;
          background: #e6e6e6;
        }
      }
    }
    .alert-description {
      display: block;
      font-size: 14px;
    }
  }
  &.alert-enter, &.alert-leave-to {
    opacity: 0;
    margin-left: 50px;
  }
  &.alert-enter-to, &.alert-leave {
    opacity: 1;
    margin-left: 0;
  }
  &.alert-enter-active, &.alert-leave-active {
    transition: all 1s;
  }
}
</style>
