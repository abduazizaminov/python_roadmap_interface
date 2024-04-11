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

        //Algorithms

        {
          path: '/algorithms',
          name: 'algorithms',
          component: () => import('@/views/algorithms/index.vue')
        },
        {
          path: '/algorithms/binary-search',
          name: 'binary-search',
          component: () => import('@/views/algorithms/pages/binary-search.vue')
        },
        {
          path: '/algorithms/arrays',
          name: 'arrays',
          component: () => import('@/views/algorithms/pages/arrays.vue')
        },
        {
          path: '/algorithms/hash-tables',
          name: 'hash-tables',
          component: () => import('@/views/algorithms/pages/hash-tables.vue')
        },
        {
          path: '/algorithms/heaps',
          name: 'heaps',
          component: () => import('@/views/algorithms/pages/heaps.vue')
        },
        {
          path: '/algorithms/recursion',
          name: 'recursion',
          component: () => import('@/views/algorithms/pages/recursion.vue')
        },
        {
          path: '/algorithms/sorting',
          name: 'sorting',
          component: () => import('@/views/algorithms/pages/sorting.vue')
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
        {
          path: '/frameworks/aiohttp',
          name: 'aiohttp',
          component: () => import('@/views/framework/pages/aiohttp.vue')
        },
        {
          path: '/frameworks/asynchronous',
          name: 'asynchronous',
          component: () => import('@/views/framework/pages/asynchronous.vue')
        },
        {
          path: '/frameworks/doctest',
          name: 'doctest',
          component: () => import('@/views/framework/pages/doctest.vue')
        },
        {
          path: '/frameworks/fastapi',
          name: 'fastapi',
          component: () => import('@/views/framework/pages/fastapi.vue')
        },
        {
          path: '/frameworks/flask',
          name: 'flask',
          component: () => import('@/views/framework/pages/flask.vue')
        },
        {
          path: '/frameworks/gevent',
          name: 'gevent',
          component: () => import('@/views/framework/pages/gevent.vue')
        },
        {
          path: '/frameworks/nose',
          name: 'nose',
          component: () => import('@/views/framework/pages/nose.vue')
        },
        {
          path: '/frameworks/pyramid',
          name: 'pyramid',
          component: () => import('@/views/framework/pages/pyramid.vue')
        },
        {
          path: '/frameworks/pytest',
          name: 'pytest',
          component: () => import('@/views/framework/pages/pytest.vue')
        },
        {
          path: '/frameworks/pyUnit',
          name: 'pyUnit',
          component: () => import('@/views/framework/pages/pyUnit.vue')
        },
        {
          path: '/frameworks/sanic',
          name: 'sanic',
          component: () => import('@/views/framework/pages/sanic.vue')
        },
        {
          path: '/frameworks/synchronous',
          name: 'synchronous',
          component: () => import('@/views/framework/pages/synchronous.vue')
        },
        {
          path: '/frameworks/tornado',
          name: 'tornado',
          component: () => import('@/views/framework/pages/tornado.vue')
        },
      ]
    }
  ]
})

export default router
