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
        //Advanced topic
        {
          path: '/topic',
          name: 'topic',
          component: () => import('@/views/topic/index.vue')
        },
        {
          path: '/topic/classes',
          name: 'classes',
          component: () => import('@/views/topic/pages/classes.vue')
        },
        {
          path: '/topic/conda',
          name: 'conda',
          component: () => import('@/views/topic/pages/conda.vue')
        },
        {
          path: '/topic/decorators',
          name: 'decorators',
          component: () => import('@/views/topic/pages/decorators.vue')
        },
        {
          path: '/topic/generator',
          name: 'generator',
          component: () => import('@/views/topic/pages/generator.vue')
        },
        {
          path: '/topic/inheritance',
          name: 'inheritance',
          component: () => import('@/views/topic/pages/inheritance.vue')
        },
        {
          path: '/topic/lambdas',
          name: 'lambdas',
          component: () => import('@/views/topic/pages/lambdas.vue')
        },
        {
          path: '/topic/comprehensions',
          name: 'comprehensions',
          component: () => import('@/views/topic/pages/comprehensions.vue')
        },
        {
          path: '/topic/methods-and-dunder',
          name: 'methods-and-dunder',
          component: () => import('@/views/topic/pages/methods_and_dunder.vue')
        },
        {
          path: '/topic/paradigms',
          name: 'paradigms',
          component: () => import('@/views/topic/pages/paradigms.vue')
        },
        {
          path: '/topic/pip',
          name: 'pip',
          component: () => import('@/views/topic/pages/pip.vue')
        },
        {
          path: '/topic/pypi',
          name: 'pypi',
          component: () => import('@/views/topic/pages/pypi.vue')
        },
        {
          path: '/topic/regular',
          name: 'regular',
          component: () => import('@/views/topic/pages/regular.vue')
        },
        //Learn a Framework
        {
          path: '/framework',
          name: 'framework',
          component: () => import('@/views/framework/index.vue')
        },
        {
          path: '/frameworks/django',
          name: 'django',
          component: () => import('@/views/framework/pages/django.vue')
        },
      ]
    }
  ]
})

export default router
