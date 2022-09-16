import { createRouter, createWebHistory } from 'vue-router'
import Test1 from '../components/Test1.vue'
import Test2 from '../components/Test2.vue'
import Test3 from '../components/Test3.vue'

const routes = [
  {
    name: "test1",
    path: "/test1",
    component: Test1
  },
  {
    name: "test2",
    path: "/test2",
    component: Test2
  },
  {
    name: "test3",
    path: "/test3",
    component: Test3
  }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router