import vcSwitch from './src/vc-switch'

// 为组件提供 install 安装方法，供按需引入
vcSwitch.install = function (Vue) {
  Vue.component(vcSwitch.name, vcSwitch)
}

// 默认导出组件
export default vcSwitch
