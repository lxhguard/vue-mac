<template>
  <section class="loginContainer">
      <div class="loginInner">
        <a href="javascript:;" class="go_back" @click="$router.back()"> 
            <img src="./images/arrow.png" alt="">
        </a>
        <br><br>
        <div class="login_header">
            <h2 class="login_logo">硅谷外卖</h2>
            <div class="login_header_title">
                <a href="javascript:;" class="on">短信登录</a>
                <a href="javascript:;">密码登录</a>
            </div>
        </div>
        <div class="loginContent">
            <form action="">
                <div class="on">
                    <section class="login_message">
                        <input type="tel" maxlength="11" placeholder="手机号">
                        <button disabled="disabled" class="get_verification">获取验证码</button>
                    </section>
                    <section class="login_verification">
                        <input type="tel" maxlength="8" placeholder="验证码">
                    </section>
                </div>
            </form>
        </div>
      </div>
  </section>
</template>

<script>

export default {
  name: 'Login',

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.go_back
    img 
        width 40px
</style>
