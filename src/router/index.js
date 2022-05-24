// Imports
import Vue from 'vue'
import Router from 'vue-router'
import { trailingSlash } from '@/util/helpers'
import {
  layout,
  route,
} from '@/util/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    route('Login', null, '/login/'),
    layout('Default', [
      route('Home'),
      // Pages
      route('UserProfile', null, 'profile'),
      route('Scalability', null, 'scalability'),
      route('Notifications', null, 'notifications'),
      route('Quotes', null, 'quotes'),
      // Components
      // Error
      route('Error', null, '/404'),
      { path: ':catchAll(.*)', redirect: '/404' },
    ]),
  ],
})

router.beforeEach((to, from, next) => {
  return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
})

export default router
