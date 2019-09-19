import vcBadge from './src/vc-badge'

vcBadge.install = function (Vue) {
  Vue.component(vcBadge.name, vcBadge)
}

export default vcBadge
