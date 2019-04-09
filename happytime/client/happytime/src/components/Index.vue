<template>
  <div class="index">
      
    <div v-if="loading" class="loading">
        <p>loading...</p>
    </div>

    <div class="item" v-for="(video,index) in videos" :key="index" v-else>
      <div class="author_xinxi">
          <img class="author_touxiang" :src="video.profile_image" alt="">
          <div class="author_nav">
            <span>{{video.name}}</span>
            <span>{{video.created_at}}</span>
          </div>
          <br><br><br>
      </div>
      
      <div class="content_text">
        {{video.text}}
      </div>

      <div class="content_img">
        <img :src="video.image1" alt="">
      </div>

      <div class="comments">
        <span class="comment_one">
          <img src="./images/dianzan.png" alt="">
          <strong>{{video.love}}</strong>
        </span>
        <span class="comment_one">
          <img src="./images/cai.png" alt="">
          <strong>{{video.hate}}</strong>
        </span>
        <span class="comment_one">
          <img src="./images/fenxiang.png" alt="">
          <strong>{{video.repost}}</strong>
        </span>
        <span class="comment_one">
          <img src="./images/pinglun.png" alt="">
          <strong>{{video.comment}}</strong>
        </span>
      </div>
      
    </div>

    <div class="pageList">
      <el-alert  type="success" center show-icon :closable="false">
        {{this.$route.params.page}} / 10
      </el-alert>
      <br>       
      <ul>
        <li v-for="(count,index) in 10" :key="index" @click="getData()" >
          <router-link :to="{name:'Index',params:{type:1,page:count}}">
            {{count++}}
          </router-link>
        </li>
      </ul>
    </div>
    <el-alert
      title="版权所有 网络1703 刘鑫海 "
      type="success"
      :closable="false"
      center>
      <br><br>
    </el-alert>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'index',
  data:function(){
      return {
        loading: true,
        count:1,
        videos:''
      }
  },
  methods:{
      getData(){
          axios({
              url: `https://www.apiopen.top/satinApi?type=${this.$route.params.type}&page=${this.$route.params.page}`, //ES6
              method: 'get'
          }).then((response)=>{
                this.videos=response.data.data;
                this.loading=false;
          }
          ).catch(
              (error)=>{
                  alert('error');
              }
          )
      }
    },
  beforeCreate:function(){
      axios.get('https://www.apiopen.top/satinApi?type=1&page=1')
      .then(response=>{
         this.videos=response.data.data;
         this.loading=false;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  border: 1px solid tan;
  border-bottom: 2px solid black;
  margin-bottom: 5%;
  padding: 10px;
  border-radius: 25px;
}
.author_touxiang{
  float: left;
  width:50px;
  height: 50px;
  border-radius:125px;
}
.author_nav{
  margin-top:5px;
  margin-left:20px;
  float: left;
  width:610px;
}
.author_nav span{
  display: flex;
  flex: 1;
}
.content_img{
  width: 200px;
  margin: 10px auto;
}
.content_img img{
  width: 250px;
}
.comments{
  display: flex;
  margin-bottom: 10px;
}
.comment_one{
    display: flex;
    flex:1;
    align-items:center;
    justify-content:center;
    font-size:14px;
    color:grey;
}
.comment_one img{
  width:20px;
}
.comment_one strong{
  margin-left: 10px;
}
.pageList{
    position: fixed;
    bottom: 0;
    right: 100px;
    text-align: center;
    margin-bottom: 100px;
}
.pageList ul,li,a{
    list-style: none;
    text-decoration: none;
    color: #606266;
}
.pageList li{
    float: left;
    width: 30px;
    text-align: center;
    padding-top: 4px;
    margin-left: 10px;
    background-color: #f4f4f5;
    color: #606266;
}
</style>
