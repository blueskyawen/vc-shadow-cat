import vcFormGroup from './src/vc-form-group'
import vcFormControl from './src/vc-form-control'
import vcFormLabel from './src/vc-form-label'
import vcInput from './src/vc-input'
import vcTextarea from './src/vc-textarea'

vcFormGroup.install = function (Vue) {
  Vue.component(vcFormGroup.name, vcFormGroup)
}
vcFormControl.install = function (Vue) {
  Vue.component(vcFormControl.name, vcFormControl)
}
vcFormLabel.install = function (Vue) {
  Vue.component(vcFormLabel.name, vcFormLabel)
}
vcInput.install = function (Vue) {
  Vue.component(vcInput.name, vcInput)
}
vcTextarea.install = function (Vue) {
  Vue.component(vcTextarea.name, vcTextarea)
}

export default [vcFormGroup, vcFormControl, vcFormLabel, vcInput, vcTextarea]
