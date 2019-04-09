<template>
  <section class="msite">
    <!-- 首页头部 经过HeaderTop之后可以省略-->
    <!-- <header class="msite_header">
      <span class="header_search">
        <img src="./images/nav/sou-suo.png" alt="">
      </span>
      <span class="header_title">
        <span class="header_title_text ellipsis">陕西省西安市长安区</span>
      </span>
      <span class="header_login">
        <span class="header_login_text">登录 | 注册</span>
      </span>
    </header> -->

    <HeaderTop title="陕西省西安市">
      <span class="header_search" slot="left">
        <img src="./images/nav/sou-suo.png" alt="">
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录 | 注册</span>
      </span>
    </HeaderTop>

    <!-- 首页导航 -->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.png" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.png" alt="">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.png" alt="">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.png" alt="">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.png" alt="">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.png" alt="">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.png" alt="">
              </div>
              <span>预定早餐</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.png" alt="">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.png" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.png" alt="">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.png" alt="">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.png" alt="">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.png" alt="">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.png" alt="">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.png" alt="">
              </div>
              <span>预定早餐</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.png" alt="">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>

    <!-- 首页附近商家 -->
    <div class="msite_shop_list">
      <div class="shop_header">
        <img src="./images/shop/list.png" alt="">
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'


export default {
  name: 'Msite',
  mounted(){
    //创建一个Swiper实例对象，来实现轮播
     new Swiper ('.swiper-container', {
        loop:true,//可以循环轮播
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
     });
  },
  components:{
    HeaderTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 180px
      background #ffffff
      .swiper-container
        width 100%
        padding  10px 0
        .swiper-wrapper
          .swiper-slide
            display flex
            flex-flow row wrap
            a
              text-decoration none
              display flex
              flex 1
              text-align center
              flex-direction column
              align-items center
              margin 5px
              .food_container
                width 70px 
                img 
                  width 40px
    .msite_shop_list
      .shop_header
        img 
          width 20px


    
    


</style>
