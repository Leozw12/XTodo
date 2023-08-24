import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from "../views/list"
import Add from "../views/add"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/list',
            name: 'list',
            component: List,
            alias: "/"
        },
        {
            path: '/add',
            name: 'home',
            component: Add
        }
    ]
})