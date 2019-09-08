import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vcCat from '../packages'
import '../vc-shadow-cat.css'
import './assets/main-common.less'
import DemoBlock from './components/DemoBlock'

Vue.component('DemoBlock', DemoBlock)

Vue.use(vcCat)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
