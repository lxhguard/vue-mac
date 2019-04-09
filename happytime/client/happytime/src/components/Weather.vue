<template>
  <div class="weather">
    <!-- 内容框 -->
    <div class="content">
      <!-- 登录用户 -->
      <div class="rightBox" id="loginBox" style="display:none;">
        <div class="title"><span><strong>登录</strong></span></div>
        <div class="line"><span class="colDark">用户名:</span><input name="username" type="text"></div>
        <div class="line"><span class="colDark">密&nbsp;&nbsp;&nbsp;码:</span><input name="password" type="password">
        </div>
        <div class="line"><span class="colDark"></span><button>登录</button></div>
        <p class="textRight">还没注册?<a href="#" class="colMint">马上注册</a></p>
        <p class="colWarning textCenter"></p>
      </div>
      <!-- 注册用户 -->
      <div class="rightBox" id="registerBox">
          <div class="title"><span><strong>注册</strong></span></div>
          <div class="line"><span class="colDark">用户名:</span><input type="text" name="username"></div>
          <div class="line"><span class="colDark">密&nbsp;&nbsp;&nbsp;码:</span><input type="password" name="password">
          </div>
          <div class="line"><span class="colDark">确&nbsp;&nbsp;&nbsp;认:</span><input type="password" name="repassword">
          </div>
          <div class="line"><span class="colDark"></span><button>注册</button></div>
          <p class="textRight">已有账号?<a href="#" class="colMint">马上登录</a></p>
          <p class="colWarning textCenter"></p>
      </div>
      <!-- 登录成功 -->

    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'weather',
  data(){
    return {
      weatherInfo:'',
      fullscreenLoading: false
    }
  },
  methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  
  // beforeCreate:function(){
  //   axios({
  //       url: ` http://api.avatardata.cn/Weather/Query?key=00000&cityname=西安`, //ES6
  //       method: 'get'
  //     }).then((response)=>{
  //         this.weatherInfo=response.data;
  //         // this.loading=false;
  //       }).catch(
  //         (error)=>{
  //             alert('error');
  //         });
  //   }
}
$(function(){

    var loginBox = $('#loginBox');
    var registerBox = $("#registerBox");
    var userInfo = $("#userInfo");

    //切换到注册页面
   loginBox.find('a').on('click', function(){
        registerBox.show();
       loginBox.hide();
    });

    //切换到登录面板
    registerBox.find('a').on('click', function () {
       loginBox.show();
        registerBox.hide();
    });

    //注册
    registerBox.find('button').on('click', function(){
        //通过ajax提交请求
        $.ajax({
          type: "post",
          url: "http://localhost:3030/users/register",
          data: {
            username: registerBox.find('[name="username"]').val(),
            password: registerBox.find('[name="password"]').val(),
            repassword: registerBox.find('[name="repassword"]').val(),
          },
          dataType: "json",
          success: function(result) {
            // console.log(result);
            registerBox.find('.colWarning').html(result.message);
            if(!result.code){
                //注册成功
                setTimeout(() => {
                   loginBox.show();
                    registerBox.hide();
                }, 1000);
            }
          }
        });
    });

    //登录
   loginBox.find('button').on('click', function(){
        //通过ajax提交请求
        $.ajax({
            type:'post',
            url:'http://localhost:3030/users/login',
            data:{
                username: loginBox.find('[name="username"]').val(),
                password: loginBox.find('[name="password"]').val()
            },
            dataType:'json',
            success:function(result){
               loginBox.find(".colWarning").html(result.message);

                if (!result.code) {
                    //登录成功
                    setTimeout(() => {
                       loginBox.hide();
                        userInfo.show();

                        //显示登录用户的信息
                        userInfo.find('.username').html(result.userInfo.username);
                        userInfo.find('.info').html('你好，欢迎光临我的博客！')
                    }, 1000);
                }
            }
        })
    })

    //退出
    $("#logout").on('click',function(){
        $.ajax({
            url:'/api/user/logout',
            success:function(result){
                if(!result.code){
                    window.location.reload();
                }
            }
        })
    })

})
</script>

<style scoped>
.content{
  width: 200px;
  margin: 0 auto;
  padding-top:20px;
  padding-bottom:20px;
}
.weather{
    border-radius: 125px;
    background-color: #fffbf0;
}
.title{
  text-align: center;
}
</style>
