import vcRate from './src/vc-rate'

vcRate.install = function (Vue) {
  Vue.component(vcRate.name, vcRate)
}

export default vcRate
