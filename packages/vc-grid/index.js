import vcRow from './src/vc-row'
import vcCol from './src/vc-col'

vcRow.install = function (Vue) {
  Vue.component(vcRow.name, vcRow)
}
vcCol.install = function (Vue) {
  Vue.component(vcCol.name, vcCol)
}

export default [vcRow, vcCol]
