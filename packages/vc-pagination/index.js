import vcPagination from './src/vc-pagination'

vcPagination.install = function (Vue) {
  Vue.component(vcPagination.name, vcPagination)
}

export default vcPagination
