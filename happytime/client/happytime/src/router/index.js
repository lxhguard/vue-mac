import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Picture from '@/components/Picture'
import Recommend from '@/components/Recommend'
import Video from '@/components/Video'
import Wenzi from '@/components/Wenzi'
import Advertisement from '@/components/Advertisement'
import SideBar from '@/components/SideBar'
import Weather from '@/components/Weather'
import Xinxi from '@/components/Xinxi'
import SidePicture from '@/components/SidePicture'
import Liuyan from '@/components/Liuyan'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/login",
      component:Login
    },
    {
      path: "/index/type=:type&page=:page",
      name: "Index",
      components: {
        default:Advertisement,
        left: Index,
        right: Weather
      }
    },
    {
      path: "/picture/type=3&page=1",
      name: "Picture",
      components: {
        left: Picture,
        right: SidePicture
      }
    },
    {
      path: "/recommend",
      name: "Recommend",
      components: {
        default: Advertisement,
        left: Recommend,
        right: SideBar
      }
    },
    {
      path: "/video/type=29&page=1",
      name: "ourVideo",
      components: {
        left: Video,
        right: Xinxi
      }
    },
    {
      path: "/wenzi/type=:type&page=:page",
      name: "Wenzi",
      components: {
        left: Wenzi,
        right: Liuyan
      }
    },
    {
      path: "/",
      redirect: "/index/type=1&page=1"
    }
  ]
});
