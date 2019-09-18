import vcAlert from './src/vc-alert'

vcAlert.install = function (Vue) {
  Vue.component(vcAlert.name, vcAlert)
}

export default vcAlert
