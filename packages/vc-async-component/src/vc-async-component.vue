<template>
  <transition v-if="transition && keepAlive" mode="out-in"
              :enter-class="transitionClass.enter"
              :enter-active-class="transitionClass.enterActive"
              :enter-to-class="transitionClass.enterTo"
              :leave-class="transitionClass.leave"
              :leave-active-class="transitionClass.leaveActive"
              :leave-to-class="transitionClass.leaveTo">
    <keep-alive>
      <component :is="componentName" v-bind="$attrs" v-on="$listeners"></component>
    </keep-alive>
  </transition>
  <transition v-else-if="transition && !keepAlive" mode="out-in"
              :enter-class="transitionClass.enter"
              :enter-active-class="transitionClass.enterActive"
              :enter-to-class="transitionClass.enterTo"
              :leave-class="transitionClass.leave"
              :leave-active-class="transitionClass.leaveActive"
              :leave-to-class="transitionClass.leaveTo">
    <component :is="componentName" v-bind="$attrs" v-on="$listeners"></component>
  </transition>
  <keep-alive v-else-if="!transition && keepAlive">
    <component :is="componentName" v-bind="$attrs" v-on="$listeners"></component>
  </keep-alive>
  <component v-else :is="componentName" v-bind="$attrs" v-on="$listeners"></component>
</template>

<script>
import vcAsyncLoading from './vc-async-loading'
import vcAsyncError from './vc-async-error'

export default {
  inheritAttrs: false,
  name: 'vc-async-component',
  props: {
    path: {
      type: String,
      required: true
    },
    keepAlive: {
      type: Boolean,
      default: false
    },
    transition: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 200
    },
    timeout: {
      type: Number,
      default: 3000
    },
    transitionClass: {
      type: Object,
      default: function () {
        return {
          enter: 'v-enter',
          enterTo: 'v-enter-to',
          enterActive: 'v-enter-active',
          leave: 'v-leave',
          leaveTo: 'v-leave-to',
          leaveActive: 'v-leave-active'
        }
      }
    }
  },
  data: function () {
    return {
      componentName: () => ({
        component: import(`@/${this.path}`),
        loading: vcAsyncLoading,
        error: vcAsyncError,
        delay: this.delay,
        timeout: this.timeout
      })
    }
  },
  watch: {
    path: function () {
      this.componentName = () => ({
        component: import(`@/${this.path}`),
        loading: vcAsyncLoading,
        error: vcAsyncError,
        delay: this.delay,
        timeout: this.timeout
      })
    }
  }
}
</script>

<style scoped>
  .v-enter,.v-leave-to {
    opacity: 0;
  }
  .v-enter-to,.v-leave {
    opacity: 1;
  }
  .v-enter-active,.v-leave-active {
    transition: opacity .5s;
  }
</style>
