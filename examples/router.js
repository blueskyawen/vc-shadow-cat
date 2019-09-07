import Vue from 'vue'
import Router from 'vue-router'
import Element from './views/Element.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'element'
    },
    {
      path: '/element',
      name: 'element',
      component: Element
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/pattern',
      name: 'pattern',
      component: () => import(/* webpackChunkName: "pattern" */ './views/Pattern.vue')
    }
  ]
})
