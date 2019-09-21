import vcBars from './src/vc-bars'

vcBars.install = function (Vue) {
  Vue.component(vcBars.name, vcBars)
}

export default vcBars
