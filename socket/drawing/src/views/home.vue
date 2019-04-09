<template>
  <div class="home">
      <label for="user">用户名:</label> 
      <input type="text" id=user name="user" v-model="userName" />
      <input type="submit" id="sbutton" @click="onSubmit" value="确定" /><br /> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import io from "socket.io-client";

@Component({
  components:
  {
    
  }
})

export default class Home extends Vue {

  /**
   * 用户名。
   * @protected
   * @type {name}
   */
  protected userName: string = "";
  
  /**
   * 确定用户名跳转。
   * @protected
   * @type {name}
   */
  protected onSubmit(): void
  {
    if(this.userName)
    {
      this.$router.push({
        name: "draw-view",
        query:
        {
          userName: this.userName
        }
      });
    }
    else
    {
      alert("请输入用户名");
    }
      
  }

}
</script>
<style lang="less" scoped>
  label
  {
    float: left;
    width: 80px;
    line-height:25px;
  } 
  input{
    width: 180px;
    border:1px solid #808080;
  } 
  #sbutton{
    margin-left: 80px;
    margin-top: 5px;
    width:80px;
  } 
</style>

