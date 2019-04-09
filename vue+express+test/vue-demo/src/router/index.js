import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from "../pages/Welcome.vue";
import Home from "../pages/Home.vue";
import VueResource from 'vue-resource'


Vue.use(Router)
Vue.use(VueResource);


export default new Router({
  routes: [
    { path: '/', component: Welcome },
    { path: '/home', component: Home }
  ]
})
