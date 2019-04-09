import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const home = (resolve: any) => (<any>require).ensure([], () => resolve(require("src/views/home.vue")), "views");
const drawView = (resolve: any) => (<any>require).ensure([], () => resolve(require("src/views/draw-view.vue")), "views");

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/draw-view",
      name: "draw-view",
      component: drawView
    }
  ]
});
