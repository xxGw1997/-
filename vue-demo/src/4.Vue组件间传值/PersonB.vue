<template>
 <div>
     我是组件B
     <br>
     我现在有{{money}}块钱
     <br>
     <button @click="toA">给A 3元</button>
 </div>
</template>

<script>
import bus from './bus.js'
 export default {
   data () {
     return {
         money:70,
         toAMoney:3
     }
   },
   methods:{
       toA(){
           bus.$emit('toA',this.toAMoney)
           alert(this.toAMoney)
       }
   },
   mounted(){
       bus.$on('toA',function(data){
           this.money=this.money + data
           //alert(this.money)
       })
   }
 }
</script>

<style>

 
</style>
