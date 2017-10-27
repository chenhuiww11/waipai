import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import errora from '@/components/error'
import loading from '@/components/loading'
import cqb from '@/components/cqb'
import dsj from '@/components/dsj'
import jwl from '@/components/jwl'
import detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'loading',
      component: loading
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/cqb',
      name: 'cqb',
      component: cqb
    },
    {
      path: '/dsj',
      name: 'dsj',
      component: dsj
    },
    {
      path: '/jwl',
      name: 'jwl',
      component: jwl
    }
  ]
})
