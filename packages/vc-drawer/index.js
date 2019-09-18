import vcDrawer from './src/vc-drawer'

vcDrawer.install = function (Vue) {
  Vue.component(vcDrawer.name, vcDrawer)
}

export default vcDrawer
