<template>
    <div class="liuyan">
        <el-alert
            title="留言板"
            :closable="false"
            type="info"
            center>
        </el-alert>
        <el-alert
            v-for="(info,index) in informations"
            :key="index"
            title="留言人 --- 留言"
            type="success"
            :closable="false">
            {{info.name}} --- {{info.content}}
        </el-alert>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'liuyan',
    data:function(){
      return {
        informations:''
      }
  },
  methods:{
      getData(){
          axios({
              url: `../../static/liuyan.json`, 
              method: 'get'
          }).then((response)=>{
                this.informations = response.data;
          }
          ).catch(
              (error)=>{
                  console.log(error);
                  alert('留言板页面错误!!!');
              }
          )
      }
    },
    beforeMount(){
        this.getData();
	},

}
</script>


<style scoped>

</style>
