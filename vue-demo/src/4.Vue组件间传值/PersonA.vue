<template>
 <div>
     我是组件A
     <br>
     我现在有{{money}}块钱
     <br>
     B给我的钱{{data}}
     <br>
     <button @click="toB">给B 2元</button>
 </div>
</template>

<script>
import bus from './bus.js'
 export default {
   data () {
     return {
        money:50,
        toBMoney:2,
        data:0
     }
   },
   methods:{
       toB(){
           bus.$emit('toB',this.toBMoney)
       }
   },
   mounted(){
       let this_ = this
       
       bus.$on('toB',function(data){
           this_.data = data
           this_.money=this_.money + data
       })
   }
 }
</script>

<style>

 
</style>
