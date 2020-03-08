<template>
 <div id="app">
   <ul id="nav">
     <li>
       <router-link to="/home">首页</router-link>
     </li>
     <li>
       <router-link :to="{name:'profile'}">个人中心</router-link>
     </li>
     <li>
       <router-link :to="{name:'user'}">用户</router-link>
     </li>
     <li>
       <router-link :to="{name:'login'}">登录</router-link>
     </li>
   </ul>
   <div id="content">
    <router-view></router-view>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>
#nav li{
  float: left;
  margin:20px;
}
#content{
  position: absolute;
  top:100px;
  left: 100px;
}


 
</style>
