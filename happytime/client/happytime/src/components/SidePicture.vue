<template>
    <div>
        <el-carousel indicator-position="outside">
            <el-carousel-item >
                <img src="./images/1.jpg" alt="" class="picimg">
            </el-carousel-item>
            <el-carousel-item >
                <img src="./images/2.jpg" alt="" class="picimg">
            </el-carousel-item>
            <el-carousel-item >
                <img src="./images/3.jpg" alt="" class="picimg">
            </el-carousel-item>
            <el-carousel-item >
                <img src="./images/4.jpg" alt="" class="picimg">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lscoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
