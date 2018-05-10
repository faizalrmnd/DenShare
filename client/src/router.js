import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Materi from './views/Materi.vue'
import AddMateri from './views/AddMateri.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/materi',
      name: 'materi',
      component: Materi
    },
    {
      path: '/addmateri',
      name: 'addmateri',
      component: AddMateri
    }
  ]
})
