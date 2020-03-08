import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import User from './User'

Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/home'
        },{
            path:'/home',
            name:'home',
            component:Home    
        },{
            path:'/login',
            name:'login',
            component:Login    
        },{
            path:'/profile',
            name:'profile',
            component:Profile    
        },{
            path:'/user/:id',
            name:'user',
            component:User
        }
    ]
})