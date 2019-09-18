import vcProgress from './src/vc-progress'

vcProgress.install = function (Vue) {
  Vue.component(vcProgress.name, vcProgress)
}

export default vcProgress
