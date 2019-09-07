import vcButton from './src/vc-button'

vcButton.install = function (Vue) {
  Vue.component(vcButton.name, vcButton)
}

export default vcButton
