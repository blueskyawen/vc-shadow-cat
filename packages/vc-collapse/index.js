import vcCollapse from './src/vc-collapse'
import vcPanel from './src/vc-panel'

vcCollapse.install = function (Vue) {
  Vue.component(vcCollapse.name, vcCollapse)
}
vcPanel.install = function (Vue) {
  Vue.component(vcPanel.name, vcPanel)
}

export default [vcCollapse, vcPanel]
