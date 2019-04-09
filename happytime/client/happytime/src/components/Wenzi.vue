<template>
  <div class="wenzi">

        <div v-if="loading" class="loading">
            <p>loading...</p>
        </div>

        <div class="zhengwen" v-else>
            <div class="item" v-for="(Onetext,index) in texts" :key="index">
                <div class="author_xinxi">
                    <img class="author_touxiang" :src="Onetext.profile_image" alt="">
                    <div class="author_nav">
                        <span>{{Onetext.name}}</span>
                        <span>{{Onetext.created_at}}</span>
                    </div>
                    <div class="author_theme">
                        主题: <span>{{Onetext.theme_name}}</span>
                    </div>
                    <br><br><br>
                </div>     
                <div class="content_text">
                    {{Onetext.text}}
                </div>
                <div class="comments">
                    <span class="comment_one">
                    <img src="./images/dianzan.png" alt="">
                    <strong>{{Onetext.love}}</strong>
                    </span>
                    <span class="comment_one">
                    <img src="./images/cai.png" alt="">
                    <strong>{{Onetext.hate}}</strong>
                    </span>
                    <span class="comment_one">
                    <img src="./images/fenxiang.png" alt="">
                    <strong>{{Onetext.repost}}</strong>
                    </span>
                    <span class="comment_one">
                    <img src="./images/pinglun.png" alt="">
                    <strong>{{Onetext.comment}}</strong>
                    </span>
                </div>
            </div>
            

            <div class="pageList">
                <el-alert  type="success" center show-icon :closable="false">
                    {{this.$route.params.page}} / 15
                </el-alert>       
                <br>    
                <ul>
                    <li v-for="(count,index) in 15" :key="index" @click="getData()" >
                        <router-link :to="{name:'Wenzi',params:{type:2,page:count}}">
                            {{count++}}
                        </router-link>
                    </li>
                </ul>
                
            </div>
        </div>
    

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'wenzi',
  data:function(){
      return {
          loading: true,
          count:1,
          texts:'',
      }
  },
  methods:{
      getData(){
          axios({
              url: `https://www.apiopen.top/satinApi?type=${this.$route.params.type}&page=${this.$route.params.page}`, //ES6
              method: 'get'
          }).then((response)=>{
                this.texts=response.data.data;
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
        axios.get('https://www.apiopen.top/satinApi?type=2&page=1')
      .then(response=>{
         this.texts=response.data.data;
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
  width:490px;
}
.author_nav span{
  display: flex;
  flex: 1;
}
.author_theme{
    height: 50px;
}
.author_theme span{
    color: darkgoldenrod;
}
.comments{
  display: flex;
  margin-top: 10px;
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
    margin-left: 15px;
    background-color: #f4f4f5;
    color: #606266;
}

</style>
