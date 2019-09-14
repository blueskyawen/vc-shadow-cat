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
          path: 'button',
          component: () => import('./docs/element/button.md')
        },
        {
          path: 'switch',
          component: () => import('./docs/element/switch.md')
        },
        {
          path: 'checkbox',
          component: () => import('./docs/element/checkbox.md')
        },
        {
          path: 'radio',
          component: () => import('./docs/element/radio.md')
        },
        {
          path: 'input',
          component: () => import('./docs/element/input.md')
        },
        {
          path: 'numInput',
          component: () => import('./docs/element/num-input.md')
        },
        {
          path: 'info',
          component: () => import('./docs/element/info.md')
        },
        {
          path: 'carousel',
          component: () => import('./docs/element/carousel.md')
        },
        {
          path: 'toolTip',
          component: () => import('./docs/element/tooltip.md')
        },
        {
          path: 'tab',
          component: () => import('./docs/element/tab.md')
        },
        {
          path: 'pagination',
          component: () => import('./docs/element/pagination.md')
        },
        {
          path: 'rate',
          component: () => import('./docs/element/rate.md')
        },
        {
          path: 'collapse',
          component: () => import('./docs/element/collapse.md')
        },
        {
          path: 'select',
          component: () => import('./docs/element/select.md')
        },
        {
          path: 'mutilSelect',
          component: () => import('./docs/element/mutilSelect.md')
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
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
