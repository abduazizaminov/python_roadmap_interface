import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayouts',
      component: () => import('@/components/layouts/DefaultLayouts.vue'),
      redirect: '/',
      children:[
        {
          path: '/',
          name: 'home',
          component: () => import('../views/home/index.vue')
        },
        {
          path: '/roadmap',
          name: 'roadmap',
          component: () => import('@/views/roadmap/index.vue')
        },
        {
          path: '/basics',
          name: 'basics',
          component: () => import('@/views/basics/index.vue')
        },
        {
          path: '/algorithms',
          name: 'algorithms',
          component: () => import('@/views/algorithms/index.vue')
        },
        {
          path: '/topic',
          name: 'topic',
          component: () => import('@/views/topic/index.vue')
        },
        {
          path: '/framework',
          name: 'framework',
          component: () => import('@/views/framework/index.vue')
        },
      ]
    }
  ]
})

export default router
