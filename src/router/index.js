import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/BaseWelcome'
import Container from '@/components/BaseContainer'
import Page1 from '@/pages/nav1/page1'
import Page2 from '@/pages/nav1/page2'
import Page3 from '@/pages/nav2/page1'

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
          name: 'page1',
          component: Page1
        },
        {
          path: '/home/nav1/page2',
          name: 'page2',
          component: Page2
        },
        {
          path: '/home/nav2/page1',
          name: 'page3',
          component: Page3
        }
      ]
    }
  ]
})
export default router
