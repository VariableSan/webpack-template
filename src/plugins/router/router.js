import Vue from 'vue'
import VueRouter from 'vue-router'

// components
// import Index from '../pages/Index.vue'
import Index from '@pages/Index.vue'

Vue.use(VueRouter)

const routOpt = {
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
}

export default new VueRouter(routOpt)
