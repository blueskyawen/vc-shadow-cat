import Vue from 'vue'
import Router from 'vue-router'
import Element from './views/Element.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound'

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
      component: Element,
      children: [
        {
          path: '',
          redirect: 'loading'
        },
        {
          path: 'loading',
          component: () => import('./docs/element/loading.md')
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: '',
          redirect: 'aboutMe'
        },
        {
          path: 'aboutMe',
          component: () => import('./docs/about/about-me.md')
        },
        {
          path: 'start',
          component: () => import('./docs/about/start.md')
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    },
    {
      path: '/pattern',
      name: 'pattern',
      component: () => import(/* webpackChunkName: "pattern" */ './views/Pattern.vue'),
      children: [
        {
          path: '',
          redirect: 'filter'
        },
        {
          path: 'filter',
          component: () => import('./docs/pattern/filter.md')
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
