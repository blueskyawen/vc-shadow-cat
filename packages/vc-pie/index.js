import vcPie from './src/vc-pie'

vcPie.install = function (Vue) {
  Vue.component(vcPie.name, vcPie)
}

export default vcPie
