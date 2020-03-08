<template>
 <div>
     我是子组件<br>
     以下的数据是爹给的
     <br>
     静态值:{{title1}}
     <br>
     我爹给我的钱:{{money}}(当前时间)
     <br>
     <button @click="add">给我爹加钱</button>
 </div>
</template>

<script>
 export default {
   props:{
       title1:String,
       title:Number
   },
   data () {
     return {
         money:this.title
     }
   },
   methods:{
       add(){
        this.$emit('addMoney',this.money/2)
       }
   }
 }
</script>

<style>

 
</style>
