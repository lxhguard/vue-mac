//1.引入对应模块
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from './../pages/Home/Home'
import Chat from './../pages/Chat/Chat'
import Me from './../pages/Me/Me'
import Recommend from './../pages/Recommend/Recommend'
import Search from './../pages/Search/Search'

//2.声明使用
Vue.use(Router)

//3.输出路由对象
export default new Router({
  //3.1配置一级路由
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/',
      redirect:'/home'
    },
  ]
})
