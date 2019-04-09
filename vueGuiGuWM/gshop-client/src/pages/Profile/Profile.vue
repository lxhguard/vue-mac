<template>
  <section class="profile">
    <HeaderTop title="我的"></HeaderTop>
    <section class="profile-number">
      <router-link to="/login">
        <div class="profile_image">
          <img src="./image/aaa.png" alt="">
        </div>
        <div class="user-info">
          <p>登录/注册</p>
          <p>暂无绑定手机号</p>
        </div>
        <span class="arrow">
          <img src="./image/arrow.png" alt="">
        </span>
      </router-link>
    </section>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

export default {
  name: 'Profile',
  components:{
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.profile
  width 100%
  overflow hidden
  .profile-number
    margin-top 50px
    .profile_image
      float left
      margin-left 10px
      img 
        width 60px
    .user-info
      margin-left 40px
      float left
    .arrow
      float right
      img 
        width 60px
</style>
