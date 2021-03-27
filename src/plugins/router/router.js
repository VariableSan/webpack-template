import Vue from 'vue'
import VueRouter from 'vue-router'

// layouts
import DefaultLayout from '@layouts/DefaultLayout.vue'

// components
import IndexPage from '@pages/IndexPage.vue'

Vue.use(VueRouter)

const routOpt = {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          component: IndexPage
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
}

export default new VueRouter(routOpt)
