import vcTab from './src/vc-tab'

vcTab.install = function (Vue) {
  Vue.component(vcTab.name, vcTab)
}

export default vcTab
