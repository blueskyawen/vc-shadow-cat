import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VcCat from '../packages'
import '../vc-shadow-cat.css'
import './style/base.less'
import './style/hljs.css'
import './components/demo'

Vue.use(VcCat)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
