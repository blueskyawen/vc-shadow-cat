import vcLoading from './src/vc-loading'

vcLoading.install = function (Vue) {
  Vue.component(vcLoading.name, vcLoading)
}

export default vcLoading
