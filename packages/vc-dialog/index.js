import vcDialog from './src/vc-dialog'

vcDialog.install = function (Vue) {
  Vue.component(vcDialog.name, vcDialog)
}

export default vcDialog
