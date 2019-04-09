<template>
    <div>
        想要吃的水果
        <ul>
            <li v-for="(x,index) in list" :key="index">
                {{x.name}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name: 'home',
        data(){
            return {
                list:[
                    // {name: '苹果'},
                    // {name: '香蕉'},
                    // {name: '梨子'}
                ]
            }
        },
        mounted:function(){
            var _this = this;
            this.$http.get('http://localhost:3030/getList.json').then(function(result){
                if(result.body.code == 0){
                    _this.list = result.body.list;
                }
            });
        }

    }
</script>