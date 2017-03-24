import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Foo from '@/components/foo'
import Bar from '@/components/bar'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Top',
      component: Top
    },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})