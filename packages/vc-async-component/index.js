import vcAsyncComponent from './src/vc-async-component'

vcAsyncComponent.install = function (Vue) {
  Vue.component(vcAsyncComponent.name, vcAsyncComponent)
}

export default vcAsyncComponent
