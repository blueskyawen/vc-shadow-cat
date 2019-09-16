import vcSlider from './src/vc-slider'

vcSlider.install = function (Vue) {
  Vue.component(vcSlider.name, vcSlider)
}

export default vcSlider
