import vcInfo from './src/vc-info'

vcInfo.install = function (Vue) {
  Vue.component(vcInfo.name, vcInfo)
}

export default vcInfo
