import vcSkeleton from './src/vc-skeleton'

vcSkeleton.install = function (Vue) {
  Vue.component(vcSkeleton.name, vcSkeleton)
}

export default vcSkeleton
