<template>
  <div class="advertisement">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i>前端学习路线</span>
          <img src="../../static/timg.jpeg" alt="" style="width:100%;height:400px;">
          <el-steps :active="active" finish-status="success">
            <el-step title="html"></el-step>
            <el-step title="css"></el-step>
            <el-step title="css 3.0"></el-step>
            <el-step title="javascript"></el-step>
            <el-step title="vue"></el-step>
            <el-step title="node.js"></el-step>
            <el-step title="html 5.0"></el-step>
          </el-steps>
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </el-tab-pane>
      <el-tab-pane label="前端大佬">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Brendan Eich(布兰登·艾克)" name="1">
            <div>javaScript创始人
美国程序员与企业家，JavaScript主要创造者与架构师，曾任Mozilla公司的首席技术官，并曾短暂担任首席执行官
</div>
          </el-collapse-item>
          <el-collapse-item title="Douglas Crockford(道格拉斯·克罗克福特)" name="2">
            <div>是美国程序员和企业家，知名于对网页编程语言JavaScript推进和改良；
且为轻量级数据交换格式“JSON”的创建者。
他还是众多JavaScript语言开发工具的创造者，例如JSLint和JSMin。
近段时间，他在PayPal担任JavaScript语言高级顾问，当然他也是JavaScript、JSON以及web技术的布道者，在这些方面出版发行了很多知名的书籍及演讲。
</div>
          </el-collapse-item>
          <el-collapse-item title="廖雪峰" name="3">
            <div>全栈工程师，十年软件开发经验，精通Java/Python/Ruby/Scheme/Objective C等技术；技术作家，著有《Spring 2.0核心技术与最佳实践》一书，有多个开源项目托管在GitHub</div>
          </el-collapse-item>
          <el-collapse-item title="蒋长浩博士" name="4">
            <div>获清华大学计算机本硕学位、伊利诺伊大学(UIUC)博士学位，在卡耐基梅隆大学(CMU)、谷歌公司从事过“普适计算~大规模计算”的优化研究。在Facebook任研究科学家，他创造BIGPIPE，使大型网站访速翻1倍，举世关注。</div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="程序员">
        <br>
        <el-alert
          title="程序员是这个世界上最可爱的男朋友，不接受任何反驳"
          type="success"
          show-icon
          center>
        </el-alert>
        <br>
        <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item >
            <img src="../../static/1.jpeg" alt="" style="height:300px;width:100%;">
        </el-carousel-item>
        <el-carousel-item >
            <img src="../../static/2.jpeg" alt="" style="height:300px;width:100%;">
        </el-carousel-item>
        <el-carousel-item >
            <img src="../../static/3.jpeg" alt="" style="height:300px;width:100%;">
        </el-carousel-item>
        <el-carousel-item >
            <img src="../../static/4.jpeg" alt="" style="height:300px;width:100%;">
        </el-carousel-item>
        <el-carousel-item >
            <img src="../../static/5.jpeg" alt="" style="height:300px;width:100%;">
        </el-carousel-item>
        <el-carousel-item >
            <img src="../../static/6.jpeg" alt="" style="height:300px;width:100%;">
        </el-carousel-item>
      </el-carousel>
        <el-alert
          title="找男朋友就找程序员"
          type="success"
          show-icon
          center>
        </el-alert>
      <br>
      </el-tab-pane>
      <el-tab-pane label="asp.net">通过这门课程，我们可以把前端变后台，后台变前端</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
export default {
  name: 'advertisement',
  data() {
      return {
        active: 0,
        activeNames: ['1']
      };
    },

    methods: {
      next() {
        if (this.active++ > 6) this.active = 0;
      }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
