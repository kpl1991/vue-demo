import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Container from '@/components/Container'
import Page1 from '@/pages/nav1/page1'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/home',
      name: 'home',
      component: Container,
      children: [
        {
          path: '/home/nav1/page1',
          name: 'nav1',
          component: Page1
        }
      ]
    }
  ]
})
export default router
