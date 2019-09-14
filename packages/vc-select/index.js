import vcSelect from './src/vc-select'

vcSelect.install = function (Vue) {
  Vue.component(vcSelect.name, vcSelect)
}

export default vcSelect
