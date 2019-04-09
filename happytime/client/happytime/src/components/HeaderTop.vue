<template>
    <div>
        <div class="headertop">
            <span class="tab-item" @click="GoTo('/index/type=1&page=1')" :class="{on: getInnerString($route.path,'/','/') === '/index/'}">
                <img src="./images/dongtai.png" alt="">
                <span>
                    动态
                </span>
            </span>
            <span class="tab-item" @click="GoTo('/recommend')" :class="{on: '/recommend' === $route.path}">
                <img src="./images/tuijian.png" alt="">
                <span>
                    推荐
                </span>
            </span>
            <span class="tab-item"  @click="GoTo('/wenzi/type=2&page=1')" :class="{on: getInnerString($route.path,'/','/') === '/wenzi/'}">
                    <img src="./images/wenzi.png" alt="">
                    <span>
                        文字
                    </span>
            </span>
            <span class="tab-item" @click="GoTo('/picture/type=3&page=1')" :class="{on: getInnerString($route.path,'/','/') === '/picture/'}">
                <img src="./images/tupian.png" alt="">
                <span>
                    图片
                </span>
            </span>
            <span class="tab-item" @click="GoTo('/video/type=29&page=1')" :class="{on: getInnerString($route.path,'/','/') === '/video/'}">
                <img src="./images/shipin.png" alt="">
                <span>
                    视频
                </span>
            </span>
        </div>
        <div class="zhanwei"></div>
    </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  methods:{
        GoTo(path){
            this.$router.replace(path);
        },
        getInnerString(source, prefix, postfix) {
            function encodeReg(source) {
                return String(source).replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
            }
            function get_object_first_attribute(data){
                for (var key in data)
                    return data[key];
            }
            var regexp = new RegExp(encodeReg(prefix) + '.+' + encodeReg(postfix), 'gi');
            var matches = String(source).match(regexp);
            var formatedMatches = get_object_first_attribute(matches);
            // console.log(formatedMatches);
            return formatedMatches;
        },
        
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headertop{
    width:100%;
    background-color: pink;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    z-index: 999;
}
.tab-item{
    display: flex;
    flex:1;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-size:14px;
    color: #fff;
}
.tab-item img{
    width:40px;
}
.on{
    background-color: aquamarine;
    color:black;
}
.zhanwei{
    width:100%;
    height: 60px;
}
</style>
