<template>
  <div class="footer_guide">
      <a href="javascript:;" class="guide_item" :class="{on: '/msite'=== $route.path}" @click="goTo('/msite')">
          <img src="./../../../static/img/gouwuche.png" alt="">
          <span>外卖</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/search'=== $route.path}" @click="goTo('/search')">
          <img src="./../../../static/img/waimai.png"  alt="">
          <span>搜索</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/order'=== $route.path}" @click="goTo('/order')">
          <img src="./../../../static/img/dingdan.png"  alt="">
          <span>订单</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/profile'=== $route.path}" @click="goTo('/profile')">
          <img src="./../../../static/img/me.png"  alt="">
          <span>我的</span>
      </a>
  </div>
</template>

<script>
export default {
  name: 'footerGuide',
  methods:{
      goTo(path){
          this.$router.replace(path);
      }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .footer_guide   //footer
        top-border-1px(#e4e4e4)
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 50px
        display flex
        .guide_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            &.on
                color #02a774
            span 
                font-size 12px
                margin-top 2px
                margin-bottom 2px
            img 
                width 35% 
</style>
