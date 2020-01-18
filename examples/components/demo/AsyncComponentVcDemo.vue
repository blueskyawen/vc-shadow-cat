<template>
  <div class="AsyncComponentDemo">
    <div class="demoItem" v-if="type === 'basic'">
      <form class="vc-container" @submit="checkForm" novalidate>
        <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
          <vc-form-label class="vc-xs-col-3">组件路径</vc-form-label>
          <vc-form-control class="vc-xs-col-9">
            <vc-input type="text" v-model="inputPath" placeholder="输入路径"></vc-input>
          </vc-form-control>
        </vc-form-group>
        <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
          <vc-form-label class="vc-xs-col-3">是否使用动画</vc-form-label>
          <vc-form-control class="vc-xs-col-9">
            <vc-switch :type="'min'" v-model="isTransition"></vc-switch>
          </vc-form-control>
        </vc-form-group>
        <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
          <vc-form-label class="vc-xs-col-3">是否Keep-Alive</vc-form-label>
          <vc-form-control class="vc-xs-col-9">
            <vc-switch :type="'min'" v-model="isKeepAlive"></vc-switch>
          </vc-form-control>
        </vc-form-group>
        <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
          <vc-button class="vc-xs-offset-3" @click="loadComponent('1')">加载</vc-button>
        </vc-form-group>
      </form>
      <div class="demo-content">
        <vc-async-component :path="componentPath" :keep-alive="isKeepAlive" :transition="isTransition">
        </vc-async-component>
      </div>
    </div>
    <div class="demoItem" v-if="type === 'advance'">
      <form class="vc-container" @submit="checkForm" novalidate>
        <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
          <vc-form-label class="vc-xs-col-3">组件路径</vc-form-label>
          <vc-form-control class="vc-xs-col-9">
            <vc-input type="text" v-model="inputPath2" placeholder="输入路径"></vc-input>
          </vc-form-control>
        </vc-form-group>
        <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
          <vc-button class="vc-xs-offset-3" @click="loadComponent('2')">加载</vc-button>
        </vc-form-group>
      </form>
      <div class="demo-content">
        <vc-async-component :path="componentPath2" :delay="delayLen" :timeout="timeoutLen"
                            :transition="true" :transition-class="asyncClass">
        </vc-async-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsyncComponentVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      inputPath: 'components/demo/CheckboxVcDemo',
      componentPath: 'components/demo/CheckboxVcDemo',
      inputPath2: 'components/demo/FilterVcDemo2',
      componentPath2: 'components/demo/FilterVcDemo2',
      delayLen: 100,
      timeoutLen: 5000,
      isKeepAlive: false,
      isTransition: false,
      asyncClass: {
        enter: 'async-enter',
        enterActive: 'async-enter-active',
        enterTo: 'async-enter-to',
        leave: 'async-leave',
        leaveActive: 'async-leave-active',
        leaveTo: 'async-leave-to'
      }
    }
  },
  methods: {
    loadComponent: function (index) {
      if (index === '1') {
        this.componentPath = this.inputPath
      } else {
        this.componentPath2 = this.inputPath2
      }
    },
    checkForm: function (e) {
      e.preventDefault()
    }
  }
}
</script>

<style scoped lang="less">
  .AsyncComponentDemo {
    h4 {
      color: #006666;
    }
    .demoItem {
      padding: 10px 0;
      font-size: 18px;
    }
    .async-enter,.async-leave-to {
      opacity: 0;
      margin-left: 100px;
    }
    .async-enter-to,.async-leave {
      opacity: 1;
      margin-left: 0;
    }
    .async-enter-active,.async-leave-active {
      transition: all 1s;
    }
  }
</style>
