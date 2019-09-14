import vcTooltip from './src/vc-tooltip'

vcTooltip.install = function (Vue) {
  Vue.component(vcTooltip.name, vcTooltip)
}

export default vcTooltip
