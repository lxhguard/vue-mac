<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import componen from "vue-class-component";
import io from "socket.io-client";

@componen
export default class App extends Vue {
  
}
</script>

<style lang="less">

</style>