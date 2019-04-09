<template>
  <div id="app">
    <HeaderTop></HeaderTop>
    <router-view class="main"/>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue'

export default {
  name: 'App',
  components:{
    HeaderTop
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
.main{
  width:60%;
  margin: 0 auto;
  margin-top: 40px;
  background-color: blue;
}
.left{
  margin-top: 50px;
  position: absolute;
  left: 100px;
  width: 50%;
}
.right{
  margin-top: 50px;
  position: absolute;
  right: 100px;
  width: 30%;
  background-color: green;
}
.loading p{
    color: black;
    font-size: 35px;
    width: 200px;
    margin: 200px auto;
    animation: waiting 1s infinite alternate-reverse;
}
@keyframes waiting{
    from{
       transform: translateY(0);
    }
    to{
        transform: translateY(30px);
    }
}
</style>
