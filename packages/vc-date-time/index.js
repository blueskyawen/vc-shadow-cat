import vcDateSelect from './src/vc-date-select'
import vcTimeSelect from './src/vc-time-select'
import vcDateTimeSelect from './src/vc-date-time-select'
import vcYearSelect from './src/vc-year-select'
import vcMonthSelect from './src/vc-month-select'

vcDateSelect.install = function (Vue) {
  Vue.component(vcDateSelect.name, vcDateSelect)
}
vcTimeSelect.install = function (Vue) {
  Vue.component(vcTimeSelect.name, vcTimeSelect)
}
vcDateTimeSelect.install = function (Vue) {
  Vue.component(vcDateTimeSelect.name, vcDateTimeSelect)
}
vcYearSelect.install = function (Vue) {
  Vue.component(vcYearSelect.name, vcYearSelect)
}
vcMonthSelect.install = function (Vue) {
  Vue.component(vcMonthSelect.name, vcMonthSelect)
}

export default [vcDateSelect, vcTimeSelect, vcDateTimeSelect, vcYearSelect, vcMonthSelect]
