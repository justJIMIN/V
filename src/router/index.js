import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import view1 from '../views/view1.vue'
import view2 from '../views/view2.vue'
import view3 from '../views/view3.vue'
import view4 from '../views/view4.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/view1',
    name: 'view1',
    component: view1,
  },
  {
    path: '/view2',
    name: 'view2',
    component: view2,
  },
  {
    path: '/view3',
    name: 'view3',
    component: view3,
  },
  {
    path: '/view4',
    name: 'view4',
    component: view4,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
