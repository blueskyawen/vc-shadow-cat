import vcAvatar from './src/vc-avatar'

vcAvatar.install = function (Vue) {
  Vue.component(vcAvatar.name, vcAvatar)
}

export default vcAvatar
