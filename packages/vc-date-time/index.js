import vcDateSelect from './src/vc-date-select'
import vcTimeSelect from './src/vc-time-select'
import vcDateTimeSelect from './src/vc-date-time-select'

vcDateSelect.install = function (Vue) {
  Vue.component(vcDateSelect.name, vcDateSelect)
}
vcTimeSelect.install = function (Vue) {
  Vue.component(vcTimeSelect.name, vcTimeSelect)
}
vcDateTimeSelect.install = function (Vue) {
  Vue.component(vcDateTimeSelect.name, vcDateTimeSelect)
}

export default [vcDateSelect, vcTimeSelect, vcDateTimeSelect]
