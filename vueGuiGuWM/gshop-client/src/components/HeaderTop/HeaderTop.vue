<template>
    <header class="msite_header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </header>
</template>

<script>
export default {
    props:{
        title:String
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.msite_header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 30px
      padding 10px
      .header_search
        position absolute
        left 15px
        top 50px
        transform translateY(-50px) 
        width 10%
        height 50%
        img 
          position absolute
          left 10px
          top 20px
          width 25px
          font-size 25px
      .header_title
        position absolute 
        top 50%
        left 50%
        transform translate(-50%,-50%)
        color #fff
        font-size 1.2em
        span 
          line-height 1.5
          width 150px
          max-width 150px
        .ellipsis
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 25px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
</style>

