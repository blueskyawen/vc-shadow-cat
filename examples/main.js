import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VcCat from '../packages'
import '../vc-shadow-cat.css'
import './style/base.less'
import './style/hljs.css'
import DemoBlock from './components/DemoBlock'

Vue.component('DemoBlock', DemoBlock)

Vue.use(VcCat)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
