<template>
    <div class="xinxi">
        <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="网站开发者:lxhguard" name="1">
            <div>想查看源代码请点击下方呀</div>
            <div>
                <el-tag type="success"><a href="https://github.com/lxhguard">这里</a></el-tag>
            </div>
        </el-collapse-item>
        <el-collapse-item title="站主的[ 鸡汤文 ]" name="2">
            <div>
                <el-tag type="warning">
                    流星，因为短暂而美丽，划过黑寂的夜空，释放出那一闪而逝的光芒，
                </el-tag>
                <el-tag type="warning">
                    虽然微弱，但却没有人能无视它的存在。人生如同流星，充满了精彩与传奇，
                </el-tag>
                <el-tag type="warning">
                    如同一支美丽的传说，究竟是否会象流星那样短暂，别人决定不了，
                </el-tag>
                <el-tag type="warning">
                    上天也决定不了，只有自己来掌握。如果愿意，流星也可以变成永恆。
                </el-tag>
            </div>
        </el-collapse-item>
        <el-collapse-item title="占卜 " name="3">
            <div>
                <el-button :plain="true" @click="open5">帅气</el-button>
                <el-button :plain="true" @click="open6">漂亮</el-button>
                <el-button :plain="true" @click="open7">渣男</el-button>
                <el-button :plain="true" @click="open8">萌萌</el-button>
            </div>
        </el-collapse-item>
        <el-collapse-item title="信仰 belief" name="4">
            <div>我相信，世界可以改变，人生可以重来，命运就在自己手中，我命由我不由天。</div>
        </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      open5() {
        this.$message({
          showClose: true,
          message: '点开的人太自恋了叭'
        });
      },

      open6() {
        this.$message({
          showClose: true,
          message: '哇塞小仙女，你实至名归的好看',
          type: 'success'
        });
      },

      open7() {
        this.$message({
          showClose: true,
          message: '渣男锡纸烫，今天你锡纸烫了吗？',
          type: 'warning'
        });
      },

      open8() {
        this.$message({
          showClose: true,
          message: '错了哦，你不萌，最多是蠢哈哈哈哈',
          type: 'error'
        });
      }
    }
  }
</script>


<style scoped>
.xinxi{
    position: fixed;
    top:100px;
    right: 50px;
}
a{
    text-decoration: none;
    color: black;
}
</style>
