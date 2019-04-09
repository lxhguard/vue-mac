<template>
  <div id="app">
    
    <h1>{{title}}</h1>
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
// 局部引用
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return {
      title:'这是我的第一个Vue脚手架项目'
    }
  },
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>

<style>

</style>
