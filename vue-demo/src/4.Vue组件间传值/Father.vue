<template>
 <div>
    我是父组件<br>
    
    <br>
    我儿子给我的钱:{{money}}
    <br>
    --------------------------------------------
    <br>
    <br>
    <son title1="abc" :title="now" @addMoney="addMoney"/>
 </div>
</template>

<script>
import Son from './Son'
 export default {
   computed:{
       now(){
           return Date.now()
       }
   },
   data () {
     return {
        money:0
     }
   },
   methods:{
       addMoney(data){
           this.money = data
       }
   },
   components: {
        Son
   }
 }
</script>

<style>

 
</style>
