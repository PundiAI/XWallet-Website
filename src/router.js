import Vue from 'vue'
import Router from 'vue-router'
import Overview from './views/overview/overview'

Vue.use(Router)

const route =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/howtouse',
      name: 'HowToUse',
      component: () => import(/* webpackChunkName: "HowToUse" */ './views/howToUse/howToUse.vue')
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: () => import(/* webpackChunkName: "FAQ" */ './views/faq/faq.vue')
    },
    {
      path: '/userguide',
      name: 'UserGuide',
      component: () => import(/* webpackChunkName: "userGuide" */ './views/userGuide/userGuide.vue')
    },
    {
      path: '/merchantoperation',
      name: 'MerchantOperation',
      component: () => import(/* webpackChunkName: "merchantOperation" */ './views/merchantOperation/merchantOperation.vue')
    }
  ]
})


route.beforeEach((to, from, next) => {
  if (to.name === 'Overview' || to.name === 'HowToUse' || to.name === 'FAQ' || to.name === 'UserGuide' || to.name === 'MerchantOperation') {
    next()
  } else {
    next('/')
  }
})

export default route