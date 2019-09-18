import vcResizeArea from './src/vc-resizeArea'

vcResizeArea.install = function (Vue) {
  Vue.component(vcResizeArea.name, vcResizeArea)
}

export default vcResizeArea
